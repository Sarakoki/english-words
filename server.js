var express = require("express");
var request = require("request");
var db = require("./db/db.js");
var helper = require("./helper/helper.js");
var config = require("./config.js");

var bodyParser = require("body-parser");
var port = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/node_modules"));

// app.post("/data", function(req, res) {
//   request("d89eca60ac67077426e65fa0c94e4c83", function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var info = JSON.parse(body);
//       res.send(info);
//     }
//   });
// });

app.post("/data", function(req, res) {
  helper.getWordMeaning(req.body.name, function(err, data) {
    db.saveWord(data);
  });
  res.send(req.body);
});

//https://api.tradegecko.com/products

// app.get(function(req, res) {
//   request(
//     {
//       method: "GET",
//       url: "http://api.openweathermap.org/data/2.5/weather?q=",
//       headers: {
//         Authorization: "Bearer " + "d89eca60ac67077426e65fa0c94e4c83"
//       }
//     },
//     function(error, response, body) {
//       if (!error && response.statusCode == 200) {
//         res.json(body);
//       }
//     }
//   );
// });

app.get("/data", function(req, res) {
  db.Word.find({}, function(err, data) {
    res.send(data);
  });
});

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(port, function() {
  console.log("listening on port" + port);
});
