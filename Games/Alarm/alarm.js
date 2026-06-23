
var currentTime = document.querySelector("h1"),
selectMenu = document.querySelectorAll("select"),
    content = document.querySelectorAll("#content"),
    seAlarm = document.querySelector("button");

let alarmTime, isAlarmSet=false;
// rington =new Audio(),


 for (let i = 23; i > 0; i--) {
     i=i<10?"0"+i:i;
   let option =i;//"<option value="+i+">"+i+"</option>";
    //console.log(option);  
//selectMenu[0].firstChildElement.insertAdjacentHTML("afterend",option);
    let opt = document.createElement('option');
     let neW = document.createTextNode(option);
     opt.appendChild(neW);
     selectMenu[0].appendChild(opt);
 }
for (let i = 59; i >= 0; i--) {
     i=i<10?"0"+i:i;
   let option =i;//"<option value="+i+">"+i+"</option>";
    //console.log(option);  
//selectMenu[0].firstChildElement.insertAdjacentHTML("afterend",option);
    let opt = document.createElement('option');
     let neW = document.createTextNode(option);
     opt.appendChild(neW);
     selectMenu[1].appendChild(opt);
 }
for (let i = 59; i >= 0; i--) {
     i=i<10?"0"+i:i;
   let option =i;//"<option value="+i+">"+i+"</option>";
    //console.log(option);  
//selectMenu[0].firstChildElement.insertAdjacentHTML("afterend",option);
    let opt = document.createElement('option');
     let neW = document.createTextNode(option);
     opt.appendChild(neW);
     selectMenu[2].appendChild(opt);
 }
for (let i = 59; i >= 0; i--) {
     i=i<10?"0"+i:i;
   let option =i;//"<option value="+i+">"+i+"</option>";
    //console.log(option);  
//selectMenu[0].firstChildElement.insertAdjacentHTML("afterend",option);
    let opt = document.createElement('option');
     let neW = document.createTextNode(option);
     opt.appendChild(neW);
     selectMenu[2].appendChild(opt);
 }
setInterval(()=>{var date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

       if(h >=12){
           h=h;
           ampm = "PM";
       } 
                 h = h == 0?h=12:h;
                 h = h < 10 ? "0" + h : h;
                  m = m < 10 ? "0" + m : m;
                  s = s < 10 ? "0" + s : s;
                
                currentTime.innerText = (h.toString()+" : "+m.toString()
                                         +" : "+s.toString()+" "+ampm);
                 if(alarmTime==(h.toString()+" : "+m.toString()
                                         +" : "+s.toString()+" "+ampm)){
                                            alert("Ringing....")
                                            console.log("Alarm Ringing...");
                 
                 }
                },1000);

function alarm() {
    if(isAlarmSet){
        alarmTime='';
        //rington.pause();
        seAlarm.innerText="Set Alarm";
        return isAlarmSet=false;
        
    };
    let time = selectMenu[0].value+' : '+selectMenu[1].value+' : '+
        selectMenu[2].value+' '+selectMenu[3].value;
    //console.log(time);
    if(time.includes('Hour') || time.includes('Minutes') 
       ||time.includes('Seconds')  || time.includes('AM/PM')){
        return alert('Please Select A Valid Time!!');
    }
    isAlarmSet=true;
    alarmTime=time;
    seAlarm.innerText="Alarm Ready";
    //content.classList.add('disable');
    
    
}

seAlarm.addEventListener('click',alarm);