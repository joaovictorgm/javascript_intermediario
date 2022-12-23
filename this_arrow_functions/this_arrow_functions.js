testingArrow = {
    //uma função normal dentro do contexto de onde ela foi criada
    name:"Escola de Javascript",
    normalFunction: function() {
        //com this e normalFunction e chamado o objeto
        //com arrowFunction e this.name da erro ou chama uma variavel que não está no progama
        //com arrowFunction e this pega o contexto do navegador
        console.log(this.name)
    },
    //arrowFuntion pega o contexto de onde ela é criada 
    arrowFunction: () => {
        console.log(this.name)
    }
}

//sera chamado as duas funções agora 

testingArrow.normalFunction()

//No console do navegador ele da erro
/*testingArrow.arrowFunction()*/