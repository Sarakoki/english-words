var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Word");

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connection successfull");
});

const englishWordSchema = mongoose.Schema({
  Word: String,
  Meaning: String,
  Example: String
});

var Word = mongoose.model("Word", englishWordSchema);

var saveWord = function(data) {
  if (!data.word) {
    return console.log("no data");
  }
  var obj = {
    Word: data.word,
    Meaning: data.meaning.noun[0].definition,
    Example: data.meaning.noun[0].example
  };

  var word = new Word(obj);
  word.save(function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("database saved");
    //console.log(data);
  });
};

module.exports.Word = Word;
module.exports.saveWord = saveWord;
