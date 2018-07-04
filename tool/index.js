var express = require("express");
var cors = require('cors');
var app = express();
var path = require("path");
var fs = require("fs");
const bodyParser = require("body-parser");
var url = require("url");
var validator = require("email-validator");
var useragent = require('useragent');
var cookieParser = require("cookie-parser");
var iplocation = require('iplocation');
var uniqid = require('uniqid');
var request = require('request');
var cre = require('./credential.js');
const requestIp = require('request-ip');
var mysql = require('mysql');
var Base64 = require("js-base64").Base64;
var device = require("express-device");
var port = process.env.PORT || 3000;

app.use(requestIp.mw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
useragent(true);
app.use(bodyParser.json());
app.use(cors());
app.use(device.capture({parseUserAgent:true}));
app.listen(port, function() {
  console.log("Server started on port 3000");
});

device.enableDeviceHelpers(app);
device.enableViewRouting(app);

app.use(express.static(path.join(__dirname, "public")));


var con = mysql.createConnection({
  host: cre.hostName,
  user: cre.dbUser,
  password: cre.bdPass,
  database: cre.dbName,
  dateStrings: true
});
con.connect(function(err) {
  if (err) console.log("Problem in connection to db!!!!");
  else console.log("Connected!");
});


app.get('/',function(req,res) {
  var p = Base64.decode(req.cookies.password);
  if (p == cre.password) {
    res.redirect("/querytool");
  } else {
    res.sendFile(path.join(__dirname, "public/login.html"));
  }
})

app.get('/querytool',function(req,res) {
  var p = Base64.decode(req.cookies.password);
  if (p == cre.password) {
    res.sendFile(path.join(__dirname, "public/query.html"));
  } else {
    res.redirect("/");
  }
})

app.get('/viewall',function(req,res) {
  var p = Base64.decode(req.cookies.password);
  if (p == cre.password) {
    res.sendFile(path.join(__dirname, "public/viewAll.html"));
  } else {
    res.redirect("/");
  }
})

app.get('/getalldata',function(req,res) {
  var sql = `select site_id, count(site_id) as view, visit_id, url, ip, browser, browser_version, datetime, resolution, os, referrer, device_type, device_name from datalog group by site_id order by view desc`;
    con.query(sql, function (err, result) {
      if (err){ console.log(err.sqlMessage); res.json({success: false}); }
      else res.json(result);
    });
})

app.get('/getdata',function(req,res) {
  var sql = `select site_id, isAdmin, visit_id, url, ip, browser, browser_version, datetime, resolution, os, referrer, Device_Type, Device_name, country from datalog natural join ipinfo order by datetime desc`;
    con.query(sql, function (err, result) {
      if (err){ console.log(err.sqlMessage); res.json({success: false}); }
      else res.json(result);
    });
})

app.get('/view', (req, res)=>{
  res.sendFile(path.join(__dirname, "public/view.html"));
})

app.post('/viewmore', function(req, res){
  var condip = (req.body.ip=='')?"1=1":"ip='"+req.body.ip+"'";
  var condstart = (req.body.start=='')?"1=1":"datetime>='"+req.body.start+"'";
  var condend = (req.body.end=='')?"1=1":"datetime<='"+req.body.end+"'";
  var v = req.body.v;
  var f = ['Frontend', 'Backend'];
  var sql = `select datalog.*, ipinfo.country from datalog natural join ipinfo where site_id='${req.body.siteid}' and ${condip} and ${condstart} and ${condend} and isAdmin='${f[v]}' order by datetime desc`;
  con.query(sql, function (err, result) {
    if (err){ console.log(err.sqlMessage); res.json({success: false}); }
    else {
      res.json(result);
    }
  });
})

app.post('/deleteentry', function(req, res){
  var sql = `delete from datalog where ip='${req.body.ip}' and site_id='${req.body.siteid}'`;
  con.query(sql, function(err){
    if(err){
      console.log(err.sqlMessage);
      res.json({success : false});
    }
    else res.json({success: true});
  });
})

app.post('/search', function(req, res){
  var condip = (req.body.ip=='')?"1=1":"ip='"+req.body.ip+"'";
  var condid = (req.body.siteid=='')?"1=1":"site_id='"+req.body.siteid+"'";
  var condstart = (req.body.start=='')?"1=1":"datetime>='"+req.body.start+"'";
  var condend = (req.body.end=='')?"1=1":"datetime<='"+req.body.end+"'";
  var sql = `select site_id, count(IF(isAdmin='Frontend',1,NULL)) as fview, count(IF(isAdmin='Backend',1,NULL)) as bview, visit_id, url, ip, browser, browser_version, datetime, resolution, os, referrer, device_type, device_name from datalog where ${condid} and ${condip} and ${condstart} and ${condend} group by site_id order by fview desc`;
  con.query(sql, function(err, result){
    if(err){
      console.log(err.sqlMessage);
      res.json({success : false});
    }
    else res.json(result);
  });
})

app.post('/fillipdata', function(req, res){
  var sql = `select * from ipinfo where ip='${req.body.ip}'`;
    con.query(sql, function (err, result) {
      if (err){
        console.log(err.sqlMessage);
        res.json({success: false, err: 'Error in runnig the query!!!'});
      }
      else{
          if(result.length==0){
            res.json({success: false, err: 'This IP is not present in ipdata table!!!'});
          }
          else{
            var last;
            var diff, curTime;
            sql = `select ipup from ipupdate`;
            con.query(sql, function (err, result1) {
              if (err){
                console.log(err.sqlMessage);
                res.json({success: false, err: 'Error in runnig the query!!!'});
              }
              else{
                last = result1[0].ipup;
                curTime = new Date();
                curTime = curTime.getTime();
                diff = curTime - last;
                  if(result[0].country==''){
                    if(diff>60000){
                      var ip = req.body.ip;
                      var country, timezone,isp,city,latitude,longitude,zip;
                      var url = `http://ip-api.com/json/${ip}`;
                      request.get({
                        url: url,
                        json: true,
                        headers: {'User-Agent': 'request'}
                      }, (error, ress, data) => {
                        if (error) {
                          console.log('Error:', error);
                          res.json({success: false, err: 'Problem in Geo Location API!!!'});
                        } else if (res.statusCode !== 200) {
                          console.log('Status:', res.statusCode);
                          res.json({success: false, err: 'No data Found for this IP!!!!'});
                        } else {
                          if(data.status=='fail'){
                            res.json({success: false, err: "Invalid IP "+data.query});
                          }
                          else{
                            country = data.country;
                              timezone = data.timezone;
                              isp = data.as;
                              city = data.city;
                              latitude = data.lat;
                              longitude = data.lon;
                              zip = data.zip;
                            var sql = `update ipinfo set country='${country}', timezone='${timezone}',isp='${isp}',city='${city}',latitude='${latitude}',longitude='${longitude}',zip='${zip}' where ip='${req.body.ip}'`;
                            con.query(sql, function (err) {
                              if (err){
                                console.log(err.sqlMessage);
                                res.json({success: false, err: 'Unable to update data in db!!!'});
                              }
                              else res.json({country: country, timezone: timezone, isp:isp,city: city,latitude: latitude,longitude: longitude,zip: zip});
                            });
                          }
                        }
                      });
                    }
                    else{
                      res.json({success: false, err: "Running IP API out of Quota!!!"});
                    }
                  }
                  else{
                    res.json({country: result[0].country, timezone: result[0].timezone,isp: result[0].isp,city:result[0].city, latitude: result[0].latitude,longitude: result[0].longitude,zip: result[0].zip});
                  }
              }
            })
          }
      }
    });
})

app.post('/getallip',function(req,res) {
  var condip = (req.body.ip=='')?"1=1":"ip='"+req.body.ip+"'";
  var condstart = (req.body.start=='')?"1=1":"datetime>='"+req.body.start+"'";
  var condend = (req.body.end=='')?"1=1":"datetime<='"+req.body.end+"'";
  var sql = `select ip, count(IF(isAdmin='Frontend',1,NULL)) as fview, count(IF(isAdmin='Backend',1,NULL)) as bview from datalog where site_id='${req.body.siteid}' and ${condip} and ${condstart} and ${condend} group by ip order by fview desc`;
    con.query(sql, function (err, result) {
      if (err){ console.log(err.sqlMessage); res.json({success: false}); }
      else res.json(result);
    });
})

app.post("/insertlog", function(req, res, next) {
  var tname = ['datalog', 'botdata'];
  var bottname = ['ipinfo', 'botipinfo'];
  var botInt = req.body.isBot;
  var ver = req.device.parser.useragent.major+"."+req.device.parser.useragent.minor+"."+req.device.parser.useragent.patch;
  var agent = useragent.parse(req.headers['user-agent']);
  //var isAdmin = req.body.isAdmin;
  const IP = req.clientIp;
  var sql = `insert into ${tname[botInt]} (isAdmin, url, ip, browser, browser_version, datetime, resolution, os, referrer, site_id, Device_Type, Device_name) values('${req.body.isAdmin}', '${req.body.url}','${IP}','${req.device.parser.useragent.family}','${ver}','${req.body.datetime}','${req.body.ress}','${agent.os.toString()}','${req.body.ref}','${req.body.S_id}','${req.device.type}','${req.device.name}')`;
    con.query(sql, function (err, result) {
      if (err) console.log(err.sqlMessage);
      else console.log("Inserted into datalog!!");
    });
    sql = `insert into ${bottname[botInt]} (ip, country, timezone,isp,city,latitude,longitude,zip) values('${IP}', '', '','','','','','')`;
    con.query(sql, function (err, result) {
      if (err) console.log(err.sqlMessage);
      else console.log("Inserted in ip info!!");
    });
  res.send('abc');
});

app.post("/login", (req, res)=>{
  if (req.body.pass == cre.password && req.body.usern == cre.username) {
    var Encoded = Base64.encode(req.body.pass);
    res.cookie("password", Encoded);
    res.json({ reply: "success", redirect: "/querytool" });
  } else {
    res.json({ reply: "Wrong username or password!!!" });
  }
})

app.post("/logout", function(req, res, next) {
  res.clearCookie("password");
  res.json({ reply: "successfully logout", redirect:"/" });
});

app.post('/getgraphdata', (req, res)=>{
  var v = req.body.v;
  var f = ['Frontend', 'Backend'];
  var sql = `SELECT cast(datetime as date) as date, count(site_id) as view FROM datalog where site_id="${req.body.siteid}" and isAdmin='${f[v]}' group by date order by date desc limit 20`;
    con.query(sql, function (err, result) {
      if (err) {
        res.json({success: false, err: 'Problem in db query!!!'});
      }
      else {
        res.send(result);
      }
    });
})

app.post('/updateallips', (req, res)=>{
  var sql = `select * from ipinfo where country='' limit 145`;
  con.query(sql, function (err, result) {
    if (err) {
      res.json({success: false, err: 'Problem in db query!!!'});
    }
    else {
      if(result.length==0){
        res.json({success: false, err: "All ips are uptodate!!!"});
      }
      else{
        var country, timezone,isp,city,latitude,longitude,zip,url;
        var last;
        var diff, curTime;
        sql = `select ipup from ipupdate`;
        con.query(sql, function (err, result1) {
          if (err){
            console.log(err.sqlMessage);
            res.json({success: false, err: 'Unable to update data in db!!!'});
          }
          else{
            console.log(result1);
            last = result1[0].ipup;
            curTime = new Date();
            curTime = curTime.getTime();
            diff = curTime - last;
            console.log(typeof(diff), typeof(curTime), typeof(last));
            console.log("1. ",diff, "2. ",curTime, "3. ", last);
            if(diff>60000){
              console.log('inside diff');
              result.forEach(function(listItem, index){
                url = `http://ip-api.com/json/${result[index].ip}`;
                    request.get({
                      url: url,
                      json: true,
                      headers: {'User-Agent': 'request'}
                    }, (error, ress, data) => {
                      if (error) {
                        console.log('Error:', error);
                        res.json({success: false, err: 'Problem in Geo Location API!!!'});
                      } else if (res.statusCode !== 200) {
                        console.log('Status:', res.statusCode);
                      } else {
                        if(data.status=='fail'){
                          console.log('Invalid IP!!');
                        }
                        else{
                            country = data.country;
                            timezone = data.timezone;
                            isp = data.as;
                            city = data.city;
                            latitude = data.lat;
                            longitude = data.lon;
                            zip = data.zip;
                            sql = `update ipinfo set country='${country}', timezone='${timezone}',isp='${isp}',city='${city}',latitude='${latitude}',longitude='${longitude}',zip='${zip}' where ip='${result[index].ip}'`;
                            con.query(sql, function (err) {
                            if (err){
                              console.log(err.sqlMessage);
                              res.json({success: false, err: 'Unable to update data in db!!!'});
                            }
                            else console.log('Updated.')
                          });
                        }
                      }
                    });
              })
              curTime = new Date();
              last = curTime.getTime();
              console.log("3. "+last);
              sql = `update ipupdate set ipup=${last}`
              con.query(sql, function (err) {
                if (err){
                  console.log(err.sqlMessage);
                  res.json({success: false, err: 'Unable to update data in db!!!'});
                }
                //else console.log('Updated.')
              });
              res.json({success: true, msg: "IP Data Updated successfully"});
            }
            else{
              res.json({success: false, err: "Running IP API out of Quota!!!"});
            }
          }
        });
      }
    }
  });
})