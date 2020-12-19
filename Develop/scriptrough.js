
// Assignment code here
function generatePassword (passwordLength) {
    var capitalCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var specialChar = "@#$%^&*";
    var numbers = "0123456789";
    var allChar = capitalCase + lowerCase + specialChar + numbers;
    var randPassword = Array(passwordLength);
    randPassword[0] = capitalCase;
    randPassword[1] = lowerCase;
    randPassword[2] = specialChar;
    randPassword[3] = numbers;
    randPassword = randPassword.fill(allChar, 4);
    return shuffleArray(randPassword.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
  
  function shufflePass(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i+1));
      var temp = array [i];
      array [i] = array [j];
      arary [j] = temp;
    }
  
    return array;
  }
  
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
  writePassword() {
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
  
  
  
  function generatePassword() {
    var promptLength = prompt("Please select password length. The length can be 8-128 characters.");
    promptLength = parseInt(promptLength);
    var length = promptLength,
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#4%^&*",
      passValue = "";
      if (promptLength < 8 || promptLength > 128) {
        alert ("Please select a proper password length.");
      } 
      // add password characters
      else {
      for (var i = 0, n = charset.length; i < length; i++) {
        passValue += charset.charAt(Math.floor(Math.random() * n));
      }
      return passValue;
      }
  }
  
  var capitalSelect = capitalCase[Math.floor(Math.random() * capitalCase.length)];
  var lowerSelect = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  var specialSelect = specialChar[Math.floor(Math.random() * specialChar.length)];
  var numberSelect = numbers[Math.floor(Math.random() * numbers.length)];
  var passwordDetails = [capitalSelect, lowerSelect, specialSelect, numberSelect];
  
  var promptLength = prompt("Please select password length. The length can be 8-128 characters.");
  promptLength = parseInt(promptLength);
  
  function generatePassword () {
    var length = promptLength;
    // run a loop/
    for (var i = 0; i < promptLength; i++) {
    capitalSelect + lowerSelect + specialSelect + numberSelect;
    }
  
    
    
  }