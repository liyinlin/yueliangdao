$(function(){
	
	$("#header").load("./header.html");
	$("#header2").load("./header2.html");
	$("#footer").load("./footer.html",function(){
		function isPcOrMobile() {
	    
		    if($(window).width()<768){
		        $(".main").addClass("mobile")
		        $(".nav_pc").hide();
		        $(".nav_mobile").show();
		    }else{
		        $(".main").removeClass("mobile")
		        $(".nav_pc").show();
		        $(".nav_mobile").hide();
		    }
		}
		$(window).resize(function(){
		    isPcOrMobile();
		   
		});

	    isPcOrMobile();
	    
	    $(".header_pc .top .search").click(function () {
	        if( $(".header_pc .search_big").css("display")=="none"){
	            $(".header_pc .search_big").css("display","block");
	        }else{
	            $(".header_pc .search_big").css("display","none");
	        }
	    });
	    $(".nav_mobile .nav_bar").click(function () {
	        $(".nav_mobile .nav-inner").show(0,function () {
	            $(".nav_mobile .nav_content").animate({"left":"0px"},200)
	        })
	    });
	    $(".nav_mobile .nav_close,.nav_mobile .nav_bd").click(function () {
	        $(".nav_mobile .nav_content").animate({"left":"-180px"},200,function () {
	            $(".nav_mobile .nav-inner").hide(0);
	        })
	    });
	    $(".infg>div").click(function () {
	        if($(this).find("h2").children(".img_b2").css("display")=="block"){
	            if($(this).find(".content").css("display")=="none"){
	                $(this).find("h2").children(".img_b2").attr("src","app/list/img/footer_jia_change.png");
	                $(this).find(".content").slideDown();
	            }else{
	                $(this).find("h2").children(".img_b2").attr("src","app/list/img/footer_jia.png");
	                $(this).find(".content").slideUp();
	            }
	        }
	    });
	});
	$("#navSlide").load("navSLide.html",function(){
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
	})



	
	$('.tip_pop .x_mask ,.tip_pop .head .close,.tip_pop .btn_yes,.tip_pop .btn_no').click(function(){
		$(".tip_pop").fadeOut()
	})
	
})