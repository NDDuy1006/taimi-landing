(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{4431:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[regular]",function(){return n(6028)}])},8332:function(e,t,n){"use strict";var l=n(5893),r=n(1360);let c=e=>{let{data:t}=e,{frontmatter:n,content:c}=t;return(0,l.jsx)("section",{className:"section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"flex h-[40vh] items-center justify-center",children:(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("h1",{className:"mb-4",children:n.title}),(0,r.gI)(c,"div","content")]})})})})};t.Z=c},5116:function(e,t,n){"use strict";var l=n(5893),r=n(1360),c=n(1664),a=n.n(c);t.Z=function(e){let{cta:t}=e,{content:n,title:c}=t;return(0,l.jsx)("section",{className:"section px-4",children:(0,l.jsx)("div",{className:"section container rounded-xl shadow bg-theme-light",children:(0,l.jsx)("div",{className:"row mx-auto items-center justify-center",children:(0,l.jsxs)("div",{className:"text-center max-w-xl",children:[(0,l.jsx)("h2",{className:"text-4xl text-white",children:c}),n&&(0,l.jsx)("p",{className:"mt-4 text-white",children:(0,r.gI)(n)}),t.button.enable&&(0,l.jsx)(a(),{className:"btn btn-primary z-0 py-[14px] mt-4",href:t.button.link,children:t.button.label})]})})})})}},2296:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(5893),r=n(7294),c=function(){return(c=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function a(e){var t=r.useState(!1),n=t[0],l=t[1],a=r.useState(!1),s=a[0],i=a[1],o=encodeURIComponent(e.id),m="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,u=e.poster||"hqdefault",h="&"+e.params,x=e.muted?"&mute=1":"",p=e.announce||"Watch",f=e.webp?"webp":"jpg",j=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+j+"/"+m+"/"+u+"."+f:"https://i.ytimg.com/"+j+"/"+o+"/"+u+"."+f),b=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var N=e.playlist?b+"/embed/videoseries?autoplay=1"+x+"&list="+o+h:b+"/embed/"+o+"?autoplay=1&state=1"+x+h,v=e.activatedClass||"lyt-activated",y=e.adNetwork||!1,g=e.aspectHeight||9,k=e.aspectWidth||16,E=e.iframeClass||"",C=e.playerClass||"lty-playbtn",I=e.wrapperClass||"yt-lite",_=e.onIframeAdded||function(){},O=e.rel?"prefetch":"preload";return r.useEffect(function(){s&&_()},[s]),r.createElement(r.Fragment,null,r.createElement("link",{rel:O,href:w,as:"image"}),r.createElement(r.Fragment,null,n&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:b}),r.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),y&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),r.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),r.createElement("article",{onPointerOver:function(){n||l(!0)},onClick:function(){s||i(!0)},className:I+" "+(s?v:""),"data-title":d,style:c({backgroundImage:"url("+w+")"},{"--aspect-ratio":g/k*100+"%"})},r.createElement("button",{type:"button",className:C,"aria-label":p+" "+d}),s&&r.createElement("iframe",{className:E,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:N})))}n(5243);let s=e=>{let{id:t,title:n,...r}=e;return(0,l.jsx)(a,{id:t,title:n,...r})};var i=s},6028:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return F}});var l={};n.r(l),n.d(l,{MDXContext:function(){return u},MDXProvider:function(){return f},useMDXComponents:function(){return x},withMDXComponents:function(){return h}});var r=n(5893),c=n(8332),a=n(535),s=n(6626),i=n(1360);let o=e=>{let{data:t}=e,{frontmatter:n}=t,{title:l,info:c}=n,{contact_form_action:a}=s.f;return(0,r.jsx)("section",{className:"section",children:(0,r.jsxs)("div",{className:"container",children:[(0,i.gI)(l,"h1","text-center font-normal"),(0,r.jsxs)("div",{className:"section row pb-0",children:[(0,r.jsx)("div",{className:"col-12 md:col-6 lg:col-7",children:(0,r.jsxs)("form",{className:"contact-form",method:"POST",action:a,children:[(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("input",{className:"form-input w-full rounded",name:"name",type:"text",placeholder:"Name",required:!0})}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("input",{className:"form-input w-full rounded",name:"email",type:"email",placeholder:"Your email",required:!0})}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("input",{className:"form-input w-full rounded",name:"subject",type:"text",placeholder:"Subject",required:!0})}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("textarea",{className:"form-textarea w-full rounded-md",rows:"7",placeholder:"Your message"})}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Now"})]})}),(0,r.jsxs)("div",{className:"content col-12 md:col-6 lg:col-5",children:[(0,i.gI)(c.title,"h4"),(0,i.gI)(c.description,"p","mt-4"),(0,r.jsx)("ul",{className:"contact-list mt-5",children:c.contacts.map((e,t)=>(0,r.jsx)("li",{children:(0,i.gI)(e,"strong","text-primary")},t))})]})]})]})})};var m=n(7294),d=n(2746);let u=m.createContext({});function h(e){return function(t){let n=x(t.components);return m.createElement(e,{...t,allComponents:n})}}function x(e){let t=m.useContext(u);return m.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let p={};function f({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||p:x(e),m.createElement(u.Provider,{value:l},t)}function j({compiledSource:e,frontmatter:t,scope:n,components:r={},lazy:c}){let[a,s]=(0,m.useState)(!c||"undefined"==typeof window);(0,m.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let i=(0,m.useMemo)(()=>{let r=Object.assign({opts:{...l,...d.jsxRuntime}},{frontmatter:t},n),c=Object.keys(r),a=Object.values(r),s=Reflect.construct(Function,c.concat(`${e}`));return s.apply(s,a).default},[n,e]);if(!a)return m.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let o=m.createElement(f,{components:r},m.createElement(i,null));return c?m.createElement("div",null,o):o}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var w=n(2296),b=n(1664),N=n.n(b);let v=e=>{let{href:t,type:n,rel:l,children:c}=e;return(0,r.jsx)(N(),{href:t,target:"_blank",rel:"noopener noreferrer ".concat(l?"follow"===l?"":l:"nofollow"),className:"btn mb-4 me-4 ".concat("outline"===n?"btn-outline-primary":"btn-primary"),children:c})},y={Button:v,YoutubePlayer:w.Z},g=e=>{let{data:t}=e,{frontmatter:n,mdxContent:l}=t,{title:c}=n;return(0,r.jsx)("section",{className:"section",children:(0,r.jsxs)("div",{className:"container",children:[(0,i.gI)(c,"h1","h2 mb-8 text-center"),(0,r.jsx)("div",{className:"content",children:(0,r.jsx)(j,{...l,components:y})})]})})};var k=n(5116),E=n(5675),C=n.n(E),I=function(e){let{data:t}=e,{call_to_action:n,features:l}=t.frontmatter;return(0,r.jsxs)(r.Fragment,{children:[l.map((e,t)=>{let n=t%2>0;return(0,r.jsx)("section",{className:"section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center md:w-2/5 service-content mt-5 md:mt-0 ".concat(n?"md:order-2":"md:order-1"),children:[(0,r.jsx)("h2",{className:"font-bold mb-4 text-3xl",children:null==e?void 0:e.title}),e.contents.map((e,t)=>(0,r.jsxs)("div",{className:"flex flex-row my-4",children:[(0,r.jsx)(C(),{src:e.icon,width:48,height:48,alt:"icon"}),(0,r.jsx)("div",{className:"ml-4 text-primary self-center text-xl",children:e.description})]},t))]}),(0,r.jsx)("div",{className:"md:w-3/5 ".concat(n?"md:order-1":"md:order-2"),children:(0,r.jsx)(C(),{src:e.images[0],width:750,height:390,alt:"feature image",priority:!0})})]})})},"service-".concat(t))}),(0,r.jsx)(k.Z,{cta:n})]})},_=function(e){let{data:t}=e,{frontmatter:{title:n,plans:l,call_to_action:c}}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{className:"section pb-0",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h1",{className:"text-center font-normal",children:n}),(0,r.jsx)("div",{className:"section row -mt-10 justify-center md:mt-0",children:l.map((e,t)=>(0,r.jsx)("div",{className:"col-12 md:col-4 ".concat(e.recommended?"col-recommended":"lg:px-0"),children:(0,r.jsxs)("div",{className:"card text-center",children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsxs)("span",{className:"text-5xl text-primary",children:["$",e.price]}),(0,r.jsxs)("span",{children:["/ ",e.type]})]}),(0,r.jsx)("h5",{className:"mt-2 font-normal text-text",children:e.subtitle}),(0,r.jsx)("ul",{className:"mt-5",children:e.features.map((e,t)=>(0,r.jsx)("li",{className:"mb-[10px] leading-5",children:e},t))}),(0,r.jsx)(N(),{className:"btn mt-5 ".concat(e.recommended?"btn-primary":"btn-outline-primary"),href:e.button.link,rel:e.button.rel,children:e.button.label})]})},e.title+t))})]})}),(0,r.jsx)(k.Z,{cta:c})]})};let O=e=>{let{data:t}=e,{title:n,meta_title:l,description:s,image:i,noindex:m,canonical:d,layout:u}=t.frontmatter;return(0,r.jsx)(a.Z,{title:n,description:s,meta_title:l,image:i,noindex:m,canonical:d,children:"404"===u?(0,r.jsx)(c.Z,{data:t}):"contact"===u?(0,r.jsx)(o,{data:t}):"pricing"===u?(0,r.jsx)(_,{data:t}):"features"===u?(0,r.jsx)(I,{data:t}):(0,r.jsx)(g,{data:t})})};var S=!0,F=O},5243:function(){},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)}},function(e){e.O(0,[260,127,535,774,888,179],function(){return e(e.s=4431)}),_N_E=e.O()}]);