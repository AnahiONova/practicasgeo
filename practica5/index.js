var info = "<h1>Casa Anahi</h1>"
    info += "<p><strong>Dirección:</strong>Residencial Cañada Diamante</p>"
    info += "<p><strong>Teléfono:</strong>4778040128</p>"

function iniciaMapa() {
  var propiedades = {
    center: {
      lat : 19.393906868527527, lng : -99.17455488787517
    },
    zoom: 14
  }

  const mapa = document.getElementById("map")
  const map = new google.maps.Map(mapa,propiedades)

  const PosMarker2 = {
    position: posicion,
    msp,
    title: "Marcador2"
  }

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      let posicion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }

      const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Marcador"
      });

      map.setCenter(posicion);

      const infowindow = new google.maps.InfoWindow({
        content : info
      })

      marker.addListener("click", ()=>{
        infowindow.open(map,marker);
      });

    });
  }

  const marker2 = new google.maps.Marker(PosMarker2);

  const infowindow = new google.maps.InfoWindow({
    content:content
  });

  marker2.addListener("click", ()=>{
    infowindow.open(map,marker);
  });

}