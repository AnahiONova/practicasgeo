function obtieneUbicacion(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    mapa.innerHTML = "El navegador no dispone de la capacidad de geolocalización"
  }

  function showPosition(posicion){
    var coordenadas = posicion.coords.latitude + "," + posicion.coords.longitude;
    console.log(coordenadas);

    var imagenmapa = document.getElementById("imagenmapa");
    imagenmapa.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + coordenadas + "&zoom=20&size=800x800&key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24";
  }
}