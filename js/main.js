$(document).ready(function () {
  $('.full-page').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', 'lastPage'],
    navigation: true,
    navigationPosition: 'right',
    menu: '#menu',
    css3: true,
    scrollingSpeed: 1000
  });
});
