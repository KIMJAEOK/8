$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('.submenu').stop().slideDown(400);
    },
    function(){
        $(this).find('.submenu').stop().slideUp(400);
    });

    $('.slideList').children('div:gt(0)').hide();
    var x = 0;
    setInterval(function(){
        var next = (x+1) % 3;
        $('.slideList').find('div').eq(x).fadeOut();
        $('.slideList').find('div').eq(next).fadeIn();
        x=next
    },3000);

    $('.layerPopup').on('click',function(){
        $('#popup').fadeIn();
    });
    $('.close').on('click',function(){
        $('#popup').fadeOut();
    });











});