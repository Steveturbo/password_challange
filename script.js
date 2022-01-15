// Assignment Code
var generateBtn = document.querySelector("#generate");

//genetate password function. var results will hold the password. 
function generatePassword() {
  var result = ""
  var passWordLength = prompt("how many characters should one choose? The answer is hidden between 8 and 128. Choose wisely.")
  console.log(passWordLength)

  // choose the type of characters
  var addUpperCase = confirm("Do you want to add uppercase?")
  var addLowerCase = confirm("Do you want to add lowercase?")
  var addNumber = confirm("Do you want to add a number?")
  var addSpecialCharacter = confirm("Do you want to add a special character?")


  // types of arrays
var upperCaseArray = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacterArray = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",  "]", "^", "_", "`", "{", "|",  "}", "~",]

//Array that collects all other arrays for random selection
var selectedArray = []


// if statements that ask if you want to use the above arrays for the password
if(addUpperCase) {
  selectedArray = selectedArray.concat(upperCaseArray);
  window.alert("Uppercase will be used");
}
else {
  window.alert("uppercase will not be used");
}

if(addLowerCase) {
  selectedArray = selectedArray.concat(lowerCaseArray);
  window.alert("Lowercase will be used");
}
else {
  window.alert("Lowercase will not be used");
}

if(addNumber) {
  selectedArray = selectedArray.concat(numberArray);
  window.alert("Number will be used");
}
else {
  window.alert("Numbers will not be used");
}

if(addSpecialCharacter) {
  selectedArray = selectedArray.concat(specialCharacterArray);
  window.alert("Special character will be used");
}
else {
  window.alert("Special characters will not be used");
}


// Displays the contents of the selected array after choosing.
console.log(selectedArray)


  
// this is the for loop that randomizes the collective array.
for (var i = 0; i < passWordLength; i++){

  var randomNumber = Math.floor(Math.random() * selectedArray.length)

  var letter = selectedArray[randomNumber]

  result = result + letter
}


     return result;
}
// Write password to the #password input Displays the password. Line 5
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button. Tells function writePassword when button has been clicked line 67
generateBtn.addEventListener("click", writePassword);
