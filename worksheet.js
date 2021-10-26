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

//Reserve a String
function aStringReversed(aWord){
    let reversedString = "";
    for(let i = aWord.length - 1; i >= 0; i--){
        reversedString += aWord[i];
    }
    console.log(reversedString);
    return reversedString;
}

aStringReversed("Hello");