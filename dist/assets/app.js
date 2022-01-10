(()=>{var e,t={496:(e,t,o)=>{"use strict";o(875),o(818),o(742),o(563);var r=o(638);r((function(){r("form").parsley()}));o(736),o(152),o(823)},152:(e,t,o)=>{var r=o(638);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-burger]");if(e){var t=document.querySelector("[data-burger-open]"),o=document.querySelector("[data-burger-close]"),s=e.classList.contains("burger--open");t.addEventListener("click",(function(){console.log(e,s),s||(e.classList.add("burger--open"),setTimeout((function(){s=!0})))})),o.addEventListener("click",(function(){s&&(e.classList.remove("burger--open"),setTimeout((function(){s=!1})))})),window.addEventListener("click",(function(t){s&&(t.target.closest(".burger__scroll")||r(".modal").hasClass("modal--active")||(e.classList.remove("burger--open"),setTimeout((function(){s=!1}))))}))}}))},875:()=>{window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".choice").forEach((function(e){var t=e.classList.contains("choice--open"),o=e.querySelector(".choice__panel"),r=e.querySelector(".choice__drop"),s=e.querySelector(".choice__drop-content");o.addEventListener("click",(function(){e.classList.toggle("choice--open");var o=t?0:s.getBoundingClientRect().height;r.style.height="".concat(o,"px"),t=!t})),window.addEventListener("resize",(function(){if(t){var e=s.getBoundingClientRect().height;r.style.height="".concat(e,"px"),console.log("".concat(e,"px"))}}))}))}))},818:()=>{window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header"),t=scrollY;window.addEventListener("scroll",(function(){var o=scrollY;console.log(t,o),o>=1&&(o>t?e.classList.add("header--hide"):e.classList.remove("header--hide")),o>=1?e.classList.contains("header--scroll")||e.classList.add("header--scroll"):(e.classList.contains("header--scroll")&&e.classList.remove("header--scroll"),e.classList.contains("header--hide")&&e.classList.remove("header--hide")),t=o}))}))},823:(e,t,o)=>{var r=o(638);r((function(){r(window).on("click",(function(e){r(".modal").hasClass("modal--active")&&!r(e.target).closest(".modal__popup").length&&(r(document.body).css("overflow",""),r(".modal").removeClass("modal--active"))})),r("[data-modal-open]").on("click",(function(){r(".modal").hasClass("modal--active")||setTimeout((function(){r(document.body).css("overflow","hidden"),r(".modal").addClass("modal--active")}))})),r("[data-modal-close]").on("click",(function(){r(".modal").hasClass("modal--active")&&setTimeout((function(){r(document.body).css("overflow",""),r(".modal").removeClass("modal--active")}))})),r("[data-modal-response]").on("click",(function(e){setTimeout((function(){r(".modal form .parsley-error").length||r(".modal").addClass("modal--response")}))}))}))},742:()=>{window.addEventListener("load",(function(){setTimeout((function(){document.documentElement.style.scrollBehavior="smooth"}),1e3)}))},736:()=>{window.addEventListener("DOMContentLoaded",(function(){if(document.querySelector("[data-slider]")){var e=function(e){if(s&&e!==i){s=!1,setTimeout((function(){s=!0}),1e3),r.classList.remove(t);var o=document.querySelectorAll(".slider__year")[e];o.classList.add("slider__year--active"),r=o;var n=document.querySelector(".slider__image-item--active"),c=n.querySelector(".slider__img"),l=document.querySelectorAll(".slider__image-item")[e],a=l.querySelector(".slider__img");n.style.left=0,n.style.right="auto",c.style.left=0,c.style.right="auto",l.style.right=0,l.style.left="auto",a.style.right=0,a.style.left="auto",setTimeout((function(){n.classList.remove("slider__image-item--active"),l.classList.add("slider__image-item--active")})),document.querySelectorAll(".slider__texts").forEach((function(t){var o=t.querySelector(".slider__text--active"),r=t.querySelectorAll(".slider__text")[e];o.classList.add("slider__text--out"),o.classList.remove("slider__text--in"),o.classList.remove("slider__text--pre-in"),o.classList.remove("slider__text--active"),r.classList.remove("slider__text--out"),r.classList.add("slider__text--pre-in"),r.classList.add("slider__text--in"),r.classList.add("slider__text--active")})),i=e}},t="slider__year--active",o=document.querySelectorAll("[data-slider-year]"),r=document.querySelector(".".concat(t)),s=!0,i=0;o.forEach((function(o,i){o.addEventListener("click",(function(){s&&(r.classList.remove(t),o.classList.add("slider__year--active"),r=o,e(i))}))}));var n=document.querySelector("[data-slider-prev]"),c=document.querySelector("[data-slider-next]");n.addEventListener("click",(function(){var t=i-1;t<0&&(t=0),e(t)})),c.addEventListener("click",(function(){var t=i+1,o=document.querySelectorAll(".slider__year");t>=o.length&&(t=o.length-1),e(t)}))}}))}},o={};function r(e){var s=o[e];if(void 0!==s)return s.exports;var i=o[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,s,i)=>{if(!o){var n=1/0;for(d=0;d<e.length;d++){for(var[o,s,i]=e[d],c=!0,l=0;l<o.length;l++)(!1&i||n>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(c=!1,i<n&&(n=i));if(c){e.splice(d--,1);var a=s();void 0!==a&&(t=a)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,s,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var s,i,[n,c,l]=o,a=0;if(n.some((t=>0!==e[t]))){for(s in c)r.o(c,s)&&(r.m[s]=c[s]);if(l)var d=l(r)}for(t&&t(o);a<n.length;a++)i=n[a],r.o(e,i)&&e[i]&&e[i][0](),e[n[a]]=0;return r.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=r.O(void 0,[563,532],(()=>r(496)));s=r.O(s)})();