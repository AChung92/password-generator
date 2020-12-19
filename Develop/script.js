
// Assignment code here
    //step 1 ask user to enter total length of password and convert to integer


  var promptLength = prompt("Please select password length. The length can be 8-128 characters.");
  if (promptLength < 8 || promptLength > 128) 
    { window.alert ("Please select a proper password length. It must be 8-128 characters");
  }
    // Confirms use of special characters
  if (promptLength >= 8 && promptLength <= 128) {
    var upperCaseConfirm = confirm("Would you like to use uppercase letters?");
    var lowerCaseConfirm = confirm("Would you like to use lowercase letters?");
    var numbersConfirm = confirm("Would you like to use numbers?");
    var specialCharConfirm = confirm("Would you like to like to use special characters?");
  }

  if (upperCaseConfirm != true && lowerCaseConfirm !=true && numbersConfirm !=true && specialCharConfirm !=true)
  { window.alert ("You must select at least one character type!")
  }

  function writePassword() {

  const generateBtn = document.querySelector('#generate');

  document.querySelector('#generate').addEventListener("click", () => {
    const includeUpper = upperCaseConfirm.true;
    const includeLower = lowerCaseConfirm.true;
    const includeNumber = numbersConfirm.true;
    const includeSpecial = specialCharConfirm.true;
    generateBtn.innerText = generatePassword(includeUpper, includeLower, includeNumber, includeSpecial, length);

  });


  document.getElementsById("#password").addEventListener
  };

  const randPassword = {
    upper: randomUpper,
    lower: randomLower,
    number: randomNumber,
    special: randomSpecial
  }

    //password generator
  function generatePassword(upper, lower, number, special, length) {
    let generatePassword = "";
    const typeCount = upper + lower + number + special;
      const typeArr = [{upper}, {lower}, {number}, {special}].filter(item => Object.values(item)[0]);

    for(let i=0; i <= length-1; i++) {
      typeArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatePassword += randPassword[funcName]();
      });
    }
    const finalPassword = generatePassword.slice(0,length);
    return finalPassword;

  }

    //generator functions

    function randomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function randomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function randomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    function randomSpecial() {
      return String.fromCharCode(Math.floor(Math.random() * 47) + 32);
    }
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passUp = randomUpper();
  var passLow = randomLower();
  var passNum = randomNumber();
  var passSym = randomSpecial();
  var password = generatePassword(passUp, passLow, passNum, passSym, promptLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


