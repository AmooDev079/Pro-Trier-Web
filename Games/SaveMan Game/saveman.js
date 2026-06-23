let quizes3 = [
    {ans:'physics',hint:'Study of matter'},
    {ans:'matter',hint:'Something the has mass and occupy space'},
    {ans:'thermometer',hint:'Used to measure temparature'},
    {ans:'distance',hint:'Length between two points'},
    {ans:'speed',hint:'Rate of change of distance'},
    {ans:'volume',hint:'Amount of space occupied by an object'},
    {ans:'area',hint:'Space occupied by an object on a plane'},
    {ans:'wind',hint:'Moving air'},
    {ans:'wind',hint:'Moving air'},
    {ans:'coulombs',hint:'SI unit of charges'},
    {ans:'current',hint:'Rate of flow of charge'},
    {ans:'heat',hint:'Form of energy that can be transferred from hot to cold region'},
    {ans:'gravity',hint:'Pulls everthing towards the center of the earth'},
    {ans:'adhesive',hint:'Force of attraction between two unlike molecule'},
    {ans:'sublimation',hint:'Process of changing solid to gas'},
    {ans:'temparature',hint:'Degree of hotness or coldness of a body'},
    {ans:'dipoles',hint:'Micro magnets thats makes up a magnet domain'},
    {ans:'rainbow',hint:'Formed after dispersion of white light'},
    {ans:'rainbow',hint:'Formed after dispersion of white light'}, 
{ans:'velocity',hint:'rate of change in displacenent '},
    {ans:'pressure',hint:'force acting perpendicularly per unit area'}
]
let quizes2 =[
    {ans:'diffusion',hint:'movemet of molecules from high to low concentration'},
    {ans:'osmosis',hint:'movement of water molecules from low to high concentration'},
    {ans:'entomology',hint:'study of insect'},
    {ans:'botany',hint:'study of plants'},
{ans:'cytology',hint:'study of cells'},    
    {ans:'zoology',hint:'study of animals'},
    {ans:'cell',hint:'the smallest basic unit of all forms of life'},
    {ans:'biology',hint:'study of living things'},
    {ans:'Platelets',hint:'help your body form clots to stop bleeding'},
    {ans:'locomotion',hint:'ability to move from one place to another'},
    {ans:'species',hint:"The smallest taxonomic rank"},
    {ans:'respiration',hint:'the process of breathing in oxygen and breathing out carbon dioxide.'},
    {ans:'xylem',hint:"carries water and dissolved minerals from the roots"},
    {ans:'phloem',hint:" tissues in plants that conduct foods made in the leaves"},
    {ans:'amphibian',hint:"frogs belong to which animal group"},
    {ans:'Vertebrates',hint:"animals with a vertebral column (backbone or spine)"},
    {ans:'invertebrates',hint:"animal that lacks a vertebral column, or backbone,"},
    {ans:'aves',hint:'The class of chicken '},
    {ans:'Animalia',hint:'fish belong to which kingdom '},
    {ans:'Plantae',hint:'maize belong to which kingdom '},

]
let quizes1 =[
    {ans:'Chemistry',hint:'scientific study of the properties and behavior of matter'},
    {ans:'atom',hint:'basic particles of the chemical elements'},
    {ans:'molecule',hint:'a group of atoms bonded together '},
    {ans:'particle',hint:'a small portion of matter'},
    {ans:'evaporation',hint:'Liquid changing into a gas/vapour'},
    {ans:'Freezing',hint:'Liquid changing into a solid'},
    {ans:'filtration',hint:'Separating an insoluble solid from a liquid'},
    {ans:'filtrate',hint:"fluid that have passed through filter"},
    {ans:'solution',hint:'the mixture formed when a solute dissolves in a solvent'},
    {ans:'acids',hint:'They have a pH less than 7'},
    {ans:'Alkali',hint:'they have pH greater than 7'},
    {ans:'helium',hint:'second on the periodic table'},
    {ans:'combustion',hint:'the process of burning something'},
    {ans:'element',hint:'made of only one type of atom'},
    {ans:'Period',hint:'A row of a periodic table'},
    {ans:'Group',hint:'A column of a periodic table'},
    {ans:'Cathode',hint:'the negative terminal (electrode)'},
    {ans:'Anion',hint:'negative ions'},
    {ans:'Cation',hint:'positive ions'},
    
 
]


