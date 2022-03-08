// alert("kcksklckl")
$(document).ready(function () {
  console.log("jquery starts");
  $('.row3').css('display','none')
  $('.row4').css('display','none')
  $('.row5').css('display','none')
  $('#pagi1').addClass('active')

$('#pagi1').on('click',function(){
  $('.row3').css('display','none')
  $('.row4').css('display','none')
  $('.row5').css('display','none')
  $('.row1').css({'class':'row p-2 mt-3','display':'flex'})
  $('.row2').css({'class':'row p-2 mt-3','display':'flex'})
  $('a').removeClass('active')
  $(this).addClass('active')
})
$('#pagi2').on('click',function(){
  $('.row3').css({'class':'row p-2 mt-3','display':'flex'})
  $('.row4').css({'class':'row p-2 mt-3','display':'flex'})
  $('.row5').css('display','none')
  $('.row1').css('display','none')
  $('.row2').css('display','none')
  $('a').removeClass('active')
  $(this).addClass('active')
})
$('#pagi3').on('click',function(){
  $('.row3').css('display','none')
  $('.row4').css('display','none')
  $('.row5').css({'class':'row p-2 mt-3','display':'flex'})
  $('.row1').css('display','none')
  $('.row2').css('display','none')
  $('a').removeClass('active')
  $(this).addClass('active')
})
  $(window).on("load", function () {
    $("#logo").fadeToggle(1000, () => {
      $("#myIntro").show(1000, function () {
        $(this).css("opacity", "1");
        window.setTimeout(() => {}, 1000);
        $(".personCon").slideDown(1000, () => {
          $(".leftNav li").each(function () {
            console.log("kdjkjd");
            $(this).slideDown(1000);
          });
          window.setTimeout(() => {
            $(".personCon img").fadeToggle(800, () => {
              lo();
              (() => {
                $("#job").css("opacity", "1");
              })();
            });
          }, 1000);
        });
      });
    });
  });
  console.log("Hello from Jquery file");
  $(".Ritems li").on("click", function () {
    console.log($(this).index());
    let ind = $(this).index();
    $(".RitemsEx div").each(function () {
      //   console.log("the other "+$(this).index())
      if ($(this).index() == ind) {
        // console.log($(this))
        $(this).css("z-index", "1000");
      } else {
        $(this).css("z-index", "1");
      }
    });
  });

  $("#eduBtn").on("click", function () {
    $(".RitemsEx div").eq(0).css("z-index", "2000");
    $(".Ritems li").eq(0).addClass("showWhichSection");
  });

  $(".RitemsEx > div").on("mouseover", function () {
    

    $(".Ritems li").eq($(this).index()).addClass("showWhichSection");
  });
  $(".RitemsEx div").on("mouseleave", function () {
    
    console.log("hittt");
    $(".Ritems li").eq($(this).index()).removeClass("showWhichSection");
  });

  $(".mailShowBtn").one("mouseenter", function () {
    $(this).fadeToggle(1000, () => {
      $(".mailBox")
        .css("transition", " all,2s ease")
        .removeClass("invisible")
        .addClass("visible");
    });
  });
});

function lo() {
  $(".myName")
    .children()
    .each(function () {
      $(this).show(2000);

    });
}
