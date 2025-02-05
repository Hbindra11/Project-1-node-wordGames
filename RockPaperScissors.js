// Array of possible choices
const arrayChoice = ["rock", "paper", "scissors"];

// Get user input from command line arguments
const args = process.argv.slice(2);

// Check if the user provided only one valid value
if (args.length !== 1) {
  console.error("Please enter either rock, paper, or scissors!");
  return;
}

// Normalize user input
const userPlays = args[0].toString().trim().toLowerCase();

// Generate a random choice for the computer
const randomValue = Math.floor(Math.random() * 3);
const computerPlays = arrayChoice[randomValue];

// Check for a draw
if (userPlays === computerPlays) {
  console.log(
    "You chose " +
      userPlays +
      " and computer chose " +
      computerPlays +
      ". It's a draw!"
  );
  return;
} 
// Check all possible win/lose conditions
else if (userPlays === "rock" && computerPlays === "paper") {
  console.log("computer chose paper and you chose rock and so computer wins!");
  return;
} else if (userPlays === "rock" && computerPlays === "scissors") {
  console.log("computer chose scissors and you chose rock and so you win!");
  return;
} else if (userPlays === "paper" && computerPlays === "rock") {
  console.log("computer chose rock and you chose paper and so you win!");
  return;
} else if (userPlays === "paper" && computerPlays === "scissors") {
  console.log(
    "computer chose scissors and you chose paper and so computer wins!"
  );
  return;
} else if (userPlays === "scissors" && computerPlays === "paper") {
  console.log("computer chose paper and you chose scissors and so you win!");
  return;
} else if (userPlays === "scissors" && computerPlays === "rock") {
  console.log(
    "computer chose rock and you chose scissors and so computer wins!"
  );
  return;
} 
// Handle invalid user input
else {
  console.log("invalid choice. Please enter rock, paper, or scissors");
  return;
}
