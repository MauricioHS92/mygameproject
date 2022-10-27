const email = document.querySelector(".email");
const validator = document.querySelector(".div-pai")

validator.addEventListener("submit", (e) => {
    preventDefault(e)
    checkValues()
    
});

function checkValues() {
    let userEmailValue = email.value
    if (userEmailValue === "") {
        fieldError()
    }
};

function fieldError() {
    let fieldEmail = document.getElementById("email")
    fieldEmail.style.borderColor = "red"
}