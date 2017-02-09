/**
 * Created by zhangzhengzhe on 2017/1/14.
 */
function common() {
    var _width = $(window).width();
    if(_width < 768){
        $("#app").addClass("mobile");
    }else{
        $("#app").removeClass("mobile");
    }
}
common();

$(window).resize(function () {
    common();
});