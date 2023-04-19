"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6864],{3070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));n(8209);const o={title:"Node Debugging"},s=void 0,i={unversionedId:"how-tos/node-debugging",id:"how-tos/node-debugging",title:"Node Debugging",description:"It's possible to debug a running Node process using a variety of debuggers (see the Node debugging docs for details).",source:"@site/docs/how-tos/node-debugging.md",sourceDirName:"how-tos",slug:"/how-tos/node-debugging",permalink:"/ecosystem-platform/how-tos/node-debugging",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/node-debugging.md",tags:[],version:"current",frontMatter:{title:"Node Debugging"},sidebar:"docs",previous:{title:"Managing Yarn Dependencies",permalink:"/ecosystem-platform/how-tos/managing-yarn-dependencies"},next:{title:"Using a Custom Profile with Firefox",permalink:"/ecosystem-platform/how-tos/using-a-custom-profile-with-firefox"}},l={},d=[{value:"Debugging a Server",id:"debugging-a-server",level:2},{value:"Default Debug Ports",id:"default-debug-ports",level:3},{value:"Debugging Tests",id:"debugging-tests",level:2},{value:"Mocha tests (e.g. <code>fxa-shared</code>)",id:"mocha-tests-eg-fxa-shared",level:3},{value:"Jest tests (e.g. <code>fxa-payments-server</code>)",id:"jest-tests-eg-fxa-payments-server",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It's possible to debug a running Node process using a variety of debuggers (see the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/"},"Node debugging docs")," for details)."),(0,r.kt)("p",null,"You may also be interested in checking out how to use ",(0,r.kt)("a",{parentName:"p",href:"using-vscode-with-fxa"},"VS Code with FxA"),"."),(0,r.kt)("h2",{id:"debugging-a-server"},"Debugging a Server"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," runs some of the services with the debugger enabled by default."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start the whole server as usual (",(0,r.kt)("inlineCode",{parentName:"li"},"yarn && yarn start")," from top-level in the monorepo)"),(0,r.kt)("li",{parentName:"ol"},"To see which debug port each service is listening on check ",(0,r.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"pm2.config.js")," file of the package you're interested in."),(0,r.kt)("li",{parentName:"ol"},"Connect to the process to debug it:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Using Google Chrome, go to ",(0,r.kt)("inlineCode",{parentName:"li"},"chrome://inspect"),", then click the process to connect to DevTools.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'You may need to add a new target in the "Configure..." menu with the correct debug port'))),(0,r.kt)("li",{parentName:"ul"},"VS Code requires setting up a ",(0,r.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," file - see the ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},"VS Code")," docs for details.")))),(0,r.kt)("h3",{id:"default-debug-ports"},"Default Debug Ports"),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),", the following ports are used for ",(0,r.kt)("inlineCode",{parentName:"p"},"--inspect"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Service"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9130"),(0,r.kt)("td",{parentName:"tr",align:null},"content-server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9140"),(0,r.kt)("td",{parentName:"tr",align:null},"admin-panel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9150"),(0,r.kt)("td",{parentName:"tr",align:null},"admin-server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9160"),(0,r.kt)("td",{parentName:"tr",align:null},"auth-server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9170"),(0,r.kt)("td",{parentName:"tr",align:null},"payments-server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9180"),(0,r.kt)("td",{parentName:"tr",align:null},"event-broker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9190"),(0,r.kt)("td",{parentName:"tr",align:null},"support-panel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9200"),(0,r.kt)("td",{parentName:"tr",align:null},"graphql-api")))),(0,r.kt)("h2",{id:"debugging-tests"},"Debugging Tests"),(0,r.kt)("p",null,"The Node debugger can also be attached to a running test process. Firefox Accounts uses a variety of test frameworks, so the steps vary by package."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--inspect")," argument is used in the examples below, but ",(0,r.kt)("inlineCode",{parentName:"p"},"--inspect-brk")," can also be used to pause the process as soon as it starts.")),(0,r.kt)("h3",{id:"mocha-tests-eg-fxa-shared"},"Mocha tests (e.g. ",(0,r.kt)("inlineCode",{parentName:"h3"},"fxa-shared"),")"),(0,r.kt)("p",null,"For Mocha, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--timeout 0")," option, otherwise the test will fail if you step through it and exceed the default timeout (currently 2 seconds on ",(0,r.kt)("inlineCode",{parentName:"p"},"fxa-shared"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node --inspect ./node_modules/.bin/mocha --timeout 0 path/to/file\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"fxa-shared"),", this incantation works for some directories, but not yet others."),(0,r.kt)("h3",{id:"jest-tests-eg-fxa-payments-server"},"Jest tests (e.g. ",(0,r.kt)("inlineCode",{parentName:"h3"},"fxa-payments-server"),")"),(0,r.kt)("p",null,"For Jest, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--runInBand")," argument so it doesn't fork off the test runner to a separate process that isn't available to the inspector:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node --inspect ./node_modules/.bin/jest --runInBand --config server/jest.config.js filematcher\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"filematcher")," is a regex that matches against test file paths. If you omit ",(0,r.kt)("inlineCode",{parentName:"p"},"filematcher"),", Jest will run all tests (but you have to hit Enter a second time to trigger the test run)."))}u.isMDXComponent=!0}}]);