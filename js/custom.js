(function($) {
	'use strict';
	$(document).ready(function(){

		//Sponsor widget
		$(".js-widget-close").on("click", function (event) {
			event.preventDefault();
			$(".header__sponsor-widget--fixed").hide();
		});
	
		//Company Slider JS
		$('.company-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			smartSpeed:2000,
			autoplay:true,
			autolayTimeout:1500,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		})

    });
})(jQuery);


