var coordenadas = {
  lat: -31.563910, lng: 147.154312
}

var  localidades  =  [
  { Lat : - 31.563910 ,  lng : 147.154312 } ,
  { Lat : - 33.718234 ,  lng : 150.363181 } ,
  { Lat : - 33.727111 ,  lng : 150.371124 } ,
  { Lat : - 33.848588 ,  lng : 151.209834 } ,
  { Lat : - 33.851702 ,  lng : 151.216968 } ,
  { Lat : - 34.671264 ,  lng : 150.863657 } ,
  { Lat : - 35.304724 ,  lng : 148.662905 } ,
  { Lat : - 36.817685 ,  lng : 175.699196 } ,
  { Lat : - 36.828611 ,  lng : 175.790222 } ,
  { Lat : - 37.750000 ,  lng : 145.116667 } ,
  { Lat : - 37.759859 ,  lng : 145.128708 } ,
  { Lat : - 37.765015 ,  lng : 145.133858 } ,
  { Lat : - 37.770104 ,  lng : 145.143299 } ,
  { Lat : - 37.773700 ,  lng : 145.145187 } ,
  { Lat : - 37.774785 ,  lng : 145.137978 } ,
  { Lat : - 37.819616 ,  lng : 144.968119 } ,
  { Lat : - 38.330766 ,  lng : 144.695692 } ,
  { Lat : - 39.927193 ,  lng : 175.053218 } ,
  { Lat : - 41.330162 ,  lng : 174.865694 } ,
  { Lat : - 42.734358 ,  lng : 147.439506 } ,
  { Lat : - 42.734358 ,  lng : 147.501315 } ,
  { Lat : - 42.735258 ,  lng : 147.438000 } ,
  { Lat : - 43.999792 ,  lng : 170.463352 }
] ;

function iniciaMapa() {
  var map = new google.maps.Map(
    document.getElementById('mapa'),{
      center: coordenadas,
      zoom: 3,
      mapTypeId: 'terrain'
    }
  );

  var label = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var marcadores = [];
  var cuenta = 1;

  localidades.forEach(localidad => {
    console.log(localidad);
    let marcador = new google.maps.Marker({
      map: map,
      position: localidad,
      label: label[cuenta % labels.length]
    })

    marcadores.push(marcador);

    cuenta ++;
  });

  var markerCluster = new markerClusterer(map, marcadores, {
    imagePath : 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    gridSize : 60,
    zoomOnClick : true,
    maxZoom : 10
  });

  document.getElementById('btnRoadMap').addEventListener('click', function(){
    map.setMapTypeId('roadmap');
  });

  document.getElementById('btnSatelite').addEventListener('click', function(){
    map.setMapTypeId('roadmap');
  });

  document.getElementById('btnHybrid').addEventListener('click', function(){
    map.setMapTypeId('roadmap');
  });

  document.getElementById('btnTerreno').addEventListener('click', function(){
    map.setMapTypeId('roadmap');
  });
}