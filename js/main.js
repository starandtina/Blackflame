$(document).ready(function () {
    var slideTimeout;
    $('.full-page').fullpage({
        sectionsColor: ['#fff', '#000', '#f8b330', '#fff', '#000', '#e9e9eb', '#fff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
        // navigation: true,
        // navigationPosition: 'right',
        menu: '#menu',
        css3: true,
        paddingTop: '48px',
        scrollOverflow: true,
        scrollingSpeed: 700,
        slidesNavigation: true,
        // slidesNavPosition: 'bottom',
        afterRender: function () {
            //on page load, start the slideshow
            slideTimeout = setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 5000);
        },
        onLeave: function (index, nextIndex, direction) {
            if (index === '1') {
                clearInterval(slideTimeout);
            } else if (nextIndex === '1')
                slideTimeout = setInterval(function () {
                    $.fn.fullpage.moveSlideRight();
                }, 5000);
        }
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


    $('.section--1__slick').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true
    });
});
