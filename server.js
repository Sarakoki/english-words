var express = require("express");
var request = require("request");
var db = require("./db/db.js");
//var helper = require("./helper/helper.js");
//var config = require("./config.js");

var bodyParser = require("body-parser");
var port = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/node_modules"));

// app.post(function(req, res) {
//   var options = {
//     url: "/data",
//     method: "POST",
//     headers: {
//       "User-Agent": "request",
//       Authorization: `token ${config.TOKEN}`
//     },
//     json: true
//   };

//   request(options, function(error, response, body) {
//     console.log("error:", error);
//     console.log("statusCode:", response && response.statusCode);
//     var info = JSON.parse(body);

//     callback(error, info);
//   });
// });

// app.post("/data", function(req, res) {
//   request("api key", function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var info = JSON.parse(body);
//       res.send(info);
//     }
//   });
// });

//https://api.tradegecko.com/products

// app.post(function(req, res) {
//   request(
//     {
//       method: "POST",
//       url: "/data",
//       headers: {
//         Authorization: "Bearer " + "api key"
//       }
//     },
//     function(error, response, body) {
//       if (!error && response.statusCode == 200) {
//         res.json(body);
//       }
//     }
//   );
// });

// app.post("/data", function(req, res) {
//   helper.getWordMeaning(req.body.name, function(err, data) {
//     db.saveWord(data);
//   });
//   res.send(req.body);
// });

app.get("/data", function(req, res) {
  db.Word.find({}, function(err, data) {
    res.send(data);
  });
});

app.get("/", function(req, res) {
  res.send("/index.html");
});

app.post("/clear", function() {
  db.Word.remove({}, function(err, data) {
    if (err) {
      throw err;
    }
    console.log("refreshed");
  });
});
app.listen(port, function() {
  console.log("listening on port" + port);
});
