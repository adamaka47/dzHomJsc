$(document).ready(function() {
	$('a[href="#sheldure"]').on('click', function(event) {
		event.preventDefault();
		$('.overlay').fadeIn(1200);
		$('.modal').slideDown(1000);
	});
	$('.main_btna').on('click', function() {
		$('.overlay').fadeIn(1200);
		$('.modal').slideDown(1000);
	});
	$('.main_btn').on('click', function() {
		$('.overlay').fadeIn(1200);
		$('.modal').slideDown(1000);
	});

	$('.close').click(function() {
		$('.overlay').fadeOut(400);
		$('.modal').slideUp(200);
	});

});