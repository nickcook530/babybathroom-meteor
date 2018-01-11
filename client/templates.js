import { Template } from 'meteor/templating'

Template.locate.events({
    'submit form': function(){ //add event of hitting enter on form
        event.preventDefault();
        // get value from text field
        var manualLocation = $('#manual-location').val();
        console.log(manualLocation);
        //put value into google geolocator
        // https://developers.google.com/places/web-service/autocomplete
        //center map on location and pop up info window

        //enter cleaner location info in field
        //$('#manual-location').val("PLACEHOLDER");
    }
});