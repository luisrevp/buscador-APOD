(this["webpackJsonpapod-searcher-gallery"]=this["webpackJsonpapod-searcher-gallery"]||[]).push([[0],{20:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(21),s=n.n(a),i=n(11),o=n(3),l=n(10),j=n(16),h=n.n(j),u=n(22),b=n(5),d=n(1),O=function(e){var t=e.search,n=e.setSearch,r=e.setFilterSearch,a=e.dateStart,s=e.setDateStart,i=e.dateEnd,o=e.setDateEnd,l=e.setQuery,j=Object(c.useState)(window.innerWidth),h=Object(b.a)(j,2),u=h[0],O=h[1];Object(c.useEffect)((function(){return window.addEventListener("resize",(function(){return O(window.innerWidth)})),function(){window.removeEventListener("resize",(function(){return O(window.innerWidth)}))}}));var x=new Date,p=x.getFullYear(),f=x.getMonth()<10?"0"+(x.getMonth()+1):x.getMonth()+1,g=x.getDate()<10?"0"+x.getDate():x.getDate(),v="".concat(p,"-").concat(f,"-").concat(g);return Object(d.jsxs)("div",{className:"page-result",children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsxs)("div",{className:"bar",children:[Object(d.jsx)("input",{type:"text",placeholder:"What do you want to look for?",value:t,onKeyDown:function(e){"Enter"==e.key&&r(e)},onChange:function(e){n(e.target.value),r(!1)}}),u>460&&Object(d.jsx)("button",{type:"submit",id:"search-btn",onClick:function(e){return r(!0)},children:"Search"})]}),u<=460&&Object(d.jsx)("div",{id:"search-btn-container",children:Object(d.jsx)("button",{id:"search-btn",onClick:function(e){return r(!0)},children:"Search"})}),Object(d.jsxs)("select",{name:"select",label:"Filtrar por:",onChange:function(e){return l(e.target.value)},children:[Object(d.jsx)("option",{value:"title",children:"Order by: Title"}),Object(d.jsx)("option",{value:"author",children:"Order by: Author"}),Object(d.jsx)("option",{value:"date",children:"Order by: Date"})]})]}),Object(d.jsxs)("div",{className:"dates",children:[Object(d.jsxs)("div",{className:"date1",children:[Object(d.jsx)("label",{htmlFor:"desde",children:"From:"}),Object(d.jsx)("input",{type:"date",id:"desde",value:a,max:v,onChange:function(e){s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"date2",children:[Object(d.jsx)("label",{htmlFor:"hasta",children:"To:"}),Object(d.jsx)("input",{type:"date",id:"hasta",value:i,max:v,onChange:function(e){o(e.target.value)}})]})]})]})},x=n(13),p=function(e){var t=e.filterSearch,n=e.busqueda,r=Object(c.useState)({}),a=Object(b.a)(r,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){var e=t?"Search: ".concat(n.length," results"):"APOD Searcher";return document.title=e}),[t,n]),Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)("h1",{children:n.length>0&&t&&"Search result: ".concat(n.length)}),0===n.length&&t?Object(d.jsx)("h3",{children:"There are no results..."}):t&&n.map((function(e){var t=e.date,n=e.explanation,c=e.url,r=e.copyright,a=e.title,o=e.id;return Object(d.jsxs)("div",{className:"nasa-wrap",children:[Object(d.jsx)("h1",{children:a}),Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:c})}),Object(d.jsxs)("h4",{children:["Date: ",t]}),Object(d.jsxs)("h3",{children:["Author: ",r||"Unknown"]}),Object(d.jsx)("p",{children:s[o]?n:n.substring(0,120)+"..."}),Object(d.jsx)("button",{onClick:function(){return function(e){return i(Object(l.a)(Object(l.a)({},s),{},Object(x.a)({},e,!s[e])))}(o)},children:s[o]?"Read less":"Read more"})]},o)}))]})},f=(n(20),function(){return Object(d.jsxs)("div",{className:"loading-page",children:[Object(d.jsx)("h2",{children:"Loading..."}),Object(d.jsx)("p",{children:"This may take a few seconds"})]})}),g=function(){return Object(d.jsxs)("div",{className:"errorPage",children:[Object(d.jsx)("h1",{children:"Error..."}),Object(d.jsx)("h2",{children:"We couldn't complete your request"})]})};var v=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),s=Object(b.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(!1),x=Object(b.a)(j,2),v=x[0],m=x[1],w=Object(c.useState)(!1),y=Object(b.a)(w,2),k=y[0],S=y[1],N=Object(c.useState)(""),D=Object(b.a)(N,2),A=D[0],E=D[1],P=Object(c.useState)("title"),C=Object(b.a)(P,2),F=C[0],L=C[1],M=new Date,T=M.getFullYear(),W=M.getMonth()<10?"0"+(M.getMonth()+1):M.getMonth()+1,I=M.getDate()<10?"0"+M.getDate():M.getDate(),R=Object(c.useState)("".concat(T,"-").concat(W,"-").concat(I)),z=Object(b.a)(R,2),_=z[0],q=z[1],G=Object(c.useState)("".concat(T,"-").concat(W,"-").concat(I)),U=Object(b.a)(G,2),Y=U[0],B=U[1],J="https://api.nasa.gov/planetary/apod?api_key=Zxyg2mojmh8nUrjnsZ84dnI2DUUPv6lo45md3IRp"+"&start_date=".concat(_)+"&end_date=".concat(Y);Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!((n=e.sent).ok&&n.status>=200&&n.status<=299)){e.next=11;break}return e.next=6,n.json();case 6:c=e.sent,r(c),o(!1),e.next=14;break;case 11:console.log("Error ".concat(n.status,": ").concat(n.statusText)),o(!1),m(!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(J)}),[k]);var Q=1,Z=n.filter((function(e){var t=e.explanation,n=e.title,c=e.copyright,r=A.split(" ").join("|"),a=new RegExp(r,"gi");return a.test(t)||a.test(n)||a.test(c)})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:Q++})}));switch(F){case"date":Z.sort((function(e,t){var n=new Date(e.date);return new Date(t.date)-n}));break;case"author":Z.sort((function(e,t){return e.copyright>t.copyright?1:-1}));break;case"title":Z.sort((function(e,t){return e.title[0]>t.title[0]?1:-1}))}return i?Object(d.jsx)(f,{}):v?(document.title="error...",Object(d.jsx)(g,{})):Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{children:"APOD searcher (Astronomy Picture of the Day)"}),Object(d.jsxs)("div",{className:"page-result",children:[Object(d.jsx)(O,{search:A,setSearch:E,setFilterSearch:S,dateStart:_,dateEnd:Y,setDateStart:q,setDateEnd:B,setQuery:L}),Object(d.jsx)(p,{busqueda:Z,filterSearch:k})]})]})},m=(n(31),function(){return document.title="Acerca de la p\xe1g.",Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"about-page",children:Object(d.jsx)("div",{className:"about-wrap",children:Object(d.jsxs)("div",{className:"about-content",children:[Object(d.jsx)("h1",{children:"About this page"}),Object(d.jsxs)("p",{children:["This is a simple project consisting of an APOD searcher (acronymn for",Object(d.jsx)("br",{}),'"',Object(d.jsx)("span",{children:"Astronomy Picture of the Day"}),'") from NASA, in which we can find',Object(d.jsx)("br",{}),"information about the pictures through a search bar, with",Object(d.jsx)("br",{}),"capabilities for sorting and assign a range of dates."]}),Object(d.jsxs)("p",{children:["You can explore the API from"," ",Object(d.jsx)("a",{href:"https://api.nasa.gov/",target:"_blank",children:"here"}),". In order to do so, you need to register",Object(d.jsx)("br",{}),"and generate an API key in which you'll have access to all the links.",Object(d.jsx)("br",{})]}),Object(d.jsxs)("p",{children:["All Querying instructions are available on their page. the request limit",Object(d.jsx)("br",{}),"per user are 1000 per hour."]})]})})})})}),w=(n(32),n(24)),y=(n(33),function(e){var t=e.background,n=e.size,r=Object(c.useState)(!1),a=Object(b.a)(r,2),s=a[0],o=a[1],l=Object(c.useRef)();var j=Object(d.jsx)(w.a,{onClick:function(){return s||o(!0),void(s&&(document.querySelector(".ul-container-responsive").className="cerrar",setTimeout((function(){o(!1)}),300)))},className:"burger-button",style:{color:t?"black":"white",alignSelf:"flex-end",display:s&&"block"}}),h=Object(d.jsx)("div",{className:"ul-wrap",style:{background:n>=900&&"none",height:s&&n<900&&"100vh"},onClick:function(e){return function(e){return e.target!==e.currentTarget?void 0:o(!s)}(e)},children:Object(d.jsxs)("ul",{className:n<900?"ul-container-responsive":"ul-container",ref:l,children:[n<900&&s&&Object(d.jsx)("li",{id:"resp-button",children:j}),Object(d.jsx)("li",{className:"links",onClick:function(){return o(!s)},children:Object(d.jsx)(i.b,{to:"/APOD-Searcher-Gallery",style:{color:t?"#000":"#fff"},children:"Searcher"})}),Object(d.jsx)("li",{className:"links",onClick:function(){return o(!s)},children:Object(d.jsx)(i.b,{to:"/About",style:{color:t?"#000":"#fff"},children:"About"})}),Object(d.jsx)("li",{className:"links",onClick:function(){return o(!s)},children:Object(d.jsx)("a",{href:"https://luisrevp.github.io/Personal-webpage/",children:"Personal webpage"})})]})});return n>=900&&s&&o(!1),Object(d.jsxs)("div",{className:"link-wrap",children:[n<900&&!s?j:"",(n>=900||s)&&h]})}),k=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(window.innerWidth),s=Object(b.a)(a,2),o=s[0],l=s[1];function j(){return l(window.innerWidth)}function h(){return window.scrollY>=80?r(!0):r(!1)}return Object(c.useEffect)((function(){return window.addEventListener("resize",j),window.addEventListener("scroll",h),function(){window.removeEventListener("resize",j),window.removeEventListener("scroll",h)}}),[]),Object(d.jsxs)("nav",{className:n?"navBar backgroundOn":"navBar backgroundOff",children:[Object(d.jsx)(i.b,{to:"/APOD-Searcher-Gallery",id:"logo",children:"NASA Searcher"}),Object(d.jsx)(y,{background:n,size:o})]})},S=n(19),N=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"footer-wrap",children:[Object(d.jsxs)("h1",{children:["Site created by Luis Revilla",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"this is a project made in React.JS"]}),Object(d.jsxs)("div",{className:"proyectos",children:[Object(d.jsx)("h1",{children:"Other projects:"}),Object(d.jsx)("a",{href:"https://luisrevp.github.io/Personal-webpage/",children:"Personal Webpage"}),Object(d.jsx)("a",{href:"https://luisrevp.github.io/Sushi-restaurant/",children:"Sushi restaurant"}),Object(d.jsx)("a",{href:"https://luisrevp.github.io/Chrome-clock-extension/reloj.html",children:"Chrome extension"})]}),Object(d.jsxs)("div",{className:"redes-sociales",children:[Object(d.jsx)("h1",{children:"My social networks"}),Object(d.jsxs)("div",{className:"red linkedin",children:[Object(d.jsx)("h2",{children:"LinkedIn"}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/luis-revilla/",target:"_blank",children:Object(d.jsx)(S.b,{})})]}),Object(d.jsxs)("div",{className:"red github",children:[Object(d.jsx)("h2",{children:"GitHub"}),Object(d.jsx)("a",{href:"https://github.com/luisrevp",target:"_blank",children:Object(d.jsx)(S.a,{})})]})]})]})})};var D=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(k,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/APOD-Searcher-Gallery",component:v,exact:!0}),Object(d.jsx)(o.a,{path:"/About",component:m}),Object(d.jsx)(o.a,{path:"*",component:g})]}),Object(d.jsx)(N,{})]})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.539014fe.chunk.js.map