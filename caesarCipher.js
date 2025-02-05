// Array of alphabet letters
const arraryAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

// Get two values from the command line
const args = process.argv.slice(2);

// Check if the user provided exactly two values
if (args.length !== 2) {
    console.error('Please provide a phrase to encrypt and the shift number to use');
    return;
}

// Process user input and shift number
let userInput = args[0].toString().trim().toLowerCase();
let userShiftNumber = parseInt(args[1])
let encrypted = ""
let shiftNumber = 0

// Loop through each character in the user input
for (let i = 0; i < userInput.length + 1; i++) {
    arraryAlphabet.forEach((letter) => {
        if (letter === userInput[i]) {
            // Calculate the new position of the letter after shifting
            shiftNumber = arraryAlphabet.indexOf(letter) + userShiftNumber;
            if (shiftNumber > 25) { shiftNumber = shiftNumber - 26 };
            // Append the encrypted letter to the result
            encrypted = encrypted + arraryAlphabet[shiftNumber];
            shiftNumber = 0;
            return;
        }
    }); 
    
    // Preserve spaces in the input
    if (userInput[i] === " ") {
        encrypted = encrypted.concat(" ")
    }
}

// Output the encrypted result
console.log("Encrypted output: " + encrypted)