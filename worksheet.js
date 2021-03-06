"use strict";

//Fizz Buzz
for(let countHundred = 0; countHundred <= 100; countHundred++){
    if(countHundred % 3 === 0 && countHundred % 5 === 0){
        console.log("FIZZ Buzz");
    } else if(countHundred % 3 === 0){
        console.log("Fizz");
    } else if(countHundred % 5 === 0){
        console.log("Buzz");
    }
}

//Reverse a String
function aStringReversed(aWord){
    let reversedString = "";
    for(let i = aWord.length - 1; i >= 0; i--){
        reversedString += aWord[i];
    }
    console.log(reversedString);
    return reversedString;
}

aStringReversed("Racecar");

// //Capitalize Letter
// let myString = "i have spoken!";
// let myStringArray = myString.split(" "); //This allows to split the string into an array of strings
// for(let i = 0; i < myStringArray.length; i++){
//     myStringArray[i] = myStringArray[i].charAt(0).toUpperCase() + myStringArray[i].slice(1);
// } //This allows to loop through each element of the array and start capitalizing the first letter of each word within a string

// let newString = myStringArray.join(" "); //Now to join the elements of the array back into a string using a blankspace as a separator
// console.log(newString);

//Capitalize Letter as a Function
function pascalMyString(wordOrSentence){
    let myString = wordOrSentence;
    let myStringArray = myString.split(" ");
    for(let i = 0; i < myStringArray.length; i++){
        myStringArray[i] = myStringArray[i].charAt(0).toUpperCase() + myStringArray[i].slice(1);
    }
    let pascalString = myStringArray.join(" ");
    console.log(pascalString);
}

pascalMyString("i am your father!");


//Compress a String of Characters
function stringCompression(aString){
    let stringResult = '';
    let count = 0;
    for(let i = 0; i < aString.length; i++){
        count++;
        if(aString[i] != aString[i + 1]){
            stringResult += aString[i] + count;
            count = 0;
        }
    }
    console.log(stringResult);
}

stringCompression("aaabbbbbccccaacccbbbaaabbbaaa");

//Palindrome - a word, phrase, or sequence that reads the same backward as forward
//This function checks if a string is Palindrome or not
function checkIfPalindrome(aWordPhraseOrSequence){
    let paliWord = aWordPhraseOrSequence.length - 1;
    for(let i = 0; i < paliWord/2; i++){
        let paliX = aWordPhraseOrSequence[i]; //forward character
        let paliY = aWordPhraseOrSequence[paliWord - i]; //backward character
        if(paliX != paliY){
            return false;
        }
    }
    return true;
}

//This function logs a true or false statement based on whether the string is Palindrome or not
function ifPalindrome(aStringReadTheSame){
    let result = checkIfPalindrome(aStringReadTheSame);
    if(result == true){
        console.log("This string is a Palindrome");
    } else {
        console.log("This string is not a Palindrome");
    }
}

ifPalindrome("mayamoodybabydoomayam");
ifPalindrome("race");
ifPalindrome("racecar");