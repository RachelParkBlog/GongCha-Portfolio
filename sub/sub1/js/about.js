//about.js

//1. nav slideUp/Down
$(function () {
    $('ul.depth01>li').mouseenter(function () {
        $('.lnb').stop().slideDown(300);
    });
    $('nav').mouseleave(function () {
        $('.lnb').stop().slideUp(300);
    });

});


//2. scroll event()

var pn = 0; //현재 페이지 번호 (=0)
//const total = 4;
const total = 5; //footer포함
var prot = 0;

$(function () {
    $('html, body').stop().delay(100).animate({
        scrollTop: 0
    }, 10);



    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();

        if (prot === 1) return false;
        prot = 1;

        var evt = window.event ||e;
        var delta = evt.wheelDelta;

        if (delta>0) {
            pn--;
            if (pn === -1) pn = 0;
        } else {
            pn++;
            if (pn === total) pn = total - 1;
        }

        var pagepos = $('.page').eq(pn).offset().top;
        console.log('페이지 위치 값: ' + pagepos)

        $('html, body').stop().animate({
            scrollTop: pagepos + 'px'
        },800,function(){});
        prot = 0;
    });
});
