console.log('start playing');

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let choices = ["r", "p", "s"];
  
// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let wins = 0;
let losses = 0;
let ties = 0;

//Create a for loop to automatically iterate the the conditional loop through
for(let playTime = 0; playTime < 12; playTime++) {
  
  let userChoice = prompt("Enter your choice - Rock(r), Paper(p) or Scissors(s)");

let randomIndex = Math.floor(Math.random() * choices.length);
let computerChoice = choices[randomIndex];

// Create a conditional loop to check impletment the condition of the game
  if (userChoice === "r" ||
  userChoice === "p" ||
  userChoice === "s") {

  alert("You have chosen: " + userChoice);
  alert("Computer has chosen: " + computerChoice);

  if (userChoice === computerChoice) {
    ties = ties+1;
    alert("Its a tie.");
  } else if ((userChoice === "r" && computerChoice === "s") ||
              (userChoice === "p" && computerChoice === "r") ||
    (userChoice === "s" && computerChoice === "p")) {
    wins++;
    alert("You won!");
  } else {
    losses++;
    alert("You lost!");
  }
} else {
  alert("Wrong choice!");
}

//create a conditional loop to display the results
if(playTime === 10) {
  console.log("wins: " + wins);
  console.log("losses: " + losses);
  console.log("ties: " + ties);
}

}
