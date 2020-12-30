
  $('.page-scroll').on('click', function(event) {

      var tujuan = $(this).attr('href');

      event.preventDefault();

      var elementTujuan = $(tujuan);

      $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 56
      }, 1600, 'easeInOutExpo');
 
  });

$(document).ready(function(){
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

$(window).scroll(function(){
   var wScroll = $(this).scrollTop();

   $(".jumbotron img").css({
      "transform": "translate(0px, "+ wScroll/6 +"%)", 
      "width": ( + 280 )+"px", 
      "height": ( + 280 )+"px", 
      "opacity": (1 - wScroll/360)
   });

   $(".jumbotron h1").css({
      "transform": "translate(0px, "+ wScroll/1.2 +"%)", 

   });
   
   $(".jumbotron p").css({
      "transform": "translate(0px, "+ wScroll +"%)", 
      
   });
   // portfolio
   if(wScroll > $(".portfolio").offset().top - 600) {
      $(".portfolio .thumbnail").each(function(i){
         setTimeout(function(){
            $(".portfolio .thumbnail").eq(i).addClass("muncul");
         }, 300 * (i+1));
      });
   }
}); 