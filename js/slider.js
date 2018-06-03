$('.testimonial-slider').slick({
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-right"></i></button>',
	autoplay: true,
	autoplaySpeed: 6000,
	infinite: true,
	dots: true,
	appendDots: $('.slider-anchors'),
	responsive: [{
		breakpoint: 700,
		settings: {
			arrows: false
		}
	}]
});