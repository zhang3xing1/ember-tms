import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  addr1: '',
  addr2: '',
  invoicenumber: '',
  ordernumber: '',
  // state list
  sequenceOfAlgorithm: -1,
  sequenceOfDelivered: -1,
  isDelivered: false

});

                    // "name": "김영주",
                    // "addr1": "경기 성남시 수정구 수진2동 삼부아파트",
                    // "addr2": "101동 1205호",
                    // "longitude": "127.1235116",
                    // "latitude": "37.43890643",
                    // "zip": "461707",
                    // "invoicenumber": "10150281664294",
                    // "ordernumber": "385364634",
                    // "deliverystatus": "CAMP_ARRIVED",
                    // "targetworkplaceid": "\\N",
                    // "campid": "60"