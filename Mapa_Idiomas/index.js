var mapa = document.getElementById("map");
var queryString = window.location.search;
var script = document.createElement("script");
const urlParams = new URLSearchParams(queryString);
const idioma = urlParams.get("idioma");

document.getElementById("idioma").value = idioma;

script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24&callback=iniciaMapa&language=" + idioma;
document.head.appendChild(script);
var coord = {
  lat: -31.563910,
  lng: 147.154312
}

var iniciaMapa = () => {
  
  var map = new google.maps.Map(
    mapa, {
      center: coord,
      zoom: 3
    }
  )
}