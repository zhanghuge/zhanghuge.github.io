if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>d(e,r),b={module:{uri:r},exports:f,require:s};i[r]=Promise.all(a.map((e=>b[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/09/May-9/index.html",revision:"e3615e801978d87cb4264995deccef3d"},{url:"2022/05/10/May-10/index.html",revision:"72fba7471731868e96d2b9b031d3335c"},{url:"2022/05/10/test/index.html",revision:"0287dcc305166aeeb29e7a978911a6b4"},{url:"2022/05/10/叹/index.html",revision:"4def5ab525676bdd78192012e313ba71"},{url:"2022/05/11/May-11/index.html",revision:"775c7d6fe2b7edf0e7955f5c5b3c287c"},{url:"2022/05/12/May-12/index.html",revision:"5190a450cb5a94006dd04d2c8d351f09"},{url:"2022/05/12/测试/index.html",revision:"20c0a94b7511023bf0d7c3cfade76565"},{url:"2022/05/13/hello-world/index.html",revision:"cd59f100698691f63207ba2fae7d8cc4"},{url:"2022/05/13/May-13/cainiao.png",revision:"daefba254d995b3eef6e558c0f8e96f4"},{url:"2022/05/13/May-13/index.html",revision:"02ffcac43bcaab194593fd85a082c0a5"},{url:"2022/05/13/May-13/me.png",revision:"1fbc61a836b13b82538ce7336a841cd9"},{url:"2022/05/14/May-14/index.html",revision:"15ce235383722e7b4ae3c52c695e15eb"},{url:"2022/05/15/May-15/index.html",revision:"4ee5bd14e71bd5e67d6ff47f41fc8f3d"},{url:"2022/05/15/法考规划/index.html",revision:"9bc4861a3a68fc673aa6a3e165a3778d"},{url:"2022/05/15/考研规划/1.jpg",revision:"683e65bf1bcde1d4031cc71632acfc3b"},{url:"2022/05/15/考研规划/2.png",revision:"5647fe20e9b405aa9a968d994118d663"},{url:"2022/05/15/考研规划/3.png",revision:"6c8c9f635722016f20b0f0121daf7880"},{url:"2022/05/15/考研规划/4.png",revision:"1f001a4d9850e49900a6034dcef8dfca"},{url:"2022/05/15/考研规划/index.html",revision:"d2f7de5cae86af1aea3b2f8c51f00daa"},{url:"2022/05/16/科目二/index.html",revision:"6f706d3c5258f37e658e8956f68b174b"},{url:"404.html",revision:"aa556e2ced6566dfe8cf799e4f248b42"},{url:"archives/2022/05/index.html",revision:"b3a606fbdd489b9e8908a9e875ec5b80"},{url:"archives/2022/05/page/2/index.html",revision:"8591ba4c54862b51998e18502a9fdb4d"},{url:"archives/2022/index.html",revision:"4cc7f3719265257dcb0088ddfb0db872"},{url:"archives/2022/page/2/index.html",revision:"fd868b4dc3b32c7f70d560eda316548d"},{url:"archives/index.html",revision:"dbbf530e82718809ec8fe15846488c00"},{url:"archives/page/2/index.html",revision:"c34cd1fa2a7aca3ea7a1f51b4bcd93fd"},{url:"categories/index.html",revision:"78def708f022052bccb59bd328b237c4"},{url:"categories/其他/index.html",revision:"abc37ff5919b79dba465f4b40320aee3"},{url:"categories/收藏库/index.html",revision:"cb726b7b2370530c64741c76f8304516"},{url:"categories/法考/index.html",revision:"e0153348f466dd1341f72e2c68488073"},{url:"categories/生活志/index.html",revision:"f3d543afc5028b54c7276c6bc8ddc1d5"},{url:"categories/考研/index.html",revision:"dec9ee14d80c20f59576daf17bf7d425"},{url:"css/beauty.css",revision:"e24c12c253c18d9affad9b87050eda8d"},{url:"css/custom.css",revision:"4448a9cd9362fb07b15363a297661de9"},{url:"css/font.css",revision:"ed7f952a129f9b3e6f8caca7e189ae7f"},{url:"css/HanYiDieYuTiJian-1.ttf",revision:"711bdc78f5fa269463628e8b74db87a8"},{url:"css/index.css",revision:"3ab7cae07b359382f6f46bb792dd3de9"},{url:"css/main.css",revision:"d819f638a3ecaa9719ee4fc4cf389e91"},{url:"css/mouse.css",revision:"ff68c6bb1d4b32b34d0800b68de04f85"},{url:"css/run.css",revision:"218f0cb351bebd9f386ab308ebbc61a1"},{url:"css/social.css",revision:"fbd3210efd7124464ce610b20b23496b"},{url:"css/sweetalert.css",revision:"58e928a00e49d9ad090e7062f07c6076"},{url:"css/swiper-bundle.min.css",revision:"3f7ce984926f486b0ba36437cccf163c"},{url:"css/swiper.min.css",revision:"4c17cb76fcc63c1ad396a831271db01d"},{url:"css/swiperstyle.css",revision:"3f7300b4c0660dbc240c9c3488733c26"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/迎风自由手书体.ttf",revision:"8cb950de3c475408e50ec009424c3ff6"},{url:"img/123.png",revision:"a07ca62297ff179c48ca39709745429c"},{url:"img/124.png",revision:"6f1bd4798ef925153e7f08be4ba94568"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"d51accd19b80e7a4f2883a18dd0f309b"},{url:"img/background.jpg",revision:"899ff6263610d8f2ee266e42ebfb6b09"},{url:"img/book.png",revision:"709924742350ffd5526b57bdd8a124b0"},{url:"img/bookx.jpg",revision:"45dbc18e1ae8e93a9fd067f9b2d48a7b"},{url:"img/categories.jpg",revision:"ca36e607f450b7d8c7e0d02e79d32aa2"},{url:"img/category.jpg",revision:"b04c091f827e165878cdbe5108c54151"},{url:"img/foot.jpg",revision:"fba2e56597ebe3db3e1cd10acc7c7222"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/juzi.jpg",revision:"9c941c893fe4c2b0f11cc9560ed4f481"},{url:"img/library.jpg",revision:"e03b07966763991f825494d97522831d"},{url:"img/libraryx.jpg",revision:"618a1e882488799ea2f82a45633cfcf5"},{url:"img/me.jpg",revision:"40daf11ad1dcc3e1d5fade166a516ea0"},{url:"img/mywexin.jpg",revision:"48c923df36e3b29b284ba0e7f141bb51"},{url:"img/noname.jpg",revision:"1c0fc470b937b4f270922f972df59663"},{url:"img/other.jpg",revision:"c41d51e2debe00a9d0632497feed7a68"},{url:"img/pen.jpg",revision:"effed599eafd6f9abe81b9793faf45c1"},{url:"img/pikachu.png",revision:"76f027c1d8ea2170cedd976017330331"},{url:"img/pwa/android-chrome-144x144.png",revision:"554ca85899c5dc34f7df3ef21e3f7672"},{url:"img/pwa/android-chrome-192x192.png",revision:"5617f7211a1427c52e3e67fec0a3c448"},{url:"img/pwa/android-chrome-256x256.png",revision:"0585ace1cd1c78dfae78d6384e1ac92d"},{url:"img/pwa/android-chrome-36x36.png",revision:"a83d0264425ba325f5996929180812ae"},{url:"img/pwa/android-chrome-48x48.png",revision:"feea363d8baaf0c3f008976b0dda2897"},{url:"img/pwa/android-chrome-72x72.png",revision:"5f923a2b17eb69d35756b370cf66a7e2"},{url:"img/pwa/android-chrome-96x96.png",revision:"e799bd81491e6a4e600af97baf9f9c35"},{url:"img/pwa/apple-touch-icon.png",revision:"215aa6f43e6884def86046a7f6f040c8"},{url:"img/pwa/favicon-16x16.png",revision:"2bf2c94ac2c10d95781d29e70798d1aa"},{url:"img/pwa/favicon-32x32.png",revision:"98d6359a586d3d2707ad02f5723495b2"},{url:"img/pwa/mstile-150x150.png",revision:"ba2cb9de1810478a2fd5b2bd176e33e1"},{url:"img/pwa/README.html",revision:"07cc26ed86138178f5add5e56ca98375"},{url:"img/pwa/safari-pinned-tab.svg",revision:"0a69442ff107960a5692e071a98475f0"},{url:"img/qq.jpg",revision:"26404fda3249041f4d41669d92bda7a8"},{url:"img/room.jpg",revision:"cd1470265e235add33b2c046447b4f07"},{url:"img/tag.jpg",revision:"649a3cc3b89e364f156c9d6e9e2428f7"},{url:"img/tags.jpg",revision:"7116fe00901acd5232846178d5aaff82"},{url:"img/trouble.jpg",revision:"2bd93513d36a826ee477af34fd85a8a8"},{url:"img/wexin.jpg",revision:"f5ab91afeefa75da7776569513257f96"},{url:"img/zhifubao.jpg",revision:"cb3346a351b20bbb8674bb96851f6ac1"},{url:"img/微信.svg",revision:"0fc8d5050f7b2be755dd0ada471ef21d"},{url:"index.html",revision:"af20c67cd7a638caa4fdd3a1d1c6ee14"},{url:"js/choco.js",revision:"a363325dc1c1ef79c0caa0aed61f043d"},{url:"js/ip_content.js",revision:"28c674614a7b57215e73efe8ed24313f"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/mainx.js",revision:"c5a8e962743bca7a2fb6a019fdcc62c0"},{url:"js/move.js",revision:"d446b3b4f7616a4d085fd385fe3a51fa"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sweetalert.js",revision:"58ad886f69f1b6f9aa6d153daf656433"},{url:"js/swiper_init.js",revision:"c0e03b483febcd168ecbe2031c2ce672"},{url:"js/swiper-bundle.min.js",revision:"dbcd929ea1493d3ff2f6491fd9515ce2"},{url:"js/swiper.min.js",revision:"dbcd929ea1493d3ff2f6491fd9515ce2"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"6c0ceeb090908c17c9d011d85127dbef"},{url:"link/index.html",revision:"d5d452ad316507ed42ee4ea2dc43ca08"},{url:"page/2/index.html",revision:"b4c440898c2b050aea345f0d32c30426"},{url:"page/3/index.html",revision:"52d5e84a9f462e6eee7b202720efe082"},{url:"sw-register.js",revision:"98cf5c67a14c2984ce6d226faa3fb43a"},{url:"sw.js",revision:"52e258bd93503a2b925ff16408679487"},{url:"tags/index.html",revision:"58c1f130bb365f9eb96ca724eab13984"},{url:"tags/其他/index.html",revision:"a84ab9d6e5459ca885b4238c9bdd830d"},{url:"tags/好句/index.html",revision:"83d60b8f1f2c98d38b2fbd63a09ddb81"},{url:"tags/测试/index.html",revision:"d5a130ac370e7d9a965e4d667631a2c2"},{url:"tags/美化/index.html",revision:"d0eb3944a8933ecf8bb8eb9c1255093b"},{url:"tags/规划/index.html",revision:"14be088a353bb890b66c924ac9690138"},{url:"tags/随笔/index.html",revision:"3e8abb04f8db98b5fa0be9a301b6dd5c"},{url:"tags/驾照/index.html",revision:"00d15b1260d1ce17ade57515a5df669a"},{url:"三国法/index.html",revision:"312718338b869ac24bde3995f2f9bf9d"},{url:"刑法/index.html",revision:"4a376e383ebf13e7e6be6e6a7fc3a816"},{url:"刑诉/index.html",revision:"d2a9f71b4906548f4328cc27a8cb8404"},{url:"商经/index.html",revision:"4cffb5ba7135246376bc906eb7d79e9d"},{url:"宪法/index.html",revision:"8a1aad12113fe90444563d004cbaa964"},{url:"民法/index.html",revision:"8fef0cf1010f34de9125d4c4968fb886"},{url:"民诉/index.html",revision:"bda691641851ced7dc3145ab22f8a73d"},{url:"法制史/index.html",revision:"8ba3d1deb045d56a21d763b7235a3ee9"},{url:"法考/index.html",revision:"3849f339133f6ea7df8a45dd9045c62c"},{url:"理论法/index.html",revision:"ee020a07168a2b2e950337c4afe4006b"},{url:"留言板/index.html",revision:"b1cf783e0181b1b5a15320dab01dd81e"},{url:"编程/index.html",revision:"dc3d68150b223e76a34bb4836afe7c2a"},{url:"考研/index.html",revision:"c01fda6b79d734127b112725abc35bbb"},{url:"行政法/index.html",revision:"36727d96083c2cbc8da5e1ac6ecb1986"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
