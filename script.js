      function generatePassword() {
        // get password length
        var length = parseInt(document.getElementById("password-length").value);
      
        // get character type selections
        var includeUppercase = document.getElementById("include-uppercase").checked;
        var includeLowercase = document.getElementById("include-lowercase").checked;
        var includeDigits = document.getElementById("include-digits").checked;
        var includeSymbols = document.getElementById("include-symbols").checked;

        // validate password length
        if (isNaN(length) || length < 8 || length > 128) {
          alert("Invalid password length. Please enter a number between 8 and 128.");
          return;
        }

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
      
      var form = document.getElementById("password-form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        var passwordDisplay = document.getElementById("password-display");
        var password = generatePassword();
        passwordDisplay.innerText = password;
      });