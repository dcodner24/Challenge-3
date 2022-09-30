// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generation of password



// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    var numList = "1234567890";
    var capsList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialList = "!@#$%^&*()";
    var lowerList = "abcdefghijklmnopqrstuvwxyz";
    var availChars= "";
    var numChars = 0;
    var password=""
    
    

    numChars = prompt("Enter password length. Length must be from 8 to 128.")

    if (numChars > 128 || numChars < 8){
        alert("Password length out of range.")
        stop();
    }

    else{ 
        if (confirm("Include lowercase characters?")){
            availChars = availChars.concat(lowerList);
            console.log("Available characters are now:", availChars);
        }

        if (confirm("Include uppercase characters?")){
            availChars = availChars.concat(capsList);
            console.log("Available characters are now:", availChars);
        }

        if (confirm("Include numeric characters?")){
            availChars = availChars.concat(numList);
            console.log("Available characters are now:", availChars);
        }

        if (confirm("Include special characters?")){
            availChars = availChars.concat(specialList);
            console.log("Available characters are now:", availChars);
        }
        
    }

    if (availChars == "" && (numChars <= 128  || numChars >= 8)){
    alert("Invalid input, password must contain at least one character type.");
    stop();
        }

    else{
        for(var i = 0; i < numChars; i++){
            password = password.concat(availChars.charAt(Math.floor(Math.random()*availChars.length)))
        }
    }

    console.log("Password is: ",password);
    return password;
    
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }