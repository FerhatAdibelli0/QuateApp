(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5,7],{40:function(e,t,c){"use strict";c.r(t);var n=c(1);t.default=function(){return Object(n.jsx)("p",{className:"centered",children:"Not Found Page..."})}},50:function(e,t,c){e.exports={item:"QuoteItem_item__29tyU"}},51:function(e,t,c){e.exports={list:"QuoteList_list__3LZg0",sorting:"QuoteList_sorting__1yDdH"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(50),i=c.n(s),r=c(8),a=c(1),o=function(e){return Object(a.jsxs)("li",{className:i.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(r.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(51),u=c.n(d),j=c(2),l=function(e){var t,c,s=Object(j.h)(),i=Object(j.i)(),r="asc"===new URLSearchParams(i.search).get("sort"),d=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)("div",{className:u.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){s.push({pathname:i.pathname,search:"?sort=".concat(r?"des":"asc")})},children:["Sort",r?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:u.a.list,children:d.map((function(e){return Object(a.jsx)(o,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=c(14),b=c(35),x=c(36),O=c(40);t.default=function(){var e=Object(b.a)(x.d,!0),t=e.sendRequest,c=e.status,s=e.data,i=e.error;return Object(n.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(h.a,{})}):"completed"===c&&0===s.length?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(O.default,{})}):"completed"===c&&i?Object(a.jsx)("div",{className:"centered",children:"Something went wrong"}):Object(a.jsx)("div",{children:Object(a.jsx)(l,{quotes:s})})}}}]);
//# sourceMappingURL=5.22faa863.chunk.js.map