$(function() {

	$('.dropdown.open').each(function() {
		$(this).find('.caret-right').addClass('rotated');
		$(this).find('.dropdown-menu').removeClass('hidden');
	});

	$('.dropdown-toggle').on('click', function () {
	    $(this).parent().toggleClass('open');
	    $(this).find('.caret-right').toggleClass('rotated');
	    $(this).parent().find('.dropdown-menu').toggleClass('hidden');
	});

	$('.dropdown').find('a').on('click', function () {
	    $(this).addClass('active');
	    $('.dropdown').find('.active').not(this).toggleClass('active');
	});

	$('tr').on('click', function () {
	    $(this).find('.checkbox').toggleClass('checked');
	});

	$('tr').hover(function () {
		if ($(this).find('.checkbox').hasClass('checked') == false) {

			$(this).find('.first-icon').css('opacity', '0');
		    $(this).find('.second-icon').css('opacity', '1');

		}
	}, function () {
		if ($(this).find('.checkbox').hasClass('checked') == false) {

			$(this).find('.first-icon').css('opacity', '1');
		    $(this).find('.second-icon').css('opacity', '0');

		}
	});


	$('.checkbox').on('click', function () {
	    $(this).toggleClass('checked');
	});


});