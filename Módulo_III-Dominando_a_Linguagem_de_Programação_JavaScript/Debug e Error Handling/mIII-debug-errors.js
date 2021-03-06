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

// Debug and Error Handling

// Throw and return / try... catch

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
    console.log(`Execu????o gerou o \'errorReturned\': ${wordString}`);
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
// --------------------------------------------------------
// Desafio Ataque, Pedra e Papel

// ataque > pedra > papel
// ataque && ataque = aniquila????o
// papel && papel = empate (ambos vencem)
// pedra && pedra = ningu??m ganha (sem ganhador)

// let N = parseInt(gets());
// let jogador1, jogador2;

// for (let i = 0; i < N; i++) {
//     jogador1 = gets().toLowerCase();
//     jogador2 = gets().toLowerCase();            
//     if(jogador1 === "ataque" && jogador2 === "ataque") print("Aniquilacao mutua");
//     else if (jogador1 === "papel" && jogador2 === "papel") print("Ambos venceram");
//     else if (jogador1 === "ataque") print("Jogador 1 venceu");
//     else if (jogador2 === "ataque") print("Jogador 2 venceu");
//     else if (jogador2 === "papel") print("Jogador 1 venceu");
//     else if (jogador1 === "papel") print("Jogador 2 venceu");
//     else print("Sem ganhador");

// Varia????o poss??vel:

//     if(jogador1 === "ataque" && jogador2 === "ataque") print("Aniquilacao mutua");
//     else if (jogador1 === "papel" && jogador2 === "papel") print("Ambos venceram");
//     else if (jogador1 === "ataque" || jogador2 === "papel") print("Jogador 1 venceu");
//     else if (jogador2 === "ataque" || jogador1 === "papel") print("Jogador 2 venceu");
//     else print("Sem ganhador");
// ----------------------------------------------------------
// Desafio Jogo 2

// Tri-du ?? um jogo de cartas derivado do popular jogo de Truco. O jogo utiliza um baralho normal de 52 cartas, com treze cartas de cada naipe, mas os naipes s??o ignorados. Apenas o valor das cartas,considerados como inteiros de 1 a 13, s??o utilizados.

// No jogo, cada jogador recebe tr??s cartas. As regras s??o simples:

//     Um trio (tr??s cartas de mesmo valor) ganha de uma dupla (duas cartas de mesmo valor).
//     Um trio formado por cartas de maior valor ganha de um trio formado por cartas de menor valor.
//     Uma dupla formada por cartas de maior valor ganha de uma dupla formada por cartas de menor valor.

// Note que o jogo pode n??o ter ganhador em muitas situa????es; nesses casos, as cartas distribu??das s??o devolvidas ao baralho, que ?? embaralhado e uma nova partida ?? iniciada

// Um jogador j?? recebeu duas das cartas que deve receber, e conhece seus valores. Sua tarefa ?? escrever um programa para determinar qual o valor da terceira carta que maximiza a probabilidade de esse jogador ganhar o jogo.
// Entrada

// A entrada consiste de uma ??unica linha que cont??m dois inteiros, A (1 ??? A ??? 13) e B (1 ??? B ??? 13) indicando os valores das duas primeiras cartas recebidas.
// Sa??da

// Seu programa deve produzir uma ??nica linha com um inteiro representando o valor da carta que maximiza a probabilidade de o jogador ganhar a partida.
 
// Exemplo de Entrada 	Exemplo de Sa??da

// 10 7                       10

// 2 2                        2 

// let [A, B] = gets().split(" ").map(Number);
// let C;

// if(A > B){
//   C = A;
// }
// else{
//   C = B;
// }
// print(C);

// Evaluate arguments (MUST be placed at the bottom of the script)

eval(`${argumentFunction}("${argumentFunctionParameter}")`);
