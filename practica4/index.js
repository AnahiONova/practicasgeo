function obtieneUbicacion(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    mapa.innerHTML = "El navegador no dispone de la capacidad de geolocalización"
  }
}