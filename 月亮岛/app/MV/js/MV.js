/**
 * Created by cz on 2017/1/17.
 */
$(function () {
   var swiper = new Swiper('.video_m',{
        initialSlide :0,
        autoplay :2500,
        speed:500,
        loop:true,
        autoplayDisableOnInteraction : true,
    });
    $('.video .botton_l').click(function(){
        console.log(1)
        swiper.slidePrev();
    })
    $('.video .botton_r').click(function(){
        swiper.slideNext();
    })
});