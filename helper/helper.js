var request = require("request");
var config = require("../config.js");

var getWordMeaning = (word, callback) => {
  var options = {
    url:
      "https://od-api-demo.oxforddictionaries.com:443/api/v1/entries/en" +
      word +
      "&appid=4dc1aebaa63721f0f8e79a55e2514bc7",
    headers: {
      // "User-Agent": "request",
      // Authorization: `token ${config.TOKEN}`
      Accept: "application/json",
      app_id: "5037d509",
      app_key: "4dc1aebaa63721f0f8e79a55e2514bc7"
    }
  };

  request(options, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    var info = body;
    // console.log(body);
    callback(error, info);
  });
};

module.exports.getWordMeaning = getWordMeaning;
