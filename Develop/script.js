// Assignment code here

// Setting up variables to be arrays to contain all the characters. 
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",",".","+","-","?","~","_"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//This calls the generatePassword function.
function generatePassword() {

  //Asking the user to select a password length and rounding their answer.
  var pwLength = Math.round(prompt("Enter the desired length of your password"));
  
  //Setting a condition to check if the user's desired password length is between 8-128.
  while (pwLength <= 7 || pwLength >= 129) {
    
    //If the user's answer doesn't pass the first check it will alert and reprompt them. It will also console log their answer.
    alert("Please enter a number 8 - 128!");
    console.log(`The user selected ${pwLength} which is outside of the length paramaters.`)
    var pwLength = Math.round(prompt("Enter the desired length of your password")); 
    } 
    //If the user's answer passes the first check it will then alert them of their length they chose and console log it.
    alert(`Your password will have ${pwLength} characters.`);
    console.log(`The user's password will have ${pwLength} characters.`)

    //If the user's answer passes the first check it will then ask the user to confirm their password conditions.
    var userUpper = confirm("Click ok to confirm you would like your password to contain UPPERCASE LETTERS?");
    var userLower = confirm("Click ok to confirm you would like your password to contain lowercase letters?");
    var userNumber = confirm("Click ok to confirm you would like your password to contain numb3rs?");
    var userSpecial = confirm("Click ok to confirm you would like your password to contain $pecial characters?");
  
  //Setting a condition to check if the user selected atleast one pass condition. 
  while (userUpper === false && userLower === false && userNumber === false && userSpecial === false) {
    
    //If the user's choice doesn't select atleast one condition then it will alert and reprompt them.
    alert("You must pick at least one condition for a random, secure password.")
    console.log("The user didn't select any conditions for their password")
    

    var userUpper = confirm("Click ok to confirm you would like your password to contain UPPERCASE LETTERS?");
    var userLower = confirm("Click ok to confirm you would like your password to contain lowercase letters?");
    var userNumber = confirm("Click ok to confirm you would like your password to contain numb3rs?");
    var userSpecial = confirm("Click ok to confirm you would like your password to contain $pecial characters?");
    
    //If the user's choice does select atleast one condition then it console logs their answer.
    console.log("The user selected atleast one condition for their password")

  }

  //This sets up a variable as an empty array to be able to concatenate on to the array given the below if statements.
  var pwChars = []

  if (userUpper) {
    pwChars = pwChars.concat(upper)
  } 
  if (userLower) {
    pwChars = pwChars.concat(lower)
  } 
  if (userNumber) {
    pwChars = pwChars.concat(number)
  } 
  if (userSpecial) {
    pwChars = pwChars.concat(special)
  }
    //This console logs the chosen array of characters that can be selected.
    console.log(pwChars)

    //This sets up a variable as an empty string to add the selected characters too base on the below for-loop.
    var randomizedPassword = ""

    //This for-loop uses the Math.randomfunction to loop through the pwChars array and add to the randomizedPassword string. It will continue to do this the entire length of the pwLength value that was selected by the user.
    for(let i = 0; i < pwLength; i++) {
    randomizedPassword = randomizedPassword + pwChars[Math.floor(Math.random() * pwChars.length)];  
    }
  
  //This returns the randomized password string as a value for generatePassoword() be used in the writePassword() function.
  return randomizedPassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
