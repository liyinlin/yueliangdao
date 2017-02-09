/**
 * Created by cz on 2017/1/16.
 */
$(function () {
    var flag=$(".morePage>a:nth-child(2)").hasClass("active");
    if(flag){
        $(".morePage>a:nth-child(1)").css("display","none");
    }else{
        $(".morePage>a:nth-child(1)").css("display","inline-block");
    }
})