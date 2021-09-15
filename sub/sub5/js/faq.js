//faq.js

    //1. nav slideUp/Down
    $(function () {
        $('ul.depth01>li').mouseenter(function () {
            $('.lnb').stop().slideDown(300);
        });
        $('nav').mouseleave(function () {
            $('.lnb').stop().slideUp(300);
        });

    });

    //2. faq-box slideUp/Down
    var c = 0; //1 - 클릭 후, 0 - 클릭전
    $(function(){
        $('.q').click(function(e){
            e.preventDefault();

            // if(c === 1) {
            //     $('.a').stop().slideUp(600);
            //     c = 0;
            // }else {
                
                $(this).next().stop().slideDown(600);
                // c = 1;
            // }
        });
    });