/**
 * Created by zhangzhengzhe on 2017/1/13.
 */
$(function () {
    function common() {
        var _width = $(window).width();
        if(_width < 768){
            $("#app").addClass("mobile");
            $(".login").css({"width":"100%"});
            $(".share-lg li").addClass("xs-share");
            $("#login-share li:last-child").css({"padding-right":"0px"});
            $("#login-share li:last-child .share-lg").css({"padding-right":"0px"});
        }else{
            $("#app").removeClass("mobile");
            $(".login").css({"width":"520px"});
            $(".share-lg li").removeClass("xs-share");
        }
    }
    common();

    $(window).resize(function () {
        common();
    });

    $(".share-active").hover(function () {
        // alert();
        $(this).find(".share-active-icon").fadeIn();
    },function () {
        $(this).find(".share-active-icon").fadeOut();
    });
})
