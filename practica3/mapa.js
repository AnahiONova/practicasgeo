var mapa = document.getElementById("mapa");

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    mapa.innerHTML = "El navegador no dispone de la capacidad de geolocalización"
  }
}

function showPosition(posicion){
  console.log(posicion);
  mapa.innerHTML = "Latitud:" + posicion.coords.latitude + "<br>" + "Longitud" + posicion.coords.longitude;
}