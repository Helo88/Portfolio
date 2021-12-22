// alert("kcksklckl")
$(document).ready(function(){
   
        console.log("jellli")
        // $(".briefEx").toggleClass("myFade");
   
       
   $(window).on("load",function(){

    $("#logo").fadeToggle(1000 , ()=>{
    $('#myIntro').show(1000,function(){
    $(this).css("opacity","1")
    window.setTimeout(()=>{

        
    },1000)
    $(".personCon").slideDown(1000,()=>{
    $(".leftNav li").each(
        function(){
            console.log("kdjkjd")
            $(this).slideDown(1000)
    })
    window.setTimeout(()=>{
        $(".personCon img").fadeToggle(800,()=>{lo()})

    },1000)
    

    })

  })
}) })
console.log("Hello from Jquery file")
  $(".Ritems li").on("click",function(){
      console.log($(this).index())
      let ind=$(this).index()
      $(".RitemsEx div").each(function(){
         
        //   console.log("the other "+$(this).index())
       if($(this).index()==ind)
       {
        console.log($(this))
        $(this).css("z-index","1000")
       }
       else{
        $(this).css("z-index","1")
       }
      })

      
  })

  $(".RitemsEx > div").on("mouseenter",function(){
    //   console.log("hovered section ", $(".Ritems li").eq($(this).index()).text())
    
    $(".Ritems li").eq($(this).index()).addClass("showWhichSection")
})
$(".RitemsEx div").on("mouseleave",function(){
    // console.log("hovered section ", $(".Ritems li").eq($(this).index()).text())
  $(".Ritems li").eq($(this).index()).removeClass("showWhichSection")
})


$(".mailShowBtn").one("mouseenter",function(){
    $(this).fadeToggle(1000,()=>{
    $(".mailBox").css("transition"," all,2s ease").removeClass("invisible").addClass("visible")
    })
})
});

function lo (){
    $(".myName").children().each(
        function(){
           
               $(this).show(2000)
           
            console.log("child"+ $(this).innerText)
          
        })
}