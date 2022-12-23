function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    //currentTarget pega o alvo que aciona o evento
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
         alert('Usuário: ' + username + 'cadastrado!')
    } else{
        alert('As senhas não conferem!')
    }
       

    

}

const button = document.getElementById('register-button')
//aqui indica que quer inserir um evento do tipo click e uma função referenciada do caso a função register
button.addEventListener('click', register)

function removeListener(){
    button.removeEventListener('click', register)
    alert('Evento removido')
}
 

button.addEventListener('mouseover',function (ev) {
    console.log(ev.currentTarget)
})