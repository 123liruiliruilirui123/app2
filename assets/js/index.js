$(function() {
    //头部轮播图
    var index = 0;
    var len = $('.main-wrap ul li').length;
    var timer = 0;

    $('.main-wrap ul li:first').clone(true).appendTo($('.main-wrap ul'));

    function run() {
        timer = setInterval(function() {
            index++;
            $('.main-wrap ul').animate({
                left: -index * 469
            }, 1000, function() {
                if (index == len) {
                    $(this).css('left', 0);
                    index = 0;
                }
            });
        }, 2000);
    }
    run();
    $('.main-wrap').mouseover(function() {
        clearInterval(timer);
    }).mouseout(function() {
        run();
    })
    //行业建站大咖轮播图
    var index = 0;
    var len = $('.lunbo-body>li').length;
    var timer = 0;
    $('.lunbo-body>li:first').clone(true).appendTo($('.lunbo-body'));
    $('.left').click(function() {
        if (index == 0) {
            $('.lunbo-body').css('left', -1134 * len);
            index = len;
        }
        index--;
        $('.lunbo-body').animate({
            left: -index * 1134
        }, 500);
    })
    $('.right').click(function() {
        if (index == len) {
            $('.lunbo-body').css('left', 0);
            index = 0;
        }
        index++;
        $('.lunbo-body').animate({
            left: -index * 1134
        }, 500);
    })
    //直通车名品推荐轮播图
    //输入框的点击事件
    $('.inneed').click(function() {
        $('.inneed-hide').show();
    })
    $('.inneed').blur(function() {
        $('.inneed-hide').hide();
    })
    //文字部分
    $('.section-wenti dl .icon-jia').click(function() {
        var index = $('.section-wenti dl').index();
        $('.section-wenti dl').eq(index).children(2).css('display', 'block');
        $(this).addClass('icon-iconjian');
        $(this).removeClass('icon-jia');
    })
    /*$('.section-wenti dl').on('click', '.icon-jia', function() {
        var index = $(this).index();
        $('.section-wenti dl').eq(index).children(2).css('display', 'block');
        $(this).addClass('icon-iconjian');
        $(this).removeClass('icon-jia');
    })*/
})