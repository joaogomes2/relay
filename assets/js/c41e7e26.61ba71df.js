"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[18668],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){return function(t){var n=u(t.components);return i.createElement(e,r({},t,{components:n}))}},u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(o,".").concat(p)]||d[p]||m[p]||r;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(39960),a=n(44256),r=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],n=e[1],i=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(i.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return r.createElement(s,null,r.createElement(c,null),r.createElement(l,null),r.createElement(d,null))},p=function(){return r.createElement(s,null,r.createElement(l,null),r.createElement(d,null))};const m=function(){return(0,a.fbContent)({internal:r.createElement(u,null),external:r.createElement(p,null)})}},91860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=n(68629),s=n(44256),l=["components"],c={id:"graphql-subscriptions",title:"GraphQL subscriptions",slug:"/guided-tour/updating-data/graphql-subscriptions/",description:"Relay guide to GraphQL subscriptions",keywords:["subscription"]},d=void 0,u={unversionedId:"guided-tour/updating-data/graphql-subscriptions",id:"guided-tour/updating-data/graphql-subscriptions",title:"GraphQL subscriptions",description:"Relay guide to GraphQL subscriptions",source:"@site/docs/guided-tour/updating-data/graphql-subscriptions.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/graphql-subscriptions/",permalink:"/docs/next/guided-tour/updating-data/graphql-subscriptions/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/updating-data/graphql-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Rob Hogan",lastUpdatedAt:1662987816,formattedLastUpdatedAt:"9/12/2022",frontMatter:{id:"graphql-subscriptions",title:"GraphQL subscriptions",slug:"/guided-tour/updating-data/graphql-subscriptions/",description:"Relay guide to GraphQL subscriptions",keywords:["subscription"]},sidebar:"docs",previous:{title:"GraphQL mutations",permalink:"/docs/next/guided-tour/updating-data/graphql-mutations/"},next:{title:"Imperatively modifying store data (unsafe)",permalink:"/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/"}},p={},m=[{value:"Using <code>useSubscription</code> to create a subscription",id:"using-usesubscription-to-create-a-subscription",level:2},{value:"Refreshing components in response to subscription events",id:"refreshing-components-in-response-to-subscription-events",level:2},{value:"Executing a callback when the subscription fires, errors or is closed by the server",id:"executing-a-callback-when-the-subscription-fires-errors-or-is-closed-by-the-server",level:2},{value:"Declarative mutation directives",id:"declarative-mutation-directives",level:2},{value:"Manipulating connections in response to subscription events",id:"manipulating-connections-in-response-to-subscription-events",level:3},{value:"Deleting items in response to mutations",id:"deleting-items-in-response-to-mutations",level:3},{value:"Imperatively modifying local data",id:"imperatively-modifying-local-data",level:2},{value:"Configuring the Network Layer",id:"configuring-the-network-layer",level:2}],h={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.mdx)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://our.internmc.facebook.com/intern/wiki/GraphQL_Subscriptions/"},"GraphQL subscriptions")," are a mechanism to allow clients to query for data in response to a stream of server-side events.")),(0,r.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,r.mdx)("p",null,"GraphQL subscriptions are a mechanism to allow clients to query for data in response to a stream of server-side events.")),(0,r.mdx)("p",null,"A GraphQL subscription looks very similar to a query, except that it uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"subscription")," keyword:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"subscription FeedbackLikeSubscription($input: FeedbackLikeSubscribeData!) {\n  feedback_like_subscribe(data: $input) {\n    feedback {\n      like_count\n    }\n  }\n}\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Establishing a subscription using this GraphQL snippet will cause the application to be notified whenever an event is emitted from the ",(0,r.mdx)("inlineCode",{parentName:"li"},"feedback_like_subscribe")," stream."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"feedback_like_subscribe")," is a ",(0,r.mdx)("em",{parentName:"li"},"subscription root field")," (or just ",(0,r.mdx)("em",{parentName:"li"},"subscription field"),"), which sets up the subscription on the backend.")),(0,r.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},'You can view subscription root fields in the GraphQL Schema Explorer by opening VSCode @ FB and executing the command "Relay: Open GraphQL Schema Explorer". Then, in the "Schema Explorer Tab", click on "Subscription".'),(0,r.mdx)("p",{parentName:"div"},"You can click on the various mutation fields to see their parameters, descriptions and exposed fields.")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Like mutations, a subscription is handled in two separate steps. First, a server-side event occurs. Then, the query is executed.")),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Note that the event stream can be completely arbitrary, and can have no relation to the fields selected. In other words, there is no guarantee that the values selected in a subscription will have changed from notification to notification."))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"feedback_like_subscribe")," returns a specific GraphQL type which exposes the data we can query in response to the server-side event. In this case, we're querying for the Feedback object and its updated ",(0,r.mdx)("inlineCode",{parentName:"li"},"like_count"),". This allows us to show the like count in real time.")),(0,r.mdx)("p",null,"An example of a subscription payload received by the client could look like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "feedback_like_subscribe": {\n    "feedback": {\n      "id": "feedback-id",\n      "like_count": 321,\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"In Relay, we can declare GraphQL subscriptions using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"graphql")," tag too:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const {graphql} = require('react-relay');\n\nconst feedbackLikeSubscription = graphql`\n  subscription FeedbackLikeSubscription($input: FeedbackLikeSubscribeData!) {\n    feedback_like_subscribe(data: $input) {\n      feedback {\n        like_count\n      }\n    }\n  }\n`;\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Note that subscriptions can also reference GraphQL ",(0,r.mdx)("a",{parentName:"li",href:"../../rendering/variables/"},"variables")," in the same way queries or fragments do.")),(0,r.mdx)("h2",{id:"using-usesubscription-to-create-a-subscription"},"Using ",(0,r.mdx)("inlineCode",{parentName:"h2"},"useSubscription")," to create a subscription"),(0,r.mdx)("p",null,"In order to create a subscription in Relay, we can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useSubscription")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"requestSubscription")," APIs. Let's take a look at an example using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useSubscription")," API:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\nimport type {FeedbackLikeSubscribeData} from 'FeedbackLikeSubscription.graphql';\n\nconst {graphql, useSubscription} = require('react-relay');\nconst {useMemo} = require('React');\n\nfunction useFeedbackSubscription(\n  input: FeedbackLikeSubscribeData,\n) {\n  const config = useMemo({\n    subscription: graphql`\n      subscription FeedbackLikeSubscription(\n        $input: FeedbackLikeSubscribeData!\n      ) {\n        feedback_like_subscribe(data: $input) {\n          feedback {\n            like_count\n          }\n        }\n      }\n    `,\n    variables: {input},\n  }, [input])\n\n  return useSubscription(config);\n}\n")),(0,r.mdx)("p",null,"Let's distill what's happening here."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"useSubscription")," takes a ",(0,r.mdx)("inlineCode",{parentName:"li"},"GraphlQLSubscriptionConfig")," object, which includes the following fields:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"subscription"),": the GraphQL literal containing the subscription, and"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"variables"),": the variables with which to establish the subscription."))),(0,r.mdx)("li",{parentName:"ul"},"In addition, ",(0,r.mdx)("inlineCode",{parentName:"li"},"useSubscription")," accepts a Flow type parameter. As with queries, the Flow type of the subscription is exported from the file that the Relay compiler generates.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If this type is provided, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"GraphQLSubscriptionConfig")," becomes statically typed as well. ",(0,r.mdx)("strong",{parentName:"li"},"It is a best practice to always provide this type.")))),(0,r.mdx)("li",{parentName:"ul"},"Now, when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"useFeedbackSubscription")," hook commits, Relay will establish a subscription.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Unlike with APIs like ",(0,r.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),", Relay will ",(0,r.mdx)("strong",{parentName:"li"},"not")," attempt to establish this subscription during the render phase."))),(0,r.mdx)("li",{parentName:"ul"},"Once it is established, whenever an event occurs, the backend will select the updated Feedback object and select the ",(0,r.mdx)("inlineCode",{parentName:"li"},"like_count")," fields off of it.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Since the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Feedback")," type contains an ",(0,r.mdx)("inlineCode",{parentName:"li"},"id")," field, the Relay compiler will automatically add a selection for the ",(0,r.mdx)("inlineCode",{parentName:"li"},"id")," field."))),(0,r.mdx)("li",{parentName:"ul"},"When the subscription response is received, Relay will find a feedback object in the store with a matching ",(0,r.mdx)("inlineCode",{parentName:"li"},"id")," and update it with the newly received ",(0,r.mdx)("inlineCode",{parentName:"li"},"like_count")," value."),(0,r.mdx)("li",{parentName:"ul"},"If these values have changed as a result, any components which selected these fields off of the feedback object will be re-rendered. Or, to put it colloquially, any component which depends on the updated data will re-render.")),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"The name of the type of the parameter ",(0,r.mdx)("inlineCode",{parentName:"p"},"FeedbackLikeSubscribeData")," is derived from the name of the top-level mutation field, i.e. from ",(0,r.mdx)("inlineCode",{parentName:"p"},"feedback_like_subscribe"),". This type is also exported from the generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"graphql.js")," file."))),(0,r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GraphQLSubscriptionConfig")," object passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"useSubscription")," should be memoized! Otherwise, ",(0,r.mdx)("inlineCode",{parentName:"p"},"useSubscription")," will dispose the subscription and re-establish it with every render!"))),(0,r.mdx)("h2",{id:"refreshing-components-in-response-to-subscription-events"},"Refreshing components in response to subscription events"),(0,r.mdx)("p",null,"In the previous example, we manually selected ",(0,r.mdx)("inlineCode",{parentName:"p"},"like_count"),". Components that select this field will be re-rendered, should we receive an updated value."),(0,r.mdx)("p",null,"However, it is generally better to spread fragments that correspond to the components that we want to refresh in response to the mutation. This is because the data selected by components can change."),(0,r.mdx)("p",null,"Requiring developers to know about all subscriptions that might fetch their components data (and keeping them up-to-date) is an example of the kind of global reasoning that Relay wants to avoid requiring."),(0,r.mdx)("p",null,"For example, we might rewrite the subscription as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"subscription FeedbackLikeSubscription($input: FeedbackLikeSubscribeData!) {\n  feedback_like_subscribe(data: $input) {\n    feedback {\n      ...FeedbackDisplay_feedback\n      ...FeedbackDetail_feedback\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"Now, whenever a event in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"feedback_like_subscribe")," event stream occurred, the data selected by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FeedbackDisplay")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"FeedbackDetail")," components will be refetched, and those components will remain in a consistent state."),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Spreading fragments is generally preferable to refetching the data in response to subscription events, since the updated data can be fetched in a single round trip."))),(0,r.mdx)("h2",{id:"executing-a-callback-when-the-subscription-fires-errors-or-is-closed-by-the-server"},"Executing a callback when the subscription fires, errors or is closed by the server"),(0,r.mdx)("p",null,"In addition to writing updated data to the Relay store, we may want to execute a callback whenever a subscription payload is received. We may want to execute a callback if an error is received or if an error is received or if the server ends the subscription. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GraphQLSubscriptionConfig")," can include the following fields to handle such cases:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onNext"),", a callback that is executed when a subscription payload is received. It is passed the subscription response (stopping at fragment spread boundaries)."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onError"),", a callback that is executed when the subscription errors. It is passed the error that occured."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onCompleted"),", a callback that is executed when the server ends the subscription.")),(0,r.mdx)("h2",{id:"declarative-mutation-directives"},"Declarative mutation directives"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"../../list-data/updating-connections/#using-declarative-directives"},"Declarative mutation directives")," and ",(0,r.mdx)("a",{parentName:"p",href:"../graphql-mutations/#deleting-items-in-response-to-mutations"},(0,r.mdx)("inlineCode",{parentName:"a"},"@deleteRecord"))," work in subscriptions, too."),(0,r.mdx)("h3",{id:"manipulating-connections-in-response-to-subscription-events"},"Manipulating connections in response to subscription events"),(0,r.mdx)("p",null,"Relay makes it easy to respond to subscription events by adding items to or removing items from connections (i.e. lists). For example, you might want to append a newly created user to a given connection. For more, see ",(0,r.mdx)("a",{parentName:"p",href:"../../list-data/updating-connections/#using-declarative-directives"},"Using declarative directives"),"."),(0,r.mdx)("h3",{id:"deleting-items-in-response-to-mutations"},"Deleting items in response to mutations"),(0,r.mdx)("p",null,"In addition, you might want to delete an item from the store in response to a mutation. In order to do this, you would add the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@deleteRecord")," directive to the deleted ID. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"subscription DeletePostSubscription($input: DeletePostSubscribeData!) {\n  delete_post_subscribe(data: $input) {\n    deleted_post {\n      id @deleteRecord\n    }\n  }\n}\n")),(0,r.mdx)("h2",{id:"imperatively-modifying-local-data"},"Imperatively modifying local data"),(0,r.mdx)("p",null,"At times, the updates you wish to perform are more complex than just updating the values of fields and cannot be handled by the declarative mutation directives. For such situations, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"GraphQLSubscriptionConfig")," accepts an ",(0,r.mdx)("inlineCode",{parentName:"p"},"updater")," function which gives you full control over how to update the store."),(0,r.mdx)("p",null,"This is discussed in more detail in the section on ",(0,r.mdx)("a",{parentName:"p",href:"../imperatively-modifying-store-data/"},"Imperatively updating store data"),"."),(0,r.mdx)("h2",{id:"configuring-the-network-layer"},"Configuring the Network Layer"),(0,r.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,r.mdx)("p",null,"You will need to Configure your ",(0,r.mdx)("a",{parentName:"p",href:"../../../guides/network-layer"},"Network layer")," to handle subscriptions."),(0,r.mdx)("p",null,"Usually GraphQL subscriptions are communicated over ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets"),", here's an example using ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},"graphql-ws"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n    ...\n    Network,\n    Observable\n} from 'relay-runtime';\nimport { createClient } from 'graphql-ws';\n\nconst wsClient = createClient({\n  url:'ws://localhost:3000',\n});\n\nconst subscribe = (operation, variables) => {\n  return Observable.create((sink) => {\n    return wsClient.subscribe(\n      {\n        operationName: operation.name,\n        query: operation.text,\n        variables,\n      },\n      sink,\n    );\n  });\n}\n\nconst network = Network.create(fetchQuery, subscribe);\n")),(0,r.mdx)("p",null,"Alternatively, the legacy ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws"},"subscriptions-transport-ws")," library can be used too:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n    ...\n    Network,\n    Observable\n} from 'relay-runtime';\nimport { SubscriptionClient } from 'subscriptions-transport-ws';\n\nconst subscriptionClient = new SubscriptionClient('ws://localhost:3000', {\n  reconnect: true,\n});\n\nconst subscribe = (request, variables) => {\n  const subscribeObservable = subscriptionClient.request({\n    query: request.text,\n    operationName: request.name,\n    variables,\n  });\n  // Important: Convert subscriptions-transport-ws observable type to Relay's\n  return Observable.from(subscribeObservable);\n};\n\nconst network = Network.create(fetchQuery, subscribe);\n"))),(0,r.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("p",null,"At Facebook, the Network Layer has already been configured to handle GraphQL Subscriptions. For more details on writing subscriptions at Facebook, check out this ",(0,r.mdx)("a",{parentName:"p",href:"../../../guides/writing-subscriptions/"},"guide"),". For a guide on setting up subscriptions on the server side, check out this ",(0,r.mdx)("a",{parentName:"p",href:"https://our.internmc.facebook.com/intern/wiki/GraphQL_Subscriptions/creating-a-new-subscription/"},"wiki"),".")),(0,r.mdx)(o.Z,{mdxType:"DocsRating"}))}b.isMDXComponent=!0},47596:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(t){r(t)}}function s(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(11737);t.getSpecInfo=function(e){return i(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(t){r(t)}}function s(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,a=0;const r={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in r||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?r[t].resolve(e.data.response):r[t].reject(new Error(e.data.error)),delete r[t]})));const t=a++,n=new Promise(((e,n)=>{r[t]={resolve:e,reject:n}})),o={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,s),n}))}},24855:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(t){r(t)}}function s(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const a=n(11737);t.reportContentCopied=function(e){return i(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return i(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(i){}}))}},44256:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=r(n(47596)),t.uidocs=r(n(17483)),t.feedback=r(n(24855)),t.inpageeditor=r(n(27312));const o=["internal","external"];function s(e){return c(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=c,t.isInternal=d,t.hasEphemeralDiffNumber=function(){return Boolean(u())},t.getEphemeralDiffNumber=u,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}},27312:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(t){r(t)}}function s(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const a=n(11737);t.submitDiff=function(e){return i(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:i,diff_number:r}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:i,diff_number:r}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(t){r(t)}}function s(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const a=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return i(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:i}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:i}})}))}}}]);