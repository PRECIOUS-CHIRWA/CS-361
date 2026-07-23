const signInForm = document.querySelector("#signInForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const validationMsg = document.querySelector(".validation-msg");

function resetValidationStyles() {
    validationMsg.classList.remove("error");
    validationMsg.classList.remove("success");

    [email, username, password].forEach((element) => {
        element.style.borderColor = "";
    });
}

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    resetValidationStyles();

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    //Validate
    if (usernameVal === "") {
        validationMsg.classList.add("error");
        validationMsg.textContent = "Please enter your username";
    } else if (emailVal === "" || !emailVal.includes("@")) {
        validationMsg.classList.add("error");
        validationMsg.textContent = "Please enter a valid email address";
    } else if (passwordVal === "") {
        validationMsg.classList.add("error");
        validationMsg.textContent = "Please enter your password";
    }
    else if (passwordVal.length < 8) {
        validationMsg.classList.add("error");
        validationMsg.textContent = "Password must be at least 8 characters long";
    }
    else {
        validationMsg.textContent = "Form submitted successfully";
        validationMsg.classList.add("success");
    }

});