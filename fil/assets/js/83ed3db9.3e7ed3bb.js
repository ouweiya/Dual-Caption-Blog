"use strict";(self.webpackChunktwo=self.webpackChunktwo||[]).push([[652],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),c=s(a),b=i,m=c["".concat(l,".").concat(b)]||c[b]||p[b]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var g={};for(var l in t)hasOwnProperty.call(t,l)&&(g[l]=t[l]);g.originalType=e,g.mdxType="string"==typeof e?e:i,o[1]=g;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4178:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const i=()=>n.createElement("section",{id:"webStore"},n.createElement("a",{href:"https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm",target:"_blank",rel:"noreferrer",className:"bg-[#E8F0FE] p-4 rounded-md grid grid-flow-col items-center gap-x-3 max-w-max"},n.createElement("img",{src:"data:image/png;base64,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",alt:"webstore.png",width:"206",height:"58",className:"w-[206px] h-[58px] bg-white"}),n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M25.3333 12H20V4H12V12H6.66667L16 21.3333L25.3333 12ZM6.66667 24V26.6667H25.3333V24H6.66667Z",fill:"#3485FF"}))))},4898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var n=a(7462),i=(a(7294),a(3905)),r=a(4178),o=a(5482),g=a(4206),l=a(5832),s=a(1969);const u={authors:"ouweiya",date:new Date("2022-04-07T00:00:00.000Z")},p="YouTube\u2122 Dual Caption 3.6.5 Update Notes",c={permalink:"/fil/3_6_5",source:"@site/i18n/fil/docusaurus-plugin-content-blog/3_6_5/index.mdx",title:"YouTube\u2122 Dual Caption 3.6.5 Update Notes",description:"### Ayusin ang mga subtitle na hindi bumabalot",date:"2022-04-07T00:00:00.000Z",formattedDate:"Abril 7, 2022",tags:[],hasTruncateMarker:!1,authors:[{name:"ouweiya",title:"Web Development",url:"https://github.com/ouweiya",imageURL:"img/avatar.png",key:"ouweiya"}],frontMatter:{authors:"ouweiya",date:"2022-04-07T00:00:00.000Z"},prevItem:{title:"YouTube\u2122 Dual Caption 3.6.6 Update Notes",permalink:"/fil/3_6_6"},nextItem:{title:"YouTube\u2122 Dual Caption 3.6.0 Update Notes",permalink:"/fil/3_6_0"}},b={authorsImageUrls:[void 0]},m=[{value:"Ayusin ang mga subtitle na hindi bumabalot",id:"ayusin-ang-mga-subtitle-na-hindi-bumabalot",level:3},{value:"Ayusin ang subtitle prompt",id:"ayusin-ang-subtitle-prompt",level:3},{value:"Pagbutihin ang hawakan",id:"pagbutihin-ang-hawakan",level:3},{value:"Subtitle na right-click na menu",id:"subtitle-na-right-click-na-menu",level:3}],d={toc:m};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ayusin-ang-mga-subtitle-na-hindi-bumabalot"},"Ayusin ang mga subtitle na hindi bumabalot"),(0,i.kt)("p",null," Inayos ang isang isyu na naging sanhi ng pag-apaw ng mga subtitle nang hindi binabalot kapag ang font ay masyadong malaki sa nakaraang bersyon."),(0,i.kt)("img",{src:s.Z,alt:"subtitleWrap.png",width:"600",height:"698"}),(0,i.kt)("h3",{id:"ayusin-ang-subtitle-prompt"},"Ayusin ang subtitle prompt"),(0,i.kt)("p",null,"Sa mga nakaraang bersyon, gagamitin din ng subtitle prompt ang istilo, at ngayon ay maiiwasan ang problemang ito."),(0,i.kt)("img",{src:l.Z,alt:"subtitleTips.png",width:"600",height:"682"}),(0,i.kt)("h3",{id:"pagbutihin-ang-hawakan"},"Pagbutihin ang hawakan"),(0,i.kt)("p",null,"Ang mga pindutan ng hawakan ay dating mahirap i-drag kapag ang subtitle ay na-drag sa hangganan, ngayon ay mas madaling gamitin sa pamamagitan ng pagbabago ng posisyon ng hawakan."),(0,i.kt)("img",{src:o.Z,alt:"improveHandle.gif",width:"600",height:"338"}),(0,i.kt)("h3",{id:"subtitle-na-right-click-na-menu"},"Subtitle na right-click na menu"),(0,i.kt)("p",null,"Noong nakaraan, maaaring kopyahin ang mga subtitle, ngunit hindi maisagawa ang right-click na operasyon. Ngayon ay napabuti na ang problemang ito."),(0,i.kt)("img",{src:g.Z,alt:"subtitleRightClickMenu.gif",width:"600",height:"313"}),(0,i.kt)(r.Z,{mdxType:"WebStore"}))}h.isMDXComponent=!0},5482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/improveHandle-9703fa973974d0e5d65d2cb00bca5635.gif"},4206:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subtitleRightClickMenu-7495fd993b1b635f131324275bfb1e29.gif"},5832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subtitleTips-b01e33bad302bd578ed3a3be43525c13.png"},1969:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subtitleWrap-95fd10fe71c17d7976e2529831faebae.png"}}]);