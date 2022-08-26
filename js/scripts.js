$(document).ready(function(){

    $( function() {
        $( "#dialog" ).dialog({
            width: 420,
            autoOpen: false,
            show: {
                effect: "slide",
                duration: 800
            },
            hide: {
                effect: "fade",
                duration: 600
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        dotsText: [ ' ', ' ' ],

        responsive:{
            0:{
                items:1
            },

            600: {items:1},
            1000:{
                items:3
            }
        }
    });
});