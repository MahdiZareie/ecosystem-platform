"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3810],{25251:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>k,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>y});var n=a(87462),i=a(67294),l=a(3905);a(8209);const o={id:"basic-payload",title:"BasicPayload",hide_table_of_contents:!1},d=void 0,s={unversionedId:"gql-api/objects/basic-payload",id:"gql-api/objects/basic-payload",title:"BasicPayload",description:"No description",source:"@site/docs/gql-api/objects/basic-payload.mdx",sourceDirName:"gql-api/objects",slug:"/gql-api/objects/basic-payload",permalink:"/ecosystem-platform/gql-api/objects/basic-payload",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/basic-payload.mdx",tags:[],version:"current",frontMatter:{id:"basic-payload",title:"BasicPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Avatar",permalink:"/ecosystem-platform/gql-api/objects/avatar"},next:{title:"ChangeRecoveryCodesPayload",permalink:"/ecosystem-platform/gql-api/objects/change-recovery-codes-payload"}},r={},p=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BasicPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basicpayloadbclientmutationidbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:d=!1}=e;const[s,r]=(0,i.useState)(d);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},u={Bullet:p,SpecifiedBy:m,Badge:c,toc:y,Details:k};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type BasicPayload {\n  clientMutationId: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-basicpayloadbclientmutationidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"BasicPayload.",(0,l.kt)("b",null,"clientMutationId"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/attached-client-disconnect"},(0,l.kt)("inlineCode",{parentName:"a"},"attachedClientDisconnect")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/create-password"},(0,l.kt)("inlineCode",{parentName:"a"},"createPassword")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/create-secondary-email"},(0,l.kt)("inlineCode",{parentName:"a"},"createSecondaryEmail")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/delete-avatar"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteAvatar")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/delete-recovery-key"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteRecoveryKey")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/delete-secondary-email"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteSecondaryEmail")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/delete-totp"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteTotp")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/destroy-session"},(0,l.kt)("inlineCode",{parentName:"a"},"destroySession")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/email-verify-code"},(0,l.kt)("inlineCode",{parentName:"a"},"emailVerifyCode")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/metrics-opt"},(0,l.kt)("inlineCode",{parentName:"a"},"metricsOpt")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/reject-unblock-code"},(0,l.kt)("inlineCode",{parentName:"a"},"rejectUnblockCode")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/resend-secondary-email-code"},(0,l.kt)("inlineCode",{parentName:"a"},"resendSecondaryEmailCode")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/resend-verify-code"},(0,l.kt)("inlineCode",{parentName:"a"},"resendVerifyCode")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/send-session-verification-code"},(0,l.kt)("inlineCode",{parentName:"a"},"sendSessionVerificationCode")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/update-primary-email"},(0,l.kt)("inlineCode",{parentName:"a"},"updatePrimaryEmail")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/verify-code"},(0,l.kt)("inlineCode",{parentName:"a"},"verifyCode")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/verify-secondary-email"},(0,l.kt)("inlineCode",{parentName:"a"},"verifySecondaryEmail")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/verify-session"},(0,l.kt)("inlineCode",{parentName:"a"},"verifySession")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);