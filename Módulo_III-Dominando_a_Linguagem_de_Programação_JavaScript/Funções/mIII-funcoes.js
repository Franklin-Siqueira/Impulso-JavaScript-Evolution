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

// Spread - Used when CALLING a function

const callSpreadFunction = ( x, y, z) => {
   return `${x} is the first, ${y} is the second and ${z} is the third.`;
};

const items = ["x", "y", "z"]
console.log(callSpreadFunction(...items));

// Rest - Used when DEFINING a function

const callRestFunction = (...args) => {
   console.log(args.length)
};
callRestFunction( "x", "y", "z");

// returns: 3

// Object Destructuring

getUserId(user) // returns stringid-number-0
getUserFullName(user) // John Doe

const user = {
  id: "stringid-number-0",
  displayName: "John D.",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
  jobClass: "Developer",
};

const getUserId = ({ id }) => {
  return id;
};

const getUserFullName = ({
  fullName: { firstName: first, lastName: last },
}) => {
  return `${first} ${last}`;
};

const printObjectDestructureResult = () => {
  console.log(`Function getUserId(user): ${getUserId(user)}`);
  console.log(`Function getUserFullName(user): ${getUserFullName(user)}`);
};

// Loops: For / While / Do... While

// For (let i;...)
const myNumbers = [2, 44, 23, 35]; // Array of numbers
const myWord = "Paralelepípedo"; // String / Array of characters

const multiplyByTwo = (array) => {
  let resultingArray = [];
  for (let i = 0; i < array.length; i++) {
    resultingArray.push(array[i] * 2);
  }
  return resultingArray;
};

console.log(`Function multiplyByTwo() results: ${multiplyByTwo(myNumbers)}`);

// For (<property> in <object>)
const forInSampleOne = (object) => {
  for (prop in object) {
    console.log(prop);
  }
};

const forInSampleTwo = (object) => {
  for (prop in object) {
    console.log(object[prop]);
  }
};

console.log(`Function forInSampleOne(<object>):\n${forInSampleOne(user)}`);
console.log(`Function forInSampleTwo(<object>):\n${forInSampleTwo(user)}`);

// For (<property> of <object>)
const forOfSampleOne = (arrayOfCharacters) => {
  for (letter of arrayOfCharacters) {
    consol.log(letter);
  }
};

const forOfSampleTwo = (arrayOfNumbers) => {
  for (number of arrayOfNumbers) {
    consol.log(number);
  }
};

console.log(`Function forOfSampleOne(<object>):\n${forOfSampleOne(myWord)}`);
console.log(`Function forOfSampleTwo(<object>):\n${forOfSampleTwo(myNumbers)}`);

// While
const whileSample = (limit) => {
  let number = 0;
  while (number <= limit) {
    console.log(`Incremented number: ${number}`);
    number++;
  }
};

// Do... While
const doWhileSample = (base, limit) => {
  let number = base;
  do {
    console.log(`Incremented number: ${number}`);
    number++;
  } while (number <= limit);
};

console.log(`Function whileSample(<limit>):\n${whileSample(10)}`);
console.log(
  `Function doWhileSample(<base>, <limit>):\n${doWhileSample(11, 10)}`
);

// Using 'this'

// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
//
// 'this' is not a variable. It is a keyword. You cannot change the value of 'this'.
// (https://www.w3schools.com/js/js_object_constructors.asp)

// Considering a 'Person' object constructor function
function Person(id, firstName, lastName, fullName) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  // this.fullName = this.firstName + " " + this.lastName;
}

Person.prototype.getPersonFullName = function() {
  return this.firstName + " " + this.lastName;
};
//
const marketEmployee = new Person("xyz-id", "John", "Doe");

const listMarketEmployeeData = (marketEmployeeParameter) => {
  console.log("Listing new Person's Object data:\n");
  for (eAttribute in marketEmployeeParameter) {
    console.log(
      `Employee\'s ${eAttribute}: ${marketEmployeeParameter[eAttribute]}`
    );
  }
};

