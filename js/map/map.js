google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);
var mapOption = makeMapOption();
function init() {
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOption);
}