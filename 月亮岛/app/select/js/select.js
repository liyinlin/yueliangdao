 $(function(){
// 自适应
    


    // tab切换
    $('.bink_select .style_menu a').on('click',function(){
         var i=$(this).index();
         $(this).addClass('xian').siblings().removeClass('xian');
         $('.bink_select .style_tab .style_xuan').eq(i).show().siblings().hide();
    })
    $('.bink_select .style_xuan li').on('click',function(){
          $(this).toggleClass("xuan");
    })


    function commons(){
        var _width = $(window).width();
        console.log(_width)
        if(_width<=768){
            $("#app").addClass("mobile");
            $("#app").removeClass("main");
            $('.bink_select .nav').hide();
             $('.bink_select .mobile_nav').show();
        }else{
            $("#app").removeClass("mobile");
            $("#app").addClass("main");
            $('.bink_select .mobile_nav').hide();
            $('.bink_select .nav').show();
        } 
        
       
    }
    commons();  
    $(window).resize(commons)
})

       