$(document).ready(function () {
    $('.full-page').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#7BAABE'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', 'lastPage'],
        navigation: true,
        navigationPosition: 'right',
        menu: '#menu',
        css3: true,
        scrollingSpeed: 700,
        slidesNavigation: true,
        slidesNavPosition: 'bottom'
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
});
