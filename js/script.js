$(function(){
$('.js-preloader').preloadinator({

  minTime: 2000

});

 
$('.wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false
});


//mixitup
var mixer = mixitup('#hello', {
    animation: {
        duration: 300
      }
});

  
});









//js
//wow
  wow = new WOW(
             {
            boxClass:     'wow',      // default
animateClass: 'animated', // default
        
           mobile:       true,       // default
         live:         true        // default 
     }
    )            
wow.init();