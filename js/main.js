  
    var btn1 = document.getElementById("ortho");
    var btn2 = document.getElementById("ent");
    var btn3 = document.getElementById("eye");
    var btn4 = document.getElementById("cardio");
    var btn5 = document.getElementById("xray");
    var btn6 = document.getElementById("blood");
    
    var modal1 = document.getElementById("ortho2");
    var modal2 = document.getElementById("ent2");
    var modal3 = document.getElementById("eye2");
    var modal4 = document.getElementById("cardio2");
    var modal5 = document.getElementById("xray2");
    var modal6 = document.getElementById("blood2");
    
    btn1.addEventListener("click",function(){
        modal1.style.height="100%";
    });
    btn2.addEventListener("click",function(){
        modal2.style.height="100%";
    });
    btn3.addEventListener("click",function(){
        modal3.style.height="100%";
    });
    btn4.addEventListener("click",function(){
        modal4.style.height="100%";
    });
    btn5.addEventListener("click",function(){
        modal5.style.height="100%";
    });
    btn6.addEventListener("click",function(){
        modal6.style.height="100%";
    });
    