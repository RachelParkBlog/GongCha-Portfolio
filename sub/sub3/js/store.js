//store.js

    //1. nav slideUp/Down
    $(function () {
        $('ul.depth01>li').mouseenter(function () {
            $('.lnb').stop().slideDown(300);
        });
        $('nav').mouseleave(function () {
            $('.lnb').stop().slideUp(300);
        });

    });