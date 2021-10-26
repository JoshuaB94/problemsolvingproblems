"use strict";

//Fizz Buzz
// for(let countHundred = 0; countHundred <= 100; countHundred++){
//     if(countHundred % 3 === 0 && countHundred % 5 === 0){
//         console.log("FIZZ Buzz");
//     } else if(countHundred % 3 === 0){
//         console.log("Fizz");
//     } else if(countHundred % 5 === 0){
//         console.log("Buzz");
//     }
// }

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

// Capitalize Letter
let myString = "i have spoken!";
let myStringArray = myString.split(" "); //This allows to split the string into an array of strings
for(let i = 0; i < myStringArray.length; i++){
    myStringArray[i] = myStringArray[i].charAt(0).toUpperCase() + myStringArray[i].slice(1);
} //This allows to loop through each element of the array and start capitalizing the first letter of each word within a string

let newString = myStringArray.join(" "); //Now to join the elements of the array back into a string using a blankspace as a separator
console.log(newString);

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