var words = ["ground", "control", "to", "major", "tom"];

function searchMap(input, callback){
  var storage = [];
  input.forEach(function(str){
    //Str will store a word in each iteration
    storage.push(callback(str))
  })
  console.log(storage);
}



searchMap(words, function(word) {return word.length;});


