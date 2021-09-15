//index_.js

//1. nav slideUp/Down
$(function () {
    $('ul.depth01>li').mouseenter(function () {
        $('.lnb').stop().slideDown(300);
    });
    $('nav').mouseleave(function () {
        $('.lnb').stop().slideUp(300);
    });
});

/////////////////////////////////////////////////////////////////////////////
//2.slider
$(function () {

    var autoSlide = function (c) {

        $('.slider').animate({
            left: '-100%'
        }, 1000, function () {
            $('.viewer').first().appendTo('.slider');
            $('.slider').css('left', 0);
        }); //animate

        if (c === 1) clearAutoSide();
    }; //autoslide 함수

    /* 슬라이더 자동실행 함수 */
    var intcallSide;
    var autoCallside = function () {
        intcallSide = setInterval(function () {
            autoSlide();
        }, 4000);
    };

    autoCallside();

    // /* 자동실행 멈춤 함수 - clearAutoSide */

    var tcallSide;
    var clearAutoSide = function () {
        clearInterval(intcallSide);
        clearTimeout(tcallSide);

        tcallSide = setTimeout(function () {
            autoCallside();
        }, 5000);
    };

    /* next, prev button 클릭시 이동하기 */
    var btn = 0;

    $('.mbtn').click(function (e) {
        e.preventDefault();

        if (btn === 1) return false;
        btn = 1;

        var idx = $(this).index('.mbtn');
        console.log(idx);
        if (idx) {
            autoSlide(1);
            btn = 0;
        } else {
            $('.slider').prepend($('.viewer').last()).css({
                left: '-100%'
            }).animate({
                left: 0
            }, 1000, function () {
                btn = 0;
            });

            clearAutoSide();
        }

    }); //.abtn click()


    /* pause, play button */
    $('.sbtn').click(function (e) {
        e.preventDefault();

        if (btn === 1) return false;
        btn = 1;

        var i = $(this).index('.sbtn');
        if(i){
            autoSlide(1);
            btn = 0;
        }else {
            btn=0;
            clearAutoSide();

        }
    });
}); //jQuery


/////////////////////////////////////////////////////////////////////////////
//3. event
$(function () {

    //3-1. 오른쪽버튼 클릭시
    $('.next').click(function (e) {
        e.preventDefault();

        $(this).hide();
        $('.event-box').stop().animate({
            left: '-1050px'
        }, 400, function () {
            $('.prev').show();
        });
        $('.evt-pager span').last().addClass('active').siblings().removeClass('active');
    }); //next click()

    //3-2. 왼쪽버튼 클릭시
    $('.prev').click(function (e) {
        e.preventDefault();

        $(this).hide();
        $('.event-box').stop().animate({
            left: 0
        }, 400, function () {
            $('.next').show();
        });
        $('.evt-pager>span').first().addClass('active').siblings().removeClass('active');


    }); //prev click()
}); //jQuery

/////////////////////////////////////////////////////////////////////////////
//5. video box
$(function () {
    $('.pBtn').click(function (e) {
        e.preventDefault();

        $('.thumbs').css({
            display: 'none'
        });

        $('video').attr({
            controls: "",
            muted: "",
            autoplay: "",
            playsinline: ""
        }).show();

    }); //click
}); //jQuery

/////////////////////////////////////////////////////////////////////////////
//6. introduction page

var scSts = 0; //스크롤 실행여부 확인
var scPos;

$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    //console.log("현재 스크롤 위치값:" + scTop);
    if (scTop > scPos - 100) {
        if (scSts === 1) return false;
        scSts = 1;
        $('.intd-cont:nth-child(1)').stop().fadeIn(600);
        $('.intd-cont:nth-child(2)').stop().delay(100).fadeIn(600);
        $('.intd-cont:nth-child(3)').stop().delay(400).fadeIn(600);
        $('.intd-cont:nth-child(4)').stop().delay(600).fadeIn(600);
    }
});

$(function () {
    $('html, body').stop().delay(100).animate({
        scrollTop: 0
    }, 10, function () {
        scSts = 0;
        $('.intd-cont:nth-child(1), .intd-cont:nth-child(2), .intd-cont:nth-child(3), .intd-cont:nth-child(4)').fadeOut();
    });

    scPos = $('.intd-box').offset().top;
});

