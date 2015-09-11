import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            map: new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 37.43890643,
                    lng: 127.1235116
                },
                zoom: 17
            }),

            hi3: 'foobar',

            packageListInfo: {
                "37.43890643:127.1235116": [{
                    "name": "김영주",
                    "addr1": "경기 성남시 수정구 수진2동 삼부아파트",
                    "addr2": "101동 1205호",
                    "longitude": "127.1235116",
                    "latitude": "37.43890643",
                    "zip": "461707",
                    "invoicenumber": "10150281664294",
                    "ordernumber": "385364634",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김영주",
                    "addr1": "경기 성남시 수정구 수진2동 삼부아파트",
                    "addr2": "101동 1205호",
                    "longitude": "127.1235116",
                    "latitude": "37.43890643",
                    "zip": "461707",
                    "invoicenumber": "10150281664202",
                    "ordernumber": "385364634",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43935876:127.1212032": [{
                    "name": "주미선",
                    "addr1": "경기도 성남시 수정구 수진2동 삼정그린뷰",
                    "addr2": "102동 503호",
                    "longitude": "127.1212032",
                    "latitude": "37.43935876",
                    "zip": "461728",
                    "invoicenumber": "10150281628502",
                    "ordernumber": "385291092",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43850984:127.1235136": [{
                    "name": "최송이",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "수진2동삼부아파트102-107",
                    "longitude": "127.1235136",
                    "latitude": "37.43850984",
                    "zip": "461180",
                    "invoicenumber": "10150281490101",
                    "ordernumber": "385283434",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "최송이",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "수진2동삼부아파트102-107",
                    "longitude": "127.1235136",
                    "latitude": "37.43850984",
                    "zip": "461180",
                    "invoicenumber": "10150281490112",
                    "ordernumber": "385283434",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43931208:127.1235208": [{
                    "name": "김가희",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "수정로 28 동양하이츠빌 103동 402호",
                    "longitude": "127.1235208",
                    "latitude": "37.43931208",
                    "zip": "461807",
                    "invoicenumber": "10150281763403",
                    "ordernumber": "385414645",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "신은아",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4661-6번지 동양하이츠빌라 103동101호",
                    "longitude": "127.1235208",
                    "latitude": "37.43931208",
                    "zip": "461807",
                    "invoicenumber": "10150281790250",
                    "ordernumber": "385415555",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.4381224:127.1235607": [{
                    "name": "김기문",
                    "addr1": "경기도 성남시 수정구 수진2동 삼부아파트",
                    "addr2": "103동 808호 김기문",
                    "longitude": "127.1235607",
                    "latitude": "37.4381224",
                    "zip": "461707",
                    "invoicenumber": "10150281642185",
                    "ordernumber": "385333414",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "라순옥",
                    "addr1": "경기도 성남시 수정구 수진2동 삼부아파트",
                    "addr2": "103-207",
                    "longitude": "127.1235607",
                    "latitude": "37.4381224",
                    "zip": "461707",
                    "invoicenumber": "10150282017842",
                    "ordernumber": "385190709",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43887354:127.1245065": [{
                    "name": "박혜민",
                    "addr1": "경기 성남시 수정구 수진2동 삼부아파트",
                    "addr2": "105동 907호",
                    "longitude": "127.1245065",
                    "latitude": "37.43887354",
                    "zip": "461707",
                    "invoicenumber": "10150281009024",
                    "ordernumber": "384840753",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43365472:127.1245439": [{
                    "name": "최희선",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4757-11 101호",
                    "longitude": "127.1245439",
                    "latitude": "37.43365472",
                    "zip": "461180",
                    "invoicenumber": "10150280935826",
                    "ordernumber": "383103934",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "최희선",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4757-11  101호",
                    "longitude": "127.1245439",
                    "latitude": "37.43365472",
                    "zip": "461180",
                    "invoicenumber": "10150281634290",
                    "ordernumber": "383555706",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "최희선",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4757-11  101호",
                    "longitude": "127.1245439",
                    "latitude": "37.43365472",
                    "zip": "461180",
                    "invoicenumber": "10150281917263",
                    "ordernumber": "383555706",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43861516:127.1254573": [{
                    "name": "박혜명",
                    "addr1": "경기 성남시 수정구 수진2동 삼부아파트",
                    "addr2": "108-104",
                    "longitude": "127.1254573",
                    "latitude": "37.43861516",
                    "zip": "461707",
                    "invoicenumber": "10150281287285",
                    "ordernumber": "385124357",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43790552:127.1262296": [{
                    "name": "이윤실",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4568번지 3층 301호",
                    "longitude": "127.1262296",
                    "latitude": "37.43790552",
                    "zip": "461182",
                    "invoicenumber": "10150281961444",
                    "ordernumber": "385463561",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43866316:127.126384": [{
                    "name": "유명화",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4567-19번지 1층 모두의족발",
                    "longitude": "127.126384",
                    "latitude": "37.43866316",
                    "zip": "461182",
                    "invoicenumber": "10150280852445",
                    "ordernumber": "384831469",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43379594:127.1264422": [{
                    "name": "김소진",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4762-7번지 2층",
                    "longitude": "127.1264422",
                    "latitude": "37.43379594",
                    "zip": "461807",
                    "invoicenumber": "10150281313244",
                    "ordernumber": "385162386",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김소진",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4762-7번지 2층",
                    "longitude": "127.1264422",
                    "latitude": "37.43379594",
                    "zip": "461807",
                    "invoicenumber": "10150281723411",
                    "ordernumber": "385162386",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김소진",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4762-7번지 2층",
                    "longitude": "127.1264422",
                    "latitude": "37.43379594",
                    "zip": "461807",
                    "invoicenumber": "10150281261304",
                    "ordernumber": "385162386",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43786167:127.1266141": [{
                    "name": "정재영",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4568-4번지 지하",
                    "longitude": "127.1266141",
                    "latitude": "37.43786167",
                    "zip": "461182",
                    "invoicenumber": "10150281472785",
                    "ordernumber": "385171095",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }, {
                    "name": "정재영",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4568-4번지 지하",
                    "longitude": "127.1266141",
                    "latitude": "37.43786167",
                    "zip": "461182",
                    "invoicenumber": "10150281472774",
                    "ordernumber": "385171095",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43791664:127.1268964": [{
                    "name": "최혜윤",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4569번 세븐빌아파트 204호",
                    "longitude": "127.1268964",
                    "latitude": "37.43791664",
                    "zip": "461180",
                    "invoicenumber": "10150281646455",
                    "ordernumber": "384478396",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43924217:127.1270594": [{
                    "name": "강인철",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4539번지 세일띠아모 202호",
                    "longitude": "127.1270594",
                    "latitude": "37.43924217",
                    "zip": "461807",
                    "invoicenumber": "10150281028930",
                    "ordernumber": "383131438",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "강인철",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4539번지 세일띠아모 202호",
                    "longitude": "127.1270594",
                    "latitude": "37.43924217",
                    "zip": "461807",
                    "invoicenumber": "10150280990603",
                    "ordernumber": "383131438",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "강인철",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4539번지 세일띠아모 202호",
                    "longitude": "127.1270594",
                    "latitude": "37.43924217",
                    "zip": "461807",
                    "invoicenumber": "10150281409516",
                    "ordernumber": "383131438",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43595258:127.1271888": [{
                    "name": "박선영",
                    "addr1": "경기 성남시 수정구 수진동",
                    "addr2": "4780-4번지 영진빌라 303호",
                    "longitude": "127.1271888",
                    "latitude": "37.43595258",
                    "zip": "461180",
                    "invoicenumber": "10150280924873",
                    "ordernumber": "384999398",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "박선영",
                    "addr1": "경기 성남시 수정구 수진동",
                    "addr2": "4780-4번지 영진빌라 303호",
                    "longitude": "127.1271888",
                    "latitude": "37.43595258",
                    "zip": "461180",
                    "invoicenumber": "10150281006110",
                    "ordernumber": "384999398",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.4375032:127.1272715": [{
                    "name": "임미경",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4601번지 202호",
                    "longitude": "127.1272715",
                    "latitude": "37.4375032",
                    "zip": "461807",
                    "invoicenumber": "10150281471444",
                    "ordernumber": "385235122",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "임미경",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4601번지 202호",
                    "longitude": "127.1272715",
                    "latitude": "37.4375032",
                    "zip": "461807",
                    "invoicenumber": "10150281920063",
                    "ordernumber": "385235122",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43592714:127.1276976": [{
                    "name": "강현정",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "수진2동 4611-10  1층  101호",
                    "longitude": "127.1276976",
                    "latitude": "37.43592714",
                    "zip": "461180",
                    "invoicenumber": "10150281800385",
                    "ordernumber": "385402233",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43481868:127.1277709": [{
                    "name": "이호연",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4622-6 삼성로얄맨션 D동101호",
                    "longitude": "127.1277709",
                    "latitude": "37.43481868",
                    "zip": "461182",
                    "invoicenumber": "10150281205234",
                    "ordernumber": "385103653",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "이호연",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "4622-6 삼성로얄맨션 D동101호",
                    "longitude": "127.1277709",
                    "latitude": "37.43481868",
                    "zip": "461182",
                    "invoicenumber": "10150281244272",
                    "ordernumber": "385103653",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43495449:127.1279624": [{
                    "name": "박은옥",
                    "addr1": "경기 성남시 수정구 수진동",
                    "addr2": "4622-4번지 삼성로얄맨션B동 B02호",
                    "longitude": "127.1279624",
                    "latitude": "37.43495449",
                    "zip": "461180",
                    "invoicenumber": "10150280853941",
                    "ordernumber": "384909105",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43627974:127.1280349": [{
                    "name": "윤준섭",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4610번지 2층",
                    "longitude": "127.1280349",
                    "latitude": "37.43627974",
                    "zip": "461180",
                    "invoicenumber": "10150281214356",
                    "ordernumber": "385052302",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "윤준섭",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4610번지 2층",
                    "longitude": "127.1280349",
                    "latitude": "37.43627974",
                    "zip": "461180",
                    "invoicenumber": "10150281214345",
                    "ordernumber": "385052302",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43581117:127.1280825": [{
                    "name": "이혜지",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4614번지 금양빌딩 802호",
                    "longitude": "127.1280825",
                    "latitude": "37.43581117",
                    "zip": "461180",
                    "invoicenumber": "10150281774216",
                    "ordernumber": "385416932",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.436913:127.1287666": [{
                    "name": "김은실",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3990 굿데이하우스 201호",
                    "longitude": "127.1287666",
                    "latitude": "37.436913",
                    "zip": "461873",
                    "invoicenumber": "10150281034235",
                    "ordernumber": "384919595",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43860801:127.1289052": [{
                    "name": "유소미",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3038번지 개나리빌라 402호",
                    "longitude": "127.1289052",
                    "latitude": "37.43860801",
                    "zip": "461182",
                    "invoicenumber": "10150281459415",
                    "ordernumber": "385260659",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43713922:127.1290481": [{
                    "name": "박현정",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "3961번지 3층",
                    "longitude": "127.1290481",
                    "latitude": "37.43713922",
                    "zip": "461873",
                    "invoicenumber": "10150281344862",
                    "ordernumber": "385197210",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "박현정",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "3961번지 3층",
                    "longitude": "127.1290481",
                    "latitude": "37.43713922",
                    "zip": "461873",
                    "invoicenumber": "10150281373234",
                    "ordernumber": "385197210",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "박현정",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "3961번지 3층",
                    "longitude": "127.1290481",
                    "latitude": "37.43713922",
                    "zip": "461873",
                    "invoicenumber": "10150281350440",
                    "ordernumber": "385197210",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.4379415:127.1290667": [{
                    "name": "정영분",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3034-1번지",
                    "longitude": "127.1290667",
                    "latitude": "37.4379415",
                    "zip": "461182",
                    "invoicenumber": "10150281835061",
                    "ordernumber": "385316232",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.4349232:127.1294772": [{
                    "name": "김형길",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4522번지 거명맨션 201호",
                    "longitude": "127.1294772",
                    "latitude": "37.4349232",
                    "zip": "461180",
                    "invoicenumber": "10150281391051",
                    "ordernumber": "385211036",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43696995:127.1296819": [{
                    "name": "이선",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3885",
                    "longitude": "127.1296819",
                    "latitude": "37.43696995",
                    "zip": "461873",
                    "invoicenumber": "10150281512755",
                    "ordernumber": "385203417",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "이선",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3885",
                    "longitude": "127.1296819",
                    "latitude": "37.43696995",
                    "zip": "461873",
                    "invoicenumber": "10150281825972",
                    "ordernumber": "385203417",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43696267:127.1302358": [{
                    "name": "지민주",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3810 (2층)",
                    "longitude": "127.1302358",
                    "latitude": "37.43696267",
                    "zip": "461180",
                    "invoicenumber": "10150281521251",
                    "ordernumber": "385312483",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43570172:127.1305472": [{
                    "name": "신성미",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4213번지1층",
                    "longitude": "127.1305472",
                    "latitude": "37.43570172",
                    "zip": "461873",
                    "invoicenumber": "10150281665786",
                    "ordernumber": "385282272",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "신성미",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4213번지1층",
                    "longitude": "127.1305472",
                    "latitude": "37.43570172",
                    "zip": "461873",
                    "invoicenumber": "10150281857656",
                    "ordernumber": "385281336",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.4376758:127.1305714": [{
                    "name": "송희영",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3717  번지 2층",
                    "longitude": "127.1305714",
                    "latitude": "37.4376758",
                    "zip": "461182",
                    "invoicenumber": "10150281635583",
                    "ordernumber": "385134320",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43804547:127.1306035": [{
                    "name": "문현수",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3684번지 202호",
                    "longitude": "127.1306035",
                    "latitude": "37.43804547",
                    "zip": "461180",
                    "invoicenumber": "10150281058923",
                    "ordernumber": "385015883",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43881353:127.1312102": [{
                    "name": "진영종",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "3304번지 2층",
                    "longitude": "127.1312102",
                    "latitude": "37.43881353",
                    "zip": "461182",
                    "invoicenumber": "10150281484626",
                    "ordernumber": "385286521",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "진영종",
                    "addr1": "경기 성남시 수정구 수진2동",
                    "addr2": "3304번지 2층",
                    "longitude": "127.1312102",
                    "latitude": "37.43881353",
                    "zip": "461182",
                    "invoicenumber": "10150281600012",
                    "ordernumber": "385286521",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43786717:127.1312374": [{
                    "name": "김다정",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3619번지. 2층",
                    "longitude": "127.1312374",
                    "latitude": "37.43786717",
                    "zip": "461180",
                    "invoicenumber": "10150281691292",
                    "ordernumber": "384850703",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43957158:127.1315004": [{
                    "name": "지장자",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3380-1",
                    "longitude": "127.1315004",
                    "latitude": "37.43957158",
                    "zip": "461872",
                    "invoicenumber": "10150281743361",
                    "ordernumber": "385400478",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "지장자",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3380-1",
                    "longitude": "127.1315004",
                    "latitude": "37.43957158",
                    "zip": "461872",
                    "invoicenumber": "10150281993950",
                    "ordernumber": "385400478",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "지장자",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3380-1",
                    "longitude": "127.1315004",
                    "latitude": "37.43957158",
                    "zip": "461872",
                    "invoicenumber": "10150281743652",
                    "ordernumber": "385400478",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43869783:127.1316855": [{
                    "name": "최지현",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3363번지 1층 믿음공인중개사,부동산",
                    "longitude": "127.1316855",
                    "latitude": "37.43869783",
                    "zip": "461180",
                    "invoicenumber": "10150281272924",
                    "ordernumber": "385167115",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43984284:127.1317704": [{
                    "name": "최은하",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3376번지 수진현대아파트 101동 803호",
                    "longitude": "127.1317704",
                    "latitude": "37.43984284",
                    "zip": "461180",
                    "invoicenumber": "10150281607130",
                    "ordernumber": "385329142",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "최은하",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3376번지 수진현대아파트 101동 803호",
                    "longitude": "127.1317704",
                    "latitude": "37.43984284",
                    "zip": "461180",
                    "invoicenumber": "10150281641640",
                    "ordernumber": "385329142",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "최은하",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3376번지 수진현대아파트 101동 803호",
                    "longitude": "127.1317704",
                    "latitude": "37.43984284",
                    "zip": "461180",
                    "invoicenumber": "10150281812462",
                    "ordernumber": "385329142",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "윤정화",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "현대아파트 101동 601호",
                    "longitude": "127.1317704",
                    "latitude": "37.43984284",
                    "zip": "461182",
                    "invoicenumber": "10150282121361",
                    "ordernumber": "385568166",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43803339:127.132514": [{
                    "name": "염희진",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3427번지 2층",
                    "longitude": "127.132514",
                    "latitude": "37.43803339",
                    "zip": "461182",
                    "invoicenumber": "10150281281210",
                    "ordernumber": "385131049",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.4367366:127.1328934": [{
                    "name": "박근혜",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4370",
                    "longitude": "127.1328934",
                    "latitude": "37.4367366",
                    "zip": "461873",
                    "invoicenumber": "10150281945370",
                    "ordernumber": "385486365",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }, {
                    "name": "박근혜",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "4370",
                    "longitude": "127.1328934",
                    "latitude": "37.4367366",
                    "zip": "461873",
                    "invoicenumber": "10150282055922",
                    "ordernumber": "385486365",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43564907:127.1339047": [{
                    "name": "김창숙",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "4510-1 샛별오피스텔 제4층 제415호",
                    "longitude": "127.1339047",
                    "latitude": "37.43564907",
                    "zip": "461180",
                    "invoicenumber": "10150280909580",
                    "ordernumber": "384956560",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43861486:127.133992": [{
                    "name": "한동연",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "1203번지 1층",
                    "longitude": "127.133992",
                    "latitude": "37.43861486",
                    "zip": "461870",
                    "invoicenumber": "10150281514855",
                    "ordernumber": "385280804",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.44064435:127.1344456": [{
                    "name": "송옥선",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "385번지 (홍산장)",
                    "longitude": "127.1344456",
                    "latitude": "37.44064435",
                    "zip": "461804",
                    "invoicenumber": "10150281352610",
                    "ordernumber": "385191171",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "송옥선",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "385번지 (홍산장)",
                    "longitude": "127.1344456",
                    "latitude": "37.44064435",
                    "zip": "461804",
                    "invoicenumber": "10150281352621",
                    "ordernumber": "385191171",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43727428:127.1347898": [{
                    "name": "김주영",
                    "addr1": "경기 성남시 수정구 수진1동",
                    "addr2": "1408번지 1층",
                    "longitude": "127.1347898",
                    "latitude": "37.43727428",
                    "zip": "461870",
                    "invoicenumber": "10150281847204",
                    "ordernumber": "385445630",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43862688:127.1349641": [{
                    "name": "이아람",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "1049번지 동네분식",
                    "longitude": "127.1349641",
                    "latitude": "37.43862688",
                    "zip": "461180",
                    "invoicenumber": "10150281176534",
                    "ordernumber": "385058631",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.4407363:127.135033": [{
                    "name": "구미혜",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "481번지 1층",
                    "longitude": "127.135033",
                    "latitude": "37.4407363",
                    "zip": "461181",
                    "invoicenumber": "10150281807540",
                    "ordernumber": "385424628",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43665315:127.1350528": [{
                    "name": "조윤진",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "2898번지 지층",
                    "longitude": "127.1350528",
                    "latitude": "37.43665315",
                    "zip": "461871",
                    "invoicenumber": "10150281808214",
                    "ordernumber": "385427748",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43746486:127.1352071": [{
                    "name": "황혜연",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "1487번지 2층",
                    "longitude": "127.1352071",
                    "latitude": "37.43746486",
                    "zip": "461870",
                    "invoicenumber": "10150281405305",
                    "ordernumber": "385217679",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.4388984:127.1353245": [{
                    "name": "곽유영",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "972번지1층",
                    "longitude": "127.1353245",
                    "latitude": "37.4388984",
                    "zip": "461181",
                    "invoicenumber": "10150282168681",
                    "ordernumber": "385614154",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43976377:127.1353429": [{
                    "name": "임빛슬기",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "465번지 2층",
                    "longitude": "127.1353429",
                    "latitude": "37.43976377",
                    "zip": "461804",
                    "invoicenumber": "10150281486520",
                    "ordernumber": "385242558",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "임빛슬기",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "465번지 2층",
                    "longitude": "127.1353429",
                    "latitude": "37.43976377",
                    "zip": "461804",
                    "invoicenumber": "10150281482121",
                    "ordernumber": "385255231",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.44144991:127.1355269": [{
                    "name": "이민용",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "13번지 401호",
                    "longitude": "127.1355269",
                    "latitude": "37.44144991",
                    "zip": "461181",
                    "invoicenumber": "10150282026872",
                    "ordernumber": "385510497",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }, {
                    "name": "이민용",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "13번지 401호",
                    "longitude": "127.1355269",
                    "latitude": "37.44144991",
                    "zip": "461181",
                    "invoicenumber": "10150282007364",
                    "ordernumber": "385510497",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43909771:127.1356514": [{
                    "name": "신정은",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "914번지1층",
                    "longitude": "127.1356514",
                    "latitude": "37.43909771",
                    "zip": "461181",
                    "invoicenumber": "10150281005141",
                    "ordernumber": "384549949",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43687338:127.1363178": [{
                    "name": "김세미",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "2469번지 1층",
                    "longitude": "127.1363178",
                    "latitude": "37.43687338",
                    "zip": "461181",
                    "invoicenumber": "10150281633984",
                    "ordernumber": "385341996",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김세미",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "2469번지 1층",
                    "longitude": "127.1363178",
                    "latitude": "37.43687338",
                    "zip": "461181",
                    "invoicenumber": "10150281827033",
                    "ordernumber": "385341996",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.44002917:127.1366416": [{
                    "name": "박선미",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "704번지 2층",
                    "longitude": "127.1366416",
                    "latitude": "37.44002917",
                    "zip": "461805",
                    "invoicenumber": "10150281298780",
                    "ordernumber": "385167399",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "박선미",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "704번지 2층",
                    "longitude": "127.1366416",
                    "latitude": "37.44002917",
                    "zip": "461805",
                    "invoicenumber": "10150281385554",
                    "ordernumber": "385167399",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43943514:127.1369271": [{
                    "name": "김희훈",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "1동 694번지 1층",
                    "longitude": "127.1369271",
                    "latitude": "37.43943514",
                    "zip": "461180",
                    "invoicenumber": "10150281008733",
                    "ordernumber": "384838950",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43722685:127.1369491": [{
                    "name": "김지선",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "2444번지2층",
                    "longitude": "127.1369491",
                    "latitude": "37.43722685",
                    "zip": "461181",
                    "invoicenumber": "10150281239361",
                    "ordernumber": "385136635",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43829954:127.1369665": [{
                    "name": "신혜옥",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "1848번지 2층",
                    "longitude": "127.1369665",
                    "latitude": "37.43829954",
                    "zip": "461181",
                    "invoicenumber": "10150281058665",
                    "ordernumber": "385036053",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43653326:127.1370994": [{
                    "name": "김향란",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2578번지2층",
                    "longitude": "127.1370994",
                    "latitude": "37.43653326",
                    "zip": "461180",
                    "invoicenumber": "10150281455860",
                    "ordernumber": "385064014",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김향란",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2578번지2층",
                    "longitude": "127.1370994",
                    "latitude": "37.43653326",
                    "zip": "461180",
                    "invoicenumber": "10150281455845",
                    "ordernumber": "385064014",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김향란",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2578번지2층",
                    "longitude": "127.1370994",
                    "latitude": "37.43653326",
                    "zip": "461180",
                    "invoicenumber": "10150281506024",
                    "ordernumber": "385066433",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김향란",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2578번지2층",
                    "longitude": "127.1370994",
                    "latitude": "37.43653326",
                    "zip": "461180",
                    "invoicenumber": "10150281553230",
                    "ordernumber": "385049570",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43835535:127.1375315": [{
                    "name": "장윤창",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "1870번지 2층",
                    "longitude": "127.1375315",
                    "latitude": "37.43835535",
                    "zip": "461180",
                    "invoicenumber": "10150280895425",
                    "ordernumber": "384991548",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43656168:127.1375514": [{
                    "name": "김정호",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2586번지 302호",
                    "longitude": "127.1375514",
                    "latitude": "37.43656168",
                    "zip": "461180",
                    "invoicenumber": "10150281070042",
                    "ordernumber": "385040635",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김정호",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2586번지 302호",
                    "longitude": "127.1375514",
                    "latitude": "37.43656168",
                    "zip": "461180",
                    "invoicenumber": "10150281058761",
                    "ordernumber": "385033856",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43817553:127.1376793": [{
                    "name": "전옥진",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "1900   1층",
                    "longitude": "127.1376793",
                    "latitude": "37.43817553",
                    "zip": "461805",
                    "invoicenumber": "10150281669382",
                    "ordernumber": "385334762",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43775511:127.1387326": [{
                    "name": "임금희",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2085번지 201호",
                    "longitude": "127.1387326",
                    "latitude": "37.43775511",
                    "zip": "461180",
                    "invoicenumber": "10150281703096",
                    "ordernumber": "384720131",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43693505:127.138793": [{
                    "name": "이혜원",
                    "addr1": "경기도 성남시 수정구수진1동",
                    "addr2": "2220번지 MD아파트 906호",
                    "longitude": "127.138793",
                    "latitude": "37.43693505",
                    "zip": "461805",
                    "invoicenumber": "10150281018334",
                    "ordernumber": "383772996",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "김재원",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "2220번지 엠디아파트 1005호",
                    "longitude": "127.138793",
                    "latitude": "37.43693505",
                    "zip": "461180",
                    "invoicenumber": "10150281984732",
                    "ordernumber": "385493339",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.43805332:127.1389798": [{
                    "name": "양명덕",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "2052번지  지층102호",
                    "longitude": "127.1389798",
                    "latitude": "37.43805332",
                    "zip": "461181",
                    "invoicenumber": "10150280916381",
                    "ordernumber": "384944880",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }, {
                    "name": "양명덕",
                    "addr1": "경기도 성남시 수정구 수진1동",
                    "addr2": "2052번지  지층102호",
                    "longitude": "127.1389798",
                    "latitude": "37.43805332",
                    "zip": "461181",
                    "invoicenumber": "10150280995013",
                    "ordernumber": "384944880",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.439325:127.134832": [{
                    "name": "서춘화",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "1021번지2충",
                    "longitude": "127.134832",
                    "latitude": "37.439325",
                    "zip": "461180",
                    "invoicenumber": "10150281777941",
                    "ordernumber": "385417724",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.43747:127.128569": [{
                    "name": "전준식",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "산39ㅡ13  한국도로공사 성남영업소 대보 정보통신",
                    "longitude": "127.128569",
                    "latitude": "37.43747",
                    "zip": "461182",
                    "invoicenumber": "10150281821971",
                    "ordernumber": "385435529",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.438568:127.128896": [{
                    "name": "유소미",
                    "addr1": "경기도 성남시 수정구 수진2동",
                    "addr2": "3038번지 개나리빌라 402호",
                    "longitude": "127.128896",
                    "latitude": "37.438568",
                    "zip": "461182",
                    "invoicenumber": "10150281784646",
                    "ordernumber": "385260659",
                    "deliverystatus": "CAMP_ARRIVED",
                    "targetworkplaceid": "\\N",
                    "campid": "60"
                }],
                "37.439742:127.134535": [{
                    "name": "남영란",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "332번지 지층",
                    "longitude": "127.134535",
                    "latitude": "37.439742",
                    "zip": "461180",
                    "invoicenumber": "10150281808472",
                    "ordernumber": "385420754",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
                "37.439381:127.128738": [{
                    "name": "김태민",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3003호 1층 우측 세원골식당",
                    "longitude": "127.128738",
                    "latitude": "37.439381",
                    "zip": "461180",
                    "invoicenumber": "10150281985605",
                    "ordernumber": "385499184",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }, {
                    "name": "김태민",
                    "addr1": "경기도 성남시 수정구 수진동",
                    "addr2": "3003호 1층 우측 세원골식당",
                    "longitude": "127.128738",
                    "latitude": "37.439381",
                    "zip": "461180",
                    "invoicenumber": "10150282021994",
                    "ordernumber": "385499184",
                    "deliverystatus": "CAMP_LOADED",
                    "targetworkplaceid": "60",
                    "campid": "60"
                }],
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
            },


            locations: [{
                "longitude": 127.1212032,
                "latitude": 37.43935876
            }, {
                "longitude": 127.1235116,
                "latitude": 37.43890643
            }, {
                "longitude": 127.1235116,
                "latitude": 37.43890643
            }, {
                "longitude": 127.1235136,
                "latitude": 37.43850984
            }, {
                "longitude": 127.1235136,
                "latitude": 37.43850984
            }, {
                "longitude": 127.1235208,
                "latitude": 37.43931208
            }, {
                "longitude": 127.1235208,
                "latitude": 37.43931208
            }, {
                "longitude": 127.1235607,
                "latitude": 37.4381224
            }, {
                "longitude": 127.1235607,
                "latitude": 37.4381224
            }, {
                "longitude": 127.1245065,
                "latitude": 37.43887354
            }, {
                "longitude": 127.1245439,
                "latitude": 37.43365472
            }, {
                "longitude": 127.1245439,
                "latitude": 37.43365472
            }, {
                "longitude": 127.1245439,
                "latitude": 37.43365472
            }, {
                "longitude": 127.1254573,
                "latitude": 37.43861516
            }, {
                "longitude": 127.1262296,
                "latitude": 37.43790552
            }, {
                "longitude": 127.126384,
                "latitude": 37.43866316
            }, {
                "longitude": 127.1264422,
                "latitude": 37.43379594
            }, {
                "longitude": 127.1264422,
                "latitude": 37.43379594
            }, {
                "longitude": 127.1264422,
                "latitude": 37.43379594
            }, {
                "longitude": 127.1266141,
                "latitude": 37.43786167
            }, {
                "longitude": 127.1266141,
                "latitude": 37.43786167
            }, {
                "longitude": 127.1268964,
                "latitude": 37.43791664
            }, {
                "longitude": 127.1270594,
                "latitude": 37.43924217
            }, {
                "longitude": 127.1270594,
                "latitude": 37.43924217
            }, {
                "longitude": 127.1270594,
                "latitude": 37.43924217
            }, {
                "longitude": 127.1271888,
                "latitude": 37.43595258
            }, {
                "longitude": 127.1271888,
                "latitude": 37.43595258
            }, {
                "longitude": 127.1272715,
                "latitude": 37.4375032
            }, {
                "longitude": 127.1272715,
                "latitude": 37.4375032
            }, {
                "longitude": 127.1276976,
                "latitude": 37.43592714
            }, {
                "longitude": 127.1277709,
                "latitude": 37.43481868
            }, {
                "longitude": 127.1277709,
                "latitude": 37.43481868
            }, {
                "longitude": 127.1279624,
                "latitude": 37.43495449
            }, {
                "longitude": 127.1280349,
                "latitude": 37.43627974
            }, {
                "longitude": 127.1280349,
                "latitude": 37.43627974
            }, {
                "longitude": 127.1280825,
                "latitude": 37.43581117
            }, {
                "longitude": 127.1287666,
                "latitude": 37.436913
            }, {
                "longitude": 127.1289052,
                "latitude": 37.43860801
            }, {
                "longitude": 127.1290481,
                "latitude": 37.43713922
            }, {
                "longitude": 127.1290481,
                "latitude": 37.43713922
            }, {
                "longitude": 127.1290481,
                "latitude": 37.43713922
            }, {
                "longitude": 127.1290667,
                "latitude": 37.4379415
            }, {
                "longitude": 127.1294772,
                "latitude": 37.4349232
            }, {
                "longitude": 127.1296819,
                "latitude": 37.43696995
            }, {
                "longitude": 127.1296819,
                "latitude": 37.43696995
            }, {
                "longitude": 127.1302358,
                "latitude": 37.43696267
            }, {
                "longitude": 127.1305472,
                "latitude": 37.43570172
            }, {
                "longitude": 127.1305472,
                "latitude": 37.43570172
            }, {
                "longitude": 127.1305714,
                "latitude": 37.4376758
            }, {
                "longitude": 127.1306035,
                "latitude": 37.43804547
            }, {
                "longitude": 127.1312102,
                "latitude": 37.43881353
            }, {
                "longitude": 127.1312102,
                "latitude": 37.43881353
            }, {
                "longitude": 127.1312374,
                "latitude": 37.43786717
            }, {
                "longitude": 127.1315004,
                "latitude": 37.43957158
            }, {
                "longitude": 127.1315004,
                "latitude": 37.43957158
            }, {
                "longitude": 127.1315004,
                "latitude": 37.43957158
            }, {
                "longitude": 127.1316855,
                "latitude": 37.43869783
            }, {
                "longitude": 127.1317704,
                "latitude": 37.43984284
            }, {
                "longitude": 127.1317704,
                "latitude": 37.43984284
            }, {
                "longitude": 127.1317704,
                "latitude": 37.43984284
            }, {
                "longitude": 127.1317704,
                "latitude": 37.43984284
            }, {
                "longitude": 127.132514,
                "latitude": 37.43803339
            }, {
                "longitude": 127.1328934,
                "latitude": 37.4367366
            }, {
                "longitude": 127.1328934,
                "latitude": 37.4367366
            }, {
                "longitude": 127.1339047,
                "latitude": 37.43564907
            }, {
                "longitude": 127.133992,
                "latitude": 37.43861486
            }, {
                "longitude": 127.1344456,
                "latitude": 37.44064435
            }, {
                "longitude": 127.1344456,
                "latitude": 37.44064435
            }, {
                "longitude": 127.1347898,
                "latitude": 37.43727428
            }, {
                "longitude": 127.1349641,
                "latitude": 37.43862688
            }, {
                "longitude": 127.135033,
                "latitude": 37.4407363
            }, {
                "longitude": 127.1350528,
                "latitude": 37.43665315
            }, {
                "longitude": 127.1352071,
                "latitude": 37.43746486
            }, {
                "longitude": 127.1353245,
                "latitude": 37.4388984
            }, {
                "longitude": 127.1353429,
                "latitude": 37.43976377
            }, {
                "longitude": 127.1353429,
                "latitude": 37.43976377
            }, {
                "longitude": 127.1355269,
                "latitude": 37.44144991
            }, {
                "longitude": 127.1355269,
                "latitude": 37.44144991
            }, {
                "longitude": 127.1356514,
                "latitude": 37.43909771
            }, {
                "longitude": 127.1363178,
                "latitude": 37.43687338
            }, {
                "longitude": 127.1363178,
                "latitude": 37.43687338
            }, {
                "longitude": 127.1366416,
                "latitude": 37.44002917
            }, {
                "longitude": 127.1366416,
                "latitude": 37.44002917
            }, {
                "longitude": 127.1369271,
                "latitude": 37.43943514
            }, {
                "longitude": 127.1369491,
                "latitude": 37.43722685
            }, {
                "longitude": 127.1369665,
                "latitude": 37.43829954
            }, {
                "longitude": 127.1370994,
                "latitude": 37.43653326
            }, {
                "longitude": 127.1370994,
                "latitude": 37.43653326
            }, {
                "longitude": 127.1370994,
                "latitude": 37.43653326
            }, {
                "longitude": 127.1370994,
                "latitude": 37.43653326
            }, {
                "longitude": 127.1375315,
                "latitude": 37.43835535
            }, {
                "longitude": 127.1375514,
                "latitude": 37.43656168
            }, {
                "longitude": 127.1375514,
                "latitude": 37.43656168
            }, {
                "longitude": 127.1376793,
                "latitude": 37.43817553
            }, {
                "longitude": 127.1387326,
                "latitude": 37.43775511
            }, {
                "longitude": 127.138793,
                "latitude": 37.43693505
            }, {
                "longitude": 127.138793,
                "latitude": 37.43693505
            }, {
                "longitude": 127.1389798,
                "latitude": 37.43805332
            }, {
                "longitude": 127.1389798,
                "latitude": 37.43805332
            }, {
                "longitude": 127.134832,
                "latitude": 37.439325
            }, {
                "longitude": 127.128569,
                "latitude": 37.43747
            }, {
                "longitude": 127.128896,
                "latitude": 37.438568
            }, {
                "longitude": 127.134535,
                "latitude": 37.439742
            }, {
                "longitude": 127.128738,
                "latitude": 37.439381
            }, {
                "longitude": 127.128738,
                "latitude": 37.439381
            }, {
                "longitude": 127.134919,
                "latitude": 37.436925
            }]
        };
    }
});
