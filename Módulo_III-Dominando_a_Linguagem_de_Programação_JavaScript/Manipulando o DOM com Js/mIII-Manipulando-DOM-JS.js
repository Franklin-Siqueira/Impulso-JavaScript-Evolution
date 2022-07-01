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

// DOM Manipulation

// Methods

// Selection

document.getElementById('title');
document.getElementsByName('title');
document.getElementsByTagName('li');
document.getElementsByClassName('title');

document.querySelector('title');
document.querySelectorAll('li .option');
document.querySelectorAll('.option .optionExtra');

// Creation, removal, adding and replacement

document.createElement('element'); // Creation
document.removeChild('element'); // Removal
document.appendChild('element'); // Adding
document.replaceChild('NewElement', 'OldElement'); // Replacement

// Class manipulation examples

// Consider:
// '<div id="title" class="new-class">Any text...</div>'

const myElement = document.getElementById('title');

myElement.classList.add('new-style'); // Add new class new-style
myElement.classList.remove('new-class'); // Remove class new-class
// Add class new-class if it doesn't exist. Remove otherwise
myElement.classList.toggle('any-class');

// Result
// '<div id="title" class="new-style any-class">Any text...</div>'

// Add CSS

document.getElementsByTagName('li').style.color = "blue";

// Event types

// mouseover, mouseout
// click, dbclick
// change, load

myElement.addEventListener('click', anyCallBackFunction);

// Directly on HTML

// '<div onclick="anyCallBackFunction(this)" id="title" class="new-class">Any text...</div>'

// <script> *
  function anyCallBackFunction(id) {
    id.innerHTML = "Changed!";
  }
// </script>






//----------------------------------------------------
// Returns a string
const verifyPalindromeWithMethods = (wordString) => {
  if (!wordString) return "Return Invalid string!";
  //
  return wordString === wordString.split("").reverse().join("");
};
// Returns an error
const verifyPalindromeWithMethodsThrow = (wordString) => {
  if (!wordString) throw "Throw Invalid string error!";
  //
  return wordString === wordString.split("").reverse().join("");
};

// Handles the error
// const tryCatchSample = ( wordString ) => {
//   try {
//     verifyPalindromeWithMethodsThrow( wordString );
//   } catch(errorReturned) {
//     console.log(errorReturned);
//   }
// }
// Call returns a string
// console.log(verifyPalindromeWithMethods(''));
// // // Call interrupts execution
// verifyPalindromeWithMethodsThrow('');
// // Call tries to solve the problem
// tryCatchSample('');

// Handles the error
const tryCatchFinallySample = (wordString) => {
  try {
    verifyPalindromeWithMethodsThrow(wordString);
  } catch (errorReturned) {
    throw errorReturned;
  } finally {
    console.log(`Execução gerou o \'errorReturned\': ${wordString}`);
  }
};
// Call
tryCatchFinallySample("");

// The Error object
const MyError = new Error("Invalid message!...");

// Assign attribute
MyError.name = "InvalidMessageError";
MyError.stack;
MyError;
throw MyError;

// Activity

// 1. Define a function with an array and a number as arguments;
// 2. Check for errors:
//  2.1 ReferenceError;
//  2.1 TypeError;
//  2.1 TypeError;
//  2.1 RangeError;
// 3. Check for errors:

function validateArrayAndNumber(array, number) {
  // Error strings constants
  const REFERENCE_ERROR = "Please, use parameters [e.g. (<array>, <number>)].";
  const OBJECT_TYPE_ERROR = "Please, use an object type array.";
  const ARRAY_TYPE_ERROR = "Please, use an array and a number.";
  const ARRAY_LENGTH_ERROR = "Please, make sure to pass a valid size.";
  try {
    if (!array && !number) throw new ReferenceError(REFERENCE_ERROR);
    if (typeof array !== "object") throw new TypeError(OBJECT_TYPE_ERROR);
    if (typeof number !== "number") throw new TypeError(ARRAY_TYPE_ERROR);
    if (array.length !== number) throw new RangeError(ARRAY_LENGTH_ERROR);
    return array;
  } catch (errorFound) {
    errorHandler(errorFound);
  }
}
// Error handling function
function errorHandler(errorThrown) {
  if (errorThrown instanceof ReferenceError) {
    console.log("This is a ReferenceError!");
    console.log(errorThrown.name);
    console.log(errorThrown.stack);
  }  else if (errorThrown instanceof TypeError) {
    console.log("This is a TypeError!");
    console.log(errorThrown.name);
    console.log(errorThrown.stack);
  }  else if (errorThrown instanceof RangeError) {
    console.log("This is a RangeError!");
    console.log(errorThrown.name);
    console.log(errorThrown.stack);
  } else {
    console.log("Unerxpected Error:" + errorThrown);
  }
}
// Testing with errors
console.log(validateArrayAndNumber());
console.log(validateArrayAndNumber(5, 5));
console.log(validateArrayAndNumber([], "string"));
console.log(validateArrayAndNumber([], 5));
// Correct parameters
console.log(validateArrayAndNumber([1,2,3,4,5], 5));

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

eval(`${argumentFunction}("${argumentFunctionParameter}")`);