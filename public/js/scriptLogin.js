const email = document.getElementById('email');
const password = document.getElementById('senha');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validator()
})

function validator() {
    const emailValue = email.value
    const passwordValue = password.value

    //email
    if ( emailValue === "" ){
        const fieldEmail = document.getElementById('email-error')
        fieldEmail.innerText = "Digite o seu email"
        fieldEmail.style.visibility = 'visible'
    }
}
