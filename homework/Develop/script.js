// Assignment Code
var generateBtn = document.querySelector("#generate");



//add event listener to butto
generateBtn.addEventListener ("click", function() {
  alert("To continue please answer yes or no for the following password criteria");


  // prompt for length
  var userChoice1 = prompt("do you want lowerCase?")
  var userChoice2 = prompt("do you want upperCase?")
  var userChoice3 = prompt("do you want numeric?")
  var userChoice4 = prompt("do you want specialChar")

  var lowerCase ="abcdefghijklmnopqrstuvwxyz"
  var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric ="0123456789"
  var specialChar = "`~!@#$%^&*()_-=+{[}]\|:;'<,.>/?"
  
  for (var i = 0; i < 4; i++){
    if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes" ){
      var passWord = lowerCase + upperCase + numeric + specialChar
      var randomP = passWord[Math.random()]
      console.log(randomP)
    }
    else if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes"){
      
    }
  }


});
/*
[Math.floor(arr.length * Math.random())];
  var userChoice1 = prompt("do you want lowerCase?")
  var userChoice2 = prompt("do you want upperCase?")
  var userChoice3 = prompt("do you want numeric?")
  var userChoice4 = prompt("do you want specialChar")



  var lowerCase ="abcdefghijklmnopqrstuvwxyz"
  var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric ="0123456789"
  var specialChar = "0123456789"

  var lowerCase ="abcdefghijklmnopqrstuvwxyz"
  var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric ="0123456789"
  var specialChar = "0123456789"
  
  for (var i = 0; i < 4; i++){
    if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes" ){
      var passWord = lowerCase + upperCase + numeric + specialChar
    }
    else if(userChoice1 === "yes" && userChoice2 === "yes" && userChoice3 === "yes" && userChoice4 === "yes"){
      
    }
  }


  
  }
  */
  


//userChoice var userChoice = [userChoice1, userChoice2, userChoice3, userChoice4]

  //choices for criteria
  
  
    //criteria[i].lowerCase
  
  

/*
console.log(userChoice1)


var lowerCase: "abcdefghijklmnopqrstuvwxyz"
var upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric: "0123456789"
var specialChar: "!@#$%^&*()?:;~`/>.=+_-<,"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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