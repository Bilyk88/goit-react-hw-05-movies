"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{687:function(n,e,t){t.d(e,{Hx:function(){return d},Mc:function(){return s},_k:function(){return c},uV:function(){return p},vw:function(){return o}});var r=t(861),a=t(757),i=t.n(a),u=t(294),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.value,n.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=cbd83a324a45eb9670270e190650b893"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=cbd83a324a45eb9670270e190650b893");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=cbd83a324a45eb9670270e190650b893"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=cbd83a324a45eb9670270e190650b893"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=cbd83a324a45eb9670270e190650b893"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},130:function(n,e,t){t.d(e,{O:function(){return u}});var r=t(689),a=t(87),i=t(184),u=function(n){var e=n.movies,t=(0,r.TH)();return(0,i.jsx)("ul",{children:e.map((function(n){var e=n.id,r=n.title,u=n.name;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:u||r})},e)}))})}},835:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r=t(861),a=t(439),i=t(757),u=t.n(i),o=t(687),c=t(130),s=t(579),p=t(791),d=t(168),f=t(924);var h,l,v,b,x=t.p+"static/media/search-icon.296d866adefa65a964d5c2a7b530bcf2.svg",m=f.ZP.form(h||(h=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 20px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=f.ZP.button(l||(l=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 32px;\n  border: 0;\n  background-image: url('","');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 1000;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"])),x),w=f.ZP.span(v||(v=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),k=f.ZP.input(b||(b=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: 1px solid lightgray;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=t(184),Z=function(n){var e=n.onSubmit,t=(0,p.useState)(""),r=(0,a.Z)(t,2),i=r[0],u=r[1];return(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e(i)},children:[(0,y.jsx)(k,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:i,onChange:function(n){u(n.target.value)}}),(0,y.jsx)(g,{type:"submit",children:(0,y.jsx)(w,{children:"Search"})})]})},j=t(218),_=t(87);function S(){var n=(0,p.useState)([]),e=(0,a.Z)(n,2),t=e[0],i=e[1],d=(0,p.useState)(!1),f=(0,a.Z)(d,2),h=f[0],l=f[1],v=(0,p.useState)(!1),b=(0,a.Z)(v,2)[1],x=(0,_.lr)(),m=(0,a.Z)(x,2),g=m[0],w=m[1],k=g.get("query");(0,p.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),b(!1),n.next=5,(0,o.vw)({value:k});case 5:e=n.sent,i(e),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),b(!0),j.ZP.error("Please, try again.");case 13:return n.prev=13,l(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}k&&function(){n.apply(this,arguments)}()}),[k]);return(0,y.jsxs)("div",{children:[(0,y.jsx)(Z,{onSubmit:function(n){w({query:n}),i([])}}),t.length>0&&(0,y.jsx)(c.O,{movies:t}),h&&(0,y.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=835.f9790b9d.chunk.js.map