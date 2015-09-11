import Ember from 'ember';

export default Ember.Object.extend({
    id: '',
    zip: '',
    infoOfPackages: [],
    stateOfPackages: [],
    isDelivered: Ember.computed(function() {
        return this.get('packages').reduce(
            function(previousResult, state, index, _self) {
                var isDelivered = _self[index].get('isDelivered')
                if (isDelivered) {
                    state = previousResult && true
                }else{
                    state = previousResult && false
                }
                return state
            }, true)
    })
});
