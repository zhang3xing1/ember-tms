import Ember from 'ember';

export default Ember.Object.extend({
    subTerritories:  Ember.A(),
    // floorOrder:
    // mapOrder:
    zipCollection: Ember.computed.filterBy('subTerritories', 'isAvailableZip', true),
    zoneCollection: Ember.computed.filterBy('subTerritories', 'isAvailableZone', true)

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
