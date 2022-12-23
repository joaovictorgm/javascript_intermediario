function verifyEnablement() {
    let selectedValue = document.querySelector("select").value
    //aqui pegara a opção disabled e transformará ela em true
    if(selectedValue == "disabled"){
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.getElementById("message")
        //aqui a tag p receberá o texto DESABILITADO
        pElement.innerText = "DESABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
    }else {
        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.getElementById("message")
        pElement.innerText = ""
        pElement.style.color = "black"
        pElement.style.backgroundColor = "transparent"

    }
}