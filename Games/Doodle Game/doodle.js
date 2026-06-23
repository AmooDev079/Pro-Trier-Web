let board;
let score = 0;
let maxScore =0;
let gameOver = false;
let cxt;
let boardW =400;
let boardH = 500;
//doodler object;
let doodlerH =40;
let doodlerW =35;
let doodlerImg;
let platformImg;
let doodler ={
    x:boardW/2,
    y:boardH-200,
    w:doodlerW,
    h:doodlerH,
    img:null
}
//platform
let platformH = 8;
let platformW = 60;
let platformArray =[];


//phyc
let velocityX = 0;
let velocityY = 0;
let initialVelocityY = -6;
let gravity = 0.2;

let ll = document.getElementById('left')
let ri = document.getElementById('right')

window.onload = function() {
    board = document.querySelector('canvas');
    board.width = boardW;
    board.height = boardH;
    cxt = board.getContext('2d');

    doodlerImg = new Image();
doodlerImg.src = './doodle.png';
doodler.img = doodlerImg;
    doodlerImg.onload = function () {
        cxt.drawImage(doodler.img,doodler.x,doodler.y,doodler.w,doodler.h);
    }
    platformImg = new Image();
    platformImg.src ='./platform.png';
    velocityY = initialVelocityY;
    placePlatform();
    //cxt.fillStyle = 'red';
   // cxt.fillRect(platform.x,platform.y,platform.w,platform.h);
requestAnimationFrame(update);
   
   
}
 document.addEventListener('keydown',moveDoodler);
 ll.addEventListener('click',()=>{
    velocityX =-4;
 })
 ri.addEventListener('click',()=>{
    velocityX =+4;
 })
//document.addEventListener('click',()=>{
//    cxt = board.getContext('2d');
//    cxt.fillStyle = 'red';
//    cxt.fillRect(doodler.x,doodler.y,doodler.w,doodler.h);
//})
function update() {
    requestAnimationFrame(update);
    if(gameOver){
        return;
    }
     cxt.clearRect(0,0,boardW,boardH);
        doodler.x += velocityX;
    
if(doodler.x+doodler.w<0){
    doodler.x = boardW;
  }
  if(doodler.x>boardW){
    doodler.x = 0;
  }
   
    velocityY  += gravity;
    doodler.y +=velocityY;
    cxt.drawImage(doodler.img,doodler.x,doodler.y,doodler.w,doodler.h);
    for (let i = 0; i < platformArray.length; i++) {
        let platform = platformArray[i];
        if(velocityY<0 && doodler.y< boardH*3/4){
            platform.y -=initialVelocityY;
        }
        if(collision(doodler,platform)&&velocityY>=0){
            velocityY=initialVelocityY;
        }
        if(doodler.y>boardH){
            gameOver=true;
        }
        cxt.drawImage(platform.img,platform.x,platform.y,platform.w,platform.h);
    }

    while (platformArray.length>0 && platformArray[1].y>boardH) {
        platformArray.shift();
        newPlatform();
    }
    updateScore();
    cxt.fillStyle='black';
    cxt.font ='16px sans-serif';
    cxt.fillText(
        score,15,20
    )
    if(gameOver){
        cxt.fillText('Game Over!!',140,230);
        cxt.fillText('Scores :'+score,140,260);
        cxt.fillStyle ='red';
        cxt.fillText('Press "Space" to Start..',100,290);
    }
}

function moveDoodler(e) {
    //console.log(e);
    if(e.code =='ArrowLeft'){
        velocityX =-4;
    }
   else if(e.code =='ArrowRight'){
        velocityX = 4;
    }
    else if(e.code == 'Space' && gameOver){
    doodler ={
    x:boardW/2,
    y:boardH-200,
    w:doodlerW,
    h:doodlerH,
    img:doodlerImg
};
        velocityX=0;
        velocityY =  initialVelocityY;
        score =0;
        gameOver =false;
        placePlatform();
        
    }
    //velocityX =0;
}
function placePlatform() {
platformArray=[];
    let platform ={
        img:platformImg,
    x:200,
    y:boardH-100,
    w:platformW,
    h:platformH
}
    platformArray.push(platform);


  /*    platform ={
        img:platformImg,
    x:160,
    y:boardH-150,
    w:platformW,
    h:platformH
}*/


    for (let i = 0; i < 6; i++) {
        let randomX = Math.floor(Math.random()*boardW*3/4);
//let randomY = Math.floor(Math.random()*boardH)+50;
         let platform ={
        img:platformImg,
    x:randomX,
    y:boardH-(600/6)*i,
    w:platformW,
    h:platformH
}
    platformArray.push(platform);


    }
   // platformArray.push(platform);

}

function collision(a,b) {
    return a.x<b.x+b.w && a.x+a.w>b.x && a.y+a.h>b.y && a.y<b.y+b.h;
}
function newPlatform() {
     let randomX = Math.floor(Math.random()*boardW*3/4);
         let platform ={
        img:platformImg,
    x:randomX,
    y:-platformH,
    w:platformW,
    h:platformH
}
    platformArray.push(platform);

}

function updateScore() {
    let points = Math.floor(50*Math.random());
   if(velocityY<0){
       maxScore+=points;
       if(score<maxScore){score = maxScore;
                         }
   }
    else if(velocityY>=0){
        maxScore-=points;
    }
}

