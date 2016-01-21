$(document).ready(function(){
  $(".card").mouseenter(function(){
    $(this).find(".caption:first").animate({
      height: '+=150px'
    });
  });
  $(".card").mouseleave(function(){
    $(this).find(".caption:first").animate({
      height: '-=150px'
    });
  });
});
