$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if (scroll > 200){
			$(".menu").css({"background": "black"});
			$("nav").css({"margin-top": "5px"});
			$("h1").css({"font-size": "20px", "margin-top": "17px"});
		} else {
			$(".menu").css({"background": "transparent"});
			$("nav").css({"margin-top": "20px"});
			$("h1").css({"font-size": "27px"});
		}

	});

});