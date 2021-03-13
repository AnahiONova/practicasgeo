var coordenadas = {
  lat: 0,
  lng: 0
};

var propiedades = {
  center: coordenadas,
  zoom: 2
};

function iniciaMapa(){
  fetch('./paises.json')
  .then(function(response){
    //console.log(response);

    response.json().then(function(datos){
      console.log(datos);
      const map = new google.maps.Map(document.getElementById('map'),propiedades);

      datos.forEach(marcador => {
        fetch('https://corona.lmao.ninja/v3/covid-19/countries')
        .then(function(respuesta){
          //console.log(respuesta);
          respuesta.json().then(function(datospaises){
            //console.log(datospaises); 

            datospaises.forEach(registro => {

              var informacion = "<strong>País: </strong>" + registro.country + ",<strong>Casos: </strong>" + registro.cases;
              var infowindow = new google.maps.InfoWindow({
                content: informacion
              });

              if(registro.country == marcador.CountryName){
                let marker = new google.maps.Marker({
                  map: map,
                  position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                  title: marcador.CountryName + '' + registro.cases
                });
                marker.addListener('click', function(){
                  infowindow.open(map,marker);
                });
              } 
            });
          })
        })
      });
    })
  })
  .catch(function(error){
    console.log('Ocurrió un error.')
  })
};