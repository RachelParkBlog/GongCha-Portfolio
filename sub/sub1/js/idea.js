    //idea.js

    //1. nav slideUp/Down
    $(function () {
        $('ul.depth01>li').mouseenter(function () {
            $('.lnb').stop().slideDown(300);
        });
        $('nav').mouseleave(function () {
            $('.lnb').stop().slideUp(300);
        });

    });

    //2. 글씨효과
    var pos1, pos2, pos3, pos4;
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        console.log(scTop);
        var gap = 250;

        if (scTop> 80 && scTop < pos1- gap){
            $('.idea>h2').fadeIn();
        }else if(scTop> pos1-gap && scTop <pos1){
            $('.idea-box:first .txt-box').stop().animate({
                left: '3%'
            },900,'easeOutQuad');
            $('.idea-box:first>img').stop().animate({
                right: '10%'
            },900,'easeOutQuad');
        }else if(scTop>pos2-gap && scTop <pos2){
            $('.idea-box:nth-child(2) .txt-box').stop().animate({
                left: '3%'
            },900,'easeOutCubic');
            $('.idea-box:nth-child(2)>img').stop().delay(100).fadeIn(800);
        }else if(scTop>pos3-gap && scTop <pos3) {
            $('.idea-box:last .txt-box').stop().animate({
                left: '3%'
            },900,'easeOutQuad');
            $('.idea-box:last>img').stop().animate({
                right: '7%'
            },900,'easeOutQuad');
        }else if(scTop>pos4-gap && scTop <pos5-gap){
            $('.char-box:nth-child(1)').animate({
                opacity: 1
            });
        }
        else if(scTop>pos5-gap && scTop < pos5){
            $('.char-box:nth-child(2)').animate({
                opacity: 1
            });
        }
        else if(scTop > pos5 && scTop < pos6-gap){
            $('.char-box:nth-child(3)').delay(50).animate({
                opacity: 1
            });
        }
    });

    $(function () {
        $('html, body').stop().delay(100).animate({
            scrollTop : 0
        },10);

        pos1 = $('.brand-logo').offset().top;
        pos2 = $('.idea-box:first').offset().top;
        pos3 = $('.idea-box:nth-child(2)').offset().top;
        pos4 = $('.idea-box:last').offset().top;

        pos5 = $('.char-box:nth-child(1)').offset().top;
        pos6 = $('.char-box:nth-child(2)').offset().top;

        //초기 설정
        $('.idea>h2').hide();
        $('.txt-box').css({
            left: '-100%'
        });
        $('.idea-box:first>img').css({
            right: '-50%'
        });
        $('.idea-box:nth-child(2)>img').hide();
        $('.idea-box:last>img').css({
            right: '-50%'
        });
    }); //jQuery