import Ember from 'ember';

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

export default Ember.Object.extend({
    uuid: generateUUID(),
    name: '',
    isOriginal: false,
    isVisible: true,
    isAvailableZip: Ember.computed('isOriginal', 'isVisible', function() {
        return (this.get('isOriginal') && this.get('isVisible'))
    }),
    isAvailableZone: Ember.computed('isOriginal', 'isVisible', function() {
        return (!this.get('isOriginal') && this.get('isVisible'))
    }),
    // polygon:  google.maps.Polygon class
    path: Ember.computed('polygon', function() {
        return this.get('polygon').getPath().getArray().map(function(vertex) {
            return {
                latitude: vertex.lat(),
                longitude: vertex.lng()
            }
        })
    })
})


