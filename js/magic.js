$('html').easeScroll();

var controller = new ScrollMagic.Controller();

document.querySelectorAll('.js-title-dance').forEach((element) => {

  var mySplitText = new SplitText(element, {
    type:"lines, words, chars"
  });

  var words = mySplitText.words;

  var titleDanceTL = new TimelineMax();
    titleDanceTL
      .from(element,1,{y:80,opacity:0,ease:Power3.easeOut},.05,0)
      .staggerFrom(mySplitText.chars,1,{y:"100%",ease:Power3.easeOut},.02,0);
  var dancingTitleScene = new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: .9,
    duration: '0'
  })

  .setTween(titleDanceTL)
  .addTo(controller);
});


var parallaxTL = new TimelineMax();
parallaxTL
  .from('.parallax__content', .3, {autoAlpha:0, ease:Power0.easeNone}, .3)
  .from('.parallax__bcg', 1, {y: '-50%', ease:Power0.easeNone}, 0);


var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.parallax',
    triggerHook: 1,
    duration: '100%'
})

.setTween(parallaxTL)
.addTo(controller);


var topMenuEffect = new ScrollMagic.Scene({
    triggerElement: '.link--primary',
    triggerHook: .2
})
.setClassToggle('.header', 'header--scrolled')
.addTo(controller);