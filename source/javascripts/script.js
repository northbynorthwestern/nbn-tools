$(document).ready(function() {
	$("#nav-tools").on('click', function() {
	    $('html, body').animate({
	        scrollTop: $("#tools").offset().top - 90
	    }, 800);
	});

	$("#nav-practices").on('click', function() {
	    $('html, body').animate({
	        scrollTop: $("#practices").offset().top - 90
	    }, 800);
	});

	$("#nav-contact").on('click', function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top - 90
	    }, 800);
	});

	$('.example span').on('click', function() {
		console.log($(this).parent().next());
		$(this).parent().next().toggle();
	});
})