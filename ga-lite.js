!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.galite=e():t.galite=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";function r(t,e){a[t]=e}function i(t){return a[t]}e.a=r,e.b=i;var a={}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){return(new Date).getTime()}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(1===e.length&&e[0].constructor===Object)return e[0];switch(t){case"pageview":return{page:f(e,1)[0]};case"event":var n=f(e,4);return{eventCategory:n[0],eventAction:n[1],eventLabel:n[2],eventValue:n[3]};case"social":var r=f(e,3);return{socialNetwork:r[0],socialAction:r[1],socialTarget:r[2]};case"timing":var i=f(e,4);return{timingCategory:i[0],timingVar:i[1],timingValue:i[2],timingLabel:i[3]};default:return{}}}n.d(e,"a",function(){return d});var o=n(6),c=n(7),u=n(8),f=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d="t0",p=function(){function t(e){r(this,t),this.fields={trackingId:e},this.userId=Object(c.a)(),this._sendTo=o.a,this._getTime=i}return l(t,[{key:"send",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=s({hitType:t},a(t,n),this.fields),o=Object(u.a)(this.fields.trackingId,this._getTime(),this.userId,i);this._sendTo(o)}},{key:"get",value:function(t){return this.fields[t]}},{key:"set",value:function(t,e){this.fields[t]=e}}]),t}();e.b=p},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t){if(!Object(o.a)()){for(var e=a(t),n=d(e,2),r=n[0],i=n[1],s=!!c.a[t],l=!!f.b.prototype[i]&&"constructor"!==i,p=arguments.length,v=Array(p>1?p-1:0),g=1;g<p;g++)v[g-1]=arguments[g];if(s)c.a[t].apply(c.a,v);else if(l){var y=Object(u.b)(r);y[i].apply(y,v)}else{if("function"!=typeof t)throw new Error("Command "+t+" is not available in ga-lite");var b=Object(u.b)(r);t(b)}}}function a(t){return"string"==typeof t&&t.indexOf(".")>-1?t.split("."):[f.a,t]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(3),c=n(4),u=n(0),f=n(1),s=n(14),l=n(15),d=(n.n(l),function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}());Object.keys(c.a).forEach(function(t){i[t]=c.a[t]}),Object(s.a)().forEach(function(t){return i.apply(void 0,r(t))})},function(t,e,n){"use strict";function r(){return 1===parseInt(navigator.msDoNotTrack||window.doNotTrack||navigator.doNotTrack,10)}e.a=r},function(t,e,n){"use strict";var r=n(5),i=n(13),a={create:r.a,getByName:i.a};e.a=a},function(t,e,n){"use strict";function r(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a,r=(arguments[3],new a.b(t));return Object(i.a)(n,r),r}e.a=r;var i=n(0),a=n(1)},function(t,e,n){"use strict";function r(t){if("undefined"!=typeof navigator&&navigator.sendBeacon){if(navigator.sendBeacon(t))return}try{var e=new window.XMLHttpRequest;e.open("GET",t,!1),e.send()}catch(e){var n=new window.Image;n.src=t}}e.a=r},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window?window.localStorage:null;if(t&&t.getItem(i))return t.getItem(i);var e=Math.random()+"."+Math.random();return t&&t.setItem(i,e),e}e.a=r;var i="uid"},function(t,e,n){"use strict";function r(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=Object(a.a)(Object(o.a)(r));return Object(i.a)()+(u?"&"+u:"")+(c?"&aip=1":"")+"&cid="+n+"&tid="+t+"&z="+e}e.a=r;var i=n(9),a=n(11),o=n(12)},function(t,e,n){"use strict";function r(t,e){return"https://www.google-analytics.com/collect?v=1&ul=en-us&de=UTF-8"+Object(i.a)("dl",[document.location.href])+Object(i.a)("dt",[document.title])+Object(i.a)("sd",[window.screen.colorDepth,"-bit"])+Object(i.a)("sr",[window.screen.availHeight,"x",window.screen.availWidth])+Object(i.a)("vp",[window.innerWidth,"x",window.innerHeight])+Object(i.a)("dr",[document.referrer])}e.a=r;var i=n(10)},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return!t||e.indexOf(void 0)>-1?"":"&"+t+"="+e.map(encodeURIComponent).join("")}e.a=r},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).map(function(e){return[e,t[e]].map(i).map(encodeURIComponent).join("=")}).join("&")}function i(t){return"boolean"==typeof t?+t:t}e.a=r},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return Object.keys(t).filter(function(t){return o.hasOwnProperty(t)}).filter(function(e){return t[e]}).reduce(function(e,n){return a({},e,r({},o[n],t[n]))},{})}e.a=i;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o={anonymizeIp:"aip",dataSource:"ds",queueTime:"qt",userId:"uid",sessionControl:"sc",referrer:"dr",campaignName:"cn",campaignSource:"cs",campaignMedium:"cm",campaignKeyword:"ck",campaignContent:"cc",campaignId:"ci",screenResolution:"sr",viewportSize:"vp",encoding:"de",screenColors:"sd",language:"ul",javaEnabled:"je",flashVersion:"fl",hitType:"t",nonInteraction:"ni",location:"dl",hostname:"dh",page:"dp",title:"dt",screenName:"cd",linkid:"linkid",appName:"an",appId:"aid",appVersion:"av",appInstallerId:"aiid",eventCategory:"ec",eventAction:"ea",eventLabel:"el",eventValue:"ev",currencyCode:"cu",socialNetwork:"sn",socialAction:"sa",socialTarget:"st",timingCategory:"utc",timingVar:"utv",timingValue:"utt",timingLabel:"utl",exDescription:"exd",exFatal:"exf",expId:"xid",expVar:"xvar"}},function(t,e,n){"use strict";function r(t){return Object(i.b)(t)}e.a=r;var i=n(0)},function(t,e,n){"use strict";function r(){return"undefined"==typeof window?[]:window.galite&&window.galite.q||[]}e.a=r},function(t,e){Array.from=Array.from||function(){var t;return(t=Array.prototype.slice).call.apply(t,arguments)}}]).default});