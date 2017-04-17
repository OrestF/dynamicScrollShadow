 function setShadows(initialize) {
  var boxes = $('[data-shadow-strong]');
  var screenCenter = $(window).height() / 2;

  boxes.each(function(index){
    var box = this;

    if ( $(box).isInViewport()) {
      var top = Math.round($(box).offset().top - (window.scrollY || window.pageYOffset || document.body.scrollTop));
      var boxCenter = top + $(box).height() / 2;
      var boxShadow = $(box).css('box-shadow');
      var shadowStrong = Math.abs($(box).attr('data-shadow-strong'));

      var shadowArr = boxShadow.split(' ');

      var shift = Math.round(100 / screenCenter * boxCenter);
      shadowArr[5] = Math.round( shadowStrong / 100 * (100 - shift) ) + 'px';

      var newShadow = shadowArr.join(' ');

      $(box).css('box-shadow', newShadow);
    }
  });
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top - 30;
    var elementBottom = elementTop + $(this).outerHeight() + 60;

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$( window ).on('load scroll', function() {
  setShadows();
});
