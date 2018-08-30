let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  33.5506517, lng: -112.2093833},
    zoom: 17
  });

  let officeimg = {
    url: "https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_29.png",
    scale: 0
  };

  let marker= new google.maps.Marker({
    position: {lat:  33.5506517, lng: -112.2093833},
    map: map,
    icon:officeimg
  });
}
