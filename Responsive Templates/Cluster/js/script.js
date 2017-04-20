$(document).ready(function(){

	$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
  pageDots: false,
  percentPosition: false
});


	$('.fa-bars').on('click', function(){
		$('nav').slideToggle();
	})

});