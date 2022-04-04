const singupForm = document.getElementById("signup__form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const password = document.getElementById("password");
const email = document.getElementById("email");
// add an event listener to the form for the submit event
singupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInput(lastName);
    validateInput(firstName);
    validateEmail(email);
    validatePassword(password);
});

function validateInput(element) {
    // check if input is empty
    if (!element.value) {
        return element.parentElement.classList.add("invalid");
    }
    // remove invalid class
    element.parentElement.classList.remove("invalid");
}

function validateEmail(element) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(element.value));
    if (!re.test(element.value)) {
        element.parentElement.classList.add("invalid");
        console.log(element.parentElement);
        element.nextElementSibling.innerText = element.value
            ? "Looks like this is not an email"
            : "Email cannot be empty";
    } else {
        element.parentElement.classList.remove("invalid");
    }
}

// validate password
function validatePassword(element) {
    const lengthRegex = /^.{8,}$/;
    if (!lengthRegex.test(element.value)) {
        element.parentElement.classList.add("invalid");
        element.nextElementSibling.innerText = element.value
            ? "Password has to be at least 8 characters long"
            : "Password cannot be empty";
    } else {
        element.parentElement.classList.remove("invalid");
    }
}
