function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    mapId: "16ee99ccaa8fd99f",
    zoom: 5,
    center: {lat: 50.132538, lng: 18.352870},
    disableDefaultUI: true,
  });
  directionsDisplay.setMap(map);

  function onChangeHandler() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.querySelector('.createRoute').addEventListener('click', function() {
    onChangeHandler();
  });  
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.querySelector('.start').value,
    destination: document.querySelector('.finish').value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Ввдено не вірні дані, спробуйте ще раз');
    }
  });
}  