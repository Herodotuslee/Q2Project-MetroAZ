
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  33.5506517, lng: -112.2093833},
    zoom: 15
  });
}
