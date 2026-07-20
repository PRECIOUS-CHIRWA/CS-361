// Task 1
//Grab
const heading = document.querySelector("#heading")
const para = document.querySelector(".para")

//Modify
heading.textContent = "Grade Calculator";
para.computedStyleMap.color = honeydew;


// Task 2
const btn = document.querySelector("#counter-btn");
const counter = document.querySelector(".display-counter");
let clickCount = 0;

//Add event listener
btn.addEventListener("click", () => {
    clickCount++;
    counter.textContent = clickCount;
});
