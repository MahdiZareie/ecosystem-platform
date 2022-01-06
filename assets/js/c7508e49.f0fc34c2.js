"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4743],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90705:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"release-process",title:"Release Process",sidebar_label:"Release Process"},s=void 0,p={unversionedId:"fxa-engineering/release-process",id:"fxa-engineering/release-process",isDocsHomePage:!1,title:"Release Process",description:"Release Owner",source:"@site/docs/fxa-engineering/release-process.md",sourceDirName:"fxa-engineering",slug:"/fxa-engineering/release-process",permalink:"/ecosystem-platform/fxa-engineering/release-process",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/fxa-engineering/release-process.md",tags:[],version:"current",frontMatter:{id:"release-process",title:"Release Process",sidebar_label:"Release Process"},sidebar:"docs",previous:{title:"Work Breakdown Process",permalink:"/ecosystem-platform/fxa-engineering/fxa-work-breakdown-process"},next:{title:"Incident Response",permalink:"/ecosystem-platform/fxa-engineering/fxa-incident-response"}},c=[{value:"Release Owner",id:"release-owner",children:[{value:"What is a Release Owner?",id:"what-is-a-release-owner",children:[]},{value:"How is a Release Owner selected?",id:"how-is-a-release-owner-selected",children:[]},{value:"I am the Release Owner: How should I plan my Sprint?",id:"i-am-the-release-owner-how-should-i-plan-my-sprint",children:[]}]},{value:"Releasing Code",id:"releasing-code",children:[{value:"Special Cases",id:"special-cases",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"What if the merge messes up the changelog?",id:"what-if-the-merge-messes-up-the-changelog",children:[]},{value:"What happens if there are merge conflicts (train-xxx =&gt; main)?",id:"what-happens-if-there-are-merge-conflicts-train-xxx--main",children:[]}]},{value:"Merging and Branching Strategies",id:"merging-and-branching-strategies",children:[{value:"The Happy Path: A regular release",id:"the-happy-path-a-regular-release",children:[]},{value:"A Patch Release",id:"a-patch-release",children:[]},{value:"Another Option for a Patch Release",id:"another-option-for-a-patch-release",children:[]},{value:"A Security Release",id:"a-security-release",children:[]}]},{value:"Temporary stage deploys",id:"temporary-stage-deploys",children:[]}],h={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"release-owner"},"Release Owner"),(0,i.kt)("h3",{id:"what-is-a-release-owner"},"What is a Release Owner?"),(0,i.kt)("p",null,'The main purpose of the release owner is to follow the "Releasing Code" process below.  The release owner should work with the rest of the team to ensure a smooth close-out of the current sprint.'),(0,i.kt)("h3",{id:"how-is-a-release-owner-selected"},"How is a Release Owner selected?"),(0,i.kt)("p",null," At the time of writing, the release responsibility is rotated every train to the next team member on the list at the top of our ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"deployment doc"),"."),(0,i.kt)("h3",{id:"i-am-the-release-owner-how-should-i-plan-my-sprint"},"I am the Release Owner: How should I plan my Sprint?"),(0,i.kt)("p",null,"If you are the designated Release owner, consider the following suggestions to managing your work and the release:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When taking on work for the sprint, allocate a portion of each day to release management duties - particular as the end of the sprint nears."),(0,i.kt)("li",{parentName:"ul"},"Take some time a day or two before tagging is scheduled to reach out to individual team members to check-in on in-progress or to-do work items. This might result in you taking on additional work performing reviews or reaching out to the appropriate people.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Things to consider asking:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Are there any tasks that need to be in the train? Are any of them in jeopardy?"),(0,i.kt)("li",{parentName:"ul"},"Is there anything I can do to help keep things moving?")))))),(0,i.kt)("h2",{id:"releasing-code"},"Releasing Code"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Release ownership is confirmed during the sprint kick-off team meeting.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The pre-flight checklist:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Ensure there are no critical patches for this tag that haven't landed yet"),(0,i.kt)("li",{parentName:"ol"},"Ensure any previous point releases have been merged back into ",(0,i.kt)("inlineCode",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ol"},"Update the section in the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"deployment doc")," for the Train you are tagging"),(0,i.kt)("li",{parentName:"ol"},"Ensure you have appropriate QA signoffs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Not applicable for ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"stage")))),(0,i.kt)("li",{parentName:"ol"},"Ensure you don't have any modified files or code laying around before you start the tag"),(0,i.kt)("li",{parentName:"ol"},"Ensure you have the latest from ",(0,i.kt)("inlineCode",{parentName:"li"},"main"),", including tags. If ",(0,i.kt)("inlineCode",{parentName:"li"},"git fetch [remote]")," doesn't reflect the latest tag, run ",(0,i.kt)("inlineCode",{parentName:"li"},"git fetch [remote] --tags"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The release script expects the git origin to be unchanged from the default."),"  If you've modified your git remotes you will get confusing output here and might mess things up.  If in doubt, check out a new copy of FxA (eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone git@github.com:mozilla/fxa.git fxa.tagging")," and do all your tagging there."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you're tagging in a newly cloned repo, ensure your commits will be GPG signed.")," Run ",(0,i.kt)("inlineCode",{parentName:"p"},"git config --list")," and verify you see ",(0,i.kt)("inlineCode",{parentName:"p"},"commit.gpgsign=true"),". If this is not already set globally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"git config --global commit.gpgsign true"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/release.sh"},"release.sh")," from the root of the repository.  Make sure there are no errors in the output.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Do some manual checks in the new train branch to make sure the generated tags are sane:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Do the changelogs match expectations from ",(0,i.kt)("inlineCode",{parentName:"li"},"git log"),"?"),(0,i.kt)("li",{parentName:"ol"},"Have all the version strings been updated?"),(0,i.kt)("li",{parentName:"ol"},"Does the diff from ",(0,i.kt)("inlineCode",{parentName:"li"},"origin/main")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"origin/train-xxx")," if it\u2019s a point release) look correct?"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The release script will print some commands to run to push the train branch to the server.  ",(0,i.kt)("strong",{parentName:"p"},"It's best to copy and paste these so you don't mix them up."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The release script will also print a URL which you can use to open a PR to merge the train branch back into the main branch")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, the release script will print out a bug template.  Copy that template and open a deployment bug in bugzilla under ",(0,i.kt)("inlineCode",{parentName:"p"},"Cloud Services :: Operations: Deployment Requests")," (",(0,i.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1575233"},"example"),"). Remember to include:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Notes from the deploy doc, particularly any server side changes that need to happen as part of this deployment."),(0,i.kt)("li",{parentName:"ol"},"Links to the needs:qa label on GitHub."),(0,i.kt)("li",{parentName:"ol"},"Links to the release tag on GitHub."),(0,i.kt)("li",{parentName:"ol"},"Links to pertinent changelogs.")))),(0,i.kt)("h4",{id:"operations-staff-will-take-it-from-there"},"Operations staff will take it from there\u2026"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that any configuration changes noted in the deployment bug land in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/cloudops-deployment/tree/master/projects/fxa"},"cloudops-deployment"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run any outstanding database migrations.  These are applied automatically for ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," but are reviewed manually for production since we may need to take care with the changes to avoid slow queries.  The migrations should be included in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"deployment doc"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build fxa-auth, fxa-content, fxa-oauth, fxa-profile, fxa-verifier in stage on Jenkins using git commit from cloudops-deployment PR and docker images referenced in deploy bug")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Request QA on stage (by posting in the bug)"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If major issues are found, a new patch is made and we\u2019re back to step 3, running ",(0,i.kt)("inlineCode",{parentName:"p"},"release.sh patch")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"This command assumes that the relevant commit has been merged into the appropriate train branch. It bumps the minor rev on the last tag it finds in the tree from HEAD, so also requires that you checkout the appropriate train branch locally."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy fxa-* to production")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Initial deployment bug is closed"))),(0,i.kt)("h3",{id:"special-cases"},"Special Cases"),(0,i.kt)("h4",{id:"releasing-icons"},"Releasing Icons"),(0,i.kt)("p",null,"All product icons live in a dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"assets")," directory in the fxa repo. This directory is independent of individual packages in the monorepo because it doesn't need to be wrapped up in any particular container, and these icons may be used across different servers."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"assets")," directory is uploaded manually to the FxA CDN at ",(0,i.kt)("a",{parentName:"p",href:"https://accounts-static.cdn.mozilla.net"},"https://accounts-static.cdn.mozilla.net")," as part of the release process. Subdirectories map directly to paths under the CDN domain: content in ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/foo")," maps to ",(0,i.kt)("a",{parentName:"p",href:"https://accounts-static.cdn.mozilla.net/foo"},"https://accounts-static.cdn.mozilla.net/foo"),"."),(0,i.kt)("p",null,"The Stripe product icons live in ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/product-icons"),"."),(0,i.kt)("p",null,"It's fine to create other subdirectories for new collections of assets as needed."),(0,i.kt)("p",null,"The release script for static assets is ",(0,i.kt)("inlineCode",{parentName:"p"},"_scripts/upload_assets_to_cdn.sh"),". It semi-automates pushing the icons to the CDN, assuming the user has the correct credentials / env vars set in their terminal session."),(0,i.kt)("p",null,"Icons and other assets are normally deployed with every release. If icons need to be deployed outside the regular release process, just ask ops to run the upload script."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"what-if-the-merge-messes-up-the-changelog"},"What if the merge messes up the changelog?"),(0,i.kt)("p",null,"After merging but before pushing, you should check the changelog to make sure that the expected versions are listed and they're in the right order. If any are missing or the order is wrong, manually edit the changelog so that it makes sense, using the commit summaries from ",(0,i.kt)("inlineCode",{parentName:"p"},"git log --graph --oneline")," to fill in any blanks as necessary."),(0,i.kt)("p",null,"Then ",(0,i.kt)("inlineCode",{parentName:"p"},"git add")," those changes and squash them into the preceding merge commit using ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit --amend"),". Now you can push and the merged changelog will make sense."),(0,i.kt)("h3",{id:"what-happens-if-there-are-merge-conflicts-train-xxx--main"},"What happens if there are merge conflicts (train-xxx => main)?"),(0,i.kt)("p",null,"Conflicts are most likely from a recently landed issue in ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". Typically we create a new branch, resolve conflicts there, and then merge that branch into ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,i.kt)("p",null,"Merge conflicts in a ",(0,i.kt)("inlineCode",{parentName:"p"},"train-xxx -> main")," pull request are most likely the result of a recent patch into ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch. The easiest way to resolve this is to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new merge branch branch from ",(0,i.kt)("inlineCode",{parentName:"li"},"train-xxx"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"train-xxx-merge-main")),(0,i.kt)("li",{parentName:"ol"},"Merge the current ",(0,i.kt)("inlineCode",{parentName:"li"},"origin/main")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"train-xxx-merge-main")),(0,i.kt)("li",{parentName:"ol"},"Resolve the conflicts that occur in the merge"),(0,i.kt)("li",{parentName:"ol"},"Commit changes and push to origin"),(0,i.kt)("li",{parentName:"ol"},"Create a new PR, ",(0,i.kt)("inlineCode",{parentName:"li"},"train-xxx-merge-main -> main")),(0,i.kt)("li",{parentName:"ol"},"Wait for Circle tests to pass and then merge when ready")),(0,i.kt)("p",null,"You can then close the ",(0,i.kt)("inlineCode",{parentName:"p"},"train-xxx -> main")," PR."),(0,i.kt)("h2",{id:"merging-and-branching-strategies"},"Merging and Branching Strategies"),(0,i.kt)("h3",{id:"the-happy-path-a-regular-release"},"The Happy Path: A regular release"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A simplified merging diagram",src:a(33954).Z})),(0,i.kt)("p",null,"During a regular release, running ",(0,i.kt)("inlineCode",{parentName:"p"},"release.sh")," will create an appropriately named branch, update a few files like the Changelogs, and create a tag.  The Release Owner will push the branch to github and open a pull request back to ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,i.kt)("p",null,"An example of commands to run for a release are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit pull\n./release.sh\n# Follow the instructions printed\n")),(0,i.kt)("h3",{id:"a-patch-release"},"A Patch Release"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A patch release diagram",src:a(27283).Z})),(0,i.kt)("p",null,"A patch release is used between official releases.  For example, a regression discovered midway through a sprint that can't wait for a normal release cycle would be pushed to production earlier through this process."),(0,i.kt)("p",null,"In the scenario above, a regular release happened and ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.100.0")," was tagged and pushed to production.  Later, to fix a regression, a patch was landed ",(0,i.kt)("em",{parentName:"p"},"directly on the branch")," rather than on ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),".  ",(0,i.kt)("inlineCode",{parentName:"p"},"release.sh patch")," was run and ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.100.1")," was tagged.  Four more commits landed on the branch and ",(0,i.kt)("inlineCode",{parentName:"p"},"release.sh patch")," tagged a ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.100.2"),".  In this scenario there were two patch releases in addition to the regular release at the end of the sprint."),(0,i.kt)("p",null,"An example of commands to run for a patch release are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit pull\ngit checkout train-100\n# Ensure the pull requests on GitHub have landed before you continue\ngit pull\ngit log  # Verify it looks like you expect\n./release.sh patch\n# Follow the instructions printed\n")),(0,i.kt)("h3",{id:"another-option-for-a-patch-release"},"Another Option for a Patch Release"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A alternative patch release diagram",src:a(35337).Z})),(0,i.kt)("p",null,"An alternative to the Patch Release described above would be to use an additional branch.  This would allow you to test complex changes without affecting the current release branch."),(0,i.kt)("p",null,"In the scenario above, a regular release occurs.  Then it's determined that two patches which landed on main earlier in the cycle are critical to be live now.  They are cherry-picked to an uplift branch, tested, and then merged back to the regular release branch.  At that point ",(0,i.kt)("inlineCode",{parentName:"p"},"release.sh patch")," will do the regular updates."),(0,i.kt)("p",null,"An example of commands to run for this option are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit pull\ngit checkout train-100\ngit pull\ngit branch train-100-uplift\ngit checkout train-100-uplift\ngit cherry-pick <commit1>\ngit cherry-pick <commit2>\n(repeat as needed)\ngit log  # Verify you picked what you wanted to\ngit push origin train-100-uplift\n# On GitHub:\n# 1) make a Pull Request for train-100-uplift to merge into train-100\n# 2) Ask for review\n# 3) Wait for CI to pass \u2705\n# 4) Merge the Pull Request\ngit checkout train-100\ngit pull\n./release.sh patch\n# Follow the instructions printed\n")),(0,i.kt)("p",null,"Git is a flexible tool and there are other options if other scenarios arise.  Don't hesitate to get in touch with your team to talk through the best courses of action."),(0,i.kt)("h3",{id:"a-security-release"},"A Security Release"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Diagram showing a security release",src:a(83234).Z})),(0,i.kt)("p",null,"A security release will make use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-private")," repository.  This diagram illustates an important security patch being pushed live midway through sprint 100.  Firstly, we need to bring ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-private")," up to speed since it probably hasn't been used in a while."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:mozilla/fxa-private.git\ncd fxa-private\ngit remote add fxa https://github.com/mozilla/fxa.git\ngit fetch fxa --tags\ngit merge v0.100.0   # Replace this with whatever tag is currently live\n")),(0,i.kt)("p",null,"Next, make a patch for whatever needs fixing and pull request against ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-private"),".  The patch is reviewed as normal and lands on ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-private"),"."),(0,i.kt)("p",null,"Operations is involved at this point to deploy to production directly from ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-private")," so the patch is never seen before it's live."),(0,i.kt)("p",null,"Once the fix is verified in production, the patch is cherry-picked or merged back to ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa"),"."),(0,i.kt)("h2",{id:"temporary-stage-deploys"},"Temporary stage deploys"),(0,i.kt)("p",null,"If you are working on something that you wish to test out in a release environment before it is officially merged into ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," you might consider a temporary deploy to stage."),(0,i.kt)("p",null,"To do so, start by branching off the most recent train branch. Don't branch off ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," so you're not introducing changes merged after the official train was deployed."),(0,i.kt)("p",null,"Commit your changes, tag them, and push. Because you're pushing a tag it will trigger a build workflow in CircleCI. Keep an eye on the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy-packages")," job."),(0,i.kt)("p",null,"Once the images have been built you can ping someone from Ops in Slack to selectively deploy servers your changes occurred in (e.g. if you only change code in ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-auth-server"),", only the auth server needs to be deployed)."),(0,i.kt)("p",null,"Some things to keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is a temporary deploy. Your changes will be reverted when the next official stage train tag occurs, or if someone else needs to perform this process."),(0,i.kt)("li",{parentName:"ul"},"We have relying parties that depend on stage for their own testing, so try not to break things with your temporary code. If you think this is a possibility please consider pinging QA in Slack so they can perform tests as needed.")))}m.isMDXComponent=!0},33954:function(e,t,a){t.Z=a.p+"assets/images/fxa-release1-ccca6cee170e393a55428a6ed229e60f.png"},83234:function(e,t,a){t.Z=a.p+"assets/images/fxa-release3-ca2a4f7e30fc26e811457d5e9e3acad4.png"},27283:function(e,t,a){t.Z=a.p+"assets/images/fxa-release4-e1bfc4b0697908160e76be27aa1fdc31.png"},35337:function(e,t,a){t.Z=a.p+"assets/images/fxa-release5-66268472de4c57e89a3171c4daa222d9.png"}}]);