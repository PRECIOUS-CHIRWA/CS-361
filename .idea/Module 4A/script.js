// Task 1: Loop patterns
// Loop 1: Counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);

    //Only even numbers
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Loop 2: countdown
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    if (countdown === 1) {
        console.log("Lift off!");
    }
    countdown--;
}


// Task 2: Reusable Functions
function addTax(price) {
    return price + (price * 0.16);
}
function classify(score) {
    if (score >= 80) return "Distinction";
    if (score >= 70) return "Merit";
    if (score >= 60) return "Credit";
    if (score >= 50) return "Pass";
    return "Fail";
}
function greet(name) {
    return `Welcome, ${name}! We hope you enjoy interning at HENGGE.`;
}
// Test them
console.log("Taxed Price:", addTax(100));
console.log("Taxed Price:", addTax(1000));

console.log("Grade:", classify(85));
console.log("Grade:", classify(95));

console.log(greet("Precious"));
console.log(greet("Khotsilathi"));


//Task 3: Arrow Functions
const addTaxArrow = (price) => price + (price * 0.16);

const classifyArrow = (score) => {
    if (score >= 80) return "Distinction";
    if (score >= 70) return "Merit";
    if (score >= 60) return "Credit";
    if (score >= 50) return "Pass";
    return "Fail";
}

const greetArrow = (name) => `Welcome, ${name}! We hope you enjoy interning at HENGGE.`;


// Task 4: Student Object
const student = {
    name: "Precious Chirwa",
    age: 24,
    year: 4,
    scores: [85, 90, 97, 92],
    getAverage() {
        const sum = this.scores.reduce((total, val) => total + val, 0);
        return sum / this.scores.length;
    }
};
console.log("Average Score:", student.getAverage());


// Task 5: Array of Students
const students = [
    { name: "Ella", scores: [87, 90], average: 88.5 },
    { name: "Ronny", scores: [40, 50], average: 45 },
    { name: "Chanda", scores: [70, 75], average: 72.5 },
    { name: "David", scores: [90, 95], average: 92.5 },
    { name: "Niza", scores: [50, 49], average: 49.5 }
];
// for...of loop
for (const s of students) {
    console.log(s.name);
}
// filter & map
const passingStudents = students
    .filter(s => s.average >= 50)
    .map(s => s.name);
console.log("Passing Students:", passingStudents);


// Task 6: Put it together
function processStudent(studentList) {
    if (!studentList || studentList.length === 0) {
        throw new Error("Student list cannot be empty");
    }

    try {
        studentList.forEach(s => {
            const grade = classifyArrow(s.average);
            console.log(`Student : ${s.name} | Average : ${s.average} | Grade : ${grade}`);
        });
    }
    catch (err) {
        console.log("Error processing students" + err.message);
    }
    finally {
        console.log("Processing complete.");
    }
}

processStudent(students);
processStudent([]);