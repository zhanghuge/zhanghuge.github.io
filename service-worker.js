if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>a(e,c),s={module:{uri:c},exports:f,require:n};i[c]=Promise.all(r.map((e=>s[e]||n(e)))).then((e=>(d(...e),f)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/09/May-9/index.html",revision:"4e816cb2ca259a30a60f513ad9930f2f"},{url:"2022/05/10/May-10/index.html",revision:"7680c223ccd194523b7c37008e5148bd"},{url:"2022/05/10/test/index.html",revision:"704addaca5da1dbe39135994fbd0f53a"},{url:"2022/05/10/叹/index.html",revision:"cc5f0b64dc3954554fab1d8f13b2e9e3"},{url:"2022/05/11/May-11/index.html",revision:"064afce112e6b43afeefa22f3f7f8b80"},{url:"2022/05/12/May-12/index.html",revision:"a319932cad1fb56556be3d8a5cc1475d"},{url:"2022/05/12/musicTest/index.html",revision:"7330ad1e3107162f42e4b34e1e73da79"},{url:"2022/05/13/hello-world/index.html",revision:"1ffd4fac22299f5bd3fd42ac40cae2e5"},{url:"404.html",revision:"d1b02b9a611d77d39b26b231bf040c86"},{url:"archives/2022/05/index.html",revision:"56ac4b398c9118cce907f70c45b6ae55"},{url:"archives/2022/index.html",revision:"3d05955c96bdef9cace9432ddface756"},{url:"archives/index.html",revision:"bdf842a6ed7adbb1c62d83ce75fb1526"},{url:"categories/index.html",revision:"93cb192143076094786a877d91ad6b1b"},{url:"categories/其他/index.html",revision:"1f06ea7bd64f4516ff7eb4b582185e4e"},{url:"categories/生活志/index.html",revision:"445f1fbb549e182f326a567b7accb20a"},{url:"categories/随笔/index.html",revision:"500396b64e179a352531642a9de7937d"},{url:"css/font.css",revision:"d646dc68e8cec140cabe8e673c646e77"},{url:"css/index.css",revision:"eb0a304eee0e1f28caebb787f23dedcc"},{url:"css/No.025-Sounso-Warm-2.ttf",revision:"5c3dff6e964a789f8b0a49c69210e2f5"},{url:"css/QingSongShouXieTi1-2.ttf",revision:"0ef5945678e626f329b54284084f9084"},{url:"css/sweetalert.css",revision:"f4f6f029cb3303f755ee4f9e7e5ccfaa"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/123.png",revision:"a07ca62297ff179c48ca39709745429c"},{url:"img/124.png",revision:"6f1bd4798ef925153e7f08be4ba94568"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"d51accd19b80e7a4f2883a18dd0f309b"},{url:"img/back.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/background.jpg",revision:"0a9d6c4fe907baa92af82b9a05241ce3"},{url:"img/bookx.jpg",revision:"45dbc18e1ae8e93a9fd067f9b2d48a7b"},{url:"img/categories.jpg",revision:"ca36e607f450b7d8c7e0d02e79d32aa2"},{url:"img/category.jpg",revision:"b04c091f827e165878cdbe5108c54151"},{url:"img/foot.jpg",revision:"fba2e56597ebe3db3e1cd10acc7c7222"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/juzi.jpg",revision:"9c941c893fe4c2b0f11cc9560ed4f481"},{url:"img/library.jpg",revision:"e03b07966763991f825494d97522831d"},{url:"img/libraryx.jpg",revision:"618a1e882488799ea2f82a45633cfcf5"},{url:"img/me.jpg",revision:"40daf11ad1dcc3e1d5fade166a516ea0"},{url:"img/mywexin.jpg",revision:"48c923df36e3b29b284ba0e7f141bb51"},{url:"img/noname.jpg",revision:"1c0fc470b937b4f270922f972df59663"},{url:"img/other.jpg",revision:"c41d51e2debe00a9d0632497feed7a68"},{url:"img/pen.jpg",revision:"effed599eafd6f9abe81b9793faf45c1"},{url:"img/pikachu.png",revision:"76f027c1d8ea2170cedd976017330331"},{url:"img/pwa/android-chrome-144x144.png",revision:"4306f43c8eff713a19fa7e97f53c8656"},{url:"img/pwa/android-chrome-192x192.png",revision:"eadb7e8a4fe4b7d25b926990a9297e8e"},{url:"img/pwa/android-chrome-256x256.png",revision:"22a152793505f910fa867344ba40d574"},{url:"img/pwa/android-chrome-36x36.png",revision:"f336e5167a09b4591a850851765d7cdc"},{url:"img/pwa/android-chrome-384x384.png",revision:"032440648327e665f12a3646c805f616"},{url:"img/pwa/android-chrome-48x48.png",revision:"8d9aaa4532c611dd8f368d7563b49ffb"},{url:"img/pwa/android-chrome-512x512.png",revision:"bc38fc271a7db81be77e78802c862042"},{url:"img/pwa/android-chrome-72x72.png",revision:"ea3479e8c22f13a4bca014e5aa4c65c6"},{url:"img/pwa/android-chrome-96x96.png",revision:"d6773b011d0b507932b37c8027af8135"},{url:"img/pwa/apple-touch-icon.png",revision:"08b62c3460cdd012ca93d5d387c1c009"},{url:"img/pwa/favicon-16x16.png",revision:"58198497bccc569ff96a31f9623072d8"},{url:"img/pwa/favicon-32x32.png",revision:"fdfc079ce18816a5e1ada7fdc512238f"},{url:"img/pwa/mstile-150x150.png",revision:"81b345ba52d02995f9a36b0caca26a52"},{url:"img/pwa/README.html",revision:"6a93e5bbf4a7fcd0619d20e72a3834d5"},{url:"img/pwa/safari-pinned-tab.svg",revision:"c94e37550ee48824adbef0e7e5e11b21"},{url:"img/qq.jpg",revision:"26404fda3249041f4d41669d92bda7a8"},{url:"img/room.jpg",revision:"cd1470265e235add33b2c046447b4f07"},{url:"img/tag.jpg",revision:"649a3cc3b89e364f156c9d6e9e2428f7"},{url:"img/tags.jpg",revision:"7116fe00901acd5232846178d5aaff82"},{url:"img/trouble.jpg",revision:"2bd93513d36a826ee477af34fd85a8a8"},{url:"img/wexin.jpg",revision:"f5ab91afeefa75da7776569513257f96"},{url:"img/zhifubao.jpg",revision:"cb3346a351b20bbb8674bb96851f6ac1"},{url:"img/微信.svg",revision:"0fc8d5050f7b2be755dd0ada471ef21d"},{url:"index.html",revision:"859185728eba8239124de0779e50fc46"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/sweetalert.js",revision:"7192b9986cb182112ce3754d8fc9dfdb"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"6c0ceeb090908c17c9d011d85127dbef"},{url:"link/index.html",revision:"bd37994a735a46a0e3f211017804bb84"},{url:"sw-register.js",revision:"31f5c91a4f56268afc3e4bf2a8d849a5"},{url:"sw.js",revision:"f8522ebea67d8960f75332f985fb721f"},{url:"tags/index.html",revision:"d041f6646245a0189ba481cd0c4dcaea"},{url:"tags/其他/index.html",revision:"f689b332a898b4b1558f54ab189ee7b8"},{url:"法考/index.html",revision:"0f7708de0c763df8b3e9d167dc8e394b"},{url:"留言板/index.html",revision:"21e74d4caf58a5bf9707e2b07ee2bbd9"},{url:"编程/index.html",revision:"5d174286461712be7565303d0c0add2b"},{url:"考研/index.html",revision:"70a16dbdf035c601473f3093f4a2a5a7"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
