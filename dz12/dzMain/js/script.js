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

	$('a[href="#sheldure"]').animate({
		width: '250px',
		opacity: 0.2,
		background: '#fff'
	}, 15000);

	$('a[href="#sheldure"]').animate({
		opacity: 1,
		background: '#fff'
	}, 1500)


});