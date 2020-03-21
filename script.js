// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.queryCommandValue("#password-length");
var submitEl = document.queryCommandValue("#submit");



//add event listener to butto
generateBtn.addEventListener ("click", function() {
  alert("Answer the prompts to generate a strong password!");


  var userLength = prompt("Please enter password length from 8 to 128")
  if(userLength >= 8 && userLength <= 128){
    console.log(userLength)
  } else { 
    alert("Please enter value between 8 and 128")
  }
  // I tried to use hthe while loop to stop and repeat this prompt if condition was not met but I could not

  alert("To continue please answer yes or no for the following password criteria");
  var userChoice1 = prompt("do you want lowerCase?")
  var userChoice2 = prompt("do you want upperCase?")
  var userChoice3 = prompt("do you want numeric?")
  var userChoice4 = prompt("do you want specialChar")

  

    lowerCase ='abcdefghijklmnopqrstuvwxyz'
    upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    numeric = '0123456789'
    specialChar = '`~!@#$%^&*()_-=+{[}]\|:;<,.>/?'

  var passChar; //all characters mixed together
  

  //there are 16 different possibilities.. I am sure that there are better ways but for my level this is ok I guess? 
if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes" ){
    passChar = lowerCase+upperCase+numeric+specialChar
} else if(userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes"){
  passChar = upperCase+numeric+specialChar

}else if(userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 === "yes" && userChoice4 === "yes"){
  passChar = numeric+specialChar

} else if(userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 === "yes"){
  passChar = specialChar

}else if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 !== "yes"){
  passChar = lowerCase+upperCase+numeric

}else if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 !== "yes"){
  passChar = lowerCase+upperCase

} else if(userChoice1 === "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 !== "yes"){
  passChar = lowerCase

}else if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 === "yes"){
  passChar = lowerCase+upperCase+specialChar

}else if(userChoice1 === "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 === "yes"){
  passChar = lowerCase+specialChar

}else if(userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 !== "yes"){
  passChar = upperCase

}else if(userChoice1 === "yes" && userChoice2 !== "yes" && userChoice3 === "yes" && userChoice4 !== "yes"){
  passChar = lowerCase+numeric

}else if(userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 !== "yes" && userChoice4 === "yes"){
  passChar = upperCase+specialChar

}else if(userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 === "yes" && userChoice4 !== "yes"){
  passChar = numeric

}else if(userChoice1 !== "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 !== "yes"){
  passChar = upperCase+numeric

}else if(userChoice1 !== "yes" && userChoice2 !== "yes" && userChoice3 !== "yes" && userChoice4 !== "yes"){
  alert("Please choose an option to continue")

}


//while(userLength >= 8 && userLength <= 128){
  //var passLen = userLength
//} 


//var passLength = lengthEl.value; // password length

//write function generatePassword(passLength);
 function generatePassword(userLength){
  var value = "";
  for(var i = 0; i <= userLength-1; i++){
    value += passChar.charAt(Math.floor(Math.random()* passChar.length));

  }
return value;

 }
generatePassword(userLength)

// Write password to the #password input
function writePassword() {
  var password = generatePassword(userLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

})
// PLEASE READ: 



//pseudocode 
/*
1) when the red button is clicked, it generates prompts for password criteria



2) generate a series of prompts for password criteria

3)code for user to select criteria for password


4) generate promt to ask user for length of password between 8-128
validate selection


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