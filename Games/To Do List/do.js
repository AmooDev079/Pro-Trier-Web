const inputBox = document.getElementById("inputBox");
const list =document.getElementById("list");



liI = list.childNodes;
liI = Array.prototype.slice.call(liI);
console.log(liI)

for (let i = 0; i < liI.length; i++) {
    if (liI[i].tagName==="SPAN") {
        document.getElementById("out").style.display='block';
        console.log(liI)
    }
    
}
function addTask() {



    if(inputBox.value ==="")
    {
        alert("YOU MUST ADD SOMETHING");
    }
    else{

        let li =document.createElement("li");
        let newValue = inputBox.value;
    newValue=newValue.slice(0,1).toUpperCase()+newValue.slice(1);
            li.innerHTML=newValue;
        list.appendChild(li);
        let span =document.createElement("span");
        span.id = 'close';
        span.innerHTML= 'X';
            li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
    
list.addEventListener('click',function(e){
   if (e.target.tagName==="SPAN"){
       e.target.parentElement.remove();

   }
           if (e.target.tagName==="LI"){
           e.target.style.color="red";
           e.target.style.listStyleType="square";
       }
    
});
    
function saveData(){
    localStorage.setItem('data', list.innerHTML)
  
}