listMarketEmployeeData(marketEmployee);

// Also...
const marketEmployee2 = new Person();

marketEmployee2.id = "abx-id";
marketEmployee2.firstName = "Jane";
marketEmployee2.lastName = "Does's";
marketEmployee2.fullname = marketEmployee2.getPersonFullName();

listMarketEmployeeData(marketEmployee2);

const person = {
  id: marketEmployee2.id,
  firstName: marketEmployee2.firstName,
  lastName: marketEmployee2.lastName,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  getId: function(){
    return this.id;
  }
}

listMarketEmployeeData(person);

console.log(person.fullName());
console.log(person.getId());

// "this" Manipulation

const personTwo = {
  name: "John",
};
const animal = {
  name: "George",
};
const getSomethingArrow = () => {
  console.log(this.name);
}
function getSomethingFunction() {
  console.log(this.name);
}

const myObject = {
  firstAttribute: "FirstName",
  secondAttribute: "LastName",
}
function printObject( attrOne, attrTwo ) {
  console.log(`First Attribute: ${this.firstAttribute}\nSecond Attribute: ${this.secondAttribute}\nArgument One:${attrOne}\nArgument Two:${attrTwo}`)
}
// Using the 'call'method
getSomethingArrow.call(animal);
getSomethingFunction.call(animal);

printObject.call(myObject, "Arg One", "Arg Two");

// Bind

const returnName = function() {
  return this.name;
}
const returnName2 = () => this.name; // Does NOT work!

let franklin = returnName.bind({name: "Franklin"});

let carrilho = returnName2.bind({name: "Carrilho"});

console.log(`My name is ${franklin()}`);

console.log(`My name is ${carrilho()}`);

// Using the 'apply' method - MUST enclose parameters in an array
printObject.apply(myObject, ["Arg One", "Arg Two"]);

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

// Activity One

//  1. Define a function that gets a students array with a number corresponding to their average grade;
//  2. Iterate this array and populate a new array with only the students with equal or greater than
//    a specific final average grade;
//  3. Use 'Object destructuring technic' to manipulate students' desired properties.

const students = [
  {
    name: "John",
    grade: 8,
    class: "1A",
    age: 20,
  },
  {
    name: "George",
    grade: 7.5,
    class: "1B",
    age: 22,
  },
  {
    name: "Samuel",
    grade: 5.5,
    class: "1C",
    age: 19,
  },
  {
    name: "Anna",
    grade: 9,
    class: "1C",
    age: 25,
  },
  {
    name: "Joana",
    grade: 6,
    class: "1C",
    age: 18,
  },
];

// Functions

function approvedStudents(array, gradeToPass) {
  let approved = [];
  let failed = [];
  for (let i = 0; i < array.length; i++){
    array[i].grade >= gradeToPass ? approved.push(array[i].name) : failed.push(array[i].name);
  }
  return [approved, failed];
}

function approvedStudentsDestructured(array, gradeToPass) {
  let approved = [];
  let failed = [];
  for (let i = 0; i < array.length; i++){
    const { grade, name } = array[i];
    grade >= gradeToPass ? approved.push(name) : failed.push(name);
  }
  return [approved, failed];
}

console.log(`Students approved (approvedStudents):\n${approvedStudents(students, 7)[0]}\n`);
console.log(`Students failed (approvedStudentsDestructured):\n${approvedStudentsDestructured(students, 7)[1]}\n`);

// Activity Two

//  1. Define a function that gets a students array with a number corresponding to their average grade;

function calculateAge(years) {
  return `In ${years} years, ${this.name} will be ${this.age + years} old.`;
}

const calculateAgeArrow = (years) => {
  return `In ${years} years, ${this.name} will be ${this.age + years} old.`;
}
console.log(students[1]);
console.log(students[2]);
console.log(calculateAge.call(students[1], 10));
console.log(calculateAge.apply(students[2], [10]));

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
