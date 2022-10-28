const { formatNamedParameters } = require("sequelize/types/utils");

const email = document.querySelector("#email");
const name = document.querySelector("#name");
const emailError = document.querySelector("#email-error");
const nameError = document.querySelector("#name-error");
const form = document.querySelector(".formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const result = checkValues() 
    if (result) form.submit()
});

function checkValues() {
    let userEmailValue = email.value
    let userNameValue = name.value

    if (userEmailValue === "" || !userEmailValue) {
        showEmailError()
        return false
    }

    
    if (userNameValue === "" || !userNameValue) {
        showNameError()
        return false
    }
        return true
};

function showEmailError() {
    email.style.borderColor = "red"
    emailError.innerText = "Campo Obrigatório"
};

function showNameError() {
    name.style.borderColor = "red"
    nameError.innerText = "Campo Obrigatório"
}