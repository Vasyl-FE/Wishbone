$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        dotsText: [ ' ', ' ' ],

        responsive:{
            0:{
                items:1
            },

            700: {items:2},
            1000:{
                items:3
            }
        }
    });
});