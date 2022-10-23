window.onload = function() {
    
    
    //focus
    let fieldSenha = document.getElementById('password')
    //'escutando' o evento e aplicando uma ação
    fieldSenha.addEventListener('focus', () => {
        passwordInstruction()
    })
    function passwordInstruction() {
        let fieldInput = document.querySelector('#password-msg')
        fieldInput.innerText = 'Mínimo 6 caracteres'
        fieldInput.style.visibility = 'visible'
    }
   
}

// let fieldInput = document.querySelector('.password')
//         fieldInput.style.borderColor = 'green'




// const username = document.getElementById("nome");
// const usernameValue = username.value
// console.log(username)

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     checkInputs()
//     console.log(username.value)
// });

// function checkInputs() {
//     const usernameValue = username.value

//     if (usernameValue === '') {
//         setErrorFor(username, 'O nome de usuário é obrigatório')
//     } else {
//         setSuccesFor(username)
//     }
// }

// function setSuccesFor (input, message) {
//     const formControl = input.parentElement
//     formControl.classList.remove('input')
//     formControl.classList.add('input-succes')
//     small.innerText = message
// }

// function setErrorFor (input, message) {
//     const formControl = input.parentElement
//     formControl.classList.remove('input')
//     formControl.classList.add('input-error')
// }





// const form = document.getElementById("form")
// const email = document.getElementById("email")
// const emailConfirmation = document.getElementById("email-confirmation")
// const password = document.getElementById("password")
// const passwordConfirmation = document.getElementById("password-confirmation")
// const cpf = document.getElementById("cpf")
// const telefone = document.getElementById("telefone")

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     checkInputs()
//     console.log(telefoneValue)
// });

// function checkInputs() {

//     const usernameValue = username.value
//     const emailValue = email.value
//     const emailConfirmationValue = emailConfirmation.value
//     const passwordValue = password.value
//     const passwordConfirmationValue = passwordConfirmation.value
//     const cpfValue = cpf.value
//     const telefoneValue = telefone.value

//     //verificação do nome
//     if (usernameValue === "") {
//         setErrorFor(username, "O nome de usuário é obrigatório")
//     } else {
//         setSucessFor(username)
//     }
//     //verificação do email
//     if (emailValue === "") {
//         setErrorFor(email, "O email é obrigatório")
//     } else if (!checkEmail(emailValue)) {
//         setErrorFor(email, "Por favor, digite um email válido")
//     } else {
//         setSucessFor(email)
//     }
//     //confirmação de email
//     if (emailConfirmationValue === "") {
//         setErrorFor(emailConfirmation, "O email é obrigatório")
//     } else if (!checkEmail(emailValue)) {
//         setErrorFor(emailConfirmation, "Por favor, digite um email válido")
//     } else if (emailConfirmationValue !== emailValue) {
//         setErrorFor(emailConfirmation, "Emails não conferem")
//     } else {
//         setSucessFor(email)
//     }
//     //verificação da senha
//     if (passwordValue === "") {
//         setErrorFor(password, "A senha é obrigatória")
//     } else if (passwordValue.length < 7) {
//         setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres")
//     } else {
//         setSucessFor(password)
//     }
//     //verificação da confirmação de senha
//     if (passwordConfirmationValue === "") {
//         setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatório")
//     } else if (passwordConfirmationValue !== passwordValue) {
//         setErrorFor(passwordConfirmationValue, "Senhas não conferem")
//     } else {
//         setSucessFor(passwordConfirmation)
//     }
//     //verificação do cpf
//     if (cpfValue === "") {
//         setErrorFor(cpf, "O CPF é obrigatório")
//     } else if (cpfValue < 11) {
//         setErrorFor(cpf, "CPF inválido")
//     } else {
//         setSucessFor(cpf)
//     }
//     //verificação do telefone
//     if (telefoneValue === "") {
//         setErrorFor(telefone, "Informe um número para contato")
//     } else if (telefoneValue < 11) {
//         setErrorFor(telefone, "Número inválido")
//     } else {
//         setSucessFor(telefone)
//     }
// };

// function setErrorFor(input, message) {
//     const formControl = input.parentElement
//     formControl.classList.remove('input')
//     formControl.classList.add('input-error')
//     small.innerText = message
// };

// function setSucessFor(input) {
//     const formControl = input.parentElement
//     formControl.classList.remove("input")
//     formControl.classList.add('input-succes')
//     small.innerText = message
// };


// function checkEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email
//     )
// }
