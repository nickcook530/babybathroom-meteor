
// Meteor.startup(function() {
//   autoGPS();
// });

//----------- MAP FUNCTIONS ---------//


//----------- GPS FUNCTIONS ---------//

function autoGPS() {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      POS = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(POS);
      console.log('break');
      infoWindow.setPosition(POS); //NEED TO INITIATE INFOWINDOW TO PREVENT ERROR, MAKE GOOGLE GLOBAL???
      infoWindow.setContent('You');
      infoWindow.open(map);
      map.setCenter(POS);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(POS);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}



export { autoGPS };