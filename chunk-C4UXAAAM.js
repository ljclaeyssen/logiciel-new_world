import{a as G,o as _t,r as pe,s as ue}from"./chunk-FMHSL3JQ.js";import{$ as jt,$b as ce,Gb as re,Hb as oe,K as w,Ka as Zt,Kb as z,L as et,Ma as Qt,N as Gt,Na as Xt,Q as S,R as Kt,Ta as Et,Ua as it,V as Nt,Va as W,Vb as ae,Xa as vt,Z as N,Zb as le,ab as Jt,ac as de,bc as nt,e as V,ea as qt,fb as te,ga as F,ha as Yt,hb as ee,ib as ie,ja as H,na as bt,yb as ne,zb as se}from"./chunk-RMK55XS2.js";import{a as b}from"./chunk-7CGTOI24.js";function fe(e,s){return e?e.classList?e.classList.contains(s):new RegExp("(^| )"+s+"( |$)","gi").test(e.className):!1}function wt(e,s){if(e&&s){let t=i=>{fe(e,i)||(e.classList?e.classList.add(i):e.className+=" "+i)};[s].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function ei(){return window.innerWidth-document.documentElement.offsetWidth}function K(e){for(let s of document?.styleSheets)try{for(let t of s?.cssRules)for(let i of t?.style)if(e.test(i))return{name:i,value:t.style.getPropertyValue(i).trim()}}catch{}return null}function Ii(e="p-overflow-hidden"){let s=K(/-scrollbar-width$/);s?.name&&document.body.style.setProperty(s.name,ei()+"px"),wt(document.body,e)}function B(e,s){if(e&&s){let t=i=>{e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[s].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function xi(e="p-overflow-hidden"){let s=K(/-scrollbar-width$/);s?.name&&document.body.style.removeProperty(s.name),B(document.body,e)}function he(e){let s={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",s.width=e.offsetWidth,s.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),s}function ge(){let e=window,s=document,t=s.documentElement,i=s.getElementsByTagName("body")[0],n=e.innerWidth||t.clientWidth||i.clientWidth,r=e.innerHeight||t.clientHeight||i.clientHeight;return{width:n,height:r}}function ii(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function ni(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Ni(e,s,t=!0){var i,n,r,o;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:he(e),l=a.height,c=a.width,d=s.offsetHeight,f=s.offsetWidth,u=s.getBoundingClientRect(),p=ni(),h=ii(),g=ge(),E,C,v="top";u.top+d+l>g.height?(E=u.top+p-l,v="bottom",E<0&&(E=p)):E=d+u.top+p,u.left+c>g.width?C=Math.max(0,u.left+h+f-c):C=u.left+h,e.style.top=E+"px",e.style.left=C+"px",e.style.transformOrigin=v,t&&(e.style.marginTop=v==="bottom"?`calc(${(n=(i=K(/-anchor-gutter$/))==null?void 0:i.value)!=null?n:"2px"} * -1)`:(o=(r=K(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"")}}function me(e,s){if(e instanceof HTMLElement){let t=e.offsetWidth;if(s){let i=getComputedStyle(e);t+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return t}return 0}function Di(e,s,t=!0){var i,n,r,o;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:he(e),l=s.offsetHeight,c=s.getBoundingClientRect(),d=ge(),f,u,p="top";c.top+l+a.height>d.height?(f=-1*a.height,p="bottom",c.top+f<0&&(f=-1*c.top)):f=l,a.width>d.width?u=c.left*-1:c.left+a.width>d.width?u=(c.left+a.width-d.width)*-1:u=0,e.style.top=f+"px",e.style.left=u+"px",e.style.transformOrigin=p,t&&(e.style.marginTop=p==="bottom"?`calc(${(n=(i=K(/-anchor-gutter$/))==null?void 0:i.value)!=null?n:"2px"} * -1)`:(o=(r=K(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"")}}function j(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function ye(e){let s=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?s=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?s=e.el.nativeElement:s=e.el)),j(s)?s:void 0}function Pi(e,s){let t=ye(e);if(t)t.appendChild(s);else throw new Error("Cannot append "+s+" to "+e)}function Ct(e,s={}){if(j(e)){let t=(i,n)=>{var r,o;let a=(r=e?.$attrs)!=null&&r[i]?[(o=e?.$attrs)==null?void 0:o[i]]:[];return[n].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let f=Array.isArray(c)?t(i,c):Object.entries(c).map(([u,p])=>i==="style"&&(p||p===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?u:void 0);l=f.length?l.concat(f.filter(u=>!!u)):l}}return l},a)};Object.entries(s).forEach(([i,n])=>{if(n!=null){let r=i.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),n):i==="p-bind"||i==="pBind"?Ct(e,n):(n=i==="class"?[...new Set(t("class",n))].join(" ").trim():i==="style"?t("style",n).join(";").trim():n,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=n),e.setAttribute(i,n))}})}}function Fi(e,s={},...t){if(e){let i=document.createElement(e);return Ct(i,s),i.append(...t),i}}function Mi(e,s){if(e){e.style.opacity="0";let t=+new Date,i="0",n=function(){i=`${+e.style.opacity+(new Date().getTime()-t)/s}`,e.style.opacity=i,t=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function si(e,s){return j(e)?Array.from(e.querySelectorAll(s)):[]}function $i(e,s){return j(e)?e.matches(s)?e:e.querySelector(s):null}function ki(e,s){e&&document.activeElement!==e&&e.focus(s)}function Hi(e,s){if(j(e)){let t=e.getAttribute(s);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Se(e,s=""){let t=si(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s}`),i=[];for(let n of t)getComputedStyle(n).display!="none"&&getComputedStyle(n).visibility!="hidden"&&i.push(n);return i}function Wi(e,s){let t=Se(e,s);return t.length>0?t[0]:null}function Dt(e){if(e){let s=e.offsetHeight,t=getComputedStyle(e);return s-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),s}return 0}function Bi(e,s){let t=Se(e,s);return t.length>0?t[t.length-1]:null}function be(e){if(e){let s=e.getBoundingClientRect();return{top:s.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:s.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Ee(e,s){if(e){let t=e.offsetHeight;if(s){let i=getComputedStyle(e);t+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return t}return 0}function Pt(e){if(e){let s=e.offsetWidth,t=getComputedStyle(e);return s-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),s}return 0}function Ui(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ve(e){var s;e&&("remove"in Element.prototype?e.remove():(s=e.parentNode)==null||s.removeChild(e))}function Vi(e,s){let t=ye(e);if(t)t.removeChild(s);else throw new Error("Cannot remove "+s+" from "+e)}function _e(e,s="",t){j(e)&&t!==null&&t!==void 0&&e.setAttribute(s,t)}var Tt={};function Ft(e="pui_id_"){return Tt.hasOwnProperty(e)||(Tt[e]=0),Tt[e]++,`${e}${Tt[e]}`}function we(){let e=new Map;return{on(s,t){let i=e.get(s);return i?i.push(t):i=[t],e.set(s,i),this},off(s,t){let i=e.get(s);return i&&i.splice(i.indexOf(t)>>>0,1),this},emit(s,t){let i=e.get(s);i&&i.slice().map(n=>{n(t)})},clear(){e.clear()}}}function M(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function ri(e){return!!(e&&e.constructor&&e.call&&e.apply)}function y(e){return!M(e)}function Yi(e,s){let t=-1;if(y(e))try{t=e.findLastIndex(s)}catch{t=e.lastIndexOf([...e].reverse().find(s))}return t}function D(e,s=!0){return e instanceof Object&&e.constructor===Object&&(s||Object.keys(e).length!==0)}function A(e,...s){return ri(e)?e(...s):e}function $(e,s=!0){return typeof e=="string"&&(s||e!=="")}function Ce(e){return $(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Ot(e,s="",t={}){let i=Ce(s).split("."),n=i.shift();return n?D(e)?Ot(A(e[Object.keys(e).find(r=>Ce(r)===n)||""],t),i.join("."),t):void 0:A(e,t)}function At(e,s=!0){return Array.isArray(e)&&(s||e.length!==0)}function Te(e){return y(e)&&!isNaN(e)}function Zi(e=""){return y(e)&&e.length===1&&!!e.match(/\S| /)}function T(e,s){if(s){let t=s.test(e);return s.lastIndex=0,t}return!1}function U(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Lt(e){return $(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(s,t)=>t===0?s:"-"+s.toLowerCase()).toLowerCase():e}function Mt(e){return $(e)?e.replace(/[A-Z]/g,(s,t)=>t===0?s:"."+s.toLowerCase()).toLowerCase():e}function oi(){let e=[],s=(o,a,l=999)=>{let c=n(o,a,l),d=c.value+(c.key===o?0:l)+1;return e.push({key:o,value:d}),d},t=o=>{e=e.filter(a=>a.value!==o)},i=(o,a)=>n(o,a).value,n=(o,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===o)||{key:o,value:l},r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,a,l)=>{a&&(a.style.zIndex=String(s(o,!0,l)))},clear:o=>{o&&(t(r(o)),o.style.zIndex="")},getCurrent:o=>i(o,!0)}}var Xi=oi();var ai=["*"];var _=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var gn=(()=>{class e{messageSource=new V;clearSource=new V;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),mn=(()=>{class e{clickSource=new V;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var yn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=Et({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:ai,decls:1,vars:0,template:function(i,n){i&1&&(ne(),se(0))},encapsulation:2})}return e})();var Sn=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(i){return new(i||e)(Xt(Zt))};static \u0275dir=W({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),Rt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=it({type:e});static \u0275inj=et({imports:[_t]})}return e})();var li=Object.defineProperty,ci=Object.defineProperties,di=Object.getOwnPropertyDescriptors,It=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,Oe=(e,s,t)=>s in e?li(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,I=(e,s)=>{for(var t in s||(s={}))Le.call(s,t)&&Oe(e,t,s[t]);if(It)for(var t of It(s))Re.call(s,t)&&Oe(e,t,s[t]);return e},$t=(e,s)=>ci(e,di(s)),P=(e,s)=>{var t={};for(var i in e)Le.call(e,i)&&s.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&It)for(var i of It(e))s.indexOf(i)<0&&Re.call(e,i)&&(t[i]=e[i]);return t};var pi=we(),O=pi;function Ae(e,s){At(e)?e.push(...s||[]):D(e)&&Object.assign(e,s)}function ui(e){return D(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function fi(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function kt(e="",s=""){return fi(`${$(e,!1)&&$(s,!1)?`${e}-`:e}${s}`)}function Ie(e="",s=""){return`--${kt(e,s)}`}function hi(e=""){let s=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(s+t)%2!==0}function xe(e,s="",t="",i=[],n){if($(e)){let r=/{([^}]*)}/g,o=e.trim();if(hi(o))return;if(T(o,r)){let a=o.replaceAll(r,d=>{let u=d.replace(/{|}/g,"").split(".").filter(p=>!i.some(h=>T(p,h)));return`var(${Ie(t,Lt(u.join("-")))}${y(n)?`, ${n}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return T(a.replace(c,"0"),l)?`calc(${a})`:a}return o}else if(Te(e))return e}function gi(e,s,t){$(s,!1)&&e.push(`${s}:${t};`)}function Y(e,s){return e?`${e}{${s}}`:""}var Z=(...e)=>mi(m.getTheme(),...e),mi=(e={},s,t,i)=>{if(s){let{variable:n,options:r}=m.defaults||{},{prefix:o,transform:a}=e?.options||r||{},c=T(s,/{([^}]*)}/g)?s:`{${s}}`;return i==="value"||M(i)&&a==="strict"?m.getTokenValue(s):xe(c,void 0,o,[n.excludedKeyRegex],t)}return""};function yi(e,s={}){let t=m.defaults.variable,{prefix:i=t.prefix,selector:n=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=s,o=(c,d="")=>Object.entries(c).reduce((f,[u,p])=>{let h=T(u,r)?kt(d):kt(d,Lt(u)),g=ui(p);if(D(g)){let{variables:E,tokens:C}=o(g,h);Ae(f.tokens,C),Ae(f.variables,E)}else f.tokens.push((i?h.replace(`${i}-`,""):h).replaceAll("-",".")),gi(f.variables,Ie(h),xe(g,h,i,[r]));return f},{variables:[],tokens:[]}),{variables:a,tokens:l}=o(e,i);return{value:a,tokens:l,declarations:a.join(""),css:Y(n,a.join(""))}}var R={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let s=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var i;return(i=s.map(n=>n.resolve(t)).find(n=>n.matched))!=null?i:this.rules.custom.resolve(t)})}},_toVariables(e,s){return yi(e,{prefix:s?.prefix})},getCommon({name:e="",theme:s={},params:t,set:i,defaults:n}){var r,o,a,l,c,d,f;let{preset:u,options:p}=s,h,g,E,C,v,k,L;if(y(u)&&p.transform!=="strict"){let{primitive:st,semantic:rt,extend:ot}=u,X=rt||{},{colorScheme:at}=X,lt=P(X,["colorScheme"]),ct=ot||{},{colorScheme:dt}=ct,J=P(ct,["colorScheme"]),tt=at||{},{dark:pt}=tt,ut=P(tt,["dark"]),ft=dt||{},{dark:ht}=ft,gt=P(ft,["dark"]),mt=y(st)?this._toVariables({primitive:st},p):{},yt=y(lt)?this._toVariables({semantic:lt},p):{},St=y(ut)?this._toVariables({light:ut},p):{},Bt=y(pt)?this._toVariables({dark:pt},p):{},Ut=y(J)?this._toVariables({semantic:J},p):{},Vt=y(gt)?this._toVariables({light:gt},p):{},zt=y(ht)?this._toVariables({dark:ht},p):{},[$e,ke]=[(r=mt.declarations)!=null?r:"",mt.tokens],[He,We]=[(o=yt.declarations)!=null?o:"",yt.tokens||[]],[Be,Ue]=[(a=St.declarations)!=null?a:"",St.tokens||[]],[Ve,ze]=[(l=Bt.declarations)!=null?l:"",Bt.tokens||[]],[Ge,Ke]=[(c=Ut.declarations)!=null?c:"",Ut.tokens||[]],[je,qe]=[(d=Vt.declarations)!=null?d:"",Vt.tokens||[]],[Ye,Ze]=[(f=zt.declarations)!=null?f:"",zt.tokens||[]];h=this.transformCSS(e,$e,"light","variable",p,i,n),g=ke;let Qe=this.transformCSS(e,`${He}${Be}`,"light","variable",p,i,n),Xe=this.transformCSS(e,`${Ve}`,"dark","variable",p,i,n);E=`${Qe}${Xe}`,C=[...new Set([...We,...Ue,...ze])];let Je=this.transformCSS(e,`${Ge}${je}color-scheme:light`,"light","variable",p,i,n),ti=this.transformCSS(e,`${Ye}color-scheme:dark`,"dark","variable",p,i,n);v=`${Je}${ti}`,k=[...new Set([...Ke,...qe,...Ze])],L=A(u.css,{dt:Z})}return{primitive:{css:h,tokens:g},semantic:{css:E,tokens:C},global:{css:v,tokens:k},style:L}},getPreset({name:e="",preset:s={},options:t,params:i,set:n,defaults:r,selector:o}){var a,l,c;let d,f,u;if(y(s)&&t.transform!=="strict"){let p=e.replace("-directive",""),h=s,{colorScheme:g,extend:E,css:C}=h,v=P(h,["colorScheme","extend","css"]),k=E||{},{colorScheme:L}=k,st=P(k,["colorScheme"]),rt=g||{},{dark:ot}=rt,X=P(rt,["dark"]),at=L||{},{dark:lt}=at,ct=P(at,["dark"]),dt=y(v)?this._toVariables({[p]:I(I({},v),st)},t):{},J=y(X)?this._toVariables({[p]:I(I({},X),ct)},t):{},tt=y(ot)?this._toVariables({[p]:I(I({},ot),lt)},t):{},[pt,ut]=[(a=dt.declarations)!=null?a:"",dt.tokens||[]],[ft,ht]=[(l=J.declarations)!=null?l:"",J.tokens||[]],[gt,mt]=[(c=tt.declarations)!=null?c:"",tt.tokens||[]],yt=this.transformCSS(p,`${pt}${ft}`,"light","variable",t,n,r,o),St=this.transformCSS(p,gt,"dark","variable",t,n,r,o);d=`${yt}${St}`,f=[...new Set([...ut,...ht,...mt])],u=A(C,{dt:Z})}return{css:d,tokens:f,style:u}},getPresetC({name:e="",theme:s={},params:t,set:i,defaults:n}){var r;let{preset:o,options:a}=s,l=(r=o?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:i,defaults:n})},getPresetD({name:e="",theme:s={},params:t,set:i,defaults:n}){var r;let o=e.replace("-directive",""),{preset:a,options:l}=s,c=(r=a?.directives)==null?void 0:r[o];return this.getPreset({name:o,preset:c,options:l,params:t,set:i,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,s){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?s.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:s.options.darkModeSelector):[]},getLayerOrder(e,s={},t,i){let{cssLayer:n}=s;return n?`@layer ${A(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:s={},params:t,props:i={},set:n,defaults:r}){let o=this.getCommon({name:e,theme:s,params:t,set:n,defaults:r}),a=Object.entries(i).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(o||{}).reduce((l,[c,d])=>{if(d?.css){let f=U(d?.css),u=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${u}" ${a}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:s={},params:t,props:i={},set:n,defaults:r}){var o;let a={name:e,theme:s,params:t,set:n,defaults:r},l=(o=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:o.css,c=Object.entries(i).reduce((d,[f,u])=>d.push(`${f}="${u}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${U(l)}</style>`:""},createTokens(e={},s,t="",i="",n={}){return Object.entries(e).forEach(([r,o])=>{let a=T(r,s.variable.excludedKeyRegex)?t:t?`${t}.${Mt(r)}`:Mt(r),l=i?`${i}.${r}`:r;D(o)?this.createTokens(o,s,a,l,n):(n[a]||(n[a]={paths:[],computed(c,d={}){var f,u;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,d.binding):c&&c!=="none"?(u=this.paths.find(p=>p.scheme===c))==null?void 0:u.computed(c,d.binding):this.paths.map(p=>p.computed(p.scheme,d[p.scheme]))}}),n[a].paths.push({path:l,value:o,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,d={}){let f=/{([^}]*)}/g,u=o;if(d.name=this.path,d.binding||(d.binding={}),T(o,f)){let h=o.trim().replaceAll(f,C=>{var v;let k=C.replace(/{|}/g,""),L=(v=n[k])==null?void 0:v.computed(c,d);return At(L)&&L.length===2?`light-dark(${L[0].value},${L[1].value})`:L?.value}),g=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,E=/var\([^)]+\)/g;u=T(h.replace(E,"0"),g)?`calc(${h})`:h}return M(d.binding)&&delete d.binding,{colorScheme:c,path:this.path,paths:d,value:u.includes("undefined")?void 0:u}}}))}),n},getTokenValue(e,s,t){var i;let r=(l=>l.split(".").filter(d=>!T(d.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(s),o=s.includes("colorScheme.light")?"light":s.includes("colorScheme.dark")?"dark":void 0,a=[(i=e[r])==null?void 0:i.computed(o)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let d=c,{colorScheme:f}=d,u=P(d,["colorScheme"]);return l[f]=u,l},void 0)},getSelectorRule(e,s,t,i){return t==="class"||t==="attr"?Y(y(s)?`${e}${s},${e} ${s}`:e,i):Y(e,y(s)?Y(s,i):i)},transformCSS(e,s,t,i,n={},r,o,a){if(y(s)){let{cssLayer:l}=n;if(i!=="style"){let c=this.getColorSchemeOption(n,o);s=t==="dark"?c.reduce((d,{type:f,selector:u})=>(y(u)&&(d+=u.includes("[CSS]")?u.replace("[CSS]",s):this.getSelectorRule(u,a,f,s)),d),""):Y(a??":root",s)}if(l){let c={name:"primeui",order:"primeui"};D(l)&&(c.name=A(l.name,{name:e,type:i})),y(c.name)&&(s=Y(`@layer ${c.name}`,s),r?.layerNames(c.name))}return s}return""}},m={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:s}=e;s&&(this._theme=$t(I({},s),{options:I(I({},this.defaults.options),s.options)}),this._tokens=R.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),O.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=$t(I({},this.theme),{preset:e}),this._tokens=R.createTokens(e,this.defaults),this.clearLoadedStyleNames(),O.emit("preset:change",e),O.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=$t(I({},this.theme),{options:e}),this.clearLoadedStyleNames(),O.emit("options:change",e),O.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return R.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",s){return R.getCommon({name:e,theme:this.theme,params:s,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",s){let t={name:e,theme:this.theme,params:s,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return R.getPresetC(t)},getDirective(e="",s){let t={name:e,theme:this.theme,params:s,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return R.getPresetD(t)},getCustomPreset(e="",s,t,i){let n={name:e,preset:s,options:this.options,selector:t,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return R.getPreset(n)},getLayerOrderCSS(e=""){return R.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",s,t="style",i){return R.transformCSS(e,s,i,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",s,t={}){return R.getCommonStyleSheet({name:e,theme:this.theme,params:s,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,s,t={}){return R.getStyleSheet({name:e,theme:this.theme,params:s,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:s}){this._loadingStyles.size&&(this._loadingStyles.delete(s),O.emit(`theme:${s}:load`,e),!this._loadingStyles.size&&O.emit("theme:load"))}};var Si=0,Ne=(()=>{class e{document=S(G);use(t,i={}){let n=!1,r=t,o=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++Si}`,id:d=void 0,media:f=void 0,nonce:u=void 0,first:p=!1,props:h={}}=i;if(this.document){if(o=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!o.isConnected){r=t,Ct(o,{type:"text/css",media:f,nonce:u});let g=this.document.head;p&&g.firstChild?g.insertBefore(o,g.firstChild):g.appendChild(o),_e(o,"data-primeng-style-id",c)}return o.textContent!==r&&(o.textContent=r),{id:d,name:c,el:o,css:r}}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Q={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},bi=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Ei=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,x=(()=>{class e{name="base";useStyle=S(Ne);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,i={},n=r=>r)=>{let r=n(A(t,{dt:Z}));return r?this.useStyle.use(U(r),b({name:this.name},i)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},i="")=>this.load(this.theme,t,(n="")=>m.transformCSS(t.name||this.name,`${n}${i}`));loadGlobalCSS=(t={})=>this.load(Ei,t);loadGlobalTheme=(t={},i="")=>this.load(bi,t,(n="")=>m.transformCSS(t.name||this.name,`${n}${i}`));getCommonTheme=t=>m.getCommon(this.name,t);getComponentTheme=t=>m.getComponent(this.name,t);getDirectiveTheme=t=>m.getDirective(this.name,t);getPresetTheme=(t,i,n)=>m.getCustomPreset(this.name,t,i,n);getLayerOrderThemeCSS=()=>m.getLayerOrderCSS(this.name);getStyleSheet=(t="",i={})=>{if(this.css){let n=A(this.css,{dt:Z}),r=U(`${n}${t}`),o=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${o}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,i={})=>m.getCommonStyleSheet(this.name,t,i);getThemeStyleSheet=(t,i={})=>{let n=[m.getStyleSheet(this.name,t,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,o=A(this.theme,{dt:Z}),a=U(m.transformCSS(r,o)),l=Object.entries(i).reduce((c,[d,f])=>c.push(`${d}="${f}"`)&&c,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return n.join("")};static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var vi=(()=>{class e{theme=H(void 0);csp=H({nonce:void 0});isThemeChanged=!1;document=S(G);baseStyle=S(x);constructor(){nt(()=>{O.on("theme:change",t=>{ce(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),nt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){m.clearLoadedStyleNames(),O.clear()}onThemeChange(t){m.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!m.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:n,style:r}=this.baseStyle.getCommonTheme?.()||{},o={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,b({name:"primitive-variables"},o)),this.baseStyle.load(i?.css,b({name:"semantic-variables"},o)),this.baseStyle.load(n?.css,b({name:"global-variables"},o)),this.baseStyle.loadGlobalTheme(b({name:"global-style"},o),r),m.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:i,csp:n}=t||{};i&&this.theme.set(i),n&&this.csp.set(n)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Wt=(()=>{class e extends vi{ripple=H(!1);platformId=S(bt);inputStyle=H(null);inputVariant=H(null);overlayOptions={};csp=H({nonce:void 0});filterMatchModeOptions={text:[_.STARTS_WITH,_.CONTAINS,_.NOT_CONTAINS,_.ENDS_WITH,_.EQUALS,_.NOT_EQUALS],numeric:[_.EQUALS,_.NOT_EQUALS,_.LESS_THAN,_.LESS_THAN_OR_EQUAL_TO,_.GREATER_THAN,_.GREATER_THAN_OR_EQUAL_TO],date:[_.DATE_IS,_.DATE_IS_NOT,_.DATE_BEFORE,_.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new V;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=b(b({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:i,ripple:n,inputStyle:r,inputVariant:o,theme:a,overlayOptions:l,translation:c}=t||{};i&&this.csp.set(i),n&&this.ripple.set(n),r&&this.inputStyle.set(r),o&&this.inputVariant.set(o),l&&(this.overlayOptions=l),c&&this.setTranslation(c),a&&this.setThemeConfig({theme:a,csp:i})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=N(e)))(n||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),_i=new Gt("PRIME_NG_CONFIG");function Zn(...e){let s=e?.map(i=>({provide:_i,useValue:i,multi:!1})),t=Jt(()=>{let i=S(Wt);e?.forEach(n=>i.setConfig(n))});return Kt([...s,t])}var De=(()=>{class e extends x{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=N(e)))(n||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),xt=(()=>{class e{document=S(G);platformId=S(bt);el=S(Yt);injector=S(jt);cd=S(ae);renderer=S(Qt);config=S(Wt);baseComponentStyle=S(De);baseStyle=S(x);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ft("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,i="",n={}){return Ot(t,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!ue(this.platformId)){let{dt:i}=t;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>O.off("theme:change",t))}_loadStyles(){let t=()=>{Q.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Q.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Q.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Q.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!m.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:n,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,b({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,b({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,b({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(b({name:"global-style"},this.styleOptions),r),m.setLoadedStyleName("common")}if(!m.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,b({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(b({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),m.setLoadedStyleName(this.componentStyle?.name)}if(!m.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,b({name:"layer-order",first:!0},this.styleOptions)),m.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:i}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,b({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Q.clearLoadedStyleNames(),O.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,i){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let i=this.componentStyle?.inlineStyles?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:b({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||e)};static \u0275dir=W({type:e,inputs:{dt:"dt"},features:[z([De,x]),Nt]})}return e})();var wi=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Ci={root:({props:e,instance:s})=>["p-badge p-component",{"p-badge-circle":y(e.value)&&String(e.value).length===1,"p-badge-dot":M(e.value)&&!s.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Pe=(()=>{class e extends x{name="badge";theme=wi;classes=Ci;static \u0275fac=(()=>{let t;return function(n){return(t||(t=N(e)))(n||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Ti=(()=>{class e extends xt{styleClass=F();style=F();badgeSize=F();size=F();severity=F();value=F();badgeDisabled=F(!1,{transform:le});_componentStyle=S(Pe);containerClass=de(()=>{let t="p-badge p-component";return y(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),M(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=N(e)))(n||e)}})();static \u0275cmp=Et({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,n){i&2&&(ee(n.style()),ie(n.containerClass()),te("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[z([Pe]),vt],decls:1,vars:1,template:function(i,n){i&1&&re(0),i&2&&oe(n.value())},dependencies:[_t,Rt],encapsulation:2,changeDetection:0})}return e})(),Us=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=it({type:e});static \u0275inj=et({imports:[Ti,Rt,Rt]})}return e})();var Oi=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,i){t&&i&&(t.classList?t.classList.add(i):t.className+=" "+i)}static addMultipleClasses(t,i){if(t&&i)if(t.classList){let n=i.trim().split(" ");for(let r=0;r<n.length;r++)t.classList.add(n[r])}else{let n=i.split(" ");for(let r=0;r<n.length;r++)t.className+=" "+n[r]}}static removeClass(t,i){t&&i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,i){t&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,i){return t&&i?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(i){return i!==t})}static find(t,i){return Array.from(t.querySelectorAll(i))}static findSingle(t,i){return this.isElement(t)?t.querySelector(i):null}static index(t){let i=t.parentNode.childNodes,n=0;for(var r=0;r<i.length;r++){if(i[r]==t)return n;i[r].nodeType==1&&n++}return-1}static indexWithinGroup(t,i){let n=t.parentNode?t.parentNode.childNodes:[],r=0;for(var o=0;o<n.length;o++){if(n[o]==t)return r;n[o].attributes&&n[o].attributes[i]&&n[o].nodeType==1&&r++}return-1}static appendOverlay(t,i,n="self"){n!=="self"&&t&&i&&this.appendChild(t,i)}static alignOverlay(t,i,n="self",r=!0){t&&i&&(r&&(t.style.minWidth=`${e.getOuterWidth(i)}px`),n==="self"?this.relativePosition(t,i):this.absolutePosition(t,i))}static relativePosition(t,i,n=!0){let r=v=>{if(v)return getComputedStyle(v).getPropertyValue("position")==="relative"?v:r(v.parentElement)},o=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.offsetHeight,l=i.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),f=this.getViewport(),p=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*d},h,g;l.top+a+o.height>f.height?(h=l.top-p.top-o.height,t.style.transformOrigin="bottom",l.top+h<0&&(h=-1*l.top)):(h=a+l.top-p.top,t.style.transformOrigin="top");let E=l.left+o.width-f.width,C=l.left-p.left;o.width>f.width?g=(l.left-p.left)*-1:E>0?g=C-E:g=l.left-p.left,t.style.top=h+"px",t.style.left=g+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,i,n=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),o=r.height,a=r.width,l=i.offsetHeight,c=i.offsetWidth,d=i.getBoundingClientRect(),f=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),h,g;d.top+l+o>p.height?(h=d.top+f-o,t.style.transformOrigin="bottom",h<0&&(h=f)):(h=l+d.top+f,t.style.transformOrigin="top"),d.left+a>p.width?g=Math.max(0,d.left+u+c-a):g=d.left+u,t.style.top=h+"px",t.style.left=g+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,i=[]){return t.parentNode===null?i:this.getParents(t.parentNode,i.concat([t.parentNode]))}static getScrollableParents(t){let i=[];if(t){let n=this.getParents(t),r=/(auto|scroll)/,o=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let f=this.findSingle(a,d);f&&o(f)&&i.push(f)}}a.nodeType!==9&&o(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementDimensions(t){let i={};return t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",i}static scrollInView(t,i){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),a=o?parseFloat(o):0,l=t.getBoundingClientRect(),d=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,f=t.scrollTop,u=t.clientHeight,p=this.getOuterHeight(i);d<0?t.scrollTop=f+d:d+p>u&&(t.scrollTop=f+d-u+p)}static fadeIn(t,i){t.style.opacity=0;let n=+new Date,r=0,o=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,t.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}static fadeOut(t,i){var n=1,r=50,o=i,a=r/o;let l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,i){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(o){return[].indexOf.call(document.querySelectorAll(o),this)!==-1};return r.call(t,i)}static getOuterWidth(t,i){let n=t.offsetWidth;if(i){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}static getHorizontalPadding(t){let i=getComputedStyle(t);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(t){let i=getComputedStyle(t);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(t){let i=t.offsetWidth,n=getComputedStyle(t);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(t){let i=t.offsetWidth,n=getComputedStyle(t);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(t){let i=t.offsetHeight,n=getComputedStyle(t);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(t,i){let n=t.offsetHeight;if(i){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}static getHeight(t){let i=t.offsetHeight,n=getComputedStyle(t);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(t){let i=t.offsetWidth,n=getComputedStyle(t);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let t=window,i=document,n=i.documentElement,r=i.getElementsByTagName("body")[0],o=t.innerWidth||n.clientWidth||r.clientWidth,a=t.innerHeight||n.clientHeight||r.clientHeight;return{width:o,height:a}}static getOffset(t){var i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,i){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,i=t.indexOf("MSIE ");if(i>0)return!0;var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return!0}var o=t.indexOf("Edge/");return o>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,i){if(this.isElement(i))i.appendChild(t);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(t);else throw"Cannot append "+i+" to "+t}static removeChild(t,i){if(this.isElement(i))i.removeChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+i}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(t,i,n){t[i].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,i){t&&document.activeElement!==t&&t.focus(i)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,i=""){let n=this.find(t,this.getFocusableSelectorString(i)),r=[];for(let o of n){let a=getComputedStyle(o);this.isVisible(o)&&a.display!="none"&&a.visibility!="hidden"&&r.push(o)}return r}static getFocusableElement(t,i=""){let n=this.findSingle(t,this.getFocusableSelectorString(i));if(n){let r=getComputedStyle(n);if(this.isVisible(n)&&r.display!="none"&&r.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,i=""){let n=this.getFocusableElements(t,i);return n.length>0?n[0]:null}static getLastFocusableElement(t,i){let n=this.getFocusableElements(t,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,i=!1){let n=e.getFocusableElements(t),r=0;if(n&&n.length>0){let o=n.indexOf(n[0].ownerDocument.activeElement);i?o==-1||o===0?r=n.length-1:r=o-1:o!=-1&&o!==n.length-1&&(r=o+1)}return n[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,i){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let o=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return o&&o.nodeType===9||this.isExist(o)?o:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,i){if(t){let n=t.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,i={},...n){if(t){let r=document.createElement(t);return this.setAttributes(r,i),r.append(...n),r}}static setAttribute(t,i="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(i,n)}static setAttributes(t,i={}){if(this.isElement(t)){let n=(r,o)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let f=Array.isArray(c)?n(r,c):Object.entries(c).map(([u,p])=>r==="style"&&(p||p===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?u:void 0);l=f.length?l.concat(f.filter(u=>!!u)):l}}return l},a)};Object.entries(i).forEach(([r,o])=>{if(o!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),o):r==="pBind"?this.setAttributes(t,o):(o=r==="class"?[...new Set(n("class",o))].join(" ").trim():r==="style"?n("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=o),t.setAttribute(r,o))}})}}static isFocusableElement(t,i=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return e})(),Fe=class{element;listener;scrollableParents;constructor(s,t=()=>{}){this.element=s,this.listener=t}bindScrollListener(){this.scrollableParents=Oi.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ai=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Li={root:"p-ink"},Me=(()=>{class e extends x{name="ripple";theme=Ai;classes=Li;static \u0275fac=(()=>{let t;return function(n){return(t||(t=N(e)))(n||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Js=(()=>{class e extends xt{zone=S(qt);_componentStyle=S(Me);animationListener;mouseDownListener;timeout;constructor(){super(),nt(()=>{pe(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(B(i,"p-ink-active"),!Dt(i)&&!Pt(i)){let a=Math.max(me(this.el.nativeElement),Ee(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let n=be(this.el.nativeElement),r=t.pageX-n.left+this.document.body.scrollTop-Pt(i)/2,o=t.pageY-n.top+this.document.body.scrollLeft-Dt(i)/2;this.renderer.setStyle(i,"top",o+"px"),this.renderer.setStyle(i,"left",r+"px"),wt(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&B(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&B(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),B(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ve(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=W({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[z([Me]),vt]})}return e})();function Ri(){let e=[],s=(r,o)=>{let a=e.length>0?e[e.length-1]:{key:r,value:o},l=a.value+(a.key===r?0:o)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(o=>o.value!==r)},i=()=>e.length>0?e[e.length-1].value:0,n=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:n,set:(r,o,a)=>{o&&(o.style.zIndex=String(s(r,a)))},clear:r=>{r&&(t(n(r)),r.style.zIndex="")},getCurrent:()=>i(),generateZIndex:s,revertZIndex:t}}var er=Ri(),ir=e=>!!e;export{fe as a,wt as b,Ii as c,xi as d,ge as e,ii as f,ni as g,Ni as h,me as i,Di as j,Pi as k,Fi as l,Mi as m,si as n,$i as o,ki as p,Hi as q,Wi as r,Bi as s,Ee as t,Ui as u,Vi as v,_e as w,M as x,y,Yi as z,A,Zi as B,Ft as C,gn as D,mn as E,yn as F,Sn as G,Rt as H,x as I,Zn as J,xt as K,Ti as L,Us as M,Oi as N,Fe as O,Js as P,er as Q,ir as R};
