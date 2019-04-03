// Business Logic
var pigLatin = function(languageInput){
  return true
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