(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8005)}])},5116:function(e,t,s){"use strict";var l=s(5893),n=s(1360),a=s(1664),i=s.n(a);t.Z=function(e){let{cta:t}=e,{content:s,title:a}=t;return(0,l.jsx)("section",{className:"section px-4",children:(0,l.jsx)("div",{className:"section container rounded-xl shadow bg-theme-light",children:(0,l.jsx)("div",{className:"row mx-auto items-center justify-center",children:(0,l.jsxs)("div",{className:"text-center max-w-xl",children:[(0,l.jsx)("h2",{className:"text-4xl text-white",children:a}),s&&(0,l.jsx)("p",{className:"mt-4 text-white",children:(0,n.gI)(s)}),t.button.enable&&(0,l.jsx)(i(),{className:"btn btn-primary z-0 py-[14px] mt-4",href:t.button.link,children:t.button.label})]})})})})}},2296:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var l=s(5893),n=s(7294),a=function(){return(a=Object.assign||function(e){for(var t,s=1,l=arguments.length;s<l;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function i(e){var t=n.useState(!1),s=t[0],l=t[1],i=n.useState(!1),c=i[0],r=i[1],o=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,x=e.poster||"hqdefault",h="&"+e.params,u=e.muted?"&mute=1":"",p=e.announce||"Watch",f=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",j=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+g+"/"+d+"/"+x+"."+f:"https://i.ytimg.com/"+g+"/"+o+"/"+x+"."+f),w=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var b=e.playlist?w+"/embed/videoseries?autoplay=1"+u+"&list="+o+h:w+"/embed/"+o+"?autoplay=1&state=1"+u+h,N=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,y=e.aspectHeight||9,k=e.aspectWidth||16,E=e.iframeClass||"",_=e.playerClass||"lty-playbtn",I=e.wrapperClass||"yt-lite",C=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload";return n.useEffect(function(){c&&C()},[c]),n.createElement(n.Fragment,null,n.createElement("link",{rel:S,href:j,as:"image"}),n.createElement(n.Fragment,null,s&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:w}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){s||l(!0)},onClick:function(){c||r(!0)},className:I+" "+(c?N:""),"data-title":m,style:a({backgroundImage:"url("+j+")"},{"--aspect-ratio":y/k*100+"%"})},n.createElement("button",{type:"button",className:_,"aria-label":p+" "+m}),c&&n.createElement("iframe",{className:E,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:b})))}s(5243);let c=e=>{let{id:t,title:s,...n}=e;return(0,l.jsx)(i,{id:t,title:s,...n})};var r=c},8005:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return g},default:function(){return j}});var l=s(5893),n=s(7294),a=s(6626),i=s(535),c=s(5116),r=s(1360),o=s(5675),d=s.n(o),m=s(1664),x=s.n(m);s(1082);var h=s(2296);let u=e=>{let{title:t,children:s,index:n,activeIndex:a,setActiveIndex:i}=e,c=e=>a!==e&&i(e);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{onClick:()=>c(n),className:"flex w-full justify-between p-2 cursor-pointer",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)("div",{className:"text-dark font-bold text-xl",children:t})}),(0,l.jsx)("div",{className:"flex items-center justify-center",children:a===n?(0,l.jsx)(d(),{src:"/images/VectorUp.svg",width:16,height:16,alt:"btn-icon"}):(0,l.jsx)(d(),{src:"/images/VectorDown.svg",width:16,height:16,alt:"btn-icon"})})]}),a===n&&(0,l.jsx)("div",{className:" text-left shadow-3xl rounded-2xl p-2 text-primary",children:s})]})},p=e=>{let{activeIndex:t,setActiveIndex:s,title:n,index:a,content:i}=e;return(0,l.jsx)("div",{className:"flex flex-col justify-center items-center",children:(0,l.jsx)(u,{title:n,index:a,activeIndex:t,setActiveIndex:s,children:i})})},f=e=>{let{frontmatter:t}=e,{banner:s,feature:o,solution:m,call_to_action:u}=t,{title:f}=a.lz,[g,j]=(0,n.useState)(1);return(0,l.jsxs)(i.Z,{title:f,children:[(0,l.jsx)("section",{className:"section pb-[50px]",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row text-center mb-8",children:(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,l.jsxs)("div",{className:"text-left lg:w-[48%]",children:[(0,l.jsx)("h1",{className:"font-primary",children:s.title}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"mt-4 text-lg md:w-10/12",children:(0,r.gI)(s.content)}),(0,l.jsx)("br",{}),s.button.enable&&(0,l.jsx)(x(),{className:"btn btn-seccondary z-0 py-[14px]",href:s.button.link,rel:s.button.rel,children:s.button.label})]})]}),(0,l.jsx)(d(),{className:"mx-auto mt-12 lg:w-[52%]",src:s.image,width:750,height:390,alt:"banner image",priority:!0})]})}),(0,l.jsx)(h.Z,{id:"RAmIaHGoaYU",title:"Starlink Mission"})]})}),(0,l.jsxs)("section",{className:"section",children:[(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"text-center relative w-fit mx-auto",children:[(0,l.jsx)("h2",{className:"text-4xl",children:(0,r.gI)(o.title)}),(0,l.jsx)("p",{className:"mt-3 text-primary lg:w-[70%] mx-auto",children:o.subTitle})]}),(0,l.jsx)("div",{className:"mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-1 lg:grid-cols-3",children:o.features.map((e,t)=>(0,l.jsxs)("div",{className:"feature-card rounded-xl bg-white p-4 pt-0 border-solid border-2",children:[e.icon&&(0,l.jsx)(d(),{className:"mx-auto",src:e.icon,width:30,height:30,alt:""}),(0,l.jsxs)("div",{className:"mt-4 text-left",children:[(0,r.gI)(e.name,"h3","h5"),(0,l.jsx)("p",{className:"mt-3",children:e.content})]})]},"feature-".concat(t)))})]}),(0,l.jsx)("div",{className:"container py-8",children:(0,l.jsx)("div",{className:"grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4",children:o.darkCards.map((e,t)=>(0,l.jsx)("div",{className:"feature-card rounded-xl bg-[#6A7481] p-4 pt-0",children:(0,l.jsxs)("div",{className:"mt-4 text-left text-[white]",children:[(0,l.jsx)("div",{className:"text-3xl",children:e.title}),(0,l.jsx)("div",{className:"my-4",children:e.subTitle}),(0,l.jsx)(x(),{className:"btn btn-seccondary z-0 px-2 py-3",href:e.href,children:(0,l.jsxs)("div",{className:"flex flex-row relative pr-6",children:[e.buttonText,(0,l.jsx)(d(),{className:"absolute top-[-2px] right-0",src:"/images/btn-icon.png",width:14,height:16,alt:"btn-icon"})]})})]})},"card-".concat(t)))})})]}),(0,l.jsx)("section",{className:"section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row text-center",children:(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,l.jsx)(d(),{className:"mx-auto mt-12 lg:w-3/5",src:s.image,width:750,height:390,alt:"banner image",priority:!0}),(0,l.jsx)("div",{className:"lg:w-2/5",children:m.solutions.map((e,t)=>(0,l.jsx)(p,{activeIndex:g,setActiveIndex:j,title:e.title,content:e.content,index:t+1},t))})]})})})}),(0,l.jsx)(c.Z,{cta:u})]})};var g=!0,j=f},5243:function(){},1082:function(){}},function(e){e.O(0,[260,127,535,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);