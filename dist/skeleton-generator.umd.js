!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).generatePlaceholder=t()}(this,function(){function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var t,n=function(e,t,n){return function(e,t){e.exports=function(){const e=(e,t)=>/%$/.test(e)?100*e.replace("%","")/t:+e,t=e=>{const{points:t}=e;return((e,t=2)=>{let n=[];for(;e.length;)n.push(e.splice(0,t));return n})(t.trim().split(" ").reduce((e,t)=>[...e,...t.includes(",")?t.split(","):[t]],[]),2).map(([e,t],n)=>`${0===n?"M":"L"}${e} ${t}`)};return(n,{nodeName:r="name",nodeAttrs:o="attributes"}={})=>{const i=n[r],a=n[o];let u;return"rect"===i&&(u=(t=>{const n=+t.width,r=+t.height,o=t.x?+t.x:0,i=t.y?+t.y:0;let a=t.rx||"auto",u=t.ry||"auto";"auto"===a&&"auto"===u?a=u=0:"auto"!==a&&"auto"===u?a=u=e(a,n):"auto"!==u&&"auto"===a?u=a=e(u,r):(a=e(a,n),u=e(u,r)),a>n/2&&(a=n/2),u>r/2&&(u=r/2);const c=a>0&&u>0;return[`M${o+a} ${i}`,"H"+(o+n-a),...c?[`A${a} ${u} 0 0 1 ${o+n} ${i+u}`]:[],"V"+(i+r-u),...c?[`A${a} ${u} 0 0 1 ${o+n-a} ${i+r}`]:[],"H"+(o+a),...c?[`A${a} ${u} 0 0 1 ${o} ${i+r-u}`]:[],"V"+(i+u),...c?[`A${a} ${u} 0 0 1 ${o+a} ${i}`]:[],"z"]})(a)),"circle"!==i&&"ellipse"!==i||(u=(e=>{const t=+e.cx,n=+e.cy,r=e.rx?+e.rx:+e.r,o=e.ry?+e.ry:+e.r;return[`M${t+r} ${n}`,`A${r} ${o} 0 0 1 ${t} ${n+o}`,`A${r} ${o} 0 0 1 ${t-r} ${n}`,`A${r} ${o} 0 0 1 ${t+r} ${n}`,"z"]})(a)),"line"===i&&(u=(({x1:e,y1:t,x2:n,y2:r})=>[`M${+e} ${+t}`,`L${+n} ${+r}`])(a)),"polyline"===i&&(u=t(a)),"polygon"===i&&(u=[...t(a),"Z"]),"path"===i?a.d:(e=>Array.isArray(e)?e.join(" "):"")(u)}}()}(n={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),n.exports}(),r=function(e){return'\n  <rect rx="3" ry="3" x="'+e.x+'" y="'+e.y+'" width="'+e.width+'" height="'+e.height+'" />\n'},o=function(e){return'\n  <path id="'+e.id+'" d="'+e.path+'" />\n'},i=(t=function(t){var n=t.width,i=t.height,a=t.singles,u=t.groups;return'\n<svg width="'+n+'" height="'+i+'" viewBox="0 0 '+n+" "+i+'" preserveAspectRatio="none">\n  <rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip)" style=\'fill: url("#fill");\'></rect>\n  <defs>\n    '+u.map(o).join("")+'\n    <clipPath id="clip">\n      '+function(t){return t.reduce(function(t,n){return t+n.positions.map(function(t){return'\n  <use href="#'+(r=e({},n,t)).id+'" x="'+r.x+'" y="'+r.y+'" />\n';var r}).join("")},"")}(u)+"\n      "+a.map(r).join("")+'\n    </clipPath>\n    \n  <linearGradient id="fill">\n    <stop\n      offset="0.599964"\n      stop-color="#f3f3f3"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="-2; -2; 1"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n    <stop\n      offset="1.59996"\n      stop-color="#ecebeb"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="-1; -1; 2"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n    <stop\n      offset="2.59996"\n      stop-color="#f3f3f3"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="0; 0; 3"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n  </linearGradient>\n\n  <defs>\n</svg>\n'},function(e){return t(e).replace(/(\r\n|\n|\r)/gm,"")});if("production"!==process.env.NODE_ENV){if("undefined"!=typeof navigator&&"ReactNative"===navigator.product&&"undefined"==typeof crypto)throw new Error("React Native does not have a built-in secure random generator. If you don’t need unpredictable IDs use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID. If you use Expo, install `expo-random` and use `nanoid/async`.");if("undefined"!=typeof msCrypto&&"undefined"==typeof crypto)throw new Error("Import file with `if (!window.crypto) window.crypto = window.msCrypto` before importing Nano ID to fix IE 11 support");if("undefined"==typeof crypto)throw new Error("Your browser does not have secure random generator. If you don’t need unpredictable IDs, you can use nanoid/non-secure.")}let a=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t};var u={container:"[data-draw='container']",group:"[data-draw='group']",text:"[data-draw='text']",rect:"[data-draw='rect']",border:"[data-draw='border']",identifyGroup:function(e){return e.dataset["draw-id"]}},c=function(e,t){var n=e.getBoundingClientRect();return{left:n.left-t.left,top:n.top-t.top,width:n.width,height:n.height}},p=function(e){return window.getComputedStyle(e,null)},d={text:function(e,t){if(!function(e){return!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}(e)){var n=c(e,t),r=function(e){var t=p(e),n=parseInt(t.getPropertyValue("font-size")),r=parseInt(t.getPropertyValue("line-height")),o=isNaN(r)?n:r,i=function(e){var t=e.getPropertyValue("box-sizing"),n=parseInt(e.getPropertyValue("height"));return"border-box"!==t?n:n-parseInt(e.getPropertyValue("padding-top"))-parseInt(e.getPropertyValue("padding-bottom"))-parseInt(e.getPropertyValue("border-top-width"))-parseInt(e.getPropertyValue("border-bottom-width"))}(t);return{lines:i<2*o?1:Math.ceil(i/o),lineHeight:o}}(e),o=r.lines,i=r.lineHeight;if(1===o){var a=function(e){var t=document.createRange();return t.selectNode(e),t.getClientRects()}(e);n.left=a[1].x-20,n.width=a[1].width}var u=n.left,d=n.top,f=n.width,l=n.height;return[].concat(Array(o).keys()).map(function(e){return{x:u,y:e?d+e*i+5*e:d,height:l<i?l:i,width:f}})}},rect:function(e,t){var n=c(e,t),r=p(e),o=parseInt(r.getPropertyValue("padding-left")),i=parseInt(r.getPropertyValue("padding-right"));return[{x:n.left+o,y:n.top,width:n.width+i,height:n.height}]}},f=function(e,t,n){return Array.from(t).map(function(t){return d[e](t,n)}).filter(function(e){return!!e}).reduce(function(e,t){return[].concat(e,t)},[])},l=function(e,t,n,r){var o=n.getBoundingClientRect(),i=Array.from(n.querySelectorAll(t)).filter(function(e){return!r.find(function(n){return Array.from(n.querySelectorAll(t)).includes(e)})});return f(e,i,o)};return function(t){var r=e({},u,t);if(!document)return console.error("Function available only in browser environment!");var o=document.querySelectorAll(r.container);return o?Array.from(o).map(function(t){return function(t,r){var o=t.getBoundingClientRect(),u=o.width,c=o.height,p=Array.from(t.querySelectorAll(r.group)),d=p.reduce(function(t,n){var o,i,a=r.identifyGroup(n);return e({},t,t[a]?((i={})[a]=[].concat(t[a],[n]),i):((o={})[a]=[n],o))},{}),s=Object.keys(d).map(function(e){return function(e,t){var r=e[0],o=r.getBoundingClientRect(),i=r.querySelectorAll(t.text),u=r.querySelectorAll(t.rect),c=[].concat(f("text",i,o),f("rect",u,o)).map(function(e){return n({type:"element",name:"rect",attributes:e})}).join(" ");return{positions:e.map(function(e){var t=e.getBoundingClientRect();return{x:t.x,y:t.y}}),path:c,id:a()}}(d[e],r)}),y=[].concat(l("text",r.text,t,p),l("rect",r.rect,t,p));return i({width:u,height:c,singles:y,groups:s})}(t,r)}):console.error("FNo containers was found on the page")}});
//# sourceMappingURL=skeleton-generator.umd.js.map
