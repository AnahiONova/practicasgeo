AOS.init();

function iniciaMapa() {
      var coordenadas = {
            lat : 19.393906868527527, lng : -99.17455488787517
      }

      var map = new google.maps.Map(document.getElementById('mapa'),
            {
                  center : coordenadas,
                  zoom : 15 
            }
      ); 
}