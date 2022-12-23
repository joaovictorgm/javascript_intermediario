function addNewPhone() {
   const phoneForm = document.querySelector("form#phones")
   /*console.log(phoneForm.children)*/
   //clonar o filho com o cloneNode
   const newPhone = phoneForm.children[0].cloneNode(true)
   // parâmetro para posição dos telefones
   const phonePosition = phoneForm.children.length + 1
   //adicionara para o label o elemento clonado
   newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ":"
//(innerText) adicionará um texto ao elemento
   phoneForm.appendChild(newPhone)
   console.log(phoneForm.children)
}

function printPhones(){
   let message = ""
   const phones = document.querySelectorAll("input[name='phone']")
   phones.forEach((phone, index) => {
    message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
   })
   alert(message)
}