"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9698],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38901:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"end-to-end-encryption",title:"End-to-end encryption",sidebar_label:"End-to-end Encryption"},l=void 0,p={unversionedId:"relying-parties/end-to-end-encryption",id:"relying-parties/end-to-end-encryption",isDocsHomePage:!1,title:"End-to-end encryption",description:"Firefox Accounts offers an end-to-end encryption support feature for OAuth reliers by deriving a strong encryption key from user's password. Keep in mind that Firefox Accounts does not provide a storage solution, it is up to you to use the generated key and encrypt the data with that key.",source:"@site/docs/relying-parties/end-to-end-encryption.md",sourceDirName:"relying-parties",slug:"/relying-parties/end-to-end-encryption",permalink:"/ecosystem-platform/relying-parties/end-to-end-encryption",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/relying-parties/end-to-end-encryption.md",tags:[],version:"current",frontMatter:{id:"end-to-end-encryption",title:"End-to-end encryption",sidebar_label:"End-to-end Encryption"}},s=[{value:"WebExtensions",id:"webextensions",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Firefox Accounts offers an end-to-end encryption support feature for OAuth reliers by deriving a strong encryption key from user's password. Keep in mind that Firefox Accounts does not provide a storage solution, it is up to you to use the generated key and encrypt the data with that key."),(0,i.kt)("h3",{id:"webextensions"},"WebExtensions"),(0,i.kt)("p",null,"To use this feature in WebExtensions you need to do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Firefox_Accounts/Introduction#OAuth_2.0_API"},"Register an OAuth client")," and an OAuth app scope with Firefox Accounts"),(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa-crypto-relier"},"fxa-crypto-relier")," library into your WebExtension"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa-crypto-relier/tree/master/docs"},"Follow the documentation")," to trigger the Firefox Accounts login screen"),(0,i.kt)("li",{parentName:"ol"},"Consume the derived key after the successful login")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"You can find an example of this feature in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/notes/blob/5be89e52956182e57356b7ba9102d57cdb72be6f/src/background.js#L53-L72"},"TestPilot Notes source code"),". Here's a simplified diagram of a scoped key generated for a WebExtension:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.lucidchart.com/publicSegments/view/53ce9405-4ab6-481f-b8fe-0d47c0d29723/image.jpeg",alt:null})),(0,i.kt)("p",null,"An example of a key generated by Firefox Accounts: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/GdXHWVu.jpg",alt:null})),(0,i.kt)("p",null,"The generated key can be imported using existing WebCrypto APIs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function shared_key(key) {\n  return crypto.subtle.importKey(\n    'jwk',\n    { kty: key.kty, k: key.k.replace(/=/, '') },\n    'AES-KW',\n    true,\n    ['wrapKey', 'unwrapKey']\n  );\n}\n")))}d.isMDXComponent=!0}}]);