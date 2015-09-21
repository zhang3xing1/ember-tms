/* global google */
import Ember from 'ember';
import ParcelCollection from '../models/parcel_collection';
import Parcel from '../models/parcel';
import Zone from '../models/zone';
import _ from 'lodash/lodash';

ParcelCollection.reopen({
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

    checkIn: function(point, pointArray) {
        var i
        var j = pointArray.length - 1
            // var vertexJ = pointArray[j]
        var oddNodes = false

        for (var i = 0; i < pointArray.length; i++) {
            pointArray[i]

            var vertexI = pointArray[i]
            var vertexJ = pointArray[j]

            if (vertexI.longitude < point.longitude && vertexJ.longitude >= point.longitude || vertexJ.longitude < point.longitude && vertexI.longitude >= point.longitude) {
                if (vertexI.latitude + (point.longitude - vertexI.longitude) / (vertexJ.longitude - vertexI.longitude) * (vertexJ.latitude - vertexI.latitude) < point.latitude) {
                    oddNodes = !oddNodes;
                }
            }
            j = i;

        };
        return oddNodes;
    },

    groupsOfParcel: Ember.A(), // Array of ParcelCollection

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
                // console.log("you clicked group title is " + group.title)
                that.send('_updateCards', group)
                that.send('_highlightMarker', group)
            })
            // console.log(marker)
        return marker

    }),

    cardParcel: Ember.A(),

    groupTapped: {
        longitude: 0,
        latitude: 0
    },

    zoneTapped: {
        polygon: ''
    },

    zonePolygons: Ember.A(),

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
            var singleGroupInfo = ParcelCollection.create({
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

        this.set('drawingTool', new google.maps.drawing.DrawingManager())
        this.send('_initiatePolygon')

        var that = this
        google.maps.event.addListener(this.get('map'), 'click', function(event) {
            that.set('groupTapped', {
                longitude: event.latLng.lng().toFixed(5),
                latitude: event.latLng.lat().toFixed(5)
            })
            console.log(`${event.latLng.lng()} ${event.latLng.lat()}`);
        })

        this.send('_colorMarkers', this.get('map'))

        // setup zonePolygons
        var zoneListInfo = this.get('zoneListInfo').sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        })

        _.forEach(zoneListInfo, function(zoneInfo) {
            zoneInfo.vertexes = zoneInfo.vertexes.map(function(vertex) {
                return {
                    latitude: parseFloat(vertex.latitude),
                    longitude: parseFloat(vertex.longitude)
                }
            })

            var paths = zoneInfo.vertexes.map(function(vertex) {
                return {
                    lat: parseFloat(vertex.latitude),
                    lng: parseFloat(vertex.longitude)
                }
            })

            var singleZone = Zone.create({
                polygon: new google.maps.Polygon({
                    paths: paths,
                    strokeColor: '#f0ede5',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: 'green',
                    fillOpacity: 0.35,
                    map: this.get('map')
                }),
                name: zoneInfo.name
            })

            google.maps.event.addListener(singleZone.get('polygon'), 'click', function(event) {
                console.log(`${singleZone.get('name')} clicked`)

                _.forEach(that.get('groupsOfParcel'), function(group) {
                    // body...
                    var result = that.checkIn({
                        longitude: group.longitude,
                        latitude: group.latitude
                    }, singleZone.get('path'))
                    console.log(result)
                    if (result) {
                        that.send('_highlightMarker', group)
                    }
                }, that)

            });

            // google.maps.event.addListener(singleZone.get('polygon'), 'mousemove', function(event) {
            //     var result = that.checkIn({
            //         longitude: event.latLng.lng(),
            //         latitude: event.latLng.lat()
            //     }, singleZone.vertexes)
            //     console.log(result)
            // });

            this.get('zonePolygons').pushObject(singleZone)
        }, this)

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

        groupTapped: function(group, index) {
            this.get('map').setCenter({
                lat: group.latitude,
                lng: group.longitude
            })
            this.send('_updateCards', group)
            this.send('_highlightMarker', group)
        },

        zoneTapped: function(zone, index) {
            console.log(this.get('zoneTapped').get)
            if (this.get('zoneTapped').polygon != '') {
                this.get('zoneTapped').polygon.setOptions({
                    strokeWeight: 2.0,
                    fillColor: 'green'
                })
            }
            this.send('_updateCardZone', zone, index)
            console.log(zone)

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

        home: function() {
            $("#cards").hide()
        },

        zoneMaker: function() {
            console.log(this.get('drawingTool').drawingMode)
            if (this.get('drawingTool').drawingMode == null) {
                $('#zone-maker').addClass('primary')
                this.get('drawingTool').setDrawingMode('polygon')
            } else {
                $('#zone-maker').removeClass('primary')
                this.get('drawingTool').setDrawingMode(null)
            }
        },

        _colorMarker: function(group) {
            var pinSymbol_ = this.get('pinSymbol_')
            var marker = _.find(this.get('markers'), function(marker) {
                return marker.group_id == group.id
            }, this)
            if (group.get('isAllDelivered')) {
                console.log(marker)
                marker.setMap(null)
            } else {
                marker.setMap(this.get('map'))
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
                that.send('_colorMarker', that._fromGroup(group.id))
            }, 1000, this);

        },

        _initiatePolygon: function() {
            //Allowing to draw shapes in the Client Side
            var drawingTool = this.get('drawingTool')
            var map = this.get('map')
            if (drawingTool.getMap()) {
                drawingTool.setMap(null); // Used to disable the Polygon tool
            }
            drawingTool.setOptions({
                drawingMode: google.maps.drawing.OverlayType.POLYGON,
                drawingControl: true,
                drawingControlOptions: {
                    // position: google.maps.ControlPosition.TOP_CENTER, // show control 
                    drawingModes: [google.maps.drawing.OverlayType.POLYGON]
                        // drawingModes: []
                }
            });
            //Loading the drawn shape in the Map.
            drawingTool.setMap(map);
            drawingTool.setDrawingMode(null)

            var that = this
            google.maps.event.addListener(drawingTool, 'polygoncomplete', function(polygon) {
                // drawPolygon(polygon);
                that.get('zonePolygons').pushObject(Zone.create({
                        polygon: polygon,
                        name: `zone--${that.get('zonePolygons').length}`
                    }))
                    // console.log(drawingTool)
            });
        },

        _updateCardZone: function(zone, index) {
            zone.polygon.setOptions({
                strokeWeight: 2.0,
                fillColor: 'red'
            })
            this.set('zoneTapped', zone)
        },

        _updateCards: function(group) {
            $("#cards").show()
            this.set('cardParcel', group.get('parcels'))
        },
    }
});
