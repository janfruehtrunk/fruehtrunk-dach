(self.webpackChunkjfdach=self.webpackChunkjfdach||[]).push([[385],{4893:function(e,t,n){var r;e.exports=(r=n(7294),function(){"use strict";var e={297:function(e){e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};return function(){n.d(o,{default:function(){return u}});var e,t=n(297),r=n.n(t),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){return e>t?t:e<0?0:e}function u(n){var o=n.firstImage,u=n.secondImage,c=n.className,f=n.withResizeFeel,l=void 0===f||f,s=n.currentPercentPosition,d=n.onVisible,m=n.onReady,h=n.onChangePercentPosition,g=n.delimiterIconStyles,v=n.feelsOnlyTheDelimiter,p=void 0!==v&&v,E=n.delimiterColor,b=void 0===E?"#fff":E,w=["before-after-slider"];c&&w.push(c);var Z=(0,t.useRef)(null),x=(0,t.useState)(null),I=x[0],y=x[1],S=(0,t.useState)(s||50),O=S[0],T=S[1],L=(0,t.useState)(e.DEFAULT),U=L[0],D=L[1],M=function(e,n,r){var o=(0,t.useState)(!1),i=o[0],a=o[1],u=(0,t.useState)(0),c=u[0],f=u[1];return(0,t.useEffect)((function(){!i&&2===c&&e&&n.current&&a(!0)}),[c,e,i,n.current]),(0,t.useEffect)((function(){i&&r&&r()}),[i]),{onImageLoad:function(){f(c+1)},isReady:i}}(I,Z,m),_=M.onImageLoad,k=M.isReady,R=(0,t.useState)({top:0,left:0}),C=R[0],P=R[1],j=(0,t.useState)(d&&"undefined"!=typeof window&&Boolean(window.IntersectionObserver)?new IntersectionObserver((function(e){j&&d&&e.forEach((function(e){e.intersectionRatio>.95&&(j.disconnect(),d())}))}),{threshold:[0,.95]}):null)[0];(0,t.useEffect)((function(){if(j){if(!k)return;j.observe(Z.current)}}),[k]),(0,t.useEffect)((function(){s&&I&&T(a(s,I))}),[s,I]);var F=function(){if(Z.current){var e=Z.current.offsetWidth;y(e)}},N=function(){D(e.DEFAULT)};!function(e,n){(0,t.useEffect)((function(){return e(),document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[])}(F,N);var z=I?{width:I+"px"}:void 0,B={width:O+"%"},V=r().useMemo((function(){return i({backgroundColor:b},g||{})}),[b,g]),A=r().useMemo((function(){return{left:O+"%",backgroundColor:b}}),[O,b]),W=function(){!function(){if(Z.current){var e=Z.current.getBoundingClientRect();P({top:e.top+pageYOffset,left:e.left+pageXOffset})}}(),D(e.MOVE)},X=function(t){if(U===e.MOVE){if(!I)return;var n=a(t.pageX-C.left,I)/I*100;h?h(n):T(n)}};!function(e,n){(0,t.useEffect)((function(){return n&&window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])}(F,l);var q={onMouseDown:W,onTouchStart:W};return r().createElement("div",i({ref:Z,className:w.join(" "),onMouseMove:function(e){return X(e)},onTouchMove:function(e){X(e.touches[0])},onTouchEnd:N,onTouchCancel:N},p?{}:q),r().createElement("div",{className:"before-after-slider__first-photo-container"},r().createElement("img",{src:o.imageUrl,onLoad:function(){F(),_()},draggable:!1,alt:o.alt})),Boolean(I)&&r().createElement(r().Fragment,null,r().createElement("div",{className:"before-after-slider__second-photo-container",style:B},r().createElement("img",{style:z,src:u.imageUrl,onLoad:_,draggable:!1,alt:u.alt})),r().createElement("div",i({className:"before-after-slider__delimiter",style:A},p?q:{}),r().createElement("div",null,r().createElement("div",{className:"before-after-slider__delimiter-icon",style:V})))))}!function(e){e.MOVE="move",e.DEFAULT="default"}(e||(e={}))}(),o.default}())},7578:function(e,t,n){"use strict";n.r(t);var r=n(7462),o=n(7294),i=n(4893),a=n.n(i),u=n(1044),c=n(5444),f=n(4566),l=n(2502),s=(n(2802),n(3431)),d=function(e){return(0,s.tZ)(u.Flex,(0,r.Z)({},e,{mx:-3}))},m=function(e){return(0,s.tZ)(u.Box,(0,r.Z)({},e,{px:3,flex:"1 1 auto"}))};t.default=function(){return(0,s.tZ)(f.Z,null,(0,s.tZ)(l.Z,{title:"Referenzen"}),(0,s.tZ)(u.Text,{as:"h1"},"Referenzen"),(0,s.tZ)(c.StaticQuery,{query:"2258410154",render:function(e){return(0,s.tZ)(o.Fragment,null,(0,s.tZ)(d,{flexDirection:["column","row"]},(0,s.tZ)(m,{width:1},(0,s.tZ)(a(),{firstImage:{imageUrl:e.after1.childImageSharp.fluid.src},secondImage:{imageUrl:e.before1.childImageSharp.fluid.src}}),(0,s.tZ)(u.Text,{as:"p"},"Dachsanierung Wohnhaus"))),(0,s.tZ)(d,{flexDirection:["column","row"]},(0,s.tZ)(m,{width:1},(0,s.tZ)(a(),{firstImage:{imageUrl:e.after2.childImageSharp.fluid.src},secondImage:{imageUrl:e.before2.childImageSharp.fluid.src}}),(0,s.tZ)(u.Text,{as:"p"},"Neudeckung Kleingartenhaus"))),(0,s.tZ)(d,{flexDirection:["column","row"]},(0,s.tZ)(m,{width:1},(0,s.tZ)(a(),{firstImage:{imageUrl:e.after3.childImageSharp.fluid.src},secondImage:{imageUrl:e.before3.childImageSharp.fluid.src}}),(0,s.tZ)(u.Text,{as:"p"},"Dachsanierung Presshaus"))))}}))}}}]);
//# sourceMappingURL=component---src-pages-referenzen-js-851930a55de69e321ef9.js.map