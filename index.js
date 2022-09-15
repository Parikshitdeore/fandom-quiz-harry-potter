var scan = require("readline-sync")

console.log("Welcome to the Harry potter and the Game of quiz!!")
console.log()

var enter = scan.question("Press Enter to continue")
var userName = scan.question("Enter your name : ");
console.log()

console.log("Hey " + userName + " !! , so Lets start the GAME!!");
var score = 0;
console.log()

function play(q, a) {
  var userAns = scan.question(q);
  if (userAns === a) {
    console.log("Right! ");
    score = score + 1;
  }
  else {
    console.log("Wrong! ");
  }
  console.log("Current score : " + score);
  console.log("----------------------");
  console.log()
}

function ques() {
  play("What was Harry's mother's full name? ", "lily potter")
  play("How old was harry when he first came at HOGWARTS? ", "11")
  play("What is the Patronus of Professor Dumbledore? ", "phoenix")
  play("How many horcrux did Lord Voldemort have? ", "7")
  play("Who is the half-blood Prince? ", "snape")
  finscore()
  
}
// The main questions start here
  ques()

// repeating the question if score is below 1 till (no)
  
function tryagn(){
  var tryagain = scan.question("Do you want to try again (yes/no) ");
  console.log()
if (tryagain=="yes"){
    ques()
  console.log()
  }
  else{
    console.log("Thanks for playing!!! Better luck next time :D")
  }
}
function finscore() {
  if (score > 2) {
    console.log("Congratulations!! Your Final score is : " + score);
  }
  else {
    
    console.log("Sad, Your Final score is : " + score);
    console.log()
    console.log("Have you even watched a Harry Potter Movie? ");
    console.log()
    tryagn()
    
  }
}
