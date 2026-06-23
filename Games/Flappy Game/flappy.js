let board;// = 
let scoreBoard = document.getElementById('scoreBoard');
let up = document.getElementById('up');
let dwn = document.getElementById('down');
let marks = document.getElementById('dis');
let cxt;// = board.getContext('2d');
let scores = document.getElementById('scores');
let boardW = 687;
let boardH = 450;
let gamePlaying = true;

let score = 0;
//bird
let birdH = 45;
let birdImage;
let imgIndex = 1;
let birdW = 60;
let gravity = 1;

let jump = -38;
let fall = -30;


let bird = {
    x:40,
    y:200,
    w:birdW,
    h:birdH,
    img:null
}
let vX =3;
let pipeImg;
let pipeImgu;
let num;
function restart() {
   birdH = 45;
    scoreBoard.style.display ='none';
 birdImage;
 imgIndex = 1;
   score =0;
 birdW = 60;
 gravity = 1;
 jump = -38;
 fall = -30;


 bird = {
    x:40,
    y:200,
    w:birdW,
    h:birdH,
    img:null
}
   pipes =[];
    gamePlaying = true;
      vX =3;
       gravity=0.7;
       fall =-30;
    jump = -38;
       imgIndex=1;
   cxt.clearRect(0,0,boardW,boardH);
      console.log(vX)
   createPipe();
   
}
function randomNum() {
    return num = Math.round(Math.random()*1000);};
randomNum();
//console.log(num);
function getRandomInt(min,max) {
    return Math.round(Math.random()*(max-min))+min;}
class Pipe {
   constructor(x,y,w,h,img,xu,yu,wu,hu,imgu) {
      this.w = 47;
      this.h = getRandomInt(90,270);
      this.x = boardW-this.w;
      this.y = boardH-this.h;
      this.img = 'pipe2.png';

      this.wu = 47;
      this.hu = this.y-100;
      this.xu = boardW-this.wu;
      this.yu = 0;
      this.imgu = 'pipe1.png';
   }
   draw(){
    pipeImg = new Image();
    pipeImg.src = this.img;
       cxt.drawImage(pipeImg,this.x,this.y,this.w,this.h);
      pipeImgu = new Image();
    pipeImgu.src = this.imgu;
      cxt.drawImage(pipeImgu,this.xu,this.yu,this.wu,this.hu);
   }
   update(){
      
      this.x = this.x - vX;
       this.xu = this.xu - vX;
      if(this.x<-47){
         pipes.shift();
         createPipe();
                    // console.log(pipes);
         this.x =  boardW-this.w;
         this.xu = boardW-this.wu;
         
         
      }
   }
}

let pipe ;// p1,p2,p3,p4,p5,p6,p7,p8,p9,p0;

let pipes =[];

function createPipe() {
   

for (let i = 0; i < 10; i++) {
   pipes.push(new Pipe);
}

   
}
createPipe();


window.onload = function () {
   board = document.getElementById('board'); 
  
   
    board.height = boardH;
    board.width = boardW;
    cxt = board.getContext('2d');
    
 
birdImage = new Image();
    birdImage.src = 'bird1.png';
    bird.img = birdImage;
    birdImage.onload = function(){cxt.drawImage(bird.img,bird.x,bird.y,bird.w,bird.h);} 
 
   requestAnimationFrame(updateBoard);
    
   
}



function updateBoard() {
 
   //moveBg();
   cxt.clearRect(0,0,boardW,boardH);
 if(!gamePlaying){
       scoreBoard.style.display ='block';
    
       vX =0;
       gravity=0;
       birdImage.src = 'bird1.png';
     bird.img = birdImage;
       imgIndex=21;
      
    fall =0;
    jump = 0;
    }
   marks.innerText = score;
   scores.innerText = 'Scores : '+score;
    requestAnimationFrame(updateBoard);
   if(bird.y<=boardH-90){
      
    bird.y = bird.y +gravity;}else{
      birdImage.src = "bird1.png";
     // return birdImage.src = 'bird1.png';;// 
    }
    //imgIndex++;
    //console.log(imgIndex)
    if(imgIndex<20){
        imgIndex++;
        if(imgIndex == 20
           ){
           imgIndex=1;
        }
    }
   if(imgIndex==10){
      birdImage.src = 'bird2.png';
     bird.img = birdImage;
}
     if(imgIndex<10){
      birdImage.src = 'bbb.png';
     bird.img = birdImage;
}
       
       cxt.drawImage(bird.img,bird.x,bird.y,bird.w,bird.h);

       
    
   //createPipe();
   
     // let p11 = pipes[4];
      pipes[0].update();
      
      pipes[0].draw();
  if (pipes[0].x<400) {
      pipes[1].update();
   
      pipes[1].draw();
   }
    if (pipes[1].x<400) {
      pipes[2].update();
      
      pipes[2].draw();
   }
   if (pipes[2].x<400) {
      pipes[3].update();
      
      pipes[3].draw();
   }
    if (pipes[3].x<400) {
      pipes[4].update();
      
      pipes[4].draw();
   }if (score >60 && gamePlaying) {
       fall =-31 ; jump =-39;
       vX =4;
      
   }
    if (score >120 && gamePlaying) {
      fall =-32 ; jump =-40;
      vX =5;
      
     
  } if (score >230 && gamePlaying) {
   fall =-33 ; jump =-42;
   vX =6;
  
}

       if(collisionDetection(bird,pipes[0]) || collisionDetection(bird,pipes[1]) || collisionDetection(bird,pipes[2]) || collisionDetection(bird,pipes[3]) || collisionDetection(bird,pipes[4])){
          //console.log('wtf')
          return gamePlaying = false;
       
       }
  
    
}
 


function collisionDetection(a,b) {

    return a.x<b.x+b.w&& a.x+a.w>b.x+4 && (a.y+a.h-6>b.y || a.y<b.y-108);//&& a.y<b.y+b.h ;
    //a.x+a.w ==- b.x;// && a.x > b.x+b.w && a.y>b.y;
}

document.addEventListener('keydown',jumping);
up.addEventListener('click',()=>{
   bird.y = bird.y + jump;
})
dwn.addEventListener('click',()=>{
   bird.y = bird.y - fall;
})
function jumping(e) {
    //console.log(e);
    if(e.code == 'ArrowUp'){
       return bird.y = bird.y + jump;
    }
if(e.code == 'ArrowDown'){
       return bird.y = bird.y - fall;
}
   if(e.code == 'Space' && !gamePlaying){
      console.log('Wozaa')
      restart();
}
}



let bp=687;
 requestAnimationFrame(moveBg);
setInterval(()=>{
   if(gamePlaying){score+=5;}return score;
},1500)

   

function moveBg(){
   requestAnimationFrame(moveBg)
if(gamePlaying){
   bp++;
   
   if (bp<=0) {bp =687;
      
   }
   
   bp-=2;
   board.style.backgroundPosition= bp+"px";}
  // console.log()//backgroundPosition.value)

}




