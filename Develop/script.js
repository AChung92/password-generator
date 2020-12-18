
// Assignment code here
var capitalCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var capitalSelect = capitalCase[Math.floor(Math.random() * capitalCase.length)];
var lowerSelect = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var specialSelect = specialChar[Math.floor(Math.random() * specialChar.length)];
var numberSelect = numbers[Math.floor(Math.random() * numbers.length)];

var promptLength = prompt("Please select password length. The length can be 8-128 characters.");
promptLength = parseInt(promptLength);

// Step 2 var prompt character options 
var passwordCreation = function() {
  var passwordInfoPrompt = prompt("Please select character type password. Choose 1 for upper case, 2 for lower case, 3 for special characters, or 4 for numbers");
  if (passwordInfoPrompt === null || passwordInfoPrompt === "" || isNaN(passwordInfoPrompt)) {
  window.alert("You need to provide a valid answer! Please try again.");
  return passwordCreation();
  }

  passwordInfoPrompt = parseInt(passwordInfoPrompt);

  switch (passwordInfoPrompt) {
    case 1:
      return capitalSelect;
      break;
    case 2:
      return lowerSelect;
      break;
    case 3:
      return specialSelect;
      break;
    case 4:
      return numberSelect;
      break;
  }
    // including password prompts into length
  for (var i = 0; i < passwordInfoPrompt; i++);

};

  //step 1 ask user to enter total length of password and convert to integer

  if (promptLength < 8 || promptLength > 128) {
    alert ("Please select a proper password length.");
  } 
  // add password characters
  else {
    passwordCreation();
  }

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//var passwordInfo = {
  //capitalCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //lowerCaseletters = 'abcdefghijklmnopqrstuvwxyz';
  //specialCharacters = '!@#$%^&';
  //numbers = '0123456789';
  //combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
//}

  //var inRange = function(promptLength, min, max) {
    //return ((promptLength-min)*(promptLength-max) <=0);
  //}