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