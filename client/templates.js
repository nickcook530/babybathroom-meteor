import { Template } from 'meteor/templating'
import { autoGPS } from '/client/main.js';

Template.main.onCreated(function(){
    Meteor.subscribe('adminCheck');
});

Template.main.helpers({
    'adminStatus': function(){
        return Meteor.user().admin;
    }
});

Template.map.onRendered(function () {
    autoGPS();
});

Template.map.events({
    'click .auto-location': function() {
        autoGPS();
    },
    'click .center-control': function() {
        console.log(map);
        map.setCenter(POS);
    },
});

Template.locate.events({
    'submit form': function(){ //add event of hitting enter on form
        event.preventDefault();
        PLACE = AUTOCOMPLETE.getPlace();
        console.log(PLACE);
        console.log(typeof PLACE);
        if (typeof PLACE !== "undefined") {
            if (typeof PLACE.address_components !== "undefined") {
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
            } else {
                var geocoder = new google.maps.Geocoder();
                var onSuccess = function (google_results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        //fillInAddress(google_results[0]);
                        //console.log(google_results[0]);
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
 
    },

});

Template.admin.onCreated(function(){
    Meteor.subscribe('adminCheck');
});

Template.admin.helpers({
    'adminStatus': function(){
        return Meteor.user().admin;
    }
});