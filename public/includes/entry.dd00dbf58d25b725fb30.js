(()=>{var e={662:(e,t,n)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";return function(e,t,n,o){if(e&&t&&n){var i=t.substr(0,1).toUpperCase()+t.substr(1),d=!1;return[t,"o"+i,"moz"+i,"webkit"+i,"ms"+i].some((function(e){return"on"+e in window&&(d=e),d})),e.addEventListener(d||t,n,o)}}})?o.call(t,n,t,e):o)||(e.exports=i)}},t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(662),t=n.n(e);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){if(window&&window.__IS_CLITICAL_INITED__)return!0;var e="not-specified";if("object"===("undefined"==typeof navigator?"undefined":o(navigator))){var n=navigator.userAgent;/Android|HTC/i.test(n)?(window.isMobile=!0,e="android"):(/iPad/i.test(n)||/iPod|iPhone/i.test(n)||/Mobile/i.test(n)&&/Safari/i.test(n))&&(window.isMobile=!0,window.isIOS=!0,e="ios"),/UCBrowser/.test(n)&&(window.isUC=!0);var i=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}();window.iOSversion=Array.isArray(i)?i[0]:void 0,Array.isArray(i)&&i[0]<10&&(window.isMobile=!0,window.isIOS=!0,window.isOldIOS=!0),window.isAlipay=/AlipayChannelId/.test(n)||/AlipayDefined/.test(n)||/AliApp/.test(n)||/AlipayClient/.test(n),window.isAliPay=window.isAlipay,window.isWechat=/MicroMessenger/.test(n),window.isWeChat=window.isWechat,window.isWX=window.isWechat,window.isWx=window.isWechat}window.isMobile&&document.documentElement.classList.add("is-mobile"),e&&document.documentElement.classList.add("platform-"+e),document.addEventListener("DOMContentLoaded",(function(){var e;(e=document.createElement("canvas")).getContext&&e.getContext("2d")&&0===e.toDataURL("image/webp").indexOf("data:image/webp")&&document.documentElement.classList.add("webp");var n=function(){document.documentElement.classList.add("is-offline")};window.addEventListener("online",(function(){document.documentElement.classList.remove("is-offline")})),window.addEventListener("offline",n),!1===navigator.onLine&&n(),document.documentElement.classList.add("is-hover"),window.PointerEvent&&(document.documentElement.addEventListener("pointerenter",(function(e){"mouse"===e.pointerType||"pen"===e.pointerType?document.documentElement.classList.add("is-hover"):document.documentElement.classList.remove("is-hover")})),document.documentElement.addEventListener("pointerleave",(function(){document.documentElement.classList.remove("is-hover")}))),t()(document.body,"dragover",(function(){document.documentElement.classList.add("is-dragging-over")})),["dragend","dragexit","dragleave","drop"].forEach((function(e){t()(document.body,e,(function(){document.documentElement.classList.remove("is-dragging-over")}))}))})),window.__IS_CLITICAL_INITED__=!0}()})()})();