var info = "<h1>Casa Anahi</h1>"
    info += "<p><strong>Dirección:</strong>Residencial Cañada Diamante</p>"
    info += "<p><strong>Teléfono:</strong>4778040128</p>"

var info2 = "<h1>Parque Metropolitano</h1>"
    info2 += "<p><strong>Teléfono:</strong>4778040128</p>"

var info3 = "<h1>Universidad De La Salle Bajio</h1>"
    info3 += "<p><strong>Teléfono:</strong>4778040128</p>"

var info4 = "<h1>Costco</h1>"
    info4 += "<p><strong>Teléfono:</strong>4778040128</p>"

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
          lat : 21.175001790934786, lng : -101.68666512792474
        },
        map,
        title: "Marcador 2"
      }

      const PosMarker3 = {
        position: {
          lat : 21.152921968644318, lng : -101.71096947317358
        },
        map,
        title: "Marcador 3"
      }

      const PosMarker4 = {
        position: {
          lat : 21.157669655862193, lng : -101.70563896954896
        },
        map,
        title: "Marcador 4"
      }

      const marker = new google.maps.Marker(PosMarker);
      const marker2 = new google.maps.Marker(PosMarker2);
      const marker3 = new google.maps.Marker(PosMarker3);
      const marker4 = new google.maps.Marker(PosMarker4);

      map.setCenter(posicion);

      const infowindow = new google.maps.InfoWindow({
        content: info
      });

      const infowindow2 = new google.maps.InfoWindow({
        content : info2
      })

      const infowindow3 = new google.maps.InfoWindow({
        content : info3
      })

      const infowindow4 = new google.maps.InfoWindow({
        content : info4
      })

      marker.addListener("click", ()=>{
        infowindow.open(map,marker);
      });
    
      marker2.addListener("click", ()=>{
        infowindow2.open(map,marker2);
      });

      marker3.addListener("click", ()=>{
        infowindow3.open(map,marker3);
      });

      marker4.addListener("click", ()=>{
        infowindow4.open(map,marker4);
      });

    });
  }

}