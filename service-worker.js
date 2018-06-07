/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2014/03/22/vuejs-010-release/index.html","a597bd889937427e0f4aaceacce645c8"],["2014/07/29/vue-next/index.html","d5fa1db614cb6452746c0e5d28fb3809"],["2014/11/09/vue-011-release/index.html","27389d55c319cd1f3e45b739736e9e34"],["2014/12/08/011-component/index.html","30f7b4a3cc4f1fd19b64fd4302935d52"],["2015/06/11/012-release/index.html","a18ac6ac2e36a7566a07c20ee48519a8"],["2015/10/26/1.0.0-release/index.html","bb4b918a1ec6ce28aa4b46092435d47a"],["2015/10/28/why-no-template-url/index.html","124a6621f8c1ac19ae69ec84456b4404"],["2015/12/28/vue-cli/index.html","5d9af9358edfa5ba01691538f8296b5d"],["2016/02/06/common-gotchas/index.html","249d6decd0e2cefa38710e0ff0666122"],["2016/03/14/march-update/index.html","178df34fe425fe3ec21285fc81ae699d"],["2016/04/27/announcing-2.0/index.html","c9c57819a514a4ff8a073666d765f473"],["about/index.html","5f8dc40c000565395e75768f2653330c"],["api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["archives/2014/03/index.html","1a36e459e99fb0bbd51e7d3a5dab7c2c"],["archives/2014/07/index.html","9c39a021edad2638eeae86a8b34cd6ec"],["archives/2014/11/index.html","08b871be1f0e852ca060b3446a335b50"],["archives/2014/12/index.html","4db6922781c13ba65ae3171a1f20c667"],["archives/2014/index.html","5d9c388bcb30dd1255a0fb0f3da7cecc"],["archives/2015/06/index.html","74ae47c72ed61b41164e098186abbcb7"],["archives/2015/10/index.html","ed7ff9eb5a696a1d8e9d287061e63b24"],["archives/2015/12/index.html","a27505d2b363a9034b6b42899af031d6"],["archives/2015/index.html","174c6f85fe5575301f3276a1e06d6bf0"],["archives/2016/02/index.html","39113340379985dc2776fa201f8272e6"],["archives/2016/03/index.html","175b339a26301cfcae39f9c0322e936f"],["archives/2016/04/index.html","5a9f05c0342c8fe6c90d10fedc96d889"],["archives/2016/index.html","3cb53313e2cc4eb38fb84c48cc0417a5"],["archives/index.html","32a3105fecb4ef58933a6fb2406680af"],["archives/page/2/index.html","bbb220246f80beeba36cc838b1aed9a8"],["css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["css/index.css","27e96c9e61b6fe10909682bc94fc1c4a"],["css/page.css","2a503182dacd3c8a1271b1057a0e47cf"],["css/search.css","e4e6c1e2a49dfe73bd8f10ca3409c040"],["examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["examples/index.html","dc91b34e726c12318c4d083a3090c156"],["examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["guide/deployment.html","be96515c673712671d042337366ddf63"],["guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["guide/instance.html","61021765831307e8278d034c23502dd6"],["guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["guide/list.html","772e05d65b4587501785906a4b681efd"],["guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["guide/transitions.html","4513c62165ee217697830a40e1795365"],["guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["images/100offer.png","8029274e3fa53cd1f5195d4cf02d5234"],["images/2mhost.png","cf1c6b16ae197cc8fece227593cf3cd8"],["images/actualize.png","2a07999eb1d845af6d9f7fe7b2eb0253"],["images/anymod.png","234cf9604fd55de7ce924f520d6c5610"],["images/bit-wide.png","e7b6072d049ed29615462f7c83cbfeaa"],["images/bit.png","db6a4b731ecc06de8bd36d64112c768b"],["images/bmqb.png","25e28c3c20f8f32618a732fe055d6321"],["images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["images/chaitin.png","549e43997790dc624c477424acbfe228"],["images/check.png","c634675b753a1a03b587c43d8b535600"],["images/codepilot.png","123c45958229de783198d2d893a4044c"],["images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["images/conf.png","0d1e4840e924b232e605779b5040c879"],["images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["images/data.png","5de7af21d4c2de951720c006f84b98fc"],["images/datacamp.png","251ad9e67095233b3fcede7b03eaca9c"],["images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["images/down.png","2f948222df409af3121254d5fe0ed377"],["images/famebroker.png","9a879f5f83d3583145c756ba381ca482"],["images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["images/frontend-love.png","b514babc53a0f3ddc854b0b14a54a489"],["images/frontend-meetups.png","d9b76c14d7eaf24c6b030ac3352d1e58"],["images/hackr-io.png","2a0d1f9625ec5b529656fe6028f66c4f"],["images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["images/hn.png","99176cdebac521e823be519aef514bb3"],["images/htmlburger.png","c7ce1344d001e7a236a89694ed59d988"],["images/icons.png","ad6ee8c400066e15712cdef4342023da"],["images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["images/icons8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["images/infinitynewtab.png","446b9c9b5b7c251e3cf3b67ac5ed4acb"],["images/itunescn.png","dffb5409b975a5590aab9be99fb53ca8"],["images/jsfiddle.png","9f92527b7bce17471203e83f948292c5"],["images/jsguru.png","31c4e9e56df283700fd81a44d46099c7"],["images/juejin.png","46d2970cf094e50a218e1a8cd242b536"],["images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["images/monterail.png","3a441c52ccf03e6d09defa528cd2d632"],["images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["images/neds.png","8936cd0dd2ea2dedb127a330448d45e8"],["images/onsen-ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["images/someline.png","d6908ea0b99280afa9655c564d385833"],["images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["images/stdlib.png","2ec485cb1b307821c82a850f440fab3f"],["images/strikingly.png","ef615f471302167fbc882f4a5f783dd1"],["images/tde.png","8b43557cde5163b9c7a11cc541cc9b97"],["images/teamextension.png","29f354472d73a5568552f9475d48d5a4"],["images/tmvuejs2.png","3ee9bd2b594a166ccc14995630c81cbe"],["images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["images/umoon.png","844f09da5ca82b56a1824b68591cff16"],["images/upyun-large.png","cd66170a5022b5c9444119e3fa5cb83a"],["images/upyun-main-2.jpg","f388a2ba0e0b004e15a7684485fff486"],["images/upyun-main-3.jpg","e618981c7f191cd1fd84905e03538f47"],["images/upyun-main.jpg","1c36d062540e5d97a2ca993776fb7016"],["images/upyun-small.png","7a42625327e1495cec13cbe25c7a200d"],["images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["images/vuejsadmin.png","e517dc0c38a982cfca2b123ce33dc261"],["images/vueschool.png","cc8c47d63a2c5dc2e073357372e12048"],["images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["images/xfive.png","2fd3304fe6a1b44d2bfd19876e454d0c"],["index.html","b8133eced81b4962ddd32711310f35f9"],["js/common.js","e601a3f62eed4e057e7e6a3f4d5c7a1f"],["js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["js/vue.js","cbe2b9b2fb6955decf033515d079e44b"],["js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["menu/index.html","d25ed511372bef8f7fc455d28d10027d"],["page/2/index.html","e87e63e85809f0e7ad460e7aad98086c"],["perf/index.html","bb12b2e060fa67267158db7698e3bbb2"],["support-vuejs/index.html","149d8fd74954da253672036c6d7389e1"],["v2/api/index.html","e9f576d23b8dbecb510c3d41d0cf67a1"],["v2/cookbook/adding-instance-properties.html","06d16bd383cc6b01e7320dab224de19f"],["v2/cookbook/creating-custom-scroll-directives.html","31291cfe3102e00159619b86e0fd1a15"],["v2/cookbook/debugging-in-vscode.html","a6f3753e5955a7031509d1b25327f28b"],["v2/cookbook/editable-svg-icons.html","9d7caf7167fce43d532ed9cd13b588cf"],["v2/cookbook/form-validation.html","f7790f9153db50004d7cd27cf0114cda"],["v2/cookbook/index.html","409c2198aeb464873d3bf074ea3900e5"],["v2/cookbook/serverless-blog.html","9501da16a9f06434306e1ef83976b298"],["v2/cookbook/unit-testing-vue-components.html","38cb7643966c79636ca8d163a0ec29c5"],["v2/cookbook/using-axios-to-consume-apis.html","3a2a3ae34616d574e4ebd1b531cc85fa"],["v2/examples/commits.html","8ed233e502f17df8175be595cf93023e"],["v2/examples/deepstream.html","0e841c3318dc178c1fe7bac3618d5e22"],["v2/examples/elastic-header.html","91bd15c0c46a7052fc23156c5d252650"],["v2/examples/firebase.html","49e08a573de0f0484ba06e6e8ce25048"],["v2/examples/grid-component.html","bd2d0dc37edaa372b415cb836159c187"],["v2/examples/hackernews.html","604be13efb6179e391b34d3313e30cc3"],["v2/examples/index.html","ebf2de04e9f666d45d0070551564758e"],["v2/examples/modal.html","26640cb723c86c885cdd199c3c2863cb"],["v2/examples/select2.html","19c84c5076997301d3c7fcfdc0e21e55"],["v2/examples/svg.html","8a9a5a72509275b6ef3a8be62033fb8c"],["v2/examples/todomvc.html","caa56350f4b74e0a30feaf7dc61ca570"],["v2/examples/tree-view.html","b164e04a939f628198a7f88b8cc87f67"],["v2/guide/class-and-style.html","4d5e14fec77999088365fe3ebf57b7cd"],["v2/guide/comparison.html","5941c0a5b45828c0c5f438a815e613c2"],["v2/guide/components-custom-events.html","0662ecb98a0e7c10e348470036ccd71a"],["v2/guide/components-dynamic-async.html","b73944f47a7edf6f8d4276e3d9356ebb"],["v2/guide/components-edge-cases.html","7fe972f0d6330e9aa4c3402aa4dbc6f6"],["v2/guide/components-props.html","3e7189c8e127283c5e6bebe7c77cd697"],["v2/guide/components-registration.html","bc81e4177a234760e7b245ae3f585841"],["v2/guide/components-slots.html","d811e59bbf360a2b99dda71105b3c51a"],["v2/guide/components.html","14c8166e6f67843fe7a41826337a3388"],["v2/guide/computed.html","70dc3b1b3fdd08cc4111262dcac51358"],["v2/guide/conditional.html","09a92ef82b25c34a99f91e4be4ccb2f6"],["v2/guide/custom-directive.html","01e5cc4d55fda0172ab33eff51648248"],["v2/guide/deployment.html","81ce5554a1490789d6c9597623e24f37"],["v2/guide/events.html","691fcbecd4aa8eb5a471cc264e589145"],["v2/guide/filters.html","a3bebddc32606c90b5b02c5e7203a525"],["v2/guide/forms.html","f68b0be3421f4a90665e054d48229c94"],["v2/guide/index.html","bcaac7cac6396ea739e5dba5b3152631"],["v2/guide/installation.html","a043adb70c2aad93f889d76f3fc40dd1"],["v2/guide/instance.html","e952bffedbbababfa0ab446aae32fc09"],["v2/guide/join.html","7a20c0c5ef13aa5d4cfcc68f2526402e"],["v2/guide/list.html","78df714091dc1a82fe7f62f68d15bb05"],["v2/guide/migration-vue-router.html","92fb8d9bfaeeb1533ae1992db28d4b9d"],["v2/guide/migration-vuex.html","e130309cabc427fa40c57c273c716df7"],["v2/guide/migration.html","9a0ff1c7056d560bf36deafde71a9a88"],["v2/guide/mixins.html","05be73d15953b911bd8528f79c5ca54d"],["v2/guide/plugins.html","2dc26a51b7eb1e52d73d47f9c9e10bec"],["v2/guide/reactivity.html","5cc4b1e6d3e92a5845052d19c5780eb1"],["v2/guide/render-function.html","ef199753fc236a36f762605f3a865eee"],["v2/guide/routing.html","d3e24b7d9f59ed548368f93aa63001dc"],["v2/guide/single-file-components.html","b586839143d83aaa00af6ee00966aef5"],["v2/guide/ssr.html","ebcf36b250460c68634ab7b55d5f6b4a"],["v2/guide/state-management.html","8f0db96d896001e245ab282e28db6ee4"],["v2/guide/syntax.html","eff6a2bde834a92774b0c38d52450fc6"],["v2/guide/team.html","90b446603d7dcddde17dfa5c23e36f8e"],["v2/guide/transitioning-state.html","093c115e1b7a955a48e2ea894a036b72"],["v2/guide/transitions.html","8d161f2027145270a7f9147336af9f49"],["v2/guide/typescript.html","0637589f7fc07307f822daeb66008f2f"],["v2/guide/unit-testing.html","4ec869a7146f3b4eb89d5b88958f803a"],["v2/style-guide/index.html","4d810d5739c60f0cfc177ff571a9c204"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







