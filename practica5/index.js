var info = "<h1>Casa Anahi</h1>"
    info += "<p><strong>Dirección:</strong>Residencial Cañada Diamante</p>"
    info += "<p><strong>Teléfono:</strong>4778040128</p>"

function iniciaMapa() {
  const mapa = document.getElementById("map")
  var propiedades = {
    center: {
      lat : 19.393906868527527, lng : -99.17455488787517
    },
    zoom: 14
  }

  map = new google.maps.Map(mapa,propiedades)

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      let posicion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }

      const PosMarker = {
        position: posicion,
        map,
        title: "Marcador"
      };

      const PosMarker2 = {
        position: {
          lat : 19.393906868527527, lng : -99.17455488787517
        },
        map,
        title: "Marcador 2"
      }

      const marker = new google.maps.Marker(PosMarker);
      const marker2 = new google.maps.Marker(PosMarker2);

      map.setCenter(posicion);

      const infowindow = new google.maps.InfoWindow({
        content: content
      });

      const infowindow2 = new google.maps.InfoWindow({
        content : content
      })

      marker.addListener("click", ()=>{
        infowindow.open(map,marker);
      });
    
      marker2.addListener("click", ()=>{
        infowindow2.open(map,marker);
      });

    });
  }

}