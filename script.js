var map;
        /* Funcion de iniciar el mapa */
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.6131516, lng:-58.3772316}, /* Coordenadas de la ciudad de Buenos Aires */
          zoom: 12
        });
      }

        function initMap() {
        var oficinas = {lat: -34.595563, lng: -58.371020}; /* Coordenadas de las oficinas de Aeroterra */

      var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: oficinas});

      var contentString = /* Elementos que aparecen en el popup haciendo click en el marcador */
                        
      '<p> Nombre: </p>' +
      '<p> Direccion: </p>' +
      '<p> Telefono: </p>' +
      '<p> Categoria: </p>' +
      '<p> Coord: </p>' +
      
      
      '</div>';


      var infowindow = new google.maps.InfoWindow({
      content: contentString
     });

     var marker = new google.maps.Marker({ /* Marcador de las oficinas */
      position: oficinas,
       map: map,
      title: 'Aeroterra'
      });
      marker.addListener('click', function() { 
      infowindow.open(map, marker);
     });
    
    }
