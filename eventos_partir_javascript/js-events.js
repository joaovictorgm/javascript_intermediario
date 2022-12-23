document.querySelector("select[name='select-option']").
// mapeia o evento chamdo changed
addEventListener("change", function(){
    //retorna a opção escolhida 
    alert(window.event.target.value)
})