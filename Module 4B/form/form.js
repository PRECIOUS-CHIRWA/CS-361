const signInForm = document.querySelector("#signInForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const validationMsg = document.querySelector("#validation-msg");

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameVal = username.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();

    //Validate
    if (usernameVal === "") {
        validationMsg.textContent = "Please enter your username";
        username.style.borderColor = "red";
    } else if (emailVal === "" || !emailVal.includes("@")) {
        validationMsg.textContent = "Please enter a valid email address";
        email.style.borderColor = "red";
    } else if (passwordVal === "") {
        validationMsg.textContent = "Please enter your password";
        password.style.borderColor = "red";
    }
    else if (passwordVal.length < 8) {
        validationMsg.textContent = "Password must be at least 8 characters long";
        password.style.borderColor = "red";
    }
    else {
        validationMsg.textContent = "Form submitted successfully";
        validationMsg.style.color = "green";
    }

});