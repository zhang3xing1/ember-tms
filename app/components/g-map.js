import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'name-tag',

    map: new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.397,
            lng: 150.644
        },
        zoom: 3
    }),



    // center: new google.maps.LatLng(-34.397, 150.644),



    actions: {
        hello: function(name) {
            alert(name);
        }
    }
});
