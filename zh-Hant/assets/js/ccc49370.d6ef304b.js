"use strict";(self.webpackChunktwo=self.webpackChunktwo||[]).push([[103],{8602:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),l=a(6010),r=a(5504),i=a(7524),o=a(9960),c=a(5999);const s="sidebar_brwN",m="sidebarItemTitle_r4Q1",u="sidebarItemList_QwSx",d="sidebarItem_lnhn",g="sidebarItemLink_yNGZ",f="sidebarItemLinkActive_oSRm";function v(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md","sidebarTitle2")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:f},e.title)))))))}var h=a(3102);function E(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return n.createElement(h.Zo,{component:E,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(p,{sidebar:t}):n.createElement(v,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:i,...o}=e,c=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(b,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},9930:(e,t,a)=>{a.d(t,{Z:()=>U});var n=a(7294),l=a(6010),r=a(9460),i=a(4996);function o(e){let{children:t,className:a}=e;const{frontMatter:l,assets:o}=(0,r.C)(),{withBaseUrl:c}=(0,i.C)(),s=o.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&n.createElement("meta",{itemProp:"image",content:c(s,{absolute:!0})}),t)}var c=a(9960);const s="title_f1Hy";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:o,title:m}=a,u=i?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(s,t),itemProp:"headline"},i?m:n.createElement(c.Z,{itemProp:"url",to:o},m))}var u=a(5999);function d(e){return e.href?n.createElement(c.Z,e):n.createElement(n.Fragment,null,e.children)}function g(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(e){let{author:t,className:a}=e;const{metadata:i}=(0,r.C)(),{date:o,formattedDate:c}=i,{name:s,title:m,url:u,imageURL:f,email:v}=t,h=u||v&&`mailto:${v}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},f&&n.createElement(d,{href:h,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:f,alt:s})),s&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(d,{href:h,itemProp:"url",className:"avatar__name-link"},n.createElement("span",{itemProp:"name",className:"authorName"},s))),m&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n.createElement(g,{date:o,formattedDate:c}))))}const v="authorCol_Hf19",h="imageOnlyAuthorRow_pa_O",E="imageOnlyAuthorCol_G86a";function p(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?h:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?E:v),key:t},n.createElement(f,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function b(){return n.createElement("header",null,n.createElement(m,null),n.createElement(p,null))}var N=a(8780),_=a(4048);function k(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return n.createElement("div",{id:i?N.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(_.Z,null,t))}var L=a(5281),Z=a(7462);const P="iconEdit_Z9Sw";function C(e){let{className:t,...a}=e;return n.createElement("svg",(0,Z.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(P,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function x(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:L.k.common.editThisPage},n.createElement(C,null),n.createElement(u.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const H="tag_zVej",y="tagRegular_sFm0",w="tagWithCount_h2kH";function T(e){let{permalink:t,label:a,count:r}=e;return n.createElement(c.Z,{href:t,className:(0,l.Z)(H,r?w:y)},a,r&&n.createElement("span",null,r))}const B="tags_jXut",I="tag_QGVx";function A(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(u.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(B,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:I},n.createElement(T,{label:t,permalink:a}))}))))}function M(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function R(e){const{blogPostTitle:t,...a}=e;return n.createElement(c.Z,(0,Z.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(M,null))}const O="blogPostFooterDetailsFull_mRVl";function S(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:o,hasTruncateMarker:c}=e,s=!t&&c,m=a.length>0;return m||s||o?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&O)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":s})},n.createElement(A,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(x,{editUrl:o})),s&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(R,{blogPostTitle:i,to:e.permalink}))):null}function U(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(o,{className:(0,l.Z)(i,a)},n.createElement(b,null),n.createElement(k,null,t),n.createElement(S,null))}},2244:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(9960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},794:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),l=a(7294),r=a(6010),i=a(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function c(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function m(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>s(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function u(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=m(o,{anchorTopOffset:a.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function g(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(g,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const f=l.memo(g);function v(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const v=(0,i.L)(),h=m??v.tableOfContents.minHeadingLevel,E=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>c({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:h,maxHeadingLevel:E});return d((0,l.useMemo)((()=>{if(r&&s)return{linkClassName:r,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:E}}),[r,s,h,E])),l.createElement(f,(0,n.Z)({toc:p,className:a,linkClassName:r},g))}const h="tableOfContents_bqdL";function E(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(h,"thin-scrollbar",t)},l.createElement(v,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var n=a(7294),l=a(902);const r=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:i},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},6574:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(7294),l=a(6010),r=a(1944),i=a(5281),o=a(9460),c=a(8602),s=a(9930);a(5999),a(2244);function m(){const{assets:e,metadata:t}=(0,o.C)(),{title:a,description:l,date:i,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return n.createElement(r.d,{title:a,description:l,keywords:u,image:d},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:i}),s.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&n.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var u=a(794);function d(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:r}=(0,o.C)(),{nextItem:i,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:g,toc_min_heading_level:f,toc_max_heading_level:v}=d;return n.createElement(c.Z,{sidebar:t,toc:!g&&r.length>0?n.createElement(u.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:v}):void 0},n.createElement(s.Z,null,a))}function g(e){const t=e.content;return n.createElement(o.n,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},n.createElement(m,null),n.createElement(d,{sidebar:e.sidebar},n.createElement(t,null))))}}}]);