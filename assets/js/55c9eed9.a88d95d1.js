"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8906],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return t?n.createElement(d,c(c({ref:r},u),{},{components:t})):n.createElement(d,c({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75682:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={title:"Architectural Decision Records"},l=void 0,s={unversionedId:"reference/architectural-decision-records",id:"reference/architectural-decision-records",isDocsHomePage:!1,title:"Architectural Decision Records",description:"FxA records major architectural decisions in an ADR format.  Please find FxA ADRs in the FxA repository:",source:"@site/docs/reference/architectural-decision-records.md",sourceDirName:"reference",slug:"/reference/architectural-decision-records",permalink:"/ecosystem-platform/reference/architectural-decision-records",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/reference/architectural-decision-records.md",tags:[],version:"current",frontMatter:{title:"Architectural Decision Records"},sidebar:"docs",previous:{title:"Scheduled Maintenance",permalink:"/ecosystem-platform/reference/scheduled-maintenance"},next:{title:"GitHub Strategies",permalink:"/ecosystem-platform/reference/github-strategies"}},u=[],f={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FxA records major architectural decisions in an ",(0,i.kt)("a",{parentName:"p",href:"https://adr.github.io/"},"ADR")," format.  Please find FxA ADRs in the FxA repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/blob/main/docs/adr"},"https://github.com/mozilla/fxa/blob/main/docs/adr"))),(0,i.kt)("p",null,"Before we used ADRs, we also archived our feature design documentation.  It's still available online as well:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa-archive/tree/master/features"},"https://github.com/mozilla/fxa-archive/tree/master/features"))))}p.isMDXComponent=!0}}]);