//event.js

    //1. nav slideUp/Down
    $(function () {
        $('ul.depth01>li').mouseenter(function () {
            $('.lnb').stop().slideDown(300);
        });
        $('nav').mouseleave(function () {
            $('.lnb').stop().slideUp(300);
        });

    });

    //2. emoreBtn
    $(function(){

        //초기설정
        $('.event-close .event-box').slice(0,8).show();
    
        $('.emoreBtn').click(function(e){
            e.preventDefault();
    
            $('.event-box:hidden').slice(0,4).slideDown();
    
            if($('.event-box:hidden').length === 0){
                $('.emoreBtn').fadeOut();
            }
    
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });