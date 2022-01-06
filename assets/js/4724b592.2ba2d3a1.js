"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1177],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=s,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i=["components"],o={id:"push-design",title:"Design, API's, Error Codes",sidebar_label:"Design, API's, Error Codes"},l=void 0,p={unversionedId:"platform/firefox-push/push-design",id:"platform/firefox-push/push-design",isDocsHomePage:!1,title:"Design, API's, Error Codes",description:"From [the WebPush",source:"@site/docs/platform/firefox-push/push-design.md",sourceDirName:"platform/firefox-push",slug:"/platform/firefox-push/push-design",permalink:"/ecosystem-platform/platform/firefox-push/push-design",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/platform/firefox-push/push-design.md",tags:[],version:"current",frontMatter:{id:"push-design",title:"Design, API's, Error Codes",sidebar_label:"Design, API's, Error Codes"},sidebar:"docs",previous:{title:"Overview",permalink:"/ecosystem-platform/platform/firefox-push/push-feature"},next:{title:"Development Process",permalink:"/ecosystem-platform/platform/firefox-push/push-development"}},u=[{value:"Bridge API",id:"bridge-api",children:[]},{value:"WebPush Proprietary Protocol",id:"webpush-proprietary-protocol",children:[{value:"Messages",id:"messages",children:[]},{value:"Handshake",id:"handshake",children:[]},{value:"Register",id:"register",children:[]},{value:"Unregister",id:"unregister",children:[]},{value:"Ping",id:"ping",children:[]},{value:"Notification",id:"notification",children:[]},{value:"Broadcast",id:"broadcast",children:[]},{value:"Broadcast Subscribe",id:"broadcast-subscribe",children:[]}]},{value:"Error Codes",id:"error-codes",children:[]}],h={toc:u};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"From ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/draft-ietf-webpush-protocol-01#section-2"},"the WebPush\nspecification"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A general model for push services includes three basic actors: a user agent, a\npush service, and an application (server).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    +-------+           +--------------+       +-------------+\n    |  UA   |           | Push Service |       | Application |\n    +-------+           +--------------+       +-------------+\n        |                      |                      |\n        |      Subscribe       |                      |\n        |---------------------\x3e|                      |\n        |       Monitor        |                      |\n        |<====================>|                      |\n        |                      |                      |\n        |          Distribute Push Resource           |\n        |--------------------------------------------\x3e|\n        |                      |                      |\n        :                      :                      :\n        |                      |     Push Message     |\n        |    Push Message      |<---------------------|\n        |<---------------------|                      |\n        |                      |                      |\n")),(0,a.kt)("p",null,"In WebPush, the Push Message is used to wake UA code."),(0,a.kt)("p",null,"Currently the Mozilla Push Service supports a proprietary protocol\nusing a websocket between the UA and the Push Service."),(0,a.kt)("h2",{id:"bridge-api"},"Bridge API"),(0,a.kt)("p",null,"Push allows for remote devices to perform some functions using an HTTP\ninterface. This allows remote devices on Android, iOS, and Amazon to receive\nWebPush compatible messages using WebPush endpoints."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../api/push_bridge.html"},"Push Bridge API Documentation"),"."),(0,a.kt)("h2",{id:"webpush-proprietary-protocol"},"WebPush Proprietary Protocol"),(0,a.kt)("p",null,"This documents the current Push Service Protocol used between the UA and\nthe Push Service."),(0,a.kt)("p",null,"The protocol uses a websocket that carries JSON messages in a mostly\nrequest/response style format. The only exception is that after the ",(0,a.kt)("strong",{parentName:"p"},"Hello"),"\nresponse the Push Server will send any stored notifications as well as new\nnotifications when they arrive."),(0,a.kt)("p",null,"All websocket connections are secured with TLS (wss://). The Push Server\nmaintains a list of all previously seen UAID's and notifications for UA's that\ncame in while the UA was disconnected. There is no authentication for a given\nUAID when reconnecting."),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"required")," that ChannelID's and UAID's be UUID's."),(0,a.kt)("h3",{id:"messages"},"Messages"),(0,a.kt)("p",null,"All messages are encoded as JSON. All messages MUST have the following fields:"),(0,a.kt)("p",null,"messageType string\n: Defines the message type"),(0,a.kt)("h3",{id:"handshake"},"Handshake"),(0,a.kt)("p",null,"After the WebSocket is established, the UserAgent begins communication by\nsending a hello message. The hello message contains the UAID if the UserAgent\nhas one, either generated by the UserAgent for the first handshake or returned\nby the server from an earlier handshake. The UserAgent also transmits the\nchannelIDs it knows so the server may synchronize its state and optionally the\nMegaphone broadcastIDs it's subscribed to (if any)."),(0,a.kt)("p",null,"The server MAY respect this UAID, but it is at liberty to ask the UserAgent to\nchange its UAID in the response."),(0,a.kt)("p",null,"If the UserAgent receives a new UAID, it MUST delete all existing channelIDs and\ntheir associated versions. It MAY then wake up all registered applications\nimmediately or at a later date by sending them a push-register message."),(0,a.kt)("p",null,"A repeated hello message on an established channel may result in the server\ndisconnecting the client for bad behavior."),(0,a.kt)("p",null,"The handshake is considered complete, once the UserAgent has received a reply."),(0,a.kt)("p",null,"An UserAgent MUST transmit a hello message only once on its WebSocket. If the\nhandshake is not completed in the first try, it MUST disconnect the WebSocket\nand begin a new connection."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Applications may request registrations or unregistrations from the\nUserAgent, before or when the handshake is in progress. The UserAgent MAY buffer\nthese or report errors to the application. But it MUST NOT send these requests\nto the PushServer until the handshake is completed."),(0,a.kt)("h4",{id:"useragent---pushserver"},"UserAgent -> PushServer"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "hello"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"uaid string REQUIRED"),(0,a.kt)("dd",null,"If the UserAgent has a previously assigned UAID, it should send it. Otherwise send an empty string."),(0,a.kt)("dt",null,"channelIDs list of strings REQUIRED"),(0,a.kt)("dd",null,"If the UserAgent has a list of channelIDs it wants to be notified of, it must pass these, otherwise an empty list."),(0,a.kt)("dt",null,"use_webpush bool OPTIONAL"),(0,a.kt)("dd",null,"If the UserAgent wants the WebPush data support for notifications it may include this field with a value of *true*. This field may appear for legacy reasons."),(0,a.kt)("dt",null,"broadcasts object OPTIONAL"),(0,a.kt)("dd",null,"If the UserAgent wants to subscribe to specific megaphone broadcasts, it may include this field: an object consisting of broadcastIDs mapped to the UserAgent's current broadcast versions.")),(0,a.kt)("p",null,"Extra fields: The UserAgent MAY pass any extra JSON data to the PushServer. This\ndata may include information required to wake up the UserAgent out-of-band. The\nPushServer MAY ignore this data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messageType": "hello",\n  "uaid": "fd52438f-1c49-41e0-a2e4-98e49833cc9c",\n  "broadcasts": {\n    "test/broadcast1": "v3",\n    "test/broadcast2": "v0"\n  }\n}\n')),(0,a.kt)("h4",{id:"pushserver---useragent"},"PushServer -> UserAgent"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "hello"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"uaid string REQUIRED"),(0,a.kt)("dd",null,"The UserAgent's provided UAID OR a new UAID."),(0,a.kt)("dt",null,"status number REQUIRED"),(0,a.kt)("dd",null,"Used to indicate success/failure. MUST be one of: 200 - OK. Successful handshake. 503 - Service Unavailable. Database out of space or offline. Disk space full or whatever other reason due to which the PushServer could not grant this registration. UserAgent SHOULD avoid retrying immediately."),(0,a.kt)("dt",null,"use_webpush bool OPTIONAL"),(0,a.kt)("dd",null,"Must match sent value"),(0,a.kt)("dt",null,"broadcasts object OPTIONAL"),(0,a.kt)("dd",null,"*Only* broadcasts the UserAgent has requested subscriptions to whose version values differ from the UserAgent's provided values. It may be empty if the UserAgent is up to date.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messageType": "hello",\n  "status": 200,\n  "uaid": "fd52438f-1c49-41e0-a2e4-98e49833cc9c",\n  "broadcasts": {\n    "test/broadcast2": "v1"\n  }\n}\n')),(0,a.kt)("h3",{id:"register"},"Register"),(0,a.kt)("p",null,"The Register message is used by the UserAgent to request that the PushServer\nnotify it when a channel changes. Since channelIDs are associated with only one\nUAID, this effectively creates the channel, while unregister destroys the\nchannel."),(0,a.kt)("p",null,"The channelID is chosen by the UserAgent because it also acts like a nonce for\nthe Register message itself. Because of this PushServers MAY respond out of\norder to multiple register messages or messages may be lost without compromising\ncorrectness of the protocol."),(0,a.kt)("p",null,"The request is considered successful only after a response is received with a\nstatus code of 200. On success the UserAgent MUST:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update its persistent storage based on the response"),(0,a.kt)("li",{parentName:"ul"},"Notify the application of a successful registration."),(0,a.kt)("li",{parentName:"ul"},"On error, the UserAgent MUST notify the application as soon as possible.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": The register call is made by the UserAgent on behalf of an\napplication. The UserAgent SHOULD have reasonable timeouts in place so that\nthe application is not kept waiting for too long if the server does not\nrespond or the UserAgent has to retry the connection."),(0,a.kt)("h4",{id:"useragent---pushserver-1"},"UserAgent -> PushServer"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "register"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"channelID string REQUIRED"),(0,a.kt)("dd",null,"A unique identifier generated by the UserAgent, distinct from any existing channelIDs it has registered. It is RECOMMENDED that this is a UUIDv4 token.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "messageType": "register",\n    "channelID": "d9b74644-4f97-46aa-b8fa-9393985cd6cd"\n}\n')),(0,a.kt)("h4",{id:"pushserver---useragent-1"},"PushServer -> UserAgent"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "register"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"channelID string REQUIRED"),(0,a.kt)("dd",null,"This MUST be the same as the channelID sent by the UserAgent in the register request that this message is a response to."),(0,a.kt)("dt",null,"status number REQUIRED"),(0,a.kt)("dd",null,"Used to indicate success/failure. MUST be one of: 200 - OK. Success. Idempotent: If the PushServer receives a register for the same channelID from a UserAgent which already has a registration for the channelID, it should still respond with success. 409 - Conflict. The chosen ChannelID is already in use and NOT associated with this UserAgent. UserAgent SHOULD retry with a new ChannelID as soon as possible. 500 - Internal server error. Database out of space or offline. Disk space full or whatever other reason due to which the PushServer could not grant this registration. UserAgent SHOULD avoid retrying immediately."),(0,a.kt)("dt",null,"pushEndpoint string REQUIRED"),(0,a.kt)("dd",null,"Should be the URL sent to the application by the UserAgent. AppServers will contact the PushServer at this URL to update the version of the channel identified by channelID.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' {\n   "messageType": "register",\n   "channelID": "d9b74644-4f97-46aa-b8fa-9393985cd6cd",\n   "status": 200,\n   "pushEndpoint": "http://pushserver.example.org/d9b74644"\n }\n')),(0,a.kt)("h3",{id:"unregister"},"Unregister"),(0,a.kt)("p",null,"Unregistration is ",(0,a.kt)("strong",{parentName:"p"},"required")," for the WebPush."),(0,a.kt)("p",null,"PushServers MUST support it. UserAgents SHOULD support it."),(0,a.kt)("p",null,"The unregister is required only between the App and the UserAgent, so that the\nUserAgent stops notifying the App when the App is no longer interested in a\npushEndpoint."),(0,a.kt)("p",null,"The unregister is also useful to the AppServer, because it should stop sending\nnotifications to an endpoint the App is no longer monitoring. Even then, it is\nreally an optimization so that the AppServer need not have some sort of garbage\ncollection mechanism to clean up endpoints at intervals of time."),(0,a.kt)("p",null,"The PushServer MUST implement unregister, but need not rely on it. Well behaved\nAppServers will stop notifying it of unregistered endpoints automatically. Well\nbehaved UserAgents won't notify their apps of unregistered updates either. So\nthe PushServer can continue to process notifications and pass them on to\nUserAgents, when it has not been told about the unregistration."),(0,a.kt)("p",null,"When an App calls unregister(endpoint) it is RECOMMENDED that the UserAgent\nfollow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Remove its local registration first, for example from the database.\nThis will allow it to immediately start ignoring updates."),(0,a.kt)("li",{parentName:"ol"},"Notify the App that unregistration succeeded."),(0,a.kt)("li",{parentName:"ol"},"Fire off an unregister message to the PushServer")),(0,a.kt)("h4",{id:"useragent---pushserver-2"},"UserAgent -> PushServer"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "unregister"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"channelID string REQUIRED"),(0,a.kt)("dd",null,"ChannelID that should be unregistered.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "messageType": "unregister",\n    "channelID": "d9b74644-4f97-46aa-b8fa-9393985cd6cd"\n}\n')),(0,a.kt)("h4",{id:"pushserver---useragent-2"},"PushServer -> UserAgent"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "unregister"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"channelID string REQUIRED"),(0,a.kt)("dd",null,"This MUST be the same as the channelID sent by the UserAgent in the unregister request that this message is a response to."),(0,a.kt)("dt",null,"status number REQUIRED"),(0,a.kt)("dd",null,"Used to indicate success/failure. MUST be one of: 200 - OK. Success. Idempotent: If the PushServer receives a unregister for a non-existent channelID it should respond with success. If the channelID is associated with a DIFFERENT UAID, it MUST NOT delete the channelID, but still MUST respond with success to this UserAgent. 500 - Internal server error. Database offline or whatever other reason due to which the PushServer could not grant this unregistration. UserAgent SHOULD avoid retrying immediately.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "messageType": "unregister",\n    "channelID": "d9b74644-4f97-46aa-b8fa-9393985cd6cd",\n    "status": 200\n}\n')),(0,a.kt)("h3",{id:"ping"},"Ping"),(0,a.kt)("p",null,"The connection to the Push Server may be lost due to network issues. When the\nUserAgent detects loss of network, it should reconnect. There are situations in\nwhich the TCP connection dies without either end discovering it immediately. The\nUserAgent MAY send a ping approximately every 30 minutes and expect a reply\nfrom the server in a reasonable time (The Mozilla UserAgent uses 10 seconds). If\nno data is received, the connection should be presumed closed and a new\nconnection started."),(0,a.kt)("p",null,"A UserAgent MUST NOT send a Ping more frequently than once a minute or its\nconnection MAY be dropped."),(0,a.kt)("p",null,"The UserAgent should consider normal communications as an indication that the\nsocket is working properly. It SHOULD send the ping packet only if no activity\nhas occurred in the past 30 minutes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": This section is included for relevant historical purposes as the\ncurrent implementation sends WebSocket Ping frames every 5 minutes which is\nsufficient to keep the connection alive. As such, client-sent Ping's are no\nlonger needed."),(0,a.kt)("h4",{id:"useragent---pushserver-3"},"UserAgent -> PushServer"),(0,a.kt)("p",null,"The 2-character string {} is sent. This is a valid JSON object that requires no\nalternative processing on the server, while keeping transmission size small."),(0,a.kt)("h4",{id:"pushserver---useragent-3"},"PushServer -> UserAgent"),(0,a.kt)("p",null,"The PushServer may reply with any data. The UserAgent is only concerned about\nthe state of the connection. The PushServer may deliver pending notifications or\nother information. If there is no pending information to be sent, it is\nRECOMMENDED that the PushServer also reply with the string {}."),(0,a.kt)("h3",{id:"notification"},"Notification"),(0,a.kt)("h4",{id:"appserver---pushserver"},"AppServer -> PushServer"),(0,a.kt)("p",null,"The AppServer MUST make a HTTP PUT request to the Endpoint received from the\nApp, or a HTTP POST if using the WebPush extension."),(0,a.kt)("p",null,"If no request body is present, the server MAY presume the version to be the\ncurrent server UTC."),(0,a.kt)("p",null,'If the request body is present, the request MUST contain the string "version=N"\nand the Content-Type MUST be application/x-www-form-urlencoded.'),(0,a.kt)("h4",{id:"pushserver---appserver"},"PushServer -> AppServer"),(0,a.kt)("p",null,"The HTTP response status code indicates if the request was successful."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"200 - OK. The PushServer will attempt to deliver a notification to the\nassociated UserAgent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"500 - Something went wrong with the server. Rare, but the AppServer should try\nagain."))),(0,a.kt)("p",null,"The HTTP response body SHOULD be empty."),(0,a.kt)("h4",{id:"pushserver---useragent-4"},"PushServer -> UserAgent"),(0,a.kt)("p",null,"Notifications are acknowledged by the UserAgent. PushServers should retry unacknowledged notifications every 60 seconds. If the version of an unacknowledged notification is updated, the PushServer MAY queue up a new notification for this channelID and the new version, and remove the old notification from the pending queue."),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "notification"'),(0,a.kt)("dd",null)),(0,a.kt)("p",null,"The following attributes are present\nin each notification. A\nnotification message is sent for every stored notification individually, as well\nas new notifications."),(0,a.kt)("dl",null,(0,a.kt)("dt",null,"channelID string REQUIRED"),(0,a.kt)("dd",null,"ChannelID of the notification"),(0,a.kt)("dt",null,"version string REQUIRED"),(0,a.kt)("dd",null,"Version of the notification sent"),(0,a.kt)("dt",null,"headers map OPTIONAL"),(0,a.kt)("dd",null,"Encryption headers sent along with the data. Present only if data was sent."),(0,a.kt)("dt",null,"data string OPTIONAL"),(0,a.kt)("dd",null,"Data payload, if included. This string is Base64 URL-encoded.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "messageType": "notification",\n    "channelID": "431b4391-c78f-429a-a134-f890b5adc0bb",\n    "version": "a7695fa0-9623-4890-9c08-cce0231e4b36:d9b74644-4f97-46aa-b8fa-9393985cd6cd"\n}\n')),(0,a.kt)("h4",{id:"useragent---pushserver-4"},"UserAgent -> PushServer"),(0,a.kt)("p",null,"It is RECOMMENDED that the UserAgent try to batch all pending acknowledgements\ninto fewer messages if bandwidth is a concern. The ack MUST be sent as soon as\nthe message has been processed, otherwise the\nPush Server MAY cease sending notifications to avoid holding excessive client\nstate."),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "ack"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"updates list"),(0,a.kt)("dd",null,"The list contains one or more ",(0,a.kt)("code",null,"{",'"channelID": channelID, "version": N',"}")," pairs.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "messageType": "ack",\n    "updates": [{ "channelID": "431b4391-c78f-429a-a134-f890b5adc0bb", "version": 23 }, { "channelID": "a7695fa0-9623-4890-9c08-cce0231e4b36", "version": 42 } ]\n}\n')),(0,a.kt)("h3",{id:"broadcast"},"Broadcast"),(0,a.kt)("p",null,"When a UserAgent's subscribed broadcasts are updated, PushServers send\nbroadcast messages with no expected reply."),(0,a.kt)("h4",{id:"pushserver---useragent-5"},"PushServer -> UserAgent"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "broadcast"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"broadcasts object OPTIONAL"),(0,a.kt)("dd",null,"*Only* broadcasts the UserAgent has requested subscriptions to whose new version values differ from the UserAgent's provided values.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messageType": "broadcast",\n  "broadcasts": {\n    "test/broadcast1": "v4"\n  }\n}\n')),(0,a.kt)("h3",{id:"broadcast-subscribe"},"Broadcast Subscribe"),(0,a.kt)("p",null,"UserAgents subscribe to broadcasts during the hello handshake but may also\nsubscribe to additional broadcasts afterwards. There is no expected reply to\nthis message."),(0,a.kt)("h4",{id:"useragent---pushserver-5"},"UserAgent -> PushServer"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,'messageType = "broadcast_subscribe"'),(0,a.kt)("dd",null),(0,a.kt)("dt",null,"broadcasts object REQUIRED"),(0,a.kt)("dd",null,"New broadcasts the UserAgent is requesting subscriptions to and their current broadcast versions.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messageType": "broadcast_subscribe",\n  "broadcasts": {\n    "test/new-broadcast22": "v8"\n  }\n}\n')),(0,a.kt)("h2",{id:"error-codes"},"Error Codes"),(0,a.kt)("p",null,"The Mozilla Push Service may return a variety of error codes depending on what\nwent wrong in the request."),(0,a.kt)("p",null,"Autopush uses error codes based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"},"HTTP response codes"),".\nAn error response will contain a JSON body including an additional error information."),(0,a.kt)("p",null,"Unless otherwise specified, all calls return one the following error statuses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"20x - ",(0,a.kt)("strong",{parentName:"p"},"Success")," - The message was accepted for transmission to the client. Please note that the message may still be rejected by the User Agent if there is an error with the message's encryption.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"301 - ",(0,a.kt)("strong",{parentName:"p"},"Moved + ",(0,a.kt)("inlineCode",{parentName:"strong"},"Location:"))," if ",(0,a.kt)("inlineCode",{parentName:"p"},"{client_token}")," is invalid (Bridge API Only) - Bridged services (ones that run over third party services like GCM and APNS), may require a new URL be used. Please stop using the old URL immediately and instead use the new URL provided.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"400 - ",(0,a.kt)("strong",{parentName:"p"},"Bad Parameters")," -- One or more of the parameters specified is invalid. See the following sub-errors indicated by ",(0,a.kt)("inlineCode",{parentName:"p"},"errno")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"errno 101 - Missing necessary crypto keys - One or more required crypto key elements are missing from this transaction. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ietf-httpbis-encryption-encoding/"},"appropriate specification")," for the requested content-type.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"errno 108 - Router type is invalid - The URL contains an invalid router type, which may be from URL corruption or an unsupported bridge. Refer to ",(0,a.kt)("a",{parentName:"p",href:"../../api/push_bridge.html"},"bridge API"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"errno 110 - Invalid crypto keys specified - One or more of the crytpo key elements are invalid. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ietf-httpbis-encryption-encoding/"},"appropriate specification")," for the requested content-type.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"errno 111 - Missing Required Header - A required crypto element header is missing. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ietf-httpbis-encryption-encoding/"},"appropriate specification")," for the requested content-type."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Missing TTL Header - Include the Time To Live header (",(0,a.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/draft-ietf-webpush-protocol#section-6.2"},"IETF WebPush protocol \xa76.2"),")"),(0,a.kt)("li",{parentName:"ul"},"Missing Crypto Headers - Include the appropriate encryption headers (",(0,a.kt)("a",{parentName:"li",href:"https://webpush-wg.github.io/webpush-encryption/#rfc.section.3.2"},"WebPush Encryption \xa73.2")," and ",(0,a.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/draft-ietf-webpush-vapid-02#section-4"},"WebPush VAPID \xa74"),")"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'errno 112 - Invalid TTL header value - The Time To Live "TTL" header contains an invalid or unreadable value. Please change to a number of seconds that this message should live, between 0 (message should be dropped immediately if user is unavailable) and 2592000 (hold for delivery within the next approximately 30 days).')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"errno 113 - Invalid Topic header value - The Topic header contains an invalid or unreadable value. Please use only ASCII alphanumeric values ","[A-Za-z0-9]"," and a maximum length of 32 bytes..")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"401 - ",(0,a.kt)("strong",{parentName:"p"},"Bad Authorization")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header is invalid or missing. See the ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ietf-webpush-vapid/"},"VAPID specification"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errno 109 - Invalid authentication"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"404 - ",(0,a.kt)("strong",{parentName:"p"},"Endpoint Not Found")," - The URL specified is invalid and should not be used again."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errno 102 - Invalid URL endpoint"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"410 - ",(0,a.kt)("strong",{parentName:"p"},"Endpoint Not Valid")," - The URL specified is no longer valid and should no longer be used. A User has become permanently unavailable at this URL."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errno 103 - Expired URL endpoint"),(0,a.kt)("li",{parentName:"ul"},"errno 105 - Endpoint became unavailable during request"),(0,a.kt)("li",{parentName:"ul"},"errno 106 - Invalid subscription"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"413 - ",(0,a.kt)("strong",{parentName:"p"},"Payload too large")," - The body of the message to send is too large. The max data that can be sent is 4028 characters. Please reduce the size of the message."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errno 104 - Data payload too large"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"500 - ",(0,a.kt)("strong",{parentName:"p"},"Unknown server error")," - An internal error occurred within the Push Server."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errno 999 - Unknown error"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"502 - ",(0,a.kt)("strong",{parentName:"p"},"Bad Gateway")," - The Push Service received an invalid response from an upstream Bridge service."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errno 900 - Internal Bridge misconfiguration"),(0,a.kt)("li",{parentName:"ul"},"errno 901 - Invalid authentication"),(0,a.kt)("li",{parentName:"ul"},"errno 902 - An error occurred while establishing a connection"),(0,a.kt)("li",{parentName:"ul"},"errno 903 - The request timed out"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"503 - ",(0,a.kt)("strong",{parentName:"p"},"Server temporarily unavailable."),' - The Push Service is currently unavailable. See the error number "errno" value to see if retries are available.'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errno 201 - Use exponential back-off for retries"),(0,a.kt)("li",{parentName:"ul"},"errno 202 - Immediate retry ok")))))}d.isMDXComponent=!0}}]);