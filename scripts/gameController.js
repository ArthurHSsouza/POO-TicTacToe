class ticTacToe{

    //class constructor
    constructor(){
        this.actualPlayer;
        this.winner;
        this.gamePosition;
        this.buttonValues = document.querySelectorAll('.button');
        this.initializer();
        this.initializeButtons();
        this.plays = 0;
        this.player1 = 0;
        this.player2 = 0;
    }

    disableButtons(buttonList){
        buttonList.forEach(button => {
            button.disabled = true;
        });
    }

    //validate if there is a winner or not
    validateWinner(){

        let message = document.querySelector('#winner');
        if(this.winner){
            
            this.winner === "X" ? this.player1 += 1 : this.player2 += 1;
            message.innerHTML = "O ganhador foi "+this.winner;
            this.disableButtons(this.buttonValues);
            setTimeout(()=>{
                this.initializer();
            },1500);  

        }else{
            if(this.plays == 9){
                
              message.innerHTML = "Empate";
              this.disableButtons(this.buttonValues);
              setTimeout(()=>{
                this.initializer();
              },1500);  
            }
        }

        document.querySelector('#player1').innerHTML = "Jogador 1 - "+this.player1;
        document.querySelector('#player2').innerHTML = "Jogador 2 - "+this.player2;

    }

    //initialize the buttons in the game
    initializeButtons(){
        
        this.buttonValues.forEach(button =>{
            button.addEventListener('click',()=>{
                this.buttonWriter(button);
            },false);
        });

        document.querySelector("#restart-button").addEventListener('click', ()=>{
            this.restart();
        });
    
    }

    //restart the game

    restart(){
        this.initializer();
        this.player1 = 0;
        this.player2 = 0;
        document.querySelector('#player1').innerHTML = "Jogador 1 - "+this.player1;
        document.querySelector('#player2').innerHTML = "Jogador 2 - "+this.player2;
        
    }

   //methods
   initializer(){
        
        this.actualPlayer = "X";
        this.winner = false;
        this.plays = 0;
        this.gamePosition = [
             [0,0,0],
             [0,0,0],
             [0,0,0]
            ];
        this.buttonValues.forEach(button =>{
            button.disabled = false;
            button.innerHTML = "";
        });
        document.querySelector('#winner').innerHTML = "";
    }

   //validate the plays
    validateGame(matrix){

        for(let i=0; i <= 2; i++){

            if(matrix[i][0] && matrix[i][0] == matrix[i][1] && 
               matrix[i][0] == matrix[i][2]){
               this.winner = matrix[i][0];
            } 
            if(matrix[0][i] && matrix[0][i] == matrix[1][i] && 
                matrix[0][i] == matrix[2][i]){
                this.winner = matrix[0][i];
            } 
        }

        if(matrix[0][0]  && matrix[0][0] == matrix[1][1] && 
            matrix[0][0] == matrix [2][2]){
            this.winner = matrix[0][0];     
        }
        if(matrix[0][2] && matrix[0][2] == matrix[1][1] && 
            matrix[0][2] == matrix[2][0]){
            this.winner = matrix[0][2];
        }
        
    }

    //write the values inside the buttons
    buttonWriter(element){

       this.plays += 1;
       element.innerHTML = this.actualPlayer; 
       if(this.actualPlayer == 'X'){
           this.actualPlayer = 'O';
       }
       else{
           this.actualPlayer = 'X';
       }
       element.disabled = true;

       let i=0;
       let j = 0;

       this.buttonValues.forEach(button =>{
           this.gamePosition[i][j] = button.innerHTML;
           
           if((j+1) % 3 === 0){
              j = 0;
              i += 1;
           }else{
              j+= 1;  
           }

       })
       
       this.validateGame(this.gamePosition);
       this.validateWinner();
    }

}