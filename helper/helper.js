// var request = require("request");
// var config = require("../config.js");

// var getWordMeaning = (word, callback) => {
//   var options = {
//     url: "/data" ,
//     headers: {
//       "User-Agent": "request",
//       Authorization: `token ${config.TOKEN}`
//     }
//   };

//   request(options, function(error, response, body) {
//     console.log("error:", error);
//     console.log("statusCode:", response && response.statusCode);
//     var info = JSON.parse(body);

//     callback(error, info);
//   });
// };

// module.exports.getWordMeaning = getWordMeaning;
