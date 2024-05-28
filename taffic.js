
 function green(){
    var green=document.getElementById('green')
    var second=document.getElementById("sec").value
    var red=document.getElementById('red')
        green.style.backgroundColor= "rgb(12, 209, 12)";
    green.style.boxShadow=`0px , 0px , 10px , rgb(236, 24, 24),
    0px , 0px , 30px ,rgb(236, 24, 24);`
    red.style.backgroundColor= "black";
    red.style.boxShadow=`none`
    
    setTimeout(yellow,second);
    
 }
 function red(){
    var red=document.getElementById('red')
    var yellow=document.getElementById('yellow')
    var second=document.getElementById("sec").value
    red.style.backgroundColor= "red";
    red.style.boxShadow=`0px , 0px , 10px , rgb(236, 24, 24),
    0px , 0px , 30px ,rgb(236, 24, 24);`
     yellow.style.backgroundColor= "black";
    yellow.style.boxShadow=`none`
    setTimeout(green,second);
    
 }
 function yellow(){
    var yellow=document.getElementById('yellow')
    var green= document.getElementById("green")
    var second=document.getElementById("sec").value
    yellow.style.backgroundColor= "yellow";
    yellow.style.boxShadow=`0px , 0px , 10px , rgb(236, 24, 24),
    0px , 0px , 30px ,rgb(236, 24, 24);`
    green.style.backgroundColor= "black";
    green.style.boxShadow=`none`
    setTimeout(red,second)
    
 }
 
 