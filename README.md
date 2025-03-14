# 🛠️ Command line word games

## Game 1: Rock Paper Scissors

### Description: 
Rock Paper Scissors is a simple hand game usually played between two people, where each player simultaneously forms one of three shapes with an outstretched hand. 
The possible shapes are "rock" (a fist), "paper" (an open hand), and "scissors" (a fist with the index and middle fingers extended, forming a V). 
The game has three possible outcomes other than a tie: rock crushes scissors, scissors cuts paper, and paper covers rock. 
This game is often used as a decision-making tool or as a playful challenge.

### How to run the code from your console example:
node rockPaperScissors.js rock
#### Output:
You chose rock. Computer chose scissors. You win!

## Game 2: English to Pig Latin Translator

### Description: 
This program translates English text to Pig Latin.

### How the program works:
The program takes an English phrase as an input from process.argv and converts each word to Pig Latin:
If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”

#### Example 1: 
Happy = appyh + ay = appyhay

If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
Example: Child = Ildch + ay = Ildchay
If a word starts with a vowel add the word “way” at the end of the word.

### Example 2: 
Awesome = Awesome +way = Awesomeway
- Output the translated phrase to the console.

### How to run the code from your console example:
node pigLatin.js "Pig Latin is hard to speak"
#### Output: 
Igpay Atinlay isway ardhay otay eakspay

# Game 3: Caesar Cipher

## Description:
This program implements a basic Caesar Cipher encryption.

## How the program works:
The program takes a phrase and a shift number as inputs from process.argv. It then encrypts the phrase by shifting each letter, based on its position in the english alphabet, by the specified number. It is case insensitive and so,
- A negative shift means shift to the left
- A positive shift means shift to the right

### How to run the code from your console example:
node caesarCipher.js "hello world" 3
#### Output:
 khoor zruog
