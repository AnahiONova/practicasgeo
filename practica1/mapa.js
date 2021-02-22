AOS.init();

function iniciaMapa() {
      var coordenadas = {
            lat : 21.168422320531967, lng : -101.73453418359776
      }

      var map = new google.maps.Map(document.getElementById('mapa'),
            {
                  center : coordenadas,
                  zoom : 15 
            }
      ); 
}