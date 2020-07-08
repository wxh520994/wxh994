// 滚动事件
$(window).scroll(function(){
    var res=$(this).scrollTop();
if($(document).scrollTop()>2694){
   $('.process .rounded:nth-child(1)').animate({
        "left":"0px",
        "opacity":"1",
        
    },500);

   $('.process .rounded:nth-child(2)').animate({
        "top":"0px",
        "opacity":"1",
        "left":"20px",
       
    },500);

    $('.process .rounded:nth-child(3)').animate({
        "left":"40px",
        "opacity":"1",
    },500);
   
    
}

})

 




