// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the input
function writePassword() {

  // Define character sets
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // Prompt for password length
  let passwordLength = parseInt(prompt('Enter password length (between 8 and 128):'));

  // Validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Invalid length. Please enter a number between 8 and 128:'));
  }

  // Confirm character types
  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumeric = confirm('Include numeric characters?');
  const includeSpecial = confirm('Include special characters?');

  // Validate at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert('Please select at least one character type.');
    // Confirm character types again
    includeLowercase = confirm('Include lowercase characters?');
    includeUppercase = confirm('Include uppercase characters?');
    includeNumeric = confirm('Include numeric characters?');
    includeSpecial = confirm('Include special characters?');
  }

  // Link selected character sets
  let characters = '';
  if (includeLowercase) characters += lowercaseChars;
  if (includeUppercase) characters += uppercaseChars;
  if (includeNumeric) characters += numericChars;
  if (includeSpecial) characters += specialChars;

  // Generate password
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  // Display the generated password on the screen
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
