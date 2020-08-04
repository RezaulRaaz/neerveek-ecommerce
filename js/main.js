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


    // Humburger menu
        const menuIcon= document.querySelector('#humberger-Menu');
        const navbar=document.querySelector('.lara-navbar');

        menuIcon.addEventListener('click',()=>{
            navbar.classList.toggle('change');
        });

    // Shoping cart
    const ShopingIcon= document.querySelector('.shoping-bag');
    const shopingCart=document.querySelector('.shoping_cart');
    ShopingIcon.addEventListener('click',()=>{
        shopingCart.classList.toggle('shop-change');
    });

    // Shoping cart
    const ShopIcon= document.querySelector('.bottom-shop-click');
    const shopCart=document.querySelector('.shoping_cart');
    ShopIcon.addEventListener('click',()=>{
        shopCart.classList.toggle('shop-change');
    });

    const closeIcon= document.querySelector('.close-cart');
    const closeCart=document.querySelector('.shoping_cart');
    closeIcon.addEventListener('click',()=>{
        closeCart.classList.toggle('shop-change');
    });

})(jQuery);