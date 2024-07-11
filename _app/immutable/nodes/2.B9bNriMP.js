import{s as Ne,x as Pd,n as Tt,r as Oe,b as re,o as Lr,i as Cd,y as bt,z as kd}from"../chunks/scheduler.li6PcnJj.js";import{S as Me,i as Le,e as O,s as Q,c as M,d as Z,h as X,y as mt,g as L,o as C,j as dt,k,z as tt,A as xr,b as ae,f as le,l as Ae,B as Dd,C as _t,D as jc,p as qe,a as se,n as zc,t as ie,q as $c,m as fl,u as en,v as nn,w as rn,x as sn}from"../chunks/index.DQWX1qTz.js";import{w as Hs}from"../chunks/index.ChQ1qdP7.js";function ge(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}var pl={};/**
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
 */const Hc=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Vd=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],l=r[e++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,l=a?r[s+1]:0,u=s+2<r.length,d=u?r[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let _=(l&15)<<2|d>>6,I=d&63;u||(I=64,a||(_=64)),n.push(e[f],e[m],e[_],e[I])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Hc(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Vd(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],l=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const m=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new Nd;const _=i<<2|l>>4;if(n.push(_),d!==64){const I=l<<4&240|d>>2;if(n.push(I),m!==64){const A=d<<6&192|m;n.push(A)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Od=function(r){const t=Hc(r);return Gc.encodeByteArray(t,!0)},Ps=function(r){return Od(r).replace(/\./g,"")},Wc=function(r){try{return Gc.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Md(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ld=()=>Md().__FIREBASE_DEFAULTS__,xd=()=>{if(typeof process>"u"||typeof pl>"u")return;const r=pl.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ud=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Wc(r[1]);return t&&JSON.parse(t)},Gs=()=>{try{return Ld()||xd()||Ud()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Kc=r=>{var t,e;return(e=(t=Gs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},Fd=r=>{const t=Kc(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Qc=()=>{var r;return(r=Gs())===null||r===void 0?void 0:r.config},Xc=r=>{var t;return(t=Gs())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class Bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function qd(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ps(JSON.stringify(e)),Ps(JSON.stringify(a)),""].join(".")}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function zd(){var r;const t=(r=Gs())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $d(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Hd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gd(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Wd(){return!zd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kd(){try{return typeof indexedDB=="object"}catch{return!1}}function Qd(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Xd="FirebaseError";class xe extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Xd,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Jd(i,n):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new xe(s,l,n)}}function Jd(r,t){return r.replace(Yd,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Yd=/\{\$([^}]+)}/g;function Zd(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Cs(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(ml(i)&&ml(a)){if(!Cs(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function ml(r){return r!==null&&typeof r=="object"}/**
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
 */function Fr(r){const t=[];for(const[e,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function tf(r,t){const e=new ef(r,t);return e.subscribe.bind(e)}class ef{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let s;if(t===void 0&&e===void 0&&n===void 0)throw new Error("Missing Observer.");nf(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:n},s.next===void 0&&(s.next=Oi),s.error===void 0&&(s.error=Oi),s.complete===void 0&&(s.complete=Oi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nf(r,t){if(typeof r!="object"||r===null)return!1;for(const e of t)if(e in r&&typeof r[e]=="function")return!0;return!1}function Oi(){}/**
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
 */function qt(r){return r&&r._delegate?r._delegate:r}class En{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const fn="[DEFAULT]";/**
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
 */class rf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Bd;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(of(t))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=fn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fn){return this.instances.has(t)}getOptions(t=fn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:sf(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=fn){return this.component?this.component.multipleInstances?t:fn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sf(r){return r===fn?void 0:r}function of(r){return r.instantiationMode==="EAGER"}/**
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
 */class af{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ct;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ct||(ct={}));const lf={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},cf=ct.INFO,uf={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},hf=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=uf[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _o{constructor(t){this.name=t,this._logLevel=cf,this._logHandler=hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...t),this._logHandler(this,ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...t),this._logHandler(this,ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...t),this._logHandler(this,ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...t),this._logHandler(this,ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...t),this._logHandler(this,ct.ERROR,...t)}}const df=(r,t)=>t.some(e=>r instanceof e);let gl,_l;function ff(){return gl||(gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pf(){return _l||(_l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jc=new WeakMap,Gi=new WeakMap,Yc=new WeakMap,Mi=new WeakMap,yo=new WeakMap;function mf(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(We(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Jc.set(e,r)}).catch(()=>{}),yo.set(t,r),t}function gf(r){if(Gi.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Gi.set(r,t)}let Wi={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Gi.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Yc.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return We(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function _f(r){Wi=r(Wi)}function yf(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Li(this),t,...e);return Yc.set(n,t.sort?t.sort():[t]),We(n)}:pf().includes(r)?function(...t){return r.apply(Li(this),t),We(Jc.get(this))}:function(...t){return We(r.apply(Li(this),t))}}function vf(r){return typeof r=="function"?yf(r):(r instanceof IDBTransaction&&gf(r),df(r,ff())?new Proxy(r,Wi):r)}function We(r){if(r instanceof IDBRequest)return mf(r);if(Mi.has(r))return Mi.get(r);const t=vf(r);return t!==r&&(Mi.set(r,t),yo.set(t,r)),t}const Li=r=>yo.get(r);function Ef(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),l=We(a);return n&&a.addEventListener("upgradeneeded",u=>{n(We(a.result),u.oldVersion,u.newVersion,We(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const If=["get","getKey","getAll","getAllKeys","count"],Tf=["put","add","delete","clear"],xi=new Map;function yl(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(xi.get(t))return xi.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Tf.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||If.includes(e)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&u.done]))[0]};return xi.set(t,i),i}_f(r=>({...r,get:(t,e,n)=>yl(t,e)||r.get(t,e,n),has:(t,e)=>!!yl(t,e)||r.has(t,e)}));/**
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
 */class wf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Af(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Af(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ki="@firebase/app",vl="0.10.5";/**
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
 */const In=new _o("@firebase/app"),bf="@firebase/app-compat",Rf="@firebase/analytics-compat",Sf="@firebase/analytics",Pf="@firebase/app-check-compat",Cf="@firebase/app-check",kf="@firebase/auth",Df="@firebase/auth-compat",Vf="@firebase/database",Nf="@firebase/database-compat",Of="@firebase/functions",Mf="@firebase/functions-compat",Lf="@firebase/installations",xf="@firebase/installations-compat",Uf="@firebase/messaging",Ff="@firebase/messaging-compat",Bf="@firebase/performance",qf="@firebase/performance-compat",jf="@firebase/remote-config",zf="@firebase/remote-config-compat",$f="@firebase/storage",Hf="@firebase/storage-compat",Gf="@firebase/firestore",Wf="@firebase/vertexai-preview",Kf="@firebase/firestore-compat",Qf="firebase",Xf="10.12.2";/**
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
 */const Qi="[DEFAULT]",Jf={[Ki]:"fire-core",[bf]:"fire-core-compat",[Sf]:"fire-analytics",[Rf]:"fire-analytics-compat",[Cf]:"fire-app-check",[Pf]:"fire-app-check-compat",[kf]:"fire-auth",[Df]:"fire-auth-compat",[Vf]:"fire-rtdb",[Nf]:"fire-rtdb-compat",[Of]:"fire-fn",[Mf]:"fire-fn-compat",[Lf]:"fire-iid",[xf]:"fire-iid-compat",[Uf]:"fire-fcm",[Ff]:"fire-fcm-compat",[Bf]:"fire-perf",[qf]:"fire-perf-compat",[jf]:"fire-rc",[zf]:"fire-rc-compat",[$f]:"fire-gcs",[Hf]:"fire-gcs-compat",[Gf]:"fire-fst",[Kf]:"fire-fst-compat",[Wf]:"fire-vertex","fire-js":"fire-js",[Qf]:"fire-js-all"};/**
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
 */const ks=new Map,Yf=new Map,Xi=new Map;function El(r,t){try{r.container.addComponent(t)}catch(e){In.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function qn(r){const t=r.name;if(Xi.has(t))return In.debug(`There were multiple attempts to register component ${t}.`),!1;Xi.set(t,r);for(const e of ks.values())El(e,r);for(const e of Yf.values())El(e,r);return!0}function vo(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function be(r){return r.settings!==void 0}/**
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
 */const Zf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new Ur("app","Firebase",Zf);/**
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
 */class tp{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Xn=Xf;function Zc(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Qi,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(e||(e=Qc()),!e)throw Ke.create("no-options");const i=ks.get(s);if(i){if(Cs(e,i.options)&&Cs(n,i.config))return i;throw Ke.create("duplicate-app",{appName:s})}const a=new af(s);for(const u of Xi.values())a.addComponent(u);const l=new tp(e,n,a);return ks.set(s,l),l}function tu(r=Qi){const t=ks.get(r);if(!t&&r===Qi&&Qc())return Zc();if(!t)throw Ke.create("no-app",{appName:r});return t}function Qe(r,t,e){var n;let s=(n=Jf[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),In.warn(l.join(" "));return}qn(new En(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ep="firebase-heartbeat-database",np=1,Sr="firebase-heartbeat-store";let Ui=null;function eu(){return Ui||(Ui=Ef(ep,np,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Sr)}catch(e){console.warn(e)}}}}).catch(r=>{throw Ke.create("idb-open",{originalErrorMessage:r.message})})),Ui}async function rp(r){try{const e=(await eu()).transaction(Sr),n=await e.objectStore(Sr).get(nu(r));return await e.done,n}catch(t){if(t instanceof xe)In.warn(t.message);else{const e=Ke.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});In.warn(e.message)}}}async function Il(r,t){try{const n=(await eu()).transaction(Sr,"readwrite");await n.objectStore(Sr).put(t,nu(r)),await n.done}catch(e){if(e instanceof xe)In.warn(e.message);else{const n=Ke.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}function nu(r){return`${r.name}!${r.options.appId}`}/**
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
 */const sp=1024,ip=30*24*60*60*1e3;class op{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new lp(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tl();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ip}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tl(),{heartbeatsToSend:n,unsentEntries:s}=ap(this._heartbeatsCache.heartbeats),i=Ps(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tl(){return new Date().toISOString().substring(0,10)}function ap(r,t=sp){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wl(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),wl(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class lp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kd()?Qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await rp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Il(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Il(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function wl(r){return Ps(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function cp(r){qn(new En("platform-logger",t=>new wf(t),"PRIVATE")),qn(new En("heartbeat",t=>new op(t),"PRIVATE")),Qe(Ki,vl,r),Qe(Ki,vl,"esm2017"),Qe("fire-js","")}cp("");var up="firebase",hp="10.12.2";/**
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
 */Qe(up,hp,"app");function Eo(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(e[n[s]]=r[n[s]]);return e}function ru(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dp=ru,su=new Ur("auth","Firebase",ru());/**
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
 */const Ds=new _o("@firebase/auth");function fp(r,...t){Ds.logLevel<=ct.WARN&&Ds.warn(`Auth (${Xn}): ${r}`,...t)}function vs(r,...t){Ds.logLevel<=ct.ERROR&&Ds.error(`Auth (${Xn}): ${r}`,...t)}/**
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
 */function _e(r,...t){throw To(r,...t)}function ce(r,...t){return To(r,...t)}function Io(r,t,e){const n=Object.assign(Object.assign({},dp()),{[t]:e});return new Ur("auth","Firebase",n).create(t,{appName:r.name})}function gn(r){return Io(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pp(r,t,e){const n=e;if(!(t instanceof n))throw n.name!==t.constructor.name&&_e(r,"argument-error"),Io(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function To(r,...t){if(typeof r!="string"){const e=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(e,...n)}return su.create(r,...t)}function nt(r,t,...e){if(!r)throw To(t,...e)}function Re(r){const t="INTERNAL ASSERTION FAILED: "+r;throw vs(t),new Error(t)}function ke(r,t){r||Re(t)}/**
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
 */function Ji(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function mp(){return Al()==="http:"||Al()==="https:"}function Al(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function gp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mp()||$d()||"connection"in navigator)?navigator.onLine:!0}function _p(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Br{constructor(t,e){this.shortDelay=t,this.longDelay=e,ke(e>t,"Short delay should be less than long delay!"),this.isMobile=jd()||Hd()}get(){return gp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wo(r,t){ke(r.emulator,"Emulator should always be set here");const{url:e}=r.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class iu{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vp=new Br(3e4,6e4);function Ao(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Jn(r,t,e,n,s={}){return ou(r,s,async()=>{let i={},a={};n&&(t==="GET"?a=n:i={body:JSON.stringify(n)});const l=Fr(Object.assign({key:r.config.apiKey},a)).slice(1),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode),iu.fetch()(au(r,r.config.apiHost,e,l),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},i))})}async function ou(r,t,e){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},yp),t);try{const s=new Ip(r),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw fs(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw fs(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw fs(r,"user-disabled",a);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Io(r,f,d);_e(r,f)}}catch(s){if(s instanceof xe)throw s;_e(r,"network-request-failed",{message:String(s)})}}async function Ep(r,t,e,n,s={}){const i=await Jn(r,t,e,n,s);return"mfaPendingCredential"in i&&_e(r,"multi-factor-auth-required",{_serverResponse:i}),i}function au(r,t,e,n){const s=`${t}${e}?${n}`;return r.config.emulator?wo(r.config,s):`${r.config.apiScheme}://${s}`}class Ip{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,n)=>{this.timer=setTimeout(()=>n(ce(this.auth,"network-request-failed")),vp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(r,t,e){const n={appName:r.name};e.email&&(n.email=e.email),e.phoneNumber&&(n.phoneNumber=e.phoneNumber);const s=ce(r,t,n);return s.customData._tokenResponse=e,s}/**
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
 */async function Tp(r,t){return Jn(r,"POST","/v1/accounts:delete",t)}async function lu(r,t){return Jn(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tr(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wp(r,t=!1){const e=qt(r),n=await e.getIdToken(t),s=bo(n);nt(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Tr(Fi(s.auth_time)),issuedAtTime:Tr(Fi(s.iat)),expirationTime:Tr(Fi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fi(r){return Number(r)*1e3}function bo(r){const[t,e,n]=r.split(".");if(t===void 0||e===void 0||n===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wc(e);return s?JSON.parse(s):(vs("Failed to decode base64 JWT payload"),null)}catch(s){return vs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bl(r){const t=bo(r);return nt(t,"internal-error"),nt(typeof t.exp<"u","internal-error"),nt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Pr(r,t,e=!1){if(e)return t;try{return await t}catch(n){throw n instanceof xe&&Ap(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Ap({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class bp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yi{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vs(r){var t;const e=r.auth,n=await r.getIdToken(),s=await Pr(r,lu(e,{idToken:n}));nt(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const a=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?cu(i.providerUserInfo):[],l=Sp(r.providerData,a),u=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function Rp(r){const t=qt(r);await Vs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Sp(r,t){return[...r.filter(n=>!t.some(s=>s.providerId===n.providerId)),...t]}function cu(r){return r.map(t=>{var{providerId:e}=t,n=Eo(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Pp(r,t){const e=await ou(r,{},async()=>{const n=Fr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=au(r,s,"/v1/token",`key=${i}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",iu.fetch()(a,{method:"POST",headers:l,body:n})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Cp(r,t){return Jn(r,"POST","/v2/accounts:revokeToken",Ao(r,t))}/**
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
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){nt(t.idToken,"internal-error"),nt(typeof t.idToken<"u","internal-error"),nt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bl(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){nt(t.length!==0,"internal-error");const e=bl(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(nt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:s,expiresIn:i}=await Pp(t,e);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,e){const{refreshToken:n,accessToken:s,expirationTime:i}=e,a=new xn;return n&&(nt(typeof n=="string","internal-error",{appName:t}),a.refreshToken=n),s&&(nt(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(nt(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return Re("not implemented")}}/**
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
 */function je(r,t){nt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Se{constructor(t){var{uid:e,auth:n,stsTokenManager:s}=t,i=Eo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Pr(this,this.stsTokenManager.getToken(this.auth,t));return nt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return wp(this,t)}reload(){return Rp(this)}_assign(t){this!==t&&(nt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Se(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){nt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Vs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(gn(this.auth));const t=await this.getIdToken();return await Pr(this,Tp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,s,i,a,l,u,d,f;const m=(n=e.displayName)!==null&&n!==void 0?n:void 0,_=(s=e.email)!==null&&s!==void 0?s:void 0,I=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,A=(a=e.photoURL)!==null&&a!==void 0?a:void 0,S=(l=e.tenantId)!==null&&l!==void 0?l:void 0,D=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,U=(d=e.createdAt)!==null&&d!==void 0?d:void 0,G=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:K,isAnonymous:j,providerData:z,stsTokenManager:T}=e;nt(B&&T,t,"internal-error");const g=xn.fromJSON(this.name,T);nt(typeof B=="string",t,"internal-error"),je(m,t.name),je(_,t.name),nt(typeof K=="boolean",t,"internal-error"),nt(typeof j=="boolean",t,"internal-error"),je(I,t.name),je(A,t.name),je(S,t.name),je(D,t.name),je(U,t.name),je(G,t.name);const y=new Se({uid:B,auth:t,email:_,emailVerified:K,displayName:m,isAnonymous:j,photoURL:A,phoneNumber:I,tenantId:S,stsTokenManager:g,createdAt:U,lastLoginAt:G});return z&&Array.isArray(z)&&(y.providerData=z.map(E=>Object.assign({},E))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(t,e,n=!1){const s=new xn;s.updateFromServerResponse(e);const i=new Se({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:n});return await Vs(i),i}static async _fromGetAccountInfoResponse(t,e,n){const s=e.users[0];nt(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new xn;l.updateFromIdToken(n);const u=new Se({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Rl=new Map;function Pe(r){ke(r instanceof Function,"Expected a class definition");let t=Rl.get(r);return t?(ke(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Rl.set(r,t),t)}/**
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
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}uu.type="NONE";const Sl=uu;/**
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
 */function Es(r,t,e){return`firebase:${r}:${t}:${e}`}class Un{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Es(this.userKey,s.apiKey,i),this.fullPersistenceKey=Es("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Se._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Un(Pe(Sl),t,n);const s=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Pe(Sl);const a=Es(n,t.config.apiKey,t.name);let l=null;for(const d of e)try{const f=await d._get(a);if(f){const m=Se._fromJSON(t,f);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Un(i,t,n):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(e.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Un(i,t,n))}}/**
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
 */function Pl(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mu(t))return"Blackberry";if(gu(t))return"Webos";if(Ro(t))return"Safari";if((t.includes("chrome/")||du(t))&&!t.includes("edge/"))return"Chrome";if(pu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(e);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function hu(r=Bt()){return/firefox\//i.test(r)}function Ro(r=Bt()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function du(r=Bt()){return/crios\//i.test(r)}function fu(r=Bt()){return/iemobile/i.test(r)}function pu(r=Bt()){return/android/i.test(r)}function mu(r=Bt()){return/blackberry/i.test(r)}function gu(r=Bt()){return/webos/i.test(r)}function Ws(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function kp(r=Bt()){var t;return Ws(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Dp(){return Gd()&&document.documentMode===10}function _u(r=Bt()){return Ws(r)||pu(r)||gu(r)||mu(r)||/windows phone/i.test(r)||fu(r)}function Vp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function yu(r,t=[]){let e;switch(r){case"Browser":e=Pl(Bt());break;case"Worker":e=`${Pl(Bt())}-${r}`;break;default:e=r}const n=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Xn}/${n}`}/**
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
 */class Np{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=i=>new Promise((a,l)=>{try{const u=t(i);a(u)}catch(u){l(u)}});n.onAbort=e,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Op(r,t={}){return Jn(r,"GET","/v2/passwordPolicy",Ao(r,t))}/**
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
 */const Mp=6;class Lp{constructor(t){var e,n,s,i;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Mp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=t.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let n;for(let s=0;s<t.length;s++)n=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class xp{constructor(t,e,n,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cl(this),this.idTokenSubscription=new Cl(this),this.beforeStateQueue=new Np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Pe(e)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Un.create(this,t),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await lu(this,{idToken:t}),n=await Se._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return nt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Vs(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_p()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(be(this.app))return Promise.reject(gn(this));const e=t?qt(t):null;return e&&nt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&nt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return be(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Op(this),e=new Lp(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ur("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(n.tenantId=this.tenantId),await Cp(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Pe(t)||this._popupRedirectResolver;nt(e,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[Pe(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(nt(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,n,s);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return nt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&fp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ks(r){return qt(r)}class Cl{constructor(t){this.auth=t,this.observer=null,this.addObserver=tf(e=>this.observer=e)}get next(){return nt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let So={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Up(r){So=r}function Fp(r){return So.loadJS(r)}function Bp(){return So.gapiScript}function qp(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function jp(r,t){const e=vo(r,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(Cs(i,t??{}))return s;_e(s,"already-initialized")}return e.initialize({options:t})}function zp(r,t){const e=(t==null?void 0:t.persistence)||[],n=(Array.isArray(e)?e:[e]).map(Pe);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function $p(r,t,e){const n=Ks(r);nt(n._canInitEmulator,n,"emulator-config-failed"),nt(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const s=!1,i=vu(t),{host:a,port:l}=Hp(t),u=l===null?"":`:${l}`;n.config.emulator={url:`${i}//${a}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Gp()}function vu(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function Hp(r){const t=vu(r),e=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!e)return{host:"",port:null};const n=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:kl(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:kl(a)}}}function kl(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function Gp(){function r(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Eu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Re("not implemented")}_getIdTokenResponse(t){return Re("not implemented")}_linkToIdToken(t,e){return Re("not implemented")}_getReauthenticationResolver(t){return Re("not implemented")}}/**
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
 */async function Fn(r,t){return Ep(r,"POST","/v1/accounts:signInWithIdp",Ao(r,t))}/**
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
 */const Wp="http://localhost";class Tn extends Eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Tn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):_e("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:s}=e,i=Eo(e,["providerId","signInMethod"]);if(!n||!s)return null;const a=new Tn(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Fn(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Fn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Fn(t,e)}buildRequest(){const t={requestUri:Wp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Fr(e)}return t}}/**
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
 */class qr extends Po{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ze extends qr{constructor(){super("facebook.com")}static credential(t){return Tn._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ze.credentialFromTaggedObject(t)}static credentialFromError(t){return ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ze.credential(t.oauthAccessToken)}catch{return null}}}ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";ze.PROVIDER_ID="facebook.com";/**
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
 */class we extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Tn._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return we.credential(e,n)}catch{return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com";we.PROVIDER_ID="google.com";/**
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
 */class $e extends qr{constructor(){super("github.com")}static credential(t){return Tn._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $e.credential(t.oauthAccessToken)}catch{return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com";$e.PROVIDER_ID="github.com";/**
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
 */class He extends qr{constructor(){super("twitter.com")}static credential(t,e){return Tn._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return He.credentialFromTaggedObject(t)}static credentialFromError(t){return He.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return He.credential(e,n)}catch{return null}}}He.TWITTER_SIGN_IN_METHOD="twitter.com";He.PROVIDER_ID="twitter.com";/**
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
 */class jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,s=!1){const i=await Se._fromIdTokenResponse(t,n,s),a=Dl(n);return new jn({user:i,providerId:a,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const s=Dl(n);return new jn({user:t,providerId:s,_tokenResponse:n,operationType:e})}}function Dl(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ns extends xe{constructor(t,e,n,s){var i;super(e.code,e.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,s){return new Ns(t,e,n,s)}}function Iu(r,t,e,n){return(t==="reauthenticate"?e._getReauthenticationResolver(r):e._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(r,i,t,n):i})}async function Kp(r,t,e=!1){const n=await Pr(r,t._linkToIdToken(r.auth,await r.getIdToken()),e);return jn._forOperation(r,"link",n)}/**
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
 */async function Qp(r,t,e=!1){const{auth:n}=r;if(be(n.app))return Promise.reject(gn(n));const s="reauthenticate";try{const i=await Pr(r,Iu(n,s,t,r),e);nt(i.idToken,n,"internal-error");const a=bo(i.idToken);nt(a,n,"internal-error");const{sub:l}=a;return nt(r.uid===l,n,"user-mismatch"),jn._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_e(n,"user-mismatch"),i}}/**
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
 */async function Xp(r,t,e=!1){if(be(r.app))return Promise.reject(gn(r));const n="signIn",s=await Iu(r,n,t),i=await jn._fromIdTokenResponse(r,n,s);return e||await r._updateCurrentUser(i.user),i}function Jp(r,t,e,n){return qt(r).onIdTokenChanged(t,e,n)}function Yp(r,t,e){return qt(r).beforeAuthStateChanged(t,e)}function Co(r,t,e,n){return qt(r).onAuthStateChanged(t,e,n)}function Zp(r){return qt(r).signOut()}const Os="__sak";/**
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
 */class Tu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tm(){const r=Bt();return Ro(r)||Ws(r)}const em=1e3,nm=10;class wu extends Tu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tm()&&Vp(),this.fallbackToPolling=_u(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),s=this.localCache[e];n!==s&&t(e,s,n)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const s=()=>{const a=this.storage.getItem(n);!e&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);Dp()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,nm):s()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const s of Array.from(n))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}wu.type="LOCAL";const rm=wu;/**
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
 */class Au extends Tu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Au.type="SESSION";const bu=Au;/**
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
 */function sm(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Qs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const n=new Qs(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(a).map(async d=>d(e.origin,i)),u=await sm(l);e.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
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
 */function ko(r="",t=10){let e="";for(let n=0;n<t;n++)e+=Math.floor(Math.random()*10);return r+e}/**
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
 */class im{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=ko("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function fe(){return window}function om(r){fe().location.href=r}/**
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
 */function Ru(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lm(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function cm(){return Ru()?self:null}/**
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
 */const Su="firebaseLocalStorageDb",um=1,Ms="firebaseLocalStorage",Pu="fbase_key";class jr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Xs(r,t){return r.transaction([Ms],t?"readwrite":"readonly").objectStore(Ms)}function hm(){const r=indexedDB.deleteDatabase(Su);return new jr(r).toPromise()}function Zi(){const r=indexedDB.open(Su,um);return new Promise((t,e)=>{r.addEventListener("error",()=>{e(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ms,{keyPath:Pu})}catch(s){e(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ms)?t(n):(n.close(),await hm(),t(await Zi()))})})}async function Vl(r,t,e){const n=Xs(r,!0).put({[Pu]:t,value:e});return new jr(n).toPromise()}async function dm(r,t){const e=Xs(r,!1).get(t),n=await new jr(e).toPromise();return n===void 0?null:n.value}function Nl(r,t){const e=Xs(r,!0).delete(t);return new jr(e).toPromise()}const fm=800,pm=3;class Cu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(t){let e=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(e++>pm)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ru()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(cm()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await am(),!this.activeServiceWorker)return;this.sender=new im(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((t=n[0])===null||t===void 0)&&t.fulfilled&&!((e=n[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zi();return await Vl(t,Os,"1"),await Nl(t,Os),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vl(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(n=>dm(n,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Nl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Xs(s,!1).getAll();return new jr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],n=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const s of Array.from(n))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cu.type="LOCAL";const mm=Cu;new Br(3e4,6e4);/**
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
 */function ku(r,t){return t?Pe(t):(nt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Do extends Eu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Fn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function gm(r){return Xp(r.auth,new Do(r),r.bypassAuthState)}function _m(r){const{auth:t,user:e}=r;return nt(e,t,"internal-error"),Qp(e,new Do(r),r.bypassAuthState)}async function ym(r){const{auth:t,user:e}=r;return nt(e,t,"internal-error"),Kp(e,new Do(r),r.bypassAuthState)}/**
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
 */class Du{constructor(t,e,n,s,i=!1){this.auth=t,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:s,tenantId:i,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gm;case"linkViaPopup":case"linkViaRedirect":return ym;case"reauthViaPopup":case"reauthViaRedirect":return _m;default:_e(this.auth,"internal-error")}}resolve(t){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vm=new Br(2e3,1e4);async function Em(r,t,e){if(be(r.app))return Promise.reject(ce(r,"operation-not-supported-in-this-environment"));const n=Ks(r);pp(r,t,Po);const s=ku(n,e);return new pn(n,"signInViaPopup",t,s).executeNotNull()}class pn extends Du{constructor(t,e,n,s,i){super(t,e,s,i),this.provider=n,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return nt(t,this.auth,"internal-error"),t}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const t=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;if(!((n=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,vm.get())};t()}}pn.currentPopupAction=null;/**
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
 */const Im="pendingRedirect",Is=new Map;class Tm extends Du{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Is.get(this.auth._key());if(!t){try{const n=await wm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Is.set(this.auth._key(),t)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wm(r,t){const e=Rm(t),n=bm(r);if(!await n._isAvailable())return!1;const s=await n._get(e)==="true";return await n._remove(e),s}function Am(r,t){Is.set(r._key(),t)}function bm(r){return Pe(r._redirectPersistence)}function Rm(r){return Es(Im,r.config.apiKey,r.name)}async function Sm(r,t,e=!1){if(be(r.app))return Promise.reject(gn(r));const n=Ks(r),s=ku(n,t),a=await new Tm(n,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}/**
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
 */const Pm=10*60*1e3;class Cm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!km(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Vu(t)){const s=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";e.onError(ce(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Pm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ol(t))}saveEventToCache(t){this.cachedEventUids.add(Ol(t)),this.lastProcessedEventTime=Date.now()}}function Ol(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function Vu({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function km(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vu(r);default:return!1}}/**
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
 */async function Dm(r,t={}){return Jn(r,"GET","/v1/projects",t)}/**
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
 */const Vm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nm=/^https?/;async function Om(r){if(r.config.emulator)return;const{authorizedDomains:t}=await Dm(r);for(const e of t)try{if(Mm(e))return}catch{}_e(r,"unauthorized-domain")}function Mm(r){const t=Ji(),{protocol:e,hostname:n}=new URL(t);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?e==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===n}if(!Nm.test(e))return!1;if(Vm.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Lm=new Br(3e4,6e4);function Ml(){const r=fe().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let e=0;e<r.CP.length;e++)r.CP[e]=null}}function xm(r){return new Promise((t,e)=>{var n,s,i;function a(){Ml(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ml(),e(ce(r,"network-request-failed"))},timeout:Lm.get()})}if(!((s=(n=fe().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=fe().gapi)===null||i===void 0)&&i.load)a();else{const l=qp("iframefcb");return fe()[l]=()=>{gapi.load?a():e(ce(r,"network-request-failed"))},Fp(`${Bp()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw Ts=null,t})}let Ts=null;function Um(r){return Ts=Ts||xm(r),Ts}/**
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
 */const Fm=new Br(5e3,15e3),Bm="__/auth/iframe",qm="emulator/auth/iframe",jm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $m(r){const t=r.config;nt(t.authDomain,r,"auth-domain-config-required");const e=t.emulator?wo(t,qm):`https://${r.config.authDomain}/${Bm}`,n={apiKey:t.apiKey,appName:r.name,v:Xn},s=zm.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${e}?${Fr(n).slice(1)}`}async function Hm(r){const t=await Um(r),e=fe().gapi;return nt(e,r,"internal-error"),t.open({where:document.body,url:$m(r),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jm,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=ce(r,"network-request-failed"),l=fe().setTimeout(()=>{i(a)},Fm.get());function u(){fe().clearTimeout(l),s(n)}n.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Gm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wm=500,Km=600,Qm="_blank",Xm="http://localhost";class Ll{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jm(r,t,e,n=Wm,s=Km){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Gm),{width:n.toString(),height:s.toString(),top:i,left:a}),d=Bt().toLowerCase();e&&(l=du(d)?Qm:e),hu(d)&&(t=t||Xm,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[I,A])=>`${_}${I}=${A},`,"");if(kp(d)&&l!=="_self")return Ym(t||"",l),new Ll(null);const m=window.open(t||"",l,f);nt(m,r,"popup-blocked");try{m.focus()}catch{}return new Ll(m)}function Ym(r,t){const e=document.createElement("a");e.href=r,e.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(n)}/**
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
 */const Zm="__/auth/handler",tg="emulator/auth/handler",eg=encodeURIComponent("fac");async function xl(r,t,e,n,s,i){nt(r.config.authDomain,r,"auth-domain-config-required"),nt(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:e,redirectUrl:n,v:Xn,eventId:s};if(t instanceof Po){t.setDefaultLanguage(r.languageCode),a.providerId=t.providerId||"",Zd(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(t instanceof qr){const f=t.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await r._getAppCheckToken(),d=u?`#${eg}=${encodeURIComponent(u)}`:"";return`${ng(r)}?${Fr(l).slice(1)}${d}`}function ng({config:r}){return r.emulator?wo(r,tg):`https://${r.authDomain}/${Zm}`}/**
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
 */const Bi="webStorageSupport";class rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bu,this._completeRedirectFn=Sm,this._overrideRedirectResult=Am}async _openPopup(t,e,n,s){var i;ke((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await xl(t,e,n,Ji(),s);return Jm(t,a,ko())}async _openRedirect(t,e,n,s){await this._originValidation(t);const i=await xl(t,e,n,Ji(),s);return om(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(ke(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Hm(t),n=new Cm(t);return e.register("authEvent",s=>(nt(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Bi,{type:Bi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bi];a!==void 0&&e(!!a),_e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Om(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _u()||Ro()||Ws()}}const sg=rg;var Ul="@firebase/auth",Fl="1.7.4";/**
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
 */class ig{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){nt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function og(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ag(r){qn(new En("auth",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;nt(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yu(r)},d=new xp(n,s,i,u);return zp(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider("auth-internal").initialize()})),qn(new En("auth-internal",t=>{const e=Ks(t.getProvider("auth").getImmediate());return(n=>new ig(n))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Ul,Fl,og(r)),Qe(Ul,Fl,"esm2017")}/**
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
 */const lg=5*60,cg=Xc("authIdTokenMaxAge")||lg;let Bl=null;const ug=r=>async t=>{const e=t&&await t.getIdTokenResult(),n=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>cg)return;const s=e==null?void 0:e.token;Bl!==s&&(Bl=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function to(r=tu()){const t=vo(r,"auth");if(t.isInitialized())return t.getImmediate();const e=jp(r,{popupRedirectResolver:sg,persistence:[mm,rm,bu]}),n=Xc("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=ug(i.toString());Yp(e,a,()=>a(e.currentUser)),Jp(e,l=>a(l))}}const s=Kc("auth");return s&&$p(e,`http://${s}`),e}function hg(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}Up({loadJS(r){return new Promise((t,e)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=t,n.onerror=s=>{const i=ce("internal-error");i.customData=s,e(i)},n.type="text/javascript",n.charset="UTF-8",hg().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ag("Browser");var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _n,Nu;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,g){function y(){}y.prototype=g.prototype,T.D=g.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,w,b){for(var v=Array(arguments.length-2),H=2;H<arguments.length;H++)v[H-2]=arguments[H];return g.prototype[w].apply(E,v)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;16>w;++w)E[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=T.g[0],y=T.g[1],w=T.g[2];var b=T.g[3],v=g+(b^y&(w^b))+E[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=b+(w^g&(y^w))+E[1]+3905402710&4294967295,b=g+(v<<12&4294967295|v>>>20),v=w+(y^b&(g^y))+E[2]+606105819&4294967295,w=b+(v<<17&4294967295|v>>>15),v=y+(g^w&(b^g))+E[3]+3250441966&4294967295,y=w+(v<<22&4294967295|v>>>10),v=g+(b^y&(w^b))+E[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(w^g&(y^w))+E[5]+1200080426&4294967295,b=g+(v<<12&4294967295|v>>>20),v=w+(y^b&(g^y))+E[6]+2821735955&4294967295,w=b+(v<<17&4294967295|v>>>15),v=y+(g^w&(b^g))+E[7]+4249261313&4294967295,y=w+(v<<22&4294967295|v>>>10),v=g+(b^y&(w^b))+E[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(w^g&(y^w))+E[9]+2336552879&4294967295,b=g+(v<<12&4294967295|v>>>20),v=w+(y^b&(g^y))+E[10]+4294925233&4294967295,w=b+(v<<17&4294967295|v>>>15),v=y+(g^w&(b^g))+E[11]+2304563134&4294967295,y=w+(v<<22&4294967295|v>>>10),v=g+(b^y&(w^b))+E[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(w^g&(y^w))+E[13]+4254626195&4294967295,b=g+(v<<12&4294967295|v>>>20),v=w+(y^b&(g^y))+E[14]+2792965006&4294967295,w=b+(v<<17&4294967295|v>>>15),v=y+(g^w&(b^g))+E[15]+1236535329&4294967295,y=w+(v<<22&4294967295|v>>>10),v=g+(w^b&(y^w))+E[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^w&(g^y))+E[6]+3225465664&4294967295,b=g+(v<<9&4294967295|v>>>23),v=w+(g^y&(b^g))+E[11]+643717713&4294967295,w=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(w^b))+E[0]+3921069994&4294967295,y=w+(v<<20&4294967295|v>>>12),v=g+(w^b&(y^w))+E[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^w&(g^y))+E[10]+38016083&4294967295,b=g+(v<<9&4294967295|v>>>23),v=w+(g^y&(b^g))+E[15]+3634488961&4294967295,w=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(w^b))+E[4]+3889429448&4294967295,y=w+(v<<20&4294967295|v>>>12),v=g+(w^b&(y^w))+E[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^w&(g^y))+E[14]+3275163606&4294967295,b=g+(v<<9&4294967295|v>>>23),v=w+(g^y&(b^g))+E[3]+4107603335&4294967295,w=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(w^b))+E[8]+1163531501&4294967295,y=w+(v<<20&4294967295|v>>>12),v=g+(w^b&(y^w))+E[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^w&(g^y))+E[2]+4243563512&4294967295,b=g+(v<<9&4294967295|v>>>23),v=w+(g^y&(b^g))+E[7]+1735328473&4294967295,w=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(w^b))+E[12]+2368359562&4294967295,y=w+(v<<20&4294967295|v>>>12),v=g+(y^w^b)+E[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^w)+E[8]+2272392833&4294967295,b=g+(v<<11&4294967295|v>>>21),v=w+(b^g^y)+E[11]+1839030562&4294967295,w=b+(v<<16&4294967295|v>>>16),v=y+(w^b^g)+E[14]+4259657740&4294967295,y=w+(v<<23&4294967295|v>>>9),v=g+(y^w^b)+E[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^w)+E[4]+1272893353&4294967295,b=g+(v<<11&4294967295|v>>>21),v=w+(b^g^y)+E[7]+4139469664&4294967295,w=b+(v<<16&4294967295|v>>>16),v=y+(w^b^g)+E[10]+3200236656&4294967295,y=w+(v<<23&4294967295|v>>>9),v=g+(y^w^b)+E[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^w)+E[0]+3936430074&4294967295,b=g+(v<<11&4294967295|v>>>21),v=w+(b^g^y)+E[3]+3572445317&4294967295,w=b+(v<<16&4294967295|v>>>16),v=y+(w^b^g)+E[6]+76029189&4294967295,y=w+(v<<23&4294967295|v>>>9),v=g+(y^w^b)+E[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^w)+E[12]+3873151461&4294967295,b=g+(v<<11&4294967295|v>>>21),v=w+(b^g^y)+E[15]+530742520&4294967295,w=b+(v<<16&4294967295|v>>>16),v=y+(w^b^g)+E[2]+3299628645&4294967295,y=w+(v<<23&4294967295|v>>>9),v=g+(w^(y|~b))+E[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~w))+E[7]+1126891415&4294967295,b=g+(v<<10&4294967295|v>>>22),v=w+(g^(b|~y))+E[14]+2878612391&4294967295,w=b+(v<<15&4294967295|v>>>17),v=y+(b^(w|~g))+E[5]+4237533241&4294967295,y=w+(v<<21&4294967295|v>>>11),v=g+(w^(y|~b))+E[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~w))+E[3]+2399980690&4294967295,b=g+(v<<10&4294967295|v>>>22),v=w+(g^(b|~y))+E[10]+4293915773&4294967295,w=b+(v<<15&4294967295|v>>>17),v=y+(b^(w|~g))+E[1]+2240044497&4294967295,y=w+(v<<21&4294967295|v>>>11),v=g+(w^(y|~b))+E[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~w))+E[15]+4264355552&4294967295,b=g+(v<<10&4294967295|v>>>22),v=w+(g^(b|~y))+E[6]+2734768916&4294967295,w=b+(v<<15&4294967295|v>>>17),v=y+(b^(w|~g))+E[13]+1309151649&4294967295,y=w+(v<<21&4294967295|v>>>11),v=g+(w^(y|~b))+E[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~w))+E[11]+3174756917&4294967295,b=g+(v<<10&4294967295|v>>>22),v=w+(g^(b|~y))+E[2]+718787259&4294967295,w=b+(v<<15&4294967295|v>>>17),v=y+(b^(w|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+b&4294967295}n.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var y=g-this.blockSize,E=this.B,w=this.h,b=0;b<g;){if(w==0)for(;b<=y;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<g;)if(E[w++]=T.charCodeAt(b++),w==this.blockSize){s(this,E),w=0;break}}else for(;b<g;)if(E[w++]=T[b++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var y=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=y&255,y/=256;for(this.u(T),T=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)T[y++]=this.g[g]>>>E&255;return T};function i(T,g){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=g(T)}function a(T,g){this.h=g;for(var y=[],E=!0,w=T.length-1;0<=w;w--){var b=T[w]|0;E&&b==g||(y[w]=b,E=!1)}this.g=y}var l={};function u(T){return-128<=T&&128>T?i(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return D(d(-T));for(var g=[],y=1,E=0;T>=y;E++)g[E]=T/y|0,y*=4294967296;return new a(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return D(f(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),E=m,w=0;w<T.length;w+=8){var b=Math.min(8,T.length-w),v=parseInt(T.substring(w,w+b),g);8>b?(b=d(Math.pow(g,b)),E=E.j(b).add(d(v))):(E=E.j(y),E=E.add(d(v)))}return E}var m=u(0),_=u(1),I=u(16777216);r=a.prototype,r.m=function(){if(S(this))return-D(this).m();for(var T=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(S(this))return"-"+D(this).toString(T);for(var g=d(Math.pow(T,6)),y=this,E="";;){var w=K(y,g).g;y=U(y,w.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=w,A(y))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function S(T){return T.h==-1}r.l=function(T){return T=U(this,T),S(T)?-1:A(T)?0:1};function D(T){for(var g=T.g.length,y=[],E=0;E<g;E++)y[E]=~T.g[E];return new a(y,~T.h).add(_)}r.abs=function(){return S(this)?D(this):this},r.add=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0,w=0;w<=g;w++){var b=E+(this.i(w)&65535)+(T.i(w)&65535),v=(b>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=v>>>16,b&=65535,v&=65535,y[w]=v<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function U(T,g){return T.add(D(g))}r.j=function(T){if(A(this)||A(T))return m;if(S(this))return S(T)?D(this).j(D(T)):D(D(this).j(T));if(S(T))return D(this.j(D(T)));if(0>this.l(I)&&0>T.l(I))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var b=this.i(E)>>>16,v=this.i(E)&65535,H=T.i(w)>>>16,$=T.i(w)&65535;y[2*E+2*w]+=v*$,G(y,2*E+2*w),y[2*E+2*w+1]+=b*$,G(y,2*E+2*w+1),y[2*E+2*w+1]+=v*H,G(y,2*E+2*w+1),y[2*E+2*w+2]+=b*H,G(y,2*E+2*w+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function G(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function B(T,g){this.g=T,this.h=g}function K(T,g){if(A(g))throw Error("division by zero");if(A(T))return new B(m,m);if(S(T))return g=K(D(T),g),new B(D(g.g),D(g.h));if(S(g))return g=K(T,D(g)),new B(D(g.g),g.h);if(30<T.g.length){if(S(T)||S(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,E=g;0>=E.l(T);)y=j(y),E=j(E);var w=z(y,1),b=z(E,1);for(E=z(E,2),y=z(y,2);!A(E);){var v=b.add(E);0>=v.l(T)&&(w=w.add(y),b=v),E=z(E,1),y=z(y,1)}return g=U(T,w.j(g)),new B(w,g)}for(w=m;0<=T.l(g);){for(y=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(y),v=b.j(g);S(v)||0<v.l(T);)y-=E,b=d(y),v=b.j(g);A(b)&&(b=_),w=w.add(b),T=U(T,v)}return new B(w,T)}r.A=function(T){return K(this,T).h},r.and=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},r.or=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},r.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function j(T){for(var g=T.g.length+1,y=[],E=0;E<g;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function z(T,g){var y=g>>5;g%=32;for(var E=T.g.length-y,w=[],b=0;b<E;b++)w[b]=0<g?T.i(b+y)>>>g|T.i(b+y+1)<<32-g:T.i(b+y);return new a(w,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Nu=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,_n=a}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ou,Mu,vr,Lu,ws,eo,xu,Uu,Fu;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break t;h=h[R]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,R={next:function(){if(!p&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function _(o,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function I(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,R,P){for(var x=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)x[yt-2]=arguments[yt];return c.prototype[R].apply(p,x)}}function S(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=o.length||0,P=p.length||0;o.length=R+P;for(let x=0;x<P;x++)o[R+x]=p[x]}else o.push(p)}}class U{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function G(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var j=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function z(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function v(){var o=J;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,h){const p=$.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $=new U(()=>new ft,o=>o.reset());class ft{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,ut=!1,J=new H,st=()=>{const o=l.Promise.resolve(void 0);Y=()=>{o.then(at)}};var at=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){b(h)}var c=$;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ut=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ct(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var fa=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Cn(o,c){if(Ct.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(j){t:{try{K(c.nodeName);var R=!0;break t}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:et[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Cn.aa.h.call(this)}}A(Cn,Ct);var et={2:"touch",3:"pen",4:"mouse"};Cn.prototype.h=function(){Cn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),jt=0;function ve(o,c,h,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++jt,this.da=this.fa=!1}function de(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ee(o){this.src=o,this.g={},this.h=0}Ee.prototype.add=function(o,c,h,p,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var x=ln(o,c,p,R);return-1<x?(c=o[x],h||(c.fa=!1)):(c=new ve(c,this.src,P,!!p,R),c.fa=h,o.push(c)),c};function nr(o,c){var h=c.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(de(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ln(o,c,h,p){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return R}return-1}var fi="closure_lm_"+(1e6*Math.random()|0),pi={};function pa(o,c,h,p,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)pa(o,c[P],h,p,R);return null}return h=_a(h),o&&o[St]?o.K(c,h,d(p)?!!p.capture:!!p,R):Zh(o,c,h,!1,p,R)}function Zh(o,c,h,p,R,P){if(!c)throw Error("Invalid event type");var x=d(R)?!!R.capture:!!R,yt=gi(o);if(yt||(o[fi]=yt=new Ee(o)),h=yt.add(c,h,p,x,P),h.proxy)return h;if(p=td(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)fa||(R=x),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(ga(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function td(){function o(h){return c.call(o.src,o.listener,h)}const c=ed;return o}function ma(o,c,h,p,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)ma(o,c[P],h,p,R);else p=d(p)?!!p.capture:!!p,h=_a(h),o&&o[St]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=ln(P,h,p,R),-1<h&&(de(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=gi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ln(c,h,p,R)),(h=-1<o?c[o]:null)&&mi(h))}function mi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[St])nr(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(ga(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=gi(c))?(nr(h,o),h.h==0&&(h.src=null,c[fi]=null)):de(o)}}}function ga(o){return o in pi?pi[o]:pi[o]="on"+o}function ed(o,c){if(o.da)o=!0;else{c=new Cn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&mi(o),o=h.call(p,c)}return o}function gi(o){return o=o[fi],o instanceof Ee?o:null}var _i="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(o){return typeof o=="function"?o:(o[_i]||(o[_i]=function(c){return o.handleEvent(c)}),o[_i])}function zt(){At.call(this),this.i=new Ee(this),this.M=this,this.F=null}A(zt,At),zt.prototype[St]=!0,zt.prototype.removeEventListener=function(o,c,h,p){ma(this,o,c,h,p)};function Xt(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Ct(c,o);else if(c instanceof Ct)c.target=c.target||o;else{var R=c;c=new Ct(p,o),E(c,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var x=c.g=h[P];R=Yr(x,p,!0,c)&&R}if(x=c.g=o,R=Yr(x,p,!0,c)&&R,R=Yr(x,p,!1,c)&&R,h)for(P=0;P<h.length;P++)x=c.g=h[P],R=Yr(x,p,!1,c)&&R}zt.prototype.N=function(){if(zt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)de(h[p]);delete o.g[c],o.h--}}this.F=null},zt.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},zt.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Yr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var x=c[P];if(x&&!x.da&&x.capture==h){var yt=x.listener,Mt=x.ha||x.src;x.fa&&nr(o.i,x),R=yt.call(Mt,p)!==!1&&R}}return R&&!p.defaultPrevented}function ya(o,c,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function va(o){o.g=ya(()=>{o.g=null,o.i&&(o.i=!1,va(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class nd extends At{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:va(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rr(o){At.call(this),this.h=o,this.g={}}A(rr,At);var Ea=[];function Ia(o){z(o.g,function(c,h){this.g.hasOwnProperty(h)&&mi(c)},o),o.g={}}rr.prototype.N=function(){rr.aa.N.call(this),Ia(this)},rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yi=l.JSON.stringify,rd=l.JSON.parse,sd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function vi(){}vi.prototype.h=null;function Ta(o){return o.h||(o.h=o.i())}function wa(){}var sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){Ct.call(this,"d")}A(Ei,Ct);function Ii(){Ct.call(this,"c")}A(Ii,Ct);var cn={},Aa=null;function Zr(){return Aa=Aa||new zt}cn.La="serverreachability";function ba(o){Ct.call(this,cn.La,o)}A(ba,Ct);function ir(o){const c=Zr();Xt(c,new ba(c))}cn.STAT_EVENT="statevent";function Ra(o,c){Ct.call(this,cn.STAT_EVENT,o),this.stat=c}A(Ra,Ct);function Jt(o){const c=Zr();Xt(c,new Ra(c,o))}cn.Ma="timingevent";function Sa(o,c){Ct.call(this,cn.Ma,o),this.size=c}A(Sa,Ct);function or(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ar(){this.g=!0}ar.prototype.xa=function(){this.g=!1};function id(o,c,h,p,R,P){o.info(function(){if(o.g)if(P)for(var x="",yt=P.split("&"),Mt=0;Mt<yt.length;Mt++){var pt=yt[Mt].split("=");if(1<pt.length){var $t=pt[0];pt=pt[1];var Ht=$t.split("_");x=2<=Ht.length&&Ht[1]=="type"?x+($t+"="+pt+"&"):x+($t+"=redacted&")}}else x=null;else x=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+x})}function od(o,c,h,p,R,P,x){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+P+" "+x})}function kn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+ld(o,h)+(p?" "+p:"")})}function ad(o,c){o.info(function(){return"TIMEOUT: "+c})}ar.prototype.info=function(){};function ld(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var x=1;x<R.length;x++)R[x]=""}}}}return yi(h)}catch{return c}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ti;function es(){}A(es,vi),es.prototype.g=function(){return new XMLHttpRequest},es.prototype.i=function(){return{}},Ti=new es;function Ue(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new rr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ca}function Ca(){this.i=null,this.g="",this.h=!1}var ka={},wi={};function Ai(o,c,h){o.L=1,o.v=is(Ie(c)),o.m=h,o.P=!0,Da(o,null)}function Da(o,c){o.F=Date.now(),ns(o),o.A=Ie(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ha(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Ca,o.g=cl(o.j,h?c:null,!o.m),0<o.O&&(o.M=new nd(_(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ea[0]=R.toString()),R=Ea);for(var P=0;P<R.length;P++){var x=pa(h,R[P],p||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),ir(),id(o.i,o.u,o.A,o.l,o.R,o.m)}Ue.prototype.ca=function(o){o=o.target;const c=this.M;c&&Te(o)==3?c.j():this.Y(o)},Ue.prototype.Y=function(o){try{if(o==this.g)t:{const Ht=Te(this.g);var c=this.g.Ba();const Nn=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||Ya(this.g)))){this.J||Ht!=4||c==7||(c==8||0>=Nn?ir(3):ir(2)),bi(this);var h=this.g.Z();this.X=h;e:if(Va(this)){var p=Ya(this.g);o="";var R=p.length,P=Te(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),lr(this);var x="";break e}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=h==200,od(this.i,this.u,this.A,this.l,this.R,Ht,h),this.o){if(this.T&&!this.K){e:{if(this.g){var yt,Mt=this.g;if((yt=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(yt)){var pt=yt;break e}}pt=null}if(h=pt)kn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ri(this,h);else{this.o=!1,this.s=3,Jt(12),un(this),lr(this);break t}}if(this.P){h=!0;let oe;for(;!this.J&&this.C<x.length;)if(oe=cd(this,x),oe==wi){Ht==4&&(this.s=4,Jt(14),h=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==ka){this.s=4,Jt(15),kn(this.i,this.l,x,"[Invalid Chunk]"),h=!1;break}else kn(this.i,this.l,oe,null),Ri(this,oe);if(Va(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||x.length!=0||this.h.h||(this.s=1,Jt(16),h=!1),this.o=this.o&&h,!h)kn(this.i,this.l,x,"[Invalid Chunked Response]"),un(this),lr(this);else if(0<x.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Vi($t),$t.M=!0,Jt(11))}}else kn(this.i,this.l,x,null),Ri(this,x);Ht==4&&un(this),this.o&&!this.J&&(Ht==4?il(this.j,this):(this.o=!1,ns(this)))}else Rd(this.g),h==400&&0<x.indexOf("Unknown SID")?(this.s=3,Jt(12)):(this.s=0,Jt(13)),un(this),lr(this)}}}catch{}finally{}};function Va(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function cd(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?wi:(h=Number(c.substring(h,p)),isNaN(h)?ka:(p+=1,p+h>c.length?wi:(c=c.slice(p,p+h),o.C=p+h,c)))}Ue.prototype.cancel=function(){this.J=!0,un(this)};function ns(o){o.S=Date.now()+o.I,Na(o,o.I)}function Na(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=or(_(o.ba,o),c)}function bi(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ue.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ad(this.i,this.A),this.L!=2&&(ir(),Jt(17)),un(this),this.s=2,lr(this)):Na(this,this.S-o)};function lr(o){o.j.G==0||o.J||il(o.j,o)}function un(o){bi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ia(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ri(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Si(h.h,o))){if(!o.K&&Si(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)us(h),ls(h);else break t;Di(h),Jt(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=or(_(h.Za,h),6e3));if(1>=La(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else dn(h,11)}else if((o.K||h.g==o)&&us(h),!G(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let pt=R[c];if(h.T=pt[0],pt=pt[1],h.G==2)if(pt[0]=="c"){h.K=pt[1],h.ia=pt[2];const $t=pt[3];$t!=null&&(h.la=$t,h.j.info("VER="+h.la));const Ht=pt[4];Ht!=null&&(h.Aa=Ht,h.j.info("SVER="+h.Aa));const Nn=pt[5];Nn!=null&&typeof Nn=="number"&&0<Nn&&(p=1.5*Nn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const oe=o.g;if(oe){const ds=oe.g?oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var P=p.h;P.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Pi(P,P.h),P.h=null))}if(p.D){const Ni=oe.g?oe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ni&&(p.ya=Ni,Et(p.I,p.D,Ni))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var x=o;if(p.qa=ll(p,p.J?p.ia:null,p.W),x.K){xa(p.h,x);var yt=x,Mt=p.L;Mt&&(yt.I=Mt),yt.B&&(bi(yt),ns(yt)),p.g=x}else rl(p);0<h.i.length&&cs(h)}else pt[0]!="stop"&&pt[0]!="close"||dn(h,7);else h.G==3&&(pt[0]=="stop"||pt[0]=="close"?pt[0]=="stop"?dn(h,7):ki(h):pt[0]!="noop"&&h.l&&h.l.ta(pt),h.v=0)}}ir(4)}catch{}}var ud=class{constructor(o,c){this.g=o,this.map=c}};function Oa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ma(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function La(o){return o.h?1:o.g?o.g.size:0}function Si(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Pi(o,c){o.g?o.g.add(c):o.h=c}function xa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Oa.prototype.cancel=function(){if(this.i=Ua(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ua(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return S(o.i)}function hd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function dd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Fa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=dd(o),p=hd(o),R=p.length,P=0;P<R;P++)c.call(void 0,p[P],h&&h[P],o)}var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),R=null;if(0<=p){var P=o[h].substring(0,p);R=o[h].substring(p+1)}else P=o[h];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hn){this.h=o.h,rs(this,o.j),this.o=o.o,this.g=o.g,ss(this,o.s),this.l=o.l;var c=o.i,h=new hr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),qa(this,h),this.m=o.m}else o&&(c=String(o).match(Ba))?(this.h=!1,rs(this,c[1]||"",!0),this.o=cr(c[2]||""),this.g=cr(c[3]||"",!0),ss(this,c[4]),this.l=cr(c[5]||"",!0),qa(this,c[6]||"",!0),this.m=cr(c[7]||"")):(this.h=!1,this.i=new hr(null,this.h))}hn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ur(c,ja,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ur(c,ja,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ur(h,h.charAt(0)=="/"?gd:md,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ur(h,yd)),o.join("")};function Ie(o){return new hn(o)}function rs(o,c,h){o.j=h?cr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ss(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function qa(o,c,h){c instanceof hr?(o.i=c,vd(o.i,o.h)):(h||(c=ur(c,_d)),o.i=new hr(c,o.h))}function Et(o,c,h){o.i.set(c,h)}function is(o){return Et(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function cr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ur(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,pd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function pd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ja=/[#\/\?@]/g,md=/[#\?:]/g,gd=/[#\?]/g,_d=/[#\?@]/g,yd=/#/g;function hr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Fe(o){o.g||(o.g=new Map,o.h=0,o.i&&fd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=hr.prototype,r.add=function(o,c){Fe(this),this.i=null,o=Dn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function za(o,c){Fe(o),c=Dn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function $a(o,c){return Fe(o),c=Dn(o,c),o.g.has(c)}r.forEach=function(o,c){Fe(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(c,R,p,this)},this)},this)},r.na=function(){Fe(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const R=o[p];for(let P=0;P<R.length;P++)h.push(c[p])}return h},r.V=function(o){Fe(this);let c=[];if(typeof o=="string")$a(this,o)&&(c=c.concat(this.g.get(Dn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return Fe(this),this.i=null,o=Dn(this,o),$a(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ha(o,c,h){za(o,c),0<h.length&&(o.i=null,o.g.set(Dn(o,c),S(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const P=encodeURIComponent(String(p)),x=this.V(p);for(p=0;p<x.length;p++){var R=P;x[p]!==""&&(R+="="+encodeURIComponent(String(x[p]))),o.push(R)}}return this.i=o.join("&")};function Dn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function vd(o,c){c&&!o.j&&(Fe(o),o.i=null,o.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(za(this,p),Ha(this,R,h))},o)),o.j=c}function Ed(o,c){const h=new ar;if(l.Image){const p=new Image;p.onload=I(Be,h,"TestLoadImage: loaded",!0,c,p),p.onerror=I(Be,h,"TestLoadImage: error",!1,c,p),p.onabort=I(Be,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(Be,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Id(o,c){const h=new ar,p=new AbortController,R=setTimeout(()=>{p.abort(),Be(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?Be(h,"TestPingServer: ok",!0,c):Be(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Be(h,"TestPingServer: error",!1,c)})}function Be(o,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function Td(){this.g=new sd}function wd(o,c,h){const p=h||"";try{Fa(o,function(R,P){let x=R;d(R)&&(x=yi(R)),c.push(p+P+"="+encodeURIComponent(x))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function dr(o){this.l=o.Ub||null,this.j=o.eb||!1}A(dr,vi),dr.prototype.g=function(){return new os(this.l,this.j)},dr.prototype.i=function(o){return function(){return o}}({});function os(o,c){zt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(os,zt),r=os.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,pr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ga(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ga(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?fr(this):pr(this),this.readyState==3&&Ga(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,fr(this))},r.Qa=function(o){this.g&&(this.response=o,fr(this))},r.ga=function(){this.g&&fr(this)};function fr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,pr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wa(o){let c="";return z(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Ci(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Wa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Et(o,c,h))}function Pt(o){zt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Pt,zt);var Ad=/^https?$/i,bd=["POST","PUT"];r=Pt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ti.g(),this.v=this.o?Ta(this.o):Ta(Ti),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Ka(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(bd,c,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of h)this.g.setRequestHeader(P,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ja(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ka(this,P)}};function Ka(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Qa(o),as(o)}function Qa(o){o.A||(o.A=!0,Xt(o,"complete"),Xt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xt(this,"complete"),Xt(this,"abort"),as(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),as(this,!0)),Pt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Xa(this):this.bb())},r.bb=function(){Xa(this)};function Xa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Te(o)!=4||o.Z()!=2)){if(o.u&&Te(o)==4)ya(o.Ea,0,o);else if(Xt(o,"readystatechange"),Te(o)==4){o.h=!1;try{const x=o.Z();t:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=x===0){var R=String(o.D).match(Ba)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Ad.test(R?R.toLowerCase():"")}h=p}if(h)Xt(o,"complete"),Xt(o,"success");else{o.m=6;try{var P=2<Te(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Qa(o)}}finally{as(o)}}}}function as(o,c){if(o.g){Ja(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Xt(o,"ready");try{h.onreadystatechange=p}catch{}}}function Ja(o){o.I&&(l.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Te(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Te(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),rd(c)}};function Ya(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Rd(o){const c={};o=(o.g&&2<=Te(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(G(o[p]))continue;var h=w(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[R]||[];c[R]=P,P.push(h)}T(c,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Za(o){this.Aa=0,this.i=[],this.j=new ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mr("baseRetryDelayMs",5e3,o),this.cb=mr("retryDelaySeedMs",1e4,o),this.Wa=mr("forwardChannelMaxRetries",2,o),this.wa=mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Oa(o&&o.concurrentRequestLimit),this.Da=new Td,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Za.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,p){Jt(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ll(this,null,this.W),cs(this)};function ki(o){if(tl(o),o.G==3){var c=o.U++,h=Ie(o.I);if(Et(h,"SID",o.K),Et(h,"RID",c),Et(h,"TYPE","terminate"),gr(o,h),c=new Ue(o,o.j,c),c.L=2,c.v=is(Ie(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=cl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ns(c)}al(o)}function ls(o){o.g&&(Vi(o),o.g.cancel(),o.g=null)}function tl(o){ls(o),o.u&&(l.clearTimeout(o.u),o.u=null),us(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function cs(o){if(!Ma(o.h)&&!o.s){o.s=!0;var c=o.Ga;Y||st(),ut||(Y(),ut=!0),J.add(c,o),o.B=0}}function Sd(o,c){return La(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=or(_(o.Ga,o,c),ol(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Ue(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=nl(this,R,c),h=Ie(this.I),Et(h,"RID",o),Et(h,"CVER",22),this.D&&Et(h,"X-HTTP-Session-Id",this.D),gr(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(Wa(P)))+"&"+c:this.m&&Ci(h,this.m,P)),Pi(this.h,R),this.Ua&&Et(h,"TYPE","init"),this.P?(Et(h,"$req",c),Et(h,"SID","null"),R.T=!0,Ai(R,h,null)):Ai(R,h,c),this.G=2}}else this.G==3&&(o?el(this,o):this.i.length==0||Ma(this.h)||el(this))};function el(o,c){var h;c?h=c.l:h=o.U++;const p=Ie(o.I);Et(p,"SID",o.K),Et(p,"RID",h),Et(p,"AID",o.T),gr(o,p),o.m&&o.o&&Ci(p,o.m,o.o),h=new Ue(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=nl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Pi(o.h,h),Ai(h,p,c)}function gr(o,c){o.H&&z(o.H,function(h,p){Et(c,p,h)}),o.l&&Fa({},function(h,p){Et(c,p,h)})}function nl(o,c,h){h=Math.min(o.i.length,h);var p=o.l?_(o.l.Na,o.l,o):null;t:{var R=o.i;let P=-1;for(;;){const x=["count="+h];P==-1?0<h?(P=R[0].g,x.push("ofs="+P)):P=0:x.push("ofs="+P);let yt=!0;for(let Mt=0;Mt<h;Mt++){let pt=R[Mt].g;const $t=R[Mt].map;if(pt-=P,0>pt)P=Math.max(0,R[Mt].g-100),yt=!1;else try{wd($t,x,"req"+pt+"_")}catch{p&&p($t)}}if(yt){p=x.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,p}function rl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Y||st(),ut||(Y(),ut=!0),J.add(c,o),o.v=0}}function Di(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=or(_(o.Fa,o),ol(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=or(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Jt(10),ls(this),sl(this))};function Vi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function sl(o){o.g=new Ue(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ie(o.qa);Et(c,"RID","rpc"),Et(c,"SID",o.K),Et(c,"AID",o.T),Et(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Et(c,"TO",o.ja),Et(c,"TYPE","xmlhttp"),gr(o,c),o.m&&o.o&&Ci(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=is(Ie(c)),h.m=null,h.P=!0,Da(h,o)}r.Za=function(){this.C!=null&&(this.C=null,ls(this),Di(this),Jt(19))};function us(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function il(o,c){var h=null;if(o.g==c){us(o),Vi(o),o.g=null;var p=2}else if(Si(o.h,c))h=c.D,xa(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=Zr(),Xt(p,new Sa(p,h)),cs(o)}else rl(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&Sd(o,c)||p==2&&Di(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),R){case 1:dn(o,5);break;case 4:dn(o,10);break;case 3:dn(o,6);break;default:dn(o,2)}}}function ol(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function dn(o,c){if(o.j.info("Error code "+c),c==2){var h=_(o.fb,o),p=o.Xa;const R=!p;p=new hn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||rs(p,"https"),is(p),R?Ed(p.toString(),h):Id(p.toString(),h)}else Jt(2);o.G=0,o.l&&o.l.sa(c),al(o),tl(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function al(o){if(o.G=0,o.ka=[],o.l){const c=Ua(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.ra()}}function ll(o,c,h){var p=h instanceof hn?Ie(h):new hn(h);if(p.g!="")c&&(p.g=c+"."+p.g),ss(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new hn(null);p&&rs(P,p),c&&(P.g=c),R&&ss(P,R),h&&(P.l=h),p=P}return h=o.D,c=o.ya,h&&c&&Et(p,h,c),Et(p,"VER",o.la),gr(o,p),p}function cl(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Pt(new dr({eb:h})):new Pt(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ul(){}r=ul.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function hs(){}hs.prototype.g=function(o,c){return new Zt(o,c)};function Zt(o,c){zt.call(this),this.g=new Za(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!G(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Vn(this)}A(Zt,zt),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){ki(this.g)},Zt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=yi(o),o=h);c.i.push(new ud(c.Ya++,o)),c.G==3&&cs(c)},Zt.prototype.N=function(){this.g.l=null,delete this.j,ki(this.g),delete this.g,Zt.aa.N.call(this)};function hl(o){Ei.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}A(hl,Ei);function dl(){Ii.call(this),this.status=1}A(dl,Ii);function Vn(o){this.g=o}A(Vn,ul),Vn.prototype.ua=function(){Xt(this.g,"a")},Vn.prototype.ta=function(o){Xt(this.g,new hl(o))},Vn.prototype.sa=function(o){Xt(this.g,new dl)},Vn.prototype.ra=function(){Xt(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,Fu=function(){return new hs},Uu=function(){return Zr()},xu=cn,eo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,ws=ts,Pa.COMPLETE="complete",Lu=Pa,wa.EventType=sr,sr.OPEN="a",sr.CLOSE="b",sr.ERROR="c",sr.MESSAGE="d",zt.prototype.listen=zt.prototype.K,vr=wa,Mu=dr,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,Ou=Pt}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});const jl="@firebase/firestore";/**
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
 */let Yn="10.12.1";/**
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
 */const wn=new _o("@firebase/firestore");function _r(){return wn.logLevel}function q(r,...t){if(wn.logLevel<=ct.DEBUG){const e=t.map(Vo);wn.debug(`Firestore (${Yn}): ${r}`,...e)}}function De(r,...t){if(wn.logLevel<=ct.ERROR){const e=t.map(Vo);wn.error(`Firestore (${Yn}): ${r}`,...e)}}function zn(r,...t){if(wn.logLevel<=ct.WARN){const e=t.map(Vo);wn.warn(`Firestore (${Yn}): ${r}`,...e)}}function Vo(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function rt(r="Unexpected state"){const t=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+r;throw De(t),new Error(t)}function vt(r,t){r||rt()}function ot(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends xe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Bu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Wt.UNAUTHENTICATED))}shutdown(){}}class fg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class pg{constructor(t){this.t=t,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=u=>this.i!==n?(n=this.i,e(u)):Promise.resolve();let i=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(vt(typeof n.accessToken=="string"),new Bu(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string"),new Wt(t)}}class mg{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gg{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new mg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _g{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(vt(typeof e.token=="string"),this.R=e.token,new _g(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vg(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class qu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=vg(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function gt(r,t){return r<t?-1:r>t?1:0}function $n(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
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
 */class Nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Nt.fromMillis(Date.now())}static fromDate(t){return Nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Nt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gt(this.nanoseconds,t.nanoseconds):gt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class it{constructor(t){this.timestamp=t}static fromTimestamp(t){return new it(t)}static min(){return new it(new Nt(0,0))}static max(){return new it(new Nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Cr{constructor(t,e,n){e===void 0?e=0:e>t.length&&rt(),n===void 0?n=t.length-e:n>t.length-e&&rt(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Cr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Cr?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class It extends Cr{construct(t,e,n){return new It(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new F(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new It(e)}static emptyPath(){return new It([])}}const Eg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Cr{construct(t,e,n){return new xt(t,e,n)}static isValidIdentifier(t){return Eg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new F(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new F(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(n+=l,s++):(i(),s++)}if(i(),a)throw new F(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new xt(e)}static emptyPath(){return new xt([])}}/**
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
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(It.fromString(t))}static fromName(t){return new W(It.fromString(t).popFirst(5))}static empty(){return new W(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&It.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return It.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new It(t.slice()))}}function Ig(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=it.fromTimestamp(n===1e9?new Nt(e+1,0):new Nt(e,n));return new Ye(s,W.empty(),t)}function Tg(r){return new Ye(r.readTime,r.key,-1)}class Ye{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ye(it.min(),W.empty(),-1)}static max(){return new Ye(it.max(),W.empty(),-1)}}function wg(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(r.documentKey,t.documentKey),e!==0?e:gt(r.largestBatchId,t.largestBatchId))}/**
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
 */const Ag="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function zr(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Ag)throw r;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):N.reject(e)}static resolve(t){return new N((e,n)=>{e(t)})}static reject(t){return new N((e,n)=>{n(t)})}static waitFor(t){return new N((e,n)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&e()},u=>n(u))}),a=!0,i===s&&e()})}static or(t){let e=N.resolve(!1);for(const n of t)e=e.next(s=>s?N.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new N((n,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;e(t[d]).next(f=>{a[d]=f,++l,l===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new N((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}function Rg(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $r(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class No{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}No.oe=-1;function Js(r){return r==null}function Ls(r){return r===0&&1/r==-1/0}function Sg(r){return typeof r=="number"&&Number.isInteger(r)&&!Ls(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function zl(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Sn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function ju(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Rt{constructor(t,e){this.comparator=t,this.root=e||Lt.EMPTY}insert(t,e){return new Rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ms(this.root,t,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ms(this.root,t,this.comparator,!0)}}class ms{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Lt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw rt();const t=this.left.check();if(t!==this.right.check())throw rt();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw rt()}get value(){throw rt()}get color(){throw rt()}get left(){throw rt()}get right(){throw rt()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $l(this.data.getIterator())}getIteratorFrom(t){return new $l(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ft(this.comparator);return e.data=t,e}}class $l{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class te{constructor(t){this.fields=t,t.sort(xt.comparator)}static empty(){return new te([])}unionWith(t){let e=new Ft(xt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return $n(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class zu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zu("Invalid base64 string: "+i):i}}(t);return new Qt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const Pg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(r){if(vt(!!r),typeof r=="string"){let t=0;const e=Pg.exec(r);if(vt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Dt(r.seconds),nanos:Dt(r.nanos)}}function Dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function An(r){return typeof r=="string"?Qt.fromBase64String(r):Qt.fromUint8Array(r)}/**
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
 */function Oo(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Mo(r){const t=r.mapValue.fields.__previous_value__;return Oo(t)?Mo(t):t}function kr(r){const t=Ze(r.mapValue.fields.__local_write_time__.timestampValue);return new Nt(t.seconds,t.nanos)}/**
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
 */class Cg{constructor(t,e,n,s,i,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Dr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Dr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const gs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Oo(r)?4:kg(r)?9007199254740991:10:rt()}function ye(r,t){if(r===t)return!0;const e=bn(r);if(e!==bn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return kr(r).isEqual(kr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ze(s.timestampValue),l=Ze(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return An(s.bytesValue).isEqual(An(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return Dt(s.geoPointValue.latitude)===Dt(i.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Dt(s.integerValue)===Dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Dt(s.doubleValue),l=Dt(i.doubleValue);return a===l?Ls(a)===Ls(l):isNaN(a)&&isNaN(l)}return!1}(r,t);case 9:return $n(r.arrayValue.values||[],t.arrayValue.values||[],ye);case 10:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zl(a)!==zl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ye(a[u],l[u])))return!1;return!0}(r,t);default:return rt()}}function Vr(r,t){return(r.values||[]).find(e=>ye(e,t))!==void 0}function Hn(r,t){if(r===t)return 0;const e=bn(r),n=bn(t);if(e!==n)return gt(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return gt(r.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Dt(i.integerValue||i.doubleValue),u=Dt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(r,t);case 3:return Hl(r.timestampValue,t.timestampValue);case 4:return Hl(kr(r),kr(t));case 5:return gt(r.stringValue,t.stringValue);case 6:return function(i,a){const l=An(i),u=An(a);return l.compareTo(u)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=gt(l[d],u[d]);if(f!==0)return f}return gt(l.length,u.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const l=gt(Dt(i.latitude),Dt(a.latitude));return l!==0?l:gt(Dt(i.longitude),Dt(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(i,a){const l=i.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const f=Hn(l[d],u[d]);if(f)return f}return gt(l.length,u.length)}(r.arrayValue,t.arrayValue);case 10:return function(i,a){if(i===gs.mapValue&&a===gs.mapValue)return 0;if(i===gs.mapValue)return 1;if(a===gs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=gt(u[m],f[m]);if(_!==0)return _;const I=Hn(l[u[m]],d[f[m]]);if(I!==0)return I}return gt(u.length,f.length)}(r.mapValue,t.mapValue);default:throw rt()}}function Hl(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return gt(r,t);const e=Ze(r),n=Ze(t),s=gt(e.seconds,n.seconds);return s!==0?s:gt(e.nanos,n.nanos)}function Gn(r){return no(r)}function no(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Ze(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return An(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return W.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=no(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${no(e.fields[a])}`;return s+"}"}(r.mapValue):rt()}function Gl(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ro(r){return!!r&&"integerValue"in r}function Lo(r){return!!r&&"arrayValue"in r}function Wl(r){return!!r&&"nullValue"in r}function Kl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function As(r){return!!r&&"mapValue"in r}function wr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Sn(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=wr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function kg(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(t){this.value=t}static empty(){return new Yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!As(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wr(e)}setAll(t){let e=xt.emptyPath(),n={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,n,s),n={},s=[],e=l.popLast()}a?n[l.lastSegment()]=wr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());As(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ye(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];As(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Sn(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new Yt(wr(this.value))}}function $u(r){const t=[];return Sn(r.fields,(e,n)=>{const s=new xt([e]);if(As(n)){const i=$u(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new te(t)}/**
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
 */class Kt{constructor(t,e,n,s,i,a,l){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Kt(t,0,it.min(),it.min(),it.min(),Yt.empty(),0)}static newFoundDocument(t,e,n,s){return new Kt(t,1,e,it.min(),n,s,0)}static newNoDocument(t,e){return new Kt(t,2,e,it.min(),it.min(),Yt.empty(),0)}static newUnknownDocument(t,e){return new Kt(t,3,e,it.min(),it.min(),Yt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(it.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=it.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xs{constructor(t,e){this.position=t,this.inclusive=e}}function Ql(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=W.comparator(W.fromName(a.referenceValue),e.key):n=Hn(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Xl(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!ye(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Dg(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Hu{}class Vt extends Hu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Ng(t,e,n):e==="array-contains"?new Lg(t,n):e==="in"?new xg(t,n):e==="not-in"?new Ug(t,n):e==="array-contains-any"?new Fg(t,n):new Vt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Og(t,n):new Mg(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Hn(e,this.value)):e!==null&&bn(this.value)===bn(e)&&this.matchesComparison(Hn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return rt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends Hu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new he(t,e)}matches(t){return Gu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gu(r){return r.op==="and"}function Wu(r){return Vg(r)&&Gu(r)}function Vg(r){for(const t of r.filters)if(t instanceof he)return!1;return!0}function so(r){if(r instanceof Vt)return r.field.canonicalString()+r.op.toString()+Gn(r.value);if(Wu(r))return r.filters.map(t=>so(t)).join(",");{const t=r.filters.map(e=>so(e)).join(",");return`${r.op}(${t})`}}function Ku(r,t){return r instanceof Vt?function(n,s){return s instanceof Vt&&n.op===s.op&&n.field.isEqual(s.field)&&ye(n.value,s.value)}(r,t):r instanceof he?function(n,s){return s instanceof he&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,l)=>i&&Ku(a,s.filters[l]),!0):!1}(r,t):void rt()}function Qu(r){return r instanceof Vt?function(e){return`${e.field.canonicalString()} ${e.op} ${Gn(e.value)}`}(r):r instanceof he?function(e){return e.op.toString()+" {"+e.getFilters().map(Qu).join(" ,")+"}"}(r):"Filter"}class Ng extends Vt{constructor(t,e,n){super(t,e,n),this.key=W.fromName(n.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class Og extends Vt{constructor(t,e){super(t,"in",e),this.keys=Xu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Mg extends Vt{constructor(t,e){super(t,"not-in",e),this.keys=Xu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xu(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>W.fromName(n.referenceValue))}class Lg extends Vt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lo(e)&&Vr(e.arrayValue,this.value)}}class xg extends Vt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Vr(this.value.arrayValue,e)}}class Ug extends Vt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Vr(this.value.arrayValue,e)}}class Fg extends Vt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Vr(this.value.arrayValue,n))}}/**
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
 */class Bg{constructor(t,e=null,n=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Jl(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Bg(r,t,e,n,s,i,a)}function xo(r){const t=ot(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>so(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Js(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Gn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Gn(n)).join(",")),t.ue=e}return t.ue}function Uo(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Dg(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ku(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Xl(r.startAt,t.startAt)&&Xl(r.endAt,t.endAt)}function io(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Zn{constructor(t,e=null,n=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qg(r,t,e,n,s,i,a,l){return new Zn(r,t,e,n,s,i,a,l)}function Ju(r){return new Zn(r)}function Yl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Yu(r){return r.collectionGroup!==null}function Ar(r){const t=ot(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ft(xt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new Nr(i,n))}),e.has(xt.keyField().canonicalString())||t.ce.push(new Nr(xt.keyField(),n))}return t.ce}function pe(r){const t=ot(r);return t.le||(t.le=jg(t,Ar(r))),t.le}function jg(r,t){if(r.limitType==="F")return Jl(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Nr(s.field,i)});const e=r.endAt?new xs(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new xs(r.startAt.position,r.startAt.inclusive):null;return Jl(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function oo(r,t){const e=r.filters.concat([t]);return new Zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Us(r,t,e){return new Zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ys(r,t){return Uo(pe(r),pe(t))&&r.limitType===t.limitType}function Zu(r){return`${xo(pe(r))}|lt:${r.limitType}`}function On(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Qu(s)).join(", ")}]`),Js(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Gn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Gn(s)).join(",")),`Target(${n})`}(pe(r))}; limitType=${r.limitType})`}function Zs(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of Ar(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,l,u){const d=Ql(a,l,u);return a.inclusive?d<=0:d<0}(n.startAt,Ar(n),s)||n.endAt&&!function(a,l,u){const d=Ql(a,l,u);return a.inclusive?d>=0:d>0}(n.endAt,Ar(n),s))}(r,t)}function zg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function th(r){return(t,e)=>{let n=!1;for(const s of Ar(r)){const i=$g(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function $g(r,t,e){const n=r.field.isKeyField()?W.comparator(t.key,e.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Hn(u,d):rt()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return rt()}}/**
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
 */class tr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Sn(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return ju(this.inner)}size(){return this.innerSize}}/**
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
 */const Hg=new Rt(W.comparator);function Ve(){return Hg}const eh=new Rt(W.comparator);function Er(...r){let t=eh;for(const e of r)t=t.insert(e.key,e);return t}function nh(r){let t=eh;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function mn(){return br()}function rh(){return br()}function br(){return new tr(r=>r.toString(),(r,t)=>r.isEqual(t))}const Gg=new Rt(W.comparator),Wg=new Ft(W.comparator);function lt(...r){let t=Wg;for(const e of r)t=t.add(e);return t}const Kg=new Ft(gt);function Qg(){return Kg}/**
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
 */function sh(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(t)?"-0":t}}function ih(r){return{integerValue:""+r}}function Xg(r,t){return Sg(t)?ih(t):sh(r,t)}/**
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
 */class ti{constructor(){this._=void 0}}function Jg(r,t,e){return r instanceof Fs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oo(i)&&(i=Mo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):r instanceof Or?ah(r,t):r instanceof Mr?lh(r,t):function(s,i){const a=oh(s,i),l=Zl(a)+Zl(s.Pe);return ro(a)&&ro(s.Pe)?ih(l):sh(s.serializer,l)}(r,t)}function Yg(r,t,e){return r instanceof Or?ah(r,t):r instanceof Mr?lh(r,t):e}function oh(r,t){return r instanceof Bs?function(n){return ro(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class Fs extends ti{}class Or extends ti{constructor(t){super(),this.elements=t}}function ah(r,t){const e=ch(t);for(const n of r.elements)e.some(s=>ye(s,n))||e.push(n);return{arrayValue:{values:e}}}class Mr extends ti{constructor(t){super(),this.elements=t}}function lh(r,t){let e=ch(t);for(const n of r.elements)e=e.filter(s=>!ye(s,n));return{arrayValue:{values:e}}}class Bs extends ti{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Zl(r){return Dt(r.integerValue||r.doubleValue)}function ch(r){return Lo(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Zg(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Or&&s instanceof Or||n instanceof Mr&&s instanceof Mr?$n(n.elements,s.elements,ye):n instanceof Bs&&s instanceof Bs?ye(n.Pe,s.Pe):n instanceof Fs&&s instanceof Fs}(r.transform,t.transform)}class t_{constructor(t,e){this.version=t,this.transformResults=e}}class ue{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ue}static exists(t){return new ue(void 0,t)}static updateTime(t){return new ue(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ei{}function uh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Fo(r.key,ue.none()):new Hr(r.key,r.data,ue.none());{const e=r.data,n=Yt.empty();let s=new Ft(xt.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new on(r.key,n,new te(s.toArray()),ue.none())}}function e_(r,t,e){r instanceof Hr?function(s,i,a){const l=s.value.clone(),u=ec(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):r instanceof on?function(s,i,a){if(!bs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ec(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(hh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Rr(r,t,e,n){return r instanceof Hr?function(i,a,l,u){if(!bs(i.precondition,a))return l;const d=i.value.clone(),f=nc(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof on?function(i,a,l,u){if(!bs(i.precondition,a))return l;const d=nc(i.fieldTransforms,u,a),f=a.data;return f.setAll(hh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(r,t,e,n):function(i,a,l){return bs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,t,e)}function n_(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=oh(n.transform,s||null);i!=null&&(e===null&&(e=Yt.empty()),e.set(n.field,i))}return e||null}function tc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$n(n,s,(i,a)=>Zg(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Hr extends ei{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class on extends ei{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function ec(r,t,e){const n=new Map;vt(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,l=t.data.field(i.field);n.set(i.field,Yg(a,l,e[s]))}return n}function nc(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Jg(i,a,t))}return n}class Fo extends ei{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r_ extends ei{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class s_{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&e_(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Rr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Rr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=e.has(s.key)?null:l;const u=uh(a,l);u!==null&&n.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(it.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),lt())}isEqual(t){return this.batchId===t.batchId&&$n(this.mutations,t.mutations,(e,n)=>tc(e,n))&&$n(this.baseMutations,t.baseMutations,(e,n)=>tc(e,n))}}class Bo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){vt(t.mutations.length===n.length);let s=function(){return Gg}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Bo(t,e,n,s)}}/**
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
 */class i_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class o_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var kt,ht;function a_(r){switch(r){default:return rt();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function dh(r){if(r===void 0)return De("GRPC error has no .code"),V.UNKNOWN;switch(r){case kt.OK:return V.OK;case kt.CANCELLED:return V.CANCELLED;case kt.UNKNOWN:return V.UNKNOWN;case kt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case kt.INTERNAL:return V.INTERNAL;case kt.UNAVAILABLE:return V.UNAVAILABLE;case kt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case kt.NOT_FOUND:return V.NOT_FOUND;case kt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case kt.ABORTED:return V.ABORTED;case kt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case kt.DATA_LOSS:return V.DATA_LOSS;default:return rt()}}(ht=kt||(kt={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function l_(){return new TextEncoder}/**
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
 */const c_=new _n([4294967295,4294967295],0);function rc(r){const t=l_().encode(r),e=new Nu;return e.update(t),new Uint8Array(e.digest())}function sc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new _n([e,n],0),new _n([s,i],0)]}class qo{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ir(`Invalid padding: ${e}`);if(n<0)throw new Ir(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=_n.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(_n.fromNumber(n)));return s.compare(c_)===1&&(s=new _n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=rc(t),[n,s]=sc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new qo(i,s,e);return n.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=rc(t),[n,s]=sc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ni{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Gr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ni(it.min(),s,new Rt(gt),Ve(),lt())}}class Gr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Gr(n,e,lt(),lt(),lt())}}/**
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
 */class Rs{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class fh{constructor(t,e){this.targetId=t,this.me=e}}class ph{constructor(t,e,n=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ic{constructor(){this.fe=0,this.ge=ac(),this.pe=Qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=lt(),e=lt(),n=lt();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:rt()}}),new Gr(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=ac()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,vt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class u_{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ve(),this.qe=oc(),this.Qe=new Rt(gt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:rt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(io(i))if(n===0){const a=new W(i.path);this.Ue(e,a,Kt.newNoDocument(a,it.min()))}else vt(n===1);else{const a=this.Ye(e);if(a!==n){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,l;try{a=An(n).toUint8Array()}catch(u){if(u instanceof zu)return zn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qo(a,s,i)}catch(u){return zn(u instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&io(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Kt.newNoDocument(u,t))}i.be&&(e.set(a,i.Ce()),i.ve())}});let n=lt();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new ni(t,e,this.Qe,this.ke,n);return this.ke=Ve(),this.qe=oc(),this.Qe=new Rt(gt),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ic,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ft(gt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||q("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ic),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function oc(){return new Rt(W.comparator)}function ac(){return new Rt(W.comparator)}const h_={asc:"ASCENDING",desc:"DESCENDING"},d_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f_={and:"AND",or:"OR"};class p_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ao(r,t){return r.useProto3Json||Js(t)?t:{value:t}}function qs(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function m_(r,t){return qs(r,t.toTimestamp())}function me(r){return vt(!!r),it.fromTimestamp(function(e){const n=Ze(e);return new Nt(n.seconds,n.nanos)}(r))}function jo(r,t){return lo(r,t).canonicalString()}function lo(r,t){const e=function(s){return new It(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function gh(r){const t=It.fromString(r);return vt(Ih(t)),t}function co(r,t){return jo(r.databaseId,t.path)}function qi(r,t){const e=gh(t);if(e.get(1)!==r.databaseId.projectId)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new W(yh(e))}function _h(r,t){return jo(r.databaseId,t)}function g_(r){const t=gh(r);return t.length===4?It.emptyPath():yh(t)}function uo(r){return new It(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function yh(r){return vt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function lc(r,t,e){return{name:co(r,t),fields:e.value.mapValue.fields}}function __(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:rt()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(vt(f===void 0||typeof f=="string"),Qt.fromBase64String(f||"")):(vt(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Qt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const f=d.code===void 0?V.UNKNOWN:dh(d.code);return new F(f,d.message||"")}(a);e=new ph(n,s,i,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=qi(r,n.document.name),i=me(n.document.updateTime),a=n.document.createTime?me(n.document.createTime):it.min(),l=new Yt({mapValue:{fields:n.document.fields}}),u=Kt.newFoundDocument(s,i,a,l),d=n.targetIds||[],f=n.removedTargetIds||[];e=new Rs(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=qi(r,n.document),i=n.readTime?me(n.readTime):it.min(),a=Kt.newNoDocument(s,i),l=n.removedTargetIds||[];e=new Rs([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=qi(r,n.document),i=n.removedTargetIds||[];e=new Rs([],i,s,null)}else{if(!("filter"in t))return rt();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new o_(s,i),l=n.targetId;e=new fh(l,a)}}return e}function y_(r,t){let e;if(t instanceof Hr)e={update:lc(r,t.key,t.value)};else if(t instanceof Fo)e={delete:co(r,t.key)};else if(t instanceof on)e={update:lc(r,t.key,t.data),updateMask:S_(t.fieldMask)};else{if(!(t instanceof r_))return rt();e={verify:co(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const l=a.transform;if(l instanceof Fs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Or)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bs)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw rt()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:m_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:rt()}(r,t.precondition)),e}function v_(r,t){return r&&r.length>0?(vt(t!==void 0),r.map(e=>function(s,i){let a=s.updateTime?me(s.updateTime):me(i);return a.isEqual(it.min())&&(a=me(i)),new t_(a,s.transformResults||[])}(e,t))):[]}function E_(r,t){return{documents:[_h(r,t.path)]}}function I_(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=_h(r,s);const i=function(d){if(d.length!==0)return Eh(he.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:Mn(_.field),direction:A_(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ao(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function T_(r){let t=g_(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){vt(n===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(m){const _=vh(m);return _ instanceof he&&Wu(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(_=>function(A){return new Nr(Ln(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(_))}(e.orderBy));let l=null;e.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,Js(_)?null:_}(e.limit));let u=null;e.startAt&&(u=function(m){const _=!!m.before,I=m.values||[];return new xs(I,_)}(e.startAt));let d=null;return e.endAt&&(d=function(m){const _=!m.before,I=m.values||[];return new xs(I,_)}(e.endAt)),qg(t,s,a,i,l,"F",u,d)}function w_(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return rt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function vh(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ln(e.unaryFilter.field);return Vt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ln(e.unaryFilter.field);return Vt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ln(e.unaryFilter.field);return Vt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ln(e.unaryFilter.field);return Vt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return rt()}}(r):r.fieldFilter!==void 0?function(e){return Vt.create(Ln(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rt()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return he.create(e.compositeFilter.filters.map(n=>vh(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return rt()}}(e.compositeFilter.op))}(r):rt()}function A_(r){return h_[r]}function b_(r){return d_[r]}function R_(r){return f_[r]}function Mn(r){return{fieldPath:r.canonicalString()}}function Ln(r){return xt.fromServerFormat(r.fieldPath)}function Eh(r){return r instanceof Vt?function(e){if(e.op==="=="){if(Kl(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NAN"}};if(Wl(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Kl(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NOT_NAN"}};if(Wl(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(e.field),op:b_(e.op),value:e.value}}}(r):r instanceof he?function(e){const n=e.getFilters().map(s=>Eh(s));return n.length===1?n[0]:{compositeFilter:{op:R_(e.op),filters:n}}}(r):rt()}function S_(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ih(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Ge{constructor(t,e,n,s,i=it.min(),a=it.min(),l=Qt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Ge(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class P_{constructor(t){this.ct=t}}function C_(r){const t=T_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Us(t,t.limit,"L"):t}/**
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
 */class k_{constructor(){this._n=new D_}addToCollectionParentIndex(t,e){return this._n.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(Ye.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(Ye.min())}updateCollectionGroup(t,e,n){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class D_{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ft(It.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ft(It.comparator)).toArray()}}/**
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
 */class Wn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Wn(0)}static Ln(){return new Wn(-1)}}/**
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
 */class V_{constructor(){this.changes=new tr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Kt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?N.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class N_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class O_{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Rr(n.mutation,s,te.empty(),Nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,lt()).next(()=>n))}getLocalViewOfDocuments(t,e,n=lt()){const s=mn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=Er();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=mn();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,lt()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,n,s){let i=Ve();const a=br(),l=function(){return br()}();return e.forEach((u,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof on)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Rr(f.mutation,d,f.mutation.getFieldMask(),Nt.now())):a.set(d.key,te.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var m;return l.set(d,new N_(f,(m=a.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,e){const n=br();let s=new Rt((a,l)=>a-l),i=lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=n.get(u)||te.empty();f=l.applyToLocalView(d,f),n.set(u,f);const m=(s.get(l.batchId)||lt()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=rh();f.forEach(_=>{if(!i.has(_)){const I=uh(e.get(_),n.get(_));I!==null&&m.set(_,I),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,m))}return N.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Yu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):N.resolve(mn());let l=-1,u=i;return a.next(d=>N.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,u,d,lt())).next(f=>({batchId:l,changes:nh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next(n=>{let s=Er();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=Er();return this.indexManager.getCollectionParents(t,i).next(l=>N.forEach(l,u=>{const d=function(m,_){return new Zn(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Kt.newInvalidDocument(f)))});let l=Er();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&Rr(f.mutation,d,te.empty(),Nt.now()),Zs(e,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class M_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return N.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:me(s.createTime)}}(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:C_(s.bundledQuery),readTime:me(s.readTime)}}(e)),N.resolve()}}/**
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
 */class L_{constructor(){this.overlays=new Rt(W.comparator),this.hr=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const n=mn();return N.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.ht(t,e,i)}),N.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(n)),N.resolve()}getOverlaysForCollection(t,e,n){const s=mn(),i=e.length+1,a=new W(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Rt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=mn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=mn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return N.resolve(l)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new i_(e,n));let i=this.hr.get(e);i===void 0&&(i=lt(),this.hr.set(e,i)),this.hr.set(e,i.add(n.key))}}/**
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
 */class zo{constructor(){this.Pr=new Ft(Ot.Ir),this.Tr=new Ft(Ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new Ot(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Ar(new Ot(t,e))}Rr(t,e){t.forEach(n=>this.removeReference(n,e))}Vr(t){const e=new W(new It([])),n=new Ot(e,t),s=new Ot(e,t+1),i=[];return this.Tr.forEachInRange([n,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new W(new It([])),n=new Ot(e,t),s=new Ot(e,t+1);let i=lt();return this.Tr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new Ot(t,0),n=this.Pr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Ot{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return W.comparator(t.key,e.key)||gt(t.pr,e.pr)}static Er(t,e){return gt(t.pr,e.pr)||W.comparator(t.key,e.key)}}/**
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
 */class x_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Ft(Ot.Ir)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new s_(i,e,n,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new Ot(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,e){return N.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ot(e,0),s=new Ot(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,s],a=>{const l=this.Sr(a.pr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ft(gt);return e.forEach(s=>{const i=new Ot(s,0),a=new Ot(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],l=>{n=n.add(l.pr)})}),N.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;W.isDocumentKey(i)||(i=i.child(""));const a=new Ot(new W(i),0);let l=new Ft(gt);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.pr)),!0)},a),N.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(n=>{const s=this.Sr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){vt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return N.forEach(e.mutations,s=>{const i=new Ot(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=n})}Mn(t){}containsKey(t,e){const n=new Ot(e,0),s=this.wr.firstAfterOrEqual(n);return N.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class U_{constructor(t){this.vr=t,this.docs=function(){return new Rt(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return N.resolve(n?n.document.mutableCopy():Kt.newInvalidDocument(e))}getEntries(t,e){let n=Ve();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Kt.newInvalidDocument(s))}),N.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Ve();const a=e.path,l=new W(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||wg(Tg(f),n)<=0||(s.has(f.key)||Zs(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(t,e,n,s){rt()}Fr(t,e){return N.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new F_(this)}getSize(t){return N.resolve(this.size)}}class F_ extends V_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)}),N.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class B_{constructor(t){this.persistence=t,this.Mr=new tr(e=>xo(e),Uo),this.lastRemoteSnapshotVersion=it.min(),this.highestTargetId=0,this.Or=0,this.Nr=new zo,this.targetCount=0,this.Lr=Wn.Nn()}forEachTarget(t,e){return this.Mr.forEach((n,s)=>e(s)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),N.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Wn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.qn(e),N.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return N.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),N.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return N.resolve(n)}containsKey(t,e){return N.resolve(this.Nr.containsKey(e))}}/**
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
 */class q_{constructor(t,e){this.Br={},this.overlays={},this.kr=new No(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new B_(this),this.indexManager=new k_,this.remoteDocumentCache=function(s){return new U_(s)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new P_(e),this.$r=new M_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new L_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new x_(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){q("MemoryPersistence","Starting transaction:",t);const s=new j_(this.kr.next());return this.referenceDelegate.Ur(),n(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return N.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class j_ extends bg{constructor(t){super(),this.currentSequenceNumber=t}}class $o{constructor(t){this.persistence=t,this.zr=new zo,this.jr=null}static Hr(t){return new $o(t)}get Jr(){if(this.jr)return this.jr;throw rt()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),N.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),N.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,n=>{const s=W.fromPath(n);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,it.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(n=>{n?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return N.or([()=>N.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Ho{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=lt(),s=lt();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ho(t,e.fromCache,n,s)}}/**
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
 */class z_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Wd()?8:Rg(Bt())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ji(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new z_;return this.Ji(t,e,a).next(l=>{if(i.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>i.result)}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(_r()<=ct.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",On(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(_r()<=ct.DEBUG&&q("QueryEngine","Query:",On(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(_r()<=ct.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",On(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pe(e))):N.resolve())}ji(t,e){if(Yl(e))return N.resolve(null);let n=pe(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Us(e,null,"F"),n=pe(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=lt(...i);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,n).next(u=>{const d=this.Zi(e,l);return this.Xi(e,d,a,u.readTime)?this.ji(t,Us(e,null,"F")):this.es(t,d,e,u)}))})))}Hi(t,e,n,s){return Yl(e)||s.isEqual(it.min())?N.resolve(null):this.zi.getDocuments(t,n).next(i=>{const a=this.Zi(e,i);return this.Xi(e,a,n,s)?N.resolve(null):(_r()<=ct.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),On(e)),this.es(t,a,e,Ig(s,-1)).next(l=>l))})}Zi(t,e){let n=new Ft(th(t));return e.forEach((s,i)=>{Zs(t,i)&&(n=n.add(i))}),n}Xi(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,n){return _r()<=ct.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",On(e)),this.zi.getDocumentsMatchingQuery(t,e,Ye.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class H_{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Rt(gt),this.rs=new tr(i=>xo(i),Uo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new O_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function G_(r,t,e,n){return new H_(r,t,e,n)}async function Th(r,t){const e=ot(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],l=[];let u=lt();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(n,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function W_(r,t){const e=ot(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const m=d.batch,_=m.keys();let I=N.resolve();return _.forEach(A=>{I=I.next(()=>f.getEntry(u,A)).next(S=>{const D=d.docVersions.get(A);vt(D!==null),S.version.compareTo(D)<0&&(m.applyToRemoteDocument(S,d),S.isValidDocument()&&(S.setReadTime(d.commitVersion),f.addEntry(S)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let u=lt();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function wh(r){const t=ot(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function K_(r,t){const e=ot(r),n=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;l.push(e.Qr.removeMatchingKeys(i,f.removedDocuments,m).next(()=>e.Qr.addMatchingKeys(i,f.addedDocuments,m)));let I=_.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?I=I.withResumeToken(Qt.EMPTY_BYTE_STRING,it.min()).withLastLimboFreeSnapshotVersion(it.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,n)),s=s.insert(m,I),function(S,D,U){return S.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(_,I,f)&&l.push(e.Qr.updateTargetData(i,I))});let u=Ve(),d=lt();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Q_(i,a,t.documentUpdates).next(f=>{u=f.cs,d=f.ls})),!n.isEqual(it.min())){const f=e.Qr.getLastRemoteSnapshotVersion(i).next(m=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(f)}return N.waitFor(l).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(e.ns=s,i))}function Q_(r,t,e){let n=lt(),s=lt();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Ve();return e.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(it.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:s}})}function X_(r,t){const e=ot(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function J_(r,t){const e=ot(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Qr.getTargetData(n,t).next(i=>i?(s=i,N.resolve(s)):e.Qr.allocateTargetId(n).next(a=>(s=new Ge(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.ns.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function ho(r,t,e){const n=ot(r),s=n.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!$r(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.ns=n.ns.remove(t),n.rs.delete(s.target)}function cc(r,t,e){const n=ot(r);let s=it.min(),i=lt();return n.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const m=ot(u),_=m.rs.get(f);return _!==void 0?N.resolve(m.ns.get(_)):m.Qr.getTargetData(d,f)}(n,a,pe(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>n.ts.getDocumentsMatchingQuery(a,t,e?s:it.min(),e?i:lt())).next(l=>(Y_(n,zg(t),l),{documents:l,hs:i})))}function Y_(r,t,e){let n=r.ss.get(t)||it.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ss.set(t,n)}class uc{constructor(){this.activeTargetIds=Qg()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Z_{constructor(){this.no=new uc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new uc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ty{io(t){}shutdown(){}}/**
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
 */class hc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _s=null;function ji(){return _s===null?_s=function(){return 268435456+Math.round(2147483648*Math.random())}():_s++,"0x"+_s.toString(16)}/**
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
 */const ey={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ny{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const Gt="WebChannelConnection";class ry extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+e.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(e,n,s,i,a){const l=ji(),u=this.vo(e,n.toUriEncodedString());q("RestConnection",`Sending RPC '${e}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,i,a),this.Mo(e,u,d,s).then(f=>(q("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw zn("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}xo(e,n,s,i,a,l){return this.Co(e,n,s,i,a)}Fo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}vo(e,n){const s=ey[e];return`${this.wo}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,s){const i=ji();return new Promise((a,l)=>{const u=new Ou;u.setWithCredentials(!0),u.listenOnce(Lu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ws.NO_ERROR:const f=u.getResponseJson();q(Gt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case ws.TIMEOUT:q(Gt,`RPC '${t}' ${i} timed out`),l(new F(V.DEADLINE_EXCEEDED,"Request time out"));break;case ws.HTTP_ERROR:const m=u.getStatus();if(q(Gt,`RPC '${t}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const A=function(D){const U=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(U)>=0?U:V.UNKNOWN}(I.status);l(new F(A,I.message))}else l(new F(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(V.UNAVAILABLE,"Connection failed."));break;default:rt()}}finally{q(Gt,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);q(Gt,`RPC '${t}' ${i} sending request:`,s),u.send(e,"POST",d,n,15)})}Oo(t,e,n){const s=ji(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Fu(),l=Uu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Mu({})),this.Fo(u.initMessageHeaders,e,n),u.encodeInitMessageHeaders=!0;const f=i.join("");q(Gt,`Creating RPC '${t}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);let _=!1,I=!1;const A=new ny({lo:D=>{I?q(Gt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(_||(q(Gt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),_=!0),q(Gt,`RPC '${t}' stream ${s} sending:`,D),m.send(D))},ho:()=>m.close()}),S=(D,U,G)=>{D.listen(U,B=>{try{G(B)}catch(K){setTimeout(()=>{throw K},0)}})};return S(m,vr.EventType.OPEN,()=>{I||(q(Gt,`RPC '${t}' stream ${s} transport opened.`),A.mo())}),S(m,vr.EventType.CLOSE,()=>{I||(I=!0,q(Gt,`RPC '${t}' stream ${s} transport closed`),A.po())}),S(m,vr.EventType.ERROR,D=>{I||(I=!0,zn(Gt,`RPC '${t}' stream ${s} transport errored:`,D),A.po(new F(V.UNAVAILABLE,"The operation could not be completed")))}),S(m,vr.EventType.MESSAGE,D=>{var U;if(!I){const G=D.data[0];vt(!!G);const B=G,K=B.error||((U=B[0])===null||U===void 0?void 0:U.error);if(K){q(Gt,`RPC '${t}' stream ${s} received error:`,K);const j=K.status;let z=function(y){const E=kt[y];if(E!==void 0)return dh(E)}(j),T=K.message;z===void 0&&(z=V.INTERNAL,T="Unknown error status: "+j+" with message "+K.message),I=!0,A.po(new F(z,T)),m.close()}else q(Gt,`RPC '${t}' stream ${s} received:`,G),A.yo(G)}}),S(l,xu.STAT_EVENT,D=>{D.stat===eo.PROXY?q(Gt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===eo.NOPROXY&&q(Gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function zi(){return typeof document<"u"?document:null}/**
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
 */function ri(r){return new p_(r,!0)}/**
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
 */class Ah{constructor(t,e,n=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-n);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class bh{constructor(t,e,n,s,i,a,l,u){this.oi=t,this.Go=n,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ah(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(De(e.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.jo===e&&this.u_(n,s)},n=>{t(()=>{const s=new F(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(s)})})}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{n(()=>this.c_(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sy extends bh{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=__(this.serializer,t),n=function(i){if(!("targetChange"in i))return it.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?it.min():a.readTime?me(a.readTime):it.min()}(t);return this.listener.h_(e,n)}P_(t){const e={};e.database=uo(this.serializer),e.addTarget=function(i,a){let l;const u=a.target;if(l=io(u)?{documents:E_(i,u)}:{query:I_(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=mh(i,a.resumeToken);const d=ao(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(it.min())>0){l.readTime=qs(i,a.snapshotVersion.toTimestamp());const d=ao(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const n=w_(this.serializer,t);n&&(e.labels=n),this.i_(e)}I_(t){const e={};e.database=uo(this.serializer),e.removeTarget=t,this.i_(e)}}class iy extends bh{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(vt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=v_(t.writeResults,t.commitTime),n=me(t.commitTime);return this.listener.A_(n,e)}return vt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=uo(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>y_(this.serializer,n))};this.i_(e)}}/**
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
 */class oy extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(t,lo(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(V.UNKNOWN,i.toString())})}xo(t,e,n,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,lo(e,n),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(V.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class ay{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(De(e),this.y_=!1):q("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class ly{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{n.enqueueAndForget(async()=>{Pn(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ot(u);d.M_.add(4),await Wr(d),d.N_.set("Unknown"),d.M_.delete(4),await si(d)}(this))})}),this.N_=new ay(n,s)}}async function si(r){if(Pn(r))for(const t of r.x_)await t(!0)}async function Wr(r){for(const t of r.x_)await t(!1)}function Rh(r,t){const e=ot(r);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Qo(e)?Ko(e):er(e).Xo()&&Wo(e,t))}function Go(r,t){const e=ot(r),n=er(e);e.F_.delete(t),n.Xo()&&Sh(e,t),e.F_.size===0&&(n.Xo()?n.n_():Pn(e)&&e.N_.set("Unknown"))}function Wo(r,t){if(r.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(it.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}er(r).P_(t)}function Sh(r,t){r.L_.xe(t),er(r).I_(t)}function Ko(r){r.L_=new u_({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.F_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),er(r).start(),r.N_.w_()}function Qo(r){return Pn(r)&&!er(r).Zo()&&r.F_.size>0}function Pn(r){return ot(r).M_.size===0}function Ph(r){r.L_=void 0}async function cy(r){r.N_.set("Online")}async function uy(r){r.F_.forEach((t,e)=>{Wo(r,t)})}async function hy(r,t){Ph(r),Qo(r)?(r.N_.D_(t),Ko(r)):r.N_.set("Unknown")}async function dy(r,t,e){if(r.N_.set("Online"),t instanceof ph&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(r,t)}catch(n){q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await js(r,n)}else if(t instanceof Rs?r.L_.Ke(t):t instanceof fh?r.L_.He(t):r.L_.We(t),!e.isEqual(it.min()))try{const n=await wh(r.localStore);e.compareTo(n)>=0&&await function(i,a){const l=i.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.F_.get(d);f&&i.F_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=i.F_.get(u);if(!f)return;i.F_.set(u,f.withResumeToken(Qt.EMPTY_BYTE_STRING,f.snapshotVersion)),Sh(i,u);const m=new Ge(f.target,u,d,f.sequenceNumber);Wo(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){q("RemoteStore","Failed to raise snapshot:",n),await js(r,n)}}async function js(r,t,e){if(!$r(t))throw t;r.M_.add(1),await Wr(r),r.N_.set("Offline"),e||(e=()=>wh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await si(r)})}function Ch(r,t){return t().catch(e=>js(r,e,t))}async function ii(r){const t=ot(r),e=tn(t);let n=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;fy(t);)try{const s=await X_(t.localStore,n);if(s===null){t.v_.length===0&&e.n_();break}n=s.batchId,py(t,s)}catch(s){await js(t,s)}kh(t)&&Dh(t)}function fy(r){return Pn(r)&&r.v_.length<10}function py(r,t){r.v_.push(t);const e=tn(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function kh(r){return Pn(r)&&!tn(r).Zo()&&r.v_.length>0}function Dh(r){tn(r).start()}async function my(r){tn(r).V_()}async function gy(r){const t=tn(r);for(const e of r.v_)t.d_(e.mutations)}async function _y(r,t,e){const n=r.v_.shift(),s=Bo.from(n,t,e);await Ch(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await ii(r)}async function yy(r,t){t&&tn(r).E_&&await async function(n,s){if(function(a){return a_(a)&&a!==V.ABORTED}(s.code)){const i=n.v_.shift();tn(n).t_(),await Ch(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ii(n)}}(r,t),kh(r)&&Dh(r)}async function dc(r,t){const e=ot(r);e.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const n=Pn(e);e.M_.add(3),await Wr(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await si(e)}async function vy(r,t){const e=ot(r);t?(e.M_.delete(2),await si(e)):t||(e.M_.add(2),await Wr(e),e.N_.set("Unknown"))}function er(r){return r.B_||(r.B_=function(e,n,s){const i=ot(e);return i.f_(),new sy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Po:cy.bind(null,r),To:uy.bind(null,r),Ao:hy.bind(null,r),h_:dy.bind(null,r)}),r.x_.push(async t=>{t?(r.B_.t_(),Qo(r)?Ko(r):r.N_.set("Unknown")):(await r.B_.stop(),Ph(r))})),r.B_}function tn(r){return r.k_||(r.k_=function(e,n,s){const i=ot(e);return i.f_(),new iy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:my.bind(null,r),Ao:yy.bind(null,r),R_:gy.bind(null,r),A_:_y.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await ii(r)):(await r.k_.stop(),r.v_.length>0&&(q("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
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
 */class Xo{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,l=new Xo(t,e,a,s,i);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(r,t){if(De("AsyncQueue",`${t}: ${r}`),$r(r))return new F(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Bn{constructor(t){this.comparator=t?(e,n)=>t(e,n)||W.comparator(e.key,n.key):(e,n)=>W.comparator(e.key,n.key),this.keyedMap=Er(),this.sortedSet=new Rt(this.comparator)}static emptySet(t){return new Bn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Bn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Bn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class fc{constructor(){this.q_=new Rt(W.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?t.type!==0&&n.type===3?this.q_=this.q_.insert(e,t):t.type===3&&n.type!==1?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.q_=this.q_.remove(e):t.type===1&&n.type===2?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):rt():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Kn{constructor(t,e,n,s,i,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Kn(t,e,Bn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ys(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class Ey{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Iy{constructor(){this.queries=new tr(t=>Zu(t),Ys),this.onlineState="Unknown",this.z_=new Set}}async function Ty(r,t){const e=ot(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.W_()&&t.G_()&&(n=2):(i=new Ey,n=t.G_()?0:1);try{switch(n){case 0:i.K_=await e.onListen(s,!0);break;case 1:i.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Jo(a,`Initialization of query '${On(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&Yo(e)}async function wy(r,t){const e=ot(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.U_.indexOf(t);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Ay(r,t){const e=ot(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const l of a.U_)l.H_(s)&&(n=!0);a.K_=s}}n&&Yo(e)}function by(r,t,e){const n=ot(r),s=n.queries.get(t);if(s)for(const i of s.U_)i.onError(e);n.queries.delete(t)}function Yo(r){r.z_.forEach(t=>{t.next()})}var fo,pc;(pc=fo||(fo={})).J_="default",pc.Cache="cache";class Ry{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Kn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const n=e!=="Offline";return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Kn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==fo.Cache}}/**
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
 */class Vh{constructor(t){this.key=t}}class Nh{constructor(t){this.key=t}}class Sy{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=lt(),this.mutatedKeys=lt(),this.Ia=th(t),this.Ta=new Bn(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new fc,s=e?e.Ta:this.Ta;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,m)=>{const _=s.get(f),I=Zs(this.query,m)?m:null,A=!!_&&this.mutatedKeys.has(_.key),S=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;_&&I?_.data.isEqual(I.data)?A!==S&&(n.track({type:3,doc:I}),D=!0):this.Ra(_,I)||(n.track({type:2,doc:I}),D=!0,(u&&this.Ia(I,u)>0||d&&this.Ia(I,d)<0)&&(l=!0)):!_&&I?(n.track({type:0,doc:I}),D=!0):_&&!I&&(n.track({type:1,doc:_}),D=!0,(u||d)&&(l=!0)),D&&(I?(a=a.add(I),i=S?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ta:a,Aa:n,Xi:l,mutatedKeys:i}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,m)=>function(I,A){const S=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rt()}};return S(I)-S(A)}(f.type,m.type)||this.Ia(f.doc,m.doc)),this.Va(n),s=s!=null&&s;const l=e&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Kn(this.query,t.Ta,i,a,t.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new fc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=lt(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const e=[];return t.forEach(n=>{this.Pa.has(n)||e.push(new Nh(n))}),this.Pa.forEach(n=>{t.has(n)||e.push(new Vh(n))}),e}pa(t){this.la=t.hs,this.Pa=lt();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Kn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Py{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Cy{constructor(t){this.key=t,this.wa=!1}}class ky{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new tr(l=>Zu(l),Ys),this.Da=new Map,this.Ca=new Set,this.va=new Rt(W.comparator),this.Fa=new Map,this.Ma=new zo,this.xa={},this.Oa=new Map,this.Na=Wn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Dy(r,t,e=!0){const n=Fh(r);let s;const i=n.ba.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Oh(n,t,e,!0),s}async function Vy(r,t){const e=Fh(r);await Oh(e,t,!0,!1)}async function Oh(r,t,e,n){const s=await J_(r.localStore,pe(t)),i=s.targetId,a=e?r.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return n&&(l=await Ny(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Rh(r.remoteStore,s),l}async function Ny(r,t,e,n,s){r.Ba=(m,_,I)=>async function(S,D,U,G){let B=D.view.da(U);B.Xi&&(B=await cc(S.localStore,D.query,!1).then(({documents:T})=>D.view.da(T,B)));const K=G&&G.targetChanges.get(D.targetId),j=G&&G.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(B,S.isPrimaryClient,K,j);return gc(S,D.targetId,z.fa),z.snapshot}(r,m,_,I);const i=await cc(r.localStore,t,!0),a=new Sy(t,i.hs),l=a.da(i.documents),u=Gr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(l,r.isPrimaryClient,u);gc(r,e,d.fa);const f=new Py(t,e,a);return r.ba.set(t,f),r.Da.has(e)?r.Da.get(e).push(t):r.Da.set(e,[t]),d.snapshot}async function Oy(r,t,e){const n=ot(r),s=n.ba.get(t),i=n.Da.get(s.targetId);if(i.length>1)return n.Da.set(s.targetId,i.filter(a=>!Ys(a,t))),void n.ba.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ho(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Go(n.remoteStore,s.targetId),po(n,s.targetId)}).catch(zr)):(po(n,s.targetId),await ho(n.localStore,s.targetId,!0))}async function My(r,t){const e=ot(r),n=e.ba.get(t),s=e.Da.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Go(e.remoteStore,n.targetId))}async function Ly(r,t,e){const n=zy(r);try{const s=await function(a,l){const u=ot(a),d=Nt.now(),f=l.reduce((I,A)=>I.add(A.key),lt());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=Ve(),S=lt();return u.os.getEntries(I,f).next(D=>{A=D,A.forEach((U,G)=>{G.isValidDocument()||(S=S.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(D=>{m=D;const U=[];for(const G of l){const B=n_(G,m.get(G.key).overlayedDocument);B!=null&&U.push(new on(G.key,B,$u(B.value.mapValue),ue.exists(!0)))}return u.mutationQueue.addMutationBatch(I,d,U,l)}).next(D=>{_=D;const U=D.applyToLocalDocumentSet(m,S);return u.documentOverlayCache.saveOverlays(I,D.batchId,U)})}).then(()=>({batchId:_.batchId,changes:nh(m)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new Rt(gt)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(n,s.batchId,e),await Kr(n,s.changes),await ii(n.remoteStore)}catch(s){const i=Jo(s,"Failed to persist write");e.reject(i)}}async function Mh(r,t){const e=ot(r);try{const n=await K_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Fa.get(i);a&&(vt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?vt(a.wa):s.removedDocuments.size>0&&(vt(a.wa),a.wa=!1))}),await Kr(e,n,t)}catch(n){await zr(n)}}function mc(r,t,e){const n=ot(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ba.forEach((i,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=ot(a);u.onlineState=l;let d=!1;u.queries.forEach((f,m)=>{for(const _ of m.U_)_.j_(l)&&(d=!0)}),d&&Yo(u)}(n.eventManager,t),s.length&&n.Sa.h_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function xy(r,t,e){const n=ot(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Fa.get(t),i=s&&s.key;if(i){let a=new Rt(W.comparator);a=a.insert(i,Kt.newNoDocument(i,it.min()));const l=lt().add(i),u=new ni(it.min(),new Map,new Rt(gt),a,l);await Mh(n,u),n.va=n.va.remove(i),n.Fa.delete(t),Zo(n)}else await ho(n.localStore,t,!1).then(()=>po(n,t,e)).catch(zr)}async function Uy(r,t){const e=ot(r),n=t.batch.batchId;try{const s=await W_(e.localStore,t);xh(e,n,null),Lh(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Kr(e,s)}catch(s){await zr(s)}}async function Fy(r,t,e){const n=ot(r);try{const s=await function(a,l){const u=ot(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(vt(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(n.localStore,t);xh(n,t,e),Lh(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Kr(n,s)}catch(s){await zr(s)}}function Lh(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function xh(r,t,e){const n=ot(r);let s=n.xa[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.xa[n.currentUser.toKey()]=s}}function po(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Da.get(t))r.ba.delete(n),e&&r.Sa.ka(n,e);r.Da.delete(t),r.isPrimaryClient&&r.Ma.Vr(t).forEach(n=>{r.Ma.containsKey(n)||Uh(r,n)})}function Uh(r,t){r.Ca.delete(t.path.canonicalString());const e=r.va.get(t);e!==null&&(Go(r.remoteStore,e),r.va=r.va.remove(t),r.Fa.delete(e),Zo(r))}function gc(r,t,e){for(const n of e)n instanceof Vh?(r.Ma.addReference(n.key,t),By(r,n)):n instanceof Nh?(q("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,t),r.Ma.containsKey(n.key)||Uh(r,n.key)):rt()}function By(r,t){const e=t.key,n=e.path.canonicalString();r.va.get(e)||r.Ca.has(n)||(q("SyncEngine","New document in limbo: "+e),r.Ca.add(n),Zo(r))}function Zo(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const t=r.Ca.values().next().value;r.Ca.delete(t);const e=new W(It.fromString(t)),n=r.Na.next();r.Fa.set(n,new Cy(e)),r.va=r.va.insert(e,n),Rh(r.remoteStore,new Ge(pe(Ju(e.path)),n,"TargetPurposeLimboResolution",No.oe))}}async function Kr(r,t,e){const n=ot(r),s=[],i=[],a=[];n.ba.isEmpty()||(n.ba.forEach((l,u)=>{a.push(n.Ba(u,t,e).then(d=>{if((d||e)&&n.isPrimaryClient){const f=d&&!d.fromCache;n.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Ho.Ki(u.targetId,d);i.push(f)}}))}),await Promise.all(a),n.Sa.h_(s),await async function(u,d){const f=ot(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(d,_=>N.forEach(_.qi,I=>f.persistence.referenceDelegate.addReference(m,_.targetId,I)).next(()=>N.forEach(_.Qi,I=>f.persistence.referenceDelegate.removeReference(m,_.targetId,I)))))}catch(m){if(!$r(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const _=m.targetId;if(!m.fromCache){const I=f.ns.get(_),A=I.snapshotVersion,S=I.withLastLimboFreeSnapshotVersion(A);f.ns=f.ns.insert(_,S)}}}(n.localStore,i))}async function qy(r,t){const e=ot(r);if(!e.currentUser.isEqual(t)){q("SyncEngine","User change. New user:",t.toKey());const n=await Th(e.localStore,t);e.currentUser=t,function(i,a){i.Oa.forEach(l=>{l.forEach(u=>{u.reject(new F(V.CANCELLED,a))})}),i.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Kr(e,n.us)}}function jy(r,t){const e=ot(r),n=e.Fa.get(t);if(n&&n.wa)return lt().add(n.key);{let s=lt();const i=e.Da.get(t);if(!i)return s;for(const a of i){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Fh(r){const t=ot(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xy.bind(null,t),t.Sa.h_=Ay.bind(null,t.eventManager),t.Sa.ka=by.bind(null,t.eventManager),t}function zy(r){const t=ot(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Fy.bind(null,t),t}class _c{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ri(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return G_(this.persistence,new $_,t.initialUser,this.serializer)}createPersistence(t){return new q_($o.Hr,this.serializer)}createSharedClientState(t){return new Z_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $y{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>mc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=qy.bind(null,this.syncEngine),await vy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Iy}()}createDatastore(t){const e=ri(t.databaseInfo.databaseId),n=function(i){return new ry(i)}(t.databaseInfo);return function(i,a,l,u){return new oy(i,a,l,u)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,l){return new ly(n,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>mc(this.syncEngine,e,0),function(){return hc.D()?new hc:new ty}())}createSyncEngine(t,e){return function(s,i,a,l,u,d,f){const m=new ky(s,i,a,l,u,d);return f&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(n){const s=ot(n);q("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Wr(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Hy{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):De("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Gy{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=qu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async i=>{q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(n,i=>(q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Jo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function $i(r,t){r.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Th(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function yc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ky(r);q("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>dc(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>dc(t.remoteStore,s)),r._onlineComponents=t}function Wy(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Ky(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await $i(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Wy(e))throw e;zn("Error using user provided cache. Falling back to memory cache: "+e),await $i(r,new _c)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await $i(r,new _c);return r._offlineComponents}async function Bh(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await yc(r,r._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await yc(r,new $y))),r._onlineComponents}function Qy(r){return Bh(r).then(t=>t.syncEngine)}async function Xy(r){const t=await Bh(r),e=t.eventManager;return e.onListen=Dy.bind(null,t.syncEngine),e.onUnlisten=Oy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Vy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=My.bind(null,t.syncEngine),e}function Jy(r,t,e={}){const n=new Xe;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const f=new Hy({next:_=>{a.enqueueAndForget(()=>wy(i,m)),_.fromCache&&u.source==="server"?d.reject(new F(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new Ry(l,f,{includeMetadataChanges:!0,ra:!0});return Ty(i,m)}(await Xy(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function qh(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const vc=new Map;/**
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
 */function jh(r,t,e){if(!e)throw new F(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Yy(r,t,e,n){if(t===!0&&n===!0)throw new F(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Ec(r){if(!W.isDocumentKey(r))throw new F(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ic(r){if(W.isDocumentKey(r))throw new F(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function oi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":rt()}function Rn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new F(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=oi(r);throw new F(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class Tc{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new F(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qh((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ai{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new F(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dg;switch(n.type){case"firstParty":return new gg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vc.get(e);n&&(q("ComponentProvider","Removing Datastore"),vc.delete(e),n.terminate())}(this),Promise.resolve()}}function Zy(r,t,e,n={}){var s;const i=(r=Rn(r,ai))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let l,u;if(typeof n.mockUserToken=="string")l=n.mockUserToken,u=Wt.MOCK_USER;else{l=qd(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new F(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Wt(d)}r._authCredentials=new fg(new Bu(l,u))}}/**
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
 */class an{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new an(this.firestore,t,this._query)}}class ee{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Je(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ee(this.firestore,t,this._key)}}class Je extends an{constructor(t,e,n){super(t,e,Ju(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ee(this.firestore,null,new W(t))}withConverter(t){return new Je(this.firestore,t,this._path)}}function ne(r,t,...e){if(r=qt(r),jh("collection","path",t),r instanceof ai){const n=It.fromString(t,...e);return Ic(n),new Je(r,null,n)}{if(!(r instanceof ee||r instanceof Je))throw new F(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(It.fromString(t,...e));return Ic(n),new Je(r.firestore,null,n)}}function Qr(r,t,...e){if(r=qt(r),arguments.length===1&&(t=qu.newId()),jh("doc","path",t),r instanceof ai){const n=It.fromString(t,...e);return Ec(n),new ee(r,null,new W(n))}{if(!(r instanceof ee||r instanceof Je))throw new F(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(It.fromString(t,...e));return Ec(n),new ee(r.firestore,r instanceof Je?r.converter:null,new W(n))}}/**
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
 */class tv{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ah(this,"async_queue_retry"),this.hu=()=>{const e=zi();e&&q("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=zi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Xe;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!$r(t))throw t;q("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(n=>{this.au=n,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(n);throw De("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.uu=!1,n))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Xo.createAndSchedule(this,t,e,n,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&rt()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Xr extends ai{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=function(){return new tv}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$h(this),this._firestoreClient.terminate()}}function ev(r,t){const e=typeof r=="object"?r:tu(),n=typeof r=="string"?r:"(default)",s=vo(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Fd("firestore");i&&Zy(s,...i)}return s}function zh(r){return r._firestoreClient||$h(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function $h(r){var t,e,n;const s=r._freezeSettings(),i=function(l,u,d,f){return new Cg(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qh(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new Gy(r._authCredentials,r._appCheckCredentials,r._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Qn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qn(Qt.fromBase64String(t))}catch(e){throw new F(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Qn(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class li{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ea{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gt(this._lat,t._lat)||gt(this._long,t._long)}}/**
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
 */const nv=/^__.*__$/;class rv{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new on(t,this.data,this.fieldMask,e,this.fieldTransforms):new Hr(t,this.data,e,this.fieldTransforms)}}class Hh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new on(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Gh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rt()}}class na{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new na(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.wu(t),s}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return zs(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Gh(this.fu)&&nv.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class sv{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ri(t)}Fu(t,e,n,s=!1){return new na({fu:t,methodName:e,vu:n,path:xt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ra(r){const t=r._freezeSettings(),e=ri(r._databaseId);return new sv(r._databaseId,!!t.ignoreUndefinedProperties,e)}function iv(r,t,e,n,s,i={}){const a=r.Fu(i.merge||i.mergeFields?2:0,t,e,s);sa("Data must be an object, but it was:",a,n);const l=Wh(n,a);let u,d;if(i.merge)u=new te(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=mo(t,m,e);if(!a.contains(_))throw new F(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Qh(f,_)||f.push(_)}u=new te(f),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new rv(new Yt(l),u,d)}class ci extends ta{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ci}}function ov(r,t,e,n){const s=r.Fu(1,t,e);sa("Data must be an object, but it was:",s,n);const i=[],a=Yt.empty();Sn(n,(u,d)=>{const f=ia(t,u,e);d=qt(d);const m=s.Su(f);if(d instanceof ci)i.push(f);else{const _=Jr(d,m);_!=null&&(i.push(f),a.set(f,_))}});const l=new te(i);return new Hh(a,l,s.fieldTransforms)}function av(r,t,e,n,s,i){const a=r.Fu(1,t,e),l=[mo(t,n,e)],u=[s];if(i.length%2!=0)throw new F(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(mo(t,i[_])),u.push(i[_+1]);const d=[],f=Yt.empty();for(let _=l.length-1;_>=0;--_)if(!Qh(d,l[_])){const I=l[_];let A=u[_];A=qt(A);const S=a.Su(I);if(A instanceof ci)d.push(I);else{const D=Jr(A,S);D!=null&&(d.push(I),f.set(I,D))}}const m=new te(d);return new Hh(f,m,a.fieldTransforms)}function lv(r,t,e,n=!1){return Jr(e,r.Fu(n?4:3,t))}function Jr(r,t){if(Kh(r=qt(r)))return sa("Unsupported field value:",t,r),Wh(r,t);if(r instanceof ta)return function(n,s){if(!Gh(s.fu))throw s.Du(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const l of n){let u=Jr(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=qt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xg(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Nt.fromDate(n);return{timestampValue:qs(s.serializer,i)}}if(n instanceof Nt){const i=new Nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qs(s.serializer,i)}}if(n instanceof ea)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qn)return{bytesValue:mh(s.serializer,n._byteString)};if(n instanceof ee){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jo(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Du(`Unsupported field value: ${oi(n)}`)}(r,t)}function Wh(r,t){const e={};return ju(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Sn(r,(n,s)=>{const i=Jr(s,t.pu(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function Kh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Nt||r instanceof ea||r instanceof Qn||r instanceof ee||r instanceof ta)}function sa(r,t,e){if(!Kh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=oi(e);throw n==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+n)}}function mo(r,t,e){if((t=qt(t))instanceof li)return t._internalPath;if(typeof t=="string")return ia(r,t);throw zs("Field path arguments must be of type string or ",r,!1,void 0,e)}const cv=new RegExp("[~\\*/\\[\\]]");function ia(r,t,e){if(t.search(cv)>=0)throw zs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new li(...t.split("."))._internalPath}catch{throw zs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function zs(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${n}`),a&&(u+=` in document ${s}`),u+=")"),new F(V.INVALID_ARGUMENT,l+r+u)}function Qh(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Xh{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new uv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ui("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class uv extends Xh{data(){return super.data()}}function ui(r,t){return typeof t=="string"?ia(r,t):t instanceof li?t._internalPath:t._delegate._internalPath}/**
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
 */function hv(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new F(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oa{}class aa extends oa{}function yn(r,t,...e){let n=[];t instanceof oa&&n.push(t),n=n.concat(e),function(i){const a=i.filter(u=>u instanceof la).length,l=i.filter(u=>u instanceof hi).length;if(a>1||a>0&&l>0)throw new F(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class hi extends aa{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new hi(t,e,n)}_apply(t){const e=this._parse(t);return Jh(t._query,e),new an(t.firestore,t.converter,oo(t._query,e))}_parse(t){const e=ra(t.firestore);return function(i,a,l,u,d,f,m){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ac(m,f);const I=[];for(const A of m)I.push(wc(u,i,A));_={arrayValue:{values:I}}}else _=wc(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ac(m,f),_=lv(l,a,m,f==="in"||f==="not-in");return Vt.create(d,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function vn(r,t,e){const n=t,s=ui("where",r);return hi._create(s,n,e)}class la extends oa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new la(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:he.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Jh(a,u),a=oo(a,u)}(t._query,e),new an(t.firestore,t.converter,oo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ca extends aa{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ca(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new F(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nr(i,a)}(t._query,this._field,this._direction);return new an(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Zn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function dv(r,t="asc"){const e=t,n=ui("orderBy",r);return ca._create(n,e)}class ua extends aa{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new ua(t,e,n)}_apply(t){return new an(t.firestore,t.converter,Us(t._query,this._limit,this._limitType))}}function fv(r){return ua._create("limit",r,"F")}function wc(r,t,e){if(typeof(e=qt(e))=="string"){if(e==="")throw new F(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yu(t)&&e.indexOf("/")!==-1)throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(It.fromString(e));if(!W.isDocumentKey(n))throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Gl(r,new W(n))}if(e instanceof ee)return Gl(r,e._key);throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oi(e)}.`)}function Ac(r,t){if(!Array.isArray(r)||r.length===0)throw new F(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Jh(r,t){const e=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class pv{convertValue(t,e="none"){switch(bn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(An(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw rt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Sn(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new ea(Dt(t.latitude),Dt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Mo(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(kr(t));default:return null}}convertTimestamp(t){const e=Ze(t);return new Nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=It.fromString(t);vt(Ih(n));const s=new Dr(n.get(1),n.get(3)),i=new W(n.popFirst(5));return s.isEqual(e)||De(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function mv(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class ys{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gv extends Xh{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ui("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ss extends gv{data(t={}){return super.data(t)}}class _v{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ys(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ss(this._firestore,this._userDataWriter,n.key,n,new ys(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Ss(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ys(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ss(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ys(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:yv(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yv(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rt()}}class vv extends pv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ee(this.firestore,null,e)}}function Ce(r){r=Rn(r,an);const t=Rn(r.firestore,Xr),e=zh(t),n=new vv(t);return hv(r._query),Jy(e,r._query).then(s=>new _v(t,n,r,s))}function Ev(r,t,e,...n){r=Rn(r,ee);const s=Rn(r.firestore,Xr),i=ra(s);let a;return a=typeof(t=qt(t))=="string"||t instanceof li?av(i,"updateDoc",r._key,t,e,n):ov(i,"updateDoc",r._key,t),da(s,[a.toMutation(r._key,ue.exists(!0))])}function ha(r){return da(Rn(r.firestore,Xr),[new Fo(r._key,ue.none())])}function di(r,t){const e=Rn(r.firestore,Xr),n=Qr(r),s=mv(r.converter,t);return da(e,[iv(ra(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ue.exists(!1))]).then(()=>n)}function da(r,t){return function(n,s){const i=new Xe;return n.asyncQueue.enqueueAndForget(async()=>Ly(await Qy(n),s,i)),i.promise}(zh(r),t)}(function(t,e=!0){(function(s){Yn=s})(Xn),qn(new En("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),l=new Xr(new pg(n.getProvider("auth-internal")),new yg(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qe(jl,"4.6.3",t),Qe(jl,"4.6.3","esm2017")})();const Iv={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},Yh=Zc(Iv),$s=to(Yh),Ut=ev(Yh),wt=Hs(0),yr=Hs(0),go=Hs(0),Hi=Hs(0),Tv=""+new URL("../assets/logo.BgbdimHT.png",import.meta.url).href;function bc(r,t,e){const n=r.slice();return n[43]=t[e],n}function Rc(r,t,e){const n=r.slice();return n[46]=t[e],n}function Sc(r){let t,e="추가",n,s,i="채택",a,l,u="삭제",d,f,m="문제신고 확인",_,I;return{c(){t=O("button"),t.textContent=e,n=Q(),s=O("button"),s.textContent=i,a=Q(),l=O("button"),l.textContent=u,d=Q(),f=O("button"),f.textContent=m,this.h()},l(A){t=M(A,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(t)!=="svelte-1lsf66u"&&(t.textContent=e),n=X(A),s=M(A,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(s)!=="svelte-gljqo6"&&(s.textContent=i),a=X(A),l=M(A,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(l)!=="svelte-1ipyraa"&&(l.textContent=u),d=X(A),f=M(A,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(f)!=="svelte-18d8umu"&&(f.textContent=m),this.h()},h(){C(t,"class","top-right-button0 svelte-dknk1f"),C(s,"class","top-right-button svelte-dknk1f"),C(l,"class","top-right-button6 svelte-dknk1f"),C(f,"class","top-right-button8 svelte-dknk1f")},m(A,S){dt(A,t,S),dt(A,n,S),dt(A,s,S),dt(A,a,S),dt(A,l,S),dt(A,d,S),dt(A,f,S),_||(I=[tt(t,"click",r[14]),tt(s,"click",r[10]),tt(l,"click",r[11]),tt(f,"click",r[23])],_=!0)},p:Tt,d(A){A&&(L(t),L(n),L(s),L(a),L(l),L(d),L(f)),_=!1,Oe(I)}}}function wv(r){let t,e="다크 모드",n,s;return{c(){t=O("button"),t.textContent=e,this.h()},l(i){t=M(i,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(t)!=="svelte-npq6ga"&&(t.textContent=e),this.h()},h(){C(t,"class","top-right-button5 svelte-dknk1f")},m(i,a){dt(i,t,a),n||(s=tt(t,"click",r[22]),n=!0)},p:Tt,d(i){i&&L(t),n=!1,s()}}}function Av(r){let t,e="라이트 모드",n,s;return{c(){t=O("button"),t.textContent=e,this.h()},l(i){t=M(i,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(t)!=="svelte-1xql8rf"&&(t.textContent=e),this.h()},h(){C(t,"class","top-right-button4 svelte-dknk1f")},m(i,a){dt(i,t,a),n||(s=tt(t,"click",r[21]),n=!0)},p:Tt,d(i){i&&L(t),n=!1,s()}}}function Pc(r){let t,e=ge(r[0]),n=[];for(let s=0;s<e.length;s+=1)n[s]=Cc(Rc(r,e,s));return{c(){t=O("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=M(s,"DIV",{class:!0});var i=Z(t);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach(L),this.h()},h(){C(t,"class","search-history svelte-dknk1f")},m(s,i){dt(s,t,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null)},p(s,i){if(i[0]&1048577){e=ge(s[0]);let a;for(a=0;a<e.length;a+=1){const l=Rc(s,e,a);n[a]?n[a].p(l,i):(n[a]=Cc(l),n[a].c(),n[a].m(t,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=e.length}},d(s){s&&L(t),xr(n,s)}}}function Cc(r){let t,e=r[46]+"",n,s,i;function a(){return r[28](r[46])}return{c(){t=O("div"),n=ae(e),this.h()},l(l){t=M(l,"DIV",{class:!0});var u=Z(t);n=le(u,e),u.forEach(L),this.h()},h(){C(t,"class","history-item svelte-dknk1f")},m(l,u){dt(l,t,u),k(t,n),s||(i=tt(t,"click",a),s=!0)},p(l,u){r=l,u[0]&1&&e!==(e=r[46]+"")&&Ae(n,e)},d(l){l&&L(t),s=!1,i()}}}function kc(r){let t,e=r[43]+"",n,s,i;return{c(){t=O("div"),n=ae(e),this.h()},l(a){t=M(a,"DIV",{class:!0});var l=Z(t);n=le(l,e),l.forEach(L),this.h()},h(){C(t,"class","ranking-item svelte-dknk1f")},m(a,l){dt(a,t,l),k(t,n),s||(i=tt(t,"click",function(){Cd(r[15](r[43]))&&r[15](r[43]).apply(this,arguments)}),s=!0)},p(a,l){r=a,l[0]&128&&e!==(e=r[43]+"")&&Ae(n,e)},d(a){a&&L(t),s=!1,i()}}}function Dc(r){let t,e,n,s,i="Close",a,l,u=!r[5]&&Vc();return{c(){t=O("div"),e=O("div"),u&&u.c(),n=Q(),s=O("button"),s.textContent=i,this.h()},l(d){t=M(d,"DIV",{class:!0});var f=Z(t);e=M(f,"DIV",{class:!0});var m=Z(e);u&&u.l(m),n=X(m),s=M(m,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(s)!=="svelte-au4vm5"&&(s.textContent=i),m.forEach(L),f.forEach(L),this.h()},h(){C(s,"class","close-button svelte-dknk1f"),C(e,"class","modal svelte-dknk1f"),C(t,"class","modal-background svelte-dknk1f")},m(d,f){dt(d,t,f),k(t,e),u&&u.m(e,null),k(e,n),k(e,s),a||(l=[tt(s,"click",r[19]),tt(e,"click",Dd(r[24])),tt(t,"click",r[19])],a=!0)},p(d,f){d[5]?u&&(u.d(1),u=null):u||(u=Vc(),u.c(),u.m(e,n))},d(d){d&&L(t),u&&u.d(),a=!1,Oe(l)}}}function Vc(r){let t,e="아직 추가되지 않은 단어입니다..";return{c(){t=O("div"),t.textContent=e,this.h()},l(n){t=M(n,"DIV",{class:!0,"data-svelte-h":!0}),mt(t)!=="svelte-1tgxuji"&&(t.textContent=e),this.h()},h(){C(t,"class","modal-explain svelte-dknk1f")},m(n,s){dt(n,t,s)},d(n){n&&L(t)}}}function bv(r){let t,e,n,s,i,a,l="로그아웃",u,d,f="단어 신청",m,_,I="문제 신고",A,S,D,U,G,B,K,j,z="실시간 랭킹 TOP3",T,g,y,E,w=r[6]=="host.wproject00@gmail.com"&&Sc(r);function b(J,st){return J[8]==0?Av:wv}let v=b(r),H=v(r),$=r[1]&&r[0].length>0&&Pc(r),ft=ge(r[7]),Y=[];for(let J=0;J<ft.length;J+=1)Y[J]=kc(bc(r,ft,J));let ut=r[2]&&Dc(r);return{c(){t=O("div"),e=O("img"),s=Q(),w&&w.c(),i=Q(),a=O("button"),a.textContent=l,u=Q(),d=O("button"),d.textContent=f,m=Q(),_=O("button"),_.textContent=I,A=Q(),H.c(),S=Q(),D=O("div"),U=O("input"),G=Q(),$&&$.c(),B=Q(),K=O("div"),j=O("h3"),j.textContent=z,T=Q();for(let J=0;J<Y.length;J+=1)Y[J].c();g=Q(),ut&&ut.c(),this.h()},l(J){t=M(J,"DIV",{id:!0,class:!0});var st=Z(t);e=M(st,"IMG",{class:!0,src:!0,alt:!0}),s=X(st),w&&w.l(st),i=X(st),a=M(st,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(a)!=="svelte-2c08k3"&&(a.textContent=l),u=X(st),d=M(st,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(d)!=="svelte-82mn25"&&(d.textContent=f),m=X(st),_=M(st,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(_)!=="svelte-1u7hrdt"&&(_.textContent=I),A=X(st),H.l(st),S=X(st),D=M(st,"DIV",{class:!0});var at=Z(D);U=M(at,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),G=X(at),$&&$.l(at),at.forEach(L),B=X(st),K=M(st,"DIV",{class:!0});var At=Z(K);j=M(At,"H3",{"data-svelte-h":!0}),mt(j)!=="svelte-1f2184c"&&(j.textContent=z),T=X(At);for(let Ct=0;Ct<Y.length;Ct+=1)Y[Ct].l(At);At.forEach(L),g=X(st),ut&&ut.l(st),st.forEach(L),this.h()},h(){C(e,"class","logo_img svelte-dknk1f"),Pd(e.src,n=Tv)||C(e,"src",n),C(e,"alt","logo"),C(a,"class","top-right-button2 svelte-dknk1f"),C(d,"class","top-right-button3 svelte-dknk1f"),C(_,"class","top-right-button7 svelte-dknk1f"),C(U,"type","text"),C(U,"autocomplete","off"),C(U,"id","sb"),C(U,"class","search-bar svelte-dknk1f"),C(U,"placeholder","검색..."),U.value=r[3],C(D,"class","search-container svelte-dknk1f"),C(K,"class","ranking-list svelte-dknk1f"),C(t,"id","condiv"),C(t,"class","svelte-dknk1f")},m(J,st){dt(J,t,st),k(t,e),k(t,s),w&&w.m(t,null),k(t,i),k(t,a),k(t,u),k(t,d),k(t,m),k(t,_),k(t,A),H.m(t,null),k(t,S),k(t,D),k(D,U),k(D,G),$&&$.m(D,null),k(t,B),k(t,K),k(K,j),k(K,T);for(let at=0;at<Y.length;at+=1)Y[at]&&Y[at].m(K,null);k(t,g),ut&&ut.m(t,null),y||(E=[tt(a,"click",r[13]),tt(d,"click",r[9]),tt(_,"click",r[12]),tt(U,"input",r[25]),tt(U,"keydown",r[16]),tt(U,"focus",r[17]),tt(U,"blur",r[18]),tt(U,"compositionstart",r[26]),tt(U,"compositionend",r[27])],y=!0)},p(J,st){if(J[6]=="host.wproject00@gmail.com"?w?w.p(J,st):(w=Sc(J),w.c(),w.m(t,i)):w&&(w.d(1),w=null),v===(v=b(J))&&H?H.p(J,st):(H.d(1),H=v(J),H&&(H.c(),H.m(t,S))),st[0]&8&&U.value!==J[3]&&(U.value=J[3]),J[1]&&J[0].length>0?$?$.p(J,st):($=Pc(J),$.c(),$.m(D,null)):$&&($.d(1),$=null),st[0]&32896){ft=ge(J[7]);let at;for(at=0;at<ft.length;at+=1){const At=bc(J,ft,at);Y[at]?Y[at].p(At,st):(Y[at]=kc(At),Y[at].c(),Y[at].m(K,null))}for(;at<Y.length;at+=1)Y[at].d(1);Y.length=ft.length}J[2]?ut?ut.p(J,st):(ut=Dc(J),ut.c(),ut.m(t,null)):ut&&(ut.d(1),ut=null)},i:Tt,o:Tt,d(J){J&&L(t),w&&w.d(),H.d(),$&&$.d(),xr(Y,J),ut&&ut.d(),y=!1,Oe(E)}}}function Rv(r,t,e){let n,s,i,a;re(r,wt,et=>e(34,n=et)),re(r,Hi,et=>e(8,s=et)),re(r,go,et=>e(35,i=et)),re(r,yr,et=>e(36,a=et));let l=[],u=!1,d=!1,f="",m=!1,_=[],I=null,A="";Lr(()=>{ft(),E()});function S(){bt(wt,n=3,n)}function D(){bt(wt,n=4,n)}const U=()=>{bt(wt,n=5,n)},G=()=>{bt(wt,n=6,n)};new Promise((et,St)=>{Co($s,jt=>{jt?et(jt.email):St("No user is signed in")})}).then(et=>e(6,A=et)).catch(et=>console.error(et));const K=async()=>{try{await Zp($s)}catch(et){console.error("Error signing out:",et)}};function j(){bt(wt,n=1,n)}async function z(et){e(1,u=!1);const St=await Y(et);_=St.matches,e(5,I=St.exactMatch),console.log(_),I?(bt(yr,a=I.title,a),I.value,I.explain,I.count+1,bt(wt,n=2,n)):bt(yr,a="",a),e(2,d=!0)}async function T(et){if(!m&&et.key==="Enter"&&(e(3,f=et.target.value.trim()),f)){y(f),et.target.value="",e(1,u=!1);const St=await Y(f);_=St.matches,e(5,I=St.exactMatch),console.log(_),I?(bt(yr,a=I.title,a),I.value,I.explain,I.count+1,g(a),bt(wt,n=2,n)):bt(yr,a="",a),e(2,d=!0)}}async function g(et){try{const St=yn(ne(Ut,"datas"),vn("title","==",et)),jt=await Ce(St);jt.forEach(async ve=>{const de=Qr(Ut,"datas",ve.id),Ee=ve.data().count||0;await Ev(de,{count:Ee+1}),console.log(`Document with ID ${ve.id} updated successfully`)}),jt.empty&&console.log("No matching documents found.")}catch(St){console.error("Error updating document: ",St)}}function y(et){const St=JSON.parse(sessionStorage.getItem("searchHistory"))||[],jt=[et,...St.filter(ve=>ve!==et)];jt.length>3&&jt.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(jt)),e(0,l=jt)}function E(){const et=JSON.parse(sessionStorage.getItem("searchHistory"))||[];e(0,l=et)}function w(){e(1,u=!0)}function b(){setTimeout(()=>e(1,u=!1),100)}function v(){e(2,d=!1)}function H(et){document.getElementById("sb").value=et,e(1,u=!1)}let $=[];async function ft(){try{const et=yn(ne(Ut,"datas"),dv("count","desc"),fv(3)),St=await Ce(et);e(7,$=St.docs.map(jt=>jt.data().title))}catch(et){console.error("Error fetching documents: ",et)}}async function Y(et){const St=ne(Ut,"datas"),jt=yn(St,vn("title",">=",et),vn("title","<=",et+"")),ve=await Ce(jt),de=[];let Ee=null;return ve.forEach(nr=>{const ln=nr.data();de.push(ln),ln.title===et&&(Ee=ln)}),bt(go,i=de,i),{exactMatch:Ee,matches:de}}const ut=()=>{bt(Hi,s=1,s)},J=()=>{bt(Hi,s=0,s)},st=()=>{bt(wt,n=7,n)};function at(et){kd.call(this,r,et)}return[l,u,d,f,m,I,A,$,s,S,D,U,G,K,j,z,T,w,b,v,H,ut,J,st,at,et=>e(3,f=et.target.value),()=>e(4,m=!0),()=>e(4,m=!1),et=>H(et)]}class Sv extends Me{constructor(t){super(),Le(this,t,Rv,bv,Ne,{},null,[-1,-1])}}function Nc(r){let t,e;return{c(){t=O("div"),e=ae(r[4]),this.h()},l(n){t=M(n,"DIV",{class:!0});var s=Z(t);e=le(s,r[4]),s.forEach(L),this.h()},h(){C(t,"class","error-message svelte-16h5zi1")},m(n,s){dt(n,t,s),k(t,e)},p(n,s){s&16&&Ae(e,n[4])},d(n){n&&L(t)}}}function Pv(r){let t,e,n,s,i="Title",a,l,u,d,f,m="Value",_,I,A,S,D,U="Explain",G,B,K,j,z,T,g,y,E,w="Cancel",b,v,H=r[4]&&Nc(r);return{c(){t=O("div"),e=O("div"),n=O("div"),s=O("label"),s.textContent=i,a=Q(),l=O("input"),u=Q(),d=O("div"),f=O("label"),f.textContent=m,_=Q(),I=O("input"),A=Q(),S=O("div"),D=O("label"),D.textContent=U,G=Q(),B=O("input"),K=Q(),H&&H.c(),j=Q(),z=O("div"),T=O("button"),g=ae("Submit"),y=Q(),E=O("button"),E.textContent=w,this.h()},l($){t=M($,"DIV",{class:!0});var ft=Z(t);e=M(ft,"DIV",{class:!0});var Y=Z(e);n=M(Y,"DIV",{class:!0});var ut=Z(n);s=M(ut,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),mt(s)!=="svelte-1weqgc2"&&(s.textContent=i),a=X(ut),l=M(ut,"INPUT",{class:!0,type:!0,id:!0}),ut.forEach(L),u=X(Y),d=M(Y,"DIV",{class:!0});var J=Z(d);f=M(J,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),mt(f)!=="svelte-ry2554"&&(f.textContent=m),_=X(J),I=M(J,"INPUT",{class:!0,type:!0,id:!0}),J.forEach(L),A=X(Y),S=M(Y,"DIV",{class:!0});var st=Z(S);D=M(st,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),mt(D)!=="svelte-2n35pc"&&(D.textContent=U),G=X(st),B=M(st,"INPUT",{class:!0,type:!0,id:!0}),st.forEach(L),K=X(Y),H&&H.l(Y),j=X(Y),z=M(Y,"DIV",{class:!0});var at=Z(z);T=M(at,"BUTTON",{class:!0});var At=Z(T);g=le(At,"Submit"),At.forEach(L),y=X(at),E=M(at,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(E)!=="svelte-9k415x"&&(E.textContent=w),at.forEach(L),Y.forEach(L),ft.forEach(L),this.h()},h(){C(s,"class","form-label svelte-16h5zi1"),C(s,"for","title"),C(l,"class","form-input svelte-16h5zi1"),C(l,"type","text"),C(l,"id","title"),C(n,"class","form-group svelte-16h5zi1"),C(f,"class","form-label svelte-16h5zi1"),C(f,"for","value"),C(I,"class","form-input svelte-16h5zi1"),C(I,"type","text"),C(I,"id","value"),C(d,"class","form-group svelte-16h5zi1"),C(D,"class","form-label svelte-16h5zi1"),C(D,"for","explain"),C(B,"class","form-input svelte-16h5zi1"),C(B,"type","text"),C(B,"id","explain"),C(S,"class","form-group svelte-16h5zi1"),C(T,"class","form-button svelte-16h5zi1"),T.disabled=r[3],C(E,"class","form-button cancel-button svelte-16h5zi1"),C(z,"class","form-buttons svelte-16h5zi1"),C(e,"class","form-content svelte-16h5zi1"),C(t,"class","form-container svelte-16h5zi1")},m($,ft){dt($,t,ft),k(t,e),k(e,n),k(n,s),k(n,a),k(n,l),_t(l,r[0]),k(e,u),k(e,d),k(d,f),k(d,_),k(d,I),_t(I,r[1]),k(e,A),k(e,S),k(S,D),k(S,G),k(S,B),_t(B,r[2]),k(e,K),H&&H.m(e,null),k(e,j),k(e,z),k(z,T),k(T,g),k(z,y),k(z,E),b||(v=[tt(l,"input",r[7]),tt(I,"input",r[8]),tt(B,"input",r[9]),tt(T,"click",r[5]),tt(E,"click",r[6])],b=!0)},p($,[ft]){ft&1&&l.value!==$[0]&&_t(l,$[0]),ft&2&&I.value!==$[1]&&_t(I,$[1]),ft&4&&B.value!==$[2]&&_t(B,$[2]),$[4]?H?H.p($,ft):(H=Nc($),H.c(),H.m(e,j)):H&&(H.d(1),H=null),ft&8&&(T.disabled=$[3])},i:Tt,o:Tt,d($){$&&L(t),H&&H.d(),b=!1,Oe(v)}}}function Cv(r,t,e){let n;re(r,wt,A=>e(10,n=A));let s="",i="",a="",l=!1,u="";const d=async()=>{if(!s||!i||!a){e(4,u="All fields are required!");return}e(3,l=!0),e(4,u="");try{if(!(await Ce(yn(ne(Ut,"datas"),vn("title","==",s)))).empty){e(4,u="Title already exists! Please choose a different title.");return}await di(ne(Ut,"datas"),{title:s,value:i,explain:a,count:0}),e(0,s=""),e(1,i=""),e(2,a=""),bt(wt,n=0,n)}catch(A){console.error("Error adding document: ",A),e(4,u="Error adding document!")}finally{e(3,l=!1)}},f=()=>{e(0,s=""),e(1,i=""),e(2,a=""),e(4,u=""),bt(wt,n=0,n)};function m(){s=this.value,e(0,s)}function _(){i=this.value,e(1,i)}function I(){a=this.value,e(2,a)}return[s,i,a,l,u,d,f,m,_,I]}class kv extends Me{constructor(t){super(),Le(this,t,Cv,Pv,Ne,{})}}function Oc(r,t,e){const n=r.slice();return n[4]=t[e],n}function Mc(r){let t,e,n=r[4].title+"",s,i,a,l=r[4].value+"",u,d,f,m=r[4].explain+"",_,I,A,S,D="검색수:",U,G=r[4].count+"",B,K;return{c(){t=O("div"),e=O("h3"),s=ae(n),i=Q(),a=O("p"),u=ae(l),d=Q(),f=O("p"),_=ae(m),I=Q(),A=O("p"),S=O("strong"),S.textContent=D,U=Q(),B=ae(G),K=Q(),this.h()},l(j){t=M(j,"DIV",{class:!0});var z=Z(t);e=M(z,"H3",{class:!0});var T=Z(e);s=le(T,n),T.forEach(L),i=X(z),a=M(z,"P",{class:!0});var g=Z(a);u=le(g,l),g.forEach(L),d=X(z),f=M(z,"P",{class:!0});var y=Z(f);_=le(y,m),y.forEach(L),I=X(z),A=M(z,"P",{class:!0});var E=Z(A);S=M(E,"STRONG",{"data-svelte-h":!0}),mt(S)!=="svelte-14ncqy5"&&(S.textContent=D),U=X(E),B=le(E,G),E.forEach(L),K=X(z),z.forEach(L),this.h()},h(){C(e,"class","svelte-dttkti"),C(a,"class","svelte-dttkti"),C(f,"class","svelte-dttkti"),C(A,"class","count svelte-dttkti"),C(t,"class","box svelte-dttkti")},m(j,z){dt(j,t,z),k(t,e),k(e,s),k(t,i),k(t,a),k(a,u),k(t,d),k(t,f),k(f,_),k(t,I),k(t,A),k(A,S),k(A,U),k(A,B),k(t,K)},p(j,z){z&1&&n!==(n=j[4].title+"")&&Ae(s,n),z&1&&l!==(l=j[4].value+"")&&Ae(u,l),z&1&&m!==(m=j[4].explain+"")&&Ae(_,m),z&1&&G!==(G=j[4].count+"")&&Ae(B,G)},d(j){j&&L(t)}}}function Dv(r){let t,e,n,s,i,a="Main",l,u,d,f,m=ge(r[0]),_=[];for(let I=0;I<m.length;I+=1)_[I]=Mc(Oc(r,m,I));return{c(){t=O("div"),e=O("div"),n=Q(),s=O("div"),i=O("button"),i.textContent=a,l=Q(),u=O("div");for(let I=0;I<_.length;I+=1)_[I].c();this.h()},l(I){t=M(I,"DIV",{class:!0});var A=Z(t);e=M(A,"DIV",{id:!0,class:!0}),Z(e).forEach(L),n=X(A),s=M(A,"DIV",{class:!0});var S=Z(s);i=M(S,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(i)!=="svelte-8azga8"&&(i.textContent=a),S.forEach(L),l=X(A),u=M(A,"DIV",{class:!0});var D=Z(u);for(let U=0;U<_.length;U+=1)_[U].l(D);D.forEach(L),A.forEach(L),this.h()},h(){C(e,"id","bb"),C(e,"class","svelte-dttkti"),C(i,"class","close-button svelte-dttkti"),C(s,"class","close-button_div svelte-dttkti"),C(u,"class","container svelte-dttkti"),C(t,"class","bbd svelte-dttkti")},m(I,A){dt(I,t,A),k(t,e),k(t,n),k(t,s),k(s,i),k(t,l),k(t,u);for(let S=0;S<_.length;S+=1)_[S]&&_[S].m(u,null);d||(f=tt(i,"click",r[1]),d=!0)},p(I,[A]){if(A&1){m=ge(I[0]);let S;for(S=0;S<m.length;S+=1){const D=Oc(I,m,S);_[S]?_[S].p(D,A):(_[S]=Mc(D),_[S].c(),_[S].m(u,null))}for(;S<_.length;S+=1)_[S].d(1);_.length=m.length}},i:Tt,o:Tt,d(I){I&&L(t),xr(_,I),d=!1,f()}}}function Vv(r,t,e){let n,s;return re(r,wt,a=>e(2,n=a)),re(r,go,a=>e(0,s=a)),[s,()=>{bt(wt,n=0,n)}]}class Nv extends Me{constructor(t){super(),Le(this,t,Vv,Dv,Ne,{})}}function Lc(r){let t,e;return{c(){t=O("div"),e=ae(r[4]),this.h()},l(n){t=M(n,"DIV",{class:!0});var s=Z(t);e=le(s,r[4]),s.forEach(L),this.h()},h(){C(t,"class","error-message svelte-urqb75")},m(n,s){dt(n,t,s),k(t,e)},p(n,s){s&16&&Ae(e,n[4])},d(n){n&&L(t)}}}function Ov(r){let t,e,n,s,i="신조어",a,l,u,d,f,m="신조어 뜻",_,I,A,S,D,U="신조어의 설명",G,B,K,j,z,T,g,y,E,w="취소",b,v,H=r[4]&&Lc(r);return{c(){t=O("div"),e=O("div"),n=O("div"),s=O("label"),s.textContent=i,a=Q(),l=O("input"),u=Q(),d=O("div"),f=O("label"),f.textContent=m,_=Q(),I=O("input"),A=Q(),S=O("div"),D=O("label"),D.textContent=U,G=Q(),B=O("input"),K=Q(),H&&H.c(),j=Q(),z=O("div"),T=O("button"),g=ae("보내기"),y=Q(),E=O("button"),E.textContent=w,this.h()},l($){t=M($,"DIV",{class:!0});var ft=Z(t);e=M(ft,"DIV",{class:!0});var Y=Z(e);n=M(Y,"DIV",{class:!0});var ut=Z(n);s=M(ut,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),mt(s)!=="svelte-1xvfvjg"&&(s.textContent=i),a=X(ut),l=M(ut,"INPUT",{class:!0,type:!0,id:!0}),ut.forEach(L),u=X(Y),d=M(Y,"DIV",{class:!0});var J=Z(d);f=M(J,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),mt(f)!=="svelte-1iv6t5o"&&(f.textContent=m),_=X(J),I=M(J,"INPUT",{class:!0,type:!0,id:!0}),J.forEach(L),A=X(Y),S=M(Y,"DIV",{class:!0});var st=Z(S);D=M(st,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),mt(D)!=="svelte-lyiets"&&(D.textContent=U),G=X(st),B=M(st,"INPUT",{class:!0,type:!0,id:!0}),st.forEach(L),K=X(Y),H&&H.l(Y),j=X(Y),z=M(Y,"DIV",{class:!0});var at=Z(z);T=M(at,"BUTTON",{class:!0});var At=Z(T);g=le(At,"보내기"),At.forEach(L),y=X(at),E=M(at,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(E)!=="svelte-1fn0s3j"&&(E.textContent=w),at.forEach(L),Y.forEach(L),ft.forEach(L),this.h()},h(){C(s,"class","form-label svelte-urqb75"),C(s,"for","title"),C(l,"class","form-input svelte-urqb75"),C(l,"type","text"),C(l,"id","title"),C(n,"class","form-group svelte-urqb75"),C(f,"class","form-label svelte-urqb75"),C(f,"for","value"),C(I,"class","form-input svelte-urqb75"),C(I,"type","text"),C(I,"id","value"),C(d,"class","form-group svelte-urqb75"),C(D,"class","form-label svelte-urqb75"),C(D,"for","explain"),C(B,"class","form-input svelte-urqb75"),C(B,"type","text"),C(B,"id","explain"),C(S,"class","form-group svelte-urqb75"),C(T,"class","form-button svelte-urqb75"),T.disabled=r[3],C(E,"class","form-button cancel-button svelte-urqb75"),C(z,"class","form-buttons svelte-urqb75"),C(e,"class","form-content svelte-urqb75"),C(t,"class","form-container svelte-urqb75")},m($,ft){dt($,t,ft),k(t,e),k(e,n),k(n,s),k(n,a),k(n,l),_t(l,r[0]),k(e,u),k(e,d),k(d,f),k(d,_),k(d,I),_t(I,r[1]),k(e,A),k(e,S),k(S,D),k(S,G),k(S,B),_t(B,r[2]),k(e,K),H&&H.m(e,null),k(e,j),k(e,z),k(z,T),k(T,g),k(z,y),k(z,E),b||(v=[tt(l,"input",r[7]),tt(I,"input",r[8]),tt(B,"input",r[9]),tt(T,"click",r[5]),tt(E,"click",r[6])],b=!0)},p($,[ft]){ft&1&&l.value!==$[0]&&_t(l,$[0]),ft&2&&I.value!==$[1]&&_t(I,$[1]),ft&4&&B.value!==$[2]&&_t(B,$[2]),$[4]?H?H.p($,ft):(H=Lc($),H.c(),H.m(e,j)):H&&(H.d(1),H=null),ft&8&&(T.disabled=$[3])},i:Tt,o:Tt,d($){$&&L(t),H&&H.d(),b=!1,Oe(v)}}}function Mv(r,t,e){let n;re(r,wt,A=>e(10,n=A));let s="",i="",a="",l=!1,u="";const d=async()=>{if(!s||!i||!a){e(4,u="All fields are required!");return}e(3,l=!0),e(4,u="");try{if(!(await Ce(yn(ne(Ut,"beta"),vn("title","==",s)))).empty){e(4,u="Title already exists! Please choose a different title.");return}await di(ne(Ut,"beta"),{title:s,value:i,explain:a,count:0}),e(0,s=""),e(1,i=""),e(2,a=""),bt(wt,n=0,n)}catch(A){console.error("Error adding document: ",A),e(4,u="Error adding document!")}finally{e(3,l=!1)}},f=()=>{e(0,s=""),e(1,i=""),e(2,a=""),e(4,u=""),bt(wt,n=0,n)};function m(){s=this.value,e(0,s)}function _(){i=this.value,e(1,i)}function I(){a=this.value,e(2,a)}return[s,i,a,l,u,d,f,m,_,I]}class Lv extends Me{constructor(t){super(),Le(this,t,Mv,Ov,Ne,{})}}function xc(r,t,e){const n=r.slice();return n[7]=t[e],n[8]=t,n[9]=e,n}function Uc(r){let t,e,n,s,i,a,l,u,d,f,m="Click Me",_,I,A;function S(){r[2].call(e,r[8],r[9])}function D(){r[3].call(s,r[8],r[9])}function U(){r[4].call(a,r[8],r[9])}function G(){r[5].call(u,r[8],r[9])}function B(){return r[6](r[7])}return{c(){t=O("div"),e=O("input"),n=Q(),s=O("input"),i=Q(),a=O("input"),l=Q(),u=O("input"),d=Q(),f=O("button"),f.textContent=m,_=Q(),this.h()},l(K){t=M(K,"DIV",{class:!0});var j=Z(t);e=M(j,"INPUT",{type:!0,class:!0}),n=X(j),s=M(j,"INPUT",{type:!0,class:!0}),i=X(j),a=M(j,"INPUT",{type:!0,class:!0}),l=X(j),u=M(j,"INPUT",{type:!0,class:!0}),d=X(j),f=M(j,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(f)!=="svelte-gv7xxv"&&(f.textContent=m),_=X(j),j.forEach(L),this.h()},h(){C(e,"type","text"),C(e,"class","svelte-js9v41"),C(s,"type","text"),C(s,"class","svelte-js9v41"),C(a,"type","text"),C(a,"class","svelte-js9v41"),C(u,"type","number"),C(u,"class","svelte-js9v41"),C(f,"class","svelte-js9v41"),C(t,"class","item-box svelte-js9v41")},m(K,j){dt(K,t,j),k(t,e),_t(e,r[7].title),k(t,n),k(t,s),_t(s,r[7].value),k(t,i),k(t,a),_t(a,r[7].explain),k(t,l),k(t,u),_t(u,r[7].count),k(t,d),k(t,f),k(t,_),I||(A=[tt(e,"input",S),tt(s,"input",D),tt(a,"input",U),tt(u,"input",G),tt(f,"click",B)],I=!0)},p(K,j){r=K,j&1&&e.value!==r[7].title&&_t(e,r[7].title),j&1&&s.value!==r[7].value&&_t(s,r[7].value),j&1&&a.value!==r[7].explain&&_t(a,r[7].explain),j&1&&jc(u.value)!==r[7].count&&_t(u,r[7].count)},d(K){K&&L(t),I=!1,Oe(A)}}}function xv(r){let t,e=ge(r[0]),n=[];for(let s=0;s<e.length;s+=1)n[s]=Uc(xc(r,e,s));return{c(){t=O("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=M(s,"DIV",{class:!0});var i=Z(t);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach(L),this.h()},h(){C(t,"class","container svelte-js9v41")},m(s,i){dt(s,t,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null)},p(s,[i]){if(i&3){e=ge(s[0]);let a;for(a=0;a<e.length;a+=1){const l=xc(s,e,a);n[a]?n[a].p(l,i):(n[a]=Uc(l),n[a].c(),n[a].m(t,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=e.length}},i:Tt,o:Tt,d(s){s&&L(t),xr(n,s)}}}function Uv(r,t,e){let n=[];Lr(async()=>{const f=await Ce(ne(Ut,"beta"));e(0,n=f.docs.map(m=>({id:m.id,...m.data()})))});const s=async(f,m,_,I,A)=>{try{await di(ne(Ut,"datas"),{title:m,value:_,explain:I,count:A}),await ha(Qr(Ut,"beta",f)),console.log("Document successfully written and deleted!"),e(0,n=n.filter(S=>S.id!==f))}catch(S){console.error("Error adding or deleting document: ",S)}};function i(f,m){f[m].title=this.value,e(0,n)}function a(f,m){f[m].value=this.value,e(0,n)}function l(f,m){f[m].explain=this.value,e(0,n)}function u(f,m){f[m].count=jc(this.value),e(0,n)}return[n,s,i,a,l,u,f=>s(f.id,f.title,f.value,f.explain,f.count)]}class Fv extends Me{constructor(t){super(),Le(this,t,Uv,xv,Ne,{})}}function Bv(r){let t,e,n,s="Main",i,a,l,u,d,f,m="삭제",_,I;return{c(){t=O("main"),e=O("div"),n=O("button"),n.textContent=s,i=Q(),a=O("div"),l=O("input"),u=Q(),d=O("div"),f=O("button"),f.textContent=m,this.h()},l(A){t=M(A,"MAIN",{class:!0});var S=Z(t);e=M(S,"DIV",{class:!0});var D=Z(e);n=M(D,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(n)!=="svelte-8azga8"&&(n.textContent=s),D.forEach(L),i=X(S),a=M(S,"DIV",{style:!0});var U=Z(a);l=M(U,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),u=X(U),d=M(U,"DIV",{style:!0});var G=Z(d);f=M(G,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),mt(f)!=="svelte-1w89kx2"&&(f.textContent=m),G.forEach(L),U.forEach(L),S.forEach(L),this.h()},h(){C(n,"class","close-button svelte-mo15yd"),C(e,"class","close-button_div svelte-mo15yd"),C(l,"type","text"),C(l,"placeholder","Search..."),qe(l,"width","300px"),qe(l,"padding","10px"),qe(l,"font-size","16px"),C(l,"class","svelte-mo15yd"),qe(f,"padding","10px 20px"),qe(f,"font-size","16px"),C(f,"class","svelte-mo15yd"),qe(d,"margin-top","20px"),qe(a,"text-align","center"),qe(a,"margin-top","50px"),C(t,"class","svelte-mo15yd")},m(A,S){dt(A,t,S),k(t,e),k(e,n),k(t,i),k(t,a),k(a,l),_t(l,r[0]),k(a,u),k(a,d),k(d,f),_||(I=[tt(n,"click",r[2]),tt(l,"input",r[3]),tt(f,"click",r[1])],_=!0)},p(A,[S]){S&1&&l.value!==A[0]&&_t(l,A[0])},i:Tt,o:Tt,d(A){A&&L(t),_=!1,Oe(I)}}}function qv(r,t,e){let n;re(r,wt,u=>e(4,n=u));let s="";async function i(){if(!s.trim()){alert("Please enter a search term");return}try{const u=yn(ne(Ut,"datas"),vn("title","==",s)),d=await Ce(u),f=[];d.forEach(m=>{f.push(ha(Qr(Ut,"datas",m.id)))}),await Promise.all(f),alert("값이 삭제됨"),e(0,s="")}catch(u){console.error("Error deleting documents: ",u),alert("Error deleting documents")}}const a=()=>{bt(wt,n=0,n)};function l(){s=this.value,e(0,s)}return[s,i,a,l]}class jv extends Me{constructor(t){super(),Le(this,t,qv,Bv,Ne,{})}}function Fc(r){let t,e;return{c(){t=O("div"),e=ae(r[1]),this.h()},l(n){t=M(n,"DIV",{class:!0});var s=Z(t);e=le(s,r[1]),s.forEach(L),this.h()},h(){C(t,"class","error svelte-171w347")},m(n,s){dt(n,t,s),k(t,e)},p(n,s){s&2&&Ae(e,n[1])},d(n){n&&L(t)}}}function zv(r){let t,e,n,s="Main",i,a,l,u,d="Submit",f,m,_,I=r[1]&&Fc(r);return{c(){t=O("div"),e=O("div"),n=O("button"),n.textContent=s,i=Q(),a=O("input"),l=Q(),u=O("button"),u.textContent=d,f=Q(),I&&I.c(),this.h()},l(A){t=M(A,"DIV",{class:!0});var S=Z(t);e=M(S,"DIV",{class:!0});var D=Z(e);n=M(D,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(n)!=="svelte-8azga8"&&(n.textContent=s),D.forEach(L),i=X(S),a=M(S,"INPUT",{type:!0,placeholder:!0,class:!0}),l=X(S),u=M(S,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(u)!=="svelte-1gle3be"&&(u.textContent=d),f=X(S),I&&I.l(S),S.forEach(L),this.h()},h(){C(n,"class","close-button svelte-171w347"),C(e,"class","close-button_div svelte-171w347"),C(a,"type","text"),C(a,"placeholder","신고내용 입력 (50자 까지)"),C(a,"class","svelte-171w347"),C(u,"class","svelte-171w347"),C(t,"class","container svelte-171w347")},m(A,S){dt(A,t,S),k(t,e),k(e,n),k(t,i),k(t,a),_t(a,r[0]),k(t,l),k(t,u),k(t,f),I&&I.m(t,null),m||(_=[tt(n,"click",r[3]),tt(a,"input",r[4]),tt(u,"click",r[2])],m=!0)},p(A,[S]){S&1&&a.value!==A[0]&&_t(a,A[0]),A[1]?I?I.p(A,S):(I=Fc(A),I.c(),I.m(t,null)):I&&(I.d(1),I=null)},i:Tt,o:Tt,d(A){A&&L(t),I&&I.d(),m=!1,Oe(_)}}}function $v(r,t,e){let n;re(r,wt,d=>e(6,n=d));let s="",i="";Lr(()=>{const d=to();Co(d,f=>{f&&f.email})});const a=async()=>{if(s.length>50){e(1,i="50자를 넘지 말아주세요");return}const f=to().currentUser;if(!f){e(1,i="내용을 적어주세요");return}try{await di(ne(Ut,"report"),{user:f.email,contents:s}),e(0,s=""),e(1,i="")}catch(m){e(1,i="Error adding document: "+m.message)}},l=()=>{bt(wt,n=0,n)};function u(){s=this.value,e(0,s)}return[s,i,a,l,u]}class Hv extends Me{constructor(t){super(),Le(this,t,$v,zv,Ne,{})}}function Bc(r,t,e){const n=r.slice();return n[8]=t[e],n[9]=t,n[10]=e,n}function qc(r){let t,e,n,s,i,a,l="Click",u,d,f;function m(){r[3].call(e,r[9],r[10])}function _(){r[4].call(s,r[9],r[10])}function I(){return r[5](r[8])}return{c(){t=O("div"),e=O("input"),n=Q(),s=O("input"),i=Q(),a=O("button"),a.textContent=l,u=Q(),this.h()},l(A){t=M(A,"DIV",{class:!0});var S=Z(t);e=M(S,"INPUT",{type:!0,class:!0}),n=X(S),s=M(S,"INPUT",{type:!0,class:!0}),i=X(S),a=M(S,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(a)!=="svelte-11mzix3"&&(a.textContent=l),u=X(S),S.forEach(L),this.h()},h(){C(e,"type","text"),e.readOnly=!0,C(e,"class","svelte-1evkr3z"),C(s,"type","text"),s.readOnly=!0,C(s,"class","svelte-1evkr3z"),C(a,"class","svelte-1evkr3z"),C(t,"class","item-box svelte-1evkr3z")},m(A,S){dt(A,t,S),k(t,e),_t(e,r[8].user),k(t,n),k(t,s),_t(s,r[8].contents),k(t,i),k(t,a),k(t,u),d||(f=[tt(e,"input",m),tt(s,"input",_),tt(a,"click",I)],d=!0)},p(A,S){r=A,S&1&&e.value!==r[8].user&&_t(e,r[8].user),S&1&&s.value!==r[8].contents&&_t(s,r[8].contents)},d(A){A&&L(t),d=!1,Oe(f)}}}function Gv(r){let t,e,n="Main",s,i,a,l,u=ge(r[0]),d=[];for(let f=0;f<u.length;f+=1)d[f]=qc(Bc(r,u,f));return{c(){t=O("div"),e=O("button"),e.textContent=n,s=Q(),i=O("div");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){t=M(f,"DIV",{class:!0});var m=Z(t);e=M(m,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(e)!=="svelte-8azga8"&&(e.textContent=n),m.forEach(L),s=X(f),i=M(f,"DIV",{class:!0});var _=Z(i);for(let I=0;I<d.length;I+=1)d[I].l(_);_.forEach(L),this.h()},h(){C(e,"class","close-button svelte-1evkr3z"),C(t,"class","close-button_div svelte-1evkr3z"),C(i,"class","container svelte-1evkr3z")},m(f,m){dt(f,t,m),k(t,e),dt(f,s,m),dt(f,i,m);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(i,null);a||(l=tt(e,"click",r[2]),a=!0)},p(f,[m]){if(m&3){u=ge(f[0]);let _;for(_=0;_<u.length;_+=1){const I=Bc(f,u,_);d[_]?d[_].p(I,m):(d[_]=qc(I),d[_].c(),d[_].m(i,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=u.length}},i:Tt,o:Tt,d(f){f&&(L(t),L(s),L(i)),xr(d,f),a=!1,l()}}}function Wv(r,t,e){let n;re(r,wt,m=>e(6,n=m));let s=[];Lr(async()=>{await i()});async function i(){const m=await Ce(ne(Ut,"report"));e(0,s=m.docs.map(_=>({id:_.id,..._.data()})))}async function a(m){try{console.log(`Attempting to delete documents with title: ${m}`);const _=yn(ne(Ut,"report"),vn("contents","==",m)),I=await Ce(_);if(I.empty){console.log("No matching documents found"),alert("No matching documents found");return}const A=[];I.forEach(S=>{console.log(`Deleting document with ID: ${S.id}`),A.push(ha(Qr(Ut,"report",S.id)))}),await Promise.all(A),alert("값이 삭제됨"),await i()}catch(_){console.error("Error deleting documents: ",_),alert("Error deleting documents")}}const l=()=>{bt(wt,n=0,n)};function u(m,_){m[_].user=this.value,e(0,s)}function d(m,_){m[_].contents=this.value,e(0,s)}return[s,a,l,u,d,m=>a(m.contents)]}class Kv extends Me{constructor(t){super(),Le(this,t,Wv,Gv,Ne,{})}}function Qv(r){let t,e,n,s="로그인",i,a,l="Google",u,d;return{c(){t=O("div"),e=O("div"),n=O("h1"),n.textContent=s,i=Q(),a=O("button"),a.textContent=l,this.h()},l(f){t=M(f,"DIV",{id:!0,class:!0});var m=Z(t);e=M(m,"DIV",{class:!0});var _=Z(e);n=M(_,"H1",{class:!0,"data-svelte-h":!0}),mt(n)!=="svelte-1bvi8l2"&&(n.textContent=s),i=X(_),a=M(_,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(a)!=="svelte-g8tqx5"&&(a.textContent=l),_.forEach(L),m.forEach(L),this.h()},h(){C(n,"class","svelte-gqutdq"),C(a,"class","svelte-gqutdq"),C(e,"class","login-container svelte-gqutdq"),C(t,"id","L_body"),C(t,"class","svelte-gqutdq")},m(f,m){dt(f,t,m),k(t,e),k(e,n),k(e,i),k(e,a),u||(d=tt(a,"click",r[3]),u=!0)},p:Tt,i:Tt,o:Tt,d(f){f&&L(t),u=!1,d()}}}function Xv(r){let t,e,n,s;const i=[iE,sE,rE,nE,eE,tE,Zv,Yv],a=[];function l(u,d){return u[2]==0?0:u[2]==1?1:u[2]==2?2:u[2]==3?3:u[2]==4?4:u[2]==5?5:u[2]==6?6:u[2]==7?7:-1}return~(t=l(r))&&(e=a[t]=i[t](r)),{c(){e&&e.c(),n=fl()},l(u){e&&e.l(u),n=fl()},m(u,d){~t&&a[t].m(u,d),dt(u,n,d),s=!0},p(u,d){let f=t;t=l(u),t!==f&&(e&&($c(),se(a[f],1,1,()=>{a[f]=null}),zc()),~t?(e=a[t],e||(e=a[t]=i[t](u),e.c()),ie(e,1),e.m(n.parentNode,n)):e=null)},i(u){s||(ie(e),s=!0)},o(u){se(e),s=!1},d(u){u&&L(n),~t&&a[t].d(u)}}}function Jv(r){let t,e="[ Developer : G37 ]";return{c(){t=O("div"),t.textContent=e,this.h()},l(n){t=M(n,"DIV",{class:!0,"data-svelte-h":!0}),mt(t)!=="svelte-67okfr"&&(t.textContent=e),this.h()},h(){C(t,"class","loading-screen svelte-gqutdq")},m(n,s){dt(n,t,s)},p:Tt,i:Tt,o:Tt,d(n){n&&L(t)}}}function Yv(r){let t,e;return t=new Kv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function Zv(r){let t,e;return t=new Hv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function tE(r){let t,e;return t=new jv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function eE(r){let t,e;return t=new Fv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function nE(r){let t,e;return t=new Lv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function rE(r){let t,e;return t=new Nv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function sE(r){let t,e;return t=new kv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function iE(r){let t,e;return t=new Sv({}),{c(){en(t.$$.fragment)},l(n){nn(t.$$.fragment,n)},m(n,s){rn(t,n,s),e=!0},i(n){e||(ie(t.$$.fragment,n),e=!0)},o(n){se(t.$$.fragment,n),e=!1},d(n){sn(t,n)}}}function oE(r){let t,e,n,s;const i=[Jv,Xv,Qv],a=[];function l(u,d){return u[1]?0:u[0]?1:2}return e=l(r),n=a[e]=i[e](r),{c(){t=O("main"),n.c(),this.h()},l(u){t=M(u,"MAIN",{class:!0});var d=Z(t);n.l(d),d.forEach(L),this.h()},h(){C(t,"class","svelte-gqutdq")},m(u,d){dt(u,t,d),a[e].m(t,null),s=!0},p(u,[d]){let f=e;e=l(u),e===f?a[e].p(u,d):($c(),se(a[f],1,1,()=>{a[f]=null}),zc(),n=a[e],n?n.p(u,d):(n=a[e]=i[e](u),n.c()),ie(n,1),n.m(t,null))},i(u){s||(ie(n),s=!0)},o(u){se(n),s=!1},d(u){u&&L(t),a[e].d()}}}function aE(r,t,e){let n;re(r,wt,l=>e(2,n=l)),console.log(n);let s=null,i=!0;return Lr(()=>{Co($s,l=>{e(0,s=l),e(1,i=!1)})}),[s,i,n,async()=>{const l=new we;try{await Em($s,l)}catch(u){console.error("Error signing in:",u)}}]}class pE extends Me{constructor(t){super(),Le(this,t,aE,oE,Ne,{})}}export{pE as component};
