 $(function(){
    
    if($(window).width()<768){
        var W_width=$(window).width()-30;
        var H_img=W_width-30;
       $('.s_p_head .img').css({
            height:H_img+'px',
            lineHeight:H_img+'px'
       })
       // comment方格宽度
       var C_width=($(window).width()-66)/6;
       $('.s_p_com .con').height(C_width);
    }

    // 头部图片切换
    $('.s_p_com .tab img').on('click',function(){
        var img_src = $(this).attr('src');
        $('.s_p_head .img img').attr('src',img_src);
    })
    $('.s_p_com .con img').on('click',function(){
        var img_src = $(this).attr('src');
        $('.s_p_head .img img').attr('src',img_src);
    })
    
    $('.pinglun .text').on('input',function(){
        if($(this).val().length>200){
            alert('最多只能输入200字');
            var str = $(this).val().substr(0,200);
            $('.pinglun .text').val(str);
        }
    });
})

       