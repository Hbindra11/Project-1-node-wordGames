
const arraryAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

//let userInput = "hello world"
//userInput = "do pigs fly"
//userInput = "going on holiday"
//const userShiftNumber = 10

// Get two numbers from the command line
const args = process.argv.slice(2);
// Check if the user provided exactly two numbers
if (args.length !== 2) {
  console.error('Please provide a phrase to encrypt and the shift number to use');
  return;
}
console.log(args);
return

let encrypted =""
let shiftNumber = 0
for (let i = 0; i < userInput.length + 1; i++)
{
    arraryAlphabet.forEach((letter) =>
    {
        if (letter === userInput[i])
        {
           shiftNumber =  arraryAlphabet.indexOf(letter)+userShiftNumber
          if (shiftNumber>25 ){shiftNumber = shiftNumber-26}
            encrypted = encrypted + arraryAlphabet[shiftNumber]
         shiftNumber = 0
        }
        if (userInput[i] === " "){encrypted = encrypted+" "}
    })
}console.log (encrypted)