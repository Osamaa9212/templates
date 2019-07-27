$(window).scroll(function() {

    if($(window).scrollTop() > 0){
        $(".nav-bg").css({
            "position":"fixed"
})
    }else{
        $(".nav-bg").css({
            "position":"static"
})
    }
    

    
});
/*
var a = $(window).height(),
    b = $(".nav-bg").innerHeight(),
    c = $(".upper-bar").innerHeight(),
    d= a-(b+c);


console.log(d);

$(".carousel img").height(d);


console.log(b);
console.log(c);
console.log(d);

*/




/*$(window).scroll(function () {
     "use strict";
     if($('html,body').scrollTop() >= 400){
    $(".scroll").fadeIn(100);
}else{
    $(".scroll").fadeOut(100)
}
     
$('.slide-hover').css({ 
      "transform":"scaleY(1)"
      });
     
     if($(window).scrollTop() === 0){
         $('.slide-hover').css({ 
      "transform":"scaleY(0)"
      });
     }
   
   });

    
    $(".check-gear").click(function(){
        
            console.log($(".color-box").css("marginLeft"));
          if($(".color-box").css("marginLeft") == "-211px"){
                $('.color-box').animate({         marginLeft:"0px"
         },50); 
            }else{
                $('.color-box').animate({                    
         marginLeft:"-211px"
         },50); 
            }
        
    });

    var colorli = $('.color-box ul li');

    colorli.click(function(){
        
        console.log($(this).attr("data-value"));
        
        $("link[href*='color']").attr("href",$(this).attr("data-value"))
        
    });

$(window).on('load',function(){
    
$(".loading-overlay").fadeOut(500);
$("body").css("overflow","auto")    
});



$(".scroll").click(function(){
    
    $('html,body').animate({
       scrollTop:0 
    },650);
    
});
    
                    
$(document).ready(function(){
    
    $("body").niceScroll({
        cursorcolor:"#424141cf",
        cursorwidth:"15px",
        cursorborder:"0px solid red"
    });
    //$(".nicescroll-box").niceScroll(".wrap",{cursorcolor:"red
}); 
                                              
*/



    

