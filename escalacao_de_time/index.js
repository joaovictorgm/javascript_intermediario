          
   
 function addPlayer(){
   //.value pega o valor inserido na caixa de texto e passa pra variável 
    const position = document.getElementById('position').value
    const playerName = document.getElementById('namePlayer').value
     const numberPlayer = document.getElementById('numberPlayer').value
     
     const confirmation = confirm("Você confirma as alterações? \nJogador: " + playerName + " Posição: " + position + " Número: " + numberPlayer)

     if(confirmation) {
      const teamList = document.getElementById('list')
      //criará uma linha para inserir o conteúdo
      const playerItem = document.createElement('li')
      //id do jogador criado 
      playerItem.id = 'player-' + numberPlayer
      playerItem.innerText = position + ": " + playerName + "(" + numberPlayer + ")"
      //aplicará o elemento filho "li" ao elemento pai "teamList"
      teamList.appendChild(playerItem)

      document.getElementById('position').value = ''
      document.getElementById('namePlayer').value = ''
      document.getElementById('numberPlayer').value = ''

     }
    }

    function removePlayer(){
      const shirtNumber = document.getElementById('numberToRemove').value
      //pega o id do item criado 
      const playerRemoved = document.getElementById('player-' + shirtNumber)

      const confirmation = ('Você deseja remover o jogador ' + playerRemoved.InnerText + "?")

      if(confirmation){
         //remove() método para remover o elemento criado 
         playerRemoved.remove()
         document.getElementById('numberToRemove').value = ''
      }
    }
 
    
    
      
 

    
       
        
        

 

    
