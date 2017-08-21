$(function() {
    //输入框的点击事件
    $('.inneed').click(function() {
        $('.inneed-hide').show();
    })
    $('.inneed').blur(function() {
        $('.inneed-hide').hide();
    })
    //文字部分
    $('.one icon-jia').click(function() {
        $('.one dt').eq(1).show();
        $(this).class.add('icon-iconjian');
        $(this).class.remove('icon-jia');
    })
})