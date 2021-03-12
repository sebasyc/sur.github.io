$(window).on("load", function(e) {
	$(".cont-loader").fadeOut('slow')
})

$(document).ready( function () {

    $('.btn-menu-xs').click( function () {
        $(this).toggleClass('open')
        $('body').toggleClass('fixed')
        $('.header-nav').toggleClass('open')
    })

    $('.slide-home').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false
    })

    $('.slide-marcas').slick({
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    })

    $('.buy-slide').slick({
		infinite: false,
		centerMode: true,
		slidesToShow: 3,
		dots: true,
		focusOnSelect: true,
		speed: 500,
		centerPadding: '0',
		responsive: [
      	{
      		breakpoint: 769,
	        settings: {
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
	        }
		},
			{
				breakpoint: 481,
	         	settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
	         }
			}
    	]
	})

})