import{s as Ai,x as gd,n as Wt,r as eo,b as Ge,o as wl,i as _d,y as Xt,z as yd}from"../chunks/scheduler.li6PcnJj.js";import{S as Ri,i as Si,e as H,s as ut,c as G,d as rt,h as ht,y as zt,g as X,o as M,j as Bt,k as N,z as vt,A as no,b as Re,f as Se,l as ze,B as vd,C as un,a as Qe,n as Al,t as Xe,q as Rl,m as tc,u as ro,v as io,w as so,x as oo}from"../chunks/index.Dl6I0-9m.js";import{w as ao}from"../chunks/index.ChQ1qdP7.js";function yn(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var ec={};/**
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
 */const Sl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ed=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,p=o>>2,I=(o&3)<<4|l>>4;let T=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(T=64)),r.push(e[p],e[I],e[T],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Sl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ed(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||I==null)throw new Id;const T=o<<2|l>>4;if(r.push(T),d!==64){const R=l<<4&240|d>>2;if(r.push(R),I!==64){const P=d<<6&192|I;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Td=function(n){const t=Sl(n);return bl.encodeByteArray(t,!0)},ai=function(n){return Td(n).replace(/\./g,"")},Pl=function(n){try{return bl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ad=()=>wd().__FIREBASE_DEFAULTS__,Rd=()=>{if(typeof process>"u"||typeof ec>"u")return;const n=ec.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Pl(n[1]);return t&&JSON.parse(t)},bi=()=>{try{return Ad()||Rd()||Sd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cl=n=>{var t,e;return(e=(t=bi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},bd=n=>{const t=Cl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},kl=()=>{var n;return(n=bi())===null||n===void 0?void 0:n.config},Vl=n=>{var t;return(t=bi())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Pd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Cd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ai(JSON.stringify(e)),ai(JSON.stringify(a)),""].join(".")}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Vd(){var n;const t=(n=bi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Od(){const n=Ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Md(){return!Vd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ld(){try{return typeof indexedDB=="object"}catch{return!1}}function xd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Fd="FirebaseError";class _e extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Fd,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Ud(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new _e(i,l,r)}}function Ud(n,t){return n.replace(Bd,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Bd=/\{\$([^}]+)}/g;function qd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function ci(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(nc(o)&&nc(a)){if(!ci(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function nc(n){return n!==null&&typeof n=="object"}/**
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
 */function gr(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function jd(n,t){const e=new zd(n,t);return e.subscribe.bind(e)}class zd{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");$d(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=ys),i.error===void 0&&(i.error=ys),i.complete===void 0&&(i.complete=ys);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $d(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ys(){}/**
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
 */function kt(n){return n&&n._delegate?n._delegate:n}class Je{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class Hd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Pd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Wd(t))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=je){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=je){return this.instances.has(t)}getOptions(t=je){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=je){return this.component?this.component.multipleInstances?t:je:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gd(n){return n===je?void 0:n}function Wd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Kd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Hd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Qd={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Xd=Z.INFO,Jd={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Yd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Jd[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class co{constructor(t){this.name=t,this._logLevel=Xd,this._logHandler=Yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const Zd=(n,t)=>t.some(e=>n instanceof e);let rc,ic;function tf(){return rc||(rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ef(){return ic||(ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dl=new WeakMap,Ds=new WeakMap,Nl=new WeakMap,vs=new WeakMap,lo=new WeakMap;function nf(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Pe(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Dl.set(e,n)}).catch(()=>{}),lo.set(t,n),t}function rf(n){if(Ds.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ds.set(n,t)}let Ns={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ds.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Nl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Pe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function sf(n){Ns=n(Ns)}function of(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Es(this),t,...e);return Nl.set(r,t.sort?t.sort():[t]),Pe(r)}:ef().includes(n)?function(...t){return n.apply(Es(this),t),Pe(Dl.get(this))}:function(...t){return Pe(n.apply(Es(this),t))}}function af(n){return typeof n=="function"?of(n):(n instanceof IDBTransaction&&rf(n),Zd(n,tf())?new Proxy(n,Ns):n)}function Pe(n){if(n instanceof IDBRequest)return nf(n);if(vs.has(n))return vs.get(n);const t=af(n);return t!==n&&(vs.set(n,t),lo.set(t,n)),t}const Es=n=>lo.get(n);function cf(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Pe(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Pe(a.result),u.oldVersion,u.newVersion,Pe(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const lf=["get","getKey","getAll","getAllKeys","count"],uf=["put","add","delete","clear"],Is=new Map;function sc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Is.get(t))return Is.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=uf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lf.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&u.done]))[0]};return Is.set(t,o),o}sf(n=>({...n,get:(t,e,r)=>sc(t,e)||n.get(t,e,r),has:(t,e)=>!!sc(t,e)||n.has(t,e)}));/**
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
 */class hf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(df(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function df(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Os="@firebase/app",oc="0.10.5";/**
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
 */const Ye=new co("@firebase/app"),ff="@firebase/app-compat",pf="@firebase/analytics-compat",mf="@firebase/analytics",gf="@firebase/app-check-compat",_f="@firebase/app-check",yf="@firebase/auth",vf="@firebase/auth-compat",Ef="@firebase/database",If="@firebase/database-compat",Tf="@firebase/functions",wf="@firebase/functions-compat",Af="@firebase/installations",Rf="@firebase/installations-compat",Sf="@firebase/messaging",bf="@firebase/messaging-compat",Pf="@firebase/performance",Cf="@firebase/performance-compat",kf="@firebase/remote-config",Vf="@firebase/remote-config-compat",Df="@firebase/storage",Nf="@firebase/storage-compat",Of="@firebase/firestore",Mf="@firebase/vertexai-preview",Lf="@firebase/firestore-compat",xf="firebase",Ff="10.12.2";/**
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
 */const Ms="[DEFAULT]",Uf={[Os]:"fire-core",[ff]:"fire-core-compat",[mf]:"fire-analytics",[pf]:"fire-analytics-compat",[_f]:"fire-app-check",[gf]:"fire-app-check-compat",[yf]:"fire-auth",[vf]:"fire-auth-compat",[Ef]:"fire-rtdb",[If]:"fire-rtdb-compat",[Tf]:"fire-fn",[wf]:"fire-fn-compat",[Af]:"fire-iid",[Rf]:"fire-iid-compat",[Sf]:"fire-fcm",[bf]:"fire-fcm-compat",[Pf]:"fire-perf",[Cf]:"fire-perf-compat",[kf]:"fire-rc",[Vf]:"fire-rc-compat",[Df]:"fire-gcs",[Nf]:"fire-gcs-compat",[Of]:"fire-fst",[Lf]:"fire-fst-compat",[Mf]:"fire-vertex","fire-js":"fire-js",[xf]:"fire-js-all"};/**
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
 */const li=new Map,Bf=new Map,Ls=new Map;function ac(n,t){try{n.container.addComponent(t)}catch(e){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function vn(n){const t=n.name;if(Ls.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;Ls.set(t,n);for(const e of li.values())ac(e,n);for(const e of Bf.values())ac(e,n);return!0}function uo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ue(n){return n.settings!==void 0}/**
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
 */const qf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new mr("app","Firebase",qf);/**
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
 */class jf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Cn=Ff;function Ol(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ms,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ce.create("bad-app-name",{appName:String(i)});if(e||(e=kl()),!e)throw Ce.create("no-options");const o=li.get(i);if(o){if(ci(e,o.options)&&ci(r,o.config))return o;throw Ce.create("duplicate-app",{appName:i})}const a=new Kd(i);for(const u of Ls.values())a.addComponent(u);const l=new jf(e,r,a);return li.set(i,l),l}function Ml(n=Ms){const t=li.get(n);if(!t&&n===Ms&&kl())return Ol();if(!t)throw Ce.create("no-app",{appName:n});return t}function ke(n,t,e){var r;let i=(r=Uf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ye.warn(l.join(" "));return}vn(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const zf="firebase-heartbeat-database",$f=1,or="firebase-heartbeat-store";let Ts=null;function Ll(){return Ts||(Ts=cf(zf,$f,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(or)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ce.create("idb-open",{originalErrorMessage:n.message})})),Ts}async function Hf(n){try{const e=(await Ll()).transaction(or),r=await e.objectStore(or).get(xl(n));return await e.done,r}catch(t){if(t instanceof _e)Ye.warn(t.message);else{const e=Ce.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(e.message)}}}async function cc(n,t){try{const r=(await Ll()).transaction(or,"readwrite");await r.objectStore(or).put(t,xl(n)),await r.done}catch(e){if(e instanceof _e)Ye.warn(e.message);else{const r=Ce.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(r.message)}}}function xl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gf=1024,Wf=30*24*60*60*1e3;class Kf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=lc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Wf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lc(),{heartbeatsToSend:r,unsentEntries:i}=Qf(this._heartbeatsCache.heartbeats),o=ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function lc(){return new Date().toISOString().substring(0,10)}function Qf(n,t=Gf){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),uc(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),uc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Xf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ld()?xd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Hf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return cc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return cc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function uc(n){return ai(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Jf(n){vn(new Je("platform-logger",t=>new hf(t),"PRIVATE")),vn(new Je("heartbeat",t=>new Kf(t),"PRIVATE")),ke(Os,oc,n),ke(Os,oc,"esm2017"),ke("fire-js","")}Jf("");var Yf="firebase",Zf="10.12.2";/**
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
 */ke(Yf,Zf,"app");function ho(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Fl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tp=Fl,Ul=new mr("auth","Firebase",Fl());/**
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
 */const ui=new co("@firebase/auth");function ep(n,...t){ui.logLevel<=Z.WARN&&ui.warn(`Auth (${Cn}): ${n}`,...t)}function Jr(n,...t){ui.logLevel<=Z.ERROR&&ui.error(`Auth (${Cn}): ${n}`,...t)}/**
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
 */function ie(n,...t){throw po(n,...t)}function Jt(n,...t){return po(n,...t)}function fo(n,t,e){const r=Object.assign(Object.assign({},tp()),{[t]:e});return new mr("auth","Firebase",r).create(t,{appName:n.name})}function We(n){return fo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function np(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ie(n,"argument-error"),fo(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function po(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Ul.create(n,...t)}function W(n,t,...e){if(!n)throw po(t,...e)}function he(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Jr(t),new Error(t)}function pe(n,t){n||he(t)}/**
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
 */function xs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function rp(){return hc()==="http:"||hc()==="https:"}function hc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ip(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rp()||Dd()||"connection"in navigator)?navigator.onLine:!0}function sp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class _r{constructor(t,e){this.shortDelay=t,this.longDelay=e,pe(e>t,"Short delay should be less than long delay!"),this.isMobile=kd()||Nd()}get(){return ip()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mo(n,t){pe(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Bl{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const op={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ap=new _r(3e4,6e4);function go(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function kn(n,t,e,r,i={}){return ql(n,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=gr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Bl.fetch()(jl(n,n.config.apiHost,e,l),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))})}async function ql(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},op),t);try{const i=new lp(n),o=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Hr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Hr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Hr(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fo(n,p,d);ie(n,p)}}catch(i){if(i instanceof _e)throw i;ie(n,"network-request-failed",{message:String(i)})}}async function cp(n,t,e,r,i={}){const o=await kn(n,t,e,r,i);return"mfaPendingCredential"in o&&ie(n,"multi-factor-auth-required",{_serverResponse:o}),o}function jl(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?mo(n.config,i):`${n.config.apiScheme}://${i}`}class lp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),ap.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=Jt(n,t,r);return i.customData._tokenResponse=e,i}/**
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
 */async function up(n,t){return kn(n,"POST","/v1/accounts:delete",t)}async function zl(n,t){return kn(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function er(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function hp(n,t=!1){const e=kt(n),r=await e.getIdToken(t),i=_o(r);W(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:er(ws(i.auth_time)),issuedAtTime:er(ws(i.iat)),expirationTime:er(ws(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ws(n){return Number(n)*1e3}function _o(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pl(e);return i?JSON.parse(i):(Jr("Failed to decode base64 JWT payload"),null)}catch(i){return Jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dc(n){const t=_o(n);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ar(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof _e&&dp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function dp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class fp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fs{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hi(n){var t;const e=n.auth,r=await n.getIdToken(),i=await ar(n,zl(e,{idToken:r}));W(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?$l(o.providerUserInfo):[],l=mp(n.providerData,a),u=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Fs(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,I)}async function pp(n){const t=kt(n);await hi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mp(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function $l(n){return n.map(t=>{var{providerId:e}=t,r=ho(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gp(n,t){const e=await ql(n,{},async()=>{const r=gr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=jl(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Bl.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function _p(n,t){return kn(n,"POST","/v2/accounts:revokeToken",go(n,t))}/**
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
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):dc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){W(t.length!==0,"internal-error");const e=dc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:o}=await gp(t,e);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:o}=e,a=new pn;return r&&(W(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(W(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function Ie(n,t){W(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class de{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,o=ho(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Fs(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await ar(this,this.stsTokenManager.getToken(this.auth,t));return W(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return hp(this,t)}reload(){return pp(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new de(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ue(this.auth.app))return Promise.reject(We(this.auth));const t=await this.getIdToken();return await ar(this,up(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,o,a,l,u,d,p;const I=(r=e.displayName)!==null&&r!==void 0?r:void 0,T=(i=e.email)!==null&&i!==void 0?i:void 0,R=(o=e.phoneNumber)!==null&&o!==void 0?o:void 0,P=(a=e.photoURL)!==null&&a!==void 0?a:void 0,V=(l=e.tenantId)!==null&&l!==void 0?l:void 0,C=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,q=(d=e.createdAt)!==null&&d!==void 0?d:void 0,z=(p=e.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:B,emailVerified:j,isAnonymous:$,providerData:x,stsTokenManager:v}=e;W(B&&v,t,"internal-error");const m=pn.fromJSON(this.name,v);W(typeof B=="string",t,"internal-error"),Ie(I,t.name),Ie(T,t.name),W(typeof j=="boolean",t,"internal-error"),W(typeof $=="boolean",t,"internal-error"),Ie(R,t.name),Ie(P,t.name),Ie(V,t.name),Ie(C,t.name),Ie(q,t.name),Ie(z,t.name);const g=new de({uid:B,auth:t,email:T,emailVerified:j,displayName:I,isAnonymous:$,photoURL:P,phoneNumber:R,tenantId:V,stsTokenManager:m,createdAt:q,lastLoginAt:z});return x&&Array.isArray(x)&&(g.providerData=x.map(_=>Object.assign({},_))),C&&(g._redirectEventId=C),g}static async _fromIdTokenResponse(t,e,r=!1){const i=new pn;i.updateFromServerResponse(e);const o=new de({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await hi(o),o}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];W(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?$l(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new pn;l.updateFromIdToken(r);const u=new de({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Fs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
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
 */const fc=new Map;function fe(n){pe(n instanceof Function,"Expected a class definition");let t=fc.get(n);return t?(pe(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,fc.set(n,t),t)}/**
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
 */class Hl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Hl.type="NONE";const pc=Hl;/**
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
 */function Yr(n,t,e){return`firebase:${n}:${t}:${e}`}class mn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Yr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Yr("persistence",i.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?de._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new mn(fe(pc),t,r);const i=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||fe(pc);const a=Yr(r,t.config.apiKey,t.name);let l=null;for(const d of e)try{const p=await d._get(a);if(p){const I=de._fromJSON(t,p);d!==o&&(l=I),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new mn(o,t,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(e.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new mn(o,t,r))}}/**
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
 */function mc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Kl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xl(t))return"Blackberry";if(Jl(t))return"Webos";if(yo(t))return"Safari";if((t.includes("chrome/")||Wl(t))&&!t.includes("edge/"))return"Chrome";if(Ql(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gl(n=Ct()){return/firefox\//i.test(n)}function yo(n=Ct()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wl(n=Ct()){return/crios\//i.test(n)}function Kl(n=Ct()){return/iemobile/i.test(n)}function Ql(n=Ct()){return/android/i.test(n)}function Xl(n=Ct()){return/blackberry/i.test(n)}function Jl(n=Ct()){return/webos/i.test(n)}function Pi(n=Ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yp(n=Ct()){var t;return Pi(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function vp(){return Od()&&document.documentMode===10}function Yl(n=Ct()){return Pi(n)||Ql(n)||Jl(n)||Xl(n)||/windows phone/i.test(n)||Kl(n)}function Ep(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Zl(n,t=[]){let e;switch(n){case"Browser":e=mc(Ct());break;case"Worker":e=`${mc(Ct())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Cn}/${r}`}/**
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
 */class Ip{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((a,l)=>{try{const u=t(o);a(u)}catch(u){l(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Tp(n,t={}){return kn(n,"GET","/v2/passwordPolicy",go(n,t))}/**
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
 */const wp=6;class Ap{constructor(t){var e,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:wp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class Rp{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gc(this),this.idTokenSubscription=new gc(this),this.beforeStateQueue=new Ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ul,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=fe(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await zl(this,{idToken:t}),r=await de._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await hi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ue(this.app))return Promise.reject(We(this));const e=t?kt(t):null;return e&&W(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ue(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ue(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Tp(this),e=new Ap(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await _p(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&fe(t)||this._popupRedirectResolver;W(e,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[fe(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Zl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&ep(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ci(n){return kt(n)}class gc{constructor(t){this.auth=t,this.observer=null,this.addObserver=jd(e=>this.observer=e)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sp(n){vo=n}function bp(n){return vo.loadJS(n)}function Pp(){return vo.gapiScript}function Cp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kp(n,t){const e=uo(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),o=e.getOptions();if(ci(o,t??{}))return i;ie(i,"already-initialized")}return e.initialize({options:t})}function Vp(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(fe);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Dp(n,t,e){const r=Ci(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=tu(t),{host:a,port:l}=Np(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Op()}function tu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Np(n){const t=tu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:_c(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:_c(a)}}}function _c(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Op(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class eu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return he("not implemented")}_getIdTokenResponse(t){return he("not implemented")}_linkToIdToken(t,e){return he("not implemented")}_getReauthenticationResolver(t){return he("not implemented")}}/**
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
 */async function gn(n,t){return cp(n,"POST","/v1/accounts:signInWithIdp",go(n,t))}/**
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
 */const Mp="http://localhost";class Ze extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ze(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ie("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,o=ho(e,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ze(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return gn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,gn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gn(t,e)}buildRequest(){const t={requestUri:Mp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=gr(e)}return t}}/**
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
 */class Eo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yr extends Eo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Te extends yr{constructor(){super("facebook.com")}static credential(t){return Ze._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Te.credential(t.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
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
 */class le extends yr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ze._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return le.credentialFromTaggedObject(t)}static credentialFromError(t){return le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return le.credential(e,r)}catch{return null}}}le.GOOGLE_SIGN_IN_METHOD="google.com";le.PROVIDER_ID="google.com";/**
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
 */class we extends yr{constructor(){super("github.com")}static credential(t){return Ze._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return we.credential(t.oauthAccessToken)}catch{return null}}}we.GITHUB_SIGN_IN_METHOD="github.com";we.PROVIDER_ID="github.com";/**
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
 */class Ae extends yr{constructor(){super("twitter.com")}static credential(t,e){return Ze._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ae.credential(e,r)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
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
 */class En{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const o=await de._fromIdTokenResponse(t,r,i),a=yc(r);return new En({user:o,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=yc(r);return new En({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function yc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class di extends _e{constructor(t,e,r,i){var o;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,di.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new di(t,e,r,i)}}function nu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(n,o,t,r):o})}async function Lp(n,t,e=!1){const r=await ar(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return En._forOperation(n,"link",r)}/**
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
 */async function xp(n,t,e=!1){const{auth:r}=n;if(ue(r.app))return Promise.reject(We(r));const i="reauthenticate";try{const o=await ar(n,nu(r,i,t,n),e);W(o.idToken,r,"internal-error");const a=_o(o.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),En._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ie(r,"user-mismatch"),o}}/**
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
 */async function Fp(n,t,e=!1){if(ue(n.app))return Promise.reject(We(n));const r="signIn",i=await nu(n,r,t),o=await En._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(o.user),o}function Up(n,t,e,r){return kt(n).onIdTokenChanged(t,e,r)}function Bp(n,t,e){return kt(n).beforeAuthStateChanged(t,e)}function ru(n,t,e,r){return kt(n).onAuthStateChanged(t,e,r)}function qp(n){return kt(n).signOut()}const fi="__sak";/**
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
 */class iu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(fi,"1"),this.storage.removeItem(fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jp(){const n=Ct();return yo(n)||Pi(n)}const zp=1e3,$p=10;class su extends iu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jp()&&Ep(),this.fallbackToPolling=Yl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);vp()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,$p):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}su.type="LOCAL";const Hp=su;/**
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
 */class ou extends iu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ou.type="SESSION";const au=ou;/**
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
 */function Gp(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class ki{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new ki(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:o}=e.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(e.origin,o)),u=await Gp(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
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
 */function Io(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Wp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=Io("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const T=I;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(T.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function te(){return window}function Kp(n){te().location.href=n}/**
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
 */function cu(){return typeof te().WorkerGlobalScope<"u"&&typeof te().importScripts=="function"}async function Qp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Jp(){return cu()?self:null}/**
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
 */const lu="firebaseLocalStorageDb",Yp=1,pi="firebaseLocalStorage",uu="fbase_key";class vr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Vi(n,t){return n.transaction([pi],t?"readwrite":"readonly").objectStore(pi)}function Zp(){const n=indexedDB.deleteDatabase(lu);return new vr(n).toPromise()}function Us(){const n=indexedDB.open(lu,Yp);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pi,{keyPath:uu})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(pi)?t(r):(r.close(),await Zp(),t(await Us()))})})}async function vc(n,t,e){const r=Vi(n,!0).put({[uu]:t,value:e});return new vr(r).toPromise()}async function tm(n,t){const e=Vi(n,!1).get(t),r=await new vr(e).toPromise();return r===void 0?null:r.value}function Ec(n,t){const e=Vi(n,!0).delete(t);return new vr(e).toPromise()}const em=800,nm=3;class hu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Us(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>nm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(Jp()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Qp(),!this.activeServiceWorker)return;this.sender=new Wp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Us();return await vc(t,fi,"1"),await Ec(t,fi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>vc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>tm(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ec(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Vi(i,!1).getAll();return new vr(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hu.type="LOCAL";const rm=hu;new _r(3e4,6e4);/**
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
 */function du(n,t){return t?fe(t):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class To extends eu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function im(n){return Fp(n.auth,new To(n),n.bypassAuthState)}function sm(n){const{auth:t,user:e}=n;return W(e,t,"internal-error"),xp(e,new To(n),n.bypassAuthState)}async function om(n){const{auth:t,user:e}=n;return W(e,t,"internal-error"),Lp(e,new To(n),n.bypassAuthState)}/**
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
 */class fu{constructor(t,e,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return im;case"linkViaPopup":case"linkViaRedirect":return om;case"reauthViaPopup":case"reauthViaRedirect":return sm;default:ie(this.auth,"internal-error")}}resolve(t){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const am=new _r(2e3,1e4);async function cm(n,t,e){if(ue(n.app))return Promise.reject(Jt(n,"operation-not-supported-in-this-environment"));const r=Ci(n);np(n,t,Eo);const i=du(r,e);return new $e(r,"signInViaPopup",t,i).executeNotNull()}class $e extends fu{constructor(t,e,r,i,o){super(t,e,i,o),this.provider=r,this.authWindow=null,this.pollId=null,$e.currentPopupAction&&$e.currentPopupAction.cancel(),$e.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const t=Io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$e.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,am.get())};t()}}$e.currentPopupAction=null;/**
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
 */const lm="pendingRedirect",Zr=new Map;class um extends fu{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Zr.get(this.auth._key());if(!t){try{const r=await hm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Zr.set(this.auth._key(),t)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hm(n,t){const e=pm(t),r=fm(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function dm(n,t){Zr.set(n._key(),t)}function fm(n){return fe(n._redirectPersistence)}function pm(n){return Yr(lm,n.config.apiKey,n.name)}async function mm(n,t,e=!1){if(ue(n.app))return Promise.reject(We(n));const r=Ci(n),i=du(r,t),a=await new um(r,i,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const gm=10*60*1e3;class _m{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ym(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!pu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Jt(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(t))}saveEventToCache(t){this.cachedEventUids.add(Ic(t)),this.lastProcessedEventTime=Date.now()}}function Ic(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function pu({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ym(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pu(n);default:return!1}}/**
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
 */async function vm(n,t={}){return kn(n,"GET","/v1/projects",t)}/**
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
 */const Em=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Im=/^https?/;async function Tm(n){if(n.config.emulator)return;const{authorizedDomains:t}=await vm(n);for(const e of t)try{if(wm(e))return}catch{}ie(n,"unauthorized-domain")}function wm(n){const t=xs(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!Im.test(e))return!1;if(Em.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Am=new _r(3e4,6e4);function Tc(){const n=te().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Rm(n){return new Promise((t,e)=>{var r,i,o;function a(){Tc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tc(),e(Jt(n,"network-request-failed"))},timeout:Am.get()})}if(!((i=(r=te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=te().gapi)===null||o===void 0)&&o.load)a();else{const l=Cp("iframefcb");return te()[l]=()=>{gapi.load?a():e(Jt(n,"network-request-failed"))},bp(`${Pp()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw ti=null,t})}let ti=null;function Sm(n){return ti=ti||Rm(n),ti}/**
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
 */const bm=new _r(5e3,15e3),Pm="__/auth/iframe",Cm="emulator/auth/iframe",km={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dm(n){const t=n.config;W(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?mo(t,Cm):`https://${n.config.authDomain}/${Pm}`,r={apiKey:t.apiKey,appName:n.name,v:Cn},i=Vm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${e}?${gr(r).slice(1)}`}async function Nm(n){const t=await Sm(n),e=te().gapi;return W(e,n,"internal-error"),t.open({where:document.body,url:Dm(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:km,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Jt(n,"network-request-failed"),l=te().setTimeout(()=>{o(a)},bm.get());function u(){te().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const Om={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mm=500,Lm=600,xm="_blank",Fm="http://localhost";class wc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Um(n,t,e,r=Mm,i=Lm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Om),{width:r.toString(),height:i.toString(),top:o,left:a}),d=Ct().toLowerCase();e&&(l=Wl(d)?xm:e),Gl(d)&&(t=t||Fm,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[R,P])=>`${T}${R}=${P},`,"");if(yp(d)&&l!=="_self")return Bm(t||"",l),new wc(null);const I=window.open(t||"",l,p);W(I,n,"popup-blocked");try{I.focus()}catch{}return new wc(I)}function Bm(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const qm="__/auth/handler",jm="emulator/auth/handler",zm=encodeURIComponent("fac");async function Ac(n,t,e,r,i,o){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Cn,eventId:i};if(t instanceof Eo){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",qd(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,I]of Object.entries({}))a[p]=I}if(t instanceof yr){const p=t.getScopes().filter(I=>I!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${zm}=${encodeURIComponent(u)}`:"";return`${$m(n)}?${gr(l).slice(1)}${d}`}function $m({config:n}){return n.emulator?mo(n,jm):`https://${n.authDomain}/${qm}`}/**
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
 */const As="webStorageSupport";class Hm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=au,this._completeRedirectFn=mm,this._overrideRedirectResult=dm}async _openPopup(t,e,r,i){var o;pe((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ac(t,e,r,xs(),i);return Um(t,a,Io())}async _openRedirect(t,e,r,i){await this._originValidation(t);const o=await Ac(t,e,r,xs(),i);return Kp(o),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:o}=this.eventManagers[e];return i?Promise.resolve(i):(pe(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Nm(t),r=new _m(t);return e.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(As,{type:As},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[As];a!==void 0&&e(!!a),ie(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Tm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Yl()||yo()||Pi()}}const Gm=Hm;var Rc="@firebase/auth",Sc="1.7.4";/**
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
 */class Wm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Km(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qm(n){vn(new Je("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zl(n)},d=new Rp(r,i,o,u);return Vp(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),vn(new Je("auth-internal",t=>{const e=Ci(t.getProvider("auth").getImmediate());return(r=>new Wm(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Rc,Sc,Km(n)),ke(Rc,Sc,"esm2017")}/**
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
 */const Xm=5*60,Jm=Vl("authIdTokenMaxAge")||Xm;let bc=null;const Ym=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Jm)return;const i=e==null?void 0:e.token;bc!==i&&(bc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zm(n=Ml()){const t=uo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=kp(n,{popupRedirectResolver:Gm,persistence:[rm,Hp,au]}),r=Vl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Ym(o.toString());Bp(e,a,()=>a(e.currentUser)),Up(e,l=>a(l))}}const i=Cl("auth");return i&&Dp(e,`http://${i}`),e}function tg(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Sp({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const o=Jt("internal-error");o.customData=i,e(o)},r.type="text/javascript",r.charset="UTF-8",tg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qm("Browser");var Pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ke,mu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(_,E,w){for(var y=Array(arguments.length-2),it=2;it<arguments.length;it++)y[it-2]=arguments[it];return m.prototype[E].apply(_,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,g){g||(g=0);var _=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)_[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)_[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],E=v.g[2];var w=v.g[3],y=m+(w^g&(E^w))+_[0]+3614090360&4294967295;m=g+(y<<7&4294967295|y>>>25),y=w+(E^m&(g^E))+_[1]+3905402710&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(g^w&(m^g))+_[2]+606105819&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(m^E&(w^m))+_[3]+3250441966&4294967295,g=E+(y<<22&4294967295|y>>>10),y=m+(w^g&(E^w))+_[4]+4118548399&4294967295,m=g+(y<<7&4294967295|y>>>25),y=w+(E^m&(g^E))+_[5]+1200080426&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(g^w&(m^g))+_[6]+2821735955&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(m^E&(w^m))+_[7]+4249261313&4294967295,g=E+(y<<22&4294967295|y>>>10),y=m+(w^g&(E^w))+_[8]+1770035416&4294967295,m=g+(y<<7&4294967295|y>>>25),y=w+(E^m&(g^E))+_[9]+2336552879&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(g^w&(m^g))+_[10]+4294925233&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(m^E&(w^m))+_[11]+2304563134&4294967295,g=E+(y<<22&4294967295|y>>>10),y=m+(w^g&(E^w))+_[12]+1804603682&4294967295,m=g+(y<<7&4294967295|y>>>25),y=w+(E^m&(g^E))+_[13]+4254626195&4294967295,w=m+(y<<12&4294967295|y>>>20),y=E+(g^w&(m^g))+_[14]+2792965006&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(m^E&(w^m))+_[15]+1236535329&4294967295,g=E+(y<<22&4294967295|y>>>10),y=m+(E^w&(g^E))+_[1]+4129170786&4294967295,m=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(m^g))+_[6]+3225465664&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^g&(w^m))+_[11]+643717713&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^m&(E^w))+_[0]+3921069994&4294967295,g=E+(y<<20&4294967295|y>>>12),y=m+(E^w&(g^E))+_[5]+3593408605&4294967295,m=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(m^g))+_[10]+38016083&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^g&(w^m))+_[15]+3634488961&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^m&(E^w))+_[4]+3889429448&4294967295,g=E+(y<<20&4294967295|y>>>12),y=m+(E^w&(g^E))+_[9]+568446438&4294967295,m=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(m^g))+_[14]+3275163606&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^g&(w^m))+_[3]+4107603335&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^m&(E^w))+_[8]+1163531501&4294967295,g=E+(y<<20&4294967295|y>>>12),y=m+(E^w&(g^E))+_[13]+2850285829&4294967295,m=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(m^g))+_[2]+4243563512&4294967295,w=m+(y<<9&4294967295|y>>>23),y=E+(m^g&(w^m))+_[7]+1735328473&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^m&(E^w))+_[12]+2368359562&4294967295,g=E+(y<<20&4294967295|y>>>12),y=m+(g^E^w)+_[5]+4294588738&4294967295,m=g+(y<<4&4294967295|y>>>28),y=w+(m^g^E)+_[8]+2272392833&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^g)+_[11]+1839030562&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^m)+_[14]+4259657740&4294967295,g=E+(y<<23&4294967295|y>>>9),y=m+(g^E^w)+_[1]+2763975236&4294967295,m=g+(y<<4&4294967295|y>>>28),y=w+(m^g^E)+_[4]+1272893353&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^g)+_[7]+4139469664&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^m)+_[10]+3200236656&4294967295,g=E+(y<<23&4294967295|y>>>9),y=m+(g^E^w)+_[13]+681279174&4294967295,m=g+(y<<4&4294967295|y>>>28),y=w+(m^g^E)+_[0]+3936430074&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^g)+_[3]+3572445317&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^m)+_[6]+76029189&4294967295,g=E+(y<<23&4294967295|y>>>9),y=m+(g^E^w)+_[9]+3654602809&4294967295,m=g+(y<<4&4294967295|y>>>28),y=w+(m^g^E)+_[12]+3873151461&4294967295,w=m+(y<<11&4294967295|y>>>21),y=E+(w^m^g)+_[15]+530742520&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^m)+_[2]+3299628645&4294967295,g=E+(y<<23&4294967295|y>>>9),y=m+(E^(g|~w))+_[0]+4096336452&4294967295,m=g+(y<<6&4294967295|y>>>26),y=w+(g^(m|~E))+_[7]+1126891415&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~g))+_[14]+2878612391&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~m))+_[5]+4237533241&4294967295,g=E+(y<<21&4294967295|y>>>11),y=m+(E^(g|~w))+_[12]+1700485571&4294967295,m=g+(y<<6&4294967295|y>>>26),y=w+(g^(m|~E))+_[3]+2399980690&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~g))+_[10]+4293915773&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~m))+_[1]+2240044497&4294967295,g=E+(y<<21&4294967295|y>>>11),y=m+(E^(g|~w))+_[8]+1873313359&4294967295,m=g+(y<<6&4294967295|y>>>26),y=w+(g^(m|~E))+_[15]+4264355552&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~g))+_[6]+2734768916&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~m))+_[13]+1309151649&4294967295,g=E+(y<<21&4294967295|y>>>11),y=m+(E^(g|~w))+_[4]+4149444226&4294967295,m=g+(y<<6&4294967295|y>>>26),y=w+(g^(m|~E))+_[11]+3174756917&4294967295,w=m+(y<<10&4294967295|y>>>22),y=E+(m^(w|~g))+_[2]+718787259&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~m))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,_=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=g;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(_[E++]=v.charCodeAt(w++),E==this.blockSize){i(this,_),E=0;break}}else for(;w<m;)if(_[E++]=v[w++],E==this.blockSize){i(this,_),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var _=0;32>_;_+=8)v[g++]=this.g[m]>>>_&255;return v};function o(v,m){var g=l;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function a(v,m){this.h=m;for(var g=[],_=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;_&&w==m||(g[E]=w,_=!1)}this.g=g}var l={};function u(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return C(d(-v));for(var m=[],g=1,_=0;v>=g;_++)m[_]=v/g|0,g*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return C(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),_=I,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),y=parseInt(v.substring(E,E+w),m);8>w?(w=d(Math.pow(m,w)),_=_.j(w).add(d(y))):(_=_.j(g),_=_.add(d(y)))}return _}var I=u(0),T=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-C(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var _=this.i(g);v+=(0<=_?_:4294967296+_)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(V(this))return"-"+C(this).toString(v);for(var m=d(Math.pow(v,6)),g=this,_="";;){var E=j(g,m).g;g=q(g,E.j(m));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,P(g))return w+_;for(;6>w.length;)w="0"+w;_=w+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function V(v){return v.h==-1}n.l=function(v){return v=q(this,v),V(v)?-1:P(v)?0:1};function C(v){for(var m=v.g.length,g=[],_=0;_<m;_++)g[_]=~v.g[_];return new a(g,~v.h).add(T)}n.abs=function(){return V(this)?C(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],_=0,E=0;E<=m;E++){var w=_+(this.i(E)&65535)+(v.i(E)&65535),y=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);_=y>>>16,w&=65535,y&=65535,g[E]=y<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function q(v,m){return v.add(C(m))}n.j=function(v){if(P(this)||P(v))return I;if(V(this))return V(v)?C(this).j(C(v)):C(C(this).j(v));if(V(v))return C(this.j(C(v)));if(0>this.l(R)&&0>v.l(R))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],_=0;_<2*m;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<v.g.length;E++){var w=this.i(_)>>>16,y=this.i(_)&65535,it=v.i(E)>>>16,dt=v.i(E)&65535;g[2*_+2*E]+=y*dt,z(g,2*_+2*E),g[2*_+2*E+1]+=w*dt,z(g,2*_+2*E+1),g[2*_+2*E+1]+=y*it,z(g,2*_+2*E+1),g[2*_+2*E+2]+=w*it,z(g,2*_+2*E+2)}for(_=0;_<m;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=m;_<2*m;_++)g[_]=0;return new a(g,0)};function z(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function B(v,m){this.g=v,this.h=m}function j(v,m){if(P(m))throw Error("division by zero");if(P(v))return new B(I,I);if(V(v))return m=j(C(v),m),new B(C(m.g),C(m.h));if(V(m))return m=j(v,C(m)),new B(C(m.g),m.h);if(30<v.g.length){if(V(v)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var g=T,_=m;0>=_.l(v);)g=$(g),_=$(_);var E=x(g,1),w=x(_,1);for(_=x(_,2),g=x(g,2);!P(_);){var y=w.add(_);0>=y.l(v)&&(E=E.add(g),w=y),_=x(_,1),g=x(g,1)}return m=q(v,E.j(m)),new B(E,m)}for(E=I;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),w=d(g),y=w.j(m);V(y)||0<y.l(v);)g-=_,w=d(g),y=w.j(m);P(w)&&(w=T),E=E.add(w),v=q(v,y)}return new B(E,v)}n.A=function(v){return j(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],_=0;_<m;_++)g[_]=this.i(_)&v.i(_);return new a(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],_=0;_<m;_++)g[_]=this.i(_)|v.i(_);return new a(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],_=0;_<m;_++)g[_]=this.i(_)^v.i(_);return new a(g,this.h^v.h)};function $(v){for(var m=v.g.length+1,g=[],_=0;_<m;_++)g[_]=v.i(_)<<1|v.i(_-1)>>>31;return new a(g,v.h)}function x(v,m){var g=m>>5;m%=32;for(var _=v.g.length-g,E=[],w=0;w<_;w++)E[w]=0<m?v.i(w+g)>>>m|v.i(w+g+1)<<32-m:v.i(w+g);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ke=a}).apply(typeof Pc<"u"?Pc:typeof self<"u"?self:typeof window<"u"?window:{});var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gu,_u,Jn,yu,ei,Bs,vu,Eu,Iu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gr=="object"&&Gr];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var h=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in h))break t;h=h[A]}s=s[s.length-1],f=h[s],c=c(f),c!=f&&c!=null&&t(h,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var h=0,f=!1,A={next:function(){if(!f&&h<s.length){var S=h++;return{value:c(S,s[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,h){return s.call.apply(s.bind,arguments)}function I(s,c,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(c,A)}}return function(){return s.apply(c,arguments)}}function T(s,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:I,T.apply(null,arguments)}function R(s,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function P(s,c){function h(){}h.prototype=c.prototype,s.aa=c.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,A,S){for(var D=Array(arguments.length-2),st=2;st<arguments.length;st++)D[st-2]=arguments[st];return c.prototype[A].apply(f,D)}}function V(s){const c=s.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=s[f];return h}return[]}function C(s,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const A=s.length||0,S=f.length||0;s.length=A+S;for(let D=0;D<S;D++)s[A+D]=f[D]}else s.push(f)}}class q{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(s){return/^[\s\xa0]*$/.test(s)}function B(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function j(s){return j[" "](s),s}j[" "]=function(){};var $=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function x(s,c,h){for(const f in s)c.call(h,s[f],f,s)}function v(s,c){for(const h in s)c.call(void 0,s[h],h,s)}function m(s){const c={};for(const h in s)c[h]=s[h];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(s,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)s[h]=f[h];for(let S=0;S<g.length;S++)h=g[S],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function E(s){var c=1;s=s.split(":");const h=[];for(;0<c&&s.length;)h.push(s.shift()),c--;return s.length&&h.push(s.join(":")),h}function w(s){l.setTimeout(()=>{throw s},0)}function y(){var s=ot;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class it{constructor(){this.h=this.g=null}add(c,h){const f=dt.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var dt=new q(()=>new $t,s=>s.reset());class $t{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let wt,U=!1,ot=new it,pt=()=>{const s=l.Promise.resolve(void 0);wt=()=>{s.then(qt)}};var qt=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(h){w(h)}var c=dt;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}U=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Ki=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return s}();function oe(s,c){if(gt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if($){t:{try{j(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=s.fromElement:h=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Fh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&oe.aa.h.call(this)}}P(oe,gt);var Fh={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var br="closure_listenable_"+(1e6*Math.random()|0),Uh=0;function Bh(s,c,h,f,A){this.listener=s,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Uh,this.da=this.fa=!1}function Pr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Cr(s){this.src=s,this.g={},this.h=0}Cr.prototype.add=function(s,c,h,f,A){var S=s.toString();s=this.g[S],s||(s=this.g[S]=[],this.h++);var D=Xi(s,c,f,A);return-1<D?(c=s[D],h||(c.fa=!1)):(c=new Bh(c,this.src,S,!!f,A),c.fa=h,s.push(c)),c};function Qi(s,c){var h=c.type;if(h in s.g){var f=s.g[h],A=Array.prototype.indexOf.call(f,c,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Pr(c),s.g[h].length==0&&(delete s.g[h],s.h--))}}function Xi(s,c,h,f){for(var A=0;A<s.length;++A){var S=s[A];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==f)return A}return-1}var Ji="closure_lm_"+(1e6*Math.random()|0),Yi={};function ea(s,c,h,f,A){if(Array.isArray(c)){for(var S=0;S<c.length;S++)ea(s,c[S],h,f,A);return null}return h=ia(h),s&&s[br]?s.K(c,h,d(f)?!!f.capture:!!f,A):qh(s,c,h,!1,f,A)}function qh(s,c,h,f,A,S){if(!c)throw Error("Invalid event type");var D=d(A)?!!A.capture:!!A,st=ts(s);if(st||(s[Ji]=st=new Cr(s)),h=st.add(c,h,f,D,S),h.proxy)return h;if(f=jh(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)Ki||(A=D),A===void 0&&(A=!1),s.addEventListener(c.toString(),f,A);else if(s.attachEvent)s.attachEvent(ra(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function jh(){function s(h){return c.call(s.src,s.listener,h)}const c=zh;return s}function na(s,c,h,f,A){if(Array.isArray(c))for(var S=0;S<c.length;S++)na(s,c[S],h,f,A);else f=d(f)?!!f.capture:!!f,h=ia(h),s&&s[br]?(s=s.i,c=String(c).toString(),c in s.g&&(S=s.g[c],h=Xi(S,h,f,A),-1<h&&(Pr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete s.g[c],s.h--)))):s&&(s=ts(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Xi(c,h,f,A)),(h=-1<s?c[s]:null)&&Zi(h))}function Zi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[br])Qi(c.i,s);else{var h=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(h,f,s.capture):c.detachEvent?c.detachEvent(ra(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=ts(c))?(Qi(h,s),h.h==0&&(h.src=null,c[Ji]=null)):Pr(s)}}}function ra(s){return s in Yi?Yi[s]:Yi[s]="on"+s}function zh(s,c){if(s.da)s=!0;else{c=new oe(c,this);var h=s.listener,f=s.ha||s.src;s.fa&&Zi(s),s=h.call(f,c)}return s}function ts(s){return s=s[Ji],s instanceof Cr?s:null}var es="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(s){return typeof s=="function"?s:(s[es]||(s[es]=function(c){return s.handleEvent(c)}),s[es])}function Vt(){At.call(this),this.i=new Cr(this),this.M=this,this.F=null}P(Vt,At),Vt.prototype[br]=!0,Vt.prototype.removeEventListener=function(s,c,h,f){na(this,s,c,h,f)};function Ft(s,c){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new gt(c,s);else if(c instanceof gt)c.target=c.target||s;else{var A=c;c=new gt(f,s),_(c,A)}if(A=!0,h)for(var S=h.length-1;0<=S;S--){var D=c.g=h[S];A=kr(D,f,!0,c)&&A}if(D=c.g=s,A=kr(D,f,!0,c)&&A,A=kr(D,f,!1,c)&&A,h)for(S=0;S<h.length;S++)D=c.g=h[S],A=kr(D,f,!1,c)&&A}Vt.prototype.N=function(){if(Vt.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var h=s.g[c],f=0;f<h.length;f++)Pr(h[f]);delete s.g[c],s.h--}}this.F=null},Vt.prototype.K=function(s,c,h,f){return this.i.add(String(s),c,!1,h,f)},Vt.prototype.L=function(s,c,h,f){return this.i.add(String(s),c,!0,h,f)};function kr(s,c,h,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,S=0;S<c.length;++S){var D=c[S];if(D&&!D.da&&D.capture==h){var st=D.listener,Rt=D.ha||D.src;D.fa&&Qi(s.i,D),A=st.call(Rt,f)!==!1&&A}}return A&&!f.defaultPrevented}function sa(s,c,h){if(typeof s=="function")h&&(s=T(s,h));else if(s&&typeof s.handleEvent=="function")s=T(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function oa(s){s.g=sa(()=>{s.g=null,s.i&&(s.i=!1,oa(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class $h extends At{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:oa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(s){At.call(this),this.h=s,this.g={}}P(Mn,At);var aa=[];function ca(s){x(s.g,function(c,h){this.g.hasOwnProperty(h)&&Zi(c)},s),s.g={}}Mn.prototype.N=function(){Mn.aa.N.call(this),ca(this)},Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ns=l.JSON.stringify,Hh=l.JSON.parse,Gh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function rs(){}rs.prototype.h=null;function la(s){return s.h||(s.h=s.i())}function ua(){}var Ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function is(){gt.call(this,"d")}P(is,gt);function ss(){gt.call(this,"c")}P(ss,gt);var Fe={},ha=null;function Vr(){return ha=ha||new Vt}Fe.La="serverreachability";function da(s){gt.call(this,Fe.La,s)}P(da,gt);function xn(s){const c=Vr();Ft(c,new da(c))}Fe.STAT_EVENT="statevent";function fa(s,c){gt.call(this,Fe.STAT_EVENT,s),this.stat=c}P(fa,gt);function Ut(s){const c=Vr();Ft(c,new fa(c,s))}Fe.Ma="timingevent";function pa(s,c){gt.call(this,Fe.Ma,s),this.size=c}P(pa,gt);function Fn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Wh(s,c,h,f,A,S){s.info(function(){if(s.g)if(S)for(var D="",st=S.split("&"),Rt=0;Rt<st.length;Rt++){var et=st[Rt].split("=");if(1<et.length){var Dt=et[0];et=et[1];var Nt=Dt.split("_");D=2<=Nt.length&&Nt[1]=="type"?D+(Dt+"="+et+"&"):D+(Dt+"=redacted&")}}else D=null;else D=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+D})}function Kh(s,c,h,f,A,S,D){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+S+" "+D})}function on(s,c,h,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Xh(s,h)+(f?" "+f:"")})}function Qh(s,c){s.info(function(){return"TIMEOUT: "+c})}Un.prototype.info=function(){};function Xh(s,c){if(!s.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var D=1;D<A.length;D++)A[D]=""}}}}return ns(h)}catch{return c}}var Dr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ma={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},os;function Nr(){}P(Nr,rs),Nr.prototype.g=function(){return new XMLHttpRequest},Nr.prototype.i=function(){return{}},os=new Nr;function ye(s,c,h,f){this.j=s,this.i=c,this.l=h,this.R=f||1,this.U=new Mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ga}function ga(){this.i=null,this.g="",this.h=!1}var _a={},as={};function cs(s,c,h){s.L=1,s.v=xr(ae(c)),s.m=h,s.P=!0,ya(s,null)}function ya(s,c){s.F=Date.now(),Or(s),s.A=ae(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Da(h.i,"t",f),s.C=0,h=s.j.J,s.h=new ga,s.g=Xa(s.j,h?c:null,!s.m),0<s.O&&(s.M=new $h(T(s.Y,s,s.g),s.O)),c=s.U,h=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(aa[0]=A.toString()),A=aa);for(var S=0;S<A.length;S++){var D=ea(h,A[S],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),xn(),Wh(s.i,s.u,s.A,s.l,s.R,s.m)}ye.prototype.ca=function(s){s=s.target;const c=this.M;c&&ce(s)==3?c.j():this.Y(s)},ye.prototype.Y=function(s){try{if(s==this.g)t:{const Nt=ce(this.g);var c=this.g.Ba();const ln=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||Ua(this.g)))){this.J||Nt!=4||c==7||(c==8||0>=ln?xn(3):xn(2)),ls(this);var h=this.g.Z();this.X=h;e:if(va(this)){var f=Ua(this.g);s="";var A=f.length,S=ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),Bn(this);var D="";break e}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(S&&c==A-1)});f.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Kh(this.i,this.u,this.A,this.l,this.R,Nt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var st,Rt=this.g;if((st=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(st)){var et=st;break e}}et=null}if(h=et)on(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,us(this,h);else{this.o=!1,this.s=3,Ut(12),Ue(this),Bn(this);break t}}if(this.P){h=!0;let Qt;for(;!this.J&&this.C<D.length;)if(Qt=Jh(this,D),Qt==as){Nt==4&&(this.s=4,Ut(14),h=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==_a){this.s=4,Ut(15),on(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else on(this.i,this.l,Qt,null),us(this,Qt);if(va(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||D.length!=0||this.h.h||(this.s=1,Ut(16),h=!1),this.o=this.o&&h,!h)on(this.i,this.l,D,"[Invalid Chunked Response]"),Ue(this),Bn(this);else if(0<D.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),gs(Dt),Dt.M=!0,Ut(11))}}else on(this.i,this.l,D,null),us(this,D);Nt==4&&Ue(this),this.o&&!this.J&&(Nt==4?Ga(this.j,this):(this.o=!1,Or(this)))}else pd(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),Ue(this),Bn(this)}}}catch{}finally{}};function va(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Jh(s,c){var h=s.C,f=c.indexOf(`
`,h);return f==-1?as:(h=Number(c.substring(h,f)),isNaN(h)?_a:(f+=1,f+h>c.length?as:(c=c.slice(f,f+h),s.C=f+h,c)))}ye.prototype.cancel=function(){this.J=!0,Ue(this)};function Or(s){s.S=Date.now()+s.I,Ea(s,s.I)}function Ea(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Fn(T(s.ba,s),c)}function ls(s){s.B&&(l.clearTimeout(s.B),s.B=null)}ye.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Qh(this.i,this.A),this.L!=2&&(xn(),Ut(17)),Ue(this),this.s=2,Bn(this)):Ea(this,this.S-s)};function Bn(s){s.j.G==0||s.J||Ga(s.j,s)}function Ue(s){ls(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,ca(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function us(s,c){try{var h=s.j;if(h.G!=0&&(h.g==s||hs(h.h,s))){if(!s.K&&hs(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)jr(h),Br(h);else break t;ms(h),Ut(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Fn(T(h.Za,h),6e3));if(1>=wa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else qe(h,11)}else if((s.K||h.g==s)&&jr(h),!z(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let et=A[c];if(h.T=et[0],et=et[1],h.G==2)if(et[0]=="c"){h.K=et[1],h.ia=et[2];const Dt=et[3];Dt!=null&&(h.la=Dt,h.j.info("VER="+h.la));const Nt=et[4];Nt!=null&&(h.Aa=Nt,h.j.info("SVER="+h.Aa));const ln=et[5];ln!=null&&typeof ln=="number"&&0<ln&&(f=1.5*ln,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Qt=s.g;if(Qt){const $r=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var S=f.h;S.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ds(S,S.h),S.h=null))}if(f.D){const _s=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;_s&&(f.ya=_s,ct(f.I,f.D,_s))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=s;if(f.qa=Qa(f,f.J?f.ia:null,f.W),D.K){Aa(f.h,D);var st=D,Rt=f.L;Rt&&(st.I=Rt),st.B&&(ls(st),Or(st)),f.g=D}else $a(f);0<h.i.length&&qr(h)}else et[0]!="stop"&&et[0]!="close"||qe(h,7);else h.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?qe(h,7):ps(h):et[0]!="noop"&&h.l&&h.l.ta(et),h.v=0)}}xn(4)}catch{}}var Yh=class{constructor(s,c){this.g=s,this.map=c}};function Ia(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ta(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function wa(s){return s.h?1:s.g?s.g.size:0}function hs(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function ds(s,c){s.g?s.g.add(c):s.h=c}function Aa(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ia.prototype.cancel=function(){if(this.i=Ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ra(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const h of s.g.values())c=c.concat(h.D);return c}return V(s.i)}function Zh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],h=s.length,f=0;f<h;f++)c.push(s[f]);return c}c=[],h=0;for(f in s)c[h++]=s[f];return c}function td(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var h=0;h<s;h++)c.push(h);return c}c=[],h=0;for(const f in s)c[h++]=f;return c}}}function Sa(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var h=td(s),f=Zh(s),A=f.length,S=0;S<A;S++)c.call(void 0,f[S],h&&h[S],s)}var ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ed(s,c){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),A=null;if(0<=f){var S=s[h].substring(0,f);A=s[h].substring(f+1)}else S=s[h];c(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Be(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Be){this.h=s.h,Mr(this,s.j),this.o=s.o,this.g=s.g,Lr(this,s.s),this.l=s.l;var c=s.i,h=new zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Pa(this,h),this.m=s.m}else s&&(c=String(s).match(ba))?(this.h=!1,Mr(this,c[1]||"",!0),this.o=qn(c[2]||""),this.g=qn(c[3]||"",!0),Lr(this,c[4]),this.l=qn(c[5]||"",!0),Pa(this,c[6]||"",!0),this.m=qn(c[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}Be.prototype.toString=function(){var s=[],c=this.j;c&&s.push(jn(c,Ca,!0),":");var h=this.g;return(h||c=="file")&&(s.push("//"),(c=this.o)&&s.push(jn(c,Ca,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(jn(h,h.charAt(0)=="/"?id:rd,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",jn(h,od)),s.join("")};function ae(s){return new Be(s)}function Mr(s,c,h){s.j=h?qn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Lr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Pa(s,c,h){c instanceof zn?(s.i=c,ad(s.i,s.h)):(h||(c=jn(c,sd)),s.i=new zn(c,s.h))}function ct(s,c,h){s.i.set(c,h)}function xr(s){return ct(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function qn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function jn(s,c,h){return typeof s=="string"?(s=encodeURI(s).replace(c,nd),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function nd(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ca=/[#\/\?@]/g,rd=/[#\?:]/g,id=/[#\?]/g,sd=/[#\?@]/g,od=/#/g;function zn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ve(s){s.g||(s.g=new Map,s.h=0,s.i&&ed(s.i,function(c,h){s.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=zn.prototype,n.add=function(s,c){ve(this),this.i=null,s=an(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(c),this.h+=1,this};function ka(s,c){ve(s),c=an(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Va(s,c){return ve(s),c=an(s,c),s.g.has(c)}n.forEach=function(s,c){ve(this),this.g.forEach(function(h,f){h.forEach(function(A){s.call(c,A,f,this)},this)},this)},n.na=function(){ve(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=s[f];for(let S=0;S<A.length;S++)h.push(c[f])}return h},n.V=function(s){ve(this);let c=[];if(typeof s=="string")Va(this,s)&&(c=c.concat(this.g.get(an(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)c=c.concat(s[h])}return c},n.set=function(s,c){return ve(this),this.i=null,s=an(this,s),Va(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Da(s,c,h){ka(s,c),0<h.length&&(s.i=null,s.g.set(an(s,c),V(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const S=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var A=S;D[f]!==""&&(A+="="+encodeURIComponent(String(D[f]))),s.push(A)}}return this.i=s.join("&")};function an(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function ad(s,c){c&&!s.j&&(ve(s),s.i=null,s.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(ka(this,f),Da(this,A,h))},s)),s.j=c}function cd(s,c){const h=new Un;if(l.Image){const f=new Image;f.onload=R(Ee,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(Ee,h,"TestLoadImage: error",!1,c,f),f.onabort=R(Ee,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(Ee,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function ld(s,c){const h=new Un,f=new AbortController,A=setTimeout(()=>{f.abort(),Ee(h,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?Ee(h,"TestPingServer: ok",!0,c):Ee(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Ee(h,"TestPingServer: error",!1,c)})}function Ee(s,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function ud(){this.g=new Gh}function hd(s,c,h){const f=h||"";try{Sa(s,function(A,S){let D=A;d(A)&&(D=ns(A)),c.push(f+S+"="+encodeURIComponent(D))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function $n(s){this.l=s.Ub||null,this.j=s.eb||!1}P($n,rs),$n.prototype.g=function(){return new Fr(this.l,this.j)},$n.prototype.i=function(s){return function(){return s}}({});function Fr(s,c){Vt.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Fr,Vt),n=Fr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Gn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Na(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Na(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Hn(this):Gn(this),this.readyState==3&&Na(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Hn(this))},n.Qa=function(s){this.g&&(this.response=s,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Gn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=c.next();return s.join(`\r
`)};function Gn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Oa(s){let c="";return x(s,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function fs(s,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=Oa(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):ct(s,c,h))}function mt(s){Vt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(mt,Vt);var dd=/^https?$/i,fd=["POST","PUT"];n=mt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():os.g(),this.v=this.o?la(this.o):la(os),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(S){Ma(this,S);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fd,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of h)this.g.setRequestHeader(S,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fa(this),this.u=!0,this.g.send(s),this.u=!1}catch(S){Ma(this,S)}};function Ma(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,La(s),Ur(s)}function La(s){s.A||(s.A=!0,Ft(s,"complete"),Ft(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ft(this,"complete"),Ft(this,"abort"),Ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ur(this,!0)),mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xa(this):this.bb())},n.bb=function(){xa(this)};function xa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||ce(s)!=4||s.Z()!=2)){if(s.u&&ce(s)==4)sa(s.Ea,0,s);else if(Ft(s,"readystatechange"),ce(s)==4){s.h=!1;try{const D=s.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=D===0){var A=String(s.D).match(ba)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),f=!dd.test(A?A.toLowerCase():"")}h=f}if(h)Ft(s,"complete"),Ft(s,"success");else{s.m=6;try{var S=2<ce(s)?s.g.statusText:""}catch{S=""}s.l=S+" ["+s.Z()+"]",La(s)}}finally{Ur(s)}}}}function Ur(s,c){if(s.g){Fa(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ft(s,"ready");try{h.onreadystatechange=f}catch{}}}function Fa(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function ce(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<ce(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Hh(c)}};function Ua(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function pd(s){const c={};s=(s.g&&2<=ce(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var h=E(s[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[A]||[];c[A]=S,S.push(h)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(s,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||c}function Ba(s){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,s),this.cb=Wn("retryDelaySeedMs",1e4,s),this.Wa=Wn("forwardChannelMaxRetries",2,s),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ia(s&&s.concurrentRequestLimit),this.Da=new ud,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ba.prototype,n.la=8,n.G=1,n.connect=function(s,c,h,f){Ut(0),this.W=s,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Qa(this,null,this.W),qr(this)};function ps(s){if(qa(s),s.G==3){var c=s.U++,h=ae(s.I);if(ct(h,"SID",s.K),ct(h,"RID",c),ct(h,"TYPE","terminate"),Kn(s,h),c=new ye(s,s.j,c),c.L=2,c.v=xr(ae(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Xa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Or(c)}Ka(s)}function Br(s){s.g&&(gs(s),s.g.cancel(),s.g=null)}function qa(s){Br(s),s.u&&(l.clearTimeout(s.u),s.u=null),jr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function qr(s){if(!Ta(s.h)&&!s.s){s.s=!0;var c=s.Ga;wt||pt(),U||(wt(),U=!0),ot.add(c,s),s.B=0}}function md(s,c){return wa(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Fn(T(s.Ga,s,c),Wa(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new ye(this,this.j,s);let S=this.o;if(this.S&&(S?(S=m(S),_(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=za(this,A,c),h=ae(this.I),ct(h,"RID",s),ct(h,"CVER",22),this.D&&ct(h,"X-HTTP-Session-Id",this.D),Kn(this,h),S&&(this.O?c="headers="+encodeURIComponent(String(Oa(S)))+"&"+c:this.m&&fs(h,this.m,S)),ds(this.h,A),this.Ua&&ct(h,"TYPE","init"),this.P?(ct(h,"$req",c),ct(h,"SID","null"),A.T=!0,cs(A,h,null)):cs(A,h,c),this.G=2}}else this.G==3&&(s?ja(this,s):this.i.length==0||Ta(this.h)||ja(this))};function ja(s,c){var h;c?h=c.l:h=s.U++;const f=ae(s.I);ct(f,"SID",s.K),ct(f,"RID",h),ct(f,"AID",s.T),Kn(s,f),s.m&&s.o&&fs(f,s.m,s.o),h=new ye(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),c&&(s.i=c.D.concat(s.i)),c=za(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ds(s.h,h),cs(h,f,c)}function Kn(s,c){s.H&&x(s.H,function(h,f){ct(c,f,h)}),s.l&&Sa({},function(h,f){ct(c,f,h)})}function za(s,c,h){h=Math.min(s.i.length,h);var f=s.l?T(s.l.Na,s.l,s):null;t:{var A=s.i;let S=-1;for(;;){const D=["count="+h];S==-1?0<h?(S=A[0].g,D.push("ofs="+S)):S=0:D.push("ofs="+S);let st=!0;for(let Rt=0;Rt<h;Rt++){let et=A[Rt].g;const Dt=A[Rt].map;if(et-=S,0>et)S=Math.max(0,A[Rt].g-100),st=!1;else try{hd(Dt,D,"req"+et+"_")}catch{f&&f(Dt)}}if(st){f=D.join("&");break t}}}return s=s.i.splice(0,h),c.D=s,f}function $a(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;wt||pt(),U||(wt(),U=!0),ot.add(c,s),s.v=0}}function ms(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Fn(T(s.Fa,s),Wa(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Fn(T(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),Br(this),Ha(this))};function gs(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Ha(s){s.g=new ye(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=ae(s.qa);ct(c,"RID","rpc"),ct(c,"SID",s.K),ct(c,"AID",s.T),ct(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&ct(c,"TO",s.ja),ct(c,"TYPE","xmlhttp"),Kn(s,c),s.m&&s.o&&fs(c,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=xr(ae(c)),h.m=null,h.P=!0,ya(h,s)}n.Za=function(){this.C!=null&&(this.C=null,Br(this),ms(this),Ut(19))};function jr(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ga(s,c){var h=null;if(s.g==c){jr(s),gs(s),s.g=null;var f=2}else if(hs(s.h,c))h=c.D,Aa(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=s.B;f=Vr(),Ft(f,new pa(f,h)),qr(s)}else $a(s);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&md(s,c)||f==2&&ms(s)))switch(h&&0<h.length&&(c=s.h,c.i=c.i.concat(h)),A){case 1:qe(s,5);break;case 4:qe(s,10);break;case 3:qe(s,6);break;default:qe(s,2)}}}function Wa(s,c){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*c}function qe(s,c){if(s.j.info("Error code "+c),c==2){var h=T(s.fb,s),f=s.Xa;const A=!f;f=new Be(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mr(f,"https"),xr(f),A?cd(f.toString(),h):ld(f.toString(),h)}else Ut(2);s.G=0,s.l&&s.l.sa(c),Ka(s),qa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function Ka(s){if(s.G=0,s.ka=[],s.l){const c=Ra(s.h);(c.length!=0||s.i.length!=0)&&(C(s.ka,c),C(s.ka,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.ra()}}function Qa(s,c,h){var f=h instanceof Be?ae(h):new Be(h);if(f.g!="")c&&(f.g=c+"."+f.g),Lr(f,f.s);else{var A=l.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var S=new Be(null);f&&Mr(S,f),c&&(S.g=c),A&&Lr(S,A),h&&(S.l=h),f=S}return h=s.D,c=s.ya,h&&c&&ct(f,h,c),ct(f,"VER",s.la),Kn(s,f),f}function Xa(s,c,h){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new mt(new $n({eb:h})):new mt(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ja(){}n=Ja.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zr(){}zr.prototype.g=function(s,c){return new Ht(s,c)};function Ht(s,c){Vt.call(this),this.g=new Ba(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!z(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new cn(this)}P(Ht,Vt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){ps(this.g)},Ht.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=ns(s),s=h);c.i.push(new Yh(c.Ya++,s)),c.G==3&&qr(c)},Ht.prototype.N=function(){this.g.l=null,delete this.j,ps(this.g),delete this.g,Ht.aa.N.call(this)};function Ya(s){is.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const h in c){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}P(Ya,is);function Za(){ss.call(this),this.status=1}P(Za,ss);function cn(s){this.g=s}P(cn,Ja),cn.prototype.ua=function(){Ft(this.g,"a")},cn.prototype.ta=function(s){Ft(this.g,new Ya(s))},cn.prototype.sa=function(s){Ft(this.g,new Za)},cn.prototype.ra=function(){Ft(this.g,"b")},zr.prototype.createWebChannel=zr.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Iu=function(){return new zr},Eu=function(){return Vr()},vu=Fe,Bs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dr.NO_ERROR=0,Dr.TIMEOUT=8,Dr.HTTP_ERROR=6,ei=Dr,ma.COMPLETE="complete",yu=ma,ua.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",Vt.prototype.listen=Vt.prototype.K,Jn=ua,_u=$n,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,gu=mt}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});const Cc="@firebase/firestore";/**
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
 */class Mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let Vn="10.12.1";/**
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
 */const tn=new co("@firebase/firestore");function Qn(){return tn.logLevel}function L(n,...t){if(tn.logLevel<=Z.DEBUG){const e=t.map(wo);tn.debug(`Firestore (${Vn}): ${n}`,...e)}}function me(n,...t){if(tn.logLevel<=Z.ERROR){const e=t.map(wo);tn.error(`Firestore (${Vn}): ${n}`,...e)}}function In(n,...t){if(tn.logLevel<=Z.WARN){const e=t.map(wo);tn.warn(`Firestore (${Vn}): ${n}`,...e)}}function wo(n){if(typeof n=="string")return n;try{/**
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
 */function K(n="Unexpected state"){const t=`FIRESTORE (${Vn}) INTERNAL ASSERTION FAILED: `+n;throw me(t),new Error(t)}function at(n,t){n||K()}function J(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends _e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ve{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Tu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class eg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Mt.UNAUTHENTICATED))}shutdown(){}}class ng{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rg{constructor(t){this.t=t,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let o=new Ve;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ve,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ve)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string"),new Tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new Mt(t)}}class ig{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ig(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class og{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ag{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string"),this.R=e.token,new og(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function cg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class wu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=cg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function nt(n,t){return n<t?-1:n>t?1:0}function Tn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class It{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new It(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Q(t)}static min(){return new Q(new It(0,0))}static max(){return new Q(new It(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cr{constructor(t,e,r){e===void 0?e=0:e>t.length&&K(),r===void 0?r=t.length-e:r>t.length-e&&K(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return cr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof cr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class lt extends cr{construct(t,e,r){return new lt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new lt(e)}static emptyPath(){return new lt([])}}const lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends cr{construct(t,e,r){return new bt(t,e,r)}static isValidIdentifier(t){return lg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new O(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new O(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bt(e)}static emptyPath(){return new bt([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(lt.fromString(t))}static fromName(t){return new F(lt.fromString(t).popFirst(5))}static empty(){return new F(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&lt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return lt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new lt(t.slice()))}}function ug(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new It(e+1,0):new It(e,r));return new Ne(i,F.empty(),t)}function hg(n){return new Ne(n.readTime,n.key,-1)}class Ne{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ne(Q.min(),F.empty(),-1)}static max(){return new Ne(Q.max(),F.empty(),-1)}}function dg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
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
 */const fg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Er(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==fg)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new k((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof k?e:k.resolve(e)}catch(e){return k.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):k.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):k.reject(e)}static resolve(t){return new k((e,r)=>{e(t)})}static reject(t){return new k((e,r)=>{r(t)})}static waitFor(t){return new k((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},u=>r(u))}),a=!0,o===i&&e()})}static or(t){let e=k.resolve(!1);for(const r of t)e=e.next(i=>i?k.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new k((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;e(t[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(t,e){return new k((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function mg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ir(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ao{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ao.oe=-1;function Di(n){return n==null}function mi(n){return n===0&&1/n==-1/0}function gg(n){return typeof n=="number"&&Number.isInteger(n)&&!mi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function kc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function rn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Au(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class ft{constructor(t,e){this.comparator=t,this.root=e||St.EMPTY}insert(t,e){return new ft(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,St.BLACK,null,null))}remove(t){return new ft(this.comparator,this.root.remove(t,this.comparator).copy(null,null,St.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wr(this.root,t,this.comparator,!0)}}class Wr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class St{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=o??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new St(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,r,i,o){return this}insert(t,e,r){return new St(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(t){this.comparator=t,this.data=new ft(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vc(this.data.getIterator())}getIteratorFrom(t){return new Vc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pt(this.comparator);return e.data=t,e}}class Vc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(t){this.fields=t,t.sort(bt.comparator)}static empty(){return new Gt([])}unionWith(t){let e=new Pt(bt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Tn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Ru extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ru("Invalid base64 string: "+o):o}}(t);return new xt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new xt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const _g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oe(n){if(at(!!n),typeof n=="string"){let t=0;const e=_g.exec(n);if(at(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
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
 */function Ro(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function So(n){const t=n.mapValue.fields.__previous_value__;return Ro(t)?So(t):t}function lr(n){const t=Oe(n.mapValue.fields.__local_write_time__.timestampValue);return new It(t.seconds,t.nanos)}/**
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
 */class yg{constructor(t,e,r,i,o,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class ur{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ur&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ro(n)?4:vg(n)?9007199254740991:10:K()}function se(n,t){if(n===t)return!0;const e=nn(n);if(e!==nn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return lr(n).isEqual(lr(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Oe(i.timestampValue),l=Oe(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return en(i.bytesValue).isEqual(en(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return yt(i.geoPointValue.latitude)===yt(o.geoPointValue.latitude)&&yt(i.geoPointValue.longitude)===yt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return yt(i.integerValue)===yt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=yt(i.doubleValue),l=yt(o.doubleValue);return a===l?mi(a)===mi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Tn(n.arrayValue.values||[],t.arrayValue.values||[],se);case 10:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(kc(a)!==kc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!se(a[u],l[u])))return!1;return!0}(n,t);default:return K()}}function hr(n,t){return(n.values||[]).find(e=>se(e,t))!==void 0}function wn(n,t){if(n===t)return 0;const e=nn(n),r=nn(t);if(e!==r)return nt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=yt(o.integerValue||o.doubleValue),u=yt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return Dc(n.timestampValue,t.timestampValue);case 4:return Dc(lr(n),lr(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(o,a){const l=en(o),u=en(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=nt(l[d],u[d]);if(p!==0)return p}return nt(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=nt(yt(o.latitude),yt(a.latitude));return l!==0?l:nt(yt(o.longitude),yt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const p=wn(l[d],u[d]);if(p)return p}return nt(l.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===Kr.mapValue&&a===Kr.mapValue)return 0;if(o===Kr.mapValue)return 1;if(a===Kr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let I=0;I<u.length&&I<p.length;++I){const T=nt(u[I],p[I]);if(T!==0)return T;const R=wn(l[u[I]],d[p[I]]);if(R!==0)return R}return nt(u.length,p.length)}(n.mapValue,t.mapValue);default:throw K()}}function Dc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=Oe(n),r=Oe(t),i=nt(e.seconds,r.seconds);return i!==0?i:nt(e.nanos,r.nanos)}function An(n){return qs(n)}function qs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Oe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return en(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=qs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${qs(e.fields[a])}`;return i+"}"}(n.mapValue):K()}function Nc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function js(n){return!!n&&"integerValue"in n}function bo(n){return!!n&&"arrayValue"in n}function Oc(n){return!!n&&"nullValue"in n}function Mc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ni(n){return!!n&&"mapValue"in n}function nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return rn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=nr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function vg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ni(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nr(e)}setAll(t){let e=bt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=nr(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());ni(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return se(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ni(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){rn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new jt(nr(this.value))}}function Su(n){const t=[];return rn(n.fields,(e,r)=>{const i=new bt([e]);if(ni(r)){const o=Su(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Gt(t)}/**
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
 */class Lt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Lt(t,0,Q.min(),Q.min(),Q.min(),jt.empty(),0)}static newFoundDocument(t,e,r,i){return new Lt(t,1,e,Q.min(),r,i,0)}static newNoDocument(t,e){return new Lt(t,2,e,Q.min(),Q.min(),jt.empty(),0)}static newUnknownDocument(t,e){return new Lt(t,3,e,Q.min(),Q.min(),jt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Lt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gi{constructor(t,e){this.position=t,this.inclusive=e}}function Lc(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=wn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function xc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!se(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Eg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class bu{}class Et extends bu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Tg(t,e,r):e==="array-contains"?new Rg(t,r):e==="in"?new Sg(t,r):e==="not-in"?new bg(t,r):e==="array-contains-any"?new Pg(t,r):new Et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new wg(t,r):new Ag(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(wn(e,this.value)):e!==null&&nn(this.value)===nn(e)&&this.matchesComparison(wn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends bu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Yt(t,e)}matches(t){return Pu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pu(n){return n.op==="and"}function Cu(n){return Ig(n)&&Pu(n)}function Ig(n){for(const t of n.filters)if(t instanceof Yt)return!1;return!0}function zs(n){if(n instanceof Et)return n.field.canonicalString()+n.op.toString()+An(n.value);if(Cu(n))return n.filters.map(t=>zs(t)).join(",");{const t=n.filters.map(e=>zs(e)).join(",");return`${n.op}(${t})`}}function ku(n,t){return n instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.field.isEqual(i.field)&&se(r.value,i.value)}(n,t):n instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&ku(a,i.filters[l]),!0):!1}(n,t):void K()}function Vu(n){return n instanceof Et?function(e){return`${e.field.canonicalString()} ${e.op} ${An(e.value)}`}(n):n instanceof Yt?function(e){return e.op.toString()+" {"+e.getFilters().map(Vu).join(" ,")+"}"}(n):"Filter"}class Tg extends Et{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class wg extends Et{constructor(t,e){super(t,"in",e),this.keys=Du("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ag extends Et{constructor(t,e){super(t,"not-in",e),this.keys=Du("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Du(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class Rg extends Et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bo(e)&&hr(e.arrayValue,this.value)}}class Sg extends Et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&hr(this.value.arrayValue,e)}}class bg extends Et{constructor(t,e){super(t,"not-in",e)}matches(t){if(hr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!hr(this.value.arrayValue,e)}}class Pg extends Et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>hr(this.value.arrayValue,r))}}/**
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
 */class Cg{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Fc(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Cg(n,t,e,r,i,o,a)}function Po(n){const t=J(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>zs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Di(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>An(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>An(r)).join(",")),t.ue=e}return t.ue}function Co(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Eg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ku(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!xc(n.startAt,t.startAt)&&xc(n.endAt,t.endAt)}function $s(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Dn{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kg(n,t,e,r,i,o,a,l){return new Dn(n,t,e,r,i,o,a,l)}function Nu(n){return new Dn(n)}function Uc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ou(n){return n.collectionGroup!==null}function rr(n){const t=J(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Pt(bt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new dr(o,r))}),e.has(bt.keyField().canonicalString())||t.ce.push(new dr(bt.keyField(),r))}return t.ce}function ee(n){const t=J(n);return t.le||(t.le=Vg(t,rr(n))),t.le}function Vg(n,t){if(n.limitType==="F")return Fc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new dr(i.field,o)});const e=n.endAt?new gi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gi(n.startAt.position,n.startAt.inclusive):null;return Fc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Hs(n,t){const e=n.filters.concat([t]);return new Dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function _i(n,t,e){return new Dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ni(n,t){return Co(ee(n),ee(t))&&n.limitType===t.limitType}function Mu(n){return`${Po(ee(n))}|lt:${n.limitType}`}function hn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Vu(i)).join(", ")}]`),Di(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>An(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>An(i)).join(",")),`Target(${r})`}(ee(n))}; limitType=${n.limitType})`}function Oi(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of rr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Lc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,rr(r),i)||r.endAt&&!function(a,l,u){const d=Lc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,rr(r),i))}(n,t)}function Dg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lu(n){return(t,e)=>{let r=!1;for(const i of rr(n)){const o=Ng(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ng(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?wn(u,d):K()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Nn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Au(this.inner)}size(){return this.innerSize}}/**
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
 */const Og=new ft(F.comparator);function ge(){return Og}const xu=new ft(F.comparator);function Yn(...n){let t=xu;for(const e of n)t=t.insert(e.key,e);return t}function Fu(n){let t=xu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function He(){return ir()}function Uu(){return ir()}function ir(){return new Nn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Mg=new ft(F.comparator),Lg=new Pt(F.comparator);function Y(...n){let t=Lg;for(const e of n)t=t.add(e);return t}const xg=new Pt(nt);function Fg(){return xg}/**
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
 */function Bu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mi(t)?"-0":t}}function qu(n){return{integerValue:""+n}}function Ug(n,t){return gg(t)?qu(t):Bu(n,t)}/**
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
 */class Mi{constructor(){this._=void 0}}function Bg(n,t,e){return n instanceof yi?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ro(o)&&(o=So(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof fr?zu(n,t):n instanceof pr?$u(n,t):function(i,o){const a=ju(i,o),l=Bc(a)+Bc(i.Pe);return js(a)&&js(i.Pe)?qu(l):Bu(i.serializer,l)}(n,t)}function qg(n,t,e){return n instanceof fr?zu(n,t):n instanceof pr?$u(n,t):e}function ju(n,t){return n instanceof vi?function(r){return js(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class yi extends Mi{}class fr extends Mi{constructor(t){super(),this.elements=t}}function zu(n,t){const e=Hu(t);for(const r of n.elements)e.some(i=>se(i,r))||e.push(r);return{arrayValue:{values:e}}}class pr extends Mi{constructor(t){super(),this.elements=t}}function $u(n,t){let e=Hu(t);for(const r of n.elements)e=e.filter(i=>!se(i,r));return{arrayValue:{values:e}}}class vi extends Mi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Bc(n){return yt(n.integerValue||n.doubleValue)}function Hu(n){return bo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jg(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof fr&&i instanceof fr||r instanceof pr&&i instanceof pr?Tn(r.elements,i.elements,se):r instanceof vi&&i instanceof vi?se(r.Pe,i.Pe):r instanceof yi&&i instanceof yi}(n.transform,t.transform)}class zg{constructor(t,e){this.version=t,this.transformResults=e}}class ne{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ne}static exists(t){return new ne(void 0,t)}static updateTime(t){return new ne(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ri(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Li{}function Gu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ku(n.key,ne.none()):new Tr(n.key,n.data,ne.none());{const e=n.data,r=jt.empty();let i=new Pt(bt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Le(n.key,r,new Gt(i.toArray()),ne.none())}}function $g(n,t,e){n instanceof Tr?function(i,o,a){const l=i.value.clone(),u=jc(i.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Le?function(i,o,a){if(!ri(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=jc(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Wu(i)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function sr(n,t,e,r){return n instanceof Tr?function(o,a,l,u){if(!ri(o.precondition,a))return l;const d=o.value.clone(),p=zc(o.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Le?function(o,a,l,u){if(!ri(o.precondition,a))return l;const d=zc(o.fieldTransforms,u,a),p=a.data;return p.setAll(Wu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,a,l){return ri(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Hg(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=ju(r.transform,i||null);o!=null&&(e===null&&(e=jt.empty()),e.set(r.field,o))}return e||null}function qc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Tn(r,i,(o,a)=>jg(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Tr extends Li{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Le extends Li{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function jc(n,t,e){const r=new Map;at(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,qg(a,l,e[i]))}return r}function zc(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Bg(o,a,t))}return r}class Ku extends Li{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gg extends Li{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wg{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&$g(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=sr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=sr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Uu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const u=Gu(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Y())}isEqual(t){return this.batchId===t.batchId&&Tn(this.mutations,t.mutations,(e,r)=>qc(e,r))&&Tn(this.baseMutations,t.baseMutations,(e,r)=>qc(e,r))}}class ko{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){at(t.mutations.length===r.length);let i=function(){return Mg}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new ko(t,e,r,i)}}/**
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
 */class Kg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Qg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var _t,tt;function Xg(n){switch(n){default:return K();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Qu(n){if(n===void 0)return me("GRPC error has no .code"),b.UNKNOWN;switch(n){case _t.OK:return b.OK;case _t.CANCELLED:return b.CANCELLED;case _t.UNKNOWN:return b.UNKNOWN;case _t.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case _t.INTERNAL:return b.INTERNAL;case _t.UNAVAILABLE:return b.UNAVAILABLE;case _t.UNAUTHENTICATED:return b.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case _t.NOT_FOUND:return b.NOT_FOUND;case _t.ALREADY_EXISTS:return b.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return b.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case _t.ABORTED:return b.ABORTED;case _t.OUT_OF_RANGE:return b.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return b.UNIMPLEMENTED;case _t.DATA_LOSS:return b.DATA_LOSS;default:return K()}}(tt=_t||(_t={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jg(){return new TextEncoder}/**
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
 */const Yg=new Ke([4294967295,4294967295],0);function $c(n){const t=Jg().encode(n),e=new mu;return e.update(t),new Uint8Array(e.digest())}function Hc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ke([e,r],0),new Ke([i,o],0)]}class Vo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Zn(`Invalid padding: ${e}`);if(r<0)throw new Zn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Zn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Zn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ke.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Ke.fromNumber(r)));return i.compare(Yg)===1&&(i=new Ke([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=$c(t),[r,i]=Hc(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Vo(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=$c(t),[r,i]=Hc(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xi{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,wr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new xi(Q.min(),i,new ft(nt),ge(),Y())}}class wr{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new wr(r,e,Y(),Y(),Y())}}/**
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
 */class ii{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Xu{constructor(t,e){this.targetId=t,this.me=e}}class Ju{constructor(t,e,r=xt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Gc{constructor(){this.fe=0,this.ge=Kc(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Y(),e=Y(),r=Y();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:K()}}),new wr(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Kc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,at(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zg{constructor(t){this.Le=t,this.Be=new Map,this.ke=ge(),this.qe=Wc(),this.Qe=new ft(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:K()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if($s(o))if(r===0){const a=new F(o.path);this.Ue(e,a,Lt.newNoDocument(a,Q.min()))}else at(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=en(r).toUint8Array()}catch(u){if(u instanceof Ru)return In("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vo(a,i,o)}catch(u){return In(u instanceof Zn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&$s(l.target)){const u=new F(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Lt.newNoDocument(u,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=Y();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new xi(t,e,this.Qe,this.ke,r);return this.ke=ge(),this.qe=Wc(),this.Qe=new ft(nt),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Gc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Pt(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Gc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Wc(){return new ft(F.comparator)}function Kc(){return new ft(F.comparator)}const t_={asc:"ASCENDING",desc:"DESCENDING"},e_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n_={and:"AND",or:"OR"};class r_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gs(n,t){return n.useProto3Json||Di(t)?t:{value:t}}function Ei(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function i_(n,t){return Ei(n,t.toTimestamp())}function re(n){return at(!!n),Q.fromTimestamp(function(e){const r=Oe(e);return new It(r.seconds,r.nanos)}(n))}function Do(n,t){return Ws(n,t).canonicalString()}function Ws(n,t){const e=function(i){return new lt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Zu(n){const t=lt.fromString(n);return at(ih(t)),t}function Ks(n,t){return Do(n.databaseId,t.path)}function Rs(n,t){const e=Zu(t);if(e.get(1)!==n.databaseId.projectId)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(eh(e))}function th(n,t){return Do(n.databaseId,t)}function s_(n){const t=Zu(n);return t.length===4?lt.emptyPath():eh(t)}function Qs(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function eh(n){return at(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qc(n,t,e){return{name:Ks(n,t),fields:e.value.mapValue.fields}}function o_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(at(p===void 0||typeof p=="string"),xt.fromBase64String(p||"")):(at(p===void 0||p instanceof Buffer||p instanceof Uint8Array),xt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const p=d.code===void 0?b.UNKNOWN:Qu(d.code);return new O(p,d.message||"")}(a);e=new Ju(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rs(n,r.document.name),o=re(r.document.updateTime),a=r.document.createTime?re(r.document.createTime):Q.min(),l=new jt({mapValue:{fields:r.document.fields}}),u=Lt.newFoundDocument(i,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new ii(d,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Rs(n,r.document),o=r.readTime?re(r.readTime):Q.min(),a=Lt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new ii([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Rs(n,r.document),o=r.removedTargetIds||[];e=new ii([],o,i,null)}else{if(!("filter"in t))return K();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Qg(i,o),l=r.targetId;e=new Xu(l,a)}}return e}function a_(n,t){let e;if(t instanceof Tr)e={update:Qc(n,t.key,t.value)};else if(t instanceof Ku)e={delete:Ks(n,t.key)};else if(t instanceof Le)e={update:Qc(n,t.key,t.data),updateMask:g_(t.fieldMask)};else{if(!(t instanceof Gg))return K();e={verify:Ks(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof yi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:i_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(n,t.precondition)),e}function c_(n,t){return n&&n.length>0?(at(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?re(i.updateTime):re(o);return a.isEqual(Q.min())&&(a=re(o)),new zg(a,i.transformResults||[])}(e,t))):[]}function l_(n,t){return{documents:[th(n,t.path)]}}function u_(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=th(n,i);const o=function(d){if(d.length!==0)return rh(Yt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:dn(T.field),direction:f_(T.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Gs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function h_(n){let t=s_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){at(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(I){const T=nh(I);return T instanceof Yt&&Cu(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(T=>function(P){return new dr(fn(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(T))}(e.orderBy));let l=null;e.limit&&(l=function(I){let T;return T=typeof I=="object"?I.value:I,Di(T)?null:T}(e.limit));let u=null;e.startAt&&(u=function(I){const T=!!I.before,R=I.values||[];return new gi(R,T)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const T=!I.before,R=I.values||[];return new gi(R,T)}(e.endAt)),kg(t,i,a,o,l,"F",u,d)}function d_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=fn(e.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fn(e.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=fn(e.unaryFilter.field);return Et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fn(e.unaryFilter.field);return Et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(e){return Et.create(fn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Yt.create(e.compositeFilter.filters.map(r=>nh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(n):K()}function f_(n){return t_[n]}function p_(n){return e_[n]}function m_(n){return n_[n]}function dn(n){return{fieldPath:n.canonicalString()}}function fn(n){return bt.fromServerFormat(n.fieldPath)}function rh(n){return n instanceof Et?function(e){if(e.op==="=="){if(Mc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NAN"}};if(Oc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NAN"}};if(Oc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(e.field),op:p_(e.op),value:e.value}}}(n):n instanceof Yt?function(e){const r=e.getFilters().map(i=>rh(i));return r.length===1?r[0]:{compositeFilter:{op:m_(e.op),filters:r}}}(n):K()}function g_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ih(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class be{constructor(t,e,r,i,o=Q.min(),a=Q.min(),l=xt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new be(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new be(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class __{constructor(t){this.ct=t}}function y_(n){const t=h_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_i(t,t.limit,"L"):t}/**
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
 */class v_{constructor(){this._n=new E_}addToCollectionParentIndex(t,e){return this._n.add(e),k.resolve()}getCollectionParents(t,e){return k.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return k.resolve()}deleteFieldIndex(t,e){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,e){return k.resolve()}getDocumentsMatchingTarget(t,e){return k.resolve(null)}getIndexType(t,e){return k.resolve(0)}getFieldIndexes(t,e){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,e){return k.resolve(Ne.min())}getMinOffsetFromCollectionGroup(t,e){return k.resolve(Ne.min())}updateCollectionGroup(t,e,r){return k.resolve()}updateIndexEntries(t,e){return k.resolve()}}class E_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Pt(lt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Pt(lt.comparator)).toArray()}}/**
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
 */class Rn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Rn(0)}static Ln(){return new Rn(-1)}}/**
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
 */class I_{constructor(){this.changes=new Nn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Lt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?k.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class T_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class w_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&sr(r.mutation,i,Gt.empty(),It.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Y()){const i=He();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=Yn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=He();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Y()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=ge();const a=ir(),l=function(){return ir()}();return e.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Le)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),sr(p.mutation,d,p.mutation.getFieldMask(),It.now())):a.set(d.key,Gt.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var I;return l.set(d,new T_(p,(I=a.get(d))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(t,e){const r=ir();let i=new ft((a,l)=>a-l),o=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let p=r.get(u)||Gt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const I=(i.get(l.batchId)||Y()).add(u);i=i.insert(l.batchId,I)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,I=Uu();p.forEach(T=>{if(!o.has(T)){const R=Gu(e.get(T),r.get(T));R!==null&&I.set(T,R),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ou(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):k.resolve(He());let l=-1,u=o;return a.next(d=>k.forEach(d,(p,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(p)?k.resolve():this.remoteDocumentCache.getEntry(t,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,u,d,Y())).next(p=>({batchId:l,changes:Fu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let i=Yn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=Yn();return this.indexManager.getCollectionParents(t,o).next(l=>k.forEach(l,u=>{const d=function(I,T){return new Dn(T,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(p=>{p.forEach((I,T)=>{a=a.insert(I,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Lt.newInvalidDocument(p)))});let l=Yn();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&sr(p.mutation,d,Gt.empty(),It.now()),Oi(e,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class A_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return k.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:re(i.createTime)}}(e)),k.resolve()}getNamedQuery(t,e){return k.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:y_(i.bundledQuery),readTime:re(i.readTime)}}(e)),k.resolve()}}/**
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
 */class R_{constructor(){this.overlays=new ft(F.comparator),this.hr=new Map}getOverlay(t,e){return k.resolve(this.overlays.get(e))}getOverlays(t,e){const r=He();return k.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),k.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),k.resolve()}getOverlaysForCollection(t,e,r){const i=He(),o=e.length+1,a=new F(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return k.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new ft((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=He(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=He(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return k.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Kg(e,r));let o=this.hr.get(e);o===void 0&&(o=Y(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
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
 */class No{constructor(){this.Pr=new Pt(Tt.Ir),this.Tr=new Pt(Tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Tt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Tt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new F(new lt([])),r=new Tt(e,t),i=new Tt(e,t+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new F(new lt([])),r=new Tt(e,t),i=new Tt(e,t+1);let o=Y();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Tt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Tt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return F.comparator(t.key,e.key)||nt(t.pr,e.pr)}static Er(t,e){return nt(t.pr,e.pr)||F.comparator(t.key,e.key)}}/**
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
 */class S_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Pt(Tt.Ir)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wg(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new Tt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,e){return k.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Tt(e,0),i=new Tt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);o.push(l)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Pt(nt);return e.forEach(i=>{const o=new Tt(i,0),a=new Tt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),k.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new Tt(new F(o),0);let l=new Pt(nt);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.pr)),!0)},a),k.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){at(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return k.forEach(e.mutations,i=>{const o=new Tt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Tt(e,0),i=this.wr.firstAfterOrEqual(r);return k.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class b_{constructor(t){this.vr=t,this.docs=function(){return new ft(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return k.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(e))}getEntries(t,e){let r=ge();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Lt.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=ge();const a=e.path,l=new F(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||dg(hg(p),r)<=0||(i.has(p.key)||Oi(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(t,e,r,i){K()}Fr(t,e){return k.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new P_(this)}getSize(t){return k.resolve(this.size)}}class P_ extends I_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),k.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class C_{constructor(t){this.persistence=t,this.Mr=new Nn(e=>Po(e),Co),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new No,this.targetCount=0,this.Lr=Rn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),k.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Rn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,k.resolve()}updateTargetData(t,e){return this.qn(e),k.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return k.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),k.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),k.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return k.resolve(r)}containsKey(t,e){return k.resolve(this.Nr.containsKey(e))}}/**
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
 */class k_{constructor(t,e){this.Br={},this.overlays={},this.kr=new Ao(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new C_(this),this.indexManager=new v_,this.remoteDocumentCache=function(i){return new b_(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new __(e),this.$r=new A_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new R_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new S_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const i=new V_(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class V_ extends pg{constructor(t){super(),this.currentSequenceNumber=t}}class Oo{constructor(t){this.persistence=t,this.zr=new No,this.jr=null}static Hr(t){return new Oo(t)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),k.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),k.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Jr,r=>{const i=F.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,Q.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return k.or([()=>k.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Mo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=Y(),i=Y();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Mo(t,e.fromCache,r,i)}}/**
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
 */class D_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class N_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Md()?8:mg(Ct())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new D_;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(Qn()<=Z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",hn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),k.resolve()):(Qn()<=Z.DEBUG&&L("QueryEngine","Query:",hn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Qn()<=Z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",hn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ee(e))):k.resolve())}ji(t,e){if(Uc(e))return k.resolve(null);let r=ee(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=_i(e,null,"F"),r=ee(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Y(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Zi(e,l);return this.Xi(e,d,a,u.readTime)?this.ji(t,_i(e,null,"F")):this.es(t,d,e,u)}))})))}Hi(t,e,r,i){return Uc(e)||i.isEqual(Q.min())?k.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,i)?k.resolve(null):(Qn()<=Z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hn(e)),this.es(t,a,e,ug(i,-1)).next(l=>l))})}Zi(t,e){let r=new Pt(Lu(t));return e.forEach((i,o)=>{Oi(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return Qn()<=Z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",hn(e)),this.zi.getDocumentsMatchingQuery(t,e,Ne.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class O_{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new ft(nt),this.rs=new Nn(o=>Po(o),Co),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new w_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function M_(n,t,e,r){return new O_(n,t,e,r)}async function sh(n,t){const e=J(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=Y();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return e.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function L_(n,t){const e=J(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const I=d.batch,T=I.keys();let R=k.resolve();return T.forEach(P=>{R=R.next(()=>p.getEntry(u,P)).next(V=>{const C=d.docVersions.get(P);at(C!==null),V.version.compareTo(C)<0&&(I.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Y();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function oh(n){const t=J(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function x_(n,t){const e=J(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const l=[];t.targetChanges.forEach((p,I)=>{const T=i.get(I);if(!T)return;l.push(e.Qr.removeMatchingKeys(o,p.removedDocuments,I).next(()=>e.Qr.addMatchingKeys(o,p.addedDocuments,I)));let R=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?R=R.withResumeToken(xt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(I,R),function(V,C,q){return V.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(T,R,p)&&l.push(e.Qr.updateTargetData(o,R))});let u=ge(),d=Y();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(F_(o,a,t.documentUpdates).next(p=>{u=p.cs,d=p.ls})),!r.isEqual(Q.min())){const p=e.Qr.getLastRemoteSnapshotVersion(o).next(I=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return k.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(e.ns=i,o))}function F_(n,t,e){let r=Y(),i=Y();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ge();return e.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):L("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:i}})}function U_(n,t){const e=J(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function B_(n,t){const e=J(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,k.resolve(i)):e.Qr.allocateTargetId(r).next(a=>(i=new be(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Xs(n,t,e){const r=J(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ir(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Xc(n,t,e){const r=J(n);let i=Q.min(),o=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const I=J(u),T=I.rs.get(p);return T!==void 0?k.resolve(I.ns.get(T)):I.Qr.getTargetData(d,p)}(r,a,ee(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?i:Q.min(),e?o:Y())).next(l=>(q_(r,Dg(t),l),{documents:l,hs:o})))}function q_(n,t,e){let r=n.ss.get(t)||Q.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Jc{constructor(){this.activeTargetIds=Fg()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class j_{constructor(){this.no=new Jc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Jc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class z_{io(t){}shutdown(){}}/**
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
 */class Yc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qr=null;function Ss(){return Qr===null?Qr=function(){return 268435456+Math.round(2147483648*Math.random())}():Qr++,"0x"+Qr.toString(16)}/**
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
 */const $_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class H_{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const Ot="WebChannelConnection";class G_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,a){const l=Ss(),u=this.vo(e,r.toUriEncodedString());L("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,u,d,i).then(p=>(L("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw In("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}xo(e,r,i,o,a,l){return this.Co(e,r,i,o,a)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const i=$_[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=Ss();return new Promise((a,l)=>{const u=new gu;u.setWithCredentials(!0),u.listenOnce(yu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ei.NO_ERROR:const p=u.getResponseJson();L(Ot,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case ei.TIMEOUT:L(Ot,`RPC '${t}' ${o} timed out`),l(new O(b.DEADLINE_EXCEEDED,"Request time out"));break;case ei.HTTP_ERROR:const I=u.getStatus();if(L(Ot,`RPC '${t}' ${o} failed with status:`,I,"response text:",u.getResponseText()),I>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const P=function(C){const q=C.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(q)>=0?q:b.UNKNOWN}(R.status);l(new O(P,R.message))}else l(new O(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new O(b.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{L(Ot,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);L(Ot,`RPC '${t}' ${o} sending request:`,i),u.send(e,"POST",d,r,15)})}Oo(t,e,r){const i=Ss(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Iu(),l=Eu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new _u({})),this.Fo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const p=o.join("");L(Ot,`Creating RPC '${t}' stream ${i}: ${p}`,u);const I=a.createWebChannel(p,u);let T=!1,R=!1;const P=new H_({lo:C=>{R?L(Ot,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(T||(L(Ot,`Opening RPC '${t}' stream ${i} transport.`),I.open(),T=!0),L(Ot,`RPC '${t}' stream ${i} sending:`,C),I.send(C))},ho:()=>I.close()}),V=(C,q,z)=>{C.listen(q,B=>{try{z(B)}catch(j){setTimeout(()=>{throw j},0)}})};return V(I,Jn.EventType.OPEN,()=>{R||(L(Ot,`RPC '${t}' stream ${i} transport opened.`),P.mo())}),V(I,Jn.EventType.CLOSE,()=>{R||(R=!0,L(Ot,`RPC '${t}' stream ${i} transport closed`),P.po())}),V(I,Jn.EventType.ERROR,C=>{R||(R=!0,In(Ot,`RPC '${t}' stream ${i} transport errored:`,C),P.po(new O(b.UNAVAILABLE,"The operation could not be completed")))}),V(I,Jn.EventType.MESSAGE,C=>{var q;if(!R){const z=C.data[0];at(!!z);const B=z,j=B.error||((q=B[0])===null||q===void 0?void 0:q.error);if(j){L(Ot,`RPC '${t}' stream ${i} received error:`,j);const $=j.status;let x=function(g){const _=_t[g];if(_!==void 0)return Qu(_)}($),v=j.message;x===void 0&&(x=b.INTERNAL,v="Unknown error status: "+$+" with message "+j.message),R=!0,P.po(new O(x,v)),I.close()}else L(Ot,`RPC '${t}' stream ${i} received:`,z),P.yo(z)}}),V(l,vu.STAT_EVENT,C=>{C.stat===Bs.PROXY?L(Ot,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===Bs.NOPROXY&&L(Ot,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function bs(){return typeof document<"u"?document:null}/**
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
 */function Fi(n){return new r_(n,!0)}/**
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
 */class ah{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class ch{constructor(t,e,r,i,o,a,l,u){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ah(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(me(e.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new O(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W_ extends ch{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=o_(this.serializer,t),r=function(o){if(!("targetChange"in o))return Q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?re(a.readTime):Q.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Qs(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=$s(u)?{documents:l_(o,u)}:{query:u_(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Yu(o,a.resumeToken);const d=Gs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=Ei(o,a.snapshotVersion.toTimestamp());const d=Gs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=d_(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Qs(this.serializer),e.removeTarget=t,this.i_(e)}}class K_ extends ch{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=c_(t.writeResults,t.commitTime),r=re(t.commitTime);return this.listener.A_(r,e)}return at(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Qs(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>a_(this.serializer,r))};this.i_(e)}}/**
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
 */class Q_ extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,Ws(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(b.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,Ws(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(b.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class X_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(me(e),this.y_=!1):L("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class J_{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{sn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=J(u);d.M_.add(4),await Ar(d),d.N_.set("Unknown"),d.M_.delete(4),await Ui(d)}(this))})}),this.N_=new X_(r,i)}}async function Ui(n){if(sn(n))for(const t of n.x_)await t(!0)}async function Ar(n){for(const t of n.x_)await t(!1)}function lh(n,t){const e=J(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Uo(e)?Fo(e):On(e).Xo()&&xo(e,t))}function Lo(n,t){const e=J(n),r=On(e);e.F_.delete(t),r.Xo()&&uh(e,t),e.F_.size===0&&(r.Xo()?r.n_():sn(e)&&e.N_.set("Unknown"))}function xo(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}On(n).P_(t)}function uh(n,t){n.L_.xe(t),On(n).I_(t)}function Fo(n){n.L_=new Zg({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),On(n).start(),n.N_.w_()}function Uo(n){return sn(n)&&!On(n).Zo()&&n.F_.size>0}function sn(n){return J(n).M_.size===0}function hh(n){n.L_=void 0}async function Y_(n){n.N_.set("Online")}async function Z_(n){n.F_.forEach((t,e)=>{xo(n,t)})}async function ty(n,t){hh(n),Uo(n)?(n.N_.D_(t),Fo(n)):n.N_.set("Unknown")}async function ey(n,t,e){if(n.N_.set("Online"),t instanceof Ju&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,t)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ii(n,r)}else if(t instanceof ii?n.L_.Ke(t):t instanceof Xu?n.L_.He(t):n.L_.We(t),!e.isEqual(Q.min()))try{const r=await oh(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.F_.get(d);p&&o.F_.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=o.F_.get(u);if(!p)return;o.F_.set(u,p.withResumeToken(xt.EMPTY_BYTE_STRING,p.snapshotVersion)),uh(o,u);const I=new be(p.target,u,d,p.sequenceNumber);xo(o,I)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Ii(n,r)}}async function Ii(n,t,e){if(!Ir(t))throw t;n.M_.add(1),await Ar(n),n.N_.set("Offline"),e||(e=()=>oh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Ui(n)})}function dh(n,t){return t().catch(e=>Ii(n,e,t))}async function Bi(n){const t=J(n),e=Me(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;ny(t);)try{const i=await U_(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,ry(t,i)}catch(i){await Ii(t,i)}fh(t)&&ph(t)}function ny(n){return sn(n)&&n.v_.length<10}function ry(n,t){n.v_.push(t);const e=Me(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function fh(n){return sn(n)&&!Me(n).Zo()&&n.v_.length>0}function ph(n){Me(n).start()}async function iy(n){Me(n).V_()}async function sy(n){const t=Me(n);for(const e of n.v_)t.d_(e.mutations)}async function oy(n,t,e){const r=n.v_.shift(),i=ko.from(r,t,e);await dh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Bi(n)}async function ay(n,t){t&&Me(n).E_&&await async function(r,i){if(function(a){return Xg(a)&&a!==b.ABORTED}(i.code)){const o=r.v_.shift();Me(r).t_(),await dh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Bi(r)}}(n,t),fh(n)&&ph(n)}async function Zc(n,t){const e=J(n);e.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=sn(e);e.M_.add(3),await Ar(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Ui(e)}async function cy(n,t){const e=J(n);t?(e.M_.delete(2),await Ui(e)):t||(e.M_.add(2),await Ar(e),e.N_.set("Unknown"))}function On(n){return n.B_||(n.B_=function(e,r,i){const o=J(e);return o.f_(),new W_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Y_.bind(null,n),To:Z_.bind(null,n),Ao:ty.bind(null,n),h_:ey.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Uo(n)?Fo(n):n.N_.set("Unknown")):(await n.B_.stop(),hh(n))})),n.B_}function Me(n){return n.k_||(n.k_=function(e,r,i){const o=J(e);return o.f_(),new K_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:iy.bind(null,n),Ao:ay.bind(null,n),R_:sy.bind(null,n),A_:oy.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Bi(n)):(await n.k_.stop(),n.v_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class Bo{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new Bo(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qo(n,t){if(me("AsyncQueue",`${t}: ${n}`),Ir(n))return new O(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class _n{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=Yn(),this.sortedSet=new ft(this.comparator)}static emptySet(t){return new _n(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new _n;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class tl{constructor(){this.q_=new ft(F.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):K():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Sn{constructor(t,e,r,i,o,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Sn(t,e,_n.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ni(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class ly{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class uy{constructor(){this.queries=new Nn(t=>Mu(t),Ni),this.onlineState="Unknown",this.z_=new Set}}async function hy(n,t){const e=J(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new ly,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=qo(a,`Initialization of query '${hn(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&jo(e)}async function dy(n,t){const e=J(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function fy(n,t){const e=J(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&jo(e)}function py(n,t,e){const r=J(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function jo(n){n.z_.forEach(t=>{t.next()})}var Js,el;(el=Js||(Js={})).J_="default",el.Cache="cache";class my{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Js.Cache}}/**
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
 */class mh{constructor(t){this.key=t}}class gh{constructor(t){this.key=t}}class gy{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Y(),this.mutatedKeys=Y(),this.Ia=Lu(t),this.Ta=new _n(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new tl,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,I)=>{const T=i.get(p),R=Oi(this.query,I)?I:null,P=!!T&&this.mutatedKeys.has(T.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;T&&R?T.data.isEqual(R.data)?P!==V&&(r.track({type:3,doc:R}),C=!0):this.Ra(T,R)||(r.track({type:2,doc:R}),C=!0,(u&&this.Ia(R,u)>0||d&&this.Ia(R,d)<0)&&(l=!0)):!T&&R?(r.track({type:0,doc:R}),C=!0):T&&!R&&(r.track({type:1,doc:T}),C=!0,(u||d)&&(l=!0)),C&&(R?(a=a.add(R),o=V?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,I)=>function(R,P){const V=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return V(R)-V(P)}(p.type,I.type)||this.Ia(p.doc,I.doc)),this.Va(r),i=i!=null&&i;const l=e&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Sn(this.query,t.Ta,o,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new tl,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Y(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new gh(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new mh(r))}),e}pa(t){this.la=t.hs,this.Pa=Y();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Sn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class _y{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class yy{constructor(t){this.key=t,this.wa=!1}}class vy{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Nn(l=>Mu(l),Ni),this.Da=new Map,this.Ca=new Set,this.va=new ft(F.comparator),this.Fa=new Map,this.Ma=new No,this.xa={},this.Oa=new Map,this.Na=Rn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Ey(n,t,e=!0){const r=Th(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await _h(r,t,e,!0),i}async function Iy(n,t){const e=Th(n);await _h(e,t,!0,!1)}async function _h(n,t,e,r){const i=await B_(n.localStore,ee(t)),o=i.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await Ty(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&lh(n.remoteStore,i),l}async function Ty(n,t,e,r,i){n.Ba=(I,T,R)=>async function(V,C,q,z){let B=C.view.da(q);B.Xi&&(B=await Xc(V.localStore,C.query,!1).then(({documents:v})=>C.view.da(v,B)));const j=z&&z.targetChanges.get(C.targetId),$=z&&z.targetMismatches.get(C.targetId)!=null,x=C.view.applyChanges(B,V.isPrimaryClient,j,$);return rl(V,C.targetId,x.fa),x.snapshot}(n,I,T,R);const o=await Xc(n.localStore,t,!0),a=new gy(t,o.hs),l=a.da(o.documents),u=wr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);rl(n,e,d.fa);const p=new _y(t,e,a);return n.ba.set(t,p),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function wy(n,t,e){const r=J(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!Ni(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Xs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Lo(r.remoteStore,i.targetId),Ys(r,i.targetId)}).catch(Er)):(Ys(r,i.targetId),await Xs(r.localStore,i.targetId,!0))}async function Ay(n,t){const e=J(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Lo(e.remoteStore,r.targetId))}async function Ry(n,t,e){const r=Dy(n);try{const i=await function(a,l){const u=J(a),d=It.now(),p=l.reduce((R,P)=>R.add(P.key),Y());let I,T;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=ge(),V=Y();return u.os.getEntries(R,p).next(C=>{P=C,P.forEach((q,z)=>{z.isValidDocument()||(V=V.add(q))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,P)).next(C=>{I=C;const q=[];for(const z of l){const B=Hg(z,I.get(z.key).overlayedDocument);B!=null&&q.push(new Le(z.key,B,Su(B.value.mapValue),ne.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,q,l)}).next(C=>{T=C;const q=C.applyToLocalDocumentSet(I,V);return u.documentOverlayCache.saveOverlays(R,C.batchId,q)})}).then(()=>({batchId:T.batchId,changes:Fu(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new ft(nt)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,e),await Rr(r,i.changes),await Bi(r.remoteStore)}catch(i){const o=qo(i,"Failed to persist write");e.reject(o)}}async function yh(n,t){const e=J(n);try{const r=await x_(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Fa.get(o);a&&(at(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?at(a.wa):i.removedDocuments.size>0&&(at(a.wa),a.wa=!1))}),await Rr(e,r,t)}catch(r){await Er(r)}}function nl(n,t,e){const r=J(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=J(a);u.onlineState=l;let d=!1;u.queries.forEach((p,I)=>{for(const T of I.U_)T.j_(l)&&(d=!0)}),d&&jo(u)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sy(n,t,e){const r=J(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let a=new ft(F.comparator);a=a.insert(o,Lt.newNoDocument(o,Q.min()));const l=Y().add(o),u=new xi(Q.min(),new Map,new ft(nt),a,l);await yh(r,u),r.va=r.va.remove(o),r.Fa.delete(t),zo(r)}else await Xs(r.localStore,t,!1).then(()=>Ys(r,t,e)).catch(Er)}async function by(n,t){const e=J(n),r=t.batch.batchId;try{const i=await L_(e.localStore,t);Eh(e,r,null),vh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Rr(e,i)}catch(i){await Er(i)}}async function Py(n,t,e){const r=J(n);try{const i=await function(a,l){const u=J(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(I=>(at(I!==null),p=I.keys(),u.mutationQueue.removeMutationBatch(d,I))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,t);Eh(r,t,e),vh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Rr(r,i)}catch(i){await Er(i)}}function vh(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Eh(n,t,e){const r=J(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function Ys(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Ih(n,r)})}function Ih(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Lo(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),zo(n))}function rl(n,t,e){for(const r of e)r instanceof mh?(n.Ma.addReference(r.key,t),Cy(n,r)):r instanceof gh?(L("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Ih(n,r.key)):K()}function Cy(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(L("SyncEngine","New document in limbo: "+e),n.Ca.add(r),zo(n))}function zo(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new F(lt.fromString(t)),r=n.Na.next();n.Fa.set(r,new yy(e)),n.va=n.va.insert(e,r),lh(n.remoteStore,new be(ee(Nu(e.path)),r,"TargetPurposeLimboResolution",Ao.oe))}}async function Rr(n,t,e){const r=J(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const p=d&&!d.fromCache;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){i.push(d);const p=Mo.Ki(u.targetId,d);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(u,d){const p=J(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>k.forEach(d,T=>k.forEach(T.qi,R=>p.persistence.referenceDelegate.addReference(I,T.targetId,R)).next(()=>k.forEach(T.Qi,R=>p.persistence.referenceDelegate.removeReference(I,T.targetId,R)))))}catch(I){if(!Ir(I))throw I;L("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const T=I.targetId;if(!I.fromCache){const R=p.ns.get(T),P=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(P);p.ns=p.ns.insert(T,V)}}}(r.localStore,o))}async function ky(n,t){const e=J(n);if(!e.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const r=await sh(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(u=>{u.reject(new O(b.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Rr(e,r.us)}}function Vy(n,t){const e=J(n),r=e.Fa.get(t);if(r&&r.wa)return Y().add(r.key);{let i=Y();const o=e.Da.get(t);if(!o)return i;for(const a of o){const l=e.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function Th(n){const t=J(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=yh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sy.bind(null,t),t.Sa.h_=fy.bind(null,t.eventManager),t.Sa.ka=py.bind(null,t.eventManager),t}function Dy(n){const t=J(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=by.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Py.bind(null,t),t}class il{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return M_(this.persistence,new N_,t.initialUser,this.serializer)}createPersistence(t){return new k_(Oo.Hr,this.serializer)}createSharedClientState(t){return new j_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ny{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ky.bind(null,this.syncEngine),await cy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new uy}()}createDatastore(t){const e=Fi(t.databaseInfo.databaseId),r=function(o){return new G_(o)}(t.databaseInfo);return function(o,a,l,u){return new Q_(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new J_(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>nl(this.syncEngine,e,0),function(){return Yc.D()?new Yc:new z_}())}createSyncEngine(t,e){return function(i,o,a,l,u,d,p){const I=new vy(i,o,a,l,u,d);return p&&(I.La=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=J(r);L("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ar(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Oy{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):me("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class My{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{L("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(L("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=qo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ps(n,t){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function sl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xy(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Zc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Zc(t.remoteStore,i)),n._onlineComponents=t}function Ly(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function xy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ps(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ly(e))throw e;In("Error using user provided cache. Falling back to memory cache: "+e),await Ps(n,new il)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Ps(n,new il);return n._offlineComponents}async function wh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await sl(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await sl(n,new Ny))),n._onlineComponents}function Fy(n){return wh(n).then(t=>t.syncEngine)}async function Uy(n){const t=await wh(n),e=t.eventManager;return e.onListen=Ey.bind(null,t.syncEngine),e.onUnlisten=wy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Iy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ay.bind(null,t.syncEngine),e}function By(n,t,e={}){const r=new Ve;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const p=new Oy({next:T=>{a.enqueueAndForget(()=>dy(o,I)),T.fromCache&&u.source==="server"?d.reject(new O(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),I=new my(l,p,{includeMetadataChanges:!0,ra:!0});return hy(o,I)}(await Uy(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Ah(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ol=new Map;/**
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
 */function Rh(n,t,e){if(!e)throw new O(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qy(n,t,e,r){if(t===!0&&r===!0)throw new O(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function al(n){if(!F.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cl(n){if(F.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K()}function bn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qi(n);throw new O(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ll{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ah((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ji{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ll({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ll(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eg;switch(r.type){case"firstParty":return new sg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ol.get(e);r&&(L("ComponentProvider","Removing Datastore"),ol.delete(e),r.terminate())}(this),Promise.resolve()}}function jy(n,t,e,r={}){var i;const o=(n=bn(n,ji))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&In("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Mt.MOCK_USER;else{l=Cd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Mt(d)}n._authCredentials=new ng(new Tu(l,u))}}/**
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
 */class xe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xe(this.firestore,t,this._query)}}class Kt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new De(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Kt(this.firestore,t,this._key)}}class De extends xe{constructor(t,e,r){super(t,e,Nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Kt(this.firestore,null,new F(t))}withConverter(t){return new De(this.firestore,t,this._path)}}function si(n,t,...e){if(n=kt(n),Rh("collection","path",t),n instanceof ji){const r=lt.fromString(t,...e);return cl(r),new De(n,null,r)}{if(!(n instanceof Kt||n instanceof De))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(t,...e));return cl(r),new De(n.firestore,null,r)}}function Sh(n,t,...e){if(n=kt(n),arguments.length===1&&(t=wu.newId()),Rh("doc","path",t),n instanceof ji){const r=lt.fromString(t,...e);return al(r),new Kt(n,null,new F(r))}{if(!(n instanceof Kt||n instanceof De))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(t,...e));return al(r),new Kt(n.firestore,n instanceof De?n.converter:null,new F(r))}}/**
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
 */class zy{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ah(this,"async_queue_retry"),this.hu=()=>{const e=bs();e&&L("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=bs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=bs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Ve;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Ir(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw me("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Bo.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class zi extends ji{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new zy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ph(this),this._firestoreClient.terminate()}}function $y(n,t){const e=typeof n=="object"?n:Ml(),r=typeof n=="string"?n:"(default)",i=uo(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=bd("firestore");o&&jy(i,...o)}return i}function bh(n){return n._firestoreClient||Ph(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ph(n){var t,e,r;const i=n._freezeSettings(),o=function(l,u,d,p){return new yg(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ah(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new My(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Pn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pn(xt.fromBase64String(t))}catch(e){throw new O(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pn(xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class $i{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class $o{constructor(t){this._methodName=t}}/**
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
 */class Ho{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */const Hy=/^__.*__$/;class Gy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Le(t,this.data,this.fieldMask,e,this.fieldTransforms):new Tr(t,this.data,e,this.fieldTransforms)}}class Ch{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function kh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Go{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Go(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Ti(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(kh(this.fu)&&Hy.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Wy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Fi(t)}Fu(t,e,r,i=!1){return new Go({fu:t,methodName:e,vu:r,path:bt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wo(n){const t=n._freezeSettings(),e=Fi(n._databaseId);return new Wy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ky(n,t,e,r,i,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);Ko("Data must be an object, but it was:",a,r);const l=Vh(r,a);let u,d;if(o.merge)u=new Gt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const I of o.mergeFields){const T=Zs(t,I,e);if(!a.contains(T))throw new O(b.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Nh(p,T)||p.push(T)}u=new Gt(p),d=a.fieldTransforms.filter(I=>u.covers(I.field))}else u=null,d=a.fieldTransforms;return new Gy(new jt(l),u,d)}class Hi extends $o{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hi}}function Qy(n,t,e,r){const i=n.Fu(1,t,e);Ko("Data must be an object, but it was:",i,r);const o=[],a=jt.empty();rn(r,(u,d)=>{const p=Qo(t,u,e);d=kt(d);const I=i.Su(p);if(d instanceof Hi)o.push(p);else{const T=Sr(d,I);T!=null&&(o.push(p),a.set(p,T))}});const l=new Gt(o);return new Ch(a,l,i.fieldTransforms)}function Xy(n,t,e,r,i,o){const a=n.Fu(1,t,e),l=[Zs(t,r,e)],u=[i];if(o.length%2!=0)throw new O(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)l.push(Zs(t,o[T])),u.push(o[T+1]);const d=[],p=jt.empty();for(let T=l.length-1;T>=0;--T)if(!Nh(d,l[T])){const R=l[T];let P=u[T];P=kt(P);const V=a.Su(R);if(P instanceof Hi)d.push(R);else{const C=Sr(P,V);C!=null&&(d.push(R),p.set(R,C))}}const I=new Gt(d);return new Ch(p,I,a.fieldTransforms)}function Jy(n,t,e,r=!1){return Sr(e,n.Fu(r?4:3,t))}function Sr(n,t){if(Dh(n=kt(n)))return Ko("Unsupported field value:",t,n),Vh(n,t);if(n instanceof $o)return function(r,i){if(!kh(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let u=Sr(l,i.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ug(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=It.fromDate(r);return{timestampValue:Ei(i.serializer,o)}}if(r instanceof It){const o=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ei(i.serializer,o)}}if(r instanceof Ho)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:Yu(i.serializer,r._byteString)};if(r instanceof Kt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Do(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${qi(r)}`)}(n,t)}function Vh(n,t){const e={};return Au(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rn(n,(r,i)=>{const o=Sr(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Dh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof Ho||n instanceof Pn||n instanceof Kt||n instanceof $o)}function Ko(n,t,e){if(!Dh(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=qi(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Zs(n,t,e){if((t=kt(t))instanceof $i)return t._internalPath;if(typeof t=="string")return Qo(n,t);throw Ti("Field path arguments must be of type string or ",n,!1,void 0,e)}const Yy=new RegExp("[~\\*/\\[\\]]");function Qo(n,t,e){if(t.search(Yy)>=0)throw Ti(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new $i(...t.split("."))._internalPath}catch{throw Ti(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ti(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new O(b.INVALID_ARGUMENT,l+n+u)}function Nh(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Oh{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Zy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Zy extends Oh{data(){return super.data()}}function Gi(n,t){return typeof t=="string"?Qo(n,t):t instanceof $i?t._internalPath:t._delegate._internalPath}/**
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
 */function tv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xo{}class Jo extends Xo{}function Cs(n,t,...e){let r=[];t instanceof Xo&&r.push(t),r=r.concat(e),function(o){const a=o.filter(u=>u instanceof Yo).length,l=o.filter(u=>u instanceof Wi).length;if(a>1||a>0&&l>0)throw new O(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Wi extends Jo{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Wi(t,e,r)}_apply(t){const e=this._parse(t);return Mh(t._query,e),new xe(t.firestore,t.converter,Hs(t._query,e))}_parse(t){const e=Wo(t.firestore);return function(o,a,l,u,d,p,I){let T;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){hl(I,p);const R=[];for(const P of I)R.push(ul(u,o,P));T={arrayValue:{values:R}}}else T=ul(u,o,I)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||hl(I,p),T=Jy(l,a,I,p==="in"||p==="not-in");return Et.create(d,p,T)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ks(n,t,e){const r=t,i=Gi("where",n);return Wi._create(i,r,e)}class Yo extends Xo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Yo(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Yt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const u of l)Mh(a,u),a=Hs(a,u)}(t._query,e),new xe(t.firestore,t.converter,Hs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zo extends Jo{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Zo(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new O(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dr(o,a)}(t._query,this._field,this._direction);return new xe(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Dn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function ev(n,t="asc"){const e=t,r=Gi("orderBy",n);return Zo._create(r,e)}class ta extends Jo{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new ta(t,e,r)}_apply(t){return new xe(t.firestore,t.converter,_i(t._query,this._limit,this._limitType))}}function nv(n){return ta._create("limit",n,"F")}function ul(n,t,e){if(typeof(e=kt(e))=="string"){if(e==="")throw new O(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ou(t)&&e.indexOf("/")!==-1)throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(lt.fromString(e));if(!F.isDocumentKey(r))throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nc(n,new F(r))}if(e instanceof Kt)return Nc(n,e._key);throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qi(e)}.`)}function hl(n,t){if(!Array.isArray(n)||n.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Mh(n,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class rv{convertValue(t,e="none"){switch(nn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(en(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw K()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return rn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Ho(yt(t.latitude),yt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=So(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(lr(t));default:return null}}convertTimestamp(t){const e=Oe(t);return new It(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=lt.fromString(t);at(ih(r));const i=new ur(r.get(1),r.get(3)),o=new F(r.popFirst(5));return i.isEqual(e)||me(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function iv(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class Xr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sv extends Oh{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Gi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class oi extends sv{data(t={}){return super.data(t)}}class ov{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Xr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new oi(this._firestore,this._userDataWriter,r.key,r,new Xr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new oi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new oi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:av(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function av(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class cv extends rv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Kt(this.firestore,null,e)}}function Vs(n){n=bn(n,xe);const t=bn(n.firestore,zi),e=bh(t),r=new cv(t);return tv(n._query),By(e,n._query).then(i=>new ov(t,r,n,i))}function lv(n,t,e,...r){n=bn(n,Kt);const i=bn(n.firestore,zi),o=Wo(i);let a;return a=typeof(t=kt(t))=="string"||t instanceof $i?Xy(o,"updateDoc",n._key,t,e,r):Qy(o,"updateDoc",n._key,t),Lh(i,[a.toMutation(n._key,ne.exists(!0))])}function uv(n,t){const e=bn(n.firestore,zi),r=Sh(n),i=iv(n.converter,t);return Lh(e,[Ky(Wo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ne.exists(!1))]).then(()=>r)}function Lh(n,t){return function(r,i){const o=new Ve;return r.asyncQueue.enqueueAndForget(async()=>Ry(await Fy(r),i,o)),o.promise}(bh(n),t)}(function(t,e=!0){(function(i){Vn=i})(Cn),vn(new Je("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new zi(new rg(r.getProvider("auth-internal")),new ag(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ur(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ke(Cc,"4.6.3",t),ke(Cc,"4.6.3","esm2017")})();const hv={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},xh=Ol(hv),wi=Zm(xh),tr=$y(xh),Zt=ao(0),Xn=ao(0),to=ao(0),dv=""+new URL("../assets/logo.BgbdimHT.png",import.meta.url).href;function dl(n,t,e){const r=n.slice();return r[35]=t[e],r}function fl(n,t,e){const r=n.slice();return r[38]=t[e],r}function pl(n){let t,e="추가",r,i;return{c(){t=H("button"),t.textContent=e,this.h()},l(o){t=G(o,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(t)!=="svelte-17v9pgi"&&(t.textContent=e),this.h()},h(){M(t,"class","top-right-button svelte-1xdekqq")},m(o,a){Bt(o,t,a),r||(i=vt(t,"click",n[9]),r=!0)},p:Wt,d(o){o&&X(t),r=!1,i()}}}function ml(n){let t,e=yn(n[0]),r=[];for(let i=0;i<e.length;i+=1)r[i]=gl(fl(n,e,i));return{c(){t=H("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){t=G(i,"DIV",{class:!0});var o=rt(t);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(X),this.h()},h(){M(t,"class","search-history svelte-1xdekqq")},m(i,o){Bt(i,t,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null)},p(i,o){if(o[0]&32769){e=yn(i[0]);let a;for(a=0;a<e.length;a+=1){const l=fl(i,e,a);r[a]?r[a].p(l,o):(r[a]=gl(l),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(i){i&&X(t),no(r,i)}}}function gl(n){let t,e=n[38]+"",r,i,o;function a(){return n[20](n[38])}return{c(){t=H("div"),r=Re(e),this.h()},l(l){t=G(l,"DIV",{class:!0});var u=rt(t);r=Se(u,e),u.forEach(X),this.h()},h(){M(t,"class","history-item svelte-1xdekqq")},m(l,u){Bt(l,t,u),N(t,r),i||(o=vt(t,"click",a),i=!0)},p(l,u){n=l,u[0]&1&&e!==(e=n[38]+"")&&ze(r,e)},d(l){l&&X(t),i=!1,o()}}}function _l(n){let t,e=n[35]+"",r,i,o;return{c(){t=H("div"),r=Re(e),this.h()},l(a){t=G(a,"DIV",{class:!0});var l=rt(t);r=Se(l,e),l.forEach(X),this.h()},h(){M(t,"class","ranking-item svelte-1xdekqq")},m(a,l){Bt(a,t,l),N(t,r),i||(o=vt(t,"click",function(){_d(n[10](n[35]))&&n[10](n[35]).apply(this,arguments)}),i=!0)},p(a,l){n=a,l[0]&128&&e!==(e=n[35]+"")&&ze(r,e)},d(a){a&&X(t),i=!1,o()}}}function yl(n){let t,e,r,i,o="Close",a,l,u=!n[5]&&vl();return{c(){t=H("div"),e=H("div"),u&&u.c(),r=ut(),i=H("button"),i.textContent=o,this.h()},l(d){t=G(d,"DIV",{class:!0});var p=rt(t);e=G(p,"DIV",{class:!0});var I=rt(e);u&&u.l(I),r=ht(I),i=G(I,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(i)!=="svelte-au4vm5"&&(i.textContent=o),I.forEach(X),p.forEach(X),this.h()},h(){M(i,"class","close-button svelte-1xdekqq"),M(e,"class","modal svelte-1xdekqq"),M(t,"class","modal-background svelte-1xdekqq")},m(d,p){Bt(d,t,p),N(t,e),u&&u.m(e,null),N(e,r),N(e,i),a||(l=[vt(i,"click",n[14]),vt(e,"click",vd(n[16])),vt(t,"click",n[14])],a=!0)},p(d,p){d[5]?u&&(u.d(1),u=null):u||(u=vl(),u.c(),u.m(e,r))},d(d){d&&X(t),u&&u.d(),a=!1,eo(l)}}}function vl(n){let t,e="아직 추가되지 않은 단어입니다..";return{c(){t=H("div"),t.textContent=e,this.h()},l(r){t=G(r,"DIV",{class:!0,"data-svelte-h":!0}),zt(t)!=="svelte-1tgxuji"&&(t.textContent=e),this.h()},h(){M(t,"class","modal-explain svelte-1xdekqq")},m(r,i){Bt(r,t,i)},d(r){r&&X(t)}}}function fv(n){let t,e,r,i,o,a,l="로그아웃",u,d,p,I,T,R,P,V="실시간 랭킹 TOP3",C,q,z,B,j=n[6]=="host.wproject00@gmail.com"&&pl(n),$=n[1]&&n[0].length>0&&ml(n),x=yn(n[7]),v=[];for(let g=0;g<x.length;g+=1)v[g]=_l(dl(n,x,g));let m=n[2]&&yl(n);return{c(){t=H("div"),e=H("img"),i=ut(),j&&j.c(),o=ut(),a=H("button"),a.textContent=l,u=ut(),d=H("div"),p=H("input"),I=ut(),$&&$.c(),T=ut(),R=H("div"),P=H("h3"),P.textContent=V,C=ut();for(let g=0;g<v.length;g+=1)v[g].c();q=ut(),m&&m.c(),this.h()},l(g){t=G(g,"DIV",{id:!0,class:!0});var _=rt(t);e=G(_,"IMG",{class:!0,src:!0,alt:!0}),i=ht(_),j&&j.l(_),o=ht(_),a=G(_,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(a)!=="svelte-2c08k3"&&(a.textContent=l),u=ht(_),d=G(_,"DIV",{class:!0});var E=rt(d);p=G(E,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),I=ht(E),$&&$.l(E),E.forEach(X),T=ht(_),R=G(_,"DIV",{class:!0});var w=rt(R);P=G(w,"H3",{"data-svelte-h":!0}),zt(P)!=="svelte-1f2184c"&&(P.textContent=V),C=ht(w);for(let y=0;y<v.length;y+=1)v[y].l(w);w.forEach(X),q=ht(_),m&&m.l(_),_.forEach(X),this.h()},h(){M(e,"class","logo_img svelte-1xdekqq"),gd(e.src,r=dv)||M(e,"src",r),M(e,"alt","logo"),M(a,"class","top-right-button2 svelte-1xdekqq"),M(p,"type","text"),M(p,"autocomplete","off"),M(p,"id","sb"),M(p,"class","search-bar svelte-1xdekqq"),M(p,"placeholder","검색..."),p.value=n[3],M(d,"class","search-container svelte-1xdekqq"),M(R,"class","ranking-list svelte-1xdekqq"),M(t,"id","condiv"),M(t,"class","svelte-1xdekqq")},m(g,_){Bt(g,t,_),N(t,e),N(t,i),j&&j.m(t,null),N(t,o),N(t,a),N(t,u),N(t,d),N(d,p),N(d,I),$&&$.m(d,null),N(t,T),N(t,R),N(R,P),N(R,C);for(let E=0;E<v.length;E+=1)v[E]&&v[E].m(R,null);N(t,q),m&&m.m(t,null),z||(B=[vt(a,"click",n[8]),vt(p,"input",n[17]),vt(p,"keydown",n[11]),vt(p,"focus",n[12]),vt(p,"blur",n[13]),vt(p,"compositionstart",n[18]),vt(p,"compositionend",n[19])],z=!0)},p(g,_){if(g[6]=="host.wproject00@gmail.com"?j?j.p(g,_):(j=pl(g),j.c(),j.m(t,o)):j&&(j.d(1),j=null),_[0]&8&&p.value!==g[3]&&(p.value=g[3]),g[1]&&g[0].length>0?$?$.p(g,_):($=ml(g),$.c(),$.m(d,null)):$&&($.d(1),$=null),_[0]&1152){x=yn(g[7]);let E;for(E=0;E<x.length;E+=1){const w=dl(g,x,E);v[E]?v[E].p(w,_):(v[E]=_l(w),v[E].c(),v[E].m(R,null))}for(;E<v.length;E+=1)v[E].d(1);v.length=x.length}g[2]?m?m.p(g,_):(m=yl(g),m.c(),m.m(t,null)):m&&(m.d(1),m=null)},i:Wt,o:Wt,d(g){g&&X(t),j&&j.d(),$&&$.d(),no(v,g),m&&m.d(),z=!1,eo(B)}}}function pv(n,t,e){let r,i,o;Ge(n,to,U=>e(26,r=U)),Ge(n,Zt,U=>e(27,i=U)),Ge(n,Xn,U=>e(28,o=U));let a=[],l=!1,u=!1,d="",p=!1,I=[],T=null,R="";wl(()=>{E(),$()}),new Promise((U,ot)=>{ru(wi,pt=>{pt?U(pt.email):ot("No user is signed in")})}).then(U=>e(6,R=U)).catch(U=>console.error(U));const V=async()=>{try{await qp(wi)}catch(U){console.error("Error signing out:",U)}};function C(){Xt(Zt,i=1,i)}async function q(U){e(1,l=!1);const ot=await w(U);I=ot.matches,e(5,T=ot.exactMatch),console.log(I),T?(Xt(Xn,o=T.title,o),T.value,T.explain,T.count+1,Xt(Zt,i=2,i)):Xt(Xn,o="",o),e(2,u=!0)}async function z(U){if(!p&&U.key==="Enter"&&(e(3,d=U.target.value.trim()),d)){j(d),U.target.value="",e(1,l=!1);const ot=await w(d);I=ot.matches,e(5,T=ot.exactMatch),console.log(I),T?(Xt(Xn,o=T.title,o),T.value,T.explain,T.count+1,B(o),Xt(Zt,i=2,i)):Xt(Xn,o="",o),e(2,u=!0)}}async function B(U){try{const ot=Cs(si(tr,"datas"),ks("title","==",U)),pt=await Vs(ot);pt.forEach(async qt=>{const At=Sh(tr,"datas",qt.id),gt=qt.data().count||0;await lv(At,{count:gt+1}),console.log(`Document with ID ${qt.id} updated successfully`)}),pt.empty&&console.log("No matching documents found.")}catch(ot){console.error("Error updating document: ",ot)}}function j(U){const ot=JSON.parse(sessionStorage.getItem("searchHistory"))||[],pt=[U,...ot.filter(qt=>qt!==U)];pt.length>3&&pt.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(pt)),e(0,a=pt)}function $(){const U=JSON.parse(sessionStorage.getItem("searchHistory"))||[];e(0,a=U)}function x(){e(1,l=!0)}function v(){setTimeout(()=>e(1,l=!1),100)}function m(){e(2,u=!1)}function g(U){document.getElementById("sb").value=U,e(1,l=!1)}let _=[];async function E(){try{const U=Cs(si(tr,"datas"),ev("count","desc"),nv(3)),ot=await Vs(U);e(7,_=ot.docs.map(pt=>pt.data().title))}catch(U){console.error("Error fetching documents: ",U)}}async function w(U){const ot=si(tr,"datas"),pt=Cs(ot,ks("title",">=",U),ks("title","<=",U+"")),qt=await Vs(pt),At=[];let gt=null;return qt.forEach(Ki=>{const oe=Ki.data();At.push(oe),oe.title===U&&(gt=oe)}),Xt(to,r=At,r),{exactMatch:gt,matches:At}}function y(U){yd.call(this,n,U)}return[a,l,u,d,p,T,R,_,V,C,q,z,x,v,m,g,y,U=>e(3,d=U.target.value),()=>e(4,p=!0),()=>e(4,p=!1),U=>g(U)]}class mv extends Ri{constructor(t){super(),Si(this,t,pv,fv,Ai,{},null,[-1,-1])}}function El(n){let t,e;return{c(){t=H("div"),e=Re(n[4]),this.h()},l(r){t=G(r,"DIV",{class:!0});var i=rt(t);e=Se(i,n[4]),i.forEach(X),this.h()},h(){M(t,"class","error-message svelte-16h5zi1")},m(r,i){Bt(r,t,i),N(t,e)},p(r,i){i&16&&ze(e,r[4])},d(r){r&&X(t)}}}function gv(n){let t,e,r,i,o="Title",a,l,u,d,p,I="Value",T,R,P,V,C,q="Explain",z,B,j,$,x,v,m,g,_,E="Cancel",w,y,it=n[4]&&El(n);return{c(){t=H("div"),e=H("div"),r=H("div"),i=H("label"),i.textContent=o,a=ut(),l=H("input"),u=ut(),d=H("div"),p=H("label"),p.textContent=I,T=ut(),R=H("input"),P=ut(),V=H("div"),C=H("label"),C.textContent=q,z=ut(),B=H("input"),j=ut(),it&&it.c(),$=ut(),x=H("div"),v=H("button"),m=Re("Submit"),g=ut(),_=H("button"),_.textContent=E,this.h()},l(dt){t=G(dt,"DIV",{class:!0});var $t=rt(t);e=G($t,"DIV",{class:!0});var wt=rt(e);r=G(wt,"DIV",{class:!0});var U=rt(r);i=G(U,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),zt(i)!=="svelte-1weqgc2"&&(i.textContent=o),a=ht(U),l=G(U,"INPUT",{class:!0,type:!0,id:!0}),U.forEach(X),u=ht(wt),d=G(wt,"DIV",{class:!0});var ot=rt(d);p=G(ot,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),zt(p)!=="svelte-ry2554"&&(p.textContent=I),T=ht(ot),R=G(ot,"INPUT",{class:!0,type:!0,id:!0}),ot.forEach(X),P=ht(wt),V=G(wt,"DIV",{class:!0});var pt=rt(V);C=G(pt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),zt(C)!=="svelte-2n35pc"&&(C.textContent=q),z=ht(pt),B=G(pt,"INPUT",{class:!0,type:!0,id:!0}),pt.forEach(X),j=ht(wt),it&&it.l(wt),$=ht(wt),x=G(wt,"DIV",{class:!0});var qt=rt(x);v=G(qt,"BUTTON",{class:!0});var At=rt(v);m=Se(At,"Submit"),At.forEach(X),g=ht(qt),_=G(qt,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(_)!=="svelte-9k415x"&&(_.textContent=E),qt.forEach(X),wt.forEach(X),$t.forEach(X),this.h()},h(){M(i,"class","form-label svelte-16h5zi1"),M(i,"for","title"),M(l,"class","form-input svelte-16h5zi1"),M(l,"type","text"),M(l,"id","title"),M(r,"class","form-group svelte-16h5zi1"),M(p,"class","form-label svelte-16h5zi1"),M(p,"for","value"),M(R,"class","form-input svelte-16h5zi1"),M(R,"type","text"),M(R,"id","value"),M(d,"class","form-group svelte-16h5zi1"),M(C,"class","form-label svelte-16h5zi1"),M(C,"for","explain"),M(B,"class","form-input svelte-16h5zi1"),M(B,"type","text"),M(B,"id","explain"),M(V,"class","form-group svelte-16h5zi1"),M(v,"class","form-button svelte-16h5zi1"),v.disabled=n[3],M(_,"class","form-button cancel-button svelte-16h5zi1"),M(x,"class","form-buttons svelte-16h5zi1"),M(e,"class","form-content svelte-16h5zi1"),M(t,"class","form-container svelte-16h5zi1")},m(dt,$t){Bt(dt,t,$t),N(t,e),N(e,r),N(r,i),N(r,a),N(r,l),un(l,n[0]),N(e,u),N(e,d),N(d,p),N(d,T),N(d,R),un(R,n[1]),N(e,P),N(e,V),N(V,C),N(V,z),N(V,B),un(B,n[2]),N(e,j),it&&it.m(e,null),N(e,$),N(e,x),N(x,v),N(v,m),N(x,g),N(x,_),w||(y=[vt(l,"input",n[7]),vt(R,"input",n[8]),vt(B,"input",n[9]),vt(v,"click",n[5]),vt(_,"click",n[6])],w=!0)},p(dt,[$t]){$t&1&&l.value!==dt[0]&&un(l,dt[0]),$t&2&&R.value!==dt[1]&&un(R,dt[1]),$t&4&&B.value!==dt[2]&&un(B,dt[2]),dt[4]?it?it.p(dt,$t):(it=El(dt),it.c(),it.m(e,$)):it&&(it.d(1),it=null),$t&8&&(v.disabled=dt[3])},i:Wt,o:Wt,d(dt){dt&&X(t),it&&it.d(),w=!1,eo(y)}}}function _v(n,t,e){let r;Ge(n,Zt,P=>e(10,r=P));let i="",o="",a="",l=!1,u="";const d=async()=>{if(!i||!o||!a){e(4,u="All fields are required!");return}e(3,l=!0),e(4,u="");try{await uv(si(tr,"datas"),{title:i,value:o,explain:a,count:0}),e(0,i=""),e(1,o=""),e(2,a=""),Xt(Zt,r=0,r)}catch(P){console.error("Error adding document: ",P),e(4,u="Error adding document!")}finally{e(3,l=!1)}},p=()=>{e(0,i=""),e(1,o=""),e(2,a=""),e(4,u=""),Xt(Zt,r=0,r)};function I(){i=this.value,e(0,i)}function T(){o=this.value,e(1,o)}function R(){a=this.value,e(2,a)}return[i,o,a,l,u,d,p,I,T,R]}class yv extends Ri{constructor(t){super(),Si(this,t,_v,gv,Ai,{})}}function Il(n,t,e){const r=n.slice();return r[4]=t[e],r}function Tl(n){let t,e,r=n[4].title+"",i,o,a,l=n[4].value+"",u,d,p,I=n[4].explain+"",T,R,P,V,C="검색수:",q,z=n[4].count+"",B,j;return{c(){t=H("div"),e=H("h3"),i=Re(r),o=ut(),a=H("p"),u=Re(l),d=ut(),p=H("p"),T=Re(I),R=ut(),P=H("p"),V=H("strong"),V.textContent=C,q=ut(),B=Re(z),j=ut(),this.h()},l($){t=G($,"DIV",{class:!0});var x=rt(t);e=G(x,"H3",{class:!0});var v=rt(e);i=Se(v,r),v.forEach(X),o=ht(x),a=G(x,"P",{class:!0});var m=rt(a);u=Se(m,l),m.forEach(X),d=ht(x),p=G(x,"P",{class:!0});var g=rt(p);T=Se(g,I),g.forEach(X),R=ht(x),P=G(x,"P",{class:!0});var _=rt(P);V=G(_,"STRONG",{"data-svelte-h":!0}),zt(V)!=="svelte-14ncqy5"&&(V.textContent=C),q=ht(_),B=Se(_,z),_.forEach(X),j=ht(x),x.forEach(X),this.h()},h(){M(e,"class","svelte-dttkti"),M(a,"class","svelte-dttkti"),M(p,"class","svelte-dttkti"),M(P,"class","count svelte-dttkti"),M(t,"class","box svelte-dttkti")},m($,x){Bt($,t,x),N(t,e),N(e,i),N(t,o),N(t,a),N(a,u),N(t,d),N(t,p),N(p,T),N(t,R),N(t,P),N(P,V),N(P,q),N(P,B),N(t,j)},p($,x){x&1&&r!==(r=$[4].title+"")&&ze(i,r),x&1&&l!==(l=$[4].value+"")&&ze(u,l),x&1&&I!==(I=$[4].explain+"")&&ze(T,I),x&1&&z!==(z=$[4].count+"")&&ze(B,z)},d($){$&&X(t)}}}function vv(n){let t,e,r,i,o,a="Main",l,u,d,p,I=yn(n[0]),T=[];for(let R=0;R<I.length;R+=1)T[R]=Tl(Il(n,I,R));return{c(){t=H("div"),e=H("div"),r=ut(),i=H("div"),o=H("button"),o.textContent=a,l=ut(),u=H("div");for(let R=0;R<T.length;R+=1)T[R].c();this.h()},l(R){t=G(R,"DIV",{class:!0});var P=rt(t);e=G(P,"DIV",{id:!0,class:!0}),rt(e).forEach(X),r=ht(P),i=G(P,"DIV",{class:!0});var V=rt(i);o=G(V,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(o)!=="svelte-8azga8"&&(o.textContent=a),V.forEach(X),l=ht(P),u=G(P,"DIV",{class:!0});var C=rt(u);for(let q=0;q<T.length;q+=1)T[q].l(C);C.forEach(X),P.forEach(X),this.h()},h(){M(e,"id","bb"),M(e,"class","svelte-dttkti"),M(o,"class","close-button svelte-dttkti"),M(i,"class","close-button_div svelte-dttkti"),M(u,"class","container svelte-dttkti"),M(t,"class","bbd svelte-dttkti")},m(R,P){Bt(R,t,P),N(t,e),N(t,r),N(t,i),N(i,o),N(t,l),N(t,u);for(let V=0;V<T.length;V+=1)T[V]&&T[V].m(u,null);d||(p=vt(o,"click",n[1]),d=!0)},p(R,[P]){if(P&1){I=yn(R[0]);let V;for(V=0;V<I.length;V+=1){const C=Il(R,I,V);T[V]?T[V].p(C,P):(T[V]=Tl(C),T[V].c(),T[V].m(u,null))}for(;V<T.length;V+=1)T[V].d(1);T.length=I.length}},i:Wt,o:Wt,d(R){R&&X(t),no(T,R),d=!1,p()}}}function Ev(n,t,e){let r,i;return Ge(n,Zt,a=>e(2,r=a)),Ge(n,to,a=>e(0,i=a)),[i,()=>{Xt(Zt,r=0,r)}]}class Iv extends Ri{constructor(t){super(),Si(this,t,Ev,vv,Ai,{})}}function Tv(n){let t,e,r,i="로그인",o,a,l="Google",u,d;return{c(){t=H("div"),e=H("div"),r=H("h1"),r.textContent=i,o=ut(),a=H("button"),a.textContent=l,this.h()},l(p){t=G(p,"DIV",{id:!0,class:!0});var I=rt(t);e=G(I,"DIV",{class:!0});var T=rt(e);r=G(T,"H1",{class:!0,"data-svelte-h":!0}),zt(r)!=="svelte-1bvi8l2"&&(r.textContent=i),o=ht(T),a=G(T,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(a)!=="svelte-g8tqx5"&&(a.textContent=l),T.forEach(X),I.forEach(X),this.h()},h(){M(r,"class","svelte-gqutdq"),M(a,"class","svelte-gqutdq"),M(e,"class","login-container svelte-gqutdq"),M(t,"id","L_body"),M(t,"class","svelte-gqutdq")},m(p,I){Bt(p,t,I),N(t,e),N(e,r),N(e,o),N(e,a),u||(d=vt(a,"click",n[3]),u=!0)},p:Wt,i:Wt,o:Wt,d(p){p&&X(t),u=!1,d()}}}function wv(n){let t,e,r,i;const o=[bv,Sv,Rv],a=[];function l(u,d){return u[2]==0?0:u[2]==1?1:u[2]==2?2:-1}return~(t=l(n))&&(e=a[t]=o[t](n)),{c(){e&&e.c(),r=tc()},l(u){e&&e.l(u),r=tc()},m(u,d){~t&&a[t].m(u,d),Bt(u,r,d),i=!0},p(u,d){let p=t;t=l(u),t!==p&&(e&&(Rl(),Qe(a[p],1,1,()=>{a[p]=null}),Al()),~t?(e=a[t],e||(e=a[t]=o[t](u),e.c()),Xe(e,1),e.m(r.parentNode,r)):e=null)},i(u){i||(Xe(e),i=!0)},o(u){Qe(e),i=!1},d(u){u&&X(r),~t&&a[t].d(u)}}}function Av(n){let t,e="[ Developer : G37 ]";return{c(){t=H("div"),t.textContent=e,this.h()},l(r){t=G(r,"DIV",{class:!0,"data-svelte-h":!0}),zt(t)!=="svelte-67okfr"&&(t.textContent=e),this.h()},h(){M(t,"class","loading-screen svelte-gqutdq")},m(r,i){Bt(r,t,i)},p:Wt,i:Wt,o:Wt,d(r){r&&X(t)}}}function Rv(n){let t,e;return t=new Iv({}),{c(){ro(t.$$.fragment)},l(r){io(t.$$.fragment,r)},m(r,i){so(t,r,i),e=!0},i(r){e||(Xe(t.$$.fragment,r),e=!0)},o(r){Qe(t.$$.fragment,r),e=!1},d(r){oo(t,r)}}}function Sv(n){let t,e;return t=new yv({}),{c(){ro(t.$$.fragment)},l(r){io(t.$$.fragment,r)},m(r,i){so(t,r,i),e=!0},i(r){e||(Xe(t.$$.fragment,r),e=!0)},o(r){Qe(t.$$.fragment,r),e=!1},d(r){oo(t,r)}}}function bv(n){let t,e;return t=new mv({}),{c(){ro(t.$$.fragment)},l(r){io(t.$$.fragment,r)},m(r,i){so(t,r,i),e=!0},i(r){e||(Xe(t.$$.fragment,r),e=!0)},o(r){Qe(t.$$.fragment,r),e=!1},d(r){oo(t,r)}}}function Pv(n){let t,e,r,i;const o=[Av,wv,Tv],a=[];function l(u,d){return u[1]?0:u[0]?1:2}return e=l(n),r=a[e]=o[e](n),{c(){t=H("main"),r.c(),this.h()},l(u){t=G(u,"MAIN",{class:!0});var d=rt(t);r.l(d),d.forEach(X),this.h()},h(){M(t,"class","svelte-gqutdq")},m(u,d){Bt(u,t,d),a[e].m(t,null),i=!0},p(u,[d]){let p=e;e=l(u),e===p?a[e].p(u,d):(Rl(),Qe(a[p],1,1,()=>{a[p]=null}),Al(),r=a[e],r?r.p(u,d):(r=a[e]=o[e](u),r.c()),Xe(r,1),r.m(t,null))},i(u){i||(Xe(r),i=!0)},o(u){Qe(r),i=!1},d(u){u&&X(t),a[e].d()}}}function Cv(n,t,e){let r;Ge(n,Zt,l=>e(2,r=l)),console.log(r);let i=null,o=!0;return wl(()=>{ru(wi,l=>{e(0,i=l),e(1,o=!1)})}),[i,o,r,async()=>{const l=new le;try{await cm(wi,l)}catch(u){console.error("Error signing in:",u)}}]}class Lv extends Ri{constructor(t){super(),Si(this,t,Cv,Pv,Ai,{})}}export{Lv as component};
