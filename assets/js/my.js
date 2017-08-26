$(function() {
    $('.pub-dialog .pub-x').click(function() {
        $('.open').animate({
            left: '-432px'
        }, 500, function() {
            $(this).css('display', 'none');
            $('.pub-dialog .close').css('display', 'block');
        })
    })
    $('.pub-dialog .iconfont').click(function() {
        $('.open').css('display', 'block');
        $('.close').css('display', 'none');
        $('.open').animate({
            left: 0
        }, 500, function() {

            $('.open').css('display', 'block');

        })
    })
})