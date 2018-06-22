var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");
const bodyParser = require("body-parser");
var url = require("url");
var validator = require("email-validator");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var cookieParser = require("cookie-parser");
app.use(cookieParser());
var Base64 = require("js-base64").Base64;

var cre = require("./credential.js");

var device = require("express-device");

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server started on port 3000");
});

app.set("view engine", "ejs");
app.set("view options", { layout: true });
app.set("views", __dirname + "/views");

//app.use(express.bodyParser());
app.use(device.capture({parseUserAgent:true}));

device.enableDeviceHelpers(app);
device.enableViewRouting(app);

app.get('/hello',function(req,res) {
  //console.log(req.device);
  //var a = req.device.parser.make_sure_parser_was_executed();
  var a = req.device.parser.useragent.source;
  var b = req.device.name;
  var c = req.device.type;
  //console.log(req.device.name);
  console.log(a);
  res.send(req.ip+"<br><br>"+a+"<br><br><b>Device Name: </b>"+b+"<br><br><b>Device Type: </b>"+c);
  //res.json(req.device);
  //res.send();
});

app.use(express.static(path.join(__dirname, "public")));

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
