$(function() {
    //固定定位二维码的显示与隐藏
    /*$('.tool p:first-child').mouseover(function() {
    $('.erweima').show();
}) mouseout(function() {
    $('.erweima').hide();
})*/
    //头部导航栏菜单选项卡
    $('.lb-left li').mouseenter(function() {
        var index = $(this).index();
        $('.hidebar').css('display', 'block');
        $('.wrap em').css('display', 'block');
        $('.hidebar .barlist').hide();
        $('.hidebar .barlist').eq(index).show();
        var arr = [152, 246, 340, 434, 528, 622, 716, 810, 904, 998, 1092];
        $('.wrap em').animate({
            left: arr[index]
        }, 50)
    })
    $('.lb-right li').mouseenter(function() {
        $('.wrap em').css('display', 'block');
        var index = $(this).index();
        var arr = [659, 753, 847, 941, 1035, 1129];
        $('.wrap em').animate({
            left: arr[index]
        }, 10)
    })
    $('.hwrap').mouseleave(function() {
        $('.hidebar').css('display', 'none');
        $('.wrap em').css('display', 'none');
    })
})