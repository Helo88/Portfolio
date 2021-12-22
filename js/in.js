$(document).ready(function () {
    $("#welcome").lettering();
    $(window).on("load",function(){
        window.setTimeout(()=>{
            $("img").css({"transform":"skewX(90deg)translate(80px,-400px)","transition":"1s ease-in-out"})
            $("#welcome").css({"transform":"skewY(-150deg)translateY(-500px)","transition":"1s ease-in-out"})
           setTimeout(()=>{ 
               window.location.href="./in.html"
            },800)
    
        },2000)

    })



  });