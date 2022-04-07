(self.webpackChunk=self.webpackChunk||[]).push([[32328],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>l});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99865:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>d});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],s={id:"network-layer",title:"Network Layer",original_id:"network-layer"},c=void 0,p={unversionedId:"network-layer",id:"version-v1.6.1/network-layer",isDocsHomePage:!1,title:"Network Layer",description:"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the NetworkLayer interface when creating an instance of a Relay Environment. The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration.",source:"@site/versioned_docs/version-v1.6.1/Modern-NetworkLayer.md",sourceDirName:".",slug:"/network-layer",permalink:"/docs/v1.6.1/network-layer",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.1/Modern-NetworkLayer.md",tags:[],version:"v1.6.1",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1649291689,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"network-layer",title:"Network Layer",original_id:"network-layer"},sidebar:"version-v1.6.1/docs",previous:{title:"Relay Environment",permalink:"/docs/v1.6.1/relay-environment"},next:{title:"QueryRenderer",permalink:"/docs/v1.6.1/query-renderer"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the ",(0,a.mdx)("inlineCode",{parentName:"p"},"NetworkLayer")," interface when creating an instance of a ",(0,a.mdx)("a",{parentName:"p",href:"/docs/v1.6.1/relay-environment"},"Relay Environment"),". The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration."),(0,a.mdx)("p",null,"Currently the easiest way to create a network layer is via a helper from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"relay-runtime")," package:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {Environment, Network} = require('relay-runtime');\n\n// Define a function that fetches the results of an operation (query/mutation/etc)\n// and returns its results as a Promise:\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n  uploadables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      // Add authentication and other headers here\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: operation.text, // GraphQL text from input\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\n// Create a network layer from the fetch function\nconst network = Network.create(fetchQuery);\n\n// Create an environment using this network:\nconst environment = new Environment({\n  ..., // other options\n  network,\n});\n")),(0,a.mdx)("p",null,"Note that this is a basic example to help you get started. This example could be extended with additional features such as request/response caching (enabled e.g. when ",(0,a.mdx)("inlineCode",{parentName:"p"},"cacheConfig.force")," is false) and uploading form data for mutations (the ",(0,a.mdx)("inlineCode",{parentName:"p"},"uploadables")," parameter)."))}d.isMDXComponent=!0}}]);