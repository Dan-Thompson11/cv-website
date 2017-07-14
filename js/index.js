'use strict';

// Remove focus away from the hero as the user scrolls by making it darker
var $mainHeader = $('main header');
$mainHeader.css({
  background: 'rgba(0, 0, 0, .5)'
});

var scrollFade = function scrollFade() {
  var winheight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var trackLength = winheight - scrollTop;
  var opacity = (1 - trackLength / winheight) / 2;

  $mainHeader.css({
    background: 'rgba(0, 0, 0, ' + (.5 + opacity) + ')'
  });
};

$(window).on('scroll', function () {
  scrollFade();
});