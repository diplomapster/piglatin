// Business Logic
var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
var ay = "ay"
var way = "way"

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
    var languageOutput = vowelWords(languageInput);
    
    $("#result").text(languageOutput);
  });
});