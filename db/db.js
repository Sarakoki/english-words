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
  Meaning: String
});

var Word = mongoose.model("Word", englishWordSchema);

var saveWord = function(data) {
  if (!data.name) {
    return console.log("no data");
  }
  obj = {
    Word: data.name,
    Meaning: data.word[0].description
  };

  var word = new Word(obj);
  word.save(function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("database saved");
  });
};

module.exports.Word = Word;
module.exports.saveWord = saveWord;
