(function ($) {
    
    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
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
                items:3
            },
            992:{
                items:1
            }
        }
    })
    

    

    
    })(jQuery);