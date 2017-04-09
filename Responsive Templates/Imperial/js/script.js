var menu = document.getElementById('menu');
var altura = menu.offsetTop;
window.addEventListener('scroll', function(){
	if (window.pageYOffset > altura) {
		menu.classList.add('fixed');
	} else {
		menu.classList.remove('fixed');
	}
})

$(document).ready(function(){


	$('.one').hover(function(){
		$('.overlay1').fadeIn(200);
		$('.overlay1 .portfolio').animate({top: '15px'})
		$('.overlay1 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay1').fadeOut(200);
		$('.overlay1 .portfolio').animate({top: '0px'})
		$('.overlay1 .lorem').animate({top: '0px'})
	});

	$('.two').hover(function(){
		$('.overlay2').fadeIn(200);
		$('.overlay2 .portfolio').animate({top: '15px'})
		$('.overlay2 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay2').fadeOut(200);
		$('.overlay2 .portfolio').animate({top: '0px'})
		$('.overlay2 .lorem').animate({top: '0px'})
	});

	$('.three').hover(function(){
		$('.overlay3').fadeIn(200);
		$('.overlay3 .portfolio').animate({top: '15px'})
		$('.overlay3 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay3').fadeOut(200);
		$('.overlay3 .portfolio').animate({top: '0px'})
		$('.overlay3 .lorem').animate({top: '0px'})
	});

	$('.four').hover(function(){
		$('.overlay4').fadeIn(200);
		$('.overlay4 .portfolio').animate({top: '15px'})
		$('.overlay4 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay4').fadeOut(200);
		$('.overlay4 .portfolio').animate({top: '0px'})
		$('.overlay4 .lorem').animate({top: '0px'})
	});

	$('.five').hover(function(){
		$('.overlay5').fadeIn(200);
		$('.overlay5 .portfolio').animate({top: '15px'})
		$('.overlay5 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay5').fadeOut(200);
		$('.overlay5 .portfolio').animate({top: '0px'})
		$('.overlay5 .lorem').animate({top: '0px'})
	});

	$('.six').hover(function(){
		$('.overlay6').fadeIn(200);
		$('.overlay6 .portfolio').animate({top: '15px'})
		$('.overlay6 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay6').fadeOut(200);
		$('.overlay6 .portfolio').animate({top: '0px'})
		$('.overlay6 .lorem').animate({top: '0px'})
	});

	$('.seven').hover(function(){
		$('.overlay7').fadeIn(200);
		$('.overlay7 .portfolio').animate({top: '15px'})
		$('.overlay7 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay7').fadeOut(200);
		$('.overlay7 .portfolio').animate({top: '0px'})
		$('.overlay7 .lorem').animate({top: '0px'})
	});

	$('.eight').hover(function(){
		$('.overlay8').fadeIn(200);
		$('.overlay8 .portfolio').animate({top: '15px'})
		$('.overlay8 .lorem').animate({top: '-15px'})
	}, function(){
		$('.overlay8').fadeOut(200);
		$('.overlay8 .portfolio').animate({top: '0px'})
		$('.overlay8 .lorem').animate({top: '0px'})
	});


	$('#menu-bar').on('click', function(){
		$('.menu ul').slideToggle();
	})


});