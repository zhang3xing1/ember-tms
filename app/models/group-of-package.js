import Ember from 'ember';
import PackageState from '../models/package-state';

export default Ember.Object.extend({
    id: '',
    zip: '',
    infoOfPackages: [],
    stateOfPackages: [],
    isDelivered: Ember.computed(function() {
        return this.get('stateOfPackages').reduce(
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
