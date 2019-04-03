// Business Logic
// var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
var ay = "ay"
// var way = "way"

function pigLatin(languageInput){
  var array = languageInput.split("");
  if (array.length === 1){
    return (languageInput + ay)
  }
  else {
    return "this is hard"
  }
}

    
// Basic User Interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var languageInput = $("input#language-input").val();
    var languageOutput = pigLatin(languageInput);
    
    $("#result").text(languageOutput);
  });
});