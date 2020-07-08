$(".header_box li").click(function(){
    var $link = $(this).text()
    console.log($link)
    $("html, body").animate({
        scrollTop: $(`#${$link}`).offset().top 
    },{
        duration: 500,
        easing: "swing"
    });
      return false;
})