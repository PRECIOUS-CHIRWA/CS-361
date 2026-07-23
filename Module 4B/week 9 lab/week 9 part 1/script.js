// Task 1
//Grab
const heading = document.querySelector("#heading");
const para = document.querySelector(".para");

//Modify
heading.textContent = "Grade Calculator";
para.style.background = "honeydew";
para.style.borderRadius = "5px";
para.style.padding = "8px";


// Task 2 Click Counter
const btn = document.querySelector("#counter-btn");
const counter = document.querySelector(".display-counter");
let clickCount = 0;

//Add event listener
btn.addEventListener("click", () => {
    clickCount++;
    counter.textContent = clickCount;
});


// Task 3 Toggle a Theme
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// Task 4 Build a list from data
//Grab
const taskList = document.querySelector(".tasks");
const addTaskBtn = document.querySelector("#plus-task-btn");
const tasks = ["Study", "Code", "Read", "Paint"];

//Render current tasks
taskList.innerHTML = tasks.map(t => `<li>${t}</li>`).join("");

//add task programmatically
addTaskBtn.addEventListener("click", () => {
    const newTask = document.createElement("li");
    newTask.textContent = "Pray";
    taskList.appendChild(newTask);
});

// Task 5 Live Search Filter
const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", (e) => {
    const queryTerm = e.target.value.toLowerCase();
    const found = document.createElement("div");
    //const taskS = taskList.querySelectorAll("li");

    tasks.forEach(item => {
        const task = item.textContent.toLowerCase();

        if (task.includes(queryTerm)) {
            found.textContent = item.style.display = "";
        }
        else {
            found = item.style.display = "none";
        }
    });
});
