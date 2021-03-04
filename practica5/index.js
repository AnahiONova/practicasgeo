function iniciaMapa() {
  var propiedades = {
    center: {
      lat : 19.393906868527527, lng : -99.17455488787517
    },
    zoom: 14
  }

  const mapa = document.getElementById("map")
  const map = new google.maps.Map(mapa,propiedades)

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      let posicion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Marcador"
      });

      map.setCenter();

    });
  }
}