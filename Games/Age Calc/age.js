let name = document.getElementById('name');
let yearOfBirth = document.getElementById('year');
let monthOfBirth = document.getElementById('month');
let dayOfBirth = document.getElementById('day');
let output =  document.getElementById('age');
let btn = document.getElementById('btn');
//btn.addEventListener('click',displayAge);
let date = new Date();
let yearNow = date.getFullYear();
let monthNow = date.getMonth()+1;
let dayNow = date.getUTCDate()+1; 
let years, months, days;
//console.log(yearOfBirth)

function getYears(){
    
     years = yearNow-yearOfBirth.value;
    if(monthOfBirth.value>monthNow || dayOfBirth.value>dayNow){
        years-=1;
    }else if( yearNow==-yearOfBirth.value&&dayOfBirth.value==dayNow && monthOfBirth.value==monthNow){
        years =years;
    return 'HappyBirthDay';
    }
   return years;
    //console.log(years +' years');
}

function getMonths() {

    
    months = monthNow - monthOfBirth.value;
    if(monthOfBirth.value < monthNow){
        months = months;
    }if(monthOfBirth.value > monthNow){
         months = 11+months;
    }if(monthOfBirth.value == monthNow && dayOfBirth.value>dayNow){
        months = 11+months;
    }
    if(monthOfBirth.value == monthNow && dayOfBirth.value==dayNow && dayOfBirth.value < dayNow){
        months = 0;
    }
    return months;
    //console.log(months+' months');
}
function getDays() {
    
    days = dayNow - dayOfBirth.value;
    if(dayNow>dayOfBirth.value){
        days = days;
    } if(dayNow<dayOfBirth.value){
       days = 30+days; 
    } if (dayNow==dayOfBirth.value){
        days=0;
    }
    return days;
    //console.log(days+' days')
}

function getTheAge() {
   // getYears();getMonths();getDays();
if(monthOfBirth.value ==''||yearOfBirth.value ==''||dayOfBirth.value =='')
   { output.innerText ='Please Input Valid Dates!!';
   }
else{
     output.innerText = "Hi "+name.value+' you are '
        +getYears()+' years, '+getMonths()+' months and '+getDays()+' days old.';
   
}
}
/*function displayAge() {
    let y = yearOfBirth.value<monthNow?yearNow - yearOfBirth.value-1:yearNow - yearOfBirth.value;
    
    let m = monthOfBirth.value>monthNow?12-(monthOfBirth.value-monthNow):monthNow-monthOfBirth.value;
   
   let d = dayOfBirth.value>dayNow?30-(dayOfBirth.value-dayNow):dayNow-dayOfBirth.value;


if(monthOfBirth.value==monthNow &&  dayOfBirth.value>dayNow){
    m =11;
    y -=1;
    d = 30-(dayOfBirth.value-dayNow);
}
    else if (monthOfBirth.value==monthNow &&  dayOfBirth.value==dayNow){ //m= && d=
        y=y;
        d=0;m=0;
    }
    else if(monthOfBirth.value<monthNow &&  dayOfBirth.value==dayNow){ //m< && d=
m =monthNow-monthOfBirth.value;
        d =0;
    y +=1;
}
   else if(monthOfBirth.value==monthNow &&  dayOfBirth.value<dayNow){// m== & d<
    m = 0;
     d = dayNow-dayOfBirth.value;
}
    else if(monthOfBirth.value>monthNow &&  dayOfBirth.value==dayNow){//m> &&d == 
        m =12-(monthOfBirth.value-monthNow);
        y -=1;
        d = 0;
    }//
        else if(monthOfBirth.value>monthNow &&  dayOfBirth.value<dayNow){ // m> && d<
        m =12-(monthOfBirth.value-monthNow);
       d = dayNow-dayOfBirth.value;
        y -=1;
    }//
    else if(monthOfBirth.value>monthNow &&  dayOfBirth.value>dayNow){ // m> && d>
        m =12-(monthOfBirth.value-monthNow);
        d = (30-dayOfBirth.value)+dayNow;  
        y +=1;
    }
         else if(monthOfBirth.value<monthNow &&  dayOfBirth.value==dayNow){ //m< && d==
         m =monthNow-monthOfBirth.value;
        d = 0; 
        y +=1;
    }
    else if(monthOfBirth.value<monthNow &&  dayOfBirth.value>dayNow){//m< && d>
        m =monthNow-monthOfBirth.value;
       
        d = (30-dayOfBirth.value)+dayNow; 
        y +=1;
    }
   /* else if(monthOfBirth.value==monthNow&&dayOfBirth.value>dayNow){
        y-=1;
        m = 11;
        d = 30-(dayOfBirth.value-dayNow)
    }
    else if(monthOfBirth.value==monthNow&&dayOfBirth.value<dayNow){
     m = 0;
        d = dayNow-dayOfBirth.value;
    }

    if(yearOfBirth.value == ""){
       output.innerText ='Input valid year, month and day!' 
    }else{
    output.innerText = "Hi "+name.value+" you are "+y+" years "+m+" months and "+d+" days old";
    console.log(m+"  "+y+" "+d);
}
}*/












