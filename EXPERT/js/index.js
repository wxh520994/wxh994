// 轮播
$.get("php/index.php","",(jsonTxt)=>{
    for(var i = 0;i<jsonTxt.length;i++){
        var $div = $("<div class='ban_text swiper-slide'></div>")
        var $h1 = $(`<h1>${jsonTxt[i][1]}</h1>`)
        var $p = $(`<p>${jsonTxt[i][2]}</p>`)
        var $a = $(`<a href="">Get Started</a>`)
        
        $div.append($h1)
        $div.append($p)
        $div.append($a)

        var $div2 = $(`<div class="swiper-slide"></div>`)
        var $img = $(`<img src=${jsonTxt[i][3]} alt="">`)

        $div2.append($img)
        $(".ban_l .carosel_1").append($div)
        $(".ban_r .carosel_1").append($div2)
    }
   
},"JSON")


// header开始

$(window).scroll(function(){
    if($(document).scrollTop()>80){
        $('header').css({
            "position": "fixed",
            "top": "0px",
            "background-color": "rgba(255, 255, 255,1)"
        });
        $('.header_box ul li').css({
            "color":"#352961",
            "line-height":"50px"
        });
        $('.header_box ul li a').css({
            "color":"#352961",
        });
        $('.header_box ul li a:after').css({
            "background-color":"#352961"
        });
        $('.ban_l').css({
            "left": "0px",
            "opacity": "1"
        });
        $('.ban_r').css({
            "right": "0px",
            "opacity": "1"
        });
        $('.header_box p').css({
            "line-height":"100px"
        })
    }
    else if($(document).scrollTop()==0){
        $('header').css({
            "position": "none",
            "background-color": "transparent"
        });
        $('.header_box ul li').css({
            "color":"white",
            "line-height":"80px"
        });
        $('.header_box ul li a').css({
            "color":"white",
        });
        $('.header_box ul li a:after').css({
            "background-color":"white"
        });
    }
    if($(document).scrollTop()>750){
        $('.con_l').css({
            "left": "0px",
            "opacity": "1"
        });
        $(".con_r").css({
            "right":"0px",
            "opacity": "1"
        })
    }
})

// 滚动事件
$(window).scroll(function(){

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


