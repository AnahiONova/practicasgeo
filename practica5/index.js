function iniciaMapa() {
  var propiedades = {
    center: {
      lat : 19.393906868527527, lng : -99.17455488787517
    },
    zoom: 14
  }

  const mapa = document.getElementById("map")
  const map = new google.maps.Map(mapa,propiedades)

  let posicion = {
    lat : 19.393906868527527, 
    lng : -99.17455488787517
  }

  const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Marcador"
  });
}