//beverage.js

    //1. nav slideUp/Down
    $(function () {
        $('ul.depth01>li').mouseenter(function () {
            $('.lnb').stop().slideDown(300);
        });
        $('nav').mouseleave(function () {
            $('.lnb').stop().slideUp(300);
        });

    });

    //2. #recommend flow
    var autoCall;
    $(function(){
        autoCall = setInterval(flowImg, 25);

        $('.recom-box').hover(function(){
            clearInterval(autoCall);
        },function(){
            autoCall = setInterval(flowImg,25);
        });
    });

    
    /*///////////////////////////////////////////
         flowImg 함수 정의
    //////////////////////////////////////////*/
    var pxno = 0;
    function flowImg(){
        pxno++;

        var flength = $('.recom-box').first().width();
        // console.log('이동할 픽셀 수 :',pxno)
        // console.log('박스 한칸의 너비: '+flength)

        if(pxno >flength){
            $('.recom-box:first').appendTo($('.recom-wrap'));
            $('.recom-box').css({
                left: 0
            });
            pxno = 0;
        }else {
            $('.recom-box').css({
                left: -pxno + 'px'
            });
        } 
    }


    //3. dragslider
    $(function(){
         //dragslider
         $('.recom-wrap').draggable({
            axis: 'x'
        });
        $('.recom-wrap').css({
            transition: 'all 0.8s ease-in-out'
        });

        $('html, body').on('mouseup mousemove',function(){
            var rpos = $('.recom-wrap').offset().left;
            var rpoint = $(window).width()/2;
            var lpoint = $('.recom-wrap').width() - rpoint;

            if(rpos>rpoint){
                $('.recom-wrap').css({
                    left: rpoint + 'px'
                });
            }else if(rpos <-lpoint){
                $('.recom-wrap').css({
                    left: -lpoint + 'px'
                });
            }
        })
    });

    
    //4.loadmore 
$(function(){

    //초기설정
    $('div.menu-box').slice(0,20).show();

    $('.ldmoreBtn').click(function(e){
        e.preventDefault();

        $('.menu-box:hidden').slice(0,8).slideDown();

        if($('.menu-box:hidden').length === 0){
            $('.ldmoreBtn').fadeOut();
        }

        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
