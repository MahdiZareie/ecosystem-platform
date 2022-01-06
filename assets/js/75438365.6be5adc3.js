"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7180],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(m,o(o({ref:t},g),{},{components:n})):a.createElement(m,o({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return g},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"fxa-logging",title:"Application Logging",sidebar_label:"Application Logging"},p=void 0,s={unversionedId:"fxa-engineering/fxa-logging",id:"fxa-engineering/fxa-logging",isDocsHomePage:!1,title:"Application Logging",description:"Application Logging",source:"@site/docs/fxa-engineering/fxa-logging.md",sourceDirName:"fxa-engineering",slug:"/fxa-engineering/fxa-logging",permalink:"/ecosystem-platform/fxa-engineering/fxa-logging",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/fxa-engineering/fxa-logging.md",tags:[],version:"current",frontMatter:{id:"fxa-logging",title:"Application Logging",sidebar_label:"Application Logging"},sidebar:"docs",previous:{title:"FxA System Diagrams",permalink:"/ecosystem-platform/fxa-engineering/fxa-system-diagrams"},next:{title:"Automation Test Plan",permalink:"/ecosystem-platform/fxa-engineering/automation-test-plan"}},g=[{value:"Application Logging",id:"application-logging",children:[{value:"Capturing Event Details",id:"capturing-event-details",children:[]},{value:"Viewing Event Logs",id:"viewing-event-logs",children:[]}]}],c={toc:g};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"application-logging"},"Application Logging"),(0,i.kt)("p",null,"In FxA Javascript/Typescript server-side applications, logging is emitted via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/mozlog/"},"mozlog")," which adheres to the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/Firefox/Services/Logging#MozLog_JSON_schema"},"mozlog schema")," format. The log messages are captured from ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," and aggregated into Google ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"BigQuery")," via Stackdriver. Application exceptions are captured via ",(0,i.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry")," and sent to our Sentry instance."),(0,i.kt)("p",null,"Stage and development logging is grouped under the ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-nonprod")," project, while accessing the ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-prod")," logs requires additional special access privileges."),(0,i.kt)("h3",{id:"capturing-event-details"},"Capturing Event Details"),(0,i.kt)("p",null,"Once a ",(0,i.kt)("inlineCode",{parentName:"p"},"mozlog")," instance is created, log events are captured with a dot concatenated string indicating an (ideally) unique location of the logging statement that is clear where in the code-base it was made, along with any additional fields to include."),(0,i.kt)("p",null,"Creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"mozlog")," instance can be done by instantiating the log object with a configuration object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const logConfig = {\n    app: 'fxa-content-server',\n    fmt: 'heka',\n    level: 'info'\n};\nconst log = require('mozlog')(logConfig);\n")),(0,i.kt)("p",null,"It can then be used to log with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"log.error('push.sendPush', {uid, deviceId, err });\n")),(0,i.kt)("p",null,"The above log event will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonPayload.type")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"push.sendPush"),", while the additional object properties will be attached as the ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonPayload.fields")," object."),(0,i.kt)("h3",{id:"viewing-event-logs"},"Viewing Event Logs"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"bigquery"),", the logs can be retrieved from the application service that generated them by narrowing down the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," table used and the originating service by its container name ",(0,i.kt)("em",{parentName:"p"},"or")," querying the service table directly."),(0,i.kt)("p",null,"Container names for currently deployed services that output to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," tables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payments")," - FxA Payment Server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amplitude")," - FxA Amplitude Send"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventbroker")," - FxA Event Broker")),(0,i.kt)("p",null,"As these change over time, a quick way to determine available container names can be done using a ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTINCT")," query (using the desired date):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT(resource.labels.container_name)\nFROM `moz-fx-fxa-nonprod-375e.fxa_stage_logs.stdout_20191204`\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"bigquery")," console has tab-complete for table-names and SQL statements to make query generation easy."),(0,i.kt)("p",null,"Accessing logs from the FxA Auth Server, FxA Auth Db MySQL Service, etc. requires querying the appropriate table. Some table prefix examples from ",(0,i.kt)("inlineCode",{parentName:"p"},"stage"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fxa-auth-server - ",(0,i.kt)("inlineCode",{parentName:"li"},"moz-fx-fxa-nonprod-375e.fxa_stage_logs.docker_fxa_auth_20191205")),(0,i.kt)("li",{parentName:"ul"},"fxa-auth-db-server - ",(0,i.kt)("inlineCode",{parentName:"li"},"moz-fx-fxa-nonprod-375e.fxa_stage_logs.docker_fxa_auth_db_20191204"))),(0,i.kt)("p",null,"A full list of these tabale prefixes can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"bigquery")," console by clicking on the left side drop-down and expanding it under ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa_stage_logs")," (or prod). FxA services all start with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker_fxa_"),"."))}u.isMDXComponent=!0}}]);