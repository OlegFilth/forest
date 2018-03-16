$('html').easeScroll();

var parallaxTL = new TimelineMax();
parallaxTL
  .from('.parallax__content', .3, {autoAlpha:0, ease:Power0.easeNone}, .3)
  .from('.parallax__bcg', 1, {y: '-50%', ease:Power0.easeNone}, 0)
var controller = new ScrollMagic.Controller();

var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.parallax',
    triggerHook: 1,
    duration: '100%'
})

.setTween(parallaxTL)
.addTo(controller);