if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>a(e,r),n={module:{uri:r},exports:s,require:f};i[r]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/09/May-9/index.html",revision:"994513a0f3462484d86c043ec59c488d"},{url:"2022/05/10/May-10/index.html",revision:"5e145c07884abc03a8505984ff483e7a"},{url:"2022/05/10/test/index.html",revision:"da6128a4fdb901dcce06996a432ae0b5"},{url:"2022/05/10/叹/index.html",revision:"4c6cdd16538b239f4e2576366bd6898b"},{url:"2022/05/11/May-11/index.html",revision:"3212b91910aca4a41f9f13051b502da9"},{url:"2022/05/12/May-12/index.html",revision:"46f57b769aed05377e46e2440f15d850"},{url:"2022/05/12/测试/index.html",revision:"4025252fed2d30d232e0aaaa78868a66"},{url:"2022/05/13/hello-world/index.html",revision:"68caa409c00ae9e5709eb21c5657c06a"},{url:"2022/05/13/May-13/cainiao.png",revision:"daefba254d995b3eef6e558c0f8e96f4"},{url:"2022/05/13/May-13/index.html",revision:"1527dd47f85d573f5ebc6d71fc9424bf"},{url:"2022/05/13/May-13/me.png",revision:"1fbc61a836b13b82538ce7336a841cd9"},{url:"2022/05/14/May-14/index.html",revision:"17e48327bc833c2cd7bd2262eb235aa3"},{url:"2022/05/15/法考规划/index.html",revision:"e2cb1b221bb0cf70ba0b415bda577592"},{url:"2022/05/15/考研规划/index.html",revision:"a3abdf4b53ce7f4455e31d5df2e8f71b"},{url:"404.html",revision:"a37ad285d58d8ed3dc999e4eb038dabb"},{url:"archives/2022/05/index.html",revision:"b637b566ecb31bfed5eb7a07b17668b1"},{url:"archives/2022/05/page/2/index.html",revision:"9aa52c3a2f94dd8c531fd7fa4aab139d"},{url:"archives/2022/index.html",revision:"65ecd28655d6cf976dce384866918632"},{url:"archives/2022/page/2/index.html",revision:"e7673378c339f55f115c7496e6ae9ae8"},{url:"archives/index.html",revision:"2bf54967b44cd65d43ac773a9210964d"},{url:"archives/page/2/index.html",revision:"67c0a2df2c7403274f8f6405948dd8d2"},{url:"categories/index.html",revision:"a8be83e22632f2fba22f5a780f341995"},{url:"categories/其他/index.html",revision:"7ac5e40e23e8996f214e302305d0604c"},{url:"categories/收藏库/index.html",revision:"12f8b369da56a9713ce28e6b1c9f8b3b"},{url:"categories/法考/index.html",revision:"c6c915bd35d2995a705a7f63f4fd44ef"},{url:"categories/生活志/index.html",revision:"de9216fa5ae3b17eeb158212394df411"},{url:"categories/考研/index.html",revision:"ef5ac7a6cc7c216868bf6848ed62ea82"},{url:"css/beauty.css",revision:"e24c12c253c18d9affad9b87050eda8d"},{url:"css/font.css",revision:"ed7f952a129f9b3e6f8caca7e189ae7f"},{url:"css/HanYiDieYuTiJian-1.ttf",revision:"711bdc78f5fa269463628e8b74db87a8"},{url:"css/index.css",revision:"3ab7cae07b359382f6f46bb792dd3de9"},{url:"css/main.css",revision:"d819f638a3ecaa9719ee4fc4cf389e91"},{url:"css/mouse.css",revision:"ff68c6bb1d4b32b34d0800b68de04f85"},{url:"css/run.css",revision:"218f0cb351bebd9f386ab308ebbc61a1"},{url:"css/social.css",revision:"de8136de610c418891c82eda1a25f29a"},{url:"css/sweetalert.css",revision:"58e928a00e49d9ad090e7062f07c6076"},{url:"css/swiper-bundle.min.css",revision:"3f7ce984926f486b0ba36437cccf163c"},{url:"css/swiper.min.css",revision:"4c17cb76fcc63c1ad396a831271db01d"},{url:"css/swiperstyle.css",revision:"3f7300b4c0660dbc240c9c3488733c26"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/迎风自由手书体.ttf",revision:"8cb950de3c475408e50ec009424c3ff6"},{url:"img/123.png",revision:"a07ca62297ff179c48ca39709745429c"},{url:"img/124.png",revision:"6f1bd4798ef925153e7f08be4ba94568"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"d51accd19b80e7a4f2883a18dd0f309b"},{url:"img/back.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/background.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/book.png",revision:"709924742350ffd5526b57bdd8a124b0"},{url:"img/bookx.jpg",revision:"45dbc18e1ae8e93a9fd067f9b2d48a7b"},{url:"img/categories.jpg",revision:"ca36e607f450b7d8c7e0d02e79d32aa2"},{url:"img/category.jpg",revision:"b04c091f827e165878cdbe5108c54151"},{url:"img/foot.jpg",revision:"fba2e56597ebe3db3e1cd10acc7c7222"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/juzi.jpg",revision:"9c941c893fe4c2b0f11cc9560ed4f481"},{url:"img/library.jpg",revision:"e03b07966763991f825494d97522831d"},{url:"img/libraryx.jpg",revision:"618a1e882488799ea2f82a45633cfcf5"},{url:"img/me.jpg",revision:"40daf11ad1dcc3e1d5fade166a516ea0"},{url:"img/mywexin.jpg",revision:"48c923df36e3b29b284ba0e7f141bb51"},{url:"img/noname.jpg",revision:"1c0fc470b937b4f270922f972df59663"},{url:"img/other.jpg",revision:"c41d51e2debe00a9d0632497feed7a68"},{url:"img/pen.jpg",revision:"effed599eafd6f9abe81b9793faf45c1"},{url:"img/pikachu.png",revision:"76f027c1d8ea2170cedd976017330331"},{url:"img/pwa/android-chrome-144x144.png",revision:"203b1370c64759eecad6fb8e149894ac"},{url:"img/pwa/android-chrome-192x192.png",revision:"f423d2a6d9f51cd0d92526993a222bf0"},{url:"img/pwa/android-chrome-256x256.png",revision:"56b4b8611c59223519d3f093cbc780d3"},{url:"img/pwa/android-chrome-36x36.png",revision:"695c851264fa2ece1372aae970664f52"},{url:"img/pwa/android-chrome-48x48.png",revision:"ae5925a8c327d9fe7b662fde1113c032"},{url:"img/pwa/android-chrome-72x72.png",revision:"474c2a63d71e1b4f848a9b0752620492"},{url:"img/pwa/android-chrome-96x96.png",revision:"4cb9f8aba8be912b83b29134dd88c28c"},{url:"img/pwa/apple-touch-icon.png",revision:"b0cd00ac17081d2ad86b38b9d02aff6c"},{url:"img/pwa/favicon-16x16.png",revision:"41bea5a4f0b09f5b72f075c96024c0a8"},{url:"img/pwa/favicon-32x32.png",revision:"13f055e47a16e568d487a62310b1d956"},{url:"img/pwa/mstile-150x150.png",revision:"868c275ea45d13e5ec4d5cae45aa108f"},{url:"img/pwa/README.html",revision:"c15beac53fb8346569b61ba01d13a431"},{url:"img/pwa/safari-pinned-tab.svg",revision:"0a69442ff107960a5692e071a98475f0"},{url:"img/qq.jpg",revision:"26404fda3249041f4d41669d92bda7a8"},{url:"img/room.jpg",revision:"cd1470265e235add33b2c046447b4f07"},{url:"img/tag.jpg",revision:"649a3cc3b89e364f156c9d6e9e2428f7"},{url:"img/tags.jpg",revision:"7116fe00901acd5232846178d5aaff82"},{url:"img/trouble.jpg",revision:"2bd93513d36a826ee477af34fd85a8a8"},{url:"img/wexin.jpg",revision:"f5ab91afeefa75da7776569513257f96"},{url:"img/zhifubao.jpg",revision:"cb3346a351b20bbb8674bb96851f6ac1"},{url:"img/微信.svg",revision:"0fc8d5050f7b2be755dd0ada471ef21d"},{url:"index.html",revision:"a6d6b38ff8952b13f77f53e50a228ae4"},{url:"js/choco.js",revision:"a363325dc1c1ef79c0caa0aed61f043d"},{url:"js/ip_content.js",revision:"28c674614a7b57215e73efe8ed24313f"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/mainx.js",revision:"c5a8e962743bca7a2fb6a019fdcc62c0"},{url:"js/move.js",revision:"d446b3b4f7616a4d085fd385fe3a51fa"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sweetalert.js",revision:"58ad886f69f1b6f9aa6d153daf656433"},{url:"js/swiper_init.js",revision:"c0e03b483febcd168ecbe2031c2ce672"},{url:"js/swiper-bundle.min.js",revision:"dbcd929ea1493d3ff2f6491fd9515ce2"},{url:"js/swiper.min.js",revision:"dbcd929ea1493d3ff2f6491fd9515ce2"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"6c0ceeb090908c17c9d011d85127dbef"},{url:"link/index.html",revision:"cb4ade57e3ed36139bdc91e3b10d5d96"},{url:"page/2/index.html",revision:"9d5abab24710d73ff9f8da4094aa7c0c"},{url:"page/3/index.html",revision:"aba1361fae558a01e7bb8671eb426f25"},{url:"sw-register.js",revision:"1a297fe9d2a700cdeb99111cb0396fca"},{url:"sw.js",revision:"8bf4eadc5f6fcd7113d436c4d6ba9c3e"},{url:"tags/index.html",revision:"0a0feeb046eabd722c54e54e448d3100"},{url:"tags/其他/index.html",revision:"75ead40bd8844786f96e45b6f4199557"},{url:"tags/好句/index.html",revision:"f30b7c8f6acbe6635c5e3428e62a0e2d"},{url:"tags/测试/index.html",revision:"d04524c2f1b3bcb192eeced8a32d459b"},{url:"tags/规划/index.html",revision:"acf93ce2d70766f1864bd6d385ea0ca8"},{url:"tags/随笔/index.html",revision:"f72a784a2465b9a2e73d50dab66f5bde"},{url:"法考/index.html",revision:"7983c522020d2946ddac36788038df4b"},{url:"留言板/index.html",revision:"99820966ce22e891de05166fa7512be3"},{url:"编程/index.html",revision:"b787bc8f319c43c5b3c96eaea1319474"},{url:"考研/index.html",revision:"3b7660606fa0ff814c718ccf212d515f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
