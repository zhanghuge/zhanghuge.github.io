if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>d(e,c),s={module:{uri:c},exports:f,require:n};i[c]=Promise.all(r.map((e=>s[e]||n(e)))).then((e=>(a(...e),f)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/09/May-9/index.html",revision:"5bab037fc79489e86d90313b4094cce0"},{url:"2022/05/10/May-10/index.html",revision:"c8357c1d33a8ba1dc81f2b478af3b84d"},{url:"2022/05/10/test/index.html",revision:"f8377cef91b6fd5a36e2dbff76b0df9c"},{url:"2022/05/10/叹/index.html",revision:"77e3cd3f5374aec9c03e0f1e93e4e77f"},{url:"2022/05/11/May-11/index.html",revision:"2cd410b32b708e630ad86d896671c100"},{url:"2022/05/12/May-12/index.html",revision:"de4a8a15477716dcc3ada1cd105103d6"},{url:"2022/05/12/musicTest/index.html",revision:"aa9c007155c78866b2d1438e075f5770"},{url:"2022/05/13/hello-world/index.html",revision:"2809aad81e2d977974dd343e4ffbacb3"},{url:"2022/05/13/May-13/cainiao.png",revision:"daefba254d995b3eef6e558c0f8e96f4"},{url:"2022/05/13/May-13/index.html",revision:"3dc9005ad3d76e7fa282c228481fe4ca"},{url:"2022/05/13/May-13/me.png",revision:"1fbc61a836b13b82538ce7336a841cd9"},{url:"2022/05/14/May-14/index.html",revision:"b538b526407134663a62b7ea8b3581e3"},{url:"404.html",revision:"d45d70cf2cf98b990b38cd034d28fc22"},{url:"archives/2022/05/index.html",revision:"4a074e44f1db2785fccac56d1bb62dc6"},{url:"archives/2022/index.html",revision:"5c70fb3ec28827914e7e410195a688ee"},{url:"archives/index.html",revision:"d37fa13acfe14a5cf6ee26eecf06cd52"},{url:"categories/index.html",revision:"1ee76eeae6fc6fba001fcdbdf9834744"},{url:"categories/其他/index.html",revision:"99e248e4da8c0e93c16c6dae7c666450"},{url:"categories/收藏库/index.html",revision:"be2a9a5d23cf3d1fb26e423d44f096b8"},{url:"categories/生活志/index.html",revision:"77ed765f84ad50598cdcc3b48791c552"},{url:"css/font.css",revision:"d646dc68e8cec140cabe8e673c646e77"},{url:"css/index.css",revision:"eb0a304eee0e1f28caebb787f23dedcc"},{url:"css/mouse.css",revision:"b349bbc7245cdc73d75220d1f742f306"},{url:"css/No.025-Sounso-Warm-2.ttf",revision:"5c3dff6e964a789f8b0a49c69210e2f5"},{url:"css/QingSongShouXieTi1-2.ttf",revision:"0ef5945678e626f329b54284084f9084"},{url:"css/sweetalert.css",revision:"58e928a00e49d9ad090e7062f07c6076"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/123.png",revision:"a07ca62297ff179c48ca39709745429c"},{url:"img/124.png",revision:"6f1bd4798ef925153e7f08be4ba94568"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"d51accd19b80e7a4f2883a18dd0f309b"},{url:"img/back.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/background.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/book.png",revision:"709924742350ffd5526b57bdd8a124b0"},{url:"img/bookx.jpg",revision:"45dbc18e1ae8e93a9fd067f9b2d48a7b"},{url:"img/categories.jpg",revision:"ca36e607f450b7d8c7e0d02e79d32aa2"},{url:"img/category.jpg",revision:"b04c091f827e165878cdbe5108c54151"},{url:"img/foot.jpg",revision:"fba2e56597ebe3db3e1cd10acc7c7222"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/juzi.jpg",revision:"9c941c893fe4c2b0f11cc9560ed4f481"},{url:"img/library.jpg",revision:"e03b07966763991f825494d97522831d"},{url:"img/libraryx.jpg",revision:"618a1e882488799ea2f82a45633cfcf5"},{url:"img/me.jpg",revision:"40daf11ad1dcc3e1d5fade166a516ea0"},{url:"img/mywexin.jpg",revision:"48c923df36e3b29b284ba0e7f141bb51"},{url:"img/noname.jpg",revision:"1c0fc470b937b4f270922f972df59663"},{url:"img/other.jpg",revision:"c41d51e2debe00a9d0632497feed7a68"},{url:"img/pen.jpg",revision:"effed599eafd6f9abe81b9793faf45c1"},{url:"img/pikachu.png",revision:"76f027c1d8ea2170cedd976017330331"},{url:"img/pwa/android-chrome-144x144.png",revision:"203b1370c64759eecad6fb8e149894ac"},{url:"img/pwa/android-chrome-192x192.png",revision:"f423d2a6d9f51cd0d92526993a222bf0"},{url:"img/pwa/android-chrome-256x256.png",revision:"56b4b8611c59223519d3f093cbc780d3"},{url:"img/pwa/android-chrome-36x36.png",revision:"695c851264fa2ece1372aae970664f52"},{url:"img/pwa/android-chrome-48x48.png",revision:"ae5925a8c327d9fe7b662fde1113c032"},{url:"img/pwa/android-chrome-72x72.png",revision:"474c2a63d71e1b4f848a9b0752620492"},{url:"img/pwa/android-chrome-96x96.png",revision:"4cb9f8aba8be912b83b29134dd88c28c"},{url:"img/pwa/apple-touch-icon.png",revision:"b0cd00ac17081d2ad86b38b9d02aff6c"},{url:"img/pwa/favicon-16x16.png",revision:"41bea5a4f0b09f5b72f075c96024c0a8"},{url:"img/pwa/favicon-32x32.png",revision:"13f055e47a16e568d487a62310b1d956"},{url:"img/pwa/mstile-150x150.png",revision:"868c275ea45d13e5ec4d5cae45aa108f"},{url:"img/pwa/README.html",revision:"6adaaa5363b47b5839b6a2e3f6eebde0"},{url:"img/pwa/safari-pinned-tab.svg",revision:"0a69442ff107960a5692e071a98475f0"},{url:"img/qq.jpg",revision:"26404fda3249041f4d41669d92bda7a8"},{url:"img/room.jpg",revision:"cd1470265e235add33b2c046447b4f07"},{url:"img/tag.jpg",revision:"649a3cc3b89e364f156c9d6e9e2428f7"},{url:"img/tags.jpg",revision:"7116fe00901acd5232846178d5aaff82"},{url:"img/trouble.jpg",revision:"2bd93513d36a826ee477af34fd85a8a8"},{url:"img/wexin.jpg",revision:"f5ab91afeefa75da7776569513257f96"},{url:"img/zhifubao.jpg",revision:"cb3346a351b20bbb8674bb96851f6ac1"},{url:"img/微信.svg",revision:"0fc8d5050f7b2be755dd0ada471ef21d"},{url:"index.html",revision:"a8973fd503e730c6b6dbb6e27f5653ab"},{url:"js/choco.js",revision:"bbf233bcf2fa0085282076ee1383be46"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sweetalert.js",revision:"58ad886f69f1b6f9aa6d153daf656433"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"6c0ceeb090908c17c9d011d85127dbef"},{url:"link/index.html",revision:"093c60d80eaeb4214aee8b6a94908611"},{url:"page/2/index.html",revision:"34b8e02dc7622fc8d6946d895b3fed1f"},{url:"sw-register.js",revision:"741f4778b6db56f24c00785a06869536"},{url:"sw.js",revision:"29a264a2c0b218878a57664c19c79a10"},{url:"tags/index.html",revision:"8cccf9286f8efc8b90dc585edebfb0c4"},{url:"tags/其他/index.html",revision:"1d0e8d13d4f4714cb5eae7050ed631bd"},{url:"tags/好句/index.html",revision:"06cae4749025ef353548b84779d90d0c"},{url:"tags/随笔/index.html",revision:"387eaaf1b0698626de4decb2a3d6bd54"},{url:"法考/index.html",revision:"e88fee5590c84b70420cf93c7ad4c491"},{url:"留言板/index.html",revision:"631bd56f734b6506698dd1ae797d570d"},{url:"编程/index.html",revision:"169fe47882eee5d3f5dfed51e07f2b3d"},{url:"考研/index.html",revision:"5cf4dbbcb2b8bcf637b362a7b9f2e172"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
