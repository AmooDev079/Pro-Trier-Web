//const passW = document.getElementById('password');
var len=12;
var uP ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var low ="abcdefghijklmnopqrstuvwxyz";
var num ="0123456789";
var sym ="+#$%^&*?*/-";

var allCh = uP+low+num+sym;

function generatePs() {
   var passward=""; 
    passward += uP[Math.floor(Math.random() * uP.length)];
    passward += low[Math.floor(Math.random() * low.length)];
    passward += num[Math.floor(Math.random() * num.length)];
    passward += sym[Math.floor(Math.random() * sym.length)];

    while(len>passward.length){
        passward += allCh[Math.floor(Math.random() * allCh.length)];
    } 
   var passW = document.getElementById('password');
passW.value = passward;

}
