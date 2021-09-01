/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c7fc99f814171f181ad60e046dd52f43"
  },
  {
    "url": "advanced/color-lookup-tables.html",
    "revision": "1442c0711e679e82aefb15f432fedae0"
  },
  {
    "url": "advanced/enabled-element-data.html",
    "revision": "c9b15631234449866fee1abebef211c2"
  },
  {
    "url": "advanced/enabled-element-layers.html",
    "revision": "046baefdc706cfac9ece65efb3bdb4dc"
  },
  {
    "url": "advanced/image-cache.html",
    "revision": "cd9b630be714bdba1ecd03d71bc595a3"
  },
  {
    "url": "advanced/legacy-browser-support.html",
    "revision": "c8bd3fc0d34f8be126450e48564a8a6e"
  },
  {
    "url": "advanced/modality-lut-and-voi-lut.html",
    "revision": "ffc92c0f91d6c1e18dc6f28d56c9df3e"
  },
  {
    "url": "advanced/retrieving-pixel-data.html",
    "revision": "d08dd05d68767d411347a7a8db65f3b9"
  },
  {
    "url": "advanced/webgl-rendering-pipeline.html",
    "revision": "7a69e18381f3d2e443f7c77b4c2ddf9a"
  },
  {
    "url": "api.html",
    "revision": "dfabc7b71e6a42eb6460c31713f23079"
  },
  {
    "url": "assets/css/0.styles.7961eb8e.css",
    "revision": "078abcc28b5558d54fedc50b2d9a5b03"
  },
  {
    "url": "assets/img/image-id-format.png",
    "revision": "3446c0624cc306838d19f185436a842e"
  },
  {
    "url": "assets/img/image-loader-workflow.png",
    "revision": "dd878c0d6d5fbd25f68a23b2e9ba2eb4"
  },
  {
    "url": "assets/img/istanbul-code-coverage.png",
    "revision": "17e7326847e4a4d90e380ee9b407f4b0"
  },
  {
    "url": "assets/img/library-hierarchy.png",
    "revision": "c153c63518a2e2b29e56c41f370af02f"
  },
  {
    "url": "assets/img/rendering-pipeline.png",
    "revision": "906a35fa303bd78fe91f70b5d469deb9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.557e8087.js",
    "revision": "de0497d6dc6a91c85a47819fa448bac6"
  },
  {
    "url": "assets/js/100.8e7bacd8.js",
    "revision": "9186f77d801e4e1da045b6175e7f6b1c"
  },
  {
    "url": "assets/js/101.5d3c7cd3.js",
    "revision": "26e2e7cdca4d2514b125430c7582297f"
  },
  {
    "url": "assets/js/102.60d17d1c.js",
    "revision": "84be29bb8d42648f57ce51d5d864b3e2"
  },
  {
    "url": "assets/js/103.cd057321.js",
    "revision": "ef7da1317f08fb18e1d67497f6f255c8"
  },
  {
    "url": "assets/js/104.3e624d22.js",
    "revision": "33312f6b2ae2803c9bc216aefff1df77"
  },
  {
    "url": "assets/js/105.df1656c8.js",
    "revision": "16c364c569f1ba9c117b9697453a4494"
  },
  {
    "url": "assets/js/106.0cad39ae.js",
    "revision": "9e4eca119e894226dd1074e681d0f4ce"
  },
  {
    "url": "assets/js/107.b90a2da8.js",
    "revision": "de71e803b89825db01edaee568ab8a40"
  },
  {
    "url": "assets/js/108.80a86be9.js",
    "revision": "ca54ea9617340c354c21dd4a20841d0f"
  },
  {
    "url": "assets/js/109.0de0b8bd.js",
    "revision": "d0ba3ddadb9294b43a8c8a46d356bf90"
  },
  {
    "url": "assets/js/11.81f67d90.js",
    "revision": "e7fcc47314cde49551fb598a723d360e"
  },
  {
    "url": "assets/js/110.8e568eb4.js",
    "revision": "72aad0900ec9766787783ed2467ddafb"
  },
  {
    "url": "assets/js/111.0919f778.js",
    "revision": "39654a69fcb20754eb6c0253e742d383"
  },
  {
    "url": "assets/js/112.a2917112.js",
    "revision": "afe0df2705ce862cb95575c418308c0d"
  },
  {
    "url": "assets/js/113.815c2666.js",
    "revision": "c3809d31582daae7436664fa95e7628f"
  },
  {
    "url": "assets/js/114.b0cc9473.js",
    "revision": "90da414887c5f89452ff708c3d55c72f"
  },
  {
    "url": "assets/js/115.ed7ea724.js",
    "revision": "0be66a5b47196c63a694543138537be5"
  },
  {
    "url": "assets/js/116.fb838a27.js",
    "revision": "431ef424a6dc8f100fb80c98865ba786"
  },
  {
    "url": "assets/js/117.fa756981.js",
    "revision": "e118dc19c06f73baee62b0bd7a3f5589"
  },
  {
    "url": "assets/js/118.508a897f.js",
    "revision": "34937770ed79ecce4950088f10efdd98"
  },
  {
    "url": "assets/js/119.c2f58ec7.js",
    "revision": "2f7674ad7f98003253569803561a9953"
  },
  {
    "url": "assets/js/12.ec98d674.js",
    "revision": "20595d07a17def5d50ea9ded6b7680b5"
  },
  {
    "url": "assets/js/120.e87b3ed2.js",
    "revision": "20bc62c3712db217f67e0c0b335a8374"
  },
  {
    "url": "assets/js/121.0f798ffd.js",
    "revision": "d339703d5fddc96dc4a43c4657a567ba"
  },
  {
    "url": "assets/js/122.fa6f8ca6.js",
    "revision": "c4dfa6dc4d818e8ca711c9dd4c855be6"
  },
  {
    "url": "assets/js/123.e32a1a43.js",
    "revision": "5da583da1fec91da9949364364f998df"
  },
  {
    "url": "assets/js/124.f62e815c.js",
    "revision": "e9d34f760b6123cd9411073b11659356"
  },
  {
    "url": "assets/js/125.d645080d.js",
    "revision": "f5c331a72e82e04d48612d152f5f82ed"
  },
  {
    "url": "assets/js/126.9b4d0e25.js",
    "revision": "2aee82ac0c1300d4a3f6a575b4afc185"
  },
  {
    "url": "assets/js/127.1a5ec250.js",
    "revision": "152eb66864d46694466db1861121fe0b"
  },
  {
    "url": "assets/js/128.dea2128b.js",
    "revision": "cd951e75ebdecd9c9a4f27c1a14fd851"
  },
  {
    "url": "assets/js/129.cec382b4.js",
    "revision": "ed0108a1c5cc274c14d84da5b8097b74"
  },
  {
    "url": "assets/js/13.d5b029f0.js",
    "revision": "4fb94e47a1be0114669f44f921d47764"
  },
  {
    "url": "assets/js/130.1e7a258a.js",
    "revision": "614234a081f18616e0b51aa5608c4d9b"
  },
  {
    "url": "assets/js/131.6a42ec11.js",
    "revision": "fb72472e2c1cfc77cdf27c38108fd545"
  },
  {
    "url": "assets/js/132.27485b00.js",
    "revision": "5ee87c3314cfdb0e6584fc1c17cc1f33"
  },
  {
    "url": "assets/js/133.d0c7e108.js",
    "revision": "bb3f7648afcf0442480f308ab9528ea8"
  },
  {
    "url": "assets/js/134.5546004a.js",
    "revision": "7d6db76ec70c03782fa40aa390365c17"
  },
  {
    "url": "assets/js/135.275996e9.js",
    "revision": "ed0e23f909e953accc877697c0b17a25"
  },
  {
    "url": "assets/js/136.b9c53f78.js",
    "revision": "612e79dfa2b0481000a1332d7a95997f"
  },
  {
    "url": "assets/js/137.941a7c2a.js",
    "revision": "05c8c15ef08c1d6e91f28ce67b2be436"
  },
  {
    "url": "assets/js/138.f989ba55.js",
    "revision": "ae97412fbbf06bcab84b247d46245541"
  },
  {
    "url": "assets/js/139.ddc6c784.js",
    "revision": "1d95cff16ce466728988d1b65de193a4"
  },
  {
    "url": "assets/js/14.efd47020.js",
    "revision": "f47f4a5a851295b907e7451c649bfd4b"
  },
  {
    "url": "assets/js/140.bd0a01e3.js",
    "revision": "e865ff1a784ca73f514e1fdc5c5f24d4"
  },
  {
    "url": "assets/js/141.f61dee44.js",
    "revision": "b79b1fdb4e9a2a68128a8eb5c782bba2"
  },
  {
    "url": "assets/js/142.0a763164.js",
    "revision": "c74fb35d5a2eaed4afcad1a018d28a36"
  },
  {
    "url": "assets/js/143.d028ed5b.js",
    "revision": "c7abd16acfab5fd7e1211fee75525756"
  },
  {
    "url": "assets/js/144.02f255c0.js",
    "revision": "4ce0c07f1cab1f27982280415129185b"
  },
  {
    "url": "assets/js/145.26d2e6a5.js",
    "revision": "ae866df51a691fd0bcb74d86adc1f327"
  },
  {
    "url": "assets/js/146.a0d3dd2f.js",
    "revision": "0d0e2d92cf01317d881729fc4a2abdd9"
  },
  {
    "url": "assets/js/147.daa251f8.js",
    "revision": "dad7701d74eb68ce2c47b67d953b6043"
  },
  {
    "url": "assets/js/148.8c9d6e36.js",
    "revision": "01bc43a42d2848236c013d38215b3dc9"
  },
  {
    "url": "assets/js/149.331b4877.js",
    "revision": "efa243712a17587bcf22836bb2a10238"
  },
  {
    "url": "assets/js/15.5db6f610.js",
    "revision": "9b008abe54b3f70b1fc93d606f435e37"
  },
  {
    "url": "assets/js/150.1e1a15de.js",
    "revision": "99b1219a0f4e698e70fda19345db48ae"
  },
  {
    "url": "assets/js/151.c01c5875.js",
    "revision": "a3e7fce0e9f6d1f6a89407d389d3d9fb"
  },
  {
    "url": "assets/js/152.30d2b155.js",
    "revision": "3a6dac9b97de05e3ea8bcbab662dddd0"
  },
  {
    "url": "assets/js/153.15d8cec1.js",
    "revision": "0112c999b820586ac103e4fbf41b7220"
  },
  {
    "url": "assets/js/154.bde25e53.js",
    "revision": "9b66832163ffb8e921a97e19ca7e9758"
  },
  {
    "url": "assets/js/155.0bd81fd7.js",
    "revision": "a72f032c7dfed79d700c64a751db6e53"
  },
  {
    "url": "assets/js/156.69e7348a.js",
    "revision": "21b4cd968ecaf708fd21207b9010a254"
  },
  {
    "url": "assets/js/157.4b6827a4.js",
    "revision": "6776d6bad95b3b72ef6039278bdd21f9"
  },
  {
    "url": "assets/js/158.23174794.js",
    "revision": "0b88f5900721cd4a649d5b7ee971f5bd"
  },
  {
    "url": "assets/js/159.d0b5cc8b.js",
    "revision": "95ff4021bf4c1b2758e71070036e8e76"
  },
  {
    "url": "assets/js/16.62d589cc.js",
    "revision": "88b528330947cbcd6dea55e5b7305a18"
  },
  {
    "url": "assets/js/160.d285119c.js",
    "revision": "4569b75e4a4d4b4dacf45c126d246b0e"
  },
  {
    "url": "assets/js/161.b2c30c9d.js",
    "revision": "37763a731e76582796f19475b9484266"
  },
  {
    "url": "assets/js/162.1fbb1548.js",
    "revision": "2afa90a8e92b5e1958d33cbb5677467f"
  },
  {
    "url": "assets/js/163.d00908b4.js",
    "revision": "8cbdb4ea5155045b3917d981687e02f3"
  },
  {
    "url": "assets/js/164.58bcce2b.js",
    "revision": "896fde76c5fa55305eec494d75031cc1"
  },
  {
    "url": "assets/js/165.2882c00d.js",
    "revision": "3e83d2e4927a0951221e665f5a5a9bb3"
  },
  {
    "url": "assets/js/166.e1902c74.js",
    "revision": "cce3f029846249cefdf371001dbdcd95"
  },
  {
    "url": "assets/js/167.9f703be5.js",
    "revision": "04f19bea040e1bdba7ca6af284ed5e78"
  },
  {
    "url": "assets/js/168.2f402c2a.js",
    "revision": "362f68ffa8a6c8f8a0de5ac30bbf6a69"
  },
  {
    "url": "assets/js/169.6925a6fe.js",
    "revision": "559f839b44a8d17b8c9c17c584c72361"
  },
  {
    "url": "assets/js/17.e3809dfa.js",
    "revision": "d9fa638cc33b1969d54577911cdc87b4"
  },
  {
    "url": "assets/js/170.9ce221bd.js",
    "revision": "6e3b0fbcfc3a90e58cc80687968369ea"
  },
  {
    "url": "assets/js/171.5c09103c.js",
    "revision": "807a9e01c15e3d7cea75c49cadf26064"
  },
  {
    "url": "assets/js/172.db97c3ef.js",
    "revision": "f220a07734b3c44e0c15911110b5a131"
  },
  {
    "url": "assets/js/173.d32b3b64.js",
    "revision": "c2985bba06d8fd9596da557cece5c90c"
  },
  {
    "url": "assets/js/174.55a925ae.js",
    "revision": "10f9da3caeaebf7005a17b4518134c08"
  },
  {
    "url": "assets/js/175.2eeb74be.js",
    "revision": "337a17547e56ac94105376944fdcd315"
  },
  {
    "url": "assets/js/176.c26d4a47.js",
    "revision": "269baf040d8f7b01e29abe5bb16011f0"
  },
  {
    "url": "assets/js/177.66c702b1.js",
    "revision": "e8c05b18aeef7a91790b9dc48c4110dd"
  },
  {
    "url": "assets/js/178.48e87bdc.js",
    "revision": "449d79c0eeb22c7c85016910385ee1c1"
  },
  {
    "url": "assets/js/179.ef73d507.js",
    "revision": "52532585cca7cb83e48bf9fa9a38c7e4"
  },
  {
    "url": "assets/js/18.cc2df5bd.js",
    "revision": "8aa643d9f36c4afedf26d7104482c9dc"
  },
  {
    "url": "assets/js/180.b75d4661.js",
    "revision": "c9c59732b2ecfe0964bc16b783bd4a97"
  },
  {
    "url": "assets/js/181.7abc7eaf.js",
    "revision": "f795d4d7c42d2bd5fb74ab9e5a0ccb9f"
  },
  {
    "url": "assets/js/182.26cba666.js",
    "revision": "4e005167f20cc335858c5cb031216f16"
  },
  {
    "url": "assets/js/183.d2cd3c38.js",
    "revision": "fe2bc5481563376bf56d489e55b4d326"
  },
  {
    "url": "assets/js/184.805e82b5.js",
    "revision": "627cc13575dc5bed8ec7da918484b620"
  },
  {
    "url": "assets/js/185.0d527df4.js",
    "revision": "5fb5b9e5fb1cc1742a582221a657da6c"
  },
  {
    "url": "assets/js/186.5b74a80f.js",
    "revision": "7c1474c2815456135de29fbb84ab8679"
  },
  {
    "url": "assets/js/187.c15dc626.js",
    "revision": "54f721766721e984ab37b978e7664885"
  },
  {
    "url": "assets/js/188.2e6ded77.js",
    "revision": "bb6766e589e02b5b871ee84ec027df04"
  },
  {
    "url": "assets/js/189.deae32a6.js",
    "revision": "3265714601c7466e37d6592a7d1baf58"
  },
  {
    "url": "assets/js/19.6a1e0dae.js",
    "revision": "4c3a0172e2574a8b4f2f47adbaca032d"
  },
  {
    "url": "assets/js/190.2c0ae8eb.js",
    "revision": "d141a254448adbcec73792cf3f073198"
  },
  {
    "url": "assets/js/191.6ad155d3.js",
    "revision": "845ec58083eecb58bec67442846534b4"
  },
  {
    "url": "assets/js/192.13858221.js",
    "revision": "e5dae679a4272d981ebaccd0704adfc7"
  },
  {
    "url": "assets/js/193.cb4a239f.js",
    "revision": "c5c29b9c9168d39226078d45e70875d3"
  },
  {
    "url": "assets/js/194.10b5714e.js",
    "revision": "06234d51f5e7a50c244b33a7e8454f09"
  },
  {
    "url": "assets/js/195.065516bc.js",
    "revision": "54349a1f04c700067aa57c74d333edc3"
  },
  {
    "url": "assets/js/196.1cd02b42.js",
    "revision": "6adbabb4852d26ec71c553cb550a8e90"
  },
  {
    "url": "assets/js/197.5bb1de54.js",
    "revision": "ea7ca74db4494240ccbbbf20e34db904"
  },
  {
    "url": "assets/js/198.05202000.js",
    "revision": "e802c293cbdceb1348e92aae0f8e85d0"
  },
  {
    "url": "assets/js/199.c1bbfabe.js",
    "revision": "15e94276838162b0d8c9be7338ac8f38"
  },
  {
    "url": "assets/js/2.48bf54f8.js",
    "revision": "16eb2b18b020935f4eda948fb5fc9653"
  },
  {
    "url": "assets/js/20.e3703432.js",
    "revision": "598fcda006e2eb0b01cbdb453f1ce54e"
  },
  {
    "url": "assets/js/200.10550262.js",
    "revision": "2086015f0e0272316f3cac415df3c08c"
  },
  {
    "url": "assets/js/201.ed3010f6.js",
    "revision": "17cbfe73a5b9c1a201ec4a18aed32b60"
  },
  {
    "url": "assets/js/202.31ca1707.js",
    "revision": "be556416cc86ef62aabf8117a2ec8ebe"
  },
  {
    "url": "assets/js/203.60e331d6.js",
    "revision": "f0530d6540349dcd3a99b46a0f50fca3"
  },
  {
    "url": "assets/js/204.776bf8aa.js",
    "revision": "96de0f67d75745d4918ddf5b15644e9b"
  },
  {
    "url": "assets/js/205.43c74e58.js",
    "revision": "3bb3de8226a2b0f6dcdeb6d09434d6be"
  },
  {
    "url": "assets/js/206.a00aa36f.js",
    "revision": "75bfa84f9f1b7ed21e8c914197c24a61"
  },
  {
    "url": "assets/js/207.c1025bbd.js",
    "revision": "5a663cbc78ee81505b667f45bd00133f"
  },
  {
    "url": "assets/js/208.220abf4d.js",
    "revision": "a57d4ee19a525df4bf6db54cd8070bba"
  },
  {
    "url": "assets/js/209.b8b252a9.js",
    "revision": "5ee17039c8fb83beaf8883c18b749ab4"
  },
  {
    "url": "assets/js/21.f3a796d9.js",
    "revision": "c4ccf42c95c918fbdb55d21097156118"
  },
  {
    "url": "assets/js/210.de4583f7.js",
    "revision": "a9d56b765d91abc37b8d846dca072166"
  },
  {
    "url": "assets/js/211.c406bb0d.js",
    "revision": "d6f01a89c195824d2c99e484f912f29a"
  },
  {
    "url": "assets/js/212.25848be9.js",
    "revision": "00fe14fe4b7e45e5aae6b982ed229499"
  },
  {
    "url": "assets/js/213.33bf915c.js",
    "revision": "010baab49a18225f7a44ec0572b69889"
  },
  {
    "url": "assets/js/214.28b36366.js",
    "revision": "1f5e204bcee08f871c0c9ef0c9dab387"
  },
  {
    "url": "assets/js/215.5299c310.js",
    "revision": "c321b25eab8b9513ce30083fd7da4b1a"
  },
  {
    "url": "assets/js/216.e57365f2.js",
    "revision": "a0036230f8eb921d1f4451b7c5850fd1"
  },
  {
    "url": "assets/js/217.f001147a.js",
    "revision": "cd132259f16673a93f9eff972132e761"
  },
  {
    "url": "assets/js/218.606608cd.js",
    "revision": "c942ff7f75aa0635041ec7489ae6647a"
  },
  {
    "url": "assets/js/219.5ad27241.js",
    "revision": "00744209bb6d55db712650f6e4e4ad78"
  },
  {
    "url": "assets/js/22.36dc107b.js",
    "revision": "8dc6c5d32dc7363d95f872d63b72b10f"
  },
  {
    "url": "assets/js/220.efca954e.js",
    "revision": "530c1965eb976bbcd4ac8c4cd9bf3afa"
  },
  {
    "url": "assets/js/221.a2c38bec.js",
    "revision": "cf235326e314e10eef0f939ca3c9ec93"
  },
  {
    "url": "assets/js/222.c97ad116.js",
    "revision": "ab15fc612cbb475b0f43bc6afb9dc707"
  },
  {
    "url": "assets/js/223.d3cff298.js",
    "revision": "04e1ecbf7e128270b984e4f78895beb2"
  },
  {
    "url": "assets/js/224.af2c4f88.js",
    "revision": "dce0a5510cbdfbd22e4b27d6dffcf771"
  },
  {
    "url": "assets/js/225.5400c532.js",
    "revision": "08da57a5419c43be4edd1bf4992aa5ad"
  },
  {
    "url": "assets/js/226.fa3ba92f.js",
    "revision": "851888c918f242862136175652f14b3f"
  },
  {
    "url": "assets/js/227.7f0ede4f.js",
    "revision": "99aa42d2115be460d72a65b9534bce2a"
  },
  {
    "url": "assets/js/228.6edec797.js",
    "revision": "409ff0c591748d9c5671efe80a5473fd"
  },
  {
    "url": "assets/js/229.78fc2e6c.js",
    "revision": "86bb5815ee8223f2323a271a20a8f293"
  },
  {
    "url": "assets/js/23.0d98e779.js",
    "revision": "33fc03ea04f1e8cf0165446211ff2208"
  },
  {
    "url": "assets/js/230.2accce23.js",
    "revision": "5652e43b76068d73008b3b889e85d422"
  },
  {
    "url": "assets/js/231.96ecd75e.js",
    "revision": "f2c1ea60d72efd02308e6124ae8fa814"
  },
  {
    "url": "assets/js/232.ff9cdb76.js",
    "revision": "fb9c58ca140b6cfaebf6b0503d041544"
  },
  {
    "url": "assets/js/233.e1628d15.js",
    "revision": "b034d814ca146691ae58649e99ffd42b"
  },
  {
    "url": "assets/js/234.2c05da62.js",
    "revision": "b50bb773e87940804578f8a43ac68cb0"
  },
  {
    "url": "assets/js/235.739ed336.js",
    "revision": "d61ca735c4b33ce75300082db0f790dd"
  },
  {
    "url": "assets/js/236.41b246fa.js",
    "revision": "a8fcb641175b4450c13145d91476045a"
  },
  {
    "url": "assets/js/237.44cd5998.js",
    "revision": "b9b8e950eb1a5c3015aacf2861f2e5e0"
  },
  {
    "url": "assets/js/238.0d9c4a49.js",
    "revision": "2f0fad51758dbb21d4b155b8b0504967"
  },
  {
    "url": "assets/js/239.1c96c082.js",
    "revision": "8cfd8f22e27b1dd8fc8a00f30c93b4ef"
  },
  {
    "url": "assets/js/24.389f34f0.js",
    "revision": "5273971c56690835e0b7bcc53e6eef8d"
  },
  {
    "url": "assets/js/240.ac8c3fce.js",
    "revision": "83cc685797516ee091de4bc2b1cf201f"
  },
  {
    "url": "assets/js/25.96b065ef.js",
    "revision": "8521ce2f83d6e2873fcdad609e0ccc82"
  },
  {
    "url": "assets/js/26.7fc02d57.js",
    "revision": "a8b9c144138d29969bf17f27ea97b42c"
  },
  {
    "url": "assets/js/27.684ee6ec.js",
    "revision": "70cdcd837b3c49a0d2f22b3f61d551cb"
  },
  {
    "url": "assets/js/28.f61c3630.js",
    "revision": "aa6b1d79e4dc9db006e6096bced3b632"
  },
  {
    "url": "assets/js/29.338b945a.js",
    "revision": "9b2c5eba91e9f3ddb58c3ba5836b7a5a"
  },
  {
    "url": "assets/js/3.6f4cde73.js",
    "revision": "a0fc0bdf56c2789ff7e8a12f902797e1"
  },
  {
    "url": "assets/js/30.19836e57.js",
    "revision": "6349845a85fc348c5f4ce78d1bbf2ed5"
  },
  {
    "url": "assets/js/31.d1ad4549.js",
    "revision": "c44f3f1177dc9caf63b8cd0c656f3757"
  },
  {
    "url": "assets/js/32.7111d375.js",
    "revision": "ba1c6bee2c987055dadfec5bd3ea81f8"
  },
  {
    "url": "assets/js/33.a867de63.js",
    "revision": "8a53ad760529b985d5a6226464dceb8a"
  },
  {
    "url": "assets/js/34.0effc446.js",
    "revision": "559d72dffed8bdaf73eb2163a2670eaf"
  },
  {
    "url": "assets/js/35.32f1a01f.js",
    "revision": "fd3d4703bba5d042733f29bd9d8c1e0e"
  },
  {
    "url": "assets/js/36.a368fbf5.js",
    "revision": "3424595482f784b932f72a35a4f8c7c1"
  },
  {
    "url": "assets/js/37.a0410ca0.js",
    "revision": "064faffc9bfe8acbc0c5458bf660753b"
  },
  {
    "url": "assets/js/38.ed2601bc.js",
    "revision": "49d5cae19cfe0398be65cad20640e49e"
  },
  {
    "url": "assets/js/39.a1849bfc.js",
    "revision": "91704eb9274d51af9688cd86428fd80d"
  },
  {
    "url": "assets/js/4.d151e051.js",
    "revision": "fca8ad0c95e9e029462267ab81e25207"
  },
  {
    "url": "assets/js/40.cc838edd.js",
    "revision": "75654698cb723b8055347761814bc386"
  },
  {
    "url": "assets/js/41.977a2bde.js",
    "revision": "9710c884476a9205e97763f18d7fa391"
  },
  {
    "url": "assets/js/42.5c4f2d93.js",
    "revision": "29c0fee862837de872091b1ae36fa8f1"
  },
  {
    "url": "assets/js/43.84ffc9aa.js",
    "revision": "4f0bd43e0b807ada7fcdea652bf7a5d2"
  },
  {
    "url": "assets/js/44.9eb6229d.js",
    "revision": "58b2234278f9430c772e59f3fd9708fd"
  },
  {
    "url": "assets/js/45.55eee099.js",
    "revision": "1df5b55783c36e1eb891886633d1bd69"
  },
  {
    "url": "assets/js/46.043507bb.js",
    "revision": "adb5f742af0e85a43cfc45d1aa7a7eae"
  },
  {
    "url": "assets/js/47.76246a67.js",
    "revision": "bae130664e719363b7ccc03dfeb349c0"
  },
  {
    "url": "assets/js/48.6e21f149.js",
    "revision": "4ef3534c86bfd4dae344e62810f758cc"
  },
  {
    "url": "assets/js/49.bc2791d6.js",
    "revision": "7387557c80168ecdad8f7964beebcde6"
  },
  {
    "url": "assets/js/5.b790eb11.js",
    "revision": "57e505ae6fb5d2c60cbc62047a9ecb85"
  },
  {
    "url": "assets/js/50.c18decd3.js",
    "revision": "b488d5223074b519fc20234783a52699"
  },
  {
    "url": "assets/js/51.b208a0e2.js",
    "revision": "8800aaadcac0cf9f73f076f4e6feafd7"
  },
  {
    "url": "assets/js/52.b4fb9d5c.js",
    "revision": "49ed5886dd7cb99cdbddd58f9418dcdc"
  },
  {
    "url": "assets/js/53.3ad37b7c.js",
    "revision": "fb5e38a06078a3de763df2f1f726e982"
  },
  {
    "url": "assets/js/54.5fd4a9e4.js",
    "revision": "a891646dc9a67510c3f956ce111b105a"
  },
  {
    "url": "assets/js/55.2ab833bd.js",
    "revision": "01a77a8388a36bdd0ac3f372cb5110fe"
  },
  {
    "url": "assets/js/56.982f71c1.js",
    "revision": "6ca8be0660f0b48e5541aafdfb0698b4"
  },
  {
    "url": "assets/js/57.f68fc5b1.js",
    "revision": "82162363c5d59a25a3cf1b8b6474ea8d"
  },
  {
    "url": "assets/js/58.b20b54bf.js",
    "revision": "c0cdb1d4e1b93dd9a4324b6f8637336c"
  },
  {
    "url": "assets/js/59.4e1e09c7.js",
    "revision": "278c5ac62493a068e8b5e23eca70b7ff"
  },
  {
    "url": "assets/js/6.2e7125b5.js",
    "revision": "aeaf3e251d84b10ca2f6dc5017a2b91f"
  },
  {
    "url": "assets/js/60.a9f411a4.js",
    "revision": "967ed2faebd0287932e102dce09cd1e5"
  },
  {
    "url": "assets/js/61.1b2ffc08.js",
    "revision": "2cc54fab95d3d0f1aef39cf2b17789cd"
  },
  {
    "url": "assets/js/62.85567973.js",
    "revision": "9395a754d96a3b4ae8086499beacb3db"
  },
  {
    "url": "assets/js/63.b0bc4781.js",
    "revision": "97cf74dc97d0155594f46dc31d5144f2"
  },
  {
    "url": "assets/js/64.3d065a70.js",
    "revision": "88808452c2d90874a5bea0fc9919016a"
  },
  {
    "url": "assets/js/65.75f8d774.js",
    "revision": "5699ffba1307332871a0a2173e6fed36"
  },
  {
    "url": "assets/js/66.4c3931ae.js",
    "revision": "ea44cb9bda4f2089737539dd7a524fa3"
  },
  {
    "url": "assets/js/67.b3501f03.js",
    "revision": "00c007d1086907195664790fe8bc4b55"
  },
  {
    "url": "assets/js/68.e7fb7f10.js",
    "revision": "4f12cc6b542a32f232aa627b6831cf94"
  },
  {
    "url": "assets/js/69.1394e998.js",
    "revision": "263b67fc34df790f5d8bb2096af87a3c"
  },
  {
    "url": "assets/js/7.ff9bfac6.js",
    "revision": "d6bfbb689ae9de34c686b54d02ffa618"
  },
  {
    "url": "assets/js/70.8ee6d2a7.js",
    "revision": "8ea41190b27af9b9bb71ac2282cb2e07"
  },
  {
    "url": "assets/js/71.fa40303c.js",
    "revision": "0bc01ab8006c6d0b0b9284532846c76b"
  },
  {
    "url": "assets/js/72.004aade2.js",
    "revision": "737dce6748aeee1308dbe0319d90eb4d"
  },
  {
    "url": "assets/js/73.20bdb8c4.js",
    "revision": "586d87774f8c40b37bc016ddbc6c9685"
  },
  {
    "url": "assets/js/74.9e30d9bc.js",
    "revision": "a2d4bc54bbc363d38e5d3d3e25a9a5b0"
  },
  {
    "url": "assets/js/75.1ac511ef.js",
    "revision": "3bf73a3ea9e49ad814a8906bd6f2ee56"
  },
  {
    "url": "assets/js/76.8598f6bf.js",
    "revision": "bdc44fbab3fd22b9c7b1d191ea164f2a"
  },
  {
    "url": "assets/js/77.5bf2f34d.js",
    "revision": "3f248b517be4da9b71f7859b208fb7d8"
  },
  {
    "url": "assets/js/78.b38dfffa.js",
    "revision": "3aadfe1e9dc1e5c005e5ee8cbc92f478"
  },
  {
    "url": "assets/js/79.bf535a98.js",
    "revision": "9198840d53760e6536f00949ad2259fa"
  },
  {
    "url": "assets/js/8.cb2011ce.js",
    "revision": "7744367778b9e5e128e05f7ae33ac6b5"
  },
  {
    "url": "assets/js/80.df658f53.js",
    "revision": "80140d5cb1772b3f454c5179eacaa1ce"
  },
  {
    "url": "assets/js/81.24757c70.js",
    "revision": "91a4075f4cc196dd3d5390dee51d92fe"
  },
  {
    "url": "assets/js/82.34f38613.js",
    "revision": "b1e09d375b7ab3bd1419d71c5d354c79"
  },
  {
    "url": "assets/js/83.bcb1d433.js",
    "revision": "1cc014d64ab464afb15dd147f67a227a"
  },
  {
    "url": "assets/js/84.0d37e558.js",
    "revision": "e88eaccef27405a0e8facb12f54b6d56"
  },
  {
    "url": "assets/js/85.96a93c9b.js",
    "revision": "5db54b3d148466f7c0d2409262744660"
  },
  {
    "url": "assets/js/86.df66a7a0.js",
    "revision": "dbf93c55ee458a605750ae0ec797a600"
  },
  {
    "url": "assets/js/87.501e9e29.js",
    "revision": "df05c44de2795beb6fb842137e4063cc"
  },
  {
    "url": "assets/js/88.95f59057.js",
    "revision": "3cacf86f00ca7bb12656fd5c6d7e7018"
  },
  {
    "url": "assets/js/89.6c3e4c95.js",
    "revision": "05883bf4e179339344c3f9efb7c2a642"
  },
  {
    "url": "assets/js/9.eb577b09.js",
    "revision": "143bc323974ec1941d1c5e44902c0879"
  },
  {
    "url": "assets/js/90.03af8b4a.js",
    "revision": "7f617ea747198cff351caed037c953f0"
  },
  {
    "url": "assets/js/91.5ee28cbf.js",
    "revision": "e973336f38f4feeed0d7f5054dea1984"
  },
  {
    "url": "assets/js/92.ab2a40b7.js",
    "revision": "7f5baf25a8d913b7fd8783fe5e7ae29f"
  },
  {
    "url": "assets/js/93.078b053b.js",
    "revision": "a3d7af37cd72823dc4edb5ca2af62a3d"
  },
  {
    "url": "assets/js/94.1d8fa61c.js",
    "revision": "72d9569e82e0ee893913c50c3322d305"
  },
  {
    "url": "assets/js/95.1a86bf39.js",
    "revision": "808601f13ce3cd0272942e99a40f77b5"
  },
  {
    "url": "assets/js/96.8d9e3e18.js",
    "revision": "6b2f55da48342e3ab684fc39c7385d89"
  },
  {
    "url": "assets/js/97.08ed141f.js",
    "revision": "5f613185a239c5f4693e02f32fe79787"
  },
  {
    "url": "assets/js/98.3597b316.js",
    "revision": "d7a8fedd8b5ba252e2fcfe97cdcaf1d0"
  },
  {
    "url": "assets/js/99.8d90eb82.js",
    "revision": "30a10798ad31eb03b6bc1281c992be0b"
  },
  {
    "url": "assets/js/app.9dbdfba9.js",
    "revision": "e702ad274fac91ff2332341401b7f084"
  },
  {
    "url": "backlog.html",
    "revision": "36cef09d1b2ab5b9768033ec3e2dba8a"
  },
  {
    "url": "concepts/enabled-elements.html",
    "revision": "7717509f66a0b20d4b6290f9fad9db73"
  },
  {
    "url": "concepts/image-ids.html",
    "revision": "3bd147b96b5f947b9c862dc89b90856c"
  },
  {
    "url": "concepts/image-loaders.html",
    "revision": "63f0b04f5e77df8fc78768f13b0af84b"
  },
  {
    "url": "concepts/images.html",
    "revision": "ad07068375e50432fce5dbcf6f9a9d2c"
  },
  {
    "url": "concepts/libraries.html",
    "revision": "ba878cacab2aed213221e63a68ce30c6"
  },
  {
    "url": "concepts/metadata-providers.html",
    "revision": "24b87965c6e5cb4e70c586a13956a0a5"
  },
  {
    "url": "concepts/pixel-coordinate-system.html",
    "revision": "d08ca3e2a43a95ae5a0ba5558c49dcbd"
  },
  {
    "url": "concepts/rendering-loop.html",
    "revision": "e9ea1b9d5023a30a1293e59c3dfb47a2"
  },
  {
    "url": "concepts/rendering-pipeline.html",
    "revision": "6185b1dc61623fdc799b24b62be439d3"
  },
  {
    "url": "concepts/viewports.html",
    "revision": "ac18c022d0d1f013a274f72b85b42fa5"
  },
  {
    "url": "contributing.html",
    "revision": "d3dae9f43c9c22976bda9a593cf8707f"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/angle.gif",
    "revision": "da40c47b8f6f367f493c33ced0d403f5"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/elliptical-roi.gif",
    "revision": "0d724d0d7bc597b8bc4c11055a12e094"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/length.gif",
    "revision": "e476d08b866e12ce8104d906697301a1"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/pan.gif",
    "revision": "ca6fe171778f7b3b418c6daf5335e2e7"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/probe.gif",
    "revision": "71952e540a3c76bf366fefbe3f6864fd"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/rectangle-roi.gif",
    "revision": "87375c9ed10be2147ea0f9e801837872"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/reference-lines.gif",
    "revision": "0f35ba728a2625ea1deb667b4e6e3478"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/stack-scroll.gif",
    "revision": "2e0487f36876fc8165b9ede308159ed3"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/wwwc.gif",
    "revision": "9defa071365ee4cc4919ccd482299615"
  },
  {
    "url": "cornerstone-tools-2-examples/00-tool-images/zoom.gif",
    "revision": "ede1281a722f85c9d3b12746723d9a10"
  },
  {
    "url": "cornerstone-tools-2-examples/allImageTools/index.html",
    "revision": "2b7fab20446068fb7e3fc7b8fd80b429"
  },
  {
    "url": "cornerstone-tools-2-examples/alltouchtools/index.html",
    "revision": "2f08f84aac24f21c8dd9b823bb77d664"
  },
  {
    "url": "cornerstone-tools-2-examples/angleTool/index.html",
    "revision": "c94bf0fd4d97b4cc2bafb3f409bad84d"
  },
  {
    "url": "cornerstone-tools-2-examples/annotation/index.html",
    "revision": "22a27308cda42865e4ecd4f1ab5d90da"
  },
  {
    "url": "cornerstone-tools-2-examples/bootstrap.min.css",
    "revision": "8a7442ca6bedd62cec4881040b9a9e83"
  },
  {
    "url": "cornerstone-tools-2-examples/clearToolData/index.html",
    "revision": "c4d218d7bcad1e7f735bce210d73dbd8"
  },
  {
    "url": "cornerstone-tools-2-examples/cornerstone.js",
    "revision": "0a8537e8c3aa4d4d092ac4efcc149183"
  },
  {
    "url": "cornerstone-tools-2-examples/cornerstone.min.css",
    "revision": "e8ecc2c456f04a79f45c5d3b21146c81"
  },
  {
    "url": "cornerstone-tools-2-examples/cornerstone.min.js",
    "revision": "aa0096580ec0ca4809110953a8a321f1"
  },
  {
    "url": "cornerstone-tools-2-examples/cornerstoneMath.min.js",
    "revision": "05185008ee935d66ced43c1a46c03526"
  },
  {
    "url": "cornerstone-tools-2-examples/crosshairs/index.html",
    "revision": "2b2ea8cf253f429b3272250b6558e668"
  },
  {
    "url": "cornerstone-tools-2-examples/dialogPolyfill.css",
    "revision": "76b7dc1ce7bb0f7696b2c2125023d149"
  },
  {
    "url": "cornerstone-tools-2-examples/dialogPolyfill.js",
    "revision": "3bb124542da8e37c0311e788a96645e8"
  },
  {
    "url": "cornerstone-tools-2-examples/dragProbe/index.html",
    "revision": "d3dc0dab26d7da5ba19052c343d19154"
  },
  {
    "url": "cornerstone-tools-2-examples/exampleImageLoader.js",
    "revision": "ef03bd820cc5617ef24210fc30c840bc"
  },
  {
    "url": "cornerstone-tools-2-examples/exampleMetaDataProvider.js",
    "revision": "2ab77116868a7667f1d5c2cb7e629ac5"
  },
  {
    "url": "cornerstone-tools-2-examples/exampleNumberMetaDataProvider.js",
    "revision": "cdb6fb01098331ea5c9b8632cdde52da"
  },
  {
    "url": "cornerstone-tools-2-examples/exampleTextImageLoader.js",
    "revision": "aac5340415070264ae233bc1481ef957"
  },
  {
    "url": "cornerstone-tools-2-examples/freehandRoi/index.html",
    "revision": "1e27e17907f801a95c320407b44e7bdb"
  },
  {
    "url": "cornerstone-tools-2-examples/freehandSculpter/index.html",
    "revision": "b16499b9ed26068f682477da9a1f5a53"
  },
  {
    "url": "cornerstone-tools-2-examples/hammer.min.js",
    "revision": "084aa824c6e6f64cf28551d070abe00c"
  },
  {
    "url": "cornerstone-tools-2-examples/highlight/index.html",
    "revision": "9110ee358594b66fd8ff38f0a3187a0d"
  },
  {
    "url": "cornerstone-tools-2-examples/imageStats/index.html",
    "revision": "bd1d741bf3f3d1354ef62e8a5b131098"
  },
  {
    "url": "cornerstone-tools-2-examples/index.html",
    "revision": "840918aa5630efb6857f80d705c0c7e7"
  },
  {
    "url": "cornerstone-tools-2-examples/layeredImageStacks/index.html",
    "revision": "bdce7645d16ee549f90871708ffbcef4"
  },
  {
    "url": "cornerstone-tools-2-examples/loadHandlers/index.html",
    "revision": "4f28fdf114dec8000e6ca9bfa08648a3"
  },
  {
    "url": "cornerstone-tools-2-examples/magnify/index.html",
    "revision": "93ecb4df68bcae79a69a8b6fc0dcfcbb"
  },
  {
    "url": "cornerstone-tools-2-examples/mobileTouch/index.html",
    "revision": "590a3aeb7e8fe2c0b54ea64f8cb90ebf"
  },
  {
    "url": "cornerstone-tools-2-examples/orientation/index.html",
    "revision": "57c993ad12d64c5d17c12f3b9284f01f"
  },
  {
    "url": "cornerstone-tools-2-examples/orientationMarkers/index.html",
    "revision": "16d85410a5b98c235e2a0d12f510913f"
  },
  {
    "url": "cornerstone-tools-2-examples/panZoomSynchronizer/index.html",
    "revision": "67c3e3d579317337b95229197ede90f7"
  },
  {
    "url": "cornerstone-tools-2-examples/petctImageIdLoader.js",
    "revision": "89fe83ff999c696982d5aa5ae156bac0"
  },
  {
    "url": "cornerstone-tools-2-examples/petctMetaDataProvider.js",
    "revision": "ccf306a7a63ca73b8affc81929ecd449"
  },
  {
    "url": "cornerstone-tools-2-examples/probe/index.html",
    "revision": "35a39824c20cf3932ceaa19e7cb32e7d"
  },
  {
    "url": "cornerstone-tools-2-examples/referenceLineTool/index.html",
    "revision": "5b0f4cd9c10d606c3b3a4b7f63bd6a79"
  },
  {
    "url": "cornerstone-tools-2-examples/rotateTool/index.html",
    "revision": "c342f5bdee707189e9d0eb41820caabc"
  },
  {
    "url": "cornerstone-tools-2-examples/saveAs/index.html",
    "revision": "4cc5d15a2be39ab04f228b2bf02f2e48"
  },
  {
    "url": "cornerstone-tools-2-examples/scaleOverlayTool/index.html",
    "revision": "2c2b8c9327b926738dcbb840e6522124"
  },
  {
    "url": "cornerstone-tools-2-examples/seedPoints/index.html",
    "revision": "7d1dcb104eb2a629a6e6286805fb46da"
  },
  {
    "url": "cornerstone-tools-2-examples/segmentationBrush/index.html",
    "revision": "4bdaade1b579ce8d8f3cc78b7f7a5663"
  },
  {
    "url": "cornerstone-tools-2-examples/stackImageIndexSynchronizer/index.html",
    "revision": "a3457a27dbfcc6b13cea626deeee16ad"
  },
  {
    "url": "cornerstone-tools-2-examples/stackImagePositionOffsetSynchronizer/index.html",
    "revision": "edd57dfda7c39e29193ad3dc1504e4b9"
  },
  {
    "url": "cornerstone-tools-2-examples/stackImagePositionSynchronizer/index.html",
    "revision": "465d9fb1603a868c89535c51c761d1f9"
  },
  {
    "url": "cornerstone-tools-2-examples/stackProgress/index.html",
    "revision": "9d8ed2bfc4e45a38bbaf3a24b7d5f7d6"
  },
  {
    "url": "cornerstone-tools-2-examples/stackScroll/index.html",
    "revision": "44f26c61a5b8c8f5c6f4b1045510bd52"
  },
  {
    "url": "cornerstone-tools-2-examples/stackScrollKeyboard/index.html",
    "revision": "47766d99e4e8b82c4bda1c8b124b4499"
  },
  {
    "url": "cornerstone-tools-2-examples/stackScrollSynchronizer/index.html",
    "revision": "04549a35900924bf8abe068edf071367"
  },
  {
    "url": "cornerstone-tools-2-examples/textMarker/index.html",
    "revision": "c5108d71188e3a1e07b88641315e8f21"
  },
  {
    "url": "cornerstone-tools-2-examples/timeSeries/index.html",
    "revision": "bf5e3a46eb2c8a41209ccf59834803fd"
  },
  {
    "url": "cornerstone-tools-2-examples/toolState/index.html",
    "revision": "d1490d9a34c1543cb628e2c044fe11b7"
  },
  {
    "url": "cornerstone-tools-2-examples/touch-emulator.js",
    "revision": "94e482e079c1fe3887e3cad45d5c87b5"
  },
  {
    "url": "cornerstone-tools-2-examples/unselectableOverlay/index.html",
    "revision": "eb0a677c826abf796f2e90ef54fe9472"
  },
  {
    "url": "cornerstone-tools-2-examples/wwwc/index.html",
    "revision": "6366f6f508eb2038e464fc546a505160"
  },
  {
    "url": "cornerstone-tools-2-examples/wwwcRegion/index.html",
    "revision": "159bb28cabce161431f2606ab75ce290"
  },
  {
    "url": "cornerstone-tools-2-examples/wwwcSynchronizer/index.html",
    "revision": "a0d577e845f4950f6d28e195d8f61343"
  },
  {
    "url": "cornerstone-tools/api.html",
    "revision": "6526032b23731f7c2d24286c8740d951"
  },
  {
    "url": "cornerstone-tools/index.html",
    "revision": "69f86103f9187d2c598f93211afe7c31"
  },
  {
    "url": "cornerstone-tools/latest/anatomy-of-a-tool/configuration.html",
    "revision": "cbda8e922b55483ab0269f9db0c39316"
  },
  {
    "url": "cornerstone-tools/latest/anatomy-of-a-tool/index.html",
    "revision": "91d6cdeaaa20d9bb42bb4bc8a6f668f7"
  },
  {
    "url": "cornerstone-tools/latest/anatomy-of-a-tool/interaction-types.html",
    "revision": "a23aa79852d8d7841cf90fa1586f8f97"
  },
  {
    "url": "cornerstone-tools/latest/anatomy-of-a-tool/measurement-data.html",
    "revision": "b066f1c9ab034d7379b8dc6923125ef9"
  },
  {
    "url": "cornerstone-tools/latest/anatomy-of-a-tool/mixins.html",
    "revision": "2830396d4fb508aa5af86addf538ba29"
  },
  {
    "url": "cornerstone-tools/latest/anatomy-of-a-tool/modes.html",
    "revision": "2e0d8b113f336dedc0dc712c60d84f86"
  },
  {
    "url": "cornerstone-tools/latest/anatomy-of-a-tool/strategies.html",
    "revision": "1ab3fd8735c7afe63eec54e00b20b1eb"
  },
  {
    "url": "cornerstone-tools/latest/announcementDocs.html",
    "revision": "4f4fb68ec70f330aea00db4d7711b64e"
  },
  {
    "url": "cornerstone-tools/latest/api/css/docma.css",
    "revision": "44f1f882c533d6bea979c9fc57e49c32"
  },
  {
    "url": "cornerstone-tools/latest/api/css/styles.css",
    "revision": "0768ae67b5574b3bc43af96ec81912a5"
  },
  {
    "url": "cornerstone-tools/latest/api/img/tree-deep.png",
    "revision": "0124083f99e7f8a9af2ce2e98e82364c"
  },
  {
    "url": "cornerstone-tools/latest/api/img/tree-first.png",
    "revision": "06a7ddfcba3b7f2067543c977b4abeeb"
  },
  {
    "url": "cornerstone-tools/latest/api/img/tree-folded.png",
    "revision": "f7414885b4db3c95d6d87b8243ab9b9f"
  },
  {
    "url": "cornerstone-tools/latest/api/img/tree-last.png",
    "revision": "eac4928d8c08bf22be33b8b8b297e800"
  },
  {
    "url": "cornerstone-tools/latest/api/img/tree-node.png",
    "revision": "d33bca302f786a388d90d9740e1e4339"
  },
  {
    "url": "cornerstone-tools/latest/api/img/tree-parent.png",
    "revision": "49d995fca3b23c2953e5872b0d76792e"
  },
  {
    "url": "cornerstone-tools/latest/api/img/tree-space.png",
    "revision": "bc1040cc927ffdf1a520252231955f51"
  },
  {
    "url": "cornerstone-tools/latest/api/index.html",
    "revision": "9eadb83818e3379819e2b2c14a4ee6b0"
  },
  {
    "url": "cornerstone-tools/latest/api/js/app.min.js",
    "revision": "2cf91684f03ee9c047e5de97d004eb09"
  },
  {
    "url": "cornerstone-tools/latest/api/js/docma-web.js",
    "revision": "2357648adba9b4aa4f1e213cefe99837"
  },
  {
    "url": "cornerstone-tools/latest/api/js/highlight.pack.js",
    "revision": "a8b1bf103077e0d7bbfb7d021b47efdf"
  },
  {
    "url": "cornerstone-tools/latest/api/js/tippy.all.min.js",
    "revision": "1671ad4a072ab8dae3a9c2e726c3b190"
  },
  {
    "url": "cornerstone-tools/latest/contributing.html",
    "revision": "14ab098ceaf0aa921d6b038d87424d82"
  },
  {
    "url": "cornerstone-tools/latest/custom-tools/adding-mixins.html",
    "revision": "6a055d2312e02785c002a60f69c60894"
  },
  {
    "url": "cornerstone-tools/latest/custom-tools/choosing-a-base-class.html",
    "revision": "52ab09ee2d3a4d4201bf6eef924f3f6c"
  },
  {
    "url": "cornerstone-tools/latest/custom-tools/creating-your-tool.html",
    "revision": "bb88b62f07348ef8a82af24157dabdb6"
  },
  {
    "url": "cornerstone-tools/latest/custom-tools/event-dispatcher-callbacks.html",
    "revision": "1f99ad51a42ed97b88497e99bcd69f8b"
  },
  {
    "url": "cornerstone-tools/latest/custom-tools/index.html",
    "revision": "7f530b728962cb227418450f36b16207"
  },
  {
    "url": "cornerstone-tools/latest/custom-tools/mode-change-callbacks.html",
    "revision": "ea73efb27934415ed3b84de929e2eb0c"
  },
  {
    "url": "cornerstone-tools/latest/debugging/index.html",
    "revision": "825745413031d701851efd323841a306"
  },
  {
    "url": "cornerstone-tools/latest/guides/migrating-major-versions.html",
    "revision": "9b2db9a9e91ed6b70cd42b388a26af5d"
  },
  {
    "url": "cornerstone-tools/latest/index.html",
    "revision": "0772f9ec1828e79d73760a9c220fee46"
  },
  {
    "url": "cornerstone-tools/latest/installation.html",
    "revision": "8c455b6e87a2368c5325d47342d26f7f"
  },
  {
    "url": "cornerstone-tools/latest/migration/index.html",
    "revision": "72354200efbf91515873cd5dbe97fc63"
  },
  {
    "url": "cornerstone-tools/latest/modules/cursors.html",
    "revision": "3b4bd4f0e9d95b281c083680d52c964f"
  },
  {
    "url": "cornerstone-tools/latest/modules/global-configuration.html",
    "revision": "c2abc1dc7d36ef2d9ceca460483596a5"
  },
  {
    "url": "cornerstone-tools/latest/modules/index.html",
    "revision": "77331d06c522e3c1bbad3733f04ed5fc"
  },
  {
    "url": "cornerstone-tools/latest/modules/segmentation.html",
    "revision": "2e2580be834e7da932ae17c16a2e7f24"
  },
  {
    "url": "cornerstone-tools/latest/partials/example-warning.html",
    "revision": "b43718a187ee3410c2ada611daa3ae5d"
  },
  {
    "url": "cornerstone-tools/latest/SUMMARY.html",
    "revision": "1f60518e40bed6b72dae22c862e3c9f8"
  },
  {
    "url": "cornerstone-tools/latest/third-party-functionality/imports.html",
    "revision": "d2fb8ff5b95a0eab8b3b2c343e078cb6"
  },
  {
    "url": "cornerstone-tools/latest/third-party-functionality/index.html",
    "revision": "60c35acf8918f7ff5ad9acb440437a86"
  },
  {
    "url": "cornerstone-tools/latest/third-party-functionality/item-types.html",
    "revision": "955e11b9c58f2fecced09b89370c33e1"
  },
  {
    "url": "cornerstone-tools/latest/third-party-functionality/registration.html",
    "revision": "8c95466121b044ca92842228f2f2d997"
  },
  {
    "url": "cornerstone-tools/latest/third-party-functionality/tools.html",
    "revision": "12844763b2873e6cf2d87e4303fb1757"
  },
  {
    "url": "cornerstone-tools/latest/tool-mixins/binary-tools.html",
    "revision": "0c2bb248a4bdcdb318cacd7d23ef3830"
  },
  {
    "url": "cornerstone-tools/latest/tool-mixins/index.html",
    "revision": "c673c20c315eb169529637545c9848f2"
  },
  {
    "url": "cornerstone-tools/latest/tool-mixins/segmentation-mixins.html",
    "revision": "a5080ac9e23e00cc98c447b268bf62f9"
  },
  {
    "url": "cornerstone-tools/latest/tool-types/base-annotation-tool.html",
    "revision": "3fe26154c5aeb3a88fc42e997ff5c5c0"
  },
  {
    "url": "cornerstone-tools/latest/tool-types/base-brush-tool.html",
    "revision": "a46f0c130044ce0ddba115f6e68b3515"
  },
  {
    "url": "cornerstone-tools/latest/tool-types/base-tool.html",
    "revision": "8534d5142ae34fea761308d392113719"
  },
  {
    "url": "cornerstone-tools/latest/tool-types/index.html",
    "revision": "d10cd598ca53bf08bc4078012ce408a0"
  },
  {
    "url": "cornerstone-tools/latest/tool-types/segmentation-tool.html",
    "revision": "1b9e93fb76f955bda3b70f864cdd2880"
  },
  {
    "url": "cornerstone-tools/v2/advanced/layered-image-stacks.html",
    "revision": "4131b5565d6510d6e00b86d7d02b8965"
  },
  {
    "url": "cornerstone-tools/v2/contributing.html",
    "revision": "9a1b105eb2d0a73f9978a3faac0360e2"
  },
  {
    "url": "cornerstone-tools/v2/custom-tools/anatomy-of-a-tool.html",
    "revision": "41f9734a30599e4f1836e79330f74531"
  },
  {
    "url": "cornerstone-tools/v2/custom-tools/simple-tools.html",
    "revision": "f802d91b36a53d7eabb033a5d45d8b05"
  },
  {
    "url": "cornerstone-tools/v2/essentials/getting-started.html",
    "revision": "526279f8443e38ca50be3384782c6a6d"
  },
  {
    "url": "cornerstone-tools/v2/essentials/image-tools.html",
    "revision": "e3e25876c33ecb1a6609e767e7702730"
  },
  {
    "url": "cornerstone-tools/v2/essentials/input-sources.html",
    "revision": "5d45cc7e07612f7d9c43cfcf1a682492"
  },
  {
    "url": "cornerstone-tools/v2/essentials/stack-tools.html",
    "revision": "7dfbd8d2e0ed76707cf332b7302d8be7"
  },
  {
    "url": "cornerstone-tools/v2/essentials/tool-data.html",
    "revision": "67901f8dba556bf973678da381940ce1"
  },
  {
    "url": "cornerstone-tools/v2/essentials/tool-states.html",
    "revision": "54ec53a4df71139b7e37956f123be069"
  },
  {
    "url": "cornerstone-tools/v2/guides/migrating-major-versions.html",
    "revision": "5cc3e20dea9b6e23ae7599c41a19f693"
  },
  {
    "url": "cornerstone-tools/v2/index.html",
    "revision": "373ee31b4636c9e91148e364bf505175"
  },
  {
    "url": "cornerstone-tools/v2/installation.html",
    "revision": "b902d9790e8cddf30a9a525adfd3d23b"
  },
  {
    "url": "cornerstone-tools/v2/SUMMARY.html",
    "revision": "91b6a4fb57ea37dc08b294f674098448"
  },
  {
    "url": "cornerstone-tools/v3/anatomy-of-a-tool/configuration.html",
    "revision": "6460e39b46c14773d19548ca525fbf4d"
  },
  {
    "url": "cornerstone-tools/v3/anatomy-of-a-tool/index.html",
    "revision": "88e48bfb274df94b50b90f3886d8aa4e"
  },
  {
    "url": "cornerstone-tools/v3/anatomy-of-a-tool/interaction-types.html",
    "revision": "59d85330a12dbe982df9e8f04e5353f6"
  },
  {
    "url": "cornerstone-tools/v3/anatomy-of-a-tool/measurement-data.html",
    "revision": "3ad05bf33892afb8542d614c65396c4d"
  },
  {
    "url": "cornerstone-tools/v3/anatomy-of-a-tool/mixins.html",
    "revision": "ff0625a58fffeed590c7f95790c42a24"
  },
  {
    "url": "cornerstone-tools/v3/anatomy-of-a-tool/modes.html",
    "revision": "a6ffef469eb531818427ae76bc717f0d"
  },
  {
    "url": "cornerstone-tools/v3/anatomy-of-a-tool/strategies.html",
    "revision": "e0ca90ae945eaab0d2a816780b68b0fb"
  },
  {
    "url": "cornerstone-tools/v3/contributing.html",
    "revision": "c0b9b8a3aee83e21ee8dc6220f54ae45"
  },
  {
    "url": "cornerstone-tools/v3/custom-tools/adding-mixins.html",
    "revision": "f2154fa2de8445125290e3af6cacaaed"
  },
  {
    "url": "cornerstone-tools/v3/custom-tools/choosing-a-base-class.html",
    "revision": "d1132a59acccb6f0878e75f13d8ff321"
  },
  {
    "url": "cornerstone-tools/v3/custom-tools/creating-your-tool.html",
    "revision": "49386412c382ae4f3ed51d4ae5baa497"
  },
  {
    "url": "cornerstone-tools/v3/custom-tools/event-dispatcher-callbacks.html",
    "revision": "429a4572831a7bdf15fd6799bfa48eee"
  },
  {
    "url": "cornerstone-tools/v3/custom-tools/index.html",
    "revision": "d65b9aa00f8d7c261a8f596fc65d90d1"
  },
  {
    "url": "cornerstone-tools/v3/custom-tools/mode-change-callbacks.html",
    "revision": "05c71de82c186a84d48ba8172d579606"
  },
  {
    "url": "cornerstone-tools/v3/debugging/index.html",
    "revision": "d01cd790a2c17463161ec94081a2aee5"
  },
  {
    "url": "cornerstone-tools/v3/guides/migrating-major-versions.html",
    "revision": "0a9defbbc8f15ecdd256ce10059e45f4"
  },
  {
    "url": "cornerstone-tools/v3/index.html",
    "revision": "862ff05a4cc39bba78edd4f9caf45bad"
  },
  {
    "url": "cornerstone-tools/v3/installation.html",
    "revision": "27d9ff7b3a253d9b545e72bda5e8b22e"
  },
  {
    "url": "cornerstone-tools/v3/migration/index.html",
    "revision": "45cf5e0ca31d7c7f6ecd80a864834444"
  },
  {
    "url": "cornerstone-tools/v3/partials/example-warning.html",
    "revision": "e76e293ff1dec1f3d60a7f7eba3fc684"
  },
  {
    "url": "cornerstone-tools/v3/SUMMARY.html",
    "revision": "81c31d4948c2693b8f7a0837be61b6b2"
  },
  {
    "url": "cornerstone-tools/v3/third-party-functionality/imports.html",
    "revision": "809bb1c958e33876e03c81a2714b12c9"
  },
  {
    "url": "cornerstone-tools/v3/third-party-functionality/index.html",
    "revision": "6964e8b610fbe8f9d4018db72ab60b23"
  },
  {
    "url": "cornerstone-tools/v3/third-party-functionality/item-types.html",
    "revision": "f55ab513bde41a83512804cd613693fd"
  },
  {
    "url": "cornerstone-tools/v3/third-party-functionality/registration.html",
    "revision": "e92d63ac62c0d23fef5ef3a70c209c28"
  },
  {
    "url": "cornerstone-tools/v3/third-party-functionality/tools.html",
    "revision": "8de0aecb57006d03a12eb9d0a0e75f63"
  },
  {
    "url": "cornerstone-tools/v3/tool-mixins/binary-tools.html",
    "revision": "4b691a1110526930308003cb04e5175a"
  },
  {
    "url": "cornerstone-tools/v3/tool-mixins/index.html",
    "revision": "f2a09dffd8776771dc1f91a392c27751"
  },
  {
    "url": "cornerstone-tools/v3/tool-types/base-annotation-tool.html",
    "revision": "a95d0550fc32151f4f70e27e6408b441"
  },
  {
    "url": "cornerstone-tools/v3/tool-types/base-brush-tool.html",
    "revision": "d6b737af30ea27aeebf69f3084974743"
  },
  {
    "url": "cornerstone-tools/v3/tool-types/base-segmentation-tool.html",
    "revision": "f0c84421b8cd149969e9c95170511825"
  },
  {
    "url": "cornerstone-tools/v3/tool-types/base-tool.html",
    "revision": "344f2f21479f0c4930acae8129b8f48d"
  },
  {
    "url": "cornerstone-tools/v3/tool-types/index.html",
    "revision": "f35d723c146d7f6c2b445de83e44fbda"
  },
  {
    "url": "cst-examples/index.html",
    "revision": "35a2439e47643bf0ab6c13b01c634c00"
  },
  {
    "url": "cst-examples/netlify-example/app.css",
    "revision": "f450bc7d90ab10c4e300aa8beeaf9f0e"
  },
  {
    "url": "cst-examples/netlify-example/brush/index.html",
    "revision": "ac931305f65ff9025e5269c5b4dc7b55"
  },
  {
    "url": "cst-examples/netlify-example/crosshairs/index.html",
    "revision": "777c6998b3ab3c6ee075e91bfe86321c"
  },
  {
    "url": "cst-examples/netlify-example/freehandRoi/index.html",
    "revision": "89cc413311cfc1b3095abf03ef4dc145"
  },
  {
    "url": "cst-examples/netlify-example/icon-classes.css",
    "revision": "bdbcb1806658f4e7a36c30ea1e6e4c30"
  },
  {
    "url": "cst-examples/netlify-example/icons/mouse-left.svg",
    "revision": "a632fa618ee3454bad259aa02d2c0633"
  },
  {
    "url": "cst-examples/netlify-example/icons/mouse-middle.svg",
    "revision": "939632e9c055f89a848c9741750103ab"
  },
  {
    "url": "cst-examples/netlify-example/icons/mouse-right.svg",
    "revision": "63c70e71775c69321bc1b5f96304bfd6"
  },
  {
    "url": "cst-examples/netlify-example/imageLoader.js",
    "revision": "af307303721ef8b188a280b2731ace45"
  },
  {
    "url": "cst-examples/netlify-example/metaDataProvider.js",
    "revision": "cf1114284325822b2a5b5d1f8420330a"
  },
  {
    "url": "cst-examples/netlify-example/numberMetaDataProvider.js",
    "revision": "ee47650bcca45c8081191bd60fee0b21"
  },
  {
    "url": "cst-examples/netlify-example/overlay/index.html",
    "revision": "bcb05411c093c8f1a4a913cd021eb0ff"
  },
  {
    "url": "cst-examples/netlify-example/petctImageIdLoader.js",
    "revision": "e0c8c2f86f26222bf62fa6da7821126f"
  },
  {
    "url": "cst-examples/netlify-example/petctMetaDataProvider.js",
    "revision": "9429e2b7cd805fa2006cc4f4e35ebd05"
  },
  {
    "url": "cst-examples/netlify-example/reset.css",
    "revision": "a52e0d57996cbf187601aa1cc71b728c"
  },
  {
    "url": "cst-examples/netlify-example/stack/index.html",
    "revision": "3b530d46111a232bab4987c9d32d5113"
  },
  {
    "url": "cst-examples/netlify-example/textImageLoader.js",
    "revision": "90203ba7d3b53f7960ff418aafaab29e"
  },
  {
    "url": "cst-examples/netlify-example/thirdParty/index.html",
    "revision": "c23c16f9aa8761ff09226e8ad23677e5"
  },
  {
    "url": "cst-examples/netlify-example/tool-help.css",
    "revision": "8d28c09261139509131c070969644313"
  },
  {
    "url": "developer-guide.html",
    "revision": "434e26d08488823211fcad5eb1afc0f7"
  },
  {
    "url": "developmentProcess.html",
    "revision": "60c517ccc4d6e814898dfdf02770dc38"
  },
  {
    "url": "example/changeimage/index.html",
    "revision": "ee858deee60ef7f72c4705917e11ebef"
  },
  {
    "url": "example/colorImage/index.html",
    "revision": "2607ef6fc858c1bad5a1cc1bb00360cd"
  },
  {
    "url": "example/ctimage/index.html",
    "revision": "ac93b6ed6e2fbf172bfe2b7c48c443f7"
  },
  {
    "url": "example/displayedArea/index.html",
    "revision": "84281e6be1d499238a6746fa16946ca1"
  },
  {
    "url": "example/dynamicImage/index.html",
    "revision": "35fa72551f34b73b7e4ab863746aa7fa"
  },
  {
    "url": "example/eventhandling/index.html",
    "revision": "8d8db08ec83b2092bf94aedbfff0cca2"
  },
  {
    "url": "example/exampleImageIdLoader.js",
    "revision": "e12def0a7f8a09266d6547458ab9a7f8"
  },
  {
    "url": "example/exampleImageIdLoaderCt.js",
    "revision": "8abd8a59e6c9746d6198bedeb600b0be"
  },
  {
    "url": "example/exampleImageIdLoaderRaw.js",
    "revision": "6e9555ffe7bd14e85096d8ee21c26136"
  },
  {
    "url": "example/falseColorMapping/index.html",
    "revision": "19d0ef100a1abd386a104ff58f4fa4fa"
  },
  {
    "url": "example/flip&rotation/index.html",
    "revision": "8efd780de09c3fb9a8e1a50a49871740"
  },
  {
    "url": "example/htmloverlays/index.html",
    "revision": "9fde550dc8ddd0059bd7f312fc7419e5"
  },
  {
    "url": "example/imageCache/index.html",
    "revision": "3a24e351653023b66d6c1b3b61510ece"
  },
  {
    "url": "example/imageloader/index.html",
    "revision": "f013d47d7badb38f3ea99dfba6505966"
  },
  {
    "url": "example/index.html",
    "revision": "076c01a1af951913f7433033dc0c591d"
  },
  {
    "url": "example/interpolation/index.html",
    "revision": "8a6a83f13db84a956eab1d2964057b48"
  },
  {
    "url": "example/jsminimal/index.html",
    "revision": "dbe2f4e9f806430f7c6d49020a247512"
  },
  {
    "url": "example/layers/index.html",
    "revision": "948d617656e219dc4b0ceb8bdcd2d6e8"
  },
  {
    "url": "example/modalityAndVIOLut/index.html",
    "revision": "2fa9e21894d2a272a36e97cab5e12926"
  },
  {
    "url": "example/multiimage/index.html",
    "revision": "a94343196fc9c614d74e52585a9efade"
  },
  {
    "url": "example/nonSquarePixels/index.html",
    "revision": "17aec462e2bcf3a2d5a94b0023ccc036"
  },
  {
    "url": "example/petctImageIdLoader.js",
    "revision": "b30e181d636a019a5015615ef74e11d1"
  },
  {
    "url": "example/petctMetaDataProvider.js",
    "revision": "c9552c735ff51130abcd07ed3c31aec5"
  },
  {
    "url": "example/resize/index.html",
    "revision": "9058b54ad62fbc7bd1a49d957e64c322"
  },
  {
    "url": "example/scrollzoompanwl/index.html",
    "revision": "698d70fbb79768ab460ba450c93177b6"
  },
  {
    "url": "example/tools/all/index.html",
    "revision": "d6558167710c37de8257d7fd92f0ff03"
  },
  {
    "url": "example/viewport/index.html",
    "revision": "5377f12296d7e6963e70bf32cf735d8e"
  },
  {
    "url": "example/WebGL/index.html",
    "revision": "243ed27f35f630c87fd5ede2b5f0bc55"
  },
  {
    "url": "example/windowlevel/index.html",
    "revision": "ccb45ff696e954b8e50f1c1c8bbde99d"
  },
  {
    "url": "example/zoompan/index.html",
    "revision": "2aefef38af89f2f053ef9759adb5a340"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a516172f1ae3327b18f674d83e271612"
  },
  {
    "url": "icons/android-chrome-256x256.png",
    "revision": "c3ed7a3750b2374cfd542ac7e71d60d8"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d6acc9a610b1e9ff1adb4f8701ff3ddf"
  },
  {
    "url": "icons/logo192.png",
    "revision": "1a9052ab04f449c2cfff0aed4568fb62"
  },
  {
    "url": "icons/logo512.png",
    "revision": "7b8c1a11624166c337168c6abdf787e3"
  },
  {
    "url": "index.html",
    "revision": "69a1014776489c2854bfea3611922aa0"
  },
  {
    "url": "installation.html",
    "revision": "8e17667b2db06fdac5eff36155e10044"
  },
  {
    "url": "integration.html",
    "revision": "35713ed67101001e79b6f6f8ae2e4f9e"
  },
  {
    "url": "logo.png",
    "revision": "b8f2e4cf868ad5c09d1339b51e191195"
  },
  {
    "url": "roadmap.html",
    "revision": "132620066ed77d5dbb3e8f31c985d209"
  },
  {
    "url": "SUMMARY.html",
    "revision": "568d55970979cfa4431f0d9a3b361b14"
  },
  {
    "url": "zh/advanced/color-lookup-tables.html",
    "revision": "072872ff016cf0cb8174e72026e0f7cc"
  },
  {
    "url": "zh/advanced/enabled-element-data.html",
    "revision": "43f6ce546ab623c26df536856c4fae55"
  },
  {
    "url": "zh/advanced/enabled-element-layers.html",
    "revision": "db96eae85d483daff0ef2a0ad616f42a"
  },
  {
    "url": "zh/advanced/image-cache.html",
    "revision": "658693412cc395a3c9485d93ecf3147a"
  },
  {
    "url": "zh/advanced/legacy-browser-support.html",
    "revision": "84c63504374f205e3d8f5ccbe9423591"
  },
  {
    "url": "zh/advanced/modality-lut-and-voi-lut.html",
    "revision": "a10ac5efbf7be1da6b5f5a4553ec5dcb"
  },
  {
    "url": "zh/advanced/retrieving-pixel-data.html",
    "revision": "26fb17407ab0c0a77905681b435bbd67"
  },
  {
    "url": "zh/advanced/webgl-rendering-pipeline.html",
    "revision": "7a9dd0a681e91f37c845fe3e850892b2"
  },
  {
    "url": "zh/api.html",
    "revision": "cb8e9cc506a52f56cd8b2712837c11ab"
  },
  {
    "url": "zh/backlog.html",
    "revision": "45ac906384303950275e5e3d9538b1d4"
  },
  {
    "url": "zh/concepts/enabled-elements.html",
    "revision": "4571b59e1328e8773ec5f14b563163bf"
  },
  {
    "url": "zh/concepts/image-ids.html",
    "revision": "878d4582751fba9218c63af8d63650d8"
  },
  {
    "url": "zh/concepts/image-loaders.html",
    "revision": "e483a8e12ed418fcaed906ded71c4788"
  },
  {
    "url": "zh/concepts/images.html",
    "revision": "c03f96c26d8995e2918c921f5a027d91"
  },
  {
    "url": "zh/concepts/libraries.html",
    "revision": "01da7f56c939133d78a4407546335a29"
  },
  {
    "url": "zh/concepts/metadata-providers.html",
    "revision": "6a8ddce81b5f363a0b9bc7f876842f7e"
  },
  {
    "url": "zh/concepts/pixel-coordinate-system.html",
    "revision": "fef4709aae74800cbd83598e88562577"
  },
  {
    "url": "zh/concepts/rendering-loop.html",
    "revision": "bc46ef3fdec730524435af432c207cba"
  },
  {
    "url": "zh/concepts/rendering-pipeline.html",
    "revision": "ea77bab6f2e2b1cbfed75170c932eb1b"
  },
  {
    "url": "zh/concepts/viewports.html",
    "revision": "ae72c29a76e5bae1b40f5371431df0e6"
  },
  {
    "url": "zh/contributing.html",
    "revision": "68d5f06d3723bd6fe5ef3d25c2861a3e"
  },
  {
    "url": "zh/cornerstone-tools/index.html",
    "revision": "8ac861a91dc5b5db1d1a7945b28b85a9"
  },
  {
    "url": "zh/cornerstone-tools/latest/anatomy-of-a-tool/configuration.html",
    "revision": "2dd98299bbc68f07ea334ceae91bfc5d"
  },
  {
    "url": "zh/cornerstone-tools/latest/anatomy-of-a-tool/index.html",
    "revision": "d2923450ef066ced67ecd28c44013b72"
  },
  {
    "url": "zh/cornerstone-tools/latest/anatomy-of-a-tool/interaction-types.html",
    "revision": "767d01bd5845cba0895baa1b41f78992"
  },
  {
    "url": "zh/cornerstone-tools/latest/anatomy-of-a-tool/measurement-data.html",
    "revision": "e15143bb26cefc6d8ce572140b9ee20a"
  },
  {
    "url": "zh/cornerstone-tools/latest/anatomy-of-a-tool/mixins.html",
    "revision": "02433f3f7ff6be719b64a266d227af48"
  },
  {
    "url": "zh/cornerstone-tools/latest/anatomy-of-a-tool/modes.html",
    "revision": "4b42f3f2dea5f498810363bd302bc88f"
  },
  {
    "url": "zh/cornerstone-tools/latest/anatomy-of-a-tool/strategies.html",
    "revision": "b4f90517e7990e49618a5273ea4dcd90"
  },
  {
    "url": "zh/cornerstone-tools/latest/announcementDocs.html",
    "revision": "7b14717c123bea0c66d5cac9dc115442"
  },
  {
    "url": "zh/cornerstone-tools/latest/api.html",
    "revision": "030d67c7e00ff5bdeb4957686b0bd3bb"
  },
  {
    "url": "zh/cornerstone-tools/latest/contributing.html",
    "revision": "25b5ce23672bedc1a6ee2e151021c790"
  },
  {
    "url": "zh/cornerstone-tools/latest/custom-tools/adding-mixins.html",
    "revision": "62cd1823ffeee643d4899d95d8972314"
  },
  {
    "url": "zh/cornerstone-tools/latest/custom-tools/choosing-a-base-class.html",
    "revision": "2804ab43a44a1ec3b7cf8608a6532b9f"
  },
  {
    "url": "zh/cornerstone-tools/latest/custom-tools/creating-your-tool.html",
    "revision": "c25a69f58f78d680b8d6a1d61a01ea61"
  },
  {
    "url": "zh/cornerstone-tools/latest/custom-tools/event-dispatcher-callbacks.html",
    "revision": "2972b85fcbfffa340aae3343d8d6ee02"
  },
  {
    "url": "zh/cornerstone-tools/latest/custom-tools/index.html",
    "revision": "5f376a64b165f273243176537ce6e503"
  },
  {
    "url": "zh/cornerstone-tools/latest/custom-tools/mode-change-callbacks.html",
    "revision": "961f92029f0a752cb57403e7337eddb5"
  },
  {
    "url": "zh/cornerstone-tools/latest/debugging/index.html",
    "revision": "3b3bd01fe1016f6b53179ead415ddbd8"
  },
  {
    "url": "zh/cornerstone-tools/latest/guides/migrating-major-versions.html",
    "revision": "9c21053bb970c7505255811c80743b02"
  },
  {
    "url": "zh/cornerstone-tools/latest/index.html",
    "revision": "8d81eb7a3233e3a149abea534d711eeb"
  },
  {
    "url": "zh/cornerstone-tools/latest/installation.html",
    "revision": "824e0c7a267734fee30c7715e53d1af7"
  },
  {
    "url": "zh/cornerstone-tools/latest/migration/index.html",
    "revision": "fea32b6e8732c168738efddc894f39cd"
  },
  {
    "url": "zh/cornerstone-tools/latest/modules/cursors.html",
    "revision": "28f654106b108087f2da4c639bc1d636"
  },
  {
    "url": "zh/cornerstone-tools/latest/modules/global-configuration.html",
    "revision": "3a8858cf2ae7d126c63a519c4ca9d284"
  },
  {
    "url": "zh/cornerstone-tools/latest/modules/index.html",
    "revision": "ffd73679d12d2287673bcc76d107b446"
  },
  {
    "url": "zh/cornerstone-tools/latest/modules/segmentation.html",
    "revision": "48826c1cee3e3f54d60bbab01cdea49c"
  },
  {
    "url": "zh/cornerstone-tools/latest/partials/example-warning.html",
    "revision": "be602b55a016a17821b34ca1dd1efadf"
  },
  {
    "url": "zh/cornerstone-tools/latest/SUMMARY.html",
    "revision": "1a43343f64d01a90d9e65c31ec29ccd3"
  },
  {
    "url": "zh/cornerstone-tools/latest/third-party-functionality/imports.html",
    "revision": "6be87d308b10e50ef08b9c7a76dc8761"
  },
  {
    "url": "zh/cornerstone-tools/latest/third-party-functionality/index.html",
    "revision": "d963bf0e2e378d7d35603a9f08e76a20"
  },
  {
    "url": "zh/cornerstone-tools/latest/third-party-functionality/item-types.html",
    "revision": "25e16edd10c70ed241f86159c70f8cf4"
  },
  {
    "url": "zh/cornerstone-tools/latest/third-party-functionality/registration.html",
    "revision": "592b1b07861988e021208b590487f28f"
  },
  {
    "url": "zh/cornerstone-tools/latest/third-party-functionality/tools.html",
    "revision": "4ce4eb099175f98110087e81d9534170"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-mixins/binary-tools.html",
    "revision": "593c28b3e6aff2a7722b53e1d6bcb22f"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-mixins/index.html",
    "revision": "ed4579b2c6397e3845d06e5d6701b8db"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-mixins/segmentation-mixins.html",
    "revision": "4ac8193fddd30e673bb596627aa7345c"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-types/base-annotation-tool.html",
    "revision": "44f5924fbc20bbec2b9f782c07b3fd7a"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-types/base-brush-tool.html",
    "revision": "680a0a54c2a0c87dde9670b82fc2e936"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-types/base-tool.html",
    "revision": "5a8194df6ca60f2c9c0e6f5ed5034eb4"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-types/index.html",
    "revision": "cfd1edce8f934ea7550df87797eef153"
  },
  {
    "url": "zh/cornerstone-tools/latest/tool-types/segmentation-tool.html",
    "revision": "f7d9847674cb1ae458dcdfad8c8b79ac"
  },
  {
    "url": "zh/cornerstone-tools/v2/advanced/layered-image-stacks.html",
    "revision": "07d58bc15abebbcf63f727f675c2e721"
  },
  {
    "url": "zh/cornerstone-tools/v2/contributing.html",
    "revision": "0dffdb0fefdeef6f9b06a3c2bd6c10ff"
  },
  {
    "url": "zh/cornerstone-tools/v2/custom-tools/anatomy-of-a-tool.html",
    "revision": "921ac9778b3fce981248e1a07dd88cf0"
  },
  {
    "url": "zh/cornerstone-tools/v2/custom-tools/simple-tools.html",
    "revision": "1647e4fce8b3c15f9245ac5cec0e2a4e"
  },
  {
    "url": "zh/cornerstone-tools/v2/essentials/getting-started.html",
    "revision": "ad5d9dd48f533184776bc968c1595972"
  },
  {
    "url": "zh/cornerstone-tools/v2/essentials/image-tools.html",
    "revision": "0e374fd6d2196e6fc93662d43d63c8fa"
  },
  {
    "url": "zh/cornerstone-tools/v2/essentials/input-sources.html",
    "revision": "136b5d071bb4332bd12736f19f4b0d39"
  },
  {
    "url": "zh/cornerstone-tools/v2/essentials/stack-tools.html",
    "revision": "24d247440213f3ee37c02ba53d38e0b1"
  },
  {
    "url": "zh/cornerstone-tools/v2/essentials/tool-data.html",
    "revision": "0fc30ab40125bff7405364fff131222e"
  },
  {
    "url": "zh/cornerstone-tools/v2/essentials/tool-states.html",
    "revision": "9ff619e33c933dc59f6a1fb0615818cc"
  },
  {
    "url": "zh/cornerstone-tools/v2/guides/migrating-major-versions.html",
    "revision": "548409dee539dfd0ae12363e2a87d76f"
  },
  {
    "url": "zh/cornerstone-tools/v2/index.html",
    "revision": "b78f86a6fa9a0f984be5ca7f0085333b"
  },
  {
    "url": "zh/cornerstone-tools/v2/installation.html",
    "revision": "1e3c64861e13fc670a274a3590adcc2c"
  },
  {
    "url": "zh/cornerstone-tools/v2/SUMMARY.html",
    "revision": "10cf155206c0d13bd24009d825edfbbf"
  },
  {
    "url": "zh/cornerstone-tools/v3/anatomy-of-a-tool/configuration.html",
    "revision": "f5dde98d30c652737cf76bb561b20777"
  },
  {
    "url": "zh/cornerstone-tools/v3/anatomy-of-a-tool/index.html",
    "revision": "6d5c1c661e7e8a6c81acc8875d256066"
  },
  {
    "url": "zh/cornerstone-tools/v3/anatomy-of-a-tool/interaction-types.html",
    "revision": "454d2d0a91a2958c7955d6ed371f4bf1"
  },
  {
    "url": "zh/cornerstone-tools/v3/anatomy-of-a-tool/measurement-data.html",
    "revision": "e4f72fd0c834d2fdb1037d3e3132c8d4"
  },
  {
    "url": "zh/cornerstone-tools/v3/anatomy-of-a-tool/mixins.html",
    "revision": "616b2bba92f746389b20416fdf63e1d6"
  },
  {
    "url": "zh/cornerstone-tools/v3/anatomy-of-a-tool/modes.html",
    "revision": "eb989458a646c227cb3b7e0a248cb8f5"
  },
  {
    "url": "zh/cornerstone-tools/v3/anatomy-of-a-tool/strategies.html",
    "revision": "e00e2fbb9572d7cc94ff7ac5c58098c3"
  },
  {
    "url": "zh/cornerstone-tools/v3/contributing.html",
    "revision": "f56b176936c12d438aa63165a46381ec"
  },
  {
    "url": "zh/cornerstone-tools/v3/custom-tools/adding-mixins.html",
    "revision": "a03e87f791fc473e54f640ecde557601"
  },
  {
    "url": "zh/cornerstone-tools/v3/custom-tools/choosing-a-base-class.html",
    "revision": "e935133db72e795e02899d367dbe2907"
  },
  {
    "url": "zh/cornerstone-tools/v3/custom-tools/creating-your-tool.html",
    "revision": "b677f3983aa43546afbe9d9a485057d6"
  },
  {
    "url": "zh/cornerstone-tools/v3/custom-tools/event-dispatcher-callbacks.html",
    "revision": "64951738404dd4948feba1f53c860e3c"
  },
  {
    "url": "zh/cornerstone-tools/v3/custom-tools/index.html",
    "revision": "489582f25c473c26f84053094bae7356"
  },
  {
    "url": "zh/cornerstone-tools/v3/custom-tools/mode-change-callbacks.html",
    "revision": "01886a35c0d414aa4e369cec556ea05b"
  },
  {
    "url": "zh/cornerstone-tools/v3/debugging/index.html",
    "revision": "937b0ef8dd179bd57b5b205ffbedc833"
  },
  {
    "url": "zh/cornerstone-tools/v3/guides/migrating-major-versions.html",
    "revision": "1815f58a4bca5a5a7390453c3210f733"
  },
  {
    "url": "zh/cornerstone-tools/v3/index.html",
    "revision": "f0ec62cf4b41f869a618578fb86211b1"
  },
  {
    "url": "zh/cornerstone-tools/v3/installation.html",
    "revision": "39df9df881d996a0a6fadfeb51850588"
  },
  {
    "url": "zh/cornerstone-tools/v3/migration/index.html",
    "revision": "2133ce1aa9e9d40e16c6b819dbd28c7d"
  },
  {
    "url": "zh/cornerstone-tools/v3/partials/example-warning.html",
    "revision": "37cbeca18b6159ee9ec348f57c213411"
  },
  {
    "url": "zh/cornerstone-tools/v3/SUMMARY.html",
    "revision": "4575dc7b709ae6553286634a60678348"
  },
  {
    "url": "zh/cornerstone-tools/v3/third-party-functionality/imports.html",
    "revision": "9c880a5945fa267839902f6685f28573"
  },
  {
    "url": "zh/cornerstone-tools/v3/third-party-functionality/index.html",
    "revision": "1939bb0e064e203a7ff296e538395f27"
  },
  {
    "url": "zh/cornerstone-tools/v3/third-party-functionality/item-types.html",
    "revision": "b697791fb60005e7597ea9cf4214115b"
  },
  {
    "url": "zh/cornerstone-tools/v3/third-party-functionality/registration.html",
    "revision": "09571dfef837950b1a9bd6ec25c5149f"
  },
  {
    "url": "zh/cornerstone-tools/v3/third-party-functionality/tools.html",
    "revision": "afa4cbd53c84d6e9468c96dc05a8be12"
  },
  {
    "url": "zh/cornerstone-tools/v3/tool-mixins/binary-tools.html",
    "revision": "7db3e93a1066fa8528ddb31565fd27be"
  },
  {
    "url": "zh/cornerstone-tools/v3/tool-mixins/index.html",
    "revision": "4004463138d6394f14d0fee7db8cca16"
  },
  {
    "url": "zh/cornerstone-tools/v3/tool-types/base-annotation-tool.html",
    "revision": "e4b11a0475215817efa29a3cdfce1065"
  },
  {
    "url": "zh/cornerstone-tools/v3/tool-types/base-brush-tool.html",
    "revision": "622ffbabd38df052038e8c1720aae646"
  },
  {
    "url": "zh/cornerstone-tools/v3/tool-types/base-segmentation-tool.html",
    "revision": "1bbefe541254ebc9496919066a931a22"
  },
  {
    "url": "zh/cornerstone-tools/v3/tool-types/base-tool.html",
    "revision": "e7a7fcb157809c40f8e568593241fdfa"
  },
  {
    "url": "zh/cornerstone-tools/v3/tool-types/index.html",
    "revision": "68b1f96c00a9ed0dcdd263577550e0ff"
  },
  {
    "url": "zh/developer-guide.html",
    "revision": "7094f06bb9edf6b50919123d85de7bf2"
  },
  {
    "url": "zh/developmentProcess.html",
    "revision": "f27a4a0bfd41c7a552540f3fd0ae53ae"
  },
  {
    "url": "zh/index.html",
    "revision": "480d49199439a4d3344a779ad93d9d63"
  },
  {
    "url": "zh/installation.html",
    "revision": "83306e32051934076fd132c872c74395"
  },
  {
    "url": "zh/integration.html",
    "revision": "6adfd73965ca2225c10865938fff81dd"
  },
  {
    "url": "zh/roadmap.html",
    "revision": "06a26af674bad9994e34882e3f856f4a"
  },
  {
    "url": "zh/SUMMARY.html",
    "revision": "4bea2f5902cda234e7750977a726ea56"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
