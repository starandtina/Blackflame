$(document).ready(function () {
    $('.full-page').fullpage({
        sectionsColor: ['#fff', '#000', '#f7ba46', '#000', '#000', '#e9e9eb'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', 'lastPage'],
        // navigation: true,
        // navigationPosition: 'right',
        menu: '#menu',
        css3: true,
        scrollingSpeed: 700,
        // slidesNavigation: true,
        // slidesNavPosition: 'bottom'
    });

    // popup images
    $('.image-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true
        }
    });

    // popup videos
    $('.popup-youku').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


    // $('.section--1__slick').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });
});
