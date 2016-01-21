$(document).ready(function(){
  $(".card").mouseenter(function(){
    $(this).find(".caption:first").animate({
      height: '+=150px'
    });
    $(this).find(".info:first").css("display", "inline-block");
  });
  $(".card").mouseleave(function(){
    $(this).find(".caption:first").animate({
      height: '-=150px'
    }, function(){
      $(this).find(".info:first").css("display", "none");
    });
  });
});
