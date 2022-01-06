"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5027],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),y=i,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"interruptive-surveys",title:"Running Interruptive Surveys in FxA",sidebar_label:"Running Surveys in FxA"},l=void 0,u={unversionedId:"fxa-engineering/interruptive-surveys",id:"fxa-engineering/interruptive-surveys",isDocsHomePage:!1,title:"Running Interruptive Surveys in FxA",description:"Overview",source:"@site/docs/fxa-engineering/interruptive-surveys.md",sourceDirName:"fxa-engineering",slug:"/fxa-engineering/interruptive-surveys",permalink:"/ecosystem-platform/fxa-engineering/interruptive-surveys",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/fxa-engineering/interruptive-surveys.md",tags:[],version:"current",frontMatter:{id:"interruptive-surveys",title:"Running Interruptive Surveys in FxA",sidebar_label:"Running Surveys in FxA"},sidebar:"docs",previous:{title:"Session Tokens",permalink:"/ecosystem-platform/fxa-engineering/fxa-session-tokens"},next:{title:"GitHub Strategies",permalink:"/ecosystem-platform/fxa-engineering/fxa-github"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Setting Up Surveys",id:"setting-up-surveys",children:[{value:"General Process",id:"general-process",children:[]},{value:"SurveyGizmo Access",id:"surveygizmo-access",children:[]},{value:"For survey builders",id:"for-survey-builders",children:[]}]},{value:"Configuration Options",id:"configuration-options",children:[{value:"Conditions",id:"conditions",children:[]}]}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"FxA surveys are meant to be short (1-3 questions) and probe for general\nqualitative information about FxA users (eg. why are you changing your password\ntoday?)"),(0,o.kt)("p",null,"Interruptive surveys can be run on the fxa-content-server. Surveys are created\nin ",(0,o.kt)("a",{parentName:"p",href:"https://www.surveygizmo.com/"},"surveyGizmo")," and configured in a file which\nlives at ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-content-server/server/config/surveys.json"),". You can provide the\nserver with various options to pinpoint a subset of users with the survey.\nAdditionally, you will need to ensure that the survey feature is turned on view\nthe environment variable, ",(0,o.kt)("inlineCode",{parentName:"p"},"SURVEYS_ENABLED"),". If you would like to update the\n",(0,o.kt)("inlineCode",{parentName:"p"},"doNotBotherSpan")," (length of time between each survey shown), you can do so by\nsetting ",(0,o.kt)("inlineCode",{parentName:"p"},"SURVEY_DONT_BOTHER_MS"),"."),(0,o.kt)("h2",{id:"setting-up-surveys"},"Setting Up Surveys"),(0,o.kt)("h3",{id:"general-process"},"General Process"),(0,o.kt)("p",null,"In order to run a survey in FxA, please start by filing a\n",(0,o.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/enter_bug.cgi?product=User%20Research"},"user research bug"),"\nin Bugzilla and flag the ticket as a ",(0,o.kt)("inlineCode",{parentName:"p"},"consultation"),". This bug should CC Jennifer\nDavis (UR), Chelsea Lewis (EPM) John Gruen (PM) and Alex Davis (PM). Please add\n","[FxA Interrupt Survey]"," to the title of your ticket."),(0,o.kt)("p",null,"In addition to the standard info in the UR bug form, please include the\nfollowing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are you targeting a specific RP? If so which one?"),(0,o.kt)("li",{parentName:"ul"},"Are you targeting a specific view (settings, forgot password etc)? If so,\nwhich one?"),(0,o.kt)("li",{parentName:"ul"},"Are you targeting paying subscription customers?")),(0,o.kt)("p",null,"If you're not sure about any of these, that's fine. The UR & FxA teams can work\nwith you to zero in on the correct deployment recipe for your survey."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before launching, you will need documented approval for your survey from UR,\nProduct and Legal.")),(0,o.kt)("p",null,"Once your survey has been built and reviewed, the FxA team will deploy it as\nneeded during our standard weekly release."),(0,o.kt)("h3",{id:"surveygizmo-access"},"SurveyGizmo Access"),(0,o.kt)("p",null,"We have heavily restricted access to creating and editing surveys for FxA. In\norder to edit surveys in FxA, you will need to do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in to SurveyGizmo using ",(0,o.kt)("a",{parentName:"li",href:"https://sso.mozilla.com"},"sso.mozilla.com")),(0,o.kt)("li",{parentName:"ol"},"Set up 2FA inside SurveyGizmo"),(0,o.kt)("li",{parentName:"ol"},"Be added to the ",(0,o.kt)("inlineCode",{parentName:"li"},"FxA_Product")," group by one of the FxA PMs, or a SurveyGizmo\nadmin")),(0,o.kt)("p",null,"In general though, PMs and UR folks can set up surveys and provide appropriate\nURLs to launch surveys."),(0,o.kt)("h3",{id:"for-survey-builders"},"For survey builders"),(0,o.kt)("p",null,"In order to build appropriately formatted surveys, you will first need access to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"FxA_Product")," group in SurveyGizmo."),(0,o.kt)("h4",{id:"creating-a-new-survey"},"Creating a new survey"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Look in the SurveyGizmo sidebar for ",(0,o.kt)("inlineCode",{parentName:"li"},"FxA Interrupt Surveys")),(0,o.kt)("li",{parentName:"ul"},"In this folder, you will see a survey called ",(0,o.kt)("inlineCode",{parentName:"li"},"FxA Interrupt Template"),", by\nclicking on the vertical ellipse at the end of the row, you will be able to\nmake a copy of this survey."),(0,o.kt)("li",{parentName:"ul"},"When you create the survey, please make sure you set the team to ",(0,o.kt)("inlineCode",{parentName:"li"},"FxA_Product"))),(0,o.kt)("h4",{id:"required-survey-bits"},"Required Survey Bits"),(0,o.kt)("p",null,'If you\'re using the standard template, you will see two special "Actions" in the\nsurvey builder.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hidden Value Action")," - This is the first field on the survey. Hidden from\nusers it is intended to capture query param data appended to each survey by\nFxA. This field is not currently used, but the FxA team will be adding\nparametric data to surveys soon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Javascript Action")," - ",(0,o.kt)("strong",{parentName:"li"},"IMPORTANT: If you delete this action your survey\nwill not close correctly.")," This is located on the last page of the survey\nafter the last question. This field contains a bit of custom JavaScript that\ncreates a postMessage event that FxA listens for to handle survey completion\ncorrectly. If you change or edit your survey to remove pages, please make sure\nthis JS Action stays on the last page of your survey with questions present!")),(0,o.kt)("h4",{id:"formatting--styling-surveys"},"Formatting & Styling Surveys"),(0,o.kt)("p",null,"As of this writing, FxA interrupt surveys are only formatted to accept radio,\ncheckbox, and open textarea style questions in SurveyGizmo. Please limit one\nquestion per page."),(0,o.kt)("p",null,"Other question types may present formatting issues due to the small size of the\nsurvey as presented to users."),(0,o.kt)("p",null,"If you need to update the CSS of your survey to accommodate a new question type,\nplease make sure to update the CSS file in both your survey as well as the\noriginal ",(0,o.kt)("inlineCode",{parentName:"p"},"FxA Interrupt Template")," CSS file. In this way, your improvements will\ncarry forward to future surveys."),(0,o.kt)("p",null,"You can can edit survey CSS from the editor by going to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Style")," tab. From\nhere, look for the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML/CSS editor")," in the lower right. Please do not mess with\nthe GUI theme editor options on the left side of the screen."),(0,o.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - string - description of the survey, using dashes instead of spaces, to\nmake the survey easier to grok for other teammates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"view")," - string - view name, where the survey should show up to user"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rate")," - integer - rate at which the survey should be shown to qualifying\nusers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," - URL string - survey gizmo url"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conditions")," - object - conditions which must be met for the user to see the\nsurvey. Additional information below.\u21e9")),(0,o.kt)("h3",{id:"conditions"},"Conditions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"platform")," - string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser")," - string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"relier")," - string - The relier for which the user is authenticating"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reliersList")," - array - We wouldn't want to filter down to an exact matched\nlist here, but would want to be able to survey people signing into service X\nwho have already signed into service Y."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hasNonDefaultAvatar")," - bool - (hypothesis, people that set an avatar are\npower users)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscriptionsList")," - array - we would want to be able to target users who\nhave subscribed to anything and also a specific thing")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "password-reset",\n    "conditions": {\n      "browser": "firefox"\n    },\n    "view": "settings",\n    "url": "https://www.surveygizmo.com/s3/5622367/Password-Reset-1"\n  }\n]\n')),(0,o.kt)("p",null,"After you have gotten your configuration object together and updated in\n",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-content-server/server/config/surveys.json"),", You will need to ensure the\nsurvey feature is turned on(",(0,o.kt)("inlineCode",{parentName:"p"},"SURVEYS_ENABLED"),"), by updating to the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"deploy doc"),"\nfor the upcoming release."))}c.isMDXComponent=!0}}]);