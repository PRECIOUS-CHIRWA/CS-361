console.log("Precious Chirwa");

alert("Welcome to Module 4: JavaScript Basics!");

const studentName = "Precious Chirwa";
const university = "The Copperbelt university";
const program = "CS";
let currentYear = 3;
let age = 23;

console.log(`Name: ${studentName} Type: ` + typeof studentName);
console.log(`University: ${university} Type: ` + typeof university);
console.log(`Program: ${program} Type: ` + typeof program);
console.log(`Year: ${currentYear} Type: ` + typeof currentYear);
console.log(`Age: ${age} Type: ` + typeof age);

//reassigning 
age = 24;
currentYear = 4;
console.log("Updated Age: ${age}");
console.log("Updated Year: ${currentYear}");

//Simple calculator
const num1 = 7;
const num2 = 9;

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);
console.log(`The modulo of ${num1} and ${num2} is ${num1 % num2}`);
console.log(`The power of ${num1} to the ${num2} is ${num1 ** num2}`);

//Strings practice
let greet1 = "Hi, my name is " + studentName;
const fullGreeting = `${greet1} I am a ${currentYear} student at ${university}.`;
console.log(fullGreeting);

// String methods
//Length of name
console.log(`Length of my name: ${studentName.length} characters`);

//to UPPERCASE
console.log(`Convert my name to uppercase: ${studentName.toUpperCase()}`);

//slice
console.log(`First 5 characters of my name: ${studentName.slice(0, 5)}`);

//split
console.log(`Split my name into 2 words: ${studentName.split(" ")}`);

//replace
console.log(`Replace Copperbelt with CBU: ${university.replace("The Copperbelt university", "CBU")}`);

//includes
console.log(`Does my name include \'re\'? ${studentName.includes('re')}`);

//trim
let hobbies = "  Reading,  Cooking  ";
console.log(`Trimmed hobbies: ${hobbies.trim()}`);

//Comparison logic
let score = 99;

