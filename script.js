function generatePassword() {
  // prompt user for password length
  var length = parseInt(prompt("How long would you like your password to be? (Must be between 8 and 128 characters)"));

  // validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // prompt user for character types
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeDigits = confirm("Would you like to include digits?");
  var includeSymbols = confirm("Would you like to include symbols?");

  // validate at least one character type is selected
  if (!includeUppercase && !includeLowercase && !includeDigits && !includeSymbols) {
    alert("Please select at least one character type.");
    return;
  }

  // define character sets
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var digitChars = "0123456789";
  var symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // build character pool based on user selections
  var characterPool = "";
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  if (includeLowercase) {
    characterPool += lowercaseChars;
  }
  if (includeDigits) {
    characterPool += digitChars;
  }
  if (includeSymbols) {
    characterPool += symbolChars;
  }

  // generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  return password;
}
