/**
 * Created by cz on 2017/1/11.
 */
function isPcOrMobile() {
    /* $(".list .swiper-container,.list .swiper-img").css("width",$(".list .swiper-container img").width()+"px")*/
}
$(function () {
    isPcOrMobile();
    var mySwiper = new Swiper (".img_swiper", {
        loop: true,
        pagination : '.swiper-pagination',
    });
    
});
$(window).resize(function(){
    isPcOrMobile();
});