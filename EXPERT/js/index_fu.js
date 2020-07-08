var k = 0
var l = 0
var v = 0
// 滚动事件
$(window).scroll(function(){

if($(document).scrollTop()>5000){
    $('#member .member-list li').css({
        "top":"0px",
        "opacity":"1",
    },function(){
        // setTimeout(() => {
       
        //     timer1 = setInterval(function(){
        //         k += 10
        //         $(".member-list li h5")[0].innerHTML ="$"+k
        //         if(k == 450){
        //             clearInterval(timer1)
        //         }
        //     },50);
        
        //     timer2 = setInterval(function(){
        //         l += 100
        //         $(".member-list li h5")[1].innerHTML = "$"+l
        //         if(l == 4500){
        //             clearInterval(timer2)
        //         }
        //     },50);
        //     timer3 = setInterval(function(){
        //         v += 10
        
        //         $(".member-list li h5")[2].innerHTML = "$"+v
        //         if(v == 650){
        //             clearInterval(timer3)
        //             console.log(1)
        //         }
        //     },50);
        // });
        console.log(1)
        
    });
    
}
if($(document).scrollTop()>6433){
    $('#service .service-l,#service .service-r').css({
        "top":"0px",
        "opacity":"1",
    });


}
})


   
 

