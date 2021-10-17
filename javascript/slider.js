$(document).ready(function() {
	$(".slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		speed:1000,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
	    {
	      breakpoint: 915,
	      settings: {
	        infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			speed:1000,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			speed:1000,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: true,
	        autoplay: true,
			autoplaySpeed: 3000
	      }
	    }
	  ]
	});
})