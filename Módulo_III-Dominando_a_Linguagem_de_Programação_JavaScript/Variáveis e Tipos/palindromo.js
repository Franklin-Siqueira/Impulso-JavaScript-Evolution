"use strict";
// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// Running the functions from COMMAND LINE

// Considering Node.Js is installed:

// > node palindromo.js methodsBasedPalindrome omo
// > node palindromo.js instructionBasedPalindrome omo
// > node palindromo.js replaceEvenNumbers "[12,34,56,5,43,2,1]"

// Variables

var course = "DIO Impulse Bootcamp";
var courseModule = "Dominando a Linguagem JavaScript";
var moduleClass = "Variáveis e Tipos";
var classInstructor = "Stephany Nusch";
var classInstructorURL = "Stephanie ...";
var classTopic = "Palíndromo";
var classTopicTags = [
  "JavaScript",
  "NodeJs",
  "Command line",
  "Functions",
  "Methods",
  "Variables",
  "strings",
  "Console.log",
  "Regex",
  "expressions",
  "string interpolations",
  "eval",
  "join()",
  "reverse()",
  "split()",
  "operators",
  "arrow functions",
];
var topicDefinition =
  "Palíndromo, do grego palin (novo) e dromo (percurso), é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido. Também chamadas de anacíclicas, elas devem ser lidas considerando-se apenas as letras. Isso quer dizer que não se consideram acentos e, no caso das frases, também não se deve considerar a pontuação e o espaço entre as palavras. Experimente com a frase 'Socorram-me, subi no ônibus em Marrocos'.";
var topicLanguage = "Portuguese";
var topicLangSymbol = "pt-Br";
var defAuthor = "Márcia Fernandes";
var defAuthorProfileURL = "Márcia Fernandes";
var defAuthorBio = "Professora licenciada em Letras";
var defURL = "https://www.todamateria.com.br/palindromo/";

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

// Methods Based Palindrome Check Function

const methodsBasedPalindrome = (wordString) => {
  let wordStringValid = wordString;

  if (!wordStringValid || wordStringValid == "undefined") {
    return console.log(returnEmpty);
  }

  let reverseWordString = wordString.split("").reverse().join("");

  let returnResult =
    reverseWordString === wordString ? returnTrue : returnFalse;
  console.log(`${wordString}${returnResult}`);
};

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
