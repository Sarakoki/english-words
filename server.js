var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/node_modules"));

app.get("/", function(req, res) {
  res.send("index.html");
});

app.listen(port, function() {
  console.log("listening on port" + port);
});
