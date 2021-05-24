(self.webpackChunk=self.webpackChunk||[]).push([[37658],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?t.createElement(v,i(i({ref:n},s),{},{components:r})):t.createElement(v,i({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74133:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>i,metadata:()=>l,toc:()=>c,default:()=>s});var t=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},l={unversionedId:"relay-environment",id:"version-v7.0.0/relay-environment",isDocsHomePage:!1,title:"Relay Environment",description:'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.',source:"@site/versioned_docs/version-v7.0.0/Modern-RelayEnvironment.md",sourceDirName:".",slug:"/relay-environment",permalink:"/docs/v7.0.0/relay-environment",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v7.0.0/Modern-RelayEnvironment.md",version:"v7.0.0",lastUpdatedBy:"Jack Hanford",lastUpdatedAt:1621871280,formattedLastUpdatedAt:"5/24/2021",frontMatter:{id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},sidebar:"version-v7.0.0/docs",previous:{title:"GraphQL in Relay",permalink:"/docs/v7.0.0/graphql-in-relay"},next:{title:"Network Layer",permalink:"/docs/v7.0.0/network-layer"}},c=[{value:"A simple example",id:"a-simple-example",children:[]},{value:"Adding a <code>handlerProvider</code>",id:"adding-a-handlerprovider",children:[]}],d={toc:c};function s(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.'),(0,a.kt)("p",null,"Most applications will create a single Environment instance and use it throughout. In specific situations, however, you may want to create multiple environments for different purposes. For example, you may create a new environment instance whenever the user logs in or out in order to prevent data for different users being cached together. Similarly, a server rendered application may create a new environment instance per request, so that each request gets its own cache and user data does not overlap. Alternatively, you might have multiple products or features within a larger application, and you want each one to have product-specific network-handling or caching."),(0,a.kt)("h2",{id:"a-simple-example"},"A simple example"),(0,a.kt)("p",null,"To create an environment instance in Relay Modern, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} = require('relay-runtime');\n\nconst source = new RecordSource();\nconst store = new Store(source);\nconst network = Network.create(/*...*/); // see note below\nconst handlerProvider = null;\n\nconst environment = new Environment({\n  handlerProvider, // Can omit.\n  network,\n  store,\n});\n")),(0,a.kt)("p",null,"For more details on creating a Network, see the ",(0,a.kt)("a",{parentName:"p",href:"./network-layer"},"NetworkLayer guide"),"."),(0,a.kt)("p",null,"Once you have an environment, you can pass it in to your ",(0,a.kt)("a",{parentName:"p",href:"./query-renderer"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryRenderer"))," instance, or into mutations via the ",(0,a.kt)("inlineCode",{parentName:"p"},"commitUpdate"),' function (see "',(0,a.kt)("a",{parentName:"p",href:"./mutations"},"Mutations"),'").'),(0,a.kt)("h2",{id:"adding-a-handlerprovider"},"Adding a ",(0,a.kt)("inlineCode",{parentName:"h2"},"handlerProvider")),(0,a.kt)("p",null,"The example above did not configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"handlerProvider"),", which means that a default one will be provided. Relay Modern comes with a built-in handler that augment the core with special functionality for handling connections (which is not a standard GraphQL feature, but a set of pagination conventions used at Facebook, specified in detail in the ",(0,a.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay Cursor Connections Specification"),", and well-supported by Relay itself)."),(0,a.kt)("p",null,"If you wish to provide your own ",(0,a.kt)("inlineCode",{parentName:"p"},"handlerProvider"),", you can do so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  ConnectionHandler,\n} = require('relay-runtime');\n\nfunction handlerProvider(handle) {\n  switch (handle) {\n    // Augment (or remove from) this list:\n    case 'connection': return ConnectionHandler;\n  }\n  throw new Error(\n    `handlerProvider: No handler provided for ${handle}`\n  );\n}\n")))}s.isMDXComponent=!0}}]);