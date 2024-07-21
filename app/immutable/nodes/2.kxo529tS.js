import{s as wt,x as Hd,n as ve,r as At,b as ot,o as Tn,i as Gd,y as we,z as Wd}from"../chunks/scheduler.li6PcnJj.js";import{S as bt,i as Rt,e as D,s as j,c as V,d as G,h as z,y as Z,g as O,o as S,j as J,k as b,z as K,A as wn,b as Re,f as Se,l as ze,B as Kd,C as ye,D as Yn,E as au,p as ln,a as ft,n as lu,t as pt,q as cu,m as wl,u as Vt,v as Nt,w as Ot,x as xt}from"../chunks/index.Chm_IXa_.js";import{w as hs}from"../chunks/index.ChQ1qdP7.js";function at(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var Al={};/**
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
 */const uu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,d=s>>2,m=(s&3)<<4|l>>4;let p=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(p=64)),r.push(t[d],t[m],t[p],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new Jd;const p=s<<2|l>>4;if(r.push(p),h!==64){const w=l<<4&240|h>>2;if(r.push(w),m!==64){const E=h<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yd=function(n){const e=uu(n);return hu.encodeByteArray(e,!0)},Hi=function(n){return Yd(n).replace(/\./g,"")},du=function(n){try{return hu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zd=()=>Xd().__FIREBASE_DEFAULTS__,ef=()=>{if(typeof process>"u"||typeof Al>"u")return;const n=Al.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&du(n[1]);return e&&JSON.parse(e)},ds=()=>{try{return Zd()||ef()||tf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fu=n=>{var e,t;return(t=(e=ds())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nf=n=>{const e=fu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},pu=()=>{var n;return(n=ds())===null||n===void 0?void 0:n.config},mu=n=>{var e;return(e=ds())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function sf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Hi(JSON.stringify(t)),Hi(JSON.stringify(a)),""].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function af(){var n;const e=(n=ds())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uf(){const n=Ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hf(){return!af()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function df(){try{return typeof indexedDB=="object"}catch{return!1}}function ff(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const pf="FirebaseError";class en extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pf,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?mf(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new en(i,l,r)}}function mf(n,e){return n.replace(gf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gf=/\{\$([^}]+)}/g;function _f(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(bl(s)&&bl(a)){if(!Gi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function bl(n){return n!==null&&typeof n=="object"}/**
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
 */function ti(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vf(n,e){const t=new yf(n,e);return t.subscribe.bind(t)}class yf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Xs),i.error===void 0&&(i.error=Xs),i.complete===void 0&&(i.complete=Xs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xs(){}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class xn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class If{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wf(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tf(n){return n===Pn?void 0:n}function wf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new If(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const bf={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Rf=le.INFO,Sf={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Cf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Sf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=Rf,this._logHandler=Cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Pf=(n,e)=>e.some(t=>n instanceof t);let Rl,Sl;function kf(){return Rl||(Rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Df(){return Sl||(Sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gu=new WeakMap,co=new WeakMap,_u=new WeakMap,Zs=new WeakMap,xo=new WeakMap;function Vf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(pn(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gu.set(t,n)}).catch(()=>{}),xo.set(e,n),e}function Nf(n){if(co.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});co.set(n,e)}let uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return co.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_u.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Of(n){uo=n(uo)}function xf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(eo(this),e,...t);return _u.set(r,e.sort?e.sort():[e]),pn(r)}:Df().includes(n)?function(...e){return n.apply(eo(this),e),pn(gu.get(this))}:function(...e){return pn(n.apply(eo(this),e))}}function Mf(n){return typeof n=="function"?xf(n):(n instanceof IDBTransaction&&Nf(n),Pf(n,kf())?new Proxy(n,uo):n)}function pn(n){if(n instanceof IDBRequest)return Vf(n);if(Zs.has(n))return Zs.get(n);const e=Mf(n);return e!==n&&(Zs.set(n,e),xo.set(e,n)),e}const eo=n=>xo.get(n);function Lf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=pn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(pn(a.result),c.oldVersion,c.newVersion,pn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Uf=["get","getKey","getAll","getAllKeys","count"],Ff=["put","add","delete","clear"],to=new Map;function Cl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(to.get(e))return to.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ff.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uf.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return to.set(e,s),s}Of(n=>({...n,get:(e,t,r)=>Cl(e,t)||n.get(e,t,r),has:(e,t)=>!!Cl(e,t)||n.has(e,t)}));/**
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
 */class Bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ho="@firebase/app",Pl="0.10.5";/**
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
 */const Mn=new Oo("@firebase/app"),jf="@firebase/app-compat",zf="@firebase/analytics-compat",$f="@firebase/analytics",Hf="@firebase/app-check-compat",Gf="@firebase/app-check",Wf="@firebase/auth",Kf="@firebase/auth-compat",Qf="@firebase/database",Jf="@firebase/database-compat",Yf="@firebase/functions",Xf="@firebase/functions-compat",Zf="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",ip="@firebase/performance-compat",sp="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",lp="@firebase/storage-compat",cp="@firebase/firestore",up="@firebase/vertexai-preview",hp="@firebase/firestore-compat",dp="firebase",fp="10.12.2";/**
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
 */const fo="[DEFAULT]",pp={[ho]:"fire-core",[jf]:"fire-core-compat",[$f]:"fire-analytics",[zf]:"fire-analytics-compat",[Gf]:"fire-app-check",[Hf]:"fire-app-check-compat",[Wf]:"fire-auth",[Kf]:"fire-auth-compat",[Qf]:"fire-rtdb",[Jf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Xf]:"fire-fn-compat",[Zf]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[ip]:"fire-perf-compat",[sp]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[lp]:"fire-gcs-compat",[cp]:"fire-fst",[hp]:"fire-fst-compat",[up]:"fire-vertex","fire-js":"fire-js",[dp]:"fire-js-all"};/**
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
 */const Wi=new Map,mp=new Map,po=new Map;function kl(n,e){try{n.container.addComponent(e)}catch(t){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function or(n){const e=n.name;if(po.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;po.set(e,n);for(const t of Wi.values())kl(t,n);for(const t of mp.values())kl(t,n);return!0}function Mo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Gt(n){return n.settings!==void 0}/**
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
 */const gp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new ei("app","Firebase",gp);/**
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
 */class _p{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=fp;function vu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(t||(t=pu()),!t)throw mn.create("no-options");const s=Wi.get(i);if(s){if(Gi(t,s.options)&&Gi(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const a=new Af(i);for(const c of po.values())a.addComponent(c);const l=new _p(t,r,a);return Wi.set(i,l),l}function yu(n=fo){const e=Wi.get(n);if(!e&&n===fo&&pu())return vu();if(!e)throw mn.create("no-app",{appName:n});return e}function gn(n,e,t){var r;let i=(r=pp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(l.join(" "));return}or(new xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vp="firebase-heartbeat-database",yp=1,Hr="firebase-heartbeat-store";let no=null;function Eu(){return no||(no=Lf(vp,yp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hr)}catch(t){console.warn(t)}}}}).catch(n=>{throw mn.create("idb-open",{originalErrorMessage:n.message})})),no}async function Ep(n){try{const t=(await Eu()).transaction(Hr),r=await t.objectStore(Hr).get(Iu(n));return await t.done,r}catch(e){if(e instanceof en)Mn.warn(e.message);else{const t=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(t.message)}}}async function Dl(n,e){try{const r=(await Eu()).transaction(Hr,"readwrite");await r.objectStore(Hr).put(e,Iu(n)),await r.done}catch(t){if(t instanceof en)Mn.warn(t.message);else{const r=mn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(r.message)}}}function Iu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ip=1024,Tp=30*24*60*60*1e3;class wp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vl(),{heartbeatsToSend:r,unsentEntries:i}=Ap(this._heartbeatsCache.heartbeats),s=Hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vl(){return new Date().toISOString().substring(0,10)}function Ap(n,e=Ip){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Nl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Nl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return df()?ff().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ep(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nl(n){return Hi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Rp(n){or(new xn("platform-logger",e=>new Bf(e),"PRIVATE")),or(new xn("heartbeat",e=>new wp(e),"PRIVATE")),gn(ho,Pl,n),gn(ho,Pl,"esm2017"),gn("fire-js","")}Rp("");var Sp="firebase",Cp="10.12.2";/**
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
 */gn(Sp,Cp,"app");function Lo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Tu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pp=Tu,wu=new ei("auth","Firebase",Tu());/**
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
 */const Ki=new Oo("@firebase/auth");function kp(n,...e){Ki.logLevel<=le.WARN&&Ki.warn(`Auth (${gr}): ${n}`,...e)}function Mi(n,...e){Ki.logLevel<=le.ERROR&&Ki.error(`Auth (${gr}): ${n}`,...e)}/**
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
 */function qt(n,...e){throw Fo(n,...e)}function Pt(n,...e){return Fo(n,...e)}function Uo(n,e,t){const r=Object.assign(Object.assign({},Pp()),{[e]:t});return new ei("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return Uo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(n,"argument-error"),Uo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return wu.create(n,...e)}function ee(n,e,...t){if(!n)throw Fo(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mi(e),new Error(e)}function Jt(n,e){n||Wt(e)}/**
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
 */function mo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vp(){return Ol()==="http:"||Ol()==="https:"}function Ol(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Np(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||lf()||"connection"in navigator)?navigator.onLine:!0}function Op(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ni{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jt(t>e,"Short delay should be less than long delay!"),this.isMobile=of()||cf()}get(){return Np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bo(n,e){Jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Au{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mp=new ni(3e4,6e4);function qo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _r(n,e,t,r,i={}){return bu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=ti(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Au.fetch()(Ru(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function bu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xp),e);try{const i=new Up(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Pi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Pi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Pi(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Uo(n,d,h);qt(n,d)}}catch(i){if(i instanceof en)throw i;qt(n,"network-request-failed",{message:String(i)})}}async function Lp(n,e,t,r,i={}){const s=await _r(n,e,t,r,i);return"mfaPendingCredential"in s&&qt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ru(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Bo(n.config,i):`${n.config.apiScheme}://${i}`}class Up{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),Mp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Pt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Fp(n,e){return _r(n,"POST","/v1/accounts:delete",e)}async function Su(n,e){return _r(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bp(n,e=!1){const t=Ke(n),r=await t.getIdToken(e),i=jo(r);ee(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qr(ro(i.auth_time)),issuedAtTime:qr(ro(i.iat)),expirationTime:qr(ro(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ro(n){return Number(n)*1e3}function jo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=du(t);return i?JSON.parse(i):(Mi("Failed to decode base64 JWT payload"),null)}catch(i){return Mi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xl(n){const e=jo(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof en&&qp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qr(this.lastLoginAt),this.creationTime=qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Gr(n,Su(t,{idToken:r}));ee(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Cu(s.providerUserInfo):[],l=$p(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new go(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function zp(n){const e=Ke(n);await Qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $p(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cu(n){return n.map(e=>{var{providerId:t}=e,r=Lo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Hp(n,e){const t=await bu(n,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Ru(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Au.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Gp(n,e){return _r(n,"POST","/v2/accounts:revokeToken",qo(n,e))}/**
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
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=xl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Hp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new tr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function cn(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Lo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new go(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bp(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Gr(this,Fp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,d;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,w=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,E=(a=t.photoURL)!==null&&a!==void 0?a:void 0,A=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:B,isAnonymous:$,providerData:M,stsTokenManager:y}=t;ee(x&&y,e,"internal-error");const _=tr.fromJSON(this.name,y);ee(typeof x=="string",e,"internal-error"),cn(m,e.name),cn(p,e.name),ee(typeof B=="boolean",e,"internal-error"),ee(typeof $=="boolean",e,"internal-error"),cn(w,e.name),cn(E,e.name),cn(A,e.name),cn(P,e.name),cn(U,e.name),cn(F,e.name);const v=new Kt({uid:x,auth:e,email:p,emailVerified:B,displayName:m,isAnonymous:$,photoURL:E,phoneNumber:w,tenantId:A,stsTokenManager:_,createdAt:U,lastLoginAt:F});return M&&Array.isArray(M)&&(v.providerData=M.map(I=>Object.assign({},I))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new tr;i.updateFromServerResponse(t);const s=new Kt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Cu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new tr;l.updateFromIdToken(r);const c=new Kt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new go(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const Ml=new Map;function Qt(n){Jt(n instanceof Function,"Expected a class definition");let e=Ml.get(n);return e?(Jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ml.set(n,e),e)}/**
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
 */class Pu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pu.type="NONE";const Ll=Pu;/**
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
 */function Li(n,e,t){return`firebase:${n}:${e}:${t}`}class nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,s),this.fullPersistenceKey=Li("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nr(Qt(Ll),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Qt(Ll);const a=Li(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){const m=Kt._fromJSON(e,d);h!==s&&(l=m),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new nr(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new nr(s,e,r))}}/**
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
 */function Ul(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ou(e))return"Blackberry";if(xu(e))return"Webos";if(zo(e))return"Safari";if((e.includes("chrome/")||Du(e))&&!e.includes("edge/"))return"Chrome";if(Nu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ku(n=Ze()){return/firefox\//i.test(n)}function zo(n=Ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Du(n=Ze()){return/crios\//i.test(n)}function Vu(n=Ze()){return/iemobile/i.test(n)}function Nu(n=Ze()){return/android/i.test(n)}function Ou(n=Ze()){return/blackberry/i.test(n)}function xu(n=Ze()){return/webos/i.test(n)}function fs(n=Ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wp(n=Ze()){var e;return fs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kp(){return uf()&&document.documentMode===10}function Mu(n=Ze()){return fs(n)||Nu(n)||xu(n)||Ou(n)||/windows phone/i.test(n)||Vu(n)}function Qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Lu(n,e=[]){let t;switch(n){case"Browser":t=Ul(Ze());break;case"Worker":t=`${Ul(Ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gr}/${r}`}/**
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
 */class Jp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Yp(n,e={}){return _r(n,"GET","/v2/passwordPolicy",qo(n,e))}/**
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
 */const Xp=6;class Zp{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Xp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class em{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fl(this),this.idTokenSubscription=new Fl(this),this.beforeStateQueue=new Jp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Su(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Gt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Op()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Vn(this));const t=e?Ke(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yp(this),t=new Zp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qt(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ps(n){return Ke(n)}class Fl{constructor(e){this.auth=e,this.observer=null,this.addObserver=vf(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tm(n){$o=n}function nm(n){return $o.loadJS(n)}function rm(){return $o.gapiScript}function im(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sm(n,e){const t=Mo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Gi(s,e??{}))return i;qt(i,"already-initialized")}return t.initialize({options:e})}function om(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function am(n,e,t){const r=ps(n);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Uu(e),{host:a,port:l}=lm(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),cm()}function Uu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lm(n){const e=Uu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Bl(a)}}}function Bl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
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
 */async function rr(n,e){return Lp(n,"POST","/v1/accounts:signInWithIdp",qo(n,e))}/**
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
 */const um="http://localhost";class Ln extends Fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Lo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ln(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rr(e,t)}buildRequest(){const e={requestUri:um,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ti(t)}return e}}/**
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
 */class Ho{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ri extends Ho{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends ri{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class Ht extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
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
 */class hn extends ri{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class dn extends ri{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return dn.credential(t,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Kt._fromIdTokenResponse(e,r,i),a=ql(r);return new ar({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ql(r);return new ar({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ji extends en{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ji(e,t,r,i)}}function Bu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(n,s,e,r):s})}async function hm(n,e,t=!1){const r=await Gr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ar._forOperation(n,"link",r)}/**
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
 */async function dm(n,e,t=!1){const{auth:r}=n;if(Gt(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const s=await Gr(n,Bu(r,i,e,n),t);ee(s.idToken,r,"internal-error");const a=jo(s.idToken);ee(a,r,"internal-error");const{sub:l}=a;return ee(n.uid===l,r,"user-mismatch"),ar._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
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
 */async function fm(n,e,t=!1){if(Gt(n.app))return Promise.reject(Vn(n));const r="signIn",i=await Bu(n,r,e),s=await ar._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function pm(n,e,t,r){return Ke(n).onIdTokenChanged(e,t,r)}function mm(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function Go(n,e,t,r){return Ke(n).onAuthStateChanged(e,t,r)}function gm(n){return Ke(n).signOut()}const Yi="__sak";/**
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
 */class qu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _m(){const n=Ze();return zo(n)||fs(n)}const vm=1e3,ym=10;class ju extends qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_m()&&Qp(),this.fallbackToPolling=Mu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Kp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ym):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ju.type="LOCAL";const Em=ju;/**
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
 */class zu extends qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zu.type="SESSION";const $u=zu;/**
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
 */function Im(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await Im(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
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
 */function Wo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Tm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=Wo("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Lt(){return window}function wm(n){Lt().location.href=n}/**
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
 */function Hu(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function Am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Rm(){return Hu()?self:null}/**
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
 */const Gu="firebaseLocalStorageDb",Sm=1,Xi="firebaseLocalStorage",Wu="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gs(n,e){return n.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function Cm(){const n=indexedDB.deleteDatabase(Gu);return new ii(n).toPromise()}function _o(){const n=indexedDB.open(Gu,Sm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xi,{keyPath:Wu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xi)?e(r):(r.close(),await Cm(),e(await _o()))})})}async function jl(n,e,t){const r=gs(n,!0).put({[Wu]:e,value:t});return new ii(r).toPromise()}async function Pm(n,e){const t=gs(n,!1).get(e),r=await new ii(t).toPromise();return r===void 0?null:r.value}function zl(n,e){const t=gs(n,!0).delete(e);return new ii(t).toPromise()}const km=800,Dm=3;class Ku{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _o(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Dm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(Rm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Am(),!this.activeServiceWorker)return;this.sender=new Tm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _o();return await jl(e,Yi,"1"),await zl(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Pm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gs(i,!1).getAll();return new ii(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ku.type="LOCAL";const Vm=Ku;new ni(3e4,6e4);/**
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
 */function Qu(n,e){return e?Qt(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ko extends Fu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nm(n){return fm(n.auth,new Ko(n),n.bypassAuthState)}function Om(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),dm(t,new Ko(n),n.bypassAuthState)}async function xm(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),hm(t,new Ko(n),n.bypassAuthState)}/**
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
 */class Ju{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nm;case"linkViaPopup":case"linkViaRedirect":return xm;case"reauthViaPopup":case"reauthViaRedirect":return Om;default:qt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mm=new ni(2e3,1e4);async function Lm(n,e,t){if(Gt(n.app))return Promise.reject(Pt(n,"operation-not-supported-in-this-environment"));const r=ps(n);Dp(n,e,Ho);const i=Qu(r,t);return new kn(r,"signInViaPopup",e,i).executeNotNull()}class kn extends Ju{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mm.get())};e()}}kn.currentPopupAction=null;/**
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
 */const Um="pendingRedirect",Ui=new Map;class Fm extends Ju{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ui.get(this.auth._key());if(!e){try{const r=await Bm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ui.set(this.auth._key(),e)}return this.bypassAuthState||Ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bm(n,e){const t=zm(e),r=jm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function qm(n,e){Ui.set(n._key(),e)}function jm(n){return Qt(n._redirectPersistence)}function zm(n){return Li(Um,n.config.apiKey,n.name)}async function $m(n,e,t=!1){if(Gt(n.app))return Promise.reject(Vn(n));const r=ps(n),i=Qu(r,e),a=await new Fm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Hm=10*60*1e3;class Gm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Pt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has($l(e))}saveEventToCache(e){this.cachedEventUids.add($l(e)),this.lastProcessedEventTime=Date.now()}}function $l(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yu(n);default:return!1}}/**
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
 */async function Km(n,e={}){return _r(n,"GET","/v1/projects",e)}/**
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
 */const Qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jm=/^https?/;async function Ym(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Km(n);for(const t of e)try{if(Xm(t))return}catch{}qt(n,"unauthorized-domain")}function Xm(n){const e=mo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Jm.test(t))return!1;if(Qm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Zm=new ni(3e4,6e4);function Hl(){const n=Lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eg(n){return new Promise((e,t)=>{var r,i,s;function a(){Hl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hl(),t(Pt(n,"network-request-failed"))},timeout:Zm.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)a();else{const l=im("iframefcb");return Lt()[l]=()=>{gapi.load?a():t(Pt(n,"network-request-failed"))},nm(`${rm()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function tg(n){return Fi=Fi||eg(n),Fi}/**
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
 */const ng=new ni(5e3,15e3),rg="__/auth/iframe",ig="emulator/auth/iframe",sg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ag(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bo(e,ig):`https://${n.config.authDomain}/${rg}`,r={apiKey:e.apiKey,appName:n.name,v:gr},i=og.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ti(r).slice(1)}`}async function lg(n){const e=await tg(n),t=Lt().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:ag(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Pt(n,"network-request-failed"),l=Lt().setTimeout(()=>{s(a)},ng.get());function c(){Lt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ug=500,hg=600,dg="_blank",fg="http://localhost";class Gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pg(n,e,t,r=ug,i=hg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},cg),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Ze().toLowerCase();t&&(l=Du(h)?dg:t),ku(h)&&(e=e||fg,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[w,E])=>`${p}${w}=${E},`,"");if(Wp(h)&&l!=="_self")return mg(e||"",l),new Gl(null);const m=window.open(e||"",l,d);ee(m,n,"popup-blocked");try{m.focus()}catch{}return new Gl(m)}function mg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const gg="__/auth/handler",_g="emulator/auth/handler",vg=encodeURIComponent("fac");async function Wl(n,e,t,r,i,s){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gr,eventId:i};if(e instanceof Ho){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",_f(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(e instanceof ri){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${vg}=${encodeURIComponent(c)}`:"";return`${yg(n)}?${ti(l).slice(1)}${h}`}function yg({config:n}){return n.emulator?Bo(n,_g):`https://${n.authDomain}/${gg}`}/**
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
 */const io="webStorageSupport";class Eg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=$m,this._overrideRedirectResult=qm}async _openPopup(e,t,r,i){var s;Jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Wl(e,t,r,mo(),i);return pg(e,a,Wo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Wl(e,t,r,mo(),i);return wm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lg(e),r=new Gm(e);return t.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(io,{type:io},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[io];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ym(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mu()||zo()||fs()}}const Ig=Eg;var Kl="@firebase/auth",Ql="1.7.4";/**
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
 */class Tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ag(n){or(new xn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lu(n)},h=new em(r,i,s,c);return om(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),or(new xn("auth-internal",e=>{const t=ps(e.getProvider("auth").getImmediate());return(r=>new Tg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Kl,Ql,wg(n)),gn(Kl,Ql,"esm2017")}/**
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
 */const bg=5*60,Rg=mu("authIdTokenMaxAge")||bg;let Jl=null;const Sg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Rg)return;const i=t==null?void 0:t.token;Jl!==i&&(Jl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zi(n=yu()){const e=Mo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sm(n,{popupRedirectResolver:Ig,persistence:[Vm,Em,$u]}),r=mu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Sg(s.toString());mm(t,a,()=>a(t.currentUser)),pm(t,l=>a(l))}}const i=fu("auth");return i&&am(t,`http://${i}`),t}function Cg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Pt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Cg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ag("Browser");var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,Xu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,_){function v(){}v.prototype=_.prototype,y.D=_.prototype,y.prototype=new v,y.prototype.constructor=y,y.C=function(I,R,C){for(var T=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)T[ie-2]=arguments[ie];return _.prototype[R].apply(I,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,_,v){v||(v=0);var I=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)I[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)I[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=y.g[0],v=y.g[1],R=y.g[2];var C=y.g[3],T=_+(C^v&(R^C))+I[0]+3614090360&4294967295;_=v+(T<<7&4294967295|T>>>25),T=C+(R^_&(v^R))+I[1]+3905402710&4294967295,C=_+(T<<12&4294967295|T>>>20),T=R+(v^C&(_^v))+I[2]+606105819&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(_^R&(C^_))+I[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(C^v&(R^C))+I[4]+4118548399&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(R^_&(v^R))+I[5]+1200080426&4294967295,C=_+(T<<12&4294967295|T>>>20),T=R+(v^C&(_^v))+I[6]+2821735955&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(_^R&(C^_))+I[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(C^v&(R^C))+I[8]+1770035416&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(R^_&(v^R))+I[9]+2336552879&4294967295,C=_+(T<<12&4294967295|T>>>20),T=R+(v^C&(_^v))+I[10]+4294925233&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(_^R&(C^_))+I[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(C^v&(R^C))+I[12]+1804603682&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(R^_&(v^R))+I[13]+4254626195&4294967295,C=_+(T<<12&4294967295|T>>>20),T=R+(v^C&(_^v))+I[14]+2792965006&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(_^R&(C^_))+I[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(R^C&(v^R))+I[1]+4129170786&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(_^v))+I[6]+3225465664&4294967295,C=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(C^_))+I[11]+643717713&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(R^C))+I[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^C&(v^R))+I[5]+3593408605&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(_^v))+I[10]+38016083&4294967295,C=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(C^_))+I[15]+3634488961&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(R^C))+I[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^C&(v^R))+I[9]+568446438&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(_^v))+I[14]+3275163606&4294967295,C=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(C^_))+I[3]+4107603335&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(R^C))+I[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^C&(v^R))+I[13]+2850285829&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(_^v))+I[2]+4243563512&4294967295,C=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(C^_))+I[7]+1735328473&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(R^C))+I[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(v^R^C)+I[5]+4294588738&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^R)+I[8]+2272392833&4294967295,C=_+(T<<11&4294967295|T>>>21),T=R+(C^_^v)+I[11]+1839030562&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^_)+I[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^C)+I[1]+2763975236&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^R)+I[4]+1272893353&4294967295,C=_+(T<<11&4294967295|T>>>21),T=R+(C^_^v)+I[7]+4139469664&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^_)+I[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^C)+I[13]+681279174&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^R)+I[0]+3936430074&4294967295,C=_+(T<<11&4294967295|T>>>21),T=R+(C^_^v)+I[3]+3572445317&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^_)+I[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^C)+I[9]+3654602809&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^R)+I[12]+3873151461&4294967295,C=_+(T<<11&4294967295|T>>>21),T=R+(C^_^v)+I[15]+530742520&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^_)+I[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(R^(v|~C))+I[0]+4096336452&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~R))+I[7]+1126891415&4294967295,C=_+(T<<10&4294967295|T>>>22),T=R+(_^(C|~v))+I[14]+2878612391&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~_))+I[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~C))+I[12]+1700485571&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~R))+I[3]+2399980690&4294967295,C=_+(T<<10&4294967295|T>>>22),T=R+(_^(C|~v))+I[10]+4293915773&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~_))+I[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~C))+I[8]+1873313359&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~R))+I[15]+4264355552&4294967295,C=_+(T<<10&4294967295|T>>>22),T=R+(_^(C|~v))+I[6]+2734768916&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~_))+I[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~C))+I[4]+4149444226&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~R))+I[11]+3174756917&4294967295,C=_+(T<<10&4294967295|T>>>22),T=R+(_^(C|~v))+I[2]+718787259&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~_))+I[9]+3951481745&4294967295,y.g[0]=y.g[0]+_&4294967295,y.g[1]=y.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,y.g[2]=y.g[2]+R&4294967295,y.g[3]=y.g[3]+C&4294967295}r.prototype.u=function(y,_){_===void 0&&(_=y.length);for(var v=_-this.blockSize,I=this.B,R=this.h,C=0;C<_;){if(R==0)for(;C<=v;)i(this,y,C),C+=this.blockSize;if(typeof y=="string"){for(;C<_;)if(I[R++]=y.charCodeAt(C++),R==this.blockSize){i(this,I),R=0;break}}else for(;C<_;)if(I[R++]=y[C++],R==this.blockSize){i(this,I),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var _=1;_<y.length-8;++_)y[_]=0;var v=8*this.o;for(_=y.length-8;_<y.length;++_)y[_]=v&255,v/=256;for(this.u(y),y=Array(16),_=v=0;4>_;++_)for(var I=0;32>I;I+=8)y[v++]=this.g[_]>>>I&255;return y};function s(y,_){var v=l;return Object.prototype.hasOwnProperty.call(v,y)?v[y]:v[y]=_(y)}function a(y,_){this.h=_;for(var v=[],I=!0,R=y.length-1;0<=R;R--){var C=y[R]|0;I&&C==_||(v[R]=C,I=!1)}this.g=v}var l={};function c(y){return-128<=y&&128>y?s(y,function(_){return new a([_|0],0>_?-1:0)}):new a([y|0],0>y?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return m;if(0>y)return P(h(-y));for(var _=[],v=1,I=0;y>=v;I++)_[I]=y/v|0,v*=4294967296;return new a(_,0)}function d(y,_){if(y.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(y.charAt(0)=="-")return P(d(y.substring(1),_));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),I=m,R=0;R<y.length;R+=8){var C=Math.min(8,y.length-R),T=parseInt(y.substring(R,R+C),_);8>C?(C=h(Math.pow(_,C)),I=I.j(C).add(h(T))):(I=I.j(v),I=I.add(h(T)))}return I}var m=c(0),p=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(A(this))return-P(this).m();for(var y=0,_=1,v=0;v<this.g.length;v++){var I=this.i(v);y+=(0<=I?I:4294967296+I)*_,_*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E(this))return"0";if(A(this))return"-"+P(this).toString(y);for(var _=h(Math.pow(y,6)),v=this,I="";;){var R=B(v,_).g;v=U(v,R.j(_));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(y);if(v=R,E(v))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function E(y){if(y.h!=0)return!1;for(var _=0;_<y.g.length;_++)if(y.g[_]!=0)return!1;return!0}function A(y){return y.h==-1}n.l=function(y){return y=U(this,y),A(y)?-1:E(y)?0:1};function P(y){for(var _=y.g.length,v=[],I=0;I<_;I++)v[I]=~y.g[I];return new a(v,~y.h).add(p)}n.abs=function(){return A(this)?P(this):this},n.add=function(y){for(var _=Math.max(this.g.length,y.g.length),v=[],I=0,R=0;R<=_;R++){var C=I+(this.i(R)&65535)+(y.i(R)&65535),T=(C>>>16)+(this.i(R)>>>16)+(y.i(R)>>>16);I=T>>>16,C&=65535,T&=65535,v[R]=T<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function U(y,_){return y.add(P(_))}n.j=function(y){if(E(this)||E(y))return m;if(A(this))return A(y)?P(this).j(P(y)):P(P(this).j(y));if(A(y))return P(this.j(P(y)));if(0>this.l(w)&&0>y.l(w))return h(this.m()*y.m());for(var _=this.g.length+y.g.length,v=[],I=0;I<2*_;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<y.g.length;R++){var C=this.i(I)>>>16,T=this.i(I)&65535,ie=y.i(R)>>>16,pe=y.i(R)&65535;v[2*I+2*R]+=T*pe,F(v,2*I+2*R),v[2*I+2*R+1]+=C*pe,F(v,2*I+2*R+1),v[2*I+2*R+1]+=T*ie,F(v,2*I+2*R+1),v[2*I+2*R+2]+=C*ie,F(v,2*I+2*R+2)}for(I=0;I<_;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=_;I<2*_;I++)v[I]=0;return new a(v,0)};function F(y,_){for(;(y[_]&65535)!=y[_];)y[_+1]+=y[_]>>>16,y[_]&=65535,_++}function x(y,_){this.g=y,this.h=_}function B(y,_){if(E(_))throw Error("division by zero");if(E(y))return new x(m,m);if(A(y))return _=B(P(y),_),new x(P(_.g),P(_.h));if(A(_))return _=B(y,P(_)),new x(P(_.g),_.h);if(30<y.g.length){if(A(y)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var v=p,I=_;0>=I.l(y);)v=$(v),I=$(I);var R=M(v,1),C=M(I,1);for(I=M(I,2),v=M(v,2);!E(I);){var T=C.add(I);0>=T.l(y)&&(R=R.add(v),C=T),I=M(I,1),v=M(v,1)}return _=U(y,R.j(_)),new x(R,_)}for(R=m;0<=y.l(_);){for(v=Math.max(1,Math.floor(y.m()/_.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=h(v),T=C.j(_);A(T)||0<T.l(y);)v-=I,C=h(v),T=C.j(_);E(C)&&(C=p),R=R.add(C),y=U(y,T)}return new x(R,y)}n.A=function(y){return B(this,y).h},n.and=function(y){for(var _=Math.max(this.g.length,y.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)&y.i(I);return new a(v,this.h&y.h)},n.or=function(y){for(var _=Math.max(this.g.length,y.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)|y.i(I);return new a(v,this.h|y.h)},n.xor=function(y){for(var _=Math.max(this.g.length,y.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)^y.i(I);return new a(v,this.h^y.h)};function $(y){for(var _=y.g.length+1,v=[],I=0;I<_;I++)v[I]=y.i(I)<<1|y.i(I-1)>>>31;return new a(v,y.h)}function M(y,_){var v=_>>5;_%=32;for(var I=y.g.length-v,R=[],C=0;C<I;C++)R[C]=0<_?y.i(C+v)>>>_|y.i(C+v+1)<<32-_:y.i(C+v);return new a(R,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Nn=a}).apply(typeof Yl<"u"?Yl:typeof self<"u"?self:typeof window<"u"?window:{});var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zu,eh,Ur,th,Bi,vo,nh,rh,ih;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ki=="object"&&ki];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var k=o[g];if(!(k in f))break e;f=f[k]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var f=0,g=!1,k={next:function(){if(!g&&f<o.length){var N=f++;return{value:u(N,o[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function m(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function p(o,u,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,p.apply(null,arguments)}function w(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function E(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,k,N){for(var H=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)H[Ce-2]=arguments[Ce];return u.prototype[k].apply(g,H)}}function A(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function P(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const k=o.length||0,N=g.length||0;o.length=k+N;for(let H=0;H<N;H++)o[k+H]=g[H]}else o.push(g)}}class U{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function x(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var $=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function M(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function y(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)o[f]=g[f];for(let N=0;N<v.length;N++)f=v[N],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function R(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function C(o){l.setTimeout(()=>{throw o},0)}function T(){var o=Le;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ie{constructor(){this.h=this.g=null}add(u,f){const g=pe.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var pe=new U(()=>new Ae,o=>o.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let De,he=!1,Le=new ie,Ee=()=>{const o=l.Promise.resolve(void 0);De=()=>{o.then(me)}};var me=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){C(f)}var u=pe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}he=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var St=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function $e(o,u){if(ce.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if($){e:{try{B(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:X[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$e.aa.h.call(this)}}E($e,ce);var X={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ge="closure_listenable_"+(1e6*Math.random()|0),Te=0;function ct(o,u,f,g,k){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=k,this.key=++Te,this.da=this.fa=!1}function mt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yt(o){this.src=o,this.g={},this.h=0}yt.prototype.add=function(o,u,f,g,k){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var H=Ne(o,u,g,k);return-1<H?(u=o[H],f||(u.fa=!1)):(u=new ct(u,this.src,N,!!g,k),u.fa=f,o.push(u)),u};function nn(o,u){var f=u.type;if(f in o.g){var g=o.g[f],k=Array.prototype.indexOf.call(g,u,void 0),N;(N=0<=k)&&Array.prototype.splice.call(g,k,1),N&&(mt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Ne(o,u,f,g){for(var k=0;k<o.length;++k){var N=o[k];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==g)return k}return-1}var Ue="closure_lm_"+(1e6*Math.random()|0),Mt={};function Fe(o,u,f,g,k){if(Array.isArray(u)){for(var N=0;N<u.length;N++)Fe(o,u[N],f,g,k);return null}return f=Gn(f),o&&o[ge]?o.K(u,f,h(g)?!!g.capture:!!g,k):Ge(o,u,f,!1,g,k)}function Ge(o,u,f,g,k,N){if(!u)throw Error("Invalid event type");var H=h(k)?!!k.capture:!!k,Ce=Hn(o);if(Ce||(o[Ue]=Ce=new yt(o)),f=Ce.add(u,f,g,H,N),f.proxy)return f;if(g=de(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)St||(k=H),k===void 0&&(k=!1),o.addEventListener(u.toString(),g,k);else if(o.attachEvent)o.attachEvent(rn(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function de(){function o(f){return u.call(o.src,o.listener,f)}const u=fi;return o}function be(o,u,f,g,k){if(Array.isArray(u))for(var N=0;N<u.length;N++)be(o,u[N],f,g,k);else g=h(g)?!!g.capture:!!g,f=Gn(f),o&&o[ge]?(o=o.i,u=String(u).toString(),u in o.g&&(N=o.g[u],f=Ne(N,f,g,k),-1<f&&(mt(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete o.g[u],o.h--)))):o&&(o=Hn(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ne(u,f,g,k)),(f=-1<o?u[o]:null)&&ae(f))}function ae(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ge])nn(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(rn(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Hn(u))?(nn(f,o),f.h==0&&(f.src=null,u[Ue]=null)):mt(o)}}}function rn(o){return o in Mt?Mt[o]:Mt[o]="on"+o}function fi(o,u){if(o.da)o=!0;else{u=new $e(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&ae(o),o=f.call(g,u)}return o}function Hn(o){return o=o[Ue],o instanceof yt?o:null}var gt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gn(o){return typeof o=="function"?o:(o[gt]||(o[gt]=function(u){return o.handleEvent(u)}),o[gt])}function et(){Ie.call(this),this.i=new yt(this),this.M=this,this.F=null}E(et,Ie),et.prototype[ge]=!0,et.prototype.removeEventListener=function(o,u,f,g){be(this,o,u,f,g)};function ut(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new ce(u,o);else if(u instanceof ce)u.target=u.target||o;else{var k=u;u=new ce(g,o),I(u,k)}if(k=!0,f)for(var N=f.length-1;0<=N;N--){var H=u.g=f[N];k=pi(H,g,!0,u)&&k}if(H=u.g=o,k=pi(H,g,!0,u)&&k,k=pi(H,g,!1,u)&&k,f)for(N=0;N<f.length;N++)H=u.g=f[N],k=pi(H,g,!1,u)&&k}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)mt(f[g]);delete o.g[u],o.h--}}this.F=null},et.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},et.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function pi(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,N=0;N<u.length;++N){var H=u[N];if(H&&!H.da&&H.capture==f){var Ce=H.listener,Qe=H.ha||H.src;H.fa&&nn(o.i,H),k=Ce.call(Qe,g)!==!1&&k}}return k&&!g.defaultPrevented}function Ca(o,u,f){if(typeof o=="function")f&&(o=p(o,f));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Pa(o){o.g=Ca(()=>{o.g=null,o.i&&(o.i=!1,Pa(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class yd extends Ie{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Pa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tr(o){Ie.call(this),this.h=o,this.g={}}E(Tr,Ie);var ka=[];function Da(o){M(o.g,function(u,f){this.g.hasOwnProperty(f)&&ae(u)},o),o.g={}}Tr.prototype.N=function(){Tr.aa.N.call(this),Da(this)},Tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ms=l.JSON.stringify,Ed=l.JSON.parse,Id=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ls(){}Ls.prototype.h=null;function Va(o){return o.h||(o.h=o.i())}function Na(){}var wr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Us(){ce.call(this,"d")}E(Us,ce);function Fs(){ce.call(this,"c")}E(Fs,ce);var bn={},Oa=null;function mi(){return Oa=Oa||new et}bn.La="serverreachability";function xa(o){ce.call(this,bn.La,o)}E(xa,ce);function Ar(o){const u=mi();ut(u,new xa(u))}bn.STAT_EVENT="statevent";function Ma(o,u){ce.call(this,bn.STAT_EVENT,o),this.stat=u}E(Ma,ce);function ht(o){const u=mi();ut(u,new Ma(u,o))}bn.Ma="timingevent";function La(o,u){ce.call(this,bn.Ma,o),this.size=u}E(La,ce);function br(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Rr(){this.g=!0}Rr.prototype.xa=function(){this.g=!1};function Td(o,u,f,g,k,N){o.info(function(){if(o.g)if(N)for(var H="",Ce=N.split("&"),Qe=0;Qe<Ce.length;Qe++){var fe=Ce[Qe].split("=");if(1<fe.length){var tt=fe[0];fe=fe[1];var nt=tt.split("_");H=2<=nt.length&&nt[1]=="type"?H+(tt+"="+fe+"&"):H+(tt+"=redacted&")}}else H=null;else H=N;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+u+`
`+f+`
`+H})}function wd(o,u,f,g,k,N,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+u+`
`+f+`
`+N+" "+H})}function Wn(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+bd(o,f)+(g?" "+g:"")})}function Ad(o,u){o.info(function(){return"TIMEOUT: "+u})}Rr.prototype.info=function(){};function bd(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var H=1;H<k.length;H++)k[H]=""}}}}return Ms(f)}catch{return u}}var gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bs;function _i(){}E(_i,Ls),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},Bs=new _i;function sn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new Tr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Ba={},qs={};function js(o,u,f){o.L=1,o.v=Ii(zt(u)),o.m=f,o.P=!0,qa(o,null)}function qa(o,u){o.F=Date.now(),vi(o),o.A=zt(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),tl(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Fa,o.g=yl(o.j,f?u:null,!o.m),0<o.O&&(o.M=new yd(p(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(ka[0]=k.toString()),k=ka);for(var N=0;N<k.length;N++){var H=Fe(f,k[N],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ar(),Td(o.i,o.u,o.A,o.l,o.R,o.m)}sn.prototype.ca=function(o){o=o.target;const u=this.M;u&&$t(o)==3?u.j():this.Y(o)},sn.prototype.Y=function(o){try{if(o==this.g)e:{const nt=$t(this.g);var u=this.g.Ba();const Jn=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||ll(this.g)))){this.J||nt!=4||u==7||(u==8||0>=Jn?Ar(3):Ar(2)),zs(this);var f=this.g.Z();this.X=f;t:if(ja(this)){var g=ll(this.g);o="";var k=g.length,N=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),Sr(this);var H="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(N&&u==k-1)});g.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,wd(this.i,this.u,this.A,this.l,this.R,nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Qe=this.g;if((Ce=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Ce)){var fe=Ce;break t}}fe=null}if(f=fe)Wn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$s(this,f);else{this.o=!1,this.s=3,ht(12),Rn(this),Sr(this);break e}}if(this.P){f=!0;let Ct;for(;!this.J&&this.C<H.length;)if(Ct=Rd(this,H),Ct==qs){nt==4&&(this.s=4,ht(14),f=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Ba){this.s=4,ht(15),Wn(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else Wn(this.i,this.l,Ct,null),$s(this,Ct);if(ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||H.length!=0||this.h.h||(this.s=1,ht(16),f=!1),this.o=this.o&&f,!f)Wn(this.i,this.l,H,"[Invalid Chunked Response]"),Rn(this),Sr(this);else if(0<H.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Js(tt),tt.M=!0,ht(11))}}else Wn(this.i,this.l,H,null),$s(this,H);nt==4&&Rn(this),this.o&&!this.J&&(nt==4?ml(this.j,this):(this.o=!1,vi(this)))}else zd(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Rn(this),Sr(this)}}}catch{}finally{}};function ja(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rd(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?qs:(f=Number(u.substring(f,g)),isNaN(f)?Ba:(g+=1,g+f>u.length?qs:(u=u.slice(g,g+f),o.C=g+f,u)))}sn.prototype.cancel=function(){this.J=!0,Rn(this)};function vi(o){o.S=Date.now()+o.I,za(o,o.I)}function za(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=br(p(o.ba,o),u)}function zs(o){o.B&&(l.clearTimeout(o.B),o.B=null)}sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ad(this.i,this.A),this.L!=2&&(Ar(),ht(17)),Rn(this),this.s=2,Sr(this)):za(this,this.S-o)};function Sr(o){o.j.G==0||o.J||ml(o.j,o)}function Rn(o){zs(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Da(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function $s(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Hs(f.h,o))){if(!o.K&&Hs(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ri(f),Ai(f);else break e;Qs(f),ht(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=br(p(f.Za,f),6e3));if(1>=Ga(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Cn(f,11)}else if((o.K||f.g==o)&&Ri(f),!F(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let fe=k[u];if(f.T=fe[0],fe=fe[1],f.G==2)if(fe[0]=="c"){f.K=fe[1],f.ia=fe[2];const tt=fe[3];tt!=null&&(f.la=tt,f.j.info("VER="+f.la));const nt=fe[4];nt!=null&&(f.Aa=nt,f.j.info("SVER="+f.Aa));const Jn=fe[5];Jn!=null&&typeof Jn=="number"&&0<Jn&&(g=1.5*Jn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ct=o.g;if(Ct){const Ci=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ci){var N=g.h;N.g||Ci.indexOf("spdy")==-1&&Ci.indexOf("quic")==-1&&Ci.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Gs(N,N.h),N.h=null))}if(g.D){const Ys=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(g.ya=Ys,Ve(g.I,g.D,Ys))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var H=o;if(g.qa=vl(g,g.J?g.ia:null,g.W),H.K){Wa(g.h,H);var Ce=H,Qe=g.L;Qe&&(Ce.I=Qe),Ce.B&&(zs(Ce),vi(Ce)),g.g=H}else fl(g);0<f.i.length&&bi(f)}else fe[0]!="stop"&&fe[0]!="close"||Cn(f,7);else f.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Cn(f,7):Ks(f):fe[0]!="noop"&&f.l&&f.l.ta(fe),f.v=0)}}Ar(4)}catch{}}var Sd=class{constructor(o,u){this.g=o,this.map=u}};function $a(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ha(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ga(o){return o.h?1:o.g?o.g.size:0}function Hs(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Gs(o,u){o.g?o.g.add(u):o.h=u}function Wa(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}$a.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ka(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return A(o.i)}function Cd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function Pd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Qa(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Pd(o),g=Cd(o),k=g.length,N=0;N<k;N++)u.call(void 0,g[N],f&&f[N],o)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kd(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),k=null;if(0<=g){var N=o[f].substring(0,g);k=o[f].substring(g+1)}else N=o[f];u(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Sn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Sn){this.h=o.h,yi(this,o.j),this.o=o.o,this.g=o.g,Ei(this,o.s),this.l=o.l;var u=o.i,f=new kr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Ya(this,f),this.m=o.m}else o&&(u=String(o).match(Ja))?(this.h=!1,yi(this,u[1]||"",!0),this.o=Cr(u[2]||""),this.g=Cr(u[3]||"",!0),Ei(this,u[4]),this.l=Cr(u[5]||"",!0),Ya(this,u[6]||"",!0),this.m=Cr(u[7]||"")):(this.h=!1,this.i=new kr(null,this.h))}Sn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Pr(u,Xa,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Pr(u,Xa,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Pr(f,f.charAt(0)=="/"?Nd:Vd,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Pr(f,xd)),o.join("")};function zt(o){return new Sn(o)}function yi(o,u,f){o.j=f?Cr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ei(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ya(o,u,f){u instanceof kr?(o.i=u,Md(o.i,o.h)):(f||(u=Pr(u,Od)),o.i=new kr(u,o.h))}function Ve(o,u,f){o.i.set(u,f)}function Ii(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Cr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Pr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Dd),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Dd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xa=/[#\/\?@]/g,Vd=/[#\?:]/g,Nd=/[#\?]/g,Od=/[#\?@]/g,xd=/#/g;function kr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function on(o){o.g||(o.g=new Map,o.h=0,o.i&&kd(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=kr.prototype,n.add=function(o,u){on(this),this.i=null,o=Kn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Za(o,u){on(o),u=Kn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function el(o,u){return on(o),u=Kn(o,u),o.g.has(u)}n.forEach=function(o,u){on(this),this.g.forEach(function(f,g){f.forEach(function(k){o.call(u,k,g,this)},this)},this)},n.na=function(){on(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const k=o[g];for(let N=0;N<k.length;N++)f.push(u[g])}return f},n.V=function(o){on(this);let u=[];if(typeof o=="string")el(this,o)&&(u=u.concat(this.g.get(Kn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return on(this),this.i=null,o=Kn(this,o),el(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function tl(o,u,f){Za(o,u),0<f.length&&(o.i=null,o.g.set(Kn(o,u),A(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const N=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var k=N;H[g]!==""&&(k+="="+encodeURIComponent(String(H[g]))),o.push(k)}}return this.i=o.join("&")};function Kn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Md(o,u){u&&!o.j&&(on(o),o.i=null,o.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(Za(this,g),tl(this,k,f))},o)),o.j=u}function Ld(o,u){const f=new Rr;if(l.Image){const g=new Image;g.onload=w(an,f,"TestLoadImage: loaded",!0,u,g),g.onerror=w(an,f,"TestLoadImage: error",!1,u,g),g.onabort=w(an,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(an,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Ud(o,u){const f=new Rr,g=new AbortController,k=setTimeout(()=>{g.abort(),an(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(N=>{clearTimeout(k),N.ok?an(f,"TestPingServer: ok",!0,u):an(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),an(f,"TestPingServer: error",!1,u)})}function an(o,u,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function Fd(){this.g=new Id}function Bd(o,u,f){const g=f||"";try{Qa(o,function(k,N){let H=k;h(k)&&(H=Ms(k)),u.push(g+N+"="+encodeURIComponent(H))})}catch(k){throw u.push(g+"type="+encodeURIComponent("_badmap")),k}}function Dr(o){this.l=o.Ub||null,this.j=o.eb||!1}E(Dr,Ls),Dr.prototype.g=function(){return new Ti(this.l,this.j)},Dr.prototype.i=function(o){return function(){return o}}({});function Ti(o,u){et.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Ti,et),n=Ti.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Nr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function nl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vr(this):Nr(this),this.readyState==3&&nl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Vr(this))},n.Qa=function(o){this.g&&(this.response=o,Vr(this))},n.ga=function(){this.g&&Vr(this)};function Vr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Nr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rl(o){let u="";return M(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ws(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=rl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ve(o,u,f))}function xe(o){et.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(xe,et);var qd=/^https?$/i,jd=["POST","PUT"];n=xe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bs.g(),this.v=this.o?Va(this.o):Va(Bs),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(N){il(this,N);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jd,u,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,H]of f)this.g.setRequestHeader(N,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{al(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){il(this,N)}};function il(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,sl(o),wi(o)}function sl(o){o.A||(o.A=!0,ut(o,"complete"),ut(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ut(this,"complete"),ut(this,"abort"),wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wi(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ol(this):this.bb())},n.bb=function(){ol(this)};function ol(o){if(o.h&&typeof a<"u"&&(!o.v[1]||$t(o)!=4||o.Z()!=2)){if(o.u&&$t(o)==4)Ca(o.Ea,0,o);else if(ut(o,"readystatechange"),$t(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=H===0){var k=String(o.D).match(Ja)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!qd.test(k?k.toLowerCase():"")}f=g}if(f)ut(o,"complete"),ut(o,"success");else{o.m=6;try{var N=2<$t(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",sl(o)}}finally{wi(o)}}}}function wi(o,u){if(o.g){al(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ut(o,"ready");try{f.onreadystatechange=g}catch{}}}function al(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function $t(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ed(u)}};function ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zd(o){const u={};o=(o.g&&2<=$t(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(F(o[g]))continue;var f=R(o[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[k]||[];u[k]=N,N.push(f)}y(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Or(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function cl(o){this.Aa=0,this.i=[],this.j=new Rr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Or("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Or("baseRetryDelayMs",5e3,o),this.cb=Or("retryDelaySeedMs",1e4,o),this.Wa=Or("forwardChannelMaxRetries",2,o),this.wa=Or("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new $a(o&&o.concurrentRequestLimit),this.Da=new Fd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=cl.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ht(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=vl(this,null,this.W),bi(this)};function Ks(o){if(ul(o),o.G==3){var u=o.U++,f=zt(o.I);if(Ve(f,"SID",o.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),xr(o,f),u=new sn(o,o.j,u),u.L=2,u.v=Ii(zt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=yl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),vi(u)}_l(o)}function Ai(o){o.g&&(Js(o),o.g.cancel(),o.g=null)}function ul(o){Ai(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function bi(o){if(!Ha(o.h)&&!o.s){o.s=!0;var u=o.Ga;De||Ee(),he||(De(),he=!0),Le.add(u,o),o.B=0}}function $d(o,u){return Ga(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=br(p(o.Ga,o,u),gl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new sn(this,this.j,o);let N=this.o;if(this.S&&(N?(N=_(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=dl(this,k,u),f=zt(this.I),Ve(f,"RID",o),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),xr(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(rl(N)))+"&"+u:this.m&&Ws(f,this.m,N)),Gs(this.h,k),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),k.T=!0,js(k,f,null)):js(k,f,u),this.G=2}}else this.G==3&&(o?hl(this,o):this.i.length==0||Ha(this.h)||hl(this))};function hl(o,u){var f;u?f=u.l:f=o.U++;const g=zt(o.I);Ve(g,"SID",o.K),Ve(g,"RID",f),Ve(g,"AID",o.T),xr(o,g),o.m&&o.o&&Ws(g,o.m,o.o),f=new sn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=dl(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Gs(o.h,f),js(f,g,u)}function xr(o,u){o.H&&M(o.H,function(f,g){Ve(u,g,f)}),o.l&&Qa({},function(f,g){Ve(u,g,f)})}function dl(o,u,f){f=Math.min(o.i.length,f);var g=o.l?p(o.l.Na,o.l,o):null;e:{var k=o.i;let N=-1;for(;;){const H=["count="+f];N==-1?0<f?(N=k[0].g,H.push("ofs="+N)):N=0:H.push("ofs="+N);let Ce=!0;for(let Qe=0;Qe<f;Qe++){let fe=k[Qe].g;const tt=k[Qe].map;if(fe-=N,0>fe)N=Math.max(0,k[Qe].g-100),Ce=!1;else try{Bd(tt,H,"req"+fe+"_")}catch{g&&g(tt)}}if(Ce){g=H.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function fl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;De||Ee(),he||(De(),he=!0),Le.add(u,o),o.v=0}}function Qs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=br(p(o.Fa,o),gl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=br(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Ai(this),pl(this))};function Js(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function pl(o){o.g=new sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=zt(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),xr(o,u),o.m&&o.o&&Ws(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ii(zt(u)),f.m=null,f.P=!0,qa(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ai(this),Qs(this),ht(19))};function Ri(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ml(o,u){var f=null;if(o.g==u){Ri(o),Js(o),o.g=null;var g=2}else if(Hs(o.h,u))f=u.D,Wa(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;g=mi(),ut(g,new La(g,f)),bi(o)}else fl(o);else if(k=u.s,k==3||k==0&&0<u.X||!(g==1&&$d(o,u)||g==2&&Qs(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),k){case 1:Cn(o,5);break;case 4:Cn(o,10);break;case 3:Cn(o,6);break;default:Cn(o,2)}}}function gl(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Cn(o,u){if(o.j.info("Error code "+u),u==2){var f=p(o.fb,o),g=o.Xa;const k=!g;g=new Sn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yi(g,"https"),Ii(g),k?Ld(g.toString(),f):Ud(g.toString(),f)}else ht(2);o.G=0,o.l&&o.l.sa(u),_l(o),ul(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function _l(o){if(o.G=0,o.ka=[],o.l){const u=Ka(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.ra()}}function vl(o,u,f){var g=f instanceof Sn?zt(f):new Sn(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ei(g,g.s);else{var k=l.location;g=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var N=new Sn(null);g&&yi(N,g),u&&(N.g=u),k&&Ei(N,k),f&&(N.l=f),g=N}return f=o.D,u=o.ya,f&&u&&Ve(g,f,u),Ve(g,"VER",o.la),xr(o,g),g}function yl(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xe(new Dr({eb:f})):new xe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Si(){}Si.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){et.call(this),this.g=new cl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Qn(this)}E(Et,et),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Ks(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ms(o),o=f);u.i.push(new Sd(u.Ya++,o)),u.G==3&&bi(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,Ks(this.g),delete this.g,Et.aa.N.call(this)};function Il(o){Us.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}E(Il,Us);function Tl(){Fs.call(this),this.status=1}E(Tl,Fs);function Qn(o){this.g=o}E(Qn,El),Qn.prototype.ua=function(){ut(this.g,"a")},Qn.prototype.ta=function(o){ut(this.g,new Il(o))},Qn.prototype.sa=function(o){ut(this.g,new Tl)},Qn.prototype.ra=function(){ut(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,ih=function(){return new Si},rh=function(){return mi()},nh=bn,vo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gi.NO_ERROR=0,gi.TIMEOUT=8,gi.HTTP_ERROR=6,Bi=gi,Ua.COMPLETE="complete",th=Ua,Na.EventType=wr,wr.OPEN="a",wr.CLOSE="b",wr.ERROR="c",wr.MESSAGE="d",et.prototype.listen=et.prototype.K,Ur=Na,eh=Dr,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Zu=xe}).apply(typeof ki<"u"?ki:typeof self<"u"?self:typeof window<"u"?window:{});const Xl="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let vr="10.12.1";/**
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
 */const Un=new Oo("@firebase/firestore");function Mr(){return Un.logLevel}function Q(n,...e){if(Un.logLevel<=le.DEBUG){const t=e.map(Qo);Un.debug(`Firestore (${vr}): ${n}`,...t)}}function Yt(n,...e){if(Un.logLevel<=le.ERROR){const t=e.map(Qo);Un.error(`Firestore (${vr}): ${n}`,...t)}}function lr(n,...e){if(Un.logLevel<=le.WARN){const t=e.map(Qo);Un.warn(`Firestore (${vr}): ${n}`,...t)}}function Qo(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function te(n="Unexpected state"){const e=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: `+n;throw Yt(e),new Error(e)}function ke(n,e){n||te()}function re(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class sh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(it.UNAUTHENTICATED))}shutdown(){}}class kg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dg{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _n,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _n)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new sh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new it(e)}}class Vg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ng{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Vg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ke(typeof t.token=="string"),this.R=t.token,new Og(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Mg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class oh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Mg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(n,e){return n<e?-1:n>e?1:0}function cr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class He{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new He(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new He(0,0))}static max(){return new ne(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wr{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(),r===void 0?r=e.length-t:r>e.length-t&&te(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Pe extends Wr{construct(e,t,r){return new Pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Pe(t)}static emptyPath(){return new Pe([])}}const Lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Wr{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return Lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Pe.fromString(e))}static fromName(e){return new Y(Pe.fromString(e).popFirst(5))}static empty(){return new Y(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Pe(e.slice()))}}function Ug(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new He(t+1,0):new He(t,r));return new yn(i,Y.empty(),e)}function Fg(n){return new yn(n.readTime,n.key,-1)}class yn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new yn(ne.min(),Y.empty(),-1)}static max(){return new yn(ne.max(),Y.empty(),-1)}}function Bg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:_e(n.largestBatchId,e.largestBatchId))}/**
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
 */const qg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function si(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==qg)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,r)=>{t(e)})}static reject(e){return new q((t,r)=>{r(e)})}static waitFor(e){return new q((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next(i=>i?q.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new q((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===s&&r(a)},d=>i(d))}})}static doWhile(e,t){return new q((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function zg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function oi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jo.oe=-1;function _s(n){return n==null}function es(n){return n===0&&1/n==-1/0}function $g(n){return typeof n=="number"&&Number.isInteger(n)&&!es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ah(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Je(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ec(this.data.getIterator())}getIteratorFrom(e){return new ec(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Xe(this.comparator);return t.data=e,t}}class ec{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new It([])}unionWith(e){let t=new Xe(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lh("Invalid base64 string: "+s):s}}(e);return new lt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Hg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function En(n){if(ke(!!n),typeof n=="string"){let e=0;const t=Hg.exec(n);if(ke(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fn(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */function vs(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Yo(n){const e=n.mapValue.fields.__previous_value__;return vs(e)?Yo(e):e}function Kr(n){const e=En(n.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class Gg{constructor(e,t,r,i,s,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Qr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vs(n)?4:Wg(n)?9007199254740991:10:te()}function jt(n,e){if(n===e)return!0;const t=Bn(n);if(t!==Bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kr(n).isEqual(Kr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=En(i.timestampValue),l=En(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Fn(i.bytesValue).isEqual(Fn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=qe(i.doubleValue),l=qe(s.doubleValue);return a===l?es(a)===es(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return cr(n.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Zl(a)!==Zl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!jt(a[c],l[c])))return!1;return!0}(n,e);default:return te()}}function Jr(n,e){return(n.values||[]).find(t=>jt(t,e))!==void 0}function ur(n,e){if(n===e)return 0;const t=Bn(n),r=Bn(e);if(t!==r)return _e(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return _e(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=qe(s.integerValue||s.doubleValue),c=qe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return tc(n.timestampValue,e.timestampValue);case 4:return tc(Kr(n),Kr(e));case 5:return _e(n.stringValue,e.stringValue);case 6:return function(s,a){const l=Fn(s),c=Fn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=_e(l[h],c[h]);if(d!==0)return d}return _e(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=_e(qe(s.latitude),qe(a.latitude));return l!==0?l:_e(qe(s.longitude),qe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const d=ur(l[h],c[h]);if(d)return d}return _e(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Vi.mapValue&&a===Vi.mapValue)return 0;if(s===Vi.mapValue)return 1;if(a===Vi.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const p=_e(c[m],d[m]);if(p!==0)return p;const w=ur(l[c[m]],h[d[m]]);if(w!==0)return w}return _e(c.length,d.length)}(n.mapValue,e.mapValue);default:throw te()}}function tc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return _e(n,e);const t=En(n),r=En(e),i=_e(t.seconds,r.seconds);return i!==0?i:_e(t.nanos,r.nanos)}function hr(n){return yo(n)}function yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=En(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=yo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${yo(t.fields[a])}`;return i+"}"}(n.mapValue):te()}function ts(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Eo(n){return!!n&&"integerValue"in n}function Xo(n){return!!n&&"arrayValue"in n}function nc(n){return!!n&&"nullValue"in n}function rc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qi(n){return!!n&&"mapValue"in n}function jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=Ye.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=jr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];qi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){jn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(jr(this.value))}}function ch(n){const e=[];return jn(n.fields,(t,r)=>{const i=new Ye([t]);if(qi(r)){const s=ch(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new It(e)}/**
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
 */class st{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new st(e,0,ne.min(),ne.min(),ne.min(),_t.empty(),0)}static newFoundDocument(e,t,r,i){return new st(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new st(e,2,t,ne.min(),ne.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,ne.min(),ne.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dr{constructor(e,t){this.position=e,this.inclusive=t}}function ic(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=ur(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!jt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class uh{}class je extends uh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jg(e,t,r):t==="array-contains"?new Zg(e,r):t==="in"?new e_(e,r):t==="not-in"?new t_(e,r):t==="array-contains-any"?new n_(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yg(e,r):new Xg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ur(t,this.value)):t!==null&&Bn(this.value)===Bn(t)&&this.matchesComparison(ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends uh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Dt(e,t)}matches(e){return hh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hh(n){return n.op==="and"}function dh(n){return Qg(n)&&hh(n)}function Qg(n){for(const e of n.filters)if(e instanceof Dt)return!1;return!0}function Io(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+hr(n.value);if(dh(n))return n.filters.map(e=>Io(e)).join(",");{const e=n.filters.map(t=>Io(t)).join(",");return`${n.op}(${e})`}}function fh(n,e){return n instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&jt(r.value,i.value)}(n,e):n instanceof Dt?function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&fh(a,i.filters[l]),!0):!1}(n,e):void te()}function ph(n){return n instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${hr(t.value)}`}(n):n instanceof Dt?function(t){return t.op.toString()+" {"+t.getFilters().map(ph).join(" ,")+"}"}(n):"Filter"}class Jg extends je{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yg extends je{constructor(e,t){super(e,"in",t),this.keys=mh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xg extends je{constructor(e,t){super(e,"not-in",t),this.keys=mh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Zg extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xo(t)&&Jr(t.arrayValue,this.value)}}class e_ extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Jr(this.value.arrayValue,t)}}class t_ extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Jr(this.value.arrayValue,t)}}class n_ extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Jr(this.value.arrayValue,r))}}/**
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
 */class r_{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function oc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new r_(n,e,t,r,i,s,a)}function Zo(n){const e=re(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Io(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hr(r)).join(",")),e.ue=t}return e.ue}function ea(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sc(n.startAt,e.startAt)&&sc(n.endAt,e.endAt)}function To(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class zn{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function i_(n,e,t,r,i,s,a,l){return new zn(n,e,t,r,i,s,a,l)}function gh(n){return new zn(n)}function ac(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ta(n){return n.collectionGroup!==null}function ir(n){const e=re(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Xe(Ye.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Yr(s,r))}),t.has(Ye.keyField().canonicalString())||e.ce.push(new Yr(Ye.keyField(),r))}return e.ce}function Ut(n){const e=re(n);return e.le||(e.le=s_(e,ir(n))),e.le}function s_(n,e){if(n.limitType==="F")return oc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yr(i.field,s)});const t=n.endAt?new dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new dr(n.startAt.position,n.startAt.inclusive):null;return oc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wo(n,e){const t=n.filters.concat([e]);return new zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ns(n,e,t){return new zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ys(n,e){return ea(Ut(n),Ut(e))&&n.limitType===e.limitType}function _h(n){return`${Zo(Ut(n))}|lt:${n.limitType}`}function Xn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ph(i)).join(", ")}]`),_s(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>hr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>hr(i)).join(",")),`Target(${r})`}(Ut(n))}; limitType=${n.limitType})`}function Es(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ir(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=ic(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,ir(r),i)||r.endAt&&!function(a,l,c){const h=ic(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,ir(r),i))}(n,e)}function o_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vh(n){return(e,t)=>{let r=!1;for(const i of ir(n)){const s=a_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function a_(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?ur(c,h):te()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
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
 */const l_=new Oe(Y.comparator);function Xt(){return l_}const yh=new Oe(Y.comparator);function Fr(...n){let e=yh;for(const t of n)e=e.insert(t.key,t);return e}function Eh(n){let e=yh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dn(){return zr()}function Ih(){return zr()}function zr(){return new yr(n=>n.toString(),(n,e)=>n.isEqual(e))}const c_=new Oe(Y.comparator),u_=new Xe(Y.comparator);function oe(...n){let e=u_;for(const t of n)e=e.add(t);return e}const h_=new Xe(_e);function d_(){return h_}/**
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
 */function Th(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(e)?"-0":e}}function wh(n){return{integerValue:""+n}}function f_(n,e){return $g(e)?wh(e):Th(n,e)}/**
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
 */class Is{constructor(){this._=void 0}}function p_(n,e,t){return n instanceof rs?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&vs(s)&&(s=Yo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Xr?bh(n,e):n instanceof Zr?Rh(n,e):function(i,s){const a=Ah(i,s),l=lc(a)+lc(i.Pe);return Eo(a)&&Eo(i.Pe)?wh(l):Th(i.serializer,l)}(n,e)}function m_(n,e,t){return n instanceof Xr?bh(n,e):n instanceof Zr?Rh(n,e):t}function Ah(n,e){return n instanceof is?function(r){return Eo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class rs extends Is{}class Xr extends Is{constructor(e){super(),this.elements=e}}function bh(n,e){const t=Sh(e);for(const r of n.elements)t.some(i=>jt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Zr extends Is{constructor(e){super(),this.elements=e}}function Rh(n,e){let t=Sh(e);for(const r of n.elements)t=t.filter(i=>!jt(i,r));return{arrayValue:{values:t}}}class is extends Is{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function lc(n){return qe(n.integerValue||n.doubleValue)}function Sh(n){return Xo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function g_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Xr&&i instanceof Xr||r instanceof Zr&&i instanceof Zr?cr(r.elements,i.elements,jt):r instanceof is&&i instanceof is?jt(r.Pe,i.Pe):r instanceof rs&&i instanceof rs}(n.transform,e.transform)}class __{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ji(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ts{}function Ch(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new na(n.key,Tt.none()):new ai(n.key,n.data,Tt.none());{const t=n.data,r=_t.empty();let i=new Xe(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new An(n.key,r,new It(i.toArray()),Tt.none())}}function v_(n,e,t){n instanceof ai?function(i,s,a){const l=i.value.clone(),c=uc(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof An?function(i,s,a){if(!ji(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=uc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Ph(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function $r(n,e,t,r){return n instanceof ai?function(s,a,l,c){if(!ji(s.precondition,a))return l;const h=s.value.clone(),d=hc(s.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof An?function(s,a,l,c){if(!ji(s.precondition,a))return l;const h=hc(s.fieldTransforms,c,a),d=a.data;return d.setAll(Ph(s)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,l){return ji(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function y_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Ah(r.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(r.field,s))}return t||null}function cc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&cr(r,i,(s,a)=>g_(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends Ts{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class An extends Ts{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ph(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function uc(n,e,t){const r=new Map;ke(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,m_(a,l,t[i]))}return r}function hc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,p_(s,a,e))}return r}class na extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E_ extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class I_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&v_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ih();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=Ch(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&cr(this.mutations,e.mutations,(t,r)=>cc(t,r))&&cr(this.baseMutations,e.baseMutations,(t,r)=>cc(t,r))}}class ra{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ke(e.mutations.length===r.length);let i=function(){return c_}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ra(e,t,r,i)}}/**
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
 */class T_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Be,ue;function A_(n){switch(n){default:return te();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function kh(n){if(n===void 0)return Yt("GRPC error has no .code"),L.UNKNOWN;switch(n){case Be.OK:return L.OK;case Be.CANCELLED:return L.CANCELLED;case Be.UNKNOWN:return L.UNKNOWN;case Be.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Be.INTERNAL:return L.INTERNAL;case Be.UNAVAILABLE:return L.UNAVAILABLE;case Be.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Be.NOT_FOUND:return L.NOT_FOUND;case Be.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Be.ABORTED:return L.ABORTED;case Be.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Be.DATA_LOSS:return L.DATA_LOSS;default:return te()}}(ue=Be||(Be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function b_(){return new TextEncoder}/**
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
 */const R_=new Nn([4294967295,4294967295],0);function dc(n){const e=b_().encode(n),t=new Xu;return t.update(e),new Uint8Array(t.digest())}function fc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Nn([t,r],0),new Nn([i,s],0)]}class ia{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Br(`Invalid padding: ${t}`);if(r<0)throw new Br(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Br(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Br(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Nn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Nn.fromNumber(r)));return i.compare(R_)===1&&(i=new Nn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=dc(e),[r,i]=fc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ia(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=dc(e),[r,i]=fc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ws{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,li.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ws(ne.min(),i,new Oe(_e),Xt(),oe())}}class li{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new li(r,t,oe(),oe(),oe())}}/**
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
 */class zi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Dh{constructor(e,t){this.targetId=e,this.me=t}}class Vh{constructor(e,t,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class pc{constructor(){this.fe=0,this.ge=gc(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),t=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:te()}}),new li(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=gc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class S_{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xt(),this.qe=mc(),this.Qe=new Oe(_e)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(To(s))if(r===0){const a=new Y(s.path);this.Ue(t,a,st.newNoDocument(a,ne.min()))}else ke(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Fn(r).toUint8Array()}catch(c){if(c instanceof lh)return lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ia(a,i,s)}catch(c){return lr(c instanceof Br?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&To(l.target)){const c=new Y(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,st.newNoDocument(c,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=oe();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ws(e,t,this.Qe,this.ke,r);return this.ke=Xt(),this.qe=mc(),this.Qe=new Oe(_e),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new pc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Xe(_e),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new pc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function mc(){return new Oe(Y.comparator)}function gc(){return new Oe(Y.comparator)}const C_={asc:"ASCENDING",desc:"DESCENDING"},P_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k_={and:"AND",or:"OR"};class D_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ao(n,e){return n.useProto3Json||_s(e)?e:{value:e}}function ss(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function V_(n,e){return ss(n,e.toTimestamp())}function Ft(n){return ke(!!n),ne.fromTimestamp(function(t){const r=En(t);return new He(r.seconds,r.nanos)}(n))}function sa(n,e){return bo(n,e).canonicalString()}function bo(n,e){const t=function(i){return new Pe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Oh(n){const e=Pe.fromString(n);return ke(Fh(e)),e}function Ro(n,e){return sa(n.databaseId,e.path)}function so(n,e){const t=Oh(e);if(t.get(1)!==n.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Mh(t))}function xh(n,e){return sa(n.databaseId,e)}function N_(n){const e=Oh(n);return e.length===4?Pe.emptyPath():Mh(e)}function So(n){return new Pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mh(n){return ke(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _c(n,e,t){return{name:Ro(n,e),fields:t.value.mapValue.fields}}function O_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(ke(d===void 0||typeof d=="string"),lt.fromBase64String(d||"")):(ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),lt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?L.UNKNOWN:kh(h.code);return new W(d,h.message||"")}(a);t=new Vh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=so(n,r.document.name),s=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):ne.min(),l=new _t({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(i,s,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new zi(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=so(n,r.document),s=r.readTime?Ft(r.readTime):ne.min(),a=st.newNoDocument(i,s),l=r.removedTargetIds||[];t=new zi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=so(n,r.document),s=r.removedTargetIds||[];t=new zi([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new w_(i,s),l=r.targetId;t=new Dh(l,a)}}return t}function x_(n,e){let t;if(e instanceof ai)t={update:_c(n,e.key,e.value)};else if(e instanceof na)t={delete:Ro(n,e.key)};else if(e instanceof An)t={update:_c(n,e.key,e.data),updateMask:$_(e.fieldMask)};else{if(!(e instanceof E_))return te();t={verify:Ro(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof rs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof is)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw te()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(n,e.precondition)),t}function M_(n,e){return n&&n.length>0?(ke(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Ft(i.updateTime):Ft(s);return a.isEqual(ne.min())&&(a=Ft(s)),new __(a,i.transformResults||[])}(t,e))):[]}function L_(n,e){return{documents:[xh(n,e.path)]}}function U_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=xh(n,i);const s=function(h){if(h.length!==0)return Uh(Dt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(d=>function(p){return{field:Zn(p.field),direction:q_(p.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ao(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function F_(n){let e=N_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ke(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(m){const p=Lh(m);return p instanceof Dt&&dh(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(p=>function(E){return new Yr(er(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,_s(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(m){const p=!!m.before,w=m.values||[];return new dr(w,p)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const p=!m.before,w=m.values||[];return new dr(w,p)}(t.endAt)),i_(e,i,a,s,l,"F",c,h)}function B_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=er(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=er(t.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=er(t.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=er(t.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(n):n.fieldFilter!==void 0?function(t){return je.create(er(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Dt.create(t.compositeFilter.filters.map(r=>Lh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(t.compositeFilter.op))}(n):te()}function q_(n){return C_[n]}function j_(n){return P_[n]}function z_(n){return k_[n]}function Zn(n){return{fieldPath:n.canonicalString()}}function er(n){return Ye.fromServerFormat(n.fieldPath)}function Uh(n){return n instanceof je?function(t){if(t.op==="=="){if(rc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NAN"}};if(nc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NAN"}};if(nc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zn(t.field),op:j_(t.op),value:t.value}}}(n):n instanceof Dt?function(t){const r=t.getFilters().map(i=>Uh(i));return r.length===1?r[0]:{compositeFilter:{op:z_(t.op),filters:r}}}(n):te()}function $_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class fn{constructor(e,t,r,i,s=ne.min(),a=ne.min(),l=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class H_{constructor(e){this.ct=e}}function G_(n){const e=F_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ns(e,e.limit,"L"):e}/**
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
 */class W_{constructor(){this._n=new K_}addToCollectionParentIndex(e,t){return this._n.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(yn.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class K_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Xe(Pe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Pe.comparator)).toArray()}}/**
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
 */class fr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new fr(0)}static Ln(){return new fr(-1)}}/**
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
 */class Q_{constructor(){this.changes=new yr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class J_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Y_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&$r(r.mutation,i,It.empty(),He.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const i=Dn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Fr();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Xt();const a=zr(),l=function(){return zr()}();return t.forEach((c,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof An)?s=s.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),$r(d.mutation,h,d.mutation.getFieldMask(),He.now())):a.set(h.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var m;return l.set(h,new J_(d,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=zr();let i=new Oe((a,l)=>a-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||It.empty();d=l.applyToLocalView(h,d),r.set(c,d);const m=(i.get(l.batchId)||oe()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,m=Ih();d.forEach(p=>{if(!s.has(p)){const w=Ch(t.get(p),r.get(p));w!==null&&m.set(p,w),s=s.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return q.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ta(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):q.resolve(Dn());let l=-1,c=s;return a.next(h=>q.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(d)?q.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,oe())).next(d=>({batchId:l,changes:Eh(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=Fr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Fr();return this.indexManager.getCollectionParents(e,s).next(l=>q.forEach(l,c=>{const h=function(m,p){return new zn(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,st.newInvalidDocument(d)))});let l=Fr();return a.forEach((c,h)=>{const d=s.get(c);d!==void 0&&$r(d.mutation,h,It.empty(),He.now()),Es(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class X_{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return q.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ft(i.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:G_(i.bundledQuery),readTime:Ft(i.readTime)}}(t)),q.resolve()}}/**
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
 */class Z_{constructor(){this.overlays=new Oe(Y.comparator),this.hr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dn();return q.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),q.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const i=Dn(),s=t.length+1,a=new Y(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return q.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Oe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Dn(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Dn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return q.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new T_(t,r));let s=this.hr.get(t);s===void 0&&(s=oe(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
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
 */class oa{constructor(){this.Pr=new Xe(We.Ir),this.Tr=new Xe(We.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new We(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new We(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new Y(new Pe([])),r=new We(t,e),i=new We(t,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Y(new Pe([])),r=new We(t,e),i=new We(t,e+1);let s=oe();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new We(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Y.comparator(e.key,t.key)||_e(e.pr,t.pr)}static Er(e,t){return _e(e.pr,t.pr)||Y.comparator(e.key,t.key)}}/**
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
 */class ev{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Xe(We.Ir)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new I_(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new We(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(a)}lookupMutationBatch(e,t){return q.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new We(t,0),i=new We(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);s.push(l)}),q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Xe(_e);return t.forEach(i=>{const s=new We(i,0),a=new We(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],l=>{r=r.add(l.pr)})}),q.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const a=new We(new Y(s),0);let l=new Xe(_e);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},a),q.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ke(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return q.forEach(t.mutations,i=>{const s=new We(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new We(t,0),i=this.wr.firstAfterOrEqual(r);return q.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tv{constructor(e){this.vr=e,this.docs=function(){return new Oe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let r=Xt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Xt();const a=t.path,l=new Y(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Bg(Fg(d),r)<=0||(i.has(d.key)||Es(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return q.resolve(s)}getAllFromCollectionGroup(e,t,r,i){te()}Fr(e,t){return q.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nv(this)}getSize(e){return q.resolve(this.size)}}class nv extends Q_{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),q.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class rv{constructor(e){this.persistence=e,this.Mr=new yr(t=>Zo(t),ea),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Or=0,this.Nr=new oa,this.targetCount=0,this.Lr=fr.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),q.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new fr(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.qn(t),q.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),q.waitFor(s).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),q.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this.Nr.containsKey(t))}}/**
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
 */class iv{constructor(e,t){this.Br={},this.overlays={},this.kr=new Jo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new rv(this),this.indexManager=new W_,this.remoteDocumentCache=function(i){return new tv(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new H_(t),this.$r=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Z_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new ev(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const i=new sv(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return q.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class sv extends jg{constructor(e){super(),this.currentSequenceNumber=e}}class aa{constructor(e){this.persistence=e,this.zr=new oa,this.jr=null}static Hr(e){return new aa(e)}get Jr(){if(this.jr)return this.jr;throw te()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),q.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Jr,r=>{const i=Y.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,ne.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return q.or([()=>q.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class la{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=oe(),i=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new la(e,t.fromCache,r,i)}}/**
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
 */class ov{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class av{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return hf()?8:zg(Ze())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new ov;return this.Ji(e,t,a).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(Mr()<=le.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),q.resolve()):(Mr()<=le.DEBUG&&Q("QueryEngine","Query:",Xn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Mr()<=le.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(t))):q.resolve())}ji(e,t){if(ac(t))return q.resolve(null);let r=Ut(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ns(t,null,"F"),r=Ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=oe(...s);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Zi(t,l);return this.Xi(t,h,a,c.readTime)?this.ji(e,ns(t,null,"F")):this.es(e,h,t,c)}))})))}Hi(e,t,r,i){return ac(t)||i.isEqual(ne.min())?q.resolve(null):this.zi.getDocuments(e,r).next(s=>{const a=this.Zi(t,s);return this.Xi(t,a,r,i)?q.resolve(null):(Mr()<=le.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xn(t)),this.es(e,a,t,Ug(i,-1)).next(l=>l))})}Zi(e,t){let r=new Xe(vh(e));return t.forEach((i,s)=>{Es(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return Mr()<=le.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Xn(t)),this.zi.getDocumentsMatchingQuery(e,t,yn.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class lv{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new Oe(_e),this.rs=new yr(s=>Zo(s),ea),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function cv(n,e,t,r){return new lv(n,e,t,r)}async function Bh(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=oe();for(const h of i){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function uv(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const m=h.batch,p=m.keys();let w=q.resolve();return p.forEach(E=>{w=w.next(()=>d.getEntry(c,E)).next(A=>{const P=h.docVersions.get(E);ke(P!==null),A.version.compareTo(P)<0&&(m.applyToRemoteDocument(A,h),A.isValidDocument()&&(A.setReadTime(h.commitVersion),d.addEntry(A)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=oe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function qh(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function hv(n,e){const t=re(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const l=[];e.targetChanges.forEach((d,m)=>{const p=i.get(m);if(!p)return;l.push(t.Qr.removeMatchingKeys(s,d.removedDocuments,m).next(()=>t.Qr.addMatchingKeys(s,d.addedDocuments,m)));let w=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(lt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(m,w),function(A,P,U){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(p,w,d)&&l.push(t.Qr.updateTargetData(s,w))});let c=Xt(),h=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(dv(s,a,e.documentUpdates).next(d=>{c=d.cs,h=d.ls})),!r.isEqual(ne.min())){const d=t.Qr.getLastRemoteSnapshotVersion(s).next(m=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return q.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.ns=i,s))}function dv(n,e,t){let r=oe(),i=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Xt();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:i}})}function fv(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pv(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,q.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new fn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Co(n,e,t){const r=re(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!oi(a))throw a;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function vc(n,e,t){const r=re(n);let i=ne.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const m=re(c),p=m.rs.get(d);return p!==void 0?q.resolve(m.ns.get(p)):m.Qr.getTargetData(h,d)}(r,a,Ut(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:ne.min(),t?s:oe())).next(l=>(mv(r,o_(e),l),{documents:l,hs:s})))}function mv(n,e,t){let r=n.ss.get(e)||ne.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}class yc{constructor(){this.activeTargetIds=d_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gv{constructor(){this.no=new yc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new yc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _v{io(e){}shutdown(){}}/**
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
 */class Ec{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ni=null;function oo(){return Ni===null?Ni=function(){return 268435456+Math.round(2147483648*Math.random())}():Ni++,"0x"+Ni.toString(16)}/**
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
 */const vv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yv{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const rt="WebChannelConnection";class Ev extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,a){const l=oo(),c=this.vo(t,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,a),this.Mo(t,c,h,i).then(d=>(Q("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw lr("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",i),d})}xo(t,r,i,s,a,l){return this.Co(t,r,i,s,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}vo(t,r){const i=vv[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const s=oo();return new Promise((a,l)=>{const c=new Zu;c.setWithCredentials(!0),c.listenOnce(th.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bi.NO_ERROR:const d=c.getResponseJson();Q(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),a(d);break;case Bi.TIMEOUT:Q(rt,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const m=c.getStatus();if(Q(rt,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const w=p==null?void 0:p.error;if(w&&w.status&&w.message){const E=function(P){const U=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(U)>=0?U:L.UNKNOWN}(w.status);l(new W(E,w.message))}else l(new W(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{Q(rt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);Q(rt,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,r,15)})}Oo(e,t,r){const i=oo(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ih(),l=rh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new eh({})),this.Fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=s.join("");Q(rt,`Creating RPC '${e}' stream ${i}: ${d}`,c);const m=a.createWebChannel(d,c);let p=!1,w=!1;const E=new yv({lo:P=>{w?Q(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(Q(rt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),p=!0),Q(rt,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},ho:()=>m.close()}),A=(P,U,F)=>{P.listen(U,x=>{try{F(x)}catch(B){setTimeout(()=>{throw B},0)}})};return A(m,Ur.EventType.OPEN,()=>{w||(Q(rt,`RPC '${e}' stream ${i} transport opened.`),E.mo())}),A(m,Ur.EventType.CLOSE,()=>{w||(w=!0,Q(rt,`RPC '${e}' stream ${i} transport closed`),E.po())}),A(m,Ur.EventType.ERROR,P=>{w||(w=!0,lr(rt,`RPC '${e}' stream ${i} transport errored:`,P),E.po(new W(L.UNAVAILABLE,"The operation could not be completed")))}),A(m,Ur.EventType.MESSAGE,P=>{var U;if(!w){const F=P.data[0];ke(!!F);const x=F,B=x.error||((U=x[0])===null||U===void 0?void 0:U.error);if(B){Q(rt,`RPC '${e}' stream ${i} received error:`,B);const $=B.status;let M=function(v){const I=Be[v];if(I!==void 0)return kh(I)}($),y=B.message;M===void 0&&(M=L.INTERNAL,y="Unknown error status: "+$+" with message "+B.message),w=!0,E.po(new W(M,y)),m.close()}else Q(rt,`RPC '${e}' stream ${i} received:`,F),E.yo(F)}}),A(l,nh.STAT_EVENT,P=>{P.stat===vo.PROXY?Q(rt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===vo.NOPROXY&&Q(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function ao(){return typeof document<"u"?document:null}/**
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
 */function As(n){return new D_(n,!0)}/**
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
 */class jh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class zh{constructor(e,t,r,i,s,a,l,c){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new jh(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Yt(t.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Iv extends zh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=O_(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?Ft(a.readTime):ne.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=So(this.serializer),t.addTarget=function(s,a){let l;const c=a.target;if(l=To(c)?{documents:L_(s,c)}:{query:U_(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Nh(s,a.resumeToken);const h=Ao(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ne.min())>0){l.readTime=ss(s,a.snapshotVersion.toTimestamp());const h=Ao(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=B_(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=So(this.serializer),t.removeTarget=e,this.i_(t)}}class Tv extends zh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=M_(e.writeResults,e.commitTime),r=Ft(e.commitTime);return this.listener.A_(r,t)}return ke(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=So(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>x_(this.serializer,r))};this.i_(t)}}/**
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
 */class wv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,bo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,bo(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(L.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Av{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Yt(t),this.y_=!1):Q("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class bv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{$n(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=re(c);h.M_.add(4),await ci(h),h.N_.set("Unknown"),h.M_.delete(4),await bs(h)}(this))})}),this.N_=new Av(r,i)}}async function bs(n){if($n(n))for(const e of n.x_)await e(!0)}async function ci(n){for(const e of n.x_)await e(!1)}function $h(n,e){const t=re(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),da(t)?ha(t):Er(t).Xo()&&ua(t,e))}function ca(n,e){const t=re(n),r=Er(t);t.F_.delete(e),r.Xo()&&Hh(t,e),t.F_.size===0&&(r.Xo()?r.n_():$n(t)&&t.N_.set("Unknown"))}function ua(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Er(n).P_(e)}function Hh(n,e){n.L_.xe(e),Er(n).I_(e)}function ha(n){n.L_=new S_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Er(n).start(),n.N_.w_()}function da(n){return $n(n)&&!Er(n).Zo()&&n.F_.size>0}function $n(n){return re(n).M_.size===0}function Gh(n){n.L_=void 0}async function Rv(n){n.N_.set("Online")}async function Sv(n){n.F_.forEach((e,t)=>{ua(n,e)})}async function Cv(n,e){Gh(n),da(n)?(n.N_.D_(e),ha(n)):n.N_.set("Unknown")}async function Pv(n,e,t){if(n.N_.set("Online"),e instanceof Vh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await os(n,r)}else if(e instanceof zi?n.L_.Ke(e):e instanceof Dh?n.L_.He(e):n.L_.We(e),!t.isEqual(ne.min()))try{const r=await qh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.F_.get(h);d&&s.F_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=s.F_.get(c);if(!d)return;s.F_.set(c,d.withResumeToken(lt.EMPTY_BYTE_STRING,d.snapshotVersion)),Hh(s,c);const m=new fn(d.target,c,h,d.sequenceNumber);ua(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await os(n,r)}}async function os(n,e,t){if(!oi(e))throw e;n.M_.add(1),await ci(n),n.N_.set("Offline"),t||(t=()=>qh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await bs(n)})}function Wh(n,e){return e().catch(t=>os(n,t,e))}async function Rs(n){const e=re(n),t=In(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;kv(e);)try{const i=await fv(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,Dv(e,i)}catch(i){await os(e,i)}Kh(e)&&Qh(e)}function kv(n){return $n(n)&&n.v_.length<10}function Dv(n,e){n.v_.push(e);const t=In(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Kh(n){return $n(n)&&!In(n).Zo()&&n.v_.length>0}function Qh(n){In(n).start()}async function Vv(n){In(n).V_()}async function Nv(n){const e=In(n);for(const t of n.v_)e.d_(t.mutations)}async function Ov(n,e,t){const r=n.v_.shift(),i=ra.from(r,e,t);await Wh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Rs(n)}async function xv(n,e){e&&In(n).E_&&await async function(r,i){if(function(a){return A_(a)&&a!==L.ABORTED}(i.code)){const s=r.v_.shift();In(r).t_(),await Wh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Rs(r)}}(n,e),Kh(n)&&Qh(n)}async function Ic(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=$n(t);t.M_.add(3),await ci(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await bs(t)}async function Mv(n,e){const t=re(n);e?(t.M_.delete(2),await bs(t)):e||(t.M_.add(2),await ci(t),t.N_.set("Unknown"))}function Er(n){return n.B_||(n.B_=function(t,r,i){const s=re(t);return s.f_(),new Iv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Rv.bind(null,n),To:Sv.bind(null,n),Ao:Cv.bind(null,n),h_:Pv.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),da(n)?ha(n):n.N_.set("Unknown")):(await n.B_.stop(),Gh(n))})),n.B_}function In(n){return n.k_||(n.k_=function(t,r,i){const s=re(t);return s.f_(),new Tv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Vv.bind(null,n),Ao:xv.bind(null,n),R_:Nv.bind(null,n),A_:Ov.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Rs(n)):(await n.k_.stop(),n.v_.length>0&&(Q("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class fa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new fa(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(n,e){if(Yt("AsyncQueue",`${e}: ${n}`),oi(n))return new W(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class sr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Fr(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Tc{constructor(){this.q_=new Oe(Y.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):te():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class pr{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new pr(e,t,sr.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Lv{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Uv{constructor(){this.queries=new yr(e=>_h(e),ys),this.onlineState="Unknown",this.z_=new Set}}async function Fv(n,e){const t=re(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Lv,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=pa(a,`Initialization of query '${Xn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&ma(t)}async function Bv(n,e){const t=re(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qv(n,e){const t=re(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&ma(t)}function jv(n,e,t){const r=re(n),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(t);r.queries.delete(e)}function ma(n){n.z_.forEach(e=>{e.next()})}var Po,wc;(wc=Po||(Po={})).J_="default",wc.Cache="cache";class zv{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Po.Cache}}/**
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
 */class Jh{constructor(e){this.key=e}}class Yh{constructor(e){this.key=e}}class $v{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=vh(e),this.Ta=new sr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new Tc,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,m)=>{const p=i.get(d),w=Es(this.query,m)?m:null,E=!!p&&this.mutatedKeys.has(p.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;p&&w?p.data.isEqual(w.data)?E!==A&&(r.track({type:3,doc:w}),P=!0):this.Ra(p,w)||(r.track({type:2,doc:w}),P=!0,(c&&this.Ia(w,c)>0||h&&this.Ia(w,h)<0)&&(l=!0)):!p&&w?(r.track({type:0,doc:w}),P=!0):p&&!w&&(r.track({type:1,doc:p}),P=!0,(c||h)&&(l=!0)),P&&(w?(a=a.add(w),s=A?s.add(d):s.delete(d)):(a=a.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((d,m)=>function(w,E){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return A(w)-A(E)}(d.type,m.type)||this.Ia(d.doc,m.doc)),this.Va(r),i=i!=null&&i;const l=t&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new pr(this.query,e.Ta,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Tc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Yh(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Jh(r))}),t}pa(e){this.la=e.hs,this.Pa=oe();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return pr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gv{constructor(e){this.key=e,this.wa=!1}}class Wv{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new yr(l=>_h(l),ys),this.Da=new Map,this.Ca=new Set,this.va=new Oe(Y.comparator),this.Fa=new Map,this.Ma=new oa,this.xa={},this.Oa=new Map,this.Na=fr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Kv(n,e,t=!0){const r=rd(n);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Xh(r,e,t,!0),i}async function Qv(n,e){const t=rd(n);await Xh(t,e,!0,!1)}async function Xh(n,e,t,r){const i=await pv(n.localStore,Ut(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Jv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&$h(n.remoteStore,i),l}async function Jv(n,e,t,r,i){n.Ba=(m,p,w)=>async function(A,P,U,F){let x=P.view.da(U);x.Xi&&(x=await vc(A.localStore,P.query,!1).then(({documents:y})=>P.view.da(y,x)));const B=F&&F.targetChanges.get(P.targetId),$=F&&F.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(x,A.isPrimaryClient,B,$);return bc(A,P.targetId,M.fa),M.snapshot}(n,m,p,w);const s=await vc(n.localStore,e,!0),a=new $v(e,s.hs),l=a.da(s.documents),c=li.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);bc(n,t,h.fa);const d=new Hv(e,t,a);return n.ba.set(e,d),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function Yv(n,e,t){const r=re(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!ys(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Co(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ca(r.remoteStore,i.targetId),ko(r,i.targetId)}).catch(si)):(ko(r,i.targetId),await Co(r.localStore,i.targetId,!0))}async function Xv(n,e){const t=re(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ca(t.remoteStore,r.targetId))}async function Zv(n,e,t){const r=oy(n);try{const i=await function(a,l){const c=re(a),h=He.now(),d=l.reduce((w,E)=>w.add(E.key),oe());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let E=Xt(),A=oe();return c.os.getEntries(w,d).next(P=>{E=P,E.forEach((U,F)=>{F.isValidDocument()||(A=A.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,E)).next(P=>{m=P;const U=[];for(const F of l){const x=y_(F,m.get(F.key).overlayedDocument);x!=null&&U.push(new An(F.key,x,ch(x.value.mapValue),Tt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,U,l)}).next(P=>{p=P;const U=P.applyToLocalDocumentSet(m,A);return c.documentOverlayCache.saveOverlays(w,P.batchId,U)})}).then(()=>({batchId:p.batchId,changes:Eh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new Oe(_e)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,i.batchId,t),await ui(r,i.changes),await Rs(r.remoteStore)}catch(i){const s=pa(i,"Failed to persist write");t.reject(s)}}async function Zh(n,e){const t=re(n);try{const r=await hv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Fa.get(s);a&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?ke(a.wa):i.removedDocuments.size>0&&(ke(a.wa),a.wa=!1))}),await ui(t,r,e)}catch(r){await si(r)}}function Ac(n,e,t){const r=re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((s,a)=>{const l=a.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=re(a);c.onlineState=l;let h=!1;c.queries.forEach((d,m)=>{for(const p of m.U_)p.j_(l)&&(h=!0)}),h&&ma(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ey(n,e,t){const r=re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),s=i&&i.key;if(s){let a=new Oe(Y.comparator);a=a.insert(s,st.newNoDocument(s,ne.min()));const l=oe().add(s),c=new ws(ne.min(),new Map,new Oe(_e),a,l);await Zh(r,c),r.va=r.va.remove(s),r.Fa.delete(e),ga(r)}else await Co(r.localStore,e,!1).then(()=>ko(r,e,t)).catch(si)}async function ty(n,e){const t=re(n),r=e.batch.batchId;try{const i=await uv(t.localStore,e);td(t,r,null),ed(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ui(t,i)}catch(i){await si(i)}}async function ny(n,e,t){const r=re(n);try{const i=await function(a,l){const c=re(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(ke(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);td(r,e,t),ed(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ui(r,i)}catch(i){await si(i)}}function ed(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function td(n,e,t){const r=re(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function ko(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||nd(n,r)})}function nd(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(ca(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),ga(n))}function bc(n,e,t){for(const r of t)r instanceof Jh?(n.Ma.addReference(r.key,e),ry(n,r)):r instanceof Yh?(Q("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||nd(n,r.key)):te()}function ry(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(Q("SyncEngine","New document in limbo: "+t),n.Ca.add(r),ga(n))}function ga(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new Y(Pe.fromString(e)),r=n.Na.next();n.Fa.set(r,new Gv(t)),n.va=n.va.insert(t,r),$h(n.remoteStore,new fn(Ut(gh(t.path)),r,"TargetPurposeLimboResolution",Jo.oe))}}async function ui(n,e,t){const r=re(n),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){i.push(h);const d=la.Ki(c.targetId,h);s.push(d)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(c,h){const d=re(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>q.forEach(h,p=>q.forEach(p.qi,w=>d.persistence.referenceDelegate.addReference(m,p.targetId,w)).next(()=>q.forEach(p.Qi,w=>d.persistence.referenceDelegate.removeReference(m,p.targetId,w)))))}catch(m){if(!oi(m))throw m;Q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const w=d.ns.get(p),E=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(E);d.ns=d.ns.insert(p,A)}}}(r.localStore,s))}async function iy(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await Bh(t.localStore,e);t.currentUser=e,function(s,a){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new W(L.CANCELLED,a))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ui(t,r.us)}}function sy(n,e){const t=re(n),r=t.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let i=oe();const s=t.Da.get(e);if(!s)return i;for(const a of s){const l=t.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function rd(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ey.bind(null,e),e.Sa.h_=qv.bind(null,e.eventManager),e.Sa.ka=jv.bind(null,e.eventManager),e}function oy(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ty.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ny.bind(null,e),e}class Rc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=As(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return cv(this.persistence,new av,e.initialUser,this.serializer)}createPersistence(e){return new iv(aa.Hr,this.serializer)}createSharedClientState(e){return new gv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ay{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ac(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iy.bind(null,this.syncEngine),await Mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uv}()}createDatastore(e){const t=As(e.databaseInfo.databaseId),r=function(s){return new Ev(s)}(e.databaseInfo);return function(s,a,l,c){return new wv(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new bv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ac(this.syncEngine,t,0),function(){return Ec.D()?new Ec:new _v}())}createSyncEngine(e,t){return function(i,s,a,l,c,h,d){const m=new Wv(i,s,a,l,c,h);return d&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=re(r);Q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ci(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class ly{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class cy{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=oh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=pa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lo(n,e){n.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Sc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hy(n);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ic(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ic(e.remoteStore,i)),n._onlineComponents=e}function uy(n){return n.name==="FirebaseError"?n.code===L.FAILED_PRECONDITION||n.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function hy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await lo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!uy(t))throw t;lr("Error using user provided cache. Falling back to memory cache: "+t),await lo(n,new Rc)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await lo(n,new Rc);return n._offlineComponents}async function id(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Sc(n,n._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Sc(n,new ay))),n._onlineComponents}function dy(n){return id(n).then(e=>e.syncEngine)}async function fy(n){const e=await id(n),t=e.eventManager;return t.onListen=Kv.bind(null,e.syncEngine),t.onUnlisten=Yv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Qv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xv.bind(null,e.syncEngine),t}function py(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const d=new ly({next:p=>{a.enqueueAndForget(()=>Bv(s,m)),p.fromCache&&c.source==="server"?h.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new zv(l,d,{includeMetadataChanges:!0,ra:!0});return Fv(s,m)}(await fy(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function sd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Cc=new Map;/**
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
 */function od(n,e,t){if(!t)throw new W(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function my(n,e,t,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pc(n){if(!Y.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function kc(n){if(Y.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ss(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te()}function Zt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ss(n);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function gy(n,e){if(e<=0)throw new W(L.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Dc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}my("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pg;switch(r.type){case"firstParty":return new Ng(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Cc.get(t);r&&(Q("ComponentProvider","Removing Datastore"),Cc.delete(t),r.terminate())}(this),Promise.resolve()}}function _y(n,e,t,r={}){var i;const s=(n=Zt(n,Cs))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=it.MOCK_USER;else{l=sf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new it(h)}n._authCredentials=new kg(new sh(l,c))}}/**
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
 */class tn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tn(this.firestore,e,this._query)}}class vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class vn extends tn{constructor(e,t,r){super(e,t,gh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Y(e))}withConverter(e){return new vn(this.firestore,e,this._path)}}function dt(n,e,...t){if(n=Ke(n),od("collection","path",e),n instanceof Cs){const r=Pe.fromString(e,...t);return kc(r),new vn(n,null,r)}{if(!(n instanceof vt||n instanceof vn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return kc(r),new vn(n.firestore,null,r)}}function qn(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=oh.newId()),od("doc","path",e),n instanceof Cs){const r=Pe.fromString(e,...t);return Pc(r),new vt(n,null,new Y(r))}{if(!(n instanceof vt||n instanceof vn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Pc(r),new vt(n.firestore,n instanceof vn?n.converter:null,new Y(r))}}/**
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
 */class vy{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new jh(this,"async_queue_retry"),this.hu=()=>{const t=ao();t&&Q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=ao();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new _n;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!oi(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Yt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=fa.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&te()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Ir extends Cs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new vy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ld(this),this._firestoreClient.terminate()}}function yy(n,e){const t=typeof n=="object"?n:yu(),r=typeof n=="string"?n:"(default)",i=Mo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nf("firestore");s&&_y(i,...s)}return i}function ad(n){return n._firestoreClient||ld(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ld(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,h,d){return new Gg(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,sd(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new cy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(lt.fromBase64String(e))}catch(t){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mr(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ps{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _a{constructor(e){this._methodName=e}}/**
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
 */class va{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const Ey=/^__.*__$/;class Iy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new An(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class cd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new An(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ud(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class ya{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ya(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return as(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(ud(this.fu)&&Ey.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Ty{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||As(e)}Fu(e,t,r,i=!1){return new ya({fu:e,methodName:t,vu:r,path:Ye.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hi(n){const e=n._freezeSettings(),t=As(n._databaseId);return new Ty(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hd(n,e,t,r,i,s={}){const a=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);Ea("Data must be an object, but it was:",a,r);const l=fd(r,a);let c,h;if(s.merge)c=new It(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const p=Do(e,m,t);if(!a.contains(p))throw new W(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);md(d,p)||d.push(p)}c=new It(d),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new Iy(new _t(l),c,h)}class ks extends _a{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ks}}function wy(n,e,t,r){const i=n.Fu(1,e,t);Ea("Data must be an object, but it was:",i,r);const s=[],a=_t.empty();jn(r,(c,h)=>{const d=Ia(e,c,t);h=Ke(h);const m=i.Su(d);if(h instanceof ks)s.push(d);else{const p=di(h,m);p!=null&&(s.push(d),a.set(d,p))}});const l=new It(s);return new cd(a,l,i.fieldTransforms)}function Ay(n,e,t,r,i,s){const a=n.Fu(1,e,t),l=[Do(e,r,t)],c=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(Do(e,s[p])),c.push(s[p+1]);const h=[],d=_t.empty();for(let p=l.length-1;p>=0;--p)if(!md(h,l[p])){const w=l[p];let E=c[p];E=Ke(E);const A=a.Su(w);if(E instanceof ks)h.push(w);else{const P=di(E,A);P!=null&&(h.push(w),d.set(w,P))}}const m=new It(h);return new cd(d,m,a.fieldTransforms)}function dd(n,e,t,r=!1){return di(t,n.Fu(r?4:3,e))}function di(n,e){if(pd(n=Ke(n)))return Ea("Unsupported field value:",e,n),fd(n,e);if(n instanceof _a)return function(r,i){if(!ud(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=di(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:ss(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ss(i.serializer,s)}}if(r instanceof va)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mr)return{bytesValue:Nh(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ss(r)}`)}(n,e)}function fd(n,e){const t={};return ah(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(n,(r,i)=>{const s=di(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function pd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof He||n instanceof va||n instanceof mr||n instanceof vt||n instanceof _a)}function Ea(n,e,t){if(!pd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ss(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Do(n,e,t){if((e=Ke(e))instanceof Ps)return e._internalPath;if(typeof e=="string")return Ia(n,e);throw as("Field path arguments must be of type string or ",n,!1,void 0,t)}const by=new RegExp("[~\\*/\\[\\]]");function Ia(n,e,t){if(e.search(by)>=0)throw as(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ps(...e.split("."))._internalPath}catch{throw as(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function as(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new W(L.INVALID_ARGUMENT,l+n+c)}function md(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ta{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ry(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ds("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ry extends Ta{data(){return super.data()}}function Ds(n,e){return typeof e=="string"?Ia(n,e):e instanceof Ps?e._internalPath:e._delegate._internalPath}/**
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
 */function Sy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wa{}class Vs extends wa{}function Bt(n,e,...t){let r=[];e instanceof wa&&r.push(e),r=r.concat(t),function(s){const a=s.filter(c=>c instanceof Aa).length,l=s.filter(c=>c instanceof Ns).length;if(a>1||a>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ns extends Vs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ns(e,t,r)}_apply(e){const t=this._parse(e);return gd(e._query,t),new tn(e.firestore,e.converter,wo(e._query,t))}_parse(e){const t=hi(e.firestore);return function(s,a,l,c,h,d,m){let p;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Nc(m,d);const w=[];for(const E of m)w.push(Vc(c,s,E));p={arrayValue:{values:w}}}else p=Vc(c,s,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Nc(m,d),p=dd(l,a,m,d==="in"||d==="not-in");return je.create(h,d,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function On(n,e,t){const r=e,i=Ds("where",n);return Ns._create(i,r,t)}class Aa extends wa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Aa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)gd(a,c),a=wo(a,c)}(e._query,t),new tn(e.firestore,e.converter,wo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ba extends Vs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ba(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yr(s,a)}(e._query,this._field,this._direction);return new tn(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new zn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function ls(n,e="asc"){const t=e,r=Ds("orderBy",n);return ba._create(r,t)}class Ra extends Vs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ra(e,t,r)}_apply(e){return new tn(e.firestore,e.converter,ns(e._query,this._limit,this._limitType))}}function Vo(n){return gy("limit",n),Ra._create("limit",n,"F")}class Sa extends Vs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Sa(e,t,r)}_apply(e){const t=Py(e,this.type,this._docOrFields,this._inclusive);return new tn(e.firestore,e.converter,function(i,s){return new zn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function Cy(...n){return Sa._create("startAfter",n,!1)}function Py(n,e,t,r){if(t[0]=Ke(t[0]),t[0]instanceof Ta)return function(s,a,l,c,h){if(!c)throw new W(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const m of ir(s))if(m.field.isKeyField())d.push(ts(a,c.key));else{const p=c.data.field(m.field);if(vs(p))throw new W(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const w=m.field.canonicalString();throw new W(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(p)}return new dr(d,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=hi(n.firestore);return function(a,l,c,h,d,m){const p=a.explicitOrderBy;if(d.length>p.length)throw new W(L.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let E=0;E<d.length;E++){const A=d[E];if(p[E].field.isKeyField()){if(typeof A!="string")throw new W(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof A}`);if(!ta(a)&&A.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${A}' contains a slash.`);const P=a.path.child(Pe.fromString(A));if(!Y.isDocumentKey(P))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const U=new Y(P);w.push(ts(l,U))}else{const P=dd(c,h,A);w.push(P)}}return new dr(w,m)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Vc(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ta(e)&&t.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Pe.fromString(t));if(!Y.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ts(n,new Y(r))}if(t instanceof vt)return ts(n,t._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ss(t)}.`)}function Nc(n,e){if(!Array.isArray(n)||n.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gd(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ky{convertValue(e,t="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new va(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Yo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=En(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Pe.fromString(e);ke(Fh(r));const i=new Qr(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(t)||Yt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function _d(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Oi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dy extends Ta{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ds("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class $i extends Dy{data(e={}){return super.data(e)}}class Vy{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new $i(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new $i(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new $i(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Ny(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ny(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class Oy extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function kt(n){n=Zt(n,tn);const e=Zt(n.firestore,Ir),t=ad(e),r=new Oy(e);return Sy(n._query),py(t,n._query).then(i=>new Vy(e,r,n,i))}function xy(n,e,t){n=Zt(n,vt);const r=Zt(n.firestore,Ir),i=_d(n.converter,e,t);return xs(r,[hd(hi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Tt.none())])}function My(n,e,t,...r){n=Zt(n,vt);const i=Zt(n.firestore,Ir),s=hi(i);let a;return a=typeof(e=Ke(e))=="string"||e instanceof Ps?Ay(s,"updateDoc",n._key,e,t,r):wy(s,"updateDoc",n._key,e),xs(i,[a.toMutation(n._key,Tt.exists(!0))])}function cs(n){return xs(Zt(n.firestore,Ir),[new na(n._key,Tt.none())])}function Os(n,e){const t=Zt(n.firestore,Ir),r=qn(n),i=_d(n.converter,e);return xs(t,[hd(hi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Tt.exists(!1))]).then(()=>r)}function xs(n,e){return function(r,i){const s=new _n;return r.asyncQueue.enqueueAndForget(async()=>Zv(await dy(r),i,s)),s.promise}(ad(n),e)}(function(e,t=!0){(function(i){vr=i})(gr),or(new xn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ir(new Dg(r.getProvider("auth-internal")),new xg(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(h.options.projectId,d)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),gn(Xl,"4.6.3",e),gn(Xl,"4.6.3","esm2017")})();const Ly={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},vd=vu(Ly),us=Zi(vd),Me=yy(vd),se=hs(0),Lr=hs(0),No=hs(0),Uy=hs(0),Fy=""+new URL("../assets/logo.BgbdimHT.png",import.meta.url).href;function Oc(n,e,t){const r=n.slice();return r[46]=e[t],r}function xc(n,e,t){const r=n.slice();return r[49]=e[t],r}function Mc(n){let e,t="추가",r,i,s="채택",a,l,c="삭제",h,d,m="문제신고 확인",p,w;return{c(){e=D("button"),e.textContent=t,r=j(),i=D("button"),i.textContent=s,a=j(),l=D("button"),l.textContent=c,h=j(),d=D("button"),d.textContent=m,this.h()},l(E){e=V(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1lsf66u"&&(e.textContent=t),r=z(E),i=V(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-gljqo6"&&(i.textContent=s),a=z(E),l=V(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1ipyraa"&&(l.textContent=c),h=z(E),d=V(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(d)!=="svelte-18d8umu"&&(d.textContent=m),this.h()},h(){S(e,"class","top-right-button0 svelte-1xsehlv"),S(i,"class","top-right-button svelte-1xsehlv"),S(l,"class","top-right-button6 svelte-1xsehlv"),S(d,"class","top-right-button8 svelte-1xsehlv")},m(E,A){J(E,e,A),J(E,r,A),J(E,i,A),J(E,a,A),J(E,l,A),J(E,h,A),J(E,d,A),p||(w=[K(e,"click",n[13]),K(i,"click",n[9]),K(l,"click",n[10]),K(d,"click",n[20])],p=!0)},p:ve,d(E){E&&(O(e),O(r),O(i),O(a),O(l),O(h),O(d)),p=!1,At(w)}}}function Lc(n){let e,t=at(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Uc(xc(n,t,i));return{c(){e=D("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=V(i,"DIV",{class:!0});var s=G(e);for(let a=0;a<r.length;a+=1)r[a].l(s);s.forEach(O),this.h()},h(){S(e,"class","search-history svelte-1xsehlv")},m(i,s){J(i,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(i,s){if(s[0]&524289){t=at(i[0]);let a;for(a=0;a<t.length;a+=1){const l=xc(i,t,a);r[a]?r[a].p(l,s):(r[a]=Uc(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(i){i&&O(e),wn(r,i)}}}function Uc(n){let e,t=n[49]+"",r,i,s;function a(){return n[28](n[49])}return{c(){e=D("div"),r=Re(t),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=G(e);r=Se(c,t),c.forEach(O),this.h()},h(){S(e,"class","history-item svelte-1xsehlv")},m(l,c){J(l,e,c),b(e,r),i||(s=K(e,"click",a),i=!0)},p(l,c){n=l,c[0]&1&&t!==(t=n[49]+"")&&ze(r,t)},d(l){l&&O(e),i=!1,s()}}}function Fc(n){let e,t=n[46]+"",r,i,s;return{c(){e=D("div"),r=Re(t),this.h()},l(a){e=V(a,"DIV",{class:!0});var l=G(e);r=Se(l,t),l.forEach(O),this.h()},h(){S(e,"class","ranking-item svelte-1xsehlv")},m(a,l){J(a,e,l),b(e,r),i||(s=K(e,"click",function(){Gd(n[14](n[46]))&&n[14](n[46]).apply(this,arguments)}),i=!0)},p(a,l){n=a,l[0]&128&&t!==(t=n[46]+"")&&ze(r,t)},d(a){a&&O(e),i=!1,s()}}}function Bc(n){let e,t,r,i,s="Close",a,l,c=!n[5]&&qc();return{c(){e=D("div"),t=D("div"),c&&c.c(),r=j(),i=D("button"),i.textContent=s,this.h()},l(h){e=V(h,"DIV",{class:!0});var d=G(e);t=V(d,"DIV",{class:!0});var m=G(t);c&&c.l(m),r=z(m),i=V(m,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-au4vm5"&&(i.textContent=s),m.forEach(O),d.forEach(O),this.h()},h(){S(i,"class","close-button svelte-1xsehlv"),S(t,"class","modal svelte-1xsehlv"),S(e,"class","modal-background svelte-1xsehlv")},m(h,d){J(h,e,d),b(e,t),c&&c.m(t,null),b(t,r),b(t,i),a||(l=[K(i,"click",n[18]),K(t,"click",Kd(n[24])),K(e,"click",n[18])],a=!0)},p(h,d){h[5]?c&&(c.d(1),c=null):c||(c=qc(),c.c(),c.m(t,r))},d(h){h&&O(e),c&&c.d(),a=!1,At(l)}}}function qc(n){let e,t="아직 추가되지 않은 단어입니다..";return{c(){e=D("div"),e.textContent=t,this.h()},l(r){e=V(r,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1tgxuji"&&(e.textContent=t),this.h()},h(){S(e,"class","modal-explain svelte-1xsehlv")},m(r,i){J(r,e,i)},d(r){r&&O(e)}}}function By(n){let e,t,r,i,s,a,l="로그아웃",c,h,d="단어 신청",m,p,w="문제 신고",E,A,P,U,F,x,B,$="모든 단어 보러가기",M,y,_,v,I="게임 하러가기",R,C,T,ie,pe="게임 랭킹",Ae,De,he,Le,Ee="실시간 랭킹 TOP3",me,Ie,ce,St,$e,X="신한사의 모든 단어들은 사람들의 설문에 의해 만들어졌으며, 설명글은 사람들의 설문과 GPT-4o에 의해 만들어졌습니다.",ge,Te,ct="신한사의 모든 단어들이 가진 성향은 신한사와 관련이 있지 않습니다.",mt,yt,nn,Ne=n[6]=="host.wproject00@gmail.com"&&Mc(n),Ue=n[1]&&n[0].length>0&&Lc(n),Mt=at(n[7]),Fe=[];for(let de=0;de<Mt.length;de+=1)Fe[de]=Fc(Oc(n,Mt,de));let Ge=n[2]&&Bc(n);return{c(){e=D("div"),t=D("img"),i=j(),Ne&&Ne.c(),s=j(),a=D("button"),a.textContent=l,c=j(),h=D("button"),h.textContent=d,m=j(),p=D("button"),p.textContent=w,E=j(),A=D("div"),P=D("input"),U=j(),F=D("br"),x=D("div"),B=D("span"),B.textContent=$,M=j(),y=D("br"),_=D("div"),v=D("span"),v.textContent=I,R=j(),C=D("br"),T=D("div"),ie=D("span"),ie.textContent=pe,Ae=j(),Ue&&Ue.c(),De=j(),he=D("div"),Le=D("h3"),Le.textContent=Ee,me=j();for(let de=0;de<Fe.length;de+=1)Fe[de].c();Ie=j(),ce=D("br"),St=j(),$e=D("span"),$e.textContent=X,ge=j(),Te=D("span"),Te.textContent=ct,mt=j(),Ge&&Ge.c(),this.h()},l(de){e=V(de,"DIV",{id:!0,class:!0});var be=G(e);t=V(be,"IMG",{class:!0,src:!0,alt:!0}),i=z(be),Ne&&Ne.l(be),s=z(be),a=V(be,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-2c08k3"&&(a.textContent=l),c=z(be),h=V(be,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(h)!=="svelte-82mn25"&&(h.textContent=d),m=z(be),p=V(be,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(p)!=="svelte-1u7hrdt"&&(p.textContent=w),E=z(be),A=V(be,"DIV",{class:!0});var ae=G(A);P=V(ae,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),U=z(ae),F=V(ae,"BR",{}),x=V(ae,"DIV",{id:!0,class:!0});var rn=G(x);B=V(rn,"SPAN",{class:!0,"data-svelte-h":!0}),Z(B)!=="svelte-l9cdgh"&&(B.textContent=$),rn.forEach(O),M=z(ae),y=V(ae,"BR",{}),_=V(ae,"DIV",{id:!0,class:!0});var fi=G(_);v=V(fi,"SPAN",{"data-svelte-h":!0}),Z(v)!=="svelte-1lad3db"&&(v.textContent=I),fi.forEach(O),R=z(ae),C=V(ae,"BR",{}),T=V(ae,"DIV",{id:!0,class:!0});var Hn=G(T);ie=V(Hn,"SPAN",{"data-svelte-h":!0}),Z(ie)!=="svelte-bsmezi"&&(ie.textContent=pe),Hn.forEach(O),Ae=z(ae),Ue&&Ue.l(ae),ae.forEach(O),De=z(be),he=V(be,"DIV",{class:!0});var gt=G(he);Le=V(gt,"H3",{"data-svelte-h":!0}),Z(Le)!=="svelte-1f2184c"&&(Le.textContent=Ee),me=z(gt);for(let Gn=0;Gn<Fe.length;Gn+=1)Fe[Gn].l(gt);Ie=z(gt),ce=V(gt,"BR",{}),St=z(gt),$e=V(gt,"SPAN",{class:!0,"data-svelte-h":!0}),Z($e)!=="svelte-1bxi7v"&&($e.textContent=X),ge=z(gt),Te=V(gt,"SPAN",{class:!0,"data-svelte-h":!0}),Z(Te)!=="svelte-9ggiv9"&&(Te.textContent=ct),gt.forEach(O),mt=z(be),Ge&&Ge.l(be),be.forEach(O),this.h()},h(){S(t,"class","logo_img svelte-1xsehlv"),Hd(t.src,r=Fy)||S(t,"src",r),S(t,"alt","logo"),S(a,"class","top-right-button2 svelte-1xsehlv"),S(h,"class","top-right-button3 svelte-1xsehlv"),S(p,"class","top-right-button7 svelte-1xsehlv"),S(P,"type","text"),S(P,"autocomplete","off"),S(P,"id","sb"),S(P,"class","search-bar svelte-1xsehlv"),S(P,"placeholder","검색..."),P.value=n[3],S(B,"class","svelte-1xsehlv"),S(x,"id","lego"),S(x,"class","svelte-1xsehlv"),S(_,"id","logo"),S(_,"class","svelte-1xsehlv"),S(T,"id","log"),S(T,"class","svelte-1xsehlv"),S(A,"class","search-container svelte-1xsehlv"),S($e,"class","ex_te svelte-1xsehlv"),S(Te,"class","ex_te svelte-1xsehlv"),S(he,"class","ranking-list svelte-1xsehlv"),S(e,"id","condiv"),S(e,"class","svelte-1xsehlv")},m(de,be){J(de,e,be),b(e,t),b(e,i),Ne&&Ne.m(e,null),b(e,s),b(e,a),b(e,c),b(e,h),b(e,m),b(e,p),b(e,E),b(e,A),b(A,P),b(A,U),b(A,F),b(A,x),b(x,B),b(A,M),b(A,y),b(A,_),b(_,v),b(A,R),b(A,C),b(A,T),b(T,ie),b(A,Ae),Ue&&Ue.m(A,null),b(e,De),b(e,he),b(he,Le),b(he,me);for(let ae=0;ae<Fe.length;ae+=1)Fe[ae]&&Fe[ae].m(he,null);b(he,Ie),b(he,ce),b(he,St),b(he,$e),b(he,ge),b(he,Te),b(e,mt),Ge&&Ge.m(e,null),yt||(nn=[K(a,"click",n[12]),K(h,"click",n[8]),K(p,"click",n[11]),K(P,"input",n[25]),K(P,"keydown",n[15]),K(P,"focus",n[16]),K(P,"blur",n[17]),K(P,"compositionstart",n[26]),K(P,"compositionend",n[27]),K(B,"click",n[21]),K(v,"click",n[22]),K(ie,"click",n[23])],yt=!0)},p(de,be){if(de[6]=="host.wproject00@gmail.com"?Ne?Ne.p(de,be):(Ne=Mc(de),Ne.c(),Ne.m(e,s)):Ne&&(Ne.d(1),Ne=null),be[0]&8&&P.value!==de[3]&&(P.value=de[3]),de[1]&&de[0].length>0?Ue?Ue.p(de,be):(Ue=Lc(de),Ue.c(),Ue.m(A,null)):Ue&&(Ue.d(1),Ue=null),be[0]&16512){Mt=at(de[7]);let ae;for(ae=0;ae<Mt.length;ae+=1){const rn=Oc(de,Mt,ae);Fe[ae]?Fe[ae].p(rn,be):(Fe[ae]=Fc(rn),Fe[ae].c(),Fe[ae].m(he,Ie))}for(;ae<Fe.length;ae+=1)Fe[ae].d(1);Fe.length=Mt.length}de[2]?Ge?Ge.p(de,be):(Ge=Bc(de),Ge.c(),Ge.m(e,null)):Ge&&(Ge.d(1),Ge=null)},i:ve,o:ve,d(de){de&&O(e),Ne&&Ne.d(),Ue&&Ue.d(),wn(Fe,de),Ge&&Ge.d(),yt=!1,At(nn)}}}function qy(n,e,t){let r,i,s;ot(n,se,X=>t(34,r=X)),ot(n,Uy,X=>t(35,X)),ot(n,No,X=>t(36,i=X)),ot(n,Lr,X=>t(37,s=X));let a=[],l=!1,c=!1,h="",d=!1,m=[],p=null,w="";Tn(()=>{pe(),v()});function E(){we(se,r=3,r)}function A(){we(se,r=4,r)}const P=()=>{we(se,r=5,r)},U=()=>{we(se,r=6,r)};new Promise((X,ge)=>{Go(us,Te=>{Te?X(Te.email):ge("No user is signed in")})}).then(X=>t(6,w=X)).catch(X=>console.error(X));const x=async()=>{try{await gm(us)}catch(X){console.error("Error signing out:",X)}};function B(){we(se,r=1,r)}async function $(X){t(1,l=!1);const ge=await Ae(X);m=ge.matches,t(5,p=ge.exactMatch),console.log(m),p?(we(Lr,s=p.title,s),p.value,p.explain,p.count+1,we(se,r=2,r)):we(Lr,s="",s),t(2,c=!0)}async function M(X){if(!d&&X.key==="Enter"&&(t(3,h=X.target.value.trim()),h)){_(h),X.target.value="",t(1,l=!1);const ge=await Ae(h);m=ge.matches,t(5,p=ge.exactMatch),console.log(m),p?(we(Lr,s=p.title,s),p.value,p.explain,p.count+1,y(s),we(se,r=2,r)):we(Lr,s="",s),t(2,c=!0)}}async function y(X){try{const ge=Bt(dt(Me,"datas"),On("title","==",X)),Te=await kt(ge);Te.empty?console.log("No matching documents found."):Te.forEach(async ct=>{const mt=qn(Me,"datas",ct.id),yt=ct.data().count||0;await My(mt,{count:yt+1}),console.log(`Document with ID ${ct.id} updated successfully`)})}catch(ge){console.error("Error updating document: ",ge)}}function _(X){const ge=JSON.parse(sessionStorage.getItem("searchHistory"))||[],Te=[X,...ge.filter(ct=>ct!==X)];Te.length>3&&Te.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(Te)),t(0,a=Te)}function v(){const X=JSON.parse(sessionStorage.getItem("searchHistory"))||[];t(0,a=X)}function I(){t(1,l=!0)}function R(){setTimeout(()=>t(1,l=!1),100)}function C(){t(2,c=!1)}function T(X){document.getElementById("sb").value=X,t(1,l=!1)}let ie=[];async function pe(){try{const X=Bt(dt(Me,"datas"),ls("count","desc"),Vo(3)),ge=await kt(X);t(7,ie=ge.docs.map(Te=>Te.data().title))}catch(X){console.error("Error fetching documents: ",X)}}async function Ae(X){const ge=dt(Me,"datas"),Te=Bt(ge,On("title",">=",X),On("title","<=",X+"")),ct=await kt(Te),mt=[];let yt=null;return ct.forEach(nn=>{const Ne=nn.data();mt.push(Ne),Ne.title===X&&(yt=Ne)}),we(No,i=mt,i),{exactMatch:yt,matches:mt}}const De=()=>{we(se,r=7,r)},he=()=>{we(se,r=8,r)},Le=()=>{we(se,r=9,r)},Ee=()=>{we(se,r=10,r)};function me(X){Wd.call(this,n,X)}return[a,l,c,h,d,p,w,ie,E,A,P,U,x,B,$,M,I,R,C,T,De,he,Le,Ee,me,X=>t(3,h=X.target.value),()=>t(4,d=!0),()=>t(4,d=!1),X=>T(X)]}class jy extends bt{constructor(e){super(),Rt(this,e,qy,By,wt,{},null,[-1,-1])}}function jc(n){let e,t;return{c(){e=D("div"),t=Re(n[5]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=G(e);t=Se(i,n[5]),i.forEach(O),this.h()},h(){S(e,"class","error-message svelte-e5fo8p")},m(r,i){J(r,e,i),b(e,t)},p(r,i){i&32&&ze(t,r[5])},d(r){r&&O(e)}}}function zy(n){let e,t,r,i,s="Title",a,l,c,h,d,m="Value",p,w,E,A,P,U="Explain",F,x,B,$,M,y="Tag (과학:0 / 일상:1)",_,v,I,R,C,T,ie,pe,Ae,De="Cancel",he,Le,Ee=n[5]&&jc(n);return{c(){e=D("div"),t=D("div"),r=D("div"),i=D("label"),i.textContent=s,a=j(),l=D("input"),c=j(),h=D("div"),d=D("label"),d.textContent=m,p=j(),w=D("input"),E=j(),A=D("div"),P=D("label"),P.textContent=U,F=j(),x=D("input"),B=j(),$=D("div"),M=D("label"),M.textContent=y,_=j(),v=D("input"),I=j(),Ee&&Ee.c(),R=j(),C=D("div"),T=D("button"),ie=Re("Submit"),pe=j(),Ae=D("button"),Ae.textContent=De,this.h()},l(me){e=V(me,"DIV",{class:!0});var Ie=G(e);t=V(Ie,"DIV",{class:!0});var ce=G(t);r=V(ce,"DIV",{class:!0});var St=G(r);i=V(St,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Z(i)!=="svelte-1weqgc2"&&(i.textContent=s),a=z(St),l=V(St,"INPUT",{class:!0,type:!0,id:!0}),St.forEach(O),c=z(ce),h=V(ce,"DIV",{class:!0});var $e=G(h);d=V($e,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Z(d)!=="svelte-ry2554"&&(d.textContent=m),p=z($e),w=V($e,"INPUT",{class:!0,type:!0,id:!0}),$e.forEach(O),E=z(ce),A=V(ce,"DIV",{class:!0});var X=G(A);P=V(X,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Z(P)!=="svelte-2n35pc"&&(P.textContent=U),F=z(X),x=V(X,"INPUT",{class:!0,type:!0,id:!0}),X.forEach(O),B=z(ce),$=V(ce,"DIV",{class:!0});var ge=G($);M=V(ge,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Z(M)!=="svelte-1lp5d2m"&&(M.textContent=y),_=z(ge),v=V(ge,"INPUT",{class:!0,type:!0,id:!0}),ge.forEach(O),I=z(ce),Ee&&Ee.l(ce),R=z(ce),C=V(ce,"DIV",{class:!0});var Te=G(C);T=V(Te,"BUTTON",{class:!0});var ct=G(T);ie=Se(ct,"Submit"),ct.forEach(O),pe=z(Te),Ae=V(Te,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(Ae)!=="svelte-9k415x"&&(Ae.textContent=De),Te.forEach(O),ce.forEach(O),Ie.forEach(O),this.h()},h(){S(i,"class","form-label svelte-e5fo8p"),S(i,"for","title"),S(l,"class","form-input svelte-e5fo8p"),S(l,"type","text"),S(l,"id","title"),S(r,"class","form-group svelte-e5fo8p"),S(d,"class","form-label svelte-e5fo8p"),S(d,"for","value"),S(w,"class","form-input svelte-e5fo8p"),S(w,"type","text"),S(w,"id","value"),S(h,"class","form-group svelte-e5fo8p"),S(P,"class","form-label svelte-e5fo8p"),S(P,"for","explain"),S(x,"class","form-input svelte-e5fo8p"),S(x,"type","text"),S(x,"id","explain"),S(A,"class","form-group svelte-e5fo8p"),S(M,"class","form-label svelte-e5fo8p"),S(M,"for","tag1"),S(v,"class","form-input svelte-e5fo8p"),S(v,"type","text"),S(v,"id","tag1"),S($,"class","form-group svelte-e5fo8p"),S(T,"class","form-button svelte-e5fo8p"),T.disabled=n[4],S(Ae,"class","form-button cancel-button svelte-e5fo8p"),S(C,"class","form-buttons svelte-e5fo8p"),S(t,"class","form-content svelte-e5fo8p"),S(e,"class","form-container svelte-e5fo8p")},m(me,Ie){J(me,e,Ie),b(e,t),b(t,r),b(r,i),b(r,a),b(r,l),ye(l,n[0]),b(t,c),b(t,h),b(h,d),b(h,p),b(h,w),ye(w,n[1]),b(t,E),b(t,A),b(A,P),b(A,F),b(A,x),ye(x,n[2]),b(t,B),b(t,$),b($,M),b($,_),b($,v),ye(v,n[3]),b(t,I),Ee&&Ee.m(t,null),b(t,R),b(t,C),b(C,T),b(T,ie),b(C,pe),b(C,Ae),he||(Le=[K(l,"input",n[8]),K(w,"input",n[9]),K(x,"input",n[10]),K(v,"input",n[11]),K(T,"click",n[6]),K(Ae,"click",n[7])],he=!0)},p(me,[Ie]){Ie&1&&l.value!==me[0]&&ye(l,me[0]),Ie&2&&w.value!==me[1]&&ye(w,me[1]),Ie&4&&x.value!==me[2]&&ye(x,me[2]),Ie&8&&v.value!==me[3]&&ye(v,me[3]),me[5]?Ee?Ee.p(me,Ie):(Ee=jc(me),Ee.c(),Ee.m(t,R)):Ee&&(Ee.d(1),Ee=null),Ie&16&&(T.disabled=me[4])},i:ve,o:ve,d(me){me&&O(e),Ee&&Ee.d(),he=!1,At(Le)}}}function $y(n,e,t){let r;ot(n,se,P=>t(12,r=P));let i="",s="",a="",l="",c=!1,h="";const d=async()=>{if(!i||!s||!a||!l){t(5,h="All fields are required!");return}t(4,c=!0),t(5,h="");try{if(!(await kt(Bt(dt(Me,"datas"),On("title","==",i)))).empty){t(5,h="Title already exists! Please choose a different title.");return}await Os(dt(Me,"datas"),{title:i,value:s,explain:a,tag1:l,count:0}),t(0,i=""),t(1,s=""),t(2,a=""),t(3,l=""),we(se,r=0,r)}catch(P){console.error("Error adding document: ",P),t(5,h="Error adding document!")}finally{t(4,c=!1)}},m=()=>{t(0,i=""),t(1,s=""),t(2,a=""),t(3,l=""),t(5,h=""),we(se,r=0,r)};function p(){i=this.value,t(0,i)}function w(){s=this.value,t(1,s)}function E(){a=this.value,t(2,a)}function A(){l=this.value,t(3,l)}return[i,s,a,l,c,h,d,m,p,w,E,A]}class Hy extends bt{constructor(e){super(),Rt(this,e,$y,zy,wt,{})}}function zc(n,e,t){const r=n.slice();return r[9]=e[t],r}function $c(n){let e,t,r=n[9].title+"",i,s,a,l=n[9].value+"",c,h,d,m=n[9].explain+"",p,w,E,A,P="검색수:",U,F=n[9].count+"",x,B;return{c(){e=D("div"),t=D("h3"),i=Re(r),s=j(),a=D("p"),c=Re(l),h=j(),d=D("p"),p=Re(m),w=j(),E=D("p"),A=D("strong"),A.textContent=P,U=j(),x=Re(F),B=j(),this.h()},l($){e=V($,"DIV",{class:!0});var M=G(e);t=V(M,"H3",{class:!0});var y=G(t);i=Se(y,r),y.forEach(O),s=z(M),a=V(M,"P",{class:!0});var _=G(a);c=Se(_,l),_.forEach(O),h=z(M),d=V(M,"P",{class:!0});var v=G(d);p=Se(v,m),v.forEach(O),w=z(M),E=V(M,"P",{class:!0});var I=G(E);A=V(I,"STRONG",{"data-svelte-h":!0}),Z(A)!=="svelte-14ncqy5"&&(A.textContent=P),U=z(I),x=Se(I,F),I.forEach(O),B=z(M),M.forEach(O),this.h()},h(){S(t,"class","svelte-1rmbmaw"),S(a,"class","svelte-1rmbmaw"),S(d,"class","svelte-1rmbmaw"),S(E,"class","count svelte-1rmbmaw"),S(e,"class","box svelte-1rmbmaw")},m($,M){J($,e,M),b(e,t),b(t,i),b(e,s),b(e,a),b(a,c),b(e,h),b(e,d),b(d,p),b(e,w),b(e,E),b(E,A),b(E,U),b(E,x),b(e,B)},p($,M){M&1&&r!==(r=$[9].title+"")&&ze(i,r),M&1&&l!==(l=$[9].value+"")&&ze(c,l),M&1&&m!==(m=$[9].explain+"")&&ze(p,m),M&1&&F!==(F=$[9].count+"")&&ze(x,F)},d($){$&&O(e)}}}function Gy(n){let e,t,r,i,s,a="Main",l,c,h,d="모두",m,p,w="과학",E,A,P="일상",U,F,x,B,$=at(n[2](n[0])),M=[];for(let y=0;y<$.length;y+=1)M[y]=$c(zc(n,$,y));return{c(){e=D("div"),t=D("div"),r=j(),i=D("div"),s=D("button"),s.textContent=a,l=j(),c=D("div"),h=D("button"),h.textContent=d,m=j(),p=D("button"),p.textContent=w,E=j(),A=D("button"),A.textContent=P,U=j(),F=D("div");for(let y=0;y<M.length;y+=1)M[y].c();this.h()},l(y){e=V(y,"DIV",{class:!0});var _=G(e);t=V(_,"DIV",{id:!0,class:!0}),G(t).forEach(O),r=z(_),i=V(_,"DIV",{class:!0});var v=G(i);s=V(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-8azga8"&&(s.textContent=a),v.forEach(O),l=z(_),c=V(_,"DIV",{class:!0});var I=G(c);h=V(I,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(h)!=="svelte-8435q5"&&(h.textContent=d),m=z(I),p=V(I,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(p)!=="svelte-1oelwts"&&(p.textContent=w),E=z(I),A=V(I,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(A)!=="svelte-16xrhag"&&(A.textContent=P),I.forEach(O),U=z(_),F=V(_,"DIV",{class:!0});var R=G(F);for(let C=0;C<M.length;C+=1)M[C].l(R);R.forEach(O),_.forEach(O),this.h()},h(){S(t,"id","bb"),S(t,"class","svelte-1rmbmaw"),S(s,"class","close-button svelte-1rmbmaw"),S(i,"class","close-button_div svelte-1rmbmaw"),S(h,"class","filter-button svelte-1rmbmaw"),Yn(h,"active",n[0]==="모두"),S(p,"class","filter-button svelte-1rmbmaw"),Yn(p,"active",n[0]==="과학"),S(A,"class","filter-button svelte-1rmbmaw"),Yn(A,"active",n[0]==="일상"),S(c,"class","filter-buttons svelte-1rmbmaw"),S(F,"class","container svelte-1rmbmaw"),S(e,"class","bbd svelte-1rmbmaw")},m(y,_){J(y,e,_),b(e,t),b(e,r),b(e,i),b(i,s),b(e,l),b(e,c),b(c,h),b(c,m),b(c,p),b(c,E),b(c,A),b(e,U),b(e,F);for(let v=0;v<M.length;v+=1)M[v]&&M[v].m(F,null);x||(B=[K(s,"click",n[1]),K(h,"click",n[3]),K(p,"click",n[4]),K(A,"click",n[5])],x=!0)},p(y,[_]){if(_&1&&Yn(h,"active",y[0]==="모두"),_&1&&Yn(p,"active",y[0]==="과학"),_&1&&Yn(A,"active",y[0]==="일상"),_&5){$=at(y[2](y[0]));let v;for(v=0;v<$.length;v+=1){const I=zc(y,$,v);M[v]?M[v].p(I,_):(M[v]=$c(I),M[v].c(),M[v].m(F,null))}for(;v<M.length;v+=1)M[v].d(1);M.length=$.length}},i:ve,o:ve,d(y){y&&O(e),wn(M,y),x=!1,At(B)}}}function Wy(n,e,t){let r,i;ot(n,se,p=>t(6,r=p)),ot(n,No,p=>t(7,i=p));let s=i,a="모두";return[a,()=>{we(se,r=0,r)},p=>{if(p==="모두")return s;if(p==="과학")return s.filter(w=>w.tag1===0);if(p==="일상")return s.filter(w=>w.tag1===1)},()=>t(0,a="모두"),()=>t(0,a="과학"),()=>t(0,a="일상")]}class Ky extends bt{constructor(e){super(),Rt(this,e,Wy,Gy,wt,{})}}function Hc(n){let e,t;return{c(){e=D("div"),t=Re(n[4]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=G(e);t=Se(i,n[4]),i.forEach(O),this.h()},h(){S(e,"class","error-message svelte-urqb75")},m(r,i){J(r,e,i),b(e,t)},p(r,i){i&16&&ze(t,r[4])},d(r){r&&O(e)}}}function Qy(n){let e,t,r,i,s="신조어",a,l,c,h,d,m="신조어 뜻",p,w,E,A,P,U="신조어의 설명",F,x,B,$,M,y,_,v,I,R="취소",C,T,ie=n[4]&&Hc(n);return{c(){e=D("div"),t=D("div"),r=D("div"),i=D("label"),i.textContent=s,a=j(),l=D("input"),c=j(),h=D("div"),d=D("label"),d.textContent=m,p=j(),w=D("input"),E=j(),A=D("div"),P=D("label"),P.textContent=U,F=j(),x=D("input"),B=j(),ie&&ie.c(),$=j(),M=D("div"),y=D("button"),_=Re("보내기"),v=j(),I=D("button"),I.textContent=R,this.h()},l(pe){e=V(pe,"DIV",{class:!0});var Ae=G(e);t=V(Ae,"DIV",{class:!0});var De=G(t);r=V(De,"DIV",{class:!0});var he=G(r);i=V(he,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Z(i)!=="svelte-1xvfvjg"&&(i.textContent=s),a=z(he),l=V(he,"INPUT",{class:!0,type:!0,id:!0}),he.forEach(O),c=z(De),h=V(De,"DIV",{class:!0});var Le=G(h);d=V(Le,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Z(d)!=="svelte-1iv6t5o"&&(d.textContent=m),p=z(Le),w=V(Le,"INPUT",{class:!0,type:!0,id:!0}),Le.forEach(O),E=z(De),A=V(De,"DIV",{class:!0});var Ee=G(A);P=V(Ee,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Z(P)!=="svelte-lyiets"&&(P.textContent=U),F=z(Ee),x=V(Ee,"INPUT",{class:!0,type:!0,id:!0}),Ee.forEach(O),B=z(De),ie&&ie.l(De),$=z(De),M=V(De,"DIV",{class:!0});var me=G(M);y=V(me,"BUTTON",{class:!0});var Ie=G(y);_=Se(Ie,"보내기"),Ie.forEach(O),v=z(me),I=V(me,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(I)!=="svelte-1fn0s3j"&&(I.textContent=R),me.forEach(O),De.forEach(O),Ae.forEach(O),this.h()},h(){S(i,"class","form-label svelte-urqb75"),S(i,"for","title"),S(l,"class","form-input svelte-urqb75"),S(l,"type","text"),S(l,"id","title"),S(r,"class","form-group svelte-urqb75"),S(d,"class","form-label svelte-urqb75"),S(d,"for","value"),S(w,"class","form-input svelte-urqb75"),S(w,"type","text"),S(w,"id","value"),S(h,"class","form-group svelte-urqb75"),S(P,"class","form-label svelte-urqb75"),S(P,"for","explain"),S(x,"class","form-input svelte-urqb75"),S(x,"type","text"),S(x,"id","explain"),S(A,"class","form-group svelte-urqb75"),S(y,"class","form-button svelte-urqb75"),y.disabled=n[3],S(I,"class","form-button cancel-button svelte-urqb75"),S(M,"class","form-buttons svelte-urqb75"),S(t,"class","form-content svelte-urqb75"),S(e,"class","form-container svelte-urqb75")},m(pe,Ae){J(pe,e,Ae),b(e,t),b(t,r),b(r,i),b(r,a),b(r,l),ye(l,n[0]),b(t,c),b(t,h),b(h,d),b(h,p),b(h,w),ye(w,n[1]),b(t,E),b(t,A),b(A,P),b(A,F),b(A,x),ye(x,n[2]),b(t,B),ie&&ie.m(t,null),b(t,$),b(t,M),b(M,y),b(y,_),b(M,v),b(M,I),C||(T=[K(l,"input",n[7]),K(w,"input",n[8]),K(x,"input",n[9]),K(y,"click",n[5]),K(I,"click",n[6])],C=!0)},p(pe,[Ae]){Ae&1&&l.value!==pe[0]&&ye(l,pe[0]),Ae&2&&w.value!==pe[1]&&ye(w,pe[1]),Ae&4&&x.value!==pe[2]&&ye(x,pe[2]),pe[4]?ie?ie.p(pe,Ae):(ie=Hc(pe),ie.c(),ie.m(t,$)):ie&&(ie.d(1),ie=null),Ae&8&&(y.disabled=pe[3])},i:ve,o:ve,d(pe){pe&&O(e),ie&&ie.d(),C=!1,At(T)}}}function Jy(n,e,t){let r;ot(n,se,E=>t(10,r=E));let i="",s="",a="",l=!1,c="";const h=async()=>{if(!i||!s||!a){t(4,c="All fields are required!");return}t(3,l=!0),t(4,c="");try{if(!(await kt(Bt(dt(Me,"beta"),On("title","==",i)))).empty){t(4,c="Title already exists! Please choose a different title.");return}await Os(dt(Me,"beta"),{title:i,value:s,explain:a,count:0}),t(0,i=""),t(1,s=""),t(2,a=""),we(se,r=0,r)}catch(E){console.error("Error adding document: ",E),t(4,c="Error adding document!")}finally{t(3,l=!1)}},d=()=>{t(0,i=""),t(1,s=""),t(2,a=""),t(4,c=""),we(se,r=0,r)};function m(){i=this.value,t(0,i)}function p(){s=this.value,t(1,s)}function w(){a=this.value,t(2,a)}return[i,s,a,l,c,h,d,m,p,w]}class Yy extends bt{constructor(e){super(),Rt(this,e,Jy,Qy,wt,{})}}function Gc(n,e,t){const r=n.slice();return r[11]=e[t],r[12]=e,r[13]=t,r}function Wc(n){let e,t,r,i,s,a,l,c,h,d,m,p="채택",w,E,A="삭제",P,U,F;function x(){n[4].call(t,n[12],n[13])}function B(){n[5].call(i,n[12],n[13])}function $(){n[6].call(a,n[12],n[13])}function M(){n[7].call(c,n[12],n[13])}function y(){return n[8](n[11])}function _(){return n[9](n[11])}return{c(){e=D("div"),t=D("input"),r=j(),i=D("input"),s=j(),a=D("input"),l=j(),c=D("input"),h=j(),d=D("div"),m=D("button"),m.textContent=p,w=j(),E=D("button"),E.textContent=A,P=j(),this.h()},l(v){e=V(v,"DIV",{class:!0});var I=G(e);t=V(I,"INPUT",{type:!0,class:!0}),r=z(I),i=V(I,"INPUT",{type:!0,class:!0}),s=z(I),a=V(I,"INPUT",{type:!0,class:!0}),l=z(I),c=V(I,"INPUT",{type:!0,class:!0}),h=z(I),d=V(I,"DIV",{});var R=G(d);m=V(R,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(m)!=="svelte-14dxe7a"&&(m.textContent=p),w=z(R),E=V(R,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(E)!=="svelte-zdjrp5"&&(E.textContent=A),R.forEach(O),P=z(I),I.forEach(O),this.h()},h(){S(t,"type","text"),S(t,"class","svelte-52a7gl"),S(i,"type","text"),S(i,"class","svelte-52a7gl"),S(a,"type","text"),S(a,"class","svelte-52a7gl"),S(c,"type","number"),S(c,"class","svelte-52a7gl"),S(m,"class","accept-button svelte-52a7gl"),S(E,"class","delete-button svelte-52a7gl"),S(e,"class","item-box svelte-52a7gl")},m(v,I){J(v,e,I),b(e,t),ye(t,n[11].title),b(e,r),b(e,i),ye(i,n[11].value),b(e,s),b(e,a),ye(a,n[11].explain),b(e,l),b(e,c),ye(c,n[11].count),b(e,h),b(e,d),b(d,m),b(d,w),b(d,E),b(e,P),U||(F=[K(t,"input",x),K(i,"input",B),K(a,"input",$),K(c,"input",M),K(m,"click",y),K(E,"click",_)],U=!0)},p(v,I){n=v,I&1&&t.value!==n[11].title&&ye(t,n[11].title),I&1&&i.value!==n[11].value&&ye(i,n[11].value),I&1&&a.value!==n[11].explain&&ye(a,n[11].explain),I&1&&au(c.value)!==n[11].count&&ye(c,n[11].count)},d(v){v&&O(e),U=!1,At(F)}}}function Xy(n){let e,t,r="Main",i,s,a,l,c=at(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Wc(Gc(n,c,d));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=V(d,"DIV",{class:!0});var m=G(e);t=V(m,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-8azga8"&&(t.textContent=r),m.forEach(O),i=z(d),s=V(d,"DIV",{class:!0});var p=G(s);for(let w=0;w<h.length;w+=1)h[w].l(p);p.forEach(O),this.h()},h(){S(t,"class","close-button svelte-52a7gl"),S(e,"class","close-button_div svelte-52a7gl"),S(s,"class","container svelte-52a7gl")},m(d,m){J(d,e,m),b(e,t),J(d,i,m),J(d,s,m);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(s,null);a||(l=K(t,"click",n[3]),a=!0)},p(d,[m]){if(m&7){c=at(d[0]);let p;for(p=0;p<c.length;p+=1){const w=Gc(d,c,p);h[p]?h[p].p(w,m):(h[p]=Wc(w),h[p].c(),h[p].m(s,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=c.length}},i:ve,o:ve,d(d){d&&(O(e),O(i),O(s)),wn(h,d),a=!1,l()}}}function Zy(n,e,t){let r;ot(n,se,E=>t(10,r=E));let i=[];Tn(async()=>{const E=await kt(dt(Me,"beta"));t(0,i=E.docs.map(A=>({id:A.id,...A.data()})))});const s=async(E,A,P,U,F)=>{try{await Os(dt(Me,"datas"),{title:A,value:P,explain:U,count:F}),await cs(qn(Me,"beta",E)),console.log("Document successfully written and deleted!"),t(0,i=i.filter(x=>x.id!==E))}catch(x){console.error("Error adding or deleting document: ",x)}},a=async E=>{try{await cs(qn(Me,"beta",E)),console.log("Document successfully deleted!"),t(0,i=i.filter(A=>A.id!==E))}catch(A){console.error("Error deleting document: ",A)}},l=()=>{we(se,r=0,r)};function c(E,A){E[A].title=this.value,t(0,i)}function h(E,A){E[A].value=this.value,t(0,i)}function d(E,A){E[A].explain=this.value,t(0,i)}function m(E,A){E[A].count=au(this.value),t(0,i)}return[i,s,a,l,c,h,d,m,E=>s(E.id,E.title,E.value,E.explain,E.count),E=>a(E.id)]}class eE extends bt{constructor(e){super(),Rt(this,e,Zy,Xy,wt,{})}}function tE(n){let e,t,r="Main",i,s,a,l,c,h,d,m="삭제",p,w;return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("main"),a=D("div"),l=D("input"),c=j(),h=D("div"),d=D("button"),d.textContent=m,this.h()},l(E){e=V(E,"DIV",{class:!0});var A=G(e);t=V(A,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-8azga8"&&(t.textContent=r),A.forEach(O),i=z(E),s=V(E,"MAIN",{class:!0});var P=G(s);a=V(P,"DIV",{style:!0});var U=G(a);l=V(U,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),c=z(U),h=V(U,"DIV",{style:!0});var F=G(h);d=V(F,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),Z(d)!=="svelte-1w89kx2"&&(d.textContent=m),F.forEach(O),U.forEach(O),P.forEach(O),this.h()},h(){S(t,"class","close-button svelte-mo15yd"),S(e,"class","close-button_div svelte-mo15yd"),S(l,"type","text"),S(l,"placeholder","Title 입력"),ln(l,"width","300px"),ln(l,"padding","10px"),ln(l,"font-size","16px"),S(l,"class","svelte-mo15yd"),ln(d,"padding","10px 20px"),ln(d,"font-size","16px"),S(d,"class","svelte-mo15yd"),ln(h,"margin-top","20px"),ln(a,"text-align","center"),ln(a,"margin-top","50px"),S(s,"class","svelte-mo15yd")},m(E,A){J(E,e,A),b(e,t),J(E,i,A),J(E,s,A),b(s,a),b(a,l),ye(l,n[0]),b(a,c),b(a,h),b(h,d),p||(w=[K(t,"click",n[2]),K(l,"input",n[3]),K(d,"click",n[1])],p=!0)},p(E,[A]){A&1&&l.value!==E[0]&&ye(l,E[0])},i:ve,o:ve,d(E){E&&(O(e),O(i),O(s)),p=!1,At(w)}}}function nE(n,e,t){let r;ot(n,se,c=>t(4,r=c));let i="";async function s(){if(!i.trim()){alert("Please enter a search term");return}try{const c=Bt(dt(Me,"datas"),On("title","==",i)),h=await kt(c),d=[];h.forEach(m=>{d.push(cs(qn(Me,"datas",m.id)))}),await Promise.all(d),alert("값이 삭제됨"),t(0,i="")}catch(c){console.error("Error deleting documents: ",c),alert("Error deleting documents")}}const a=()=>{we(se,r=0,r)};function l(){i=this.value,t(0,i)}return[i,s,a,l]}class rE extends bt{constructor(e){super(),Rt(this,e,nE,tE,wt,{})}}function Kc(n){let e,t;return{c(){e=D("div"),t=Re(n[1]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=G(e);t=Se(i,n[1]),i.forEach(O),this.h()},h(){S(e,"class","error svelte-171w347")},m(r,i){J(r,e,i),b(e,t)},p(r,i){i&2&&ze(t,r[1])},d(r){r&&O(e)}}}function iE(n){let e,t,r,i="Main",s,a,l,c,h="Submit",d,m,p,w=n[1]&&Kc(n);return{c(){e=D("div"),t=D("div"),r=D("button"),r.textContent=i,s=j(),a=D("input"),l=j(),c=D("button"),c.textContent=h,d=j(),w&&w.c(),this.h()},l(E){e=V(E,"DIV",{class:!0});var A=G(e);t=V(A,"DIV",{class:!0});var P=G(t);r=V(P,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(r)!=="svelte-8azga8"&&(r.textContent=i),P.forEach(O),s=z(A),a=V(A,"INPUT",{type:!0,placeholder:!0,class:!0}),l=z(A),c=V(A,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(c)!=="svelte-1gle3be"&&(c.textContent=h),d=z(A),w&&w.l(A),A.forEach(O),this.h()},h(){S(r,"class","close-button svelte-171w347"),S(t,"class","close-button_div svelte-171w347"),S(a,"type","text"),S(a,"placeholder","신고내용 입력 (50자 까지)"),S(a,"class","svelte-171w347"),S(c,"class","svelte-171w347"),S(e,"class","container svelte-171w347")},m(E,A){J(E,e,A),b(e,t),b(t,r),b(e,s),b(e,a),ye(a,n[0]),b(e,l),b(e,c),b(e,d),w&&w.m(e,null),m||(p=[K(r,"click",n[3]),K(a,"input",n[4]),K(c,"click",n[2])],m=!0)},p(E,[A]){A&1&&a.value!==E[0]&&ye(a,E[0]),E[1]?w?w.p(E,A):(w=Kc(E),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i:ve,o:ve,d(E){E&&O(e),w&&w.d(),m=!1,At(p)}}}function sE(n,e,t){let r;ot(n,se,h=>t(6,r=h));let i="",s="";Tn(()=>{const h=Zi();Go(h,d=>{d&&d.email})});const a=async()=>{if(i.length>50){t(1,s="50자를 넘지 말아주세요");return}const d=Zi().currentUser;if(!d){t(1,s="내용을 적어주세요");return}try{await Os(dt(Me,"report"),{user:d.email,contents:i}),t(0,i=""),t(1,s="")}catch(m){t(1,s="Error adding document: "+m.message)}},l=()=>{we(se,r=0,r)};function c(){i=this.value,t(0,i)}return[i,s,a,l,c]}class oE extends bt{constructor(e){super(),Rt(this,e,sE,iE,wt,{})}}function Qc(n,e,t){const r=n.slice();return r[8]=e[t],r[9]=e,r[10]=t,r}function Jc(n){let e,t,r,i,s,a,l="삭제",c,h,d;function m(){n[3].call(t,n[9],n[10])}function p(){n[4].call(i,n[9],n[10])}function w(){return n[5](n[8])}return{c(){e=D("div"),t=D("input"),r=j(),i=D("input"),s=j(),a=D("button"),a.textContent=l,c=j(),this.h()},l(E){e=V(E,"DIV",{class:!0});var A=G(e);t=V(A,"INPUT",{type:!0,class:!0}),r=z(A),i=V(A,"INPUT",{type:!0,class:!0}),s=z(A),a=V(A,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-1i7wviu"&&(a.textContent=l),c=z(A),A.forEach(O),this.h()},h(){S(t,"type","text"),t.readOnly=!0,S(t,"class","svelte-1evkr3z"),S(i,"type","text"),i.readOnly=!0,S(i,"class","svelte-1evkr3z"),S(a,"class","svelte-1evkr3z"),S(e,"class","item-box svelte-1evkr3z")},m(E,A){J(E,e,A),b(e,t),ye(t,n[8].user),b(e,r),b(e,i),ye(i,n[8].contents),b(e,s),b(e,a),b(e,c),h||(d=[K(t,"input",m),K(i,"input",p),K(a,"click",w)],h=!0)},p(E,A){n=E,A&1&&t.value!==n[8].user&&ye(t,n[8].user),A&1&&i.value!==n[8].contents&&ye(i,n[8].contents)},d(E){E&&O(e),h=!1,At(d)}}}function aE(n){let e,t,r="Main",i,s,a,l,c=at(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Jc(Qc(n,c,d));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=V(d,"DIV",{class:!0});var m=G(e);t=V(m,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-8azga8"&&(t.textContent=r),m.forEach(O),i=z(d),s=V(d,"DIV",{class:!0});var p=G(s);for(let w=0;w<h.length;w+=1)h[w].l(p);p.forEach(O),this.h()},h(){S(t,"class","close-button svelte-1evkr3z"),S(e,"class","close-button_div svelte-1evkr3z"),S(s,"class","container svelte-1evkr3z")},m(d,m){J(d,e,m),b(e,t),J(d,i,m),J(d,s,m);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(s,null);a||(l=K(t,"click",n[2]),a=!0)},p(d,[m]){if(m&3){c=at(d[0]);let p;for(p=0;p<c.length;p+=1){const w=Qc(d,c,p);h[p]?h[p].p(w,m):(h[p]=Jc(w),h[p].c(),h[p].m(s,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=c.length}},i:ve,o:ve,d(d){d&&(O(e),O(i),O(s)),wn(h,d),a=!1,l()}}}function lE(n,e,t){let r;ot(n,se,m=>t(6,r=m));let i=[];Tn(async()=>{await s()});async function s(){const m=await kt(dt(Me,"report"));t(0,i=m.docs.map(p=>({id:p.id,...p.data()})))}async function a(m){try{console.log(`Attempting to delete documents with title: ${m}`);const p=Bt(dt(Me,"report"),On("contents","==",m)),w=await kt(p);if(w.empty){console.log("No matching documents found"),alert("No matching documents found");return}const E=[];w.forEach(A=>{console.log(`Deleting document with ID: ${A.id}`),E.push(cs(qn(Me,"report",A.id)))}),await Promise.all(E),alert("값이 삭제됨"),await s()}catch(p){console.error("Error deleting documents: ",p),alert("Error deleting documents")}}const l=()=>{we(se,r=0,r)};function c(m,p){m[p].user=this.value,t(0,i)}function h(m,p){m[p].contents=this.value,t(0,i)}return[i,a,l,c,h,m=>a(m.contents)]}class cE extends bt{constructor(e){super(),Rt(this,e,lE,aE,wt,{})}}function Yc(n,e,t){const r=n.slice();return r[14]=e[t],r}function Xc(n){let e,t,r=n[14].title+"",i,s,a,l=n[14].value+"",c,h,d,m=n[14].explain+"",p,w,E,A,P=n[14].count+"",U;return{c(){e=D("div"),t=D("div"),i=Re(r),s=j(),a=D("div"),c=Re(l),h=j(),d=D("div"),p=Re(m),w=j(),E=D("div"),A=Re("Count: "),U=Re(P),this.h()},l(F){e=V(F,"DIV",{class:!0});var x=G(e);t=V(x,"DIV",{class:!0});var B=G(t);i=Se(B,r),B.forEach(O),s=z(x),a=V(x,"DIV",{class:!0});var $=G(a);c=Se($,l),$.forEach(O),h=z(x),d=V(x,"DIV",{class:!0});var M=G(d);p=Se(M,m),M.forEach(O),w=z(x),E=V(x,"DIV",{class:!0});var y=G(E);A=Se(y,"Count: "),U=Se(y,P),y.forEach(O),x.forEach(O),this.h()},h(){S(t,"class","title svelte-1hrvasf"),S(a,"class","value svelte-1hrvasf"),S(d,"class","explain svelte-1hrvasf"),S(E,"class","count svelte-1hrvasf"),S(e,"class","box svelte-1hrvasf")},m(F,x){J(F,e,x),b(e,t),b(t,i),b(e,s),b(e,a),b(a,c),b(e,h),b(e,d),b(d,p),b(e,w),b(e,E),b(E,A),b(E,U)},p(F,x){x&1&&r!==(r=F[14].title+"")&&ze(i,r),x&1&&l!==(l=F[14].value+"")&&ze(c,l),x&1&&m!==(m=F[14].explain+"")&&ze(p,m),x&1&&P!==(P=F[14].count+"")&&ze(U,P)},d(F){F&&O(e)}}}function Zc(n){let e,t,r="더 불러오기",i,s;return{c(){e=D("div"),t=D("button"),t.textContent=r,this.h()},l(a){e=V(a,"DIV",{class:!0});var l=G(e);t=V(l,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1bu3r2x"&&(t.textContent=r),l.forEach(O),this.h()},h(){S(t,"class","svelte-1hrvasf"),S(e,"class","button-container svelte-1hrvasf")},m(a,l){J(a,e,l),b(e,t),i||(s=K(t,"click",n[8]),i=!0)},p:ve,d(a){a&&O(e),i=!1,s()}}}function uE(n){let e,t,r="Main",i,s,a,l,c="모두",h,d,m="과학",p,w,E="일상",A,P,U,F,x=at(n[0]),B=[];for(let M=0;M<x.length;M+=1)B[M]=Xc(Yc(n,x,M));let $=!n[1]&&Zc(n);return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("main"),a=D("div"),l=D("button"),l.textContent=c,h=j(),d=D("button"),d.textContent=m,p=j(),w=D("button"),w.textContent=E,A=j();for(let M=0;M<B.length;M+=1)B[M].c();P=j(),$&&$.c(),this.h()},l(M){e=V(M,"DIV",{class:!0});var y=G(e);t=V(y,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-8azga8"&&(t.textContent=r),y.forEach(O),i=z(M),s=V(M,"MAIN",{class:!0});var _=G(s);a=V(_,"DIV",{class:!0});var v=G(a);l=V(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1ksrl11"&&(l.textContent=c),h=z(v),d=V(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(d)!=="svelte-13hb43t"&&(d.textContent=m),p=z(v),w=V(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(w)!=="svelte-gbfb6x"&&(w.textContent=E),v.forEach(O),A=z(_);for(let I=0;I<B.length;I+=1)B[I].l(_);P=z(_),$&&$.l(_),_.forEach(O),this.h()},h(){S(t,"class","close-button svelte-1hrvasf"),S(e,"class","close-button_div svelte-1hrvasf"),S(l,"class","svelte-1hrvasf"),S(d,"class","svelte-1hrvasf"),S(w,"class","svelte-1hrvasf"),S(a,"class","button-container svelte-1hrvasf"),S(s,"class","svelte-1hrvasf")},m(M,y){J(M,e,y),b(e,t),J(M,i,y),J(M,s,y),b(s,a),b(a,l),b(a,h),b(a,d),b(a,p),b(a,w),b(s,A);for(let _=0;_<B.length;_+=1)B[_]&&B[_].m(s,null);b(s,P),$&&$.m(s,null),U||(F=[K(t,"click",n[4]),K(l,"click",n[5]),K(d,"click",n[6]),K(w,"click",n[7])],U=!0)},p(M,[y]){if(y&1){x=at(M[0]);let _;for(_=0;_<x.length;_+=1){const v=Yc(M,x,_);B[_]?B[_].p(v,y):(B[_]=Xc(v),B[_].c(),B[_].m(s,P))}for(;_<B.length;_+=1)B[_].d(1);B.length=x.length}M[1]?$&&($.d(1),$=null):$?$.p(M,y):($=Zc(M),$.c(),$.m(s,null))},i:ve,o:ve,d(M){M&&(O(e),O(i),O(s)),wn(B,M),$&&$.d(),U=!1,At(F)}}}function hE(n,e,t){let r;ot(n,se,U=>t(12,r=U));let i=[],s=[],a=null,l=!1,c="모두";const h=async(U=!1)=>{if(l)return;const F=dt(Me,"datas");let x;U&&a?x=Bt(F,ls("count","desc"),Cy(a),Vo(100)):x=Bt(F,ls("count","desc"),Vo(100));const B=await kt(x),$=B.docs.map(y=>y.data()),M=U?[...i,...$]:$;i=Array.from(new Set(M.map(y=>JSON.stringify(y)))).map(y=>JSON.parse(y)),d(),a=B.docs[B.docs.length-1],localStorage.setItem("datas",JSON.stringify(i)),localStorage.setItem("lastVisible",JSON.stringify(a)),$.length<100&&(t(1,l=!0),localStorage.setItem("allDataLoaded","true"))},d=()=>{t(0,s=[]),c==="모두"?t(0,s=i):c==="과학"?t(0,s=i.filter(U=>U.tag1===0)):c==="일상"&&t(0,s=i.filter(U=>U.tag1===1))},m=U=>{c=U,d()};return Tn(()=>{const U=localStorage.getItem("datas"),F=localStorage.getItem("lastVisible"),x=localStorage.getItem("allDataLoaded");U&&(i=JSON.parse(U),d()),F&&(a=JSON.parse(F)),x&&t(1,l=x==="true"),U||h()}),[s,l,h,m,()=>{we(se,r=0,r)},()=>m("모두"),()=>m("과학"),()=>m("일상"),()=>h(!0)]}class dE extends bt{constructor(e){super(),Rt(this,e,hE,uE,wt,{})}}const xi=[{title:"급못타",value:"급식들은 못깨는 타워의 줄임말.",explain:"로블록스라는 게임의 타워맵 중에서 급식이들(특히 중,고등학생들을 의미함)은 게임 실력이 부족해 깰 수 없는 타워를 의미한다."},{title:"G37",value:"YFIF",explain:"BGW"},{title:"가나",value:"다라",explain:"마바"},{title:"흑우",value:"호구를 달리 표현한 말.",explain:"친구들 간에서도 사용되지만, 특히 주식에서 높은 값에 종목을 샀다가 가격이 내려갔을 때 어쩔 수 없이 파는 사람들을 의미한다.   Ex) 나 이번에 큰돈 주고 이거 샀는데 좀 있으니까 가격이 내려갔어... 나 흑우짓 했네.."},{title:"우젤착",value:"우주에서 제일 착함",explain:" "},{title:"트민녀",value:"트랜드에 민감한 여자",explain:"‘트랜드에 민감한 여자’ 의 줄임말로, 트랜드를 따라가는 사람(여자)를 말합니다."},{title:"요즘남편 없던 아빠",value:" ",explain:"맞벌이 부부가 일상화되고 가사 노동 분담이 당연해지는 상황에서, 아내의 소득이 높다면 가장의 역할을 넘기고 내조하는 남편을 의미하는 말입니다."},{title:"오운완",value:"오늘 운동 완료",explain:"‘오늘 운동 완료’의 줄임말로, 오늘 자신이 세운 운동목표량을 완료하였다는 뜻입니다."},{title:"랜선여친",value:"온라인 여자친구",explain:"온라인으로 만난 여자친구를 의미한다. 예) 난 오늘 게임에서 랜선여친을 만들었다"},{title:"팬아저",value:"팬이 아니어도 저장",explain:"특정 연예인의 팬이 아니더라도 그 사람이 너무 매력적이거나 멋있어서 사진이나 영상을 저장한다는 의미이다. 예) 카리나를 보고 팬아저 했어"},{title:"긁",value:"긁히다, 친구의 비난 또는 장난에 자존심이 긁힌 상황",explain:"긁?"},{title:"KIJUL",value:"'기절'을 영어로 훈음한것.",explain:"'너무 힘들다. KIJUL 할것같아.'"},{title:"저메추",value:"저녁 메뉴 추천",explain:"‘저녁 메뉴 추천’ 의 줄임말로 저녁 식사 매뉴를 추천해달라는 뜻입니다."},{title:"핑프",value:"핑거 프린세스의 줄임말.",explain:"손가락만 사용하면 찾을 수 있는 정보를 찾지 않고 다른 사람에게 물어보는 사람을 일컫는 말 Ex) 너 핑프냐? 제발 나한테 물어보지 말고 좀 검색해.."},{title:"낄끼빠빠",value:"낄땐 끼고 빠질 땐 빠진다의 줄임말.",explain:"어떤 상황에서는 참여하고, 또 어떤 상황에서는 빠져야 한다는 것을 강조하는데 상황에 맞게 행동하라는 의미 예) 너 이런 상황에서는 좀 낄끼빠빠 해"},{title:"먹방",value:"먹는 방송",explain:"음식을 먹는 모습을 촬영하여 방송하는 콘텐츠를 의미한다. 예) 이번에 유튜브 컨텐츠로 먹방을 할거야"},{title:"DB",value:"담배라는 뜻",explain:"DamBae의 한국어 음절 첫 알파벳 철자를 따서 지었다."},{title:"페미",value:"페미니스트",explain:"성별에 따른 차별을 없애고, 사회적, 정치적, 경제적 평등을 이루기 위한 운동이나 사상을 지지하는 사람들 예)난 페미스트로서 여성 차별 반대 시위를 할거야"},{title:"럭키비키",value:"여자아이돌 아이브의 멤버 장원영이 사용하는 긍정표현",explain:"이거 완전 럭키비키잖아"},{title:"이끼끼끼",value:"가짜입니다",explain:"테스트"},{title:"수포자",value:"수학을 포기한 자의 줄임말.",explain:"수학을 너무 어려워하여 수학을 포기하고 다른 과목에만 매진하는 사람을 일컫는 말. Ex) 나 오늘부터 수포자 할게.."},{title:"스몸비",value:"스마트폰+좀비의 합성어",explain:"보통 현대인의 과도한 휴대폰 사용을 비꼬는 말이다. Ex) 최근 길거리에 스몸비가 점점 늘어나고 있다."},{title:"셀카",value:"셀프 카메라",explain:"자신이 스스로 핸드폰이나 카메라를 이용하여 자신을 찍는 것을 의미한다. 예) 나 오늘 셀카 좀 잘 찍히는 것 같아"},{title:"테스트",value:"값",explain:"설명"},{title:"노알라",value:"노무현+코알라의 줄임말.",explain:"귀엽다"},{title:"디엠",value:"다이렉트 메시지(direct message)의 줄임말.",explain:"인스타그램의 메시지 기능을 의미한다. Ex) 디엠 좀 보라고.."},{title:"응디",value:"엉덩이의 줄임말",explain:"  "},{title:"혼코노",value:"혼자서 코인 노래방",explain:"코인노래방을 혼자가서 즐기는 것을 의미한다. 예) 나 오늘은 혼코노 할 거야"},{title:"Liquidpolitan",value:"Liqud(액체)+Politan(시민)",explain:"‘액체’와 ‘시민’의 합성어로, 공간적인 지역 개념을 넘어 유연하게 변화하는 시민을 의미합니다."},{title:"한남",value:"한국 남자",explain:" "},{title:"돼지런하다",value:"돼지+부지런하다",explain:"'돼지'와 '부지런하다'를 합친말로, 평소에는 느리지만 먹을때만 부지런한 사람을 일컫는 말."},{title:"잼못타",value:"잼민이들은 못깨는 타워의 줄임말",explain:"로블록스라는 게임의 타워맵 중에서 잼민이들(특히 초등학생을 말함)은 게임 실력이 부족해 깰 수 없는 타워를 의미한다. "},{title:"학종",value:"학생종합생활기록",explain:" "},{title:"좋구알",value:"좋아요,구독,알림설정",explain:"유튜브나 인스타 릴스에서 본인 영상이나 컨텐츠에 좋아요와 구독 알림설정을 해달라는 의미  예)영상을 즐기셨다면 좋구알 해주세요!"},{title:"아싸",value:"아웃사이더",explain:"특정 그룹이나 사회에서 외곽에 있거나 고립된 사람을 의미한다. 예) 쟤는 친구도 없고 혼자 다니는걸 보니 아싸인가봐"},{title:"뭘니써",value:"뭘봐 니 할일이나 신경써",explain:" "},{title:"랜선남친",value:"온라인 남자친구",explain:"온라인으로 만난 남자친구를 의미한다. 예) 난 오늘 인터넷 커뮤니티에서 랜선남친을 만들었다"},{title:"빤쓰런",value:"빤쓰(팬티) + 런(뛰다)",explain:"어떤 상황에서든 빨리 도망치거나 회피하는 행동을 묘사할 때 사용된다. 예) 강아지가 쫒아온다 빤스런해~~"},{title:"솔까",value:"솔직히 까놓고 말해서",explain:"직설적으로 말할 때나 사실대로 말할 때 사용됨 예) 솔까 내가 좋아하는 사람이 너무 많아"},{title:"마상",value:"'마음의 상처' 의 줄임말 ",explain:"'나 마상 받았어'"},{title:"당모치",value:"당연히 모든 치킨은 옳다의 줄임말.",explain:"한국에서 치킨은 거의 치느님(치킨+하느님) 수준으로 신격화되어 불리는데, 특히 치킨을 사랑하는 사람들이 자주 사용하곤 한다."},{title:"버카충",value:"버스 카드 충전의 줄임말",explain:"청소년들 사이에선 잘 사용되지 않지만 그럼에도 대표적인 신조어 중 하나로 꼽힌다. Ex) A:야 너 갑자기 어디가냐  B:버카충 하고 옴 ㄱㄷ(기달)"},{title:"제당슈만",value:"제가 당신을 슈퍼스타로 만들어드릴게요 라는 뜻",explain:"일본 애니메이션인 [아이들리쉬 세븐]의 이즈미 이오리 라는 캐릭터의 대사이다. 아이돌을 좋아하는 팬들 사이에서 팬심을 표현하는 말로 자주 사용된다."},{title:"스핀 오프 프로젝트",value:" ",explain:"콘텐츠 산업에서 원작에서 파생된 작품을 의미하는 '스핀 오프' 개념이 다양한 영역으로 확대된 것을 뜻합니다."},{title:"인구론",value:"인문계 졸업자 90%가 논다",explain:" "},{title:"좋댓구알",value:"좋아요 댓글 구독 알림설정의 줄임말.",explain:"유튜브 시청자라면 알아야 할 4가지 요소로, 보통 크리에이터나 유튜버들이 많이 사용하고 요청한다,  Ex) 좋댓구알 부탁드려요!!!"},{title:"기니피그",value:"쥐",explain:"아닌가"},{title:"여가부",value:"여성가족부의 줄임말.",explain:"윤석열 정권이 폐지하겠다고 하였으나 시행하지 않고 있다. 양성평등을 위해 일하고 있지만 실제로는 성별 간의 갈등만을 일으킬 뿐이다."},{title:"남미새",value:"'남자에 미친 새끼'의 줄임말.",explain:"남자를 극히 밝히는 사람, 특히 여자들을 일컫는 말이다. Ex) 저는 남미새는 걸러요..ㅎㅎ"},{title:"짜친다",value:" ",explain:"‘모자라다,쪼들리다’ 라는 뜻입니다. 예)내 월급으로 한달 생활하기에는 짜친다."},{title:"많관부",value:"많은 관심 부탁드립니다의 줄임말",explain:"보통 홍보를 하거나 다른 이들에게 특정한 것을 관심받기 위해 자주 사용한다. "},{title:"갑분싸",value:"갑자기 분위기 싸해짐",explain:"예상치 못한 발언이나 행동으로 인해 주변 분위기가 갑자기 어색하거나 냉랭해지는 상황. 예) 너가 한 말 때문에 갑분싸 됬어"},{title:"이끾끼 (ㅇ )",value:"ㄴ",explain:"ㄴ"},{title:"맛도리",value:'맛있는 음식을 칭찬하거나 강조할 때 사용하는 말입니다. 이 단어는 "맛"과 "도리"의 합성어로, 여기서 "도리"는 "최고"나 "최상"을 의미하는 속어에서 유래했습니다.',explain:"오늘 점심 맛도리다"},{title:"중꺽마",value:"중요한 것은 꺽이지 않는 마음이다",explain:'"이번 시험에서 좋은 성적을 못 받았지만, 중꺽마! 끝까지 포기하지 않고 다음번에는 더 열심히 할 거야."'},{title:"닥공",value:"닥치고 공부해",explain:" "},{title:"깜놀",value:"깜짝놀라",explain:"갑작스러운 상황이나 예상치 못한 사건에 놀랐음을 의미한다. 예) 너가 갑자기 튀어나와서 나 깜놀 했잖아"},{title:"이끾끼",value:"이끾끼",explain:"가나다라마바사아자차카타파하"},{title:"리중딱",value:"리버풀은 중위권이 딱이야의 줄임말",explain:"잉글랜드 프리미어리그(EPL)의 명문 축구 클럽인 리버풀이 부진할 때 비꼬는 말로 사용된다. Ex) A: 아 이번에 리버풀 또 졌네...   B: 응 리중딱 리중딱~"},{title:"롬곡옾눞",value:"'폭풍눈물'을 뒤집은 말.",explain:"보통 말로 표현하지는 않고, 인터넷과 SNS상에서 많이 사용된다."},{title:"심쿵",value:"어떤 일이나 대상을 보고 심장이 쿵 하고 뛸 정도로 놀라거나 설레다.",explain:"Ex) 걔가 나 챙겨줬어... 나 너무 심쿵했자나 >_<"},{title:"가",value:"나",explain:"다"},{title:"김치녀",value:"돈을 밝히는 여자 또는 자신의 애인 기준이 너무 높거나 당연히 남자가 하는 일이지 하면서 편협한 사고를 가진 한국 여자를 의미함",explain:" "},{title:"아아",value:"아이스 아메리카노의 줄임말.",explain:" "},{title:"사바사",value:"사람 by(바이) 사람",explain:"각자의 특성이나 상황에 따라 다르다는 의미를 강조하는 표현 예)음식의 취향은 사바사라 강요 하면 안돼"},{title:"스불재",value:"스스로 불러온 재앙",explain:"시험이나 프로젝트 등을 할 때 노력하지 않아 결과가 좋지 않을 때 사용하는 말 예) 이번 시험에 떨어진 것은 내 스불재였다"},{title:"슬세권",value:"슬리퍼로 갈 수 있는 거리",explain:" "},{title:"알잘딱깔센",value:"알아서 잘 딱 깔끔하고 센스있게",explain:"눈치 없는 사람들에게 눈치가 있게 행동하라는 의미로 대개 사용됨"},{title:"뇌섹남",value:"뇌가 섹시한 남자",explain:"주로 지적이고 매력적인 남성을 의미한다. 예) 얼굴도 잘생겼는데 공부도 잘하는 걸 보니 뇌섹남이다"},{title:"꾸안꾸",value:"꾸민 듯 안 꾸민 듯",explain:"매우 세밀하게 꾸민 듯하지만 동시에 그렇게 보이지 않도록 손질한 스타일을 가리킨다. 다소 부실하거나 복잡해 보이지 않으면서도 실은 많은 노력을 기울여 완성된 느낌을 주는 모습을 말한다. 예)나 오늘 누구 만나러 갈 때 꾸안꾸 스타일로 입고 갈거야"},{title:"정윤서",value:"신한사의 개발자 중 한명.",explain:"2024학년도 선덕고 1학년 11반 27번이다. 피파 최대 티어가 프로1이다."},{title:"핵인싸",value:"인싸에 강조하는 의미에 신조어 핵을 붙인 말",explain:"매우 사교적이고 활동적인 사람을 의미한다. 예) 쟤는 매주 파티를 가는 걸 보니 핵인싸다"},{title:"조삼모사",value:"조금 모르면 삼번 아예 모르면 사번 이라는 뜻",explain:"기존 뜻과 다르게 혹독한 교육과정을 밟는 학생들이 시험 공부를 안해 문제를 풀지 못할 때 사용하는 전략 중 하나이다. Ex) A: 야 이번에 몇번으로 찍을까?  B: 조삼모사 알잖아 ㅋㅋ"},{title:"이왜진",value:"이게 왜 진짜야?",explain:"이왜진?"},{title:"재미뿌",value:"재미를 뿌셨다",explain:"‘재미를 부(뿌)셨다’ 의 줄임말로 재미가 없는 상황을 뜻합니다."},{title:"강동규",value:"이끾끼",explain:"리듀슈"},{title:"리퀴드폴리탄",value:"액체(Liquid)+시민(Politan)",explain:"‘액체’와 ‘시민’의 합성어로, 공간적인 지역 개념을 넘어 유연하게 변화하는 시민을 의미합니다."},{title:"현타",value:"현실 자각 타임",explain:" 자신이 처한 현실을 갑자기 깨닫게 되는 순간을 의미한다. 예) 오늘 시험보고 내 인생에서 현타 왔어"},{title:"디토 소비",value:"디토(Ditto) 소비(Consumption)",explain:"'제대로 된 구매 결정 과정을 생략하고 특정 사람, 콘텐츠, 커머스를 따라 구매하는 트렌드'를 가리키는 말입니다."},{title:"은주",value:"친구 엄마 이름을 부르는 데에서 유래한 말. ",explain:"원래는 특정 인물한테만 사용하는 말이었으나 점차 상용화되면서 부모님 특히 엄마를 통칭하는 말이 되었다. Ex) 어어 은주"},{title:"드립",value:"애드립의 줄임말",explain:"즉흥적으로 던지는 재치 있는 말이나 농담을 의미한다. 예) 너 드립 좀 재밌다?"},{title:"내또출",value:"내일 또 출근의 줄임말",explain:"바쁘게 살아가는 현대 직장인들이 주로 사용하는 단어이다. Ex) A: 내일 뭐함?  B: 내또출이요~ "},{title:"짜치다",value:" ",explain:"’(물건 등이)기대에 못미치고 별로다.‘ 라는 뜻입니다. 예)이 카페는 건물 내부만 예쁘고 커피 맛이 짜치다."},{title:"값",value:"뜻",explain:"설명"},{title:"t1",value:"t2",explain:"t3"},{title:"재기하다",value:"극단적 선택(자살)을 하다라는 뜻의 신조어",explain:"전 남성연대 대표 성재기의 성재기 한강 투신사건에서 여성들이 한국 남자들에게 성재기처럼 자살해라 라는 의미로 사용된다."},{title:"시츄에이션십",value:"영어 Situationship을 한국식 발음으로 부르는 말",explain:"정식으로 정의되지 않은, 모호한 로맨틱 또는 성적인 관계를 나타내는 말로, 썸(something)과는 뉘앙스 자체가 다르다."},{title:"당발 ",value:"당첨자 발표",explain:" "},{title:"은반",value:"은근슬쩍 반말의 줄임말",explain:"상대의 동의를 구하지 않고 자연스럽게 말을 놓을 때 사용하는 말이다. Ex) 너 요즘 자꾸 은반한다? "},{title:"읽씹",value:"읽고 씹는다의 줄임말",explain:"주로 SNS 상에서 메시지를 받은 사람이 상대방의 메시지를 보기만 하고 아무 답장도 해주지 않았을 때 사용한다.  Ex) 너 왜 자꾸 내 말 읽씹해??"},{title:"어둠의마왕강당근",value:"당근심부름",explain:"당근심부름"},{title:"기기창",value:"기기창",explain:"기기창"},{title:"욜로족",value:"You Only Live Once의 줄임말",explain:"어차피 한번 사는 인생 내 마음대로 살아보자 라는 생각을 가진 사람들을 의미함."},{title:"단짠",value:"단맛+짠맛, 달고 짠 맛",explain:"아이스크림과 감자튀김을 같이 먹으면 최고의 단짠 조합이다"},{title:"700",value:"귀여워를 나타내는 말",explain:"귀여워의 초성인 'ㄱㅇㅇ'를 숫자로 나타낸 표현이다."},{title:"트리녀",value:"트랜드를 리드하는 여자",explain:"’트랜드를 리드하는 여자‘ 의 줄임말로, 트랜드를 리드하는 사람(여자)을 뜻합니다."},{title:"니거",value:"흑인을 일컫는 말",explain:"보통 피부가 까만 사람을 놀릴 때 흑인들끼리 쓰는 별칭인 '니거(nigger)'를 사용한다. Ex) 아 오늘 땡볕에 축구했더니 팔이 니거가 됐다.."},{title:"나포츠족",value:"나이트(Night)+스포츠(Sports)",explain:"밤을 뜻하는 ‘나이트(Night)'와 운동을 뜻하는 스포츠(Sports)의 합성어로 밤에 운동하는 사람들을 뜻합니다."},{title:"아바라",value:"아이스바닐라라떼",explain:" "},{title:"트리남",value:"트랜드를 리드하는 남자",explain:"‘트랜드를 리드하는 남자’ 의 줄임말로, 트랜드를 선도하는 사람(남자)을 뜻합니다."},{title:"방방봐",value:"방송은 방송으로만 봐라의 줄임말.",explain:"방송은 방송일 뿐 너무 진지하게 받아들이지 말라는 뜻이다.  Ex) 친구야 이런건 그냥 방방봐 알았지?"},{title:"자만추",value:"자연스러운 만남을 추구한다",explain:" 소개팅, 맞선 등의 인위적인 만남보다는 일상생활 속에서 자연스럽게 사람을 만나고 싶다는 의미 예)난 소개팅하는 스타일 보다는 자만추를 하는 스타일이야"},{title:"코스크",value:"코와 마스크의 -스크를 합친 말.",explain:"입만 가리고 코는 가리지 않은 마스크를 말한다. Ex) 이 시국에 코스크 좀 그만 써!!"},{title:"고양이",value:"고양이",explain:"고양이"},{title:"트민남",value:"트랜드에 민감한 남자",explain:"‘트랜드에 민감한 남자’ 의 줄임말으로, 트랜드를 따라가는 사람(남자)를 말합니다."},{title:"캣맘",value:"고양이를 뜻하는 캣(cat)과 엄마를 뜻하는 맘(mom) 을 합친 말, 달리 말하면 '고양이 엄마'다.",explain:"자신의 반료묘에 각별한 애정을 쏟으며 사회 전반에 문제를 야기하는 여성/남성을 통칭하는 말이다. 또한 길거리 야생고양이들에게 먹이를 제공함으로써 고양이들의 야생성을 없애고 주거지 근처에 소음을 일으키기도 한다."},{title:"얼죽아",value:"얼어 죽어도 아이스 아메리카노의 줄임말",explain:"아이스 아메리카노를 사랑하는 사람들이 추운 계절인 가을이나 겨울에도 따뜻한 아메리카노가 아닌 차가운 아메리카노를 선호하는 경우를 말한다. "},{title:"도파밍",value:"도파민(Dopamine)+파밍(Farming)",explain:"새롭고 재미있는 것을 경험할 때 분비되는 신경전달 물질 '도파민'과 게임 용어 '파밍'의 합성어로, 즐거움을 추구하는 행동을 의미합니다."},{title:"반모",value:"반말모드",explain:"반말을 사용한다는 뜻 예)반모 가능할까요?"},{title:"억까",value:"억지로 까다/까이다",explain:"이유 없이 비판하거나 공격하는 것을 의미 타당한 이유 없이 억지로 남을 비난하거나 헐뜯는 상황에서 사용된다. 예) (억울한 상황) 아니 내가 먹은거 아니라고 억까하지마."},{title:"오리",value:"꽥꽦",explain:"멍멍"},{title:"콩글리쉬",value:"코리아의 '코'와 잉글리쉬를 합친 말",explain:'주로 영국 또는 미국 본토 발음에서 크게 벗어나는 발음, 곧 한국식 발음으로 영어를 읽는 사람에게 자주 사용한다. "아이 엠 어 티쳐" 등이 콩글리쉬 사용 예시다. '},{title:"이끼기",value:"가짜",explain:"테승트"},{title:"피방",value:"PC방",explain:" "},{title:"여미새",value:"여자애 미친 새끼의 줄임말.",explain:"여자를 극히 밝히는 사람, 보통 남자들을 일컫는 말이다. Ex) A: 야 저기 여자 이쁘다  B: 어후 저 여미새.."},{title:"점메추",value:"점심 메뉴 추천의 줄임말.",explain:" "},{title:"체크메이트",value:"특히 남자화장실에서 오줌을 쌀 수 없는 상황을 일컫는 말",explain:"남자화장실에서 보통 남자들은 자신의 양 옆 칸을 비워두는 경향이 있는데, 애매하게 가운데에 자리를 잡아 다른 이들이 볼일을 보기 난처한 상황을 의미한다. "},{title:"https://onedrive.live.com/edit?id=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&resid=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&cid=204ef76e4712e1b7&ithint=file%2Cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8yMDRlZjc2ZTQ3MTJlMWI3L0Vib1hKcElxMUJ4TGxfdmhMYmhmclRjQkdrVWc1aldiTXNMWVJVR3JTODhyREE_ZT1kckRtcTI&migratedtospo=true&wdo=2",value:"https://onedrive.live.com/edit?id=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&resid=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&cid=204ef76e4712e1b7&ithint=file%2Cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8yMDRlZjc2ZTQ3MTJlMWI3L0Vib1hKcElxMUJ4TGxfdmhMYmhmclRjQkdrVWc1aldiTXNMWVJVR3JTODhyREE_ZT1kckRtcTI&migratedtospo=true&wdo=2",explain:"bdidsissjsjzjzsbsbsnznznzzbzbzbshshsshshsushsshssu37ruehe7rbdz7sjcejdzcejgdtdtjzuevsfey26374i5h48sbsisnzosbzjshushshshshzisnsuevjscuegsuwv"},{title:"Sample Title",value:"Sample Value",explain:"This is a sample explanation."},{title:"식집사",value:"식물+집사",explain:"‘식물’과 ‘집사’의 합성어로, 식물을 정성스럽게 키우는 사람을 지칭하는 말입니다."},{title:"뜨아",value:"뜨거운 아메리카노의 줄임말.",explain:" "},{title:"별다줄",value:"별걸 다 줄이네",explain:" "},{title:"생기부",value:"생활기록부의 줄임말",explain:"대한민국 학생들이라면 누구나 한번쯤 들어본 단어이다. 그만큼 생활기록부가 고입, 대입에 있어 매우 중요하다는 것이다."},{title:"영고",value:"'영원히 고통받는'의 줄임말.",explain:"보통 게임이나 스포츠에서 많이 사용되며, 끊이지 않는 부진에 빠져있음을 나타낸다. '영고 라인' 이라는 말과 함께 사용되기도 한다."},{title:"일며들다",value:"일이 내 삶에 스며들었다.",explain:"‘일이 내 삶에 스며들었다’의 줄임말로, 직장인들이 출근과 퇴근을 오가면서 느끼는 고단함을 표현하는 말입니다."},{title:"까리하다",value:"잘 생기고 센스 있고 멋있어 보이는 상태",explain:"사람뿐만 아니라 각종 사물 등에도 흔히 사용되는 말이다. Ex) 야 너 좀 까리한데?"},{title:"캘박",value:"캘린더 박제",explain:"중요한 일을 캘린더에 박제 하여 잊지 않겠다는 뜻 예)우리 다음 주 약속 캘박 할게"},{title:"갓생",value:"God(갓)+생(인생)",explain:"‘God(갓)’과 ‘생(인생)‘의 합성어로, 열심히 생산적이고 계획적인 삶을 사는 사람을 뜻하는 말입니다."},{title:"인싸",value:"인사이더",explain:'"인싸"는 한국어에서 "인사이더"의 줄임말로, 주로 특정 그룹이나 사회에서 중심에 있는 사람을 뜻 한다. 예) 너 자주 놀러 다니는걸 보니 인싸구나?'},{title:"월루",value:"월급루",explain:"직장에서 일을 제대로 하지 않고 시간을 보내면서 월급만 받는 사람을 의미한다. 예) 대리님은 맨날 직원한테 시키고 정작 자기는 아무것도 안 하는 걸 보니 월루이다"},{title:"보배",value:"보조배터리",explain:"‘보조배터리’의 줄임말 입니다."},{title:"금사빠",value:"금방 사랑에 빠지는 사람",explain:"새로운 사람을 만나면 쉽게 사랑에 빠지는 성향을 가진 사람을 의미한다. 예) 쟤는 맨날 사랑하는 사람이 바뀌는걸 보면 금사빠인가봐"},{title:"MB",value:"명박",explain:"이명박을  지칭"},{title:"짤",value:"짧은 이미지나 영상 클립",explain:" 재미있거나 유머러스한 상황을 표현하는 이미지나 GIF 파일을 의미한다. 예) 짤 좀 보내봐"},{title:"문켓몬스터",value:"문재인+포켓몬스터의 줄임말.",explain:"문재인 전 대통령을 여러 포켓몬스터에 합성한 것이다."},{title:"내또학",value:"'내일 또 학교간다' 의 줄임말",explain:"'아직 목요일이네. 내또학이다.'"},{title:"ㄹㅇㅋㅋ",value:"리얼크크의 초성을 딴 말.",explain:" "},{title:"신한사",value:"신조어 한국어 사전을 일컫는 말",explain:"2024년 선덕고등학교 1학년 '말모이'에서 만든 사전이다."},{title:"스카",value:"스터디카페",explain:"나랑 스카 가자"},{title:"완내스",value:"'완전 내 스타일' 의 줄임말",explain:"'이 옷 왠내스야'"},{title:"영고 ",value:"ㅋㄴ",explain:"ㅋㄷ"}];function eu(n,e,t){const r=n.slice();return r[17]=e[t],r}function tu(n){let e,t,r="Main",i,s,a="시작",l,c;return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("button"),s.textContent=a,this.h()},l(h){e=V(h,"DIV",{class:!0});var d=G(e);t=V(d,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-8azga8"&&(t.textContent=r),d.forEach(O),i=z(h),s=V(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-zrbsg9"&&(s.textContent=a),this.h()},h(){S(t,"class","close-button svelte-cv23mb"),S(e,"class","close-button_div svelte-cv23mb"),S(s,"class","svelte-cv23mb")},m(h,d){J(h,e,d),b(e,t),J(h,i,d),J(h,s,d),l||(c=[K(t,"click",n[8]),K(s,"click",n[5])],l=!0)},p:ve,d(h){h&&(O(e),O(i),O(s)),l=!1,At(c)}}}function nu(n){let e,t,r,i,s,a,l,c,h,d,m,p,w,E,A=at(n[1]),P=[];for(let U=0;U<A.length;U+=1)P[U]=ru(eu(n,A,U));return{c(){e=D("div"),t=D("h2"),r=Re("남은시간: "),i=Re(n[3]),s=Re("s"),a=j(),l=D("h2"),c=Re("점수: "),h=Re(n[2]),d=j(),m=D("p"),p=Re(n[0]),w=j(),E=D("div");for(let U=0;U<P.length;U+=1)P[U].c();this.h()},l(U){e=V(U,"DIV",{});var F=G(e);t=V(F,"H2",{class:!0});var x=G(t);r=Se(x,"남은시간: "),i=Se(x,n[3]),s=Se(x,"s"),x.forEach(O),a=z(F),l=V(F,"H2",{class:!0});var B=G(l);c=Se(B,"점수: "),h=Se(B,n[2]),B.forEach(O),d=z(F),m=V(F,"P",{class:!0});var $=G(m);p=Se($,n[0]),$.forEach(O),w=z(F),E=V(F,"DIV",{class:!0});var M=G(E);for(let y=0;y<P.length;y+=1)P[y].l(M);M.forEach(O),F.forEach(O),this.h()},h(){S(t,"class","svelte-cv23mb"),S(l,"class","svelte-cv23mb"),S(m,"class","svelte-cv23mb"),S(E,"class","options svelte-cv23mb")},m(U,F){J(U,e,F),b(e,t),b(t,r),b(t,i),b(t,s),b(e,a),b(e,l),b(l,c),b(l,h),b(e,d),b(e,m),b(m,p),b(e,w),b(e,E);for(let x=0;x<P.length;x+=1)P[x]&&P[x].m(E,null)},p(U,F){if(F&8&&ze(i,U[3]),F&4&&ze(h,U[2]),F&1&&ze(p,U[0]),F&66){A=at(U[1]);let x;for(x=0;x<A.length;x+=1){const B=eu(U,A,x);P[x]?P[x].p(B,F):(P[x]=ru(B),P[x].c(),P[x].m(E,null))}for(;x<P.length;x+=1)P[x].d(1);P.length=A.length}},d(U){U&&O(e),wn(P,U)}}}function ru(n){let e,t=n[17]+"",r,i,s;function a(){return n[9](n[17])}return{c(){e=D("div"),r=Re(t),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=G(e);r=Se(c,t),c.forEach(O),this.h()},h(){S(e,"class","option svelte-cv23mb")},m(l,c){J(l,e,c),b(e,r),i||(s=K(e,"click",a),i=!0)},p(l,c){n=l,c&2&&t!==(t=n[17]+"")&&ze(r,t)},d(l){l&&O(e),i=!1,s()}}}function iu(n){let e,t,r,i,s,a="점수 업로드",l,c;return{c(){e=D("h2"),t=Re("타임오버! 당신의 점수: "),r=Re(n[2]),i=j(),s=D("span"),s.textContent=a,this.h()},l(h){e=V(h,"H2",{class:!0});var d=G(e);t=Se(d,"타임오버! 당신의 점수: "),r=Se(d,n[2]),d.forEach(O),i=z(h),s=V(h,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-5oauhd"&&(s.textContent=a),this.h()},h(){S(e,"class","svelte-cv23mb"),S(s,"id","scup"),S(s,"class","svelte-cv23mb")},m(h,d){J(h,e,d),b(e,t),b(e,r),J(h,i,d),J(h,s,d),l||(c=K(s,"click",n[7]),l=!0)},p(h,d){d&4&&ze(r,h[2])},d(h){h&&(O(e),O(i),O(s)),l=!1,c()}}}function fE(n){let e,t,r,i=!n[4]&&tu(n),s=n[4]&&nu(n),a=!n[4]&&n[3]===0&&iu(n);return{c(){e=D("main"),i&&i.c(),t=j(),s&&s.c(),r=j(),a&&a.c(),this.h()},l(l){e=V(l,"MAIN",{class:!0});var c=G(e);i&&i.l(c),t=z(c),s&&s.l(c),r=z(c),a&&a.l(c),c.forEach(O),this.h()},h(){S(e,"class","game svelte-cv23mb")},m(l,c){J(l,e,c),i&&i.m(e,null),b(e,t),s&&s.m(e,null),b(e,r),a&&a.m(e,null)},p(l,[c]){l[4]?i&&(i.d(1),i=null):i?i.p(l,c):(i=tu(l),i.c(),i.m(e,t)),l[4]?s?s.p(l,c):(s=nu(l),s.c(),s.m(e,r)):s&&(s.d(1),s=null),!l[4]&&l[3]===0?a?a.p(l,c):(a=iu(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:ve,o:ve,d(l){l&&O(e),i&&i.d(),s&&s.d(),a&&a.d()}}}function pE(n,e,t){let r;ot(n,se,B=>t(13,r=B));let i=[],s=[],a="",l=[],c=0,h=30,d,m=!1;Tn(()=>{i=xi.map(B=>B.explain),s=xi.map(B=>B.title)});const w=Zi().currentUser;function E(){t(4,m=!0),t(2,c=0),t(3,h=30),A(),d=setInterval(()=>{h>0?t(3,h--,h):(clearInterval(d),t(4,m=!1),uploadScorePrompt())},1e3)}function A(){t(0,a=i[Math.floor(Math.random()*i.length)]);const B=xi.find(M=>M.explain===a).title;let $=s.filter(M=>M!==B);t(1,l=[B,...$.sort(()=>.5-Math.random()).slice(0,5)].sort(()=>.5-Math.random()))}function P(B){const $=xi.find(M=>M.explain===a).title;B===$&&t(2,c++,c),A()}async function U(){try{const B=qn(Me,"score",w.email);await xy(B,{sc:c},{merge:!0}),alert("점수가 업로드되었습니다."),we(se,r=0,r)}catch(B){console.error("Error adding document: ",B),alert("점수 업로드에 실패했습니다.")}}return[a,l,c,h,m,E,P,U,()=>{we(se,r=0,r)},B=>P(B)]}class mE extends bt{constructor(e){super(),Rt(this,e,pE,fE,wt,{})}}function su(n,e,t){const r=n.slice();return r[3]=e[t],r}function ou(n){let e,t,r=n[3].index+"",i,s,a,l=n[3].id+"",c,h;return{c(){e=D("div"),t=D("span"),i=Re(r),s=Re("위"),a=j(),c=Re(l),h=j(),this.h()},l(d){e=V(d,"DIV",{class:!0});var m=G(e);t=V(m,"SPAN",{class:!0});var p=G(t);i=Se(p,r),s=Se(p,"위"),p.forEach(O),a=z(m),c=Se(m,l),h=z(m),m.forEach(O),this.h()},h(){S(t,"class","svelte-1jb9vuc"),S(e,"class","box svelte-1jb9vuc")},m(d,m){J(d,e,m),b(e,t),b(t,i),b(t,s),b(e,a),b(e,c),b(e,h)},p(d,m){m&1&&r!==(r=d[3].index+"")&&ze(i,r),m&1&&l!==(l=d[3].id+"")&&ze(c,l)},d(d){d&&O(e)}}}function gE(n){let e,t,r="Main",i,s,a,l,c,h,d=at(n[0]),m=[];for(let p=0;p<d.length;p+=1)m[p]=ou(su(n,d,p));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("div"),a=j(),l=D("div");for(let p=0;p<m.length;p+=1)m[p].c();this.h()},l(p){e=V(p,"DIV",{class:!0});var w=G(e);t=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-8azga8"&&(t.textContent=r),w.forEach(O),i=z(p),s=V(p,"DIV",{id:!0,class:!0}),G(s).forEach(O),a=z(p),l=V(p,"DIV",{class:!0});var E=G(l);for(let A=0;A<m.length;A+=1)m[A].l(E);E.forEach(O),this.h()},h(){S(t,"class","close-button svelte-1jb9vuc"),S(e,"class","close-button_div svelte-1jb9vuc"),S(s,"id","c"),S(s,"class","svelte-1jb9vuc"),S(l,"class","container svelte-1jb9vuc")},m(p,w){J(p,e,w),b(e,t),J(p,i,w),J(p,s,w),J(p,a,w),J(p,l,w);for(let E=0;E<m.length;E+=1)m[E]&&m[E].m(l,null);c||(h=K(t,"click",n[1]),c=!0)},p(p,[w]){if(w&1){d=at(p[0]);let E;for(E=0;E<d.length;E+=1){const A=su(p,d,E);m[E]?m[E].p(A,w):(m[E]=ou(A),m[E].c(),m[E].m(l,null))}for(;E<m.length;E+=1)m[E].d(1);m.length=d.length}},i:ve,o:ve,d(p){p&&(O(e),O(i),O(s),O(a),O(l)),wn(m,p),c=!1,h()}}}function _E(n,e,t){let r;ot(n,se,a=>t(2,r=a));let i=[];return Tn(async()=>{const a=dt(Me,"score"),l=Bt(a,ls("sc","desc")),c=await kt(l);t(0,i=c.docs.map((h,d)=>({id:h.id,index:d+1})))}),[i,()=>{we(se,r=0,r)}]}class vE extends bt{constructor(e){super(),Rt(this,e,_E,gE,wt,{})}}function yE(n){let e,t,r,i="로그인",s,a,l="Google",c,h;return{c(){e=D("div"),t=D("div"),r=D("h1"),r.textContent=i,s=j(),a=D("button"),a.textContent=l,this.h()},l(d){e=V(d,"DIV",{id:!0,class:!0});var m=G(e);t=V(m,"DIV",{class:!0});var p=G(t);r=V(p,"H1",{class:!0,"data-svelte-h":!0}),Z(r)!=="svelte-1bvi8l2"&&(r.textContent=i),s=z(p),a=V(p,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-g8tqx5"&&(a.textContent=l),p.forEach(O),m.forEach(O),this.h()},h(){S(r,"class","svelte-gqutdq"),S(a,"class","svelte-gqutdq"),S(t,"class","login-container svelte-gqutdq"),S(e,"id","L_body"),S(e,"class","svelte-gqutdq")},m(d,m){J(d,e,m),b(e,t),b(t,r),b(t,s),b(t,a),c||(h=K(a,"click",n[3]),c=!0)},p:ve,i:ve,o:ve,d(d){d&&O(e),c=!1,h()}}}function EE(n){let e,t,r,i;const s=[VE,DE,kE,PE,CE,SE,RE,bE,AE,wE,TE],a=[];function l(c,h){return c[2]==0?0:c[2]==1?1:c[2]==2?2:c[2]==3?3:c[2]==4?4:c[2]==5?5:c[2]==6?6:c[2]==7?7:c[2]==8?8:c[2]==9?9:c[2]==10?10:-1}return~(e=l(n))&&(t=a[e]=s[e](n)),{c(){t&&t.c(),r=wl()},l(c){t&&t.l(c),r=wl()},m(c,h){~e&&a[e].m(c,h),J(c,r,h),i=!0},p(c,h){let d=e;e=l(c),e!==d&&(t&&(cu(),ft(a[d],1,1,()=>{a[d]=null}),lu()),~e?(t=a[e],t||(t=a[e]=s[e](c),t.c()),pt(t,1),t.m(r.parentNode,r)):t=null)},i(c){i||(pt(t),i=!0)},o(c){ft(t),i=!1},d(c){c&&O(r),~e&&a[e].d(c)}}}function IE(n){let e,t="[ Developer : G37 ]";return{c(){e=D("div"),e.textContent=t,this.h()},l(r){e=V(r,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-67okfr"&&(e.textContent=t),this.h()},h(){S(e,"class","loading-screen svelte-gqutdq")},m(r,i){J(r,e,i)},p:ve,i:ve,o:ve,d(r){r&&O(e)}}}function TE(n){let e,t;return e=new vE({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function wE(n){let e,t;return e=new mE({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function AE(n){let e,t;return e=new dE({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function bE(n){let e,t;return e=new cE({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function RE(n){let e,t;return e=new oE({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function SE(n){let e,t;return e=new rE({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function CE(n){let e,t;return e=new eE({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function PE(n){let e,t;return e=new Yy({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function kE(n){let e,t;return e=new Ky({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function DE(n){let e,t;return e=new Hy({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function VE(n){let e,t;return e=new jy({}),{c(){Vt(e.$$.fragment)},l(r){Nt(e.$$.fragment,r)},m(r,i){Ot(e,r,i),t=!0},i(r){t||(pt(e.$$.fragment,r),t=!0)},o(r){ft(e.$$.fragment,r),t=!1},d(r){xt(e,r)}}}function NE(n){let e,t,r,i;const s=[IE,EE,yE],a=[];function l(c,h){return c[1]?0:c[0]?1:2}return t=l(n),r=a[t]=s[t](n),{c(){e=D("main"),r.c(),this.h()},l(c){e=V(c,"MAIN",{class:!0});var h=G(e);r.l(h),h.forEach(O),this.h()},h(){S(e,"class","svelte-gqutdq")},m(c,h){J(c,e,h),a[t].m(e,null),i=!0},p(c,[h]){let d=t;t=l(c),t===d?a[t].p(c,h):(cu(),ft(a[d],1,1,()=>{a[d]=null}),lu(),r=a[t],r?r.p(c,h):(r=a[t]=s[t](c),r.c()),pt(r,1),r.m(e,null))},i(c){i||(pt(r),i=!0)},o(c){ft(r),i=!1},d(c){c&&O(e),a[t].d()}}}function OE(n,e,t){let r;ot(n,se,l=>t(2,r=l)),console.log(r);let i=null,s=!0;return Tn(()=>{Go(us,l=>{t(0,i=l),t(1,s=!1)})}),[i,s,r,async()=>{const l=new Ht;try{await Lm(us,l)}catch(c){console.error("Error signing in:",c)}}]}class qE extends bt{constructor(e){super(),Rt(this,e,OE,NE,wt,{})}}export{qE as component};
