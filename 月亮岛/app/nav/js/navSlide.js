/**
 * Created by zhangzhengzhe on 2017/1/11.
 */


$(function () {
    var _width = $(window).width();
    if(_width < 768){
        $("#app").addClass("mobile");
        $(".n-m-m-o").show().siblings().hide();
        $("#nav-list-span span:first-child").removeClass("n-l-s-p");
        $(".nav-menu").fadeIn().css({"right":"10px"});
    }else{
        $("#app").removeClass("mobile");
        $(".n-m-p-o").show().siblings().hide();
        $("#nav-list-span span:first-child").addClass("n-l-s-p");
        $(".nav-menu").fadeIn().css({"right":"10px"});
        if($(".nav-menu").is(":visible")){
            $(".nav-menu").show().css({"right":"10px"});
        }
    }

    $(window).resize(function() {
        var _width = $(window).width();
        if (_width < 768) {
            $("#app").addClass("mobile");
            $(".n-m-m-o").show().siblings().hide();
            $("#nav-list-span span:first-child").removeClass("n-l-s-p");
        } else {
            $("#app").removeClass("mobile");
            $(".n-m-p-o").show().siblings().hide();
            $("#nav-list-span span:first-child").addClass("n-l-s-p");
        }
    });
    $(".nav-menu").click(function () {
        $(this).find("span").toggleClass("n-m-p-c");
        if($(this).find("span").attr("class") != "n-m-p-o"){
            if($("#app").attr("class") != "main"){
                $(this).fadeOut(500).closest(".nav-slide").finish().animate({"right":"0px"});
            }else {
                $(this).finish().animate({"right": "230px"}).closest(".nav-slide").finish().animate({"right": "0px"});
            }
        }else{
            $(this).finish().animate({"right":"10px"}).closest(".nav-slide").finish().animate({"right":"-230px"});
        }
        $("#nav-list-span span:first-child").click(function () {
            $(".nav-menu").fadeIn(500);
            $(".nav-slide").animate({"right":"-230px"});
        })
    })
});
