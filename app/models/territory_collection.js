import Ember from 'ember';

export default Ember.Object.extend({
    territories:  Ember.A(),
    zipCollection: Ember.computed.filterBy('territories', 'isAvailableZip', true),
    zoneCollection: Ember.computed.filterBy('territories', 'isAvailableZone', true)

    // id: '',
    // zip: '',
    // index: -1,
    // isAllDelivered: Ember.computed('parcels.@each.isDelivered', function() {
    //     return this.get('parcels').reduce(function(result, parcel) {
    //         return result && parcel.get('isDelivered')
    //     }, true)
    // }),
    // countOfUndelivered: Ember.computed('parcels.@each.isDelivered', function() {
    //     return this.get('parcels').reduce(function(result, parcel) {
    //         return result + (parcel.get('isDelivered') ? 0 : 1)
    //     }, 0)
    // })
});
