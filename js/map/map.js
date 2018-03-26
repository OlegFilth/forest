google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);
var mapOption = makeMapOption();
function init() {
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOption);
  var marker = new google.maps.Marker({
    position: {lat: 55.841321, lng: 36.475680},
    icon: '../../images/mapmarker.png',
    map: map
  })
}