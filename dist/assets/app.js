(()=>{var e,t={7262:(e,t,n)=>{"use strict";n(6371),n(9875),n(5818),n(4563);var a=n(5638);a((function(){a("form").parsley()}));n(3736),n(8152);var i=function(e,t){return dispatchEvent(new CustomEvent(e,{detail:t}))},o=n(5638);o((function(){var e=o(".modal");function t(e){e.preventDefault()}e.length&&(o(window).on("click",(function(n){var a=!!o(n.target).closest(".modal__popup").length,i=!!o(n.target).closest("[data-modal-open]").length,s=!!o(n.target).closest("[data-modal-close]").length,r=e.hasClass("modal--active"),c=e.hasClass("modal--question"),d=e.hasClass("modal--subscribe");r?!s&&a||(e.removeClass("modal--active"),window.removeEventListener("wheel",t,{passive:!1}),matchMedia("(max-width: 1279px)").matches&&document.body.classList.remove("body--modal--open"),c&&e.removeClass("modal--question"),d&&e.removeClass("modal--subscribe")):i&&(e.addClass("modal--active"),window.addEventListener("wheel",t,{passive:!1}),matchMedia("(max-width: 1279px)").matches&&document.body.classList.add("body--modal--open"))})),["question","subscribe"].forEach((function(t){return n="".concat(t,"-success"),a=function(){var n=o("[data-success-action=".concat(t,"-success]"));n.parsley().reset(),n[0].reset(),e.addClass(["modal--active","modal--".concat(t)])},window.addEventListener(n,(function(e){var t=e.detail;return a(t)}));var n,a})))}));var s=n(5638);s((function(){function e(e,t,n){var a=e.find("[type=checkbox]"),i=0;a.each((function(){var e=s(this);i+=+e.is(":checked")})),0===i?setTimeout((function(){e.addClass("checkboxes--error")})):setTimeout((function(){e.removeClass("checkboxes--error")}))}s("form").each((function(){var t=s(this),n=t.find(".checkboxes"),a=n.find("[type=checkbox]");n.length&&(t.parsley().on("form:validate",(function(){return e(n)})),a.on("change",(function(){return e(n)})))})),s("form").on("submit",(function(e){var t=this;e.preventDefault(),setTimeout((function(){var e=s(t).data("url"),n=s(t).data("success-status"),a=s(t).data("success-action"),o=s(t).serialize(),r=s(t)[0].hasAttribute("data-form-test"),c=s(t).find(".checkboxes");if(!c.length||!c.hasClass("checkboxes--error"))try{r&&setTimeout((function(){a&&i(a)}),1e3),s.post(e,o,(function(e){e.status===n&&a&&i(a)}))}catch(e){console.error("form",t,e)}}))}))}));n(8029),n(8849);var r=n(220),c=n.n(r),d=n(5638),l=c()(.33,1,.68,1);d((function(){var e=d(".word");e.length&&e.each((function(){var e=d(this);setTimeout((function(){var t;(t=e.find(".word__letter")).css("transition-duration","".concat(750,"ms")),setTimeout((function(){var e=performance.now(),n=t.length,a=1/n;requestAnimationFrame((function i(){for(var o=performance.now(),s=l((o-e)/750),r=Math.floor(s/a)+1,c=0;c<r&&c<n;c++)t[c].classList.add("word__letter--active");s<1&&requestAnimationFrame(i)}))}))}),0)}))}));var u=n(5566),m=n.n(u);window.addEventListener("load",(function(){m().init({once:!0,offset:0,duration:500})}))},8152:(e,t,n)=>{var a=n(5638);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-burger]");if(e){var t=document.querySelector("[data-burger-open]"),n=document.querySelector("[data-burger-close]"),i=e.classList.contains("burger--open");t.addEventListener("click",(function(){i||(e.classList.add("burger--open"),matchMedia("(max-width: 1279px)").matches&&document.body.classList.add("body--burger--open"),setTimeout((function(){i=!0})))})),n.addEventListener("click",(function(){i&&(e.classList.remove("burger--open"),matchMedia("(max-width: 1279px)").matches&&document.body.classList.remove("body--burger--open"),setTimeout((function(){i=!1})))})),window.addEventListener("click",(function(t){i&&(t.target.closest(".burger__scroll")||a(".modal").hasClass("modal--active")||(e.classList.remove("burger--open"),matchMedia("(max-width: 1279px)").matches&&document.body.classList.remove("body--burger--open"),setTimeout((function(){i=!1}))))}))}}))},8029:(e,t,n)=>{var a=n(5638);a((function(){a(".checkboxes").each((function(){var e=a(this);e.find("[type=checkbox]").each((function(){a(this).parsley().on("field:validated",(function(){e.find(".parsley-error").length?e.addClass("checkboxes--error"):e.removeClass("checkboxes--error")}))}))}))}))},9875:()=>{window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".choice").forEach((function(e){var t=e.classList.contains("choice--open"),n=e.querySelector(".choice__panel"),a=e.querySelector(".choice__drop"),i=e.querySelector(".choice__drop-content");n.addEventListener("click",(function(){e.classList.toggle("choice--open");var n=t?0:i.getBoundingClientRect().height;a.style.height="".concat(n,"px"),t=!t})),window.addEventListener("resize",(function(){if(t){var e=i.getBoundingClientRect().height;a.style.height="".concat(e,"px")}}))}))}))},5818:()=>{window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header");if(e){setTimeout((function(){scrollY>=1&&e.classList.add("header--scroll"),e.classList.remove("header--hide")}),500);var t=scrollY,n=0;window.addEventListener("scroll",(function(){if(n>=2){var a=scrollY;a<t?(e.classList.contains("header--hide")&&e.classList.remove("header--hide"),a>=1&&(e.classList.contains("header--scroll")||e.classList.add("header--scroll")),a<1&&e.classList.contains("header--scroll")&&e.classList.remove("header--scroll")):a>=1&&(e.classList.contains("header--hide")||e.classList.add("header--hide")),t=a}n++}))}}))},8849:()=>{window.addEventListener("DOMContentLoaded",(function(){document.body.classList.remove("no-transition")}))},3736:()=>{var e="slider__year--active";window.addEventListener("DOMContentLoaded",(function(){if(document.querySelector("[data-slider]")){var t=document.querySelectorAll("[data-slider-year]"),n=document.querySelector("[data-slider-prev]"),a=document.querySelector("[data-slider-next]"),i=document.querySelectorAll(".slider__texts"),o={index:0,isChangedAfterLastAnimate:!1,isAnimate:!1,lastAnimateIndex:null},s=function(e){!function(e){var t=document.querySelector(".slider__image-item--active"),n=t.querySelector(".slider__img"),a=document.querySelectorAll(".slider__image-item")[e],i=a.querySelector(".slider__img");t.style.left=0,t.style.right="auto",n.style.left=0,n.style.right="auto",a.style.right=0,a.style.left="auto",i.style.right=0,i.style.left="auto",setTimeout((function(){t.classList.remove("slider__image-item--active"),a.classList.add("slider__image-item--active")}))}(e),function(e){i.forEach((function(t){var n=t.querySelectorAll(".slider__text");n.forEach((function(e){e.classList.remove("slider__text--in"),e.classList.remove("slider__text--out")}));var a=t.querySelector(".slider__text--active"),i=n[e];a.classList.remove("slider__text--active"),i.classList.add("slider__text--active"),a.classList.add("slider__text--out"),i.classList.add("slider__text--in")}))}(e)},r=function n(){var a,i,r;a=o.index,i=document.querySelector(".".concat(e)),r=t[a],i.classList.remove(e),r.classList.add(e),o.isAnimate||o.isChangedAfterLastAnimate&&(o.index!==o.lastAnimateIndex&&(console.log(o.index),o.isAnimate=!0,o.lastAnimateIndex=o.index,s(o.index),setTimeout((function(){o.isAnimate=!1,n()}),1e3)),o.isChangedAfterLastAnimate=!1)};t.forEach((function(e,t){e.addEventListener("click",(function(){var e=t;e!==o.index&&(o.index=e,o.isChangedAfterLastAnimate=!0,r())}))})),n.addEventListener("click",(function(){var e=o.index-1<0?0:o.index-1;e!==o.index&&(o.index=e,o.isChangedAfterLastAnimate=!0,r())})),a.addEventListener("click",(function(){var e=o.index+1>=t.length?t.length-1:o.index+1;e!==o.index&&(o.index=e,o.isChangedAfterLastAnimate=!0,r())}))}}))}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,n,i,o)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,i,o]=e[l],r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(r=!1,o<s&&(s=o));if(r){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[s,r,c]=n,d=0;if(s.some((t=>0!==e[t]))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var l=c(a)}for(t&&t(n);d<s.length;d++)o=s[d],a.o(e,o)&&e[o]&&e[o][0](),e[s[d]]=0;return a.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=a.O(void 0,[721,532],(()=>a(7262)));i=a.O(i)})();