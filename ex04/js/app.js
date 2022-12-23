class App {
    //método
    //adicionando o constructor
    addregisterHouses(){
        //preventDefault previne que o objeto faça uma ação padrão
        event.preventDefault()
        let type = document.querySelector("select[name='type']").value
        let area = document.querySelector("input[name='area']").value
        let condition = document.querySelector("input[name='condition']").checked
        //area que sera adicionado para a lista 
        let property = new registerHouses (type, area, condition)
        this.addHousesList(property)
        this.cleanForm()

    }

    addHousesList(property) {
        //adionando em forma de lista 
        let listElement = document.createElement("li")
        let propertyInfo = "Tipo: " + property.type + " (Área: " + property.area + "m²)"
        //se for alugado
        if(property.condition) {
            //adicionará o elemento DOM 
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        }
        listElement.innerHTML += propertyInfo
        //será criado um botão para remover
        let buttonToRemove = this.createRemoveButton()
        //adicionará o botão a um novo elemento
        listElement.appendChild(buttonToRemove)
        //adicionando ao HTML
        document.getElementById("properties").appendChild(listElement)
    }
    //metódos para colocar a palavra "ALUGADO" e colocar o background e altera a cor
    createRentedMark() {
        let rentedMark = document.createElement("span")
        //alterar a cor
        rentedMark.style.color = "white"
        //altera o background
        rentedMark.style.backgroundColor = "red"
        //adiciona o texto
        rentedMark.innerText = "ALUGADO"
        //aqui espera ser retornado na linha 22
        return rentedMark


    }
    //criando  o botão de remoção
    createRemoveButton() {
        let buttonToRemove = document.createElement("button")
        //método para remoção de botão, onde o onclick adionará o método remove e chamara uma instância do app
        buttonToRemove.setAttribute("onclick", "app.remove()")
        //adiciona um texto ao botão 
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }
    // este metódo vai limpar o input name='area' e vai desmarcar o checkbox de alugado caso esteja alugado
    cleanForm() {
        //como vai ser limpo ele vai receber o valor vazio
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='condition']").checked = false

    }

    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
    }

}
	
