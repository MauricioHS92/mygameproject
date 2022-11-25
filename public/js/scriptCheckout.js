const button = document.querySelector('.btn-dom')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classeDoElementoClick = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper','popup-link']
    //SOME = metodo de array para testar se pelo menos um item passa na funcao atribuida retornando true / false
    //qd ele rodar o array e retorne alguma funcão inclusa no classNames 
    //ele nao tenta de novo e retorna true, e isso confirma a const para o if.
    const fechamentoDoPopup = classNames.some(className => className === classeDoElementoClick)
 
    //config para qd clicar no X , no link ou fora do popup ele fechar
    if(fechamentoDoPopup) {
        popup.style.display = 'none'
    }

})