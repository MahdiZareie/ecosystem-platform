"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1244],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12880:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"metrics-for-relying-parties",title:"Metrics for Relying Parties",sidebar_label:"Metrics"},s=void 0,m={unversionedId:"relying-parties/metrics-for-relying-parties",id:"relying-parties/metrics-for-relying-parties",isDocsHomePage:!1,title:"Metrics for Relying Parties",description:"Last updated: December 3rd, 2019",source:"@site/docs/relying-parties/metrics-for-relying-parties.md",sourceDirName:"relying-parties",slug:"/relying-parties/metrics-for-relying-parties",permalink:"/ecosystem-platform/relying-parties/metrics-for-relying-parties",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/relying-parties/metrics-for-relying-parties.md",tags:[],version:"current",frontMatter:{id:"metrics-for-relying-parties",title:"Metrics for Relying Parties",sidebar_label:"Metrics"}},p=[{value:"Relying-Party Hosted Email Form",id:"relying-party-hosted-email-form",children:[]},{value:"Relying-Party &quot;Engage&quot; Events",id:"relying-party-engage-events",children:[]},{value:"Metrics-Related Query Parameters",id:"metrics-related-query-parameters",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Last updated: ",(0,i.kt)("inlineCode",{parentName:"p"},"December 3rd, 2019")),(0,i.kt)("h2",{id:"relying-party-hosted-email-form"},"Relying-Party Hosted Email Form"),(0,i.kt)("p",null,"Reliers must do either one of the following when integrating with Firefox Accounts:\n0. Self-host the first step in the FxA authentication flow themselves (e.g. the form capturing the user's email)\n0. Send users to a FxA-hosted form at ",(0,i.kt)("a",{parentName:"p",href:"https://accounts.firefox.com/"},"https://accounts.firefox.com/"),"."),(0,i.kt)("p",null,"In the first case, when the email entry form is hosted by the relying party, the relying party must:"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"When the page that hosts the FxA form loads, have it make an XHR call to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://accounts.firefox.com/metrics-flow"),". The domain name of the request should match the FxA page that is being redirected to (e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://accounts.firefox.com"},"https://accounts.firefox.com"),"). You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"fetch")," to get this info."),(0,i.kt)("li",{parentName:"ol"},"Include the following query parameters in the above request (see chart below for descriptions):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entrypoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entrypoint_experiment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entrypoint_variation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utm_source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utm_campaign")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"form_type")),(0,i.kt)("li",{parentName:"ul"},"An example: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://accounts.firefox.com/metrics-flow?entrypoint=my_page&utm_source=my_referrer&utm_campaign=my_campaign&form_type=email"))),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"The response from ",(0,i.kt)("inlineCode",{parentName:"li"},"metrics-flow")," will be a JSON object that contains the fields ",(0,i.kt)("inlineCode",{parentName:"li"},"flowId")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"flowBeginTime"),". These values will need to be propagated to FxA as query parameters, which can be done using hidden form fields with the names ",(0,i.kt)("inlineCode",{parentName:"li"},"flow_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"flow_begin_time"),". You can see an example of how the ",(0,i.kt)("a",{parentName:"li",href:"about:welcome"},"about:welcome")," page does this by looking ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/activity-stream/blob/06aeeb331e9dd497e4d115d0e6cba51b9b25b36c/content-src/asrouter/templates/StartupOverlay/StartupOverlay.jsx#L30"},"here"),".")),(0,i.kt)("p",null,"Following these instructions will provide FxA and the relying party with the data needed to ensure a healthy user flow."),(0,i.kt)("h2",{id:"relying-party-engage-events"},'Relying-Party "Engage" Events'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: this is a limited, temporary solution for cross-product metrics that is due to be replaced in early 2020. Please contact the FxA team if you think you need access.")),(0,i.kt)("p",null,"The metrics that the Firefox Accounts platform sends to Amplitude reflect mainly direct interactions with FxA. These are mostly authentication events (registering, logging in, etc) or events related to account management (e.g. changes to a user\u2019s account settings). This means that interaction events within \u201crelying\u201d products of FxA (such as Firefox Monitor) that do not involve authentication are not logged to the FxA amplitude metrics system. To address this shortcoming, FxA-relying products can log metrics about product usage directly via the FxA metrics system. FxA has not previously allowed for the direct logging of these types of metrics by relying products, but we feel that this change is necessary to ensure that company-level metrics accurately reflect product usage."),(0,i.kt)("p",null,"Only one event is allowed per RP, and the required query parameters are different from other requests:"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"When the event of interest occurs, the RP server (not the user's browser) should submit a GET request to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://accounts.firefox.com/metrics-flow")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Origin")," header set to the RP's registered FxA OAuth domain."),(0,i.kt)("li",{parentName:"ol"},"Include the following query parameters in the request:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_type")," - the static string \u201cengage\u201d - this ping tells us that a user engaged with a service in some way that we\u2019ve defined out of band"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"service")," - the oauth client identifier for the RP, this is an opaque 8-byte hex string that isn\u2019t private"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")," - the Firefox Accounts user id - this is an opaque hex string that identifies the user across all FxA relying parties. Here, it\u2019s the user who has engaged with the service in some way. (In the future, we plan to replace this with an anonymous / pseudonymous identifier supplied by ecosystem telemetry)")),(0,i.kt)("p",null,"Note that the RP's domain needs to be manually  added to the FxA ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_metrics_flow_origins")," list before these events will be accepted. Otherwise, they will be silently dropped."),(0,i.kt)("h2",{id:"metrics-related-query-parameters"},"Metrics-Related Query Parameters"),(0,i.kt)("p",null,"The values that are passed in the parameters below are subject to validation via regular expressions. ",(0,i.kt)("strong",{parentName:"p"},"If the parameter values do not conform to their associated regexes in ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/server/lib/flow-event.js"},"this file")," then all metrics events associated with the non-conforming parameters will not be logged!")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Validation regex"),(0,i.kt)("th",{parentName:"tr",align:null},"Amplitude Chart Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"entrypoint")),(0,i.kt)("td",{parentName:"tr",align:null},"The specific page or browser UI element containing the first step of the FxA sign-in/sign-up process (e.g., enter email form)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"firstrun")),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w.:-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://analytics.amplitude.com/mozilla-corp/chart/n8cd9no"},"Firstrun form views"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"entrypoint_experiment")),(0,i.kt)("td",{parentName:"tr",align:null},"Identifier for the experiment the user is part of (if any)"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w.:-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"entrypoint_variation")),(0,i.kt)("td",{parentName:"tr",align:null},"Identifier for the experiment variation the user is part of (if any)"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w.:-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"form_type")),(0,i.kt)("td",{parentName:"tr",align:null},"For self-hosted forms only (see above) the type of form that the user submits to begin the FxA flow"),(0,i.kt)("td",{parentName:"tr",align:null},"either: ",(0,i.kt)("inlineCode",{parentName:"td"},"email")," if the form captures the user's email, otherwise ",(0,i.kt)("inlineCode",{parentName:"td"},"other")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"NA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"utm_source")),(0,i.kt)("td",{parentName:"tr",align:null},"Unambiguous identifier of site or browser UI element that linked to the page containing the beginning of the FxA sign-in/sign-up process"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"blog.mozilla.org")),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://analytics.amplitude.com/mozilla-corp/chart/f5sz7kt"},"Registration form views segmented by utm_source"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"utm_campaign")),(0,i.kt)("td",{parentName:"tr",align:null},"More general label for the campaign that the site is part of"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"firstrun")),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null},"TBD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"utm_content")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to track the name of an A-B test"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"my-experiment")),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null},"TBD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"utm_term")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to track the cohort or variation in an A-B test"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"my-experiment-var-a")),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null},"TBD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"utm_medium")),(0,i.kt)("td",{parentName:"tr",align:null},"What type of link was used to direct to the page, if it came through a marketing campaign"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"cpc")),(0,i.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,i.kt)("td",{parentName:"tr",align:null},"TBD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:null},"Not relevant to metrics, but this is ",(0,i.kt)("strong",{parentName:"td"},"required")," to be set to one of ",(0,i.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"fx_fennec_v1")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"fx_ios_v1")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"service=sync"),". Please use the value that reflects the most likely operating system of the user."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"fx_fennec_v1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"fx_ios_v1")),(0,i.kt)("td",{parentName:"tr",align:null},"^","[0-9a-z_-]","+$","/"),(0,i.kt)("td",{parentName:"tr",align:null},"NA")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note these may not be all the parameters you need to pass for your integration to work!")," A more exhaustive but ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md"},"less detailed list can be found here.")," What is documented above are only the parameters that are relevant for metrics analysis in (e.g.) amplitude."),(0,i.kt)("p",null,"Other Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must have access to the mozilla amplitude account to see the example charts. If you are a Mozilla employee, please contact Leif for information on gaining access to amplitude.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Regarding ",(0,i.kt)("inlineCode",{parentName:"p"},"utm_term"),": note that the current usage of this parameter is different from what is typical. In most scenarios, it is used to track the search terms that led the users to the page. If you would like to use the parameter in this way, please inform the Firefox Accounts team."))))}d.isMDXComponent=!0}}]);