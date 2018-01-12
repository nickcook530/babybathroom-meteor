import { Template } from 'meteor/templating'

Template.locate.events({
    'submit form': function(){ //add event of hitting enter on form
        event.preventDefault();
        PLACE = autocomplete.getPlace();
        console.log(PLACE);
        console.log(typeof PLACE);
        if (typeof PLACE.address_components !== "undefined") {
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
            //PLACE = undefined;
            console.log(typeof PLACE);
        } else {
            var geocoder = new google.maps.Geocoder();
            var onSuccess = function (google_results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    //fillInAddress(google_results[0]);
                    console.log(google_results[0]);
                    PLACE = google_results[0];
                    POS = {
                        lat: PLACE.geometry.location.lat(),
                        lng: PLACE.geometry.location.lng()
                    };
                    //center map on location and pop up info window
                    infoWindow.setPosition(POS);
                    infoWindow.setContent('You');
                    infoWindow.open(map);
                    map.setCenter(POS);
                }
            //PLACE = undefined;
            }
            console.log("geocoding " + $('#manual-location').val());
            geocoder.geocode({'address': $('#manual-location').val()}, onSuccess);
        }
 
    }
});