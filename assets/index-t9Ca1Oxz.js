var $v=Object.defineProperty;var xv=(e,t,r)=>t in e?$v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pd=(e,t,r)=>xv(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ao(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const tt={},_n=[],cr=()=>{},kh=()=>!1,fs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),hs=e=>e.startsWith("onUpdate:"),_t=Object.assign,Oo=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Sv=Object.prototype.hasOwnProperty,Fe=(e,t)=>Sv.call(e,t),Ce=Array.isArray,bn=e=>pi(e)==="[object Map]",Th=e=>pi(e)==="[object Set]",fd=e=>pi(e)==="[object Date]",Oe=e=>typeof e=="function",ot=e=>typeof e=="string",fr=e=>typeof e=="symbol",Ye=e=>e!==null&&typeof e=="object",Eh=e=>(Ye(e)||Oe(e))&&Oe(e.then)&&Oe(e.catch),Ih=Object.prototype.toString,pi=e=>Ih.call(e),kv=e=>pi(e).slice(8,-1),Ch=e=>pi(e)==="[object Object]",Ro=e=>ot(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zn=Ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ms=e=>{const t=Object.create(null);return(r=>t[r]||(t[r]=e(r)))},Tv=/-\w/g,Xt=ms(e=>e.replace(Tv,t=>t.slice(1).toUpperCase())),Ev=/\B([A-Z])/g,un=ms(e=>e.replace(Ev,"-$1").toLowerCase()),zh=ms(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fs=ms(e=>e?`on${zh(e)}`:""),ur=(e,t)=>!Object.is(e,t),Gs=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Ah=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Iv=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let hd;const gs=()=>hd||(hd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mo(e){if(Ce(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=ot(n)?Ov(n):Mo(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(ot(e)||Ye(e))return e}const Cv=/;(?![^(]*\))/g,zv=/:([^]+)/,Av=/\/\*[^]*?\*\//g;function Ov(e){const t={};return e.replace(Av,"").split(Cv).forEach(r=>{if(r){const n=r.split(zv);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function At(e){let t="";if(ot(e))t=e;else if(Ce(e))for(let r=0;r<e.length;r++){const n=At(e[r]);n&&(t+=n+" ")}else if(Ye(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Rv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mv=Ao(Rv);function Oh(e){return!!e||e===""}function Bv(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Bo(e[n],t[n]);return r}function Bo(e,t){if(e===t)return!0;let r=fd(e),n=fd(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=fr(e),n=fr(t),r||n)return e===t;if(r=Ce(e),n=Ce(t),r||n)return r&&n?Bv(e,t):!1;if(r=Ye(e),n=Ye(t),r||n){if(!r||!n)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Bo(e[a],t[a]))return!1}}return String(e)===String(t)}const Rh=e=>!!(e&&e.__v_isRef===!0),nt=e=>ot(e)?e:e==null?"":Ce(e)||Ye(e)&&(e.toString===Ih||!Oe(e.toString))?Rh(e)?nt(e.value):JSON.stringify(e,Mh,2):String(e),Mh=(e,t)=>Rh(t)?Mh(e,t.value):bn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[js(n,s)+" =>"]=i,r),{})}:Th(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>js(r))}:fr(t)?js(t):Ye(t)&&!Ce(t)&&!Ch(t)?String(t):t,js=(e,t="")=>{var r;return fr(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class Nv{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&gt&&(gt.active?(this.parent=gt,this.index=(gt.scopes||(gt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=gt;try{return gt=this,t()}finally{gt=r}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){if(this._on>0&&--this._on===0){if(gt===this)gt=this.prevScope;else{let t=gt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Dv(){return gt}let et;const Ks=new WeakSet;class Bh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&(gt.active?gt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ks.has(this)&&(Ks.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,md(this),Ph(this);const t=et,r=Zt;et=this,Zt=!0;try{return this.fn()}finally{Uh(this),et=t,Zt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Po(t);this.deps=this.depsTail=void 0,md(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ks.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ro(this)&&this.run()}get dirty(){return ro(this)}}let Nh=0,Yn,Qn;function Dh(e,t=!1){if(e.flags|=8,t){e.next=Qn,Qn=e;return}e.next=Yn,Yn=e}function No(){Nh++}function Do(){if(--Nh>0)return;if(Qn){let t=Qn;for(Qn=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Yn;){let t=Yn;for(Yn=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function Ph(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Uh(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Po(n),Pv(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function ro(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Lh(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===si)||(e.globalVersion=si,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ro(e))))return;e.flags|=2;const t=e.dep,r=et,n=Zt;et=e,Zt=!0;try{Ph(e);const i=e.fn(e._value);(t.version===0||ur(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{et=r,Zt=n,Uh(e),e.flags&=-3}}function Po(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)Po(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Pv(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Zt=!0;const qh=[];function xr(){qh.push(Zt),Zt=!1}function Sr(){const e=qh.pop();Zt=e===void 0?!0:e}function md(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=et;et=void 0;try{t()}finally{et=r}}}let si=0;class Uv{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!et||!Zt||et===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==et)r=this.activeLink=new Uv(et,this),et.deps?(r.prevDep=et.depsTail,et.depsTail.nextDep=r,et.depsTail=r):et.deps=et.depsTail=r,Wh(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=et.depsTail,r.nextDep=void 0,et.depsTail.nextDep=r,et.depsTail=r,et.deps===r&&(et.deps=n)}return r}trigger(t){this.version++,si++,this.notify(t)}notify(t){No();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Do()}}}function Wh(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Wh(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const no=new WeakMap,tn=Symbol(""),io=Symbol(""),ai=Symbol("");function wt(e,t,r){if(Zt&&et){let n=no.get(e);n||no.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Uo),i.map=n,i.key=r),i.track()}}function wr(e,t,r,n,i,s){const a=no.get(e);if(!a){si++;return}const o=l=>{l&&l.trigger()};if(No(),t==="clear")a.forEach(o);else{const l=Ce(e),u=l&&Ro(r);if(l&&r==="length"){const c=Number(n);a.forEach((p,h)=>{(h==="length"||h===ai||!fr(h)&&h>=c)&&o(p)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),u&&o(a.get(ai)),t){case"add":l?u&&o(a.get("length")):(o(a.get(tn)),bn(e)&&o(a.get(io)));break;case"delete":l||(o(a.get(tn)),bn(e)&&o(a.get(io)));break;case"set":bn(e)&&o(a.get(tn));break}}Do()}function fn(e){const t=He(e);return t===e?t:(wt(t,"iterate",ai),Ut(e)?t:t.map(Qt))}function ys(e){return wt(e=He(e),"iterate",ai),e}function or(e,t){return kr(e)?xn(rn(e)?Qt(t):t):Qt(t)}const Lv={__proto__:null,[Symbol.iterator](){return Xs(this,Symbol.iterator,e=>or(this,e))},concat(...e){return fn(this).concat(...e.map(t=>Ce(t)?fn(t):t))},entries(){return Xs(this,"entries",e=>(e[1]=or(this,e[1]),e))},every(e,t){return yr(this,"every",e,t,void 0,arguments)},filter(e,t){return yr(this,"filter",e,t,r=>r.map(n=>or(this,n)),arguments)},find(e,t){return yr(this,"find",e,t,r=>or(this,r),arguments)},findIndex(e,t){return yr(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return yr(this,"findLast",e,t,r=>or(this,r),arguments)},findLastIndex(e,t){return yr(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return yr(this,"forEach",e,t,void 0,arguments)},includes(...e){return Zs(this,"includes",e)},indexOf(...e){return Zs(this,"indexOf",e)},join(e){return fn(this).join(e)},lastIndexOf(...e){return Zs(this,"lastIndexOf",e)},map(e,t){return yr(this,"map",e,t,void 0,arguments)},pop(){return On(this,"pop")},push(...e){return On(this,"push",e)},reduce(e,...t){return gd(this,"reduce",e,t)},reduceRight(e,...t){return gd(this,"reduceRight",e,t)},shift(){return On(this,"shift")},some(e,t){return yr(this,"some",e,t,void 0,arguments)},splice(...e){return On(this,"splice",e)},toReversed(){return fn(this).toReversed()},toSorted(e){return fn(this).toSorted(e)},toSpliced(...e){return fn(this).toSpliced(...e)},unshift(...e){return On(this,"unshift",e)},values(){return Xs(this,"values",e=>or(this,e))}};function Xs(e,t,r){const n=ys(e),i=n[t]();return n!==e&&!Ut(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=r(s.value)),s}),i}const qv=Array.prototype;function yr(e,t,r,n,i,s){const a=ys(e),o=a!==e&&!Ut(e),l=a[t];if(l!==qv[t]){const p=l.apply(e,s);return o?Qt(p):p}let u=r;a!==e&&(o?u=function(p,h){return r.call(this,or(e,p),h,e)}:r.length>2&&(u=function(p,h){return r.call(this,p,h,e)}));const c=l.call(a,u,n);return o&&i?i(c):c}function gd(e,t,r,n){const i=ys(e),s=i!==e&&!Ut(e);let a=r,o=!1;i!==e&&(s?(o=n.length===0,a=function(u,c,p){return o&&(o=!1,u=or(e,u)),r.call(this,u,or(e,c),p,e)}):r.length>3&&(a=function(u,c,p){return r.call(this,u,c,p,e)}));const l=i[t](a,...n);return o?or(e,l):l}function Zs(e,t,r){const n=He(e);wt(n,"iterate",ai);const i=n[t](...r);return(i===-1||i===!1)&&Vo(r[0])?(r[0]=He(r[0]),n[t](...r)):i}function On(e,t,r=[]){xr(),No();const n=He(e)[t].apply(e,r);return Do(),Sr(),n}const Wv=Ao("__proto__,__v_isRef,__isVue"),Vh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fr));function Vv(e){fr(e)||(e=String(e));const t=He(this);return wt(t,"has",e),t.hasOwnProperty(e)}class Hh{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?Jv:Kh:s?jh:Gh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Ce(t);if(!i){let l;if(a&&(l=Lv[r]))return l;if(r==="hasOwnProperty")return Vv}const o=Reflect.get(t,r,$t(t)?t:n);if((fr(r)?Vh.has(r):Wv(r))||(i||wt(t,"get",r),s))return o;if($t(o)){const l=a&&Ro(r)?o:o.value;return i&&Ye(l)?ao(l):l}return Ye(o)?i?ao(o):qo(o):o}}class Fh extends Hh{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const a=Ce(t)&&Ro(r);if(!this._isShallow){const u=kr(s);if(!Ut(n)&&!kr(n)&&(s=He(s),n=He(n)),!a&&$t(s)&&!$t(n))return u||(s.value=n),!0}const o=a?Number(r)<t.length:Fe(t,r),l=Reflect.set(t,r,n,$t(t)?t:i);return t===He(i)&&(o?ur(n,s)&&wr(t,"set",r,n):wr(t,"add",r,n)),l}deleteProperty(t,r){const n=Fe(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&wr(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!fr(r)||!Vh.has(r))&&wt(t,"has",r),n}ownKeys(t){return wt(t,"iterate",Ce(t)?"length":tn),Reflect.ownKeys(t)}}class Hv extends Hh{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Fv=new Fh,Gv=new Hv,jv=new Fh(!0);const so=e=>e,Ii=e=>Reflect.getPrototypeOf(e);function Kv(e,t,r){return function(...n){const i=this.__v_raw,s=He(i),a=bn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=i[e](...n),c=r?so:t?xn:Qt;return!t&&wt(s,"iterate",l?io:tn),_t(Object.create(u),{next(){const{value:p,done:h}=u.next();return h?{value:p,done:h}:{value:o?[c(p[0]),c(p[1])]:c(p),done:h}}})}}function Ci(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xv(e,t){const r={get(i){const s=this.__v_raw,a=He(s),o=He(i);e||(ur(i,o)&&wt(a,"get",i),wt(a,"get",o));const{has:l}=Ii(a),u=t?so:e?xn:Qt;if(l.call(a,i))return u(s.get(i));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&wt(He(i),"iterate",tn),i.size},has(i){const s=this.__v_raw,a=He(s),o=He(i);return e||(ur(i,o)&&wt(a,"has",i),wt(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=He(o),u=t?so:e?xn:Qt;return!e&&wt(l,"iterate",tn),o.forEach((c,p)=>i.call(s,u(c),u(p),a))}};return _t(r,e?{add:Ci("add"),set:Ci("set"),delete:Ci("delete"),clear:Ci("clear")}:{add(i){const s=He(this),a=Ii(s),o=He(i),l=!t&&!Ut(i)&&!kr(i)?o:i;return a.has.call(s,l)||ur(i,l)&&a.has.call(s,i)||ur(o,l)&&a.has.call(s,o)||(s.add(l),wr(s,"add",l,l)),this},set(i,s){!t&&!Ut(s)&&!kr(s)&&(s=He(s));const a=He(this),{has:o,get:l}=Ii(a);let u=o.call(a,i);u||(i=He(i),u=o.call(a,i));const c=l.call(a,i);return a.set(i,s),u?ur(s,c)&&wr(a,"set",i,s):wr(a,"add",i,s),this},delete(i){const s=He(this),{has:a,get:o}=Ii(s);let l=a.call(s,i);l||(i=He(i),l=a.call(s,i)),o&&o.call(s,i);const u=s.delete(i);return l&&wr(s,"delete",i,void 0),u},clear(){const i=He(this),s=i.size!==0,a=i.clear();return s&&wr(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=Kv(i,e,t)}),r}function Lo(e,t){const r=Xv(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(Fe(r,i)&&i in n?r:n,i,s)}const Zv={get:Lo(!1,!1)},Yv={get:Lo(!1,!0)},Qv={get:Lo(!0,!1)};const Gh=new WeakMap,jh=new WeakMap,Kh=new WeakMap,Jv=new WeakMap;function ew(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qo(e){return kr(e)?e:Wo(e,!1,Fv,Zv,Gh)}function tw(e){return Wo(e,!1,jv,Yv,jh)}function ao(e){return Wo(e,!0,Gv,Qv,Kh)}function Wo(e,t,r,n,i){if(!Ye(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=ew(kv(e));if(a===0)return e;const o=new Proxy(e,a===2?n:r);return i.set(e,o),o}function rn(e){return kr(e)?rn(e.__v_raw):!!(e&&e.__v_isReactive)}function kr(e){return!!(e&&e.__v_isReadonly)}function Ut(e){return!!(e&&e.__v_isShallow)}function Vo(e){return e?!!e.__v_raw:!1}function He(e){const t=e&&e.__v_raw;return t?He(t):e}function rw(e){return!Fe(e,"__v_skip")&&Object.isExtensible(e)&&Ah(e,"__v_skip",!0),e}const Qt=e=>Ye(e)?qo(e):e,xn=e=>Ye(e)?ao(e):e;function $t(e){return e?e.__v_isRef===!0:!1}function De(e){return Zh(e,!1)}function Xh(e){return Zh(e,!0)}function Zh(e,t){return $t(e)?e:new nw(e,t)}class nw{constructor(t,r){this.dep=new Uo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:He(t),this._value=r?t:Qt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Ut(t)||kr(t);t=n?t:He(t),ur(t,r)&&(this._rawValue=t,this._value=n?t:Qt(t),this.dep.trigger())}}function yt(e){return $t(e)?e.value:e}const iw={get:(e,t,r)=>t==="__v_raw"?e:yt(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return $t(i)&&!$t(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function Yh(e){return rn(e)?e:new Proxy(e,iw)}class sw{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Uo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return Dh(this,!0),!0}get value(){const t=this.dep.track();return Lh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function aw(e,t,r=!1){let n,i;return Oe(e)?n=e:(n=e.get,i=e.set),new sw(n,i,r)}const zi={},Qi=new WeakMap;let Xr;function ow(e,t=!1,r=Xr){if(r){let n=Qi.get(r);n||Qi.set(r,n=[]),n.push(e)}}function lw(e,t,r=tt){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,u=x=>i?x:Ut(x)||i===!1||i===0?Nr(x,1):Nr(x);let c,p,h,m,_=!1,b=!1;if($t(e)?(p=()=>e.value,_=Ut(e)):rn(e)?(p=()=>u(e),_=!0):Ce(e)?(b=!0,_=e.some(x=>rn(x)||Ut(x)),p=()=>e.map(x=>{if($t(x))return x.value;if(rn(x))return u(x);if(Oe(x))return l?l(x,2):x()})):Oe(e)?t?p=l?()=>l(e,2):e:p=()=>{if(h){xr();try{h()}finally{Sr()}}const x=Xr;Xr=c;try{return l?l(e,3,[m]):e(m)}finally{Xr=x}}:p=cr,t&&i){const x=p,E=i===!0?1/0:i;p=()=>Nr(x(),E)}const k=Dv(),v=()=>{c.stop(),k&&k.active&&Oo(k.effects,c)};if(s&&t){const x=t;t=(...E)=>{const A=x(...E);return v(),A}}let w=b?new Array(e.length).fill(zi):zi;const T=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(t){const E=c.run();if(x||i||_||(b?E.some((A,O)=>ur(A,w[O])):ur(E,w))){h&&h();const A=Xr;Xr=c;try{const O=[E,w===zi?void 0:b&&w[0]===zi?[]:w,m];w=E,l?l(t,3,O):t(...O)}finally{Xr=A}}}else c.run()};return o&&o(T),c=new Bh(p),c.scheduler=a?()=>a(T,!1):T,m=x=>ow(x,!1,c),h=c.onStop=()=>{const x=Qi.get(c);if(x){if(l)l(x,4);else for(const E of x)E();Qi.delete(c)}},t?n?T(!0):w=c.run():a?a(T.bind(null,!0),!0):c.run(),v.pause=c.pause.bind(c),v.resume=c.resume.bind(c),v.stop=v,v}function Nr(e,t=1/0,r){if(t<=0||!Ye(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,$t(e))Nr(e.value,t,r);else if(Ce(e))for(let n=0;n<e.length;n++)Nr(e[n],t,r);else if(Th(e)||bn(e))e.forEach(n=>{Nr(n,t,r)});else if(Ch(e)){for(const n in e)Nr(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Nr(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fi(e,t,r,n){try{return n?e(...n):e()}catch(i){_s(i,t,r)}}function Jt(e,t,r,n){if(Oe(e)){const i=fi(e,t,r,n);return i&&Eh(i)&&i.catch(s=>{_s(s,t,r)}),i}if(Ce(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Jt(e[s],t,r,n));return i}}function _s(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||tt;if(t){let o=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const c=o.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](e,l,u)===!1)return}o=o.parent}if(s){xr(),fi(s,null,10,[e,l,u]),Sr();return}}uw(e,r,i,n,a)}function uw(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const kt=[];let ar=-1;const vn=[];let Br=null,mn=0;const Qh=Promise.resolve();let Ji=null;function dw(e){const t=Ji||Qh;return e?t.then(this?e.bind(this):e):t}function cw(e){let t=ar+1,r=kt.length;for(;t<r;){const n=t+r>>>1,i=kt[n],s=oi(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function Ho(e){if(!(e.flags&1)){const t=oi(e),r=kt[kt.length-1];!r||!(e.flags&2)&&t>=oi(r)?kt.push(e):kt.splice(cw(t),0,e),e.flags|=1,Jh()}}function Jh(){Ji||(Ji=Qh.then(tm))}function pw(e){Ce(e)?vn.push(...e):Br&&e.id===-1?Br.splice(mn+1,0,e):e.flags&1||(vn.push(e),e.flags|=1),Jh()}function yd(e,t,r=ar+1){for(;r<kt.length;r++){const n=kt[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;kt.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function em(e){if(vn.length){const t=[...new Set(vn)].sort((r,n)=>oi(r)-oi(n));if(vn.length=0,Br){Br.push(...t);return}for(Br=t,mn=0;mn<Br.length;mn++){const r=Br[mn];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Br=null,mn=0}}const oi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function tm(e){try{for(ar=0;ar<kt.length;ar++){const t=kt[ar];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),fi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ar<kt.length;ar++){const t=kt[ar];t&&(t.flags&=-2)}ar=-1,kt.length=0,em(),Ji=null,(kt.length||vn.length)&&tm()}}let dr=null,rm=null;function es(e){const t=dr;return dr=e,rm=e&&e.type.__scopeId||null,t}function fw(e,t=dr,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&Id(-1);const s=es(t);let a;try{a=e(...i)}finally{es(s),n._d&&Id(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Wr(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(xr(),Jt(l,r,8,[e.el,o,e,t]),Sr())}}function hw(e,t){if(Tt){let r=Tt.provides;const n=Tt.parent&&Tt.parent.provides;n===r&&(r=Tt.provides=Object.create(n)),r[e]=t}}function ji(e,t,r=!1){const n=p$();if(n||$n){let i=$n?$n._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&Oe(t)?t.call(n&&n.proxy):t}}const mw=Symbol.for("v-scx"),gw=()=>ji(mw);function wn(e,t,r){return nm(e,t,r)}function nm(e,t,r=tt){const{immediate:n,deep:i,flush:s,once:a}=r,o=_t({},r),l=t&&n||!t&&s!=="post";let u;if(ui){if(s==="sync"){const m=gw();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=cr,m.resume=cr,m.pause=cr,m}}const c=Tt;o.call=(m,_,b)=>Jt(m,c,_,b);let p=!1;s==="post"?o.scheduler=m=>{Ct(m,c&&c.suspense)}:s!=="sync"&&(p=!0,o.scheduler=(m,_)=>{_?m():Ho(m)}),o.augmentJob=m=>{t&&(m.flags|=4),p&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=lw(e,t,o);return ui&&(u?u.push(h):l&&h()),h}function yw(e,t,r){const n=this.proxy,i=ot(e)?e.includes(".")?im(n,e):()=>n[e]:e.bind(n,n);let s;Oe(t)?s=t:(s=t.handler,r=t);const a=mi(this),o=nm(i,s.bind(n),r);return a(),o}function im(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const _w=Symbol("_vte"),bw=e=>e.__isTeleport,Ys=Symbol("_leaveCb");function Fo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Fo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function hi(e,t){return Oe(e)?_t({name:e.name},t,{setup:e}):e}function sm(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function _d(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const ts=new WeakMap;function Jn(e,t,r,n,i=!1){if(Ce(e)){e.forEach((b,k)=>Jn(b,t&&(Ce(t)?t[k]:t),r,n,i));return}if(ei(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Jn(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?Xo(n.component):n.el,a=i?null:s,{i:o,r:l}=e,u=t&&t.r,c=o.refs===tt?o.refs={}:o.refs,p=o.setupState,h=He(p),m=p===tt?kh:b=>_d(c,b)?!1:Fe(h,b),_=(b,k)=>!(k&&_d(c,k));if(u!=null&&u!==l){if(bd(t),ot(u))c[u]=null,m(u)&&(p[u]=null);else if($t(u)){const b=t;_(u,b.k)&&(u.value=null),b.k&&(c[b.k]=null)}}if(Oe(l))fi(l,o,12,[a,c]);else{const b=ot(l),k=$t(l);if(b||k){const v=()=>{if(e.f){const w=b?m(l)?p[l]:c[l]:_()||!e.k?l.value:c[e.k];if(i)Ce(w)&&Oo(w,s);else if(Ce(w))w.includes(s)||w.push(s);else if(b)c[l]=[s],m(l)&&(p[l]=c[l]);else{const T=[s];_(l,e.k)&&(l.value=T),e.k&&(c[e.k]=T)}}else b?(c[l]=a,m(l)&&(p[l]=a)):k&&(_(l,e.k)&&(l.value=a),e.k&&(c[e.k]=a))};if(a){const w=()=>{v(),ts.delete(e)};w.id=-1,ts.set(e,w),Ct(w,r)}else bd(e),v()}}}function bd(e){const t=ts.get(e);t&&(t.flags|=8,ts.delete(e))}gs().requestIdleCallback;gs().cancelIdleCallback;const ei=e=>!!e.type.__asyncLoader,am=e=>e.type.__isKeepAlive;function vw(e,t){om(e,"a",t)}function ww(e,t){om(e,"da",t)}function om(e,t,r=Tt){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(bs(t,n,r),r){let i=r.parent;for(;i&&i.parent;)am(i.parent.vnode)&&$w(n,t,r,i),i=i.parent}}function $w(e,t,r,n){const i=bs(t,e,n,!0);lm(()=>{Oo(n[t],i)},r)}function bs(e,t,r=Tt,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{xr();const o=mi(r),l=Jt(t,r,e,a);return o(),Sr(),l});return n?i.unshift(s):i.push(s),s}}const Tr=e=>(t,r=Tt)=>{(!ui||e==="sp")&&bs(e,(...n)=>t(...n),r)},xw=Tr("bm"),Sw=Tr("m"),kw=Tr("bu"),Tw=Tr("u"),Ew=Tr("bum"),lm=Tr("um"),Iw=Tr("sp"),Cw=Tr("rtg"),zw=Tr("rtc");function Aw(e,t=Tt){bs("ec",e,t)}const Ow=Symbol.for("v-ndc");function Dt(e,t,r,n){let i;const s=r,a=Ce(e);if(a||ot(e)){const o=a&&rn(e);let l=!1,u=!1;o&&(l=!Ut(e),u=kr(e),e=ys(e)),i=new Array(e.length);for(let c=0,p=e.length;c<p;c++)i[c]=t(l?u?xn(Qt(e[c])):Qt(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(Ye(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];i[l]=t(e[c],c,l,s)}}else i=[];return i}const oo=e=>e?Cm(e)?Xo(e):oo(e.parent):null,ti=_t(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>oo(e.parent),$root:e=>oo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>dm(e),$forceUpdate:e=>e.f||(e.f=()=>{Ho(e.update)}),$nextTick:e=>e.n||(e.n=dw.bind(e.proxy)),$watch:e=>yw.bind(e)}),Qs=(e,t)=>e!==tt&&!e.__isScriptSetup&&Fe(e,t),Rw={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(Qs(n,t))return a[t]=1,n[t];if(i!==tt&&Fe(i,t))return a[t]=2,i[t];if(Fe(s,t))return a[t]=3,s[t];if(r!==tt&&Fe(r,t))return a[t]=4,r[t];lo&&(a[t]=0)}}const u=ti[t];let c,p;if(u)return t==="$attrs"&&wt(e.attrs,"get",""),u(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(r!==tt&&Fe(r,t))return a[t]=4,r[t];if(p=l.config.globalProperties,Fe(p,t))return p[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Qs(i,t)?(i[t]=r,!0):n!==tt&&Fe(n,t)?(n[t]=r,!0):Fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:a}},o){let l;return!!(r[o]||e!==tt&&o[0]!=="$"&&Fe(e,o)||Qs(t,o)||Fe(s,o)||Fe(n,o)||Fe(ti,o)||Fe(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Fe(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function vd(e){return Ce(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let lo=!0;function Mw(e){const t=dm(e),r=e.proxy,n=e.ctx;lo=!1,t.beforeCreate&&wd(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:p,mounted:h,beforeUpdate:m,updated:_,activated:b,deactivated:k,beforeDestroy:v,beforeUnmount:w,destroyed:T,unmounted:x,render:E,renderTracked:A,renderTriggered:O,errorCaptured:$,serverPrefetch:B,expose:W,inheritAttrs:Y,components:ae,directives:oe,filters:N}=t;if(u&&Bw(u,n,null),a)for(const J in a){const he=a[J];Oe(he)&&(n[J]=he.bind(r))}if(i){const J=i.call(r,r);Ye(J)&&(e.data=qo(J))}if(lo=!0,s)for(const J in s){const he=s[J],Z=Oe(he)?he.bind(r,r):Oe(he.get)?he.get.bind(r,r):cr,Se=!Oe(he)&&Oe(he.set)?he.set.bind(r):cr,j=dt({get:Z,set:Se});Object.defineProperty(n,J,{enumerable:!0,configurable:!0,get:()=>j.value,set:P=>j.value=P})}if(o)for(const J in o)um(o[J],n,r,J);if(l){const J=Oe(l)?l.call(r):l;Reflect.ownKeys(J).forEach(he=>{hw(he,J[he])})}c&&wd(c,e,"c");function ee(J,he){Ce(he)?he.forEach(Z=>J(Z.bind(r))):he&&J(he.bind(r))}if(ee(xw,p),ee(Sw,h),ee(kw,m),ee(Tw,_),ee(vw,b),ee(ww,k),ee(Aw,$),ee(zw,A),ee(Cw,O),ee(Ew,w),ee(lm,x),ee(Iw,B),Ce(W))if(W.length){const J=e.exposed||(e.exposed={});W.forEach(he=>{Object.defineProperty(J,he,{get:()=>r[he],set:Z=>r[he]=Z,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===cr&&(e.render=E),Y!=null&&(e.inheritAttrs=Y),ae&&(e.components=ae),oe&&(e.directives=oe),B&&sm(e)}function Bw(e,t,r=cr){Ce(e)&&(e=uo(e));for(const n in e){const i=e[n];let s;Ye(i)?"default"in i?s=ji(i.from||n,i.default,!0):s=ji(i.from||n):s=ji(i),$t(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function wd(e,t,r){Jt(Ce(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function um(e,t,r,n){let i=n.includes(".")?im(r,n):()=>r[n];if(ot(e)){const s=t[e];Oe(s)&&wn(i,s)}else if(Oe(e))wn(i,e.bind(r));else if(Ye(e))if(Ce(e))e.forEach(s=>um(s,t,r,n));else{const s=Oe(e.handler)?e.handler.bind(r):t[e.handler];Oe(s)&&wn(i,s,e)}}function dm(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(u=>rs(l,u,a,!0)),rs(l,t,a)),Ye(t)&&s.set(t,l),l}function rs(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&rs(e,s,r,!0),i&&i.forEach(a=>rs(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const o=Nw[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Nw={data:$d,props:xd,emits:xd,methods:Hn,computed:Hn,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Hn,directives:Hn,watch:Pw,provide:$d,inject:Dw};function $d(e,t){return t?e?function(){return _t(Oe(e)?e.call(this,this):e,Oe(t)?t.call(this,this):t)}:t:e}function Dw(e,t){return Hn(uo(e),uo(t))}function uo(e){if(Ce(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function St(e,t){return e?[...new Set([].concat(e,t))]:t}function Hn(e,t){return e?_t(Object.create(null),e,t):t}function xd(e,t){return e?Ce(e)&&Ce(t)?[...new Set([...e,...t])]:_t(Object.create(null),vd(e),vd(t??{})):t}function Pw(e,t){if(!e)return t;if(!t)return e;const r=_t(Object.create(null),e);for(const n in t)r[n]=St(e[n],t[n]);return r}function cm(){return{app:null,config:{isNativeTag:kh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uw=0;function Lw(e,t){return function(n,i=null){Oe(n)||(n=_t({},n)),i!=null&&!Ye(i)&&(i=null);const s=cm(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:Uw++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:_$,get config(){return s.config},set config(c){},use(c,...p){return a.has(c)||(c&&Oe(c.install)?(a.add(c),c.install(u,...p)):Oe(c)&&(a.add(c),c(u,...p))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,p){return p?(s.components[c]=p,u):s.components[c]},directive(c,p){return p?(s.directives[c]=p,u):s.directives[c]},mount(c,p,h){if(!l){const m=u._ceVNode||pr(n,i);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(m,c,h),l=!0,u._container=c,c.__vue_app__=u,Xo(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(Jt(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,p){return s.provides[c]=p,u},runWithContext(c){const p=$n;$n=u;try{return c()}finally{$n=p}}};return u}}let $n=null;const qw=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Xt(t)}Modifiers`]||e[`${un(t)}Modifiers`];function Ww(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||tt;let i=r;const s=t.startsWith("update:"),a=s&&qw(n,t.slice(7));a&&(a.trim&&(i=r.map(c=>ot(c)?c.trim():c)),a.number&&(i=r.map(Iv)));let o,l=n[o=Fs(t)]||n[o=Fs(Xt(t))];!l&&s&&(l=n[o=Fs(un(t))]),l&&Jt(l,e,6,i);const u=n[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Jt(u,e,6,i)}}const Vw=new WeakMap;function pm(e,t,r=!1){const n=r?Vw:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!Oe(e)){const l=u=>{const c=pm(u,t,!0);c&&(o=!0,_t(a,c))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(Ye(e)&&n.set(e,null),null):(Ce(s)?s.forEach(l=>a[l]=null):_t(a,s),Ye(e)&&n.set(e,a),a)}function vs(e,t){return!e||!fs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Fe(e,t[0].toLowerCase()+t.slice(1))||Fe(e,un(t))||Fe(e,t))}function Sd(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:p,data:h,setupState:m,ctx:_,inheritAttrs:b}=e,k=es(e);let v,w;try{if(r.shapeFlag&4){const x=i||n,E=x;v=lr(u.call(E,x,c,p,m,h,_)),w=o}else{const x=t;v=lr(x.length>1?x(p,{attrs:o,slots:a,emit:l}):x(p,null)),w=t.props?o:Hw(o)}}catch(x){ri.length=0,_s(x,e,1),v=pr(Dr)}let T=v;if(w&&b!==!1){const x=Object.keys(w),{shapeFlag:E}=T;x.length&&E&7&&(s&&x.some(hs)&&(w=Fw(w,s)),T=Sn(T,w,!1,!0))}return r.dirs&&(T=Sn(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(r.dirs):r.dirs),r.transition&&Fo(T,r.transition),v=T,es(k),v}const Hw=e=>{let t;for(const r in e)(r==="class"||r==="style"||fs(r))&&((t||(t={}))[r]=e[r]);return t},Fw=(e,t)=>{const r={};for(const n in e)(!hs(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function Gw(e,t,r){const{props:n,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?kd(n,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const h=c[p];if(fm(a,n,h)&&!vs(u,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?kd(n,a,u):!0:!!a;return!1}function kd(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(fm(t,e,s)&&!vs(r,s))return!0}return!1}function fm(e,t,r){const n=e[r],i=t[r];return r==="style"&&Ye(n)&&Ye(i)?!Bo(n,i):n!==i}function jw({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const hm={},mm=()=>Object.create(hm),gm=e=>Object.getPrototypeOf(e)===hm;function Kw(e,t,r,n=!1){const i={},s=mm();e.propsDefaults=Object.create(null),ym(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);r?e.props=n?i:tw(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Xw(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=He(i),[l]=e.propsOptions;let u=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let h=c[p];if(vs(e.emitsOptions,h))continue;const m=t[h];if(l)if(Fe(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const _=Xt(h);i[_]=co(l,o,_,m,e,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{ym(e,t,i,s)&&(u=!0);let c;for(const p in o)(!t||!Fe(t,p)&&((c=un(p))===p||!Fe(t,c)))&&(l?r&&(r[p]!==void 0||r[c]!==void 0)&&(i[p]=co(l,o,p,void 0,e,!0)):delete i[p]);if(s!==o)for(const p in s)(!t||!Fe(t,p))&&(delete s[p],u=!0)}u&&wr(e.attrs,"set","")}function ym(e,t,r,n){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Zn(l))continue;const u=t[l];let c;i&&Fe(i,c=Xt(l))?!s||!s.includes(c)?r[c]=u:(o||(o={}))[c]=u:vs(e.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,a=!0)}if(s){const l=He(r),u=o||tt;for(let c=0;c<s.length;c++){const p=s[c];r[p]=co(i,l,p,u[p],e,!Fe(u,p))}}return a}function co(e,t,r,n,i,s){const a=e[r];if(a!=null){const o=Fe(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Oe(l)){const{propsDefaults:u}=i;if(r in u)n=u[r];else{const c=mi(i);n=u[r]=l.call(null,t),c()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===un(r))&&(n=!0))}return n}const Zw=new WeakMap;function _m(e,t,r=!1){const n=r?Zw:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!Oe(e)){const c=p=>{l=!0;const[h,m]=_m(p,t,!0);_t(a,h),m&&o.push(...m)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return Ye(e)&&n.set(e,_n),_n;if(Ce(s))for(let c=0;c<s.length;c++){const p=Xt(s[c]);Td(p)&&(a[p]=tt)}else if(s)for(const c in s){const p=Xt(c);if(Td(p)){const h=s[c],m=a[p]=Ce(h)||Oe(h)?{type:h}:_t({},h),_=m.type;let b=!1,k=!0;if(Ce(_))for(let v=0;v<_.length;++v){const w=_[v],T=Oe(w)&&w.name;if(T==="Boolean"){b=!0;break}else T==="String"&&(k=!1)}else b=Oe(_)&&_.name==="Boolean";m[0]=b,m[1]=k,(b||Fe(m,"default"))&&o.push(p)}}const u=[a,o];return Ye(e)&&n.set(e,u),u}function Td(e){return e[0]!=="$"&&!Zn(e)}const Go=e=>e==="_"||e==="_ctx"||e==="$stable",jo=e=>Ce(e)?e.map(lr):[lr(e)],Yw=(e,t,r)=>{if(t._n)return t;const n=fw((...i)=>jo(t(...i)),r);return n._c=!1,n},bm=(e,t,r)=>{const n=e._ctx;for(const i in e){if(Go(i))continue;const s=e[i];if(Oe(s))t[i]=Yw(i,s,n);else if(s!=null){const a=jo(s);t[i]=()=>a}}},vm=(e,t)=>{const r=jo(t);e.slots.default=()=>r},wm=(e,t,r)=>{for(const n in t)(r||!Go(n))&&(e[n]=t[n])},Qw=(e,t,r)=>{const n=e.slots=mm();if(e.vnode.shapeFlag&32){const i=t._;i?(wm(n,t,r),r&&Ah(n,"_",i,!0)):bm(t,n)}else t&&vm(e,t)},Jw=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=tt;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:wm(i,t,r):(s=!t.$stable,bm(t,i)),a=t}else t&&(vm(e,t),a={default:1});if(s)for(const o in i)!Go(o)&&a[o]==null&&delete i[o]},Ct=i$;function e$(e){return t$(e)}function t$(e,t){const r=gs();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:h,setScopeId:m=cr,insertStaticContent:_}=e,b=(I,z,M,H=null,G=null,F=null,se=void 0,te=null,re=!!z.dynamicChildren)=>{if(I===z)return;I&&!Rn(I,z)&&(H=Le(I),P(I,G,F,!0),I=null),z.patchFlag===-2&&(re=!1,z.dynamicChildren=null);const{type:q,ref:we,shapeFlag:pe}=z;switch(q){case ws:k(I,z,M,H);break;case Dr:v(I,z,M,H);break;case ea:I==null&&w(z,M,H,se);break;case st:ae(I,z,M,H,G,F,se,te,re);break;default:pe&1?E(I,z,M,H,G,F,se,te,re):pe&6?oe(I,z,M,H,G,F,se,te,re):(pe&64||pe&128)&&q.process(I,z,M,H,G,F,se,te,re,ue)}we!=null&&G?Jn(we,I&&I.ref,F,z||I,!z):we==null&&I&&I.ref!=null&&Jn(I.ref,null,F,I,!0)},k=(I,z,M,H)=>{if(I==null)n(z.el=o(z.children),M,H);else{const G=z.el=I.el;z.children!==I.children&&u(G,z.children)}},v=(I,z,M,H)=>{I==null?n(z.el=l(z.children||""),M,H):z.el=I.el},w=(I,z,M,H)=>{[I.el,I.anchor]=_(I.children,z,M,H,I.el,I.anchor)},T=({el:I,anchor:z},M,H)=>{let G;for(;I&&I!==z;)G=h(I),n(I,M,H),I=G;n(z,M,H)},x=({el:I,anchor:z})=>{let M;for(;I&&I!==z;)M=h(I),i(I),I=M;i(z)},E=(I,z,M,H,G,F,se,te,re)=>{if(z.type==="svg"?se="svg":z.type==="math"&&(se="mathml"),I==null)A(z,M,H,G,F,se,te,re);else{const q=I.el&&I.el._isVueCE?I.el:null;try{q&&q._beginPatch(),B(I,z,G,F,se,te,re)}finally{q&&q._endPatch()}}},A=(I,z,M,H,G,F,se,te)=>{let re,q;const{props:we,shapeFlag:pe,transition:be,dirs:xe}=I;if(re=I.el=a(I.type,F,we&&we.is,we),pe&8?c(re,I.children):pe&16&&$(I.children,re,null,H,G,Js(I,F),se,te),xe&&Wr(I,null,H,"created"),O(re,I,I.scopeId,se,H),we){for(const je in we)je!=="value"&&!Zn(je)&&s(re,je,null,we[je],F,H);"value"in we&&s(re,"value",null,we.value,F),(q=we.onVnodeBeforeMount)&&nr(q,H,I)}xe&&Wr(I,null,H,"beforeMount");const ze=r$(G,be);ze&&be.beforeEnter(re),n(re,z,M),((q=we&&we.onVnodeMounted)||ze||xe)&&Ct(()=>{try{q&&nr(q,H,I),ze&&be.enter(re),xe&&Wr(I,null,H,"mounted")}finally{}},G)},O=(I,z,M,H,G)=>{if(M&&m(I,M),H)for(let F=0;F<H.length;F++)m(I,H[F]);if(G){let F=G.subTree;if(z===F||km(F.type)&&(F.ssContent===z||F.ssFallback===z)){const se=G.vnode;O(I,se,se.scopeId,se.slotScopeIds,G.parent)}}},$=(I,z,M,H,G,F,se,te,re=0)=>{for(let q=re;q<I.length;q++){const we=I[q]=te?vr(I[q]):lr(I[q]);b(null,we,z,M,H,G,F,se,te)}},B=(I,z,M,H,G,F,se)=>{const te=z.el=I.el;let{patchFlag:re,dynamicChildren:q,dirs:we}=z;re|=I.patchFlag&16;const pe=I.props||tt,be=z.props||tt;let xe;if(M&&Vr(M,!1),(xe=be.onVnodeBeforeUpdate)&&nr(xe,M,z,I),we&&Wr(z,I,M,"beforeUpdate"),M&&Vr(M,!0),(pe.innerHTML&&be.innerHTML==null||pe.textContent&&be.textContent==null)&&c(te,""),q?W(I.dynamicChildren,q,te,M,H,Js(z,G),F):se||he(I,z,te,null,M,H,Js(z,G),F,!1),re>0){if(re&16)Y(te,pe,be,M,G);else if(re&2&&pe.class!==be.class&&s(te,"class",null,be.class,G),re&4&&s(te,"style",pe.style,be.style,G),re&8){const ze=z.dynamicProps;for(let je=0;je<ze.length;je++){const qe=ze[je],rt=pe[qe],ut=be[qe];(ut!==rt||qe==="value")&&s(te,qe,rt,ut,G,M)}}re&1&&I.children!==z.children&&c(te,z.children)}else!se&&q==null&&Y(te,pe,be,M,G);((xe=be.onVnodeUpdated)||we)&&Ct(()=>{xe&&nr(xe,M,z,I),we&&Wr(z,I,M,"updated")},H)},W=(I,z,M,H,G,F,se)=>{for(let te=0;te<z.length;te++){const re=I[te],q=z[te],we=re.el&&(re.type===st||!Rn(re,q)||re.shapeFlag&198)?p(re.el):M;b(re,q,we,null,H,G,F,se,!0)}},Y=(I,z,M,H,G)=>{if(z!==M){if(z!==tt)for(const F in z)!Zn(F)&&!(F in M)&&s(I,F,z[F],null,G,H);for(const F in M){if(Zn(F))continue;const se=M[F],te=z[F];se!==te&&F!=="value"&&s(I,F,te,se,G,H)}"value"in M&&s(I,"value",z.value,M.value,G)}},ae=(I,z,M,H,G,F,se,te,re)=>{const q=z.el=I?I.el:o(""),we=z.anchor=I?I.anchor:o("");let{patchFlag:pe,dynamicChildren:be,slotScopeIds:xe}=z;xe&&(te=te?te.concat(xe):xe),I==null?(n(q,M,H),n(we,M,H),$(z.children||[],M,we,G,F,se,te,re)):pe>0&&pe&64&&be&&I.dynamicChildren&&I.dynamicChildren.length===be.length?(W(I.dynamicChildren,be,M,G,F,se,te),(z.key!=null||G&&z===G.subTree)&&$m(I,z,!0)):he(I,z,M,we,G,F,se,te,re)},oe=(I,z,M,H,G,F,se,te,re)=>{z.slotScopeIds=te,I==null?z.shapeFlag&512?G.ctx.activate(z,M,H,se,re):N(z,M,H,G,F,se,re):de(I,z,re)},N=(I,z,M,H,G,F,se)=>{const te=I.component=c$(I,H,G);if(am(I)&&(te.ctx.renderer=ue),f$(te,!1,se),te.asyncDep){if(G&&G.registerDep(te,ee,se),!I.el){const re=te.subTree=pr(Dr);v(null,re,z,M),I.placeholder=re.el}}else ee(te,I,z,M,G,F,se)},de=(I,z,M)=>{const H=z.component=I.component;if(Gw(I,z,M))if(H.asyncDep&&!H.asyncResolved){J(H,z,M);return}else H.next=z,H.update();else z.el=I.el,H.vnode=z},ee=(I,z,M,H,G,F,se)=>{const te=()=>{if(I.isMounted){let{next:pe,bu:be,u:xe,parent:ze,vnode:je}=I;{const Bt=xm(I);if(Bt){pe&&(pe.el=je.el,J(I,pe,se)),Bt.asyncDep.then(()=>{Ct(()=>{I.isUnmounted||q()},G)});return}}let qe=pe,rt;Vr(I,!1),pe?(pe.el=je.el,J(I,pe,se)):pe=je,be&&Gs(be),(rt=pe.props&&pe.props.onVnodeBeforeUpdate)&&nr(rt,ze,pe,je),Vr(I,!0);const ut=Sd(I),ht=I.subTree;I.subTree=ut,b(ht,ut,p(ht.el),Le(ht),I,G,F),pe.el=ut.el,qe===null&&jw(I,ut.el),xe&&Ct(xe,G),(rt=pe.props&&pe.props.onVnodeUpdated)&&Ct(()=>nr(rt,ze,pe,je),G)}else{let pe;const{el:be,props:xe}=z,{bm:ze,m:je,parent:qe,root:rt,type:ut}=I,ht=ei(z);Vr(I,!1),ze&&Gs(ze),!ht&&(pe=xe&&xe.onVnodeBeforeMount)&&nr(pe,qe,z),Vr(I,!0);{rt.ce&&rt.ce._hasShadowRoot()&&rt.ce._injectChildStyle(ut,I.parent?I.parent.type:void 0);const Bt=I.subTree=Sd(I);b(null,Bt,M,H,I,G,F),z.el=Bt.el}if(je&&Ct(je,G),!ht&&(pe=xe&&xe.onVnodeMounted)){const Bt=z;Ct(()=>nr(pe,qe,Bt),G)}(z.shapeFlag&256||qe&&ei(qe.vnode)&&qe.vnode.shapeFlag&256)&&I.a&&Ct(I.a,G),I.isMounted=!0,z=M=H=null}};I.scope.on();const re=I.effect=new Bh(te);I.scope.off();const q=I.update=re.run.bind(re),we=I.job=re.runIfDirty.bind(re);we.i=I,we.id=I.uid,re.scheduler=()=>Ho(we),Vr(I,!0),q()},J=(I,z,M)=>{z.component=I;const H=I.vnode.props;I.vnode=z,I.next=null,Xw(I,z.props,H,M),Jw(I,z.children,M),xr(),yd(I),Sr()},he=(I,z,M,H,G,F,se,te,re=!1)=>{const q=I&&I.children,we=I?I.shapeFlag:0,pe=z.children,{patchFlag:be,shapeFlag:xe}=z;if(be>0){if(be&128){Se(q,pe,M,H,G,F,se,te,re);return}else if(be&256){Z(q,pe,M,H,G,F,se,te,re);return}}xe&8?(we&16&&Ne(q,G,F),pe!==q&&c(M,pe)):we&16?xe&16?Se(q,pe,M,H,G,F,se,te,re):Ne(q,G,F,!0):(we&8&&c(M,""),xe&16&&$(pe,M,H,G,F,se,te,re))},Z=(I,z,M,H,G,F,se,te,re)=>{I=I||_n,z=z||_n;const q=I.length,we=z.length,pe=Math.min(q,we);let be;for(be=0;be<pe;be++){const xe=z[be]=re?vr(z[be]):lr(z[be]);b(I[be],xe,M,null,G,F,se,te,re)}q>we?Ne(I,G,F,!0,!1,pe):$(z,M,H,G,F,se,te,re,pe)},Se=(I,z,M,H,G,F,se,te,re)=>{let q=0;const we=z.length;let pe=I.length-1,be=we-1;for(;q<=pe&&q<=be;){const xe=I[q],ze=z[q]=re?vr(z[q]):lr(z[q]);if(Rn(xe,ze))b(xe,ze,M,null,G,F,se,te,re);else break;q++}for(;q<=pe&&q<=be;){const xe=I[pe],ze=z[be]=re?vr(z[be]):lr(z[be]);if(Rn(xe,ze))b(xe,ze,M,null,G,F,se,te,re);else break;pe--,be--}if(q>pe){if(q<=be){const xe=be+1,ze=xe<we?z[xe].el:H;for(;q<=be;)b(null,z[q]=re?vr(z[q]):lr(z[q]),M,ze,G,F,se,te,re),q++}}else if(q>be)for(;q<=pe;)P(I[q],G,F,!0),q++;else{const xe=q,ze=q,je=new Map;for(q=ze;q<=be;q++){const mt=z[q]=re?vr(z[q]):lr(z[q]);mt.key!=null&&je.set(mt.key,q)}let qe,rt=0;const ut=be-ze+1;let ht=!1,Bt=0;const Ir=new Array(ut);for(q=0;q<ut;q++)Ir[q]=0;for(q=xe;q<=pe;q++){const mt=I[q];if(rt>=ut){P(mt,G,F,!0);continue}let Et;if(mt.key!=null)Et=je.get(mt.key);else for(qe=ze;qe<=be;qe++)if(Ir[qe-ze]===0&&Rn(mt,z[qe])){Et=qe;break}Et===void 0?P(mt,G,F,!0):(Ir[Et-ze]=q+1,Et>=Bt?Bt=Et:ht=!0,b(mt,z[Et],M,null,G,F,se,te,re),rt++)}const In=ht?n$(Ir):_n;for(qe=In.length-1,q=ut-1;q>=0;q--){const mt=ze+q,Et=z[mt],gi=z[mt+1],yi=mt+1<we?gi.el||Sm(gi):H;Ir[q]===0?b(null,Et,M,yi,G,F,se,te,re):ht&&(qe<0||q!==In[qe]?j(Et,M,yi,2):qe--)}}},j=(I,z,M,H,G=null)=>{const{el:F,type:se,transition:te,children:re,shapeFlag:q}=I;if(q&6){j(I.component.subTree,z,M,H);return}if(q&128){I.suspense.move(z,M,H);return}if(q&64){se.move(I,z,M,ue);return}if(se===st){n(F,z,M);for(let pe=0;pe<re.length;pe++)j(re[pe],z,M,H);n(I.anchor,z,M);return}if(se===ea){T(I,z,M);return}if(H!==2&&q&1&&te)if(H===0)te.persisted&&!F[Ys]?n(F,z,M):(te.beforeEnter(F),n(F,z,M),Ct(()=>te.enter(F),G));else{const{leave:pe,delayLeave:be,afterLeave:xe}=te,ze=()=>{I.ctx.isUnmounted?i(F):n(F,z,M)},je=()=>{const qe=F._isLeaving||!!F[Ys];F._isLeaving&&F[Ys](!0),te.persisted&&!qe?ze():pe(F,()=>{ze(),xe&&xe()})};be?be(F,ze,je):je()}else n(F,z,M)},P=(I,z,M,H=!1,G=!1)=>{const{type:F,props:se,ref:te,children:re,dynamicChildren:q,shapeFlag:we,patchFlag:pe,dirs:be,cacheIndex:xe,memo:ze}=I;if(pe===-2&&(G=!1),te!=null&&(xr(),Jn(te,null,M,I,!0),Sr()),xe!=null&&(z.renderCache[xe]=void 0),we&256){z.ctx.deactivate(I);return}const je=we&1&&be,qe=!ei(I);let rt;if(qe&&(rt=se&&se.onVnodeBeforeUnmount)&&nr(rt,z,I),we&6)$e(I.component,M,H);else{if(we&128){I.suspense.unmount(M,H);return}je&&Wr(I,null,z,"beforeUnmount"),we&64?I.type.remove(I,z,M,ue,H):q&&!q.hasOnce&&(F!==st||pe>0&&pe&64)?Ne(q,z,M,!1,!0):(F===st&&pe&384||!G&&we&16)&&Ne(re,z,M),H&&K(I)}const ut=ze!=null&&xe==null;(qe&&(rt=se&&se.onVnodeUnmounted)||je||ut)&&Ct(()=>{rt&&nr(rt,z,I),je&&Wr(I,null,z,"unmounted"),ut&&(I.el=null)},M)},K=I=>{const{type:z,el:M,anchor:H,transition:G}=I;if(z===st){V(M,H);return}if(z===ea){x(I);return}const F=()=>{i(M),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(I.shapeFlag&1&&G&&!G.persisted){const{leave:se,delayLeave:te}=G,re=()=>se(M,F);te?te(I.el,F,re):re()}else F()},V=(I,z)=>{let M;for(;I!==z;)M=h(I),i(I),I=M;i(z)},$e=(I,z,M)=>{const{bum:H,scope:G,job:F,subTree:se,um:te,m:re,a:q}=I;Ed(re),Ed(q),H&&Gs(H),G.stop(),F&&(F.flags|=8,P(se,I,z,M)),te&&Ct(te,z),Ct(()=>{I.isUnmounted=!0},z)},Ne=(I,z,M,H=!1,G=!1,F=0)=>{for(let se=F;se<I.length;se++)P(I[se],z,M,H,G)},Le=I=>{if(I.shapeFlag&6)return Le(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const z=h(I.anchor||I.el),M=z&&z[_w];return M?h(M):z};let Q=!1;const le=(I,z,M)=>{let H;I==null?z._vnode&&(P(z._vnode,null,null,!0),H=z._vnode.component):b(z._vnode||null,I,z,null,null,null,M),z._vnode=I,Q||(Q=!0,yd(H),em(),Q=!1)},ue={p:b,um:P,m:j,r:K,mt:N,mc:$,pc:he,pbc:W,n:Le,o:e};return{render:le,hydrate:void 0,createApp:Lw(le)}}function Js({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Vr({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function r$(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $m(e,t,r=!1){const n=e.children,i=t.children;if(Ce(n)&&Ce(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=vr(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&$m(a,o)),o.type===ws&&(o.patchFlag===-1&&(o=i[s]=vr(o)),o.el=a.el),o.type===Dr&&!o.el&&(o.el=a.el)}}function n$(e){const t=e.slice(),r=[0];let n,i,s,a,o;const l=e.length;for(n=0;n<l;n++){const u=e[n];if(u!==0){if(i=r[r.length-1],e[i]<u){t[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<u?s=o+1:a=o;u<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function xm(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xm(t)}function Ed(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Sm(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Sm(t.subTree):null}const km=e=>e.__isSuspense;function i$(e,t){t&&t.pendingBranch?Ce(e)?t.effects.push(...e):t.effects.push(e):pw(e)}const st=Symbol.for("v-fgt"),ws=Symbol.for("v-txt"),Dr=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),ri=[];let Rt=null;function ye(e=!1){ri.push(Rt=e?null:[])}function s$(){ri.pop(),Rt=ri[ri.length-1]||null}let li=1;function Id(e,t=!1){li+=e,e<0&&Rt&&t&&(Rt.hasOnce=!0)}function Tm(e){return e.dynamicChildren=li>0?Rt||_n:null,s$(),li>0&&Rt&&Rt.push(e),e}function _e(e,t,r,n,i,s){return Tm(ne(e,t,r,n,i,s,!0))}function Ki(e,t,r,n,i){return Tm(pr(e,t,r,n,i,!0))}function Em(e){return e?e.__v_isVNode===!0:!1}function Rn(e,t){return e.type===t.type&&e.key===t.key}const Im=({key:e})=>e??null,Xi=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?ot(e)||$t(e)||Oe(e)?{i:dr,r:e,k:t,f:!!r}:e:null);function ne(e,t=null,r=null,n=0,i=null,s=e===st?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Im(t),ref:t&&Xi(t),scopeId:rm,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:dr};return o?(Ko(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=ot(r)?8:16),li>0&&!a&&Rt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rt.push(l),l}const pr=a$;function a$(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===Ow)&&(e=Dr),Em(e)){const o=Sn(e,t,!0);return r&&Ko(o,r),li>0&&!s&&Rt&&(o.shapeFlag&6?Rt[Rt.indexOf(e)]=o:Rt.push(o)),o.patchFlag=-2,o}if(y$(e)&&(e=e.__vccOpts),t){t=o$(t);let{class:o,style:l}=t;o&&!ot(o)&&(t.class=At(o)),Ye(l)&&(Vo(l)&&!Ce(l)&&(l=_t({},l)),t.style=Mo(l))}const a=ot(e)?1:km(e)?128:bw(e)?64:Ye(e)?4:Oe(e)?2:0;return ne(e,t,r,n,i,a,s,!0)}function o$(e){return e?Vo(e)||gm(e)?_t({},e):e:null}function Sn(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,u=t?l$(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Im(u),ref:t&&t.ref?r&&s?Ce(s)?s.concat(Xi(t)):[s,Xi(t)]:Xi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==st?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sn(e.ssContent),ssFallback:e.ssFallback&&Sn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Fo(c,l.clone(c)),c}function jt(e=" ",t=0){return pr(ws,null,e,t)}function vt(e="",t=!1){return t?(ye(),Ki(Dr,null,e)):pr(Dr,null,e)}function lr(e){return e==null||typeof e=="boolean"?pr(Dr):Ce(e)?pr(st,null,e.slice()):Em(e)?vr(e):pr(ws,null,String(e))}function vr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Sn(e)}function Ko(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Ce(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Ko(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!gm(t)?t._ctx=dr:i===3&&dr&&(dr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Oe(t)?(t={default:t,_ctx:dr},r=32):(t=String(t),n&64?(r=16,t=[jt(t)]):r=8);e.children=t,e.shapeFlag|=r}function l$(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=At([t.class,n.class]));else if(i==="style")t.style=Mo([t.style,n.style]);else if(fs(i)){const s=t[i],a=n[i];a&&s!==a&&!(Ce(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!hs(i)&&(t[i]=a)}else i!==""&&(t[i]=n[i])}return t}function nr(e,t,r,n=null){Jt(e,t,7,[r,n])}const u$=cm();let d$=0;function c$(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||u$,s={uid:d$++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(n,i),emitsOptions:pm(n,i),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:n.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ww.bind(null,s),e.ce&&e.ce(s),s}let Tt=null;const p$=()=>Tt||dr;let ns,po;{const e=gs(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};ns=t("__VUE_INSTANCE_SETTERS__",r=>Tt=r),po=t("__VUE_SSR_SETTERS__",r=>ui=r)}const mi=e=>{const t=Tt;return ns(e),e.scope.on(),()=>{e.scope.off(),ns(t)}},Cd=()=>{Tt&&Tt.scope.off(),ns(null)};function Cm(e){return e.vnode.shapeFlag&4}let ui=!1;function f$(e,t=!1,r=!1){t&&po(t);const{props:n,children:i}=e.vnode,s=Cm(e);Kw(e,n,s,t),Qw(e,i,r||t);const a=s?h$(e,t):void 0;return t&&po(!1),a}function h$(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rw);const{setup:n}=r;if(n){xr();const i=e.setupContext=n.length>1?g$(e):null,s=mi(e),a=fi(n,e,0,[e.props,i]),o=Eh(a);if(Sr(),s(),(o||e.sp)&&!ei(e)&&sm(e),o){if(a.then(Cd,Cd),t)return a.then(l=>{zd(e,l)}).catch(l=>{_s(l,e,0)});e.asyncDep=a}else zd(e,a)}else zm(e)}function zd(e,t,r){Oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ye(t)&&(e.setupState=Yh(t)),zm(e)}function zm(e,t,r){const n=e.type;e.render||(e.render=n.render||cr);{const i=mi(e);xr();try{Mw(e)}finally{Sr(),i()}}}const m$={get(e,t){return wt(e,"get",""),e[t]}};function g$(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,m$),slots:e.slots,emit:e.emit,expose:t}}function Xo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Yh(rw(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in ti)return ti[r](e)},has(t,r){return r in t||r in ti}})):e.proxy}function y$(e){return Oe(e)&&"__vccOpts"in e}const dt=(e,t)=>aw(e,t,ui),_$="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fo;const Ad=typeof window<"u"&&window.trustedTypes;if(Ad)try{fo=Ad.createPolicy("vue",{createHTML:e=>e})}catch{}const Am=fo?e=>fo.createHTML(e):e=>e,b$="http://www.w3.org/2000/svg",v$="http://www.w3.org/1998/Math/MathML",br=typeof document<"u"?document:null,Od=br&&br.createElement("template"),w$={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?br.createElementNS(b$,e):t==="mathml"?br.createElementNS(v$,e):r?br.createElement(e,{is:r}):br.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>br.createTextNode(e),createComment:e=>br.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>br.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const a=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{Od.innerHTML=Am(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Od.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},$$=Symbol("_vtc");function x$(e,t,r){const n=e[$$];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Rd=Symbol("_vod"),S$=Symbol("_vsh"),k$=Symbol(""),T$=/(?:^|;)\s*display\s*:/;function E$(e,t,r){const n=e.style,i=ot(r);let s=!1;if(r&&!i){if(t)if(ot(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Fn(n,o,"")}else for(const a in t)r[a]==null&&Fn(n,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?C$(e,a,!ot(t)&&t?t[a]:void 0,o)||Fn(n,a,o):Fn(n,a,"")}}else if(i){if(t!==r){const a=n[k$];a&&(r+=";"+a),n.cssText=r,s=T$.test(r)}}else t&&e.removeAttribute("style");Rd in e&&(e[Rd]=s?n.display:"",e[S$]&&(n.display="none"))}const Md=/\s*!important$/;function Fn(e,t,r){if(Ce(r))r.forEach(n=>Fn(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=I$(e,t);Md.test(r)?e.setProperty(un(n),r.replace(Md,""),"important"):e[n]=r}}const Bd=["Webkit","Moz","ms"],ta={};function I$(e,t){const r=ta[t];if(r)return r;let n=Xt(t);if(n!=="filter"&&n in e)return ta[t]=n;n=zh(n);for(let i=0;i<Bd.length;i++){const s=Bd[i]+n;if(s in e)return ta[t]=s}return t}function C$(e,t,r,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ot(n)&&r===n}const Nd="http://www.w3.org/1999/xlink";function Dd(e,t,r,n,i,s=Mv(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Nd,t.slice(6,t.length)):e.setAttributeNS(Nd,t,r):r==null||s&&!Oh(r)?e.removeAttribute(t):e.setAttribute(t,s?"":fr(r)?String(r):r)}function Pd(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?Am(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Oh(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(i||t)}function z$(e,t,r,n){e.addEventListener(t,r,n)}function A$(e,t,r,n){e.removeEventListener(t,r,n)}const Ud=Symbol("_vei");function O$(e,t,r,n,i=null){const s=e[Ud]||(e[Ud]={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=R$(t);if(n){const u=s[t]=N$(n,i);z$(e,o,u,l)}else a&&(A$(e,o,a,l),s[t]=void 0)}}const Ld=/(?:Once|Passive|Capture)$/;function R$(e){let t;if(Ld.test(e)){t={};let n;for(;n=e.match(Ld);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):un(e.slice(2)),t]}let ra=0;const M$=Promise.resolve(),B$=()=>ra||(M$.then(()=>ra=0),ra=Date.now());function N$(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;const i=r.value;if(Ce(i)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const a=i.slice(),o=[n];for(let l=0;l<a.length&&!n._stopped;l++){const u=a[l];u&&Jt(u,t,5,o)}}else Jt(i,t,5,[n])};return r.value=e,r.attached=B$(),r}const qd=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,D$=(e,t,r,n,i,s)=>{const a=i==="svg";t==="class"?x$(e,n,a):t==="style"?E$(e,r,n):fs(t)?hs(t)||O$(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):P$(e,t,n,a))?(Pd(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Dd(e,t,n,a,s,t!=="value")):e._isVueCE&&(U$(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ot(n)))?Pd(e,Xt(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Dd(e,t,n,a))};function P$(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&qd(t)&&Oe(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return qd(t)&&ot(r)?!1:t in e}function U$(e,t){const r=e._def.props;if(!r)return!1;const n=Xt(t);return Array.isArray(r)?r.some(i=>Xt(i)===n):Object.keys(r).some(i=>Xt(i)===n)}const L$=["ctrl","shift","alt","meta"],q$={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>L$.some(r=>e[`${r}Key`]&&!t.includes(r))},na=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=((i,...s)=>{for(let a=0;a<t.length;a++){const o=q$[t[a]];if(o&&o(i,t))return}return e(i,...s)}))},W$=_t({patchProp:D$},w$);let Wd;function V$(){return Wd||(Wd=e$(W$))}const H$=((...e)=>{const t=V$().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=G$(n);if(!i)return;const s=t._component;!Oe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,F$(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t});function F$(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function G$(e){return ot(e)?document.querySelector(e):e}const j$={class:"flex flex-col items-center gap-4 px-6 py-10 text-center"},K$={class:"flex flex-wrap items-center justify-center gap-3"},X$=hi({__name:"ImageUploader",emits:["select"],setup(e,{emit:t}){const r=t,n=De(!1),i=De(null),s=De(null);function a(l){const u=l==null?void 0:l[0];u&&u.type.startsWith("image/")&&r("select",u)}function o(l){var u;n.value=!1,a(((u=l.dataTransfer)==null?void 0:u.files)??null)}return(l,u)=>(ye(),_e("div",{class:At(["rounded-2xl border-2 border-dashed transition-colors",n.value?"border-amber-400 bg-amber-400/10":"border-slate-600 bg-slate-800/40"]),onDragover:u[4]||(u[4]=na(c=>n.value=!0,["prevent"])),onDragleave:u[5]||(u[5]=na(c=>n.value=!1,["prevent"])),onDrop:na(o,["prevent"])},[ne("div",j$,[u[6]||(u[6]=ne("div",{class:"flex h-16 w-16 items-center justify-center rounded-full border-4 border-red-500 bg-amber-50 text-3xl font-bold text-red-600"}," 帥 ",-1)),u[7]||(u[7]=ne("div",null,[ne("p",{class:"text-lg font-semibold text-slate-100"},"Tải ảnh bàn cờ tướng"),ne("p",{class:"mt-1 text-sm text-slate-400"},"Kéo–thả ảnh vào đây, hoặc chọn từ máy / chụp ảnh")],-1)),ne("div",K$,[ne("button",{type:"button",class:"rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-400 active:scale-95",onClick:u[0]||(u[0]=c=>{var p;return(p=i.value)==null?void 0:p.click()})}," Chọn ảnh "),ne("button",{type:"button",class:"rounded-xl bg-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-600 active:scale-95 sm:hidden",onClick:u[1]||(u[1]=c=>{var p;return(p=s.value)==null?void 0:p.click()})}," 📷 Chụp ảnh ")])]),ne("input",{ref_key:"fileInput",ref:i,type:"file",accept:"image/*",class:"hidden",onChange:u[2]||(u[2]=c=>a(c.target.files))},null,544),ne("input",{ref_key:"cameraInput",ref:s,type:"file",accept:"image/*",capture:"environment",class:"hidden",onChange:u[3]||(u[3]=c=>a(c.target.files))},null,544)],34))}}),Ze=9,Ge=10,Om=["a","b","c","d","e","f","g","h","i"],$s=[{id:0,type:"xe",fen:"R",vi:"Xe",en:"Chariot",hanRed:"俥",hanBlack:"車"},{id:1,type:"ma",fen:"N",vi:"Mã",en:"Horse",hanRed:"傌",hanBlack:"馬"},{id:2,type:"tuong",fen:"B",vi:"Tượng",en:"Elephant",hanRed:"相",hanBlack:"象"},{id:3,type:"si",fen:"A",vi:"Sĩ",en:"Advisor",hanRed:"仕",hanBlack:"士"},{id:4,type:"vua",fen:"K",vi:"Tướng",en:"General",hanRed:"帥",hanBlack:"將"},{id:5,type:"phao",fen:"C",vi:"Pháo",en:"Cannon",hanRed:"炮",hanBlack:"砲"},{id:6,type:"tot",fen:"P",vi:"Tốt",en:"Soldier",hanRed:"兵",hanBlack:"卒"}],ni=Object.fromEntries($s.map(e=>[e.id,e])),Z$=$s.map(e=>e.type);function Y$(e,t){if(e.length!==4||t.length!==4)throw new Error("computeHomography requires exactly 4 source and 4 destination points");const r=[],n=[];for(let s=0;s<4;s++){const{x:a,y:o}=e[s],{x:l,y:u}=t[s];r.push([a,o,1,0,0,0,-l*a,-l*o]),n.push(l),r.push([0,0,0,a,o,1,-u*a,-u*o]),n.push(u)}const i=J$(r,n);return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],1]}function Q$(e,t){const r=e[0]*t.x+e[1]*t.y+e[2],n=e[3]*t.x+e[4]*t.y+e[5],i=e[6]*t.x+e[7]*t.y+e[8];return{x:r/i,y:n/i}}function J$(e,t){const r=t.length,n=e.map((s,a)=>[...s,t[a]]);for(let s=0;s<r;s++){let a=s;for(let o=s+1;o<r;o++)Math.abs(n[o][s])>Math.abs(n[a][s])&&(a=o);if(Math.abs(n[a][s])<1e-12)throw new Error("Homography is degenerate (collinear corners?)");[n[s],n[a]]=[n[a],n[s]];for(let o=s+1;o<r;o++){const l=n[o][s]/n[s][s];for(let u=s;u<=r;u++)n[o][u]-=l*n[s][u]}}const i=new Array(r).fill(0);for(let s=r-1;s>=0;s--){let a=n[s][r];for(let o=s+1;o<r;o++)a-=n[s][o]*i[o];i[s]=a/n[s][s]}return i}function ho(e){return{x:(e.x1+e.x2)/2,y:(e.y1+e.y2)/2}}function Zo(e){const t=Y$([{x:0,y:0},{x:Ze-1,y:0},{x:Ze-1,y:Ge-1},{x:0,y:Ge-1}],[e.topLeft,e.topRight,e.bottomRight,e.bottomLeft]),r=[];for(let n=0;n<Ge;n++){const i=[];for(let s=0;s<Ze;s++)i.push(Q$(t,{x:s,y:n}));r.push(i)}return r}function en(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function e1(e,t){return t==="portrait"?e:{topLeft:e.bottomLeft,topRight:e.topLeft,bottomRight:e.topRight,bottomLeft:e.bottomRight}}function t1(e){const t=[e.topLeft,e.topRight,e.bottomRight,e.bottomLeft];let r=0;for(let n=0;n<4;n++){const i=t[n],s=t[(n+1)%4],a=t[(n+2)%4],o=(s.x-i.x)*(a.y-s.y)-(s.y-i.y)*(a.x-s.x);if(Math.abs(o)<1e-6)return!1;const l=Math.sign(o);if(r===0)r=l;else if(l!==r)return!1}return!0}function ia(e,t){return Zo(e1(e,t))}function r1(e){const t=(en(e.topLeft,e.topRight)+en(e.bottomLeft,e.bottomRight))/2,r=(en(e.topLeft,e.bottomLeft)+en(e.topRight,e.bottomRight))/2;return t>r?"landscape":"portrait"}function Vd(e){if(e.length<4)return null;let t=e[0],r=e[0],n=e[0],i=e[0];for(const s of e)s.x+s.y<t.x+t.y&&(t=s),s.x+s.y>n.x+n.y&&(n=s),s.x-s.y>r.x-r.y&&(r=s),s.x-s.y<i.x-i.y&&(i=s);return{topLeft:t,topRight:r,bottomRight:n,bottomLeft:i}}function n1(e){let t=0,r=0;for(let n=0;n<Ge;n++)for(let i=0;i<Ze;i++)i+1<Ze&&(t+=en(e[n][i],e[n][i+1]),r++),n+1<Ge&&(t+=en(e[n][i],e[n+1][i]),r++);return r?t/r:0}function i1(){return Array.from({length:Ge},()=>Array.from({length:Ze},()=>null))}function s1(e,t,r=.7){const n=i1(),i=[],s=n1(t),a=s*r,o=s*1.6,l=[...e].sort((c,p)=>p.score-c.score);for(const c of l){const p=ho(c),h=[];for(let _=0;_<Ge;_++)for(let b=0;b<Ze;b++)h.push({r:_,f:b,d:en(p,t[_][b])});if(h.sort((_,b)=>_.d-b.d),s>0&&h[0].d>a){i.push(c);continue}const m=h.find(_=>!n[_.r][_.f]&&(s<=0||_.d<=o));if(!m){i.push(c);continue}n[m.r][m.f]={...c,file:m.f,rank:m.r}}const u=[];for(let c=0;c<Ge;c++)for(let p=0;p<Ze;p++)n[c][p]&&u.push(n[c][p]);return{board:n,placed:u,dropped:i}}const a1={class:"relative w-full select-none overflow-hidden rounded-2xl bg-black"},o1=["src"],l1=["viewBox"],u1=["d","stroke-width"],d1=["cx","cy","r","fill","stroke-width","onPointerdown"],c1=hi({__name:"BoardGridEditor",props:{imageUrl:{},naturalWidth:{},naturalHeight:{},modelValue:{},mode:{}},emits:["update:modelValue"],setup(e,{emit:t}){const r=e,n=t,i=De(null),s=De(null),a=dt(()=>Math.max(r.naturalWidth,r.naturalHeight)/70),o=dt(()=>new Set(["0,0",`0,${Ze-1}`,`${Ge-1},0`,`${Ge-1},${Ze-1}`]));function l(b,k){return o.value.has(`${b},${k}`)}const u=dt(()=>{const b=r.modelValue,k=[];for(let v=0;v<Ge;v++)k.push("M "+b[v].map(w=>`${w.x} ${w.y}`).join(" L "));for(let v=0;v<Ze;v++){const w=[];for(let T=0;T<Ge;T++)w.push(b[T][v]);k.push("M "+w.map(T=>`${T.x} ${T.y}`).join(" L "))}return k}),c=dt(()=>{const b=[];for(let k=0;k<Ge;k++)for(let v=0;v<Ze;v++){const w=l(k,v);(r.mode==="mesh"||w)&&b.push({r:k,f:v,corner:w})}return b});function p(b,k){const v=i.value.getBoundingClientRect(),w=(b-v.left)/v.width*r.naturalWidth,T=(k-v.top)/v.height*r.naturalHeight;return{x:Math.min(r.naturalWidth,Math.max(0,w)),y:Math.min(r.naturalHeight,Math.max(0,T))}}function h(b,k,v){v.preventDefault(),s.value={r:b,f:k},v.target.setPointerCapture(v.pointerId)}function m(b){if(!s.value)return;const{r:k,f:v}=s.value,w=p(b.clientX,b.clientY);if(r.mode==="corners"){const T=r.modelValue,x={topLeft:k===0&&v===0?w:T[0][0],topRight:k===0&&v===Ze-1?w:T[0][Ze-1],bottomRight:k===Ge-1&&v===Ze-1?w:T[Ge-1][Ze-1],bottomLeft:k===Ge-1&&v===0?w:T[Ge-1][0]};n("update:modelValue",Zo(x))}else{const T=r.modelValue.map(x=>x.slice());T[k][v]=w,n("update:modelValue",T)}}function _(){s.value=null}return(b,k)=>(ye(),_e("div",a1,[ne("img",{src:e.imageUrl,alt:"bàn cờ",class:"block w-full",draggable:"false"},null,8,o1),(ye(),_e("svg",{ref_key:"svgRef",ref:i,class:"absolute inset-0 h-full w-full touch-none",viewBox:`0 0 ${e.naturalWidth} ${e.naturalHeight}`,preserveAspectRatio:"none",onPointermove:m,onPointerup:_,onPointercancel:_},[(ye(!0),_e(st,null,Dt(u.value,(v,w)=>(ye(),_e("path",{key:w,d:v,fill:"none",stroke:"rgba(56,189,248,0.75)","stroke-width":a.value*.14,class:"pointer-events-none"},null,8,u1))),128)),(ye(!0),_e(st,null,Dt(c.value,v=>(ye(),_e("circle",{key:`${v.r},${v.f}`,cx:e.modelValue[v.r][v.f].x,cy:e.modelValue[v.r][v.f].y,r:v.corner?a.value:a.value*.62,fill:s.value&&s.value.r===v.r&&s.value.f===v.f?"#f59e0b":v.corner?"rgba(251,191,36,0.9)":"rgba(56,189,248,0.9)",stroke:"#0f172a","stroke-width":a.value*.12,class:"cursor-grab",onPointerdown:w=>h(v.r,v.f,w)},null,40,d1))),128))],40,l1))]))}}),p1={class:"relative w-full overflow-hidden rounded-2xl bg-black"},f1=["src"],h1=["viewBox"],m1=["d","stroke-width"],g1=hi({__name:"DetectionCanvas",props:{imageUrl:{},naturalWidth:{},naturalHeight:{},mesh:{}},setup(e){const t=e,r=dt(()=>Math.max(t.naturalWidth,t.naturalHeight)/400),n=dt(()=>{const i=t.mesh,s=[];for(let a=0;a<Ge;a++)s.push("M "+i[a].map(o=>`${o.x} ${o.y}`).join(" L "));for(let a=0;a<Ze;a++){const o=[];for(let l=0;l<Ge;l++)o.push(i[l][a]);s.push("M "+o.map(l=>`${l.x} ${l.y}`).join(" L "))}return s});return(i,s)=>(ye(),_e("div",p1,[ne("img",{src:e.imageUrl,alt:"bàn cờ",class:"block w-full",draggable:"false"},null,8,f1),(ye(),_e("svg",{class:"pointer-events-none absolute inset-0 h-full w-full",viewBox:`0 0 ${e.naturalWidth} ${e.naturalHeight}`,preserveAspectRatio:"none"},[(ye(!0),_e(st,null,Dt(n.value,(a,o)=>(ye(),_e("path",{key:o,d:a,fill:"none",stroke:"rgba(56,189,248,0.7)","stroke-width":r.value},null,8,m1))),128))],8,h1))]))}});function y1(e,t="w"){const r=[];for(let n=0;n<Ge;n++){let i="",s=0;for(let a=0;a<Ze;a++){const o=e[n][a];if(!o){s++;continue}s>0&&(i+=String(s),s=0),i+=_1(o)}s>0&&(i+=String(s)),r.push(i)}return`${r.join("/")} ${t}`}function _1(e){const r=ni[e.classId].fen;return e.color==="red"?r.toUpperCase():r.toLowerCase()}function b1(e,t){return`${Om[e]}${t}`}function v1(e){const t=Array.from({length:Ge},()=>Array.from({length:Ze},()=>null));for(let r=0;r<Ge;r++)for(let n=0;n<Ze;n++){const i=e[r][n];if(!i)continue;const s=Ge-1-r,a=Ze-1-n;t[s][a]={...i,rank:s,file:a}}return t}const w1={vua:1,si:2,tuong:2,ma:2,xe:2,phao:2,tot:5},Ai={red:"Đỏ",black:"Đen"};function sa(e,t){return e<3||e>5?null:t>=0&&t<=2?"top":t>=7&&t<=9?"bottom":null}function $1(e){const t=[],r=e.flat().filter(a=>a!==null),n={red:[],black:[]};for(const a of r)n[a.color].push(a);for(const a of["red","black"]){const o=n[a];for(const u of $s){const c=o.filter(h=>h.classId===u.id).length,p=w1[u.type];c>p&&t.push(`${Ai[a]}: thừa ${u.vi} (${c}/${p})`)}const l=o.filter(u=>u.type==="vua");l.length===0?t.push(`${Ai[a]}: thiếu Tướng`):l.length>1&&t.push(`${Ai[a]}: có ${l.length} Tướng`);for(const u of l)sa(u.file,u.rank)||t.push(`${Ai[a]}: Tướng nằm ngoài cung`)}const i=n.red.find(a=>a.type==="vua"),s=n.black.find(a=>a.type==="vua");if(i&&s){const a=sa(i.file,i.rank),o=sa(s.file,s.rank);if(a&&o&&a===o&&t.push("Hai Tướng ở cùng một cung"),i.file===s.file){const l=Math.min(i.rank,s.rank),u=Math.max(i.rank,s.rank);let c=0;for(let p=l+1;p<u;p++)e[p][i.file]&&c++;c===0&&t.push("Hai Tướng đối mặt (lộ mặt tướng — không hợp lệ)")}}return{ok:t.length===0,issues:t}}function Zr(e,t){return e>=0&&e<Ze&&t>=0&&t<Ge}function sr(e,t,r){return Zr(t,r)?e[r][t]:null}function x1(e,t){const r=e.flat().find(n=>n&&n.color===t&&n.type==="vua");return r?r.rank<=4:t==="black"}function Hd(e,t,r){return e<3||e>5?!1:r?t>=0&&t<=2:t>=7&&t<=9}function Rm(e,t,r){const n=e.map(s=>s.slice()),i=n[t.rank][t.file];return n[t.rank][t.file]=null,i&&(n[r.rank][r.file]={...i,file:r.file,rank:r.rank}),n}function Mm(e,t){const r=e.flat().find(n=>n&&n.color===t&&n.type==="vua");if(!r)return!1;for(const n of e.flat()){if(!n||n.color===t)continue;if(Yo(e,n.file,n.rank).some(s=>s.file===r.file&&s.rank===r.rank))return!0}return!1}function S1(e,t,r){const n=sr(e,t,r);return n?Yo(e,t,r).filter(i=>!Mm(Rm(e,{file:t,rank:r},i),n.color)):[]}function Yo(e,t,r){const n=sr(e,t,r);if(!n)return[];const i=n.color,s=x1(e,i),a=s?1:-1,o=[],l=(c,p)=>{if(!Zr(c,p))return null;const h=sr(e,c,p);return h?h.color===i?null:"capture":"empty"},u=(c,p)=>{l(c,p)&&o.push({file:c,rank:p})};switch(n.type){case"xe":{for(const[c,p]of[[1,0],[-1,0],[0,1],[0,-1]]){let h=t+c,m=r+p;for(;Zr(h,m);){const _=sr(e,h,m);if(!_)o.push({file:h,rank:m});else{_.color!==i&&o.push({file:h,rank:m});break}h+=c,m+=p}}break}case"phao":{for(const[c,p]of[[1,0],[-1,0],[0,1],[0,-1]]){let h=t+c,m=r+p;for(;Zr(h,m)&&!sr(e,h,m);)o.push({file:h,rank:m}),h+=c,m+=p;if(Zr(h,m)){for(h+=c,m+=p;Zr(h,m)&&!sr(e,h,m);)h+=c,m+=p;const _=sr(e,h,m);_&&_.color!==i&&o.push({file:h,rank:m})}}break}case"ma":{const c=[[0,-1,[[-1,-2],[1,-2]]],[0,1,[[-1,2],[1,2]]],[-1,0,[[-2,-1],[-2,1]]],[1,0,[[2,-1],[2,1]]]];for(const[p,h,m]of c)if(!sr(e,t+p,r+h))for(const[_,b]of m)u(t+_,r+b);break}case"tuong":{for(const[c,p]of[[2,2],[2,-2],[-2,2],[-2,-2]]){const h=t+c,m=r+p;sr(e,t+c/2,r+p/2)||!(s?m<=4:m>=5)||u(h,m)}break}case"si":{for(const[c,p]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const h=t+c,m=r+p;Hd(h,m,s)&&u(h,m)}break}case"vua":{for(const[c,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const h=t+c,m=r+p;Hd(h,m,s)&&u(h,m)}for(let c=r+a;Zr(t,c);c+=a){const p=sr(e,t,c);if(p){p.color!==i&&p.type==="vua"&&o.push({file:t,rank:c});break}}break}case"tot":{u(t,r+a),(s?r>=5:r<=4)&&(u(t+1,r),u(t-1,r));break}}return o}const k1={class:"flex flex-col gap-6"},T1={class:"mb-2 flex flex-wrap items-center justify-between gap-2"},E1={class:"flex flex-wrap items-center justify-end gap-2"},I1={key:0,class:"mb-2 flex flex-wrap items-center gap-2 text-xs"},C1={key:0,class:"rounded-lg bg-rose-600 px-2 py-1 font-bold text-white"},z1=["disabled"],A1={class:"overflow-x-auto rounded-2xl bg-amber-100 p-2"},O1=["viewBox"],R1=["d"],M1=["x","y"],B1=["cx","cy","fill","stroke"],N1=["x","y","fill"],D1=["cx","cy"],P1=["cx","cy"],U1=["cx","cy"],L1=["cx","cy"],q1=["cx","cy","onClick"],W1={key:1,class:"mt-1 text-[11px] text-slate-500"},V1={key:2,class:"mt-1 text-[11px] text-slate-500"},H1={key:3,class:"mt-2 rounded-xl bg-slate-800/60 p-2"},F1={class:"space-y-1"},G1=["onClick"],j1={key:0,class:"self-center text-[11px] text-red-400"},K1={key:1,class:"self-center text-[11px] text-sky-400"},X1={class:"mt-2 text-xs text-slate-400"},Z1={class:"text-red-400"},Y1={class:"text-sky-400"},Q1={class:"flex items-stretch gap-2"},J1={class:"flex-1 break-all rounded-xl bg-slate-900 px-3 py-2 text-xs text-emerald-300"},ex={class:"mt-2"},tx={key:0,class:"font-semibold"},rx={class:"mb-1 font-semibold"},nx={class:"list-disc space-y-0.5 pl-4"},ix={class:"overflow-hidden rounded-xl border border-slate-700"},sx={class:"w-full text-left text-sm"},ax={class:"divide-y divide-slate-800"},ox={class:"px-3 py-1.5 font-mono text-slate-200"},lx={class:"px-3 py-1.5"},ux={class:"ml-1 text-slate-300"},dx={key:0},cx={class:"mt-2 text-[11px] text-slate-500"},Oi=.7,px=hi({__name:"ResultPanel",props:{board:{},fen:{}},emits:["flip","update"],setup(e,{emit:t}){const r=e,n=t,i=De(!1),s=Array.from({length:Ge},(Q,le)=>le),a=Array.from({length:Ze},(Q,le)=>le),o=Ze-1+Oi*2,l=Ge-1+Oi*2;function u(Q){return Oi+Q}function c(Q){return Oi+Q}const p=dt(()=>s.map(Q=>`M ${u(0)} ${c(Q)} L ${u(Ze-1)} ${c(Q)}`)),h=dt(()=>{const Q=[];for(const le of a)le===0||le===Ze-1?Q.push(`M ${u(le)} ${c(0)} L ${u(le)} ${c(Ge-1)}`):(Q.push(`M ${u(le)} ${c(0)} L ${u(le)} ${c(4)}`),Q.push(`M ${u(le)} ${c(5)} L ${u(le)} ${c(Ge-1)}`));return Q}),m=dt(()=>[`M ${u(3)} ${c(0)} L ${u(5)} ${c(2)}`,`M ${u(5)} ${c(0)} L ${u(3)} ${c(2)}`,`M ${u(3)} ${c(7)} L ${u(5)} ${c(9)}`,`M ${u(5)} ${c(7)} L ${u(3)} ${c(9)}`]),_=dt(()=>r.board.flat().filter(Q=>Q!==null)),b=dt(()=>[..._.value].sort((Q,le)=>Q.rank-le.rank||Q.file-le.file)),k=dt(()=>_.value.filter(Q=>Q.color==="red").length),v=dt(()=>_.value.filter(Q=>Q.color==="black").length);function w(Q){const le=ni[Q.classId];return Q.color==="red"?le.hanRed:le.hanBlack}function T(Q){const le=ni[Q.classId];return`${le.vi} (${le.en})`}const x=De(null),E=De(!1);function A(Q){return Q===null?"none":Q==="erase"?"erase":`${Q.color}-${Q.classId}`}function O(Q,le){const ue=x.value&&x.value!=="erase"&&x.value.classId===Q&&x.value.color===le;x.value=ue?null:{classId:Q,color:le}}function $(){x.value=x.value==="erase"?null:"erase"}const B=De(null),W=De(!1),Y=De("red"),ae=De([]),oe=De(null),N=dt(()=>{const Q=B.value;return!Q||!r.board[Q.rank][Q.file]?[]:W.value?r.board[Q.rank][Q.file].color!==Y.value?[]:S1(r.board,Q.file,Q.rank):Yo(r.board,Q.file,Q.rank)});function de(Q){return!!r.board[Q.rank][Q.file]}const ee=dt(()=>W.value&&Mm(r.board,Y.value)),J=dt(()=>ee.value?r.board.flat().find(Q=>Q&&Q.color===Y.value&&Q.type==="vua")??null:null);function he(){E.value=!E.value,E.value&&(W.value=!1),B.value=null}function Z(){W.value=!W.value,W.value&&(E.value=!1,oe.value=r.board.map(Q=>Q.slice()),ae.value=[],Y.value="red"),B.value=null}function Se(){Y.value=Y.value==="red"?"black":"red",B.value=null}function j(){const Q=ae.value.pop();Q&&(n("update",Q),Y.value=Y.value==="red"?"black":"red",B.value=null)}function P(){oe.value&&(n("update",oe.value.map(Q=>Q.slice())),ae.value=[],Y.value="red",B.value=null)}wn(E,()=>B.value=null),wn(()=>r.board,()=>Ne.value=null);function K(Q,le,ue){if(x.value==="erase"||!x.value){Q[le][ue]=null;return}const{classId:Ee,color:I}=x.value;Q[le][ue]={classId:Ee,type:ni[Ee].type,color:I,file:ue,rank:le,score:1,x1:0,y1:0,x2:0,y2:0}}function V(Q,le){if(E.value){if(!x.value)return;const Ee=r.board.map(I=>I.slice());K(Ee,Q,le),n("update",Ee);return}if(W.value){const Ee=N.value.find(z=>z.file===le&&z.rank===Q);if(B.value&&Ee){ae.value.push(r.board.map(z=>z.slice())),n("update",Rm(r.board,B.value,{file:le,rank:Q})),B.value=null,Y.value=Y.value==="red"?"black":"red";return}const I=r.board[Q][le];B.value=I&&I.color===Y.value?{file:le,rank:Q}:null;return}const ue=B.value&&B.value.file===le&&B.value.rank===Q;B.value=!ue&&r.board[Q][le]?{file:le,rank:Q}:null}async function $e(){await navigator.clipboard.writeText(r.fen),i.value=!0,setTimeout(()=>i.value=!1,1500)}const Ne=De(null);function Le(){Ne.value=$1(r.board)}return wn(()=>r.board,()=>Ne.value=null),(Q,le)=>(ye(),_e("div",k1,[ne("section",null,[ne("div",T1,[le[1]||(le[1]=ne("h3",{class:"text-sm font-semibold text-slate-300"},"Sơ đồ nhận diện",-1)),ne("div",E1,[ne("button",{class:At(["rounded-lg px-3 py-1 text-xs font-medium",W.value?"bg-indigo-600 text-white":"bg-slate-700 text-slate-100 hover:bg-slate-600"]),onClick:Z},nt(W.value?"♟ Đang đánh":"♟ Đánh cờ"),3),ne("button",{class:At(["rounded-lg px-3 py-1 text-xs font-medium",E.value?"bg-emerald-600 text-white":"bg-slate-700 text-slate-100 hover:bg-slate-600"]),onClick:he},nt(E.value?"✓ Đang sửa":"✎ Sửa tay"),3),ne("button",{class:"rounded-lg bg-slate-700 px-3 py-1 text-xs font-medium text-slate-100 hover:bg-slate-600",onClick:le[0]||(le[0]=ue=>n("flip"))}," ↻ Đổi bên ")])]),W.value?(ye(),_e("div",I1,[ne("button",{class:At(["rounded-lg px-3 py-1 font-semibold",Y.value==="red"?"bg-red-600 text-white":"bg-slate-200 text-slate-900"]),onClick:Se},nt(Y.value==="red"?"Đỏ đi":"Đen đi")+" ⇄ ",3),ee.value?(ye(),_e("span",C1,"Chiếu Tướng!")):vt("",!0),ne("button",{class:"rounded-lg bg-slate-700 px-3 py-1 font-medium text-slate-100 hover:bg-slate-600 disabled:opacity-40",disabled:!ae.value.length,onClick:j}," ↩ Hoàn tác ",8,z1),ne("button",{class:"rounded-lg bg-slate-700 px-3 py-1 font-medium text-slate-100 hover:bg-slate-600",onClick:P}," ⟲ Thế cờ đầu ")])):vt("",!0),ne("div",A1,[(ye(),_e("svg",{viewBox:`0 0 ${o} ${l}`,class:"block w-full",style:{"min-width":"280px"}},[(ye(!0),_e(st,null,Dt([...p.value,...h.value,...m.value],(ue,Ee)=>(ye(),_e("path",{key:Ee,d:ue,fill:"none",stroke:"#a16207","stroke-width":"0.035","stroke-linecap":"round"},null,8,R1))),128)),ne("text",{x:o/2,y:c(4.5),"text-anchor":"middle","dominant-baseline":"central","font-size":"0.5",fill:"#a16207",opacity:"0.6"}," 楚 河 ⋮ 漢 界 ",8,M1),(ye(!0),_e(st,null,Dt(_.value,ue=>(ye(),_e("g",{key:`${ue.rank}-${ue.file}`,class:"pointer-events-none"},[ne("circle",{cx:u(ue.file),cy:c(ue.rank),r:"0.43",fill:ue.color==="red"?"#fee2e2":"#f1f5f9",stroke:ue.color==="red"?"#dc2626":"#1e293b","stroke-width":"0.06"},null,8,B1),ne("text",{x:u(ue.file),y:c(ue.rank),"text-anchor":"middle","dominant-baseline":"central","font-size":"0.56","font-weight":"bold",fill:ue.color==="red"?"#dc2626":"#0f172a"},nt(w(ue)),9,N1)]))),128)),J.value?(ye(),_e("circle",{key:0,cx:u(J.value.file),cy:c(J.value.rank),r:"0.5",fill:"none",stroke:"#f43f5e","stroke-width":"0.1",class:"pointer-events-none"},null,8,D1)):vt("",!0),!E.value&&B.value?(ye(),_e(st,{key:1},[ne("circle",{cx:u(B.value.file),cy:c(B.value.rank),r:"0.5",fill:"none",stroke:"#10b981","stroke-width":"0.09",class:"pointer-events-none"},null,8,P1),(ye(!0),_e(st,null,Dt(N.value,(ue,Ee)=>(ye(),_e("g",{key:`mv-${Ee}`,class:"pointer-events-none"},[de(ue)?(ye(),_e("circle",{key:0,cx:u(ue.file),cy:c(ue.rank),r:"0.5",fill:"none",stroke:"#10b981","stroke-width":"0.09","stroke-dasharray":"0.18 0.14"},null,8,U1)):(ye(),_e("circle",{key:1,cx:u(ue.file),cy:c(ue.rank),r:"0.16",fill:"#10b981"},null,8,L1))]))),128))],64)):vt("",!0),(ye(!0),_e(st,null,Dt(yt(s),ue=>(ye(),_e("g",{key:`row-${ue}`},[(ye(!0),_e(st,null,Dt(yt(a),Ee=>(ye(),_e("circle",{key:`hit-${ue}-${Ee}`,cx:u(Ee),cy:c(ue),r:"0.5",fill:"transparent",class:"cursor-pointer",onClick:I=>V(ue,Ee)},null,8,q1))),128))]))),128))],8,O1))]),W.value?(ye(),_e("p",W1," Bấm quân đúng lượt rồi bấm ô xanh để đi. Nước tự chiếu Tướng bị loại. ")):E.value?vt("",!0):(ye(),_e("p",V1," Bấm vào một quân để xem nước đi hợp lệ (chấm xanh = đi, vòng xanh = ăn). ")),E.value?(ye(),_e("div",H1,[le[2]||(le[2]=ne("p",{class:"mb-1.5 text-[11px] text-slate-400"}," Chọn quân rồi bấm vào giao điểm để đặt/đổi. Chọn 🚫 để xoá. ",-1)),ne("div",F1,[(ye(),_e(st,null,Dt(["red","black"],ue=>ne("div",{key:ue,class:"flex flex-wrap gap-1"},[(ye(!0),_e(st,null,Dt(yt($s),Ee=>(ye(),_e("button",{key:`${ue}-${Ee.id}`,class:At(["flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold transition",[ue==="red"?"bg-amber-50 text-red-600 border-red-500":"bg-slate-100 text-slate-900 border-slate-700",A(x.value)===`${ue}-${Ee.id}`?"ring-2 ring-emerald-400 scale-110":"opacity-90 hover:opacity-100"]]),onClick:I=>O(Ee.id,ue)},nt(ue==="red"?Ee.hanRed:Ee.hanBlack),11,G1))),128)),ue==="red"?(ye(),_e("span",j1,"Đỏ")):(ye(),_e("span",K1,"Đen"))])),64)),ne("button",{class:At(["mt-1 rounded-lg px-3 py-1 text-xs font-medium",x.value==="erase"?"bg-rose-600 text-white":"bg-slate-700 text-slate-100 hover:bg-slate-600"]),onClick:$}," 🚫 Xoá quân ",2)])])):vt("",!0),ne("p",X1,[jt(" Tổng: "+nt(_.value.length)+" quân — ",1),ne("span",Z1,"Đỏ "+nt(k.value),1),le[3]||(le[3]=jt(" · ",-1)),ne("span",Y1,"Đen "+nt(v.value),1)])]),ne("section",null,[le[4]||(le[4]=ne("h3",{class:"mb-2 text-sm font-semibold text-slate-300"},"Xiangqi FEN",-1)),ne("div",Q1,[ne("code",J1,nt(e.fen),1),ne("button",{class:"shrink-0 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-500",onClick:$e},nt(i.value?"✓ Đã copy":"Copy"),1)]),ne("div",ex,[ne("button",{class:"rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-500",onClick:Le}," ✓ Kiểm tra thế cờ "),Ne.value?(ye(),_e("div",{key:0,class:At(["mt-2 rounded-xl px-3 py-2 text-xs",Ne.value.ok?"bg-emerald-900/30 text-emerald-300":"bg-rose-900/30 text-rose-200"])},[Ne.value.ok?(ye(),_e("p",tx,"✓ Thế cờ hợp lệ")):(ye(),_e(st,{key:1},[ne("p",rx,"⚠ Có "+nt(Ne.value.issues.length)+" vấn đề:",1),ne("ul",nx,[(ye(!0),_e(st,null,Dt(Ne.value.issues,(ue,Ee)=>(ye(),_e("li",{key:Ee},nt(ue),1))),128))])],64))],2)):vt("",!0)])]),ne("section",null,[le[7]||(le[7]=ne("h3",{class:"mb-2 text-sm font-semibold text-slate-300"},"Danh sách vị trí",-1)),ne("div",ix,[ne("table",sx,[le[6]||(le[6]=ne("thead",{class:"bg-slate-800 text-slate-400"},[ne("tr",null,[ne("th",{class:"px-3 py-2 font-medium"},"Vị trí"),ne("th",{class:"px-3 py-2 font-medium"},"Quân"),ne("th",{class:"px-3 py-2 font-medium"},"Bên")])],-1)),ne("tbody",ax,[(ye(!0),_e(st,null,Dt(b.value,ue=>(ye(),_e("tr",{key:`${ue.rank}-${ue.file}`,class:"bg-slate-900/50"},[ne("td",ox,nt(yt(b1)(ue.file,ue.rank)),1),ne("td",lx,[ne("span",{class:At(ue.color==="red"?"text-red-400":"text-sky-400")},nt(w(ue)),3),ne("span",ux,nt(T(ue)),1)]),ne("td",{class:At(["px-3 py-1.5",ue.color==="red"?"text-red-400":"text-sky-400"])},nt(ue.color==="red"?"Đỏ":"Đen"),3)]))),128)),b.value.length?vt("",!0):(ye(),_e("tr",dx,[...le[5]||(le[5]=[ne("td",{colspan:"3",class:"px-3 py-4 text-center text-slate-500"},"Chưa có quân nào",-1)])]))])])]),ne("p",cx," Cột "+nt(yt(Om).join(" "))+" (trái→phải), hàng 0–9 (trên→dưới). ",1)])]))}});/*!
 * ONNX Runtime Web v1.26.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Qo=Object.defineProperty,fx=Object.getOwnPropertyDescriptor,hx=Object.getOwnPropertyNames,mx=Object.prototype.hasOwnProperty,gx=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),X=(e,t)=>()=>(e&&(t=e(e=0)),t),En=(e,t)=>{for(var r in t)Qo(e,r,{get:t[r],enumerable:!0})},yx=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of hx(t))!mx.call(e,i)&&i!==r&&Qo(e,i,{get:()=>t[i],enumerable:!(n=fx(t,i))||n.enumerable});return e},di=e=>yx(Qo({},"__esModule",{value:!0}),e),Mn,Or,gn,Fd,Bm,Nm=X(()=>{Mn=new Map,Or=[],gn=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Mn.get(e);if(n===void 0)Mn.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Or.indexOf(e);i!==-1&&Or.splice(i,1);for(let s=0;s<Or.length;s++)if(Mn.get(Or[s]).priority<=r){Or.splice(s,0,e);return}Or.push(e)}return}throw new TypeError("not a valid backend")},Fd=async e=>{let t=Mn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Bm=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Or:r,i,s=[],a=new Set;for(let l of n){let u=await Fd(l);typeof u=="string"?s.push({name:l,err:u}):(i||(i=u),i===u&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:u}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${u}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,u)=>u==="executionProviders"?o:Reflect.get(l,u)})]}}),_x=X(()=>{Nm()}),Dm,bx=X(()=>{Dm="1.26.0"}),aa,pt,Pm=X(()=>{bx(),aa="warning",pt={wasm:{},webgl:{},webgpu:{},versions:{common:Dm},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);aa=e}},get logLevel(){return aa}},Object.defineProperty(pt,"logLevel",{enumerable:!0})}),Je,vx=X(()=>{Pm(),Je=pt}),Um,Lm,wx=X(()=>{Um=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,u;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?u=[0,0,0,0]:typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:(u=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(u[3]=o.bias[3]));let c=s*i,p=0,h=c,m=c*2,_=-1;a==="RGBA"?(p=0,h=c,m=c*2,_=c*3):a==="RGB"?(p=0,h=c,m=c*2):a==="RBG"&&(p=0,m=c,h=c*2);for(let b=0;b<s;b++)for(let k=0;k<i;k++){let v=(e.data[p++]-u[0])*l[0],w=(e.data[h++]-u[1])*l[1],T=(e.data[m++]-u[2])*l[2],x=_===-1?255:(e.data[_++]-u[3])*l[3];n.fillStyle="rgba("+v+","+w+","+T+","+x+")",n.fillRect(k,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Lm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,u,c;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,m=0,_=1,b=2,k=3,v=0,w=p,T=p*2,x=-1;o==="RGBA"?(v=0,w=p,T=p*2,x=p*3):o==="RGB"?(v=0,w=p,T=p*2):o==="RBG"&&(v=0,T=p,w=p*2),n=r.createImageData(i,s);for(let E=0;E<s*i;m+=h,_+=h,b+=h,k+=h,E++)n.data[m]=(e.data[v++]-c[0])*u[0],n.data[_]=(e.data[w++]-c[1])*u[1],n.data[b]=(e.data[T++]-c[2])*u[2],n.data[k]=x===-1?255:(e.data[x++]-c[3])*u[3]}else throw new Error("Can not access image data");return n}}),Ri,qm,Wm,Vm,Hm,Fm,$x=X(()=>{Jo(),Ri=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",u=r*n,c=l==="RGBA"?new Float32Array(u*4):new Float32Array(u*3),p=4,h=0,m=1,_=2,b=3,k=0,v=u,w=u*2,T=-1;o==="RGB"&&(p=3,h=0,m=1,_=2,b=-1),l==="RGBA"?T=u*3:l==="RBG"?(k=0,w=u,v=u*2):l==="BGR"&&(w=0,v=u,k=u*2);for(let x=0;x<u;x++,h+=p,_+=p,m+=p,b+=p)c[k++]=(e[h]+a[0])/s[0],c[v++]=(e[m]+a[1])/s[1],c[w++]=(e[_]+a[2])/s[2],T!==-1&&b!==-1&&(c[T++]=(e[b]+a[3])/s[3]);return l==="RGBA"?new Ot("float32",c,[1,4,r,n]):new Ot("float32",c,[1,3,r,n])},qm=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},u=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let p=u(c);if(p!=null){let h=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=m}else o.tensorFormat="RGBA",o.height=h,o.width=m;p.drawImage(e,0,0),a=p.getImageData(0,0,m,h).data}else throw new Error("Can not access image data")}else if(n){let c,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,p=t.resizedWidth):(c=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=p,t!==void 0){let h=l();h.width=p,h.height=c;let m=u(h);if(m!=null)m.putImageData(e,0,0),a=m.getImageData(0,0,p,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let p=u(c);if(p!=null){let h=e.height,m=e.width;return p.drawImage(e,0,0,m,h),a=p.getImageData(0,0,m,h).data,o.height=h,o.width=m,Ri(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,p)=>{let h=l(),m=u(h);if(!e||!m)return p();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{h.width=_.width,h.height=_.height,m.drawImage(_,0,0,h.width,h.height);let b=m.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,c(Ri(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Ri(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Wm=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new Ot({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},Vm=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Ot({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},Hm=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Ot({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},Fm=(e,t,r)=>new Ot({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Yr,Gn,oa,Gm,xx=X(()=>{Yr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Gn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),oa=!1,Gm=()=>{if(!oa){oa=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Yr.set("int64",BigInt64Array),Gn.set(BigInt64Array,"int64")),t&&(Yr.set("uint64",BigUint64Array),Gn.set(BigUint64Array,"uint64")),n?(Yr.set("float16",r),Gn.set(r,"float16")):Yr.set("float16",Uint16Array)}}}),jm,Km,Sx=X(()=>{Jo(),jm=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Km=(e,t)=>{switch(e.location){case"cpu":return new Ot(e.type,e.data,t);case"cpu-pinned":return new Ot({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ot({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ot({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ot({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ot,Jo=X(()=>{wx(),$x(),xx(),Sx(),Ot=class{constructor(e,t,r){Gm();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Yr.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Yr.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=Gn.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=jm(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return qm(e,t)}static fromTexture(e,t){return Wm(e,t)}static fromGpuBuffer(e,t){return Vm(e,t)}static fromMLTensor(e,t){return Hm(e,t)}static fromPinnedBuffer(e,t,r){return Fm(e,t,r)}toDataURL(e){return Um(this,e)}toImageData(e){return Lm(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Km(this,e)}}}),Pt,Xm=X(()=>{Jo(),Pt=Ot}),is,la,hr,Yt,nn,sn,Zm=X(()=>{Pm(),is=(e,t)=>{(typeof pt.trace>"u"?!pt.wasm.trace:!pt.trace)||console.timeStamp(`${e}::ORT::${t}`)},la=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],n=!1;for(let s=0;s<r.length;s++){if(n&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),is("CPU",a);return}r[s].includes("TRACE_FUNC")&&(n=!0)}},hr=e=>{(typeof pt.trace>"u"?!pt.wasm.trace:!pt.trace)||la("BEGIN",e)},Yt=e=>{(typeof pt.trace>"u"?!pt.wasm.trace:!pt.trace)||la("END",e)},nn=e=>{(typeof pt.trace>"u"?!pt.wasm.trace:!pt.trace)||console.time(`ORT::${e}`)},sn=e=>{(typeof pt.trace>"u"?!pt.wasm.trace:!pt.trace)||console.timeEnd(`ORT::${e}`)}}),Ym,kx=X(()=>{Nm(),Xm(),Zm(),Ym=class Qm{constructor(t){this.handler=t}async run(t,r,n){hr(),nn("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Pt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Pt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let u of r){if(typeof u!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(u)===-1)throw new RangeError(`'fetches' contains invalid output name: ${u}.`);i[u]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let u=!1,c=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(c.indexOf(p)!==-1){let h=r[p];(h===null||h instanceof Pt)&&(u=!0,a=!1,i[p]=h)}if(u){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let u of this.inputNames)if(typeof t[u]>"u")throw new Error(`input '${u}' is missing in 'feeds'.`);if(a)for(let u of this.outputNames)i[u]=null;let o=await this.handler.run(t,i,s),l={};for(let u in o)if(Object.hasOwnProperty.call(o,u)){let c=o[u];c instanceof Pt?l[u]=c:l[u]=new Pt(c.type,c.data,c.dims)}return sn("InferenceSession.run"),Yt(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){hr(),nn("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,p=0,h=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-p,typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await Bm(a),u=await o.createInferenceSessionHandler(s,l);return sn("InferenceSession.create"),Yt(),new Qm(u)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),xs,Tx=X(()=>{kx(),xs=Ym}),Ex=X(()=>{}),Ix=X(()=>{}),Cx=X(()=>{}),zx=X(()=>{}),Ax={};En(Ax,{InferenceSession:()=>xs,TRACE:()=>is,TRACE_EVENT_BEGIN:()=>nn,TRACE_EVENT_END:()=>sn,TRACE_FUNC_BEGIN:()=>hr,TRACE_FUNC_END:()=>Yt,Tensor:()=>Pt,env:()=>Je,registerBackend:()=>gn});var Lt=X(()=>{_x(),vx(),Tx(),Xm(),Ex(),Ix(),Zm(),Cx(),zx()}),el=X(()=>{}),Jm={};En(Jm,{default:()=>eg});var ua,da,eg,Ox=X(()=>{var e;s_(),dn(),tl(),ua="ort-wasm-proxy-worker",da=((e=globalThis.self)==null?void 0:e.name)===ua,da&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":rl(n.wasm).then(()=>{bl(n).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:s}=n;vl(s,i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:i}=n,s=cs(i);postMessage({type:r,out:s});break}case"create":{let{model:i,options:s}=n;wl(i,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":$l(n),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:s,inputs:a,outputIndices:o,options:l}=n;xl(i,s,a,o,new Array(o.length).fill(null),l).then(u=>{u.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:u},kl([...a,...u]))},u=>{postMessage({type:r,err:u})});break}case"end-profiling":Sl(n),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),eg=da?null:t=>new Worker(t??zt,{type:"module",name:ua})}),tg={};En(tg,{default:()=>rg});async function Gd(e={}){var dd,cd;var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&((dd=self.name)==null?void 0:dd.startsWith("em-pthread"));t.mountExternalData=(d,f)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=d=>async(...f)=>{var y;try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:f[0],errors:[]},S=await d(...f);if(t.Yc!==g)throw Error("Session mismatch");(y=t.dd)==null||y.flush();let C=g.errors;if(0<C.length){let R=await Promise.all(C);if(R=R.filter(U=>U),0<R.length)throw Error(R.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(d,f)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let y=t.dd;t.jsepRegisterBuffer=(g,S,C,R)=>y.registerBuffer(g,S,C,R),t.jsepGetBuffer=g=>y.getBuffer(g),t.jsepCreateDownloader=(g,S,C)=>y.createDownloader(g,S,C),t.jsepOnCreateSession=g=>{y.onCreateSession(g)},t.jsepOnReleaseSession=g=>{y.onReleaseSession(g)},t.jsepOnRunStart=g=>y.onRunStart(g),t.Id=(g,S)=>{y.upload(g,S)}}else if(d==="webnn"){let y=f[0];[t.Wd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=g=>y.onRunStart(g),t.webnnOnRunEnd=y.onRunEnd.bind(y),t.webnnOnReleaseSession=g=>{y.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,S)=>y.createMLTensorDownloader(g,S),t.webnnRegisterMLTensor=(g,S,C,R)=>y.registerMLTensor(g,S,C,R),t.webnnCreateMLContext=g=>y.createMLContext(g),t.webnnRegisterMLConstant=(g,S,C,R,U,ie)=>y.registerMLConstant(g,S,C,R,U,t.Xc,ie),t.webnnRegisterGraphInput=y.registerGraphInput.bind(y),t.webnnIsGraphInput=y.isGraphInput.bind(y),t.webnnRegisterGraphOutput=y.registerGraphOutput.bind(y),t.webnnIsGraphOutput=y.isGraphOutput.bind(y),t.webnnCreateTemporaryTensor=y.createTemporaryTensor.bind(y),t.webnnIsGraphInputOutputTypeSupported=y.isGraphInputOutputTypeSupported.bind(y)}};let a=()=>{let d=f=>(...y)=>{let g=tr;return y=f(...y),tr!=g?new Promise((S,C)=>{Os={resolve:S,reject:C}}):y};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=d(t[f])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var o,l,u=(d,f)=>{throw f},c=import.meta.url,p="";if(r||n){try{p=new URL(".",c).href}catch{}n&&(l=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),o=async d=>{if(O(d))return new Promise((y,g)=>{var S=new XMLHttpRequest;S.open("GET",d,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?y(S.response):g(S.status)},S.onerror=g,S.send(null)});var f=await fetch(d,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var h,m,_,b,k,v,w=console.log.bind(console),T=console.error.bind(console),x=w,E=T,A=!1,O=d=>d.startsWith("file://");function $(){ze.buffer!=W.buffer&&P()}if(i){let d=function(f){try{var y=f.data,g=y.Sc;if(g==="load"){let S=[];self.onmessage=C=>S.push(C),v=()=>{postMessage({Sc:"loaded"});for(let C of S)d(C);self.onmessage=d};for(let C of y.xd)t[C]&&!t[C].proxy||(t[C]=(...R)=>{postMessage({Sc:"callHandler",wd:C,args:R})},C=="print"&&(x=t[C]),C=="printErr"&&(E=t[C]));ze=y.Od,P(),m=y.Pd,Ne(),Ei()}else if(g==="run"){(function(S){var C=($(),de)[S+52>>>2>>>0];S=($(),de)[S+56>>>2>>>0],vu(C,C-S),Ae(C)})(y.Rc),Ds(y.Rc,0,0,1,0,0),pe(),Cs(y.Rc),B||(hu(),B=!0);try{je(y.Md,y.bd)}catch(S){if(S!="unwind")throw S}}else y.target!=="setimmediate"&&(g==="checkMailbox"?B&&vi():g&&(E(`worker: received unknown command ${g}`),E(y)))}catch(S){throw mu(),S}};var B=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=d}var W,Y,ae,oe,N,de,ee,J,he,Z,Se,j=!1;function P(){var d=ze.buffer;t.HEAP8=W=new Int8Array(d),ae=new Int16Array(d),t.HEAPU8=Y=new Uint8Array(d),oe=new Uint16Array(d),t.HEAP32=N=new Int32Array(d),t.HEAPU32=de=new Uint32Array(d),ee=new Float32Array(d),J=new Float64Array(d),he=new BigInt64Array(d),Z=new BigUint64Array(d)}function K(){j=!0,i?v():gr.sb()}function V(d){throw E(d="Aborted("+d+")"),A=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),k==null||k(d),d}function $e(){return{a:{ma:Db,gb:Nb,g:ut,J:Bt,f:gi,o:yi,h:b_,ha:v_,b:w_,T:$_,Ha:El,n:x_,$:Al,Xa:Ol,Da:Rl,Fa:Ml,Ya:Bl,Va:Nl,Oa:Dl,Ua:Pl,ka:Ul,Ea:Ll,Ba:ql,Wa:Wl,Ca:Vl,bb:S_,ea:k_,wa:T_,ua:I_,da:z_,O:A_,H:O_,va:R_,_:L_,xa:q_,Ra:W_,za:H_,Ia:F_,sa:G_,fa:j_,Qa:Cs,_a:K_,R:Q_,r:nb,c:Es,hb:ib,y:sb,M:ab,D:ob,l:lb,s:Yl,ib:ub,I:db,S:cb,j:pb,u:fb,q:hb,k:mb,La:gb,Ma:yb,Na:_b,Ja:tu,Ka:ru,ta:nu,db:vb,ab:$b,v:xb,aa:Sb,ga:kb,$a:wb,W:Tb,Za:Eb,Aa:Ib,F:bb,U:Cb,la:ki,ya:Ab,fb:zb,eb:Ob,Sa:ou,Ta:lu,Ga:F,V:uu,ja:du,Pa:cu,ia:pu,kb:bv,na:hv,lb:_v,oa:fv,G:iv,d:qb,t:Ub,w:Pb,A:Yb,mb:dv,K:tv,x:Hb,pa:cv,Y:mv,ba:uv,nb:lv,ob:ov,P:Qb,qa:av,pb:sv,N:rv,Z:pv,e:Lb,B:Vb,m:Wb,jb:vv,p:Gb,z:jb,C:Fb,E:Kb,L:Jb,qb:nv,Q:gv,ca:ev,X:yv,rb:Zb,ra:Xb,i:Mb,a:ze,cb:H}}}async function Ne(){function d(g,S){var C=gr=g.exports;g={};for(let[R,U]of Object.entries(C))typeof U=="function"?(C=X_(U),g[R]=C):g[R]=U;return gr=g,gr=(function(){var R=gr,U=ce=>Ie=>ce(Ie)>>>0,ie=ce=>()=>ce()>>>0;return(R=Object.assign({},R)).tb=U(R.tb),R.Xb=ie(R.Xb),R.Zb=U(R.Zb),R.lc=U(R.lc),R.mc=ie(R.mc),R.qc=U(R.qc),R})(),re.push(gr._b),fu=(g=gr).tb,hu=g.ub,t._OrtInit=g.vb,t._OrtGetLastError=g.wb,t._OrtCreateSessionOptions=g.xb,t._OrtAppendExecutionProvider=g.yb,t._OrtAddFreeDimensionOverride=g.zb,t._OrtAddSessionConfigEntry=g.Ab,t._OrtReleaseSessionOptions=g.Bb,t._OrtCreateSession=g.Cb,t._OrtReleaseSession=g.Db,t._OrtGetInputOutputCount=g.Eb,t._OrtGetInputOutputMetadata=g.Fb,t._OrtFree=g.Gb,t._OrtCreateTensor=g.Hb,t._OrtGetTensorData=g.Ib,t._OrtReleaseTensor=g.Jb,t._OrtCreateRunOptions=g.Kb,t._OrtAddRunConfigEntry=g.Lb,t._OrtReleaseRunOptions=g.Mb,t._OrtCreateBinding=g.Nb,t._OrtBindInput=g.Ob,t._OrtBindOutput=g.Pb,t._OrtClearBoundOutputs=g.Qb,t._OrtReleaseBinding=g.Rb,t._OrtRunWithBinding=g.Sb,t._OrtRun=g.Tb,t._OrtEndProfiling=g.Ub,t._JsepOutput=g.Vb,t._JsepGetNodeName=g.Wb,Ti=g.Xb,rr=t._free=g.Yb,zn=t._malloc=g.Zb,Ds=g.ac,mu=g.bc,gu=g.cc,yu=g.dc,Ps=g.ec,_u=g.fc,bu=g.gc,Me=g.hc,An=g.ic,vu=g.jc,Ae=g.kc,Us=g.lc,Re=g.mc,wu=g.nc,Ls=g.oc,$u=g.pc,xu=g.qc,Su=g.rc,qs=g.sc,ku=g.tc,Tu=g.uc,Eu=g.vc,Iu=g.wc,Cu=g.xc,zu=g.yc,Au=g.zc,Ou=g.Ac,Ru=g.Bc,Mu=g.Cc,Bu=g.Dc,Nu=g.Ec,Du=g.Fc,Pu=g.Gc,Uu=g.Hc,Lu=g.Ic,qu=g.Jc,Wu=g.Kc,Vu=g.Lc,Hu=g.Mc,Fu=g.Nc,Gu=g.Pc,ju=g.Qc,Ku=g.$c,Xu=g.ad,Zu=g.fd,Yu=g.jd,Qu=g.kd,Ju=g.ld,ed=g.md,td=g.nd,rd=g.od,nd=g.pd,id=g.qd,sd=g.vd,ad=g.Sd,od=g.Td,ld=g.Ud,ud=g.Vd,m=S,gr}var f,y=$e();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(y,(S,C)=>{g(d(S,C))})}):i?d(new WebAssembly.Instance(m,$e()),m):(Se??(Se=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/chess_detection/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href),f=await(async function(g){var S=Se;if(!h&&!O(S))try{var C=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,g)}catch(R){E(`wasm streaming compile failed: ${R}`),E("falling back to ArrayBuffer instantiation")}return(async function(R,U){try{var ie=await(async function(ce){if(!h)try{var Ie=await o(ce);return new Uint8Array(Ie)}catch{}if(ce==Se&&h)ce=new Uint8Array(h);else{if(!l)throw"both async and sync fetching of the wasm failed";ce=l(ce)}return ce})(R);return await WebAssembly.instantiate(ie,U)}catch(ce){E(`failed to asynchronously prepare wasm: ${ce}`),V(ce)}})(S,g)})(y),d(f.instance,f.module))}class Le{constructor(f){pd(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var Q=d=>{d.terminate(),d.onmessage=()=>{}},le=[],ue=0,Ee=null,I=d=>{se.length==0&&(xe(),be(se[0]));var f=se.pop();if(!f)return 6;te.push(f),q[d.Rc]=f,f.Rc=d.Rc;var y={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return f.postMessage(y,d.rd),0},z=0,M=(d,f,...y)=>{var g,S=16*y.length,C=Re(),R=Us(S),U=R>>>3;for(g of y)typeof g=="bigint"?(($(),he)[U++>>>0]=1n,($(),he)[U++>>>0]=g):(($(),he)[U++>>>0]=0n,($(),J)[U++>>>0]=g);return d=gu(d,0,S,R,f),Ae(C),d};function H(d){if(i)return M(0,1,d);if(_=d,!(0<z)){for(var f of te)Q(f);for(f of se)Q(f);se=[],te=[],q={},A=!0}u(0,new Le(d))}function G(d){if(i)return M(1,0,d);F(d)}var F=d=>{if(_=d,i)throw G(d),"unwind";H(d)},se=[],te=[],re=[],q={},we=d=>{var f=d.Rc;delete q[f],se.push(d),te.splice(te.indexOf(d),1),d.Rc=0,yu(f)};function pe(){re.forEach(d=>d())}var be=d=>new Promise(f=>{d.onmessage=S=>{var C=S.data;if(S=C.Sc,C.Zc&&C.Zc!=Ti()){var R=q[C.Zc];R?R.postMessage(C,C.rd):E(`Internal error! Worker sent a message "${S}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?vi():S==="spawnThread"?I(C):S==="cleanupThread"?bi(()=>{we(q[C.Nd])}):S==="loaded"?(d.loaded=!0,f(d)):C.target==="setimmediate"?d.postMessage(C):S==="uncaughtException"?d.onerror(C.error):S==="callHandler"?t[C.wd](...C.args):S&&E(`worker sent an unknown command ${S}`)},d.onerror=S=>{throw E(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var y,g=[];for(y of[])t.propertyIsEnumerable(y)&&g.push(y);d.postMessage({Sc:"load",xd:g,Od:ze,Pd:m})});function xe(){var d=new Worker((()=>{let f=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new f("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});se.push(d)}var ze,je=(d,f)=>{z=0,d=qs(d,f),0<z?_=d:Ps(d)},qe=[],rt=0;function ut(d){var f=new mt(d>>>=0);return($(),W)[f.Tc+12>>>0]==0&&(Ir(f,!0),rt--),In(f,!1),qe.push(f),xu(d)}var ht=0,Bt=()=>{Me(0,0);var d=qe.pop();wu(d.cd),ht=0};function Ir(d,f){f=f?1:0,($(),W)[d.Tc+12>>>0]=f}function In(d,f){f=f?1:0,($(),W)[d.Tc+13>>>0]=f}class mt{constructor(f){this.cd=f,this.Tc=f-24}}var Et=d=>{var f=ht;if(!f)return An(0),0;var y=new mt(f);($(),de)[y.Tc+16>>>2>>>0]=f;var g=($(),de)[y.Tc+4>>>2>>>0];if(!g)return An(0),f;for(var S of d){if(S===0||S===g)break;if($u(S,g,y.Tc+16))return An(S),f}return An(g),f};function gi(){return Et([])}function yi(d){return Et([d>>>0])}function b_(d,f,y,g){return Et([d>>>0,f>>>0,y>>>0,g>>>0])}var v_=()=>{var d=qe.pop();d||V("no exception to throw");var f=d.cd;throw($(),W)[d.Tc+13>>>0]==0&&(qe.push(d),In(d,!0),Ir(d,!1),rt++),Ls(f),ht=f};function w_(d,f,y){var g=new mt(d>>>=0);throw f>>>=0,y>>>=0,($(),de)[g.Tc+16>>>2>>>0]=0,($(),de)[g.Tc+4>>>2>>>0]=f,($(),de)[g.Tc+8>>>2>>>0]=y,Ls(d),rt++,ht=d}var $_=()=>rt;function Tl(d,f,y,g){return i?M(2,1,d,f,y,g):El(d,f,y,g)}function El(d,f,y,g){if(d>>>=0,f>>>=0,y>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return i&&S.length===0?Tl(d,f,y,g):(d={Ld:y,Rc:d,bd:g,rd:S},i?(d.Sc="spawnThread",postMessage(d,S),0):I(d))}function x_(d){throw ht||(ht=d>>>0),ht}var Il=globalThis.TextDecoder&&new TextDecoder,Cl=(d,f,y,g)=>{if(y=f+y,g)return y;for(;d[f]&&!(f>=y);)++f;return f},zl=(d,f=0,y,g)=>{if(16<(y=Cl(d,f>>>=0,y,g))-f&&d.buffer&&Il)return Il.decode(d.buffer instanceof ArrayBuffer?d.subarray(f,y):d.slice(f,y));for(g="";f<y;){var S=d[f++];if(128&S){var C=63&d[f++];if((224&S)==192)g+=String.fromCharCode((31&S)<<6|C);else{var R=63&d[f++];65536>(S=(240&S)==224?(15&S)<<12|C<<6|R:(7&S)<<18|C<<12|R<<6|63&d[f++])?g+=String.fromCharCode(S):(S-=65536,g+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else g+=String.fromCharCode(S)}return g},lt=(d,f,y)=>(d>>>=0)?zl(($(),Y),d,f,y):"";function Al(d,f,y){return i?M(3,1,d,f,y):0}function Ol(d,f){if(i)return M(4,1,d,f)}function Rl(d,f){if(i)return M(5,1,d,f)}function Ml(d,f,y){if(i)return M(6,1,d,f,y)}function Bl(d,f,y){return i?M(7,1,d,f,y):0}function Nl(d,f){if(i)return M(8,1,d,f)}function Dl(d,f,y){if(i)return M(9,1,d,f,y)}function Pl(d,f,y,g){if(i)return M(10,1,d,f,y,g)}function Ul(d,f,y,g){if(i)return M(11,1,d,f,y,g)}function Ll(d,f,y,g){if(i)return M(12,1,d,f,y,g)}function ql(d){if(i)return M(13,1,d)}function Wl(d,f){if(i)return M(14,1,d,f)}function Vl(d,f,y){if(i)return M(15,1,d,f,y)}var S_=()=>V(""),er=d=>{d>>>=0;for(var f="";;){var y=($(),Y)[d++>>>0];if(!y)return f;f+=String.fromCharCode(y)}},ks={},Ts={},pn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function mr(d,f,y={}){return(function(g,S,C={}){var R=S.name;if(!g)throw new pn(`type "${R}" must have a positive integer typeid pointer`);if(Ts.hasOwnProperty(g)){if(C.yd)return;throw new pn(`Cannot register type '${R}' twice`)}Ts[g]=S,ks.hasOwnProperty(g)&&(S=ks[g],delete ks[g],S.forEach(U=>U()))})(d,f,y)}var Hl=(d,f,y)=>{switch(f){case 1:return y?g=>($(),W)[g>>>0]:g=>($(),Y)[g>>>0];case 2:return y?g=>($(),ae)[g>>>1>>>0]:g=>($(),oe)[g>>>1>>>0];case 4:return y?g=>($(),N)[g>>>2>>>0]:g=>($(),de)[g>>>2>>>0];case 8:return y?g=>($(),he)[g>>>3>>>0]:g=>($(),Z)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${d}`)}};function k_(d,f,y,g,S){d>>>=0,y>>>=0,f=er(f>>>0);let C=R=>R;if(g=g===0n){let R=8*y;C=U=>BigInt.asUintN(R,U),S=C(S)}mr(d,{name:f,Oc:C,Vc:(R,U)=>(typeof U=="number"&&(U=BigInt(U)),U),Uc:Hl(f,y,!g),Wc:null})}function T_(d,f,y,g){mr(d>>>=0,{name:f=er(f>>>0),Oc:function(S){return!!S},Vc:function(S,C){return C?y:g},Uc:function(S){return this.Oc(($(),Y)[S>>>0])},Wc:null})}var Fl=[],Lr=[0,1,,1,null,1,!0,1,!1,1];function Es(d){9<(d>>>=0)&&--Lr[d+1]==0&&(Lr[d]=void 0,Fl.push(d))}var Nt=d=>{if(!d)throw new pn(`Cannot use deleted val. handle = ${d}`);return Lr[d]},qt=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Fl.pop()||Lr.length;return Lr[f]=d,Lr[f+1]=1,f}};function Is(d){return this.Oc(($(),de)[d>>>2>>>0])}var E_={name:"emscripten::val",Oc:d=>{var f=Nt(d);return Es(d),f},Vc:(d,f)=>qt(f),Uc:Is,Wc:null};function I_(d){return mr(d>>>0,E_)}var C_=(d,f)=>{switch(f){case 4:return function(y){return this.Oc(($(),ee)[y>>>2>>>0])};case 8:return function(y){return this.Oc(($(),J)[y>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${d}`)}};function z_(d,f,y){y>>>=0,mr(d>>>=0,{name:f=er(f>>>0),Oc:g=>g,Vc:(g,S)=>S,Uc:C_(f,y),Wc:null})}function A_(d,f,y,g,S){d>>>=0,y>>>=0,f=er(f>>>0);let C=U=>U;if(g===0){var R=32-8*y;C=U=>U<<R>>>R,S=C(S)}mr(d,{name:f,Oc:C,Vc:(U,ie)=>ie,Uc:Hl(f,y,g!==0),Wc:null})}function O_(d,f,y){function g(C){var R=($(),de)[C>>>2>>>0];return C=($(),de)[C+4>>>2>>>0],new S(($(),W).buffer,C,R)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];mr(d>>>=0,{name:y=er(y>>>0),Oc:g,Uc:g},{yd:!0})}var Cr=(d,f,y)=>{var g=($(),Y);if(f>>>=0,0<y){var S=f;y=f+y-1;for(var C=0;C<d.length;++C){var R=d.codePointAt(C);if(127>=R){if(f>=y)break;g[f++>>>0]=R}else if(2047>=R){if(f+1>=y)break;g[f++>>>0]=192|R>>6,g[f++>>>0]=128|63&R}else if(65535>=R){if(f+2>=y)break;g[f++>>>0]=224|R>>12,g[f++>>>0]=128|R>>6&63,g[f++>>>0]=128|63&R}else{if(f+3>=y)break;g[f++>>>0]=240|R>>18,g[f++>>>0]=128|R>>12&63,g[f++>>>0]=128|R>>6&63,g[f++>>>0]=128|63&R,C++}}g[f>>>0]=0,d=f-S}else d=0;return d},_i=d=>{for(var f=0,y=0;y<d.length;++y){var g=d.charCodeAt(y);127>=g?f++:2047>=g?f+=2:55296<=g&&57343>=g?(f+=4,++y):f+=3}return f};function R_(d,f){mr(d>>>=0,{name:f=er(f>>>0),Oc(y){var g=($(),de)[y>>>2>>>0];return g=lt(y+4,g,!0),rr(y),g},Vc(y,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var S=typeof g=="string";if(!(S||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new pn("Cannot pass non-string to std::string");var C=S?_i(g):g.length,R=zn(4+C+1),U=R+4;return($(),de)[R>>>2>>>0]=C,S?Cr(g,U,C+1):($(),Y).set(g,U>>>0),y!==null&&y.push(rr,R),R},Uc:Is,Wc(y){rr(y)}})}var Gl=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,M_=(d,f,y)=>{if(d>>>=1,16<(f=Cl(($(),oe),d,f/2,y))-d&&Gl)return Gl.decode(($(),oe).slice(d,f));for(y="";d<f;++d){var g=($(),oe)[d>>>0];y+=String.fromCharCode(g)}return y},B_=(d,f,y)=>{if(y??(y=2147483647),2>y)return 0;var g=f;y=(y-=2)<2*d.length?y/2:d.length;for(var S=0;S<y;++S){var C=d.charCodeAt(S);($(),ae)[f>>>1>>>0]=C,f+=2}return($(),ae)[f>>>1>>>0]=0,f-g},N_=d=>2*d.length,D_=(d,f,y)=>{var g="";d>>>=2;for(var S=0;!(S>=f/4);S++){var C=($(),de)[d+S>>>0];if(!C&&!y)break;g+=String.fromCodePoint(C)}return g},P_=(d,f,y)=>{if(f>>>=0,y??(y=2147483647),4>y)return 0;var g=f;y=g+y-4;for(var S=0;S<d.length;++S){var C=d.codePointAt(S);if(65535<C&&S++,($(),N)[f>>>2>>>0]=C,(f+=4)+4>y)break}return($(),N)[f>>>2>>>0]=0,f-g},U_=d=>{for(var f=0,y=0;y<d.length;++y)65535<d.codePointAt(y)&&y++,f+=4;return f};function L_(d,f,y){if(d>>>=0,f>>>=0,y=er(y>>>=0),f===2)var g=M_,S=B_,C=N_;else g=D_,S=P_,C=U_;mr(d,{name:y,Oc:R=>{var U=($(),de)[R>>>2>>>0];return U=g(R+4,U*f,!0),rr(R),U},Vc:(R,U)=>{if(typeof U!="string")throw new pn(`Cannot pass non-string to C++ string type ${y}`);var ie=C(U),ce=zn(4+ie+f);return($(),de)[ce>>>2>>>0]=ie/f,S(U,ce+4,ie+f),R!==null&&R.push(rr,ce),ce},Uc:Is,Wc(R){rr(R)}})}function q_(d,f){mr(d>>>=0,{zd:!0,name:f=er(f>>>0),Oc:()=>{},Vc:()=>{}})}function W_(d){Ds(d>>>0,!n,1,!r,131072,!1),pe()}var bi=d=>{if(!A)try{if(d(),!(0<z))try{i?Ti()&&Ps(_):F(_)}catch(f){f instanceof Le||f=="unwind"||u(0,f)}}catch(f){f instanceof Le||f=="unwind"||u(0,f)}},V_=!Atomics.waitAsync||((cd=globalThis.navigator)==null?void 0:cd.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Cs(d){d>>>=0,V_||(Atomics.waitAsync(($(),N),d>>>2,d).value.then(vi),d+=128,Atomics.store(($(),N),d>>>2,1))}var vi=()=>bi(()=>{var d=Ti();d&&(Cs(d),bu())});function H_(d,f){(d>>>=0)==f>>>0?setTimeout(vi):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=q[d])&&d.postMessage({Sc:"checkMailbox"})}var zs=[];function F_(d,f,y,g,S){for(f>>>=0,S>>>=0,zs.length=0,y=S>>>3,g=S+g>>>3;y<g;){var C;C=($(),he)[y++>>>0]?($(),he)[y++>>>0]:($(),J)[y++>>>0],zs.push(C)}return(f?Ws[f]:Bb[d])(...zs)}var G_=()=>{z=0};function j_(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):we(q[d])}function K_(d){}var wi=d=>{try{d()}catch(f){V(f)}};function X_(d){var f=(...y)=>{$i.push(d);try{return d(...y)}finally{A||($i.pop(),tr&&zr===1&&$i.length===0&&(zr=0,z+=1,wi(od),typeof Fibers<"u"&&Fibers.Zd()))}};return Xl.set(d,f),f}var zr=0,tr=null,jl=0,$i=[],As=new Map,Kl=new Map,Xl=new Map,Z_=0,Os=null,Y_=[],Zl=d=>(function(f){if(!A){if(zr===0){var y=!1,g=!1;f((S=0)=>{if(!A&&(jl=S,y=!0,g)){zr=2,wi(()=>ld(tr)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var C=(function(){var ie=($(),N)[tr+8>>>2>>>0];return ie=Kl.get(ie),ie=Xl.get(ie),--z,ie()})()}catch(ie){C=ie,S=!0}var R=!1;if(!tr){var U=Os;U&&(Os=null,(S?U.reject:U.resolve)(C),R=!0)}if(S&&!R)throw C}}),g=!0,y||(zr=1,tr=(function(){var S=zn(65548),C=S+12;if(($(),de)[S>>>2>>>0]=C,($(),de)[S+4>>>2>>>0]=C+65536,C=$i[0],!As.has(C)){var R=Z_++;As.set(C,R),Kl.set(R,C)}return C=As.get(C),($(),N)[S+8>>>2>>>0]=C,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),wi(()=>ad(tr)))}else zr===2?(zr=0,wi(ud),rr(tr),tr=null,Y_.forEach(bi)):V(`invalid state: ${zr}`);return jl}})(f=>{d().then(f)});function Q_(d){return d>>>=0,Zl(async()=>{var f=await Nt(d);return qt(f)})}var Rs=[],J_=d=>{var f=Rs.length;return Rs.push(d),f},eb=(d,f)=>{for(var y=Array(d),g=0;g<d;++g){var S=g,C=($(),de)[f+4*g>>>2>>>0],R=Ts[C];if(R===void 0)throw d=`parameter ${g}`,C=fu(C),f=er(C),rr(C),new pn(`${d} has unknown type ${f}`);y[S]=R}return y},tb=(d,f,y)=>{var g=[];return d=d(g,y),g.length&&(($(),de)[f>>>2>>>0]=qt(g)),d},rb={},xi=d=>{var f=rb[d];return f===void 0?er(d):f};function nb(d,f,y){var[g,...S]=eb(d,f>>>0);f=g.Vc.bind(g);var C=S.map(ie=>ie.Uc.bind(ie));d--;var R={toValue:Nt};switch(d=C.map((ie,ce)=>{var Ie=`argFromPtr${ce}`;return R[Ie]=ie,`${Ie}(args${ce?"+"+8*ce:""})`}),y){case 0:var U="toValue(handle)";break;case 2:U="new (toValue(handle))";break;case 3:U="";break;case 1:R.getStringOrSymbol=xi,U="toValue(handle)[getStringOrSymbol(methodName)]"}return U+=`(${d})`,g.zd||(R.toReturnWire=f,R.emval_returnValue=tb,U=`return emval_returnValue(toReturnWire, destructorsRef, ${U})`),U=`return function (handle, methodName, destructorsRef, args) {
  ${U}
  }`,y=new Function(Object.keys(R),U)(...Object.values(R)),U=`methodCaller<(${S.map(ie=>ie.name)}) => ${g.name}>`,J_(Object.defineProperty(y,"name",{value:U}))}function ib(d,f){return f>>>=0,(d=Nt(d>>>0))==Nt(f)}function sb(d){return(d>>>=0)?(d=xi(d),qt(globalThis[d])):qt(globalThis)}function ab(d){return d=xi(d>>>0),qt(t[d])}function ob(d,f){return f>>>=0,d=Nt(d>>>0),f=Nt(f),qt(d[f])}function lb(d){9<(d>>>=0)&&(Lr[d+1]+=1)}function Yl(d,f,y,g,S){return Rs[d>>>0](f>>>0,y>>>0,g>>>0,S>>>0)}function ub(d,f,y,g,S){return Yl(d>>>0,f>>>0,y>>>0,g>>>0,S>>>0)}function db(){return qt([])}function cb(d){d=Nt(d>>>0);for(var f=Array(d.length),y=0;y<d.length;y++)f[y]=d[y];return qt(f)}function pb(d){return qt(xi(d>>>0))}function fb(){return qt({})}function hb(d){for(var f=Nt(d>>>=0);f.length;){var y=f.pop();f.pop()(y)}Es(d)}function mb(d,f,y){f>>>=0,y>>>=0,d=Nt(d>>>0),f=Nt(f),y=Nt(y),d[f]=y}function gb(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),($(),N)[f>>>2>>>0]=d.getUTCSeconds(),($(),N)[f+4>>>2>>>0]=d.getUTCMinutes(),($(),N)[f+8>>>2>>>0]=d.getUTCHours(),($(),N)[f+12>>>2>>>0]=d.getUTCDate(),($(),N)[f+16>>>2>>>0]=d.getUTCMonth(),($(),N)[f+20>>>2>>>0]=d.getUTCFullYear()-1900,($(),N)[f+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),N)[f+28>>>2>>>0]=d}var Ql=d=>d%4==0&&(d%100!=0||d%400==0),Jl=[0,31,60,91,121,152,182,213,244,274,305,335],eu=[0,31,59,90,120,151,181,212,243,273,304,334];function yb(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),($(),N)[f>>>2>>>0]=d.getSeconds(),($(),N)[f+4>>>2>>>0]=d.getMinutes(),($(),N)[f+8>>>2>>>0]=d.getHours(),($(),N)[f+12>>>2>>>0]=d.getDate(),($(),N)[f+16>>>2>>>0]=d.getMonth(),($(),N)[f+20>>>2>>>0]=d.getFullYear()-1900,($(),N)[f+24>>>2>>>0]=d.getDay();var y=(Ql(d.getFullYear())?Jl:eu)[d.getMonth()]+d.getDate()-1|0;($(),N)[f+28>>>2>>>0]=y,($(),N)[f+36>>>2>>>0]=-60*d.getTimezoneOffset(),y=new Date(d.getFullYear(),6,1).getTimezoneOffset();var g=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(y!=g&&d.getTimezoneOffset()==Math.min(g,y)),($(),N)[f+32>>>2>>>0]=d}function _b(d){d>>>=0;var f=new Date(($(),N)[d+20>>>2>>>0]+1900,($(),N)[d+16>>>2>>>0],($(),N)[d+12>>>2>>>0],($(),N)[d+8>>>2>>>0],($(),N)[d+4>>>2>>>0],($(),N)[d>>>2>>>0],0),y=($(),N)[d+32>>>2>>>0],g=f.getTimezoneOffset(),S=new Date(f.getFullYear(),6,1).getTimezoneOffset(),C=new Date(f.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(C,S);return 0>y?($(),N)[d+32>>>2>>>0]=+(S!=C&&R==g):0<y!=(R==g)&&(S=Math.max(C,S),f.setTime(f.getTime()+6e4*((0<y?R:S)-g))),($(),N)[d+24>>>2>>>0]=f.getDay(),y=(Ql(f.getFullYear())?Jl:eu)[f.getMonth()]+f.getDate()-1|0,($(),N)[d+28>>>2>>>0]=y,($(),N)[d>>>2>>>0]=f.getSeconds(),($(),N)[d+4>>>2>>>0]=f.getMinutes(),($(),N)[d+8>>>2>>>0]=f.getHours(),($(),N)[d+12>>>2>>>0]=f.getDate(),($(),N)[d+16>>>2>>>0]=f.getMonth(),($(),N)[d+20>>>2>>>0]=f.getYear(),d=f.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function tu(d,f,y,g,S,C,R){return i?M(16,1,d,f,y,g,S,C,R):-52}function ru(d,f,y,g,S,C){if(i)return M(17,1,d,f,y,g,S,C)}var Cn={},bb=()=>performance.timeOrigin+performance.now();function nu(d,f){if(i)return M(18,1,d,f);if(Cn[d]&&(clearTimeout(Cn[d].id),delete Cn[d]),!f)return 0;var y=setTimeout(()=>{delete Cn[d],bi(()=>_u(d,performance.timeOrigin+performance.now()))},f);return Cn[d]={id:y,Yd:f},0}function vb(d,f,y,g){d>>>=0,f>>>=0,y>>>=0,g>>>=0;var S=new Date().getFullYear(),C=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var R=Math.max(C,S);($(),de)[d>>>2>>>0]=60*R,($(),N)[f>>>2>>>0]=+(C!=S),d=(f=U=>{var ie=Math.abs(U);return`UTC${0<=U?"-":"+"}${String(Math.floor(ie/60)).padStart(2,"0")}${String(ie%60).padStart(2,"0")}`})(C),f=f(S),S<C?(Cr(d,y,17),Cr(f,g,17)):(Cr(d,g,17),Cr(f,y,17))}var wb=()=>Date.now();function $b(d,f,y){return y>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),($(),he)[y>>>3>>>0]=BigInt(d),0):28}var Ms=[],iu=(d,f)=>{Ms.length=0;for(var y;y=($(),Y)[d++>>>0];){var g=y!=105;f+=(g&=y!=112)&&f%8?4:0,Ms.push(y==112?($(),de)[f>>>2>>>0]:y==106?($(),he)[f>>>3>>>0]:y==105?($(),N)[f>>>2>>>0]:($(),J)[f>>>3>>>0]),f+=g?8:4}return Ms};function xb(d,f,y){return d>>>=0,f=iu(f>>>0,y>>>0),Ws[d](...f)}function Sb(d,f,y){return d>>>=0,f=iu(f>>>0,y>>>0),Ws[d](...f)}var kb=()=>{};function Tb(d,f){return E(lt(d>>>0,f>>>0))}var Eb=()=>{throw z+=1,"unwind"};function Ib(){return 4294901760}var Cb=()=>navigator.hardwareConcurrency,qr={},Si=d=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+f[1]:0},su=d=>{for(var f of d)(d=Si(f))&&(qr[d]=f)};function zb(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),su(d),qr.gd=Si(d[3]),qr.Jd=d,qr.gd}function ki(d){if(!(d=qr[d>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(d))d=f[1];else{if(!(f=/^(.+?)@/.exec(d)))return 0;d=f[1]}rr(ki.hd??0),f=_i(d)+1;var y=zn(f);return y&&Cr(d,y,f),ki.hd=y,ki.hd}function Ab(d){d>>>=0;var f=($(),Y).length;if(d<=f||4294901760<d)return!1;for(var y=1;4>=y;y*=2){var g=f*(1+.2/y);g=Math.min(g,d+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(d,g)/65536))-ze.buffer.byteLength+65535)/65536|0;try{ze.grow(g),P();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function Ob(d,f,y){if(d>>>=0,f>>>=0,qr.gd==d)var g=qr.Jd;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),su(g);for(var S=3;g[S]&&Si(g[S])!=d;)++S;for(d=0;d<y&&g[d+S];++d)($(),N)[f+4*d>>>2>>>0]=Si(g[d+S]);return d}var Bs,Ns={},au=()=>{var g;if(!Bs){var d,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((g=globalThis.navigator)==null?void 0:g.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in Ns)Ns[d]===void 0?delete f[d]:f[d]=Ns[d];var y=[];for(d in f)y.push(`${d}=${f[d]}`);Bs=y}return Bs};function ou(d,f){if(i)return M(19,1,d,f);d>>>=0,f>>>=0;var y,g=0,S=0;for(y of au()){var C=f+g;($(),de)[d+S>>>2>>>0]=C,g+=Cr(y,C,1/0)+1,S+=4}return 0}function lu(d,f){if(i)return M(20,1,d,f);d>>>=0,f>>>=0;var y=au();for(var g of(($(),de)[d>>>2>>>0]=y.length,d=0,y))d+=_i(g)+1;return($(),de)[f>>>2>>>0]=d,0}function uu(d){return i?M(21,1,d):52}function du(d,f,y,g){return i?M(22,1,d,f,y,g):52}function cu(d,f,y,g){return i?M(23,1,d,f,y,g):70}var Rb=[null,[],[]];function pu(d,f,y,g){if(i)return M(24,1,d,f,y,g);f>>>=0,y>>>=0,g>>>=0;for(var S=0,C=0;C<y;C++){var R=($(),de)[f>>>2>>>0],U=($(),de)[f+4>>>2>>>0];f+=8;for(var ie=0;ie<U;ie++){var ce=d,Ie=($(),Y)[R+ie>>>0],Pe=Rb[ce];Ie===0||Ie===10?((ce===1?x:E)(zl(Pe)),Pe.length=0):Pe.push(Ie)}S+=U}return($(),de)[g>>>2>>>0]=S,0}function Mb(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)xe();le.push(async()=>{var f=(async function(){if(!i)return Promise.all(se.map(be))})();ue++,await f,--ue==0&&Ee&&(f=Ee,Ee=null,f())})})(),i||(ze=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),P()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>Re(),t.stackRestore=d=>Ae(d),t.stackAlloc=d=>Us(d),t.setValue=function(d,f,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":case"i8":($(),W)[d>>>0]=f;break;case"i16":($(),ae)[d>>>1>>>0]=f;break;case"i32":($(),N)[d>>>2>>>0]=f;break;case"i64":($(),he)[d>>>3>>>0]=BigInt(f);break;case"float":($(),ee)[d>>>2>>>0]=f;break;case"double":($(),J)[d>>>3>>>0]=f;break;case"*":($(),de)[d>>>2>>>0]=f;break;default:V(`invalid type for setValue: ${y}`)}},t.getValue=function(d,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return($(),W)[d>>>0];case"i16":return($(),ae)[d>>>1>>>0];case"i32":return($(),N)[d>>>2>>>0];case"i64":return($(),he)[d>>>3>>>0];case"float":return($(),ee)[d>>>2>>>0];case"double":return($(),J)[d>>>3>>>0];case"*":return($(),de)[d>>>2>>>0];default:V(`invalid type for getValue: ${f}`)}},t.UTF8ToString=lt,t.stringToUTF8=Cr,t.lengthBytesUTF8=_i;var fu,hu,Ti,rr,zn,Ds,mu,gu,yu,Ps,_u,bu,Me,An,vu,Ae,Us,Re,wu,Ls,$u,xu,Su,qs,ku,Tu,Eu,Iu,Cu,zu,Au,Ou,Ru,Mu,Bu,Nu,Du,Pu,Uu,Lu,qu,Wu,Vu,Hu,Fu,Gu,ju,Ku,Xu,Zu,Yu,Qu,Ju,ed,td,rd,nd,id,sd,ad,od,ld,ud,gr,Bb=[H,G,Tl,Al,Ol,Rl,Ml,Bl,Nl,Dl,Pl,Ul,Ll,ql,Wl,Vl,tu,ru,nu,ou,lu,uu,du,cu,pu],Ws={973212:(d,f,y,g,S)=>{if(t===void 0||!t.Xc)return 1;if((d=lt(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(f=Number(f>>>0),y=Number(y>>>0),g=Number(g>>>0),f+y>d.byteLength)return 3;try{let C=d.subarray(f,f+y);switch(S){case 0:($(),Y).set(C,g>>>0);break;case 1:t.Qd?t.Qd(g,C):t.Id(g,C);break;default:return 4}return 0}catch{return 4}},974036:(d,f,y)=>{t.td(d,($(),Y).subarray(f>>>0,f+y>>>0))},974100:()=>t.Wd(),974142:d=>{t.sd(d)},974179:()=>{t.Bd()},974210:()=>{t.Cd()},974239:()=>{t.Gd()},974264:d=>t.Ad(d),974297:d=>t.Ed(d),974329:(d,f,y)=>{t.ed(Number(d),Number(f),Number(y),!0)},974392:(d,f,y)=>{t.ed(Number(d),Number(f),Number(y))},974449:()=>typeof wasmOffsetConverter<"u",974506:d=>{t.$b("Abs",d,void 0)},974557:d=>{t.$b("Neg",d,void 0)},974608:d=>{t.$b("Floor",d,void 0)},974661:d=>{t.$b("Ceil",d,void 0)},974713:d=>{t.$b("Reciprocal",d,void 0)},974771:d=>{t.$b("Sqrt",d,void 0)},974823:d=>{t.$b("Exp",d,void 0)},974874:d=>{t.$b("Erf",d,void 0)},974925:d=>{t.$b("Sigmoid",d,void 0)},974980:(d,f,y)=>{t.$b("HardSigmoid",d,{alpha:f,beta:y})},975059:d=>{t.$b("Log",d,void 0)},975110:d=>{t.$b("Sin",d,void 0)},975161:d=>{t.$b("Cos",d,void 0)},975212:d=>{t.$b("Tan",d,void 0)},975263:d=>{t.$b("Asin",d,void 0)},975315:d=>{t.$b("Acos",d,void 0)},975367:d=>{t.$b("Atan",d,void 0)},975419:d=>{t.$b("Sinh",d,void 0)},975471:d=>{t.$b("Cosh",d,void 0)},975523:d=>{t.$b("Asinh",d,void 0)},975576:d=>{t.$b("Acosh",d,void 0)},975629:d=>{t.$b("Atanh",d,void 0)},975682:d=>{t.$b("Tanh",d,void 0)},975734:d=>{t.$b("Not",d,void 0)},975785:(d,f,y)=>{t.$b("Clip",d,{min:f,max:y})},975854:d=>{t.$b("Clip",d,void 0)},975906:(d,f)=>{t.$b("Elu",d,{alpha:f})},975964:d=>{t.$b("Gelu",d,void 0)},976016:d=>{t.$b("Relu",d,void 0)},976068:(d,f)=>{t.$b("LeakyRelu",d,{alpha:f})},976132:(d,f)=>{t.$b("ThresholdedRelu",d,{alpha:f})},976202:(d,f)=>{t.$b("Cast",d,{to:f})},976260:d=>{t.$b("Add",d,void 0)},976311:d=>{t.$b("Sub",d,void 0)},976362:d=>{t.$b("Mul",d,void 0)},976413:d=>{t.$b("Div",d,void 0)},976464:d=>{t.$b("Pow",d,void 0)},976515:d=>{t.$b("Equal",d,void 0)},976568:d=>{t.$b("Greater",d,void 0)},976623:d=>{t.$b("GreaterOrEqual",d,void 0)},976685:d=>{t.$b("Less",d,void 0)},976737:d=>{t.$b("LessOrEqual",d,void 0)},976796:(d,f,y,g,S)=>{t.$b("ReduceMean",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},976971:(d,f,y,g,S)=>{t.$b("ReduceMax",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},977145:(d,f,y,g,S)=>{t.$b("ReduceMin",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},977319:(d,f,y,g,S)=>{t.$b("ReduceProd",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},977494:(d,f,y,g,S)=>{t.$b("ReduceSum",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},977668:(d,f,y,g,S)=>{t.$b("ReduceL1",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},977841:(d,f,y,g,S)=>{t.$b("ReduceL2",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},978014:(d,f,y,g,S)=>{t.$b("ReduceLogSum",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},978191:(d,f,y,g,S)=>{t.$b("ReduceSumSquare",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},978371:(d,f,y,g,S)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},978551:d=>{t.$b("Where",d,void 0)},978604:(d,f,y)=>{t.$b("Transpose",d,{perm:f?Array.from(($(),N).subarray(Number(f)>>>0,Number(y)>>>0)):[]})},978728:(d,f,y,g)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:lt(y),format:g?"NHWC":"NCHW"})},978861:(d,f,y,g)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:lt(y),format:g?"NHWC":"NCHW"})},978994:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe,Ar)=>{t.$b("ConvTranspose",d,{format:ie?"NHWC":"NCHW",autoPad:f,dilations:[y],group:g,kernelShape:[S],pads:[C,R],strides:[U],wIsConst:()=>!!($(),W)[ce>>>0],outputPadding:Ie?Array.from(($(),N).subarray(Number(Ie)>>>0,Number(Pe)>>>0)):[],outputShape:Ke?Array.from(($(),N).subarray(Number(Ke)>>>0,Number(Qe)>>>0)):[],activation:lt(Ar)})},979427:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe)=>{t.$b("ConvTranspose",d,{format:U?"NHWC":"NCHW",autoPad:f,dilations:Array.from(($(),N).subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),group:g,kernelShape:Array.from(($(),N).subarray(Number(S)>>>0,2+(Number(S)>>>0)>>>0)),pads:Array.from(($(),N).subarray(Number(C)>>>0,4+(Number(C)>>>0)>>>0)),strides:Array.from(($(),N).subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!($(),W)[ie>>>0],outputPadding:ce?Array.from(($(),N).subarray(Number(ce)>>>0,Number(Ie)>>>0)):[],outputShape:Pe?Array.from(($(),N).subarray(Number(Pe)>>>0,Number(Ke)>>>0)):[],activation:lt(Qe)})},980088:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe,Ar)=>{t.$b("ConvTranspose",d,{format:ie?"NHWC":"NCHW",autoPad:f,dilations:[y],group:g,kernelShape:[S],pads:[C,R],strides:[U],wIsConst:()=>!!($(),W)[ce>>>0],outputPadding:Ie?Array.from(($(),N).subarray(Number(Ie)>>>0,Number(Pe)>>>0)):[],outputShape:Ke?Array.from(($(),N).subarray(Number(Ke)>>>0,Number(Qe)>>>0)):[],activation:lt(Ar)})},980521:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe)=>{t.$b("ConvTranspose",d,{format:U?"NHWC":"NCHW",autoPad:f,dilations:Array.from(($(),N).subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),group:g,kernelShape:Array.from(($(),N).subarray(Number(S)>>>0,2+(Number(S)>>>0)>>>0)),pads:Array.from(($(),N).subarray(Number(C)>>>0,4+(Number(C)>>>0)>>>0)),strides:Array.from(($(),N).subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!($(),W)[ie>>>0],outputPadding:ce?Array.from(($(),N).subarray(Number(ce)>>>0,Number(Ie)>>>0)):[],outputShape:Pe?Array.from(($(),N).subarray(Number(Pe)>>>0,Number(Ke)>>>0)):[],activation:lt(Qe)})},981182:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},981273:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe)=>{t.$b("AveragePool",d,{format:Qe?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:C?Array.from(($(),N).subarray(Number(C)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(($(),N).subarray(Number(U)>>>0,Number(ie)>>>0)):[],pads:ce?Array.from(($(),N).subarray(Number(ce)>>>0,Number(Ie)>>>0)):[],strides:Pe?Array.from(($(),N).subarray(Number(Pe)>>>0,Number(Ke)>>>0)):[]})},981752:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},981843:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe)=>{t.$b("AveragePool",d,{format:Qe?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:C?Array.from(($(),N).subarray(Number(C)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(($(),N).subarray(Number(U)>>>0,Number(ie)>>>0)):[],pads:ce?Array.from(($(),N).subarray(Number(ce)>>>0,Number(Ie)>>>0)):[],strides:Pe?Array.from(($(),N).subarray(Number(Pe)>>>0,Number(Ke)>>>0)):[]})},982322:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},982409:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe)=>{t.$b("MaxPool",d,{format:Qe?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:C?Array.from(($(),N).subarray(Number(C)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(($(),N).subarray(Number(U)>>>0,Number(ie)>>>0)):[],pads:ce?Array.from(($(),N).subarray(Number(ce)>>>0,Number(Ie)>>>0)):[],strides:Pe?Array.from(($(),N).subarray(Number(Pe)>>>0,Number(Ke)>>>0)):[]})},982884:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},982971:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe)=>{t.$b("MaxPool",d,{format:Qe?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:C?Array.from(($(),N).subarray(Number(C)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(($(),N).subarray(Number(U)>>>0,Number(ie)>>>0)):[],pads:ce?Array.from(($(),N).subarray(Number(ce)>>>0,Number(Ie)>>>0)):[],strides:Pe?Array.from(($(),N).subarray(Number(Pe)>>>0,Number(Ke)>>>0)):[]})},983446:(d,f,y,g,S)=>{t.$b("Gemm",d,{alpha:f,beta:y,transA:g,transB:S})},983550:d=>{t.$b("MatMul",d,void 0)},983604:(d,f,y,g)=>{t.$b("ArgMax",d,{keepDims:!!f,selectLastIndex:!!y,axis:g})},983712:(d,f,y,g)=>{t.$b("ArgMin",d,{keepDims:!!f,selectLastIndex:!!y,axis:g})},983820:(d,f)=>{t.$b("Softmax",d,{axis:f})},983883:(d,f)=>{t.$b("Concat",d,{axis:f})},983943:(d,f,y,g,S)=>{t.$b("Split",d,{axis:f,numOutputs:y,splitSizes:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},984099:d=>{t.$b("Expand",d,void 0)},984153:(d,f)=>{t.$b("Gather",d,{axis:Number(f)})},984224:(d,f)=>{t.$b("GatherElements",d,{axis:Number(f)})},984303:(d,f)=>{t.$b("GatherND",d,{batch_dims:Number(f)})},984382:(d,f,y,g,S,C,R,U,ie,ce,Ie)=>{t.$b("Resize",d,{antialias:f,axes:y?Array.from(($(),N).subarray(Number(y)>>>0,Number(g)>>>0)):[],coordinateTransformMode:lt(S),cubicCoeffA:C,excludeOutside:R,extrapolationValue:U,keepAspectRatioPolicy:lt(ie),mode:lt(ce),nearestMode:lt(Ie)})},984744:(d,f,y,g,S,C,R)=>{t.$b("Slice",d,{starts:f?Array.from(($(),N).subarray(Number(f)>>>0,Number(y)>>>0)):[],ends:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[],axes:C?Array.from(($(),N).subarray(Number(C)>>>0,Number(R)>>>0)):[]})},985008:d=>{t.$b("Tile",d,void 0)},985060:(d,f,y)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:y?"NHWC":"NCHW"})},985174:(d,f,y)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:y?"NHWC":"NCHW"})},985288:d=>{t.$b("Range",d,void 0)},985341:(d,f)=>{t.$b("Einsum",d,{equation:lt(f)})},985422:(d,f,y,g,S)=>{t.$b("Pad",d,{mode:f,value:y,pads:g?Array.from(($(),N).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},985565:(d,f,y,g,S,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:y,spatial:!!S,trainingMode:!!g,format:C?"NHWC":"NCHW"})},985734:(d,f,y,g,S,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:y,spatial:!!S,trainingMode:!!g,format:C?"NHWC":"NCHW"})},985903:(d,f,y)=>{t.$b("CumSum",d,{exclusive:Number(f),reverse:Number(y)})},986e3:(d,f,y)=>{t.$b("DequantizeLinear",d,{axis:f,blockSize:y})},986090:(d,f,y,g,S)=>{t.$b("GridSample",d,{align_corners:f,mode:lt(y),padding_mode:lt(g),format:S?"NHWC":"NCHW"})},986260:(d,f,y,g,S)=>{t.$b("GridSample",d,{align_corners:f,mode:lt(y),padding_mode:lt(g),format:S?"NHWC":"NCHW"})},986430:(d,f)=>{t.$b("ScatterND",d,{reduction:lt(f)})},986515:(d,f,y,g,S,C,R,U,ie)=>{t.$b("Attention",d,{numHeads:f,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:C,qkvHiddenSizes:R?Array.from(($(),N).subarray(Number(U)>>>0,Number(U)+R>>>0)):[],pastPresentShareBuffer:!!ie})},986787:d=>{t.$b("BiasAdd",d,void 0)},986842:d=>{t.$b("BiasSplitGelu",d,void 0)},986903:d=>{t.$b("FastGelu",d,void 0)},986959:(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe,Ar,Vs)=>{t.$b("Conv",d,{format:Pe?"NHWC":"NCHW",auto_pad:f,dilations:y?Array.from(($(),N).subarray(Number(y)>>>0,Number(g)>>>0)):[],group:S,kernel_shape:C?Array.from(($(),N).subarray(Number(C)>>>0,Number(R)>>>0)):[],pads:U?Array.from(($(),N).subarray(Number(U)>>>0,Number(ie)>>>0)):[],strides:ce?Array.from(($(),N).subarray(Number(ce)>>>0,Number(Ie)>>>0)):[],w_is_const:()=>!!($(),W)[Number(Ke)>>>0],activation:lt(Qe),activation_params:Ar?Array.from(($(),ee).subarray(Number(Ar)>>>0,Number(Vs)>>>0)):[]})},987543:d=>{t.$b("Gelu",d,void 0)},987595:(d,f,y,g,S,C,R,U,ie)=>{t.$b("GroupQueryAttention",d,{numHeads:f,kvNumHeads:y,scale:g,softcap:S,doRotary:C,rotaryInterleaved:R,smoothSoftmax:U,localWindowSize:ie})},987812:(d,f,y,g)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:y,simplified:!!g})},987923:(d,f,y,g)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:y,simplified:!!g})},988034:(d,f,y,g,S,C)=>{t.$b("MatMulNBits",d,{k:f,n:y,accuracyLevel:g,bits:S,blockSize:C})},988161:(d,f,y,g,S,C)=>{t.$b("MultiHeadAttention",d,{numHeads:f,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:C})},988320:(d,f)=>{t.$b("QuickGelu",d,{alpha:f})},988384:(d,f,y,g,S)=>{t.$b("RotaryEmbedding",d,{interleaved:!!f,numHeads:y,rotaryEmbeddingDim:g,scale:S})},988523:(d,f,y)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!y})},988625:(d,f,y)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!y})},988727:(d,f,y,g)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:f,quantizeAxis:y,blockSize:g})},988848:d=>{t.Fd(d)},988882:(d,f)=>t.Hd(Number(d),Number(f),t.Yc.Kd,t.Yc.errors)};function Nb(d,f,y){return Zl(async()=>{await t.Dd(Number(d),Number(f),Number(y))})}function Db(){return typeof wasmOffsetConverter<"u"}function Pb(d,f,y,g){var S=Re();try{return Ou(d,f,y,g)}catch(C){if(Ae(S),C!==C+0)throw C;Me(1,0)}}function Ub(d,f,y){var g=Re();try{return Iu(d,f,y)}catch(S){if(Ae(g),S!==S+0)throw S;Me(1,0)}}function Lb(d){var f=Re();try{ku(d)}catch(y){if(Ae(f),y!==y+0)throw y;Me(1,0)}}function qb(d,f){var y=Re();try{return qs(d,f)}catch(g){if(Ae(y),g!==g+0)throw g;Me(1,0)}}function Wb(d,f,y){var g=Re();try{Su(d,f,y)}catch(S){if(Ae(g),S!==S+0)throw S;Me(1,0)}}function Vb(d,f){var y=Re();try{Ru(d,f)}catch(g){if(Ae(y),g!==g+0)throw g;Me(1,0)}}function Hb(d,f,y,g,S,C,R){var U=Re();try{return zu(d,f,y,g,S,C,R)}catch(ie){if(Ae(U),ie!==ie+0)throw ie;Me(1,0)}}function Fb(d,f,y,g,S,C){var R=Re();try{Tu(d,f,y,g,S,C)}catch(U){if(Ae(R),U!==U+0)throw U;Me(1,0)}}function Gb(d,f,y,g){var S=Re();try{Au(d,f,y,g)}catch(C){if(Ae(S),C!==C+0)throw C;Me(1,0)}}function jb(d,f,y,g,S){var C=Re();try{Eu(d,f,y,g,S)}catch(R){if(Ae(C),R!==R+0)throw R;Me(1,0)}}function Kb(d,f,y,g,S,C,R){var U=Re();try{Bu(d,f,y,g,S,C,R)}catch(ie){if(Ae(U),ie!==ie+0)throw ie;Me(1,0)}}function Xb(d,f,y,g,S,C,R){var U=Re();try{Nu(d,f,y,g,S,C,R)}catch(ie){if(Ae(U),ie!==ie+0)throw ie;Me(1,0)}}function Zb(d,f,y,g,S,C,R,U){var ie=Re();try{Lu(d,f,y,g,S,C,R,U)}catch(ce){if(Ae(ie),ce!==ce+0)throw ce;Me(1,0)}}function Yb(d,f,y,g,S){var C=Re();try{return Mu(d,f,y,g,S)}catch(R){if(Ae(C),R!==R+0)throw R;Me(1,0)}}function Qb(d,f,y){var g=Re();try{return qu(d,f,y)}catch(S){if(Ae(g),S!==S+0)throw S;Me(1,0)}}function Jb(d,f,y,g,S,C,R,U){var ie=Re();try{Wu(d,f,y,g,S,C,R,U)}catch(ce){if(Ae(ie),ce!==ce+0)throw ce;Me(1,0)}}function ev(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe){var Ke=Re();try{Du(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe)}catch(Qe){if(Ae(Ke),Qe!==Qe+0)throw Qe;Me(1,0)}}function tv(d,f,y,g,S,C){var R=Re();try{return Pu(d,f,y,g,S,C)}catch(U){if(Ae(R),U!==U+0)throw U;Me(1,0)}}function rv(d,f,y){var g=Re();try{return Vu(d,f,y)}catch(S){if(Ae(g),S!==S+0)throw S;return Me(1,0),0n}}function nv(d,f,y,g,S,C,R,U,ie){var ce=Re();try{Cu(d,f,y,g,S,C,R,U,ie)}catch(Ie){if(Ae(ce),Ie!==Ie+0)throw Ie;Me(1,0)}}function iv(d){var f=Re();try{return Hu(d)}catch(y){if(Ae(f),y!==y+0)throw y;Me(1,0)}}function sv(d,f){var y=Re();try{return sd(d,f)}catch(g){if(Ae(y),g!==g+0)throw g;return Me(1,0),0n}}function av(d){var f=Re();try{return Fu(d)}catch(y){if(Ae(f),y!==y+0)throw y;return Me(1,0),0n}}function ov(d,f,y,g){var S=Re();try{return Yu(d,f,y,g)}catch(C){if(Ae(S),C!==C+0)throw C;Me(1,0)}}function lv(d,f,y,g,S){var C=Re();try{return Qu(d,f,y,g,S)}catch(R){if(Ae(C),R!==R+0)throw R;Me(1,0)}}function uv(d,f,y,g,S,C){var R=Re();try{return Ju(d,f,y,g,S,C)}catch(U){if(Ae(R),U!==U+0)throw U;Me(1,0)}}function dv(d,f,y,g,S,C){var R=Re();try{return ed(d,f,y,g,S,C)}catch(U){if(Ae(R),U!==U+0)throw U;Me(1,0)}}function cv(d,f,y,g,S,C,R,U){var ie=Re();try{return Uu(d,f,y,g,S,C,R,U)}catch(ce){if(Ae(ie),ce!==ce+0)throw ce;Me(1,0)}}function pv(d,f,y,g,S){var C=Re();try{return td(d,f,y,g,S)}catch(R){if(Ae(C),R!==R+0)throw R;return Me(1,0),0n}}function fv(d,f,y,g){var S=Re();try{return rd(d,f,y,g)}catch(C){if(Ae(S),C!==C+0)throw C;Me(1,0)}}function hv(d,f,y,g){var S=Re();try{return nd(d,f,y,g)}catch(C){if(Ae(S),C!==C+0)throw C;Me(1,0)}}function mv(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe){var Ke=Re();try{return id(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe)}catch(Qe){if(Ae(Ke),Qe!==Qe+0)throw Qe;Me(1,0)}}function gv(d,f,y,g,S,C,R,U,ie,ce,Ie){var Pe=Re();try{Xu(d,f,y,g,S,C,R,U,ie,ce,Ie)}catch(Ke){if(Ae(Pe),Ke!==Ke+0)throw Ke;Me(1,0)}}function yv(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe,Ar,Vs){var wv=Re();try{Zu(d,f,y,g,S,C,R,U,ie,ce,Ie,Pe,Ke,Qe,Ar,Vs)}catch(Hs){if(Ae(wv),Hs!==Hs+0)throw Hs;Me(1,0)}}function _v(d,f,y){var g=Re();try{return Gu(d,f,y)}catch(S){if(Ae(g),S!==S+0)throw S;Me(1,0)}}function bv(d,f,y){var g=Re();try{return ju(d,f,y)}catch(S){if(Ae(g),S!==S+0)throw S;Me(1,0)}}function vv(d,f,y,g){var S=Re();try{Ku(d,f,y,g)}catch(C){if(Ae(S),C!==C+0)throw C;Me(1,0)}}function Ei(){if(0<ue)Ee=Ei;else if(i)b==null||b(t),K();else{for(var d=le;0<d.length;)d.shift()(t);0<ue?Ee=Ei:(t.calledRun=!0,A||(K(),b==null||b(t)))}}return i||(gr=await Ne(),Ei()),t.PTR_SIZE=4,j?t:new Promise((d,f)=>{b=d,k=f})}var rg,jd,Rx=X(()=>{var e,t;rg=Gd,jd=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),jd&&Gd()}),ca,mo,Kd,zt,ng,Mi,Xd,Zd,pa,Yd,fa,ig,ha,sg,tl=X(()=>{el(),ca=typeof location>"u"?void 0:location.origin,mo=import.meta.url>"file:"&&import.meta.url<"file;",Kd=()=>{{if(mo){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ca).href}return import.meta.url}},zt=Kd(),ng=()=>{if(zt&&!zt.startsWith("blob:"))return zt.substring(0,zt.lastIndexOf("/")+1)},Mi=(e,t)=>{try{let r=t??zt;return(r?new URL(e,r):new URL(e)).origin===ca}catch{return!1}},Xd=(e,t)=>{let r=t??zt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Zd=(e,t)=>`${t??"./"}${e}`,pa=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Yd=async e=>(await import(e)).default,fa=(Ox(),di(Jm)).default,ig=async()=>{if(!zt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Mi(zt))return[void 0,fa()];let e=await pa(zt);return[e,fa(e)]},ha=(Rx(),di(tg)).default,sg=async(e,t,r,n)=>{let i=ha&&!(e||t);if(i)if(zt)i=Mi(zt)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,ha];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??Xd(s,t),o=r&&a&&!Mi(a,t),l=o?await pa(a):a??Zd(s,t);return[o?l:void 0,await Yd(l)]}}}),ma,Bi,Bn,ga,Qd,Jd,ec,rl,Xe,dn=X(()=>{tl(),Bi=!1,Bn=!1,ga=!1,Qd=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Jd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ec=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},rl=async e=>{if(Bi)return Promise.resolve();if(Bn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ga)throw new Error("previous call to 'initializeWebAssembly()' failed.");Bn=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ec())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Jd())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Qd();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,o=(a==null?void 0:a.href)??a,l=i==null?void 0:i.wasm,u=(l==null?void 0:l.href)??l,c=e.wasmBinary,[p,h]=await sg(o,s,r>1,!!c||!!u),m=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{m=!0,b()},t)})),_.push(new Promise((b,k)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=w=>w;else if(u||s)v.locateFile=w=>u??s+w;else if(o&&o.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,o).href;else if(p){let w=ng();w&&(v.locateFile=T=>w+T)}h(v).then(w=>{Bn=!1,Bi=!0,ma=w,b(),p&&URL.revokeObjectURL(p)},w=>{Bn=!1,ga=!0,k(w)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Xe=()=>{if(Bi&&ma)return ma;throw new Error("WebAssembly is not initialized yet.")}}),Kt,ss,Ve,nl=X(()=>{dn(),Kt=(e,t)=>{let r=Xe(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},ss=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")ss(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Ve=e=>{let t=Xe(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),ag,Mx=X(()=>{dn(),nl(),ag=e=>{let t=Xe(),r=0,n=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Kt(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&Ve("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ss(e.extra,"",new WeakSet,(a,o)=>{let l=Kt(a,n),u=Kt(o,n);t._OrtAddRunConfigEntry(r,l,u)!==0&&Ve(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),tc,rc,nc,Hr,ic,og,Bx=X(()=>{dn(),nl(),tc=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},rc=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},nc=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Hr=(e,t,r,n)=>{let i=Kt(t,n),s=Kt(r,n);Xe()._OrtAddSessionConfigEntry(e,i,s)!==0&&Ve(`Can't set a session config entry: ${t} - ${r}.`)},ic=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Hr(e,"session.disable_quant_qdq","1",r),Hr(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&Hr(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Hr(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Kt(s,r),l=a.length,u=0,c=0;if(l>0){u=Xe()._malloc(l*Xe().PTR_SIZE),r.push(u),c=Xe()._malloc(l*Xe().PTR_SIZE),r.push(c);for(let p=0;p<l;p++)Xe().setValue(u+p*Xe().PTR_SIZE,a[p][0],"*"),Xe().setValue(c+p*Xe().PTR_SIZE,a[p][1],"*")}await Xe()._OrtAppendExecutionProvider(e,o,u,c,l)!==0&&Ve(`Can't append execution provider: ${s}.`)}},og=async e=>{let t=Xe(),r=0,n=[],i=e||{};nc(i);try{let s=tc(i.graphOptimizationLevel??"all"),a=rc(i.executionMode??"sequential"),o=typeof i.logId=="string"?Kt(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let u=i.logVerbosityLevel??0;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log verbosity level is not valid: ${u}`);let c=typeof i.optimizedModelFilePath=="string"?Kt(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,u,c),r===0&&Ve("Can't create session options."),i.executionProviders&&await ic(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Hr(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[p,h]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let m=Kt(p,n);t._OrtAddFreeDimensionOverride(r,m,h)!==0&&Ve(`Can't set a free dimension override: ${p} - ${h}.`)}return i.extra!==void 0&&ss(i.extra,"",new WeakSet,(p,h)=>{Hr(r,p,h,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ve("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),Qr,$r,Jr,Ss,as,il,sl,go,ve=X(()=>{Qr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},$r=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Jr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},Ss=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},as=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},il=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",sl=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",go=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),al,lg=X(()=>{el(),al=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let u=l.byteLength;new Uint8Array(s,a,u).set(l),a+=u}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),sc,ac,oc,lc,ol,uc,Be,Er=X(()=>{ve(),sc=["V","I","W","E","F"],ac=(e,t)=>{console.log(`[${sc[e]},${new Date().toISOString()}]${t}`)},ol=(e,t)=>{oc=e,lc=t},uc=(e,t)=>{let r=as(e),n=as(oc);r>=n&&ac(r,typeof t=="function"?t():t)},Be=(...e)=>{lc&&uc(...e)}}),dc,kn,D,os,ug,dg,cg,ke=X(()=>{dc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},kn=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=dc.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],u=i-o<0?1:t[i-o];if(l!==u&&l>1&&u>1)return;let c=Math.max(l,u);if(l&&u)a[s-o]=Math.max(l,u);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},D=class Zi{static size(t){return Zi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Zi.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Zi.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},os=class jn{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)jn.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return jn.computeShapeHelper(t,r,l,n,i,s,a,o),l}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return jn.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l){if(t)for(let u=0;u<r.length-2;u++)n.push(1);else for(let u=0;u<r.length-2;u++)n.push(jn.adjustPadAndReturnShape(r[u+2],i[u],s[u],a[u],o,u,u+r.length-2,l))}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l){let u=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-u)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[a],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-u)/r+1)}},ug=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!kn.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},dg=-34028234663852886e22,cg=34028234663852886e22}),ll,pg=X(()=>{ve(),ll=(e,t)=>new(Ss(t))(e)}),ya,yo,_a,cc,ba,pc,va,wa,$a,fc,fg,Nx=X(()=>{ve(),Er(),ya=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),yo=(e,t)=>{if(t==="int32")return e;let r=ya.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(Ss(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},_a=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},cc=1,ba=()=>cc++,pc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),va=(e,t)=>{let r=ya.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},wa=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return va(this.dataType,this.tensorShape)}destroy(){Be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=_a(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},$a=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=pc.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);Be("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==va(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=yo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?_a(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},fc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ba();return this.tensorTrackersById.set(e,new $a(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){Be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=ba(),a=new wa({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new $a(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[u,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){Be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let p=this.freeTensors.splice(u,1)[0];return p.sessionId=e,p}Be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new wa({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},fg=(...e)=>new fc(...e)}),Nn,hc,hg,Dx=X(()=>{ve(),dn(),pg(),Nx(),Er(),Nn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),hc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},hg=class{constructor(e){this.tensorManager=fg(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ol(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Be("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>hc(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=Nn.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){Be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Nn.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Xe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return ll(r,t)}}registerMLTensor(e,t,r,n){let i=Nn.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return Be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,n,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=s.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=l.slice(t,t+r).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(u);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(u):new Uint16Array(u);break;case"int32":c=new Int32Array(u);break;case"uint32":c=new Uint32Array(u);break;case"int64":if(a){let p=yo(new Uint8Array(u),"int64");c=new Int32Array(p.buffer),i.dataType="int32"}else c=new BigInt64Array(u);break;case"uint64":c=new BigUint64Array(u);break;case"int8":c=new Int8Array(u);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=Nn.get(Qr(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!(i!=null&&i.input.dataTypes.includes(n)):!!(i!=null&&i.output.dataTypes.includes(n))}flush(){}}}),ul=X(()=>{}),xa,Ni,Di,mc,gc,Sa,_o,yc,mg,Px=X(()=>{Er(),ul(),xa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ni=[],Di=e=>Math.ceil(Number(e)/16)*16,mc=e=>{for(let t=0;t<Ni.length;t++){let r=Ni[t];if(e<=r)return r}return Math.ceil(e/16)*16},gc=1,Sa=()=>gc++,_o=async(e,t,r,n)=>{let i=Di(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},yc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of xa)Ni.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=Di(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,n,i)),o.unmap();let u=this.backend.device.createCommandEncoder();u.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([u.finish()]),o.destroy(),Be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Di(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return Be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Sa();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),Be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=mc(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:Sa(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await _o(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=xa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},mg=(...e)=>new yc(...e)}),_c,We,at=X(()=>{_c=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},We=e=>new _c(e)}),Tn,Pi,ct,bt,ge,it,bo,yn,Pr,me,Dn,L,fe,gg,dl,bc,yg,Te=X(()=>{ve(),ke(),Tn=64,Pi=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ct=(e,t=1)=>{let r=Pi(e,t);return typeof r=="string"?r:r[0]},bt=(e,t=1)=>{let r=Pi(e,t);return typeof r=="string"?r:r[1]},ge=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:D.computeStrides(r)})}),t},it=e=>e%4===0?4:e%2===0?2:1,bo=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,yn=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Pr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,me=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Dn=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,u=Pi(t,i),c=typeof u=="string"?u:u[1],p=typeof u=="string"?u:u[0],h={indices:l,value:c,storage:p,tensor:t},m=j=>typeof j=="string"?j:`${j}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",k=`${b}${e}_shape`,v=`${b}${e}_strides`,w="";for(let j=0;j<a-1;j++)w+=`
    let dim${j} = current / ${me(v,j,a)};
    let rest${j} = current % ${me(v,j,a)};
    indices[${j}] = dim${j};
    current = rest${j};
    `;w+=`indices[${a-1}] = current;`;let T=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,x=j=>(_.offsetToIndices=!0,a<2?j:`o2i_${e}(${j})`),E=[];if(a>=2)for(let j=a-1;j>=0;j--)E.push(`${me(v,j,a)} * (indices[${j}])`);let A=a<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,O=j=>(_.indicesToOffset=!0,a<2?j:`i2o_${e}(${j})`),$=(...j)=>a===0?"0u":`${h.indices}(${j.map(m).join(",")})`,B=(j,P)=>a<2?`${j}`:`${me(j,P,a)}`,W=(j,P,K)=>a<2?`${j}=${K};`:`${me(j,P,a)}=${K};`,Y={},ae=(j,P)=>{_.broadcastedIndicesToOffset=!0;let K=`${P.name}broadcastedIndicesTo${e}Offset`;if(K in Y)return`${K}(${j})`;let V=[];for(let $e=a-1;$e>=0;$e--){let Ne=P.indicesGet("outputIndices",$e+P.rank-a);V.push(`${B(v,$e)} * (${Ne} % ${B(k,$e)})`)}return Y[K]=`fn ${K}(outputIndices: ${P.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${K}(${j})`},oe=(j,P)=>(()=>{if(h.storage===h.value)return`${e}[${j}]=${P};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${j}]=vec2<u32>(u32(${P}), select(0u, 0xFFFFFFFFu, ${P} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${j}]=vec2<u32>(u32(${P}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${j}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${P}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),N=j=>(()=>{if(h.storage===h.value)return`${e}[${j}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${j}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${j}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${j}] & 0xFFu), bool(${e}[${j}] & 0xFF00u), bool(${e}[${j}] & 0xFF0000u), bool(${e}[${j}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),de=a<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${N(`i2o_${e}(indices)`)};
  }`,ee=a<2?"":(()=>{let j=o.map(K=>`d${K}: u32`).join(", "),P=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${j}) -> ${c} {
    return get_${e}ByIndices(${$(P)});
  }`})(),J=(...j)=>{if(j.length!==a)throw new Error(`indices length must be ${a}`);let P=j.map(m).join(",");return a===0?N("0u"):a===1?N(P[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${P})`)},he=j=>a<2?N(j):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${j})`),Z=a<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${oe(`i2o_${e}(indices)`,"value")}
  }`,Se=a<2?"":(()=>{let j=o.map(K=>`d${K}: u32`).join(", "),P=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${j}, value: ${c}) {
    set_${e}ByIndices(${$(P)}, value);
  }`})();return{impl:()=>{let j=[],P=!1;return _.offsetToIndices&&(j.push(T),P=!0),_.indicesToOffset&&(j.push(A),P=!0),_.broadcastedIndicesToOffset&&(Object.values(Y).forEach(K=>j.push(K)),P=!0),_.set&&(j.push(Se),P=!0),_.setByIndices&&(j.push(Z),P=!0),_.get&&(j.push(ee),P=!0),_.getByIndices&&(j.push(de),P=!0),!s&&P&&j.unshift(`const ${k} = ${h.indices}(${r.join(",")});`,`const ${v} = ${h.indices}(${D.computeStrides(r).join(",")});`),j.join(`
`)},type:h,offsetToIndices:x,indicesToOffset:O,broadcastedIndicesToOffset:ae,indices:$,indicesGet:B,indicesSet:W,set:(...j)=>{if(j.length!==a+1)throw new Error(`indices length must be ${a}`);let P=j[a];if(typeof P!="string")throw new Error("value must be string");let K=j.slice(0,a).map(m).join(",");return a===0?oe("0u",P):a===1?oe(K[0],P):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${K}, ${P})`)},setByOffset:oe,setByIndices:(j,P)=>a<2?oe(j,P):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${j}, ${P});`),get:J,getByOffset:N,getByIndices:he,usage:n,name:e,strides:v,shape:k,rank:a}},L=(e,t,r,n=1)=>Dn(e,t,r,"input",n),fe=(e,t,r,n=1)=>Dn(e,t,r,"output",n),gg=(e,t,r)=>Dn(e,t,r,"atomicOutput",1),dl=(e,t,r,n=1)=>Dn(e,t,r,"internal",n),bc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Tn){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},yg=(e,t)=>new bc(e,t)}),vc,ka,wc,$c,xc,Sc,Mt,_g,bg,Ur=X(()=>{ve(),ke(),at(),Te(),vc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ka=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),wc=(e,t)=>D.sortBasedOnPerm(e,ka(e.length,t)),$c=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},xc=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Sc=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Mt=(e,t)=>{let r=e.dataType,n=e.dims.length,i=ka(n,t),s=wc(e.dims,i),a=e.dims,o=s,l=n<2||Sc(i,e.dims),u;if(l)return u=_=>{let b=L("input",r,a,4),k=fe("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,k)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:u};let{newShape:c,newPerm:p}=xc(e.dims,i),h=D.areEqual(p,[2,3,1]),m=D.areEqual(p,[3,1,2]);if(c.length===2||h||m){a=h?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let _=16;return u=b=>{let k=L("a",r,a.length),v=fe("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(k,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:b},...ge(a,o)]}},getShaderSource:u}}return u=_=>{let b=L("a",r,a.length),k=fe("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,k)}

  ${$c(i,n,b,k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ge(a,o)]}},getShaderSource:u}},_g=(e,t)=>{vc(e.inputs,t.perm),e.compute(Mt(e.inputs[0],t.perm))},bg=e=>We({perm:e.perm})}),kc,Tc,Ec,Ic,Cc,zc,Ac,Oc,Rc,Mc,Wt,vg,wg,$g,xg,Sg,kg,Tg,Eg,Ig,Cg,Ux=X(()=>{ve(),ke(),Te(),cl(),Ur(),kc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Tc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ec={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ic={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Cc=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},zc=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Ac=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},Oc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Rc=(e,t)=>{let r=[];if(!Oc(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Mc=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=D.size(s),u=D.size(a),c=L("_A",r[0].dataType,o),p=fe("output",i,s),h=64;l===1&&(h=256);let m=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,p)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ec[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${kc[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Tc[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Ic[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:u}]})}},Wt=(e,t,r,n)=>{let i=e.inputs.length===1?r:vo(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,_)=>_));let a=D.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],u=Rc(o,e.inputs[0].dims.length);u.length>0&&(l=e.compute(Mt(e.inputs[0],u),{inputs:[0],outputs:[-1]})[0],o=Cc(o.length,l.dims.length));let[c,p]=zc(l.dims,o),h=c;i.keepDims&&(h=Ac(c,a)),e.compute(Mc(t,i.cacheKey,[l],n,e.inputs[0].dataType,h,p),{inputs:[l]})},vg=(e,t)=>{Wt(e,"ReduceMeanShared",t,"mean")},wg=(e,t)=>{Wt(e,"ReduceL1Shared",t,"l1")},$g=(e,t)=>{Wt(e,"ReduceL2Shared",t,"l2")},xg=(e,t)=>{Wt(e,"ReduceLogSumExpShared",t,"logSumExp")},Sg=(e,t)=>{Wt(e,"ReduceMaxShared",t,"max")},kg=(e,t)=>{Wt(e,"ReduceMinShared",t,"min")},Tg=(e,t)=>{Wt(e,"ReduceProdShared",t,"prod")},Eg=(e,t)=>{Wt(e,"ReduceSumShared",t,"sum")},Ig=(e,t)=>{Wt(e,"ReduceSumSquareShared",t,"sumSquare")},Cg=(e,t)=>{Wt(e,"ReduceLogSumShared",t,"logSum")}}),Vt,Bc,ls,vo,Ht,Nc,Dc,Pc,Uc,Lc,qc,Wc,Vc,Hc,Fc,Ft,zg,Ag,Og,Rg,Mg,Bg,Ng,Dg,Pg,Ug,cl=X(()=>{ve(),ke(),at(),Te(),Ux(),Vt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Bc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ls=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],u=r[0].dims,c=u.length,p=D.normalizeAxes(i,c),h=!o&&p.length===0;u.forEach((b,k)=>{h||p.indexOf(k)>=0?a&&l.push(1):l.push(b)});let m=l.length,_=D.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let k=[],v=L("_A",r[0].dataType,c),w=fe("output",s,m),T=n(v,w,p),x=T[2];for(let E=0,A=0;E<c;E++)h||p.indexOf(E)>=0?(a&&A++,x=`for(var j${E}: u32 = 0; j${E} < ${u[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${x}
                }`):(k.push(`${v.indicesSet("input_indices",E,w.indicesGet("output_indices",A))};`),A++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${x}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ge(u,l)]})}},vo=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),We({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ht=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:vo(i,r);e.compute(ls(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Bc:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Nc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Dc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Pc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Uc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Lc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},qc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},Wc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Vc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Hc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Fc=(e,t)=>{Vt(e.inputs),Ht(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ft=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},zg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qc(e,t):vg(e,t)},Ag=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dc(e,t):wg(e,t)},Og=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pc(e,t):$g(e,t)},Rg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uc(e,t):xg(e,t)},Mg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lc(e,t):Sg(e,t)},Bg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wc(e,t):kg(e,t)},Ng=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vc(e,t):Tg(e,t)},Dg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hc(e,t):Eg(e,t)},Pg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fc(e,t):Ig(e,t)},Ug=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nc(e,t):Cg(e,t)}}),Ta,Lg,qg,wo,Lx=X(()=>{ve(),at(),cl(),Ta=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Lg=(e,t)=>{Ta(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ls("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},qg=(e,t)=>{Ta(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ls("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},wo=e=>We(e)}),Gc,Ui,jc,Kc,Xc,ci,Zc,Wg,pl=X(()=>{ve(),ke(),ul(),Te(),Gc=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],u=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,h=p,m=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=u;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+h+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(a){if(h!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=a.dims[3])}let k=_+b,v=-1,w=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==u||o.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:u,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ui=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,jc=(e,t,r,n,i,s,a,o)=>{let l=it(a?1:s),u=64,c=s/l;c<u&&(u=32);let p=Math.ceil(s/l/u),h=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:c},{type:12,data:p}],m=ct(e.dataType,l),_=bt(1,l),b=["type"];a&&b.push("type"),o&&b.push("type");let k=v=>{let w=fe("x",e.dataType,e.dims,l),T=[w],x=a?L("seq_lens",a.dataType,a.dims):void 0;x&&T.push(x);let E=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;E&&T.push(E);let A=bt(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${u}>;
  var<workgroup> thread_sum: array<f32, ${u}>;
  ${v.registerUniforms(O).declareVariables(...T)}
  ${v.mainStart([u,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ui(x,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${u}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${u}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${u}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${u};${m};${l}`,inputDependencies:b},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:h})}},Kc=(e,t,r,n,i,s,a,o,l)=>{let u=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,u],p=e>1&&n,h=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=p?[s.batchSize,h,u,s.headSize]:void 0,_=s.nReps?s.nReps:1,b=s.scale===0?1/Math.sqrt(s.headSize):s.scale,k=it(s.headSize),v=s.headSize/k,w=12,T={x:Math.ceil(u/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},x=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:u},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:b},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=p&&n&&D.size(n.dims)>0,A=["type","type"];E&&A.push("type"),i&&A.push("type"),o&&A.push("type"),l&&A.push("type");let O=[{dims:c,dataType:t.dataType,gpuDataType:0}];p&&O.push({dims:m,dataType:t.dataType,gpuDataType:0});let $=B=>{let W=L("q",t.dataType,t.dims,k),Y=L("key",r.dataType,r.dims,k),ae=[W,Y];if(E){let Z=L("past_key",n.dataType,n.dims,k);ae.push(Z)}i&&ae.push(L("attention_bias",i.dataType,i.dims));let oe=o?L("seq_lens",o.dataType,o.dims):void 0;oe&&ae.push(oe);let N=l?L("total_sequence_length_input",l.dataType,l.dims):void 0;N&&ae.push(N);let de=fe("output",t.dataType,c),ee=[de];p&&ee.push(fe("present_key",t.dataType,m,k));let J=bt(1,k),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${W.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${W.type.storage}, ${w*w}>;
  ${B.registerUniforms(he).declareVariables(...ae,...ee)}
  ${B.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ui(oe,N,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${de.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${i!==void 0};${n!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:O,dispatchGroup:T,programUniforms:x}),getShaderSource:$}},Xc=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,u=i.nReps?i.nReps:1,c=i.vHiddenSize*u,p=e>1&&n,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,h,l,i.headSize]:void 0,_=[i.batchSize,i.sequenceLength,c],b=12,k={x:Math.ceil(i.vHeadSize/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},v=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:u}],w=p&&n&&D.size(n.dims)>0,T=["type","type"];w&&T.push("type"),a&&T.push("type"),o&&T.push("type");let x=[{dims:_,dataType:t.dataType,gpuDataType:0}];p&&x.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=A=>{let O=L("probs",t.dataType,t.dims),$=L("v",r.dataType,r.dims),B=[O,$];w&&B.push(L("past_value",n.dataType,n.dims));let W=a?L("seq_lens",a.dataType,a.dims):void 0;a&&B.push(W);let Y=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;o&&B.push(Y);let ae=[fe("output",t.dataType,_)];p&&ae.push(fe("present_value",t.dataType,m));let oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${O.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${O.type.value}, ${b*b}>;
  ${A.registerUniforms(oe).declareVariables(...B,...ae)}
  ${A.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${u===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${u===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ui(W,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:x,dispatchGroup:k,programUniforms:v}),getShaderSource:E}},ci=(e,t,r,n,i,s,a,o,l,u,c=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),m=h>1?a:void 0,_=h>1?o:void 0,b=h>1?u.pastSequenceLength:0,k=b+u.kvSequenceLength,v=l&&D.size(l.dims)>0?l:void 0,w=[t,r];m&&D.size(m.dims)>0&&w.push(m),v&&w.push(v),c&&w.push(c),p&&w.push(p);let T=e.compute(Kc(h,t,r,m,v,u,b,c,p),{inputs:w,outputs:h>1?[-1,1]:[-1]})[0];e.compute(jc(T,u.batchSize,u.numHeads,b,u.sequenceLength,k,c,p),{inputs:c&&p?[T,c,p]:[T],outputs:[]});let x=[T,n];_&&D.size(_.dims)>0&&x.push(_),c&&x.push(c),p&&x.push(p),e.compute(Xc(h,T,n,_,u,b,c,p),{inputs:x,outputs:h>1?[0,2]:[0]})},Zc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],u=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=p=>{let h=fe("output_q",l[0].dataType,r),m=fe("output_k",l[0].dataType,r),_=fe("output_v",l[0].dataType,r),b=L("input",l[0].dataType,l[0].dims),k=L("weight",l[1].dataType,l[1].dims),v=L("bias",l[2].dataType,l[2].dims),w=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${w}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${w}, ${a*a}>;
  var<workgroup> tileWeightK: array<${w}, ${a*a}>;
  var<workgroup> tileWeightV: array<${w}, ${a*a}>;
  ${p.registerUniforms(T).declareVariables(b,k,v,h,m,_)}
  ${p.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:u}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Wg=(e,t)=>{let r=Gc(e.inputs,t),[n,i,s]=Zc(e,r);return ci(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Yc,Qc,Jc,Vg,qx=X(()=>{Lt(),ve(),ke(),at(),Te(),Yc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Qc=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?it(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=D.size(s)/a,u=n,c=u?s.length:s,p=L("x",e[0].dataType,e[0].dims,a),h=L("scale",e[1].dataType,e[1].dims,o),m=L("bias",e[2].dataType,e[2].dims,o),_=L("inputMean",e[3].dataType,e[3].dims,o),b=L("inputVar",e[4].dataType,e[4].dims,o),k=fe("y",e[0].dataType,c,a),v=()=>{let T="";if(n)T=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let x=1;x<h.rank;x++)T+=`cIndices[${x}] = outputIndices[${x}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(p,h,m,_,b,k)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${a}`)};
    ${v()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:u?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u?[{type:12,data:l},...ge(s)]:[{type:12,data:l}]})}},Jc=e=>We(e),Vg=(e,t)=>{let{inputs:r,outputCount:n}=e,i=Jc({...t,outputCount:n});if(Je.webgpu.validateInputContent&&Yc(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Qc(r,i))}}),ep,tp,Hg,Wx=X(()=>{ke(),Te(),ep=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},tp=e=>{let t=e[0].dims,r=e[0].dims[2],n=D.size(t)/4,i=e[0].dataType,s=L("input",i,t,4),a=L("bias",i,[r],4),o=L("residual",i,t,4),l=fe("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const channels = ${r}u / 4;
  ${u.declareVariables(s,a,o,l)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Hg=e=>{ep(e.inputs),e.compute(tp(e.inputs))}}),rp,Ue,Fg,Gg,jg,Kg,Xg,Zg,Yg,Qg,Jg,np,e0,t0,r0,n0,Kn,i0,Yi,s0,a0,o0,l0,u0,d0,c0,p0,f0,h0,m0,g0,y0,_0,b0,v0,Ea,w0,$o,xo,$0,x0,S0,ip,sp,k0,fl=X(()=>{ve(),ke(),at(),Te(),rp=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let u=L("inputData",r,[o],4),c=fe("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(u,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${u.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},Ue=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:u=>rp(u,D.size(e.dims),e.dataType,s,r,n,o),getRunData:u=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(D.size(u[0].dims)/64/4)},programUniforms:l})}},Fg=e=>{e.compute(Ue(e.inputs[0],"Abs","abs"))},Gg=e=>{e.compute(Ue(e.inputs[0],"Acos","acos"))},jg=e=>{e.compute(Ue(e.inputs[0],"Acosh","acosh"))},Kg=e=>{e.compute(Ue(e.inputs[0],"Asin","asin"))},Xg=e=>{e.compute(Ue(e.inputs[0],"Asinh","asinh"))},Zg=e=>{e.compute(Ue(e.inputs[0],"Atan","atan"))},Yg=e=>{e.compute(Ue(e.inputs[0],"Atanh","atanh"))},Qg=e=>We(e),Jg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ue(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},np=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return We({min:t,max:r})},e0=(e,t)=>{let r=t||np(e.inputs),n=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},t0=e=>{e.compute(Ue(e.inputs[0],"Ceil","ceil"))},r0=e=>{e.compute(Ue(e.inputs[0],"Cos","cos"))},n0=e=>{e.compute(Ue(e.inputs[0],"Cosh","cosh"))},Kn=e=>We(e),i0=(e,t)=>{let r=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Yi=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,s0=e=>{let t=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Yi(t)))},a0=e=>{e.compute(Ue(e.inputs[0],"Exp","exp"))},o0=e=>{e.compute(Ue(e.inputs[0],"Floor","floor"))},l0=e=>{let t=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Yi(t)))},u0=(e,t)=>{let r=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},d0=e=>{e.compute(Ue(e.inputs[0],"Not",t=>`!${t}`))},c0=e=>{e.compute(Ue(e.inputs[0],"Neg",t=>`-${t}`))},p0=e=>{e.compute(Ue(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},f0=e=>{let t=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},h0=e=>{e.compute(Ue(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},m0=e=>We(e),g0=(e,t)=>{let r=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},y0=e=>{e.compute(Ue(e.inputs[0],"Sin","sin"))},_0=e=>{e.compute(Ue(e.inputs[0],"Sinh","sinh"))},b0=e=>{e.compute(Ue(e.inputs[0],"Sqrt","sqrt"))},v0=e=>{e.compute(Ue(e.inputs[0],"Tan","tan"))},Ea=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,w0=e=>{e.compute(Ue(e.inputs[0],"Tanh",Ea))},$o=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ea("v")};
}
`,xo=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,$0=e=>{let t=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"FastGelu",xo,$o(t),void 0,e.inputs[0].dataType))},x0=(e,t)=>{let r=bt(e.inputs[0].dataType);return e.compute(Ue(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},S0=e=>{e.compute(Ue(e.inputs[0],"Log","log"))},ip=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,sp=e=>`quick_gelu_impl(${e})`,k0=(e,t)=>{let r=bt(e.inputs[0].dataType);e.compute(Ue(e.inputs[0],"QuickGelu",sp,ip(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ap,op,T0,Vx=X(()=>{ke(),Te(),fl(),ap=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},op=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=L("input",e[0].dataType,e[0].dims,4),n=L("bias",e[0].dataType,[e[0].dims[2]],4),i=fe("output",e[0].dataType,t,4),s=D.size(t)/4,a=ct(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Yi(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},T0=e=>{ap(e.inputs),e.compute(op(e.inputs))}}),lp,up,Gt,E0,I0,C0,z0,A0,O0,R0,M0,B0,N0,Hx=X(()=>{ve(),ke(),Te(),lp=(e,t,r,n,i,s,a,o,l,u,c,p)=>{let h,m;typeof o=="string"?h=m=(w,T)=>`${o}((${w}),(${T}))`:typeof o=="function"?h=m=o:(h=o.scalar,m=o.vector);let _=fe("outputData",c,n.length,4),b=L("aData",l,t.length,4),k=L("bData",u,r.length,4),v;if(i)if(s){let w=D.size(t)===1,T=D.size(r)===1,x=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;w||T?v=_.setByOffset("global_idx",m(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",m(a||x?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",m(b.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,x,E="")=>{let A=`aData[indexA${x}][componentA${x}]`,O=`bData[indexB${x}][componentB${x}]`;return`
            let outputIndices${x} = ${_.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offsetA${x} = ${b.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
            let offsetB${x} = ${k.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
            let indexA${x} = offsetA${x} / 4u;
            let indexB${x} = offsetB${x} / 4u;
            let componentA${x} = offsetA${x} % 4u;
            let componentB${x} = offsetB${x} % 4u;
            ${T}[${x}] = ${E}(${h(A,O)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,k,_)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},up=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),u=!D.areEqual(o,l),c=o,p=D.size(o),h=!1,m=!1,_=[u];if(u){let b=kn.calcShape(o,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),p=D.size(c);let k=D.size(o)===1,v=D.size(l)===1,w=o.length>0&&o[o.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;_.push(k),_.push(v),_.push(w),_.push(T);let x=1;for(let E=1;E<c.length;E++){let A=o[o.length-E],O=l[l.length-E];if(A===O)x*=A;else break}x%4===0?(m=!0,h=!0):(k||v||w||T)&&(h=!0)}else h=!0;return _.push(h),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>lp(b,o,l,c,h,u,m,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(c)/4)},...ge(o,l,c)]})}},Gt=(e,t,r,n,i,s)=>{e.compute(up(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},E0=e=>{Gt(e,"Add",(t,r)=>`${t}+${r}`)},I0=e=>{Gt(e,"Div",(t,r)=>`${t}/${r}`)},C0=e=>{Gt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},z0=e=>{Gt(e,"Mul",(t,r)=>`${t}*${r}`)},A0=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Gt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},O0=e=>{Gt(e,"Sub",(t,r)=>`${t}-${r}`)},R0=e=>{Gt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},M0=e=>{Gt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},B0=e=>{Gt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},N0=e=>{Gt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),dp,cp,pp,fp,D0,P0,Fx=X(()=>{ve(),ke(),at(),Te(),dp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,u)=>{if(u!==t&&l!==n.dims[u])throw new Error("non concat dimensions must match")})}})},cp=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,pp=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},fp=(e,t,r,n)=>{let i=D.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],u=[],c=[{type:12,data:i}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],s[b]=o,u.push(e[b].dims.length),a[b]=L(`input${b}`,n,u[b]),l.push("rank"),c.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)c.push(...ge(e[b].dims));c.push(...ge(r));let p=fe("output",n,r.length),h=p.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)b.registerUniform(`sizeInConcatAxis${k}`,"u32");return b.declareVariables(...a,p)})()}

  ${cp(s.length,m)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${pp(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:_}},D0=(e,t)=>{let r=e.inputs,n=r[0].dims,i=D.normalizeAxis(t.axis,n.length);dp(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>D.size(o.dims)>0);e.compute(fp(a,i,s,r[0].dataType),{inputs:a})},P0=e=>We({axis:e.axis})}),an,on,ln,hl,cn=X(()=>{ve(),ke(),an=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},on=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ln=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},hl=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[dg,cg];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ft,U0,ml=X(()=>{ft=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},U0=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),L0,Gx=X(()=>{L0=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ii,gl,yl=X(()=>{ve(),ke(),Te(),cn(),ii=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${me(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,me(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},gl=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],u=o[o.length-1],c=a[a.length-1],p=it(u),h=it(c),m=it(l),_=D.size(r)/p/m,b=e.length>2,k=n?n.slice(0,-2):r.slice(0,-2),v=[D.size(k),l,u],w=[{type:12,data:_},{type:12,data:l},{type:12,data:u},{type:12,data:c}];on(t,w),w.push(...ge(k,a,o)),b&&w.push(...ge(e[2].dims)),w.push(...ge(v));let T=x=>{let E=dl("batch_dims",e[0].dataType,k.length),A=L("a",e[0].dataType,a.length,h),O=L("b",e[1].dataType,o.length,p),$=fe("output",e[0].dataType,v.length,p),B=ct($.type.tensor),W=an(t,$.type.value,B),Y=[A,O],ae="";if(b){let de=i?p:1;Y.push(L("bias",e[2].dataType,e[2].dims.length,de)),ae=`${i?`value += bias[col / ${de}];`:`value += ${$.type.value}(bias[row + i]);`}`}let oe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ln(t,oe);let N=()=>{let de=`var a_data: ${A.type.value};`;for(let ee=0;ee<h;ee++)de+=`
              let b_data${ee} = b[(b_offset + (k + ${ee}) * uniforms.N + col) / ${p}];`;for(let ee=0;ee<m;ee++){de+=`a_data = a[(a_offset + (row + ${ee}) * uniforms.K + k) / ${h}];`;for(let J=0;J<h;J++)de+=`
            values[${ee}] = fma(${O.type.value}(a_data${h===1?"":`[${J}]`}), b_data${J}, values[${ee}]);
`}return de};return`
  ${x.registerUniforms(oe).registerInternalVariables(E).declareVariables(...Y,$)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${ii("a_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${ii("b_indices",O,O.rank-2,E.rank,"batch_indices")}
    ${O.indicesSet("b_indices",O.rank-2,0)}
    ${O.indicesSet("b_indices",O.rank-1,0)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${N()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${ae}
      ${W}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${m};${i}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T}}}),hp,mp,So,Ia,gp,ko,yp,us,_l=X(()=>{ve(),ke(),Te(),cn(),yl(),ml(),hp=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,mp=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,So=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],u=t[0]*e[0],c=i?l:s,p=i?s:l,h=c/t[0],m=s/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${c/h}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${u/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${hp(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${mp(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ia=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,gp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ko=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let u=e[1]*t[1],c=e[0]*t[0],p=i?u:s,h=i?s:u;if(!(h%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=h/t[1],_=p/t[0],b=s/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${u};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${Ia(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${u};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ia(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${gp(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},yp=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,u=ct(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ft(e,u)} {
      var value = ${ft(e,u)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${ii("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ft(e,u)} {
      var value = ${ft(e,u)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ii("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ft(e,u)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${ft(e,u)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},us=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),u=o.slice(0,-2),c=n?n.slice(0,-2):r.slice(0,-2),p=D.size(c),h=a[a.length-2],m=a[a.length-1],_=o[o.length-1],b=m%4===0&&_%4===0,k=h<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/k[0]),Math.ceil(h/v[1]/k[1]),Math.ceil(p/v[2]/k[2])],T=b?4:1,x=[...l,h,m/T],E=x.length,A=[...u,m,_/T],O=A.length,$=[p,h,_/T],B=[{type:6,data:h},{type:6,data:_},{type:6,data:m}];on(t,B),B.push(...ge(c,x,A));let W=["rank","rank"],Y=e.length>2;Y&&(B.push(...ge(e[2].dims)),W.push("rank")),B.push(...ge($));let ae=oe=>{let N=c.length,de=dl("batchDims",e[0].dataType,N,1),ee=ct(e[0].dataType),J=L("a",e[0].dataType,E,T),he=L("b",e[1].dataType,O,T),Z=fe("result",e[0].dataType,$.length,T),Se=[J,he];if(Y){let $e=i?T:1;Se.push(L("bias",e[2].dataType,e[2].dims.length,$e))}let j=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ln(t,j);let P=ct(Z.type.tensor),K=an(t,Z.type.value,P),V=yp(T,Y,K,[de,J,he,Z],i);return`
  ${oe.registerUniforms(j).registerInternalVariables(de).declareVariables(...Se,Z)}
  ${V}
  ${b?So(k,v,ee,de):ko(k,v,ee,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${b};${i}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:B}),getShaderSource:ae}}}),_p,q0,jx=X(()=>{ve(),Er(),Te(),cn(),ml(),Gx(),_l(),_p=(e,t,r,n,i=!1,s,a=4,o=4,l=4,u="f32")=>{let c=B=>{switch(B){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${u}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${B} is not supported.`)}},p=B=>{switch(B){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${B} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${ft(a,u)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,T=e?t&&n?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${ft(a,u)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${ft(a,u)}(0.0);`,x=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${ft(o,u)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${ft(o,u)}(0.0);`,E=ft(l,u),A=ft(e?a:o,u),O=ft(e?o:a,u),$=an(s,E,u);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?T:x}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?x:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${U0(i)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},q0=(e,t,r,n,i,s,a,o,l)=>{let u=t.format==="NHWC",c=u?e[0].dims[3]:e[0].dims[1],p=r[0],h=u?r[2]:r[3],m=u?r[1]:r[2],_=u?r[3]:r[1],b=u&&(c%4===0||c%3===0)&&_%4===0,k=u?_:h*m,v=u?h*m:_,w=[8,8,1],T=n<=8?[4,1,1]:[4,4,1],x=[Math.ceil(k/w[0]/T[0]),Math.ceil(v/w[1]/T[1]),Math.ceil(p/w[2]/T[2])];Be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${x}`);let E=b?u&&c%4!==0?3:4:1,A=w[1]*T[1],O=w[0]*T[0],$=Math.max(w[0]*E,w[1]),B=n%A===0,W=i%O===0,Y=s%$===0,ae=b?[E,4,4]:[1,1,1],oe=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];on(t,oe),oe.push(...ge(e[0].dims,e[1].dims));let N=["rank","rank"];a&&(oe.push(...ge(e[2].dims)),N.push("rank")),oe.push(...ge(r));let de=ee=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ln(t,J);let he=b?4:1,Z=ct(e[0].dataType),Se=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${Z}>`:Z}) {
        result[flatIndex] = ${b?`vec4<${Z}>`:Z}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${Z}>`:Z}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,j=L("x",e[0].dataType,e[0].dims.length,E===3?1:E),P=L("w",e[1].dataType,e[1].dims.length,he),K=[j,P],V=fe("result",e[0].dataType,r.length,he);if(a){let $e=L("bias",e[2].dataType,e[2].dims.length,he);K.push($e),Se+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${Z}>`:Z} {
          return bias[coords.${u?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${L0("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ee.registerUniforms(J).declareVariables(...K,V)}
        ${Se}
        ${_p(u,B,W,Y,a,t,ae[0],ae[1],ae[2],Z)}
        ${b?So(T,w,Z,void 0,!u,$):ko(T,w,Z,void 0,!u,$,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${B};${W};${Y};${A};${O};${$}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:oe}),getShaderSource:de}}}),bp,Ca,Pn,vp,za,wp,W0,V0,Kx=X(()=>{ve(),Er(),ke(),Te(),cn(),ml(),bp=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ca=e=>typeof e=="number"?[e,e,e]:e,Pn=(e,t)=>t<=1?e:e+(e-1)*(t-1),vp=(e,t,r,n=1)=>{let i=Pn(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},za=(e,t,r,n,i)=>{i==null&&(i=vp(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},wp=(e,t,r,n,i,s,a,o,l,u)=>{let c,p,h,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=za([t,r,n,1],[o,l,u],1,[i,s,a],e);p=_[0],h=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every((b,k,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=za([t,r,n,1],[o,l,u],1,[i,s,a],e[0]);p=_[0],h=_[1],m=_[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),h=Math.ceil(r/s),m=Math.ceil(n/a);let _=(p-1)*i+o-t,b=(h-1)*s+l-r,k=(m-1)*a+u-n,v=Math.floor(_/2),w=_-v,T=Math.floor(b/2),x=b-T,E=Math.floor(k/2),A=k-E;c={top:T,bottom:x,left:E,right:A,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:p,outHeight:h,outWidth:m}},W0=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,u,c,p;if(a==="channelsLast")[o,l,u,c,p]=e;else if(a==="channelsFirst")[o,p,l,u,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[h,,m,_,b]=t,[k,v,w]=Ca(r),[T,x,E]=Ca(n),A=Pn(m,T),O=Pn(_,x),$=Pn(b,E),{padInfo:B,outDepth:W,outHeight:Y,outWidth:ae}=wp(i,l,u,c,k,v,w,A,O,$),oe=s?h*p:h,N=[0,0,0,0,0];return a==="channelsFirst"?N=[o,oe,W,Y,ae]:a==="channelsLast"&&(N=[o,W,Y,ae,oe]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:u,inWidth:c,inChannels:p,outDepth:W,outHeight:Y,outWidth:ae,outChannels:oe,padInfo:B,strideDepth:k,strideHeight:v,strideWidth:w,filterDepth:m,filterHeight:_,filterWidth:b,effectiveFilterDepth:A,effectiveFilterHeight:O,effectiveFilterWidth:$,dilationDepth:T,dilationHeight:x,dilationWidth:E,inShape:e,outShape:N,filterShape:t}},V0=(e,t,r,n,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((k,v)=>v)},u=[Math.ceil(bp(l.x.map(k=>r[k]))/o[0]),1,1];Be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let c=1,p=D.size(r),h=[{type:12,data:p},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];on(t,h),h.push(...ge(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(h.push(...ge(e[2].dims)),m.push("rank")),h.push(...ge(r));let b=k=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ln(t,v);let w=1,T=ct(e[0].dataType),x=L("x",e[0].dataType,e[0].dims.length,c),E=L("W",e[1].dataType,e[1].dims.length,w),A=[x,E],O=fe("result",e[0].dataType,r.length,w),$="";if(_){let Y=L("bias",e[2].dataType,e[2].dims.length,w);A.push(Y),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${a?me("coords",4,5):me("coords",1,5)}];
        }`}let B=ft(c,T),W=an(t,B,T);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${x.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${k.registerUniforms(v).declareVariables(...A,O)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${me("coords",0,x.rank)};
              let d2 = ${a?me("coords",x.rank-1,x.rank):me("coords",1,x.rank)};
              let xFRCCorner = vec3<u32>(${a?me("coords",1,x.rank):me("coords",2,x.rank)},
              ${a?me("coords",2,x.rank):me("coords",3,x.rank)},
              ${a?me("coords",3,x.rank):me("coords",4,x.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?me("uniforms.x_shape",1,x.rank):me("uniforms.x_shape",2,x.rank)};
              let xShapeZ = ${a?me("uniforms.x_shape",2,x.rank):me("uniforms.x_shape",3,x.rank)};
              let xShapeW = ${a?me("uniforms.x_shape",3,x.rank):me("uniforms.x_shape",4,x.rank)};
              let xShapeU = ${a?me("uniforms.x_shape",4,x.rank):me("uniforms.x_shape",1,x.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${W}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:h}),getShaderSource:b}}}),H0,F0,Xx=X(()=>{ve(),ke(),Te(),cn(),H0=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",u=l?r[3]:r[1],c=u/t.group,p=l&&c>=4?it(u):1,h=D.size(r)/p,m=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];on(t,m),m.push(...ge(a,[o[0],o[1],o[2],o[3]/p]));let _=i?["rank","rank","rank"]:["rank","rank"];m.push(...ge([r[0],r[1],r[2],r[3]/p]));let b=k=>{let v=fe("output",e[0].dataType,r.length,p),w=ct(v.type.tensor),T=an(t,v.type.value,w),x=L("x",e[0].dataType,a.length),E=L("w",e[1].dataType,o.length,p),A=[x,E];i&&A.push(L("b",e[2].dataType,e[2].dims,p));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ln(t,O);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${x.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${x.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(O).declareVariables(...A,v)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${$}
    ${s}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:b}},F0=(e,t,r,n)=>{let i=e.length>2,s=it(r[3]),a=it(r[2]),o=D.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],u=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];on(t,p),p.push(...ge(l,u,c));let h=(a-1)*t.strides[1]+u[1],m=_=>{let b=fe("output",e[0].dataType,c.length,s),k=ct(b.type.tensor),v=an(t,b.type.value,k),w=L("x",e[0].dataType,l.length,s),T=L("w",e[1].dataType,u.length,s),x=[w,T];i&&x.push(L("b",e[2].dataType,e[2].dims,s));let E=i?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ln(t,A),`
  ${_.registerUniforms(A).declareVariables(...x,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${b.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${u[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${u[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${h};${u[0]};${u[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}}}),$p,Li,xp,qi,To,Aa,Sp,kp,Eo,Zx=X(()=>{ke(),jx(),Kx(),_l(),Xx(),cn(),yl(),Ur(),$p=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,u=t[0],c=t.slice(2).map((h,m)=>h+(h-1)*(r[m]-1)),p=o.map((h,m)=>h+n[m]+n[m+l]).map((h,m)=>Math.floor((h-c[m]+i[m])/i[m]));return p.splice(0,0,a),p.splice(s?3:1,0,u),p},Li=[2,3,1,0],xp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},qi=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();os.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},To=e=>{let t=hl(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,u=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:u,...t,cacheKey:`${e.format};${t.activation};`}},Aa=(e,t,r,n)=>{let i=r.format==="NHWC",s=$p(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let A=[t[0]];if(i){let O=e.kernelCustomData.wT??e.compute(Mt(t[1],Li),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),A.push(O)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(F0(A,r,s,n),{inputs:A}):e.compute(H0(A,r,s,n),{inputs:A});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],u=t[0].dims[i?3:1],c=t[1].dims[2],p=t[1].dims[3],h=s[i?1:2],m=s[i?2:3],_=s[i?3:1],b=i&&c===o&&p===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=s[0],O,$,B,W=[];if(i){let oe=e.kernelCustomData.wT??e.compute(Mt(t[1],Li),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=oe),b){let N=o*l*u;O=t[0].reshape([1,A,N]),$=oe.reshape([1,N,_]),B=[1,A,_]}else O=t[0].reshape([A,o*l,u]),$=oe.reshape([1,u,_]),B=[A,h*m,_];W.push(O),W.push($)}else O=t[0].reshape([A,u,o*l]),$=t[1].reshape([1,_,u]),B=[A,_,h*m],W.push($),W.push(O);a&&W.push(t[2]);let Y=B[2],ae=W[0].dims[W[0].dims.length-1];Y<8&&ae<8?e.compute(gl(W,r,s,B,i,n),{inputs:W}):e.compute(us(W,r,s,B,i,n),{inputs:W});return}let k=!0,v=e.kernelCustomData.wT??e.compute(Mt(t[1],Li),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];a&&w.push(t[2]);let T=i?h*m:_,x=i?_:h*m,E=c*p*u;e.compute(q0(w,r,s,T,x,E,a,k,n),{inputs:w})},Sp=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=qi({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);Aa(e,n,l,u=>r?[u[0],u[2],u[3]]:[u[0],u[1],u[3]])},kp=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=qi(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=W0(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(V0(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},Eo=(e,t)=>{if(xp(e.inputs,t),e.inputs[0].dims.length===3)Sp(e,t);else if(e.inputs[0].dims.length===5)kp(e,e.inputs,t);else{let r=qi(t,e.inputs);Aa(e,e.inputs,r)}}}),G0,Yx=X(()=>{ve(),Er(),ke(),Te(),G0=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,u=o[3],c=s?it(l):1,p=s&&u===1&&l>=4,h=p?Math.floor(l/4)*4:Math.floor(l/c)*c,m=l-h,_=s?it(u):1,b=s?u===1?c:_:1,k=D.size(i)/_,v=[Math.ceil(k/64),1,1];Be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],x=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],A=[x[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),x[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],O=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:k},{type:12,data:T},{type:12,data:x},{type:12,data:E},{type:12,data:A},{type:6,data:O},{type:12,data:h},{type:12,data:l},{type:12,data:u},...ge(e[0].dims,e[1].dims)];n&&($.push(...ge(e[2].dims)),w.push("rank")),$.push(...ge(i));let B=W=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:x.length},{name:"dilations",type:"u32",length:x.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:O.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ae=ct(e[0].dataType),oe=s?1:2,N=s?2:3,de=s?3:1,ee=L("W",e[1].dataType,e[1].dims.length,b),J=L("Dy",e[0].dataType,e[0].dims.length,c),he=[J,ee];n&&he.push(L("bias",e[2].dataType,[i[de]].length,_));let Z=fe("result",e[0].dataType,i.length,_),Se=()=>{let K="";if(p)c===4?K+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${ee.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?K+=`
          dotProd = dotProd + dot(vec4<${ae}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${ae}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(K+=`
          dotProd = dotProd + dot(vec4<${ae}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${ae}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}, ${ee.getByOffset("w_offset + 2u")}, ${ee.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${s?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):J.get("batch","inputChannel","idyR","idyC")};
        `,c===1)K+=`
          let w_offset = ${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ee.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<c;V++)K+=`
            let wValue${V} = ${ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return K},j=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let K="";if(c===1){K+="dotProd = dotProd";for(let V=0;V<m;V++)K+=`
            + ${J.getByOffset(`x_offset + ${V}`)} * ${ee.getByOffset(`w_offset + ${V}`)}`;K+=";"}else if(c===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);K+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${ee.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},P=`
            let outputIndices = ${Z.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${Z.indicesGet("outputIndices",0)};
            let d1 = ${Z.indicesGet("outputIndices",de)};
            let r = ${Z.indicesGet("outputIndices",oe)};
            let c = ${Z.indicesGet("outputIndices",N)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Z.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ae}(dyRCorner) + ${ae}(wR)) / ${ae}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ae}(uniforms.Dy_shape[${oe}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${ae}(dyCCorner) + ${ae}(wC)) / ${ae}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ae}(uniforms.Dy_shape[${N}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${ee.indicesToOffset(`${ee.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:c}) {
                  ${Se()}
                  inputChannel = inputChannel + ${p?4:c};
                }
                ${j()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${_}]`:""};
            ${Z.setByOffset("global_idx","value")};
          `;return`
    ${W.registerUniforms(Y).declareVariables(...he,Z)}
      ${W.mainStart()}
      ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${P}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${b}${_}${p}${m}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:B}}}),Tp,Ep,Ip,Oa,j0,Cp,Ra,zp,K0,Qx=X(()=>{Yx(),cn(),Ur(),Tp=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,Ep=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},Ip=(e,t,r,n,i,s,a,o,l,u)=>{let c=e.length-2,p=u.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=e[0],m=t[o?3:1]*i;for(let _=0,b=e.length-c-(o?1:0);_<c;++_,++b){let k=e[b],v=p?k*a[_]:u[_],w=Tp(k,a[_],s[_],t[b],r[_],v);Ep(w,n,s,_,_+c),p&&u.push(a[_]*(k-1)+l[_]+(t[b]-1)*r[_]+1-s[_]-s[_+c])}u.splice(0,0,h),u.splice(o?3:1,0,m)},Oa=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let u=e.strides.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}Ip(o,r,l,e.autoPad,e.group,i,u,n,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:u}),c},j0=e=>{let t=hl(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,u=e.wIsConst(),c=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:c,outputShape:p,pads:o,strides:l,wIsConst:u,...t,cacheKey:`${e.format};${t.activation};`}},Cp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ra=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(Mt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(G0(s,r,n),{inputs:s})},zp=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let u=Oa({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);Ra(e,n,u,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},K0=(e,t)=>{if(Cp(e.inputs,t),e.inputs[0].dims.length===3)zp(e,t);else{let r=Oa(t,e.inputs);Ra(e,e.inputs,r)}}}),Ap,X0,Z0,Jx=X(()=>{ve(),ke(),at(),Te(),Ap=(e,t,r,n)=>{let i=D.size(t),s=t.length,a=L("input",e,s),o=fe("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),u=D.normalizeAxis(l,s),c=p=>{let h=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,m=me("uniforms.input_shape","uniforms.axis",s),_=n.reverse?h+(n.exclusive?" + 1":""):"0",b=n.reverse?m:h+(n.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:u},...ge(t,t)]}),getShaderSource:c}},X0=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(Ap(n,r,i,t),{inputs:[0]})},Z0=e=>{let t=e.exclusive===1,r=e.reverse===1;return We({exclusive:t,reverse:r})}}),Op,Rp,Mp,Y0,Q0,e2=X(()=>{ve(),ke(),at(),Te(),Op=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Rp=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Mp=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",u=t.blocksize,c=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=c?[r,n,i,u,u,s/u**2]:[r,n,i,s/u**2,u,u],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[r,u,u,s/u**2,n,i]:[r,s/u**2,u,u,n,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),h=p.dims.length,m=e.dataType,_=L("a",m,h),b=fe("output",m,h),k=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Rp(o,h,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,n*u,i*u,s/u**2]:[r,s/u**2,n*u,i*u],T=D.size(w),x=p.dims,E=D.sortBasedOnPerm(x,o);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ge(x,E)]}},getShaderSource:k}},Y0=(e,t)=>{Op(e.inputs),e.compute(Mp(e.inputs[0],t))},Q0=e=>We({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Wi,Un,Ma,Bp,Np,Dp,Pp,Ba,Up,J0,ey,t2=X(()=>{ve(),ke(),at(),Te(),Wi="[a-zA-Z]|\\.\\.\\.",Un="("+Wi+")+",Ma="^"+Un+"$",Bp="("+Un+",)*"+Un,Np="^"+Bp+"$",Dp=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Pp=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Np)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp(Ma)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,a);this.lhs.push(l)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!n.match(RegExp(Un)))throw new Error("Invalid RHS");(i=n.match(RegExp(Wi,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Ma))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Wi,"g")),u=new Dp(n);return l==null||l.forEach((c,p)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let h=i-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<a.length;m++){let _=String.fromCharCode(48+m);u.addSymbol(_,p+m),this.addSymbol(_,r[o++],n)}}else u.addSymbol(c,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],n)}),u}},Ba=e=>e+"_max",Up=(e,t,r,n)=>{let i=e.map(u=>u.length).map((u,c)=>L(`input${c}`,t,u)),s=D.size(n),a=fe("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(u=>!r.rhs.symbolToIndices.has(u)),l=u=>{let c=[],p="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",_=[],b=[],k=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((x,E)=>{var A;if(r.rhs.symbolToIndices.has(E)){let O=(A=r.rhs.symbolToIndices.get(E))==null?void 0:A[0];O!==void 0&&r.lhs.forEach(($,B)=>{if(x.inputIndices.includes(B)){let W=$.symbolToIndices.get(E);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(Y=>{c.push(`${i[B].indicesSet(`input${B}Indices`,Y,a.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,$)=>{if(x.inputIndices.includes($)){let B=O.symbolToIndices.get(E);if(B===void 0)throw new Error("Invalid symbol error");B.forEach(W=>{_.push(`${i[$].indicesSet(`input${$}Indices`,W,`${E}`)}`)}),v.push(`prod *= ${i[$].getByIndices(`input${$}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ba(E)}; ${E}++) {`),k.push("}")});let T=w?[...c,`let sum = ${i.map((x,E)=>x.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,h,...b,..._,p,...v,m,...k];return`
            ${u.registerUniforms(o.map(x=>({name:`${Ba(x)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((x,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let u=o.filter(p=>r.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=r.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});u.push({type:12,data:s});let c=e.map((p,h)=>[...ge(p)]).reduce((p,h)=>p.concat(h),u);return c.push(...ge(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},J0=(e,t)=>{let r=new Pp(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(Up(i,e.inputs[0].dataType,r,n))},ey=e=>{let t=e.equation.replace(/\s+/g,"");return We({equation:t})}}),Lp,Na,qp,Wp,ty,r2=X(()=>{ve(),ke(),Te(),Lp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Na=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},qp=(e,t)=>e.length>t.length?Na(e,t):Na(t,e),Wp=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=qp(t,r),i=e[0].dataType,s=i===9||D.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(D.size(n)/o),u=p=>{let h=L("input",i,t.length,a),m=fe("output",i,n.length,o),_;if(i===9){let b=(k,v,w="")=>`
          let outputIndices${v} = ${m.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${h.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${k}[${v}] = ${w}(${h.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${h.getByOffset(`inputOffset / ${a}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,m)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...ge(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:u,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},ty=e=>{Lp(e.inputs),e.compute(Wp(e.inputs),{inputs:[0]})}}),Vp,ry,n2=X(()=>{ve(),ke(),Te(),fl(),Vp=e=>{let t=e[0].dataType,r=D.size(e[0].dims),n=D.size(e[1].dims),i=n%4===0,s=a=>{let o=L("x",t,[1],4),l=L("bias",t,[1],4),u=fe("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${l.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,h=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,l,u)}

    ${$o(bt(t))}

    ${a.mainStart(Tn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${u.setByOffset("global_idx",xo("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/Tn/4)}})}},ry=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?$0(e):e.compute(Vp(e.inputs))}}),Hp,Fp,ny,iy,i2=X(()=>{ve(),ke(),at(),Te(),Hp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Fp=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=D.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,u=Math.ceil(D.size(a)/l),c=[{type:12,data:u},{type:6,data:o},{type:12,data:s},...ge(e[0].dims,e[1].dims,a)],p=h=>{let m=L("data",e[0].dataType,e[0].dims.length,l),_=L("inputIndices",e[1].dataType,e[1].dims.length),b=fe("output",e[0].dataType,a.length,l),k=w=>{let T=n.length,x=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let E=0;E<T;E++)x+=`${T>1?`indicesIndices${w}[${E}]`:`indicesIndices${w}`} = ${a.length>1?`outputIndices${w}[uniforms.axis + ${E}]`:`outputIndices${w}`};`;x+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${m.type.indices};
        `;for(let E=0,A=0;E<i;E++)E===s?(x+=`${i>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = u32(idx${w});`,A+=T):(x+=`${i>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = ${a.length>1?`outputIndices${w}[${A}]`:`outputIndices${w}`};`,A++);return x},v;if(e[0].dataType===9){let w=(T,x,E="")=>`
          let outputIndices${x} = ${b.offsetToIndices(`outputOffset + ${x}u`)};
          ${k(x)};
          let offset${x} = ${m.indicesToOffset(`dataIndices${x}`)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${T}[${x}] = ${E}(${m.getByOffset(`index${x}`)}[component${x}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${m.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,b)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},ny=e=>We({axis:e.axis}),iy=(e,t)=>{let r=e.inputs;Hp(r),e.compute(Fp(e.inputs,t))}}),Gp,sy,ay,s2=X(()=>{ve(),ke(),Te(),Gp=(e,t,r,n,i,s,a,o,l)=>{let u=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],c=[s];u.push(...ge(t.dims,c));let p=h=>{let m=L("indices_data",t.dataType,t.dims.length),_=fe("input_slice_offsets_data",12,1,1),b=[m,_],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(k).declareVariables(...b)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},sy=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=D.sizeToDimension(s,s.length-1),l=D.sizeFromDimension(n,t.batchDims+a),u=D.sizeToDimension(n,t.batchDims),c=D.sizeFromDimension(n,t.batchDims),p=o/u,h=new Array(a),m=l;for(let x=0;x<a;++x)h[a-1-x]=m,m*=n[t.batchDims+a-1-x];let _=Gp(e,r[1],h,t.batchDims,n,o,p,c,a),b=t.batchDims+a;if(b>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=s.slice(0,-1).concat(n.slice(b)),v=D.size(k),w=[{type:12,data:v},{type:12,data:l},...ge(r[0].dims,_.dims,k)],T=x=>{let E=L("data",r[0].dataType,r[0].dims.length),A=L("slice_offsets",12,_.dims.length),O=fe("output",r[0].dataType,k.length);return`
          ${x.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,A,O)}
            ${x.mainStart()}
            ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:i}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],_]})},ay=e=>({batchDims:e.batch_dims,cacheKey:""})}),jp,Kp,oy,ly,a2=X(()=>{ve(),ke(),at(),Te(),jp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Kp=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=D.normalizeAxis(t.gatherAxis,i),a=D.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=D.size(o),u=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...ge(...e.map((m,_)=>m.dims),o)],h=m=>{let _=L("data",e[0].dataType,e[0].dims.length),b=L("inputIndices",e[1].dataType,e[1].dims.length),k=L("scales",e[2].dataType,e[2].dims.length),v=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=fe("output",u,o.length),T=[_,b,k];v&&T.push(v);let x=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(x).declareVariables(...T,w)}
        ${m.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${bt(u)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:u}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:h}},oy=(e,t)=>{let r=e.inputs;jp(r,t),e.compute(Kp(e.inputs,t))},ly=e=>We({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Xp,Zp,uy,dy,o2=X(()=>{ve(),ke(),at(),Te(),Xp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Zp=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=D.normalizeAxis(t.axis,i),l=r[o],u=s.slice(0),c=D.size(u),p=L("input",n,i),h=L("indicesInput",a,s.length),m=fe("output",n,u.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return _.push(...ge(r,s,u)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,m)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},uy=e=>We({axis:e.axis}),dy=(e,t)=>{let r=e.inputs;Xp(r),e.compute(Zp(e.inputs,t))}}),Yp,Qp,cy,py,l2=X(()=>{ve(),ke(),Te(),Yp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Qp=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=ug.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,u=Math.ceil(s/l),c=Math.ceil(i/l),p=!0,h=D.size(o),m=[{type:12,data:p?u:h},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...ge(e[2].dims)),_.push("rank")),m.push(...ge(o));let b=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",x=L("a",e[0].dataType,e[0].dims),E=L("b",e[1].dataType,e[1].dims),A=x.type.value,O=null,$=[x,E];e.length===3&&(O=L("c",e[2].dataType,e[2].dims.length),$.push(O));let B=fe("output",e[0].dataType,o.length);$.push(B);let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(W).declareVariables(...$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",B)}; value += ${A}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=v=>{let w=L("a",e[0].dataType,e[0].dims),T=L("b",e[1].dataType,e[1].dims),x=null,E=[w,T];e.length===3&&(x=L("c",e[2].dataType,e[2].dims.length),E.push(x));let A=fe("output",e[0].dataType,o.length);E.push(A);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",B="";t.transA&&t.transB?(B=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(B=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(B=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(B=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let W=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(O).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${B}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${W}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${x.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:u*c},programUniforms:m}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:b}},cy=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},py=(e,t)=>{Yp(e.inputs),e.compute(Qp(e.inputs,t))}}),ir,_r,Fr,Gr,Jp,ef,tf,rf,nf,sf,af,of,fy,hy,u2=X(()=>{ve(),ke(),at(),Te(),[ir,_r,Fr,Gr]=[0,1,2,3],Jp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},ef=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,tf=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,rf=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,nf=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,sf=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ir}] = batch;
     indices[${_r}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Fr}] = u32(r);
            indices[${Gr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Fr}] = u32(clamp(r, 0, H - 1));
          indices[${Gr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Fr}] = gs_reflect(r, border[1], border[3]);
          indices[${Gr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,af=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ir}], indices[${_r}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ir}], indices[${_r}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ir}], indices[${_r}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ir}], indices[${_r}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ir}], indices[${_r}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ir}], indices[${_r}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,of=(e,t)=>{let r=L("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=L("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ir,_r,Fr,Gr]=[0,3,1,2]);let a=fe("output",e[0].dataType,s.length),o=r.type.value,l=D.size(s),u=[{type:12,data:l},...ge(e[0].dims,n,s)],c=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${ef}
  ${tf(o)}
  ${rf(t)}
  ${nf(t)}
  ${sf(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Fr}]);
      let W_in = i32(uniforms.x_shape[${Gr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ir}], indices[${Fr}], indices[${Gr}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${af(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=D.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:u}},getShaderSource:c}},fy=(e,t)=>{Jp(e.inputs),e.compute(of(e.inputs,t))},hy=e=>We({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),xt,lf,my,Da,uf,Xn,gy,yy=X(()=>{ve(),ke(),at(),ul(),pl(),Te(),Ur(),xt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,lf=(e,t)=>{let r=e[0],n=xt(e,1),i=xt(e,2),s=xt(e,3),a=xt(e,4),o=xt(e,5),l=xt(e,6),u=xt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],p=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=p,_=0,b=0,k=Math.floor(h/t.numHeads);if(l&&u&&D.size(l.dims)&&D.size(u.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&D.size(l.dims)||u&&D.size(u.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(n&&D.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,m=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,m=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,m=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&D.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+m,T=0;if(a&&D.size(a.dims)>0){T=8;let O=a.dims;throw O.length===1?O[0]===c?T=1:O[0]===3*c+2&&(T=3):O.length===2&&O[0]===c&&O[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let x=!1,E=h;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],x=!0}}let A=!1;if(a&&D.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:p,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:k,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:A,passPastInKv:x,qkvFormat:v}},my=e=>We({...e}),Da=We({perm:[0,2,1,3]}),uf=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=D.size(o),u=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],c=p=>{let h=fe("qkv_with_bias",t.dataType,o),m=L("qkv",t.dataType,o),_=L("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(b).declareVariables(m,_,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},Xn=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&D.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=uf(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(Mt(l,Da.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(Mt(l,Da.perm),{inputs:[l],outputs:[-1]})[0]},gy=(e,t)=>{let r=lf(e.inputs,t),n=e.inputs[0],i=xt(e.inputs,1),s=xt(e.inputs,2),a=xt(e.inputs,3),o=xt(e.inputs,4),l=xt(e.inputs,5),u=xt(e.inputs,6),c=xt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,h=Xn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(p)return ci(e,h,i,s,o,void 0,u,c,l,r);if(!i||!s)throw new Error("key and value must be provided");let m=Xn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),_=Xn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ci(e,h,m,_,o,void 0,u,c,l,r)}}),df,cf,pf,ff,Io,_y,by,vy=X(()=>{ve(),ke(),at(),Te(),df=e=>{if(!e||e.length<1)throw new Error("too few inputs")},cf=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),We({numOutputs:n,axis:t.axis,splitSizes:r})},pf=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${me("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ff=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Io=(e,t)=>{let r=e[0].dims,n=D.size(r),i=e[0].dataType,s=D.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=L("input",i,r.length),l=new Array(t.numOutputs),u=[],c=[],p=0,h=[{type:12,data:n}];for(let _=0;_<t.numOutputs;_++){p+=t.splitSizes[_],l[_]=p;let b=r.slice();b[s]=t.splitSizes[_],c.push(b),a[_]=fe(`output${_}`,i,b.length),u.push({dims:c[_],dataType:e[0].dataType})}h.push({type:12,data:l},...ge(r,...c));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${pf(l.length)}
  ${ff(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${me("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:u,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h})}},_y=(e,t)=>{df(e.inputs);let r=e.inputs.length===1?t:cf(e.inputs,t);e.compute(Io(e.inputs,r),{inputs:[0]})},by=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return We({axis:t,numOutputs:n,splitSizes:r})}}),hf,ds,wy,$y=X(()=>{ve(),ke(),at(),Te(),hf=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!D.areEqual(n.dims,[])&&!D.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!D.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],u=r.dims[r.dims.length-2],c=i.dims[0],p=D.sizeFromDimension(r.dims,1)/u,h=o===0?i.dims[1]*2:p/a;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(u!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(u>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},ds=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],u=o/l,c=e[2].dims[1],p=i===0?c*2:u/n,h=new Array(a,l,u/p,p-c),m=D.computeStrides(h),_=[{type:1,data:s},{type:12,data:h},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,u,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,l*p,1]}):[],...ge(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=k=>{let v=L("input",e[0].dataType,e[0].dims.length),w=L("position_ids",e[1].dataType,e[1].dims.length),T=L("cos_cache",e[2].dataType,e[2].dims.length),x=L("sin_cache",e[3].dataType,e[3].dims.length),E=fe("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${k.declareVariables(v,w,T,x,E)}

        ${k.mainStart(Tn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",fe("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:We({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(h)/Tn)},programUniforms:_})}},wy=(e,t)=>{hf(e.inputs,t),e.compute(ds(e.inputs,t))}}),mf,gf,Pa,yf,xy,d2=X(()=>{at(),ve(),pl(),yy(),vy(),Ur(),$y(),Te(),mf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],u=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=u,h=0,m=!n||n.dims.length===0,_=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=_*t.numHeads);let b=s&&s.dims.length!==0,k=a&&a.dims.length!==0;if(b&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&k){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=s.dims[2]}else if(b||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,T=!1,x=t.kvNumHeads?_*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');x=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');x=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let A=E.dims.reduce((O,$)=>O*$,1);if(A!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${A}.`);for(let O=0;O<E.dims.length;O++)if(E.dims[O]!==1&&E.dims[O]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${O}] = ${E.dims[O]}.`)}return{batchSize:l,sequenceLength:u,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:x,headSize:_,vHeadSize:Math.floor(x/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},gf=We({perm:[0,2,1,3]}),Pa=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(Mt(n,gf.perm),{inputs:[n],outputs:[-1]})[0]),n},yf=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],u=c=>{let p=L("seq_lens",r.dataType,r.dims),h=L("total_seq_lens",n.dataType,n.dims),m=fe("pos_ids",i,a),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(p,h,m)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${m.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:u}},xy=(e,t)=>{var x;let r=mf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((x=e.inputs[1])==null?void 0:x.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,u=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=We({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,m,_]=!i&&!s?e.compute(Io([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],b,k;if(t.doRotary){let E=e.compute(yf(r.batchSize,r.sequenceLength,l,u),{inputs:[l,u],outputs:[-1]})[0],A=e.inputs[7],O=e.inputs[8],$=We({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),B=[h,E,A,O],W=[-1];b=e.compute(ds(B,$),{inputs:B,outputs:W})[0],B.splice(0,1,m);let Y=We({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(ds(B,Y),{inputs:B,outputs:W})[0]}let v=Xn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:h,void 0,0),w=Pa(e,t.doRotary?k:m,r),T=Pa(e,_,r);ci(e,v,w,T,void 0,void 0,a,o,void 0,r,l,u)}}),Ua,_f,bf,Sy,c2=X(()=>{ve(),ke(),Ur(),Te(),Ua=(e,t,r,n,i,s,a,o)=>{let l=it(s),u=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,p=i*a,h=64;p===1&&(h=256);let m=[i,a,s/l],_=[i,a,2],b=["rank","type","type"],k=[];k.push(...ge(m,_));let v=w=>{let T=L("x",t.dataType,3,l),x=L("scale",r.dataType,r.dims),E=L("bias",n.dataType,n.dims),A=fe("output",1,3,2),O=[T,x,E,A];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...O)}
  ${w.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${u}(0);
    var squared_sum = ${u}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${u}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Pr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Pr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:p},programUniforms:k}),getShaderSource:v},{inputs:[t,r,n],outputs:[-1]})[0]},_f=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=D.sizeFromDimension(n,s),u=it(l),c=D.size(i)/u,p=Ua(e,t[0],t[1],t[2],a,l,o,r.epsilon),h=[a,o,l/u],m=[a,o],_=["type","none"],b=k=>{let v=L("x",t[0].dataType,h.length,u),w=L("scale_shift",1,m.length,2),T=fe("output",t[0].dataType,h.length,u),x=[v,w,T];return`
  ${k.registerUniform("output_size","u32").declareVariables(...x)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ge(h,m,h)]}),getShaderSource:b},{inputs:[t[0],p]})},bf=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=D.sizeFromDimension(n,1)/a,l=it(a),u=D.size(i)/l,c=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],p=["type","type"],h=!1,m=[0,n.length-1];for(let v=0;v<n.length-2;v++)h=h||n[v+1]!==1,m.push(v+1);h=h&&n[n.length-1]!==1;let _=h?e.compute(Mt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(v,w)=>n[m[w]])),b=Ua(e,_,t[1],t[2],s,o,a,r.epsilon),k=v=>{let w=ct(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,x=O=>{let $=O===0?"x":"y",B=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${B}(scale.${$}))`;case 2:return`vec2<${w}>(${B}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${B}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=L("input",t[0].dataType,t[0].dims,l),A=fe("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${x(0)}, ${x(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:k},{inputs:[t[0],b]})},Sy=(e,t)=>{t.format==="NHWC"?bf(e,e.inputs,t):_f(e,e.inputs,t)}}),vf,wf,ky,p2=X(()=>{ve(),ke(),Te(),vf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},wf=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=D.normalizeAxis(t.axis,i.length),u=D.sizeToDimension(i,l),c=D.sizeFromDimension(i,l),p=D.size(s.dims),h=a?D.size(a.dims):0;if(p!==c||a&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let m=[];for(let E=0;E<i.length;++E)E<l?m.push(i[E]):m.push(1);let _=it(c),b=["type","type"],k=[{type:12,data:u},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];a&&b.push("type");let v=r>1,w=r>2,T=E=>{let A=ct(e[0].dataType),O=[L("x",e[0].dataType,e[0].dims,_),L("scale",s.dataType,s.dims,_)];a&&O.push(L("bias",a.dataType,a.dims,_)),O.push(fe("output",e[0].dataType,o,_)),v&&O.push(fe("mean_data_output",1,m)),w&&O.push(fe("inv_std_output",1,m));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms($).declareVariables(...O)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${bo("f32",_)};
    var mean_square_vector = ${bo("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${yn(A,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Pr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Pr("mean_square_vector",_)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${yn(A,_,"x[j + offset]")};
      let f32scale = ${yn(A,_,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${yn(A,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},x=[{dims:o,dataType:e[0].dataType}];return v&&x.push({dims:m,dataType:1}),w&&x.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${n}`,inputDependencies:b},getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(u/64)},programUniforms:k}),getShaderSource:T}},ky=(e,t)=>{vf(e.inputs),e.compute(wf(e.inputs,t,e.outputCount))}}),$f,Ty,f2=X(()=>{ke(),yl(),_l(),$f=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Ty=e=>{$f(e.inputs);let t=kn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(gl(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=D.size(e.inputs[0].dims.slice(0,-2)),a=D.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),u=[1,s,r],c=[o,l];e.compute(us(c,{activation:""},t,u),{inputs:c})}else e.compute(us(e.inputs,{activation:""},t))}}}),xf,Sf,kf,Ey,Iy,h2=X(()=>{ve(),ke(),at(),Te(),xf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!D.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,u=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(l)!==u)throw new Error("zeroPoints input size error.")}},Sf=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=D.size(o),u=e[1].dims[2]/4,c=e[0].dataType,p=it(t.k),h=it(u),m=it(a),_=o.concat([i,a]),b=i>1&&a/m%2===0?2:1,k=D.size(_)/m/b,v=64,w=[],T=[l,i,s/p],x=D.convertShape(e[1].dims).slice();x.splice(-1,1,u/h),w.push(...ge(T)),w.push(...ge(x)),w.push(...ge(e[2].dims)),e.length===4&&w.push(...ge(D.convertShape(e[3].dims)));let E=[l,i,a/m];w.push(...ge(E));let A=O=>{let $=T.length,B=L("a",e[0].dataType,$,p),W=L("b",12,x.length,h),Y=L("scales",e[2].dataType,e[2].dims.length),ae=[B,W,Y],oe=e.length===4?L("zero_points",12,e[3].dims.length):void 0;oe&&ae.push(oe);let N=E.length,de=fe("output",e[0].dataType,N,m),ee=ct(e[0].dataType),J=(()=>{switch(p){case 1:return`array<${ee}, 8>`;case 2:return`mat4x2<${ee}>`;case 4:return`mat2x4<${ee}>`;default:throw new Error(`${p}-component is not supported.`)}})(),he=Math.floor(32/t.bits),Z=Math.floor(he/8),Se=()=>{let K="";for(let V=0;V<Z;V++){let $e=V*t.bits*4,Ne=$e+t.bits;K+=`
          // reuse a data (pass ${V})
            var input_offset${V>0?V:""} = ${V===0?B.indicesToOffset(`${B.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${V>0?V:""}: ${J};
            for (var j${V>0?V:""}: u32 = 0; j${V>0?V:""} < ${8/p}; j${V>0?V:""}++) {
              a_data${V>0?V:""}[j${V>0?V:""}] = ${B.getByOffset(`input_offset${V>0?V:""}`)};
              input_offset${V>0?V:""}++;
            }
          `;for(let Le=0;Le<m*b;Le++)K+=`
            b_value = ${h===1?`b${Le}_data`:`b${Le}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${V*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${$e}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ne}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Q,le)=>`${ee}(b_value_lower[${le}]), ${ee}(b_value_upper[${le}])`).join(", ")});
            b_dequantized_values = ${p===1?`${J}(${Array.from({length:8},(Q,le)=>`(b_quantized_values[${le}] - ${oe?`zero_point${Le}`:"zero_point"}) * scale${Le}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${oe?`zero_point${Le}`:"zero_point"}`).join(",")})) * scale${Le};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Le/m)}]${m>1?`[${Le%m}]`:""} += ${Array.from({length:8/p},(Q,le)=>`${p===1?`a_data${V>0?V:""}[${le}] * b_dequantized_values[${le}]`:`dot(a_data${V>0?V:""}[${le}], b_dequantized_values[${le}])`}`).join(" + ")};
          `}return K},j=()=>{let K=`
            var col_index = col * ${m};
            ${oe?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ee}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let V=0;V<m*b;V++)K+=`
            let scale${V} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${oe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${oe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${ee}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return K},P=()=>{let K=`col_index = col * ${m};`;for(let V=0;V<m*b;V++)K+=`
            let b${V}_data = ${W.getByIndices(`${W.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return K+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,K};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${b*v}>;
        ${O.declareVariables(...ae,de)}
        ${O.mainStart([v,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${j()}
            for (var word: u32 = 0; word < ${u}; word += ${h}) {
              ${P()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${Se()}
                word_offset += ${he/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${m};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:k},programUniforms:w}),getShaderSource:A}},kf=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=D.size(o),u=e[1].dims[2]/4,c=e[0].dataType,p=it(t.k),h=it(u),m=o.concat([i,a]),_=128,b=a%8===0?8:a%4===0?4:1,k=_/b,v=Math.floor(32/t.bits),w=k*h*v,T=w/p,x=w/t.blockSize,E=D.size(m)/b,A=[],O=[l,i,s/p],$=D.convertShape(e[1].dims).slice();$.splice(-1,1,u/h),A.push(...ge(O)),A.push(...ge($)),A.push(...ge(e[2].dims)),e.length===4&&A.push(...ge(D.convertShape(e[3].dims)));let B=[l,i,a];A.push(...ge(B));let W=Y=>{let ae=O.length,oe=L("a",e[0].dataType,ae,p),N=L("b",12,$.length,h),de=L("scales",e[2].dataType,e[2].dims.length),ee=[oe,N,de],J=e.length===4?L("zero_points",12,e[3].dims.length):void 0;J&&ee.push(J);let he=B.length,Z=fe("output",e[0].dataType,he),Se=ct(e[0].dataType),j=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${oe.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${Z.type.value}, ${k}>, ${b}>;
        ${Y.declareVariables(...ee,Z)}
        ${Y.mainStart([k,b,1])}
          let output_indices = ${Z.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${x} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${oe.getByIndices(`${oe.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${oe.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${x} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Se}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Se}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${de.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${N.getByIndices(`${N.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let P=Math.floor(v/8),K="";for(let V=0;V<P;V++){let $e=V*t.bits*4,Ne=$e+t.bits;K+=`
              ${j()}
              {${t.bits===2?`
                let half_word = b_value >> ${V*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${$e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ne}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Se}>(${Array.from({length:4},(Le,Q)=>`${Se}(b_value_lower[${Q}]), ${Se}(b_value_upper[${Q}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Se}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Le,Q)=>`${`dot(a_data${Q}, b_dequantized_values[${Q}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return K})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${k};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:E},programUniforms:A}),getShaderSource:W}},Ey=(e,t)=>{xf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(kf(e.inputs,t)):e.compute(Sf(e.inputs,t))},Iy=e=>We(e)}),Tf,Ef,If,Cf,zf,Af,Of,Rf,Cy,m2=X(()=>{ve(),ke(),Te(),Tf=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ef=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${me("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${me("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${me("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},If=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${me("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${me("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${me("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${me("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Cf=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${me("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${me("uniforms.x_shape",i,t)})) {
                  k = i32(${me("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${me("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},zf=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${me("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${me("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${me("uniforms.x_shape",i,t)})) {
                  k -= i32(${me("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${me("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Af=(e,t,r)=>{switch(r.mode){case 0:return Ef(e,t,r.pads.length);case 1:return If(e,t,r.pads.length);case 2:return Cf(e,t,r.pads.length);case 3:return zf(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Of=(e,t)=>{let r=D.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=D.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...ge(e[0].dims,r));let o=["rank"],l=u=>{let c=fe("output",e[0].dataType,r.length),p=L("x",e[0].dataType,n.length),h=p.type.value,m=Af(c,n.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:a?h:"f32"}),`
            ${u.registerUniforms(_).declareVariables(p,c)}
            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(r)/64)},programUniforms:s}),getShaderSource:l}},Rf=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},Cy=(e,t)=>{Tf(e.inputs);let r=Rf(e.inputs,t);e.compute(Of(e.inputs,r),{inputs:[0]})}}),Ln,La,qa,Wa,Va,Mf,Bf,Ha,Fa,zy,Ay,Ga,Oy,Ry,ja,My,By,Ny,Dy,g2=X(()=>{Lt(),ve(),ke(),Te(),Ln=e=>{if(Je.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},La=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],u=t.pads.slice();os.adjustPoolAttributes(r,i,a,o,l,u);let c=os.computePoolOutputShape(r,i,o,l,a,u,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:u,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:u,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[p,n?h:c]},qa=(e,t)=>{let r=t.format==="NHWC",n=D.size(e),i=D.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],u=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],p=!!(u+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];h=!!(b+k),s.push({type:12,data:m},{type:12,data:_},{type:12,data:b},{type:12,data:k}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((u,c)=>u+c);return[s,a,!!l,!1,!1]}},Wa=(e,t,r,n,i,s,a,o,l,u,c,p)=>{let h=i.format==="NHWC",m=t.type.value,_=fe("output",t.type.tensor,n);if(i.kernelShape.length<=2){let b="",k="",v="",w=r-(h?2:1);if(c?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let T=r-(h?3:2);p?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${k}
              ${b}
              ${v}
              ${a}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=i.kernelShape.length,k=i.pads.length,v="";return u?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${me("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${me("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${me("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${me("uniforms.pads","j - 2u",k)};
                  ${v}
              }
              ${a}

              output[global_idx] = value;
            }`}},Va=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Mf=e=>`${Va(e)};${e.countIncludePad}`,Bf=e=>`${Va(e)};${e.storageOrder};${e.dilations}`,Ha=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Fa=(e,t,r,n)=>{let[i,s]=La(t,n,r),a=L("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",u="";i.countIncludePad?u+=`value /= ${o}(uniforms.kernelSize);`:u+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,p,h,m,_]=qa(s,i);c.push(...ge(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${h};${m};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:k=>Wa(k,a,t.dims.length,s.length,i,l,u,0,p,h,m,_)}},zy=e=>{let t=e.count_include_pad!==0,r=Ha(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Mf(n)}},Ay=(e,t)=>{Ln(e.inputs),e.compute(Fa("AveragePool",e.inputs[0],!1,t))},Ga={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Oy=e=>{let t=e.format;return{format:t,...Ga,cacheKey:t}},Ry=(e,t)=>{Ln(e.inputs),e.compute(Fa("GlobalAveragePool",e.inputs[0],!0,t))},ja=(e,t,r,n)=>{let[i,s]=La(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=L("x",t.dataType,t.dims.length),u=["rank"],[c,p,h,m,_]=qa(s,i);return c.push(...ge(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${h};${m};${_}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:b=>Wa(b,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,h,m,_)}},My=(e,t)=>{Ln(e.inputs),e.compute(ja("MaxPool",e.inputs[0],!1,t))},By=e=>{let t=e.storage_order,r=e.dilations,n=Ha(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Bf(i)}},Ny=e=>{let t=e.format;return{format:t,...Ga,cacheKey:t}},Dy=(e,t)=>{Ln(e.inputs),e.compute(ja("GlobalMaxPool",e.inputs[0],!0,t))}}),Nf,Df,Py,Uy,y2=X(()=>{ve(),ke(),at(),Te(),Nf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Df=(e,t)=>{let r=D.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=D.size(s),l=n===3||n===2,u=l?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,p=e.length>2?e[2]:void 0,h=p?l?[Math.ceil(D.size(p.dims)/4)]:p.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,_=m===!1&&c.length===1,b=it(o),k=m&&(!l||b===4),v=k?b:1,w=k&&!l?b:1,T=L("input",l?12:n,u.length,w),x=L("scale",a,c.length),E=p?L("zero_point",l?12:n,h.length):void 0,A=fe("output",a,s.length,v),O=[T,x];E&&O.push(E);let $=[u,c];p&&$.push(h);let B=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...ge(...$,s)],W=Y=>{let ae=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(ae).declareVariables(...O,A)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${x.getByOffset("0")}`:_?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${x.getByOffset("scale_index")};`:`
            var scale_indices: ${x.type.indices} = output_indices;
            let index = ${x.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${x.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${x.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?m?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${x.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:B})}},Py=(e,t)=>{Nf(e.inputs,t),e.compute(Df(e.inputs,t))},Uy=e=>We({axis:e.axis,blockSize:e.blockSize})}),Pf,Uf,Ly,_2=X(()=>{Lt(),ve(),Te(),Pf=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},Uf=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...ge(s)],l=u=>{let c=fe("output",n,s.length),p=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${u.registerUniforms(h).declareVariables(c)}
        ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},Ly=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Je.webgpu.validateInputContent&&Pf(t,r,n),e.compute(Uf(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),Lf,qf,qy,Wy,b2=X(()=>{ve(),ke(),at(),Te(),Lf=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${s}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},qf=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(D.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=D.sizeFromDimension(r,o),u=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...ge(e[1].dims,e[2].dims,i)],c=p=>{let h=L("indices",e[1].dataType,e[1].dims.length),m=L("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?gg("output",e[0].dataType,i.length):fe("output",e[0].dataType,i.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,m,_)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Lf(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u}),getShaderSource:c}},qy=e=>We({reduction:e.reduction}),Wy=(e,t)=>{e.compute(qf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Wf,Vf,Hf,Ka,Ff,Gf,jf,Kf,Xf,Zf,Yf,Qf,Xa,Jf,eh,th,rh,nh,Vy,Hy,v2=X(()=>{ve(),ke(),at(),Te(),Wf=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Vf=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},Hf=(e,t,r,n,i,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],u=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>n.push(c)),n.length!==0&&n.length!==u&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Wf(n,t),t.axes.length>0&&Vf(n,t.axes,u).forEach((c,p)=>n[p]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==u&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>u)throw new Error("Resize requires only of scales or sizes to be specified")},Ka=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,Ff=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ka("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ka("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Gf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",jf=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},Kf=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},Xf=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},Zf=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${me("uniforms.scales","i",n)};
        var roi_low = ${me("uniforms.roi","i",i)};
        var roi_hi = ${me("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${me("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${me("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Yf=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${me("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${me("uniforms.roi","i",s)};
          var roi_hi = ${me("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${me("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${me("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Qf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${me("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Xa=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Jf=(e,t,r,n,i)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Xa(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${u} = originalIndices[${a}];
      var col:${u} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${u} = getInputValue(batch, channel, row1, col1);
      var x12: ${u} = getInputValue(batch, channel, row1, col2);
      var x21: ${u} = getInputValue(batch, channel, row2, col1);
      var x22: ${u} = getInputValue(batch, channel, row2, col2);
      var dx1: ${u} = abs(row - ${u}(row1));
      var dx2: ${u} = abs(${u}(row2) - row);
      var dy1: ${u} = abs(col - ${u}(col1));
      var dy2: ${u} = abs(${u}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},eh=(e,t,r,n,i,s,a,o,l,u)=>{let c=r.length===2,[p,h]=c?[0,1]:[2,3],m=e.type.value,_=b=>{let k=b===p?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[b]},
        ${n[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${m} = originalIdx + ${m}(i);
          if (${k} < 0 || ${k} >= ${r[b]}) {
            ${u?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${k} = max(0, min(${k}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${k})`)};
          data[i + 1] = ${b===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(p)};
    ${_(h)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},th=(e,t,r,n,i)=>{let[s,a,o,l,u]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Xa(e,u,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${n?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},rh=(e,t,r,n,i,s)=>{let a=e.dims,o=jf(s,t.axes,a.length),l=Kf(a,n,i,t.axes),u=n.slice();n.length===0&&(u=a.map((w,T)=>w===0?1:l[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Xf(a,u,t)));let c=fe("output",e.dataType,l.length),p=L("input",e.dataType,a.length),h=D.size(l),m=a.length===l.length&&a.every((w,T)=>w===l[T]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,k=p.type.value,v=w=>`
      ${m?"":`
      ${Ff(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Qf(p,a)};
              ${Gf(t.nearestMode,r,k)};
              ${Yf(p,c,a,l,u.length,o.length,_)};
              `;case"linear":return`
              ${Zf(c,a,l,u.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Jf(p,c,a,_,b)}`;if(a.length===3||a.length===5)return`${th(p,c,a,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${eh(p,c,a,l,u,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",u.length).registerUniform("roi","f32",o.length).declareVariables(p,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${u.length>0?t.mode==="cubic"?u:u.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:u},{type:1,data:o},...ge(a,l)]})}},nh=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Vy=(e,t)=>{let r=[],n=[],i=[],s=nh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Hf(e.inputs,t,s,r,n,i),e.compute(rh(e.inputs[0],t,s,r,n,i),{inputs:[0]})},Hy=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,u=e.nearestMode===""?"simple":e.nearestMode;return We({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:u})}}),ih,sh,Fy,w2=X(()=>{ve(),ke(),Te(),ih=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},sh=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=D.size(s),o=s,l=a,u=s.slice(-1)[0],c=n?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,h=e.length>4,m=n&&r>1,_=n&&r>2,b=r>3,k=64,v=it(u),w=[{type:12,data:l},{type:12,data:v},{type:12,data:u},{type:1,data:t.epsilon}],T=E=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[L("x",e[0].dataType,e[0].dims,v),L("skip",e[1].dataType,e[1].dims,v),L("gamma",e[2].dataType,e[2].dims,v)];p&&O.push(L("beta",e[3].dataType,e[3].dims,v)),h&&O.push(L("bias",e[4].dataType,e[4].dims,v)),O.push(fe("output",e[0].dataType,o,v)),m&&O.push(fe("mean_output",1,c)),_&&O.push(fe("inv_std_output",1,c)),b&&O.push(fe("input_skip_bias_sum",e[0].dataType,o,v));let $=ct(e[0].dataType),B=ct(1,v);return`

      ${E.registerUniforms(A).declareVariables(...O)}
      var<workgroup> sum_shared : array<${B}, ${k}>;
      var<workgroup> sum_squared_shared : array<${B}, ${k}>;

      ${E.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${yn($,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Pr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Pr("square_sum",v)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},x=[{dims:o,dataType:e[0].dataType}];return r>1&&x.push({dims:c,dataType:1}),r>2&&x.push({dims:c,dataType:1}),r>3&&x.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${m};${_};${b}`,inputDependencies:e.map((E,A)=>"type")},getShaderSource:T,getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(l/u)},programUniforms:w})}},Fy=(e,t)=>{ih(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(sh(e.inputs,t,e.outputCount,!1),{outputs:r})}}),ah,qn,oh,Za,lh,uh,Gy,jy,$2=X(()=>{ve(),ke(),at(),Te(),ah=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},qn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},oh=(e,t)=>{if(e.length>1){let r=qn(e,1),n=qn(e,2),i=qn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),We({starts:r,ends:n,axes:i})}else return t},Za=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},lh=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${me("uniforms.input_shape","i",r.length)};
            let steps_i = ${me("uniforms.steps","i",r.length)};
            let signs_i = ${me("uniforms.signs","i",r.length)};
            let starts_i = ${me("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,uh=(e,t)=>{let r=e[0].dims,n=D.size(r),i=t.axes.length>0?D.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=qn(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((v,w)=>Za(v,w,r,i,s)),o=t.ends.map((v,w)=>Za(v,w,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let v=0;v<r.length;++v)i.includes(v)||(a.splice(v,0,0),o.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,w,T)=>{if(v<0){let x=(o[w]-a[w])/v,E=a[w],A=E+x*s[w];a[w]=A,o[w]=E,T[w]=-v}});let u=r.slice(0);i.forEach((v,w)=>{u[v]=Math.ceil((o[v]-a[v])/s[v])});let c={dims:u,dataType:e[0].dataType},p=fe("output",e[0].dataType,u.length),h=L("input",e[0].dataType,e[0].dims.length),m=D.size(u),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:m},{type:12,data:a},{type:6,data:l},{type:12,data:s},...ge(e[0].dims,u)],k=v=>`
      ${v.registerUniforms(_).declareVariables(h,p)}
        ${lh(h,p,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:b})}},Gy=(e,t)=>{ah(e.inputs,t);let r=oh(e.inputs,t);e.compute(uh(e.inputs,r),{inputs:[0]})},jy=e=>{let t=e.starts,r=e.ends,n=e.axes;return We({starts:t,ends:r,axes:n})}}),dh,ch,Ky,Xy,x2=X(()=>{ve(),ke(),at(),Ur(),Te(),dh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ch=(e,t)=>{let r=e.inputs[0],n=r.dims,i=D.size(n),s=n.length,a=D.normalizeAxis(t.axis,s),o=a<n.length-1,l,u=[];o?(u=Array.from({length:s},(O,$)=>$),u[a]=s-1,u[s-1]=a,l=e.compute(Mt(r,u),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,p=c[s-1],h=i/p,m=it(p),_=p/m,b=64;h===1&&(b=256);let k=(O,$)=>$===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:$===2?`max(${O}.x, ${O}.y)`:$===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,v=L("x",l.dataType,l.dims,m),w=fe("result",l.dataType,l.dims,m),T=v.type.value,x=ct(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=O=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${O.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${x}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${k("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${Pr("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${m};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Mt(A,u),{inputs:[A]})},Ky=(e,t)=>{dh(e.inputs),ch(e,t)},Xy=e=>We({axis:e.axis})}),Ya,ph,fh,hh,Zy,S2=X(()=>{ve(),ke(),Te(),Ya=e=>Array.from(e.getBigInt64Array(),Number),ph=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ya(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},fh=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},hh=(e,t)=>{let r=e[0].dims,n=t??Ya(e[1]),i=fh(r,n),s=D.size(i),a=e[0].dataType,o=L("input",a,r.length),l=fe("output",a,i.length),u=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ge(e[0].dims,i)]}),getShaderSource:u}},Zy=e=>{ph(e.inputs),e.compute(hh(e.inputs),{inputs:[0]})}}),mh,gh,Yy,k2=X(()=>{ve(),ke(),Te(),mh=(e,t,r,n,i)=>{let s=fe("output_data",i,r.length,4),a=L("a_data",t[1].dataType,t[1].dims.length,4),o=L("b_data",t[2].dataType,t[2].dims.length,4),l=L("c_data",t[0].dataType,t[0].dims.length,4),u,c=(p,h,m)=>`select(${h}, ${p}, ${m})`;if(!n)u=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(h,m,_="")=>{let b=`a_data[index_a${m}][component_a${m}]`,k=`b_data[index_b${m}][component_b${m}]`,v=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${s.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${a.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_c${m} = ${l.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${h}[${m}] = ${_}(${c(b,k,v)});
          `};i===9?u=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:u=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${u}
      }`},gh=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(D.areEqual(t,r)&&D.areEqual(r,n)),a=t,o=D.size(t);if(s){let u=kn.calcShape(kn.calcShape(t,r,!1),n,!1);if(!u)throw new Error("Can't perform where op on the given tensors");a=u,o=D.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:u=>mh(u,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ge(n,t,r,a)]})}},Yy=e=>{e.compute(gh(e.inputs))}}),Qy,T2=X(()=>{Lx(),pl(),qx(),Wx(),Vx(),Hx(),Fx(),Zx(),Qx(),Jx(),e2(),t2(),r2(),n2(),i2(),s2(),a2(),o2(),l2(),u2(),d2(),c2(),p2(),f2(),h2(),yy(),m2(),g2(),y2(),_2(),b2(),cl(),v2(),$y(),w2(),$2(),x2(),vy(),S2(),Ur(),fl(),k2(),Qy=new Map([["Abs",[Fg]],["Acos",[Gg]],["Acosh",[jg]],["Add",[E0]],["ArgMax",[qg,wo]],["ArgMin",[Lg,wo]],["Asin",[Kg]],["Asinh",[Xg]],["Atan",[Zg]],["Atanh",[Yg]],["Attention",[Wg]],["AveragePool",[Ay,zy]],["BatchNormalization",[Vg]],["BiasAdd",[Hg]],["BiasSplitGelu",[T0]],["Cast",[Jg,Qg]],["Ceil",[t0]],["Clip",[e0]],["Concat",[D0,P0]],["Conv",[Eo,To]],["ConvTranspose",[K0,j0]],["Cos",[r0]],["Cosh",[n0]],["CumSum",[X0,Z0]],["DepthToSpace",[Y0,Q0]],["DequantizeLinear",[Py,Uy]],["Div",[I0]],["Einsum",[J0,ey]],["Elu",[i0,Kn]],["Equal",[C0]],["Erf",[s0]],["Exp",[a0]],["Expand",[ty]],["FastGelu",[ry]],["Floor",[o0]],["FusedConv",[Eo,To]],["Gather",[iy,ny]],["GatherElements",[dy,uy]],["GatherBlockQuantized",[oy,ly]],["GatherND",[sy,ay]],["Gelu",[l0]],["Gemm",[py,cy]],["GlobalAveragePool",[Ry,Oy]],["GlobalMaxPool",[Dy,Ny]],["Greater",[R0]],["GreaterOrEqual",[B0]],["GridSample",[fy,hy]],["GroupQueryAttention",[xy]],["HardSigmoid",[g0,m0]],["InstanceNormalization",[Sy]],["LayerNormalization",[ky]],["LeakyRelu",[u0,Kn]],["Less",[M0]],["LessOrEqual",[N0]],["Log",[S0]],["MatMul",[Ty]],["MatMulNBits",[Ey,Iy]],["MaxPool",[My,By]],["Mul",[z0]],["MultiHeadAttention",[gy,my]],["Neg",[c0]],["Not",[d0]],["Pad",[Cy]],["Pow",[A0]],["QuickGelu",[k0,Kn]],["Range",[Ly]],["Reciprocal",[p0]],["ReduceMin",[Bg]],["ReduceMean",[zg]],["ReduceMax",[Mg]],["ReduceSum",[Dg]],["ReduceProd",[Ng]],["ReduceL1",[Ag]],["ReduceL2",[Og]],["ReduceLogSum",[Ug]],["ReduceLogSumExp",[Rg]],["ReduceSumSquare",[Pg]],["Relu",[f0]],["Resize",[Vy,Hy]],["RotaryEmbedding",[wy]],["ScatterND",[Wy,qy]],["Sigmoid",[h0]],["Sin",[y0]],["Sinh",[_0]],["Slice",[Gy,jy]],["SkipLayerNormalization",[Fy]],["Split",[_y,by]],["Sqrt",[b0]],["Softmax",[Ky,Xy]],["Sub",[O0]],["Tan",[v0]],["Tanh",[w0]],["ThresholdedRelu",[x0,Kn]],["Tile",[Zy]],["Transpose",[_g,bg]],["Where",[Yy]]])}),Jy,E2=X(()=>{Lt(),Er(),Te(),Jy=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){hr(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let u of t)o.push({binding:o.length,resource:{buffer:u.buffer}});for(let u of r)o.push({binding:o.length,resource:{buffer:u.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let u={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(u)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Yt(e.programInfo.name)}dispose(){}build(e,t){hr(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(u=>{r.features.has(u.feature)&&n.push(`enable ${u.extension};`)});let i=yg(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});Be("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Yt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),e_={};En(e_,{WebGpuBackend:()=>t_});var yh,_h,bh,t_,I2=X(()=>{Lt(),ve(),Er(),pg(),Px(),T2(),E2(),yh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},_h=(e,t,r)=>{var i,s;let n=e.name;return(i=e.shaderCache)!=null&&i.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${yh(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,n},bh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},t_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=s=>t.features.has(s)&&r.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new bh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=mg(this),this.programManager=new Jy(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ol(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;hr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=r[i],a=s.kernelId,o=this.kernels.get(a),l=o.kernelType,u=o.kernelName,c=s.programName,p=s.inputTensorViews,h=s.outputTensorViews,m=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let b=Number(m-this.queryTimeBase),k=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(k))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(v=>({dims:v.dims,dataType:$r(v.dataType)})),outputsMetadata:h.map(v=>({dims:v.dims,dataType:$r(v.dataType)})),kernelId:a,kernelType:l,kernelName:u,programName:c,startTime:b,endTime:k});else{let v="";p.forEach((T,x)=>{v+=`input[${x}]: [${T.dims}] | ${$r(T.dataType)}, `});let w="";h.forEach((T,x)=>{w+=`output[${x}]: [${T.dims}] | ${$r(T.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${u}|${c}" ${v}${w}start time: ${b} ns, execution time: ${k-b} ns`)}is("GPU",`${c}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Yt()}run(e,t,r,n,i,s){hr(e.name);let a=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let x=this.gpuDataManager.get(T);if(!x)throw new Error(`no GPU data for input: ${T}`);a.push(x)}let{outputs:o,dispatchGroup:l,programUniforms:u}=e.getRunData(t),c=r.length===0?o.map((w,T)=>T):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let p=[],h=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=s)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let T=c[w]===-1,x=c[w]===-2,E=T||x?i(o[w].dataType,o[w].dims):n(c[w],o[w].dataType,o[w].dims);if(p.push(E),E.data===0)continue;let A=this.gpuDataManager.get(E.data);if(!A)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(A),x){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(A)}h.push(A)}if(a.length!==t.length||h.length!==p.length){if(h.length===0)return Yt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(u){let w=0,T=[];u.forEach(O=>{let $=typeof O.data=="number"?[O.data]:O.data;if($.length===0)return;let B=O.type===10?2:4,W,Y;O.type===10?(Y=$.length>4?16:$.length>2?8:$.length*B,W=$.length>4?16:B*$.length):(Y=$.length<=2?$.length*B:16,W=16),w=Math.ceil(w/Y)*Y,T.push(w);let ae=O.type===10?8:4;w+=$.length>4?Math.ceil($.length/ae)*W:$.length*B});let x=16;w=Math.ceil(w/x)*x;let E=new ArrayBuffer(w);u.forEach((O,$)=>{let B=T[$],W=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(E,B,W.length).set(W);else if(O.type===12)new Uint32Array(E,B,W.length).set(W);else if(O.type===10)new Uint16Array(E,B,W.length).set(W);else if(O.type===1)new Float32Array(E,B,W.length).set(W);else throw new Error(`Unsupported uniform type: ${$r(O.type)}`)});let A=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,E,0,w),this.gpuDataManager.release(A.id),m={offset:0,size:w,buffer:A.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,k=_h(e,t,b),v=this.programManager.getArtifact(k);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(k,v),Be("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),u&&v.uniformVariablesInfo){if(u.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${u.length} in program "${v.programInfo.name}".`);for(let w=0;w<u.length;w++){let T=u[w],x=T.type,E=typeof T.data=="number"?1:T.data.length,[A,O]=v.uniformVariablesInfo[w];if(x!==A||E!==O)throw new Error(`Uniform variable ${w} mismatch: expect type ${A} with size ${O}, got type ${x} with size ${E} in program "${v.programInfo.name}".`)}}if(Be("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,a,h,_,m),Yt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=Qy.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Be("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(u){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${u}`)),1}finally{l&&r.push(this.device.popErrorScope().then(u=>u?`GPU validation error for kernel "[${i}] ${s}": ${u.message}`:null));for(let u of this.temporaryData)this.gpuDataManager.release(u.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await _o(this,e,t);return ll(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Be("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),r_={};En(r_,{init:()=>n_});var Vi,vh,n_,C2=X(()=>{ve(),Er(),ke(),Dx(),Vi=class i_{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new i_(this.module,this.dataType,this.data,t)}},vh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let u=Number(e.getValue(n*i++,s)),c=Number(e.getValue(n*i++,"*")),p=Number(e.getValue(n*i++,s)),h=[];for(let m=0;m<p;m++)h.push(Number(e.getValue(n*i++,s)));o.push(new Vi(e,u,c,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],i=(o,l,u)=>new Vi(this.module,l,this.output(o,u),u),s=(o,l)=>{let u=Jr(o,l);if(!u)throw new Error(`Unsupported data type: ${o}`);let c=u>0?this.backend.gpuDataManager.create(u).id:0;return new Vi(this.module,o,c,l)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},n_=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(I2(),di(e_)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,u,c=!1)=>{if(c)Be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(u)}`),a.memcpy(Number(o),Number(l));else{Be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(u));a.upload(Number(l),p)}},async(o,l,u)=>{Be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${u}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(o,l,u)=>a.createKernel(o,Number(l),u,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,u,c)=>{Be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${o}, contextDataOffset=${l}`);let p=new vh(t,a,Number(l));return a.computeKernel(Number(o),p,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new hg(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,u,c)=>s.ensureTensor(a,o,l,u,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),wh,bl,vl,Rr,$h,Qa,cs,wl,$l,Ja,xl,Sl,kl,s_=X(()=>{Lt(),Mx(),Bx(),ve(),dn(),nl(),lg(),wh=(e,t)=>{Xe()._OrtInit(e,t)!==0&&Ve("Can't initialize onnxruntime.")},bl=async e=>{wh(e.wasm.numThreads,as(e.logLevel))},vl=async(e,t)=>{var n,i;(i=(n=Xe()).asyncInit)==null||i.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(C2(),di(r_)).init;t==="webgpu"&&await s("webgpu",Xe(),e,r),t==="webnn"&&await s("webnn",Xe(),e)}},Rr=new Map,$h=e=>{let t=Xe(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&Ve("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Qa=(e,t)=>{let r=Xe(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&Ve("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let u=r.HEAPU32[i/4+1],c=[];for(let p=0;p<u;p++){let h=Number(r.getValue(i+8+p*s,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(p+u)*s,"*")))}return[o,l,c]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},cs=e=>{let t=Xe(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},wl=async(e,t)=>{var p,h,m,_;let r,n,i=Xe();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=cs(e);let s=0,a=0,o=0,l=[],u=[],c=[];try{if([a,l]=await og(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let $=[];for(let B of t.externalData){let W=typeof B=="string"?B:B.path;$.push(al(typeof B=="string"?B:B.data).then(Y=>{i.mountExternalData(W,Y)}))}await Promise.all($)}for(let $ of(t==null?void 0:t.executionProviders)??[])if((typeof $=="string"?$:$.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof $!="string"){let B=$,W=B==null?void 0:B.context,Y=B==null?void 0:B.gpuDevice,ae=B==null?void 0:B.deviceType,oe=B==null?void 0:B.powerPreference;W?i.currentContext=W:Y?i.currentContext=await i.webnnCreateMLContext(Y):i.currentContext=await i.webnnCreateMLContext({deviceType:ae,powerPreference:oe})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),(p=i.webgpuOnCreateSession)==null||p.call(i,s),s===0&&Ve("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[b,k]=$h(s),v=!!(t!=null&&t.enableGraphCapture),w=[],T=[],x=[],E=[],A=[];for(let $=0;$<b;$++){let[B,W,Y]=Qa(s,$);B===0&&Ve("Can't get an input name."),u.push(B);let ae=i.UTF8ToString(B);w.push(ae),x.push(W===0?{name:ae,isTensor:!1}:{name:ae,isTensor:!0,type:$r(W),shape:Y})}for(let $=0;$<k;$++){let[B,W,Y]=Qa(s,$+b);B===0&&Ve("Can't get an output name."),c.push(B);let ae=i.UTF8ToString(B);T.push(ae),E.push(W===0?{name:ae,isTensor:!1}:{name:ae,isTensor:!0,type:$r(W),shape:Y});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){A.push("gpu-buffer");continue}let oe=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[ae])??"cpu",N=i.webnnIsGraphOutput;if(oe==="cpu"&&N&&N(s,ae)){A.push("ml-tensor-cpu-output");continue}if(oe!=="cpu"&&oe!=="cpu-pinned"&&oe!=="gpu-buffer"&&oe!=="ml-tensor")throw new Error(`Not supported preferred output location: ${oe}.`);if(v&&oe!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${oe}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);A.push(oe)}}let O=null;return A.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&Ve("Can't create IO binding."),O={handle:o,outputPreferredLocations:A,outputPreferredLocationsEncoded:A.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>go($))}),Rr.set(s,[s,u,c,O,v,!1]),[s,w,T,x,E]}catch(b){throw u.forEach(k=>i._OrtFree(k)),c.forEach(k=>i._OrtFree(k)),o!==0&&i._OrtReleaseBinding(o)!==0&&Ve("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&Ve("Can't release session."),b}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&Ve("Can't release session options."),l.forEach(b=>i._free(b)),(_=i.unmountExternalData)==null||_.call(i)}},$l=e=>{var l,u,c;let t=Xe(),r=Rr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&Ve("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Ve("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(u=t.webnnOnReleaseSession)==null||u.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&Ve("Can't release session."),Rr.delete(e)},Ja=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=Xe(),l=o.PTR_SIZE,u=e[0],c=e[1],p=e[3],h=p,m,_;if(u==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let v=e[2].gpuBuffer;_=Jr(Qr(u),c);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=w(n,s,v,_)}}else if(p==="ml-tensor"){let v=e[2].mlTensor;_=Jr(Qr(u),c);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=w(n,v,Qr(u),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,m=o._malloc(_),r.push(m);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(m+w*l,Kt(v[w],r),"*")}}else{let w=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(u!=="string"&&w&&T){let x=o.UTF8ToString(i);if(w(n,x)||T(n,x)){let E=Qr(u);_=Jr(E,c),h="ml-tensor";let A=o.webnnCreateTemporaryTensor,O=o.webnnUploadTensor;if(!A||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await A(n,E,c);O($,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),m=$}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}}let b=o.stackSave(),k=o.stackAlloc(4*c.length);try{c.forEach((w,T)=>o.setValue(k+T*l,w,l===4?"i32":"i64"));let v=o._OrtCreateTensor(Qr(u),m,_,k,c.length,go(h));v===0&&Ve(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(v)}finally{o.stackRestore(b)}},xl=async(e,t,r,n,i,s)=>{var ae,oe,N,de;let a=Xe(),o=a.PTR_SIZE,l=Rr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let u=l[0],c=l[1],p=l[2],h=l[3],m=l[4],_=l[5],b=t.length,k=n.length,v=0,w=[],T=[],x=[],E=[],A=[],O=a.stackSave(),$=a.stackAlloc(b*o),B=a.stackAlloc(b*o),W=a.stackAlloc(k*o),Y=a.stackAlloc(k*o);try{[v,w]=ag(s),nn("wasm prepareInputOutputTensor");for(let Z=0;Z<b;Z++)await Ja(r[Z],T,E,e,c[t[Z]],t[Z],m);for(let Z=0;Z<k;Z++)await Ja(i[Z],x,E,e,p[n[Z]],b+n[Z],m);sn("wasm prepareInputOutputTensor");for(let Z=0;Z<b;Z++)a.setValue($+Z*o,T[Z],"*"),a.setValue(B+Z*o,c[t[Z]],"*");for(let Z=0;Z<k;Z++)a.setValue(W+Z*o,x[Z],"*"),a.setValue(Y+Z*o,p[n[Z]],"*");if(h&&!_){let{handle:Z,outputPreferredLocations:Se,outputPreferredLocationsEncoded:j}=h;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);nn("wasm bindInputsOutputs");for(let P=0;P<b;P++){let K=t[P];await a._OrtBindInput(Z,c[K],T[P])!==0&&Ve(`Can't bind input[${P}] for session=${e}.`)}for(let P=0;P<k;P++){let K=n[P];(ae=i[P])!=null&&ae[3]?(A.push(x[P]),a._OrtBindOutput(Z,p[K],x[P],0)!==0&&Ve(`Can't bind pre-allocated output[${P}] for session=${e}.`)):a._OrtBindOutput(Z,p[K],0,j[K])!==0&&Ve(`Can't bind output[${P}] to ${Se[P]} for session=${e}.`)}sn("wasm bindInputsOutputs"),Rr.set(e,[u,c,p,h,m,!0])}(oe=a.jsepOnRunStart)==null||oe.call(a,u),(N=a.webnnOnRunStart)==null||N.call(a,u);let ee;h?ee=await a._OrtRunWithBinding(u,h.handle,k,W,v):ee=await a._OrtRun(u,B,$,b,Y,k,W,v),ee!==0&&Ve("failed to call OrtRun().");let J=[],he=[];nn("wasm ProcessOutputTensor");for(let Z=0;Z<k;Z++){let Se=Number(a.getValue(W+Z*o,"*"));if(Se===x[Z]||A.includes(x[Z])){J.push(i[Z]),Se!==x[Z]&&a._OrtReleaseTensor(Se)!==0&&Ve("Can't release tensor.");continue}let j=a.stackSave(),P=a.stackAlloc(4*o),K=!1,V,$e=0;try{a._OrtGetTensorData(Se,P,P+o,P+2*o,P+3*o)!==0&&Ve(`Can't access output tensor data on index ${Z}.`);let Ne=o===4?"i32":"i64",Le=Number(a.getValue(P,Ne));$e=a.getValue(P+o,"*");let Q=a.getValue(P+o*2,"*"),le=Number(a.getValue(P+o*3,Ne)),ue=[];for(let z=0;z<le;z++)ue.push(Number(a.getValue(Q+z*o,Ne)));a._OrtFree(Q)!==0&&Ve("Can't free memory for tensor dims.");let Ee=ue.reduce((z,M)=>z*M,1);V=$r(Le);let I=h==null?void 0:h.outputPreferredLocations[n[Z]];if(V==="string"){if(I==="gpu-buffer"||I==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let z=[];for(let M=0;M<Ee;M++){let H=a.getValue($e+M*o,"*"),G=a.getValue($e+(M+1)*o,"*"),F=M===Ee-1?void 0:G-H;z.push(a.UTF8ToString(H,F))}J.push([V,ue,z,"cpu"])}else if(I==="gpu-buffer"&&Ee>0){let z=a.jsepGetBuffer;if(!z)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let M=z($e),H=Jr(Le,Ee);if(H===void 0||!il(V))throw new Error(`Unsupported data type: ${V}`);K=!0,J.push([V,ue,{gpuBuffer:M,download:a.jsepCreateDownloader(M,H,V),dispose:()=>{a._OrtReleaseTensor(Se)!==0&&Ve("Can't release tensor.")}},"gpu-buffer"])}else if(I==="ml-tensor"&&Ee>0){let z=a.webnnEnsureTensor,M=a.webnnIsGraphInputOutputTypeSupported;if(!z||!M)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Jr(Le,Ee)===void 0||!sl(V))throw new Error(`Unsupported data type: ${V}`);if(!M(e,V,!1))throw new Error(`preferredLocation "ml-tensor" for ${V} output is not supported by current WebNN Context.`);let H=await z(e,$e,Le,ue,!1);K=!0,J.push([V,ue,{mlTensor:H,download:a.webnnCreateMLTensorDownloader($e,V),dispose:()=>{a.webnnReleaseTensorId($e),a._OrtReleaseTensor(Se)}},"ml-tensor"])}else if(I==="ml-tensor-cpu-output"&&Ee>0){let z=a.webnnCreateMLTensorDownloader($e,V)(),M=J.length;K=!0,he.push((async()=>{let H=[M,await z];return a.webnnReleaseTensorId($e),a._OrtReleaseTensor(Se),H})()),J.push([V,ue,[],"cpu"])}else{let z=Ss(V),M=new z(Ee);new Uint8Array(M.buffer,M.byteOffset,M.byteLength).set(a.HEAPU8.subarray($e,$e+M.byteLength)),J.push([V,ue,M,"cpu"])}}finally{a.stackRestore(j),V==="string"&&$e&&a._free($e),K||a._OrtReleaseTensor(Se)}}h&&!m&&(a._OrtClearBoundOutputs(h.handle)!==0&&Ve("Can't clear bound outputs."),Rr.set(e,[u,c,p,h,m,!1]));for(let[Z,Se]of await Promise.all(he))J[Z][2]=Se;return sn("wasm ProcessOutputTensor"),J}finally{(de=a.webnnOnRunEnd)==null||de.call(a,u),a.stackRestore(O),T.forEach(ee=>a._OrtReleaseTensor(ee)),x.forEach(ee=>a._OrtReleaseTensor(ee)),E.forEach(ee=>a._free(ee)),v!==0&&a._OrtReleaseRunOptions(v),w.forEach(ee=>a._free(ee))}},Sl=e=>{let t=Xe(),r=Rr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&Ve("Can't get an profile file name."),t._OrtFree(i)},kl=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Mr,It,hn,Wn,Vn,Hi,eo,Fi,jr,Kr,xh,a_,o_,l_,u_,d_,c_,p_,f_=X(()=>{Lt(),s_(),dn(),tl(),Mr=()=>!!Je.wasm.proxy&&typeof document<"u",hn=!1,Wn=!1,Vn=!1,Fi=new Map,jr=(e,t)=>{let r=Fi.get(e);r?r.push(t):Fi.set(e,[t])},Kr=()=>{if(hn||!Wn||Vn||!It)throw new Error("worker not ready")},xh=e=>{switch(e.data.type){case"init-wasm":hn=!1,e.data.err?(Vn=!0,eo[1](e.data.err)):(Wn=!0,eo[0]()),Hi&&(URL.revokeObjectURL(Hi),Hi=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Fi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},a_=async()=>{if(!Wn){if(hn)throw new Error("multiple calls to 'initWasm()' detected.");if(Vn)throw new Error("previous call to 'initWasm()' failed.");if(hn=!0,Mr())return new Promise((e,t)=>{It==null||It.terminate(),ig().then(([r,n])=>{try{It=n,It.onerror=s=>t(s),It.onmessage=xh,eo=[e,t];let i={type:"init-wasm",in:Je};!i.in.wasm.wasmPaths&&(r||mo)&&(i.in.wasm.wasmPaths={wasm:new URL("/chess_detection/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href}),It.postMessage(i),Hi=r}catch(i){t(i)}},t)});try{await rl(Je.wasm),await bl(Je),Wn=!0}catch(e){throw Vn=!0,e}finally{hn=!1}}},o_=async e=>{if(Mr())return Kr(),new Promise((t,r)=>{jr("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Je}};It.postMessage(n)});await vl(Je,e)},l_=async e=>Mr()?(Kr(),new Promise((t,r)=>{jr("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};It.postMessage(n,[e.buffer])})):cs(e),u_=async(e,t)=>{if(Mr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Kr(),new Promise((r,n)=>{jr("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),It.postMessage(i,s)})}else return wl(e,t)},d_=async e=>{if(Mr())return Kr(),new Promise((t,r)=>{jr("release",[t,r]);let n={type:"release",in:e};It.postMessage(n)});$l(e)},c_=async(e,t,r,n,i,s)=>{if(Mr()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Kr(),new Promise((a,o)=>{jr("run",[a,o]);let l=r,u={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};It.postMessage(u,kl(l))})}else return xl(e,t,r,n,i,s)},p_=async e=>{if(Mr())return Kr(),new Promise((t,r)=>{jr("end-profiling",[t,r]);let n={type:"end-profiling",in:e};It.postMessage(n)});Sl(e)}}),to,Sh,h_,z2=X(()=>{Lt(),f_(),ve(),el(),lg(),to=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Sh=e=>{switch(e[3]){case"cpu":return new Pt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!il(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Pt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!sl(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Pt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},h_=class{async fetchModelAndCopyToWasmMemory(e){return l_(await al(e))}async loadModel(e,t){hr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await u_(r,t),Yt()}async dispose(){return d_(this.sessionId)}async run(e,t,r){hr();let n=[],i=[];Object.entries(e).forEach(p=>{let h=p[0],m=p[1],_=this.inputNames.indexOf(h);if(_===-1)throw new Error(`invalid input '${h}'`);n.push(m),i.push(_)});let s=[],a=[];Object.entries(t).forEach(p=>{let h=p[0],m=p[1],_=this.outputNames.indexOf(h);if(_===-1)throw new Error(`invalid output '${h}'`);s.push(m),a.push(_)});let o=n.map((p,h)=>to(p,()=>`input "${this.inputNames[i[h]]}"`)),l=s.map((p,h)=>p?to(p,()=>`output "${this.outputNames[a[h]]}"`):null),u=await c_(this.sessionId,i,o,a,l,r),c={};for(let p=0;p<u.length;p++)c[this.outputNames[a[p]]]=s[p]??Sh(u[p]);return Yt(),c}startProfiling(){}endProfiling(){p_(this.sessionId)}}}),m_={};En(m_,{OnnxruntimeWebAssemblyBackend:()=>zo,initializeFlags:()=>Co,wasmBackend:()=>g_});var Co,zo,g_,A2=X(()=>{Lt(),f_(),z2(),Co=()=>{(typeof Je.wasm.initTimeout!="number"||Je.wasm.initTimeout<0)&&(Je.wasm.initTimeout=0);let e=Je.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Je.wasm.simd=!1),typeof Je.wasm.proxy!="boolean"&&(Je.wasm.proxy=!1),typeof Je.wasm.trace!="boolean"&&(Je.wasm.trace=!1),typeof Je.wasm.numThreads!="number"||!Number.isInteger(Je.wasm.numThreads)||Je.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Je.wasm.numThreads=1;else{let t=typeof navigator>"u"?gx("node:os").cpus().length:navigator.hardwareConcurrency;Je.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},zo=class{async init(e){Co(),await a_(),await o_(e)}async createInferenceSessionHandler(e,t){let r=new h_;return await r.loadModel(e,t),r}},g_=new zo});Lt();Lt();Lt();var O2="1.26.0";{let e=(A2(),di(m_)).wasmBackend;gn("webgpu",e,5),gn("webnn",e,5),gn("cpu",e,10),gn("wasm",e,10)}Object.defineProperty(Je.versions,"web",{value:O2,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y_(e,t,r,n=640){const i=Math.min(n/t,n/r),s=Math.round(t*i),a=Math.round(r*i),o=Math.floor((n-s)/2),l=Math.floor((n-a)/2),u=document.createElement("canvas");u.width=n,u.height=n;const c=u.getContext("2d",{willReadFrequently:!0});c.fillStyle="rgb(114,114,114)",c.fillRect(0,0,n,n),c.drawImage(e,o,l,s,a);const{data:p}=c.getImageData(0,0,n,n),h=n*n,m=new Float32Array(h*3);for(let _=0;_<h;_++)m[_]=p[_*4]/255,m[h+_]=p[_*4+1]/255,m[h*2+_]=p[_*4+2]/255;return{data:m,width:n,height:n,lb:{scale:i,padX:o,padY:l}}}function ps(e,t,r){return{x:(e-r.padX)/r.scale,y:(t-r.padY)/r.scale}}function R2(e,t,r,n,i=.25){const[,s,a]=t,o=4+r;if(a===6&&s!==o)return M2(e,s,n,i);const l=s===o,u=l?a:s,c=l?u:o,p=(m,_)=>l?e[_*c+m]:e[m*c+_],h=[];for(let m=0;m<u;m++){let _=0,b=-1/0;for(let A=0;A<r;A++){const O=p(m,4+A);O>b&&(b=O,_=A)}if(b<i)continue;const k=p(m,0),v=p(m,1),w=p(m,2),T=p(m,3),x=ps(k-w/2,v-T/2,n),E=ps(k+w/2,v+T/2,n);h.push(__(x.x,x.y,E.x,E.y,b,_))}return h}function M2(e,t,r,n){const i=[];for(let s=0;s<t;s++){const a=s*6,o=e[a+4];if(o<n)continue;const l=Math.round(e[a+5]),u=ps(e[a],e[a+1],r),c=ps(e[a+2],e[a+3],r);i.push(__(u.x,u.y,c.x,c.y,o,l))}return i}function __(e,t,r,n,i,s){const a=ni[s];return{x1:e,y1:t,x2:r,y2:n,score:i,classId:s,type:a?a.type:"xe"}}function B2(e,t){const r=Math.max(e.x1,t.x1),n=Math.max(e.y1,t.y1),i=Math.min(e.x2,t.x2),s=Math.min(e.y2,t.y2),a=Math.max(0,i-r),o=Math.max(0,s-n),l=a*o;if(l<=0)return 0;const u=(e.x2-e.x1)*(e.y2-e.y1),c=(t.x2-t.x1)*(t.y2-t.y1);return l/(u+c-l)}function N2(e,t=.45){const r=[...e].sort((s,a)=>a.score-s.score),n=[],i=new Array(r.length).fill(!1);for(let s=0;s<r.length;s++)if(!i[s]){n.push(r[s]);for(let a=s+1;a<r.length;a++)i[a]||B2(r[s],r[a])>t&&(i[a]=!0)}return n}const D2="1.26.0";Je.wasm.wasmPaths=`https://cdn.jsdelivr.net/npm/onnxruntime-web@${D2}/dist/`;const P2="/chess_detection/models/xiangqi-yolo26n.onnx";function U2(e=P2){const t=De("idle"),r=De(null),n=Xh(null),i=De("images"),s=De("");async function a(){if(!n.value){t.value="loading",r.value=null;try{if(!(await fetch(e,{method:"HEAD"})).ok){t.value="missing";return}const u="gpu"in navigator?["webgpu","wasm"]:["wasm"],c=await xs.create(e,{executionProviders:u,graphOptimizationLevel:"all"});n.value=c,i.value=c.inputNames[0]??"images",s.value=u[0],t.value="ready"}catch(l){t.value="error",r.value=l instanceof Error?l.message:String(l)}}}async function o(l,u,c,p={}){const h=n.value;if(!h)throw new Error("Model chưa sẵn sàng");const{data:m,width:_,height:b,lb:k}=y_(l,u,c),v=new Pt("float32",m,[1,3,b,_]),T=(await h.run({[i.value]:v}))[h.outputNames[0]],x=R2(T.data,T.dims,Z$.length,k,p.scoreThreshold??.25);return N2(x,p.iouThreshold??.45)}return{status:t,error:r,backend:s,load:a,detect:o}}function L2(e){let t=e[0],r=e[0],n=e[0],i=e[0];for(const s of e)s.x+s.y<t.x+t.y&&(t=s),s.x+s.y>n.x+n.y&&(n=s),s.x-s.y>r.x-r.y&&(r=s),s.x-s.y<i.x-i.y&&(i=s);return{topLeft:t,topRight:r,bottomRight:n,bottomLeft:i}}function q2(e,t,r,n=.25){const[,i,s]=t;let a,o;if(i===17||s===17)a=17,o=5;else if(i===18||s===18)a=18,o=6;else return null;const l=i===a,u=l?s:i,c=(b,k)=>l?e[b*u+k]:e[k*a+b];let p=-1,h=n;for(let b=0;b<u;b++){const k=c(4,b);k>h&&(h=k,p=b)}if(p<0)return null;const m=(b,k)=>({x:(b-r.padX)/r.scale,y:(k-r.padY)/r.scale}),_=[];for(let b=0;b<4;b++){const k=c(o+b*3,p),v=c(o+b*3+1,p);_.push(m(k,v))}return L2(_)}const W2="/chess_detection/models/board-pose.onnx";function V2(e=W2){const t=De("idle"),r=Xh(null),n=De("images");let i=null;function s(){return i||(i=(async()=>{t.value="loading";try{if(!(await fetch(e,{method:"HEAD"})).ok){t.value="missing";return}const l="gpu"in navigator?["webgpu","wasm"]:["wasm"],u=await xs.create(e,{executionProviders:l,graphOptimizationLevel:"all"});r.value=u,n.value=u.inputNames[0]??"images",t.value="ready"}catch{t.value="error"}})(),i)}async function a(o,l,u){await s();const c=r.value;if(!c)return null;const{data:p,width:h,height:m,lb:_}=y_(o,l,u),b=new Pt("float32",p,[1,3,m,h]),v=(await c.run({[n.value]:b}))[c.outputNames[0]];return q2(v.data,v.dims,_,.25)}return{status:t,load:s,detectCorners:a}}function H2(e,t,r,n=.6){const i=Math.floor(t*(1-n)/2),s=Math.floor(r*(1-n)/2);let a=0,o=0,l=0;for(let u=s;u<r-s;u++)for(let c=i;c<t-i;c++){const p=(u*t+c)*4,h=e[p],m=e[p+1],_=e[p+2];e[p+3]<32||(l++,h>110&&h-m>35&&h-_>35?a++:h<95&&m<95&&_<95&&o++)}return{red:a,dark:o,total:l}}function F2(e){if(e.total===0)return"black";const t=e.red/e.total;return e.red>e.dark*.8&&t>.02?"red":"black"}function G2(e,t,r){return F2(H2(e,t,r))}function j2(e,t){return t.map(r=>{const n=Math.max(0,Math.floor(r.x1)),i=Math.max(0,Math.floor(r.y1)),s=Math.max(1,Math.min(e.canvas.width-n,Math.ceil(r.x2-r.x1))),a=Math.max(1,Math.min(e.canvas.height-i,Math.ceil(r.y2-r.y1))),{data:o}=e.getImageData(n,i,s,a);return{...r,color:G2(o,s,a)}})}const K2="https://docs.opencv.org/4.9.0/opencv.js";let Gi=null;function X2(){return Gi||(Gi=new Promise((e,t)=>{const r=window;if(r.cv&&r.cv.Mat){e(r.cv);return}const n=document.createElement("script");n.src=K2,n.async=!0,n.onload=()=>{const i=r.cv;i&&typeof i.then=="function"?i.then(s=>e(s)).catch(t):i&&i.Mat?e(i):i?i.onRuntimeInitialized=()=>e(i):t(new Error("OpenCV.js loaded but cv is undefined"))},n.onerror=()=>t(new Error("Không tải được OpenCV.js")),document.head.appendChild(n)}),Gi)}function Z2(e){let t=e[0],r=e[0],n=e[0],i=e[0];for(const s of e)s.x+s.y<t.x+t.y&&(t=s),s.x+s.y>n.x+n.y&&(n=s),s.x-s.y>r.x-r.y&&(r=s),s.x-s.y<i.x-i.y&&(i=s);return{topLeft:t,topRight:r,bottomRight:n,bottomLeft:i}}async function Y2(e){const t=await X2();let r,n,i,s,a,o,l;try{r=t.imread(e);const u=r.cols,c=r.rows,p=Math.min(1,900/Math.max(u,c));n=new t.Mat,t.resize(r,n,new t.Size(Math.round(u*p),Math.round(c*p))),i=new t.Mat,t.cvtColor(n,i,t.COLOR_RGBA2GRAY),t.GaussianBlur(i,i,new t.Size(5,5),0),s=new t.Mat,t.Canny(i,s,50,150),a=t.getStructuringElement(t.MORPH_RECT,new t.Size(5,5)),t.dilate(s,s,a),o=new t.MatVector,l=new t.Mat,t.findContours(s,o,l,t.RETR_EXTERNAL,t.CHAIN_APPROX_SIMPLE);const h=n.rows*n.cols;let m=null,_=0;for(let b=0;b<o.size();b++){const k=o.get(b),v=t.contourArea(k);if(v>.15*h){const w=t.arcLength(k,!0),T=new t.Mat;if(t.approxPolyDP(k,T,.02*w,!0),T.rows===4&&t.isContourConvex(T)&&v>_){_=v,m=[];for(let x=0;x<4;x++)m.push({x:T.data32S[x*2]/p,y:T.data32S[x*2+1]/p})}T.delete()}k.delete()}return m?Z2(m):null}finally{r==null||r.delete(),n==null||n.delete(),i==null||i.delete(),s==null||s.delete(),a==null||a.delete(),o==null||o.delete(),l==null||l.delete()}}const Q2={class:"min-h-full bg-slate-950 text-slate-100"},J2={class:"border-b border-slate-800 bg-slate-900/70 backdrop-blur"},e3={class:"mx-auto flex max-w-5xl items-center justify-between px-4 py-3"},t3={class:"mx-auto max-w-5xl px-4 py-6"},r3={key:0,class:"mb-6 rounded-2xl border border-amber-700/50 bg-amber-900/20 p-4 text-sm text-amber-100"},n3={key:1},i3={key:2,class:"grid gap-6 lg:grid-cols-2"},s3={class:"flex flex-col gap-3"},a3={class:"flex items-center justify-between gap-2"},o3={class:"text-sm font-semibold text-slate-300"},l3={class:"flex flex-wrap items-center justify-end gap-2"},u3=["disabled"],d3={key:2,class:"text-xs text-slate-500"},c3={class:"flex gap-3"},p3=["disabled"],f3={key:3,class:"rounded-lg bg-red-900/30 px-3 py-2 text-sm text-red-300"},h3={key:1,class:"flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-700 p-8 text-center text-sm text-slate-500"},m3=hi({__name:"App",setup(e){const{status:t,error:r,backend:n,load:i,detect:s}=U2(),{detectCorners:a}=V2(),o=De(null),l=De(null),u=De(0),c=De(0),p=De(null),h=De("corners"),m=De(!1),_=De(null),b=De(!1),k=De(null),v=De("portrait"),w=De("board"),T=De(!1),x=De(null),E=De(null),A=De(null),O=dt(()=>A.value),$=dt(()=>O.value?y1(O.value):"");function B(){A.value&&(A.value=v1(A.value))}function W(P){A.value=P}function Y(){E.value=null,A.value=null}function ae(P,K){const V=P*.06,$e=K*.06;return{topLeft:{x:V,y:$e},topRight:{x:P-V,y:$e},bottomRight:{x:P-V,y:K-$e},bottomLeft:{x:V,y:K-$e}}}function oe(P){o.value&&URL.revokeObjectURL(o.value),E.value=null,A.value=null,x.value=null,h.value="corners",m.value=!1,_.value=null,k.value=null,v.value="portrait",w.value=P.name.replace(/\.[^.]+$/,"")||"board";const K=URL.createObjectURL(P);o.value=K;const V=new Image;V.onload=()=>{l.value=V,u.value=V.naturalWidth,c.value=V.naturalHeight;const $e=ae(V.naturalWidth,V.naturalHeight);k.value=$e,p.value=Zo($e),Z()},V.src=K}function N(P){p.value=P,m.value=!0}function de(){const P=p.value;if(!P)return;const K=[P[0][0],P[0][Ze-1],P[Ge-1][Ze-1],P[Ge-1][0]];let V=K[0],$e=K[0],Ne=K[0],Le=K[0];for(const q of K)q.x+q.y<V.x+V.y&&(V=q),q.x+q.y>Ne.x+Ne.y&&(Ne=q),q.x-q.y>$e.x-$e.y&&($e=q),q.x-q.y<Le.x-Le.y&&(Le=q);const Q=[V,$e,Ne,Le],le=u.value,ue=c.value,Ee=Q.map(q=>q.x),I=Q.map(q=>q.y),z=(Math.min(...Ee)+Math.max(...Ee))/2/le,M=(Math.min(...I)+Math.max(...I))/2/ue,H=Math.min(1,(Math.max(...Ee)-Math.min(...Ee))/le*1.02),G=Math.min(1,(Math.max(...I)-Math.min(...I))/ue*1.02);let F=`0 ${z.toFixed(6)} ${M.toFixed(6)} ${H.toFixed(6)} ${G.toFixed(6)}`;for(const q of Q)F+=` ${(q.x/le).toFixed(6)} ${(q.y/ue).toFixed(6)} 2`;const se=new Blob([F+`
`],{type:"text/plain"}),te=URL.createObjectURL(se),re=document.createElement("a");re.href=te,re.download=`${w.value}.txt`,re.click(),URL.revokeObjectURL(te)}function ee(){v.value=v.value==="portrait"?"landscape":"portrait",k.value&&(p.value=ia(k.value,v.value),m.value=!1,h.value="corners")}async function J(){return t.value!=="ready"&&t.value!=="loading"&&await i(),t.value==="ready"}async function he(){if(_.value)return _.value;const P=await s(l.value,u.value,c.value);return _.value=P,P}async function Z(){if(l.value){b.value=!0,x.value=null;try{let P=null;try{P=await a(l.value,u.value,c.value)}catch{P=null}if(!P)try{P=await Y2(l.value)}catch{P=null}if(!P&&await J()){const K=await he();P=Vd(K.map(ho))}(!P||!t1(P))&&(P=ae(u.value,c.value)),k.value=P,v.value=r1(P),p.value=ia(P,v.value),m.value=!1,h.value="corners"}catch(P){x.value=P instanceof Error?P.message:String(P)}finally{b.value=!1}}}async function Se(){if(!(!l.value||!p.value)){T.value=!0,x.value=null,E.value=null;try{if(!await J()){t.value!=="missing"&&(x.value=r.value??"Không tải được model");return}const P=await he();if(!m.value){const Ne=k.value??Vd(P.map(ho));Ne&&(k.value=Ne,p.value=ia(Ne,v.value))}const K=document.createElement("canvas");K.width=u.value,K.height=c.value;const V=K.getContext("2d",{willReadFrequently:!0});V.drawImage(l.value,0,0);const $e=j2(V,P);E.value=s1($e,p.value),A.value=E.value.board}catch(P){x.value=P instanceof Error?P.message:String(P)}finally{T.value=!1}}}function j(){o.value&&URL.revokeObjectURL(o.value),o.value=null,l.value=null,_.value=null,E.value=null,A.value=null,p.value=null}return(P,K)=>(ye(),_e("div",Q2,[ne("header",J2,[ne("div",e3,[K[1]||(K[1]=ne("div",{class:"flex items-center gap-2"},[ne("span",{class:"flex h-9 w-9 items-center justify-center rounded-full border-2 border-red-500 bg-amber-50 text-lg font-bold text-red-600"}," 帥 "),ne("div",null,[ne("h1",{class:"text-base font-bold sm:text-lg"},"Xiangqi Vision"),ne("p",{class:"text-[11px] text-slate-400"},"Nhận diện cờ tướng · YOLO26n + ONNX (chạy trong trình duyệt)")])],-1)),ne("span",{class:At(["rounded-full px-2.5 py-1 text-[11px] font-medium",{"bg-slate-700 text-slate-300":yt(t)==="idle"||yt(t)==="loading","bg-emerald-600/20 text-emerald-300":yt(t)==="ready","bg-amber-600/20 text-amber-300":yt(t)==="missing","bg-red-600/20 text-red-300":yt(t)==="error"}])},nt(yt(t)==="ready"?`Model sẵn sàng (${yt(n)})`:yt(t)==="loading"?"Đang tải model…":yt(t)==="missing"?"Chưa có model":yt(t)==="error"?"Lỗi model":"Model chưa tải"),3)])]),ne("main",t3,[yt(t)==="missing"?(ye(),_e("div",r3,[...K[2]||(K[2]=[ne("p",{class:"font-semibold"},[jt("Chưa tìm thấy "),ne("code",null,"public/models/xiangqi-yolo26n.onnx")],-1),ne("p",{class:"mt-1 text-amber-200/80"},[jt(" App đã tích hợp sẵn pipeline. Hãy train model cờ tướng rồi đặt file ONNX vào "),ne("code",null,"frontend/public/models/"),jt(". Xem hướng dẫn trong "),ne("code",null,"training/TRAINING_GUIDE.md"),jt(": ")],-1),ne("pre",{class:"mt-2 overflow-x-auto rounded-lg bg-slate-900/80 p-3 text-xs text-emerald-300"},`cd training
pip install -r requirements.txt
python download_dataset.py --source huggingface
python train.py --epochs 100
python export.py   # tạo & copy ONNX sang frontend/public/models/`,-1)])])):vt("",!0),o.value?(ye(),_e("div",i3,[ne("div",s3,[ne("div",a3,[ne("h2",o3,nt(E.value?"Ảnh gốc + lưới":h.value==="corners"?"Kéo 4 góc để lưới xanh phủ bàn cờ":"Kéo từng điểm xanh cho khớp giao điểm thật"),1),ne("div",l3,[E.value?vt("",!0):(ye(),_e("button",{key:0,class:"rounded-lg bg-sky-700 px-2.5 py-1 text-xs font-medium text-sky-50 hover:bg-sky-600 disabled:opacity-50",disabled:b.value,onClick:Z},nt(b.value?"⏳ Đang dò…":"🎯 Tự dò bàn cờ"),9,u3)),E.value?vt("",!0):(ye(),_e("button",{key:1,class:"rounded-lg bg-slate-700 px-2.5 py-1 text-xs font-medium text-slate-100 hover:bg-slate-600",onClick:ee}," ↻ "+nt(v.value==="portrait"?"Dọc":"Ngang"),1)),E.value?vt("",!0):(ye(),_e("button",{key:2,class:"rounded-lg bg-slate-700 px-2.5 py-1 text-xs font-medium text-slate-100 hover:bg-slate-600",onClick:K[0]||(K[0]=V=>h.value=h.value==="corners"?"mesh":"corners")},nt(h.value==="corners"?"⊞ Chỉnh điểm":"⊡ Về 4 góc"),1)),E.value?vt("",!0):(ye(),_e("button",{key:3,class:"rounded-lg bg-fuchsia-700 px-2.5 py-1 text-xs font-medium text-fuchsia-50 hover:bg-fuchsia-600",title:"Căn 4 góc chính xác rồi bấm để xuất nhãn YOLO-pose (train board)",onClick:de}," ⬇ Nhãn góc ")),ne("button",{class:"text-xs text-slate-400 underline hover:text-slate-200",onClick:j}," Ảnh khác ")])]),p.value&&!E.value?(ye(),Ki(c1,{key:0,"model-value":p.value,mode:h.value,"image-url":o.value,"natural-width":u.value,"natural-height":c.value,"onUpdate:modelValue":N},null,8,["model-value","mode","image-url","natural-width","natural-height"])):E.value&&o.value&&p.value?(ye(),Ki(g1,{key:1,"image-url":o.value,"natural-width":u.value,"natural-height":c.value,mesh:p.value},null,8,["image-url","natural-width","natural-height","mesh"])):vt("",!0),E.value?vt("",!0):(ye(),_e("p",d3,[...K[3]||(K[3]=[jt(" Lưới được ",-1),ne("b",null,"tự dò",-1),jt(" theo các quân. Sai thì bấm ",-1),ne("b",null,"🎯 Tự dò",-1),jt(" lại, hoặc ",-1),ne("b",null,"Chỉnh từng điểm",-1),jt(" để kéo giao điểm cho khít. ",-1)])])),ne("div",c3,[E.value?(ye(),_e("button",{key:1,class:"flex-1 rounded-xl bg-slate-700 px-4 py-3 font-semibold text-slate-100 hover:bg-slate-600",onClick:Y}," ← Chỉnh lại lưới ")):(ye(),_e("button",{key:0,class:"flex-1 rounded-xl bg-amber-500 px-4 py-3 font-semibold text-slate-900 hover:bg-amber-400 disabled:opacity-50",disabled:T.value,onClick:Se},nt(T.value?"Đang phân tích…":"Phân tích bàn cờ"),9,p3))]),x.value?(ye(),_e("p",f3,nt(x.value),1)):vt("",!0)]),ne("div",null,[E.value&&O.value?(ye(),Ki(px,{key:0,board:O.value,fen:$.value,onFlip:B,onUpdate:W},null,8,["board","fen"])):(ye(),_e("div",h3," Căn 4 góc rồi bấm “Phân tích bàn cờ” để xem vị trí & tên quân. "))])])):(ye(),_e("div",n3,[pr(X$,{onSelect:oe})])),K[4]||(K[4]=ne("footer",{class:"mt-10 text-center text-[11px] text-slate-600"}," Chạy hoàn toàn trong trình duyệt — ảnh không rời khỏi thiết bị của bạn. ",-1))])]))}});H$(m3).mount("#app");
