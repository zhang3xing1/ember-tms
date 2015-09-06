import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            map: new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 34.397,
                    lng: 120.644
                },
                zoom: 5
            }),

            hi3: 'foobar'
        };
    }
});
