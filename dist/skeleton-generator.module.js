function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e,n,r=(function(t,e){t.exports=function(){const t=(t,e)=>/%$/.test(t)?100*t.replace("%","")/e:+t,e=t=>{const{points:e}=t;return((t,e=2)=>{let n=[];for(;t.length;)n.push(t.splice(0,e));return n})(e.trim().split(" ").reduce((t,e)=>[...t,...e.includes(",")?e.split(","):[e]],[]),2).map(([t,e],n)=>`${0===n?"M":"L"}${t} ${e}`)};return(n,{nodeName:r="name",nodeAttrs:o="attributes"}={})=>{const i=n[r],a=n[o];let u;return"rect"===i&&(u=(e=>{const n=+e.width,r=+e.height,o=e.x?+e.x:0,i=e.y?+e.y:0;let a=e.rx||"auto",u=e.ry||"auto";"auto"===a&&"auto"===u?a=u=0:"auto"!==a&&"auto"===u?a=u=t(a,n):"auto"!==u&&"auto"===a?u=a=t(u,r):(a=t(a,n),u=t(u,r)),a>n/2&&(a=n/2),u>r/2&&(u=r/2);const c=a>0&&u>0;return[`M${o+a} ${i}`,"H"+(o+n-a),...c?[`A${a} ${u} 0 0 1 ${o+n} ${i+u}`]:[],"V"+(i+r-u),...c?[`A${a} ${u} 0 0 1 ${o+n-a} ${i+r}`]:[],"H"+(o+a),...c?[`A${a} ${u} 0 0 1 ${o} ${i+r-u}`]:[],"V"+(i+u),...c?[`A${a} ${u} 0 0 1 ${o+a} ${i}`]:[],"z"]})(a)),"circle"!==i&&"ellipse"!==i||(u=(t=>{const e=+t.cx,n=+t.cy,r=t.rx?+t.rx:+t.r,o=t.ry?+t.ry:+t.r;return[`M${e+r} ${n}`,`A${r} ${o} 0 0 1 ${e} ${n+o}`,`A${r} ${o} 0 0 1 ${e-r} ${n}`,`A${r} ${o} 0 0 1 ${e+r} ${n}`,"z"]})(a)),"line"===i&&(u=(({x1:t,y1:e,x2:n,y2:r})=>[`M${+t} ${+e}`,`L${+n} ${+r}`])(a)),"polyline"===i&&(u=e(a)),"polygon"===i&&(u=[...e(a),"Z"]),"path"===i?a.d:(t=>Array.isArray(t)?t.join(" "):"")(u)}}()}(n={path:void 0,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),n.exports),o=function(t){return'\n  <rect rx="3" ry="3" x="'+t.x+'" y="'+t.y+'" width="'+t.width+'" height="'+t.height+'" />\n'},i=function(t){return'\n  <path id="'+t.id+'" d="'+t.path+'" />\n'},a=(e=function(e){var n=e.width,r=e.height,a=e.singles,u=e.groups;return'\n<svg width="'+n+'" height="'+r+'" viewBox="0 0 '+n+" "+r+'" preserveAspectRatio="none">\n  <rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip)" style=\'fill: url("#fill");\'></rect>\n  <defs>\n    '+u.map(i).join("")+'\n    <clipPath id="clip">\n      '+function(e){return e.reduce(function(e,n){return e+n.positions.map(function(e){return'\n  <use href="#'+(r=t({},n,e)).id+'" x="'+r.x+'" y="'+r.y+'" />\n';var r}).join("")},"")}(u)+"\n      "+a.map(o).join("")+'\n    </clipPath>\n    \n  <linearGradient id="fill">\n    <stop\n      offset="0.599964"\n      stop-color="#f3f3f3"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="-2; -2; 1"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n    <stop\n      offset="1.59996"\n      stop-color="#ecebeb"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="-1; -1; 2"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n    <stop\n      offset="2.59996"\n      stop-color="#f3f3f3"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="0; 0; 3"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n  </linearGradient>\n\n  <defs>\n</svg>\n'},function(t){return e(t).replace(/(\r\n|\n|\r)/gm,"")});if("production"!==process.env.NODE_ENV){if("undefined"!=typeof navigator&&"ReactNative"===navigator.product&&"undefined"==typeof crypto)throw new Error("React Native does not have a built-in secure random generator. If you don’t need unpredictable IDs use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID. If you use Expo, install `expo-random` and use `nanoid/async`.");if("undefined"!=typeof msCrypto&&"undefined"==typeof crypto)throw new Error("Import file with `if (!window.crypto) window.crypto = window.msCrypto` before importing Nano ID to fix IE 11 support");if("undefined"==typeof crypto)throw new Error("Your browser does not have secure random generator. If you don’t need unpredictable IDs, you can use nanoid/non-secure.")}let u=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e};var c={container:"[data-draw='container']",group:"[data-draw='group']",text:"[data-draw='text']",rect:"[data-draw='rect']",border:"[data-draw='border']",identifyGroup:function(t){return t.dataset["draw-id"]}},p=function(t,e){var n=t.getBoundingClientRect();return{left:n.left-e.left,top:n.top-e.top,width:n.width,height:n.height}},l=function(t){return window.getComputedStyle(t,null)},d={text:function(t,e){if(!function(t){return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}(t)){var n=p(t,e),r=function(t){var e=l(t),n=parseInt(e.getPropertyValue("font-size")),r=parseInt(e.getPropertyValue("line-height")),o=isNaN(r)?n:r,i=function(t){var e=t.getPropertyValue("box-sizing"),n=parseInt(t.getPropertyValue("height"));return"border-box"!==e?n:n-parseInt(t.getPropertyValue("padding-top"))-parseInt(t.getPropertyValue("padding-bottom"))-parseInt(t.getPropertyValue("border-top-width"))-parseInt(t.getPropertyValue("border-bottom-width"))}(e);return{lines:i<2*o?1:Math.ceil(i/o),lineHeight:o}}(t),o=r.lines,i=r.lineHeight;if(1===o){var a=function(t){var e=document.createRange();return e.selectNode(t),e.getClientRects()}(t);n.left=a[1].x-20,n.width=a[1].width}var u=n.left,c=n.top,d=n.width,s=n.height;return[].concat(Array(o).keys()).map(function(t){return{x:u,y:t?c+t*i+5*t:c,height:s<i?s:i,width:d}})}},rect:function(t,e){var n=p(t,e),r=l(t),o=parseInt(r.getPropertyValue("padding-left")),i=parseInt(r.getPropertyValue("padding-right"));return[{x:n.left+o,y:n.top,width:n.width+i,height:n.height}]}},s=function(t,e,n){return Array.from(e).map(function(e){return d[t](e,n)}).filter(function(t){return!!t}).reduce(function(t,e){return[].concat(t,e)},[])},f=function(t,e,n,r){var o=n.getBoundingClientRect(),i=Array.from(n.querySelectorAll(e)).filter(function(t){return!r.find(function(n){return Array.from(n.querySelectorAll(e)).includes(t)})});return s(t,i,o)};export default function(e){var n=t({},c,e);if(!document)return console.error("Function available only in browser environment!");var o=document.querySelectorAll(n.container);return o?Array.from(o).map(function(e){return function(e,n){var o=e.getBoundingClientRect(),i=o.width,c=o.height,p=Array.from(e.querySelectorAll(n.group)),l=p.reduce(function(e,r){var o,i,a=n.identifyGroup(r);return t({},e,e[a]?((i={})[a]=[].concat(e[a],[r]),i):((o={})[a]=[r],o))},{}),d=Object.keys(l).map(function(t){return function(t,e){var n=t[0],o=n.getBoundingClientRect(),i=n.querySelectorAll(e.text),a=n.querySelectorAll(e.rect),c=[].concat(s("text",i,o),s("rect",a,o)).map(function(t){return r({type:"element",name:"rect",attributes:t})}).join(" ");return{positions:t.map(function(t){var e=t.getBoundingClientRect();return{x:e.x,y:e.y}}),path:c,id:u()}}(l[t],n)}),y=[].concat(f("text",n.text,e,p),f("rect",n.rect,e,p));return a({width:i,height:c,singles:y,groups:d})}(e,n)}):console.error("FNo containers was found on the page")}
//# sourceMappingURL=skeleton-generator.module.js.map
