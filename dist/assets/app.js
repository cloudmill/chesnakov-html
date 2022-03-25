(()=>{var e,t={7262:(e,t,o)=>{"use strict";o(6371),o(9875),o(5818),o(4563);var n=o(5638);n((function(){n("form").parsley()}));o(3736),o(8152);var r=function(e,t){return dispatchEvent(new CustomEvent(e,{detail:t}))},s=o(5638);s((function(){var e=s(".modal");function t(e){e.preventDefault()}e.length&&(s(window).on("click",(function(o){var n=!!s(o.target).closest(".modal__popup").length,r=!!s(o.target).closest("[data-modal-open]").length,i=!!s(o.target).closest("[data-modal-close]").length,a=e.hasClass("modal--active"),c=e.hasClass("modal--question"),l=e.hasClass("modal--subscribe");console.log("modal",{popupClick:n,openClick:r,closeClick:i,isActive:a,isQuestion:c,isSubscribe:l}),a?!i&&n||(e.removeClass("modal--active"),window.removeEventListener("wheel",t,{passive:!1}),c&&e.removeClass("modal--question"),l&&e.removeClass("modal--subscribe")):r&&(e.addClass("modal--active"),window.addEventListener("wheel",t,{passive:!1}))})),["question","subscribe"].forEach((function(t){return o="".concat(t,"-success"),n=function(){var o=s("[data-success-action=".concat(t,"-success]"));o.parsley().reset(),o[0].reset(),e.addClass(["modal--active","modal--".concat(t)])},window.addEventListener(o,(function(e){var t=e.detail;return n(t)}));var o,n})))}));var i=o(5638);i((function(){function e(e,t,o){var n=e.find("[type=checkbox]"),r=0;n.each((function(){var e=i(this);r+=+e.is(":checked")})),0===r?setTimeout((function(){e.addClass("checkboxes--error")})):setTimeout((function(){e.removeClass("checkboxes--error")}))}i("form").each((function(){var t=i(this),o=t.find(".checkboxes"),n=o.find("[type=checkbox]");o.length&&(t.parsley().on("form:validate",(function(){return e(o)})),n.on("change",(function(){return e(o)})))})),i("form").on("submit",(function(e){var t=this;e.preventDefault(),setTimeout((function(){var e,o=i(t).data("url"),n=i(t).data("success-status"),s=i(t).data("success-action"),a=i(t).serialize(),c=i(t)[0].hasAttribute("data-form-test"),l=i(t).find(".checkboxes");if(e=!l.length||!l.hasClass("checkboxes--error"),console.log("form",t,{url:o,successStatus:n,successAction:s,params:a,isTest:c,checkboxesValidated:e}),e)try{c&&setTimeout((function(){s&&r(s)}),1e3),i.post(o,a,(function(e){e.status===n?(s&&r(s),console.log("form",t,"success")):console.log("form",t,"fail")}))}catch(e){console.error("form",t,e)}}))}))}));o(8029),o(8849);var a=o(220),c=o.n(a),l=o(5638),d=c()(.33,1,.68,1);l((function(){var e=l(".word");e.length&&e.each((function(){var e=l(this);setTimeout((function(){var t;(t=e.find(".word__letter")).css("transition-duration","".concat(750,"ms")),setTimeout((function(){var e=performance.now(),o=t.length,n=1/o;requestAnimationFrame((function r(){for(var s=performance.now(),i=d((s-e)/750),a=Math.floor(i/n)+1,c=0;c<a&&c<o;c++)t[c].classList.add("word__letter--active");i<1&&requestAnimationFrame(r)}))}))}),0)}))}));var u=o(5566),f=o.n(u);window.addEventListener("load",(function(){f().init({once:!0,offset:0,duration:500})}))},8152:(e,t,o)=>{var n=o(5638);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-burger]");if(e){var t=document.querySelector("[data-burger-open]"),o=document.querySelector("[data-burger-close]"),r=e.classList.contains("burger--open");t.addEventListener("click",(function(){console.log(e,r),r||(e.classList.add("burger--open"),setTimeout((function(){r=!0})))})),o.addEventListener("click",(function(){r&&(e.classList.remove("burger--open"),setTimeout((function(){r=!1})))})),window.addEventListener("click",(function(t){r&&(t.target.closest(".burger__scroll")||n(".modal").hasClass("modal--active")||(e.classList.remove("burger--open"),setTimeout((function(){r=!1}))))}))}}))},8029:(e,t,o)=>{var n=o(5638);n((function(){n(".checkboxes").each((function(){var e=n(this);e.find("[type=checkbox]").each((function(){n(this).parsley().on("field:validated",(function(){e.find(".parsley-error").length?e.addClass("checkboxes--error"):e.removeClass("checkboxes--error")}))}))}))}))},9875:()=>{window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".choice").forEach((function(e){var t=e.classList.contains("choice--open"),o=e.querySelector(".choice__panel"),n=e.querySelector(".choice__drop"),r=e.querySelector(".choice__drop-content");o.addEventListener("click",(function(){e.classList.toggle("choice--open");var o=t?0:r.getBoundingClientRect().height;n.style.height="".concat(o,"px"),t=!t})),window.addEventListener("resize",(function(){if(t){var e=r.getBoundingClientRect().height;n.style.height="".concat(e,"px"),console.log("".concat(e,"px"))}}))}))}))},5818:()=>{window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header");if(e){setTimeout((function(){scrollY>=1&&e.classList.add("header--scroll"),e.classList.remove("header--hide")}),500);var t=scrollY,o=0;window.addEventListener("scroll",(function(){if(o>=2){var n=scrollY;n<t?(e.classList.contains("header--hide")&&e.classList.remove("header--hide"),n>=1&&(e.classList.contains("header--scroll")||e.classList.add("header--scroll")),n<1&&e.classList.contains("header--scroll")&&e.classList.remove("header--scroll")):n>=1&&(e.classList.contains("header--hide")||e.classList.add("header--hide")),t=n}o++}))}}))},8849:()=>{window.addEventListener("DOMContentLoaded",(function(){document.body.classList.remove("no-transition")}))},3736:()=>{var e="slider__year--active";window.addEventListener("DOMContentLoaded",(function(){if(document.querySelector("[data-slider]")){var t=function(t){if(a&&t!==c){a=!1,setTimeout((function(){a=!0}),1e3),i.classList.remove(e);var n=o[t];n.classList.add("slider__year--active"),i=n;var r=document.querySelector(".slider__image-item--active"),l=r.querySelector(".slider__img"),d=document.querySelectorAll(".slider__image-item")[t],u=d.querySelector(".slider__img");r.style.left=0,r.style.right="auto",l.style.left=0,l.style.right="auto",d.style.right=0,d.style.left="auto",u.style.right=0,u.style.left="auto",setTimeout((function(){r.classList.remove("slider__image-item--active"),d.classList.add("slider__image-item--active")})),s.forEach((function(e){var o=e.querySelectorAll(".slider__text");o.forEach((function(e){e.classList.remove("slider__text--in"),e.classList.remove("slider__text--out")}));var n=e.querySelector(".slider__text--active"),r=o[t];n.classList.remove("slider__text--active"),r.classList.add("slider__text--active"),n.classList.add("slider__text--out"),r.classList.add("slider__text--in")})),c=t}},o=document.querySelectorAll("[data-slider-year]"),n=document.querySelector("[data-slider-prev]"),r=document.querySelector("[data-slider-next]"),s=document.querySelectorAll(".slider__texts"),i=document.querySelector(".".concat(e)),a=!0,c=0;o.forEach((function(e,o){e.addEventListener("click",(function(){return a&&t(o)}))})),n.addEventListener("click",(function(){var e=c-1;e<0&&(e=0),t(e)})),r.addEventListener("click",(function(){var e=c+1;e>=o.length&&(e=o.length-1),t(e)}))}}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,o,r,s)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,r,s]=e[d],a=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,r,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,s,[i,a,c]=o,l=0;if(i.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var d=c(n)}for(t&&t(o);l<i.length;l++)s=i[l],n.o(e,s)&&e[s]&&e[s][0](),e[i[l]]=0;return n.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[721,532],(()=>n(7262)));r=n.O(r)})();