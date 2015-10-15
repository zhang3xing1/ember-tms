/* global google */
import Ember from 'ember';
import ParcelCollection from '../models/parcel_collection';
import Parcel from '../models/parcel';
import Territory from '../models/territory';
import Zip from '../models/zip';
import _ from 'lodash/lodash';


// import MarkerWithLabel from '../utils/markerwithlabel';
import InfoBox from '../utils/infobox';


export default Ember.Component.extend({
    tagName: 'g-map',

    didInsertElement: function() {
        $('.ui.dropdown').dropdown() // sematic-UI dropmenu needs it.

        $('select.dropdown')
            .dropdown();
    },

    hiMap: 'tms-map',

    // init: function() {
    //     do initialization work...
    //     this function is called whenever the object is created
    //     you are overriding an 'init' method that already exists
    //     in the class hierarchy
    //     You can think of this function happening "in place of" init
    //     therefore you need to call super to make sure other init methods
    //     further up in the hierarchy get called
    //     call super to initialize other init methods
    //     this._super();
    // },

    checkIn: function(point, pointArray) {
        var i
        var j = pointArray.length - 1
        var oddNodes = false
        for (var i = 0; i < pointArray.length; i++) {
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
            that.send('_updateCards', group)
            that.send('_highlightMarker', group)
        })
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

    territoryCollection: Ember.A(),

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

        // this.get('map').setCenter({
        //     lat: this.get('groupsOfParcel')[0].latitude,
        //     lng: this.get('groupsOfParcel')[0].longitude
        // })

        this.set('drawingTool', new google.maps.drawing.DrawingManager())
        this.send('_initiatePolygon')

        var that = this
        google.maps.event.addListener(this.get('map'), 'click', function(event) {
            that.set('groupTapped', {
                longitude: event.latLng.lng().toFixed(5),
                latitude: event.latLng.lat().toFixed(5)
            })
        })

        this.send('_colorMarkers', this.get('map'))


        // var marker = new MarkerWithLabel({
        //     position: homeLatLng,
        //     map: this.get('map'),
        //     draggable: true,
        //     raiseOnDrag: true,
        //     labelContent: "Foo bar",
        //     labelAnchor: new google.maps.Point(3, 30),
        //     labelClass: "labels", // the CSS class for the label
        //     labelInBackground: false
        // });

        var polygonLabel = function(map_, content, latLng_) {
            var label_1 = new InfoBox({
                content: content,
                boxStyle: {
                    border: "1px solid black",
                    textAlign: "center",
                    backgroundColor: "white",
                    fontSize: "8pt",
                    width: "40px"
                },
                disableAutoPan: true,
                pixelOffset: new google.maps.Size(-25, 0),
                position: latLng_,
                closeBoxURL: "",
                isHidden: false,
                enableEventPropagation: true
            })
            label_1.open(map_);

            google.maps.event.addListener(map_, 'zoom_changed', function() {
                if (map_.getZoom() < 13) {
                    label_1.setMap(null);
                } else {
                    label_1.setMap(that.get('map'));
                }
                // console.log(map_.getZoom())
            });
        }

        // polygonLabel(this.get('map'), 'foobar2', latLng)



        // Territory setting
        var that = this;

        this.get('territoryCollection').pushObject(Territory.create({
            name: 'test01',
            subTerritories: Ember.A()
        }))
        this.get('territoryCollection').pushObject(Territory.create({
            name: 'test02',
            subTerritories: Ember.A()
        }))
        this.get('territoryCollection').pushObject(Territory.create({
            name: 'test03',
            subTerritories: Ember.A()
        }))

        var promiss_parser = {
            forEach: function(block_callback) {
                return function() {
                    _.forEach(arguments[0], function(a_promise) {
                        a_promise.done(function(body) {
                            block_callback(body)
                        })
                    })
                }
            }
        }

        var defaultTerritories = _.values(this.get('territoryCollection')).map(function(territory) {
            return $.getJSON('/api/territories/' + territory.get('name'))
        })

        var first_fake = promiss_parser.forEach(function(territoryBody) {
                var subTerritories = territoryBody.zips.map(function(zipBody) {
                    var paths = zipBody.vertexes.map(function(vertex) {
                        return {
                            lat: parseFloat(vertex.latitude),
                            lng: parseFloat(vertex.longitude)
                        }
                    })

                    var singleZone = Zip.create({
                        polygon: new google.maps.Polygon({
                            paths: paths,
                            strokeColor: '#f0ede5',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: 'green',
                            fillOpacity: 0.35,
                            map: that.get('map'),
                            zIndex: 1
                        }),
                        name: zipBody.name,
                        isOriginal: JSON.parse(zipBody.isOriginal),
                        centroid: new google.maps.LatLng(zipBody.centroid.latitude, zipBody.centroid.longitude)
                    })

                    that.send('_zoneClickedCheck', singleZone, that)
                    polygonLabel(that.get('map'), zipBody.name, new google.maps.LatLng(zipBody.centroid.latitude, zipBody.centroid.longitude))
                    return singleZone;
                })


                var updatedTerritory = _.find(that.get('territoryCollection'), function(territory) {
                    return territory.get('name') == territoryBody.name
                })
                updatedTerritory.get('subTerritories').pushObjects(subTerritories)
            }

        )

        $.when(defaultTerritories).done(first_fake)
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

        territoryTapped: function(territory, index) {
            var zone = territory.get('subTerritories')[0]
            this.send('zoneTapped', zone, 0, true)
        },

        zoneTapped: function(zone, index, isCenterTo) {
            if (this.get('zoneTapped').polygon != '') {
                this.get('zoneTapped').polygon.setOptions({
                    strokeWeight: 2.0,
                    fillColor: 'green'
                })
            }
            this.send('_updateCardZone', zone, index)
            if (isCenterTo) {
                this.send('_updateMapCenter', zone)
            };

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

        hideCard: function(index) {
            $(`#card-${index}`).hide()
        },

        home: function() {
            $("#cards").hide()
                // this.get('territoryCollection')[0].get('subTerritories').pushObject(1)
            console.log(this.get('territoryCollection')[0])
            console.log(this.get('territoryCollection')[0].get('subTerritories')).pushObject({
                hi: 'foo'
            })
            console.log(`${this.get('territoryCollection')[0].get('subTerritories').length} | ${this.get('territoryCollection')[1].get('subTerritories').length} | ${this.get('territoryCollection')[2].get('subTerritories').length}`)

        },

        zoneMaker: function() {
            if (this.get('drawingTool').drawingMode == null) {
                $('#zone-maker').removeClass('teal')
                $('#zone-maker').addClass('red')
                $('#zone-maker').text('2. Stop')
                this.get('drawingTool').setDrawingMode('polygon')

                this.send('_hideAllMarkers')
            } else {
                $('#zone-maker').removeClass('red')
                $('#zone-maker').addClass('teal')
                $('#zone-maker').text('1. Create')
                this.get('drawingTool').setDrawingMode(null)
                this.send('_showAllMarkers')
            }
        },

        _hideAllMarkers: function() {
            _.forEach(this.get('markers'), function(marker) {
                return marker.setMap(null)
            }, this)
        },

        _showAllMarkers: function() {
            _.forEach(this.get('markers'), function(marker) {
                return marker.setMap(this.get('map'))
            }, this)
        },

        _colorMarker: function(group) {
            var pinSymbol_ = this.get('pinSymbol_')
            var marker = _.find(this.get('markers'), function(marker) {
                return marker.group_id == group.id
            }, this)
            if (group.get('isAllDelivered')) {
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
            marker.set('icon', pinSymbol_(group.get('countOfUndelivered'), 'yellow'))
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
                drawingControl: false,
                drawingControlOptions: {
                    // position: google.maps.ControlPosition.TOP_CENTER, // show control
                    drawingModes: [google.maps.drawing.OverlayType.POLYGON]
                        // drawingModes: []
                }
            });
            //Loading the drawn shape in the Map.
            drawingTool.setMap(map);
            drawingTool.setDrawingMode(null)

            this.send('_drawtoolCompleted', drawingTool, this)
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

        // functions on google map event
        _drawtoolCompleted: function(drawingTool, that) {
            google.maps.event.addListener(drawingTool, 'polygoncomplete', function(polygon) {
                // drawPolygon(polygon);
                console.log('polygon is generated~')

                polygon.zIndex = 2
                polygon.strokeColor = '#d64068'

                var singleZone = Zip.create({
                    polygon: polygon,
                    name: `zone--${that.get('zipCollection').get('subTerritories').length}`
                })

                console.log(singleZone)

                that.send('_zoneClickedCheck', singleZone, that)

                // that.get('zipCollection').get('subTerritories').pushObject(singleZone)
            });
        },

        _zoneClickedCheck: function(zone, that) {
            // that is global this
            google.maps.event.addListener(zone.get('polygon'), 'click', function(event) {
                that.send('zoneTapped', zone, 0)
                _.forEach(that.get('groupsOfParcel'), function(group) {
                    // body...
                    var result = that.checkIn({
                        longitude: group.longitude,
                        latitude: group.latitude
                    }, zone.get('path'))
                    if (result) {
                        that.send('_highlightMarker', group)
                    }
                }, that)
            })
        },

        _updateMapCenter: function(zone) {
            this.get('map').panTo(zone.get('centroid')); //Make map global
        }

    }
});
