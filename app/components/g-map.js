import Ember from 'ember';

export default Ember.Component.extend({
    // tagName: 'name-tag',

    // map: new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //         lat: 34.397,
    //         lng: 150.644
    //     },
    //     zoom: 3
    // }),
    // center: new google.maps.LatLng(-34.397, 150.644),

    hiMap: 'himap',

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

    setup: Ember.on('init', function() {
        // do setup work ...
        console.log('init')
        var markers = []
        for (var i = 0; i < this.get('locations').length; i++) {
            var loc = this.get('locations')[i]

            var marker = new google.maps.Marker({
                position: {
                    lat: loc.latitude,
                    lng: loc.longitude
                },
                map: this.get('map')
            });

            markers[i] = marker

        };

        this.set('markers', markers)

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

        console.log(this.get('locations').length);
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
            alert(hi + this.get('locations').length);

            this.get('map').setCenter({
                lat: 37.438568,
                lng: 127.128896
            })
        },

        panTest: function(point, index) {
            console.log(index)
                // console.log(point.longitude)

            this.get('map').setCenter({
                lat: point.latitude,
                lng: point.longitude
            })


            console.log(typeof(index))
            var marker = this.get('markers')[index]
            console.log(marker)

                marker.setAnimation(google.maps.Animation.BOUNCE);
                this.stopAnimation(marker);
        }
    }
});
