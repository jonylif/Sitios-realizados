$(document).ready(function(){
  

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if (scroll > 100){
			$(".menu").css({"background": "#000"});
			$(".menu").css({"padding-top": "10px"});
		} else {
			$(".menu").css({"background": "transparent"});
			$(".menu").css({"padding-top": "40px"});
		}

	});


});