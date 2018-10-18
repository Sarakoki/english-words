var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Weather");

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});
db.once("open", function() {
  console.log("mongoose connection successfull");
});

var englishWordSchema = mongoose.Schema({
  Word: String
});

var Word = mongoose.model("Word", englishWordSchema);

var saveWord = function(data) {
  if (!data.name) {
    return console.log("no word");
  }
  obj = {
    Word: data.name
  };
  var word = new Word(obj);
  word.save(function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("word saved");
  });
};

module.exports.Word = Word;
module.exports.saveWord = saveWord;
