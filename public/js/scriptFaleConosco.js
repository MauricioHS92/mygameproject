const email = document.querySelector(".email");

email.addEventListener("submit", () => {
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