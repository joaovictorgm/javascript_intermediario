function register(element) {
    //element é o parâmetro que esta sendo referenciado na função 
    //chindren e as propriedades que estão disponiveis no html os filhos no caso 
   const username = element.children.username.value
   const password = element.children.password.value
   const passwordConfirmation = element.children.passwordConfirmation.value

   console.log({username, password, passwordConfirmation})

 if(password === passwordConfirmation){
    alert("Usúario: " + username + " registrado!")
 } else {
    alert("As senhas não conferem!")
 }
}