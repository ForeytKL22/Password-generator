// Assignment code here

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];



function randomLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
};

function randomUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
};

function randomNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

function randomSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
};




function generatePassword() {
  var confirmLength = prompt("How many characters do you want in your password? (8-128)");

  if (confirmLength >= 8 && confirmLength <= 128) {
    alert("Your password will be " + confirmLength + " characters long.");
    passwordCriteria();
  } else {
    alert("Please pick a number between 8 and 128.");
    generatePassword();
  };
};





function passwordCriteria () {
  var confirmLowerCase = confirm("Do you want your password to include lowercase characters?");
  var confirmUpperCase = confirm("Do you want your password to include upper case characters?");
  var confirmNumbers = confirm("Do you want your password to include numbers?");
  var confirmSymbols = confirm("Do you want your password to include symbols?");

  // all true

  if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSymbols) {
    console.log("4 choices");
  }

  // three true

  else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
    console.log("1, 2, 3");
  }

  else if (confirmLowerCase && confirmUpperCase && confirmSymbols) {
    console.log("1, 2, 4");
  }

  else if (confirmLowerCase && confirmNumbers && confirmSymbols) {
    console.log("1, 3, 4");
  }

  else if (confirmUpperCase && confirmNumbers && confirmSymbols) {
    console.log("2, 3, 4");
  }

  // two true

  else if (confirmUpperCase && confirmLowerCase) {
    console.log("1, 2");
  } 

  else if (confirmNumbers && confirmSymbols) {
    console.log("3, 4");
  }

  else if (confirmUpperCase && confirmNumbers) {
    console.log("1, 3");
  }

  else if (confirmUpperCase && confirmSymbols) {
    console.log("1, 4");
  }

  else if (confirmLowerCase && confirmNumbers) {
    console.log("2, 3");
  }

  else if (confirmLowerCase && confirmSymbols) {
    console.log("2, 4");
  }

  // one true

  else if (confirmUpperCase) {
    console.log("1");
  }

  else if (confirmLowerCase) {
    console.log("2");
  }

  else if (confirmNumbers) {
    console.log("3");
  }

  else if (confirmSymbols) {
    console.log("4");
  }

var password = ""

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
