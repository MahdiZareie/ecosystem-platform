"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4262],{64196:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var a=n(87462),s=n(67294),o=n(3905);n(8209);const i={id:"session-reauth-input",title:"SessionReauthInput",hide_table_of_contents:!1},l=void 0,d={unversionedId:"gql-api/inputs/session-reauth-input",id:"gql-api/inputs/session-reauth-input",title:"SessionReauthInput",description:"No description",source:"@site/docs/gql-api/inputs/session-reauth-input.mdx",sourceDirName:"gql-api/inputs",slug:"/gql-api/inputs/session-reauth-input",permalink:"/ecosystem-platform/gql-api/inputs/session-reauth-input",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/session-reauth-input.mdx",tags:[],version:"current",frontMatter:{id:"session-reauth-input",title:"SessionReauthInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SendSessionVerificationInput",permalink:"/ecosystem-platform/gql-api/inputs/send-session-verification-input"},next:{title:"SessionReauthOptionsInput",permalink:"/ecosystem-platform/gql-api/inputs/session-reauth-options-input"}},r={},u=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SessionReauthInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sessionreauthinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SessionReauthInput.<b>authPW</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sessionreauthinputbauthpwbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SessionReauthInput.<b>email</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sessionreauthinputbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SessionReauthInput.<b>options</b></code><Bullet /><code>SessionReauthOptionsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-sessionreauthinputboptionsbcodesessionreauthoptionsinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SessionReauthInput.<b>sessionToken</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sessionreauthinputbsessiontokenbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[d,r]=(0,s.useState)(l);return(0,o.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&i)},h={Bullet:u,SpecifiedBy:p,Badge:c,toc:g,Details:m};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input SessionReauthInput {\n  clientMutationId: String\n  authPW: String!\n  email: String!\n  options: SessionReauthOptionsInput!\n  sessionToken: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sessionreauthinputbclientmutationidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SessionReauthInput.",(0,o.kt)("b",null,"clientMutationId"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sessionreauthinputbauthpwbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SessionReauthInput.",(0,o.kt)("b",null,"authPW"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sessionreauthinputbemailbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SessionReauthInput.",(0,o.kt)("b",null,"email"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sessionreauthinputboptionsbcodesessionreauthoptionsinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SessionReauthInput.",(0,o.kt)("b",null,"options"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/inputs/session-reauth-options-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SessionReauthOptionsInput!"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sessionreauthinputbsessiontokenbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SessionReauthInput.",(0,o.kt)("b",null,"sessionToken"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/gql-api/mutations/reauth-session"},(0,o.kt)("inlineCode",{parentName:"a"},"reauthSession")),"  ",(0,o.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);