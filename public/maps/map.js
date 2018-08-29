function initMap() {
  let location = {
    lat: 33.5506417,
    lng: -112.2092945
  };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location
  });
}
