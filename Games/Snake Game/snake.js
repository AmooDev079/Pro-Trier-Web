const board = document.getElementById('board');
const up = document.getElementById('up');
const left = document.getElementById('left');
const right = document.getElementById('right');
const down = document.getElementById('down');
const cxt = board.getContext('2d');
let scores = document.getElementById('scores');
const boardW = 400;
const boardH = 400;
let score = 0;

let movingDown =false;
    let movingUp = false;
    let movingLeft = false;
    let movingRight = false;

let running =false;
let velocityX = 10;
let velocityY = 0;

board.height = boardH;
board.width = boardW;

//objs
 let foodColor = 'red';

let foodW =10;
let foodH = 10;
let foodX;
let foodY;

let snakeW = 10;
let snakeH = 10;
let snakeBorder = 'black';
 const snakeColor = 'blue';
 let snake =[
     {x:snakeW*4,y:250},
     {x:snakeW*3,y:250},
     {x:snakeW*2,y:250},
     {x:snakeW*1,y:250},
     {x:snakeW*0,y:250}
 ]
document.addEventListener('keydown',changeDirection);
up.addEventListener('click',()=>{
  movingDown =false;
     
     movingLeft = false;
     movingRight = false;
        velocityY = -10;
        velocityX = 0;
        moveSnake();
       movingUp = true;
})
down.addEventListener('click',()=>{
 movingUp = false;
     movingLeft = false;
     movingRight = false;
        velocityY = 10;
        velocityX = 0;
        moveSnake();
        movingDown =true;
})
left.addEventListener('click',()=>{
       movingDown =false;
     movingUp = false;
     
     movingRight = false;
        velocityY = 0;
        velocityX = -10;
        moveSnake();
        movingLeft = true;

})
right.addEventListener('click',()=>{
   movingDown =false;
     movingUp = false;
     movingLeft = false;
    
        velocityY = 0;
        velocityX = 10;
        moveSnake();
         movingRight = true;
})
startGame();
moveSnake();
//drawSnake();
//fxns
function startGame() {
    running = true;
   scores.innerHTML = score;
    drawSnake();
    drawFood();
    moveSnake();
    placeFood();
   nextState();

}

function nextState() {
    if(running){
        setTimeout(()=>{
            clearBoard();
            checkCollision();
            moveSnake();
            drawSnake();
            placeFood();
            
            
            nextState();
        },50);
        checkGameOver();
    }
    else{
       checkGameOver();
    }
}
function drawSnake() {
    cxt.fillStyle = snakeColor;
    cxt.strokeStyle = snakeBorder;
    for (let j = 1; j < snake.length; j++) {
        cxt.fillRect(snake[j].x,snake[j].y,snakeW,snakeH);
        cxt.strokeRect(snake[j].x,snake[j].y,snakeW,snakeH);
    }
     cxt.fillStyle = 'green';
    cxt.strokeStyle = snakeBorder;
    cxt.fillRect(snake[0].x,snake[0].y,snakeW,snakeH);
    
    /*snake.forEach(s=>{
        cxt.fillRect(s.x,s.y,snakeW,snakeH);
        cxt.strokeRect(s.x,s.y,snakeW,snakeH);
    })*/
}

function changeDirection(e){
    
    if(e.code == 'ArrowDown' && !movingUp){
       
     movingUp = false;
     movingLeft = false;
     movingRight = false;
        velocityY = 10;
        velocityX = 0;
        moveSnake();
        movingDown =true;
    }
    
   if(e.code == 'ArrowUp' && !movingDown){
       movingDown =false;
     
     movingLeft = false;
     movingRight = false;
        velocityY = -10;
        velocityX = 0;
        moveSnake();
       movingUp = true;
    }
    if(e.code == 'ArrowLeft'&& !movingRight){
        movingDown =false;
     movingUp = false;
     
     movingRight = false;
        velocityY = 0;
        velocityX = -10;
        moveSnake();
        movingLeft = true;
    }
    if(e.code == 'ArrowRight' && !movingLeft){
        movingDown =false;
     movingUp = false;
     movingLeft = false;
    
        velocityY = 0;
        velocityX = 10;
        moveSnake();
         movingRight = true;
    }
    if(e.code == 'Space'&& !running){
        clearBoard();
       
        snake =[
     {x:snakeW*4,y:250},
     {x:snakeW*3,y:250},
     {x:snakeW*2,y:250},
     {x:snakeW*1,y:250},
     {x:snakeW*0,y:250}
 ];

velocityX = 10;
velocityY = 0;
        running = true;
    score = 0;
    drawSnake();
    drawFood();
    moveSnake();
    placeFood();
   nextState();
         scores.innerHTML = score;
         movingDown =false;
    movingUp = false;
   movingLeft = false;
    movingRight = false;
        
    }
   /* movingUp = false;
movingDown = false;
movingLeft = false;
movingRight = false;*/
}

function drawFood() {
    function randomFood(min,max) {
     const randomNum = Math.round((Math.random()*(max-min)+min)/foodW)*foodW;
        return randomNum;
    }
  foodX = randomFood(0,boardW-foodW);
   foodY = randomFood(0,boardH-foodH); 
  //  console.log(foodX);
 //   console.log(foodY);
}
function placeFood() {
    cxt.fillStyle = foodColor;
cxt.fillRect(foodX,foodY,foodW,foodH);
}
function moveSnake() {
   const head = {x: snake[0].x+velocityX,
                y: snake[0].y+velocityY};
    snake.unshift(head);
   // if(snake[0].x == foodX && snake[0].y == foodY){
      if(snake[0].x<foodX+foodW && snake[0].x+snake[0].w>foodX && snake[0].y+snakeH>foodY && snake[0].y<foodY+foodH) { 
        //displayGameOver();
       // score++;
        placeFood();
    }else{
        snake.pop();
    }
}
function checkCollision() {
    
    if(snake[0].x == foodX && snake[0].y == foodY && snake[0].x+snakeW == foodX+foodW && snake[0].y+snakeH == foodY+foodH){
        let newPart;
        snake.push(newPart);
        
        drawFood();
        placeFood();
        score+=2;
        scores.innerHTML = score;
        console.log(score);
    }
}
function checkGameOver() {
   if(snake[0].x<0||snake[0].x>boardW||snake[0].y<0||snake[0].y+snakeH>boardH){
       running = false; 
    }
  /*  switch(true){
            case():
            running=false;
            break;
            case():
            running = false;
            break;
            case():
            running = false;
            break;
            case():
             running = false;
            break;
    }*/
    for (let i = 1; i < snake.length; i++) {
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y||snake[i].x+snakeW == snake[0].x && snake[i].y+snakeH == snake[0].y){
            running = false;
        } 
        
    }
    if(!running){
        cxt.fillStyle = 'greenyellow';
        cxt.font = '26px sans serif';
        cxt.fillText('Game Over!!',120,140);
        cxt.fillStyle = 'darkblue';
        cxt.font = '26px sans serif';
        cxt.fillText('Scores  '+score,130,180);
    }
}
function clearBoard() {
    cxt.fillStyle = 'white';
    cxt.fillRect(0,0,boardW,boardH);

}






