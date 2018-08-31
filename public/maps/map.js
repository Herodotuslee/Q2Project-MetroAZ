let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  33.5504517, lng: -112.2091833},
    zoom: 17.5,
    mapTypeId: 'satellite'
  });
  map.setTilt(45);

  let officeimg = {
    url: "images/metroicon.jpg",
    scale: 0
  };

  let marker= new google.maps.Marker({
    position: {lat:  33.5506517, lng: -112.2093833},
    map: map,
    icon:officeimg
  });
}

initMap();
