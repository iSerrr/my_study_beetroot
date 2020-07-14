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
  $('.createRoute').click(function() {
    console.log(directionsService);
    onChangeHandler();
  });  
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: $('.start').val(),
    destination: $('.finish').val(),
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Ввдено не вірні дані, спробуйте ще раз');
    }
  });
  console.table(directionsService);
}  