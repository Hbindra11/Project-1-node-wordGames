// Array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u']
// Array to store user input words
const arrayUserInput = [];
// Array to store translated Pig Latin words
let arrayPigLatin = [];

// Get command line arguments
const args = process.argv.slice(2);

// Check if user entered nothing
if (args.length === 0) {
    console.error("Please enter a phrase in English");
    return;
} else {
    // Process user input
    let userInput = args[0].toString().trim().toLowerCase();

    // Loop through user input to fill arrays with words and placeholders
    while (userInput.substring(0, userInput.indexOf(" "))) {
        arrayUserInput.push(userInput.substring(0, userInput.indexOf(" ")));
        arrayPigLatin.push("*");
        userInput = userInput.slice(userInput.indexOf(" "), userInput.length).trim();
    }
    arrayUserInput.push(userInput);
    arrayPigLatin.push("*");
}

// Translate all words to Pig Latin
let pigLatin = "";
let i = 0;
arrayUserInput.forEach((word) => {
    pigLatin = "";
    vowels.forEach((vowel) => {
        if (word[0] === vowel) {
            // If word starts with a vowel, add "way" to the end
            pigLatin = word.concat("way")
            arrayPigLatin[i] = pigLatin;
            pigLatin = "";
        } else if (word[1] === vowel) {
            // If word starts with a consonant followed by a vowel, move the first letter to the end and add "ay"
            pigLatin = pigLatin.concat(word.substring(1)).concat(word[0]).concat("ay");
            arrayPigLatin[i] = pigLatin;
            pigLatin = "";
        }
    })
    i++
})

// Handle words with no vowels at the start
arrayPigLatin.forEach((noVowels) => {
    if (noVowels.trim() === "*") {
        pigLatin = arrayUserInput[arrayPigLatin.indexOf(noVowels)];
        pigLatin = pigLatin.substring(2).concat(pigLatin.substring(0, 2)).concat("ay")

        i = arrayPigLatin.indexOf(noVowels)
        arrayPigLatin[i] = pigLatin;
    }
})

// Convert words in the Pig Latin array into a string, separating each word with a space
const translation = arrayPigLatin.join(" ");
console.log("In Pig Latin: " + translation)


