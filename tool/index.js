var express = require("express");
var cors = require('cors');
var app = express();
var path = require("path");
var fs = require("fs");
const bodyParser = require("body-parser");
var url = require("url");
var validator = require("email-validator");
var useragent = require('useragent');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var cookieParser = require("cookie-parser");
var iplocation = require('iplocation');
app.use(cookieParser());
var uniqid = require('uniqid');

useragent(true);


app.use(cors());
var device = require("express-device");
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server started on port 3000");
});
//app.use(express.bodyParser());
app.use(device.capture({parseUserAgent:true}));

device.enableDeviceHelpers(app);
device.enableViewRouting(app);

app.use(express.static(path.join(__dirname, "public")));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webtracker"
});

con.connect(function(err) {
  if (err) console.log(err);
  else console.log("Connected!");
});

app.get('/',function(req,res) {
  res.send("hello");
})

app.get('/querytool',function(req,res) {
  res.sendFile(path.join(__dirname, "public/query.html"));
})

app.get('/viewall',function(req,res) {
  var name = 'hello';
  res.sendFile(path.join(__dirname, "public/viewAll.html"));
})

app.post('/viewmore', function(req, res){
  var sql = `select * from datalog where site_id='${req.body.siteid}'`;
  con.query(sql, function (err, result) {
    if (err){ console.log(err.sqlMessage); res.json({success: false}); }
    else res.json(result);
  });
})

app.get('/getalldata',function(req,res) {
  var sql = `select site_id, count(site_id) as view, visit_id, url, ip, browser, browser_version, date, resolution, os, referrer, device_type, time, device_name from datalog group by site_id order by view desc`;
    con.query(sql, function (err, result) {
      if (err){ console.log(err.sqlMessage); res.json({success: false}); }
      else res.json(result);
    });
})

app.post('/deleteentry', function(req, res){
  //console.log(req.body.ip, req.body.siteid);
  var sql = `delete from datalog where ip='${req.body.ip}' and site_id='${req.body.siteid}'`;
  con.query(sql, function(err){
    if(err){
      console.log(err.sqlMessage);
      res.json({success : false});
    }
    else res.json({success: true});
  });
})

app.post('/getallip',function(req,res) {
  var sql = `select ip, count(ip) as view, visit_id, url, site_id, browser, browser_version, date, resolution, os, referrer, device_type, time, device_name from datalog where site_id='${req.body.siteid}' group by ip order by view desc`;
    con.query(sql, function (err, result) {
      if (err){ console.log(err.sqlMessage); res.json({success: false}); }
      else res.json(result);
    });
})

app.post("/test", function(req, res, next) {
  //console.log(req.body);
  var tname = ['datalog', 'botdata'];
  var bottname = ['ipinfo', 'botipinfo'];
  var botInt = req.body.isBot;
  var ver = req.device.parser.useragent.major+"."+req.device.parser.useragent.minor+"."+req.device.parser.useragent.patch;
  var agent = useragent.parse(req.headers['user-agent']);
  var IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //var IP = '157.38.234.190';
  var timezone;
  var country;
  iplocation('157.38.234.190', function (error, res) {
    timezone = res.timezone;
    country = res.country;
  });
  var sql = `insert into ${tname[botInt]} values('','${req.body.url}','${IP}','${req.device.parser.useragent.family}','${ver}','${req.body.date}','${req.body.res}','${agent.os.toString()}','${req.body.ref}','${req.body.S_id}','${req.device.type}','${req.body.time}','${req.device.name}')`;
    con.query(sql, function (err, result) {
      if (err) console.log(err.sqlMessage);
      else console.log("Inserted into datalog!!");
    });
    sql = `insert into ${bottname[botInt]} values('${IP}','','')`;
    con.query(sql, function (err, result) {
      if (err) console.log(err.sqlMessage);
      else console.log("Inserted in ip info!!");
    });
  res.send('abc');
});






// app.get('/insert/:root',function(req,res) {
//   var id = uniqid('BB-');
//   console.log(id);
//   var sql = `insert into siteid values('${id}','${req.params.root}')`;
//   con.query(sql, function (err, result) {
//     if (err) console.log(err.sqlMessage);
//     else console.log("Inserted!!");
//   });
//   console.log(uniqid('BB-'));
//   res.send("inserted!!");
// })

// app.get('/hello',function(req,res) {
//   var a = req.device.parser.useragent.source;
//   var b = req.device.name;
//   var c = req.device.type;
//   //console.log(a);
//   console.log(req.device);
  
