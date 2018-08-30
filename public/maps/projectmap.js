let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  33.8736185, lng: -112.1496093},
    zoom: 17
  });

  let trafficimg = {
    url: "https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_2.png",
    scale: 0
  };

  let marker= new google.maps.Marker({
    position: {lat:  33.8736185, lng: -112.1496093},
    map: map,
    icon: trafficimg
  });
}
