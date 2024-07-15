import{s as De,x as Sd,n as Rt,r as Ve,b as ee,o as Nr,i as Pd,y as Ct,z as Cd}from"../chunks/scheduler.li6PcnJj.js";import{S as Ne,i as Oe,e as N,s as G,c as O,d as J,h as W,y as ht,g as x,o as C,j as ot,k as D,z as Y,A as Or,b as le,f as ce,l as Te,B as kd,C as vt,D as qc,p as Be,a as ie,n as jc,t as oe,q as zc,m as dl,u as tn,v as en,w as nn,x as rn}from"../chunks/index.DQWX1qTz.js";import{w as zs}from"../chunks/index.ChQ1qdP7.js";function ge(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var fl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Dd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],l=n[e++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|d>>6,I=d&63;u||(I=64,a||(m=64)),r.push(e[f],e[g],e[m],e[I])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($c(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Dd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new Vd;const m=i<<2|l>>4;if(r.push(m),d!==64){const I=l<<4&240|d>>2;if(r.push(I),g!==64){const A=d<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nd=function(n){const t=$c(n);return Hc.encodeByteArray(t,!0)},Rs=function(n){return Nd(n).replace(/\./g,"")},Gc=function(n){try{return Hc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=()=>Od().__FIREBASE_DEFAULTS__,Ld=()=>{if(typeof process>"u"||typeof fl>"u")return;const n=fl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Gc(n[1]);return t&&JSON.parse(t)},$s=()=>{try{return Md()||Ld()||xd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wc=n=>{var t,e;return(e=(t=$s())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ud=n=>{const t=Wc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Kc=()=>{var n;return(n=$s())===null||n===void 0?void 0:n.config},Qc=n=>{var t;return(t=$s())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rs(JSON.stringify(e)),Rs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function jd(){var n;const t=(n=$s())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hd(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gd(){return!jd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wd(){try{return typeof indexedDB=="object"}catch{return!1}}function Kd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="FirebaseError";class Me extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Qd,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Xd(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Me(s,l,r)}}function Xd(n,t){return n.replace(Jd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Jd=/\{\$([^}]+)}/g;function Yd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ss(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(pl(i)&&pl(a)){if(!Ss(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function pl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Zd(n,t){const e=new tf(n,t);return e.subscribe.bind(e)}class tf{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");ef(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Mi),s.error===void 0&&(s.error=Mi),s.complete===void 0&&(s.complete=Mi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ef(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Mi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n){return n&&n._delegate?n._delegate:n}class yn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Fd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sf(t))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hn){return this.instances.has(t)}getOptions(t=hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=hn){return this.component?this.component.multipleInstances?t:hn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rf(n){return n===hn?void 0:n}function sf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new nf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(lt||(lt={}));const af={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},lf=lt.INFO,cf={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},uf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=cf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _o{constructor(t){this.name=t,this._logLevel=lf,this._logHandler=uf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?af[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const hf=(n,t)=>t.some(e=>n instanceof e);let ml,gl;function df(){return ml||(ml=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ff(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xc=new WeakMap,Gi=new WeakMap,Jc=new WeakMap,Li=new WeakMap,yo=new WeakMap;function pf(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(Ge(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Xc.set(e,n)}).catch(()=>{}),yo.set(t,n),t}function mf(n){if(Gi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Gi.set(n,t)}let Wi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Jc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ge(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function gf(n){Wi=n(Wi)}function _f(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(xi(this),t,...e);return Jc.set(r,t.sort?t.sort():[t]),Ge(r)}:ff().includes(n)?function(...t){return n.apply(xi(this),t),Ge(Xc.get(this))}:function(...t){return Ge(n.apply(xi(this),t))}}function yf(n){return typeof n=="function"?_f(n):(n instanceof IDBTransaction&&mf(n),hf(n,df())?new Proxy(n,Wi):n)}function Ge(n){if(n instanceof IDBRequest)return pf(n);if(Li.has(n))return Li.get(n);const t=yf(n);return t!==n&&(Li.set(n,t),yo.set(t,n)),t}const xi=n=>yo.get(n);function vf(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),l=Ge(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ge(a.result),u.oldVersion,u.newVersion,Ge(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Ef=["get","getKey","getAll","getAllKeys","count"],If=["put","add","delete","clear"],Ui=new Map;function _l(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ui.get(t))return Ui.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=If.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ef.includes(e)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&u.done]))[0]};return Ui.set(t,i),i}gf(n=>({...n,get:(t,e,r)=>_l(t,e)||n.get(t,e,r),has:(t,e)=>!!_l(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(wf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function wf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ki="@firebase/app",yl="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new _o("@firebase/app"),Af="@firebase/app-compat",bf="@firebase/analytics-compat",Rf="@firebase/analytics",Sf="@firebase/app-check-compat",Pf="@firebase/app-check",Cf="@firebase/auth",kf="@firebase/auth-compat",Df="@firebase/database",Vf="@firebase/database-compat",Nf="@firebase/functions",Of="@firebase/functions-compat",Mf="@firebase/installations",Lf="@firebase/installations-compat",xf="@firebase/messaging",Uf="@firebase/messaging-compat",Ff="@firebase/performance",Bf="@firebase/performance-compat",qf="@firebase/remote-config",jf="@firebase/remote-config-compat",zf="@firebase/storage",$f="@firebase/storage-compat",Hf="@firebase/firestore",Gf="@firebase/vertexai-preview",Wf="@firebase/firestore-compat",Kf="firebase",Qf="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]",Xf={[Ki]:"fire-core",[Af]:"fire-core-compat",[Rf]:"fire-analytics",[bf]:"fire-analytics-compat",[Pf]:"fire-app-check",[Sf]:"fire-app-check-compat",[Cf]:"fire-auth",[kf]:"fire-auth-compat",[Df]:"fire-rtdb",[Vf]:"fire-rtdb-compat",[Nf]:"fire-fn",[Of]:"fire-fn-compat",[Mf]:"fire-iid",[Lf]:"fire-iid-compat",[xf]:"fire-fcm",[Uf]:"fire-fcm-compat",[Ff]:"fire-perf",[Bf]:"fire-perf-compat",[qf]:"fire-rc",[jf]:"fire-rc-compat",[zf]:"fire-gcs",[$f]:"fire-gcs-compat",[Hf]:"fire-fst",[Wf]:"fire-fst-compat",[Gf]:"fire-vertex","fire-js":"fire-js",[Kf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Map,Jf=new Map,Xi=new Map;function vl(n,t){try{n.container.addComponent(t)}catch(e){vn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fn(n){const t=n.name;if(Xi.has(t))return vn.debug(`There were multiple attempts to register component ${t}.`),!1;Xi.set(t,n);for(const e of Ps.values())vl(e,n);for(const e of Jf.values())vl(e,n);return!0}function vo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function we(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},We=new Mr("app","Firebase",Yf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=Qf;function Yc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(e||(e=Kc()),!e)throw We.create("no-options");const i=Ps.get(s);if(i){if(Ss(e,i.options)&&Ss(r,i.config))return i;throw We.create("duplicate-app",{appName:s})}const a=new of(s);for(const u of Xi.values())a.addComponent(u);const l=new Zf(e,r,a);return Ps.set(s,l),l}function Zc(n=Qi){const t=Ps.get(n);if(!t&&n===Qi&&Kc())return Yc();if(!t)throw We.create("no-app",{appName:n});return t}function Ke(n,t,e){var r;let s=(r=Xf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),vn.warn(l.join(" "));return}Fn(new yn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="firebase-heartbeat-database",ep=1,Ar="firebase-heartbeat-store";let Fi=null;function tu(){return Fi||(Fi=vf(tp,ep,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ar)}catch(e){console.warn(e)}}}}).catch(n=>{throw We.create("idb-open",{originalErrorMessage:n.message})})),Fi}async function np(n){try{const e=(await tu()).transaction(Ar),r=await e.objectStore(Ar).get(eu(n));return await e.done,r}catch(t){if(t instanceof Me)vn.warn(t.message);else{const e=We.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});vn.warn(e.message)}}}async function El(n,t){try{const r=(await tu()).transaction(Ar,"readwrite");await r.objectStore(Ar).put(t,eu(n)),await r.done}catch(e){if(e instanceof Me)vn.warn(e.message);else{const r=We.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});vn.warn(r.message)}}}function eu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=1024,sp=30*24*60*60*1e3;class ip{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ap(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Il();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=sp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Il(),{heartbeatsToSend:r,unsentEntries:s}=op(this._heartbeatsCache.heartbeats),i=Rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Il(){return new Date().toISOString().substring(0,10)}function op(n,t=rp){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Tl(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Tl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ap{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wd()?Kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await np(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Tl(n){return Rs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){Fn(new yn("platform-logger",t=>new Tf(t),"PRIVATE")),Fn(new yn("heartbeat",t=>new ip(t),"PRIVATE")),Ke(Ki,yl,n),Ke(Ki,yl,"esm2017"),Ke("fire-js","")}lp("");var cp="firebase",up="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(cp,up,"app");function Eo(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(e[r[s]]=n[r[s]]);return e}function nu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hp=nu,ru=new Mr("auth","Firebase",nu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new _o("@firebase/auth");function dp(n,...t){Cs.logLevel<=lt.WARN&&Cs.warn(`Auth (${Kn}): ${n}`,...t)}function _s(n,...t){Cs.logLevel<=lt.ERROR&&Cs.error(`Auth (${Kn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,...t){throw To(n,...t)}function ue(n,...t){return To(n,...t)}function Io(n,t,e){const r=Object.assign(Object.assign({},hp()),{[t]:e});return new Mr("auth","Firebase",r).create(t,{appName:n.name})}function pn(n){return Io(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fp(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&_e(n,"argument-error"),Io(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function To(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return ru.create(n,...t)}function Z(n,t,...e){if(!n)throw To(t,...e)}function Ae(n){const t="INTERNAL ASSERTION FAILED: "+n;throw _s(t),new Error(t)}function Pe(n,t){n||Ae(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pp(){return wl()==="http:"||wl()==="https:"}function wl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pp()||zd()||"connection"in navigator)?navigator.onLine:!0}function gp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Pe(e>t,"Short delay should be less than long delay!"),this.isMobile=qd()||$d()}get(){return mp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n,t){Pe(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new xr(3e4,6e4);function Ao(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Qn(n,t,e,r,s={}){return iu(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const l=Lr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),su.fetch()(ou(n,n.config.apiHost,e,l),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},i))})}async function iu(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},_p),t);try{const s=new Ep(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw hs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw hs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw hs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Io(n,f,d);_e(n,f)}}catch(s){if(s instanceof Me)throw s;_e(n,"network-request-failed",{message:String(s)})}}async function vp(n,t,e,r,s={}){const i=await Qn(n,t,e,r,s);return"mfaPendingCredential"in i&&_e(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ou(n,t,e,r){const s=`${t}${e}?${r}`;return n.config.emulator?wo(n.config,s):`${n.config.apiScheme}://${s}`}class Ep{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ue(this.auth,"network-request-failed")),yp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ue(n,t,r);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n,t){return Qn(n,"POST","/v1/accounts:delete",t)}async function au(n,t){return Qn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Tp(n,t=!1){const e=jt(n),r=await e.getIdToken(t),s=bo(r);Z(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vr(Bi(s.auth_time)),issuedAtTime:vr(Bi(s.iat)),expirationTime:vr(Bi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bi(n){return Number(n)*1e3}function bo(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gc(e);return s?JSON.parse(s):(_s("Failed to decode base64 JWT payload"),null)}catch(s){return _s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Al(n){const t=bo(n);return Z(t,"internal-error"),Z(typeof t.exp<"u","internal-error"),Z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Me&&wp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n){var t;const e=n.auth,r=await n.getIdToken(),s=await br(n,au(e,{idToken:r}));Z(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?lu(i.providerUserInfo):[],l=Rp(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function bp(n){const t=jt(n);await ks(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Rp(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function lu(n){return n.map(t=>{var{providerId:e}=t,r=Eo(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(n,t){const e=await iu(n,{},async()=>{const r=Lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=ou(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",su.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Pp(n,t){return Qn(n,"POST","/v2/accounts:revokeToken",Ao(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Z(t.idToken,"internal-error"),Z(typeof t.idToken<"u","internal-error"),Z(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Al(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Z(t.length!==0,"internal-error");const e=Al(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await Sp(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new Mn;return r&&(Z(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,t){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class be{constructor(t){var{uid:e,auth:r,stsTokenManager:s}=t,i=Eo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await br(this,this.stsTokenManager.getToken(this.auth,t));return Z(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Tp(this,t)}reload(){return bp(this)}_assign(t){this!==t&&(Z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new be(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await ks(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(we(this.auth.app))return Promise.reject(pn(this.auth));const t=await this.getIdToken();return await br(this,Ip(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,s,i,a,l,u,d,f;const g=(r=e.displayName)!==null&&r!==void 0?r:void 0,m=(s=e.email)!==null&&s!==void 0?s:void 0,I=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,A=(a=e.photoURL)!==null&&a!==void 0?a:void 0,S=(l=e.tenantId)!==null&&l!==void 0?l:void 0,k=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,q=(d=e.createdAt)!==null&&d!==void 0?d:void 0,H=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:Q,isAnonymous:$,providerData:j,stsTokenManager:T}=e;Z(F&&T,t,"internal-error");const _=Mn.fromJSON(this.name,T);Z(typeof F=="string",t,"internal-error"),qe(g,t.name),qe(m,t.name),Z(typeof Q=="boolean",t,"internal-error"),Z(typeof $=="boolean",t,"internal-error"),qe(I,t.name),qe(A,t.name),qe(S,t.name),qe(k,t.name),qe(q,t.name),qe(H,t.name);const v=new be({uid:F,auth:t,email:m,emailVerified:Q,displayName:g,isAnonymous:$,photoURL:A,phoneNumber:I,tenantId:S,stsTokenManager:_,createdAt:q,lastLoginAt:H});return j&&Array.isArray(j)&&(v.providerData=j.map(E=>Object.assign({},E))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(t,e,r=!1){const s=new Mn;s.updateFromServerResponse(e);const i=new be({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ks(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Mn;l.updateFromIdToken(r);const u=new be({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new Map;function Re(n){Pe(n instanceof Function,"Expected a class definition");let t=bl.get(n);return t?(Pe(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,bl.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}cu.type="NONE";const Rl=cu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n,t,e){return`firebase:${n}:${t}:${e}`}class Ln{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ys(this.userKey,s.apiKey,i),this.fullPersistenceKey=ys("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?be._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Ln(Re(Rl),t,r);const s=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Re(Rl);const a=ys(r,t.config.apiKey,t.name);let l=null;for(const d of e)try{const f=await d._get(a);if(f){const g=be._fromJSON(t,f);d!==i&&(l=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ln(i,t,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(e.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Ln(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(du(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(uu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pu(t))return"Blackberry";if(mu(t))return"Webos";if(Ro(t))return"Safari";if((t.includes("chrome/")||hu(t))&&!t.includes("edge/"))return"Chrome";if(fu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uu(n=qt()){return/firefox\//i.test(n)}function Ro(n=qt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hu(n=qt()){return/crios\//i.test(n)}function du(n=qt()){return/iemobile/i.test(n)}function fu(n=qt()){return/android/i.test(n)}function pu(n=qt()){return/blackberry/i.test(n)}function mu(n=qt()){return/webos/i.test(n)}function Hs(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cp(n=qt()){var t;return Hs(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function kp(){return Hd()&&document.documentMode===10}function gu(n=qt()){return Hs(n)||fu(n)||mu(n)||pu(n)||/windows phone/i.test(n)||du(n)}function Dp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,t=[]){let e;switch(n){case"Browser":e=Sl(qt());break;case"Worker":e=`${Sl(qt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Kn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,l)=>{try{const u=t(i);a(u)}catch(u){l(u)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(n,t={}){return Qn(n,"GET","/v2/passwordPolicy",Ao(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=6;class Mp{constructor(t){var e,r,s,i;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Op,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pl(this),this.idTokenSubscription=new Pl(this),this.beforeStateQueue=new Vp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ru,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Re(e)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await au(this,{idToken:t}),r=await be._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(we(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ks(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=gp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(we(this.app))return Promise.reject(pn(this));const e=t?jt(t):null;return e&&Z(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return we(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return we(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Np(this),e=new Mp(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Mr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pp(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Re(t)||this._popupRedirectResolver;Z(e,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[Re(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,s);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_u(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&dp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gs(n){return jt(n)}class Pl{constructor(t){this.auth=t,this.observer=null,this.addObserver=Zd(e=>this.observer=e)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xp(n){So=n}function Up(n){return So.loadJS(n)}function Fp(){return So.gapiScript}function Bp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n,t){const e=vo(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(Ss(i,t??{}))return s;_e(s,"already-initialized")}return e.initialize({options:t})}function jp(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Re);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function zp(n,t,e){const r=Gs(n);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=yu(t),{host:a,port:l}=$p(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Hp()}function yu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function $p(n){const t=yu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Cl(a)}}}function Cl(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Hp(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ae("not implemented")}_getIdTokenResponse(t){return Ae("not implemented")}_linkToIdToken(t,e){return Ae("not implemented")}_getReauthenticationResolver(t){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,t){return vp(n,"POST","/v1/accounts:signInWithIdp",Ao(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="http://localhost";class En extends vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new En(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):_e("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=e,i=Eo(e,["providerId","signInMethod"]);if(!r||!s)return null;const a=new En(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return xn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,xn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,xn(t,e)}buildRequest(){const t={requestUri:Gp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Lr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Po{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Ur{constructor(){super("facebook.com")}static credential(t){return En._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return je.credentialFromTaggedObject(t)}static credentialFromError(t){return je.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return je.credential(t.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return En._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ie.credential(e,r)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Ur{constructor(){super("github.com")}static credential(t){return En._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ze.credentialFromTaggedObject(t)}static credentialFromError(t){return ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ze.credential(t.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ur{constructor(){super("twitter.com")}static credential(t,e){return En._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return $e.credential(e,r)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await be._fromIdTokenResponse(t,r,s),a=kl(r);return new Bn({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=kl(r);return new Bn({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Me{constructor(t,e,r,s){var i;super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Ds(t,e,r,s)}}function Eu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ds._fromErrorAndOperation(n,i,t,r):i})}async function Wp(n,t,e=!1){const r=await br(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Bn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(n,t,e=!1){const{auth:r}=n;if(we(r.app))return Promise.reject(pn(r));const s="reauthenticate";try{const i=await br(n,Eu(r,s,t,n),e);Z(i.idToken,r,"internal-error");const a=bo(i.idToken);Z(a,r,"internal-error");const{sub:l}=a;return Z(n.uid===l,r,"user-mismatch"),Bn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_e(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(n,t,e=!1){if(we(n.app))return Promise.reject(pn(n));const r="signIn",s=await Eu(n,r,t),i=await Bn._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}function Xp(n,t,e,r){return jt(n).onIdTokenChanged(t,e,r)}function Jp(n,t,e){return jt(n).beforeAuthStateChanged(t,e)}function Co(n,t,e,r){return jt(n).onAuthStateChanged(t,e,r)}function Yp(n){return jt(n).signOut()}const Vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(){const n=qt();return Ro(n)||Hs(n)}const tm=1e3,em=10;class Tu extends Iu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zp()&&Dp(),this.fallbackToPolling=gu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);kp()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,em):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Tu.type="LOCAL";const nm=Tu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends Iu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}wu.type="SESSION";const Au=wu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new Ws(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(e.origin,i)),u=await rm(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ws.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=ko("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return window}function im(n){fe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function om(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function am(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lm(){return bu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="firebaseLocalStorageDb",cm=1,Ns="firebaseLocalStorage",Su="fbase_key";class Fr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ks(n,t){return n.transaction([Ns],t?"readwrite":"readonly").objectStore(Ns)}function um(){const n=indexedDB.deleteDatabase(Ru);return new Fr(n).toPromise()}function Zi(){const n=indexedDB.open(Ru,cm);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ns,{keyPath:Su})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ns)?t(r):(r.close(),await um(),t(await Zi()))})})}async function Dl(n,t,e){const r=Ks(n,!0).put({[Su]:t,value:e});return new Fr(r).toPromise()}async function hm(n,t){const e=Ks(n,!1).get(t),r=await new Fr(e).toPromise();return r===void 0?null:r.value}function Vl(n,t){const e=Ks(n,!0).delete(t);return new Fr(e).toPromise()}const dm=800,fm=3;class Pu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>fm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(lm()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await om(),!this.activeServiceWorker)return;this.sender=new sm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zi();return await Dl(t,Vs,"1"),await Vl(t,Vs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dl(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>hm(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Vl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Fr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pu.type="LOCAL";const pm=Pu;new xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n,t){return t?Re(t):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends vu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return xn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return xn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function mm(n){return Qp(n.auth,new Do(n),n.bypassAuthState)}function gm(n){const{auth:t,user:e}=n;return Z(e,t,"internal-error"),Kp(e,new Do(n),n.bypassAuthState)}async function _m(n){const{auth:t,user:e}=n;return Z(e,t,"internal-error"),Wp(e,new Do(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mm;case"linkViaPopup":case"linkViaRedirect":return _m;case"reauthViaPopup":case"reauthViaRedirect":return gm;default:_e(this.auth,"internal-error")}}resolve(t){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new xr(2e3,1e4);async function vm(n,t,e){if(we(n.app))return Promise.reject(ue(n,"operation-not-supported-in-this-environment"));const r=Gs(n);fp(n,t,Po);const s=Cu(r,e);return new dn(r,"signInViaPopup",t,s).executeNotNull()}class dn extends ku{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Z(t,this.auth,"internal-error"),t}async onExecution(){Pe(this.filter.length===1,"Popup operations only handle one event");const t=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ym.get())};t()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="pendingRedirect",vs=new Map;class Im extends ku{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=vs.get(this.auth._key());if(!t){try{const r=await Tm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}vs.set(this.auth._key(),t)}return this.bypassAuthState||vs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tm(n,t){const e=bm(t),r=Am(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function wm(n,t){vs.set(n._key(),t)}function Am(n){return Re(n._redirectPersistence)}function bm(n){return ys(Em,n.config.apiKey,n.name)}async function Rm(n,t,e=!1){if(we(n.app))return Promise.reject(pn(n));const r=Gs(n),s=Cu(r,t),a=await new Im(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=10*60*1e3;class Pm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Cm(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Du(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(ue(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nl(t))}saveEventToCache(t){this.cachedEventUids.add(Nl(t)),this.lastProcessedEventTime=Date.now()}}function Nl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Du({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Cm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Du(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,t={}){return Qn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vm=/^https?/;async function Nm(n){if(n.config.emulator)return;const{authorizedDomains:t}=await km(n);for(const e of t)try{if(Om(e))return}catch{}_e(n,"unauthorized-domain")}function Om(n){const t=Ji(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!Vm.test(e))return!1;if(Dm.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new xr(3e4,6e4);function Ol(){const n=fe().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Lm(n){return new Promise((t,e)=>{var r,s,i;function a(){Ol(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ol(),e(ue(n,"network-request-failed"))},timeout:Mm.get()})}if(!((s=(r=fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=fe().gapi)===null||i===void 0)&&i.load)a();else{const l=Bp("iframefcb");return fe()[l]=()=>{gapi.load?a():e(ue(n,"network-request-failed"))},Up(`${Fp()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw Es=null,t})}let Es=null;function xm(n){return Es=Es||Lm(n),Es}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new xr(5e3,15e3),Fm="__/auth/iframe",Bm="emulator/auth/iframe",qm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zm(n){const t=n.config;Z(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?wo(t,Bm):`https://${n.config.authDomain}/${Fm}`,r={apiKey:t.apiKey,appName:n.name,v:Kn},s=jm.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${Lr(r).slice(1)}`}async function $m(n){const t=await xm(n),e=fe().gapi;return Z(e,n,"internal-error"),t.open({where:document.body,url:zm(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ue(n,"network-request-failed"),l=fe().setTimeout(()=>{i(a)},Um.get());function u(){fe().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gm=500,Wm=600,Km="_blank",Qm="http://localhost";class Ml{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xm(n,t,e,r=Gm,s=Wm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Hm),{width:r.toString(),height:s.toString(),top:i,left:a}),d=qt().toLowerCase();e&&(l=hu(d)?Km:e),uu(d)&&(t=t||Qm,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[I,A])=>`${m}${I}=${A},`,"");if(Cp(d)&&l!=="_self")return Jm(t||"",l),new Ml(null);const g=window.open(t||"",l,f);Z(g,n,"popup-blocked");try{g.focus()}catch{}return new Ml(g)}function Jm(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="__/auth/handler",Zm="emulator/auth/handler",tg=encodeURIComponent("fac");async function Ll(n,t,e,r,s,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Kn,eventId:s};if(t instanceof Po){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Yd(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(t instanceof Ur){const f=t.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${tg}=${encodeURIComponent(u)}`:"";return`${eg(n)}?${Lr(l).slice(1)}${d}`}function eg({config:n}){return n.emulator?wo(n,Zm):`https://${n.authDomain}/${Ym}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="webStorageSupport";class ng{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Au,this._completeRedirectFn=Rm,this._overrideRedirectResult=wm}async _openPopup(t,e,r,s){var i;Pe((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ll(t,e,r,Ji(),s);return Xm(t,a,ko())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await Ll(t,e,r,Ji(),s);return im(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Pe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await $m(t),r=new Pm(t);return e.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(qi,{type:qi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qi];a!==void 0&&e(!!a),_e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Nm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return gu()||Ro()||Hs()}}const rg=ng;var xl="@firebase/auth",Ul="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function og(n){Fn(new yn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;Z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_u(n)},d=new Lp(r,s,i,u);return jp(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Fn(new yn("auth-internal",t=>{const e=Gs(t.getProvider("auth").getImmediate());return(r=>new sg(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(xl,Ul,ig(n)),Ke(xl,Ul,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=5*60,lg=Qc("authIdTokenMaxAge")||ag;let Fl=null;const cg=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>lg)return;const s=e==null?void 0:e.token;Fl!==s&&(Fl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function to(n=Zc()){const t=vo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=qp(n,{popupRedirectResolver:rg,persistence:[pm,nm,Au]}),r=Qc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=cg(i.toString());Jp(e,a,()=>a(e.currentUser)),Xp(e,l=>a(l))}}const s=Wc("auth");return s&&zp(e,`http://${s}`),e}function ug(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}xp({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=ue("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",ug().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});og("Browser");var Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mn,Vu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,_){function v(){}v.prototype=_.prototype,T.D=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,w,b){for(var y=Array(arguments.length-2),X=2;X<arguments.length;X++)y[X-2]=arguments[X];return _.prototype[w].apply(E,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var w=0;16>w;++w)E[w]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(w=0;16>w;++w)E[w]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],w=T.g[2];var b=T.g[3],y=_+(b^v&(w^b))+E[0]+3614090360&4294967295;_=v+(y<<7&4294967295|y>>>25),y=b+(w^_&(v^w))+E[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=w+(v^b&(_^v))+E[2]+606105819&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(_^w&(b^_))+E[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=_+(b^v&(w^b))+E[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(w^_&(v^w))+E[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=w+(v^b&(_^v))+E[6]+2821735955&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(_^w&(b^_))+E[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=_+(b^v&(w^b))+E[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(w^_&(v^w))+E[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=w+(v^b&(_^v))+E[10]+4294925233&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(_^w&(b^_))+E[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=_+(b^v&(w^b))+E[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(w^_&(v^w))+E[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=w+(v^b&(_^v))+E[14]+2792965006&4294967295,w=b+(y<<17&4294967295|y>>>15),y=v+(_^w&(b^_))+E[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=_+(w^b&(v^w))+E[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(_^v))+E[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=w+(_^v&(b^_))+E[11]+643717713&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(w^b))+E[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=_+(w^b&(v^w))+E[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(_^v))+E[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=w+(_^v&(b^_))+E[15]+3634488961&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(w^b))+E[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=_+(w^b&(v^w))+E[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(_^v))+E[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=w+(_^v&(b^_))+E[3]+4107603335&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(w^b))+E[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=_+(w^b&(v^w))+E[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^w&(_^v))+E[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=w+(_^v&(b^_))+E[7]+1735328473&4294967295,w=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(w^b))+E[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=_+(v^w^b)+E[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^w)+E[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=w+(b^_^v)+E[11]+1839030562&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^_)+E[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=_+(v^w^b)+E[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^w)+E[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=w+(b^_^v)+E[7]+4139469664&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^_)+E[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=_+(v^w^b)+E[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^w)+E[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=w+(b^_^v)+E[3]+3572445317&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^_)+E[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=_+(v^w^b)+E[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^w)+E[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=w+(b^_^v)+E[15]+530742520&4294967295,w=b+(y<<16&4294967295|y>>>16),y=v+(w^b^_)+E[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=_+(w^(v|~b))+E[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~w))+E[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=w+(_^(b|~v))+E[14]+2878612391&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~_))+E[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=_+(w^(v|~b))+E[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~w))+E[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=w+(_^(b|~v))+E[10]+4293915773&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~_))+E[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=_+(w^(v|~b))+E[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~w))+E[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=w+(_^(b|~v))+E[6]+2734768916&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~_))+E[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=_+(w^(v|~b))+E[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~w))+E[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=w+(_^(b|~v))+E[2]+718787259&4294967295,w=b+(y<<15&4294967295|y>>>17),y=v+(b^(w|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var v=_-this.blockSize,E=this.B,w=this.h,b=0;b<_;){if(w==0)for(;b<=v;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(E[w++]=T.charCodeAt(b++),w==this.blockSize){s(this,E),w=0;break}}else for(;b<_;)if(E[w++]=T[b++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var v=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=v&255,v/=256;for(this.u(T),T=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)T[v++]=this.g[_]>>>E&255;return T};function i(T,_){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function a(T,_){this.h=_;for(var v=[],E=!0,w=T.length-1;0<=w;w--){var b=T[w]|0;E&&b==_||(v[w]=b,E=!1)}this.g=v}var l={};function u(T){return-128<=T&&128>T?i(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return k(d(-T));for(var _=[],v=1,E=0;T>=v;E++)_[E]=T/v|0,v*=4294967296;return new a(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return k(f(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(_,8)),E=g,w=0;w<T.length;w+=8){var b=Math.min(8,T.length-w),y=parseInt(T.substring(w,w+b),_);8>b?(b=d(Math.pow(_,b)),E=E.j(b).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var g=u(0),m=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(S(this))return-k(this).m();for(var T=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(S(this))return"-"+k(this).toString(T);for(var _=d(Math.pow(T,6)),v=this,E="";;){var w=Q(v,_).g;v=q(v,w.j(_));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=w,A(v))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function S(T){return T.h==-1}n.l=function(T){return T=q(this,T),S(T)?-1:A(T)?0:1};function k(T){for(var _=T.g.length,v=[],E=0;E<_;E++)v[E]=~T.g[E];return new a(v,~T.h).add(m)}n.abs=function(){return S(this)?k(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0,w=0;w<=_;w++){var b=E+(this.i(w)&65535)+(T.i(w)&65535),y=(b>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=y>>>16,b&=65535,y&=65535,v[w]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function q(T,_){return T.add(k(_))}n.j=function(T){if(A(this)||A(T))return g;if(S(this))return S(T)?k(this).j(k(T)):k(k(this).j(T));if(S(T))return k(this.j(k(T)));if(0>this.l(I)&&0>T.l(I))return d(this.m()*T.m());for(var _=this.g.length+T.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var b=this.i(E)>>>16,y=this.i(E)&65535,X=T.i(w)>>>16,et=T.i(w)&65535;v[2*E+2*w]+=y*et,H(v,2*E+2*w),v[2*E+2*w+1]+=b*et,H(v,2*E+2*w+1),v[2*E+2*w+1]+=y*X,H(v,2*E+2*w+1),v[2*E+2*w+2]+=b*X,H(v,2*E+2*w+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function H(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function F(T,_){this.g=T,this.h=_}function Q(T,_){if(A(_))throw Error("division by zero");if(A(T))return new F(g,g);if(S(T))return _=Q(k(T),_),new F(k(_.g),k(_.h));if(S(_))return _=Q(T,k(_)),new F(k(_.g),_.h);if(30<T.g.length){if(S(T)||S(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=_;0>=E.l(T);)v=$(v),E=$(E);var w=j(v,1),b=j(E,1);for(E=j(E,2),v=j(v,2);!A(E);){var y=b.add(E);0>=y.l(T)&&(w=w.add(v),b=y),E=j(E,1),v=j(v,1)}return _=q(T,w.j(_)),new F(w,_)}for(w=g;0<=T.l(_);){for(v=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(v),y=b.j(_);S(y)||0<y.l(T);)v-=E,b=d(v),y=b.j(_);A(b)&&(b=m),w=w.add(b),T=q(T,y)}return new F(w,T)}n.A=function(T){return Q(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&T.i(E);return new a(v,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|T.i(E);return new a(v,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^T.i(E);return new a(v,this.h^T.h)};function $(T){for(var _=T.g.length+1,v=[],E=0;E<_;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(v,T.h)}function j(T,_){var v=_>>5;_%=32;for(var E=T.g.length-v,w=[],b=0;b<E;b++)w[b]=0<_?T.i(b+v)>>>_|T.i(b+v+1)<<32-_:T.i(b+v);return new a(w,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,mn=a}).apply(typeof Bl<"u"?Bl:typeof self<"u"?self:typeof window<"u"?window:{});var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nu,Ou,gr,Mu,Is,eo,Lu,xu,Uu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ds=="object"&&ds];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break t;h=h[R]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,R={next:function(){if(!p&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function m(o,c,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function I(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,R,P){for(var U=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)U[Et-2]=arguments[Et];return c.prototype[R].apply(p,U)}}function S(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function k(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=o.length||0,P=p.length||0;o.length=R+P;for(let U=0;U<P;U++)o[R+U]=p[U]}else o.push(p)}}class q{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var $=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function j(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function _(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function y(){var o=mt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class X{constructor(){this.h=this.g=null}add(c,h){const p=et.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var et=new q(()=>new _t,o=>o.reset());class _t{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,ct=!1,mt=new X,kt=()=>{const o=l.Promise.resolve(void 0);dt=()=>{o.then(yt)}};var yt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var c=et;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ct=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var nt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function st(o,c){if(L.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if($){t:{try{Q(c.nodeName);var R=!0;break t}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&st.aa.h.call(this)}}A(st,L);var bt={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),Sn=0;function hi(o,c,h,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++Sn,this.da=this.fa=!1}function Le(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o){this.src=o,this.g={},this.h=0}Qr.prototype.add=function(o,c,h,p,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var U=fi(o,c,p,R);return-1<U?(c=o[U],h||(c.fa=!1)):(c=new hi(c,this.src,P,!!p,R),c.fa=h,o.push(c)),c};function di(o,c){var h=c.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(Le(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function fi(o,c,h,p){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return R}return-1}var pi="closure_lm_"+(1e6*Math.random()|0),mi={};function fa(o,c,h,p,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)fa(o,c[P],h,p,R);return null}return h=ga(h),o&&o[Yt]?o.K(c,h,d(p)?!!p.capture:!!p,R):Yh(o,c,h,!1,p,R)}function Yh(o,c,h,p,R,P){if(!c)throw Error("Invalid event type");var U=d(R)?!!R.capture:!!R,Et=_i(o);if(Et||(o[pi]=Et=new Qr(o)),h=Et.add(c,h,p,U,P),h.proxy)return h;if(p=Zh(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)nt||(R=U),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(ma(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Zh(){function o(h){return c.call(o.src,o.listener,h)}const c=td;return o}function pa(o,c,h,p,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)pa(o,c[P],h,p,R);else p=d(p)?!!p.capture:!!p,h=ga(h),o&&o[Yt]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=fi(P,h,p,R),-1<h&&(Le(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=_i(o))&&(c=o.g[c.toString()],o=-1,c&&(o=fi(c,h,p,R)),(h=-1<o?c[o]:null)&&gi(h))}function gi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Yt])di(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(ma(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=_i(c))?(di(h,o),h.h==0&&(h.src=null,c[pi]=null)):Le(o)}}}function ma(o){return o in mi?mi[o]:mi[o]="on"+o}function td(o,c){if(o.da)o=!0;else{c=new st(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&gi(o),o=h.call(p,c)}return o}function _i(o){return o=o[pi],o instanceof Qr?o:null}var yi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(o){return typeof o=="function"?o:(o[yi]||(o[yi]=function(c){return o.handleEvent(c)}),o[yi])}function zt(){ft.call(this),this.i=new Qr(this),this.M=this,this.F=null}A(zt,ft),zt.prototype[Yt]=!0,zt.prototype.removeEventListener=function(o,c,h,p){pa(this,o,c,h,p)};function Xt(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new L(c,o);else if(c instanceof L)c.target=c.target||o;else{var R=c;c=new L(p,o),E(c,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var U=c.g=h[P];R=Xr(U,p,!0,c)&&R}if(U=c.g=o,R=Xr(U,p,!0,c)&&R,R=Xr(U,p,!1,c)&&R,h)for(P=0;P<h.length;P++)U=c.g=h[P],R=Xr(U,p,!1,c)&&R}zt.prototype.N=function(){if(zt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Le(h[p]);delete o.g[c],o.h--}}this.F=null},zt.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},zt.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Xr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var U=c[P];if(U&&!U.da&&U.capture==h){var Et=U.listener,Lt=U.ha||U.src;U.fa&&di(o.i,U),R=Et.call(Lt,p)!==!1&&R}}return R&&!p.defaultPrevented}function _a(o,c,h){if(typeof o=="function")h&&(o=m(o,h));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function ya(o){o.g=_a(()=>{o.g=null,o.i&&(o.i=!1,ya(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class ed extends ft{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ya(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tr(o){ft.call(this),this.h=o,this.g={}}A(tr,ft);var va=[];function Ea(o){j(o.g,function(c,h){this.g.hasOwnProperty(h)&&gi(c)},o),o.g={}}tr.prototype.N=function(){tr.aa.N.call(this),Ea(this)},tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vi=l.JSON.stringify,nd=l.JSON.parse,rd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ei(){}Ei.prototype.h=null;function Ia(o){return o.h||(o.h=o.i())}function Ta(){}var er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ii(){L.call(this,"d")}A(Ii,L);function Ti(){L.call(this,"c")}A(Ti,L);var an={},wa=null;function Jr(){return wa=wa||new zt}an.La="serverreachability";function Aa(o){L.call(this,an.La,o)}A(Aa,L);function nr(o){const c=Jr();Xt(c,new Aa(c))}an.STAT_EVENT="statevent";function ba(o,c){L.call(this,an.STAT_EVENT,o),this.stat=c}A(ba,L);function Jt(o){const c=Jr();Xt(c,new ba(c,o))}an.Ma="timingevent";function Ra(o,c){L.call(this,an.Ma,o),this.size=c}A(Ra,L);function rr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function sr(){this.g=!0}sr.prototype.xa=function(){this.g=!1};function sd(o,c,h,p,R,P){o.info(function(){if(o.g)if(P)for(var U="",Et=P.split("&"),Lt=0;Lt<Et.length;Lt++){var pt=Et[Lt].split("=");if(1<pt.length){var $t=pt[0];pt=pt[1];var Ht=$t.split("_");U=2<=Ht.length&&Ht[1]=="type"?U+($t+"="+pt+"&"):U+($t+"=redacted&")}}else U=null;else U=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+U})}function id(o,c,h,p,R,P,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+P+" "+U})}function Pn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+ad(o,h)+(p?" "+p:"")})}function od(o,c){o.info(function(){return"TIMEOUT: "+c})}sr.prototype.info=function(){};function ad(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var U=1;U<R.length;U++)R[U]=""}}}}return vi(h)}catch{return c}}var Yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wi;function Zr(){}A(Zr,Ei),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},wi=new Zr;function xe(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new tr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pa}function Pa(){this.i=null,this.g="",this.h=!1}var Ca={},Ai={};function bi(o,c,h){o.L=1,o.v=rs(ve(c)),o.m=h,o.P=!0,ka(o,null)}function ka(o,c){o.F=Date.now(),ts(o),o.A=ve(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),$a(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Pa,o.g=ll(o.j,h?c:null,!o.m),0<o.O&&(o.M=new ed(m(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(va[0]=R.toString()),R=va);for(var P=0;P<R.length;P++){var U=fa(h,R[P],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),nr(),sd(o.i,o.u,o.A,o.l,o.R,o.m)}xe.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ee(o)==3?c.j():this.Y(o)},xe.prototype.Y=function(o){try{if(o==this.g)t:{const Ht=Ee(this.g);var c=this.g.Ba();const Dn=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||Ja(this.g)))){this.J||Ht!=4||c==7||(c==8||0>=Dn?nr(3):nr(2)),Ri(this);var h=this.g.Z();this.X=h;e:if(Da(this)){var p=Ja(this.g);o="";var R=p.length,P=Ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),ir(this);var U="";break e}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,id(this.i,this.u,this.A,this.l,this.R,Ht,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Et,Lt=this.g;if((Et=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Et)){var pt=Et;break e}}pt=null}if(h=pt)Pn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Si(this,h);else{this.o=!1,this.s=3,Jt(12),ln(this),ir(this);break t}}if(this.P){h=!0;let ae;for(;!this.J&&this.C<U.length;)if(ae=ld(this,U),ae==Ai){Ht==4&&(this.s=4,Jt(14),h=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==Ca){this.s=4,Jt(15),Pn(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else Pn(this.i,this.l,ae,null),Si(this,ae);if(Da(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||U.length!=0||this.h.h||(this.s=1,Jt(16),h=!1),this.o=this.o&&h,!h)Pn(this.i,this.l,U,"[Invalid Chunked Response]"),ln(this),ir(this);else if(0<U.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Ni($t),$t.M=!0,Jt(11))}}else Pn(this.i,this.l,U,null),Si(this,U);Ht==4&&ln(this),this.o&&!this.J&&(Ht==4?sl(this.j,this):(this.o=!1,ts(this)))}else bd(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,Jt(12)):(this.s=0,Jt(13)),ln(this),ir(this)}}}catch{}finally{}};function Da(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ld(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Ai:(h=Number(c.substring(h,p)),isNaN(h)?Ca:(p+=1,p+h>c.length?Ai:(c=c.slice(p,p+h),o.C=p+h,c)))}xe.prototype.cancel=function(){this.J=!0,ln(this)};function ts(o){o.S=Date.now()+o.I,Va(o,o.I)}function Va(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rr(m(o.ba,o),c)}function Ri(o){o.B&&(l.clearTimeout(o.B),o.B=null)}xe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(od(this.i,this.A),this.L!=2&&(nr(),Jt(17)),ln(this),this.s=2,ir(this)):Va(this,this.S-o)};function ir(o){o.j.G==0||o.J||sl(o.j,o)}function ln(o){Ri(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ea(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Si(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Pi(h.h,o))){if(!o.K&&Pi(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ls(h),os(h);else break t;Vi(h),Jt(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=rr(m(h.Za,h),6e3));if(1>=Ma(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else un(h,11)}else if((o.K||h.g==o)&&ls(h),!H(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let pt=R[c];if(h.T=pt[0],pt=pt[1],h.G==2)if(pt[0]=="c"){h.K=pt[1],h.ia=pt[2];const $t=pt[3];$t!=null&&(h.la=$t,h.j.info("VER="+h.la));const Ht=pt[4];Ht!=null&&(h.Aa=Ht,h.j.info("SVER="+h.Aa));const Dn=pt[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(p=1.5*Dn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ae=o.g;if(ae){const us=ae.g?ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var P=p.h;P.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ci(P,P.h),P.h=null))}if(p.D){const Oi=ae.g?ae.g.getResponseHeader("X-HTTP-Session-Id"):null;Oi&&(p.ya=Oi,wt(p.I,p.D,Oi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var U=o;if(p.qa=al(p,p.J?p.ia:null,p.W),U.K){La(p.h,U);var Et=U,Lt=p.L;Lt&&(Et.I=Lt),Et.B&&(Ri(Et),ts(Et)),p.g=U}else nl(p);0<h.i.length&&as(h)}else pt[0]!="stop"&&pt[0]!="close"||un(h,7);else h.G==3&&(pt[0]=="stop"||pt[0]=="close"?pt[0]=="stop"?un(h,7):Di(h):pt[0]!="noop"&&h.l&&h.l.ta(pt),h.v=0)}}nr(4)}catch{}}var cd=class{constructor(o,c){this.g=o,this.map=c}};function Na(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ma(o){return o.h?1:o.g?o.g.size:0}function Pi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ci(o,c){o.g?o.g.add(c):o.h=c}function La(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Na.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return S(o.i)}function ud(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function hd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Ua(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=hd(o),p=ud(o),R=p.length,P=0;P<R;P++)c.call(void 0,p[P],h&&h[P],o)}var Fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),R=null;if(0<=p){var P=o[h].substring(0,p);R=o[h].substring(p+1)}else P=o[h];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function cn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cn){this.h=o.h,es(this,o.j),this.o=o.o,this.g=o.g,ns(this,o.s),this.l=o.l;var c=o.i,h=new lr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Ba(this,h),this.m=o.m}else o&&(c=String(o).match(Fa))?(this.h=!1,es(this,c[1]||"",!0),this.o=or(c[2]||""),this.g=or(c[3]||"",!0),ns(this,c[4]),this.l=or(c[5]||"",!0),Ba(this,c[6]||"",!0),this.m=or(c[7]||"")):(this.h=!1,this.i=new lr(null,this.h))}cn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ar(c,qa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ar(c,qa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ar(h,h.charAt(0)=="/"?md:pd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ar(h,_d)),o.join("")};function ve(o){return new cn(o)}function es(o,c,h){o.j=h?or(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ns(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ba(o,c,h){c instanceof lr?(o.i=c,yd(o.i,o.h)):(h||(c=ar(c,gd)),o.i=new lr(c,o.h))}function wt(o,c,h){o.i.set(c,h)}function rs(o){return wt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function or(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ar(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,fd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function fd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var qa=/[#\/\?@]/g,pd=/[#\?:]/g,md=/[#\?]/g,gd=/[#\?@]/g,_d=/#/g;function lr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ue(o){o.g||(o.g=new Map,o.h=0,o.i&&dd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=lr.prototype,n.add=function(o,c){Ue(this),this.i=null,o=Cn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ja(o,c){Ue(o),c=Cn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function za(o,c){return Ue(o),c=Cn(o,c),o.g.has(c)}n.forEach=function(o,c){Ue(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(c,R,p,this)},this)},this)},n.na=function(){Ue(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const R=o[p];for(let P=0;P<R.length;P++)h.push(c[p])}return h},n.V=function(o){Ue(this);let c=[];if(typeof o=="string")za(this,o)&&(c=c.concat(this.g.get(Cn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Ue(this),this.i=null,o=Cn(this,o),za(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function $a(o,c,h){ja(o,c),0<h.length&&(o.i=null,o.g.set(Cn(o,c),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const P=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var R=P;U[p]!==""&&(R+="="+encodeURIComponent(String(U[p]))),o.push(R)}}return this.i=o.join("&")};function Cn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function yd(o,c){c&&!o.j&&(Ue(o),o.i=null,o.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(ja(this,p),$a(this,R,h))},o)),o.j=c}function vd(o,c){const h=new sr;if(l.Image){const p=new Image;p.onload=I(Fe,h,"TestLoadImage: loaded",!0,c,p),p.onerror=I(Fe,h,"TestLoadImage: error",!1,c,p),p.onabort=I(Fe,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(Fe,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Ed(o,c){const h=new sr,p=new AbortController,R=setTimeout(()=>{p.abort(),Fe(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?Fe(h,"TestPingServer: ok",!0,c):Fe(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Fe(h,"TestPingServer: error",!1,c)})}function Fe(o,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function Id(){this.g=new rd}function Td(o,c,h){const p=h||"";try{Ua(o,function(R,P){let U=R;d(R)&&(U=vi(R)),c.push(p+P+"="+encodeURIComponent(U))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function cr(o){this.l=o.Ub||null,this.j=o.eb||!1}A(cr,Ei),cr.prototype.g=function(){return new ss(this.l,this.j)},cr.prototype.i=function(o){return function(){return o}}({});function ss(o,c){zt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ss,zt),n=ss.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,hr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ha(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ha(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ur(this):hr(this),this.readyState==3&&Ha(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ur(this))},n.Qa=function(o){this.g&&(this.response=o,ur(this))},n.ga=function(){this.g&&ur(this)};function ur(o){o.readyState=4,o.l=null,o.j=null,o.v=null,hr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function hr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ga(o){let c="";return j(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function ki(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Ga(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):wt(o,c,h))}function Pt(o){zt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Pt,zt);var wd=/^https?$/i,Ad=["POST","PUT"];n=Pt.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wi.g(),this.v=this.o?Ia(this.o):Ia(wi),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Wa(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ad,c,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,U]of h)this.g.setRequestHeader(P,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xa(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Wa(this,P)}};function Wa(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Ka(o),is(o)}function Ka(o){o.A||(o.A=!0,Xt(o,"complete"),Xt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xt(this,"complete"),Xt(this,"abort"),is(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),is(this,!0)),Pt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Qa(this):this.bb())},n.bb=function(){Qa(this)};function Qa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ee(o)!=4||o.Z()!=2)){if(o.u&&Ee(o)==4)_a(o.Ea,0,o);else if(Xt(o,"readystatechange"),Ee(o)==4){o.h=!1;try{const U=o.Z();t:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=U===0){var R=String(o.D).match(Fa)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!wd.test(R?R.toLowerCase():"")}h=p}if(h)Xt(o,"complete"),Xt(o,"success");else{o.m=6;try{var P=2<Ee(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Ka(o)}}finally{is(o)}}}}function is(o,c){if(o.g){Xa(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Xt(o,"ready");try{h.onreadystatechange=p}catch{}}}function Xa(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ee(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ee(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),nd(c)}};function Ja(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bd(o){const c={};o=(o.g&&2<=Ee(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(H(o[p]))continue;var h=w(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[R]||[];c[R]=P,P.push(h)}T(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ya(o){this.Aa=0,this.i=[],this.j=new sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dr("baseRetryDelayMs",5e3,o),this.cb=dr("retryDelaySeedMs",1e4,o),this.Wa=dr("forwardChannelMaxRetries",2,o),this.wa=dr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Na(o&&o.concurrentRequestLimit),this.Da=new Id,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ya.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){Jt(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=al(this,null,this.W),as(this)};function Di(o){if(Za(o),o.G==3){var c=o.U++,h=ve(o.I);if(wt(h,"SID",o.K),wt(h,"RID",c),wt(h,"TYPE","terminate"),fr(o,h),c=new xe(o,o.j,c),c.L=2,c.v=rs(ve(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ll(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ts(c)}ol(o)}function os(o){o.g&&(Ni(o),o.g.cancel(),o.g=null)}function Za(o){os(o),o.u&&(l.clearTimeout(o.u),o.u=null),ls(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function as(o){if(!Oa(o.h)&&!o.s){o.s=!0;var c=o.Ga;dt||kt(),ct||(dt(),ct=!0),mt.add(c,o),o.B=0}}function Rd(o,c){return Ma(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rr(m(o.Ga,o,c),il(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new xe(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=el(this,R,c),h=ve(this.I),wt(h,"RID",o),wt(h,"CVER",22),this.D&&wt(h,"X-HTTP-Session-Id",this.D),fr(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(Ga(P)))+"&"+c:this.m&&ki(h,this.m,P)),Ci(this.h,R),this.Ua&&wt(h,"TYPE","init"),this.P?(wt(h,"$req",c),wt(h,"SID","null"),R.T=!0,bi(R,h,null)):bi(R,h,c),this.G=2}}else this.G==3&&(o?tl(this,o):this.i.length==0||Oa(this.h)||tl(this))};function tl(o,c){var h;c?h=c.l:h=o.U++;const p=ve(o.I);wt(p,"SID",o.K),wt(p,"RID",h),wt(p,"AID",o.T),fr(o,p),o.m&&o.o&&ki(p,o.m,o.o),h=new xe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=el(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ci(o.h,h),bi(h,p,c)}function fr(o,c){o.H&&j(o.H,function(h,p){wt(c,p,h)}),o.l&&Ua({},function(h,p){wt(c,p,h)})}function el(o,c,h){h=Math.min(o.i.length,h);var p=o.l?m(o.l.Na,o.l,o):null;t:{var R=o.i;let P=-1;for(;;){const U=["count="+h];P==-1?0<h?(P=R[0].g,U.push("ofs="+P)):P=0:U.push("ofs="+P);let Et=!0;for(let Lt=0;Lt<h;Lt++){let pt=R[Lt].g;const $t=R[Lt].map;if(pt-=P,0>pt)P=Math.max(0,R[Lt].g-100),Et=!1;else try{Td($t,U,"req"+pt+"_")}catch{p&&p($t)}}if(Et){p=U.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,p}function nl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;dt||kt(),ct||(dt(),ct=!0),mt.add(c,o),o.v=0}}function Vi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rr(m(o.Fa,o),il(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rr(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Jt(10),os(this),rl(this))};function Ni(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rl(o){o.g=new xe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ve(o.qa);wt(c,"RID","rpc"),wt(c,"SID",o.K),wt(c,"AID",o.T),wt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&wt(c,"TO",o.ja),wt(c,"TYPE","xmlhttp"),fr(o,c),o.m&&o.o&&ki(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=rs(ve(c)),h.m=null,h.P=!0,ka(h,o)}n.Za=function(){this.C!=null&&(this.C=null,os(this),Vi(this),Jt(19))};function ls(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function sl(o,c){var h=null;if(o.g==c){ls(o),Ni(o),o.g=null;var p=2}else if(Pi(o.h,c))h=c.D,La(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=Jr(),Xt(p,new Ra(p,h)),as(o)}else nl(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&Rd(o,c)||p==2&&Vi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),R){case 1:un(o,5);break;case 4:un(o,10);break;case 3:un(o,6);break;default:un(o,2)}}}function il(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function un(o,c){if(o.j.info("Error code "+c),c==2){var h=m(o.fb,o),p=o.Xa;const R=!p;p=new cn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||es(p,"https"),rs(p),R?vd(p.toString(),h):Ed(p.toString(),h)}else Jt(2);o.G=0,o.l&&o.l.sa(c),ol(o),Za(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function ol(o){if(o.G=0,o.ka=[],o.l){const c=xa(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ka,c),k(o.ka,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.ra()}}function al(o,c,h){var p=h instanceof cn?ve(h):new cn(h);if(p.g!="")c&&(p.g=c+"."+p.g),ns(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new cn(null);p&&es(P,p),c&&(P.g=c),R&&ns(P,R),h&&(P.l=h),p=P}return h=o.D,c=o.ya,h&&c&&wt(p,h,c),wt(p,"VER",o.la),fr(o,p),p}function ll(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Pt(new cr({eb:h})):new Pt(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function cl(){}n=cl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function cs(){}cs.prototype.g=function(o,c){return new te(o,c)};function te(o,c){zt.call(this),this.g=new Ya(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!H(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new kn(this)}A(te,zt),te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},te.prototype.close=function(){Di(this.g)},te.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=vi(o),o=h);c.i.push(new cd(c.Ya++,o)),c.G==3&&as(c)},te.prototype.N=function(){this.g.l=null,delete this.j,Di(this.g),delete this.g,te.aa.N.call(this)};function ul(o){Ii.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}A(ul,Ii);function hl(){Ti.call(this),this.status=1}A(hl,Ti);function kn(o){this.g=o}A(kn,cl),kn.prototype.ua=function(){Xt(this.g,"a")},kn.prototype.ta=function(o){Xt(this.g,new ul(o))},kn.prototype.sa=function(o){Xt(this.g,new hl)},kn.prototype.ra=function(){Xt(this.g,"b")},cs.prototype.createWebChannel=cs.prototype.g,te.prototype.send=te.prototype.o,te.prototype.open=te.prototype.m,te.prototype.close=te.prototype.close,Uu=function(){return new cs},xu=function(){return Jr()},Lu=an,eo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,Is=Yr,Sa.COMPLETE="complete",Mu=Sa,Ta.EventType=er,er.OPEN="a",er.CLOSE="b",er.ERROR="c",er.MESSAGE="d",zt.prototype.listen=zt.prototype.K,gr=Ta,Ou=cr,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,Nu=Pt}).apply(typeof ds<"u"?ds:typeof self<"u"?self:typeof window<"u"?window:{});const ql="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new _o("@firebase/firestore");function pr(){return In.logLevel}function z(n,...t){if(In.logLevel<=lt.DEBUG){const e=t.map(Vo);In.debug(`Firestore (${Xn}): ${n}`,...e)}}function Ce(n,...t){if(In.logLevel<=lt.ERROR){const e=t.map(Vo);In.error(`Firestore (${Xn}): ${n}`,...e)}}function qn(n,...t){if(In.logLevel<=lt.WARN){const e=t.map(Vo);In.warn(`Firestore (${Xn}): ${n}`,...e)}}function Vo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n="Unexpected state"){const t=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: `+n;throw Ce(t),new Error(t)}function Tt(n,t){n||tt()}function it(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Wt.UNAUTHENTICATED))}shutdown(){}}class dg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class fg{constructor(t){this.t=t,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Tt(typeof r.accessToken=="string"),new Fu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Tt(t===null||typeof t=="string"),new Wt(t)}}class pg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new pg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _g{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Tt(typeof e.token=="string"),this.R=e.token,new gg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=yg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function gt(n,t){return n<t?-1:n>t?1:0}function jn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ot.fromMillis(Date.now())}static fromDate(t){return Ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gt(this.nanoseconds,t.nanoseconds):gt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new rt(t)}static min(){return new rt(new Ot(0,0))}static max(){return new rt(new Ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e,r){e===void 0?e=0:e>t.length&&tt(),r===void 0?r=t.length-e:r>t.length-e&&tt(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Rr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Rr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class At extends Rr{construct(t,e,r){return new At(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new At(e)}static emptyPath(){return new At([])}}const vg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Rr{construct(t,e,r){return new Ut(t,e,r)}static isValidIdentifier(t){return vg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ut(e)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.path=t}static fromPath(t){return new K(At.fromString(t))}static fromName(t){return new K(At.fromString(t).popFirst(5))}static empty(){return new K(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return At.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new K(new At(t.slice()))}}function Eg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=rt.fromTimestamp(r===1e9?new Ot(e+1,0):new Ot(e,r));return new Je(s,K.empty(),t)}function Ig(n){return new Je(n.readTime,n.key,-1)}class Je{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Je(rt.min(),K.empty(),-1)}static max(){return new Je(rt.max(),K.empty(),-1)}}function Tg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=K.comparator(n.documentKey,t.documentKey),e!==0?e:gt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ag{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==wg)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&tt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof M?e:M.resolve(e)}catch(e){return M.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):M.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):M.reject(e)}static resolve(t){return new M((e,r)=>{e(t)})}static reject(t){return new M((e,r)=>{r(t)})}static waitFor(t){return new M((e,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&e()},u=>r(u))}),a=!0,i===s&&e()})}static or(t){let e=M.resolve(!1);for(const r of t)e=e.next(s=>s?M.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new M((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;e(t[d]).next(f=>{a[d]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(t,e){return new M((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function bg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function qr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}No.oe=-1;function Qs(n){return n==null}function Os(n){return n===0&&1/n==-1/0}function Rg(n){return typeof n=="number"&&Number.isInteger(n)&&!Os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function bn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function qu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.comparator=t,this.root=e||xt.EMPTY}insert(t,e){return new St(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fs(this.root,t,this.comparator,!1)}getReverseIterator(){return new fs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fs(this.root,t,this.comparator,!0)}}class fs{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new xt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw tt();const t=this.left.check();if(t!==this.right.check())throw tt();return t+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw tt()}get value(){throw tt()}get color(){throw tt()}get left(){throw tt()}get right(){throw tt()}copy(t,e,r,s,i){return this}insert(t,e,r){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zl(this.data.getIterator())}getIteratorFrom(t){return new zl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Bt(this.comparator);return e.data=t,e}}class zl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.fields=t,t.sort(Ut.comparator)}static empty(){return new ne([])}unionWith(t){let e=new Bt(Ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return jn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ju("Invalid base64 string: "+i):i}}(t);return new Qt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const Sg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ye(n){if(Tt(!!n),typeof n=="string"){let t=0;const e=Sg.exec(n);if(Tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vt(n.seconds),nanos:Vt(n.nanos)}}function Vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tn(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Mo(n){const t=n.mapValue.fields.__previous_value__;return Oo(t)?Mo(t):t}function Sr(n){const t=Ye(n.mapValue.fields.__local_write_time__.timestampValue);return new Ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,e,r,s,i,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Pr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Pr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oo(n)?4:Cg(n)?9007199254740991:10:tt()}function ye(n,t){if(n===t)return!0;const e=wn(n);if(e!==wn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Sr(n).isEqual(Sr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ye(s.timestampValue),l=Ye(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return Tn(s.bytesValue).isEqual(Tn(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return Vt(s.geoPointValue.latitude)===Vt(i.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Vt(s.integerValue)===Vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Vt(s.doubleValue),l=Vt(i.doubleValue);return a===l?Os(a)===Os(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return jn(n.arrayValue.values||[],t.arrayValue.values||[],ye);case 10:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(jl(a)!==jl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ye(a[u],l[u])))return!1;return!0}(n,t);default:return tt()}}function Cr(n,t){return(n.values||[]).find(e=>ye(e,t))!==void 0}function zn(n,t){if(n===t)return 0;const e=wn(n),r=wn(t);if(e!==r)return gt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return gt(n.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Vt(i.integerValue||i.doubleValue),u=Vt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return $l(n.timestampValue,t.timestampValue);case 4:return $l(Sr(n),Sr(t));case 5:return gt(n.stringValue,t.stringValue);case 6:return function(i,a){const l=Tn(i),u=Tn(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=gt(l[d],u[d]);if(f!==0)return f}return gt(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,a){const l=gt(Vt(i.latitude),Vt(a.latitude));return l!==0?l:gt(Vt(i.longitude),Vt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,a){const l=i.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const f=zn(l[d],u[d]);if(f)return f}return gt(l.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,a){if(i===ps.mapValue&&a===ps.mapValue)return 0;if(i===ps.mapValue)return 1;if(a===ps.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=gt(u[g],f[g]);if(m!==0)return m;const I=zn(l[u[g]],d[f[g]]);if(I!==0)return I}return gt(u.length,f.length)}(n.mapValue,t.mapValue);default:throw tt()}}function $l(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return gt(n,t);const e=Ye(n),r=Ye(t),s=gt(e.seconds,r.seconds);return s!==0?s:gt(e.nanos,r.nanos)}function $n(n){return no(n)}function no(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ye(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Tn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return K.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=no(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${no(e.fields[a])}`;return s+"}"}(n.mapValue):tt()}function Hl(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ro(n){return!!n&&"integerValue"in n}function Lo(n){return!!n&&"arrayValue"in n}function Gl(n){return!!n&&"nullValue"in n}function Wl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ts(n){return!!n&&"mapValue"in n}function Er(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return bn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Er(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Er(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Cg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.value=t}static empty(){return new Zt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Ts(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Er(e)}setAll(t){let e=Ut.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=Er(a):s.push(l.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Ts(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ye(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Ts(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){bn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Zt(Er(this.value))}}function zu(n){const t=[];return bn(n.fields,(e,r)=>{const s=new Ut([e]);if(Ts(r)){const i=zu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new ne(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,r,s,i,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Kt(t,0,rt.min(),rt.min(),rt.min(),Zt.empty(),0)}static newFoundDocument(t,e,r,s){return new Kt(t,1,e,rt.min(),r,s,0)}static newNoDocument(t,e){return new Kt(t,2,e,rt.min(),rt.min(),Zt.empty(),0)}static newUnknownDocument(t,e){return new Kt(t,3,e,rt.min(),rt.min(),Zt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(rt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e){this.position=t,this.inclusive=e}}function Kl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),e.key):r=zn(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ql(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ye(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e="asc"){this.field=t,this.dir=e}}function kg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{}class Nt extends $u{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Vg(t,e,r):e==="array-contains"?new Mg(t,r):e==="in"?new Lg(t,r):e==="not-in"?new xg(t,r):e==="array-contains-any"?new Ug(t,r):new Nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ng(t,r):new Og(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(zn(e,this.value)):e!==null&&wn(this.value)===wn(e)&&this.matchesComparison(zn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return tt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends $u{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new de(t,e)}matches(t){return Hu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hu(n){return n.op==="and"}function Gu(n){return Dg(n)&&Hu(n)}function Dg(n){for(const t of n.filters)if(t instanceof de)return!1;return!0}function so(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(Gu(n))return n.filters.map(t=>so(t)).join(",");{const t=n.filters.map(e=>so(e)).join(",");return`${n.op}(${t})`}}function Wu(n,t){return n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.field.isEqual(s.field)&&ye(r.value,s.value)}(n,t):n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Wu(a,s.filters[l]),!0):!1}(n,t):void tt()}function Ku(n){return n instanceof Nt?function(e){return`${e.field.canonicalString()} ${e.op} ${$n(e.value)}`}(n):n instanceof de?function(e){return e.op.toString()+" {"+e.getFilters().map(Ku).join(" ,")+"}"}(n):"Filter"}class Vg extends Nt{constructor(t,e,r){super(t,e,r),this.key=K.fromName(r.referenceValue)}matches(t){const e=K.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ng extends Nt{constructor(t,e){super(t,"in",e),this.keys=Qu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Og extends Nt{constructor(t,e){super(t,"not-in",e),this.keys=Qu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Qu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>K.fromName(r.referenceValue))}class Mg extends Nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lo(e)&&Cr(e.arrayValue,this.value)}}class Lg extends Nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Cr(this.value.arrayValue,e)}}class xg extends Nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Cr(this.value.arrayValue,e)}}class Ug extends Nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Cr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,e=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Xl(n,t=null,e=[],r=[],s=null,i=null,a=null){return new Fg(n,t,e,r,s,i,a)}function xo(n){const t=it(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>so(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>$n(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>$n(r)).join(",")),t.ue=e}return t.ue}function Uo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!kg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Wu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ql(n.startAt,t.startAt)&&Ql(n.endAt,t.endAt)}function io(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bg(n,t,e,r,s,i,a,l){return new Jn(n,t,e,r,s,i,a,l)}function Xu(n){return new Jn(n)}function Jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ju(n){return n.collectionGroup!==null}function Ir(n){const t=it(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Bt(Ut.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new kr(i,r))}),e.has(Ut.keyField().canonicalString())||t.ce.push(new kr(Ut.keyField(),r))}return t.ce}function pe(n){const t=it(n);return t.le||(t.le=qg(t,Ir(n))),t.le}function qg(n,t){if(n.limitType==="F")return Xl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new kr(s.field,i)});const e=n.endAt?new Ms(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ms(n.startAt.position,n.startAt.inclusive):null;return Xl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function oo(n,t){const e=n.filters.concat([t]);return new Jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ls(n,t,e){return new Jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Xs(n,t){return Uo(pe(n),pe(t))&&n.limitType===t.limitType}function Yu(n){return`${xo(pe(n))}|lt:${n.limitType}`}function Vn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Ku(s)).join(", ")}]`),Qs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>$n(s)).join(",")),`Target(${r})`}(pe(n))}; limitType=${n.limitType})`}function Js(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of Ir(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Kl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Ir(r),s)||r.endAt&&!function(a,l,u){const d=Kl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Ir(r),s))}(n,t)}function jg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zu(n){return(t,e)=>{let r=!1;for(const s of Ir(n)){const i=zg(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zg(n,t,e){const r=n.field.isKeyField()?K.comparator(t.key,e.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?zn(u,d):tt()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return tt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){bn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return qu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new St(K.comparator);function ke(){return $g}const th=new St(K.comparator);function _r(...n){let t=th;for(const e of n)t=t.insert(e.key,e);return t}function eh(n){let t=th;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function fn(){return Tr()}function nh(){return Tr()}function Tr(){return new Yn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Hg=new St(K.comparator),Gg=new Bt(K.comparator);function at(...n){let t=Gg;for(const e of n)t=t.add(e);return t}const Wg=new Bt(gt);function Kg(){return Wg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(t)?"-0":t}}function sh(n){return{integerValue:""+n}}function Qg(n,t){return Rg(t)?sh(t):rh(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this._=void 0}}function Xg(n,t,e){return n instanceof xs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oo(i)&&(i=Mo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):n instanceof Dr?oh(n,t):n instanceof Vr?ah(n,t):function(s,i){const a=ih(s,i),l=Yl(a)+Yl(s.Pe);return ro(a)&&ro(s.Pe)?sh(l):rh(s.serializer,l)}(n,t)}function Jg(n,t,e){return n instanceof Dr?oh(n,t):n instanceof Vr?ah(n,t):e}function ih(n,t){return n instanceof Us?function(r){return ro(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class xs extends Ys{}class Dr extends Ys{constructor(t){super(),this.elements=t}}function oh(n,t){const e=lh(t);for(const r of n.elements)e.some(s=>ye(s,r))||e.push(r);return{arrayValue:{values:e}}}class Vr extends Ys{constructor(t){super(),this.elements=t}}function ah(n,t){let e=lh(t);for(const r of n.elements)e=e.filter(s=>!ye(s,r));return{arrayValue:{values:e}}}class Us extends Ys{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Yl(n){return Vt(n.integerValue||n.doubleValue)}function lh(n){return Lo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Dr&&s instanceof Dr||r instanceof Vr&&s instanceof Vr?jn(r.elements,s.elements,ye):r instanceof Us&&s instanceof Us?ye(r.Pe,s.Pe):r instanceof xs&&s instanceof xs}(n.transform,t.transform)}class Zg{constructor(t,e){this.version=t,this.transformResults=e}}class he{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new he}static exists(t){return new he(void 0,t)}static updateTime(t){return new he(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ws(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Zs{}function ch(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Fo(n.key,he.none()):new jr(n.key,n.data,he.none());{const e=n.data,r=Zt.empty();let s=new Bt(Ut.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new sn(n.key,r,new ne(s.toArray()),he.none())}}function t_(n,t,e){n instanceof jr?function(s,i,a){const l=s.value.clone(),u=tc(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof sn?function(s,i,a){if(!ws(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=tc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(uh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function wr(n,t,e,r){return n instanceof jr?function(i,a,l,u){if(!ws(i.precondition,a))return l;const d=i.value.clone(),f=ec(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof sn?function(i,a,l,u){if(!ws(i.precondition,a))return l;const d=ec(i.fieldTransforms,u,a),f=a.data;return f.setAll(uh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(i,a,l){return ws(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function e_(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=ih(r.transform,s||null);i!=null&&(e===null&&(e=Zt.empty()),e.set(r.field,i))}return e||null}function Zl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jn(r,s,(i,a)=>Yg(i,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class jr extends Zs{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sn extends Zs{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function tc(n,t,e){const r=new Map;Tt(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,Jg(a,l,e[s]))}return r}function ec(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,Xg(i,a,t))}return r}class Fo extends Zs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n_ extends Zs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&t_(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=wr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=wr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=nh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=e.has(s.key)?null:l;const u=ch(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(rt.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),at())}isEqual(t){return this.batchId===t.batchId&&jn(this.mutations,t.mutations,(e,r)=>Zl(e,r))&&jn(this.baseMutations,t.baseMutations,(e,r)=>Zl(e,r))}}class Bo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Tt(t.mutations.length===r.length);let s=function(){return Hg}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Bo(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,ut;function o_(n){switch(n){default:return tt();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function hh(n){if(n===void 0)return Ce("GRPC error has no .code"),V.UNKNOWN;switch(n){case Dt.OK:return V.OK;case Dt.CANCELLED:return V.CANCELLED;case Dt.UNKNOWN:return V.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return V.INTERNAL;case Dt.UNAVAILABLE:return V.UNAVAILABLE;case Dt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Dt.NOT_FOUND:return V.NOT_FOUND;case Dt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Dt.ABORTED:return V.ABORTED;case Dt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Dt.DATA_LOSS:return V.DATA_LOSS;default:return tt()}}(ut=Dt||(Dt={}))[ut.OK=0]="OK",ut[ut.CANCELLED=1]="CANCELLED",ut[ut.UNKNOWN=2]="UNKNOWN",ut[ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ut[ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ut[ut.NOT_FOUND=5]="NOT_FOUND",ut[ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",ut[ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",ut[ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",ut[ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ut[ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ut[ut.ABORTED=10]="ABORTED",ut[ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",ut[ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",ut[ut.INTERNAL=13]="INTERNAL",ut[ut.UNAVAILABLE=14]="UNAVAILABLE",ut[ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new mn([4294967295,4294967295],0);function nc(n){const t=a_().encode(n),e=new Vu;return e.update(t),new Uint8Array(e.digest())}function rc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new mn([e,r],0),new mn([s,i],0)]}class qo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new yr(`Invalid padding: ${e}`);if(r<0)throw new yr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new yr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new yr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=mn.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(mn.fromNumber(r)));return s.compare(l_)===1&&(s=new mn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=nc(t),[r,s]=rc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new qo(i,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=nc(t),[r,s]=rc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,zr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ti(rt.min(),s,new St(gt),ke(),at())}}class zr{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new zr(r,e,at(),at(),at())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class dh{constructor(t,e){this.targetId=t,this.me=e}}class fh{constructor(t,e,r=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class sc{constructor(){this.fe=0,this.ge=oc(),this.pe=Qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=at(),e=at(),r=at();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:tt()}}),new zr(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=oc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class c_{constructor(t){this.Le=t,this.Be=new Map,this.ke=ke(),this.qe=ic(),this.Qe=new St(gt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:tt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const i=s.target;if(io(i))if(r===0){const a=new K(i.path);this.Ue(e,a,Kt.newNoDocument(a,rt.min()))}else Tt(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,l;try{a=Tn(r).toUint8Array()}catch(u){if(u instanceof ju)return qn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qo(a,s,i)}catch(u){return qn(u instanceof yr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&io(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Kt.newNoDocument(u,t))}i.be&&(e.set(a,i.Ce()),i.ve())}});let r=at();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new ti(t,e,this.Qe,this.ke,r);return this.ke=ke(),this.qe=ic(),this.Qe=new St(gt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new sc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Bt(gt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new sc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ic(){return new St(K.comparator)}function oc(){return new St(K.comparator)}const u_={asc:"ASCENDING",desc:"DESCENDING"},h_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d_={and:"AND",or:"OR"};class f_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ao(n,t){return n.useProto3Json||Qs(t)?t:{value:t}}function Fs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ph(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function p_(n,t){return Fs(n,t.toTimestamp())}function me(n){return Tt(!!n),rt.fromTimestamp(function(e){const r=Ye(e);return new Ot(r.seconds,r.nanos)}(n))}function jo(n,t){return lo(n,t).canonicalString()}function lo(n,t){const e=function(s){return new At(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function mh(n){const t=At.fromString(n);return Tt(Eh(t)),t}function co(n,t){return jo(n.databaseId,t.path)}function ji(n,t){const e=mh(t);if(e.get(1)!==n.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new K(_h(e))}function gh(n,t){return jo(n.databaseId,t)}function m_(n){const t=mh(n);return t.length===4?At.emptyPath():_h(t)}function uo(n){return new At(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _h(n){return Tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ac(n,t,e){return{name:co(n,t),fields:e.value.mapValue.fields}}function g_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:tt()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(Tt(f===void 0||typeof f=="string"),Qt.fromBase64String(f||"")):(Tt(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Qt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const f=d.code===void 0?V.UNKNOWN:hh(d.code);return new B(f,d.message||"")}(a);e=new fh(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ji(n,r.document.name),i=me(r.document.updateTime),a=r.document.createTime?me(r.document.createTime):rt.min(),l=new Zt({mapValue:{fields:r.document.fields}}),u=Kt.newFoundDocument(s,i,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];e=new As(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ji(n,r.document),i=r.readTime?me(r.readTime):rt.min(),a=Kt.newNoDocument(s,i),l=r.removedTargetIds||[];e=new As([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ji(n,r.document),i=r.removedTargetIds||[];e=new As([],i,s,null)}else{if(!("filter"in t))return tt();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new i_(s,i),l=r.targetId;e=new dh(l,a)}}return e}function __(n,t){let e;if(t instanceof jr)e={update:ac(n,t.key,t.value)};else if(t instanceof Fo)e={delete:co(n,t.key)};else if(t instanceof sn)e={update:ac(n,t.key,t.data),updateMask:R_(t.fieldMask)};else{if(!(t instanceof n_))return tt();e={verify:co(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof xs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Dr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Us)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw tt()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:p_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:tt()}(n,t.precondition)),e}function y_(n,t){return n&&n.length>0?(Tt(t!==void 0),n.map(e=>function(s,i){let a=s.updateTime?me(s.updateTime):me(i);return a.isEqual(rt.min())&&(a=me(i)),new Zg(a,s.transformResults||[])}(e,t))):[]}function v_(n,t){return{documents:[gh(n,t.path)]}}function E_(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=gh(n,s);const i=function(d){if(d.length!==0)return vh(de.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(m){return{field:Nn(m.field),direction:w_(m.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ao(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function I_(n){let t=m_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Tt(r===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(g){const m=yh(g);return m instanceof de&&Gu(m)?m.getFilters():[m]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(m=>function(A){return new kr(On(A.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(e.orderBy));let l=null;e.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Qs(m)?null:m}(e.limit));let u=null;e.startAt&&(u=function(g){const m=!!g.before,I=g.values||[];return new Ms(I,m)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const m=!g.before,I=g.values||[];return new Ms(I,m)}(e.endAt)),Bg(t,s,a,i,l,"F",u,d)}function T_(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function yh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=On(e.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=On(e.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=On(e.unaryFilter.field);return Nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=On(e.unaryFilter.field);return Nt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return tt()}}(n):n.fieldFilter!==void 0?function(e){return Nt.create(On(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return tt()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return de.create(e.compositeFilter.filters.map(r=>yh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return tt()}}(e.compositeFilter.op))}(n):tt()}function w_(n){return u_[n]}function A_(n){return h_[n]}function b_(n){return d_[n]}function Nn(n){return{fieldPath:n.canonicalString()}}function On(n){return Ut.fromServerFormat(n.fieldPath)}function vh(n){return n instanceof Nt?function(e){if(e.op==="=="){if(Wl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NAN"}};if(Gl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NAN"}};if(Gl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(e.field),op:A_(e.op),value:e.value}}}(n):n instanceof de?function(e){const r=e.getFilters().map(s=>vh(s));return r.length===1?r[0]:{compositeFilter:{op:b_(e.op),filters:r}}}(n):tt()}function R_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Eh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e,r,s,i=rt.min(),a=rt.min(),l=Qt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new He(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.ct=t}}function P_(n){const t=I_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ls(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this._n=new k_}addToCollectionParentIndex(t,e){return this._n.add(e),M.resolve()}getCollectionParents(t,e){return M.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return M.resolve()}deleteFieldIndex(t,e){return M.resolve()}deleteAllFieldIndexes(t){return M.resolve()}createTargetIndexes(t,e){return M.resolve()}getDocumentsMatchingTarget(t,e){return M.resolve(null)}getIndexType(t,e){return M.resolve(0)}getFieldIndexes(t,e){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,e){return M.resolve(Je.min())}getMinOffsetFromCollectionGroup(t,e){return M.resolve(Je.min())}updateCollectionGroup(t,e,r){return M.resolve()}updateIndexEntries(t,e){return M.resolve()}}class k_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Bt(At.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Bt(At.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Hn(0)}static Ln(){return new Hn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.changes=new Yn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Kt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?M.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&wr(r.mutation,s,ne.empty(),Ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,at()).next(()=>r))}getLocalViewOfDocuments(t,e,r=at()){const s=fn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let a=_r();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=fn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,at()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let i=ke();const a=Tr(),l=function(){return Tr()}();return e.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof sn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),wr(f.mutation,d,f.mutation.getFieldMask(),Ot.now())):a.set(d.key,ne.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var g;return l.set(d,new V_(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Tr();let s=new St((a,l)=>a-l),i=at();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||ne.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(s.get(l.batchId)||at()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=nh();f.forEach(m=>{if(!i.has(m)){const I=ch(e.get(m),r.get(m));I!==null&&g.set(m,I),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return K.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ju(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):M.resolve(fn());let l=-1,u=i;return a.next(d=>M.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(t,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,u,d,at())).next(f=>({batchId:l,changes:eh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new K(e)).next(r=>{let s=_r();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=_r();return this.indexManager.getCollectionParents(t,i).next(l=>M.forEach(l,u=>{const d=function(g,m){return new Jn(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(f=>{f.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Kt.newInvalidDocument(f)))});let l=_r();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&wr(f.mutation,d,ne.empty(),Ot.now()),Js(e,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return M.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:me(s.createTime)}}(e)),M.resolve()}getNamedQuery(t,e){return M.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:P_(s.bundledQuery),readTime:me(s.readTime)}}(e)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.overlays=new St(K.comparator),this.hr=new Map}getOverlay(t,e){return M.resolve(this.overlays.get(e))}getOverlays(t,e){const r=fn();return M.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),M.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),M.resolve()}getOverlaysForCollection(t,e,r){const s=fn(),i=e.length+1,a=new K(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new St((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=fn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=fn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return M.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new s_(e,r));let i=this.hr.get(e);i===void 0&&(i=at(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.Pr=new Bt(Mt.Ir),this.Tr=new Bt(Mt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Mt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Mt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new K(new At([])),r=new Mt(e,t),s=new Mt(e,t+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new K(new At([])),r=new Mt(e,t),s=new Mt(e,t+1);let i=at();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new Mt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Mt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return K.comparator(t.key,e.key)||gt(t.pr,e.pr)}static Er(t,e){return gt(t.pr,e.pr)||K.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Bt(Mt.Ir)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new r_(i,e,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new Mt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(t,e){return M.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Mt(e,0),s=new Mt(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Bt(gt);return e.forEach(s=>{const i=new Mt(s,0),a=new Mt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],l=>{r=r.add(l.pr)})}),M.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const a=new Mt(new K(i),0);let l=new Bt(gt);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.pr)),!0)},a),M.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Tt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return M.forEach(e.mutations,s=>{const i=new Mt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Mt(e,0),s=this.wr.firstAfterOrEqual(r);return M.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t){this.vr=t,this.docs=function(){return new St(K.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return M.resolve(r?r.document.mutableCopy():Kt.newInvalidDocument(e))}getEntries(t,e){let r=ke();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Kt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=ke();const a=e.path,l=new K(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Tg(Ig(f),r)<=0||(s.has(f.key)||Js(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(t,e,r,s){tt()}Fr(t,e){return M.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new U_(this)}getSize(t){return M.resolve(this.size)}}class U_ extends D_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),M.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t){this.persistence=t,this.Mr=new Yn(e=>xo(e),Uo),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.Or=0,this.Nr=new zo,this.targetCount=0,this.Lr=Hn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),M.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Hn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,M.resolve()}updateTargetData(t,e){return this.qn(e),M.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return M.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),M.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),M.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return M.resolve(r)}containsKey(t,e){return M.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t,e){this.Br={},this.overlays={},this.kr=new No(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new F_(this),this.indexManager=new C_,this.remoteDocumentCache=function(s){return new x_(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new S_(e),this.$r=new O_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new M_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new L_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){z("MemoryPersistence","Starting transaction:",t);const s=new q_(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return M.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class q_ extends Ag{constructor(t){super(),this.currentSequenceNumber=t}}class $o{constructor(t){this.persistence=t,this.zr=new zo,this.jr=null}static Hr(t){return new $o(t)}get Jr(){if(this.jr)return this.jr;throw tt()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),M.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),M.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Jr,r=>{const s=K.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,rt.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return M.or([()=>M.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=at(),s=at();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ho(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Gd()?8:bg(qt())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new j_;return this.Ji(t,e,a).next(l=>{if(i.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(pr()<=lt.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Vn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),M.resolve()):(pr()<=lt.DEBUG&&z("QueryEngine","Query:",Vn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(pr()<=lt.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Vn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pe(e))):M.resolve())}ji(t,e){if(Jl(e))return M.resolve(null);let r=pe(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ls(e,null,"F"),r=pe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=at(...i);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Zi(e,l);return this.Xi(e,d,a,u.readTime)?this.ji(t,Ls(e,null,"F")):this.es(t,d,e,u)}))})))}Hi(t,e,r,s){return Jl(e)||s.isEqual(rt.min())?M.resolve(null):this.zi.getDocuments(t,r).next(i=>{const a=this.Zi(e,i);return this.Xi(e,a,r,s)?M.resolve(null):(pr()<=lt.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vn(e)),this.es(t,a,e,Eg(s,-1)).next(l=>l))})}Zi(t,e){let r=new Bt(Zu(t));return e.forEach((s,i)=>{Js(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return pr()<=lt.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Vn(e)),this.zi.getDocumentsMatchingQuery(t,e,Je.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new St(gt),this.rs=new Yn(i=>xo(i),Uo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new N_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function H_(n,t,e,r){return new $_(n,t,e,r)}async function Ih(n,t){const e=it(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=at();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function G_(n,t){const e=it(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,m=g.keys();let I=M.resolve();return m.forEach(A=>{I=I.next(()=>f.getEntry(u,A)).next(S=>{const k=d.docVersions.get(A);Tt(k!==null),S.version.compareTo(k)<0&&(g.applyToRemoteDocument(S,d),S.isValidDocument()&&(S.setReadTime(d.commitVersion),f.addEntry(S)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=at();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Th(n){const t=it(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function W_(n,t){const e=it(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(e.Qr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>e.Qr.addMatchingKeys(i,f.addedDocuments,g)));let I=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?I=I.withResumeToken(Qt.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(g,I),function(S,k,q){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,I,f)&&l.push(e.Qr.updateTargetData(i,I))});let u=ke(),d=at();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(K_(i,a,t.documentUpdates).next(f=>{u=f.cs,d=f.ls})),!r.isEqual(rt.min())){const f=e.Qr.getLastRemoteSnapshotVersion(i).next(g=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(e.ns=s,i))}function K_(n,t,e){let r=at(),s=at();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let a=ke();return e.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(rt.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:s}})}function Q_(n,t){const e=it(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function X_(n,t){const e=it(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,M.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new He(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ho(n,t,e){const r=it(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!qr(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function lc(n,t,e){const r=it(n);let s=rt.min(),i=at();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=it(u),m=g.rs.get(f);return m!==void 0?M.resolve(g.ns.get(m)):g.Qr.getTargetData(d,f)}(r,a,pe(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:rt.min(),e?i:at())).next(l=>(J_(r,jg(t),l),{documents:l,hs:i})))}function J_(n,t,e){let r=n.ss.get(t)||rt.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class cc{constructor(){this.activeTargetIds=Kg()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Y_{constructor(){this.no=new cc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new cc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms=null;function zi(){return ms===null?ms=function(){return 268435456+Math.round(2147483648*Math.random())}():ms++,"0x"+ms.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="WebChannelConnection";class ny extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(e,r,s,i,a){const l=zi(),u=this.vo(e,r.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,i,a),this.Mo(e,u,d,s).then(f=>(z("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw qn("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}xo(e,r,s,i,a,l){return this.Co(e,r,s,i,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}vo(e,r){const s=ty[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const i=zi();return new Promise((a,l)=>{const u=new Nu;u.setWithCredentials(!0),u.listenOnce(Mu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Is.NO_ERROR:const f=u.getResponseJson();z(Gt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case Is.TIMEOUT:z(Gt,`RPC '${t}' ${i} timed out`),l(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const g=u.getStatus();if(z(Gt,`RPC '${t}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const A=function(k){const q=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(q)>=0?q:V.UNKNOWN}(I.status);l(new B(A,I.message))}else l(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(V.UNAVAILABLE,"Connection failed."));break;default:tt()}}finally{z(Gt,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);z(Gt,`RPC '${t}' ${i} sending request:`,s),u.send(e,"POST",d,r,15)})}Oo(t,e,r){const s=zi(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Uu(),l=xu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Ou({})),this.Fo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=i.join("");z(Gt,`Creating RPC '${t}' stream ${s}: ${f}`,u);const g=a.createWebChannel(f,u);let m=!1,I=!1;const A=new ey({lo:k=>{I?z(Gt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(m||(z(Gt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),m=!0),z(Gt,`RPC '${t}' stream ${s} sending:`,k),g.send(k))},ho:()=>g.close()}),S=(k,q,H)=>{k.listen(q,F=>{try{H(F)}catch(Q){setTimeout(()=>{throw Q},0)}})};return S(g,gr.EventType.OPEN,()=>{I||(z(Gt,`RPC '${t}' stream ${s} transport opened.`),A.mo())}),S(g,gr.EventType.CLOSE,()=>{I||(I=!0,z(Gt,`RPC '${t}' stream ${s} transport closed`),A.po())}),S(g,gr.EventType.ERROR,k=>{I||(I=!0,qn(Gt,`RPC '${t}' stream ${s} transport errored:`,k),A.po(new B(V.UNAVAILABLE,"The operation could not be completed")))}),S(g,gr.EventType.MESSAGE,k=>{var q;if(!I){const H=k.data[0];Tt(!!H);const F=H,Q=F.error||((q=F[0])===null||q===void 0?void 0:q.error);if(Q){z(Gt,`RPC '${t}' stream ${s} received error:`,Q);const $=Q.status;let j=function(v){const E=Dt[v];if(E!==void 0)return hh(E)}($),T=Q.message;j===void 0&&(j=V.INTERNAL,T="Unknown error status: "+$+" with message "+Q.message),I=!0,A.po(new B(j,T)),g.close()}else z(Gt,`RPC '${t}' stream ${s} received:`,H),A.yo(H)}}),S(l,Lu.STAT_EVENT,k=>{k.stat===eo.PROXY?z(Gt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===eo.NOPROXY&&z(Gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function $i(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){return new f_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,r,s,i,a,l,u){this.oi=t,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new wh(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Ce(e.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ry extends Ah{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=g_(this.serializer,t),r=function(i){if(!("targetChange"in i))return rt.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?rt.min():a.readTime?me(a.readTime):rt.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=uo(this.serializer),e.addTarget=function(i,a){let l;const u=a.target;if(l=io(u)?{documents:v_(i,u)}:{query:E_(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ph(i,a.resumeToken);const d=ao(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(rt.min())>0){l.readTime=Fs(i,a.snapshotVersion.toTimestamp());const d=ao(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=T_(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=uo(this.serializer),e.removeTarget=t,this.i_(e)}}class sy extends Ah{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=y_(t.writeResults,t.commitTime),r=me(t.commitTime);return this.listener.A_(r,e)}return Tt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=uo(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>__(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(t,lo(e,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(V.UNKNOWN,i.toString())})}xo(t,e,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,lo(e,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(V.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class oy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ce(e),this.y_=!1):z("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{Rn(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=it(u);d.M_.add(4),await $r(d),d.N_.set("Unknown"),d.M_.delete(4),await ni(d)}(this))})}),this.N_=new oy(r,s)}}async function ni(n){if(Rn(n))for(const t of n.x_)await t(!0)}async function $r(n){for(const t of n.x_)await t(!1)}function bh(n,t){const e=it(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Qo(e)?Ko(e):Zn(e).Xo()&&Wo(e,t))}function Go(n,t){const e=it(n),r=Zn(e);e.F_.delete(t),r.Xo()&&Rh(e,t),e.F_.size===0&&(r.Xo()?r.n_():Rn(e)&&e.N_.set("Unknown"))}function Wo(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rt.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Zn(n).P_(t)}function Rh(n,t){n.L_.xe(t),Zn(n).I_(t)}function Ko(n){n.L_=new c_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Zn(n).start(),n.N_.w_()}function Qo(n){return Rn(n)&&!Zn(n).Zo()&&n.F_.size>0}function Rn(n){return it(n).M_.size===0}function Sh(n){n.L_=void 0}async function ly(n){n.N_.set("Online")}async function cy(n){n.F_.forEach((t,e)=>{Wo(n,t)})}async function uy(n,t){Sh(n),Qo(n)?(n.N_.D_(t),Ko(n)):n.N_.set("Unknown")}async function hy(n,t,e){if(n.N_.set("Online"),t instanceof fh&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Bs(n,r)}else if(t instanceof As?n.L_.Ke(t):t instanceof dh?n.L_.He(t):n.L_.We(t),!e.isEqual(rt.min()))try{const r=await Th(n.localStore);e.compareTo(r)>=0&&await function(i,a){const l=i.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.F_.get(d);f&&i.F_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=i.F_.get(u);if(!f)return;i.F_.set(u,f.withResumeToken(Qt.EMPTY_BYTE_STRING,f.snapshotVersion)),Rh(i,u);const g=new He(f.target,u,d,f.sequenceNumber);Wo(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Bs(n,r)}}async function Bs(n,t,e){if(!qr(t))throw t;n.M_.add(1),await $r(n),n.N_.set("Offline"),e||(e=()=>Th(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await ni(n)})}function Ph(n,t){return t().catch(e=>Bs(n,e,t))}async function ri(n){const t=it(n),e=Ze(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;dy(t);)try{const s=await Q_(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,fy(t,s)}catch(s){await Bs(t,s)}Ch(t)&&kh(t)}function dy(n){return Rn(n)&&n.v_.length<10}function fy(n,t){n.v_.push(t);const e=Ze(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Ch(n){return Rn(n)&&!Ze(n).Zo()&&n.v_.length>0}function kh(n){Ze(n).start()}async function py(n){Ze(n).V_()}async function my(n){const t=Ze(n);for(const e of n.v_)t.d_(e.mutations)}async function gy(n,t,e){const r=n.v_.shift(),s=Bo.from(r,t,e);await Ph(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ri(n)}async function _y(n,t){t&&Ze(n).E_&&await async function(r,s){if(function(a){return o_(a)&&a!==V.ABORTED}(s.code)){const i=r.v_.shift();Ze(r).t_(),await Ph(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ri(r)}}(n,t),Ch(n)&&kh(n)}async function hc(n,t){const e=it(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Rn(e);e.M_.add(3),await $r(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await ni(e)}async function yy(n,t){const e=it(n);t?(e.M_.delete(2),await ni(e)):t||(e.M_.add(2),await $r(e),e.N_.set("Unknown"))}function Zn(n){return n.B_||(n.B_=function(e,r,s){const i=it(e);return i.f_(),new ry(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:ly.bind(null,n),To:cy.bind(null,n),Ao:uy.bind(null,n),h_:hy.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Qo(n)?Ko(n):n.N_.set("Unknown")):(await n.B_.stop(),Sh(n))})),n.B_}function Ze(n){return n.k_||(n.k_=function(e,r,s){const i=it(e);return i.f_(),new sy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:py.bind(null,n),Ao:_y.bind(null,n),R_:my.bind(null,n),A_:gy.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await ri(n)):(await n.k_.stop(),n.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,l=new Xo(t,e,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(n,t){if(Ce("AsyncQueue",`${t}: ${n}`),qr(n))return new B(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.comparator=t?(e,r)=>t(e,r)||K.comparator(e.key,r.key):(e,r)=>K.comparator(e.key,r.key),this.keyedMap=_r(),this.sortedSet=new St(this.comparator)}static emptySet(t){return new Un(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Un)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Un;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.q_=new St(K.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):tt():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Gn{constructor(t,e,r,s,i,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Gn(t,e,Un.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Ey{constructor(){this.queries=new Yn(t=>Yu(t),Xs),this.onlineState="Unknown",this.z_=new Set}}async function Iy(n,t){const e=it(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.W_()&&t.G_()&&(r=2):(i=new vy,r=t.G_()?0:1);try{switch(r){case 0:i.K_=await e.onListen(s,!0);break;case 1:i.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Jo(a,`Initialization of query '${Vn(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&Yo(e)}async function Ty(n,t){const e=it(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.U_.indexOf(t);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function wy(n,t){const e=it(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&Yo(e)}function Ay(n,t,e){const r=it(n),s=r.queries.get(t);if(s)for(const i of s.U_)i.onError(e);r.queries.delete(t)}function Yo(n){n.z_.forEach(t=>{t.next()})}var fo,fc;(fc=fo||(fo={})).J_="default",fc.Cache="cache";class by{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Gn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Gn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==fo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this.key=t}}class Vh{constructor(t){this.key=t}}class Ry{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=at(),this.mutatedKeys=at(),this.Ia=Zu(t),this.Ta=new Un(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new dc,s=e?e.Ta:this.Ta;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,g)=>{const m=s.get(f),I=Js(this.query,g)?g:null,A=!!m&&this.mutatedKeys.has(m.key),S=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let k=!1;m&&I?m.data.isEqual(I.data)?A!==S&&(r.track({type:3,doc:I}),k=!0):this.Ra(m,I)||(r.track({type:2,doc:I}),k=!0,(u&&this.Ia(I,u)>0||d&&this.Ia(I,d)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),k=!0):m&&!I&&(r.track({type:1,doc:m}),k=!0,(u||d)&&(l=!0)),k&&(I?(a=a.add(I),i=S?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:i}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,g)=>function(I,A){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tt()}};return S(I)-S(A)}(f.type,g.type)||this.Ia(f.doc,g.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Gn(this.query,t.Ta,i,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new dc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=at(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Vh(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Dh(r))}),e}pa(t){this.la=t.hs,this.Pa=at();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Gn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Sy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Py{constructor(t){this.key=t,this.wa=!1}}class Cy{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Yn(l=>Yu(l),Xs),this.Da=new Map,this.Ca=new Set,this.va=new St(K.comparator),this.Fa=new Map,this.Ma=new zo,this.xa={},this.Oa=new Map,this.Na=Hn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function ky(n,t,e=!0){const r=Uh(n);let s;const i=r.ba.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Nh(r,t,e,!0),s}async function Dy(n,t){const e=Uh(n);await Nh(e,t,!0,!1)}async function Nh(n,t,e,r){const s=await X_(n.localStore,pe(t)),i=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await Vy(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&bh(n.remoteStore,s),l}async function Vy(n,t,e,r,s){n.Ba=(g,m,I)=>async function(S,k,q,H){let F=k.view.da(q);F.Xi&&(F=await lc(S.localStore,k.query,!1).then(({documents:T})=>k.view.da(T,F)));const Q=H&&H.targetChanges.get(k.targetId),$=H&&H.targetMismatches.get(k.targetId)!=null,j=k.view.applyChanges(F,S.isPrimaryClient,Q,$);return mc(S,k.targetId,j.fa),j.snapshot}(n,g,m,I);const i=await lc(n.localStore,t,!0),a=new Ry(t,i.hs),l=a.da(i.documents),u=zr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);mc(n,e,d.fa);const f=new Sy(t,e,a);return n.ba.set(t,f),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function Ny(n,t,e){const r=it(n),s=r.ba.get(t),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!Xs(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ho(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Go(r.remoteStore,s.targetId),po(r,s.targetId)}).catch(Br)):(po(r,s.targetId),await ho(r.localStore,s.targetId,!0))}async function Oy(n,t){const e=it(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Go(e.remoteStore,r.targetId))}async function My(n,t,e){const r=jy(n);try{const s=await function(a,l){const u=it(a),d=Ot.now(),f=l.reduce((I,A)=>I.add(A.key),at());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=ke(),S=at();return u.os.getEntries(I,f).next(k=>{A=k,A.forEach((q,H)=>{H.isValidDocument()||(S=S.add(q))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(k=>{g=k;const q=[];for(const H of l){const F=e_(H,g.get(H.key).overlayedDocument);F!=null&&q.push(new sn(H.key,F,zu(F.value.mapValue),he.exists(!0)))}return u.mutationQueue.addMutationBatch(I,d,q,l)}).next(k=>{m=k;const q=k.applyToLocalDocumentSet(g,S);return u.documentOverlayCache.saveOverlays(I,k.batchId,q)})}).then(()=>({batchId:m.batchId,changes:eh(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new St(gt)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,e),await Hr(r,s.changes),await ri(r.remoteStore)}catch(s){const i=Jo(s,"Failed to persist write");e.reject(i)}}async function Oh(n,t){const e=it(n);try{const r=await W_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Fa.get(i);a&&(Tt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?Tt(a.wa):s.removedDocuments.size>0&&(Tt(a.wa),a.wa=!1))}),await Hr(e,r,t)}catch(r){await Br(r)}}function pc(n,t,e){const r=it(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((i,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=it(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const m of g.U_)m.j_(l)&&(d=!0)}),d&&Yo(u)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ly(n,t,e){const r=it(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),i=s&&s.key;if(i){let a=new St(K.comparator);a=a.insert(i,Kt.newNoDocument(i,rt.min()));const l=at().add(i),u=new ti(rt.min(),new Map,new St(gt),a,l);await Oh(r,u),r.va=r.va.remove(i),r.Fa.delete(t),Zo(r)}else await ho(r.localStore,t,!1).then(()=>po(r,t,e)).catch(Br)}async function xy(n,t){const e=it(n),r=t.batch.batchId;try{const s=await G_(e.localStore,t);Lh(e,r,null),Mh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Hr(e,s)}catch(s){await Br(s)}}async function Uy(n,t,e){const r=it(n);try{const s=await function(a,l){const u=it(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(Tt(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,t);Lh(r,t,e),Mh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Hr(r,s)}catch(s){await Br(s)}}function Mh(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Lh(n,t,e){const r=it(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function po(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||xh(n,r)})}function xh(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Go(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Zo(n))}function mc(n,t,e){for(const r of e)r instanceof Dh?(n.Ma.addReference(r.key,t),Fy(n,r)):r instanceof Vh?(z("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||xh(n,r.key)):tt()}function Fy(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(z("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Zo(n))}function Zo(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new K(At.fromString(t)),r=n.Na.next();n.Fa.set(r,new Py(e)),n.va=n.va.insert(e,r),bh(n.remoteStore,new He(pe(Xu(e.path)),r,"TargetPurposeLimboResolution",No.oe))}}async function Hr(n,t,e){const r=it(n),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const f=d&&!d.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Ho.Ki(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,d){const f=it(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(d,m=>M.forEach(m.qi,I=>f.persistence.referenceDelegate.addReference(g,m.targetId,I)).next(()=>M.forEach(m.Qi,I=>f.persistence.referenceDelegate.removeReference(g,m.targetId,I)))))}catch(g){if(!qr(g))throw g;z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const m=g.targetId;if(!g.fromCache){const I=f.ns.get(m),A=I.snapshotVersion,S=I.withLastLimboFreeSnapshotVersion(A);f.ns=f.ns.insert(m,S)}}}(r.localStore,i))}async function By(n,t){const e=it(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const r=await Ih(e.localStore,t);e.currentUser=t,function(i,a){i.Oa.forEach(l=>{l.forEach(u=>{u.reject(new B(V.CANCELLED,a))})}),i.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Hr(e,r.us)}}function qy(n,t){const e=it(n),r=e.Fa.get(t);if(r&&r.wa)return at().add(r.key);{let s=at();const i=e.Da.get(t);if(!i)return s;for(const a of i){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Uh(n){const t=it(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Oh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ly.bind(null,t),t.Sa.h_=wy.bind(null,t.eventManager),t.Sa.ka=Ay.bind(null,t.eventManager),t}function jy(n){const t=it(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Uy.bind(null,t),t}class gc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ei(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return H_(this.persistence,new z_,t.initialUser,this.serializer)}createPersistence(t){return new B_($o.Hr,this.serializer)}createSharedClientState(t){return new Y_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=By.bind(null,this.syncEngine),await yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ey}()}createDatastore(t){const e=ei(t.databaseInfo.databaseId),r=function(i){return new ny(i)}(t.databaseInfo);return function(i,a,l,u){return new iy(i,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,a,l){return new ay(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>pc(this.syncEngine,e,0),function(){return uc.D()?new uc:new Z_}())}createSyncEngine(t,e){return function(s,i,a,l,u,d,f){const g=new Cy(s,i,a,l,u,d);return f&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=it(r);z("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await $r(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Ce("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=Bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Jo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Hi(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ih(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function _c(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Wy(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>hc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>hc(t.remoteStore,s)),n._onlineComponents=t}function Gy(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Wy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Gy(e))throw e;qn("Error using user provided cache. Falling back to memory cache: "+e),await Hi(n,new gc)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Hi(n,new gc);return n._offlineComponents}async function Fh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await _c(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await _c(n,new zy))),n._onlineComponents}function Ky(n){return Fh(n).then(t=>t.syncEngine)}async function Qy(n){const t=await Fh(n),e=t.eventManager;return e.onListen=ky.bind(null,t.syncEngine),e.onUnlisten=Ny.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Oy.bind(null,t.syncEngine),e}function Xy(n,t,e={}){const r=new Qe;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const f=new $y({next:m=>{a.enqueueAndForget(()=>Ty(i,g)),m.fromCache&&u.source==="server"?d.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new by(l,f,{includeMetadataChanges:!0,ra:!0});return Iy(i,g)}(await Qy(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,t,e){if(!e)throw new B(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Jy(n,t,e,r){if(t===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function vc(n){if(!K.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ec(n){if(K.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function si(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":tt()}function An(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=si(n);throw new B(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Jy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ii{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ic({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ic(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hg;switch(r.type){case"firstParty":return new mg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=yc.get(e);r&&(z("ComponentProvider","Removing Datastore"),yc.delete(e),r.terminate())}(this),Promise.resolve()}}function Yy(n,t,e,r={}){var s;const i=(n=An(n,ii))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Wt.MOCK_USER;else{l=Bd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Wt(d)}n._authCredentials=new dg(new Fu(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new on(this.firestore,t,this._query)}}class re{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new re(this.firestore,t,this._key)}}class Xe extends on{constructor(t,e,r){super(t,e,Xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new re(this.firestore,null,new K(t))}withConverter(t){return new Xe(this.firestore,t,this._path)}}function se(n,t,...e){if(n=jt(n),qh("collection","path",t),n instanceof ii){const r=At.fromString(t,...e);return Ec(r),new Xe(n,null,r)}{if(!(n instanceof re||n instanceof Xe))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(At.fromString(t,...e));return Ec(r),new Xe(n.firestore,null,r)}}function Gr(n,t,...e){if(n=jt(n),arguments.length===1&&(t=Bu.newId()),qh("doc","path",t),n instanceof ii){const r=At.fromString(t,...e);return vc(r),new re(n,null,new K(r))}{if(!(n instanceof re||n instanceof Xe))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(At.fromString(t,...e));return vc(r),new re(n.firestore,n instanceof Xe?n.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new wh(this,"async_queue_retry"),this.hu=()=>{const e=$i();e&&z("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=$i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=$i();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Qe;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!qr(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ce("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Xo.createAndSchedule(this,t,e,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&tt()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Wr extends ii{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Zy}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zh(this),this._firestoreClient.terminate()}}function tv(n,t){const e=typeof n=="object"?n:Zc(),r=typeof n=="string"?n:"(default)",s=vo(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ud("firestore");i&&Yy(s,...i)}return s}function jh(n){return n._firestoreClient||zh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function zh(n){var t,e,r;const s=n._freezeSettings(),i=function(l,u,d,f){return new Pg(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Bh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Hy(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wn(Qt.fromBase64String(t))}catch(e){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wn(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gt(this._lat,t._lat)||gt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=/^__.*__$/;class nv{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new sn(t,this.data,this.fieldMask,e,this.fieldTransforms):new jr(t,this.data,e,this.fieldTransforms)}}class $h{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new sn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tt()}}class na{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new na(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return qs(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Hh(this.fu)&&ev.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class rv{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ei(t)}Fu(t,e,r,s=!1){return new na({fu:t,methodName:e,vu:r,path:Ut.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ra(n){const t=n._freezeSettings(),e=ei(n._databaseId);return new rv(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sv(n,t,e,r,s,i={}){const a=n.Fu(i.merge||i.mergeFields?2:0,t,e,s);sa("Data must be an object, but it was:",a,r);const l=Gh(r,a);let u,d;if(i.merge)u=new ne(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=mo(t,g,e);if(!a.contains(m))throw new B(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Kh(f,m)||f.push(m)}u=new ne(f),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new nv(new Zt(l),u,d)}class ai extends ta{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ai}}function iv(n,t,e,r){const s=n.Fu(1,t,e);sa("Data must be an object, but it was:",s,r);const i=[],a=Zt.empty();bn(r,(u,d)=>{const f=ia(t,u,e);d=jt(d);const g=s.Su(f);if(d instanceof ai)i.push(f);else{const m=Kr(d,g);m!=null&&(i.push(f),a.set(f,m))}});const l=new ne(i);return new $h(a,l,s.fieldTransforms)}function ov(n,t,e,r,s,i){const a=n.Fu(1,t,e),l=[mo(t,r,e)],u=[s];if(i.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(mo(t,i[m])),u.push(i[m+1]);const d=[],f=Zt.empty();for(let m=l.length-1;m>=0;--m)if(!Kh(d,l[m])){const I=l[m];let A=u[m];A=jt(A);const S=a.Su(I);if(A instanceof ai)d.push(I);else{const k=Kr(A,S);k!=null&&(d.push(I),f.set(I,k))}}const g=new ne(d);return new $h(f,g,a.fieldTransforms)}function av(n,t,e,r=!1){return Kr(e,n.Fu(r?4:3,t))}function Kr(n,t){if(Wh(n=jt(n)))return sa("Unsupported field value:",t,n),Gh(n,t);if(n instanceof ta)return function(r,s){if(!Hh(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Kr(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ot.fromDate(r);return{timestampValue:Fs(s.serializer,i)}}if(r instanceof Ot){const i=new Ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fs(s.serializer,i)}}if(r instanceof ea)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:ph(s.serializer,r._byteString)};if(r instanceof re){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${si(r)}`)}(n,t)}function Gh(n,t){const e={};return qu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bn(n,(r,s)=>{const i=Kr(s,t.pu(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Wh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ot||n instanceof ea||n instanceof Wn||n instanceof re||n instanceof ta)}function sa(n,t,e){if(!Wh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=si(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function mo(n,t,e){if((t=jt(t))instanceof oi)return t._internalPath;if(typeof t=="string")return ia(n,t);throw qs("Field path arguments must be of type string or ",n,!1,void 0,e)}const lv=new RegExp("[~\\*/\\[\\]]");function ia(n,t,e){if(t.search(lv)>=0)throw qs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new oi(...t.split("."))._internalPath}catch{throw qs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function qs(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(V.INVALID_ARGUMENT,l+n+u)}function Kh(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(li("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cv extends Qh{data(){return super.data()}}function li(n,t){return typeof t=="string"?ia(n,t):t instanceof oi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oa{}class aa extends oa{}function gn(n,t,...e){let r=[];t instanceof oa&&r.push(t),r=r.concat(e),function(i){const a=i.filter(u=>u instanceof la).length,l=i.filter(u=>u instanceof ci).length;if(a>1||a>0&&l>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ci extends aa{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ci(t,e,r)}_apply(t){const e=this._parse(t);return Xh(t._query,e),new on(t.firestore,t.converter,oo(t._query,e))}_parse(t){const e=ra(t.firestore);return function(i,a,l,u,d,f,g){let m;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wc(g,f);const I=[];for(const A of g)I.push(Tc(u,i,A));m={arrayValue:{values:I}}}else m=Tc(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wc(g,f),m=av(l,a,g,f==="in"||f==="not-in");return Nt.create(d,f,m)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function _n(n,t,e){const r=t,s=li("where",n);return ci._create(s,r,e)}class la extends oa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new la(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:de.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Xh(a,u),a=oo(a,u)}(t._query,e),new on(t.firestore,t.converter,oo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ca extends aa{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ca(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kr(i,a)}(t._query,this._field,this._direction);return new on(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Jn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function hv(n,t="asc"){const e=t,r=li("orderBy",n);return ca._create(r,e)}class ua extends aa{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new ua(t,e,r)}_apply(t){return new on(t.firestore,t.converter,Ls(t._query,this._limit,this._limitType))}}function dv(n){return ua._create("limit",n,"F")}function Tc(n,t,e){if(typeof(e=jt(e))=="string"){if(e==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ju(t)&&e.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(At.fromString(e));if(!K.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hl(n,new K(r))}if(e instanceof re)return Hl(n,e._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${si(e)}.`)}function wc(n,t){if(!Array.isArray(n)||n.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Xh(n,t){const e=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class fv{convertValue(t,e="none"){switch(wn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Tn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw tt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return bn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new ea(Vt(t.latitude),Vt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Mo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Sr(t));default:return null}}convertTimestamp(t){const e=Ye(t);return new Ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=At.fromString(t);Tt(Eh(r));const s=new Pr(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(e)||Ce(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mv extends Qh{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(li("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class bs extends mv{data(t={}){return super.data(t)}}class gv{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new bs(this._firestore,this._userDataWriter,r.key,r,new gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new bs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new gs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new bs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new gs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:_v(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function _v(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tt()}}class yv extends fv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new re(this.firestore,null,e)}}function Se(n){n=An(n,on);const t=An(n.firestore,Wr),e=jh(t),r=new yv(t);return uv(n._query),Xy(e,n._query).then(s=>new gv(t,r,n,s))}function vv(n,t,e,...r){n=An(n,re);const s=An(n.firestore,Wr),i=ra(s);let a;return a=typeof(t=jt(t))=="string"||t instanceof oi?ov(i,"updateDoc",n._key,t,e,r):iv(i,"updateDoc",n._key,t),da(s,[a.toMutation(n._key,he.exists(!0))])}function ha(n){return da(An(n.firestore,Wr),[new Fo(n._key,he.none())])}function ui(n,t){const e=An(n.firestore,Wr),r=Gr(n),s=pv(n.converter,t);return da(e,[sv(ra(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,he.exists(!1))]).then(()=>r)}function da(n,t){return function(r,s){const i=new Qe;return r.asyncQueue.enqueueAndForget(async()=>My(await Ky(r),s,i)),i.promise}(jh(n),t)}(function(t,e=!0){(function(s){Xn=s})(Kn),Fn(new yn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Wr(new fg(r.getProvider("auth-internal")),new _g(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pr(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ke(ql,"4.6.3",t),Ke(ql,"4.6.3","esm2017")})();const Ev={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},Jh=Yc(Ev),js=to(Jh),Ft=tv(Jh),It=zs(0),mr=zs(0),go=zs(0),Iv=zs(0),Tv=""+new URL("../assets/logo.BgbdimHT.png",import.meta.url).href;function Ac(n,t,e){const r=n.slice();return r[43]=t[e],r}function bc(n,t,e){const r=n.slice();return r[46]=t[e],r}function Rc(n){let t,e="추가",r,s,i="채택",a,l,u="삭제",d,f,g="문제신고 확인",m,I;return{c(){t=N("button"),t.textContent=e,r=G(),s=N("button"),s.textContent=i,a=G(),l=N("button"),l.textContent=u,d=G(),f=N("button"),f.textContent=g,this.h()},l(A){t=O(A,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(t)!=="svelte-1lsf66u"&&(t.textContent=e),r=W(A),s=O(A,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(s)!=="svelte-gljqo6"&&(s.textContent=i),a=W(A),l=O(A,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(l)!=="svelte-1ipyraa"&&(l.textContent=u),d=W(A),f=O(A,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(f)!=="svelte-18d8umu"&&(f.textContent=g),this.h()},h(){C(t,"class","top-right-button0 svelte-mw3z0v"),C(s,"class","top-right-button svelte-mw3z0v"),C(l,"class","top-right-button6 svelte-mw3z0v"),C(f,"class","top-right-button8 svelte-mw3z0v")},m(A,S){ot(A,t,S),ot(A,r,S),ot(A,s,S),ot(A,a,S),ot(A,l,S),ot(A,d,S),ot(A,f,S),m||(I=[Y(t,"click",n[13]),Y(s,"click",n[9]),Y(l,"click",n[10]),Y(f,"click",n[20])],m=!0)},p:Rt,d(A){A&&(x(t),x(r),x(s),x(a),x(l),x(d),x(f)),m=!1,Ve(I)}}}function Sc(n){let t,e=ge(n[0]),r=[];for(let s=0;s<e.length;s+=1)r[s]=Pc(bc(n,e,s));return{c(){t=N("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=O(s,"DIV",{class:!0});var i=J(t);for(let a=0;a<r.length;a+=1)r[a].l(i);i.forEach(x),this.h()},h(){C(t,"class","search-history svelte-mw3z0v")},m(s,i){ot(s,t,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null)},p(s,i){if(i[0]&524289){e=ge(s[0]);let a;for(a=0;a<e.length;a+=1){const l=bc(s,e,a);r[a]?r[a].p(l,i):(r[a]=Pc(l),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(s){s&&x(t),Or(r,s)}}}function Pc(n){let t,e=n[46]+"",r,s,i;function a(){return n[25](n[46])}return{c(){t=N("div"),r=le(e),this.h()},l(l){t=O(l,"DIV",{class:!0});var u=J(t);r=ce(u,e),u.forEach(x),this.h()},h(){C(t,"class","history-item svelte-mw3z0v")},m(l,u){ot(l,t,u),D(t,r),s||(i=Y(t,"click",a),s=!0)},p(l,u){n=l,u[0]&1&&e!==(e=n[46]+"")&&Te(r,e)},d(l){l&&x(t),s=!1,i()}}}function Cc(n){let t,e=n[43]+"",r,s,i;return{c(){t=N("div"),r=le(e),this.h()},l(a){t=O(a,"DIV",{class:!0});var l=J(t);r=ce(l,e),l.forEach(x),this.h()},h(){C(t,"class","ranking-item svelte-mw3z0v")},m(a,l){ot(a,t,l),D(t,r),s||(i=Y(t,"click",function(){Pd(n[14](n[43]))&&n[14](n[43]).apply(this,arguments)}),s=!0)},p(a,l){n=a,l[0]&128&&e!==(e=n[43]+"")&&Te(r,e)},d(a){a&&x(t),s=!1,i()}}}function kc(n){let t,e,r,s,i="Close",a,l,u=!n[5]&&Dc();return{c(){t=N("div"),e=N("div"),u&&u.c(),r=G(),s=N("button"),s.textContent=i,this.h()},l(d){t=O(d,"DIV",{class:!0});var f=J(t);e=O(f,"DIV",{class:!0});var g=J(e);u&&u.l(g),r=W(g),s=O(g,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(s)!=="svelte-au4vm5"&&(s.textContent=i),g.forEach(x),f.forEach(x),this.h()},h(){C(s,"class","close-button svelte-mw3z0v"),C(e,"class","modal svelte-mw3z0v"),C(t,"class","modal-background svelte-mw3z0v")},m(d,f){ot(d,t,f),D(t,e),u&&u.m(e,null),D(e,r),D(e,s),a||(l=[Y(s,"click",n[18]),Y(e,"click",kd(n[21])),Y(t,"click",n[18])],a=!0)},p(d,f){d[5]?u&&(u.d(1),u=null):u||(u=Dc(),u.c(),u.m(e,r))},d(d){d&&x(t),u&&u.d(),a=!1,Ve(l)}}}function Dc(n){let t,e="아직 추가되지 않은 단어입니다..";return{c(){t=N("div"),t.textContent=e,this.h()},l(r){t=O(r,"DIV",{class:!0,"data-svelte-h":!0}),ht(t)!=="svelte-1tgxuji"&&(t.textContent=e),this.h()},h(){C(t,"class","modal-explain svelte-mw3z0v")},m(r,s){ot(r,t,s)},d(r){r&&x(t)}}}function wv(n){let t,e,r,s,i,a,l="로그아웃",u,d,f="단어 신청",g,m,I="문제 신고",A,S,k,q,H,F,Q,$="실시간 랭킹 TOP3",j,T,_,v,E,w="신한사의 모든 단어들은 사람들의 설문에 의해 만들어졌으며, 설명글은 사람들의 설문과 GPT-4o에 의해 만들어졌습니다.",b,y,X="신한사의 모든 단어들이 가진 성향은 신한사와 관련이 있지 않습니다.",et,_t,dt,ct=n[6]=="host.wproject00@gmail.com"&&Rc(n),mt=n[1]&&n[0].length>0&&Sc(n),kt=ge(n[7]),yt=[];for(let L=0;L<kt.length;L+=1)yt[L]=Cc(Ac(n,kt,L));let ft=n[2]&&kc(n);return{c(){t=N("div"),e=N("img"),s=G(),ct&&ct.c(),i=G(),a=N("button"),a.textContent=l,u=G(),d=N("button"),d.textContent=f,g=G(),m=N("button"),m.textContent=I,A=G(),S=N("div"),k=N("input"),q=G(),mt&&mt.c(),H=G(),F=N("div"),Q=N("h3"),Q.textContent=$,j=G();for(let L=0;L<yt.length;L+=1)yt[L].c();T=G(),_=N("br"),v=G(),E=N("span"),E.textContent=w,b=G(),y=N("span"),y.textContent=X,et=G(),ft&&ft.c(),this.h()},l(L){t=O(L,"DIV",{id:!0,class:!0});var nt=J(t);e=O(nt,"IMG",{class:!0,src:!0,alt:!0}),s=W(nt),ct&&ct.l(nt),i=W(nt),a=O(nt,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(a)!=="svelte-2c08k3"&&(a.textContent=l),u=W(nt),d=O(nt,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(d)!=="svelte-82mn25"&&(d.textContent=f),g=W(nt),m=O(nt,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(m)!=="svelte-1u7hrdt"&&(m.textContent=I),A=W(nt),S=O(nt,"DIV",{class:!0});var st=J(S);k=O(st,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),q=W(st),mt&&mt.l(st),st.forEach(x),H=W(nt),F=O(nt,"DIV",{class:!0});var bt=J(F);Q=O(bt,"H3",{"data-svelte-h":!0}),ht(Q)!=="svelte-1f2184c"&&(Q.textContent=$),j=W(bt);for(let Yt=0;Yt<yt.length;Yt+=1)yt[Yt].l(bt);T=W(bt),_=O(bt,"BR",{}),v=W(bt),E=O(bt,"SPAN",{class:!0,"data-svelte-h":!0}),ht(E)!=="svelte-1bxi7v"&&(E.textContent=w),b=W(bt),y=O(bt,"SPAN",{class:!0,"data-svelte-h":!0}),ht(y)!=="svelte-9ggiv9"&&(y.textContent=X),bt.forEach(x),et=W(nt),ft&&ft.l(nt),nt.forEach(x),this.h()},h(){C(e,"class","logo_img svelte-mw3z0v"),Sd(e.src,r=Tv)||C(e,"src",r),C(e,"alt","logo"),C(a,"class","top-right-button2 svelte-mw3z0v"),C(d,"class","top-right-button3 svelte-mw3z0v"),C(m,"class","top-right-button7 svelte-mw3z0v"),C(k,"type","text"),C(k,"autocomplete","off"),C(k,"id","sb"),C(k,"class","search-bar svelte-mw3z0v"),C(k,"placeholder","검색..."),k.value=n[3],C(S,"class","search-container svelte-mw3z0v"),C(E,"class","ex_te svelte-mw3z0v"),C(y,"class","ex_te svelte-mw3z0v"),C(F,"class","ranking-list svelte-mw3z0v"),C(t,"id","condiv"),C(t,"class","svelte-mw3z0v")},m(L,nt){ot(L,t,nt),D(t,e),D(t,s),ct&&ct.m(t,null),D(t,i),D(t,a),D(t,u),D(t,d),D(t,g),D(t,m),D(t,A),D(t,S),D(S,k),D(S,q),mt&&mt.m(S,null),D(t,H),D(t,F),D(F,Q),D(F,j);for(let st=0;st<yt.length;st+=1)yt[st]&&yt[st].m(F,null);D(F,T),D(F,_),D(F,v),D(F,E),D(F,b),D(F,y),D(t,et),ft&&ft.m(t,null),_t||(dt=[Y(a,"click",n[12]),Y(d,"click",n[8]),Y(m,"click",n[11]),Y(k,"input",n[22]),Y(k,"keydown",n[15]),Y(k,"focus",n[16]),Y(k,"blur",n[17]),Y(k,"compositionstart",n[23]),Y(k,"compositionend",n[24])],_t=!0)},p(L,nt){if(L[6]=="host.wproject00@gmail.com"?ct?ct.p(L,nt):(ct=Rc(L),ct.c(),ct.m(t,i)):ct&&(ct.d(1),ct=null),nt[0]&8&&k.value!==L[3]&&(k.value=L[3]),L[1]&&L[0].length>0?mt?mt.p(L,nt):(mt=Sc(L),mt.c(),mt.m(S,null)):mt&&(mt.d(1),mt=null),nt[0]&16512){kt=ge(L[7]);let st;for(st=0;st<kt.length;st+=1){const bt=Ac(L,kt,st);yt[st]?yt[st].p(bt,nt):(yt[st]=Cc(bt),yt[st].c(),yt[st].m(F,T))}for(;st<yt.length;st+=1)yt[st].d(1);yt.length=kt.length}L[2]?ft?ft.p(L,nt):(ft=kc(L),ft.c(),ft.m(t,null)):ft&&(ft.d(1),ft=null)},i:Rt,o:Rt,d(L){L&&x(t),ct&&ct.d(),mt&&mt.d(),Or(yt,L),ft&&ft.d(),_t=!1,Ve(dt)}}}function Av(n,t,e){let r,s,i;ee(n,It,L=>e(31,r=L)),ee(n,Iv,L=>e(32,L)),ee(n,go,L=>e(33,s=L)),ee(n,mr,L=>e(34,i=L));let a=[],l=!1,u=!1,d="",f=!1,g=[],m=null,I="";Nr(()=>{et(),v()});function A(){Ct(It,r=3,r)}function S(){Ct(It,r=4,r)}const k=()=>{Ct(It,r=5,r)},q=()=>{Ct(It,r=6,r)};new Promise((L,nt)=>{Co(js,st=>{st?L(st.email):nt("No user is signed in")})}).then(L=>e(6,I=L)).catch(L=>console.error(L));const F=async()=>{try{await Yp(js)}catch(L){console.error("Error signing out:",L)}};function Q(){Ct(It,r=1,r)}async function $(L){e(1,l=!1);const nt=await _t(L);g=nt.matches,e(5,m=nt.exactMatch),console.log(g),m?(Ct(mr,i=m.title,i),m.value,m.explain,m.count+1,Ct(It,r=2,r)):Ct(mr,i="",i),e(2,u=!0)}async function j(L){if(!f&&L.key==="Enter"&&(e(3,d=L.target.value.trim()),d)){_(d),L.target.value="",e(1,l=!1);const nt=await _t(d);g=nt.matches,e(5,m=nt.exactMatch),console.log(g),m?(Ct(mr,i=m.title,i),m.value,m.explain,m.count+1,T(i),Ct(It,r=2,r)):Ct(mr,i="",i),e(2,u=!0)}}async function T(L){try{const nt=gn(se(Ft,"datas"),_n("title","==",L)),st=await Se(nt);st.forEach(async bt=>{const Yt=Gr(Ft,"datas",bt.id),Sn=bt.data().count||0;await vv(Yt,{count:Sn+1}),console.log(`Document with ID ${bt.id} updated successfully`)}),st.empty&&console.log("No matching documents found.")}catch(nt){console.error("Error updating document: ",nt)}}function _(L){const nt=JSON.parse(sessionStorage.getItem("searchHistory"))||[],st=[L,...nt.filter(bt=>bt!==L)];st.length>3&&st.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(st)),e(0,a=st)}function v(){const L=JSON.parse(sessionStorage.getItem("searchHistory"))||[];e(0,a=L)}function E(){e(1,l=!0)}function w(){setTimeout(()=>e(1,l=!1),100)}function b(){e(2,u=!1)}function y(L){document.getElementById("sb").value=L,e(1,l=!1)}let X=[];async function et(){try{const L=gn(se(Ft,"datas"),hv("count","desc"),dv(3)),nt=await Se(L);e(7,X=nt.docs.map(st=>st.data().title))}catch(L){console.error("Error fetching documents: ",L)}}async function _t(L){const nt=se(Ft,"datas"),st=gn(nt,_n("title",">=",L),_n("title","<=",L+"")),bt=await Se(st),Yt=[];let Sn=null;return bt.forEach(hi=>{const Le=hi.data();Yt.push(Le),Le.title===L&&(Sn=Le)}),Ct(go,s=Yt,s),{exactMatch:Sn,matches:Yt}}const dt=()=>{Ct(It,r=7,r)};function ct(L){Cd.call(this,n,L)}return[a,l,u,d,f,m,I,X,A,S,k,q,F,Q,$,j,E,w,b,y,dt,ct,L=>e(3,d=L.target.value),()=>e(4,f=!0),()=>e(4,f=!1),L=>y(L)]}class bv extends Ne{constructor(t){super(),Oe(this,t,Av,wv,De,{},null,[-1,-1])}}function Vc(n){let t,e;return{c(){t=N("div"),e=le(n[4]),this.h()},l(r){t=O(r,"DIV",{class:!0});var s=J(t);e=ce(s,n[4]),s.forEach(x),this.h()},h(){C(t,"class","error-message svelte-16h5zi1")},m(r,s){ot(r,t,s),D(t,e)},p(r,s){s&16&&Te(e,r[4])},d(r){r&&x(t)}}}function Rv(n){let t,e,r,s,i="Title",a,l,u,d,f,g="Value",m,I,A,S,k,q="Explain",H,F,Q,$,j,T,_,v,E,w="Cancel",b,y,X=n[4]&&Vc(n);return{c(){t=N("div"),e=N("div"),r=N("div"),s=N("label"),s.textContent=i,a=G(),l=N("input"),u=G(),d=N("div"),f=N("label"),f.textContent=g,m=G(),I=N("input"),A=G(),S=N("div"),k=N("label"),k.textContent=q,H=G(),F=N("input"),Q=G(),X&&X.c(),$=G(),j=N("div"),T=N("button"),_=le("Submit"),v=G(),E=N("button"),E.textContent=w,this.h()},l(et){t=O(et,"DIV",{class:!0});var _t=J(t);e=O(_t,"DIV",{class:!0});var dt=J(e);r=O(dt,"DIV",{class:!0});var ct=J(r);s=O(ct,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ht(s)!=="svelte-1weqgc2"&&(s.textContent=i),a=W(ct),l=O(ct,"INPUT",{class:!0,type:!0,id:!0}),ct.forEach(x),u=W(dt),d=O(dt,"DIV",{class:!0});var mt=J(d);f=O(mt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ht(f)!=="svelte-ry2554"&&(f.textContent=g),m=W(mt),I=O(mt,"INPUT",{class:!0,type:!0,id:!0}),mt.forEach(x),A=W(dt),S=O(dt,"DIV",{class:!0});var kt=J(S);k=O(kt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ht(k)!=="svelte-2n35pc"&&(k.textContent=q),H=W(kt),F=O(kt,"INPUT",{class:!0,type:!0,id:!0}),kt.forEach(x),Q=W(dt),X&&X.l(dt),$=W(dt),j=O(dt,"DIV",{class:!0});var yt=J(j);T=O(yt,"BUTTON",{class:!0});var ft=J(T);_=ce(ft,"Submit"),ft.forEach(x),v=W(yt),E=O(yt,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(E)!=="svelte-9k415x"&&(E.textContent=w),yt.forEach(x),dt.forEach(x),_t.forEach(x),this.h()},h(){C(s,"class","form-label svelte-16h5zi1"),C(s,"for","title"),C(l,"class","form-input svelte-16h5zi1"),C(l,"type","text"),C(l,"id","title"),C(r,"class","form-group svelte-16h5zi1"),C(f,"class","form-label svelte-16h5zi1"),C(f,"for","value"),C(I,"class","form-input svelte-16h5zi1"),C(I,"type","text"),C(I,"id","value"),C(d,"class","form-group svelte-16h5zi1"),C(k,"class","form-label svelte-16h5zi1"),C(k,"for","explain"),C(F,"class","form-input svelte-16h5zi1"),C(F,"type","text"),C(F,"id","explain"),C(S,"class","form-group svelte-16h5zi1"),C(T,"class","form-button svelte-16h5zi1"),T.disabled=n[3],C(E,"class","form-button cancel-button svelte-16h5zi1"),C(j,"class","form-buttons svelte-16h5zi1"),C(e,"class","form-content svelte-16h5zi1"),C(t,"class","form-container svelte-16h5zi1")},m(et,_t){ot(et,t,_t),D(t,e),D(e,r),D(r,s),D(r,a),D(r,l),vt(l,n[0]),D(e,u),D(e,d),D(d,f),D(d,m),D(d,I),vt(I,n[1]),D(e,A),D(e,S),D(S,k),D(S,H),D(S,F),vt(F,n[2]),D(e,Q),X&&X.m(e,null),D(e,$),D(e,j),D(j,T),D(T,_),D(j,v),D(j,E),b||(y=[Y(l,"input",n[7]),Y(I,"input",n[8]),Y(F,"input",n[9]),Y(T,"click",n[5]),Y(E,"click",n[6])],b=!0)},p(et,[_t]){_t&1&&l.value!==et[0]&&vt(l,et[0]),_t&2&&I.value!==et[1]&&vt(I,et[1]),_t&4&&F.value!==et[2]&&vt(F,et[2]),et[4]?X?X.p(et,_t):(X=Vc(et),X.c(),X.m(e,$)):X&&(X.d(1),X=null),_t&8&&(T.disabled=et[3])},i:Rt,o:Rt,d(et){et&&x(t),X&&X.d(),b=!1,Ve(y)}}}function Sv(n,t,e){let r;ee(n,It,A=>e(10,r=A));let s="",i="",a="",l=!1,u="";const d=async()=>{if(!s||!i||!a){e(4,u="All fields are required!");return}e(3,l=!0),e(4,u="");try{if(!(await Se(gn(se(Ft,"datas"),_n("title","==",s)))).empty){e(4,u="Title already exists! Please choose a different title.");return}await ui(se(Ft,"datas"),{title:s,value:i,explain:a,count:0}),e(0,s=""),e(1,i=""),e(2,a=""),Ct(It,r=0,r)}catch(A){console.error("Error adding document: ",A),e(4,u="Error adding document!")}finally{e(3,l=!1)}},f=()=>{e(0,s=""),e(1,i=""),e(2,a=""),e(4,u=""),Ct(It,r=0,r)};function g(){s=this.value,e(0,s)}function m(){i=this.value,e(1,i)}function I(){a=this.value,e(2,a)}return[s,i,a,l,u,d,f,g,m,I]}class Pv extends Ne{constructor(t){super(),Oe(this,t,Sv,Rv,De,{})}}function Nc(n,t,e){const r=n.slice();return r[4]=t[e],r}function Oc(n){let t,e,r=n[4].title+"",s,i,a,l=n[4].value+"",u,d,f,g=n[4].explain+"",m,I,A,S,k="검색수:",q,H=n[4].count+"",F,Q;return{c(){t=N("div"),e=N("h3"),s=le(r),i=G(),a=N("p"),u=le(l),d=G(),f=N("p"),m=le(g),I=G(),A=N("p"),S=N("strong"),S.textContent=k,q=G(),F=le(H),Q=G(),this.h()},l($){t=O($,"DIV",{class:!0});var j=J(t);e=O(j,"H3",{class:!0});var T=J(e);s=ce(T,r),T.forEach(x),i=W(j),a=O(j,"P",{class:!0});var _=J(a);u=ce(_,l),_.forEach(x),d=W(j),f=O(j,"P",{class:!0});var v=J(f);m=ce(v,g),v.forEach(x),I=W(j),A=O(j,"P",{class:!0});var E=J(A);S=O(E,"STRONG",{"data-svelte-h":!0}),ht(S)!=="svelte-14ncqy5"&&(S.textContent=k),q=W(E),F=ce(E,H),E.forEach(x),Q=W(j),j.forEach(x),this.h()},h(){C(e,"class","svelte-dttkti"),C(a,"class","svelte-dttkti"),C(f,"class","svelte-dttkti"),C(A,"class","count svelte-dttkti"),C(t,"class","box svelte-dttkti")},m($,j){ot($,t,j),D(t,e),D(e,s),D(t,i),D(t,a),D(a,u),D(t,d),D(t,f),D(f,m),D(t,I),D(t,A),D(A,S),D(A,q),D(A,F),D(t,Q)},p($,j){j&1&&r!==(r=$[4].title+"")&&Te(s,r),j&1&&l!==(l=$[4].value+"")&&Te(u,l),j&1&&g!==(g=$[4].explain+"")&&Te(m,g),j&1&&H!==(H=$[4].count+"")&&Te(F,H)},d($){$&&x(t)}}}function Cv(n){let t,e,r,s,i,a="Main",l,u,d,f,g=ge(n[0]),m=[];for(let I=0;I<g.length;I+=1)m[I]=Oc(Nc(n,g,I));return{c(){t=N("div"),e=N("div"),r=G(),s=N("div"),i=N("button"),i.textContent=a,l=G(),u=N("div");for(let I=0;I<m.length;I+=1)m[I].c();this.h()},l(I){t=O(I,"DIV",{class:!0});var A=J(t);e=O(A,"DIV",{id:!0,class:!0}),J(e).forEach(x),r=W(A),s=O(A,"DIV",{class:!0});var S=J(s);i=O(S,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(i)!=="svelte-8azga8"&&(i.textContent=a),S.forEach(x),l=W(A),u=O(A,"DIV",{class:!0});var k=J(u);for(let q=0;q<m.length;q+=1)m[q].l(k);k.forEach(x),A.forEach(x),this.h()},h(){C(e,"id","bb"),C(e,"class","svelte-dttkti"),C(i,"class","close-button svelte-dttkti"),C(s,"class","close-button_div svelte-dttkti"),C(u,"class","container svelte-dttkti"),C(t,"class","bbd svelte-dttkti")},m(I,A){ot(I,t,A),D(t,e),D(t,r),D(t,s),D(s,i),D(t,l),D(t,u);for(let S=0;S<m.length;S+=1)m[S]&&m[S].m(u,null);d||(f=Y(i,"click",n[1]),d=!0)},p(I,[A]){if(A&1){g=ge(I[0]);let S;for(S=0;S<g.length;S+=1){const k=Nc(I,g,S);m[S]?m[S].p(k,A):(m[S]=Oc(k),m[S].c(),m[S].m(u,null))}for(;S<m.length;S+=1)m[S].d(1);m.length=g.length}},i:Rt,o:Rt,d(I){I&&x(t),Or(m,I),d=!1,f()}}}function kv(n,t,e){let r,s;return ee(n,It,a=>e(2,r=a)),ee(n,go,a=>e(0,s=a)),[s,()=>{Ct(It,r=0,r)}]}class Dv extends Ne{constructor(t){super(),Oe(this,t,kv,Cv,De,{})}}function Mc(n){let t,e;return{c(){t=N("div"),e=le(n[4]),this.h()},l(r){t=O(r,"DIV",{class:!0});var s=J(t);e=ce(s,n[4]),s.forEach(x),this.h()},h(){C(t,"class","error-message svelte-urqb75")},m(r,s){ot(r,t,s),D(t,e)},p(r,s){s&16&&Te(e,r[4])},d(r){r&&x(t)}}}function Vv(n){let t,e,r,s,i="신조어",a,l,u,d,f,g="신조어 뜻",m,I,A,S,k,q="신조어의 설명",H,F,Q,$,j,T,_,v,E,w="취소",b,y,X=n[4]&&Mc(n);return{c(){t=N("div"),e=N("div"),r=N("div"),s=N("label"),s.textContent=i,a=G(),l=N("input"),u=G(),d=N("div"),f=N("label"),f.textContent=g,m=G(),I=N("input"),A=G(),S=N("div"),k=N("label"),k.textContent=q,H=G(),F=N("input"),Q=G(),X&&X.c(),$=G(),j=N("div"),T=N("button"),_=le("보내기"),v=G(),E=N("button"),E.textContent=w,this.h()},l(et){t=O(et,"DIV",{class:!0});var _t=J(t);e=O(_t,"DIV",{class:!0});var dt=J(e);r=O(dt,"DIV",{class:!0});var ct=J(r);s=O(ct,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ht(s)!=="svelte-1xvfvjg"&&(s.textContent=i),a=W(ct),l=O(ct,"INPUT",{class:!0,type:!0,id:!0}),ct.forEach(x),u=W(dt),d=O(dt,"DIV",{class:!0});var mt=J(d);f=O(mt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ht(f)!=="svelte-1iv6t5o"&&(f.textContent=g),m=W(mt),I=O(mt,"INPUT",{class:!0,type:!0,id:!0}),mt.forEach(x),A=W(dt),S=O(dt,"DIV",{class:!0});var kt=J(S);k=O(kt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ht(k)!=="svelte-lyiets"&&(k.textContent=q),H=W(kt),F=O(kt,"INPUT",{class:!0,type:!0,id:!0}),kt.forEach(x),Q=W(dt),X&&X.l(dt),$=W(dt),j=O(dt,"DIV",{class:!0});var yt=J(j);T=O(yt,"BUTTON",{class:!0});var ft=J(T);_=ce(ft,"보내기"),ft.forEach(x),v=W(yt),E=O(yt,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(E)!=="svelte-1fn0s3j"&&(E.textContent=w),yt.forEach(x),dt.forEach(x),_t.forEach(x),this.h()},h(){C(s,"class","form-label svelte-urqb75"),C(s,"for","title"),C(l,"class","form-input svelte-urqb75"),C(l,"type","text"),C(l,"id","title"),C(r,"class","form-group svelte-urqb75"),C(f,"class","form-label svelte-urqb75"),C(f,"for","value"),C(I,"class","form-input svelte-urqb75"),C(I,"type","text"),C(I,"id","value"),C(d,"class","form-group svelte-urqb75"),C(k,"class","form-label svelte-urqb75"),C(k,"for","explain"),C(F,"class","form-input svelte-urqb75"),C(F,"type","text"),C(F,"id","explain"),C(S,"class","form-group svelte-urqb75"),C(T,"class","form-button svelte-urqb75"),T.disabled=n[3],C(E,"class","form-button cancel-button svelte-urqb75"),C(j,"class","form-buttons svelte-urqb75"),C(e,"class","form-content svelte-urqb75"),C(t,"class","form-container svelte-urqb75")},m(et,_t){ot(et,t,_t),D(t,e),D(e,r),D(r,s),D(r,a),D(r,l),vt(l,n[0]),D(e,u),D(e,d),D(d,f),D(d,m),D(d,I),vt(I,n[1]),D(e,A),D(e,S),D(S,k),D(S,H),D(S,F),vt(F,n[2]),D(e,Q),X&&X.m(e,null),D(e,$),D(e,j),D(j,T),D(T,_),D(j,v),D(j,E),b||(y=[Y(l,"input",n[7]),Y(I,"input",n[8]),Y(F,"input",n[9]),Y(T,"click",n[5]),Y(E,"click",n[6])],b=!0)},p(et,[_t]){_t&1&&l.value!==et[0]&&vt(l,et[0]),_t&2&&I.value!==et[1]&&vt(I,et[1]),_t&4&&F.value!==et[2]&&vt(F,et[2]),et[4]?X?X.p(et,_t):(X=Mc(et),X.c(),X.m(e,$)):X&&(X.d(1),X=null),_t&8&&(T.disabled=et[3])},i:Rt,o:Rt,d(et){et&&x(t),X&&X.d(),b=!1,Ve(y)}}}function Nv(n,t,e){let r;ee(n,It,A=>e(10,r=A));let s="",i="",a="",l=!1,u="";const d=async()=>{if(!s||!i||!a){e(4,u="All fields are required!");return}e(3,l=!0),e(4,u="");try{if(!(await Se(gn(se(Ft,"beta"),_n("title","==",s)))).empty){e(4,u="Title already exists! Please choose a different title.");return}await ui(se(Ft,"beta"),{title:s,value:i,explain:a,count:0}),e(0,s=""),e(1,i=""),e(2,a=""),Ct(It,r=0,r)}catch(A){console.error("Error adding document: ",A),e(4,u="Error adding document!")}finally{e(3,l=!1)}},f=()=>{e(0,s=""),e(1,i=""),e(2,a=""),e(4,u=""),Ct(It,r=0,r)};function g(){s=this.value,e(0,s)}function m(){i=this.value,e(1,i)}function I(){a=this.value,e(2,a)}return[s,i,a,l,u,d,f,g,m,I]}class Ov extends Ne{constructor(t){super(),Oe(this,t,Nv,Vv,De,{})}}function Lc(n,t,e){const r=n.slice();return r[9]=t[e],r[10]=t,r[11]=e,r}function xc(n){let t,e,r,s,i,a,l,u,d,f,g="Click Me",m,I,A;function S(){n[3].call(e,n[10],n[11])}function k(){n[4].call(s,n[10],n[11])}function q(){n[5].call(a,n[10],n[11])}function H(){n[6].call(u,n[10],n[11])}function F(){return n[7](n[9])}return{c(){t=N("div"),e=N("input"),r=G(),s=N("input"),i=G(),a=N("input"),l=G(),u=N("input"),d=G(),f=N("button"),f.textContent=g,m=G(),this.h()},l(Q){t=O(Q,"DIV",{class:!0});var $=J(t);e=O($,"INPUT",{type:!0,class:!0}),r=W($),s=O($,"INPUT",{type:!0,class:!0}),i=W($),a=O($,"INPUT",{type:!0,class:!0}),l=W($),u=O($,"INPUT",{type:!0,class:!0}),d=W($),f=O($,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(f)!=="svelte-gv7xxv"&&(f.textContent=g),m=W($),$.forEach(x),this.h()},h(){C(e,"type","text"),C(e,"class","svelte-wqffo3"),C(s,"type","text"),C(s,"class","svelte-wqffo3"),C(a,"type","text"),C(a,"class","svelte-wqffo3"),C(u,"type","number"),C(u,"class","svelte-wqffo3"),C(f,"class","svelte-wqffo3"),C(t,"class","item-box svelte-wqffo3")},m(Q,$){ot(Q,t,$),D(t,e),vt(e,n[9].title),D(t,r),D(t,s),vt(s,n[9].value),D(t,i),D(t,a),vt(a,n[9].explain),D(t,l),D(t,u),vt(u,n[9].count),D(t,d),D(t,f),D(t,m),I||(A=[Y(e,"input",S),Y(s,"input",k),Y(a,"input",q),Y(u,"input",H),Y(f,"click",F)],I=!0)},p(Q,$){n=Q,$&1&&e.value!==n[9].title&&vt(e,n[9].title),$&1&&s.value!==n[9].value&&vt(s,n[9].value),$&1&&a.value!==n[9].explain&&vt(a,n[9].explain),$&1&&qc(u.value)!==n[9].count&&vt(u,n[9].count)},d(Q){Q&&x(t),I=!1,Ve(A)}}}function Mv(n){let t,e,r="Main",s,i,a,l,u=ge(n[0]),d=[];for(let f=0;f<u.length;f+=1)d[f]=xc(Lc(n,u,f));return{c(){t=N("div"),e=N("button"),e.textContent=r,s=G(),i=N("div");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){t=O(f,"DIV",{class:!0});var g=J(t);e=O(g,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(e)!=="svelte-8azga8"&&(e.textContent=r),g.forEach(x),s=W(f),i=O(f,"DIV",{class:!0});var m=J(i);for(let I=0;I<d.length;I+=1)d[I].l(m);m.forEach(x),this.h()},h(){C(e,"class","close-button svelte-wqffo3"),C(t,"class","close-button_div svelte-wqffo3"),C(i,"class","container svelte-wqffo3")},m(f,g){ot(f,t,g),D(t,e),ot(f,s,g),ot(f,i,g);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(i,null);a||(l=Y(e,"click",n[2]),a=!0)},p(f,[g]){if(g&3){u=ge(f[0]);let m;for(m=0;m<u.length;m+=1){const I=Lc(f,u,m);d[m]?d[m].p(I,g):(d[m]=xc(I),d[m].c(),d[m].m(i,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=u.length}},i:Rt,o:Rt,d(f){f&&(x(t),x(s),x(i)),Or(d,f),a=!1,l()}}}function Lv(n,t,e){let r;ee(n,It,m=>e(8,r=m));let s=[];Nr(async()=>{const m=await Se(se(Ft,"beta"));e(0,s=m.docs.map(I=>({id:I.id,...I.data()})))});const i=async(m,I,A,S,k)=>{try{await ui(se(Ft,"datas"),{title:I,value:A,explain:S,count:k}),await ha(Gr(Ft,"beta",m)),console.log("Document successfully written and deleted!"),e(0,s=s.filter(q=>q.id!==m))}catch(q){console.error("Error adding or deleting document: ",q)}},a=()=>{Ct(It,r=0,r)};function l(m,I){m[I].title=this.value,e(0,s)}function u(m,I){m[I].value=this.value,e(0,s)}function d(m,I){m[I].explain=this.value,e(0,s)}function f(m,I){m[I].count=qc(this.value),e(0,s)}return[s,i,a,l,u,d,f,m=>i(m.id,m.title,m.value,m.explain,m.count)]}class xv extends Ne{constructor(t){super(),Oe(this,t,Lv,Mv,De,{})}}function Uv(n){let t,e,r="Main",s,i,a,l,u,d,f,g="삭제",m,I;return{c(){t=N("div"),e=N("button"),e.textContent=r,s=G(),i=N("main"),a=N("div"),l=N("input"),u=G(),d=N("div"),f=N("button"),f.textContent=g,this.h()},l(A){t=O(A,"DIV",{class:!0});var S=J(t);e=O(S,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(e)!=="svelte-8azga8"&&(e.textContent=r),S.forEach(x),s=W(A),i=O(A,"MAIN",{class:!0});var k=J(i);a=O(k,"DIV",{style:!0});var q=J(a);l=O(q,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),u=W(q),d=O(q,"DIV",{style:!0});var H=J(d);f=O(H,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),ht(f)!=="svelte-1w89kx2"&&(f.textContent=g),H.forEach(x),q.forEach(x),k.forEach(x),this.h()},h(){C(e,"class","close-button svelte-mo15yd"),C(t,"class","close-button_div svelte-mo15yd"),C(l,"type","text"),C(l,"placeholder","Search..."),Be(l,"width","300px"),Be(l,"padding","10px"),Be(l,"font-size","16px"),C(l,"class","svelte-mo15yd"),Be(f,"padding","10px 20px"),Be(f,"font-size","16px"),C(f,"class","svelte-mo15yd"),Be(d,"margin-top","20px"),Be(a,"text-align","center"),Be(a,"margin-top","50px"),C(i,"class","svelte-mo15yd")},m(A,S){ot(A,t,S),D(t,e),ot(A,s,S),ot(A,i,S),D(i,a),D(a,l),vt(l,n[0]),D(a,u),D(a,d),D(d,f),m||(I=[Y(e,"click",n[2]),Y(l,"input",n[3]),Y(f,"click",n[1])],m=!0)},p(A,[S]){S&1&&l.value!==A[0]&&vt(l,A[0])},i:Rt,o:Rt,d(A){A&&(x(t),x(s),x(i)),m=!1,Ve(I)}}}function Fv(n,t,e){let r;ee(n,It,u=>e(4,r=u));let s="";async function i(){if(!s.trim()){alert("Please enter a search term");return}try{const u=gn(se(Ft,"datas"),_n("title","==",s)),d=await Se(u),f=[];d.forEach(g=>{f.push(ha(Gr(Ft,"datas",g.id)))}),await Promise.all(f),alert("값이 삭제됨"),e(0,s="")}catch(u){console.error("Error deleting documents: ",u),alert("Error deleting documents")}}const a=()=>{Ct(It,r=0,r)};function l(){s=this.value,e(0,s)}return[s,i,a,l]}class Bv extends Ne{constructor(t){super(),Oe(this,t,Fv,Uv,De,{})}}function Uc(n){let t,e;return{c(){t=N("div"),e=le(n[1]),this.h()},l(r){t=O(r,"DIV",{class:!0});var s=J(t);e=ce(s,n[1]),s.forEach(x),this.h()},h(){C(t,"class","error svelte-171w347")},m(r,s){ot(r,t,s),D(t,e)},p(r,s){s&2&&Te(e,r[1])},d(r){r&&x(t)}}}function qv(n){let t,e,r,s="Main",i,a,l,u,d="Submit",f,g,m,I=n[1]&&Uc(n);return{c(){t=N("div"),e=N("div"),r=N("button"),r.textContent=s,i=G(),a=N("input"),l=G(),u=N("button"),u.textContent=d,f=G(),I&&I.c(),this.h()},l(A){t=O(A,"DIV",{class:!0});var S=J(t);e=O(S,"DIV",{class:!0});var k=J(e);r=O(k,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(r)!=="svelte-8azga8"&&(r.textContent=s),k.forEach(x),i=W(S),a=O(S,"INPUT",{type:!0,placeholder:!0,class:!0}),l=W(S),u=O(S,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(u)!=="svelte-1gle3be"&&(u.textContent=d),f=W(S),I&&I.l(S),S.forEach(x),this.h()},h(){C(r,"class","close-button svelte-171w347"),C(e,"class","close-button_div svelte-171w347"),C(a,"type","text"),C(a,"placeholder","신고내용 입력 (50자 까지)"),C(a,"class","svelte-171w347"),C(u,"class","svelte-171w347"),C(t,"class","container svelte-171w347")},m(A,S){ot(A,t,S),D(t,e),D(e,r),D(t,i),D(t,a),vt(a,n[0]),D(t,l),D(t,u),D(t,f),I&&I.m(t,null),g||(m=[Y(r,"click",n[3]),Y(a,"input",n[4]),Y(u,"click",n[2])],g=!0)},p(A,[S]){S&1&&a.value!==A[0]&&vt(a,A[0]),A[1]?I?I.p(A,S):(I=Uc(A),I.c(),I.m(t,null)):I&&(I.d(1),I=null)},i:Rt,o:Rt,d(A){A&&x(t),I&&I.d(),g=!1,Ve(m)}}}function jv(n,t,e){let r;ee(n,It,d=>e(6,r=d));let s="",i="";Nr(()=>{const d=to();Co(d,f=>{f&&f.email})});const a=async()=>{if(s.length>50){e(1,i="50자를 넘지 말아주세요");return}const f=to().currentUser;if(!f){e(1,i="내용을 적어주세요");return}try{await ui(se(Ft,"report"),{user:f.email,contents:s}),e(0,s=""),e(1,i="")}catch(g){e(1,i="Error adding document: "+g.message)}},l=()=>{Ct(It,r=0,r)};function u(){s=this.value,e(0,s)}return[s,i,a,l,u]}class zv extends Ne{constructor(t){super(),Oe(this,t,jv,qv,De,{})}}function Fc(n,t,e){const r=n.slice();return r[8]=t[e],r[9]=t,r[10]=e,r}function Bc(n){let t,e,r,s,i,a,l="Click",u,d,f;function g(){n[3].call(e,n[9],n[10])}function m(){n[4].call(s,n[9],n[10])}function I(){return n[5](n[8])}return{c(){t=N("div"),e=N("input"),r=G(),s=N("input"),i=G(),a=N("button"),a.textContent=l,u=G(),this.h()},l(A){t=O(A,"DIV",{class:!0});var S=J(t);e=O(S,"INPUT",{type:!0,class:!0}),r=W(S),s=O(S,"INPUT",{type:!0,class:!0}),i=W(S),a=O(S,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(a)!=="svelte-11mzix3"&&(a.textContent=l),u=W(S),S.forEach(x),this.h()},h(){C(e,"type","text"),e.readOnly=!0,C(e,"class","svelte-1evkr3z"),C(s,"type","text"),s.readOnly=!0,C(s,"class","svelte-1evkr3z"),C(a,"class","svelte-1evkr3z"),C(t,"class","item-box svelte-1evkr3z")},m(A,S){ot(A,t,S),D(t,e),vt(e,n[8].user),D(t,r),D(t,s),vt(s,n[8].contents),D(t,i),D(t,a),D(t,u),d||(f=[Y(e,"input",g),Y(s,"input",m),Y(a,"click",I)],d=!0)},p(A,S){n=A,S&1&&e.value!==n[8].user&&vt(e,n[8].user),S&1&&s.value!==n[8].contents&&vt(s,n[8].contents)},d(A){A&&x(t),d=!1,Ve(f)}}}function $v(n){let t,e,r="Main",s,i,a,l,u=ge(n[0]),d=[];for(let f=0;f<u.length;f+=1)d[f]=Bc(Fc(n,u,f));return{c(){t=N("div"),e=N("button"),e.textContent=r,s=G(),i=N("div");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){t=O(f,"DIV",{class:!0});var g=J(t);e=O(g,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(e)!=="svelte-8azga8"&&(e.textContent=r),g.forEach(x),s=W(f),i=O(f,"DIV",{class:!0});var m=J(i);for(let I=0;I<d.length;I+=1)d[I].l(m);m.forEach(x),this.h()},h(){C(e,"class","close-button svelte-1evkr3z"),C(t,"class","close-button_div svelte-1evkr3z"),C(i,"class","container svelte-1evkr3z")},m(f,g){ot(f,t,g),D(t,e),ot(f,s,g),ot(f,i,g);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(i,null);a||(l=Y(e,"click",n[2]),a=!0)},p(f,[g]){if(g&3){u=ge(f[0]);let m;for(m=0;m<u.length;m+=1){const I=Fc(f,u,m);d[m]?d[m].p(I,g):(d[m]=Bc(I),d[m].c(),d[m].m(i,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=u.length}},i:Rt,o:Rt,d(f){f&&(x(t),x(s),x(i)),Or(d,f),a=!1,l()}}}function Hv(n,t,e){let r;ee(n,It,g=>e(6,r=g));let s=[];Nr(async()=>{await i()});async function i(){const g=await Se(se(Ft,"report"));e(0,s=g.docs.map(m=>({id:m.id,...m.data()})))}async function a(g){try{console.log(`Attempting to delete documents with title: ${g}`);const m=gn(se(Ft,"report"),_n("contents","==",g)),I=await Se(m);if(I.empty){console.log("No matching documents found"),alert("No matching documents found");return}const A=[];I.forEach(S=>{console.log(`Deleting document with ID: ${S.id}`),A.push(ha(Gr(Ft,"report",S.id)))}),await Promise.all(A),alert("값이 삭제됨"),await i()}catch(m){console.error("Error deleting documents: ",m),alert("Error deleting documents")}}const l=()=>{Ct(It,r=0,r)};function u(g,m){g[m].user=this.value,e(0,s)}function d(g,m){g[m].contents=this.value,e(0,s)}return[s,a,l,u,d,g=>a(g.contents)]}class Gv extends Ne{constructor(t){super(),Oe(this,t,Hv,$v,De,{})}}function Wv(n){let t,e,r,s="로그인",i,a,l="Google",u,d;return{c(){t=N("div"),e=N("div"),r=N("h1"),r.textContent=s,i=G(),a=N("button"),a.textContent=l,this.h()},l(f){t=O(f,"DIV",{id:!0,class:!0});var g=J(t);e=O(g,"DIV",{class:!0});var m=J(e);r=O(m,"H1",{class:!0,"data-svelte-h":!0}),ht(r)!=="svelte-1bvi8l2"&&(r.textContent=s),i=W(m),a=O(m,"BUTTON",{class:!0,"data-svelte-h":!0}),ht(a)!=="svelte-g8tqx5"&&(a.textContent=l),m.forEach(x),g.forEach(x),this.h()},h(){C(r,"class","svelte-gqutdq"),C(a,"class","svelte-gqutdq"),C(e,"class","login-container svelte-gqutdq"),C(t,"id","L_body"),C(t,"class","svelte-gqutdq")},m(f,g){ot(f,t,g),D(t,e),D(e,r),D(e,i),D(e,a),u||(d=Y(a,"click",n[3]),u=!0)},p:Rt,i:Rt,o:Rt,d(f){f&&x(t),u=!1,d()}}}function Kv(n){let t,e,r,s;const i=[rE,nE,eE,tE,Zv,Yv,Jv,Xv],a=[];function l(u,d){return u[2]==0?0:u[2]==1?1:u[2]==2?2:u[2]==3?3:u[2]==4?4:u[2]==5?5:u[2]==6?6:u[2]==7?7:-1}return~(t=l(n))&&(e=a[t]=i[t](n)),{c(){e&&e.c(),r=dl()},l(u){e&&e.l(u),r=dl()},m(u,d){~t&&a[t].m(u,d),ot(u,r,d),s=!0},p(u,d){let f=t;t=l(u),t!==f&&(e&&(zc(),ie(a[f],1,1,()=>{a[f]=null}),jc()),~t?(e=a[t],e||(e=a[t]=i[t](u),e.c()),oe(e,1),e.m(r.parentNode,r)):e=null)},i(u){s||(oe(e),s=!0)},o(u){ie(e),s=!1},d(u){u&&x(r),~t&&a[t].d(u)}}}function Qv(n){let t,e="[ Developer : G37 ]";return{c(){t=N("div"),t.textContent=e,this.h()},l(r){t=O(r,"DIV",{class:!0,"data-svelte-h":!0}),ht(t)!=="svelte-67okfr"&&(t.textContent=e),this.h()},h(){C(t,"class","loading-screen svelte-gqutdq")},m(r,s){ot(r,t,s)},p:Rt,i:Rt,o:Rt,d(r){r&&x(t)}}}function Xv(n){let t,e;return t=new Gv({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function Jv(n){let t,e;return t=new zv({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function Yv(n){let t,e;return t=new Bv({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function Zv(n){let t,e;return t=new xv({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function tE(n){let t,e;return t=new Ov({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function eE(n){let t,e;return t=new Dv({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function nE(n){let t,e;return t=new Pv({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function rE(n){let t,e;return t=new bv({}),{c(){tn(t.$$.fragment)},l(r){en(t.$$.fragment,r)},m(r,s){nn(t,r,s),e=!0},i(r){e||(oe(t.$$.fragment,r),e=!0)},o(r){ie(t.$$.fragment,r),e=!1},d(r){rn(t,r)}}}function sE(n){let t,e,r,s;const i=[Qv,Kv,Wv],a=[];function l(u,d){return u[1]?0:u[0]?1:2}return e=l(n),r=a[e]=i[e](n),{c(){t=N("main"),r.c(),this.h()},l(u){t=O(u,"MAIN",{class:!0});var d=J(t);r.l(d),d.forEach(x),this.h()},h(){C(t,"class","svelte-gqutdq")},m(u,d){ot(u,t,d),a[e].m(t,null),s=!0},p(u,[d]){let f=e;e=l(u),e===f?a[e].p(u,d):(zc(),ie(a[f],1,1,()=>{a[f]=null}),jc(),r=a[e],r?r.p(u,d):(r=a[e]=i[e](u),r.c()),oe(r,1),r.m(t,null))},i(u){s||(oe(r),s=!0)},o(u){ie(r),s=!1},d(u){u&&x(t),a[e].d()}}}function iE(n,t,e){let r;ee(n,It,l=>e(2,r=l)),console.log(r);let s=null,i=!0;return Nr(()=>{Co(js,l=>{e(0,s=l),e(1,i=!1)})}),[s,i,r,async()=>{const l=new Ie;try{await vm(js,l)}catch(u){console.error("Error signing in:",u)}}]}class dE extends Ne{constructor(t){super(),Oe(this,t,iE,sE,De,{})}}export{dE as component};
