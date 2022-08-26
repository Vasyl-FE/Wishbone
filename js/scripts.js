$(document).ready(function(){

    $( function() {
        $( "#dialog-1" ).dialog({
            width: 420,
            autoOpen: false,
            show: {
                effect: "slide",
                duration: 800
            },
            hide: {
                effect: "fade",
                duration: 400
            }
        });

        $( "#opener-1" ).on( "click", function() {
            $( "#dialog-1" ).dialog( "open" );
        });
    } );

    $( function() {
        $( "#dialog-2" ).dialog({
            width: 475,
            height: 95,
            autoOpen: false,
            show: {
                effect: "fade",
                delay: 400,
                duration: 800
            },
            hide: {
                effect: "fade",
                duration: 600
            }
        });

        $( "#opener-2" ).on( "click", function() {
            $( "#dialog-2" ).dialog( "open" )
            $( "#dialog-1" ).dialog( "close");
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