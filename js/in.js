$(document).ready(function () {
    $("#welcome").lettering();
    $(window).on("load",function(){
        window.setTimeout(()=>{
            $("img").css({"transform":"skewX(90deg)translate(80px,-400px)","transition":"1s ease-in"})
            $("#welcome").css({"transform":"skewY(-150deg)translateY(-10000px)","transition":"1s ease-in"})
           setTimeout(()=>{ 
               window.location.href="./in.html"
            },1000)
    
        },1500)

    })



  });