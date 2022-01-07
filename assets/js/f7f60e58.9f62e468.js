"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6953],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37680:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"GitHub Strategies"},l="Groups & Permissions",c={unversionedId:"reference/github-strategies",id:"reference/github-strategies",isDocsHomePage:!1,title:"GitHub Strategies",description:"Firefox Accounts has a history of using [too?] many repositories on GitHub.",source:"@site/docs/reference/github-strategies.md",sourceDirName:"reference",slug:"/reference/github-strategies",permalink:"/ecosystem-platform/reference/github-strategies",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/reference/github-strategies.md",tags:[],version:"current",frontMatter:{title:"GitHub Strategies"},sidebar:"docs",previous:{title:"Architectural Decision Records",permalink:"/ecosystem-platform/reference/architectural-decision-records"},next:{title:"onepw Protocol",permalink:"/ecosystem-platform/explanation/onepw-protocol"}},p=[{value:"fxa-archives",id:"fxa-archives",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groups--permissions"},"Groups & Permissions"),(0,o.kt)("p",null,"Firefox Accounts has a history of using ","[too?]"," many repositories on GitHub.\nOver many years this means important repositories can be neglected.\nAdditionally, we need to maintain proper access controls to all of the\nrepositories in a world where priorities shift quickly and often."),(0,o.kt)("p",null,"To address this, our GitHub strategy takes advantage of Github\u2019s nested teams.\nBy having groups with progressively tighter access controls we can be sure we\nare addressing all of the appropriate repositories because permissions are\ninherited.  We have a simple hierarchy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Firstly, no team.  You don\u2019t need to be in an FxA team to open or comment on\nissues and pull requests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"fxa-community")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read access"),(0,o.kt)("li",{parentName:"ul"},"This essentially collects all of our repositories in one place"),(0,o.kt)("li",{parentName:"ul"},"Being in this group means a person can be assigned issues"),(0,o.kt)("li",{parentName:"ul"},"All repositories that this group has access to are ",(0,o.kt)("em",{parentName:"li"},"read only")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fxa-write"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A sub-team of fxa-community"),(0,o.kt)("li",{parentName:"ul"},"All repositories that this group has access to are ",(0,o.kt)("em",{parentName:"li"},"read/write")),(0,o.kt)("li",{parentName:"ul"},"If you're on this team you are likely employed at Mozilla"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fxa-devs"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sub-team of ",(0,o.kt)("strong",{parentName:"li"},"fxa-write")),(0,o.kt)("li",{parentName:"ul"},"Used for requesting reviews.  If you work in specific areas of FxA and\ndon\u2019t want to be pinged about general reviews you probably want write\naccess but not on this team."),(0,o.kt)("li",{parentName:"ul"},"Required to be in this team to push to production (enforced on github)"))),(0,o.kt)("li",{parentName:"ul"},"Occasionally other teams will be added here as well, for example, if\nwe're doing an internship program or working with external teams."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fxa-admins"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sub-team of ",(0,o.kt)("strong",{parentName:"li"},"fxa-write")),(0,o.kt)("li",{parentName:"ul"},"This group has ",(0,o.kt)("em",{parentName:"li"},"admin access")," to all repositories."),(0,o.kt)("li",{parentName:"ul"},"If you're in this group you are employed at Mozilla and you probably\nwork with FxA day-to-day.")))))))),(0,o.kt)("h2",{id:"fxa-archives"},"fxa-archives"),(0,o.kt)("p",null,"There is another team called ",(0,o.kt)("strong",{parentName:"p"},"fxa-archives"),".  It holds many old archived\nrepositories that FxA created and no longer uses.  It\u2019s around to collect that\nhistorical context and keep the archived repositories out of the way while we\ndo day-to-day work."))}m.isMDXComponent=!0}}]);