if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>d(e,c),s={module:{uri:c},exports:f,require:n};i[c]=Promise.all(a.map((e=>s[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/09/May-9/index.html",revision:"f2bf38417c8b377a2d6a98e17c6b9370"},{url:"2022/05/10/May-10/index.html",revision:"5935b0d3207581e6256222878ec4db4d"},{url:"2022/05/10/test/index.html",revision:"8573d6c89d521cc729774947150f77db"},{url:"2022/05/10/叹/index.html",revision:"7bc5ec43791c4da2382d7c918e4b7572"},{url:"2022/05/11/May-11/index.html",revision:"789d75087695a97d5190f899f36c0fba"},{url:"2022/05/12/May-12/index.html",revision:"6c2359c964328726e74a94ca53f3b460"},{url:"2022/05/12/musicTest/index.html",revision:"602cd799e181aad943d1494e07f3740b"},{url:"2022/05/13/hello-world/index.html",revision:"2111470e84193287ca8ad08f2ed779a4"},{url:"2022/05/13/May-13/cainiao.png",revision:"daefba254d995b3eef6e558c0f8e96f4"},{url:"2022/05/13/May-13/index.html",revision:"13c38b5e36ab238ec80f8220930895ad"},{url:"2022/05/13/May-13/me.png",revision:"1fbc61a836b13b82538ce7336a841cd9"},{url:"2022/05/14/May-14/index.html",revision:"be4a9f6fb54171322daa04d8d1fb2de4"},{url:"404.html",revision:"0d3652a814cbed8fa5c7945f24280123"},{url:"archives/2022/05/index.html",revision:"ea9605f747b0674f6057db89d6ce9b80"},{url:"archives/2022/index.html",revision:"d9a36a9925a9ec9083360b71a52c9cbe"},{url:"archives/index.html",revision:"7366392b36630fa20a980313f68c2cb5"},{url:"categories/index.html",revision:"73897e69f08d8515f0adc52edcd66a47"},{url:"categories/其他/index.html",revision:"3b253e7e0b19e41eb174167d4f49aafb"},{url:"categories/收藏库/index.html",revision:"874a3f7f65796bed2c0df0d3162921e1"},{url:"categories/生活志/index.html",revision:"bf2474856e079f79d31317e7e80e501a"},{url:"css/font.css",revision:"d646dc68e8cec140cabe8e673c646e77"},{url:"css/index.css",revision:"eb0a304eee0e1f28caebb787f23dedcc"},{url:"css/mouse.css",revision:"6b0f0e04d2754c773f89fa46c4cdb5d9"},{url:"css/move.js",revision:"d446b3b4f7616a4d085fd385fe3a51fa"},{url:"css/No.025-Sounso-Warm-2.ttf",revision:"5c3dff6e964a789f8b0a49c69210e2f5"},{url:"css/QingSongShouXieTi1-2.ttf",revision:"0ef5945678e626f329b54284084f9084"},{url:"css/sweetalert.css",revision:"58e928a00e49d9ad090e7062f07c6076"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/123.png",revision:"a07ca62297ff179c48ca39709745429c"},{url:"img/124.png",revision:"6f1bd4798ef925153e7f08be4ba94568"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"d51accd19b80e7a4f2883a18dd0f309b"},{url:"img/back.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/background.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/book.png",revision:"709924742350ffd5526b57bdd8a124b0"},{url:"img/bookx.jpg",revision:"45dbc18e1ae8e93a9fd067f9b2d48a7b"},{url:"img/categories.jpg",revision:"ca36e607f450b7d8c7e0d02e79d32aa2"},{url:"img/category.jpg",revision:"b04c091f827e165878cdbe5108c54151"},{url:"img/foot.jpg",revision:"fba2e56597ebe3db3e1cd10acc7c7222"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/juzi.jpg",revision:"9c941c893fe4c2b0f11cc9560ed4f481"},{url:"img/library.jpg",revision:"e03b07966763991f825494d97522831d"},{url:"img/libraryx.jpg",revision:"618a1e882488799ea2f82a45633cfcf5"},{url:"img/me.jpg",revision:"40daf11ad1dcc3e1d5fade166a516ea0"},{url:"img/mywexin.jpg",revision:"48c923df36e3b29b284ba0e7f141bb51"},{url:"img/noname.jpg",revision:"1c0fc470b937b4f270922f972df59663"},{url:"img/other.jpg",revision:"c41d51e2debe00a9d0632497feed7a68"},{url:"img/pen.jpg",revision:"effed599eafd6f9abe81b9793faf45c1"},{url:"img/pikachu.png",revision:"76f027c1d8ea2170cedd976017330331"},{url:"img/pwa/android-chrome-144x144.png",revision:"203b1370c64759eecad6fb8e149894ac"},{url:"img/pwa/android-chrome-192x192.png",revision:"f423d2a6d9f51cd0d92526993a222bf0"},{url:"img/pwa/android-chrome-256x256.png",revision:"56b4b8611c59223519d3f093cbc780d3"},{url:"img/pwa/android-chrome-36x36.png",revision:"695c851264fa2ece1372aae970664f52"},{url:"img/pwa/android-chrome-48x48.png",revision:"ae5925a8c327d9fe7b662fde1113c032"},{url:"img/pwa/android-chrome-72x72.png",revision:"474c2a63d71e1b4f848a9b0752620492"},{url:"img/pwa/android-chrome-96x96.png",revision:"4cb9f8aba8be912b83b29134dd88c28c"},{url:"img/pwa/apple-touch-icon.png",revision:"b0cd00ac17081d2ad86b38b9d02aff6c"},{url:"img/pwa/favicon-16x16.png",revision:"41bea5a4f0b09f5b72f075c96024c0a8"},{url:"img/pwa/favicon-32x32.png",revision:"13f055e47a16e568d487a62310b1d956"},{url:"img/pwa/mstile-150x150.png",revision:"868c275ea45d13e5ec4d5cae45aa108f"},{url:"img/pwa/README.html",revision:"daabff3d9a8bbb05d388dc041da4e503"},{url:"img/pwa/safari-pinned-tab.svg",revision:"0a69442ff107960a5692e071a98475f0"},{url:"img/qq.jpg",revision:"26404fda3249041f4d41669d92bda7a8"},{url:"img/room.jpg",revision:"cd1470265e235add33b2c046447b4f07"},{url:"img/tag.jpg",revision:"649a3cc3b89e364f156c9d6e9e2428f7"},{url:"img/tags.jpg",revision:"7116fe00901acd5232846178d5aaff82"},{url:"img/trouble.jpg",revision:"2bd93513d36a826ee477af34fd85a8a8"},{url:"img/wexin.jpg",revision:"f5ab91afeefa75da7776569513257f96"},{url:"img/zhifubao.jpg",revision:"cb3346a351b20bbb8674bb96851f6ac1"},{url:"img/微信.svg",revision:"0fc8d5050f7b2be755dd0ada471ef21d"},{url:"index.html",revision:"67e755cc9e1fcb630d8c7aecb72ba9eb"},{url:"js/choco.js",revision:"bbf233bcf2fa0085282076ee1383be46"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sweetalert.js",revision:"58ad886f69f1b6f9aa6d153daf656433"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"6c0ceeb090908c17c9d011d85127dbef"},{url:"link/index.html",revision:"d921693fcff8f7255a0cf7aedd24aafc"},{url:"page/2/index.html",revision:"32140df8041d2019fdc96bfe84933ca2"},{url:"sw-register.js",revision:"766feab06a2f2de5fbf41a81b3926595"},{url:"sw.js",revision:"3a8d5a875d3b53b5cf2a3ad3411e1417"},{url:"tags/index.html",revision:"68dd919ddbbfe16d8e6210da69d3f79e"},{url:"tags/其他/index.html",revision:"b2ccd50cd20bb0991bb6cc0964be9858"},{url:"tags/好句/index.html",revision:"73c51dcdd518cf62bc1a377b35a8c5fd"},{url:"tags/随笔/index.html",revision:"eb0b07f305d1cb64f4ec8583d704a5f0"},{url:"法考/index.html",revision:"6871914b069f289c407c0f92ce215fa1"},{url:"留言板/index.html",revision:"43b5cfd50a103973f21c3b69ed1a7e81"},{url:"编程/index.html",revision:"fbac4920bd9a6c8c2b61f96b3af8bfe8"},{url:"考研/index.html",revision:"e1a934bbc293117053cdcd5093ef6fe2"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
