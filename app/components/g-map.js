/* global google */
import Ember from 'ember';
import GroupOfPackage from '../models/group-of-package';
import PackageInfo from '../models/package-info';
import PackageState from '../models/package-state';

export default Ember.Component.extend({
    tagName: 'g-map',

    // didInsertElement: function() {
    //     console.log('Component has been added to dom', this.$());
    // },

    // map: new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //         lat: 34.397,
    //         lng: 150.644
    //     },
    //     zoom: 3
    // }),
    // center: new google.maps.LatLng(-34.397, 150.644),

    hiMap: 'tms-map',

    // locations:  function () {
    //     // body...
    //     this.get('locations')
    // },

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


    undeliveredGroups: Ember.computed(
        function() {
            var states = this.get('groupsOfPackage').map(
                function(group) {
                    return group.get('isDelivered')
                })
            console.log(states)
            console.log(`groupsOfPackage.length: ${states.length}`)
            return states.reduce(
                function(_, numberOfUndelivered, index, _self) {
                    var isDelivered = _self[index]
                    if (isDelivered) {
                        console.log(index)
                        return 0 + numberOfUndelivered
                    } else {
                        // console.log(index)
                        return 1 + numberOfUndelivered
                    }
                }, 0)

        }),


    locations_: Ember.computed(function() {
        var locArr = []
        for (var [key, value] of this.get('basicInfo_').entries()) {
            // console.log(key + " = " + value);
            var lngLat = key.split(':')
            locArr.push({
                latitude: parseFloat(lngLat[0]),
                longitude: parseFloat(lngLat[1])
            })
        }
        return locArr
    }),


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


    setup: Ember.on('init', function() {
        // do setup work ...
        console.log('init')

        // console.log(this.get('basicInfo_'))

        // Array.apply(null, Array(5)).map(Number.prototype.valueOf,0);
        // var numberOfGroups = this.get('basicInfo_').size



        // this.set('groupsOfPackage',
        //     Array.apply(null, Array(numberOfGroups)).map(
        //         function() {
        //             return new Map()
        //         }
        //     ))


        for (var [key, value] of this.get('basicInfo_').entries()) {
            var singleGroupInfo = GroupOfPackage.create({
                zip: value[0].zip,
                id: key,
                infoOfPackages: value.map(function(item) {
                    return PackageInfo.create({
                        name: item.name,
                        addr1: item.addr1,
                        addr2: item.addr2,
                        invoicenumber: item.invoicenumber,
                        ordernumber: item.ordernumber,
                        parent_id: key
                    })
                }),
                stateOfPackages: value.map(function(item) {
                    return PackageState.create({
                        parent_id: key,
                        invoicenumber: item.invoicenumber
                    })
                })

            })
            this.get('groupsOfPackage').push(singleGroupInfo)

        }

        // console.log(this.get('groupsOfPackage')[0].get('infoOfPackages'))[0]
        // console.log(this.get('groupsOfPackage')[2].get('stateOfPackages'))
        // console.log(typeof(this.get('groupsOfPackage')[2].get('stateOfPackages')))




        var contentString = '<div>Sigh</div>'
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        var markers = []
        console.log(this.get('locations_'))
        for (var i = 0; i < this.get('locations_').length; i++) {
            var loc = this.get('locations_')[i]

            var marker = new google.maps.Marker({
                position: {
                    lat: loc.latitude,
                    lng: loc.longitude
                },
                map: this.get('map'),
                icon: this.pinSymbol()
            });


            markers[i] = marker;

            (function(index) {
                markers[index].addListener("click", function() {
                    $(`#loc-${index}`).css('background', 'red')
                    console.log("you clicked locaiton number " + index);
                    // console.log(markers[index].getPosition())
                    infowindow.open(this.get('map'), markers[index]);
                })
            })(i);


            // for(var i=0;i< immageArray.length; i++) {
            //       imageArray[index].addEventListener("click", bindClick(i));
            // }

            // function bindClick(i) {
            //    return function(){
            //             console.log("you clicked region number " + i);
            //           });
            // }


            // markers[i] = marker

            // markers[i].addListener('click', function() {
            //     console.log(marker.getPosition())
            //     infowindow.open(this.get('map'), markers[i]);
            // });


        };

        this.set('markers', markers)


        // $('#map').click(function  () {
        //     console.log('map.clicked!')
        // })


        // this.get('map').addListener('click', function(latLng) {
        //     // 3 seconds after the center of the map has changed, pan back to the
        //     // marker.
        //     console.log(latLng)
        // });

        // 37.4375032,127.1272715


        // console.log(point.latitude)
        // console.log(point.longitude)
        // this.get('map').setCenter({
        //     lat: 37.4375032,
        //     lng: 127.1272715
        // })

        // var marker = new google.maps.Marker({
        //     position: {
        //         lat: 37.4375032,
        //         lng: 127.1272715
        //     },
        //     map: this.get('map')
        // });

        // console.log(this.get('locations').length);

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
            console.log(this.get('undeliveredGroups'))
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
