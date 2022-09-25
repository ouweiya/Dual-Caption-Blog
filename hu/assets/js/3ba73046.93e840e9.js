"use strict";(self.webpackChunktwo=self.webpackChunktwo||[]).push([[962],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),g=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=g(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),b=g(a),m=n,u=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return a?r.createElement(u,i(i({ref:e},c),{},{components:a})):r.createElement(u,i({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var g=2;g<o;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},4178:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(7294);const n=()=>r.createElement("section",{id:"webStore"},r.createElement("a",{href:"https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm",target:"_blank",rel:"noreferrer",className:"bg-[#E8F0FE] p-4 rounded-md grid grid-flow-col items-center gap-x-3 max-w-max"},r.createElement("img",{src:"data:image/png;base64,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",alt:"webstore.png",width:"206",height:"58",className:"w-[206px] h-[58px] bg-white"}),r.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M25.3333 12H20V4H12V12H6.66667L16 21.3333L25.3333 12ZM6.66667 24V26.6667H25.3333V24H6.66667Z",fill:"#3485FF"}))))},1584:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>b,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),o=a(4178),i=a(5344),l=a(6904),s=a(2774),g=a(5642);const c={authors:"ouweiya",date:new Date("2022-04-07T00:00:00.000Z")},p="YouTube\u2122 Dual Caption 3.6.5 Friss\xedt\xe9si megjegyz\xe9sek",b={permalink:"/hu/3_6_5",source:"@site/i18n/hu/docusaurus-plugin-content-blog/3_6_5/index.mdx",title:"YouTube\u2122 Dual Caption 3.6.5 Friss\xedt\xe9si megjegyz\xe9sek",description:"### Jav\xedtsa ki a feliratoz\xe1st",date:"2022-04-07T00:00:00.000Z",formattedDate:"2022. \xe1prilis 7.",tags:[],hasTruncateMarker:!1,authors:[{name:"ouweiya",title:"Web Development",url:"https://github.com/ouweiya",imageURL:"img/avatar.png",key:"ouweiya"}],frontMatter:{authors:"ouweiya",date:"2022-04-07T00:00:00.000Z"},prevItem:{title:"YouTube\u2122 Dual Caption 3.6.6 Friss\xedt\xe9si megjegyz\xe9sek",permalink:"/hu/3_6_6"},nextItem:{title:"YouTube\u2122 Dual Caption 3.6.0 friss\xedt\xe9si megjegyz\xe9sek",permalink:"/hu/3_6_0"}},m={authorsImageUrls:[void 0]},u=[{value:"Jav\xedtsa ki a feliratoz\xe1st",id:"jav\xedtsa-ki-a-feliratoz\xe1st",level:3},{value:"Jav\xedtsa ki a feliratot",id:"jav\xedtsa-ki-a-feliratot",level:3},{value:"Jav\xedtsa a foganty\xfat",id:"jav\xedtsa-a-foganty\xfat",level:3},{value:"Felirat jobb gombbal kattintson a men\xfc",id:"felirat-jobb-gombbal-kattintson-a-men\xfc",level:3}],f={toc:u};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"jav\xedtsa-ki-a-feliratoz\xe1st"},"Jav\xedtsa ki a feliratoz\xe1st"),(0,n.kt)("p",null," Kijav\xedtottuk azt a hib\xe1t, amely miatt a feliratok t\xfalcsordultak t\xf6rdel\xe9se n\xe9lk\xfcl, amikor a bet\u0171t\xedpus t\xfal nagy volt az el\u0151z\u0151 verzi\xf3ban."),(0,n.kt)("img",{src:g.Z,alt:"subtitleWrap.png",width:"600",height:"698"}),(0,n.kt)("h3",{id:"jav\xedtsa-ki-a-feliratot"},"Jav\xedtsa ki a feliratot"),(0,n.kt)("p",null,"A kor\xe1bbi verzi\xf3kban a felirat prompt is a st\xedlust haszn\xe1lja, \xe9s most ez a probl\xe9ma elker\xfclhet\u0151."),(0,n.kt)("img",{src:s.Z,alt:"subtitleTips.png",width:"600",height:"682"}),(0,n.kt)("h3",{id:"jav\xedtsa-a-foganty\xfat"},"Jav\xedtsa a foganty\xfat"),(0,n.kt)("p",null,"A foganty\xfa gombjait kor\xe1bban neh\xe9z volt h\xfazni, amikor a feliratot a szeg\xe9lyig h\xfazt\xe1k, most a foganty\xfa poz\xedci\xf3j\xe1nak megv\xe1ltoztat\xe1s\xe1val k\xf6nnyebben haszn\xe1lhat\xf3."),(0,n.kt)("img",{src:i.Z,alt:"improveHandle.gif",width:"600",height:"338"}),(0,n.kt)("h3",{id:"felirat-jobb-gombbal-kattintson-a-men\xfc"},"Felirat jobb gombbal kattintson a men\xfc"),(0,n.kt)("p",null,"R\xe9gebben a feliratokat lehetett m\xe1solni, de a jobb gombbal t\xf6rt\xe9n\u0151 m\u0171veletet nem, most ezt a probl\xe9m\xe1t jav\xedtott\xe1k."),(0,n.kt)("img",{src:l.Z,alt:"subtitleRightClickMenu.gif",width:"600",height:"313"}),(0,n.kt)(o.Z,{mdxType:"WebStore"}))}d.isMDXComponent=!0},5344:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/improveHandle-9703fa973974d0e5d65d2cb00bca5635.gif"},6904:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/subtitleRightClickMenu-7495fd993b1b635f131324275bfb1e29.gif"},2774:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/subtitleTips-b01e33bad302bd578ed3a3be43525c13.png"},5642:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/subtitleWrap-95fd10fe71c17d7976e2529831faebae.png"}}]);