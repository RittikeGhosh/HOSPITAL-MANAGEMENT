   
    var btn0 = document.getElementById("bookAp");
    var modal0 = document.getElementById("modal1");

    var popUp = document.querySelector('.subscribe');
    var close = document.getElementById("close");

    var popUpText = document.querySelector('.subscribe .container h');
    
    btn0.addEventListener("click",function(){
        modal0.style.height="100%";
    });
 
    close.addEventListener("click",function(){
        modal0.style.height="0%";
    });

    window.onclick = function(e){
        if(e.target == modal0)
            {
                modal0.style.height="0%";
            }
      else if(e.target == popUp)
            {
                popUp.style.display="none";
            }
        else if(e.target == modal1)
            {
                modal1.style.height="0%";
            }
        else if(e.target == modal2)
            {
                modal2.style.height="0%";
            }
        else if(e.target == modal3)
            {
                modal3.style.height="0%";
            }
        else if(e.target == modal4)
            {
                modal4.style.height="0%";
            }
        else if(e.target == modal5)
            {
                modal5.style.height="0%";
            }
        else if(e.target == modal6)
            {
                modal6.style.height="0%";
            }
    };
    
    var rate =document.querySelector("select");
    rate.addEventListener('click',function(){
        if(rate.value == 0)
            document.querySelector("#rate").value = "Approximate checkup fee";
        else if(rate.value == 1)
            document.querySelector("#rate").value = "Approximate checkup fee : 2200 Rs";
        else if(rate.value == 2)
            document.querySelector("#rate").value = "Approximate checkup fee : 1000 Rs";
        else if(rate.value == 3)
            document.querySelector("#rate").value = "Approximate checkup fee : 3000 Rs";
        else if(rate.value == 4)
            document.querySelector("#rate").value = "Approximate checkup fee : 500 Rs";
        else if(rate.value == 5)
            document.querySelector("#rate").value = "Approximate checkup fee : 2000 Rs";
        else if(rate.value == 6)
            document.querySelector("#rate").value = "Approximate checkup fee : 700 Rs";
        else if(rate.value == 7)
            document.querySelector("#rate").value = "Approximate checkup fee : N/A";
    });
    document.querySelector("input[type='submit']").addEventListener('click',function(e){
        e.preventDefault();
        modal0.style.height="0%";
        popUpText.innerHTML = "Your appointment has been successfully Booked please Arrive on Time";
        popUp.style.display= "block";
    });

    function validate(){
        var email = document.querySelector("input[type='email']");
        if(email.value != '')
        {popUpText.innerHTML = "Your Are Subscribed to Our News feeds";
        popUp.style.display= "block";}
        else{
            alert("Email cannot be empty");
        }
    }