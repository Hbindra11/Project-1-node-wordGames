
const arraryAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

// Get two values from the command line
const args = process.argv.slice(2);
// Check if the user provided exactly two values
if (args.length !== 2) {
    console.error('Please provide a phrase to encrypt and the shift number to use');
    return;
}

let userInput = args[0].toString().trim().toLowerCase();
let userShiftNumber = parseInt(args[1])
let encrypted = ""
let shiftNumber = 0
for (let i = 0; i < userInput.length + 1; i++) {
    arraryAlphabet.forEach((letter) => {
        if (letter === userInput[i]) {
            shiftNumber = arraryAlphabet.indexOf(letter) + userShiftNumber;
            if (shiftNumber > 25) { shiftNumber = shiftNumber - 26 };
            encrypted = encrypted + arraryAlphabet[shiftNumber];
            shiftNumber = 0;
            return;
        }


    }); 
    
    if (userInput[i] === " ") {
        encrypted = encrypted.concat(" ")
    }

}
console.log("Encrypted output: " + encrypted)