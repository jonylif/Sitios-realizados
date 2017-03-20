$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

	if ( $(window).width() >  967) {	
		if (scroll > 100){
			$(".menu").css({"background": "#fff", "box-shadow": "2px 0px 30px #000000"});
			$("nav a").css({"color": "#ACACAC"});
		} else {
			$(".menu").css({"background": "transparent", "box-shadow": "0px 0px 0px #000000"});
			$("nav a").css({"color": "#fff"});
		}
	}

	});

	$('#menu-bar').on('click', function(){
		$('header nav').slideToggle();
	});

});