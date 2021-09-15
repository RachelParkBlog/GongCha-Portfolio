//service.js

    //1. nav slideUp/Down
    $(function () {
        $('ul.depth01>li').mouseenter(function () {
            $('.lnb').stop().slideDown(300);
        });
        $('nav').mouseleave(function () {
            $('.lnb').stop().slideUp(300);
        });

    });

    //2.  bfit-btn
    var s = 0; //(0일때 down, 1일때 up)

    $(function(){
        $('.bfit-btn').click(function(e){
            e.preventDefault();
            
            $(this).parent().find('.bfit-more').stop().slideToggle(300);

            if(s === 1){
                $(this).find('.up').hide().siblings().show();
                s=0;
            }else {

                $(this).find('.down').hide().siblings().show();
                s=1;
            }
        });

    });