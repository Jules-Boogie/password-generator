// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.queryCommandValue("#password-length");
var submitEl = document.queryCommandValue("#submit");



//add event listener to button
//generateBtn.addEventListener("click", function () {






  //var passLength = lengthEl.value; // password length

  //write function generatePassword(passLength);







//})
// PLEASE READ: 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

  alert("Answer the prompts to generate a strong password!");




  while (true) {
    var userLength = prompt("Please enter password length from 8 to 128")
    if (userLength >= 8 && userLength <= 128) {
      //console.log(userLength)
      break;
    }
    alert("please enter a length that is between 8 and 128")
  }

  // I tried to use the while loop to stop and repeat this prompt if condition was not met but I could not


  alert("To continue please answer yes or no for the following password criteria");
  var userChoice1 = prompt("do you want lowerCase?")
  var userChoice2 = prompt("do you want upperCase?")
  var userChoice3 = prompt("do you want numeric?")
  var userChoice4 = prompt("do you want specialChar")



  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numeric = '0123456789'
  var specialChar = '`~!@#$%^&*()_-=+{[}]\|:;<,.>/?'

  var passChar; //all characters mixed together


  //there are 16 different possibilities.. I am sure that there are better ways but for my level this is ok I guess? 
  if (userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes") {
    passChar = lowerCase + upperCase + numeric + specialChar
  } else if (userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes") {
    passChar = upperCase + numeric + specialChar

  } else if (userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 === "yes" && userChoice4 === "yes") {
    passChar = numeric + specialChar

  } else if (userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 === "yes") {
    passChar = specialChar

  } else if (userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 !== "yes") {
    passChar = lowerCase + upperCase + numeric

  } else if (userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 !== "yes") {
    passChar = lowerCase + upperCase

  } else if (userChoice1 === "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 !== "yes") {
    passChar = lowerCase

  } else if (userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 === "yes") {
    passChar = lowerCase + upperCase + specialChar

  } else if (userChoice1 === "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 === "yes") {
    passChar = lowerCase + specialChar

  } else if (userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 !== "yes") {
    passChar = upperCase

  } else if (userChoice1 === "yes" && userChoice2 !== "yes" && userChoice3 === "yes" && userChoice4 !== "yes") {
    passChar = lowerCase + numeric

  } else if (userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 === "yes") {
    passChar = upperCase + specialChar

  } else if (userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 === "yes" && userChoice4 !== "yes") {
    passChar = numeric

  } else if (userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 !== "yes") {
    passChar = upperCase + numeric

  } else if (userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 !== "yes") {
    alert("Please choose an option to continue")

  }







  var value = "";
  console.log(userLength)
  for (var i = 0; i < userLength; i++) {
    value += passChar.charAt(Math.floor(Math.random() * passChar.length));

  }
  return value;

}

//pseudocode : thinking through the assignment.  Alot changes during execution. 
/*
1) when the red button is clicked, it generates prompts for password criteria and length of password
a) generate prompt to ask user for length of password between 8-128
validate selection and put it in a while loop to repeat the prompt if the condition is not met.

2) generate a series of prompts for password criteria

3)code for user to select criteria for password

5) generate prompt for character..types and user chooses
lowercase, uppercase, numeric, and special characters
code validation

lowercase: random a-z
uppercase: random A-Z
numeric: random 1-9
specialcase = random punctuation sign

6) generate password
password  = lowercase+uppercase+numeric+special case
password = shuffle(password)
where shuffle is to generate random numbers from password
7) alert(password) in placeholder="Your Secure Password"
*/