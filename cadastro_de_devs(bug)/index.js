
 const devs = []
 let rows = 0
 const form = document.getElementById("listDev")

 const addTecnology = document.getElementById('addTecnology')



 addTecnology.addEventListener('click', function(ev){
   ev.preventDefault()

    const listTecnologies = document.getElementById('listTecnologies')
    const newLine = document.createElement('li')
    const inputIndex = rows
    rows++
    //especificações das linhas
    newLine.innerText ="Tecnologia:  " 
    newLine.id = 'newLine' + inputIndex
    newLine.className = 'inputLines'
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.id = 'newInput ' + inputIndex
    newInput.name = 'techName'

    newLine.appendChild(newInput)
    listTecnologies.appendChild(newLine)

   

    
    const tecnologieLabel = document.createElement('label')
    tecnologieLabel.innerText = "Experiência"
    tecnologieLabel.id = tecnologieLabel  
     
    
    const newRadio1 = document.createElement('input')
    newRadio1.type = 'radio'
    newRadio1.id = 'radioid:' + inputIndex + '.1'
    newRadio1.name = 'time' + inputIndex
    newRadio1.value = '0-2anos'
    const xpLabel1 =document.createElement('label')
    xpLabel1.htmlFor = 'xpRadio:' + inputIndex + '.1'
    xpLabel1.innerText = "0-2 anos"


    const newRadio2= document.createElement('input')
    newRadio2.type = 'radio'
    newRadio2.id = 'radioid:' + inputIndex + '.2'
    newRadio2.name = 'time' + inputIndex
    newRadio2.value = '3-4 anos'
    const xpLabel2 = document.createElement('label')
    xpLabel2.htmlFor = 'xpRadio:' + inputIndex + '.2'
    xpLabel2.innerText = '3-4 anos'

    const newRadio3 = document.createElement('input')
    newRadio3.type = 'radio'
    newRadio3.id = 'radioid:' + inputIndex + '.3'
    newRadio3.name = 'time' + inputIndex
    newRadio3.value = '5 + anos'
    const xpLabel3 = document.createElement('label')
    xpLabel3.htmlFor = 'xpRadio:' + inputIndex + '.3'
    xpLabel3.innerText = '5 + anos'

    //criando um botão para remover a linha  
    const removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.innerText =  'Remover'
    removeButton.id = 'removeButton'

    removeButton.addEventListener('click',function(ev){
      listTecnologies.removeChild(newLine)
      listTecnologies.removeChild(tecnologieLabel)
    })

   tecnologieLabel.appendChild(xpLabel1)
   tecnologieLabel.appendChild(newRadio1)
   tecnologieLabel.appendChild(xpLabel2)
   tecnologieLabel.appendChild(newRadio2)
   tecnologieLabel.appendChild(xpLabel3)
   tecnologieLabel.appendChild(newRadio3)
   tecnologieLabel.appendChild(removeButton)
   listTecnologies.appendChild(tecnologieLabel)




    
  

 })
//função do botão para cadastrar as informações do usuário
 form.addEventListener('submit', function(ev){
   ev.preventDefault()

   const devName = document.getElementById('devname').value
   //pega todas as linhas com a clasee inputLines
   const inputLines = document.querySelectorAll('.inputLines')

   // armazenar as informações cadastradas 
   let stacks = []
   inputLines.forEach(function(row){
      //essa variavel pega o id e o name da linha criada com o value dela 
      const tecnologieName = document.querySelector('#'  + row.id + 'input[name="tecnologieName"]').value
      //essa variavel pega o id e o tipo radio da linha com a opção marcada e retorna o valor dela 
      const tecnologieExp = document.querySelector('#' + row.id + 'input[type="radio"]: checked').value
      // cadastro do desenvolvedor e seu tempo de experiencia 
      stacks.push({name:tecnologieName, exp:tecnologieExp})

   })
   // cadastra as tecnologias apreendiadas pelo desenvolvedor e adiciona ao array
   const newDeveloper = {fullname:devName.value, tecnologies:stacks}
   devs.push(newDeveloper)
   alert('Desenvolvedor cadastrado com sucesso!')
   //input do name ficara vazio sendo possivel utilizar novamente
   

  
   
   console.log(devs)

 })


