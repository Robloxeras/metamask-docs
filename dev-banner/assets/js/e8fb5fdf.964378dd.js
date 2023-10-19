"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"Electron",sidebar_position:6},s="Use MetaMask SDK with Electron",c={unversionedId:"how-to/connect/set-up-sdk/javascript/electron",id:"how-to/connect/set-up-sdk/javascript/electron",title:"Use MetaMask SDK with Electron",description:"Import MetaMask SDK into your Electron dapp to enable your users",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/electron.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/electron",permalink:"/dev-banner/wallet/how-to/connect/set-up-sdk/javascript/electron",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/electron.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Electron",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Node.js",permalink:"/dev-banner/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},next:{title:"Gaming",permalink:"/dev-banner/wallet/how-to/connect/set-up-sdk/gaming/"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-metamask-sdk-with-electron"},"Use MetaMask SDK with Electron"),(0,a.kt)("p",null,"Import ",(0,a.kt)("a",{parentName:"p",href:"/dev-banner/wallet/concepts/sdk/"},"MetaMask SDK")," into your Electron dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile."),(0,a.kt)("p",null,"On the frontend, see the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/dev-banner/wallet/how-to/connect/set-up-sdk/javascript/react/"},"use the SDK with React"),".\nOn the backend, see the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/dev-banner/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},"use the SDK with Node.js"),"."),(0,a.kt)("admonition",{title:"example",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/electronjs"},"example Electron dapp"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))}d.isMDXComponent=!0}}]);