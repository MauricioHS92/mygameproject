const form = document.getElementById("form")
const username = document.getElementById("nome")
const email = document.getElementById("email")
const emailConfirmation = document.getElementById("email-confirmation")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")
const cpf = document.getElementById("cpf")
const telefone = document.getElementById("telefone")
const loginText = document.getElementById("login")
const loginNamevalue = loginText.value

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value
    const emailValue = email.value
    const emailConfirmationValue = emailConfirmation.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value
    const cpfValue = cpf.value
    const telefoneValue = telefone.value

    //verificação do nome
    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório")
    } else {
        setSucessFor(username)
    }
    //verificação do email
    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, digite um email válido")
    } else {
        setSucessFor(email)
    }
    //confirmação de email
    if (emailConfirmationValue === "") {
        setErrorFor(emailConfirmation, "O email é obrigatório")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(emailConfirmation, "Por favor, digite um email válido")
    } else if (emailConfirmationValue !== emailValue) {
        setErrorFor(emailConfirmation, "Emails não conferem")
    } else {
        setSucessFor(email)
    }
    //verificação da senha
    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória")
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres")
    } else {
        setSucessFor(password)
    }
    //verificação da confirmação de senha
    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatório")
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmationValue, "Senhas não conferem")
    } else {
        setSucessFor(passwordConfirmation)
    }
    //verificação do cpf
    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório")
    } else if (cpfValue < 11) {
        setErrorFor(cpf, "CPF inválido")
    } else {
        setSucessFor(cpf)
    }
    //verificação do telefone
    if (telefoneValue === "") {
        setErrorFor(telefone, "Informe um número para contato")
    } else if (telefoneValue < 11) {
        setErrorFor(telefone, "Número inválido")
    } else {
        setSucessFor(telefone)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.innerText = message
    formControl.className = "form-control error"
}

function setSucessFor(input) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.innerText = message
    formControl.className = "form-control success"
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )
}

function changeNameLogin(){
    if(req.session.user) {
        return loginNamevalue.innerText == "validar o email -> pegar id de usuario -> pegar o nome -> retornar para o header";
    }
}

//document.getElementById("login").onclick = "busque no title o valor e alterar para" ("Ola" ${id:nome});