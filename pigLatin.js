//let arrayEnglish = [];
const vowels = ['a', 'e', 'i', 'o', 'u']
const arrayEnglish = [];
const arrayPigLatin = [];

const userInput = "Hello world".toLowerCase(); //each letter has an index
arrayEnglish.push(userInput);

//console.log(typeof(arrayEnglish));
console.log(arrayEnglish);
vowels.forEach((vowel) => console.log(vowel));
//can't use rray functions on strings although stings are like arrays
//arrayEnglish.forEach((letter1) => console.log(letter1));
