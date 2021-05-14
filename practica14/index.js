function iniciaMapa(){
  var coordenadas = {  lat: 21.152639, lng:  -101.711598 };

  var propiedades = {
      center: coordenadas,
      zoom: 6,
      mapTypeId: 'terrain'
  };

  map = new google.maps.Map(document.getElementById('map'),propiedades);

  fetch('municipios.json')
  .then( function(response){
      response.json().then( function(municipios){
        var datos = document.getElementById('datos');

        var tabla = `
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Municipio</th>
              <th scope="col">Estado</th>
              <th scope="col">Habitantes</th>
            </tr>
          </thead>
          <tbody>
        `;

        var coordenadasVuelos=[];

        municipios.forEach( municipio => {
          coordenadasVuelos.push(municipio.coordenadas);

          var municipioCirculo = new google.maps.Circle({
            strokeColor: '#1cd100',
            strokeOpacity : 0.8,
            strokeWeight : 2,
            fillColor: '#1cd100',
            fillOpacity : 0.35,
            map: map,
            center: municipio.coordenadas,
            radius: Math.sqrt(municipio.habitantes) * 10
          });

          tabla += `
            <tr>
              <th scope="row">${ municipio.nombre}</th>
              <td>${ municipio.estado}</td>
              <td>${ municipio.habitantes}</td>
            </tr>
          `;
        });

        var vuelosTrazo = new google.maps.Polyline({
          path: coordenadasVuelos,
          geodesic:true,
          strokeColor: '#90ff63',
          strokeOpacity: 0.5,
          strokeColor: 1
        });

        vuelosTrazo.setMap(map);

        tabla +=`  
            </tbody>
            </table>`;

        datos.innerHTML = tabla;
      });
  });
}

