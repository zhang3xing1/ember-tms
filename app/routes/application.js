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

            zoneListInfo: [{
                    vertexes: [{
                        latitude: '37.440757758977824',
                        longitude: '127.11868286132812'
                    }, {
                        latitude: '37.43859402703046',
                        longitude: '127.1193265914917'
                    }, {
                        latitude: '37.437844373023225',
                        longitude: '127.1193265914917'
                    }, {
                        latitude: '37.435101256850075',
                        longitude: '127.11838245391846'
                    }, {
                        latitude: '37.432358040135924',
                        longitude: '127.11793184280396'
                    }, {
                        latitude: '37.43276697322763',
                        longitude: '127.12353229522705'
                    }, {
                        latitude: '37.43591909082472',
                        longitude: '127.12308168411255'
                    }, {
                        latitude: '37.43847476439526',
                        longitude: '127.12267398834229'
                    }, {
                        latitude: '37.43963330766384',
                        longitude: '127.12267398834229'
                    }, ],
                    name: 'zip_13379'
                }, {
                    vertexes: [{
                        latitude: '37.43961627039276',
                        longitude: '127.12267398834229'
                    }, {
                        latitude: '37.43947997208462',
                        longitude: '127.12329626083374'
                    }, {
                        latitude: '37.43947997208462',
                        longitude: '127.12453007698059'
                    }, {
                        latitude: '37.43947997208462',
                        longitude: '127.12589263916016'
                    }, {
                        latitude: '37.437895486034996',
                        longitude: '127.12605357170105'
                    }, {
                        latitude: '37.43791252369782',
                        longitude: '127.12496995925903'
                    }, {
                        latitude: '37.437801778820074',
                        longitude: '127.1247124671936'
                    }, {
                        latitude: '37.43647282750443',
                        longitude: '127.12429404258728'
                    }, {
                        latitude: '37.43642597302099',
                        longitude: '127.12343037128448'
                    }, {
                        latitude: '37.43639189701457',
                        longitude: '127.12300658226013'
                    }, {
                        latitude: '37.438406614232655',
                        longitude: '127.12268471717834'
                    }, ],
                    name: 'zip_13312'
                }, {
                    vertexes: [{
                        latitude: '37.436396156516224',
                        longitude: '127.12299585342407'
                    }, {
                        latitude: '37.43654949841412',
                        longitude: '127.1253776550293'
                    }, {
                        latitude: '37.43648986549116',
                        longitude: '127.12551712989807'
                    }, {
                        latitude: '37.43632800446076',
                        longitude: '127.12565660476685'
                    }, {
                        latitude: '37.436004281349796',
                        longitude: '127.12563514709473'
                    }, {
                        latitude: '37.43530571618155',
                        longitude: '127.12561368942261'
                    }, {
                        latitude: '37.43485420107934',
                        longitude: '127.12551712989807'
                    }, {
                        latitude: '37.43470085570803',
                        longitude: '127.12449789047241'
                    }, {
                        latitude: '37.4345730676586',
                        longitude: '127.12327480316162'
                    }, ],
                    name: 'zip_13315'
                }, {
                    vertexes: [{
                        latitude: '37.43275845381101',
                        longitude: '127.12352156639099'
                    }, {
                        latitude: '37.432920322561024',
                        longitude: '127.12550640106201'
                    }, {
                        latitude: '37.43342296539573',
                        longitude: '127.1288001537323'
                    }, {
                        latitude: '37.4334485234158',
                        longitude: '127.1289074420929'
                    }, {
                        latitude: '37.43376373827896',
                        longitude: '127.12884306907654'
                    }, {
                        latitude: '37.43378077688239',
                        longitude: '127.12870359420776'
                    }, {
                        latitude: '37.43440268325331',
                        longitude: '127.12783455848694'
                    }, {
                        latitude: '37.4346752981156',
                        longitude: '127.12754487991333'
                    }, {
                        latitude: '37.43485420107934',
                        longitude: '127.12750196456909'
                    }, {
                        latitude: '37.43556128956044',
                        longitude: '127.127845287323'
                    }, {
                        latitude: '37.43567203775359',
                        longitude: '127.12781310081482'
                    }, {
                        latitude: '37.43627689037844',
                        longitude: '127.12724447250366'
                    }, {
                        latitude: '37.437895486034996',
                        longitude: '127.12604284286499'
                    }, {
                        latitude: '37.43790400486688',
                        longitude: '127.12495923042297'
                    }, {
                        latitude: '37.437801778820074',
                        longitude: '127.12470173835754'
                    }, {
                        latitude: '37.43648134649829',
                        longitude: '127.12430477142334'
                    }, {
                        latitude: '37.43654097942802',
                        longitude: '127.12536692619324'
                    }, {
                        latitude: '37.43647282750443',
                        longitude: '127.12554931640625'
                    }, {
                        latitude: '37.436336523471084',
                        longitude: '127.12565660476685'
                    }, {
                        latitude: '37.435254601401034',
                        longitude: '127.12561368942261'
                    }, {
                        latitude: '37.43485420107934',
                        longitude: '127.12551712989807'
                    }, {
                        latitude: '37.43468381731404',
                        longitude: '127.12439060211182'
                    }, {
                        latitude: '37.43456454844757',
                        longitude: '127.12327480316162'
                    }, ],
                    name: 'zip_13314'
                }, {
                    vertexes: [{latitude: '37.43949700938671',longitude: '127.1258819103241'}, {latitude: '37.43949700938671',longitude: '127.1267831325531'}, {latitude: '37.43963330766384',longitude: '127.12775945663452'}, {latitude: '37.43376373827896',longitude: '127.12884306907654'}, {latitude: '37.43379781548197',longitude: '127.12870359420776'}, {latitude: '37.434428240938836',longitude: '127.12780237197876'}, {latitude: '37.4346752981156',longitude: '127.12753415107727'}, {latitude: '37.43486272025742',longitude: '127.12748050689697'}, {latitude: '37.43557832775467',longitude: '127.127845287323'}, {latitude: '37.435654999580684',longitude: '127.12782382965088'}, {latitude: '37.43626837136132',longitude: '127.12724447250366'}, {latitude: '37.437886967202125',longitude: '127.12603211402893'},],
                    name: 'zip_13313'
                }, {
                    vertexes: [{latitude: '37.43963330766384',longitude: '127.12775945663452'}, {latitude: '37.44041701793974',longitude: '127.13018417358398'}, {latitude: '37.44089405495865',longitude: '127.13175058364868'}, {latitude: '37.44009331251637',longitude: '127.13212609291077'}, {latitude: '37.43966738219432',longitude: '127.13051676750183'}, {latitude: '37.43898588863649',longitude: '127.12826371192932'}, {latitude: '37.438909220222854',longitude: '127.1278989315033'},],
                    name: 'zip_13316'
                }, {
                    vertexes: [{latitude: '37.43890070150537',longitude: '127.12788820266724'}, {latitude: '37.43917329998358',longitude: '127.1289074420929'}, {latitude: '37.43786992953348',longitude: '127.12916493415833'}, {latitude: '37.43652820094709',longitude: '127.12944388389587'}, {latitude: '37.43519922701612',longitude: '127.12967991828918'}, {latitude: '37.435054401507955',longitude: '127.12859094142914'}, {latitude: '37.437001003288934',longitude: '127.1282422542572'}, {latitude: '37.4377890005544',longitude: '127.12810277938843'},],
                    name: 'zip_13320'
                }, {
                    vertexes: [{latitude: '37.439186078012874',longitude: '127.12890207767487'}, {latitude: '37.43945015679659',longitude: '127.12980329990387'}, {latitude: '37.438819773640994',longitude: '127.13009834289551'}, {latitude: '37.43821494156764',longitude: '127.13037192821503'}, {latitude: '37.43792104252779',longitude: '127.1293956041336'}, {latitude: '37.43786992953348',longitude: '127.1291595697403'},],
                    name: 'zip_13319'
                }, {
                    vertexes: [{latitude: '37.43945015679659',longitude: '127.12980329990387'}, {latitude: '37.43987182905146',longitude: '127.13123023509979'}, {latitude: '37.439224412087675',longitude: '127.1315199136734'}, {latitude: '37.438632361408565',longitude: '127.13180422782898'}, {latitude: '37.43841513300637',longitude: '127.13109612464905'}, {latitude: '37.43821494156764',longitude: '127.13038265705109'},],
                    name: 'zip_13318'
                }, {
                    vertexes: [{latitude: '37.43988034765839',longitude: '127.13121950626373'}, {latitude: '37.44012312754812',longitude: '127.13212072849274'}, {latitude: '37.43888792342735',longitude: '127.13270008563995'}, {latitude: '37.438632361408565',longitude: '127.13180959224701'},],
                    name: 'zip_13317'
                }, {
                    vertexes: [{latitude: '37.43787418895101',longitude: '127.1291595697403'}, {latitude: '37.43791252369782',longitude: '127.12940096855164'}, {latitude: '37.43821920096553',longitude: '127.13037729263306'}, {latitude: '37.43815530997174',longitude: '127.13039338588715'}, {latitude: '37.43761010460592',longitude: '127.13064551353455'}, {latitude: '37.436966927544375',longitude: '127.13095664978027'}, {latitude: '37.43675821327025',longitude: '127.13020026683807'}, {latitude: '37.43664320719705',longitude: '127.12978720664978'}, {latitude: '37.4365452389212',longitude: '127.12943851947784'},],
                    name: 'zip_13321'
                }, {
                    vertexes: [{latitude: '37.4382106821695',longitude: '127.13037729263306'}, {latitude: '37.43816382877405',longitude: '127.13039338588715'}, {latitude: '37.43697118701328',longitude: '127.1309620141983'}, {latitude: '37.437196938519165',longitude: '127.1316808462143'}, {latitude: '37.43740565156976',longitude: '127.1323674917221'}, {latitude: '37.43753343478282',longitude: '127.13279128074646'}, {latitude: '37.43816808817484',longitude: '127.13248014450073'}, {latitude: '37.43874736442502',longitude: '127.13221192359924'}, {latitude: '37.438517358215364',longitude: '127.1314287185669'}, {latitude: '37.438406614232655',longitude: '127.13106662034988'},],
                    name: 'zip_13322'
                }, {
                    vertexes: [{latitude: '37.438751623792605',longitude: '127.13221728801727'}, {latitude: '37.43753343478282',longitude: '127.13278591632843'}, {latitude: '37.43629818791697',longitude: '127.13336527347565'}, {latitude: '37.43643875151937',longitude: '127.13383734226227'}, {latitude: '37.437669736636266',longitude: '127.13326334953308'}, {latitude: '37.438883664067525',longitude: '127.13270008563995'},],
                    name: 'zip_13323'
                }, {
                    vertexes: [{latitude: '37.436553757906786',longitude: '127.12943315505981'}, {latitude: '37.436966927544375',longitude: '127.13096737861633'}, {latitude: '37.43636208049625',longitude: '127.13124096393585'}, {latitude: '37.43573593086741',longitude: '127.13153064250946'}, {latitude: '37.435514434506324',longitude: '127.13075816631317'}, {latitude: '37.435395166963445',longitude: '127.13034510612488'}, {latitude: '37.43519922701612',longitude: '127.12967991828918'},],
                    name: 'zip_13325'
                }, {
                    vertexes: [{latitude: '37.43697118701328',longitude: '127.13096737861633'}, {latitude: '37.4375291753459',longitude: '127.1327805519104'}, {latitude: '37.43629818791697',longitude: '127.13336527347565'}, {latitude: '37.43635782099267',longitude: '127.13356375694275'}, {latitude: '37.436293928409775',longitude: '127.13357985019684'}, {latitude: '37.43573593086741',longitude: '127.13382661342621'}, {latitude: '37.435510174954494',longitude: '127.13305950164795'}, {latitude: '37.43553573226182',longitude: '127.13298976421356'}, {latitude: '37.4360979908154',longitude: '127.13271081447601'}, {latitude: '37.43573593086741',longitude: '127.13152527809143'},],
                    name: 'zip_13324'
                }, {
                    vertexes: [{latitude: '37.43643449202016',longitude: '127.1338427066803'}, {latitude: '37.43635782099267',longitude: '127.13356375694275'}, {latitude: '37.4363067069307',longitude: '127.13356912136078'}, {latitude: '37.43573167132818',longitude: '127.13382661342621'}, {latitude: '37.435510174954494',longitude: '127.13306486606598'}, {latitude: '37.43553573226182',longitude: '127.13297367095947'}, {latitude: '37.4360979908154',longitude: '127.13270545005798'}, {latitude: '37.43573167132818',longitude: '127.1315199136734'}, {latitude: '37.435514434506324',longitude: '127.1307635307312'}, {latitude: '37.43519496744633',longitude: '127.12967455387115'}, {latitude: '37.435054401507955',longitude: '127.12861239910126'}, {latitude: '37.4334485234158',longitude: '127.12890207767487'}, {latitude: '37.43356353439805',longitude: '127.12904155254364'}, {latitude: '37.43426211582694',longitude: '127.13277518749237'}, {latitude: '37.43468807691291',longitude: '127.13463127613068'},],
                    name: 'zip_13326'
                }, {
                    vertexes: [{latitude: '37.44090683269413',longitude: '127.13173985481262'}, {latitude: '37.44013590541523',longitude: '127.1321153640747'}, {latitude: '37.44066831460552',longitude: '127.1338963508606'}, {latitude: '37.441132572327696',longitude: '127.13551640510559'}, {latitude: '37.44058738865273',longitude: '127.13576853275299'}, {latitude: '37.44087275872801',longitude: '127.13670194149017'}, {latitude: '37.441413681108024',longitude: '127.13646054267883'}, {latitude: '37.442163299359315',longitude: '127.13610649108887'}, {latitude: '37.441882193395124',longitude: '127.1351569890976'}, {latitude: '37.4413966442423',longitude: '127.1335369348526'},],
                    name: 'zip_13327'
                }, {
                    vertexes: [{latitude: '37.440672573863786',longitude: '127.13388562202454'}, {latitude: '37.439416082167206',longitude: '127.13447570800781'}, {latitude: '37.439663122878876',longitude: '127.13527500629425'}, {latitude: '37.43990590347334',longitude: '127.13609576225281'}, {latitude: '37.440178498289875',longitude: '127.13703453540802'}, {latitude: '37.44087275872801',longitude: '127.1367073059082'}, {latitude: '37.44058738865273',longitude: '127.13576316833496'}, {latitude: '37.44114109079109',longitude: '127.13551104068756'}, {latitude: '37.44089831420405',longitude: '127.13470101356506'},],
                    name: 'zip_13328'
                }, {
                    vertexes: [{latitude: '37.43888792342735',longitude: '127.13269740343094'}, {latitude: '37.43765908806291',longitude: '127.1332660317421'}, {latitude: '37.437929561356775',longitude: '127.13415652513504'}, {latitude: '37.438185125775604',longitude: '127.135049700737'}, {latitude: '37.438634491095634',longitude: '127.13484317064285'}, {latitude: '37.43910089110966',longitude: '127.13462322950363'}, {latitude: '37.43941821183199',longitude: '127.13447570800781'}, {latitude: '37.43914987359085',longitude: '127.1335905790329'},],
                    name: 'zip_13330'
                }, {
                    vertexes: [{latitude: '37.43942460082599',longitude: '127.13447570800781'}, {latitude: '37.43816382877405',longitude: '127.13506042957306'}, {latitude: '37.438423651779125',longitude: '127.13583827018738'}, {latitude: '37.438666436394826',longitude: '127.13666439056396'}, {latitude: '37.43886662662579',longitude: '127.13734030723572'}, {latitude: '37.439045519570556',longitude: '127.13800549507141'}, {latitude: '37.439177559326914',longitude: '127.13771045207977'}, {latitude: '37.43931385818588',longitude: '127.13750123977661'}, {latitude: '37.439518306008864',longitude: '127.13732421398163'}, {latitude: '37.439829236002296',longitude: '127.13718473911285'}, {latitude: '37.440178498289875',longitude: '127.13702917098999'}, {latitude: '37.43989312556695',longitude: '127.13607430458069'}, {latitude: '37.43965460424722',longitude: '127.13526427745819'},],
                    name: 'zip_13331'
                }, {
                    vertexes: [{latitude: '37.43818086637578',longitude: '127.135049700737'}, {latitude: '37.436949889666266',longitude: '127.13562905788422'}, {latitude: '37.4371884196068',longitude: '127.13642835617065'}, {latitude: '37.437435467672316',longitude: '127.13723838329315'}, {latitude: '37.437848632442204',longitude: '127.13799476623535'}, {latitude: '37.4386153239096',longitude: '127.13936805725098'}, {latitude: '37.4387218082144',longitude: '127.13905692100525'}, {latitude: '37.439045519570556',longitude: '127.13799476623535'}, {latitude: '37.438853848541946',longitude: '127.13728129863739'}, {latitude: '37.43866217702239',longitude: '127.13665902614594'}, {latitude: '37.438423651779125',longitude: '127.13582754135132'},],
                    name: 'zip_13332'
                }, {
                    vertexes: [{latitude: '37.43642171352104',longitude: '127.1338427066803'}, {latitude: '37.43669858051363',longitude: '127.1347439289093'}, {latitude: '37.436949889666266',longitude: '127.13562369346619'}, {latitude: '37.43629818791697',longitude: '127.13590800762177'}, {latitude: '37.43552721316033',longitude: '127.13627815246582'}, {latitude: '37.43510551642518',longitude: '127.1365088224411'}, {latitude: '37.43483716272026',longitude: '127.13559687137604'}, {latitude: '37.43468381731404',longitude: '127.13462591171265'},],
                    name: 'zip_13334'
                }, {
                    vertexes: [{latitude: '37.436954149136135',longitude: '127.13562369346619'}, {latitude: '37.4374312082298',longitude: '127.13724911212921'}, {latitude: '37.436792289109874',longitude: '127.13753342628479'}, {latitude: '37.43640893501973',longitude: '127.1377158164978'}, {latitude: '37.43619595967671',longitude: '127.13784992694855'}, {latitude: '37.435893533648276',longitude: '127.13808596134186'}, {latitude: '37.43539942652181',longitude: '127.13729739189148'}, {latitude: '37.43510551642518',longitude: '127.13649809360504'}, {latitude: '37.43553573226182',longitude: '127.13627278804779'}, {latitude: '37.43631096643721',longitude: '127.13590264320374'},],
                    name: 'zip_13335'
                }, {
                    vertexes: [{latitude: '37.437443986556566',longitude: '127.13724911212921'}, {latitude: '37.437989193132566',longitude: '127.13827908039093'}, {latitude: '37.4386153239096',longitude: '127.13938415050507'}, {latitude: '37.438551433254',longitude: '127.13957190513611'}, {latitude: '37.4383725391281',longitude: '127.13991522789001'}, {latitude: '37.4381723475754',longitude: '127.14015126228333'}, {latitude: '37.437435467672316',longitude: '127.13875651359558'}, {latitude: '37.436800808067346',longitude: '127.13753879070282'},],
                    name: 'zip_13336'
                }, {
                    vertexes: [{latitude: '37.43680506754574',longitude: '127.13752806186676'}, {latitude: '37.4374312082298',longitude: '127.13875114917755'}, {latitude: '37.43817660697571',longitude: '127.14015126228333'}, {latitude: '37.4379934525433',longitude: '127.14043021202087'}, {latitude: '37.43756751026945',longitude: '127.14097738265991'}, {latitude: '37.43699674382171',longitude: '127.13996350765228'}, {latitude: '37.436711358965475',longitude: '127.13943243026733'}, {latitude: '37.43616188356557',longitude: '127.13846683502197'}, {latitude: '37.435889274118026',longitude: '127.13809132575989'}, {latitude: '37.4362002191895',longitude: '127.13784456253052'}, {latitude: '37.43641745402084',longitude: '127.13769972324371'},],
                    name: 'zip_13337'
                }, {
                    vertexes: [{latitude: '37.440140164703784',longitude: '127.13213682174683'}, {latitude: '37.43888792342735',longitude: '127.13271081447601'}, {latitude: '37.43904126021971',longitude: '127.13320434093475'}, {latitude: '37.43910089110966',longitude: '127.13339745998383'}, {latitude: '37.439156262607774',longitude: '127.13359594345093'}, {latitude: '37.43943311948383',longitude: '127.13446497917175'}, {latitude: '37.440672573863786',longitude: '127.13389098644257'},],
                    name: 'zip_13329'
                }, {
                    vertexes: [{latitude: '37.437661217777716',longitude: '127.1332660317421'}, {latitude: '37.436428102770854',longitude: '127.13384002447128'}, {latitude: '37.436700710255764',longitude: '127.1347439289093'}, {latitude: '37.43694775993123',longitude: '127.1356263756752'}, {latitude: '37.438185125775604',longitude: '127.13504701852798'}, {latitude: '37.43792743164962',longitude: '127.134148478508'},],
                    name: 'zip_13330'
                }



            ],


            parcelListInfo: {
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
            }
        }
    }
});