//   res.send(req.ip+"<br><br>"+a+"<br><br><b>Device Name: </b>"+b+"<br><br><b>Device Type: </b>"+c);
//   //res.send(req);
// });



/*app.get("/", function(req, res) {
  var p = Base64.decode(req.cookies.password);
  if (p == cre.password) {
    res.redirect("/dashboard");
  } else {
    res.sendFile(path.join(__dirname, "public/login.html"));
  }
});

app.get("/test", function(req, res) {
  console.log(req.connection.remoteAddress);
});

app.get("/dashboard", function(req, res) {
  var p = Base64.decode(req.cookies.password);
  if (p == cre.password) {
    res.sendFile(path.join(__dirname, "public/main.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/getlinks", function(req, res) {
  fs.readFile(__dirname + "/" + "public/links.json", "utf8", function(
    err,
    data
  ) {
    res.end(data);
  });
});

app.get("/getemails", function(req, res) {
  fs.readFile(__dirname + "/" + "public/email.json", "utf8", function(
    err,
    data
  ) {
    res.end(data);
  });
});

app.post("/appendlink", function(req, res, next) {
  var found = 0;
  var link = req.body.link;
  var abc = url.parse(link);
  if (abc.pathname === "/robots.txt" && abc.host != null) {
    fs.readFile("public/links.json", function(err, data) {
      var json = JSON.parse(data);
      for (var j = 0; j < json.length; j++) {
        if (json[j].link === link) {
          found = 1;
          break;
        }
      }
      if (found == 0) {
        json.push({ link: link });
        fs.writeFile("public/links.json", JSON.stringify(json));
      }
      if (found == 1) {
        res.json({ reply: "Link already present" });
      } else {
        res.json({ reply: "Link Successfully Added" });
      }
    });
  } else {
    res.json({ reply: "Link is not robots.txt" });
  }
});

app.post("/deletelink", function(req, res, next) {
  var match = 0;
  var link = req.body.link;
  if (link == "") {
    res.json({ reply: "Field is empty" });
  } else {
    fs.readFile("public/links.json", function(err, data) {
      var data = JSON.parse(data);
      var index = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].link === link) {
          index = i;
          match = 1;
          break;
        }
      }
      if (match == 1) {
        data.splice(index, 1);
        fs.writeFileSync("public/links.json", JSON.stringify(data));
        res.json({ reply: "Link Successfully Deleted!" });
      }
      if (match == 0) {
        res.json({ reply: "Link Not found!" });
      }
    });
  }
});

app.post("/appendemail", function(req, res, next) {
  var found = 0;
  var email = req.body.email;
  if (validator.validate(email)) {
    fs.readFile("public/email.json", function(err, data) {
      var json = JSON.parse(data);
      for (var j = 0; j < json.length; j++) {
        if (json[j].email === email) {
          found = 1;
          break;
        }
      }
      if (found == 0) {
        json.push({ email: email });
        fs.writeFile("public/email.json", JSON.stringify(json));
      }
      if (found == 1) {
        res.json({ reply: "Email already present" });
      } else {
        res.json({ reply: "Email Successfully Added" });
      }
    });
  } else {
    res.json({ reply: "Email is not valid" });
  }
});

app.post("/deleteemail", function(req, res, next) {
  var match = 0;
  var email = req.body.email;
  if (email == "") {
    res.json({ reply: "Field is empty" });
  } else {
    fs.readFile("public/email.json", function(err, data) {
      var data = JSON.parse(data);
      var index = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].email === email) {
          index = i;
          match = 1;
          break;
        }
      }
      if (match == 1) {
        data.splice(index, 1);
        fs.writeFileSync("public/email.json", JSON.stringify(data));
        res.json({ reply: "Email Successfully Deleted!" });
      } else {
        res.json({ reply: "Email not found!" });
      }
    });
  }
});

app.post("/afterlogin", function(req, res, next) {
  if (req.body.pass == cre.password && req.body.usern == cre.username) {
    var Encoded = Base64.encode(req.body.pass);
    res.cookie("password", Encoded);
    res.json({ reply: "success", redirect: "/dashboard" });
  } else {
    res.json({ reply: "Wrong username or password!!!" });
  }
});

app.post("/logout", function(req, res, next) {
  res.clearCookie("password");
  res.json({ reply: "successfully logout" });
});*/
