"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,r,o,s,a=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?l+"":"null";case"boolean":case"null":return l+"";case"object":if(!l)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(l)){for(o=l.length,n=0;o>n;n+=1)s[n]=str(n,l)||"null";return r=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,r}if(rep&&"object"==typeof rep)for(o=rep.length,n=0;o>n;n+=1)"string"==typeof rep[n]&&(i=rep[n],r=str(i,l),r&&s.push(quote(i)+(gap?": ":":")+r));else for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(r=str(i,l),r&&s.push(quote(i)+(gap?": ":":")+r));return r=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,r}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;n>i;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,i,r=e[t];if(r&&"object"==typeof r)for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i=walk(r,n),void 0!==i?r[n]=i:delete r[n]);return reviver.call(e,t,r)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define("spinner",t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i}function t(e){for(var t=1,n=arguments.length;n>t;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,i){var r=["opacity",t,~~(100*e),n,i].join("-"),o=.01+100*(n/i),s=Math.max(1-(1-e)/t*(100-o),e),a=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return c[r]||(d.insertRule("@"+l+"keyframes "+r+"{"+"0%{opacity:"+s+"}"+o+"%{opacity:"+e+"}"+(o+.01)+"%{opacity:1}"+(o+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+s+"}"+"}",d.cssRules.length),c[r]=1),r}function i(e,t){var n,i,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.slice(1),i=0;h.length>i;i++)if(n=h[i]+t,void 0!==r[n])return n}function r(e,t){for(var n in t)e.style[i(e,n)||n]=t[n];return e}function o(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}return e}function s(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function a(e){return this===void 0?new a(e):(this.opts=o(e||{},a.defaults,f),void 0)}function l(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}d.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(e,i){function o(){return r(n("group",{coordsize:u+" "+u,coordorigin:-l+" "+-l}),{width:u,height:u})}function s(e,s,a){t(c,t(r(o(),{rotation:360/i.lines*e+"deg",left:~~s}),t(r(n("roundrect",{arcsize:i.corners}),{width:l,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),n("fill",{color:i.color,opacity:i.opacity}),n("stroke",{opacity:0}))))}var a,l=i.length+i.width,u=2*l,h=2*-(i.width+i.length)+"px",c=r(o(),{position:"absolute",top:h,left:h});if(i.shadow)for(a=1;i.lines>=a;a++)s(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(a=1;i.lines>=a;a++)s(a);return t(e,c)},a.prototype.opacity=function(e,t,n,i){var r=e.firstChild;i=i.shadow&&i.lines||0,r&&r.childNodes.length>t+i&&(r=r.childNodes[t+i],r=r&&r.firstChild,r=r&&r.firstChild,r&&(r.opacity=n))}}var u,h=["webkit","Moz","ms","O"],c={},d=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};a.defaults={},o(a.prototype,{spin:function(t){this.stop();var n,i,o=this,a=o.opts,l=o.el=r(e(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),h=a.radius+a.length+a.width;if(t&&(t.insertBefore(l,t.firstChild||null),i=s(t),n=s(l),r(l,{left:("auto"==a.left?i.x-n.x+(t.offsetWidth>>1):parseInt(a.left,10)+h)+"px",top:("auto"==a.top?i.y-n.y+(t.offsetHeight>>1):parseInt(a.top,10)+h)+"px"})),l.setAttribute("role","progressbar"),o.lines(l,o.opts),!u){var c,d=0,f=(a.lines-1)*(1-a.direction)/2,p=a.fps,g=p/a.speed,y=(1-a.opacity)/(g*a.trail/100),m=g/a.lines;(function v(){d++;for(var e=0;a.lines>e;e++)c=Math.max(1-(d+(a.lines-e)*m)%g*y,a.opacity),o.opacity(l,e*a.direction+f,c,a);o.timeout=o.el&&setTimeout(v,~~(1e3/p))})()}return o},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(i,o){function s(t,n){return r(e(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*l+o.rotate)+"deg) translate("+o.radius+"px"+",0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var a,l=0,h=(o.lines-1)*(1-o.direction)/2;o.lines>l;l++)a=r(e(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:u&&n(o.opacity,o.trail,h+l*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&t(a,r(s("#000","0 0 4px #000"),{top:"2px"})),t(i,t(a,s(o.color,"0 0 1px rgba(0,0,0,.1)")));return i},opacity:function(e,t,n){e.childNodes.length>t&&(e.childNodes[t].style.opacity=n)}});var p=r(e("group"),{behavior:"url(#default#VML)"});return!i(p,"transform")&&p.adj?l():u=i(p,"animation"),a});var Keen=Keen||{};(function(){function e(){return"undefined"==typeof XMLHttpRequest?!1:"withCredentials"in new XMLHttpRequest}function t(e,t,n,i,r,o,s){var a=new XMLHttpRequest;if(a.onreadystatechange=function(){if(4==a.readyState)if(a.status>=200&&300>a.status){var e;try{e=JSON.parse(a.responseText)}catch(t){console.log("Could not JSON parse HTTP response: "+a.responseText),s&&s(a,t)}e&&o&&o(e)}else console.log("HTTP request failed."),s&&s(a,null)},a.open(e,t,!0),r&&a.setRequestHeader("Authorization",r),i&&a.setRequestHeader("Content-Type","application/json"),n)for(var l in n)n.hasOwnProperty(l)&&a.setRequestHeader(l,n[l]);var u=i?JSON.stringify(i):null;a.send(u)}function n(e,t,n,i){if(t&&0>e.indexOf("api_key")){var r=e.indexOf("?")>0?"&":"?";e=e+r+"api_key="+t}for(var o="keenJSONPCallback"+(new Date).getTime();o in window;)o+="a";var s=!1;window[o]=function(e){s=!0,n&&e&&n(e),window[o]=void 0},e=e+"&jsonp="+o;var a=document.createElement("script");a.id="keen-jsonp",a.src=e,document.getElementsByTagName("head")[0].appendChild(a),a.onreadystatechange=function(){s===!1&&"loaded"===this.readyState&&(s=!0,i&&i())},a.onerror=function(){s===!1&&(s=!0,i&&i())}}function i(e,t,n,i){var r=null;if("string"==typeof n.attributes.timezone){var o=i.result[0].timeframe.start,s=parseInt(o.slice(o.length-6,o.length).slice(1,3)),a=parseInt(o.slice(o.length-6,o.length).slice(4,6)),l=o.slice(o.length-6,o.length).slice(0,1),u=60*s+a;"-"===l&&(u=-u),r=u}else r=n.attributes.timezone/60;var h="";return void 0!=n&&void 0!=n.attributes&&void 0!=n.attributes.timezone&&e.setMinutes(e.getMinutes()+e.getTimezoneOffset()+r),"daily"==t||"weekly"==t?(h+=1+e.getMonth(),h+="/",h+=e.getDate()):"hourly"==t?(h+=e.getHours(),h+=":",h+="00"):"monthly"==t?(h+=1+e.getMonth(),h+="/",h+=(e.getFullYear()+"").slice(-2)):"minutely"==t?(h+=e.getHours(),h+=":",h+=("0"+e.getMinutes()).slice(-2)):console.log("Invalid interval: "+t),h}function r(e){var t,n,i=[1,4,5,6,7,10,11],r=0;if(n=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(e)){for(var o,s=0;o=i[s];++s)n[o]=+n[o]||0;n[2]=(+n[2]||1)-1,n[3]=+n[3]||1,"Z"!==n[8]&&void 0!==n[9]&&(r=60*n[10]+n[11],"+"===n[9]&&(r=0-r)),t=Date.UTC(n[1],n[2],n[3],n[4],n[5]+r,n[6],n[7])}else t=Date.parse?Date.parse(e):0/0;return new Date(t)}function o(){return-60*(new Date).getTimezoneOffset()}function s(e){return _.each(e,function(t,n){_.isUndefined(t)&&delete e[n]}),_.map(e,function(e,t){return _.isString(e)||(e=JSON.stringify(e)),e=encodeURIComponent(e),t+"="+e}).join("&")}var a=!1;("undefined"==typeof console||console.log===void 0)&&(console={},console.log=a?function(e){alert(e)}:function(){});var l=function(){};if(l.extend=function(e,t){var n=l.prototype.extend;l._prototyping=!0;var i=new this;n.call(i,e),i.base=function(){},delete l._prototyping;var r=i.constructor,o=i.constructor=function(){if(!l._prototyping)if(this._constructing||this.constructor==o)this._constructing=!0,r.apply(this,arguments),delete this._constructing;else if(null!=arguments[0])return(arguments[0].extend||n).call(arguments[0],i)};return o.ancestor=this,o.extend=this.extend,o.forEach=this.forEach,o.implement=this.implement,o.prototype=i,o.toString=this.toString,o.valueOf=function(e){return"object"==e?o:r.valueOf()},n.call(o,t),"function"==typeof o.init&&o.init(),o},l.prototype={extend:function(e,t){if(arguments.length>1){var n=this[e];if(n&&"function"==typeof t&&(!n.valueOf||n.valueOf()!=t.valueOf())&&/\bbase\b/.test(t)){var i=t.valueOf();t=function(){var e=this.base||l.prototype.base;this.base=n;var t=i.apply(this,arguments);return this.base=e,t},t.valueOf=function(e){return"object"==e?t:i},t.toString=l.toString}this[e]=t}else if(e){var r=l.prototype.extend;l._prototyping||"function"==typeof this||(r=this.extend||r);for(var o={toSource:null},s=["constructor","toString","valueOf"],a=l._prototyping?0:1;u=s[a++];)e[u]!=o[u]&&r.call(this,u,e[u]);for(var u in e)o[u]||r.call(this,u,e[u])}return this}},l=l.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(e,t,n){for(var i in e)void 0===this.prototype[i]&&t.call(n,e[i],i,e)},implement:function(){for(var e=0;arguments.length>e;e++)"function"==typeof arguments[e]?arguments[e](this.prototype):this.prototype.extend(arguments[e]);return this},toString:function(){return this.valueOf()+""}}),Keen.configure=function(e){return this.client=new Keen.Client(e),this.client},Keen.addEvent=function(e,t,n,i){this.client&&this.client.uploadEvent(e,t,n,i)},Keen.trackExternalLink=function(e,t,n,i,r){void 0===i&&(i=500);var o=!1,s=function(){};return"A"===e.nodeName?s=function(){o||(o=!0,window.location=e.href)}:"FORM"===e.nodeName&&(s=function(){o||(o=!0,e.submit())}),r&&(s=function(){o||(o=!0,r())}),Keen.addEvent(t,n,s,s),setTimeout(function(){s()},i),!1},Keen.getEventCollections=function(e,t){var n=this.client.getKeenUrl("/events");this.client.getJSON(n,e,t)},Keen.getEventCollectionProperties=function(e,t,n){var i=this.client.getKeenUrl("/events/"+e);this.client.getJSON(i,t,n)},Keen.setGlobalProperties=function(e){if(this.client){if(!e||"function"!=typeof e)throw Error("Invalid value for global properties: "+e);this.client.globalProperties=e}},Keen.addChartsReadyHandler=function(e){this.chartsReadyHandlers===void 0&&(this.chartsReadyHandlers=[]),this.chartsReadyHandlers.push(e),this.chartsReady&&this.runChartsReadyHandlers()},Keen.onChartsReady=function(e){this.chartsReady?e():(this.addChartsReadyHandler(e),this.loadChartsDependencies())},Keen.runChartsReadyHandlers=function(){_.each(this.chartsReadyHandlers,function(e){e()},this)},Keen.loadChartsDependencies=function(){if(!this.startedLoadingChartsDependencies){this.startedLoadingChartsDependencies=!0;var e=function(e,t){var n,i=document,r=i.head||i.getElementsByTagName("head");setTimeout(function(){if("item"in r){if(!r[0])return setTimeout(arguments.callee,25),void 0;r=r[0]}var n=i.createElement("script"),o=!1;n.onload=n.onreadystatechange=function(){return n.readyState&&"complete"!==n.readyState&&"loaded"!==n.readyState||o?!1:(n.onload=n.onreadystatechange=null,o=!0,t(),void 0)},n.src=e,r.insertBefore(n,r.firstChild)},0),null==i.readyState&&i.addEventListener&&(i.readyState="loading",i.addEventListener("DOMContentLoaded",n=function(){i.removeEventListener("DOMContentLoaded",n,!1),i.readyState="complete"},!1))},t=this,n=function(){t.chartsReady=!0,t.runChartsReadyHandlers()},i=function(){"undefined"==typeof google?console.log("Problem loading visualizations.  Please contact us!"):google.load("visualization","1.0",{packages:["corechart"],callback:n})};e("https://www.google.com/jsapi",function(){"undefined"==typeof _?e("https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min.js",i):i()})}},Keen.Client=function(e){this.projectId=e.projectId,this.writeKey=e.writeKey,this.readKey=e.readKey,this.globalProperties=null,this.keenUrl="https://api.keen.io",void 0!==e&&void 0!==e.keenUrl&&(this.keenUrl=e.keenUrl)},Keen.Client.prototype.uploadEvent=function(i,r,o,s){var a=this.getKeenUrl("/events/"+i),l={};this.globalProperties&&(l=this.globalProperties(i));for(var u in r)r.hasOwnProperty(u)&&(l[u]=r[u]);if(e())t("POST",a,null,l,this.writeKey,o,s);else{var h=JSON.stringify(l),c=Keen.Base64.encode(h);a=a+"?api_key="+this.writeKey,a=a+"&data="+c,a=a+"&modified="+(new Date).getTime(),n(a,null,o,s)}},Keen.Client.prototype.getKeenUrl=function(e){return this.keenUrl+"/3.0/projects/"+this.projectId+e},Keen.Client.prototype.getJSON=function(i,r,o){e()?t("GET",i,null,null,this.readKey,r,o):n(i,this.readKey,r,o)},Keen.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,i,r,o,s,a,l="",u=0;for(e=Keen.Base64._utf8_encode(e);e.length>u;)t=e.charCodeAt(u++),n=e.charCodeAt(u++),i=e.charCodeAt(u++),r=t>>2,o=(3&t)<<4|n>>4,s=(15&n)<<2|i>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),l=l+Keen.Base64._keyStr.charAt(r)+Keen.Base64._keyStr.charAt(o)+Keen.Base64._keyStr.charAt(s)+Keen.Base64._keyStr.charAt(a);return l},decode:function(e){var t,n,i,r,o,s,a,l="",u=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");e.length>u;)r=Keen.Base64._keyStr.indexOf(e.charAt(u++)),o=Keen.Base64._keyStr.indexOf(e.charAt(u++)),s=Keen.Base64._keyStr.indexOf(e.charAt(u++)),a=Keen.Base64._keyStr.indexOf(e.charAt(u++)),t=r<<2|o>>4,n=(15&o)<<4|s>>2,i=(3&s)<<6|a,l+=String.fromCharCode(t),64!=s&&(l+=String.fromCharCode(n)),64!=a&&(l+=String.fromCharCode(i));return l=Keen.Base64._utf8_decode(l)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;e.length>n;n++){var i=e.charCodeAt(n);128>i?t+=String.fromCharCode(i):i>127&&2048>i?(t+=String.fromCharCode(192|i>>6),t+=String.fromCharCode(128|63&i)):(t+=String.fromCharCode(224|i>>12),t+=String.fromCharCode(128|63&i>>6),t+=String.fromCharCode(128|63&i))}return t},_utf8_decode:function(e){for(var t="",n=0,i=c1=c2=0;e.length>n;)i=e.charCodeAt(n),128>i?(t+=String.fromCharCode(i),n++):i>191&&224>i?(c2=e.charCodeAt(n+1),t+=String.fromCharCode((31&i)<<6|63&c2),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),n+=3);return t}},Keen._cf&&(Keen.configure(Keen._cf),Keen._cf=null),Keen._gp&&(Keen.setGlobalProperties(Keen._gp),Keen._gp=null),Keen._eq&&Keen._eq.length>0){for(var u=0;Keen._eq.length>u;u++){var h=Keen._eq[u].shift(),c=Keen._eq[u].shift(),d=Keen._eq[u].shift(),f=Keen._eq[u].shift();Keen.addEvent(h,c,d,f)}Keen._eq=null}if(Keen._ocrq&&Keen._ocrq.length>0){for(var u=0;Keen._ocrq.length>u;u++){var p=Keen._ocrq[u];Keen.onChartsReady(p)}Keen._ocrq=null}Keen.BaseVisualization=l.extend({}),Keen.BaseVisualization.prototype.getLabel=function(){if(_.isUndefined(this.options.label)||null==this.options.label){if(_.isUndefined(this.query.queryName)){var e="";return e+=this.query.attributes.analysisType,e+=" - ",e+=this.query.attributes.eventCollection}return this.query.queryName}return this.options.label},Keen.Number=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:"150px",width:"300px","font-family":"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"white","border-radius":"0px","number-background-color":"#7dcc77","label-background-color":"#9CD898",prefix:"",suffix:""},this.options=_.extend(this.options,t)}}),Keen.Number.prototype.draw=function(e,t){var n=function(e){return+e.replace(/[^\d.-]+/gi,"")},i=function(e){return e.replace(/[^A-Za-z%]+/gi,"")};e.innerHTML="";var r=document.createElement("div");e.appendChild(r),r.style.width=this.options.width,r.style.height=this.options.height,r.style.display="block",r.style.textAlign="center",r.style.backgroundColor=this.options["number-background-color"],r.style.borderRadius=this.options["border-radius"];var o=document.createElement("h1");r.appendChild(o);var s=document.createTextNode("Loading...");o.style.fontSize=.5*(8*n(this.options.height)/15)+i(this.options.height),o.appendChild(s),o.style.height=2*n(this.options.height)/3+i(this.options.height),o.style.lineHeight=o.style.height,o.style.color=this.options.color,o.style.fontWeight="bold",o.style.fontFamily=this.options["font-family"],o.style.margin=0,o.style.padding=0,o.style.textShadow="none";var a=document.createElement("h2");a.appendChild(document.createTextNode(this.getLabel())),r.appendChild(a),a.style.height=n(this.options.height)/3+i(this.options.height),a.style.lineHeight=a.style.height,a.style.fontSize=.32*(n(this.options.height)/3)+i(this.options.height),a.style.color=o.style.color,a.style.textTransform="uppercase",a.style.fontWeight="normal",a.style.fontFamily=o.style.fontFamily,a.style.margin=0,a.style.padding=0,a.style.borderTop="1px solid",a.style.borderTopColor=this.options.color,a.style.backgroundColor=this.options["label-background-color"],a.style.textShadow="none";var l=_.bind(function(e){this.data=e.result,null==this.data&&(this.data=0),o.replaceChild(document.createTextNode(this.options.prefix+Keen.prettyNumber(this.data)+this.options.suffix),s),o.style.fontSize=8*n(this.options.height)/15+i(this.options.height),null==this.data&&(this.data=0)},this);_.isUndefined(t)?this.query.getResponse(l):l(t)},Keen.LineChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,height:300,width:600,lineWidth:5,color:"#00afd7",backgroundColor:"white",title:null,label:null,xAxisLabel:null,yAxisLabel:null,yAxisMin:0,yAxisMax:null,viewMode:null,showLegend:!0,xAxisLabelAngle:null,font:"Arial",override:{}},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.LineChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=function(e){var t={};return t.height=e.height,t.width=e.width,t.lineWidth=e.lineWidth,t.colors=[e.color],t.backgroundColor=e.backgroundColor,t.title=e.title,t.fontName=e.font,t.hAxis={title:e.xAxisLabel,viewWindow:{}},t.vAxis={title:e.yAxisLabel,viewWindow:{}},null!=e.yAxisMin&&(t.vAxis.viewWindow.min=e.yAxisMin),null!=e.yAxisMax&&(t.vAxis.viewWindow.max=e.yAxisMax),e.showLegend||(t.legend={position:"none"}),null!=e.xAxisLabelAngle&&(t.hAxis.slantedText=!0,t.hAxis.slantedTextAngle=e.xAxisLabelAngle),t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},null!=e.override&&(t=_.extend(t,e.override)),t},o=_.bind(function(t){this.data=t.result;var o=new google.visualization.DataTable;if(o.addColumn("string","Date"),o.addColumn("number",this.getLabel()),o.addRows(_.map(this.data,function(e){var n=r(e.timeframe.start),o=i(n,this.query.attributes.interval,this.query,t);return null==e.value&&(e.value=0),[o,e.value]},this)),google){var s=new google.visualization.AreaChart(e),a=n(this.options);s.draw(o,a)}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(o):o(t)},Keen.MultiLineChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:300,width:600,chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,title:null,showLegend:!0,colors:null,lineWidth:5,backgroundColor:"white",fontColor:"black",font:null,xAxisLabel:null,yAxisLabel:null,xAxisLabelAngle:null,labelMapping:{}},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.MultiLineChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=function(e){var t={};return t.height=e.height,t.width=e.width,t.lineWidth=e.lineWidth,t.colors=e.colors,t.backgroundColor=e.backgroundColor,t.title=e.title,t.fontName=e.font,t.hAxis={title:e.xAxisLabel},t.vAxis={title:e.yAxisLabel,viewWindow:{min:0}},e.showLegend||(t.legend={position:"none"}),null!=e.xAxisLabelAngle&&(t.hAxis.slantedText=!0,t.hAxis.slantedTextAngle=e.xAxisLabelAngle),t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},t},o=_.bind(function(t){this.data=t.result;var o=[];_.each(this.data[0].value,function(e){null!=this.options.labelMapping[e[this.query.attributes.groupBy]]?o.push(this.options.labelMapping[e[this.query.attributes.groupBy]]+""):o.push(e[this.query.attributes.groupBy]+"")},this),0==o.length&&(o.push(null),this.options.showLegend=!1);var s=new google.visualization.DataTable;if(s.addColumn("string","Date"),_.each(o,function(e){s.addColumn("number",e)}),_.each(this.data,function(e){var n=[],o=r(e.timeframe.start),a=i(o,this.query.attributes.interval,this.query,t);n.push(a),_.each(e.value,function(e){null==e.result&&(e.result=0),n.push(e.result)},this),1==n.length&&n.push(null),s.addRow(n)},this),google){var a=new google.visualization.LineChart(e),l=n(this.options);a.draw(s,l)}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(o):o(t)},Keen.PieChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:300,width:600,chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,minimumSlicePercentage:"1",title:null,showLegend:!0,colors:null,backgroundColor:"white",font:null,fontColor:"black",labelMapping:{}},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.PieChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=function(e){var t={};return t.legend={},t.height=e.height,t.width=e.width,t.title=e.title,t.sliceVisibilityThreshold=.01*e.minimumSlicePercentage,t.colors=e.colors,t.backgroundColor=e.backgroundColor,e.showLegend||(t.legend.position="none"),t.fontName=e.font,t.titleTextStyle={color:e.fontColor},t.legend.textStyle={color:e.fontColor},t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},t},i=_.bind(function(t){this.data=t.result;var i=new google.visualization.DataTable;if(i.addColumn("string","Group By"),i.addColumn("number",this.getLabel()),_.each(this.data,function(e){var t="";t=null!=this.options.labelMapping[e[this.query.attributes.groupBy]]?this.options.labelMapping[e[this.query.attributes.groupBy]]:e[this.query.attributes.groupBy]+"";var n=e.result;i.addRow([t,n])},this),google){var r=new google.visualization.PieChart(e);r.draw(i,n(this.options))}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(i):i(t)},Keen.FunnelChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:300,width:600,chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,title:null,showLegend:!1,color:"#f35757",backgroundColor:"white",fontColor:"black",font:"Arial"},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.FunnelChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=function(e){var t={};return t.legend={},t.height=e.height,t.width=e.width,t.title=e.title,t.colors=[e.color],t.fontName=e.font,t.backgroundColor=e.backgroundColor,e.showLegend||(t.legend.position="none"),t.titleTextStyle={color:e.fontColor},t.legend.textStyle={color:e.fontColor},t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},t.vAxis={minValue:0,format:"#"},t.bar={groupWidth:"90%"},t},i=_.bind(function(t){this.numbers=t.result,this.steps=t.steps;var i=new google.visualization.DataTable;i.addColumn("string","Action"),i.addColumn("number","Count");for(var r=null,o=0;this.numbers.length>o;o++){null==r&&(r=this.numbers[o]);var s=Math.round(100*(this.numbers[o]/r)),a=this.steps[o].event_collection;_.isUndefined(this.query.steps[o].name)||(a=this.query.steps[o].name),i.addRow([a+" ("+s+"%)",this.numbers[o]])}if(google){var l=new google.visualization.ColumnChart(e);l.draw(i,n(this.options))}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(i):i(t)},Keen.BaseQuery=l.extend({getResponse:function(e){function t(t){return e(t)}function n(e,t){console.log("got an error:"),console.log(e),console.log(t)}if(_.isUndefined(this.client.readKey))console.log("Error: Please add a readKey to Keen.configure() to perform analysis.");else{var i=this.getPath(),r=this.buildParams();i+="?",i+=s(r);var o=this.client.getKeenUrl(i);this.client.getJSON(o,t,n)}},getPath:function(){console.log("getPath() must be overridden")},buildParams:function(){console.log("buildParams() must be overridden")}}),Keen.SavedQuery=Keen.BaseQuery.extend({constructor:function(e,t){this.queryName=e,this.client=t?t:Keen.client},getPath:function(){return"/saved_queries/"+encodeURIComponent(this.queryName)+"/result"},buildParams:function(){return{api_key:this.client.readKey}}}),Keen.AdHocQuery=Keen.BaseQuery.extend({constructor:function(e,t,n){_.isUndefined(t)&&(t={}),this.attributes=_.defaults(t,{filters:[]}),this.attributes.eventCollection=e,_.isUndefined(this.attributes.timezone)&&(this.attributes.timezone=o()),this.client=n?n:Keen.client},getPath:function(){return"/queries/"+this.attributes.analysisType},buildParams:function(){return{api_key:this.client.readKey,event_collection:this.attributes.eventCollection,filters:this.attributes.filters,timeframe:this.attributes.timeframe,timezone:this.attributes.timezone,target_property:this.attributes.targetProperty,group_by:this.attributes.groupBy}}}),Keen.AdHocQuery.prototype.addFilter=function(e,t,n){return this.attributes.filters.push({property_name:e,operator:t,property_value:n}),this},Keen.AdHocQuery.prototype.timeframe=function(e){return this.attributes.timeframe=e,this},Keen.AdHocQuery.prototype.timezone=function(e){return this.attributes.timezone=e,this},Keen.AdHocQuery.prototype.analysisType=function(e){return this.attributes.analysisType=e,this},Keen.AdHocQuery.prototype.targetProperty=function(e){return this.attributes.targetProperty=e,this},Keen.AdHocQuery.prototype.groupBy=function(e){return this.attributes.groupBy=e,this},Keen.Funnel=Keen.BaseQuery.extend({constructor:function(e,t,n){_.isUndefined(t)&&(t={}),this.attributes=t,_.isUndefined(e)&&(e=[]),this.steps=e;for(var i=0;this.steps.length>i;i++)this.steps[i]=this.steps[i].buildParams();_.isUndefined(this.attributes.timezone)&&(this.attributes.timezone=o()),this.client=n?n:Keen.client},getPath:function(){return"/queries/funnel"},buildParams:function(){if(!_.isUndefined(this.attributes.actorProperty))for(var e=0;this.steps.length>e;e++)_.isUndefined(this.steps[e].actor_property)&&(this.steps[e].actor_property=this.attributes.actorProperty);return{api_key:this.client.readKey,steps:this.steps,timeframe:this.attributes.timeframe,timezone:this.attributes.timezone,actor_property:this.attributes.actorProperty}},draw:function(e,t){var n=new Keen.FunnelChart(this,t);n.draw(e)}}),Keen.Funnel.prototype.timeframe=function(e){return this.attributes.timeframe=e,this},Keen.Funnel.prototype.actorProperty=function(e){return this.attributes.actorProperty=e,this},Keen.Funnel.prototype.timezone=function(e){return this.attributes.timezone=e,this},Keen.Funnel.prototype.addStep=function(e){return this.steps.push(e.buildParams()),this},Keen.Step=Keen.AdHocQuery.extend({constructor:function(e,t){_.isUndefined(t)&&(t={}),this.attributes=_.defaults(t,{filters:[]}),this.attributes.eventCollection=e,_.isUndefined(this.attributes.timezone)&&(this.attributes.timezone=o())},buildParams:function(){return{event_collection:this.attributes.eventCollection,actor_property:this.attributes.actorProperty,filters:this.attributes.filters,timeframe:this.attributes.timeframe,timezone:this.attributes.timezone,name:this.attributes.name}}}),Keen.Step.prototype.name=function(e){return this.attributes.name=e,this},Keen.Step.prototype.actorProperty=function(e){return this.attributes.actorProperty=e,this},Keen.Metric=Keen.AdHocQuery.extend({}),Keen.Metric.prototype.draw=function(e,t){if(_.isUndefined(this.attributes.groupBy)){var n=new Keen.Number(this,t);n.draw(e)}else{var i=new Keen.PieChart(this,t);i.draw(e)}},Keen.Series=Keen.AdHocQuery.extend({buildParams:function(){var e=this.base();return e.interval=this.attributes.interval,e},draw:function(e,t){if(_.isUndefined(this.attributes.groupBy)){var n=new Keen.LineChart(this,t);n.draw(e)}else{var i=new Keen.MultiLineChart(this,t);i.draw(e)}}}),Keen.Series.prototype.interval=function(e){return this.attributes.interval=e,this},Keen.showLoading=function(e){(new Spinner).spin(e)},Keen.prettyNumber=function(e){function t(e,n){var e=e+"",i=e.split(".");if(i.length>1){e=i[0];var o=i[1];2==e.length&&o.length>0?o.length>0?e=e+"."+o.charAt(0):e+="0":1==e.length&&o.length>0&&(e=e+"."+o.charAt(0),e+=o.length>1?o.charAt(1):"0")}var s=e.length;return e.split(".").length>1&&s--,3>=s?e+""+r[n]:t(Number(e)/1e3,n+1)}var n=e.toPrecision(3);if(Number(n)==e&&4>=(e+"").length)return e+"";if(e>=1||-1>=e){var i="";0>e&&(e=-e,i="-");var r=["","k","M","B","T"];return i+t(e,0)}return e.toPrecision(3)},Date.prototype.stdTimezoneOffset=function(){var e=new Date(this.getFullYear(),-1,1),t=new Date(this.getFullYear(),6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())
},Date.prototype.dst=function(){return this.getTimezoneOffset()<this.stdTimezoneOffset()},Keen.loadedCallback&&"function"==typeof Keen.loadedCallback&&Keen.loadedCallback()})();