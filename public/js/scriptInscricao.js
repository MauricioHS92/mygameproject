
    //focus -- instruções para os campos telefone e senha
    const fieldPassword = document.getElementById('password')
    const fieldPhone = document.getElementById('telefone')
    const password = document.getElementById('password')
    const passwordConfirmation = document.getElementById("password-confirmation")
    const form = document.getElementById('form')
    const email = document.getElementById('email')
    const username = document.getElementById('name')
    const emailConfirmation = document.getElementById('email-confirmation')
    const userCpf = document.getElementById('cpf')
    const phone = document.getElementById('telefone')
    
    //'escutando' os eventos e aplicando uma ação
    fieldPassword.addEventListener('focus', (e) => {
        e.preventDefault()
        passwordInstruction()
        
    })

    fieldPhone.addEventListener('focus', (e) => {
        e.preventDefault()
        phoneInstruction()
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const result = checkDatas()
        if (result) form.submit()
    })

    //mensagem de instrução de senha
    function passwordInstruction() {
        let fieldInput = document.querySelector('#password-msg')
        fieldInput.innerText = 'Mínimo 6 caracteres'
        fieldInput.style.color = 'yellow'
        fieldInput.style.visibility = 'visible'
    }
    //mensagem de instrução de telefone
    function phoneInstruction() {
        let fieldPhoneInput = document.querySelector('#telefone-msg')
        fieldPhoneInput.innerText = 'Não esqueça o código da área'
        fieldPhoneInput.style.color = 'yellow'
        fieldPhoneInput.style.visibility = 'visible'
    }

    function checkDatas() {
        const emailValue = email.value
        const passwordConfirmationValue = passwordConfirmation.value
        const passwordValue = password.value
        const nameValue = username.value
        const emailConfirmationValue = emailConfirmation.value
        const cpfValue = userCpf.value
        const phoneValue = phone.value


        //email
        if( emailValue === "" ) {
            setErrorEvent(email, "Email é obrigatório")
            return false
        } 

        else if( !emailValue.includes('@') ) {
            setErrorEvent(email, "Email inválido")
            return false
        }
        //confirmação de email
        if( emailConfirmationValue === "" ){
            setErrorEvent(emailConfirmation, "Confirme seu email")
            return false
        }
        //senha
        if ( passwordValue === "" || passwordValue <= 5 ) {
            setErrorEvent(password, "Mínimo 6 caracteres")
            return false
        }
        //confirmação de senha
        if( passwordConfirmationValue === "" ) {
            setErrorEvent(passwordConfirmation, "Confirme sua senha")
            return false
        }

        else if( passwordConfirmationValue !== passwordValue ) {
            setErrorEvent(passwordConfirmation, "Senhas não conferem")
            return false
        }
        //nome
        if ( nameValue === "" ) {
            setErrorEvent(username, "Nome é obrigatório")
            return false
        }
        //cpf
        if( cpfValue === "" || cpfValue <= 10 ) {
            setErrorEvent(userCpf, "CPF inválido")
            return false
        }
        //telefone
        if( phoneValue === "" || phoneValue <= 10) {
            setErrorEvent(phone, "Telefone é obrigatório")
            return false
        }
        return true
    }

    function setErrorEvent(input, message) {
        const formControl = input.parentElement
        const errorMessage = formControl.querySelector('small')
        errorMessage.innerText = message
        formControl.className = 'datas error'
    };