import Ember from 'ember';
import PackageState from '../models/package-state';

export default Ember.Object.extend({
    id: '',
    zip: '',
    infoOfPackages: [],
    stateOfPackages: [],
    isDelivered: Ember.computed(function() {
        // console.log(this.get('stateOfPackages').length)
        var states =  this.get('stateOfPackages').map(
            function(stateOfPackage){
                return stateOfPackage.get('isDelivered')
            })

        console.log(states.reduce(function(a,b){return a && b},true))

        return states.reduce(function(a,b){return a && b},true)

        // var result = this.get('stateOfPackages').reduce(function(_, state, index, _self) {
        //     console.log(`state: ${state}`)
        //     var stateOfPackage = _self[index]
        //     if (stateOfPackage.get('isDelivered')) {
        //         return -1 + state
        //     } else {
        //         return 0 + state
        //     }
        // })
        // console.log(result)
        // return result
    })
});
