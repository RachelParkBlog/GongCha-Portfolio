//teastory.js

//1. nav slideUp/Down
$(function () {
    $('ul.depth01>li').mouseenter(function () {
        $('.lnb').stop().slideDown(300);
    });
    $('nav').mouseleave(function () {
        $('.lnb').stop().slideUp(300);
    });

});

//2. tmoreBtn click();

$(function(){

    $('.tmoreBtn').click(function(e){
        e.preventDefault();

        var n = $(this).parent().index();
        console.log("버튼의 인덱스 번호: ",n)
        
        $('.tea-more').eq(n-1).stop().slideDown(600);
    });
    $('.cbtn').click(function(evt){
        evt.preventDefault();

        var n = $(this).parent().index();
        var m = n-5;
        console.log(m)

        $('.tea-more').eq(m).stop().slideUp(600);
    });


    $('.cbtn').hover(function(){
        $(this).animate({
            rotate: '-90deg'
        },250);
    },function(){
        $(this).animate({
            rotate: '0deg'
        },250);
    });
});


//3. tea-recipe
var r1=0,
    r2=0,
    r3=0,
    r4=0;

var r1pos, r2pos, r3pos, r4pos;
const gap = 300;

$(function(){
    //새로고침 설정
    $('html, body').stop().delay(100).animate({
        scrollTop: 0
    },10);
    //초기설정
    $('.rec-text').hide();

    r1pos = $('.tea-recipe-wrap').find('div:nth-child(2)').offset().top;
    r2pos = $('.tea-recipe-wrap').find('div:nth-child(3)').offset().top;
    r3pos = $('.tea-recipe-wrap').find('div:nth-child(4)').offset().top;
    r4pos = $('.tea-recipe-wrap').find('div:nth-child(5)').offset().top;

    console.log(r1pos); 
    console.log(r2pos);
    console.log(r3pos);
    console.log(r4pos);


});

$(window).scroll(function(){
    var scTop = $(this).scrollTop();
    console.log("현재 스크롤 top값: ",scTop);

    if(scTop> 630 && scTop < r1pos -gap ){
        if(r1 ===1) return false;
        r1 === 1;
        $('.recipe-box:nth-child(2)').find('.rec-text').fadeIn();
    }
    else if(scTop > r1pos - gap && scTop< r1pos){
        if(r2 ===1) return false;
        r2 === 1;
        $('.recipe-box:nth-child(3)').find('.rec-text').fadeIn();
    }
    else if(scTop > r1pos && scTop< r2pos){
        if(r3 ===1) return false;
        r3 === 1;
        $('.recipe-box:nth-child(4)').find('.rec-text').fadeIn();
    }
    else if(scTop > r3pos - gap && scTop< r3pos){
        if(r4 ===1) return false;
        r4 === 1;
        $('.recipe-box:nth-child(5)').find('.rec-text').fadeIn();
    }
});