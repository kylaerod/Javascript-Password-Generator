// Assignment code here


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

// Characters that can be used to create the password
var charactertypes = {
  lowerCase:'abcdefghijklmnopqrstuvwxyz'
  upperCase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  numeric: '0123456789'
  speacialCharacters:'~!@#$%^&*()_+<>/'
}

// Password Parameters
var passData = {
  length: 0
  lowerCase: true
  upperCase: true
  numeric: true
  speacialCharacters: true
}

function generatePassword() {
resetPassData();
passLength ();
passCharacterTypes ();


if (!passData.lowerCase &&
  !passData.upperCase &&
  !passData.numeric &&
  !passData.speacialCharacters &&)

  { alert ("Would you like to get a password or make a new one?");
    generatePassword();
} else {
  makePassWord ();
}
return pass; }

function resetPassData () {
  passArray = [];
  pass = ''
  passData.length = 0 ;
}

var pass = ''

function makePassWord() {
for (var i = 0; i < passData.length; i++)
{ pass += passArray [Math.floor(math.random() * passArray.length)];
}
return;  
}

function passLength() {
  var length = prompt ("Choose a length for your password.")
  if (length <8 || length > 128)
  { alert (Your password must be between 8 and 128 characters"); 
} else {
  passData.length = length;
}
}
function passCharacterTypes() {
  for (var type in characterTypes) {
    if (confirm ("Do you want your password to contain " + type + " ?")) {
      passData[type] = true;
      passArray = passArray.concat(charactertypes[type].split(""))
    } else {}
  }
}
