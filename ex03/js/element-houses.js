// create element

/*Em um documento HTML, o método Document.createElement() cria o elemento HTML especificado ou um HTMLUnknownElement se o nome do elemento dado não for conhecido*/

//sintaxe

/*var elemento = document.createElement(nomedaTag)
 
.elemento é o objeto Element criado.

.nomedaTag é uma string que especifica o tipo de elemento a ser criado.*/

// Set Atribute

/*Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico*/

// Sintaxe

/*element.setAttribute(name, value)

.name é o nome do atributo como string.

.value é o novo valor desejado*/

//remove child

/*Remove um nó filho do DOM. Devolve o nó removido.*/

//Sintaxe

/*var filhoRemovido = elemento.removeChild(filho)
elemento.removeChild(filho)

.filho é o nó filho a ser removido do DOM

.elemento é o nó pai de filho

.filhoRemovido contém uma referência ao nó filho removido. filhoRemovido === filho*/

//Parent Node

/* É uma propriedade DOM somente leitura que retorna o nó(node) parente de um Node referenciado na árvore DOM*/

//Sintaxe

/*parentNode = node.parentNode

.parentNode é o node parente do node referenciado. O parente de um elemento é um Element node, um Document node. ou DocumentFragment node. Será muito complicado entender tudo isso sem conhecer a estrutura DOM e seus Elementos.*/

/*função para adicionar casa*/

function addHouse () {
    let number = document.getElementById("numberHouse")
    let district = document.getElementById("district")
    let city = document.getElementById("town")
    let area = document.getElementById("areaHouse")

    /*createElement criara um paragráfo novo*/
    let newParagraph = document.createElement("p")

    /*createTextNode() criará um nó de texto*/

    var number1 = document.createTextNode(`Numero: ` + number.value + ' - '
    + `Bairro:` + district.value + ` - ` + `Cidade: ` + city.value + ` - ` + `Area: ` + area.value)

    
    /*appendChild adiciona um nó ao final da lista de filhos de um nópai especificado. Se o nó já existir no documento, ele é removido de seu nó pai atual antes deser adicionado ao novo pai*/

    newParagraph.appendChild(number1)
    let body = document.querySelector("body")
    body.appendChild(newParagraph)
    /*setAttribute adiciona um novo atributo ou modifica o valor de um atributo existente num elemento especifico*/
    newParagraph.setAttribute("class", "newAdd")


}

function removeHouse(){
    let newAdd = document.querySelector(".newAdd")
    /*removeChild remove um nó filho do DOM. Devolve o nó removido*/
    document.body.removeChild(newAdd)

}

//Resolução
/*
function addHouse() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='numberHouse']").value
    let neighborhood = document.querySelector("input[name='district']").value
    let city = document.querySelector("input[name='city']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², número " + number + "("+ neighborhood + "-" 
    + city + ")"

    let removeButton = document.createElement("button")
    //o padrão do button e submit e ele envia formulário por isso e alterado o tipo para button com (type)
    removeButton.type = "button"
    //innerText é o texto plano que é colocado dentro da tag
    removeButton.innerText = "Remover"
   // o (this) faz a propria função como parâmetro
   // Este comando é o mesmo que <button type="button" onclick="removeHouse(this)">Remover</button>
    removeButton.setAttribute("onclick", "removeHouse(this)")

    
    //pega o elemento newListValue e adiciona um filho para ele que é o removeButton
    newListValue.appendChild(removeButton)
     
    //adicionará a lista com as informações da casa mais o botão para remover
    document.getElementById("house-list").appendChild(newValue)
}
    //botão adicionado para remover a casa 
    function removeHouse(button) {

    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)

}
*/



   




