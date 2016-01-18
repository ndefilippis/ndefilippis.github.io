$(document).ready(function(){
  $("card").hover(function(){
    $("caption").animate({
      width: '+=150px'
    });
  });
});
