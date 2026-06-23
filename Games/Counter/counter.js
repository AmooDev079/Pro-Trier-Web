var count=0;

function change(num){
count+=num;
    document.getElementById("results").innerHTML=count;
}
function reset() {
    document.getElementById("results").innerHTML=0;
    
}