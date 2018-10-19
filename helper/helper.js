var request = require("request");
var config = require("../config.js");

let getWordMeaning = function(Word, callback) {
  let options = {
    url:
      "https://console.developers.google.com/apis/credentials?authuser=0&project=english-words-219820" +
      Word +
      "&appid=AIzaSyCwUC-mjSWK2PJd7zEyRL_dbsdWC3-BYncs",
    headers: {
      "User-Agent": "request",
      Authorization: `token ${config.TOKEN}`
    }
  };

  request(options, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    var info = body;

    callback(error, info);
  });
};

module.exports.getWordMeaning = getWordMeaning;
