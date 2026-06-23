let board = document.getElementById('board');
let playerTurn = document.getElementById('turns');
let btn = document.getElementById('btn');
let h1 = document.getElementById('h1');
let gameover = document.getElementById('gameover');
let winnerIs = document.getElementById('winner');
let box = document.querySelectorAll('.box-1');
let currPlayer ="X";
 var winConditions = [[0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [8,5,2],
                      [0,4,8],
                      [2,4,6]]
let winner = false;
let options = ['','','','','','','','',''];
//playerTurn.innerText = currPlayer+"'s Turn";
for (let bo of box) {
    bo.addEventListener('click',cardClicked);
}
function cardClicked() {
    if(this.innerText !== ''){return;}

    if(!winner){

    let id = this.id;
     options[id] = currPlayer;
    this.innerText = currPlayer;
    
    playerTurn.innerText = currPlayer+"'s Turn";
   
    
   
 //  this.innerText == currPlayer?'O':currPlayer;
        currPlayer = currPlayer == 'O'?'X':'O';
        checkWinner();
        playerTurn.innerText = currPlayer+"'s Turn";
    }
    
    if(winner){btn.classList.add('gameOver')}
}
//checkWinner();
function checkWinner() {
   
    for (let i = 0; i < winConditions.length; i++) {
        let condition = winConditions[i];
       let cardA = options[condition[0]];
       let cardB = options[condition[1]];
        let cardC = options[condition[2]]; 
        
        
        if(cardA==''|| cardB == '' || cardC == ''){
            
            continue;
        }
     if((cardA == cardB) && (cardB == cardC)){
         console.log(cardA+cardB+cardC);
           playerTurn.innerText = cardA+" Wins";
         gameover.style.display = 'block';
         winnerIs.innerText ='Player '+ cardA+" Wins";
         winner = true;
         
         console.log(winner);
        // box.style.enable ='true';
         break;
        
      // winner = true;
         
    }else if(!options.includes('')){
           gameover.style.display = 'block';
         document.getElementById('mss').style.display='none';
         winnerIs.innerText ="OOPs Game Draw";
             playerTurn.innerText ='Game Draw!!';
         
    }
        
    }
    
}
btn.addEventListener('click',()=>{
    options = ['','','','','','','','',''];
    winner = false;
    currPlayer ="X";
     gameover.style.display = 'none';
    playerTurn.innerText = currPlayer+"'s Turn";
    for (let bo of box) {
        bo.innerText = '';
    }
    
})

function h1Rotate() {
    h1.classList.toggle('play');
}setInterval(h1Rotate,10000);