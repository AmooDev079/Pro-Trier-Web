let frontView = document.querySelectorAll('.frontView');
let gameOff = document.getElementById('gameover');
let restart = document.getElementById('restart')
let backView = document.querySelectorAll('.backView');
let cells = document.querySelectorAll('#cells'); 
let card1, card2;
let scores = document.getElementById('scores');
let cardsMatched = 0;
let gameover = false;
let disableDeck = false;
let counter = document.getElementById('counter');
let count = 1000;
clickedCard();
shuffleCards();
 
function clickedCard() { 
for (let cell of cells) {
cell.addEventListener('click',flipCard);
 
}

}
function flipCard(e) {
 
 let img = e.target;
 //img = img.nextSibling.nextSibling.childNodes[3].childNodes[0].src;//.nextSibling.nextSibling//childNodes[1];
 if(img !== card1 && !disableDeck){
  img.classList.add('rotate');
  if(!card1){
   return card1 = img.childNodes[3].childNodes[0];
  }
  disableDeck = true;
  card2 = img.childNodes[3].childNodes[0];
  matchedCards(card1,card2);
 }
  //console.log(card1,card2,img);


//this.classList.add('rotate');
}
function matchedCards(a,b,img) {

 if(a.src==b.src){
  let cellA =a.parentNode.parentNode;
  let cellB =b.parentNode.parentNode;
  cellA.removeEventListener('click',flipCard);
  cellB.removeEventListener('click',flipCard);
  
  cardsMatched++;
 disableDeck = false;
  if(cardsMatched == 8){
    gameover = true;
   gameOver();
   disableDeck = true;
}
  card1 = card2 ='';
  return disableDeck = false;
 } 
/*if(card1 !== '' || card2 !== ''){
 
}*/
 setTimeout(()=>{
 
  a.parentNode.parentNode.classList.add('shake');
 b.parentNode.parentNode.classList.add('shake');
  
 },100);
 setTimeout(()=>{
  a.parentNode.parentNode.classList.remove('shake','rotate');
 b.parentNode.parentNode.classList.remove('shake','rotate');
  card1 = card2 ='';
  disableDeck = false;
 },600);
  
}

function gameOver() {
 if(gameover){
  gameOff.style.display = 'block';
  shuffleCards();
  //console.log(gameover)
 }
}

function shuffleCards() {
 let arr = [];
 for (let i = 0; i < cells.length; i++) {
  let cell =cells[i].childNodes[3].childNodes[0].src;
  arr.push(cell);
 // console.log(arr);
  
 }
//let cell = document.childNodes[0].childNodes[2].childNodes[1].childNodes;
 
 
}


restart.addEventListener('click',()=>{
 clickedCard();
 disableDeck = false;
 gameOff.style.display = 'none';
 card1 = card2 = '';
  for (let card of cells) {
   if(card.classList.contains('rotate')){
    card.classList.remove('rotate');
   }
   
  }
 })


let time ;
startTimer() ;

function startTimer() {
 time = setInterval(()=>{
  if(count>0){count -=2;
              
             }
  
  //console.log(count);
 },10)
 if(count<0){return clearInterval(time);}
}











