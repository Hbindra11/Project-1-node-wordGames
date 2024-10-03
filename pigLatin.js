
const vowels = ['a', 'e', 'i', 'o', 'u']
const arrayUserInput = [];
let arrayPigLatin = [];

const args = process.argv.slice(2);

// check if user entered nothing
if (args.length === 0) {
    console.error("Please enter a phrase in English");
    return;
}
else {
    let userInput = args[0].toString().trim().toLowerCase();

    // looping through user input to fill in one array with all the words to translate  
    //and another an array of the same size filled in with * so as to be able to put in all translated words  later

    while (userInput.substring(0, userInput.indexOf(" "))) {

        arrayUserInput.push(userInput.substring(0, userInput.indexOf(" ")));
        arrayPigLatin.push("*");
        userInput = userInput.slice(userInput.indexOf(" "), userInput.length).trim();
    }
    arrayUserInput.push(userInput);
    arrayPigLatin.push("*");
}

// translating all words to piglatin
let pigLatin = "";
let i = 0;
arrayUserInput.forEach((word) => {
    pigLatin = "";
    vowels.forEach((vowel) => {
        if (word[0] === vowel) {
            pigLatin = word.concat("way")
            arrayPigLatin[i] = pigLatin;
            pigLatin = "";

        } else if (word[1] === vowel) {
            pigLatin = pigLatin.concat(word.substring(1)).concat(word[0]).concat("ay");
            arrayPigLatin[i] = pigLatin; pigLatin = "";
            pigLatin = "";
        }
    })
    i++
})
arrayPigLatin.forEach((noVowels) => {
    if (noVowels.trim() === "*") {
        pigLatin = arrayUserInput[arrayPigLatin.indexOf(noVowels)];
        pigLatin = pigLatin.substring(2).concat(pigLatin.substring(0, 2)).concat("ay")

        i = arrayPigLatin.indexOf(noVowels)
        arrayPigLatin[i] = pigLatin;
    }
})
// convert words in the pig latin array into a string seperating each word with a space 
const translation = arrayPigLatin.join(" ");
console.log("In Pig Latin: " + translation)


