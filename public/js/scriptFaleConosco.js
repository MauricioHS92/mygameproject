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
    if (userEmailValue === "" || !userEmailValue) {
        showEmailError()
        return false
    }
    return true
};

function showEmailError() {
    email.style.borderColor = "red"
    emailError.innerText = "Campo Obrigatório"
};





/*
input.onblur = function() {
    if (!input.value.includes('@')) {
    input.classList.add('invalid');
    error.innerHTML = "Insira um e-mail válido."
    }
};

input.onfocus = function() {
    if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
    }
};
*/