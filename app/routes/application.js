import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            map: new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 37.43890643,
                    lng: 127.1235116
                },
                zoom: 16
            }),

            hi3: 'foobar',


            zoneListInfo: [],

            parcelListInfo: {

                "37.436925:127.134919": [{
                    "name": "안영란",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "1413번지  지층",
                    "longitude": "127.134919",
                    "latitude": "37.436925",
                    "zip": "461870",
                    "invoicenumber": "10150282071683",
                    "ordernumber": "385528344",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }]
            }
        }
    }
});
