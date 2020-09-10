class ticTacToe{

    //construtor da classe
    constructor(){
        this._actualPlayer;
        this._winner;
        this._gamePosition;
        this.buttonValues = document.querySelectorAll('.button');
        this.initializer();
        this._plays = 0;
    }

    //valida se há ou não um vencedor
    validateWinner(){
        let message = document.querySelector('#winner');
        if(this.winner){
            message.innerHTML = "O ganhador foi "+this.winner;
        }else{
            if(this._plays == 9){
              message.innerHTML = "Empate";
            }
        }
    }

   //métodos
   initializer(){
        
        this.actualPlayer = "X";
        this.winner = false;
        this.gamePosition = [
             [0,0,0],
             [0,0,0],
             [0,0,0]
            ];
        this.buttonValues.forEach(button =>{
            button.addEventListener('click',b=>{
                this.buttonWriter(button)
            },false);
        })
    }

   //valida as jogadas
    validateGame(matrix){
        for(let i=0; i<2; i++){
            if(matrix[i][0] != "_" && matrix[i][0] == matrix[i][1] && 
               matrix[i][0] == matrix[i][2]){
               this.winner = matrix[i][0];
            } 
            if(matrix[0][i] != "_" && matrix[0][i] == matrix[1][i] && 
                matrix[0][i] == matrix[2][i]){
                this.winner = matrix[0][i];
                
            } 
            if(matrix[0][0] != "_" && matrix[i][i] == matrix[i][i] && 
                matrix[0][0] == matrix [2][2]){
                this.winner = matrix[0][0];
                 
            }
            if(matrix[0][2] != "_" && matrix[0][2] == matrix[1][1] && 
                matrix[0][2] == matrix[2][0]){
                this.winner = matrix[0][2];
            }
        }
    }

    //escreve os valores dentro dos botões
    buttonWriter(element){

       this._plays += 1;
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
           if((j+1)%3 === 0){
              j = 0;
              i+=1;
           }else{
              j+= 1;  
           }
       })
       
       this.validateGame(this.gamePosition);
       this.validateWinner();
    }

  // acessadores
   get actualPlayer(){
        return this._actualPlayer;
    }
    set actualPlayer(value){
        this._actualPlayer = value;
    }

    get winner(){
        return this._winner;
    }
    set winner(value){
        this._winner = value;
    }

    get gamePosition(){
       return this._gamePosition;
    }
    set gamePosition(value){
        this._gamePosition = value;
    }
}