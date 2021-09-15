//order.js

//1. nav slideUp/Down
$(function () {
    $('ul.depth01>li').mouseenter(function () {
        $('.lnb').stop().slideDown(300);
    });
    $('nav').mouseleave(function () {
        $('.lnb').stop().slideUp(300);
    });

});

//2. TypoEffect

/*/////////////////////////////////////////////
    initSet() : 초기 세팅함수
////////////////////////////////////////////*/
function initSet() {
    $('.base-box'>'.order-text').css({
        left: '-150%'
    });
    $('.base-box'>'.order-img').css({
        right: '-150%'
    });
    $('.topping-box'>'.order-text').css({
        left: '-150%'
    });
    $('.topping-box'>'.order-img').css({
        right: '-150%'
    });
    $('.grade-box'>'.order-text').css({
        left: '-150%'
    });
    $('.grade-box'>'.order-img').css({
        right: '-150%'
    });
}


/*/////////////////////////////////////////////
    actTxt() : 왼쪽 text 이동 함수
    actImg() : 오른쪽 img 이동 함수
////////////////////////////////////////////*/
function actTxt(n) {
    $("#order" + n).find('.order-txt').stop().animate({
        left: 0
    }, 800, 'easeOutCirc');
}

function actImg(n) {
    $("#order" + n).find('.order-img').stop().animate({
        right: 0
    }, 800, 'easeOutCirc');
}

var o1pos, o2pos, o3pos, o4pos; //스크롤 top값 세팅 변수

var o1 = 0,
    o2 = 0,
    o3 = 0;
    o4 = 0; //스크롤액션 실행 여부

var gap = 580;

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log("현재 스크롤 높이 값:" + scTop)

    initSet(); //초기 세팅함수 실행

    if (scTop > 200 && scTop < o2pos - gap) {
        if (o1 === 1) return false;
        o1 = 1;
        actTxt(1);
        actImg(1);
    } 
    else if (scTop > o2pos - gap && scTop < o1pos) {
        if (o2 === 1) return false;
        o2 = 1;
        actTxt(2);
        actImg(2);
    } 
    else if (scTop > o2pos && scTop < o3pos - gap) {
        if (o3 === 1) return false;
        o3 = 1;
        actTxt(3);
        actImg(3);
    }
});



$(function () {
    $('html, body').stop().delay(100).animate({
        scrollTop: 0
    }, 10);


    // o1pos = $('#order1').offset().top;
    o1pos = $('#order1').offset().top;
    o2pos = $('#order2').offset().top;
    o3pos = $('#order3').offset().top;

    console.log("o1pos top값:",o1pos)
    console.log("o2pos top값:",o2pos)
    console.log("o3pos top값:",o3pos)
    
    console.log("o1pos - gap:",o1pos-gap)
    console.log("o2pos - gap:",o2pos-gap)
    console.log("o3pos - gap:",o3pos-gap)
    //title 초기설정
    $('.title').css({
        top: '-200%'
    });
    $('.txt-wrap>p').hide();

    //title
    $('.title').stop().delay(10).animate({
        top: '11.5%'
    }, 800, 'easeOutQuart');
        
    $('.txt-wrap>p').stop().delay(600).fadeIn(1000);
    $('.base-box>.order-text').animate({
        left: 0
    }, 800, 'easeOutCirc');



}); //jQuery