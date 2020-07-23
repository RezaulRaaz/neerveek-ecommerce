(function ($) {
    
    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        autoplay:true,
        autoplayHoverPause:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:false,
        dots:true,
        slideSpeed : 500,
   		paginationSpeed : 800,
    	rewindSpeed : 1000,
        singleItem: true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:1
            }
        }
    })

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".menu-search-area").removeClass("sticky");
            $(".footer").removeClass("footer-minus");
        } else {
            $(".menu-search-area").addClass("sticky");
            $(".footer").addClass("footer-minus");
        }
    });
    
})(jQuery);