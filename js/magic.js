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


var topMenuEffect = new ScrollMagic.Scene({
    triggerElement: '.link--primary',
    triggerHook: .2
})
.setClassToggle('.header', 'header--scrolled')
.addTo(controller);

function onSmoothScrollLinkClick(event) {
  event.preventDefault();
  var anhor = this.getAttribute('href');
  console.log(anhor);
  TweenLite.to(window, 1, {scrollTo:{y:anhor, offsetY:70}});
}
document.querySelectorAll('.js-smooth-scroll').forEach((element) => {
  element.onclick = onSmoothScrollLinkClick;
});




