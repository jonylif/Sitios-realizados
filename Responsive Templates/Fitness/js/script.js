$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if (scroll > 200){
			$(".menu").css({"background": "#00AEDA"});
			$(".menu").css({"padding-top": "10px"});
		} else {
			$(".menu").css({"background": "transparent"});
			$(".menu").css({"padding-top": "30px"});
		}

	});

});