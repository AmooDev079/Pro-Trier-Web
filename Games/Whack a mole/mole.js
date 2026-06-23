let currentMoleTile;
let currentFlowerTile;
let score =0;
let gameOver = false;
let gameoverDiv = document.getElementsByClassName('gameover');
let gameoverBtn =document.getElementById('button');
//console.log(gameoverBtn);
window.onload = function(){
    setGame();
    all();
                          }
function setGame() {
    for( let i=0; i<9;i++){
        let tile = document.createElement('div');
        tile.id =i.toString();
        tile.addEventListener('click',selectTile)
        document.getElementById('board').appendChild(tile);
        
    }
}
function getRandomTile(){
    let num= Math.floor(Math.random()*9);
    return num.toString();
}
function setMole(){
    if(gameOver){
        return;
    }
    if (currentMoleTile)
        currentMoleTile.innerHTML="";
    let mole = document.createElement('img');
    mole.src="./mole.png";
    let num = getRandomTile();
    if(currentMoleTile && currentFlowerTile.id==num){
        return;
    }
    currentMoleTile =document.getElementById(num);
    currentMoleTile.appendChild(mole);
}
function setFlower(){
    if(gameOver){
        
        return;   
    }
    if (currentFlowerTile)
        currentFlowerTile.innerHTML="";
    let flower = document.createElement('img');
    flower.src="./plant.png";
    let num = getRandomTile();
    if(currentFlowerTile && currentMoleTile.id==num){
        return;
    }
    currentFlowerTile =document.getElementById(num);
    currentFlowerTile.appendChild(flower);
}

function selectTile() {
    if(gameOver){
        return;
    }
    if(this == currentMoleTile){
        score +=10;
        document.getElementById('scores').innerText=score.toString();
    }
        
    else if (this ==currentFlowerTile || this.innerHTML == ''){
        document.getElementById('scores').innerText="Your scored : "+score+"!";
        gameOver=true;
    for (let v = 0; v < gameoverDiv.length; v = v+1) {
        gameoverDiv[v].style.display= 'block';
        
    }
        //gameoverDiv.style.display = 'none';
       score =0;
    }
}
function all() {
    
     setInterval(setMole,800);
     setInterval(setFlower,900);
      //1 second
    setInterval(setFlower,600); //1 second
 
 
}


function restart(){
    //all();
    gameOver=false;
    document.getElementById('scores').innerText=score;
    score =0;
    for (let v = 0; v < gameoverDiv.length; v = v+1) {
        gameoverDiv[v].style.display= 'none';
        
    }

}
 //const btn = document.querySelector('button');
//btn.addEventListener('click',setFlower); 

 
    //gameoverBtn.addEventListener('click',restart);

    



