import { Template } from 'meteor/templating'

Template.locate.events({
    'submit form': function(){ //add event of hitting enter on form
        event.preventDefault();
        // get value from text field
        var manualLocation = $('#manual-location').val();
        console.log(PLACE.geometry.location.lat());
        console.log(PLACE.geometry.location.lng());
        // set global POS
        POS = {
            lat: PLACE.geometry.location.lat(),
            lng: PLACE.geometry.location.lng()
          };
        //center map on location and pop up info window
        infoWindow.setPosition(POS);
        infoWindow.setContent('You');
        infoWindow.open(map);
        map.setCenter(POS);
        //enter cleaner location info in field
 
    }
});