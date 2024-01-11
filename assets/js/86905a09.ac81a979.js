"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6362],{53478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const a={id:"sub-plat-contentful",title:"SubPlat - Contentful",sidebar_label:"Subscription Platform - Contentful"},o="Managing Subscriptions with Contentful",s={id:"relying-parties/reference/sub-plat-contentful",title:"SubPlat - Contentful",description:"Product managers and Relying parties can manage Mozilla Subscriptions with Contentful, a headless content management system (CMS).",source:"@site/docs/relying-parties/reference/sub-plat-contentful.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/sub-plat-contentful",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-contentful",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/sub-plat-contentful.md",tags:[],version:"current",frontMatter:{id:"sub-plat-contentful",title:"SubPlat - Contentful",sidebar_label:"Subscription Platform - Contentful"},sidebar:"docs",previous:{title:"Subscription Features",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-features"},next:{title:"Subscription Coupons",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-coupons"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Managing Content",id:"managing-content",level:2},{value:"Creating a new product",id:"creating-a-new-product",level:2},{value:"... what if my product has multiple locales?",id:"-what-if-my-product-has-multiple-locales",level:3},{value:"... what if my product is currency-specific or a multiple currency offering?",id:"-what-if-my-product-is-currency-specific-or-a-multiple-currency-offering",level:3},{value:"... what if my product has tiered plans?",id:"-what-if-my-product-has-tiered-plans",level:3},{value:"... what if my product is a bundle?",id:"-what-if-my-product-is-a-bundle",level:3},{value:"... what if my product can be upgraded from or to another product?",id:"-what-if-my-product-can-be-upgraded-from-or-to-another-product",level:3},{value:"... what if my product has archived plans?",id:"-what-if-my-product-has-archived-plans",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"managing-subscriptions-with-contentful",children:"Managing Subscriptions with Contentful"}),"\n",(0,r.jsxs)(t.p,{children:["Product managers and Relying parties can manage Mozilla Subscriptions with ",(0,r.jsx)(t.a,{href:"https://www.contentful.com/content-platform/",children:"Contentful"}),", a headless content management system (CMS)."]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(t.p,{children:["You can log into Contentful through ",(0,r.jsx)(t.a,{href:"https://sso.mozilla.com/dashboard",children:"Mozilla Dashboard"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you do not have access to Subscription Platform in Contentful, please let us know in the ",(0,r.jsx)(t.code,{children:"#subscription-platform"})," Slack channel. You will receive an invite via email to verify your account."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Once logged in, you can determine the environment you are currently in by checking the navigation bar. This is also where you can navigate between environments."}),"\n",(0,r.jsx)("img",{src:n(96621).Z,alt:"Navigation bar",width:"400"}),"\n",(0,r.jsx)(t.h2,{id:"managing-content",children:"Managing Content"}),"\n",(0,r.jsx)(t.p,{children:"The Content tab is where all content entries can be found once they are created. You will be able to search and filter down relevant content based on structure and metadata to find specific entries to view, edit, or delete."}),"\n",(0,r.jsx)("img",{src:n(35327).Z,alt:"Add Entry",width:"500"}),"\n",(0,r.jsx)(t.p,{children:'A new content entry can be added by clicking the "Add entry" button located at the top right of the page and selecting the desired entry based on our content models below.'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Content models"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Capability"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Required."})," Capabilities enabled by the subscription product that services honor, and that customers are entitled to depending on the offering purchased.",(0,r.jsx)("br",{})," - Product managers are to provide the name(s) of capabilities and the Stripe Product ID (from Stripe) to SubPlat Engineers. ",(0,r.jsx)("br",{})," - SubPlat Engineers are to add capabilities (and link the related service) into Contentful. ",(0,r.jsx)("br",{})," - Product managers are to add capability(ies) to the Capabilities field in Offering."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Common content"}),(0,r.jsxs)(t.td,{children:["Optional. Content used on multiple pages (e.g., Privacy Notice URL, TOS URL, Success Action Button URL, etc.), not specific to a certain component. If the product offering is available in other locales, translation fields appear in this entry, once locales have been selected.",(0,r.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Coupon Config"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"WORK IN PROGRESS - Keep coupon configuration in Stripe until further notice"}),(0,r.jsx)("br",{}),"Optional. Coupon configuration options of the Stripe Promotion Codes valid in specified countries for the product offering. ",(0,r.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IAP"}),(0,r.jsxs)(t.td,{children:["Optional. IAP configurations that include the Apple App Store productIds and/or Google Play product SKUs (now called product IDs) that are mapped to this Offering. ",(0,r.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Offering"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Required."})," The configuration of the subscription product. This entry includes the Stripe Product ID from Stripe of the product offering, and requires the Capabilities and Purchase entries.",(0,r.jsx)("br",{}),"If the product has multiple tiers, each tier should be a separate offering (e.g., 123Done Basic, 123Done Pro, 123Done Premium, etc).",(0,r.jsx)("br",{}),"If the product has legacy single-currency product plans, add their Stripe Plan IDs in the Stripe Legacy Plans field.",(0,r.jsx)("br",{}),"If applicable, this entry should be added to a Subgroup if a customer is able to upgrade from or to this product offering (see Subgroup). ",(0,r.jsx)("br",{}),"- Product managers are to create this entry.",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.strong,{children:"NOTE: The Countries field is currently a feature that is work in progress. Please reach out if countries are missing in which the product is available"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Purchase"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Required."})," This entry requires the related Purchase Details and Offering entries to the product offering.",(0,r.jsx)("br",{}),"The Stripe Plan Choices field should only include the Stripe Plan IDs of the new multi-currency plans that should be available on the Checkout page for this product.",(0,r.jsx)("br",{}),"Note: Legacy single-currency product plans should be added to the Stripe Legacy Plans field in Offering.",(0,r.jsx)("br",{}),"- Product managers are to create and add this entry to Offering."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Purchase Details"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Required."})," Details related to the product offering, such as product name and webIconURL. If the product offering is available in other locales, translation fields appear in this entry, once locales have been selected. As a reminder, product managers can either create a pull request to add the product icons to the repo, or share the icons with SubPlat Engineers, to add to the CDN for the webIconURL.",(0,r.jsx)("br",{}),"- Product managers are to create and add this entry to Purchase."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Service"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Required."})," Mapping of the services to relevant OAuth configuration of the product and its capabilities. ",(0,r.jsx)("br",{}),"- Product managers and SubPlat engineers are to confirm the OAuth ID of the product (assigned from Accounts team). ",(0,r.jsx)("br",{}),"- SubPlat Engineers are to add service (and link the related capabilities) into Contentful. ",(0,r.jsx)("br",{}),"- Product managers are to add service in the Service field in Offering."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Subgroup"}),(0,r.jsxs)(t.td,{children:["Optional. A collection of subscription products in which only one product is active at a time. The order of the offerings in the Offering field is the order in which a customer can upgrade from and to within the sub group.",(0,r.jsx)("br",{}),"- Product managers are to create this entry and add Offerings, if applicable."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-new-product",children:"Creating a new product"}),"\n",(0,r.jsx)(t.p,{children:"A subscription product can be entered into Contentful by creating an Offering entry, in which you will need the Stripe Product ID from Stripe. An Offering entry also requires the following entries (which can be added into Contentful in any order):"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Capability","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If the capabilities for the product offering are not yet in Contentful, please let us know in the ",(0,r.jsx)(t.code,{children:"#subscription-platform"})," Slack channel."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Purchase","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A Purchase entry requires a Purchase Details entry"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If applicable, the following entries can also be linked to the product offering:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Common Content"}),"\n",(0,r.jsx)(t.li,{children:"Coupon Config"}),"\n",(0,r.jsx)(t.li,{children:"IAP"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'Once all entries are complete and ready to ship, be sure to set the status of all related content entries to the product offering to "Published". Once set to "Published" status, you may need to refresh the checkout page of the product offering to see the changes.'}),"\n",(0,r.jsx)(t.h3,{id:"-what-if-my-product-has-multiple-locales",children:"... what if my product has multiple locales?"}),"\n",(0,r.jsx)(t.p,{children:"When creating the Offering for the product, select the countries that the product should be available in the Countries field."}),"\n",(0,r.jsx)(t.p,{children:'In addition, the sidebar of any entry will have a Translation section. Check that "Multiple Locales" is selected in the dropdown, then click "Change", select/deselect the locales to include for the product, and save changes.'}),"\n",(0,r.jsx)(t.p,{children:"Once saved, be sure to complete the translation fields in Common Content and Purchase Details, if applicable."}),"\n",(0,r.jsxs)(t.p,{children:["If countries or locales are not included in the selection, please let us know in the ",(0,r.jsx)(t.code,{children:"#subscription-platform"})," Slack channel."]}),"\n",(0,r.jsx)("img",{src:n(38554).Z,alt:"Changing to multiple locales",width:"400"}),"\n",(0,r.jsx)("img",{src:n(41417).Z,alt:"Adding locales",width:"400"}),"\n",(0,r.jsx)(t.h3,{id:"-what-if-my-product-is-currency-specific-or-a-multiple-currency-offering",children:"... what if my product is currency-specific or a multiple currency offering?"}),"\n",(0,r.jsx)(t.p,{children:"There is no need to include currency in Contentful."}),"\n",(0,r.jsx)(t.h3,{id:"-what-if-my-product-has-tiered-plans",children:"... what if my product has tiered plans?"}),"\n",(0,r.jsx)(t.p,{children:"Each tiered plan should have its own Offering with the product name and tier level in the Internal Name (e.g. 123Done Basic, 123Done Pro, 123Done Premium, etc)."}),"\n",(0,r.jsx)(t.admonition,{title:"Each tiered plan should have its own Stripe Product ID",type:"note"}),"\n",(0,r.jsx)(t.h3,{id:"-what-if-my-product-is-a-bundle",children:"... what if my product is a bundle?"}),"\n",(0,r.jsx)(t.p,{children:"In Offering, include the capabilities for the product in the Capabilities field."}),"\n",(0,r.jsx)(t.p,{children:'For example, in the "Bundle - 123 Foxkeh" Offering below, this offering includes the capabilities for both "123Done Pro Plus" and "CookingWithFoxkeh 2".'}),"\n",(0,r.jsx)("img",{src:n(88556).Z,alt:"Bundle",width:"500"}),"\n",(0,r.jsx)(t.h3,{id:"-what-if-my-product-can-be-upgraded-from-or-to-another-product",children:"... what if my product can be upgraded from or to another product?"}),"\n",(0,r.jsx)(t.p,{children:"Once the Offering has been created, you can add it to either a new or existing Subgroup. In Subgroup, you will see an Offering field. The order of the offerings in this field outlines the order in which each offering can be upgraded from and to within the subgroup. Add the Offering to this field, and move it to the appropriate position."}),"\n",(0,r.jsx)(t.p,{children:'For example, in the "123Done Pro to Bundle" Subgroup below, the Subgroup shows that customers are able to upgrade from "123Done Pro" to "123Done Pro Plus" to "Bundle - 123 Foxkeh".'}),"\n",(0,r.jsx)("img",{src:n(55115).Z,alt:"Subgroup",width:"500"}),"\n",(0,r.jsx)(t.h3,{id:"-what-if-my-product-has-archived-plans",children:"... what if my product has archived plans?"}),"\n",(0,r.jsx)(t.p,{children:"In Offering, add the Stripe Plan ID(s) of the archived plan(s) in the Stripe Legacy Plans field."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},35327:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subplat-contentful-add-entry-048601b280bff4a7c92a6fc2703ae731.png"},88556:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subplat-contentful-bundle-bfc195cbe2269355b17958e57c58e2a0.png"},41417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subplat-contentful-locales-959323e5076e26dcba933a15c8dc9304.png"},96621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subplat-contentful-nav-c0f985bbce95c58d7668e522172e9b75.png"},38554:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subplat-contentful-single-locale-7dd561496613a8628c32d429158c844a.png"},55115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subplat-contentful-subgroup-5cabd5fc811e9f3becac69f40a7446d1.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);