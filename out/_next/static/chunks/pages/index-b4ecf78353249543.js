(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8005)}])},5116:function(e,t,s){"use strict";var l=s(5893),a=s(1360),n=s(1664),i=s.n(n);t.Z=function(e){let{cta:t}=e,{content:s,title:n}=t;return(0,l.jsx)("section",{className:"section",children:(0,l.jsx)("div",{className:"section container rounded-xl shadow bg-theme-light",children:(0,l.jsx)("div",{className:"row mx-auto items-center justify-center",children:(0,l.jsxs)("div",{className:"text-center max-w-xl",children:[(0,l.jsx)("h2",{className:"text-4xl text-white",children:n}),s&&(0,l.jsx)("p",{className:"mt-4 text-white",children:(0,a.gI)(s)}),t.button.enable&&(0,l.jsx)(i(),{className:"btn btn-primary z-0 py-[14px] mt-4",href:t.button.link,children:t.button.label})]})})})})}},2296:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var l=s(5893),a=s(7294),n=function(){return(n=Object.assign||function(e){for(var t,s=1,l=arguments.length;s<l;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e){var t=a.useState(!1),s=t[0],l=t[1],i=a.useState(!1),r=i[0],c=i[1],o=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,x=e.poster||"hqdefault",h="&"+e.params,u=e.muted?"&mute=1":"",p=e.announce||"Watch",f=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",j=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+g+"/"+d+"/"+x+"."+f:"https://i.ytimg.com/"+g+"/"+o+"/"+x+"."+f),b=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var w=e.playlist?b+"/embed/videoseries?autoplay=1"+u+"&list="+o+h:b+"/embed/"+o+"?autoplay=1&state=1"+u+h,N=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,y=e.aspectHeight||9,k=e.aspectWidth||16,E=e.iframeClass||"",I=e.playerClass||"lty-playbtn",_=e.wrapperClass||"yt-lite",C=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload";return a.useEffect(function(){r&&C()},[r]),a.createElement(a.Fragment,null,a.createElement("link",{rel:S,href:j,as:"image"}),a.createElement(a.Fragment,null,s&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:b}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){s||l(!0)},onClick:function(){r||c(!0)},className:_+" "+(r?N:""),"data-title":m,style:n({backgroundImage:"url("+j+")"},{"--aspect-ratio":y/k*100+"%"})},a.createElement("button",{type:"button",className:I,"aria-label":p+" "+m}),r&&a.createElement("iframe",{className:E,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:w})))}s(5243);let r=e=>{let{id:t,title:s,...a}=e;return(0,l.jsx)(i,{id:t,title:s,...a})};var c=r},8005:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return g},default:function(){return j}});var l=s(5893),a=s(7294),n=s(6626),i=s(535),r=s(5116),c=s(1360),o=s(5675),d=s.n(o),m=s(1664),x=s.n(m);s(1082);var h=s(2296);let u=e=>{let{title:t,children:s,index:a,activeIndex:n,setActiveIndex:i}=e,r=e=>n!==e&&i(e);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{onClick:()=>r(a),className:"flex w-full justify-between p-4 cursor-pointer",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)("div",{className:"font-medium text-xl transition-all ".concat(n===a?"text-theme-light":"text-primary"),children:t})}),(0,l.jsx)("div",{className:"flex items-center justify-center transition-transform duration-200 ease-in-out ".concat(n===a&&"rotate-[-180deg]"),children:(0,l.jsx)(d(),{src:"/images/VectorDown.svg",width:16,height:16,alt:"btn-icon"})})]}),(0,l.jsx)("div",{className:"h-0 text-left shadow-3xl rounded-2xl text-primary leading-6 ".concat(n===a&&"h-28 px-4"," overflow-hidden transition-all"),children:s})]})},p=e=>{let{activeIndex:t,setActiveIndex:s,title:a,index:n,content:i}=e;return(0,l.jsx)("div",{className:"mt-2 transition-all rounded-xl flex flex-col justify-center items-center border-solid border",children:(0,l.jsx)(u,{title:a,index:n,activeIndex:t,setActiveIndex:s,children:i})})},f=e=>{let{frontmatter:t}=e,{banner:s,feature:o,solution:m,call_to_action:u}=t,{title:f}=n.lz,[g,j]=(0,a.useState)(1);return(0,l.jsxs)(i.Z,{title:f,children:[(0,l.jsx)("section",{className:"section pb-[50px]",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row text-center mb-8 mt-5",children:(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,l.jsxs)("div",{className:"text-left lg:w-[45%] mt-6",children:[(0,l.jsxs)("h1",{className:"font-primary",children:[(0,l.jsxs)("span",{className:"font-primary text-theme-light",children:[s.highlight," "]}),s.title]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"tracking-wide mt-4 text-lg md:w-10/12",children:(0,c.gI)(s.content)}),(0,l.jsx)("br",{}),s.button.enable&&(0,l.jsx)(x(),{className:"btn btn-seccondary z-0 py-[20px]",href:s.button.link,rel:s.button.rel,children:s.button.label})]})]}),(0,l.jsx)(d(),{className:"ml-auto lg:w-[52%]",src:s.image,width:750,height:390,alt:"banner image",priority:!0})]})}),(0,l.jsx)(h.Z,{id:"RAmIaHGoaYU",title:"Starlink Mission"})]})}),(0,l.jsxs)("section",{className:"section",children:[(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"text-center relative w-fit mx-auto",children:[(0,l.jsx)("h2",{className:"text-4xl",children:(0,c.gI)(o.title)}),(0,l.jsx)("p",{className:"mt-3 text-primary lg:w-[70%] mx-auto",children:o.subTitle})]}),(0,l.jsx)("div",{className:"mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-1 lg:grid-cols-3",children:o.features.map((e,t)=>(0,l.jsxs)("div",{className:"feature-card rounded-xl bg-white p-4 pt-0 border-solid border-2",children:[e.icon&&(0,l.jsx)(d(),{className:"mx-auto",src:e.icon,width:30,height:30,alt:""}),(0,l.jsxs)("div",{className:"mt-4 text-left",children:[(0,c.gI)(e.name,"h3","h5"),(0,l.jsx)("p",{className:"mt-3",children:e.content})]})]},"feature-".concat(t)))})]}),(0,l.jsx)("div",{className:"mt-8",children:(0,l.jsx)("div",{className:"container rounded-xl py-8 bg-theme-light/10",children:(0,l.jsx)("div",{className:"px-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4",children:o.darkCards.map((e,t)=>(0,l.jsx)("div",{className:"feature-card rounded-xl bg-white p-4 pt-0",children:(0,l.jsxs)("div",{className:"mt-4 text-left text-[black]",children:[(0,l.jsx)("div",{className:"text-3xl",children:e.title}),(0,l.jsx)("div",{className:"my-4",children:e.subTitle}),(0,l.jsx)(x(),{className:"btn btn-sub-primary z-0 px-2 py-3",href:e.href,children:(0,l.jsxs)("div",{className:"flex flex-row relative pr-4",children:[e.buttonText,(0,l.jsx)(d(),{className:"w-2 absolute top-[-2px] right-0 fill-black",src:"/images/btn-icon.png",width:14,height:16,alt:"btn-icon"})]})})]})},"card-".concat(t)))})})})]}),(0,l.jsx)("section",{className:"section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"text-center relative w-fit mx-auto",children:[(0,l.jsx)("h2",{className:"text-4xl",children:(0,c.gI)(m.title)}),(0,l.jsx)("p",{className:"mt-3 text-primary mx-auto",children:m.subTitle})]}),(0,l.jsx)("div",{className:"row mt-10 text-center",children:(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,l.jsx)("div",{className:"lg:w-[69%]",children:(0,l.jsx)(d(),{className:"w-10/12 transition-opacity",src:m.images[g-1],width:750,height:390,alt:"banner image",priority:!0})}),(0,l.jsx)("div",{className:"lg:w-[31%]",children:m.solutions.map((e,t)=>(0,l.jsx)(p,{activeIndex:g,setActiveIndex:j,title:e.title,content:e.content,index:t+1},t))})]})})]})}),(0,l.jsx)(r.Z,{cta:u})]})};var g=!0,j=f},5243:function(){},1082:function(){}},function(e){e.O(0,[193,535,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);