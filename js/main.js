// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: 50.132538, lng: 18.352870};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 5, center: uluru});
//     // The marker, positioned at Uluru
//   }


      function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 50.132538, lng: 18.352870}
        });
        directionsDisplay.setMap(map);

        function onChangeHandler() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        onChangeHandler();
        console.table(directionsService);
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: 'Kiev',
          destination: 'Wroclaw',
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
    