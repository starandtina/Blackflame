$(document).ready(function () {
  $('.section--1__slick').slick({
    dots: true,
    lazyLoad: 'ondemand',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true
  });

  var slideTimeout;
  $('.full-page').fullpage({
    sectionsColor: ['#fff', '#000', '#f8b330', '#fff', '#000', '#e9e9eb', '#fff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
    menu: '#menu',
    css3: true,
    paddingTop: '48px',
    verticalCentered: false,
    scrollOverflow: true,
    scrollingSpeed: 700,
    slidesNavigation: true
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
