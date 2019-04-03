// Business Logic
// var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
var ay = "ay"
var way = "way"

function conWords(languageInput){
  if (languageInput.charAt(0) !== ("a" || "e" || "i" || "o" || "u" || "y")){
    // var firstLetter = languageInput.charAt(0)
    // return (languageInput + firstLetter + ay)
    return (languageInput.slice(1) + ay)
  }
  else {
    return "This is still really hard"
  }
}

function pigLatin(languageInput){
  if (languageInput.length === 1){
    return (languageInput + ay)
  }
  else {
    return "this is hard"
  }
}

function vowelWords(languageInput){
   if (languageInput.charAt(0) === ("a" || "e" || "i" || "o" || "u" || "y")){
   return (languageInput + way)
  } 
  else {
   return "this is still hard"
 }
}
    
// Basic User Interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var languageInput = $("input#language-input").val();
    var languageOutput = conWords(languageInput);
    
    $("#result").text(languageOutput);
  });
});