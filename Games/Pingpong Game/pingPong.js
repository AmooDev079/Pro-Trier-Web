let board;
let cxt;
let score1 = 0;
let score2 = 0;
let gameOver = false;
let boardW = 600;
let boardH =400;

//paddle
let padW = 7;
let padH = 50;
let pad1YV = 0;
let pad2YV = 0;
let velocityY = 4;
let velocityX = 4;

//ball

let ballR =10;
let ballH = 10;

let ball = {
    x:boardW/2,
    y:boardH/2,
    r:ballR
}
let pad1 ={
    x:5,
    y:boardH/2-padH,
    w:padW,
    h:padH
   
}
let pad2 ={
    x:boardW-10,
    y:boardH/2-padH,
    w:padW,
    h:padH
    
}

    up = document.getElementById('up');
    dwnn = document.getElementById('down');



///layout
window.onload = function () {
    board = document.getElementById('board');
    board.height = boardH;
    board.width = boardW;
    cxt = board.getContext('2d');
    
   requestAnimationFrame(update);  
}
document.addEventListener('keydown',move);
up.addEventListener('click',()=>{
    pad1YV = -5;
})
dwnn.addEventListener('click',()=>{
    pad1YV = +5;
})
function update(){
    if(gameOver) {
    return;
    }
score1++;
    requestAnimationFrame(update);
    cxt.clearRect(0,0,boardW,boardH);
    cxt.fillStyle = 'purple';
    cxt.fillText(score1, 10, 20);
    
    if(pad1.y<=0){pad1.y = 0;} else if(pad1.y+pad1.h>= boardH){
        pad1.y=boardH-padH;
        
    }
    pad1.y += pad1YV;
    cxt.fillStyle = 'green';
    
    cxt.fillRect(pad1.x,pad1.y,pad1.w,pad1.h);
   // if(pad2.y+padH=boardH){velocityY=0}
    
    if(pad2.y<=0){pad2.y = 0;}
    else if(pad2.y+pad2.h>= boardH){
        pad2.y=boardH-padH;
        
    }
    pad2.y = ball.y-25;
    cxt.fillRect(pad2.x,pad2.y,pad2.w,pad2.h);
    

    ball.x += velocityX;
    ball.y += velocityY;
    if(ball.y+ball.r>=boardH || ball.y-10<=0){
    velocityY = -velocityY;
    }
    if(collision(pad1,ball)||collision(pad2,ball)/*ball.x+ball.r <=pad2.x && ball.x+ball.r>=pad1.x+pad1.w*/){
        velocityX *= -1;
    }
    if(ball.x>boardW+ballR || ball.x<-20){
        gameOver = true;
    }
    
    cxt.fillStyle ='darkblue';
    cxt.beginPath();
    cxt.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
    cxt.fill();
    if(gameOver) {
   cxt.fillStyle = 'black';
        cxt.font = '20px sans-serif';
        cxt.fillText('Game Over!!',230,180);
        
        cxt.fillStyle = 'darkred';
        cxt.font = '15px sans-serif';
        cxt.fillText('Press "Space" To Play..',220,220);
    

        cxt.fillStyle = 'blue';
        cxt.font = '16px sans-serif';
        cxt.fillText('Scores : '+score1,245,200);
    }

    } 

function move(e) {
    console.log(e);
    if(e.code == 'ArrowUp'){
        pad1YV = -5;
    }
    if(e.code == 'ArrowDown'){
        pad1YV = +5;
    }
    if(e.code == 'Space'&& gameOver){
        gameOver = false;
        ball = {
    x:boardW/2,
    y:boardH/2,
    r:ballR
};
        score1 = 0;
        velocityY = 4;
velocityX = 4;
        update();
        
        
    }
}
function collision(a,b) {
    return a.x<b.x+b.r && a.x+a.w>b.x && a.y+a.h>b.y && a.y<b.y+b.r
        ;
}

