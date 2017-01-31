$(document).ready(function() {

	$(".home-slider__wrapper").slick({
		// autoplay: true,
		dots: true,
		arrows: false,
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('text');
			return '<p>'+thumb+'</p>';
		}
	});




});

