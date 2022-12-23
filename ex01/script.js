class Spaceship {
    constructor(name, crew, hitched, gate){
        this.name = name
        this.crew = crew
        this.hitched = false
        this.gate = false
        //classe com construtor
        }
        //engatando
        hitching() {
            this.hitched = true
            this.doors = true
        }
    }

    let spaceStation = new Array()

    function createSpaceship(){
        let name = prompt('Nome da nave')
        let crew = Number(prompt('Quantidade de tripulantes'))
    

    let newSpaceship = new Spaceship(name, crew)
    newSpaceship.hitching
    spaceStation.push(newSpaceship)
    }

    function showSpaceships(spaceStation){
        let spaceship = ''
        spaceStation.forEach((spaceStation, index = 0) =>{
            spaceship += "\nN"+ (index + 1)+ "\nNave: " + spaceStation.name + "\nTripulação: " + spaceStation.crew
             
            
        })
        alert(spaceship)
    }

    function menu() {
        let option
        while(option != 3) {
            option = prompt(`Sistema de acoplamento:'
            1 - Acoplar nave
            2 - Mostrar naves acopladas
            3 - Sair`)
            switch(option) {
                case '1':
                    createSpaceship()
                    break
                case '2':
                    showSpaceships(spaceStation)
                    break
                case '3':
                    default:
                    alert( 'Comando inválido')
            }
        }
    }

    menu()


    // resolução professor

    /*class Spaceship {
        constructor(name, crewQuantity){
            this.name = name
            this.crewQuantity = crewQuantity
            this.isHitched = false
            this.entraceDoorsOpen = false
            //constructor para naves engatadas e com portas abertas
        }
        hitch() {
            this.isHitched = true
            this.entranceDoorsOpen = true
            // metodos se a portas e o engate forem verdadeiros
        }
        
    }
    \\função para aparecer o menu
    function showMenu() {
        let chosenOption
        while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){

        //ira repetir o menu ate aparecer a opção certa

        chosenOption = prompt( "O que deseja fazer?\n" + 
        "1- Engatar nave\n" + 
        "2- Imprimir naves\n" + 
        "3- Sair do programa")

        }
        return chosenOption
    }

    function createSpaceship () {
        let spaceshipName = prompt("Informe o nome da nave")
        let crewQuantity = prompt("Informe a quantidade de tripulantes")
        let spaceship = new Spaceship (spaceshipName, crewQuantity)
        return spaceship
    }

    function printSpaceshipList(spaceships) {
        let spaceshipList = ''
        spaceships.forEach((spaceship, index) => {
            spaceshipList += (index + 1) + "- " + spaceship.name + "(" + spaceship.crewQuantity + "tripulantes)\n"
        })
        alert(spacechipList)     
    }

    let hitchedSpaceships = [] //array vazio
    
    let chosenOption 

    while(chosen != "3") {
        chosenOption = showMenu()
        switch(chosenOption) {
            case "1":
            let spaceshipToAdd = createSpaceship()
            // recebe o objeto do tipo spaceship

            spaceshipToAdd.hitch()
            //Adicionará o parâmetro "true" nas naves

            hitchedSpaceships.push(spaceshipToAdd)
            //Adicionará uma nave ao array vazio
            
            break
            case "2":
               printSpaceshipList(hitchedSpaceships)
               break




        }
    }
    */
