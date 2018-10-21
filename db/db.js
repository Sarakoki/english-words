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
  // if (!data.word) {
  //   return console.log("no data");
  // }
  var obj = {
    Word: data.results[0].id,
    Meaning: data.results[0].lexicalEntries[0].entries[0].senses[0].definitions
    //Meaning2: data.results.lexicalEntries.entries.senses[0].subsenses[0].definitions
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
