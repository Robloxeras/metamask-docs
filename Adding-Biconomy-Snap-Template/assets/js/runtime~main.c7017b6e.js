(()=>{"use strict";var e,a,c,f,d,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,e=[],t.O=(a,c,f,d)=>{if(!c){var b=1/0;for(n=0;n<e.length;n++){c=e[n][0],f=e[n][1],d=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&d||b>=d)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,d<b&&(b=d));if(r){e.splice(n--,1);var l=f();void 0!==l&&(a=l)}}return a}d=d||0;for(var n=e.length;n>0&&e[n-1][2]>d;n--)e[n]=e[n-1];e[n]=[c,f,d]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(d,b),d},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({40:"8145e54e",53:"935f2afb",59:"e1aa5429",157:"652081cc",167:"486ba757",241:"08e8a6e5",260:"3e112a3e",261:"reactPlayerKaltura",368:"41f5386a",429:"6e952c2e",467:"68c6b286",479:"82c9c8ff",582:"ef8d09aa",690:"47fa8f02",795:"63b87658",825:"03c51261",857:"bbed259b",941:"2ca6782d",1145:"40d431ee",1234:"669925fe",1262:"63b09469",1321:"d2baf1b2",1402:"3ee3d2fe",1511:"682638a2",1624:"eb2b80f1",1752:"f5e9b272",1764:"17a18c8c",1835:"bdecca60",1858:"86c686bd",2044:"aee6d0cb",2071:"fd6c27b9",2088:"c29e371a",2121:"reactPlayerFacebook",2144:"66a99382",2164:"c66e041d",2176:"b6db0fd4",2177:"fd774138",2197:"03e748d8",2250:"4ecdda4a",2257:"95c87532",2274:"4efa9f2e",2325:"6e004e16",2330:"52198f09",2350:"18e5589a",2472:"ce634f1e",2546:"reactPlayerStreamable",2583:"2a5de1af",2741:"c3be8443",2744:"f4fa537f",2777:"4fcf1f0e",2794:"577b8b2a",2797:"a2353af7",2922:"416e56d6",2928:"d2011f4f",3054:"68c12626",3109:"54f1853a",3115:"97c42b41",3237:"1df93b7f",3247:"93fa50ba",3264:"8329f30e",3316:"d5f74ffe",3371:"55d0cf22",3634:"f6d13bb3",3660:"df3ffe2a",3743:"reactPlayerVimeo",3751:"3720c009",3791:"b223888a",3805:"91efdb01",3899:"bb0a09d2",4121:"55960ee5",4140:"501c7dd0",4151:"ff576332",4192:"037997aa",4232:"7976d7e4",4257:"9cea254b",4283:"c66adc2f",4328:"573e544f",4332:"1d0adbbf",4397:"3cc70d16",4439:"reactPlayerYouTube",4442:"ba7d2542",4467:"177a052f",4514:"0db58064",4646:"56d3cc0a",4657:"b099eb42",4667:"reactPlayerMixcloud",4717:"ef105518",4750:"3e786943",4779:"d172f854",4832:"f8a3ce18",4880:"fbd1eabb",4957:"2150471b",5193:"9819129e",5216:"66ba7e9e",5412:"7d4adaa7",5413:"1372b327",5473:"f5000f06",5576:"3d86cae6",5580:"fd49626c",5643:"19fab523",5712:"66d369c7",5774:"406cc3cd",5812:"f0c90a0b",5866:"fef04676",5965:"2e39c2b3",5980:"9683decc",6002:"6380b8b5",6011:"reactPlayerFilePlayer",6125:"reactPlayerSoundCloud",6147:"c455d87c",6216:"reactPlayerTwitch",6325:"46731dd0",6336:"9947d6d2",6343:"ab4cafa2",6414:"01eb5b38",6423:"77a46a80",6439:"c5e4f5c1",6453:"4a530d18",6487:"ad36dd7c",6556:"2c1888ff",6570:"903ae864",6595:"ab85252c",6652:"1475a072",6655:"70334ba8",6718:"6721d267",6753:"ee067fe3",6754:"cfc76383",7050:"11b7fc92",7097:"6bfc7b01",7194:"01740467",7232:"a4b00f5e",7266:"5e56b9d4",7318:"5625bc05",7340:"ce260bbc",7382:"d70a1ef5",7385:"537b678a",7440:"9edebb4e",7502:"57e75615",7523:"f8f7b6b2",7531:"cb2c0fed",7596:"reactPlayerDailyMotion",7612:"72448035",7664:"reactPlayerPreview",7698:"31bfc0a5",7714:"839511b6",7918:"17896441",7920:"1a4e3797",8035:"a547f12b",8055:"reactPlayerWistia",8078:"d058e3e1",8098:"dfe67240",8301:"4ad67257",8313:"286d8836",8371:"5a6432d3",8447:"d4b4a7ff",8669:"56aa118c",8742:"6ebf937c",8756:"3925c87d",8778:"b91521d0",8812:"f760ba82",8819:"ba4cac81",8888:"reactPlayerVidyard",8930:"debbc54f",8931:"cf946124",8937:"2c7781db",9048:"95fa971a",9057:"94590018",9231:"58ef1b6a",9304:"49f67c63",9329:"ab8b636d",9360:"453c9f5d",9447:"f2a2f6e4",9481:"7fd521e9",9514:"1be78505",9548:"fe7415f5",9817:"14eb3368",9905:"502824f3",9924:"df203c0f",9978:"10737780",9980:"284a1a9e"}[e]||e)+"."+{40:"2bf66ec0",53:"222a2b4d",59:"bba3e73d",157:"cec6984f",167:"82c32527",241:"b3d501dd",260:"df52716f",261:"091ed2a3",368:"bd2e9515",429:"195e4eea",467:"70b231eb",479:"f061c52e",582:"b5a01b9d",690:"787beb64",795:"6a464cfa",825:"e83fee2f",857:"da1af99b",941:"0946691e",1145:"5a060880",1234:"cb8e5e87",1262:"38b8a258",1321:"419d89f7",1402:"dfb80f2c",1426:"be64a7dc",1511:"b546bde4",1624:"cb21a1cf",1752:"7e2c8063",1764:"1e8d389f",1835:"ae0f3b3f",1858:"a407644c",2044:"1d1cf6b1",2071:"cf3d79d4",2088:"ff6bdbf4",2121:"697cc207",2144:"ad038109",2164:"073ea004",2176:"28b89dc5",2177:"848293dc",2197:"30c88d04",2250:"e808e852",2257:"d81aa2c1",2274:"7539caee",2325:"36849b97",2330:"95c867d4",2350:"96bae3f1",2472:"830d68ec",2546:"4582143a",2583:"bccf52e7",2741:"4478b283",2744:"67935d9c",2777:"57501e60",2794:"c9840aef",2797:"778996b1",2922:"c6514b95",2928:"b9c9c3e8",3054:"bb666ab9",3109:"eb5c1552",3115:"d103270f",3237:"f520a0b3",3247:"b1e8bdf5",3264:"a0fde4fb",3316:"d2d8e9a5",3371:"68284447",3634:"4e992cb6",3660:"07c6536b",3743:"42a0d9c0",3751:"df3385d2",3791:"ea664450",3805:"b66c51a3",3899:"b65e9120",4121:"e68001cc",4140:"9a0393fe",4151:"9492b65f",4192:"67091895",4232:"77128a73",4257:"25bd899f",4283:"ce0f00d1",4328:"8e212433",4332:"62aa2d46",4397:"95b69a55",4439:"a9b14741",4442:"5eef892b",4467:"7ec6492e",4514:"bfba98e0",4646:"47bc8dd9",4657:"5455053c",4667:"3aafbc0c",4717:"7869eeda",4750:"2c1c42e9",4779:"40472d55",4832:"1b4a3783",4880:"41c89cd5",4957:"63f92c90",4972:"e49176b8",5193:"4c58e4ea",5216:"446c490d",5412:"e35b9cc6",5413:"e2d64cb2",5473:"62a5e676",5576:"f4baf27a",5580:"30e42fcb",5643:"25614e37",5712:"088883d0",5774:"b0266b97",5812:"cc0946bf",5866:"a4adee49",5965:"2dd89bd2",5980:"089d77d4",6002:"91ccfa0a",6011:"98545a61",6125:"bacff259",6147:"33613dfa",6216:"d718da62",6316:"d9003c37",6325:"d9f70f5c",6336:"e8effcfa",6343:"4e71b771",6414:"a2799d2a",6423:"4d61e6f3",6439:"cb2626c5",6453:"21e0d7e0",6487:"5a1fa1d5",6556:"8f246e67",6570:"309b15a0",6595:"c1edc27d",6652:"36ed78f1",6655:"cec225d7",6718:"c0c2178b",6753:"23c21a23",6754:"5c9d14bb",6760:"d1120f0d",6945:"07888cb2",7050:"2fdff910",7097:"42070dfe",7194:"a2b4ebaf",7232:"27896417",7266:"82f7093d",7318:"383878e9",7340:"4e191e87",7382:"ee8f504e",7385:"16b715d6",7440:"accaddeb",7502:"2a67b106",7523:"cda47842",7531:"c1ef6a86",7596:"a49c1936",7612:"d5a28554",7664:"9db1cd05",7698:"32823ef4",7714:"3729b587",7724:"df7eb109",7918:"dbcdf1b4",7920:"3b179cfe",8035:"bc73c353",8055:"508ea7c7",8078:"2b59a6fb",8098:"b5576c46",8301:"f854cc29",8313:"1a5e471e",8371:"f0bf7aed",8447:"85011331",8669:"d657d635",8685:"19ce8911",8742:"2d8cedde",8756:"a10f08ca",8778:"7436ab0b",8812:"01ca6aba",8819:"72081001",8888:"1189c126",8894:"814fc599",8930:"ae4a4a31",8931:"72c86d70",8937:"157847e1",9048:"90578476",9057:"31dc2a18",9231:"8d12429c",9304:"26a15d84",9329:"87a49987",9360:"7215e261",9447:"50bc4820",9481:"259b34a3",9487:"e0727ae8",9514:"bf7c0fe3",9548:"26c00770",9701:"3bfec2d8",9817:"f9ec2b68",9876:"ee4589f6",9905:"663dd4cd",9924:"8cde9cdd",9978:"aca7b9b8",9980:"5f666888",9984:"3e5c17e0"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},d="metamask-docs:",t.l=(e,a,c,b)=>{if(f[e])f[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+c),r.src=e),f[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/Adding-Biconomy-Snap-Template/",t.gca=function(e){return e={10737780:"9978",17896441:"7918",72448035:"7612",94590018:"9057","8145e54e":"40","935f2afb":"53",e1aa5429:"59","652081cc":"157","486ba757":"167","08e8a6e5":"241","3e112a3e":"260",reactPlayerKaltura:"261","41f5386a":"368","6e952c2e":"429","68c6b286":"467","82c9c8ff":"479",ef8d09aa:"582","47fa8f02":"690","63b87658":"795","03c51261":"825",bbed259b:"857","2ca6782d":"941","40d431ee":"1145","669925fe":"1234","63b09469":"1262",d2baf1b2:"1321","3ee3d2fe":"1402","682638a2":"1511",eb2b80f1:"1624",f5e9b272:"1752","17a18c8c":"1764",bdecca60:"1835","86c686bd":"1858",aee6d0cb:"2044",fd6c27b9:"2071",c29e371a:"2088",reactPlayerFacebook:"2121","66a99382":"2144",c66e041d:"2164",b6db0fd4:"2176",fd774138:"2177","03e748d8":"2197","4ecdda4a":"2250","95c87532":"2257","4efa9f2e":"2274","6e004e16":"2325","52198f09":"2330","18e5589a":"2350",ce634f1e:"2472",reactPlayerStreamable:"2546","2a5de1af":"2583",c3be8443:"2741",f4fa537f:"2744","4fcf1f0e":"2777","577b8b2a":"2794",a2353af7:"2797","416e56d6":"2922",d2011f4f:"2928","68c12626":"3054","54f1853a":"3109","97c42b41":"3115","1df93b7f":"3237","93fa50ba":"3247","8329f30e":"3264",d5f74ffe:"3316","55d0cf22":"3371",f6d13bb3:"3634",df3ffe2a:"3660",reactPlayerVimeo:"3743","3720c009":"3751",b223888a:"3791","91efdb01":"3805",bb0a09d2:"3899","55960ee5":"4121","501c7dd0":"4140",ff576332:"4151","037997aa":"4192","7976d7e4":"4232","9cea254b":"4257",c66adc2f:"4283","573e544f":"4328","1d0adbbf":"4332","3cc70d16":"4397",reactPlayerYouTube:"4439",ba7d2542:"4442","177a052f":"4467","0db58064":"4514","56d3cc0a":"4646",b099eb42:"4657",reactPlayerMixcloud:"4667",ef105518:"4717","3e786943":"4750",d172f854:"4779",f8a3ce18:"4832",fbd1eabb:"4880","2150471b":"4957","9819129e":"5193","66ba7e9e":"5216","7d4adaa7":"5412","1372b327":"5413",f5000f06:"5473","3d86cae6":"5576",fd49626c:"5580","19fab523":"5643","66d369c7":"5712","406cc3cd":"5774",f0c90a0b:"5812",fef04676:"5866","2e39c2b3":"5965","9683decc":"5980","6380b8b5":"6002",reactPlayerFilePlayer:"6011",reactPlayerSoundCloud:"6125",c455d87c:"6147",reactPlayerTwitch:"6216","46731dd0":"6325","9947d6d2":"6336",ab4cafa2:"6343","01eb5b38":"6414","77a46a80":"6423",c5e4f5c1:"6439","4a530d18":"6453",ad36dd7c:"6487","2c1888ff":"6556","903ae864":"6570",ab85252c:"6595","1475a072":"6652","70334ba8":"6655","6721d267":"6718",ee067fe3:"6753",cfc76383:"6754","11b7fc92":"7050","6bfc7b01":"7097","01740467":"7194",a4b00f5e:"7232","5e56b9d4":"7266","5625bc05":"7318",ce260bbc:"7340",d70a1ef5:"7382","537b678a":"7385","9edebb4e":"7440","57e75615":"7502",f8f7b6b2:"7523",cb2c0fed:"7531",reactPlayerDailyMotion:"7596",reactPlayerPreview:"7664","31bfc0a5":"7698","839511b6":"7714","1a4e3797":"7920",a547f12b:"8035",reactPlayerWistia:"8055",d058e3e1:"8078",dfe67240:"8098","4ad67257":"8301","286d8836":"8313","5a6432d3":"8371",d4b4a7ff:"8447","56aa118c":"8669","6ebf937c":"8742","3925c87d":"8756",b91521d0:"8778",f760ba82:"8812",ba4cac81:"8819",reactPlayerVidyard:"8888",debbc54f:"8930",cf946124:"8931","2c7781db":"8937","95fa971a":"9048","58ef1b6a":"9231","49f67c63":"9304",ab8b636d:"9329","453c9f5d":"9360",f2a2f6e4:"9447","7fd521e9":"9481","1be78505":"9514",fe7415f5:"9548","14eb3368":"9817","502824f3":"9905",df203c0f:"9924","284a1a9e":"9980"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var f=t.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((c,d)=>f=e[a]=[c,d]));c.push(f[2]=d);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",r.name="ChunkLoadError",r.type=d,r.request=b,f[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var f,d,b=c[0],r=c[1],o=c[2],l=0;if(b.some((a=>0!==e[a]))){for(f in r)t.o(r,f)&&(t.m[f]=r[f]);if(o)var n=o(t)}for(a&&a(c);l<b.length;l++)d=b[l],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(n)},c=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();