let wordDis = document.querySelector('.word-display');
let gameOver = document.querySelector('.gameover');
let ul = wordDis.childNodes;
let gameWin = document.querySelector('.gamewin');
//
let gameOverImg = document.querySelector('.gameover img');
let gameOverText = document.querySelector('.gameover .h2');
let gameOverCor = document.querySelector('.gameover .correctword');
let btnDisabled =[] ;
let corr = document.querySelector('.gameover h2 span');
let img = document.querySelector('.img img');
let q = document.querySelector('#sel')
let phyc = q.childNodes[1];
let bio = q.childNodes[3];
let chem = q.childNodes[5];

let incorect = document.querySelector('.wrongGuess span');
let gueses =0;
let rightWord = 0;
let totalGuess = 7;
let keyboard = document.querySelector('.buttons');
let keys = keyboard.childNodes;
let currWord;

function resetGame() {
    console.log(phyc.selected,chem.selected,bio.selected);
img.src = 'imgstart.png' ;
gueses = 0;
gameOver.style.display = 'none';
gameWin.style.display = 'none';
currWord;
rightWord =0;
var i=0;
while(i<ul.length){
    if(ul[i].nodeName=="LI"){
       wordDis.removeChild(ul[i]); 
        continue;
    }i++;
}
for (let j = 0; j < keys.length; j++) {
    if(keys[j].disabled == true){
        keys[j].disabled = false;
    }
    console.log(keys);
}
getRandomQuiz();
}

document.getElementById('strt').addEventListener('click',()=>{
    console.log(phyc.selected,chem.selected,bio.selected);
    document.getElementById('start').style.display ='none';
    getRandomQuiz();
    resetGame();
})




for (let i = 97; i <=122; i++) {
    let btn = document.createElement('button');
btn.innerText = String.fromCharCode(i).toUpperCase();
keyboard.appendChild(btn);
btn.addEventListener('click',(e)=>{
    start(e.target,String.fromCharCode(i).toUpperCase())
})
    //console.log(String.fromCharCode(i).toUpperCase())
    
};
 function selection(x){

 }

const getRandomQuiz = ()=>{
   let quizes; 
   if(phyc.selected){
    quizes = quizes3
   }else if(bio.selected){
    quizes = quizes2
   }
   else if(chem.selected){
    quizes = quizes1
   }

    const {ans,hint} = quizes[Math.floor(Math.random()*quizes.length)];
    
    document.querySelector('.hint h4').innerText = 'QUIZ : '+ hint;
   


let letters = ans.toUpperCase().split('');
currWord = letters;


for (let i = 0; i < letters.length; i++) {
    let li = document.createElement('li');
    li.classList.add('letter');
    
    wordDis.appendChild(li);
    incorect.innerHTML = gueses+' / '+totalGuess;
    
}


}
getRandomQuiz();



function start(btn,letter) {
    if(currWord.includes(letter)){
        currWord.forEach((l,i) => {
            if(l === letter){
                btn.disabled = true;
        wordDis.querySelectorAll('li')[i].innerText = l;
        rightWord++;
     
        if(rightWord===currWord.length&&gueses==0 || rightWord===currWord.length&&!gueses==0){
            gameWin.style.display = 'block';
           
        
        }else{
           
        
            img.src = './img10.PNG'
            wordDis.querySelectorAll('li')[i].classList.add('guessed');
        }
        wordDis.querySelectorAll('li')[i].classList.add('guessed');


            }
        });
        
        

       // console.log(letter,currWord,'correct',num)
    }else{
        gueses++;
        img.src = './imgno'+gueses+'.PNG'
        incorect.innerHTML = gueses+' / '+ totalGuess;
        corr.innerHTML = currWord.join('');  
        if(gueses == totalGuess)
{
   // console.log('end')
gameOver.style.display = 'block';
}       // console.log('wrong')
    }
    
}
//console.log(wordDis.childNodes)
document.querySelector('.replay').addEventListener('click',resetGame);
document.querySelector('.gamewin .replay').addEventListener('click',resetGame);
document.querySelector('.close').addEventListener('click',resetGame);