/////////////////////////////////////////////////////////////////////////////
//7. sns animation
//함수:초기 세팅
function intSet() {
    $('#sns1 .nextImg').stop().animate({
        left: '-100%'
    }, 2500);
    $('#sns4 .nextImg').stop().animate({
        top: '-100%'
    }, 3200);
    $('#sns6 .nextImg').stop().animate({
        left: '100%'
    }, 2800);
    $('#sns8 .nextImg').stop().animate({
        top: '-100%'
    }, 3500);
    $('#sns9 .nextImg').stop().animate({
        left: '-100%'
    }, 2500);
    $('#sns10 .nextImg').stop().animate({
        left: '100%'
    }, 3500);
    $('#sns11 .nextImg').stop().animate({
        top: '-100%'
    }, 3000);
    $('#sns12 .nextImg').stop().animate({
        left: '-100%'
    }, 2700);
    $('#sns13 .nextImg').stop().animate({
        left: '100%'
    }, 3500);
    $('#sns14 .nextImg').stop().animate({
        top: '-100%'
    }, 2900);
}

function reSet() {
    $('#sns1 .firstImg').stop().animate({
        left: 0
    }, 2500);
    $('#sns4 .firstImg').stop().animate({
        top: 0
    }, 3200);
    $('#sns6 .firstImg').stop().animate({
        left: 0
    }, 2800);
    $('#sns8 .firstImg').stop().animate({
        top: 0
    }, 3500);
    $('#sns9 .firstImg').stop().animate({
        left: 0
    }, 2500);
    $('#sns10 .firstImg').stop().animate({
        left: 0
    }, 3500);
    $('#sns11 .firstImg').stop().animate({
        top: 0
    }, 3000);
    $('#sns12 .firstImg').stop().animate({
        left: 0
    }, 2700);
    $('#sns13 .firstImg').stop().animate({
        left: 0
    }, 3500);
    $('#sns14 .firstImg').stop().animate({
        top: 0
    }, 2900);
}


function slideAction() {
    $('#sns1 .firstImg').stop().delay(3500).animate({
        left: '-100%'
    }, 2500, function () {
        $('#sns1 .nextImg').stop().animate({
            left: 0
        }, 2900,'easeInSine');
    });

    $('#sns4 .firstImg').stop().animate({
        top: '100%;'
    }, 3200, function () {
        $('#sns4 .nextImg').stop().delay(1200).animate({
            top: 0
        }, 3500, 'easeInSine');
    });


    $('#sns6 .firstImg').stop().animate({
        left: '-100%'
    }, 2800, function () {
        $('#sns6 .nextImg').stop().animate({
            left: 0
        }, 2700, 'easeInSine');
    });

    $('#sns8 .firstImg').stop().animate({
        top: '100%'
    }, 3500, function () {
        $('#sns8 .nextImg').stop().delay(500).animate({
            top: 0
        }, 3000, 'easeInSine');
    });

    $('#sns9 .firstImg').stop().animate({
        left: '100%'
    }, 2500, function () {
        $('#sns9 .nextImg').stop().animate({
            left: 0
        }, 3500, 'easeInSine');
    });

    $('#sns10 .firstImg').stop().animate({
        left: '-100%'
    }, 3500, function () {
        $('#sns10 .nextImg').stop().animate({
            left: 0
        }, 2500,'easeInSine');
    });

    $('#sns11 .firstImg').stop().animate({
        top: '-100%'
    }, 3000, function () {
        $('#sns11 .nextImg').stop().animate({
            top: 0
        }, 3500,'easeInSine');
    });

    $('#sns12 .firstImg').stop().animate({
        left: '-100%'
    }, 2700, function () {
        $('#sns12 .nextImg').stop().delay(800).animate({
            left: 0
        }, 2800,'easeInSine');
    });

    $('#sns13 .firstImg').stop().animate({
        left: '100%'
    }, 3500, function () {
        $('#sns13 .nextImg').stop().animate({
            left: 0
        }, 3200,'easeInSine');
    });

    $('#sns14 .firstImg').stop().animate({
        top: '-100%'
    }, 2900, function () {
        $('#sns14 .nextImg').stop().delay(1000).animate({
            top: 0
        }, 2500,'easeInSine');
    });

}

$(function () {

    intSet();
    setInterval(function () {
        reSet();
        slideAction();
        intSet();

    }, 12000);


});