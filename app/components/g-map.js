/* global google */
import Ember from 'ember';
import GroupOfPackage from '../models/group-of-package';
import PackageInfo from '../models/package-info';
import _ from 'lodash/lodash';

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


    //     console.log('init')
    //     console.log(this.locations.length)

    //     // call super to initialize other init methods 
    //     this._super();
    // },

    basicInfo_: Ember.computed(function() {
        return this._objToStrMap(this.get('packageListInfo'))
    }),

    groupsOfPackage: [], // Array of GroupOfPackage

    numberOfDeliveredGroup: Ember.computed(
        function() {
            return this.get('groupsOfPackage').reduce(
                function(previousResult, numberOfDelivered, index, _self) {
                    var isDelivered = _self[index].get('isDelivered')
                    if (isDelivered) {
                        numberOfDelivered = previousResult + 1
                    } else {
                        numberOfDelivered = previousResult
                    }
                    console.log(numberOfDelivered)
                    return numberOfDelivered
                }, 0)

        }),

    markers: Ember.computed(function() {
        var map = this.get('map')
        var pinSymbol_ = this.get('pinSymbol_')
        return this.get('groupsOfPackage').map(function(group) {
            var marker = new google.maps.Marker({
                position: {
                    lat: group.latitude,
                    lng: group.longitude
                },
                map: map,
                // icon: this.pinSymbol()
                icon: pinSymbol_(group.count)
            })
            marker.addListener("click", function() {
                console.log("you clicked group title is " + group.title);
            })
            return marker
        })
    }),

    _objToStrMap: function(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    },

    nextGroupOfPackage: Ember.computed(function() {
        return _.first(this.get('groupsOfPackage'), function(_group) {
            return !_group.get('packages').get('isDelivered')
        }).get('packages')
    }),

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

    pinSymbol_: function(i) {

        function pad(num, size) {
            var s = "000000000" + num;
            return s.substr(s.length - size);
        }

        return "http://google-maps-icons.googlecode.com/files/red" + pad(i, 2) + ".png";

    },

    setup: Ember.on('init', function() {
        // do setup work ...
        for (var [key, value] of this.get('basicInfo_').entries()) {
            var singleGroupInfo = GroupOfPackage.create({
                id: key,
                zip: value[0].zip,
                packages: value.map(function(item) {
                    return PackageInfo.create({
                        name: item.name,
                        addr1: item.addr1,
                        addr2: item.addr2,
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude),
                        invoicenumber: item.invoicenumber,
                        ordernumber: item.ordernumber,
                        group_id: key
                    })
                }),
                count: value.length,
                title: _.uniq(value.map(function(item) {
                    return item.name
                })).join(' '),
                latitude: parseFloat(value[0].latitude),
                longitude: parseFloat(value[0].longitude)
            })
            this.get('groupsOfPackage').push(singleGroupInfo)
        }

        this.get('markers')

        this.get('map').setCenter({
                lat: this.get('groupsOfPackage')[1].latitude,
                lng: this.get('groupsOfPackage')[1].longitude
            })
            // console.log(this.get('locations').length);

        google.maps.event.addListener(this.get('map'), 'click', function(event) {
            console.log(`${event.latLng.lat()}, ${event.latLng.lng()}`);
            // alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
        });
        // function happens whenever init is called
        // but you don't have to call super because
        // you are not overriding init
        // think of this function happening "along side" init

        // because of this no need to call super
    }),

    stopAnimation: function(marker) {
        setTimeout(function() {
            marker.setAnimation(null);
        }, 1000);
    },

    actions: {
        hello: function(hi) {
            // alert(hi + this.get('locations').length);

            // this.get('map').setCenter({
            //     lat: 37.438568,
            //     lng: 127.128896
            // })
            console.log(this.get('numberOfDeliveredGroup'))
        },

        panTest: function(point, index) {
            console.log(index)
                // console.log(point.longitude)

            this.get('map').setCenter({
                lat: point.latitude,
                lng: point.longitude
            })


            var marker = this.get('markers')[index]
            console.log(marker)

            marker.setAnimation(google.maps.Animation.BOUNCE);
            this.stopAnimation(marker);
        }
    }
});
