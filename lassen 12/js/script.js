$(document).ready(function() {

	$('[href="#sheldure"]').on('click', function(){

		$('.overlay').fadeToggle('slow');
		$('.modal').animate(
		{
			opacity: 'toggle',
			height: 'toggle'

		}, 3000)
	
	});

	$('.main_btna').on('click', function(){

		$('.overlay').fadeToggle('slow');
		$('.modal').animate(
		{
			opacity: 'toggle',
			height: 'toggle'

		}, 3000)
	
	});

	$('.main_btn').on('click', function(){

		$('.overlay').fadeToggle('slow');
		$('.modal').animate(
		{
			opacity: 'toggle',
			height: 'toggle'

		}, 3000)
	
	});



	$('.close').on('click', function(){

		$('.overlay').fadeToggle('slow');
		$('.modal').animate(
		{
			opacity: 'toggle',
			height: 'toggle'

		}, 3000)
	});
});
