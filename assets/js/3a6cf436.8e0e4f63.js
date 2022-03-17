(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8272],{96553:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(93456),l=["components"],s={title:"Subscription Platform"},p=void 0,c={unversionedId:"tutorials/subscription-platform",id:"tutorials/subscription-platform",title:"Subscription Platform",description:"Getting Started",source:"@site/docs/tutorials/subscription-platform.md",sourceDirName:"tutorials",slug:"/tutorials/subscription-platform",permalink:"/ecosystem-platform/tutorials/subscription-platform",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/tutorials/subscription-platform.md",tags:[],version:"current",frontMatter:{title:"Subscription Platform"},sidebar:"docs",previous:{title:"Development Setup",permalink:"/ecosystem-platform/tutorials/development-setup"},next:{title:"Creating an Account Locally",permalink:"/ecosystem-platform/how-tos/creating-an-account-locally"}},d=[{value:"Getting Started",id:"getting-started",children:[{value:"Pre-Development",id:"pre-development",children:[],level:3},{value:"Configuration",id:"configuration",children:[{value:"Stripe Product/Plans",id:"stripe-productplans",children:[{value:"Product Metadata",id:"product-metadata",children:[{value:"Product Metadata defaults",id:"product-metadata-defaults",children:[],level:6},{value:"Legal Document Download URL Metadata",id:"legal-document-download-url-metadata",children:[],level:6}],level:5},{value:"Subscription Metadata",id:"subscription-metadata",children:[],level:5}],level:4}],level:3}],level:2},{value:"Navigating the Payment Flow",id:"navigating-the-payment-flow",children:[],level:2},{value:"Understanding Subscription Status",id:"understanding-subscription-status",children:[{value:"Stripe Radar and Payment Blocking",id:"stripe-radar-and-payment-blocking",children:[],level:3}],level:2},{value:"Interactions with Stripe",id:"interactions-with-stripe",children:[{value:"Payments Server",id:"payments-server",children:[],level:3},{value:"Auth Server",id:"auth-server",children:[],level:3}],level:2},{value:"PayPal Integration",id:"paypal-integration",children:[{value:"PayPal Accounts",id:"paypal-accounts",children:[],level:3},{value:"Configuration",id:"configuration-1",children:[{value:"Auth Server",id:"auth-server-1",children:[],level:4},{value:"Payments Server",id:"payments-server-1",children:[],level:4}],level:3},{value:"The PayPal Button",id:"the-paypal-button",children:[],level:3},{value:"Instant Payment Notification (IPN)",id:"instant-payment-notification-ipn",children:[],level:3},{value:"PayPal Processor",id:"paypal-processor",children:[],level:3}],level:2},{value:"Ladder Diagrams of Payment Interactions",id:"ladder-diagrams-of-payment-interactions",children:[{value:"PayPal Checkout",id:"paypal-checkout",children:[],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Current as of ",(0,o.kt)("inlineCode",{parentName:"p"},"Jan 24, 2022"),"."),(0,o.kt)("h3",{id:"pre-development"},"Pre-Development"),(0,o.kt)("p",null,"To begin working on the subscription platform in the FxA codebase, you will need access to a Stripe account for private and public API developer keys."),(0,o.kt)("p",null,"If you're a Mozilla employee, you can request access to the Stripe dev (and/or stage) account, created for the FxA Subscription Platform team to easily connect with fake products and plans. Otherwise, you can create your own Stripe account to use for testing that is not linked to any bank account information with your own products and plans. These keys should be taken from Stripe's test environment which you can verify by checking that the key includes the word ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-payments-server")," needs the Stripe public key (",(0,o.kt)("inlineCode",{parentName:"p"},"pk"),") and communicates with the ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-auth-server")," that requires a Stripe private or secret key (",(0,o.kt)("inlineCode",{parentName:"p"},"sk"),").\xb9 These can be found in the Stripe Dashboard, and configuration details can be found below."),(0,o.kt)("p",null,"\xb9 We have, in the past, given out restricted keys for use (",(0,o.kt)("inlineCode",{parentName:"p"},"rk"),"). We may choose to do this again in the future or even use them in our dev environment."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You will need to create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa/packages/fxa-auth-server/config/secrets.json")," and specify ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions.stripeApiKey")," with the value of your private Stripe API key. Ensure the key begins with ",(0,o.kt)("inlineCode",{parentName:"p"},"sk_test")," to guarantee you are using the secret key and testing in the correct environment."),(0,o.kt)("p",null,"Ex:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subscriptions": {\n    "stripeApiKey": "sk_test_####"\n  }\n}\n')),(0,o.kt)("p",null,"Additionally create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa/packages/fxa-payments-server/server/config/secrets.json")," and specify ",(0,o.kt)("inlineCode",{parentName:"p"},"stripe.apiKey")," to override the default Mozilla Stripe public API key with your own public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stripe": {\n    "apiKey": "pk_test_####"\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that neither ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets.json")," files are tracked in Git, and they take precedence over each server's default configurations, should you need to make any additional local-only modifications."))),(0,o.kt)("h4",{id:"stripe-productplans"},"Stripe Product/Plans"),(0,o.kt)("p",null,"To see the available products or create a new one in the Stripe dashboard, navigate to Billing > Products and click into one of the products to see information including the product name, product ID, plan name, plan ID, metadata, logs, and events."),(0,o.kt)("p",null,"If you are using a new Stripe account, you will need to setup a product and its plan. The product should have additional metadata configured as needed."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Product Names are the canonical displayed name shown in Sub Plat UI. In some cases these may be paired with a plan's billing interval. Plan names are not displayed to users."))),(0,o.kt)("h5",{id:"product-metadata"},"Product Metadata"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"downloadURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Required. The download or subscription success action URL for the product.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:privacyNoticeURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Required. The URL for the webpage containing the Privacy Notice for the product offering.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:termsOfServiceURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Required. The URL for the webpage containing the Terms of Service for the product offering.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:termsOfServiceDownloadURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Required. The URL for a downloadable version of the Terms of Service for the product offering, used in emails. This must be a URL to the FxA CDN at ",(0,o.kt)("a",{parentName:"td",href:"https://accounts-static.cdn.mozilla.net"},"https://accounts-static.cdn.mozilla.net"),". It can be either a) full, direct URL to a PDF (e.g. ",(0,o.kt)("a",{parentName:"td",href:"https://accounts-static.cdn.mozilla.net/legal/Mozilla_VPN_ToS/en-US.pdf"},"https://accounts-static.cdn.mozilla.net/legal/Mozilla_VPN_ToS/en-US.pdf"),"), or, b) a URL without the language and file extension (e.g. ",(0,o.kt)("a",{parentName:"td",href:"https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_tos"},"https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_tos"),'). See the "Legal Document Download URL Metadata" section below for more information.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"webIconURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Required. Image URL for product icon in web content. This must be a URL to the FxA CDN at ",(0,o.kt)("a",{parentName:"td",href:"https://accounts-static.cdn.mozilla.net"},"https://accounts-static.cdn.mozilla.net"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"webIconBackground"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A valid css color, color name or gradient for display behind your product icon on the web. Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"#20123a"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"capabilities"),(0,o.kt)("td",{parentName:"tr",align:null},"Required if ",(0,o.kt)("inlineCode",{parentName:"td"},"capabilities:{clientID}")," is not provided. Comma-separated list of capabilities enabled by this product for all Relying Parties.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"capabilities:{clientID}"),(0,o.kt)("td",{parentName:"tr",align:null},"Required if ",(0,o.kt)("inlineCode",{parentName:"td"},"capabilities")," is not provided. Comma-separated list of capabilities enabled by this product for the Relying Party identified by {clientID}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"emailIconURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Image URL for product icon in email content. This must be a URL to the FxA CDN at ",(0,o.kt)("a",{parentName:"td",href:"https://accounts-static.cdn.mozilla.net"},"https://accounts-static.cdn.mozilla.net"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"appStoreLink"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. The App store download URL for the product.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"playStoreLink"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. The google play store download URL for the product.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"productSet"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. An arbitrary string used to group products in a set of upgrades & downgrades.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"productOrder"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A number used for sorting products in a set.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:cancellationSurveyURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Override URL for the Cancellation Survey for the product offering. This parameter is used as a hyperlink in emails sent to the customer when their subscription is cancelled due, manual cancellation, FxA Account deletion, or failed payment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:details:{n}"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Bullet-point feature details for the product, where {n} is a number or ordering the points.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:details:{n}:{locale}"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Localized string override for product:details:{n}, where {locale} is the locale (e.g. fr-FR, zh-CN, de, etc).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:privacyNoticeURL:{locale}"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Localized override URL for the webpage containing the Privacy Notice for the product offering.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:privacyNoticeDownloadURL"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. The URL for a downloadable version of the Privacy Notice for the product offering. This has the same requirements as product:termsOfServiceDownloadURL.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:termsOfServiceURL:{locale}"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Localized override URL for the webpage containing the Terms of Service for the product offering.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:subtitle"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A subtitle for the product, usually displayed beneath the name in UI.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:subtitle:{locale}"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Localized string override for product:subtitle, where {locale} is the locale (e.g. fr-FR, zh-CN, de, etc).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:successActionButtonLabel"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. An alternative label for the subscription success action button. The action is specified by ",(0,o.kt)("inlineCode",{parentName:"td"},"downloadURL"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"product:successActionButtonLabel:{locale}"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Localized override for the alternative label for the subscription success action button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"promotionCodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A comma separated list of promotion codes that are valid for the product.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"support:app:{x}"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. An app or service for the support form. The form options will be in the same order as the metadata. These values shouldn't be too long as they are displayed in dropdown options of limited width. The ",(0,o.kt)("inlineCode",{parentName:"td"},"{x}")," part of the key can be any string and will not be used anywhere; the value of the metadata is submitted to Zendesk.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"upgradeCTA"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. HTML content string describing available upgrades from this plan. By convention, should include a link back to a product lead page. That lead page links back to FxA's plan subscription pages.")))),(0,o.kt)("h6",{id:"product-metadata-defaults"},"Product Metadata defaults"),(0,o.kt)("p",null,"Some of the metadata properties listed above ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-shared/subscriptions/metadata.ts#L14"},"have defaults")," that are used when they're not defined in Stripe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"  subtitle: 'Full-device VPN',\n  details: [\n    'Device-level encryption',\n    'Servers in 30+ countries',\n    'Connect 5 devices with one subscription',\n    'Available for Windows, iOS and Android',\n  ],\n  termsOfServiceURL:\n    'https://www.mozilla.org/about/legal/terms/firefox-private-network',\n  termsOfServiceDownloadURL:\n    'https://accounts-static.cdn.mozilla.net/legal/Mozilla_VPN_ToS/en-US.pdf',\n  privacyNoticeURL: 'https://www.mozilla.org/privacy/firefox-private-network',\n  privacyNoticeDownloadURL:\n    'https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_privacy_notice/en-US.pdf',\n")),(0,o.kt)("h6",{id:"legal-document-download-url-metadata"},"Legal Document Download URL Metadata"),(0,o.kt)("p",null,"For the legal document download URL metadata,\n",(0,o.kt)("inlineCode",{parentName:"p"},"product:termsOfServiceDownloadURL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"product:privacyNoticeDownloadURL"),",\nthey can be in the form of an incomplete URL, as they will be handled by a\nredirect endpoint that tries to best match the user's locale to a localized\nversion of the document.  For example, if the value of\n",(0,o.kt)("inlineCode",{parentName:"p"},"product:termsOfServiceDownloadURL")," is\n'",(0,o.kt)("a",{parentName:"p",href:"https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_tos'"},"https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_tos'")," and the user's\nlocale is ",(0,o.kt)("inlineCode",{parentName:"p"},"de"),", then the endpoint will redirect the user to\n",(0,o.kt)("a",{parentName:"p",href:"https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_tos.de.pdf"},"https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_tos.de.pdf"),"."),(0,o.kt)("h5",{id:"subscription-metadata"},"Subscription Metadata"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"previous_plan_id"),(0,o.kt)("td",{parentName:"tr",align:null},"The value of the previous plan that the user had been subscribed to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"plan_change_date"),(0,o.kt)("td",{parentName:"tr",align:null},"Unix timestamp of the date the plan was changed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cancelled_for_customer_at"),(0,o.kt)("td",{parentName:"tr",align:null},"Unix timestamp of the date when the subscription was cancelled for the customer through FxA UI")))),(0,o.kt)("h2",{id:"navigating-the-payment-flow"},"Navigating the Payment Flow"),(0,o.kt)("p",null,"Once your API keys are set, restart the affected servers (",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"payments"),") if needed."),(0,o.kt)("p",null,"Reference the ",(0,o.kt)("a",{parentName:"p",href:"../how-tos/creating-an-account-locally"},"workflow")," section of the FxA docs to sign up for and verify an account. You should now be able to access the payment flow at:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:3030/subscriptions/products/{productId}?plan={planId}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"productId")," should match the ID from a product taken from the Stripe dashboard. The ",(0,o.kt)("inlineCode",{parentName:"p"},"plan")," parameter is optional, unless you want to specify a plan.  Otherwise, if the product has multiple plans, the first one in the list as returned by Stripe is used.  If you are running the entire FxA stack and are using the keys from the Stripe FxA dev account, you can navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"123done")," on port ",(0,o.kt)("inlineCode",{parentName:"p"},":8080"),' to click on the link beginning with "Subscribe" to reach the form with a prepopulated product.'),(0,o.kt)("p",null,"Enter any name, valid expiration date, CVC number, and any card number from the ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/testing#cards"},"Stripe test cards docs")," to successfully create a test subscription."),(0,o.kt)("p",null,"Navigate back to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3030/subscriptions")," to manage your subscriptions."),(0,o.kt)("h2",{id:"understanding-subscription-status"},"Understanding Subscription Status"),(0,o.kt)("p",null,"Stripe defines the ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/api/subscriptions/object#subscription_object-status"},"valid states a subscription status can be in their API docs"),".\nSince ",(0,o.kt)("inlineCode",{parentName:"p"},"incomplete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"incomplete_expired")," are subscriptions that have never been paid, FxA ignores them except for the following condition: if a user with a subscription in an ",(0,o.kt)("inlineCode",{parentName:"p"},"incomplete")," state successfully enters valid payment information, the ",(0,o.kt)("inlineCode",{parentName:"p"},"incomplete")," subscription will be paid and activated."),(0,o.kt)("p",null,"FxA's Stripe account is configured to not allow subscriptions to become ",(0,o.kt)("inlineCode",{parentName:"p"},"unpaid")," and will cancel the subscription instead."),(0,o.kt)("p",null,"The last 4 states are ",(0,o.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"trialing"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"past_due"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelled"),". The first three of these are considered active for the purposes of allowing the user access to the capabilities provided by the subscription, while ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelled")," subscriptions grant none."),(0,o.kt)("h3",{id:"stripe-radar-and-payment-blocking"},"Stripe Radar and Payment Blocking"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/radar/rules"},"Stripe Radar")," to block payments from both potentially abusive sources as well as from potential subscribers in currently unsupported regions. Our production radar rules are ",(0,o.kt)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/display/FJT/Stripe+Radar+Rules"},"documented in Mana"),"."),(0,o.kt)("h2",{id:"interactions-with-stripe"},"Interactions with Stripe"),(0,o.kt)("h3",{id:"payments-server"},"Payments Server"),(0,o.kt)("p",null,"The payments server is an isolated service that serves all subscription related\npages that utilize the Stripe Javascript SDK. It's isolated from the primary FxA\ndomain to comply with constraints on 3rd party Javascript on pages handling FxA\nauthentication."),(0,o.kt)("p",null,"When a subscription page is loaded, the React application served by the payment\nserver:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Loads the Stripe Javascript SDK (for tokenizing credit cards)"),(0,o.kt)("li",{parentName:"ol"},"Makes direct OAuth authenticated API calls to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/api.md#account"},"account"),"/",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/api.md#subscriptions"},"subscription endpoints"),"\non the Auth Server as needed")),(0,o.kt)("p",null,"The payments server handles the payment flow as well as serving pages for managing\na user's subscription that are linked from the Settings page."),(0,o.kt)("h3",{id:"auth-server"},"Auth Server"),(0,o.kt)("p",null,"FxA's Auth Server makes Stripe API calls for authenticated FxA users via its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/api.md#subscriptions"},"subscription\nendpoints"),". Stripe updates are sent back to the Auth Server via Stripe webhooks when a\nusers subscription has been created/updated/deleted."),(0,o.kt)("p",null,"Some Stripe webhooks will trigger emails.  These emails are behind a feature flag.  If you wish to send emails in your environment, set the auth server configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subscriptions": {\n    "transactionalEmails": {\n      "enabled": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"or the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SUBSCRIPTIONS_TRANSACTIONAL_EMAILS_ENABLED"),' to "true".  In order to receive Stripe webhook events in your local development, you need to use the ',(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/stripe-cli/webhooks"},"Stripe CLI"),"'s event forwarding feature.  (For how to view these and other FxA emails, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/#running-with-maildev"},"the FxA README section on MailDev"),".)"),(0,o.kt)("h2",{id:"paypal-integration"},"PayPal Integration"),(0,o.kt)("p",null,"PayPal can be configured as an additional payment provider in the Subscription Platform.  PayPal's ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/archive/express-checkout/integration-guide/ECReferenceTxns/"},"Express Checkout Reference Transactions")," is the feature that enables the Subscription Platform to use PayPal as a payment provider for recurring subscriptions.  The customer's PayPal Billing Agreement ID is saved for future subscription invoices.  See ",(0,o.kt)("a",{parentName:"p",href:"#paypal-checkout"},"the diagram below")," for details on this process."),(0,o.kt)("p",null,"The PayPal paid subscriptions are still driven by Stripe's subscription and invoicing model.  The key difference is that PayPal paid subscriptions have a ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/api/subscriptions/object#subscription_object-collection_method"},"collection method")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"send_invoice"),".  The ",(0,o.kt)("a",{parentName:"p",href:"#paypal-processor"},"PayPal processor")," is used to pay the invoices with the customer's billing agreement ID."),(0,o.kt)("h3",{id:"paypal-accounts"},"PayPal Accounts"),(0,o.kt)("p",null,"You need three types of PayPal accounts for development."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PayPal Developer Account: allows you to access the PayPal Developer Dashboard"),(0,o.kt)("li",{parentName:"ul"},"Sandbox PayPal Personal Account: used for testing as the customer"),(0,o.kt)("li",{parentName:"ul"},"Sandbox PayPal Business Account: used for testing")),(0,o.kt)("p",null,"To create a PayPal developer account, sign up at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/"},"https://developer.paypal.com/"),".  Note that if you are a Mozilla employee, you should contact the Mozilla PayPal admin in Finance to set up a developer account.  Additionally, you should ",(0,o.kt)("a",{parentName:"p",href:"https://www.paypal.com/businessmanage/profile/loginSecurity"},"enable 2FA for the developer account"),"."),(0,o.kt)("p",null,'Once you are in the PayPal developer dashboard, navigate to "Accounts" under the Sandbox section of the menu.  Here you can create ',(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/api-basics/sandbox/accounts/"},"a pair of personal and business sandbox accounts"),".  (To easily create multiple accounts for testing, there's a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/api-basics/sandbox/bulk-accounts/"},"bulk account creation feature"),".)"),(0,o.kt)("p",null,'Once you\'ve added your account pair, navigate to the bussines account by selecting "View/edit account".  Now click on the "API Credentials" tab.  You\'ll need the "NVP/SOAP Sandbox API Credentials" for the next section.'),(0,o.kt)("h3",{id:"configuration-1"},"Configuration"),(0,o.kt)("h4",{id:"auth-server-1"},"Auth Server"),(0,o.kt)("p",null,"In order to enable and use PayPal in the auth server, set the following configuration options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subscriptions": {\n    "paypalNvpSigCredentials": {\n      "enabled": true,\n      "sandbox": true,\n      "user": "your PayPal NVP API User name",\n      "pwd": "your PayPal NVP API password",\n      "signature": "your PayPal NVP API signature"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The environment variables equivalent would be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"SUBSCRIPTIONS_PAYPAL_ENABLED=true \\\nPAYPAL_SANDBOX=true \\\nPAYPAL_NVP_USER='your PayPal NVP API User name' \\\nPAYPAL_NVP_PWD='your PayPal NVP API password' \\\nPAYPAL_NVP_SIGNATURE='your PayPal NVP API signature'\n")),(0,o.kt)("h4",{id:"payments-server-1"},"Payments Server"),(0,o.kt)("p",null,"The Payments frontend also does not offer PayPal as payment provider by default.  To enable the feature, set the following configuration options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paypal": {\n    "clientId": "sb",\n    "apiUrl": "https://www.sandbox.paypal.com",\n    "scriptUrl": "https://www.paypal.com"\n  }\n}\n')),(0,o.kt)("p",null,"Or use the environment variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"PAYPAL_CLIENT_ID='sb' \\\nPAYPAL_API_URL='https://www.sandbox.paypal.com' \\\nPAYPAL_SCRIPT_URL='https://www.paypal.com'\n")),(0,o.kt)("p",null,"The paypal",(0,o.kt)("em",{parentName:"p"},"/PAYPAL_")," values are the defaults in the repo.  For local development, you do not need to change them."),(0,o.kt)("h3",{id:"the-paypal-button"},"The PayPal Button"),(0,o.kt)("p",null,"The Payments frontend uses the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/business/javascript-sdk/"},"PayPal JavaScript SDK")," to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/business/checkout/configure-payments/single-page-app/"},"add a button")," to the checkout process to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-configuration/#intent-options-when-integrating-with-older-apis"},"integrate with PayPal's NVP/SOAP API"),".  This button is loaded and displayed in an iFrame by PayPal."),(0,o.kt)("h3",{id:"instant-payment-notification-ipn"},"Instant Payment Notification (IPN)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/api-basics/notifications/ipn/"},"PayPal IPN")," is PayPal's equivalent of Stripe's webhook feature.  We do rely on IPNs in the Subscription Platform.  Unlike Stripe, however, PayPal does not offer any tool that would forward the events to your local environment.  Our team use ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok")," for that purpose."),(0,o.kt)("p",null,"Once you have the services running locally, start ngrok with ",(0,o.kt)("inlineCode",{parentName:"p"},"ngrok 9000")," and note the public URL.  Using your sandbox business account and the public URL fron ngrok, complete ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/api-basics/notifications/ipn/IPNSetup/"},"these steps to set up IPNs"),"."),(0,o.kt)("h3",{id:"paypal-processor"},"PayPal Processor"),(0,o.kt)("p",null,"After the initial payment during subscription creation, the recurring payments for future invoices are handled by the PayPal processor script.  To simulate or debug charging additional invoices paid by PayPal, you need to run this script.  It is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/fxa-auth-server/scripts/paypal-process.ts"),"."),(0,o.kt)("p",null,"The script will make up to a configurable number of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/archive/express-checkout/ec-set-up-reference-transactions/#capture-future-payments"},"attempts to pay")," an invoice before cancelling the subscription.  This attempts count is saved to the invoice itself as metadata.  The invoice's metadata is also used to prevent sending multiple failed payment emails per invoice from the PayPal payment attempts."),(0,o.kt)("h2",{id:"ladder-diagrams-of-payment-interactions"},"Ladder Diagrams of Payment Interactions"),(0,o.kt)("h3",{id:"paypal-checkout"},"PayPal Checkout"),(0,o.kt)("p",null,"Conditions for this flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User has no payment source on file, or is a new customer."),(0,o.kt)("li",{parentName:"ul"},"User clicks the displayed ",(0,o.kt)("a",{parentName:"li",href:"https://developer.paypal.com/docs/checkout/integrate/#3-render-the-smart-payment-buttons"},"PayPal Smart Button")," to pay with PayPal.")),(0,o.kt)("p",null,"This diagram represents the activity after the PayPal button is clicked."),(0,o.kt)(i.Mermaid,{chart:"sequenceDiagram\n  autonumber\n  participant B as Browser\n  participant A as FxA Auth Server\n  participant P as PayPal\n  participant S as Stripe\n\n  Note over B: Code run by createOrder callback to provide Checkout Token.\n  opt Customer hasn't been created\n  B->>A: POST /oauth/subscriptions/customer\n  A->>S: Create Customer\n  S->>A: Customer Response\n  Note over A: Stripe customer id linked to user.\n  A->>B: Customer Record\n  end\n  B->>A: POST /oauth/subscription/paypal-checkout\n  A->>P: SetExpressCheckout\n  P->>A: Checkout Token\n  A->>B: Checkout Token\n\n  Note over B: PayPal Popup for User to confirm\n  Note over B: User confirms, code run by onApprove\n  Note over B: Display 'Processing' Message\n  B->>A: POST /oauth/subscription/active/new\n  A->>P: CreateBillingAgreement\n  P->>A: Billing Agreement Response\n  Note over A: Store Billing Agreement ID in Db.\n  A->>S: Update customer metadata w/PayPal Billing Agreement ID\n  A->>S: Create subscription\n  Note over S: Invoice created\n  S->>A: Customer update response\n  S->>A: Subscription create response\n  A->>S: Finalize invoice w/auto_advance false\n  A->>P: DoReferenceTransaction\n  S->>A: Invoice finalize response\n  P->>A: Transaction response\n  A->>S: Update invoice w/PayPal Transaction ID\n  A->>S: Pay invoice out-of-band\n  S->>A: Update response\n  S->>A: Invoice pay response\n  A->>B: Subscription created response\n\n  B->>B: Redirect to Success page\n",mdxType:"Mermaid"}))}m.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=11748}}]);