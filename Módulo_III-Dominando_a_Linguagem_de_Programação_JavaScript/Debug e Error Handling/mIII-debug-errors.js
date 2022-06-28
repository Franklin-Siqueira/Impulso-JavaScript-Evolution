"use strict";
// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// Running the functions from COMMAND LINE

// Considering Node.Js is installed:

// > node palindromo.js methodsBasedPalindrome omo
// > node palindromo.js instructionBasedPalindrome omo
// > node palindromo.js replaceEvenNumbers "[12,34,56,5,43,2,1]"

// Process requirements...

if (process.argv[2] !== null && process.argv[2] !== undefined) {
  var argumentFunction = process.argv[2];
  if (process.argv[3] !== null && process.argv[3] !== undefined) {
    var argumentFunctionParameter = process.argv[3].startsWith("[")
      ? JSON.parse(process.argv[3])
      : process.argv[3];
  } else {
    console.log(`\nA VALUE is required!\n`);
    return;
  }
} else {
  console.log(`\nA FUNCTION is required!\n`);
  return;
}

var returnEmpty = "Empty or non-existent word! Pleas, try again...";

var returnTrue = "'s a palindrome!";
var returnFalse = "'s not a palindrome!";

console.log(`\nFunction argument: ${argumentFunction}`);
console.log(`Function argument passed value: ${argumentFunctionParameter}`);
console.log("\nValue returned: ");

// Functions



// ----------------------------------------------
// Instrucions Based Palindrome Check Function

const instructionBasedPalindrome = (wordString) => {
  let wordStringValid = wordString;

  if (!wordStringValid || wordStringValid == "undefined") {
    return console.log(returnEmpty);
  }

  for (let i = 0; i < wordString.length / 2; i++) {
    if (wordString[i] !== wordString[wordString.length - 1 - i]) {
      return console.log(`${wordString}${returnFalse}`);
    }
  }

  // let returnResult = (reverseWordString === wordString) ?
  //         returnTrue :
  //         returnFalse
  //       ;
  console.log(`${wordString}${returnTrue}`);
};

// Evaluate numbers Function

const replaceEvenNumbers = (numbersArray) => {
  // Check parameter array
  if (numbersArray !== "null" && numbersArray !== "undefined") {
    let splittedNumbersArray = numbersArray.split(",");
    let replacements = 0;
    console.log(`Received array: [${numbersArray}]`);
    console.log(`Interpreted type: ${typeof numbersArray.split(",")}`);
    console.log(`Second item before splitting: ${numbersArray[2]}`);
    console.log(`Second item after splitting: ${splittedNumbersArray[2]}\n`);
    // Replacing if needed
    console.log("Replacing array elements...\n");
    for (let i = 0; i < splittedNumbersArray.length; i++) {
      if (splittedNumbersArray[i] === 0) {
        console.log("Already a zero!...");
      } else if (splittedNumbersArray[i] % 2 === 0) {
        console.log(`Replaced ${splittedNumbersArray[i]} with zero!...)`);
        splittedNumbersArray[i] = 0;
        replacements += 1;
      }
    }
    console.log(
      `\nResulting array after ${replacements} replacements: ${splittedNumbersArray}\n`
    );
    return;
  }
};

// Evaluate arguments (MUST be placed at the bottom of the script)

eval(`${argumentFunction}("${argumentFunctionParameter}")`);
