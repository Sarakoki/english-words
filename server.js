var express = require("express");
var request = require("request");
var db = require("./db/db.js");
//var reload = require("reload");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/node_modules"));

var getWordMeaning = (word, callback) => {
  var options = {
    url:
      "https://googledictionaryapi.eu-gb.mybluemix.net/?define=" +
      word +
      "&lang=en"
  };

  request(options, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    var info = JSON.parse(body);
    // console.log(body);
    callback(error, info);
  });
};

app.post("/data", function(req, res) {
  getWordMeaning(req.body.name, function(err, data) {
    db.saveWord(data);
  });
  res.send(req.body);
  console.log(req.body);
});

app.get("/data", function(req, res) {
  db.Word.find({}, function(err, data) {
    //reload();
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
    //res.redirect();
    //reload();
    console.log("refreshed");
  });
});
//reload(app);
app.listen(port, function() {
  console.log("listening on port" + port);
});
