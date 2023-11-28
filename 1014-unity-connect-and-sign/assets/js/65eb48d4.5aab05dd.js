"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={description:"Request permissions to call restricted methods.",sidebar_position:7},i="Request permissions",a={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions to call restricted methods.",source:"@site/wallet/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/1014-unity-connect-and-sign/wallet/how-to/request-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/request-permissions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Request permissions to call restricted methods.",sidebar_position:7},sidebar:"walletSidebar",previous:{title:"Add a network",permalink:"/1014-unity-connect-and-sign/wallet/how-to/add-network"},next:{title:"Access a user's MetaMask provider",permalink:"/1014-unity-connect-and-sign/wallet/how-to/access-provider"}},c={},l=[{value:"Example",id:"example",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...o}=e;return(0,s.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,s.kt)("p",null,"To call a restricted RPC method, your dapp must request permission from the user to call it using\nthe ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestPermissions"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," RPC method.\nThis method is specified by ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," creates a confirmation asking the user to connect to an account and\nallow the dapp to call the requested method.\nThe confirmation screen describes the functions and data the requested method can access.\nFor example, something like the following confirmation displays when you request permission to call\nthe ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," restricted method:"),(0,s.kt)("div",{class:"row"},(0,s.kt)("div",{class:"column"},(0,s.kt)("img",{src:n(37960).Z,alt:"Request permissions confirmation 1",style:{border:"1px solid black"}})),(0,s.kt)("div",{class:"column"},(0,s.kt)("img",{src:n(36613).Z,alt:"Request permissions confirmation 2",style:{border:"1px solid black"}}))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"The following is an example of using ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," to request permission from the user\nto call ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_accounts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"document.getElementById('requestPermissionsButton', requestPermissions);\n\nfunction requestPermissions() {\n  ethereum\n    .request({\n      method: 'wallet_requestPermissions',\n      params: [{ eth_accounts: {} }],\n    })\n    .then((permissions) => {\n      const accountsPermission = permissions.find(\n        (permission) => permission.parentCapability === 'eth_accounts'\n      );\n      if (accountsPermission) {\n        console.log('eth_accounts permission successfully requested!');\n      }\n    })\n    .catch((error) => {\n      if (error.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        console.log('Permissions needed to continue.');\n      } else {\n        console.error(error);\n      }\n    });\n}\n")))}m.isMDXComponent=!0},36613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/request-permissions-2-7526e02a3555f5aeaa609955aea97821.png"},37960:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/request-permissions-81ec11205503d1b5dfde85316a3da5a1.png"}}]);