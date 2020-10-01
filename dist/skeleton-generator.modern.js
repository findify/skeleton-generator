import t from"element-to-path";import{nanoid as e}from"nanoid";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const r=({x:t,y:e,width:n,height:r})=>`\n  <rect rx="3" ry="3" x="${t}" y="${e}" width="${n}" height="${r}" />\n`,o=({path:t,id:e})=>`\n  <path id="${e}" d="${t}" />\n`,i=(a=({width:t,height:e,singles:i,groups:a})=>`\n<svg width="${t}" height="${e}" viewBox="0 0 ${t} ${e}" preserveAspectRatio="none">\n  <rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip)" style='fill: url("#fill");'></rect>\n  <defs>\n    ${a.map(o).join("")}\n    <clipPath id="clip">\n      ${(t=>t.reduce((t,e)=>t+e.positions.map(t=>(({id:t,x:e,y:n})=>`\n  <use href="#${t}" x="${e}" y="${n}" />\n`)(n({},e,t))).join(""),""))(a)}\n      ${i.map(r).join("")}\n    </clipPath>\n    \n  <linearGradient id="fill">\n    <stop\n      offset="0.599964"\n      stop-color="#f3f3f3"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="-2; -2; 1"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n    <stop\n      offset="1.59996"\n      stop-color="#ecebeb"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="-1; -1; 2"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n    <stop\n      offset="2.59996"\n      stop-color="#f3f3f3"\n      stop-opacity="1"\n    >\n      <animate\n        attributeName="offset"\n        values="0; 0; 3"\n        keyTimes="0; 0.25; 1"\n        dur="2s"\n        repeatCount="indefinite"\n      ></animate>\n    </stop>\n  </linearGradient>\n\n  <defs>\n</svg>\n`,t=>a(t).replace(/(\r\n|\n|\r)/gm,""));var a;const s={container:"[data-draw='container']",group:"[data-draw='group']",text:"[data-draw='text']",rect:"[data-draw='rect']",border:"[data-draw='border']",identifyGroup:t=>t.dataset["draw-id"]},l=(t,e)=>{const n=t.getBoundingClientRect();return{left:n.left-e.left,top:n.top-e.top,width:n.width,height:n.height}},p=t=>window.getComputedStyle(t,null),d={text(t,e){if((t=>!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))(t))return;const n=l(t,e),{lines:r,lineHeight:o}=(t=>{const e=p(t),n=parseInt(e.getPropertyValue("font-size")),r=parseInt(e.getPropertyValue("line-height")),o=isNaN(r)?n:r,i=(t=>{const e=t.getPropertyValue("box-sizing"),n=parseInt(t.getPropertyValue("height"));return"border-box"!==e?n:n-parseInt(t.getPropertyValue("padding-top"))-parseInt(t.getPropertyValue("padding-bottom"))-parseInt(t.getPropertyValue("border-top-width"))-parseInt(t.getPropertyValue("border-bottom-width"))})(e);return{lines:i<2*o?1:Math.ceil(i/o),lineHeight:o}})(t);if(1===r){const e=(t=>{const e=document.createRange();return e.selectNode(t),e.getClientRects()})(t);n.left=e[1].x-20,n.width=e[1].width}const{left:i,top:a,width:s,height:d}=n;return[...Array(r).keys()].map(t=>({x:i,y:t?a+t*o+5*t:a,height:d<o?d:o,width:s}))},rect(t,e){const n=l(t,e),r=p(t),o=parseInt(r.getPropertyValue("padding-left")),i=parseInt(r.getPropertyValue("padding-right")),{left:a,top:s,width:d,height:c}=n;return[{x:a+o,y:s,width:d+i,height:c}]}},c=(t,e,n)=>Array.from(e).map(e=>d[t](e,n)).filter(t=>!!t).reduce((t,e)=>[...t,...e],[]),u=(t,e,n,r)=>{const o=n.getBoundingClientRect(),i=Array.from(n.querySelectorAll(e)).filter(t=>!r.find(n=>Array.from(n.querySelectorAll(e)).includes(t)));return c(t,i,o)};export default r=>{const o=n({},s,r);if(!document)return console.error("Function available only in browser environment!");const a=document.querySelectorAll(o.container);return a?Array.from(a).map(r=>((r,o)=>{const{width:a,height:s}=r.getBoundingClientRect(),l=Array.from(r.querySelectorAll(o.group)),p=l.reduce((t,e)=>{const r=o.identifyGroup(e);return n({},t,t[r]?{[r]:[...t[r],e]}:{[r]:[e]})},{}),d=Object.keys(p).map(n=>((n,r)=>{const o=n[0],i=o.getBoundingClientRect(),a=o.querySelectorAll(r.text),s=o.querySelectorAll(r.rect),l=[...c("text",a,i),...c("rect",s,i)].map(e=>t({type:"element",name:"rect",attributes:e})).join(" ");return{positions:n.map(t=>{const{x:e,y:n}=t.getBoundingClientRect();return{x:e,y:n}}),path:l,id:e()}})(p[n],o)),h=[...u("text",o.text,r,l),...u("rect",o.rect,r,l)];return i({width:a,height:s,singles:h,groups:d})})(r,o)):console.error("FNo containers was found on the page")};
//# sourceMappingURL=skeleton-generator.modern.js.map
