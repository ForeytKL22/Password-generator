// Assignment code here
var passwordFinal = [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var randomPassword = [];






function generatePassword() {
  var confirmLength = prompt("How many characters do you want in your password? (8-128)");

  if (confirmLength >= 8 && confirmLength <= 128) {
    console.log(typeof confirmLength);
    var pwd = passwordCriteria(confirmLength);
  } else {
    alert("Please pick a number between 8 and 128.");
    generatePassword();
  };
return pwd;
};





function passwordCriteria(length) {
  var confirmLowerCase = confirm("Do you want your password to include lowercase characters?");
  var confirmUpperCase = confirm("Do you want your password to include upper case characters?");
  var confirmNumbers = confirm("Do you want your password to include numbers?");
  var confirmSymbols = confirm("Do you want your password to include symbols?");
  randomPassword = [];
  passwordFinal = [];


if (confirmLowerCase || confirmUpperCase || confirmNumbers || confirmSymbols) {

  if (confirmLowerCase) {
    console.log(true);
    passwordFinal = passwordFinal.concat(lowerCase);
  }

  if (confirmUpperCase) {
    console.log(true);
    passwordFinal = passwordFinal.concat(upperCase);
  }

  if (confirmNumbers) {
    console.log(true);
    passwordFinal = passwordFinal.concat(numbers);
  }

  if (confirmSymbols) {
    console.log(true);
    passwordFinal = passwordFinal.concat(symbols);
  } 

} else {
  alert("Please select at least one criteria.");
  passwordCriteria(length);
}


for (var i = 0; i < length; i++) {
  randomPassword.push(passwordFinal[Math.floor(Math.random() * passwordFinal.length)]);
  
}

return randomPassword;


}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password.join("");
  
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
