/**
 * Created by cz on 2017/1/16.
 */
$(function () {
    $(".left_img .closes").click(function () {
        $(".left_img").hide();
    });
    var swiper = new Swiper('.big_swiper',{
        initialSlide :0,
        autoplay :2500,
        speed:500,
        loop:true,
        effect : 'fade',
        fade: {
            crossFade: false,
        },
        autoplayDisableOnInteraction : true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    });
})