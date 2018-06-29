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

app.use(requestIp.mw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
useragent(true);
app.use(bodyParser.json());
app.use(cors());
var device = require("express-device");
app.use(device.capture({parseUserAgent:true}));
var port = process.env.PORT || 3000;
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
  //res.send("hello frands...");
  res.redirect("/querytool");
})

app.get('/querytool',function(req,res) {
  res.sendFile(path.join(__dirname, "public/query.html"));
})

app.get('/viewall',function(req,res) {
  var name = 'hello';
  res.sendFile(path.join(__dirname, "public/viewAll.html"));
})

app.get('/getalldata',function(req,res) {
  var sql = `select site_id, count(site_id) as view, visit_id, url, ip, browser, browser_version, date, resolution, os, referrer, device_type, time, device_name from datalog group by site_id order by view desc`;
    con.query(sql, function (err, result) {
      if (err){ console.log(err.sqlMessage); res.json({success: false}); }
      else res.json(result);
    });
})

app.post('/viewmore', function(req, res){
  var sql = `select * from datalog where site_id='${req.body.siteid}'`;
  con.query(sql, function (err, result) {
    if (err){ console.log(err.sqlMessage); res.json({success: false}); }
    else {
      //console.log(result[0].date.toSqlString);
      //console.log(result[0].date);
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
  var condip = (req.body.ip=='')?" where":" where ip='"+req.body.ip+"' and";
  var condid = (req.body.siteid=='')?" 1=1":" site_id='"+req.body.siteid+"'";
  var sdate = req.body.sdate;
  var edate = req.body.edate;
  var sql = "select * from datalog"+condip+condid+" and date between '"+sdate+"' and '"+edate+"'";
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
            res.json({success: false, err: 'This IP is not present!!!'});
          }
          else{
            if(result[0].country==''||result[0].timezone==''){
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
                  res.json({success: false, err: 'No data Found!!!!'});
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
                      //console.log(data);
                      
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
              res.json({country: result[0].country, timezone: result[0].timezone,isp: result[0].isp,city:result[0].city, latitude: result[0].latitude,longitude: result[0].longitude,zip: result[0].zip});
            }
          }
      }
    });
})

app.post('/getallip',function(req,res) {
  var sql = `select ip, count(ip) as view, visit_id, url, site_id, browser, browser_version, date, resolution, os, referrer, device_type, time, device_name from datalog where site_id='${req.body.siteid}' group by ip order by view desc`;
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
  const IP = req.clientIp;
  //console.log(convert(date,req.body.date,102));
  var sql = `insert into ${tname[botInt]} (url, ip, browser, browser_version, date, resolution, os, referrer, site_id, Device_Type, time, Device_name) values('${req.body.url}','${IP}','${req.device.parser.useragent.family}','${ver}',STR_TO_DATE('${req.body.date}', '%m/%d/%Y'),'${req.body.ress}','${agent.os.toString()}','${req.body.ref}','${req.body.S_id}','${req.device.type}','${req.body.time}','${req.device.name}')`;
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