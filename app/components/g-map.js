/* global google */
import Ember from 'ember';
import GroupOfParcel from '../models/group-of-parcel';
import Parcel from '../models/parcel';
import _ from 'lodash/lodash';

GroupOfParcel.reopen({
    // isAllDelivered: function() {
    //     return this.get('parcels').reduce(function(result, parcel) {
    //         console.log(parcel.get('isDelivered'))
    //         return result && parcel.get('isDelivered');
    //     }, true);
    // }.property('parcels.@each.isDelivered'),

    isAllDelivered: Ember.computed('parcels.@each.isDelivered', function() {
        return this.get('parcels').reduce(function(result, parcel) {
            return result && parcel.get('isDelivered')
        }, true)
    }),
    countOfUndelivered: Ember.computed('parcels.@each.isDelivered', function() {
        return this.get('parcels').reduce(function(result, parcel) {
            return result + (parcel.get('isDelivered') ? 0 : 1)
        }, 0)
    })
});

export default Ember.Component.extend({
    tagName: 'g-map',

    didInsertElement: function() {
        // this.$().foundation(); //or Ember.$(document).foundation();
        $('.ui.dropdown').dropdown()
    },

    hiMap: 'tms-map',

    // init: function() {
    //     // do initialization work...

    //     // this function is called whenever the object is created
    //     // you are overriding an 'init' method that already exists
    //     // in the class hierarchy

    //     // You can think of this function happening "in place of" init
    //     // therefore you need to call super to make sure other init methods
    //     // further up in the hierarchy get called



    //     // call super to initialize other init methods 
    //     this._super();
    // },

    groupsOfParcel: Ember.A(), // Array of GroupOfParcel

    numberOfDeliveredGroup: Ember.computed(
        function() {
            return this.get('groupsOfParcel').reduce(
                function(previousResult, numberOfDelivered, index, _self) {
                    var isDelivered = _self[index].get('isDelivered')
                    if (isDelivered) {
                        numberOfDelivered = previousResult + 1
                    } else {
                        numberOfDelivered = previousResult
                    }
                    return numberOfDelivered
                }, 0)

        }),

    markers: Ember.computed.map('groupsOfParcel', function(group, index) {
        // markers: Ember.computed('groupsOfParcel.@each.group', function() {
        // markers: Ember.computed(function() {
        // var map = this.get('map')
        var pinSymbol_ = this.get('pinSymbol_')

        var marker = new google.maps.Marker({
            position: {
                lat: group.latitude,
                lng: group.longitude
            },
            group_id: group.id
                // map: map
        })

        if (group.get('isDelivered')) {
            marker.set('icon', pinSymbol_(group.count, 'white'))
        } else {
            marker.set('icon', pinSymbol_(group.count, 'red'))
        }

        var that = this
        marker.addListener("click", function() {
                console.log("you clicked group title is " + group.title)
                that.send('updateCards', group)
                that.send('_highlightMarker', group)
            })
            // console.log(marker)
        return marker

    }),

    cardParcel: Ember.A(),

    _clickMarkerToShowCard: function(group_id) {
        return _.find(this.get('groupsOfParcel'), function(group) {
            return group.id = group_id
        })
    },

    _objToStrMap: function(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    },

    pinSymbol: function() {
        return {
            path: "M27.648 -41.399q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516 2.7 6.516 6.516 2.7 6.516 -2.7 2.7 -6.516zm9.216 0q0 3.924 -1.188 6.444l-13.104 27.864q-0.576 1.188 -1.71 1.872t-2.43 0.684 -2.43 -0.684 -1.674 -1.872l-13.14 -27.864q-1.188 -2.52 -1.188 -6.444 0 -7.632 5.4 -13.032t13.032 -5.4 13.032 5.4 5.4 13.032z",
            scale: 0.6,
            strokeWeight: 0.2,
            strokeColor: 'black',
            strokeOpacity: 1,
            fillColor: '#FF33AA',
            fillOpacity: 0.85
        };
    },

    pinSymbol_: function(i, color) {
        function pad(num, size) {
            var s = "000000000" + num;
            return s.substr(s.length - size);
        }

        return "http://google-maps-icons.googlecode.com/files/" + color + pad(i, 2) + ".png";

    },

    _fromGroup: function(group_id) {
        return _.find(this.get('groupsOfParcel'), function(group) {
            return group.id == group_id
        })
    },

    setup: Ember.on('init', function() {
        // do setup work ...
        _.forEach(this.get('parcelListInfo'), function(rawParcel, key) {
            var singleGroupInfo = GroupOfParcel.create({
                id: key,
                zip: rawParcel[0].zip,
                count: rawParcel.length,
                title: _.uniq(rawParcel.map(function(item) {
                    return item.name
                })).join(' '),
                latitude: parseFloat(rawParcel[0].latitude),
                longitude: parseFloat(rawParcel[0].longitude),
                parcels: Ember.A(rawParcel.map(function(item) {
                    return Parcel.create({
                        name: item.name,
                        addr1: item.addr1,
                        addr2: item.addr2,
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude),
                        invoicenumber: item.invoicenumber,
                        ordernumber: item.ordernumber,
                        group_id: key,
                        isDelivered: false
                    })
                })),
            })
            this.get('groupsOfParcel').pushObject(singleGroupInfo)
        }, this)

        this.get('map').setCenter({
            lat: this.get('groupsOfParcel')[1].latitude,
            lng: this.get('groupsOfParcel')[1].longitude
        })

        google.maps.event.addListener(this.get('map'), 'click', function(event) {
            console.log(`${event.latLng.lat()}, ${event.latLng.lng()}`);
        })

        this.send('_colorMarkers', this.get('map'))
            // function happens whenever init is called
            // but you don't have to call super because
            // you are not overriding init
            // think of this function happening "along side" init

        // because of this no need to call super
    }),

    actions: {
        _colorMarkers: function(map) {
            _.each(this.get('markers'), function(marker) {
                marker.setMap(map)
            }, this)
        },

        hello: function(hi) {
            console.log(this.get('numberOfDeliveredGroup'))
        },

        updateCards: function(group) {
            this.set('cardParcel', group.get('parcels'))
        },

        groupTapped: function(group, index) {
            this.get('map').setCenter({
                lat: group.latitude,
                lng: group.longitude
            })
            this.set('cardParcel', group.get('parcels'))
            this.send('_highlightMarker', group)
        },
        cardConfirmed: function(parcel) {
            parcel.set('isDelivered', true)
            this.send('_highlightMarker', this._fromGroup(parcel.group_id))
            // this.send('_colorMarker', this._fromGroup(parcel.group_id))
        },
        cardUndo: function(parcel) {
            parcel.set('isDelivered', false)
            this.send('_highlightMarker', this._fromGroup(parcel.group_id))
            // this.send('_colorMarker', this._fromGroup(parcel.group_id))
        },

        _colorMarker: function(group) {
            var pinSymbol_ = this.get('pinSymbol_')
            var marker = _.find(this.get('markers'), function(marker) {
                return marker.group_id == group.id
            }, this)
            if (group.get('isAllDelivered')) {
                console.log(marker)
                marker.set('icon', pinSymbol_(group.get('countOfUndelivered'), 'white'))
            } else {
                marker.set('icon', pinSymbol_(group.get('countOfUndelivered'), 'red'))
            }
        },

        _highlightMarker: function(group) {
            var pinSymbol_ = this.get('pinSymbol_')
            var marker = _.find(this.get('markers'), function(marker) {
                return marker.group_id == group.id
            }, this)
            marker.set('icon', pinSymbol_(group.get('countOfUndelivered'), 'green'))
            setTimeout(function(that) {
                marker.setAnimation(null);
                that.send('_colorMarker', that._fromGroup(group.id))
            }, 1000, this);

        },
    }
});
