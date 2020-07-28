jQuery(document).ready(function($){

	var window_width = $(window).width();

	// Enable toggle for Main menu on tablets and mobile
	$('.btn-navbar').toggleMenu({'viewport':979});

	// After Load.
	$(window).load(function(){
		// Add a loading screen so the background image and content is present
        $('.page-loader').fadeOut('slow');
		// Initiate flexslider
		$('#slider .flexslider').flexslider({
			useCSS: false, 		// Avoid CSS3 glitches
			video: true, 		// Avoid CSS3 glitches
			prevText: '<i class="fa fa-chevron-left"></i>',
			nextText: '<i class="fa fa-chevron-right"></i>',
			animation: "fade",
			slideshow: true,
			controlsContainer: ".slides-wrapper-home",
			start: function(slider) {
				$('#slider .slide-thumbnail-link').click(function() {
					$('#slider .flex-pause').hide();
					$('#slider .flex-play').show();
					slider.pause();
				});
			}
		}).parent().find('.tb-loader').fadeOut();
	});

	/* Match Height */
	if ( window_width >= 768 ) {
		$(function() {
			if ( window_width >= 992 ) {
				$('#main').each(function() {
					$('.column-border .column').matchHeight();
				});
			}
		});
	}

});
