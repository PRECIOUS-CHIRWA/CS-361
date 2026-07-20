//Task 1 Setup
console.log("Precious Chirwa");

alert("Welcome to Module 4: JavaScript Basics!");


//Task 2 Variables and Types
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


//Task 3 Simple calculator
const num1 = 7;
const num2 = 9;

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);
console.log(`The modulo of ${num1} and ${num2} is ${num1 % num2}`);
console.log(`The power of ${num1} to the ${num2} is ${num1 ** num2}`);


// Task 4 String methods practice
let greet1 = "Hi, my name is " + studentName;
const fullGreeting = `${greet1} I am a ${currentYear} student at ${university}.`;
console.log(fullGreeting);

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
console.log(`Does my name include 're'? ${studentName.includes('re')}`);

//trim
let hobbies = "  Reading,  Cooking  ";
console.log(`Trimmed hobbies: ${hobbies.trim()}`);


//Task 5 Comparison logic
let score = 96;

console.log(`Is the score between 50 and 59?` + (score >= 50 && score <= 59) ? "Yes. Your score is grade is C" :
    `Is your score between 60 and 69?` + (score >= 60 && score <= 69) ? "Yes. Your score is grade is B"
        : `Is the score between 70 and 76? ` + (score >= 70 && score <= 76) ? "Yes. Your score is grade is B+"
            : `Is your score between 77 and 85? ` + (score >= 77 && score <= 85) ? "Yes. Your score is grade is A"
                : `Is your score between 86 and 100? ` + (score >= 86 && score <= 100) ? "Yes. Your score is grade is A+"
                    : "Fail.");



//Task 6 Grade decider
let score0 = 97;

if (score0 >= 50 && score0 <= 59) {
    console.log("Pass");
}
else if (score0 >= 60 && score0 <= 69) {
    console.log("Credit");
}
else if (score >= 70 && score <= 76) {
    console.log("Merit 2");
}
else if (score >= 77 && score <= 85) {
    console.log("Merit 1");
}
else if (score >= 86 && score <= 100) {
    console.log("Distinction");
}
else {
    console.log("Fail");
}

