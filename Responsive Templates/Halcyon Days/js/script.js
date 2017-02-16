$(document).ready(function(){
	
	$('h1').fadeIn(5000);
	
	$('nav').animate({
		top: '0'
	}, 1000);

$('#boton1').on('click', function(){
	$(".one").fadeIn(600, function(){
				$(".one").fadeOut(600, function(){
					$(".two").fadeIn(600, function(){
								
 	}) }) })  
});

$('#boton2').on('click', function(){
	$(".two").fadeOut(600, function(){
				$(".one").fadeIn(600, function(){

								
 	}) })  
});


$('.data1').on('mouseenter', function(){
	$('.data1').css("border-bottom", "3px solid #3dc9b3");
	$('.data1').animate({
		top: "-=30"
	}, "slow", function(){
		$('.data1').animate({
			top: "0",
			borderBottomWidth: "0"
		}, "slow");
	});
});
$('.data1').css("border-bottom", "0");

$('.data2').on('mouseenter', function(){
	$('.data2').css("border-bottom", "3px solid #3dc9b3");
	$('.data2').animate({
		top: "-=30"
	}, "slow", function(){
		$('.data2').animate({
			top: "0",
			borderBottomWidth: "0"
		}, "slow");
	});
});
$('.data2').css("border-bottom", "0");

$('.data3').on('mouseenter', function(){
	$('.data3').css("border-bottom", "3px solid #3dc9b3");
	$('.data3').animate({
		top: "-=30"
	}, "slow", function(){
		$('.data3').animate({
			top: "0",
			borderBottomWidth: "0"
		}, "slow");
	});
});
$('.data3').css("border-bottom", "0");

});