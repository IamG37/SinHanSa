import{s as On,x as Id,n as Dt,r as Mn,b as Me,o as lo,i as Td,y as Ht,z as wd}from"../chunks/scheduler.li6PcnJj.js";import{S as Ln,i as xn,e as M,s as tt,c as L,d as nt,h as et,y as Et,g as j,o as D,j as It,k as V,z as at,A as xi,b as ie,f as se,l as Ne,B as Ad,C as wt,D as Vc,a as ve,n as Nc,t as Ee,q as Oc,m as ol,u as Rr,v as br,w as Sr,x as Pr}from"../chunks/index.DQWX1qTz.js";import{w as co}from"../chunks/index.ChQ1qdP7.js";function qe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var al={};/**
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
 */const Mc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Rd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=o>>2,E=(o&3)<<4|l>>4;let I=(l&15)<<2|d>>6,A=d&63;u||(A=64,a||(I=64)),r.push(e[f],e[E],e[I],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Mc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Rd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const E=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||E==null)throw new bd;const I=o<<2|l>>4;if(r.push(I),d!==64){const A=l<<4&240|d>>2;if(r.push(A),E!==64){const S=d<<6&192|E;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sd=function(n){const t=Mc(n);return Lc.encodeByteArray(t,!0)},Ei=function(n){return Sd(n).replace(/\./g,"")},xc=function(n){try{return Lc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cd=()=>Pd().__FIREBASE_DEFAULTS__,kd=()=>{if(typeof process>"u"||typeof al>"u")return;const n=al.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&xc(n[1]);return t&&JSON.parse(t)},Ui=()=>{try{return Cd()||kd()||Dd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uc=n=>{var t,e;return(e=(t=Ui())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Vd=n=>{const t=Uc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fc=()=>{var n;return(n=Ui())===null||n===void 0?void 0:n.config},Bc=n=>{var t;return(t=Ui())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Nd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Od(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ei(JSON.stringify(e)),Ei(JSON.stringify(a)),""].join(".")}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function Ld(){var n;const t=(n=Ui())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fd(){const n=Nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bd(){return!Ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qd(){try{return typeof indexedDB=="object"}catch{return!1}}function jd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const zd="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=zd,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cr.prototype.create)}}class Cr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?$d(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ae(i,l,r)}}function $d(n,t){return n.replace(Hd,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Hd=/\{\$([^}]+)}/g;function Gd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ii(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(ll(o)&&ll(a)){if(!Ii(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ll(n){return n!==null&&typeof n=="object"}/**
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
 */function kr(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Wd(n,t){const e=new Kd(n,t);return e.subscribe.bind(e)}class Kd{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Qd(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Ps),i.error===void 0&&(i.error=Ps),i.complete===void 0&&(i.complete=Ps);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qd(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Ps(){}/**
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
 */function Ot(n){return n&&n._delegate?n._delegate:n}class rn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ye="[DEFAULT]";/**
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
 */class Xd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Nd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yd(t))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Ye){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ye){return this.instances.has(t)}getOptions(t=Ye){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ye){return this.component?this.component.multipleInstances?t:Ye:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jd(n){return n===Ye?void 0:n}function Yd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Xd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const tf={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},ef=it.INFO,nf={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},rf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=nf[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uo{constructor(t){this.name=t,this._logLevel=ef,this._logHandler=rf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const sf=(n,t)=>t.some(e=>n instanceof e);let cl,ul;function of(){return cl||(cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function af(){return ul||(ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qc=new WeakMap,Fs=new WeakMap,jc=new WeakMap,Cs=new WeakMap,ho=new WeakMap;function lf(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Le(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&qc.set(e,n)}).catch(()=>{}),ho.set(t,n),t}function cf(n){if(Fs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Fs.set(n,t)}let Bs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Fs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||jc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Le(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function uf(n){Bs=n(Bs)}function hf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ks(this),t,...e);return jc.set(r,t.sort?t.sort():[t]),Le(r)}:af().includes(n)?function(...t){return n.apply(ks(this),t),Le(qc.get(this))}:function(...t){return Le(n.apply(ks(this),t))}}function df(n){return typeof n=="function"?hf(n):(n instanceof IDBTransaction&&cf(n),sf(n,of())?new Proxy(n,Bs):n)}function Le(n){if(n instanceof IDBRequest)return lf(n);if(Cs.has(n))return Cs.get(n);const t=df(n);return t!==n&&(Cs.set(n,t),ho.set(t,n)),t}const ks=n=>ho.get(n);function ff(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Le(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Le(a.result),u.oldVersion,u.newVersion,Le(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const pf=["get","getKey","getAll","getAllKeys","count"],mf=["put","add","delete","clear"],Ds=new Map;function hl(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=mf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pf.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&u.done]))[0]};return Ds.set(t,o),o}uf(n=>({...n,get:(t,e,r)=>hl(t,e)||n.get(t,e,r),has:(t,e)=>!!hl(t,e)||n.has(t,e)}));/**
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
 */class gf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(_f(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function _f(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qs="@firebase/app",dl="0.10.5";/**
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
 */const sn=new uo("@firebase/app"),yf="@firebase/app-compat",vf="@firebase/analytics-compat",Ef="@firebase/analytics",If="@firebase/app-check-compat",Tf="@firebase/app-check",wf="@firebase/auth",Af="@firebase/auth-compat",Rf="@firebase/database",bf="@firebase/database-compat",Sf="@firebase/functions",Pf="@firebase/functions-compat",Cf="@firebase/installations",kf="@firebase/installations-compat",Df="@firebase/messaging",Vf="@firebase/messaging-compat",Nf="@firebase/performance",Of="@firebase/performance-compat",Mf="@firebase/remote-config",Lf="@firebase/remote-config-compat",xf="@firebase/storage",Uf="@firebase/storage-compat",Ff="@firebase/firestore",Bf="@firebase/vertexai-preview",qf="@firebase/firestore-compat",jf="firebase",zf="10.12.2";/**
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
 */const js="[DEFAULT]",$f={[qs]:"fire-core",[yf]:"fire-core-compat",[Ef]:"fire-analytics",[vf]:"fire-analytics-compat",[Tf]:"fire-app-check",[If]:"fire-app-check-compat",[wf]:"fire-auth",[Af]:"fire-auth-compat",[Rf]:"fire-rtdb",[bf]:"fire-rtdb-compat",[Sf]:"fire-fn",[Pf]:"fire-fn-compat",[Cf]:"fire-iid",[kf]:"fire-iid-compat",[Df]:"fire-fcm",[Vf]:"fire-fcm-compat",[Nf]:"fire-perf",[Of]:"fire-perf-compat",[Mf]:"fire-rc",[Lf]:"fire-rc-compat",[xf]:"fire-gcs",[Uf]:"fire-gcs-compat",[Ff]:"fire-fst",[qf]:"fire-fst-compat",[Bf]:"fire-vertex","fire-js":"fire-js",[jf]:"fire-js-all"};/**
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
 */const Ti=new Map,Hf=new Map,zs=new Map;function fl(n,t){try{n.container.addComponent(t)}catch(e){sn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Rn(n){const t=n.name;if(zs.has(t))return sn.debug(`There were multiple attempts to register component ${t}.`),!1;zs.set(t,n);for(const e of Ti.values())fl(e,n);for(const e of Hf.values())fl(e,n);return!0}function fo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function pe(n){return n.settings!==void 0}/**
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
 */const Gf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xe=new Cr("app","Firebase",Gf);/**
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
 */class Wf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=zf;function zc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:js,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw xe.create("bad-app-name",{appName:String(i)});if(e||(e=Fc()),!e)throw xe.create("no-options");const o=Ti.get(i);if(o){if(Ii(e,o.options)&&Ii(r,o.config))return o;throw xe.create("duplicate-app",{appName:i})}const a=new Zd(i);for(const u of zs.values())a.addComponent(u);const l=new Wf(e,r,a);return Ti.set(i,l),l}function $c(n=js){const t=Ti.get(n);if(!t&&n===js&&Fc())return zc();if(!t)throw xe.create("no-app",{appName:n});return t}function Ue(n,t,e){var r;let i=(r=$f[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sn.warn(l.join(" "));return}Rn(new rn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Kf="firebase-heartbeat-database",Qf=1,gr="firebase-heartbeat-store";let Vs=null;function Hc(){return Vs||(Vs=ff(Kf,Qf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gr)}catch(e){console.warn(e)}}}}).catch(n=>{throw xe.create("idb-open",{originalErrorMessage:n.message})})),Vs}async function Xf(n){try{const e=(await Hc()).transaction(gr),r=await e.objectStore(gr).get(Gc(n));return await e.done,r}catch(t){if(t instanceof Ae)sn.warn(t.message);else{const e=xe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sn.warn(e.message)}}}async function pl(n,t){try{const r=(await Hc()).transaction(gr,"readwrite");await r.objectStore(gr).put(t,Gc(n)),await r.done}catch(e){if(e instanceof Ae)sn.warn(e.message);else{const r=xe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});sn.warn(r.message)}}}function Gc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jf=1024,Yf=30*24*60*60*1e3;class Zf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ep(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ml();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Yf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ml(),{heartbeatsToSend:r,unsentEntries:i}=tp(this._heartbeatsCache.heartbeats),o=Ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function ml(){return new Date().toISOString().substring(0,10)}function tp(n,t=Jf){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),gl(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),gl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ep{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qd()?jd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Xf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function gl(n){return Ei(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function np(n){Rn(new rn("platform-logger",t=>new gf(t),"PRIVATE")),Rn(new rn("heartbeat",t=>new Zf(t),"PRIVATE")),Ue(qs,dl,n),Ue(qs,dl,"esm2017"),Ue("fire-js","")}np("");var rp="firebase",ip="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(rp,ip,"app");function po(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Wc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sp=Wc,Kc=new Cr("auth","Firebase",Wc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new uo("@firebase/auth");function op(n,...t){wi.logLevel<=it.WARN&&wi.warn(`Auth (${Un}): ${n}`,...t)}function hi(n,...t){wi.logLevel<=it.ERROR&&wi.error(`Auth (${Un}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,...t){throw go(n,...t)}function te(n,...t){return go(n,...t)}function mo(n,t,e){const r=Object.assign(Object.assign({},sp()),{[t]:e});return new Cr("auth","Firebase",r).create(t,{appName:n.name})}function en(n){return mo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ap(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ce(n,"argument-error"),mo(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function go(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Kc.create(n,...t)}function X(n,t,...e){if(!n)throw go(t,...e)}function me(n){const t="INTERNAL ASSERTION FAILED: "+n;throw hi(t),new Error(t)}function Ie(n,t){n||me(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lp(){return _l()==="http:"||_l()==="https:"}function _l(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lp()||xd()||"connection"in navigator)?navigator.onLine:!0}function up(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ie(e>t,"Short delay should be less than long delay!"),this.isMobile=Md()||Ud()}get(){return cp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n,t){Ie(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Dr(3e4,6e4);function yo(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Fn(n,t,e,r,i={}){return Xc(n,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=kr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Qc.fetch()(Jc(n,n.config.apiHost,e,l),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))})}async function Xc(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},hp),t);try{const i=new pp(n),o=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw si(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw si(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw si(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw mo(n,f,d);ce(n,f)}}catch(i){if(i instanceof Ae)throw i;ce(n,"network-request-failed",{message:String(i)})}}async function fp(n,t,e,r,i={}){const o=await Fn(n,t,e,r,i);return"mfaPendingCredential"in o&&ce(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Jc(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?_o(n.config,i):`${n.config.apiScheme}://${i}`}class pp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(te(this.auth,"network-request-failed")),dp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=te(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(n,t){return Fn(n,"POST","/v1/accounts:delete",t)}async function Yc(n,t){return Fn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gp(n,t=!1){const e=Ot(n),r=await e.getIdToken(t),i=vo(r);X(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:cr(Ns(i.auth_time)),issuedAtTime:cr(Ns(i.iat)),expirationTime:cr(Ns(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ns(n){return Number(n)*1e3}function vo(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=xc(e);return i?JSON.parse(i):(hi("Failed to decode base64 JWT payload"),null)}catch(i){return hi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yl(n){const t=vo(n);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ae&&_p(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _p({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ai(n){var t;const e=n.auth,r=await n.getIdToken(),i=await _r(n,Yc(e,{idToken:r}));X(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Zc(o.providerUserInfo):[],l=Ep(n.providerData,a),u=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Hs(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(n,E)}async function vp(n){const t=Ot(n);await Ai(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ep(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Zc(n){return n.map(t=>{var{providerId:e}=t,r=po(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n,t){const e=await Xc(n,{},async()=>{const r=kr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Jc(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Qc.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Tp(n,t){return Fn(n,"POST","/v2/accounts:revokeToken",yo(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yl(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){X(t.length!==0,"internal-error");const e=yl(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ip(t,e);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:o}=e,a=new En;return r&&(X(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(X(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,t){X(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ge{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,o=po(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Hs(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await _r(this,this.stsTokenManager.getToken(this.auth,t));return X(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return gp(this,t)}reload(){return vp(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ge(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(en(this.auth));const t=await this.getIdToken();return await _r(this,mp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,o,a,l,u,d,f;const E=(r=e.displayName)!==null&&r!==void 0?r:void 0,I=(i=e.email)!==null&&i!==void 0?i:void 0,A=(o=e.phoneNumber)!==null&&o!==void 0?o:void 0,S=(a=e.photoURL)!==null&&a!==void 0?a:void 0,C=(l=e.tenantId)!==null&&l!==void 0?l:void 0,P=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,$=(d=e.createdAt)!==null&&d!==void 0?d:void 0,W=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:Q,isAnonymous:z,providerData:q,stsTokenManager:v}=e;X(U&&v,t,"internal-error");const m=En.fromJSON(this.name,v);X(typeof U=="string",t,"internal-error"),Ce(E,t.name),Ce(I,t.name),X(typeof Q=="boolean",t,"internal-error"),X(typeof z=="boolean",t,"internal-error"),Ce(A,t.name),Ce(S,t.name),Ce(C,t.name),Ce(P,t.name),Ce($,t.name),Ce(W,t.name);const _=new ge({uid:U,auth:t,email:I,emailVerified:Q,displayName:E,isAnonymous:z,photoURL:S,phoneNumber:A,tenantId:C,stsTokenManager:m,createdAt:$,lastLoginAt:W});return q&&Array.isArray(q)&&(_.providerData=q.map(y=>Object.assign({},y))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(t,e,r=!1){const i=new En;i.updateFromServerResponse(e);const o=new ge({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ai(o),o}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];X(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Zc(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new En;l.updateFromIdToken(r);const u=new ge({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Hs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map;function _e(n){Ie(n instanceof Function,"Expected a class definition");let t=vl.get(n);return t?(Ie(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,vl.set(n,t),t)}/**
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
 */class tu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}tu.type="NONE";const El=tu;/**
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
 */function di(n,t,e){return`firebase:${n}:${t}:${e}`}class In{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=di(this.userKey,i.apiKey,o),this.fullPersistenceKey=di("persistence",i.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ge._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new In(_e(El),t,r);const i=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||_e(El);const a=di(r,t.config.apiKey,t.name);let l=null;for(const d of e)try{const f=await d._get(a);if(f){const E=ge._fromJSON(t,f);d!==o&&(l=E),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new In(o,t,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(e.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new In(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ru(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(eu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(su(t))return"Blackberry";if(ou(t))return"Webos";if(Eo(t))return"Safari";if((t.includes("chrome/")||nu(t))&&!t.includes("edge/"))return"Chrome";if(iu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eu(n=Nt()){return/firefox\//i.test(n)}function Eo(n=Nt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nu(n=Nt()){return/crios\//i.test(n)}function ru(n=Nt()){return/iemobile/i.test(n)}function iu(n=Nt()){return/android/i.test(n)}function su(n=Nt()){return/blackberry/i.test(n)}function ou(n=Nt()){return/webos/i.test(n)}function Fi(n=Nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wp(n=Nt()){var t;return Fi(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ap(){return Fd()&&document.documentMode===10}function au(n=Nt()){return Fi(n)||iu(n)||ou(n)||su(n)||/windows phone/i.test(n)||ru(n)}function Rp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n,t=[]){let e;switch(n){case"Browser":e=Il(Nt());break;case"Worker":e=`${Il(Nt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Un}/${r}`}/**
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
 */class bp{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((a,l)=>{try{const u=t(o);a(u)}catch(u){l(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Sp(n,t={}){return Fn(n,"GET","/v2/passwordPolicy",yo(n,t))}/**
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
 */const Pp=6;class Cp{constructor(t){var e,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Pp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tl(this),this.idTokenSubscription=new Tl(this),this.beforeStateQueue=new bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_e(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await In.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Yc(this,{idToken:t}),r=await ge._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(pe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ai(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=up()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(pe(this.app))return Promise.reject(en(this));const e=t?Ot(t):null;return e&&X(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return pe(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Sp(this),e=new Cp(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Cr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tp(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_e(t)||this._popupRedirectResolver;X(e,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[_e(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=lu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&op(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Bi(n){return Ot(n)}class Tl{constructor(t){this.auth=t,this.observer=null,this.addObserver=Wd(e=>this.observer=e)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dp(n){Io=n}function Vp(n){return Io.loadJS(n)}function Np(){return Io.gapiScript}function Op(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,t){const e=fo(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),o=e.getOptions();if(Ii(o,t??{}))return i;ce(i,"already-initialized")}return e.initialize({options:t})}function Lp(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(_e);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function xp(n,t,e){const r=Bi(n);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=cu(t),{host:a,port:l}=Up(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Fp()}function cu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Up(n){const t=cu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:wl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:wl(a)}}}function wl(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Fp(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return me("not implemented")}_getIdTokenResponse(t){return me("not implemented")}_linkToIdToken(t,e){return me("not implemented")}_getReauthenticationResolver(t){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,t){return fp(n,"POST","/v1/accounts:signInWithIdp",yo(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="http://localhost";class on extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new on(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ce("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,o=po(e,["providerId","signInMethod"]);if(!r||!i)return null;const a=new on(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Tn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Tn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Tn(t,e)}buildRequest(){const t={requestUri:Bp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=kr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vr extends To{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Vr{constructor(){super("facebook.com")}static credential(t){return on._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ke.credentialFromTaggedObject(t)}static credentialFromError(t){return ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ke.credential(t.oauthAccessToken)}catch{return null}}}ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";ke.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return on._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return fe.credential(e,r)}catch{return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com";fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Vr{constructor(){super("github.com")}static credential(t){return on._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return De.credentialFromTaggedObject(t)}static credentialFromError(t){return De.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return De.credential(t.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Vr{constructor(){super("twitter.com")}static credential(t,e){return on._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ve.credentialFromTaggedObject(t)}static credentialFromError(t){return Ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ve.credential(e,r)}catch{return null}}}Ve.TWITTER_SIGN_IN_METHOD="twitter.com";Ve.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const o=await ge._fromIdTokenResponse(t,r,i),a=Al(r);return new bn({user:o,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Al(r);return new bn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Al(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ae{constructor(t,e,r,i){var o;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Ri(t,e,r,i)}}function hu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(n,o,t,r):o})}async function qp(n,t,e=!1){const r=await _r(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return bn._forOperation(n,"link",r)}/**
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
 */async function jp(n,t,e=!1){const{auth:r}=n;if(pe(r.app))return Promise.reject(en(r));const i="reauthenticate";try{const o=await _r(n,hu(r,i,t,n),e);X(o.idToken,r,"internal-error");const a=vo(o.idToken);X(a,r,"internal-error");const{sub:l}=a;return X(n.uid===l,r,"user-mismatch"),bn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ce(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(n,t,e=!1){if(pe(n.app))return Promise.reject(en(n));const r="signIn",i=await hu(n,r,t),o=await bn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(o.user),o}function $p(n,t,e,r){return Ot(n).onIdTokenChanged(t,e,r)}function Hp(n,t,e){return Ot(n).beforeAuthStateChanged(t,e)}function du(n,t,e,r){return Ot(n).onAuthStateChanged(t,e,r)}function Gp(n){return Ot(n).signOut()}const bi="__sak";/**
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
 */class fu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){const n=Nt();return Eo(n)||Fi(n)}const Kp=1e3,Qp=10;class pu extends fu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wp()&&Rp(),this.fallbackToPolling=au(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Ap()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Qp):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}pu.type="LOCAL";const Xp=pu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends fu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}mu.type="SESSION";const gu=mu;/**
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
 */function Jp(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class qi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new qi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:o}=e.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(e.origin,o)),u=await Jp(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Yp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=wo("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){const I=E;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(I.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return window}function Zp(n){oe().location.href=n}/**
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
 */function _u(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function tm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function em(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nm(){return _u()?self:null}/**
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
 */const yu="firebaseLocalStorageDb",rm=1,Si="firebaseLocalStorage",vu="fbase_key";class Nr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ji(n,t){return n.transaction([Si],t?"readwrite":"readonly").objectStore(Si)}function im(){const n=indexedDB.deleteDatabase(yu);return new Nr(n).toPromise()}function Gs(){const n=indexedDB.open(yu,rm);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Si,{keyPath:vu})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Si)?t(r):(r.close(),await im(),t(await Gs()))})})}async function Rl(n,t,e){const r=ji(n,!0).put({[vu]:t,value:e});return new Nr(r).toPromise()}async function sm(n,t){const e=ji(n,!1).get(t),r=await new Nr(e).toPromise();return r===void 0?null:r.value}function bl(n,t){const e=ji(n,!0).delete(t);return new Nr(e).toPromise()}const om=800,am=3;class Eu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gs(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>am)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _u()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qi._getInstance(nm()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await tm(),!this.activeServiceWorker)return;this.sender=new Yp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||em()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gs();return await Rl(t,bi,"1"),await bl(t,bi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rl(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>sm(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>bl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ji(i,!1).getAll();return new Nr(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),om)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eu.type="LOCAL";const lm=Eu;new Dr(3e4,6e4);/**
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
 */function Iu(n,t){return t?_e(t):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ao extends uu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Tn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Tn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function cm(n){return zp(n.auth,new Ao(n),n.bypassAuthState)}function um(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),jp(e,new Ao(n),n.bypassAuthState)}async function hm(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),qp(e,new Ao(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,e,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return cm;case"linkViaPopup":case"linkViaRedirect":return hm;case"reauthViaPopup":case"reauthViaRedirect":return um;default:ce(this.auth,"internal-error")}}resolve(t){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new Dr(2e3,1e4);async function fm(n,t,e){if(pe(n.app))return Promise.reject(te(n,"operation-not-supported-in-this-environment"));const r=Bi(n);ap(n,t,To);const i=Iu(r,e);return new Ze(r,"signInViaPopup",t,i).executeNotNull()}class Ze extends Tu{constructor(t,e,r,i,o){super(t,e,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ze.currentPopupAction&&Ze.currentPopupAction.cancel(),Ze.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const t=wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ze.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dm.get())};t()}}Ze.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="pendingRedirect",fi=new Map;class mm extends Tu{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=fi.get(this.auth._key());if(!t){try{const r=await gm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}fi.set(this.auth._key(),t)}return this.bypassAuthState||fi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gm(n,t){const e=vm(t),r=ym(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function _m(n,t){fi.set(n._key(),t)}function ym(n){return _e(n._redirectPersistence)}function vm(n){return di(pm,n.config.apiKey,n.name)}async function Em(n,t,e=!1){if(pe(n.app))return Promise.reject(en(n));const r=Bi(n),i=Iu(r,t),a=await new mm(r,i,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=10*60*1e3;class Tm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wm(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!wu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(te(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Im&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sl(t))}saveEventToCache(t){this.cachedEventUids.add(Sl(t)),this.lastProcessedEventTime=Date.now()}}function Sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function wu({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(n,t={}){return Fn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bm=/^https?/;async function Sm(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Am(n);for(const e of t)try{if(Pm(e))return}catch{}ce(n,"unauthorized-domain")}function Pm(n){const t=$s(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!bm.test(e))return!1;if(Rm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Cm=new Dr(3e4,6e4);function Pl(){const n=oe().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function km(n){return new Promise((t,e)=>{var r,i,o;function a(){Pl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pl(),e(te(n,"network-request-failed"))},timeout:Cm.get()})}if(!((i=(r=oe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=oe().gapi)===null||o===void 0)&&o.load)a();else{const l=Op("iframefcb");return oe()[l]=()=>{gapi.load?a():e(te(n,"network-request-failed"))},Vp(`${Np()}?onload=${l}`).catch(u=>e(u))}}).catch(t=>{throw pi=null,t})}let pi=null;function Dm(n){return pi=pi||km(n),pi}/**
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
 */const Vm=new Dr(5e3,15e3),Nm="__/auth/iframe",Om="emulator/auth/iframe",Mm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xm(n){const t=n.config;X(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?_o(t,Om):`https://${n.config.authDomain}/${Nm}`,r={apiKey:t.apiKey,appName:n.name,v:Un},i=Lm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${e}?${kr(r).slice(1)}`}async function Um(n){const t=await Dm(n),e=oe().gapi;return X(e,n,"internal-error"),t.open({where:document.body,url:xm(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mm,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=te(n,"network-request-failed"),l=oe().setTimeout(()=>{o(a)},Vm.get());function u(){oe().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const Fm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bm=500,qm=600,jm="_blank",zm="http://localhost";class Cl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $m(n,t,e,r=Bm,i=qm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Fm),{width:r.toString(),height:i.toString(),top:o,left:a}),d=Nt().toLowerCase();e&&(l=nu(d)?jm:e),eu(d)&&(t=t||zm,u.scrollbars="yes");const f=Object.entries(u).reduce((I,[A,S])=>`${I}${A}=${S},`,"");if(wp(d)&&l!=="_self")return Hm(t||"",l),new Cl(null);const E=window.open(t||"",l,f);X(E,n,"popup-blocked");try{E.focus()}catch{}return new Cl(E)}function Hm(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Gm="__/auth/handler",Wm="emulator/auth/handler",Km=encodeURIComponent("fac");async function kl(n,t,e,r,i,o){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Un,eventId:i};if(t instanceof To){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Gd(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,E]of Object.entries({}))a[f]=E}if(t instanceof Vr){const f=t.getScopes().filter(E=>E!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${Km}=${encodeURIComponent(u)}`:"";return`${Qm(n)}?${kr(l).slice(1)}${d}`}function Qm({config:n}){return n.emulator?_o(n,Wm):`https://${n.authDomain}/${Gm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="webStorageSupport";class Xm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gu,this._completeRedirectFn=Em,this._overrideRedirectResult=_m}async _openPopup(t,e,r,i){var o;Ie((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await kl(t,e,r,$s(),i);return $m(t,a,wo())}async _openRedirect(t,e,r,i){await this._originValidation(t);const o=await kl(t,e,r,$s(),i);return Zp(o),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:o}=this.eventManagers[e];return i?Promise.resolve(i):(Ie(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Um(t),r=new Tm(t);return e.register("authEvent",i=>(X(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Os,{type:Os},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Os];a!==void 0&&e(!!a),ce(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Sm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return au()||Eo()||Fi()}}const Jm=Xm;var Dl="@firebase/auth",Vl="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tg(n){Rn(new rn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lu(n)},d=new kp(r,i,o,u);return Lp(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Rn(new rn("auth-internal",t=>{const e=Bi(t.getProvider("auth").getImmediate());return(r=>new Ym(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Dl,Vl,Zm(n)),Ue(Dl,Vl,"esm2017")}/**
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
 */const eg=5*60,ng=Bc("authIdTokenMaxAge")||eg;let Nl=null;const rg=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>ng)return;const i=e==null?void 0:e.token;Nl!==i&&(Nl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ig(n=$c()){const t=fo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Mp(n,{popupRedirectResolver:Jm,persistence:[lm,Xp,gu]}),r=Bc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=rg(o.toString());Hp(e,a,()=>a(e.currentUser)),$p(e,l=>a(l))}}const i=Uc("auth");return i&&xp(e,`http://${i}`),e}function sg(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Dp({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const o=te("internal-error");o.customData=i,e(o)},r.type="text/javascript",r.charset="UTF-8",sg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tg("Browser");var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,Au;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,w){for(var g=Array(arguments.length-2),x=2;x<arguments.length;x++)g[x-2]=arguments[x];return m.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],T=v.g[2];var w=v.g[3],g=m+(w^_&(T^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[2]+606105819&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[6]+2821735955&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[10]+4294925233&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[14]+2792965006&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^w&(_^T))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[11]+643717713&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[15]+3634488961&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[3]+4107603335&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[7]+1735328473&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[11]+1839030562&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[7]+4139469664&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[3]+3572445317&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[15]+530742520&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[14]+2878612391&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[10]+4293915773&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[6]+2734768916&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[2]+718787259&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,T=this.h,w=0;w<m;){if(T==0)for(;w<=_;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(y[T++]=v.charCodeAt(w++),T==this.blockSize){i(this,y),T=0;break}}else for(;w<m;)if(y[T++]=v[w++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var w=v[T]|0;y&&w==m||(_[T]=w,y=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return P(d(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return P(f(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=E,T=0;T<v.length;T+=8){var w=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var E=u(0),I=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-P(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(C(this))return"-"+P(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,y="";;){var T=Q(_,m).g;_=$(_,T.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,S(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function C(v){return v.h==-1}n.l=function(v){return v=$(this,v),C(v)?-1:S(v)?0:1};function P(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(I)}n.abs=function(){return C(this)?P(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=m;T++){var w=y+(this.i(T)&65535)+(v.i(T)&65535),g=(w>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=g>>>16,w&=65535,g&=65535,_[T]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(v,m){return v.add(P(m))}n.j=function(v){if(S(this)||S(v))return E;if(C(this))return C(v)?P(this).j(P(v)):P(P(this).j(v));if(C(v))return P(this.j(P(v)));if(0>this.l(A)&&0>v.l(A))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var w=this.i(y)>>>16,g=this.i(y)&65535,x=v.i(T)>>>16,K=v.i(T)&65535;_[2*y+2*T]+=g*K,W(_,2*y+2*T),_[2*y+2*T+1]+=w*K,W(_,2*y+2*T+1),_[2*y+2*T+1]+=g*x,W(_,2*y+2*T+1),_[2*y+2*T+2]+=w*x,W(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function W(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function U(v,m){this.g=v,this.h=m}function Q(v,m){if(S(m))throw Error("division by zero");if(S(v))return new U(E,E);if(C(v))return m=Q(P(v),m),new U(P(m.g),P(m.h));if(C(m))return m=Q(v,P(m)),new U(P(m.g),m.h);if(30<v.g.length){if(C(v)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,y=m;0>=y.l(v);)_=z(_),y=z(y);var T=q(_,1),w=q(y,1);for(y=q(y,2),_=q(_,2);!S(y);){var g=w.add(y);0>=g.l(v)&&(T=T.add(_),w=g),y=q(y,1),_=q(_,1)}return m=$(v,T.j(m)),new U(T,m)}for(T=E;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(m);C(g)||0<g.l(v);)_-=y,w=d(_),g=w.j(m);S(w)&&(w=I),T=T.add(w),v=$(v,g)}return new U(T,v)}n.A=function(v){return Q(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function z(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function q(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,T=[],w=0;w<y;w++)T[w]=0<m?v.i(w+_)>>>m|v.i(w+_+1)<<32-m:v.i(w+_);return new a(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Au=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,nn=a}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ru,bu,or,Su,mi,Ws,Pu,Cu,ku;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof oi=="object"&&oi];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var h=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var R=s[p];if(!(R in h))break t;h=h[R]}s=s[s.length-1],p=h[s],c=c(p),c!=p&&c!=null&&t(h,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var h=0,p=!1,R={next:function(){if(!p&&h<s.length){var b=h++;return{value:c(b,s[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function f(s,c,h){return s.call.apply(s.bind,arguments)}function E(s,c,h){if(!s)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),s.apply(c,R)}}return function(){return s.apply(c,arguments)}}function I(s,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:E,I.apply(null,arguments)}function A(s,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function S(s,c){function h(){}h.prototype=c.prototype,s.aa=c.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(p,R,b){for(var O=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)O[ft-2]=arguments[ft];return c.prototype[R].apply(p,O)}}function C(s){const c=s.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=s[p];return h}return[]}function P(s,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=s.length||0,b=p.length||0;s.length=R+b;for(let O=0;O<b;O++)s[R+O]=p[O]}else s.push(p)}}class ${constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function W(s){return/^[\s\xa0]*$/.test(s)}function U(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function Q(s){return Q[" "](s),s}Q[" "]=function(){};var z=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function q(s,c,h){for(const p in s)c.call(h,s[p],p,s)}function v(s,c){for(const h in s)c.call(void 0,s[h],h,s)}function m(s){const c={};for(const h in s)c[h]=s[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)s[h]=p[h];for(let b=0;b<_.length;b++)h=_[b],Object.prototype.hasOwnProperty.call(p,h)&&(s[h]=p[h])}}function T(s){var c=1;s=s.split(":");const h=[];for(;0<c&&s.length;)h.push(s.shift()),c--;return s.length&&h.push(s.join(":")),h}function w(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Wt;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class x{constructor(){this.h=this.g=null}add(c,h){const p=K.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var K=new $(()=>new ht,s=>s.reset());class ht{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,Mt=!1,Wt=new x,H=()=>{const s=l.Promise.resolve(void 0);dt=()=>{s.then(ct)}};var ct=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(h){w(h)}var c=K;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Mt=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _t(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return s}();function re(s,c){if(_t.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(z){t:{try{Q(c.nodeName);var R=!0;break t}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=s.fromElement:h=="mouseout"&&(c=s.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:is[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&re.aa.h.call(this)}}S(re,_t);var is={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),$h=0;function Hh(s,c,h,p,R){this.listener=s,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++$h,this.da=this.fa=!1}function jr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function zr(s){this.src=s,this.g={},this.h=0}zr.prototype.add=function(s,c,h,p,R){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var O=os(s,c,p,R);return-1<O?(c=s[O],h||(c.fa=!1)):(c=new Hh(c,this.src,b,!!p,R),c.fa=h,s.push(c)),c};function ss(s,c){var h=c.type;if(h in s.g){var p=s.g[h],R=Array.prototype.indexOf.call(p,c,void 0),b;(b=0<=R)&&Array.prototype.splice.call(p,R,1),b&&(jr(c),s.g[h].length==0&&(delete s.g[h],s.h--))}}function os(s,c,h,p){for(var R=0;R<s.length;++R){var b=s[R];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==p)return R}return-1}var as="closure_lm_"+(1e6*Math.random()|0),ls={};function aa(s,c,h,p,R){if(Array.isArray(c)){for(var b=0;b<c.length;b++)aa(s,c[b],h,p,R);return null}return h=ua(h),s&&s[Re]?s.K(c,h,d(p)?!!p.capture:!!p,R):Gh(s,c,h,!1,p,R)}function Gh(s,c,h,p,R,b){if(!c)throw Error("Invalid event type");var O=d(R)?!!R.capture:!!R,ft=us(s);if(ft||(s[as]=ft=new zr(s)),h=ft.add(c,h,p,O,b),h.proxy)return h;if(p=Wh(),h.proxy=p,p.src=s,p.listener=h,s.addEventListener)We||(R=O),R===void 0&&(R=!1),s.addEventListener(c.toString(),p,R);else if(s.attachEvent)s.attachEvent(ca(c.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Wh(){function s(h){return c.call(s.src,s.listener,h)}const c=Kh;return s}function la(s,c,h,p,R){if(Array.isArray(c))for(var b=0;b<c.length;b++)la(s,c[b],h,p,R);else p=d(p)?!!p.capture:!!p,h=ua(h),s&&s[Re]?(s=s.i,c=String(c).toString(),c in s.g&&(b=s.g[c],h=os(b,h,p,R),-1<h&&(jr(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete s.g[c],s.h--)))):s&&(s=us(s))&&(c=s.g[c.toString()],s=-1,c&&(s=os(c,h,p,R)),(h=-1<s?c[s]:null)&&cs(h))}function cs(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Re])ss(c.i,s);else{var h=s.type,p=s.proxy;c.removeEventListener?c.removeEventListener(h,p,s.capture):c.detachEvent?c.detachEvent(ca(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=us(c))?(ss(h,s),h.h==0&&(h.src=null,c[as]=null)):jr(s)}}}function ca(s){return s in ls?ls[s]:ls[s]="on"+s}function Kh(s,c){if(s.da)s=!0;else{c=new re(c,this);var h=s.listener,p=s.ha||s.src;s.fa&&cs(s),s=h.call(p,c)}return s}function us(s){return s=s[as],s instanceof zr?s:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ua(s){return typeof s=="function"?s:(s[hs]||(s[hs]=function(c){return s.handleEvent(c)}),s[hs])}function Lt(){ut.call(this),this.i=new zr(this),this.M=this,this.F=null}S(Lt,ut),Lt.prototype[Re]=!0,Lt.prototype.removeEventListener=function(s,c,h,p){la(this,s,c,h,p)};function zt(s,c){var h,p=s.F;if(p)for(h=[];p;p=p.F)h.push(p);if(s=s.M,p=c.type||c,typeof c=="string")c=new _t(c,s);else if(c instanceof _t)c.target=c.target||s;else{var R=c;c=new _t(p,s),y(c,R)}if(R=!0,h)for(var b=h.length-1;0<=b;b--){var O=c.g=h[b];R=$r(O,p,!0,c)&&R}if(O=c.g=s,R=$r(O,p,!0,c)&&R,R=$r(O,p,!1,c)&&R,h)for(b=0;b<h.length;b++)O=c.g=h[b],R=$r(O,p,!1,c)&&R}Lt.prototype.N=function(){if(Lt.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var h=s.g[c],p=0;p<h.length;p++)jr(h[p]);delete s.g[c],s.h--}}this.F=null},Lt.prototype.K=function(s,c,h,p){return this.i.add(String(s),c,!1,h,p)},Lt.prototype.L=function(s,c,h,p){return this.i.add(String(s),c,!0,h,p)};function $r(s,c,h,p){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,b=0;b<c.length;++b){var O=c[b];if(O&&!O.da&&O.capture==h){var ft=O.listener,Pt=O.ha||O.src;O.fa&&ss(s.i,O),R=ft.call(Pt,p)!==!1&&R}}return R&&!p.defaultPrevented}function ha(s,c,h){if(typeof s=="function")h&&(s=I(s,h));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function da(s){s.g=ha(()=>{s.g=null,s.i&&(s.i=!1,da(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Qh extends ut{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:da(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $n(s){ut.call(this),this.h=s,this.g={}}S($n,ut);var fa=[];function pa(s){q(s.g,function(c,h){this.g.hasOwnProperty(h)&&cs(c)},s),s.g={}}$n.prototype.N=function(){$n.aa.N.call(this),pa(this)},$n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=l.JSON.stringify,Xh=l.JSON.parse,Jh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function fs(){}fs.prototype.h=null;function ma(s){return s.h||(s.h=s.i())}function ga(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ps(){_t.call(this,"d")}S(ps,_t);function ms(){_t.call(this,"c")}S(ms,_t);var Ke={},_a=null;function Hr(){return _a=_a||new Lt}Ke.La="serverreachability";function ya(s){_t.call(this,Ke.La,s)}S(ya,_t);function Gn(s){const c=Hr();zt(c,new ya(c))}Ke.STAT_EVENT="statevent";function va(s,c){_t.call(this,Ke.STAT_EVENT,s),this.stat=c}S(va,_t);function $t(s){const c=Hr();zt(c,new va(c,s))}Ke.Ma="timingevent";function Ea(s,c){_t.call(this,Ke.Ma,s),this.size=c}S(Ea,_t);function Wn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function Kn(){this.g=!0}Kn.prototype.xa=function(){this.g=!1};function Yh(s,c,h,p,R,b){s.info(function(){if(s.g)if(b)for(var O="",ft=b.split("&"),Pt=0;Pt<ft.length;Pt++){var ot=ft[Pt].split("=");if(1<ot.length){var xt=ot[0];ot=ot[1];var Ut=xt.split("_");O=2<=Ut.length&&Ut[1]=="type"?O+(xt+"="+ot+"&"):O+(xt+"=redacted&")}}else O=null;else O=b;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+O})}function Zh(s,c,h,p,R,b,O){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+b+" "+O})}function fn(s,c,h,p){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+ed(s,h)+(p?" "+p:"")})}function td(s,c){s.info(function(){return"TIMEOUT: "+c})}Kn.prototype.info=function(){};function ed(s,c){if(!s.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var p=h[s];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var b=R[0];if(b!="noop"&&b!="stop"&&b!="close")for(var O=1;O<R.length;O++)R[O]=""}}}}return ds(h)}catch{return c}}var Gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ia={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gs;function Wr(){}S(Wr,fs),Wr.prototype.g=function(){return new XMLHttpRequest},Wr.prototype.i=function(){return{}},gs=new Wr;function be(s,c,h,p){this.j=s,this.i=c,this.l=h,this.R=p||1,this.U=new $n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ta}function Ta(){this.i=null,this.g="",this.h=!1}var wa={},_s={};function ys(s,c,h){s.L=1,s.v=Jr(he(c)),s.m=h,s.P=!0,Aa(s,null)}function Aa(s,c){s.F=Date.now(),Kr(s),s.A=he(s.v);var h=s.A,p=s.R;Array.isArray(p)||(p=[String(p)]),Ua(h.i,"t",p),s.C=0,h=s.j.J,s.h=new Ta,s.g=nl(s.j,h?c:null,!s.m),0<s.O&&(s.M=new Qh(I(s.Y,s,s.g),s.O)),c=s.U,h=s.g,p=s.ca;var R="readystatechange";Array.isArray(R)||(R&&(fa[0]=R.toString()),R=fa);for(var b=0;b<R.length;b++){var O=aa(h,R[b],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),Gn(),Yh(s.i,s.u,s.A,s.l,s.R,s.m)}be.prototype.ca=function(s){s=s.target;const c=this.M;c&&de(s)==3?c.j():this.Y(s)},be.prototype.Y=function(s){try{if(s==this.g)t:{const Ut=de(this.g);var c=this.g.Ba();const gn=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||Ha(this.g)))){this.J||Ut!=4||c==7||(c==8||0>=gn?Gn(3):Gn(2)),vs(this);var h=this.g.Z();this.X=h;e:if(Ra(this)){var p=Ha(this.g);s="";var R=p.length,b=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qe(this),Qn(this);var O="";break e}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,s+=this.h.i.decode(p[c],{stream:!(b&&c==R-1)});p.length=0,this.h.g+=s,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,Zh(this.i,this.u,this.A,this.l,this.R,Ut,h),this.o){if(this.T&&!this.K){e:{if(this.g){var ft,Pt=this.g;if((ft=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(ft)){var ot=ft;break e}}ot=null}if(h=ot)fn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Es(this,h);else{this.o=!1,this.s=3,$t(12),Qe(this),Qn(this);break t}}if(this.P){h=!0;let Yt;for(;!this.J&&this.C<O.length;)if(Yt=nd(this,O),Yt==_s){Ut==4&&(this.s=4,$t(14),h=!1),fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==wa){this.s=4,$t(15),fn(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else fn(this.i,this.l,Yt,null),Es(this,Yt);if(Ra(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||O.length!=0||this.h.h||(this.s=1,$t(16),h=!1),this.o=this.o&&h,!h)fn(this.i,this.l,O,"[Invalid Chunked Response]"),Qe(this),Qn(this);else if(0<O.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),bs(xt),xt.M=!0,$t(11))}}else fn(this.i,this.l,O,null),Es(this,O);Ut==4&&Qe(this),this.o&&!this.J&&(Ut==4?Ya(this.j,this):(this.o=!1,Kr(this)))}else vd(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),Qe(this),Qn(this)}}}catch{}finally{}};function Ra(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function nd(s,c){var h=s.C,p=c.indexOf(`
`,h);return p==-1?_s:(h=Number(c.substring(h,p)),isNaN(h)?wa:(p+=1,p+h>c.length?_s:(c=c.slice(p,p+h),s.C=p+h,c)))}be.prototype.cancel=function(){this.J=!0,Qe(this)};function Kr(s){s.S=Date.now()+s.I,ba(s,s.I)}function ba(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Wn(I(s.ba,s),c)}function vs(s){s.B&&(l.clearTimeout(s.B),s.B=null)}be.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(td(this.i,this.A),this.L!=2&&(Gn(),$t(17)),Qe(this),this.s=2,Qn(this)):ba(this,this.S-s)};function Qn(s){s.j.G==0||s.J||Ya(s.j,s)}function Qe(s){vs(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,pa(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Es(s,c){try{var h=s.j;if(h.G!=0&&(h.g==s||Is(h.h,s))){if(!s.K&&Is(h.h,s)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)ni(h),ti(h);else break t;Rs(h),$t(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Wn(I(h.Za,h),6e3));if(1>=Ca(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Je(h,11)}else if((s.K||h.g==s)&&ni(h),!W(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let ot=R[c];if(h.T=ot[0],ot=ot[1],h.G==2)if(ot[0]=="c"){h.K=ot[1],h.ia=ot[2];const xt=ot[3];xt!=null&&(h.la=xt,h.j.info("VER="+h.la));const Ut=ot[4];Ut!=null&&(h.Aa=Ut,h.j.info("SVER="+h.Aa));const gn=ot[5];gn!=null&&typeof gn=="number"&&0<gn&&(p=1.5*gn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Yt=s.g;if(Yt){const ii=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var b=p.h;b.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ts(b,b.h),b.h=null))}if(p.D){const Ss=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(p.ya=Ss,mt(p.I,p.D,Ss))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var O=s;if(p.qa=el(p,p.J?p.ia:null,p.W),O.K){ka(p.h,O);var ft=O,Pt=p.L;Pt&&(ft.I=Pt),ft.B&&(vs(ft),Kr(ft)),p.g=O}else Xa(p);0<h.i.length&&ei(h)}else ot[0]!="stop"&&ot[0]!="close"||Je(h,7);else h.G==3&&(ot[0]=="stop"||ot[0]=="close"?ot[0]=="stop"?Je(h,7):As(h):ot[0]!="noop"&&h.l&&h.l.ta(ot),h.v=0)}}Gn(4)}catch{}}var rd=class{constructor(s,c){this.g=s,this.map=c}};function Sa(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pa(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ca(s){return s.h?1:s.g?s.g.size:0}function Is(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ts(s,c){s.g?s.g.add(c):s.h=c}function ka(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Sa.prototype.cancel=function(){if(this.i=Da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Da(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const h of s.g.values())c=c.concat(h.D);return c}return C(s.i)}function id(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],h=s.length,p=0;p<h;p++)c.push(s[p]);return c}c=[],h=0;for(p in s)c[h++]=s[p];return c}function sd(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var h=0;h<s;h++)c.push(h);return c}c=[],h=0;for(const p in s)c[h++]=p;return c}}}function Va(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var h=sd(s),p=id(s),R=p.length,b=0;b<R;b++)c.call(void 0,p[b],h&&h[b],s)}var Na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(s,c){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var p=s[h].indexOf("="),R=null;if(0<=p){var b=s[h].substring(0,p);R=s[h].substring(p+1)}else b=s[h];c(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Xe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Xe){this.h=s.h,Qr(this,s.j),this.o=s.o,this.g=s.g,Xr(this,s.s),this.l=s.l;var c=s.i,h=new Yn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Oa(this,h),this.m=s.m}else s&&(c=String(s).match(Na))?(this.h=!1,Qr(this,c[1]||"",!0),this.o=Xn(c[2]||""),this.g=Xn(c[3]||"",!0),Xr(this,c[4]),this.l=Xn(c[5]||"",!0),Oa(this,c[6]||"",!0),this.m=Xn(c[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Xe.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Jn(c,Ma,!0),":");var h=this.g;return(h||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Jn(c,Ma,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(Jn(h,h.charAt(0)=="/"?cd:ld,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",Jn(h,hd)),s.join("")};function he(s){return new Xe(s)}function Qr(s,c,h){s.j=h?Xn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Xr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Oa(s,c,h){c instanceof Yn?(s.i=c,dd(s.i,s.h)):(h||(c=Jn(c,ud)),s.i=new Yn(c,s.h))}function mt(s,c,h){s.i.set(c,h)}function Jr(s){return mt(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Xn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Jn(s,c,h){return typeof s=="string"?(s=encodeURI(s).replace(c,ad),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ad(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ma=/[#\/\?@]/g,ld=/[#\?:]/g,cd=/[#\?]/g,ud=/[#\?@]/g,hd=/#/g;function Yn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Se(s){s.g||(s.g=new Map,s.h=0,s.i&&od(s.i,function(c,h){s.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Yn.prototype,n.add=function(s,c){Se(this),this.i=null,s=pn(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(c),this.h+=1,this};function La(s,c){Se(s),c=pn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function xa(s,c){return Se(s),c=pn(s,c),s.g.has(c)}n.forEach=function(s,c){Se(this),this.g.forEach(function(h,p){h.forEach(function(R){s.call(c,R,p,this)},this)},this)},n.na=function(){Se(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const R=s[p];for(let b=0;b<R.length;b++)h.push(c[p])}return h},n.V=function(s){Se(this);let c=[];if(typeof s=="string")xa(this,s)&&(c=c.concat(this.g.get(pn(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)c=c.concat(s[h])}return c},n.set=function(s,c){return Se(this),this.i=null,s=pn(this,s),xa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Ua(s,c,h){La(s,c),0<h.length&&(s.i=null,s.g.set(pn(s,c),C(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const b=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var R=b;O[p]!==""&&(R+="="+encodeURIComponent(String(O[p]))),s.push(R)}}return this.i=s.join("&")};function pn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function dd(s,c){c&&!s.j&&(Se(s),s.i=null,s.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(La(this,p),Ua(this,R,h))},s)),s.j=c}function fd(s,c){const h=new Kn;if(l.Image){const p=new Image;p.onload=A(Pe,h,"TestLoadImage: loaded",!0,c,p),p.onerror=A(Pe,h,"TestLoadImage: error",!1,c,p),p.onabort=A(Pe,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(Pe,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else c(!1)}function pd(s,c){const h=new Kn,p=new AbortController,R=setTimeout(()=>{p.abort(),Pe(h,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:p.signal}).then(b=>{clearTimeout(R),b.ok?Pe(h,"TestPingServer: ok",!0,c):Pe(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Pe(h,"TestPingServer: error",!1,c)})}function Pe(s,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function md(){this.g=new Jh}function gd(s,c,h){const p=h||"";try{Va(s,function(R,b){let O=R;d(R)&&(O=ds(R)),c.push(p+b+"="+encodeURIComponent(O))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Zn(s){this.l=s.Ub||null,this.j=s.eb||!1}S(Zn,fs),Zn.prototype.g=function(){return new Yr(this.l,this.j)},Zn.prototype.i=function(s){return function(){return s}}({});function Yr(s,c){Lt.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Yr,Lt),n=Yr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,er(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?tr(this):er(this),this.readyState==3&&Fa(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,tr(this))},n.Qa=function(s){this.g&&(this.response=s,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,er(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=c.next();return s.join(`\r
`)};function er(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ba(s){let c="";return q(s,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function ws(s,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Ba(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):mt(s,c,h))}function vt(s){Lt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(vt,Lt);var _d=/^https?$/i,yd=["POST","PUT"];n=vt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gs.g(),this.v=this.o?ma(this.o):ma(gs),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(b){qa(this,b);return}if(s=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())h.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),R=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yd,c,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,O]of h)this.g.setRequestHeader(b,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$a(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){qa(this,b)}};function qa(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,ja(s),Zr(s)}function ja(s){s.A||(s.A=!0,zt(s,"complete"),zt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,zt(this,"complete"),zt(this,"abort"),Zr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zr(this,!0)),vt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?za(this):this.bb())},n.bb=function(){za(this)};function za(s){if(s.h&&typeof a<"u"&&(!s.v[1]||de(s)!=4||s.Z()!=2)){if(s.u&&de(s)==4)ha(s.Ea,0,s);else if(zt(s,"readystatechange"),de(s)==4){s.h=!1;try{const O=s.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=O===0){var R=String(s.D).match(Na)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!_d.test(R?R.toLowerCase():"")}h=p}if(h)zt(s,"complete"),zt(s,"success");else{s.m=6;try{var b=2<de(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",ja(s)}}finally{Zr(s)}}}}function Zr(s,c){if(s.g){$a(s);const h=s.g,p=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||zt(s,"ready");try{h.onreadystatechange=p}catch{}}}function $a(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function de(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Xh(c)}};function Ha(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function vd(s){const c={};s=(s.g&&2<=de(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(W(s[p]))continue;var h=T(s[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[R]||[];c[R]=b,b.push(h)}v(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(s,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||c}function Ga(s){this.Aa=0,this.i=[],this.j=new Kn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,s),this.cb=nr("retryDelaySeedMs",1e4,s),this.Wa=nr("forwardChannelMaxRetries",2,s),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Sa(s&&s.concurrentRequestLimit),this.Da=new md,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ga.prototype,n.la=8,n.G=1,n.connect=function(s,c,h,p){$t(0),this.W=s,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=el(this,null,this.W),ei(this)};function As(s){if(Wa(s),s.G==3){var c=s.U++,h=he(s.I);if(mt(h,"SID",s.K),mt(h,"RID",c),mt(h,"TYPE","terminate"),rr(s,h),c=new be(s,s.j,c),c.L=2,c.v=Jr(he(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=nl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Kr(c)}tl(s)}function ti(s){s.g&&(bs(s),s.g.cancel(),s.g=null)}function Wa(s){ti(s),s.u&&(l.clearTimeout(s.u),s.u=null),ni(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function ei(s){if(!Pa(s.h)&&!s.s){s.s=!0;var c=s.Ga;dt||H(),Mt||(dt(),Mt=!0),Wt.add(c,s),s.B=0}}function Ed(s,c){return Ca(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Wn(I(s.Ga,s,c),Za(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const R=new be(this,this.j,s);let b=this.o;if(this.S&&(b?(b=m(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(R.H=b,b=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Qa(this,R,c),h=he(this.I),mt(h,"RID",s),mt(h,"CVER",22),this.D&&mt(h,"X-HTTP-Session-Id",this.D),rr(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(Ba(b)))+"&"+c:this.m&&ws(h,this.m,b)),Ts(this.h,R),this.Ua&&mt(h,"TYPE","init"),this.P?(mt(h,"$req",c),mt(h,"SID","null"),R.T=!0,ys(R,h,null)):ys(R,h,c),this.G=2}}else this.G==3&&(s?Ka(this,s):this.i.length==0||Pa(this.h)||Ka(this))};function Ka(s,c){var h;c?h=c.l:h=s.U++;const p=he(s.I);mt(p,"SID",s.K),mt(p,"RID",h),mt(p,"AID",s.T),rr(s,p),s.m&&s.o&&ws(p,s.m,s.o),h=new be(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Qa(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ts(s.h,h),ys(h,p,c)}function rr(s,c){s.H&&q(s.H,function(h,p){mt(c,p,h)}),s.l&&Va({},function(h,p){mt(c,p,h)})}function Qa(s,c,h){h=Math.min(s.i.length,h);var p=s.l?I(s.l.Na,s.l,s):null;t:{var R=s.i;let b=-1;for(;;){const O=["count="+h];b==-1?0<h?(b=R[0].g,O.push("ofs="+b)):b=0:O.push("ofs="+b);let ft=!0;for(let Pt=0;Pt<h;Pt++){let ot=R[Pt].g;const xt=R[Pt].map;if(ot-=b,0>ot)b=Math.max(0,R[Pt].g-100),ft=!1;else try{gd(xt,O,"req"+ot+"_")}catch{p&&p(xt)}}if(ft){p=O.join("&");break t}}}return s=s.i.splice(0,h),c.D=s,p}function Xa(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;dt||H(),Mt||(dt(),Mt=!0),Wt.add(c,s),s.v=0}}function Rs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Wn(I(s.Fa,s),Za(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Wn(I(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),ti(this),Ja(this))};function bs(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Ja(s){s.g=new be(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=he(s.qa);mt(c,"RID","rpc"),mt(c,"SID",s.K),mt(c,"AID",s.T),mt(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&mt(c,"TO",s.ja),mt(c,"TYPE","xmlhttp"),rr(s,c),s.m&&s.o&&ws(c,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=Jr(he(c)),h.m=null,h.P=!0,Aa(h,s)}n.Za=function(){this.C!=null&&(this.C=null,ti(this),Rs(this),$t(19))};function ni(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ya(s,c){var h=null;if(s.g==c){ni(s),bs(s),s.g=null;var p=2}else if(Is(s.h,c))h=c.D,ka(s.h,c),p=1;else return;if(s.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=s.B;p=Hr(),zt(p,new Ea(p,h)),ei(s)}else Xa(s);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&Ed(s,c)||p==2&&Rs(s)))switch(h&&0<h.length&&(c=s.h,c.i=c.i.concat(h)),R){case 1:Je(s,5);break;case 4:Je(s,10);break;case 3:Je(s,6);break;default:Je(s,2)}}}function Za(s,c){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*c}function Je(s,c){if(s.j.info("Error code "+c),c==2){var h=I(s.fb,s),p=s.Xa;const R=!p;p=new Xe(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qr(p,"https"),Jr(p),R?fd(p.toString(),h):pd(p.toString(),h)}else $t(2);s.G=0,s.l&&s.l.sa(c),tl(s),Wa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function tl(s){if(s.G=0,s.ka=[],s.l){const c=Da(s.h);(c.length!=0||s.i.length!=0)&&(P(s.ka,c),P(s.ka,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.ra()}}function el(s,c,h){var p=h instanceof Xe?he(h):new Xe(h);if(p.g!="")c&&(p.g=c+"."+p.g),Xr(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var b=new Xe(null);p&&Qr(b,p),c&&(b.g=c),R&&Xr(b,R),h&&(b.l=h),p=b}return h=s.D,c=s.ya,h&&c&&mt(p,h,c),mt(p,"VER",s.la),rr(s,p),p}function nl(s,c,h){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new vt(new Zn({eb:h})):new vt(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rl(){}n=rl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ri(){}ri.prototype.g=function(s,c){return new Qt(s,c)};function Qt(s,c){Lt.call(this),this.g=new Ga(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!W(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!W(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new mn(this)}S(Qt,Lt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){As(this.g)},Qt.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=ds(s),s=h);c.i.push(new rd(c.Ya++,s)),c.G==3&&ei(c)},Qt.prototype.N=function(){this.g.l=null,delete this.j,As(this.g),delete this.g,Qt.aa.N.call(this)};function il(s){ps.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const h in c){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}S(il,ps);function sl(){ms.call(this),this.status=1}S(sl,ms);function mn(s){this.g=s}S(mn,rl),mn.prototype.ua=function(){zt(this.g,"a")},mn.prototype.ta=function(s){zt(this.g,new il(s))},mn.prototype.sa=function(s){zt(this.g,new sl)},mn.prototype.ra=function(){zt(this.g,"b")},ri.prototype.createWebChannel=ri.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,ku=function(){return new ri},Cu=function(){return Hr()},Pu=Ke,Ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,mi=Gr,Ia.COMPLETE="complete",Su=Ia,ga.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",Lt.prototype.listen=Lt.prototype.K,or=ga,bu=Zn,vt.prototype.listenOnce=vt.prototype.L,vt.prototype.getLastError=vt.prototype.Ka,vt.prototype.getLastErrorCode=vt.prototype.Ba,vt.prototype.getStatus=vt.prototype.Z,vt.prototype.getResponseJson=vt.prototype.Oa,vt.prototype.getResponseText=vt.prototype.oa,vt.prototype.send=vt.prototype.ea,vt.prototype.setWithCredentials=vt.prototype.Ha,Ru=vt}).apply(typeof oi<"u"?oi:typeof self<"u"?self:typeof window<"u"?window:{});const Ml="@firebase/firestore";/**
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
 */class Bt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
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
 */let Bn="10.12.1";/**
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
 */const an=new uo("@firebase/firestore");function ir(){return an.logLevel}function B(n,...t){if(an.logLevel<=it.DEBUG){const e=t.map(Ro);an.debug(`Firestore (${Bn}): ${n}`,...e)}}function Te(n,...t){if(an.logLevel<=it.ERROR){const e=t.map(Ro);an.error(`Firestore (${Bn}): ${n}`,...e)}}function Sn(n,...t){if(an.logLevel<=it.WARN){const e=t.map(Ro);an.warn(`Firestore (${Bn}): ${n}`,...e)}}function Ro(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(n="Unexpected state"){const t=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: `+n;throw Te(t),new Error(t)}function pt(n,t){n||J()}function Z(n,t){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Du{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class og{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Bt.UNAUTHENTICATED))}shutdown(){}}class ag{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class lg{constructor(t){this.t=t,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let o=new Fe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Fe,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Fe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pt(typeof r.accessToken=="string"),new Du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return pt(t===null||typeof t=="string"),new Bt(t)}}class cg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ug{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new cg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(pt(typeof e.token=="string"),this.R=e.token,new hg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Vu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=fg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function lt(n,t){return n<t?-1:n>t?1:0}function Pn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class bt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return bt.fromMillis(Date.now())}static fromDate(t){return bt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new bt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Y(t)}static min(){return new Y(new bt(0,0))}static max(){return new Y(new bt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yr{constructor(t,e,r){e===void 0?e=0:e>t.length&&J(),r===void 0?r=t.length-e:r>t.length-e&&J(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return yr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class gt extends yr{construct(t,e,r){return new gt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new gt(e)}static emptyPath(){return new gt([])}}const pg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends yr{construct(t,e,r){return new kt(t,e,r)}static isValidIdentifier(t){return pg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new kt(e)}static emptyPath(){return new kt([])}}/**
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
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(gt.fromString(t))}static fromName(t){return new G(gt.fromString(t).popFirst(5))}static empty(){return new G(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return gt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new gt(t.slice()))}}function mg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new bt(e+1,0):new bt(e,r));return new je(i,G.empty(),t)}function gg(n){return new je(n.readTime,n.key,-1)}class je{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new je(Y.min(),G.empty(),-1)}static max(){return new je(Y.max(),G.empty(),-1)}}function _g(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:lt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Or(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==yg)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):N.reject(e)}static resolve(t){return new N((e,r)=>{e(t)})}static reject(t){return new N((e,r)=>{r(t)})}static waitFor(t){return new N((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},u=>r(u))}),a=!0,o===i&&e()})}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next(i=>i?N.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new N((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;e(t[d]).next(f=>{a[d]=f,++l,l===o&&r(a)},f=>i(f))}})}static doWhile(t,e){return new N((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Eg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Mr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class bo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}bo.oe=-1;function zi(n){return n==null}function Pi(n){return n===0&&1/n==-1/0}function Ig(n){return typeof n=="number"&&Number.isInteger(n)&&!Pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ll(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function hn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Nu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||Ct.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ai(this.root,t,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ai(this.root,t,this.comparator,!0)}}class ai{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??Ct.RED,this.left=i??Ct.EMPTY,this.right=o??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new Ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const t=this.left.check();if(t!==this.right.check())throw J();return t+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,r,i,o){return this}insert(t,e,r){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Vt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xl(this.data.getIterator())}getIteratorFrom(t){return new xl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Vt(this.comparator);return e.data=t,e}}class xl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new Xt([])}unionWith(t){let e=new Vt(kt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Ou extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ou("Invalid base64 string: "+o):o}}(t);return new jt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const Tg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ze(n){if(pt(!!n),typeof n=="string"){let t=0;const e=Tg.exec(n);if(pt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ln(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Po(n){const t=n.mapValue.fields.__previous_value__;return So(t)?Po(t):t}function vr(n){const t=ze(n.mapValue.fields.__local_write_time__.timestampValue);return new bt(t.seconds,t.nanos)}/**
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
 */class wg{constructor(t,e,r,i,o,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Er{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Er&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?So(n)?4:Ag(n)?9007199254740991:10:J()}function ue(n,t){if(n===t)return!0;const e=cn(n);if(e!==cn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return vr(n).isEqual(vr(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ze(i.timestampValue),l=ze(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ln(i.bytesValue).isEqual(ln(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return At(i.geoPointValue.latitude)===At(o.geoPointValue.latitude)&&At(i.geoPointValue.longitude)===At(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return At(i.integerValue)===At(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=At(i.doubleValue),l=At(o.doubleValue);return a===l?Pi(a)===Pi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Pn(n.arrayValue.values||[],t.arrayValue.values||[],ue);case 10:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ll(a)!==Ll(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ue(a[u],l[u])))return!1;return!0}(n,t);default:return J()}}function Ir(n,t){return(n.values||[]).find(e=>ue(e,t))!==void 0}function Cn(n,t){if(n===t)return 0;const e=cn(n),r=cn(t);if(e!==r)return lt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return lt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=At(o.integerValue||o.doubleValue),u=At(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return Ul(n.timestampValue,t.timestampValue);case 4:return Ul(vr(n),vr(t));case 5:return lt(n.stringValue,t.stringValue);case 6:return function(o,a){const l=ln(o),u=ln(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=lt(l[d],u[d]);if(f!==0)return f}return lt(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=lt(At(o.latitude),At(a.latitude));return l!==0?l:lt(At(o.longitude),At(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const f=Cn(l[d],u[d]);if(f)return f}return lt(l.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===li.mapValue&&a===li.mapValue)return 0;if(o===li.mapValue)return 1;if(a===li.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let E=0;E<u.length&&E<f.length;++E){const I=lt(u[E],f[E]);if(I!==0)return I;const A=Cn(l[u[E]],d[f[E]]);if(A!==0)return A}return lt(u.length,f.length)}(n.mapValue,t.mapValue);default:throw J()}}function Ul(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return lt(n,t);const e=ze(n),r=ze(t),i=lt(e.seconds,r.seconds);return i!==0?i:lt(e.nanos,r.nanos)}function kn(n){return Ks(n)}function Ks(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ze(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ln(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return G.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Ks(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ks(e.fields[a])}`;return i+"}"}(n.mapValue):J()}function Fl(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Qs(n){return!!n&&"integerValue"in n}function Co(n){return!!n&&"arrayValue"in n}function Bl(n){return!!n&&"nullValue"in n}function ql(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gi(n){return!!n&&"mapValue"in n}function ur(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return hn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ur(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ur(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ag(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kt{constructor(t){this.value=t}static empty(){return new Kt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!gi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ur(e)}setAll(t){let e=kt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=ur(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());gi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ue(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];gi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){hn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Kt(ur(this.value))}}function Mu(n){const t=[];return hn(n.fields,(e,r)=>{const i=new kt([e]);if(gi(r)){const o=Mu(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Xt(t)}/**
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
 */class qt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new qt(t,0,Y.min(),Y.min(),Y.min(),Kt.empty(),0)}static newFoundDocument(t,e,r,i){return new qt(t,1,e,Y.min(),r,i,0)}static newNoDocument(t,e){return new qt(t,2,e,Y.min(),Y.min(),Kt.empty(),0)}static newUnknownDocument(t,e){return new qt(t,3,e,Y.min(),Y.min(),Kt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ci{constructor(t,e){this.position=t,this.inclusive=e}}function jl(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),e.key):r=Cn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function zl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ue(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Lu{}class Rt extends Lu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Sg(t,e,r):e==="array-contains"?new kg(t,r):e==="in"?new Dg(t,r):e==="not-in"?new Vg(t,r):e==="array-contains-any"?new Ng(t,r):new Rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Pg(t,r):new Cg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Cn(e,this.value)):e!==null&&cn(this.value)===cn(e)&&this.matchesComparison(Cn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Lu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ne(t,e)}matches(t){return xu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xu(n){return n.op==="and"}function Uu(n){return bg(n)&&xu(n)}function bg(n){for(const t of n.filters)if(t instanceof ne)return!1;return!0}function Xs(n){if(n instanceof Rt)return n.field.canonicalString()+n.op.toString()+kn(n.value);if(Uu(n))return n.filters.map(t=>Xs(t)).join(",");{const t=n.filters.map(e=>Xs(e)).join(",");return`${n.op}(${t})`}}function Fu(n,t){return n instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.field.isEqual(i.field)&&ue(r.value,i.value)}(n,t):n instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&Fu(a,i.filters[l]),!0):!1}(n,t):void J()}function Bu(n){return n instanceof Rt?function(e){return`${e.field.canonicalString()} ${e.op} ${kn(e.value)}`}(n):n instanceof ne?function(e){return e.op.toString()+" {"+e.getFilters().map(Bu).join(" ,")+"}"}(n):"Filter"}class Sg extends Rt{constructor(t,e,r){super(t,e,r),this.key=G.fromName(r.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class Pg extends Rt{constructor(t,e){super(t,"in",e),this.keys=qu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Cg extends Rt{constructor(t,e){super(t,"not-in",e),this.keys=qu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>G.fromName(r.referenceValue))}class kg extends Rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Co(e)&&Ir(e.arrayValue,this.value)}}class Dg extends Rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ir(this.value.arrayValue,e)}}class Vg extends Rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ir(this.value.arrayValue,e)}}class Ng extends Rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Co(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ir(this.value.arrayValue,r))}}/**
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
 */class Og{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function $l(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Og(n,t,e,r,i,o,a)}function ko(n){const t=Z(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Xs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),zi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>kn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>kn(r)).join(",")),t.ue=e}return t.ue}function Do(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Rg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Fu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!zl(n.startAt,t.startAt)&&zl(n.endAt,t.endAt)}function Js(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class qn{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mg(n,t,e,r,i,o,a,l){return new qn(n,t,e,r,i,o,a,l)}function ju(n){return new qn(n)}function Hl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zu(n){return n.collectionGroup!==null}function hr(n){const t=Z(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Vt(kt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Tr(o,r))}),e.has(kt.keyField().canonicalString())||t.ce.push(new Tr(kt.keyField(),r))}return t.ce}function ae(n){const t=Z(n);return t.le||(t.le=Lg(t,hr(n))),t.le}function Lg(n,t){if(n.limitType==="F")return $l(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Tr(i.field,o)});const e=n.endAt?new Ci(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ci(n.startAt.position,n.startAt.inclusive):null;return $l(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ys(n,t){const e=n.filters.concat([t]);return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ki(n,t,e){return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function $i(n,t){return Do(ae(n),ae(t))&&n.limitType===t.limitType}function $u(n){return`${ko(ae(n))}|lt:${n.limitType}`}function _n(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Bu(i)).join(", ")}]`),zi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>kn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>kn(i)).join(",")),`Target(${r})`}(ae(n))}; limitType=${n.limitType})`}function Hi(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):G.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of hr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=jl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,hr(r),i)||r.endAt&&!function(a,l,u){const d=jl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,hr(r),i))}(n,t)}function xg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hu(n){return(t,e)=>{let r=!1;for(const i of hr(n)){const o=Ug(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ug(n,t,e){const r=n.field.isKeyField()?G.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?Cn(u,d):J()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class jn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){hn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Nu(this.inner)}size(){return this.innerSize}}/**
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
 */const Fg=new yt(G.comparator);function we(){return Fg}const Gu=new yt(G.comparator);function ar(...n){let t=Gu;for(const e of n)t=t.insert(e.key,e);return t}function Wu(n){let t=Gu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function tn(){return dr()}function Ku(){return dr()}function dr(){return new jn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Bg=new yt(G.comparator),qg=new Vt(G.comparator);function rt(...n){let t=qg;for(const e of n)t=t.add(e);return t}const jg=new Vt(lt);function zg(){return jg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pi(t)?"-0":t}}function Xu(n){return{integerValue:""+n}}function $g(n,t){return Ig(t)?Xu(t):Qu(n,t)}/**
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
 */class Gi{constructor(){this._=void 0}}function Hg(n,t,e){return n instanceof Di?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&So(o)&&(o=Po(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof wr?Yu(n,t):n instanceof Ar?Zu(n,t):function(i,o){const a=Ju(i,o),l=Gl(a)+Gl(i.Pe);return Qs(a)&&Qs(i.Pe)?Xu(l):Qu(i.serializer,l)}(n,t)}function Gg(n,t,e){return n instanceof wr?Yu(n,t):n instanceof Ar?Zu(n,t):e}function Ju(n,t){return n instanceof Vi?function(r){return Qs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Di extends Gi{}class wr extends Gi{constructor(t){super(),this.elements=t}}function Yu(n,t){const e=th(t);for(const r of n.elements)e.some(i=>ue(i,r))||e.push(r);return{arrayValue:{values:e}}}class Ar extends Gi{constructor(t){super(),this.elements=t}}function Zu(n,t){let e=th(t);for(const r of n.elements)e=e.filter(i=>!ue(i,r));return{arrayValue:{values:e}}}class Vi extends Gi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Gl(n){return At(n.integerValue||n.doubleValue)}function th(n){return Co(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Wg(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof wr&&i instanceof wr||r instanceof Ar&&i instanceof Ar?Pn(r.elements,i.elements,ue):r instanceof Vi&&i instanceof Vi?ue(r.Pe,i.Pe):r instanceof Di&&i instanceof Di}(n.transform,t.transform)}class Kg{constructor(t,e){this.version=t,this.transformResults=e}}class ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ee}static exists(t){return new ee(void 0,t)}static updateTime(t){return new ee(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _i(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Wi{}function eh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vo(n.key,ee.none()):new Lr(n.key,n.data,ee.none());{const e=n.data,r=Kt.empty();let i=new Vt(kt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new He(n.key,r,new Xt(i.toArray()),ee.none())}}function Qg(n,t,e){n instanceof Lr?function(i,o,a){const l=i.value.clone(),u=Kl(i.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof He?function(i,o,a){if(!_i(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Kl(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(nh(i)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function fr(n,t,e,r){return n instanceof Lr?function(o,a,l,u){if(!_i(o.precondition,a))return l;const d=o.value.clone(),f=Ql(o.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof He?function(o,a,l,u){if(!_i(o.precondition,a))return l;const d=Ql(o.fieldTransforms,u,a),f=a.data;return f.setAll(nh(o)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,l){return _i(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Xg(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ju(r.transform,i||null);o!=null&&(e===null&&(e=Kt.empty()),e.set(r.field,o))}return e||null}function Wl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pn(r,i,(o,a)=>Wg(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Lr extends Wi{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class He extends Wi{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function nh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Kl(n,t,e){const r=new Map;pt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Gg(a,l,e[i]))}return r}function Ql(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Hg(o,a,t))}return r}class Vo extends Wi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jg extends Wi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Yg{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Qg(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ku();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const u=eh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),rt())}isEqual(t){return this.batchId===t.batchId&&Pn(this.mutations,t.mutations,(e,r)=>Wl(e,r))&&Pn(this.baseMutations,t.baseMutations,(e,r)=>Wl(e,r))}}class No{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){pt(t.mutations.length===r.length);let i=function(){return Bg}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new No(t,e,r,i)}}/**
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
 */class Zg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class t_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Tt,st;function e_(n){switch(n){default:return J();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function rh(n){if(n===void 0)return Te("GRPC error has no .code"),k.UNKNOWN;switch(n){case Tt.OK:return k.OK;case Tt.CANCELLED:return k.CANCELLED;case Tt.UNKNOWN:return k.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return k.INTERNAL;case Tt.UNAVAILABLE:return k.UNAVAILABLE;case Tt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Tt.NOT_FOUND:return k.NOT_FOUND;case Tt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Tt.ABORTED:return k.ABORTED;case Tt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Tt.DATA_LOSS:return k.DATA_LOSS;default:return J()}}(st=Tt||(Tt={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function n_(){return new TextEncoder}/**
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
 */const r_=new nn([4294967295,4294967295],0);function Xl(n){const t=n_().encode(n),e=new Au;return e.update(t),new Uint8Array(e.digest())}function Jl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new nn([e,r],0),new nn([i,o],0)]}class Oo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new lr(`Invalid padding: ${e}`);if(r<0)throw new lr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new lr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new lr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=nn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(nn.fromNumber(r)));return i.compare(r_)===1&&(i=new nn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Xl(t),[r,i]=Jl(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Oo(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Xl(t),[r,i]=Jl(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ki{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,xr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ki(Y.min(),i,new yt(lt),we(),rt())}}class xr{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new xr(r,e,rt(),rt(),rt())}}/**
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
 */class yi{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class ih{constructor(t,e){this.targetId=t,this.me=e}}class sh{constructor(t,e,r=jt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Yl{constructor(){this.fe=0,this.ge=tc(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=rt(),e=rt(),r=rt();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:J()}}),new xr(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=tc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,pt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class i_{constructor(t){this.Le=t,this.Be=new Map,this.ke=we(),this.qe=Zl(),this.Qe=new yt(lt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:J()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Js(o))if(r===0){const a=new G(o.path);this.Ue(e,a,qt.newNoDocument(a,Y.min()))}else pt(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=ln(r).toUint8Array()}catch(u){if(u instanceof Ou)return Sn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Oo(a,i,o)}catch(u){return Sn(u instanceof lr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Js(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,qt.newNoDocument(u,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=rt();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Ki(t,e,this.Qe,this.ke,r);return this.ke=we(),this.qe=Zl(),this.Qe=new yt(lt),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Yl,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Vt(lt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||B("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Yl),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Zl(){return new yt(G.comparator)}function tc(){return new yt(G.comparator)}const s_={asc:"ASCENDING",desc:"DESCENDING"},o_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a_={and:"AND",or:"OR"};class l_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Zs(n,t){return n.useProto3Json||zi(t)?t:{value:t}}function Ni(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function c_(n,t){return Ni(n,t.toTimestamp())}function le(n){return pt(!!n),Y.fromTimestamp(function(e){const r=ze(e);return new bt(r.seconds,r.nanos)}(n))}function Mo(n,t){return to(n,t).canonicalString()}function to(n,t){const e=function(i){return new gt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ah(n){const t=gt.fromString(n);return pt(dh(t)),t}function eo(n,t){return Mo(n.databaseId,t.path)}function Ms(n,t){const e=ah(t);if(e.get(1)!==n.databaseId.projectId)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new G(ch(e))}function lh(n,t){return Mo(n.databaseId,t)}function u_(n){const t=ah(n);return t.length===4?gt.emptyPath():ch(t)}function no(n){return new gt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ch(n){return pt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ec(n,t,e){return{name:eo(n,t),fields:e.value.mapValue.fields}}function h_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(pt(f===void 0||typeof f=="string"),jt.fromBase64String(f||"")):(pt(f===void 0||f instanceof Buffer||f instanceof Uint8Array),jt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const f=d.code===void 0?k.UNKNOWN:rh(d.code);return new F(f,d.message||"")}(a);e=new sh(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ms(n,r.document.name),o=le(r.document.updateTime),a=r.document.createTime?le(r.document.createTime):Y.min(),l=new Kt({mapValue:{fields:r.document.fields}}),u=qt.newFoundDocument(i,o,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];e=new yi(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ms(n,r.document),o=r.readTime?le(r.readTime):Y.min(),a=qt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new yi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ms(n,r.document),o=r.removedTargetIds||[];e=new yi([],o,i,null)}else{if(!("filter"in t))return J();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new t_(i,o),l=r.targetId;e=new ih(l,a)}}return e}function d_(n,t){let e;if(t instanceof Lr)e={update:ec(n,t.key,t.value)};else if(t instanceof Vo)e={delete:eo(n,t.key)};else if(t instanceof He)e={update:ec(n,t.key,t.data),updateMask:I_(t.fieldMask)};else{if(!(t instanceof Jg))return J();e={verify:eo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof Di)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ar)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:c_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:J()}(n,t.precondition)),e}function f_(n,t){return n&&n.length>0?(pt(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?le(i.updateTime):le(o);return a.isEqual(Y.min())&&(a=le(o)),new Kg(a,i.transformResults||[])}(e,t))):[]}function p_(n,t){return{documents:[lh(n,t.path)]}}function m_(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=lh(n,i);const o=function(d){if(d.length!==0)return hh(ne.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:yn(I.field),direction:y_(I.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Zs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function g_(n){let t=u_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){pt(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let o=[];e.where&&(o=function(E){const I=uh(E);return I instanceof ne&&Uu(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(I=>function(S){return new Tr(vn(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(I))}(e.orderBy));let l=null;e.limit&&(l=function(E){let I;return I=typeof E=="object"?E.value:E,zi(I)?null:I}(e.limit));let u=null;e.startAt&&(u=function(E){const I=!!E.before,A=E.values||[];return new Ci(A,I)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const I=!E.before,A=E.values||[];return new Ci(A,I)}(e.endAt)),Mg(t,i,a,o,l,"F",u,d)}function __(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function uh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=vn(e.unaryFilter.field);return Rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vn(e.unaryFilter.field);return Rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=vn(e.unaryFilter.field);return Rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=vn(e.unaryFilter.field);return Rt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(n):n.fieldFilter!==void 0?function(e){return Rt.create(vn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ne.create(e.compositeFilter.filters.map(r=>uh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(n):J()}function y_(n){return s_[n]}function v_(n){return o_[n]}function E_(n){return a_[n]}function yn(n){return{fieldPath:n.canonicalString()}}function vn(n){return kt.fromServerFormat(n.fieldPath)}function hh(n){return n instanceof Rt?function(e){if(e.op==="=="){if(ql(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NAN"}};if(Bl(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ql(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NOT_NAN"}};if(Bl(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yn(e.field),op:v_(e.op),value:e.value}}}(n):n instanceof ne?function(e){const r=e.getFilters().map(i=>hh(i));return r.length===1?r[0]:{compositeFilter:{op:E_(e.op),filters:r}}}(n):J()}function I_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function dh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Oe{constructor(t,e,r,i,o=Y.min(),a=Y.min(),l=jt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class T_{constructor(t){this.ct=t}}function w_(n){const t=g_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ki(t,t.limit,"L"):t}/**
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
 */class A_{constructor(){this._n=new R_}addToCollectionParentIndex(t,e){return this._n.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(je.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(je.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class R_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Vt(gt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Vt(gt.comparator)).toArray()}}/**
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
 */class Dn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Dn(0)}static Ln(){return new Dn(-1)}}/**
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
 */class b_{constructor(){this.changes=new jn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class S_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class P_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&fr(r.mutation,i,Xt.empty(),bt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,rt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=rt()){const i=tn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=ar();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=tn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,rt()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=we();const a=dr(),l=function(){return dr()}();return e.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof He)?o=o.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),fr(f.mutation,d,f.mutation.getFieldMask(),bt.now())):a.set(d.key,Xt.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var E;return l.set(d,new S_(f,(E=a.get(d))!==null&&E!==void 0?E:null))}),l))}recalculateAndSaveOverlays(t,e){const r=dr();let i=new yt((a,l)=>a-l),o=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||Xt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const E=(i.get(l.batchId)||rt()).add(u);i=i.insert(l.batchId,E)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,E=Ku();f.forEach(I=>{if(!o.has(I)){const A=eh(e.get(I),r.get(I));A!==null&&E.set(I,A),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):N.resolve(tn());let l=-1,u=o;return a.next(d=>N.forEach(d,(f,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(f)?N.resolve():this.remoteDocumentCache.getEntry(t,f).next(I=>{u=u.insert(f,I)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,u,d,rt())).next(f=>({batchId:l,changes:Wu(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next(r=>{let i=ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=ar();return this.indexManager.getCollectionParents(t,o).next(l=>N.forEach(l,u=>{const d=function(E,I){return new qn(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(f=>{f.forEach((E,I)=>{a=a.insert(E,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,qt.newInvalidDocument(f)))});let l=ar();return a.forEach((u,d)=>{const f=o.get(u);f!==void 0&&fr(f.mutation,d,Xt.empty(),bt.now()),Hi(e,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return N.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:le(i.createTime)}}(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:w_(i.bundledQuery),readTime:le(i.readTime)}}(e)),N.resolve()}}/**
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
 */class k_{constructor(){this.overlays=new yt(G.comparator),this.hr=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=tn();return N.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),N.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const i=tn(),o=e.length+1,a=new G(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new yt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=tn(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=tn(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return N.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Zg(e,r));let o=this.hr.get(e);o===void 0&&(o=rt(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
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
 */class Lo{constructor(){this.Pr=new Vt(St.Ir),this.Tr=new Vt(St.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new St(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new St(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new G(new gt([])),r=new St(e,t),i=new St(e,t+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new G(new gt([])),r=new St(e,t),i=new St(e,t+1);let o=rt();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new St(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class St{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return G.comparator(t.key,e.key)||lt(t.pr,e.pr)}static Er(t,e){return lt(t.pr,e.pr)||G.comparator(t.key,e.key)}}/**
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
 */class D_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Vt(St.Ir)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Yg(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new St(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,e){return N.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new St(e,0),i=new St(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);o.push(l)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Vt(lt);return e.forEach(i=>{const o=new St(i,0),a=new St(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),N.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;G.isDocumentKey(o)||(o=o.child(""));const a=new St(new G(o),0);let l=new Vt(lt);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.pr)),!0)},a),N.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){pt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return N.forEach(e.mutations,i=>{const o=new St(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new St(e,0),i=this.wr.firstAfterOrEqual(r);return N.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class V_{constructor(t){this.vr=t,this.docs=function(){return new yt(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():qt.newInvalidDocument(e))}getEntries(t,e){let r=we();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():qt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=we();const a=e.path,l=new G(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||_g(gg(f),r)<=0||(i.has(f.key)||Hi(e,f))&&(o=o.insert(f.key,f.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(t,e,r,i){J()}Fr(t,e){return N.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new N_(this)}getSize(t){return N.resolve(this.size)}}class N_ extends b_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),N.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class O_{constructor(t){this.persistence=t,this.Mr=new jn(e=>ko(e),Do),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Lo,this.targetCount=0,this.Lr=Dn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),N.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Dn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.qn(e),N.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),N.waitFor(o).next(()=>i)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),N.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this.Nr.containsKey(e))}}/**
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
 */class M_{constructor(t,e){this.Br={},this.overlays={},this.kr=new bo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new O_(this),this.indexManager=new A_,this.remoteDocumentCache=function(i){return new V_(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new T_(e),this.$r=new C_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new k_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new D_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){B("MemoryPersistence","Starting transaction:",t);const i=new L_(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return N.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class L_ extends vg{constructor(t){super(),this.currentSequenceNumber=t}}class xo{constructor(t){this.persistence=t,this.zr=new Lo,this.jr=null}static Hr(t){return new xo(t)}get Jr(){if(this.jr)return this.jr;throw J()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),N.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return N.or([()=>N.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Uo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=rt(),i=rt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Uo(t,e.fromCache,r,i)}}/**
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
 */class x_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class U_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Bd()?8:Eg(Nt())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new x_;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(ir()<=it.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",_n(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(ir()<=it.DEBUG&&B("QueryEngine","Query:",_n(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ir()<=it.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",_n(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ae(e))):N.resolve())}ji(t,e){if(Hl(e))return N.resolve(null);let r=ae(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ki(e,null,"F"),r=ae(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=rt(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Zi(e,l);return this.Xi(e,d,a,u.readTime)?this.ji(t,ki(e,null,"F")):this.es(t,d,e,u)}))})))}Hi(t,e,r,i){return Hl(e)||i.isEqual(Y.min())?N.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,i)?N.resolve(null):(ir()<=it.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_n(e)),this.es(t,a,e,mg(i,-1)).next(l=>l))})}Zi(t,e){let r=new Vt(Hu(t));return e.forEach((i,o)=>{Hi(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return ir()<=it.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",_n(e)),this.zi.getDocumentsMatchingQuery(t,e,je.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new yt(lt),this.rs=new jn(o=>ko(o),Do),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new P_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function B_(n,t,e,r){return new F_(n,t,e,r)}async function fh(n,t){const e=Z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=rt();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of o){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function q_(n,t){const e=Z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const E=d.batch,I=E.keys();let A=N.resolve();return I.forEach(S=>{A=A.next(()=>f.getEntry(u,S)).next(C=>{const P=d.docVersions.get(S);pt(P!==null),C.version.compareTo(P)<0&&(E.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=rt();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function ph(n){const t=Z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function j_(n,t){const e=Z(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const l=[];t.targetChanges.forEach((f,E)=>{const I=i.get(E);if(!I)return;l.push(e.Qr.removeMatchingKeys(o,f.removedDocuments,E).next(()=>e.Qr.addMatchingKeys(o,f.addedDocuments,E)));let A=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?A=A.withResumeToken(jt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(E,A),function(C,P,$){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(I,A,f)&&l.push(e.Qr.updateTargetData(o,A))});let u=we(),d=rt();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,f))}),l.push(z_(o,a,t.documentUpdates).next(f=>{u=f.cs,d=f.ls})),!r.isEqual(Y.min())){const f=e.Qr.getLastRemoteSnapshotVersion(o).next(E=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(f)}return N.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(e.ns=i,o))}function z_(n,t,e){let r=rt(),i=rt();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=we();return e.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:i}})}function $_(n,t){const e=Z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function H_(n,t){const e=Z(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,N.resolve(i)):e.Qr.allocateTargetId(r).next(a=>(i=new Oe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ro(n,t,e){const r=Z(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Mr(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function nc(n,t,e){const r=Z(n);let i=Y.min(),o=rt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const E=Z(u),I=E.rs.get(f);return I!==void 0?N.resolve(E.ns.get(I)):E.Qr.getTargetData(d,f)}(r,a,ae(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?i:Y.min(),e?o:rt())).next(l=>(G_(r,xg(t),l),{documents:l,hs:o})))}function G_(n,t,e){let r=n.ss.get(t)||Y.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class rc{constructor(){this.activeTargetIds=zg()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class W_{constructor(){this.no=new rc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new rc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class K_{io(t){}shutdown(){}}/**
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
 */class ic{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ci=null;function Ls(){return ci===null?ci=function(){return 268435456+Math.round(2147483648*Math.random())}():ci++,"0x"+ci.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class X_{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const Ft="WebChannelConnection";class J_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,a){const l=Ls(),u=this.vo(e,r.toUriEncodedString());B("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,u,d,i).then(f=>(B("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw Sn("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}xo(e,r,i,o,a,l){return this.Co(e,r,i,o,a)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const i=Q_[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=Ls();return new Promise((a,l)=>{const u=new Ru;u.setWithCredentials(!0),u.listenOnce(Su.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mi.NO_ERROR:const f=u.getResponseJson();B(Ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(f)),a(f);break;case mi.TIMEOUT:B(Ft,`RPC '${t}' ${o} timed out`),l(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case mi.HTTP_ERROR:const E=u.getStatus();if(B(Ft,`RPC '${t}' ${o} failed with status:`,E,"response text:",u.getResponseText()),E>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const A=I==null?void 0:I.error;if(A&&A.status&&A.message){const S=function(P){const $=P.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN}(A.status);l(new F(S,A.message))}else l(new F(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(k.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{B(Ft,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);B(Ft,`RPC '${t}' ${o} sending request:`,i),u.send(e,"POST",d,r,15)})}Oo(t,e,r){const i=Ls(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ku(),l=Cu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new bu({})),this.Fo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=o.join("");B(Ft,`Creating RPC '${t}' stream ${i}: ${f}`,u);const E=a.createWebChannel(f,u);let I=!1,A=!1;const S=new X_({lo:P=>{A?B(Ft,`Not sending because RPC '${t}' stream ${i} is closed:`,P):(I||(B(Ft,`Opening RPC '${t}' stream ${i} transport.`),E.open(),I=!0),B(Ft,`RPC '${t}' stream ${i} sending:`,P),E.send(P))},ho:()=>E.close()}),C=(P,$,W)=>{P.listen($,U=>{try{W(U)}catch(Q){setTimeout(()=>{throw Q},0)}})};return C(E,or.EventType.OPEN,()=>{A||(B(Ft,`RPC '${t}' stream ${i} transport opened.`),S.mo())}),C(E,or.EventType.CLOSE,()=>{A||(A=!0,B(Ft,`RPC '${t}' stream ${i} transport closed`),S.po())}),C(E,or.EventType.ERROR,P=>{A||(A=!0,Sn(Ft,`RPC '${t}' stream ${i} transport errored:`,P),S.po(new F(k.UNAVAILABLE,"The operation could not be completed")))}),C(E,or.EventType.MESSAGE,P=>{var $;if(!A){const W=P.data[0];pt(!!W);const U=W,Q=U.error||(($=U[0])===null||$===void 0?void 0:$.error);if(Q){B(Ft,`RPC '${t}' stream ${i} received error:`,Q);const z=Q.status;let q=function(_){const y=Tt[_];if(y!==void 0)return rh(y)}(z),v=Q.message;q===void 0&&(q=k.INTERNAL,v="Unknown error status: "+z+" with message "+Q.message),A=!0,S.po(new F(q,v)),E.close()}else B(Ft,`RPC '${t}' stream ${i} received:`,W),S.yo(W)}}),C(l,Pu.STAT_EVENT,P=>{P.stat===Ws.PROXY?B(Ft,`RPC '${t}' stream ${i} detected buffering proxy`):P.stat===Ws.NOPROXY&&B(Ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){return new l_(n,!0)}/**
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
 */class mh{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class gh{constructor(t,e,r,i,o,a,l,u){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new mh(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(Te(e.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new F(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return B("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y_ extends gh{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=h_(this.serializer,t),r=function(o){if(!("targetChange"in o))return Y.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?le(a.readTime):Y.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=no(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=Js(u)?{documents:p_(o,u)}:{query:m_(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=oh(o,a.resumeToken);const d=Zs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Y.min())>0){l.readTime=Ni(o,a.snapshotVersion.toTimestamp());const d=Zs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=__(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=no(this.serializer),e.removeTarget=t,this.i_(e)}}class Z_ extends gh{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(pt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=f_(t.writeResults,t.commitTime),r=le(t.commitTime);return this.listener.A_(r,e)}return pt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=no(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>d_(this.serializer,r))};this.i_(e)}}/**
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
 */class ty extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,to(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(k.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,to(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(k.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class ey{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Te(e),this.y_=!1):B("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class ny{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{dn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=Z(u);d.M_.add(4),await Ur(d),d.N_.set("Unknown"),d.M_.delete(4),await Xi(d)}(this))})}),this.N_=new ey(r,i)}}async function Xi(n){if(dn(n))for(const t of n.x_)await t(!0)}async function Ur(n){for(const t of n.x_)await t(!1)}function _h(n,t){const e=Z(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),jo(e)?qo(e):zn(e).Xo()&&Bo(e,t))}function Fo(n,t){const e=Z(n),r=zn(e);e.F_.delete(t),r.Xo()&&yh(e,t),e.F_.size===0&&(r.Xo()?r.n_():dn(e)&&e.N_.set("Unknown"))}function Bo(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}zn(n).P_(t)}function yh(n,t){n.L_.xe(t),zn(n).I_(t)}function qo(n){n.L_=new i_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),zn(n).start(),n.N_.w_()}function jo(n){return dn(n)&&!zn(n).Zo()&&n.F_.size>0}function dn(n){return Z(n).M_.size===0}function vh(n){n.L_=void 0}async function ry(n){n.N_.set("Online")}async function iy(n){n.F_.forEach((t,e)=>{Bo(n,t)})}async function sy(n,t){vh(n),jo(n)?(n.N_.D_(t),qo(n)):n.N_.set("Unknown")}async function oy(n,t,e){if(n.N_.set("Online"),t instanceof sh&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,t)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Oi(n,r)}else if(t instanceof yi?n.L_.Ke(t):t instanceof ih?n.L_.He(t):n.L_.We(t),!e.isEqual(Y.min()))try{const r=await ph(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=o.F_.get(d);f&&o.F_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=o.F_.get(u);if(!f)return;o.F_.set(u,f.withResumeToken(jt.EMPTY_BYTE_STRING,f.snapshotVersion)),yh(o,u);const E=new Oe(f.target,u,d,f.sequenceNumber);Bo(o,E)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Oi(n,r)}}async function Oi(n,t,e){if(!Mr(t))throw t;n.M_.add(1),await Ur(n),n.N_.set("Offline"),e||(e=()=>ph(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Xi(n)})}function Eh(n,t){return t().catch(e=>Oi(n,e,t))}async function Ji(n){const t=Z(n),e=$e(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;ay(t);)try{const i=await $_(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,ly(t,i)}catch(i){await Oi(t,i)}Ih(t)&&Th(t)}function ay(n){return dn(n)&&n.v_.length<10}function ly(n,t){n.v_.push(t);const e=$e(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Ih(n){return dn(n)&&!$e(n).Zo()&&n.v_.length>0}function Th(n){$e(n).start()}async function cy(n){$e(n).V_()}async function uy(n){const t=$e(n);for(const e of n.v_)t.d_(e.mutations)}async function hy(n,t,e){const r=n.v_.shift(),i=No.from(r,t,e);await Eh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ji(n)}async function dy(n,t){t&&$e(n).E_&&await async function(r,i){if(function(a){return e_(a)&&a!==k.ABORTED}(i.code)){const o=r.v_.shift();$e(r).t_(),await Eh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ji(r)}}(n,t),Ih(n)&&Th(n)}async function sc(n,t){const e=Z(n);e.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=dn(e);e.M_.add(3),await Ur(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Xi(e)}async function fy(n,t){const e=Z(n);t?(e.M_.delete(2),await Xi(e)):t||(e.M_.add(2),await Ur(e),e.N_.set("Unknown"))}function zn(n){return n.B_||(n.B_=function(e,r,i){const o=Z(e);return o.f_(),new Y_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:ry.bind(null,n),To:iy.bind(null,n),Ao:sy.bind(null,n),h_:oy.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),jo(n)?qo(n):n.N_.set("Unknown")):(await n.B_.stop(),vh(n))})),n.B_}function $e(n){return n.k_||(n.k_=function(e,r,i){const o=Z(e);return o.f_(),new Z_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:cy.bind(null,n),Ao:dy.bind(null,n),R_:uy.bind(null,n),A_:hy.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Ji(n)):(await n.k_.stop(),n.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class zo{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new zo(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $o(n,t){if(Te("AsyncQueue",`${t}: ${n}`),Mr(n))return new F(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class wn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||G.comparator(e.key,r.key):(e,r)=>G.comparator(e.key,r.key),this.keyedMap=ar(),this.sortedSet=new yt(this.comparator)}static emptySet(t){return new wn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new wn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class oc{constructor(){this.q_=new yt(G.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):J():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Vn{constructor(t,e,r,i,o,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Vn(t,e,wn.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$i(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class py{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class my{constructor(){this.queries=new jn(t=>$u(t),$i),this.onlineState="Unknown",this.z_=new Set}}async function gy(n,t){const e=Z(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new py,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=$o(a,`Initialization of query '${_n(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ho(e)}async function _y(n,t){const e=Z(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function yy(n,t){const e=Z(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&Ho(e)}function vy(n,t,e){const r=Z(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function Ho(n){n.z_.forEach(t=>{t.next()})}var io,ac;(ac=io||(io={})).J_="default",ac.Cache="cache";class Ey{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Vn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Vn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==io.Cache}}/**
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
 */class wh{constructor(t){this.key=t}}class Ah{constructor(t){this.key=t}}class Iy{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=rt(),this.mutatedKeys=rt(),this.Ia=Hu(t),this.Ta=new wn(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new oc,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,E)=>{const I=i.get(f),A=Hi(this.query,E)?E:null,S=!!I&&this.mutatedKeys.has(I.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;I&&A?I.data.isEqual(A.data)?S!==C&&(r.track({type:3,doc:A}),P=!0):this.Ra(I,A)||(r.track({type:2,doc:A}),P=!0,(u&&this.Ia(A,u)>0||d&&this.Ia(A,d)<0)&&(l=!0)):!I&&A?(r.track({type:0,doc:A}),P=!0):I&&!A&&(r.track({type:1,doc:I}),P=!0,(u||d)&&(l=!0)),P&&(A?(a=a.add(A),o=C?o.add(f):o.delete(f)):(a=a.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,E)=>function(A,S){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return C(A)-C(S)}(f.type,E.type)||this.Ia(f.doc,E.doc)),this.Va(r),i=i!=null&&i;const l=e&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Vn(this.query,t.Ta,o,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new oc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=rt(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Ah(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new wh(r))}),e}pa(t){this.la=t.hs,this.Pa=rt();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Vn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Ty{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class wy{constructor(t){this.key=t,this.wa=!1}}class Ay{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new jn(l=>$u(l),$i),this.Da=new Map,this.Ca=new Set,this.va=new yt(G.comparator),this.Fa=new Map,this.Ma=new Lo,this.xa={},this.Oa=new Map,this.Na=Dn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Ry(n,t,e=!0){const r=kh(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Rh(r,t,e,!0),i}async function by(n,t){const e=kh(n);await Rh(e,t,!0,!1)}async function Rh(n,t,e,r){const i=await H_(n.localStore,ae(t)),o=i.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await Sy(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&_h(n.remoteStore,i),l}async function Sy(n,t,e,r,i){n.Ba=(E,I,A)=>async function(C,P,$,W){let U=P.view.da($);U.Xi&&(U=await nc(C.localStore,P.query,!1).then(({documents:v})=>P.view.da(v,U)));const Q=W&&W.targetChanges.get(P.targetId),z=W&&W.targetMismatches.get(P.targetId)!=null,q=P.view.applyChanges(U,C.isPrimaryClient,Q,z);return cc(C,P.targetId,q.fa),q.snapshot}(n,E,I,A);const o=await nc(n.localStore,t,!0),a=new Iy(t,o.hs),l=a.da(o.documents),u=xr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);cc(n,e,d.fa);const f=new Ty(t,e,a);return n.ba.set(t,f),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function Py(n,t,e){const r=Z(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!$i(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ro(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Fo(r.remoteStore,i.targetId),so(r,i.targetId)}).catch(Or)):(so(r,i.targetId),await ro(r.localStore,i.targetId,!0))}async function Cy(n,t){const e=Z(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Fo(e.remoteStore,r.targetId))}async function ky(n,t,e){const r=xy(n);try{const i=await function(a,l){const u=Z(a),d=bt.now(),f=l.reduce((A,S)=>A.add(S.key),rt());let E,I;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=we(),C=rt();return u.os.getEntries(A,f).next(P=>{S=P,S.forEach(($,W)=>{W.isValidDocument()||(C=C.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,S)).next(P=>{E=P;const $=[];for(const W of l){const U=Xg(W,E.get(W.key).overlayedDocument);U!=null&&$.push(new He(W.key,U,Mu(U.value.mapValue),ee.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,$,l)}).next(P=>{I=P;const $=P.applyToLocalDocumentSet(E,C);return u.documentOverlayCache.saveOverlays(A,P.batchId,$)})}).then(()=>({batchId:I.batchId,changes:Wu(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new yt(lt)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,e),await Fr(r,i.changes),await Ji(r.remoteStore)}catch(i){const o=$o(i,"Failed to persist write");e.reject(o)}}async function bh(n,t){const e=Z(n);try{const r=await j_(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Fa.get(o);a&&(pt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?pt(a.wa):i.removedDocuments.size>0&&(pt(a.wa),a.wa=!1))}),await Fr(e,r,t)}catch(r){await Or(r)}}function lc(n,t,e){const r=Z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=Z(a);u.onlineState=l;let d=!1;u.queries.forEach((f,E)=>{for(const I of E.U_)I.j_(l)&&(d=!0)}),d&&Ho(u)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Dy(n,t,e){const r=Z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let a=new yt(G.comparator);a=a.insert(o,qt.newNoDocument(o,Y.min()));const l=rt().add(o),u=new Ki(Y.min(),new Map,new yt(lt),a,l);await bh(r,u),r.va=r.va.remove(o),r.Fa.delete(t),Go(r)}else await ro(r.localStore,t,!1).then(()=>so(r,t,e)).catch(Or)}async function Vy(n,t){const e=Z(n),r=t.batch.batchId;try{const i=await q_(e.localStore,t);Ph(e,r,null),Sh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Fr(e,i)}catch(i){await Or(i)}}async function Ny(n,t,e){const r=Z(n);try{const i=await function(a,l){const u=Z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(E=>(pt(E!==null),f=E.keys(),u.mutationQueue.removeMutationBatch(d,E))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,t);Ph(r,t,e),Sh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Fr(r,i)}catch(i){await Or(i)}}function Sh(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Ph(n,t,e){const r=Z(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function so(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Ch(n,r)})}function Ch(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Fo(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Go(n))}function cc(n,t,e){for(const r of e)r instanceof wh?(n.Ma.addReference(r.key,t),Oy(n,r)):r instanceof Ah?(B("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Ch(n,r.key)):J()}function Oy(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(B("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Go(n))}function Go(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new G(gt.fromString(t)),r=n.Na.next();n.Fa.set(r,new wy(e)),n.va=n.va.insert(e,r),_h(n.remoteStore,new Oe(ae(ju(e.path)),r,"TargetPurposeLimboResolution",bo.oe))}}async function Fr(n,t,e){const r=Z(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const f=d&&!d.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){i.push(d);const f=Uo.Ki(u.targetId,d);o.push(f)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(u,d){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>N.forEach(d,I=>N.forEach(I.qi,A=>f.persistence.referenceDelegate.addReference(E,I.targetId,A)).next(()=>N.forEach(I.Qi,A=>f.persistence.referenceDelegate.removeReference(E,I.targetId,A)))))}catch(E){if(!Mr(E))throw E;B("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const I=E.targetId;if(!E.fromCache){const A=f.ns.get(I),S=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(S);f.ns=f.ns.insert(I,C)}}}(r.localStore,o))}async function My(n,t){const e=Z(n);if(!e.currentUser.isEqual(t)){B("SyncEngine","User change. New user:",t.toKey());const r=await fh(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(u=>{u.reject(new F(k.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fr(e,r.us)}}function Ly(n,t){const e=Z(n),r=e.Fa.get(t);if(r&&r.wa)return rt().add(r.key);{let i=rt();const o=e.Da.get(t);if(!o)return i;for(const a of o){const l=e.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function kh(n){const t=Z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=bh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ly.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Dy.bind(null,t),t.Sa.h_=yy.bind(null,t.eventManager),t.Sa.ka=vy.bind(null,t.eventManager),t}function xy(n){const t=Z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ny.bind(null,t),t}class uc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return B_(this.persistence,new U_,t.initialUser,this.serializer)}createPersistence(t){return new M_(xo.Hr,this.serializer)}createSharedClientState(t){return new W_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=My.bind(null,this.syncEngine),await fy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new my}()}createDatastore(t){const e=Qi(t.databaseInfo.databaseId),r=function(o){return new J_(o)}(t.databaseInfo);return function(o,a,l,u){return new ty(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new ny(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>lc(this.syncEngine,e,0),function(){return ic.D()?new ic:new K_}())}createSyncEngine(t,e){return function(i,o,a,l,u,d,f){const E=new Ay(i,o,a,l,u,d);return f&&(E.La=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=Z(r);B("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ur(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fy{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Te("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class By{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Bt.UNAUTHENTICATED,this.clientId=Vu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$o(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Us(n,t){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function hc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jy(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>sc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sc(t.remoteStore,i)),n._onlineComponents=t}function qy(n){return n.name==="FirebaseError"?n.code===k.FAILED_PRECONDITION||n.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function jy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Us(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!qy(e))throw e;Sn("Error using user provided cache. Falling back to memory cache: "+e),await Us(n,new uc)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Us(n,new uc);return n._offlineComponents}async function Dh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await hc(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await hc(n,new Uy))),n._onlineComponents}function zy(n){return Dh(n).then(t=>t.syncEngine)}async function $y(n){const t=await Dh(n),e=t.eventManager;return e.onListen=Ry.bind(null,t.syncEngine),e.onUnlisten=Py.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=by.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Cy.bind(null,t.syncEngine),e}function Hy(n,t,e={}){const r=new Fe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const f=new Fy({next:I=>{a.enqueueAndForget(()=>_y(o,E)),I.fromCache&&u.source==="server"?d.reject(new F(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),E=new Ey(l,f,{includeMetadataChanges:!0,ra:!0});return gy(o,E)}(await $y(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Vh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map;/**
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
 */function Nh(n,t,e){if(!e)throw new F(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Gy(n,t,e,r){if(t===!0&&r===!0)throw new F(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fc(n){if(!G.isDocumentKey(n))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pc(n){if(G.isDocumentKey(n))throw new F(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":J()}function un(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Yi(n);throw new F(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zi{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new og;switch(r.type){case"firstParty":return new ug(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=dc.get(e);r&&(B("ComponentProvider","Removing Datastore"),dc.delete(e),r.terminate())}(this),Promise.resolve()}}function Wy(n,t,e,r={}){var i;const o=(n=un(n,Zi))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Bt.MOCK_USER;else{l=Od(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Bt(d)}n._authCredentials=new ag(new Du(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ge(this.firestore,t,this._query)}}class Jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Be(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}}class Be extends Ge{constructor(t,e,r){super(t,e,ju(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new G(t))}withConverter(t){return new Be(this.firestore,t,this._path)}}function ye(n,t,...e){if(n=Ot(n),Nh("collection","path",t),n instanceof Zi){const r=gt.fromString(t,...e);return pc(r),new Be(n,null,r)}{if(!(n instanceof Jt||n instanceof Be))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(t,...e));return pc(r),new Be(n.firestore,null,r)}}function Wo(n,t,...e){if(n=Ot(n),arguments.length===1&&(t=Vu.newId()),Nh("doc","path",t),n instanceof Zi){const r=gt.fromString(t,...e);return fc(r),new Jt(n,null,new G(r))}{if(!(n instanceof Jt||n instanceof Be))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(t,...e));return fc(r),new Jt(n.firestore,n instanceof Be?n.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new mh(this,"async_queue_retry"),this.hu=()=>{const e=xs();e&&B("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=xs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=xs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Fe;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Mr(t))throw t;B("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Te("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=zo.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&J()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Br extends Zi{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Ky}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mh(this),this._firestoreClient.terminate()}}function Qy(n,t){const e=typeof n=="object"?n:$c(),r=typeof n=="string"?n:"(default)",i=fo(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Vd("firestore");o&&Wy(i,...o)}return i}function Oh(n){return n._firestoreClient||Mh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Mh(n){var t,e,r;const i=n._freezeSettings(),o=function(l,u,d,f){return new wg(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Vh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new By(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nn(jt.fromBase64String(t))}catch(e){throw new F(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Nn(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t){this._methodName=t}}/**
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
 */class Qo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}}/**
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
 */const Xy=/^__.*__$/;class Jy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new He(t,this.data,this.fieldMask,e,this.fieldTransforms):new Lr(t,this.data,e,this.fieldTransforms)}}class Lh{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new He(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function xh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Xo{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Xo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Mi(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(xh(this.fu)&&Xy.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Yy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Qi(t)}Fu(t,e,r,i=!1){return new Xo({fu:t,methodName:e,vu:r,path:kt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jo(n){const t=n._freezeSettings(),e=Qi(n._databaseId);return new Yy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Zy(n,t,e,r,i,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);Yo("Data must be an object, but it was:",a,r);const l=Uh(r,a);let u,d;if(o.merge)u=new Xt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const f=[];for(const E of o.mergeFields){const I=oo(t,E,e);if(!a.contains(I))throw new F(k.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Bh(f,I)||f.push(I)}u=new Xt(f),d=a.fieldTransforms.filter(E=>u.covers(E.field))}else u=null,d=a.fieldTransforms;return new Jy(new Kt(l),u,d)}class es extends Ko{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof es}}function tv(n,t,e,r){const i=n.Fu(1,t,e);Yo("Data must be an object, but it was:",i,r);const o=[],a=Kt.empty();hn(r,(u,d)=>{const f=Zo(t,u,e);d=Ot(d);const E=i.Su(f);if(d instanceof es)o.push(f);else{const I=qr(d,E);I!=null&&(o.push(f),a.set(f,I))}});const l=new Xt(o);return new Lh(a,l,i.fieldTransforms)}function ev(n,t,e,r,i,o){const a=n.Fu(1,t,e),l=[oo(t,r,e)],u=[i];if(o.length%2!=0)throw new F(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)l.push(oo(t,o[I])),u.push(o[I+1]);const d=[],f=Kt.empty();for(let I=l.length-1;I>=0;--I)if(!Bh(d,l[I])){const A=l[I];let S=u[I];S=Ot(S);const C=a.Su(A);if(S instanceof es)d.push(A);else{const P=qr(S,C);P!=null&&(d.push(A),f.set(A,P))}}const E=new Xt(d);return new Lh(f,E,a.fieldTransforms)}function nv(n,t,e,r=!1){return qr(e,n.Fu(r?4:3,t))}function qr(n,t){if(Fh(n=Ot(n)))return Yo("Unsupported field value:",t,n),Uh(n,t);if(n instanceof Ko)return function(r,i){if(!xh(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let u=qr(l,i.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $g(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=bt.fromDate(r);return{timestampValue:Ni(i.serializer,o)}}if(r instanceof bt){const o=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ni(i.serializer,o)}}if(r instanceof Qo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nn)return{bytesValue:oh(i.serializer,r._byteString)};if(r instanceof Jt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Mo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Yi(r)}`)}(n,t)}function Uh(n,t){const e={};return Nu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hn(n,(r,i)=>{const o=qr(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Fh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof bt||n instanceof Qo||n instanceof Nn||n instanceof Jt||n instanceof Ko)}function Yo(n,t,e){if(!Fh(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Yi(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function oo(n,t,e){if((t=Ot(t))instanceof ts)return t._internalPath;if(typeof t=="string")return Zo(n,t);throw Mi("Field path arguments must be of type string or ",n,!1,void 0,e)}const rv=new RegExp("[~\\*/\\[\\]]");function Zo(n,t,e){if(t.search(rv)>=0)throw Mi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ts(...t.split("."))._internalPath}catch{throw Mi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Mi(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new F(k.INVALID_ARGUMENT,l+n+u)}function Bh(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ns("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class iv extends qh{data(){return super.data()}}function ns(n,t){return typeof t=="string"?Zo(n,t):t instanceof ts?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ta{}class ea extends ta{}function pr(n,t,...e){let r=[];t instanceof ta&&r.push(t),r=r.concat(e),function(o){const a=o.filter(u=>u instanceof na).length,l=o.filter(u=>u instanceof rs).length;if(a>1||a>0&&l>0)throw new F(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class rs extends ea{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new rs(t,e,r)}_apply(t){const e=this._parse(t);return jh(t._query,e),new Ge(t.firestore,t.converter,Ys(t._query,e))}_parse(t){const e=Jo(t.firestore);return function(o,a,l,u,d,f,E){let I;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_c(E,f);const A=[];for(const S of E)A.push(gc(u,o,S));I={arrayValue:{values:A}}}else I=gc(u,o,E)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_c(E,f),I=nv(l,a,E,f==="in"||f==="not-in");return Rt.create(d,f,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function mr(n,t,e){const r=t,i=ns("where",n);return rs._create(i,r,e)}class na extends ta{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new na(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ne.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const u of l)jh(a,u),a=Ys(a,u)}(t._query,e),new Ge(t.firestore,t.converter,Ys(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ra extends ea{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ra(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tr(o,a)}(t._query,this._field,this._direction);return new Ge(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new qn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function ov(n,t="asc"){const e=t,r=ns("orderBy",n);return ra._create(r,e)}class ia extends ea{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new ia(t,e,r)}_apply(t){return new Ge(t.firestore,t.converter,ki(t._query,this._limit,this._limitType))}}function av(n){return ia._create("limit",n,"F")}function gc(n,t,e){if(typeof(e=Ot(e))=="string"){if(e==="")throw new F(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zu(t)&&e.indexOf("/")!==-1)throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(gt.fromString(e));if(!G.isDocumentKey(r))throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fl(n,new G(r))}if(e instanceof Jt)return Fl(n,e._key);throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yi(e)}.`)}function _c(n,t){if(!Array.isArray(n)||n.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function jh(n,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class lv{convertValue(t,e="none"){switch(cn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return At(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ln(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw J()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return hn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Qo(At(t.latitude),At(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Po(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(vr(t));default:return null}}convertTimestamp(t){const e=ze(t);return new bt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=gt.fromString(t);pt(dh(r));const i=new Er(r.get(1),r.get(3)),o=new G(r.popFirst(5));return i.isEqual(e)||Te(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uv extends qh{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ns("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class vi extends uv{data(t={}){return super.data(t)}}class hv{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ui(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new vi(this._firestore,this._userDataWriter,r.key,r,new ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new vi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ui(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new vi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ui(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:dv(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class fv extends lv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,e)}}function An(n){n=un(n,Ge);const t=un(n.firestore,Br),e=Oh(t),r=new fv(t);return sv(n._query),Hy(e,n._query).then(i=>new hv(t,r,n,i))}function pv(n,t,e,...r){n=un(n,Jt);const i=un(n.firestore,Br),o=Jo(i);let a;return a=typeof(t=Ot(t))=="string"||t instanceof ts?ev(o,"updateDoc",n._key,t,e,r):tv(o,"updateDoc",n._key,t),oa(i,[a.toMutation(n._key,ee.exists(!0))])}function mv(n){return oa(un(n.firestore,Br),[new Vo(n._key,ee.none())])}function sa(n,t){const e=un(n.firestore,Br),r=Wo(n),i=cv(n.converter,t);return oa(e,[Zy(Jo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ee.exists(!1))]).then(()=>r)}function oa(n,t){return function(r,i){const o=new Fe;return r.asyncQueue.enqueueAndForget(async()=>ky(await zy(r),i,o)),o.promise}(Oh(n),t)}(function(t,e=!0){(function(i){Bn=i})(Un),Rn(new rn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Br(new lg(r.getProvider("auth-internal")),new dg(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Er(d.options.projectId,f)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ue(Ml,"4.6.3",t),Ue(Ml,"4.6.3","esm2017")})();const gv={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},zh=zc(gv),Li=ig(zh),Zt=Qy(zh),Gt=co(0),sr=co(0),ao=co(0),_v=""+new URL("../assets/logo.BgbdimHT.png",import.meta.url).href;function yc(n,t,e){const r=n.slice();return r[37]=t[e],r}function vc(n,t,e){const r=n.slice();return r[40]=t[e],r}function Ec(n){let t,e="추가",r,i,o="채택",a,l;return{c(){t=M("button"),t.textContent=e,r=tt(),i=M("button"),i.textContent=o,this.h()},l(u){t=L(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(t)!=="svelte-1lsf66u"&&(t.textContent=e),r=et(u),i=L(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(i)!=="svelte-gljqo6"&&(i.textContent=o),this.h()},h(){D(t,"class","top-right-button0 svelte-1coxngd"),D(i,"class","top-right-button svelte-1coxngd")},m(u,d){It(u,t,d),It(u,r,d),It(u,i,d),a||(l=[at(t,"click",n[11]),at(i,"click",n[9])],a=!0)},p:Dt,d(u){u&&(j(t),j(r),j(i)),a=!1,Mn(l)}}}function Ic(n){let t,e=qe(n[0]),r=[];for(let i=0;i<e.length;i+=1)r[i]=Tc(vc(n,e,i));return{c(){t=M("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){t=L(i,"DIV",{class:!0});var o=nt(t);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(j),this.h()},h(){D(t,"class","search-history svelte-1coxngd")},m(i,o){It(i,t,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null)},p(i,o){if(o[0]&131073){e=qe(i[0]);let a;for(a=0;a<e.length;a+=1){const l=vc(i,e,a);r[a]?r[a].p(l,o):(r[a]=Tc(l),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(i){i&&j(t),xi(r,i)}}}function Tc(n){let t,e=n[40]+"",r,i,o;function a(){return n[22](n[40])}return{c(){t=M("div"),r=ie(e),this.h()},l(l){t=L(l,"DIV",{class:!0});var u=nt(t);r=se(u,e),u.forEach(j),this.h()},h(){D(t,"class","history-item svelte-1coxngd")},m(l,u){It(l,t,u),V(t,r),i||(o=at(t,"click",a),i=!0)},p(l,u){n=l,u[0]&1&&e!==(e=n[40]+"")&&Ne(r,e)},d(l){l&&j(t),i=!1,o()}}}function wc(n){let t,e=n[37]+"",r,i,o;return{c(){t=M("div"),r=ie(e),this.h()},l(a){t=L(a,"DIV",{class:!0});var l=nt(t);r=se(l,e),l.forEach(j),this.h()},h(){D(t,"class","ranking-item svelte-1coxngd")},m(a,l){It(a,t,l),V(t,r),i||(o=at(t,"click",function(){Td(n[12](n[37]))&&n[12](n[37]).apply(this,arguments)}),i=!0)},p(a,l){n=a,l[0]&128&&e!==(e=n[37]+"")&&Ne(r,e)},d(a){a&&j(t),i=!1,o()}}}function Ac(n){let t,e,r,i,o="Close",a,l,u=!n[5]&&Rc();return{c(){t=M("div"),e=M("div"),u&&u.c(),r=tt(),i=M("button"),i.textContent=o,this.h()},l(d){t=L(d,"DIV",{class:!0});var f=nt(t);e=L(f,"DIV",{class:!0});var E=nt(e);u&&u.l(E),r=et(E),i=L(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(i)!=="svelte-au4vm5"&&(i.textContent=o),E.forEach(j),f.forEach(j),this.h()},h(){D(i,"class","close-button svelte-1coxngd"),D(e,"class","modal svelte-1coxngd"),D(t,"class","modal-background svelte-1coxngd")},m(d,f){It(d,t,f),V(t,e),u&&u.m(e,null),V(e,r),V(e,i),a||(l=[at(i,"click",n[16]),at(e,"click",Ad(n[18])),at(t,"click",n[16])],a=!0)},p(d,f){d[5]?u&&(u.d(1),u=null):u||(u=Rc(),u.c(),u.m(e,r))},d(d){d&&j(t),u&&u.d(),a=!1,Mn(l)}}}function Rc(n){let t,e="아직 추가되지 않은 단어입니다..";return{c(){t=M("div"),t.textContent=e,this.h()},l(r){t=L(r,"DIV",{class:!0,"data-svelte-h":!0}),Et(t)!=="svelte-1tgxuji"&&(t.textContent=e),this.h()},h(){D(t,"class","modal-explain svelte-1coxngd")},m(r,i){It(r,t,i)},d(r){r&&j(t)}}}function yv(n){let t,e,r,i,o,a,l="로그아웃",u,d,f="단어 신청",E,I,A,S,C,P,$,W="실시간 랭킹 TOP3",U,Q,z,q,v=n[6]=="host.wproject00@gmail.com"&&Ec(n),m=n[1]&&n[0].length>0&&Ic(n),_=qe(n[7]),y=[];for(let w=0;w<_.length;w+=1)y[w]=wc(yc(n,_,w));let T=n[2]&&Ac(n);return{c(){t=M("div"),e=M("img"),i=tt(),v&&v.c(),o=tt(),a=M("button"),a.textContent=l,u=tt(),d=M("button"),d.textContent=f,E=tt(),I=M("div"),A=M("input"),S=tt(),m&&m.c(),C=tt(),P=M("div"),$=M("h3"),$.textContent=W,U=tt();for(let w=0;w<y.length;w+=1)y[w].c();Q=tt(),T&&T.c(),this.h()},l(w){t=L(w,"DIV",{id:!0,class:!0});var g=nt(t);e=L(g,"IMG",{class:!0,src:!0,alt:!0}),i=et(g),v&&v.l(g),o=et(g),a=L(g,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(a)!=="svelte-2c08k3"&&(a.textContent=l),u=et(g),d=L(g,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(d)!=="svelte-82mn25"&&(d.textContent=f),E=et(g),I=L(g,"DIV",{class:!0});var x=nt(I);A=L(x,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),S=et(x),m&&m.l(x),x.forEach(j),C=et(g),P=L(g,"DIV",{class:!0});var K=nt(P);$=L(K,"H3",{"data-svelte-h":!0}),Et($)!=="svelte-1f2184c"&&($.textContent=W),U=et(K);for(let ht=0;ht<y.length;ht+=1)y[ht].l(K);K.forEach(j),Q=et(g),T&&T.l(g),g.forEach(j),this.h()},h(){D(e,"class","logo_img svelte-1coxngd"),Id(e.src,r=_v)||D(e,"src",r),D(e,"alt","logo"),D(a,"class","top-right-button2 svelte-1coxngd"),D(d,"class","top-right-button3 svelte-1coxngd"),D(A,"type","text"),D(A,"autocomplete","off"),D(A,"id","sb"),D(A,"class","search-bar svelte-1coxngd"),D(A,"placeholder","검색..."),A.value=n[3],D(I,"class","search-container svelte-1coxngd"),D(P,"class","ranking-list svelte-1coxngd"),D(t,"id","condiv"),D(t,"class","svelte-1coxngd")},m(w,g){It(w,t,g),V(t,e),V(t,i),v&&v.m(t,null),V(t,o),V(t,a),V(t,u),V(t,d),V(t,E),V(t,I),V(I,A),V(I,S),m&&m.m(I,null),V(t,C),V(t,P),V(P,$),V(P,U);for(let x=0;x<y.length;x+=1)y[x]&&y[x].m(P,null);V(t,Q),T&&T.m(t,null),z||(q=[at(a,"click",n[10]),at(d,"click",n[8]),at(A,"input",n[19]),at(A,"keydown",n[13]),at(A,"focus",n[14]),at(A,"blur",n[15]),at(A,"compositionstart",n[20]),at(A,"compositionend",n[21])],z=!0)},p(w,g){if(w[6]=="host.wproject00@gmail.com"?v?v.p(w,g):(v=Ec(w),v.c(),v.m(t,o)):v&&(v.d(1),v=null),g[0]&8&&A.value!==w[3]&&(A.value=w[3]),w[1]&&w[0].length>0?m?m.p(w,g):(m=Ic(w),m.c(),m.m(I,null)):m&&(m.d(1),m=null),g[0]&4224){_=qe(w[7]);let x;for(x=0;x<_.length;x+=1){const K=yc(w,_,x);y[x]?y[x].p(K,g):(y[x]=wc(K),y[x].c(),y[x].m(P,null))}for(;x<y.length;x+=1)y[x].d(1);y.length=_.length}w[2]?T?T.p(w,g):(T=Ac(w),T.c(),T.m(t,null)):T&&(T.d(1),T=null)},i:Dt,o:Dt,d(w){w&&j(t),v&&v.d(),m&&m.d(),xi(y,w),T&&T.d(),z=!1,Mn(q)}}}function vv(n,t,e){let r,i,o;Me(n,ao,H=>e(28,r=H)),Me(n,Gt,H=>e(29,i=H)),Me(n,sr,H=>e(30,o=H));let a=[],l=!1,u=!1,d="",f=!1,E=[],I=null,A="";lo(()=>{g(),v()});function S(){Ht(Gt,i=3,i)}function C(){Ht(Gt,i=4,i)}new Promise((H,ct)=>{du(Li,ut=>{ut?H(ut.email):ct("No user is signed in")})}).then(H=>e(6,A=H)).catch(H=>console.error(H));const $=async()=>{try{await Gp(Li)}catch(H){console.error("Error signing out:",H)}};function W(){Ht(Gt,i=1,i)}async function U(H){e(1,l=!1);const ct=await x(H);E=ct.matches,e(5,I=ct.exactMatch),console.log(E),I?(Ht(sr,o=I.title,o),I.value,I.explain,I.count+1,Ht(Gt,i=2,i)):Ht(sr,o="",o),e(2,u=!0)}async function Q(H){if(!f&&H.key==="Enter"&&(e(3,d=H.target.value.trim()),d)){q(d),H.target.value="",e(1,l=!1);const ct=await x(d);E=ct.matches,e(5,I=ct.exactMatch),console.log(E),I?(Ht(sr,o=I.title,o),I.value,I.explain,I.count+1,z(o),Ht(Gt,i=2,i)):Ht(sr,o="",o),e(2,u=!0)}}async function z(H){try{const ct=pr(ye(Zt,"datas"),mr("title","==",H)),ut=await An(ct);ut.forEach(async _t=>{const We=Wo(Zt,"datas",_t.id),re=_t.data().count||0;await pv(We,{count:re+1}),console.log(`Document with ID ${_t.id} updated successfully`)}),ut.empty&&console.log("No matching documents found.")}catch(ct){console.error("Error updating document: ",ct)}}function q(H){const ct=JSON.parse(sessionStorage.getItem("searchHistory"))||[],ut=[H,...ct.filter(_t=>_t!==H)];ut.length>3&&ut.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(ut)),e(0,a=ut)}function v(){const H=JSON.parse(sessionStorage.getItem("searchHistory"))||[];e(0,a=H)}function m(){e(1,l=!0)}function _(){setTimeout(()=>e(1,l=!1),100)}function y(){e(2,u=!1)}function T(H){document.getElementById("sb").value=H,e(1,l=!1)}let w=[];async function g(){try{const H=pr(ye(Zt,"datas"),ov("count","desc"),av(3)),ct=await An(H);e(7,w=ct.docs.map(ut=>ut.data().title))}catch(H){console.error("Error fetching documents: ",H)}}async function x(H){const ct=ye(Zt,"datas"),ut=pr(ct,mr("title",">=",H),mr("title","<=",H+"")),_t=await An(ut),We=[];let re=null;return _t.forEach(is=>{const Re=is.data();We.push(Re),Re.title===H&&(re=Re)}),Ht(ao,r=We,r),{exactMatch:re,matches:We}}function K(H){wd.call(this,n,H)}return[a,l,u,d,f,I,A,w,S,C,$,W,U,Q,m,_,y,T,K,H=>e(3,d=H.target.value),()=>e(4,f=!0),()=>e(4,f=!1),H=>T(H)]}class Ev extends Ln{constructor(t){super(),xn(this,t,vv,yv,On,{},null,[-1,-1])}}function bc(n){let t,e;return{c(){t=M("div"),e=ie(n[4]),this.h()},l(r){t=L(r,"DIV",{class:!0});var i=nt(t);e=se(i,n[4]),i.forEach(j),this.h()},h(){D(t,"class","error-message svelte-16h5zi1")},m(r,i){It(r,t,i),V(t,e)},p(r,i){i&16&&Ne(e,r[4])},d(r){r&&j(t)}}}function Iv(n){let t,e,r,i,o="Title",a,l,u,d,f,E="Value",I,A,S,C,P,$="Explain",W,U,Q,z,q,v,m,_,y,T="Cancel",w,g,x=n[4]&&bc(n);return{c(){t=M("div"),e=M("div"),r=M("div"),i=M("label"),i.textContent=o,a=tt(),l=M("input"),u=tt(),d=M("div"),f=M("label"),f.textContent=E,I=tt(),A=M("input"),S=tt(),C=M("div"),P=M("label"),P.textContent=$,W=tt(),U=M("input"),Q=tt(),x&&x.c(),z=tt(),q=M("div"),v=M("button"),m=ie("Submit"),_=tt(),y=M("button"),y.textContent=T,this.h()},l(K){t=L(K,"DIV",{class:!0});var ht=nt(t);e=L(ht,"DIV",{class:!0});var dt=nt(e);r=L(dt,"DIV",{class:!0});var Mt=nt(r);i=L(Mt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Et(i)!=="svelte-1weqgc2"&&(i.textContent=o),a=et(Mt),l=L(Mt,"INPUT",{class:!0,type:!0,id:!0}),Mt.forEach(j),u=et(dt),d=L(dt,"DIV",{class:!0});var Wt=nt(d);f=L(Wt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Et(f)!=="svelte-ry2554"&&(f.textContent=E),I=et(Wt),A=L(Wt,"INPUT",{class:!0,type:!0,id:!0}),Wt.forEach(j),S=et(dt),C=L(dt,"DIV",{class:!0});var H=nt(C);P=L(H,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Et(P)!=="svelte-2n35pc"&&(P.textContent=$),W=et(H),U=L(H,"INPUT",{class:!0,type:!0,id:!0}),H.forEach(j),Q=et(dt),x&&x.l(dt),z=et(dt),q=L(dt,"DIV",{class:!0});var ct=nt(q);v=L(ct,"BUTTON",{class:!0});var ut=nt(v);m=se(ut,"Submit"),ut.forEach(j),_=et(ct),y=L(ct,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(y)!=="svelte-9k415x"&&(y.textContent=T),ct.forEach(j),dt.forEach(j),ht.forEach(j),this.h()},h(){D(i,"class","form-label svelte-16h5zi1"),D(i,"for","title"),D(l,"class","form-input svelte-16h5zi1"),D(l,"type","text"),D(l,"id","title"),D(r,"class","form-group svelte-16h5zi1"),D(f,"class","form-label svelte-16h5zi1"),D(f,"for","value"),D(A,"class","form-input svelte-16h5zi1"),D(A,"type","text"),D(A,"id","value"),D(d,"class","form-group svelte-16h5zi1"),D(P,"class","form-label svelte-16h5zi1"),D(P,"for","explain"),D(U,"class","form-input svelte-16h5zi1"),D(U,"type","text"),D(U,"id","explain"),D(C,"class","form-group svelte-16h5zi1"),D(v,"class","form-button svelte-16h5zi1"),v.disabled=n[3],D(y,"class","form-button cancel-button svelte-16h5zi1"),D(q,"class","form-buttons svelte-16h5zi1"),D(e,"class","form-content svelte-16h5zi1"),D(t,"class","form-container svelte-16h5zi1")},m(K,ht){It(K,t,ht),V(t,e),V(e,r),V(r,i),V(r,a),V(r,l),wt(l,n[0]),V(e,u),V(e,d),V(d,f),V(d,I),V(d,A),wt(A,n[1]),V(e,S),V(e,C),V(C,P),V(C,W),V(C,U),wt(U,n[2]),V(e,Q),x&&x.m(e,null),V(e,z),V(e,q),V(q,v),V(v,m),V(q,_),V(q,y),w||(g=[at(l,"input",n[7]),at(A,"input",n[8]),at(U,"input",n[9]),at(v,"click",n[5]),at(y,"click",n[6])],w=!0)},p(K,[ht]){ht&1&&l.value!==K[0]&&wt(l,K[0]),ht&2&&A.value!==K[1]&&wt(A,K[1]),ht&4&&U.value!==K[2]&&wt(U,K[2]),K[4]?x?x.p(K,ht):(x=bc(K),x.c(),x.m(e,z)):x&&(x.d(1),x=null),ht&8&&(v.disabled=K[3])},i:Dt,o:Dt,d(K){K&&j(t),x&&x.d(),w=!1,Mn(g)}}}function Tv(n,t,e){let r;Me(n,Gt,S=>e(10,r=S));let i="",o="",a="",l=!1,u="";const d=async()=>{if(!i||!o||!a){e(4,u="All fields are required!");return}e(3,l=!0),e(4,u="");try{if(!(await An(pr(ye(Zt,"datas"),mr("title","==",i)))).empty){e(4,u="Title already exists! Please choose a different title.");return}await sa(ye(Zt,"datas"),{title:i,value:o,explain:a,count:0}),e(0,i=""),e(1,o=""),e(2,a=""),Ht(Gt,r=0,r)}catch(S){console.error("Error adding document: ",S),e(4,u="Error adding document!")}finally{e(3,l=!1)}},f=()=>{e(0,i=""),e(1,o=""),e(2,a=""),e(4,u=""),Ht(Gt,r=0,r)};function E(){i=this.value,e(0,i)}function I(){o=this.value,e(1,o)}function A(){a=this.value,e(2,a)}return[i,o,a,l,u,d,f,E,I,A]}class wv extends Ln{constructor(t){super(),xn(this,t,Tv,Iv,On,{})}}function Sc(n,t,e){const r=n.slice();return r[4]=t[e],r}function Pc(n){let t,e,r=n[4].title+"",i,o,a,l=n[4].value+"",u,d,f,E=n[4].explain+"",I,A,S,C,P="검색수:",$,W=n[4].count+"",U,Q;return{c(){t=M("div"),e=M("h3"),i=ie(r),o=tt(),a=M("p"),u=ie(l),d=tt(),f=M("p"),I=ie(E),A=tt(),S=M("p"),C=M("strong"),C.textContent=P,$=tt(),U=ie(W),Q=tt(),this.h()},l(z){t=L(z,"DIV",{class:!0});var q=nt(t);e=L(q,"H3",{class:!0});var v=nt(e);i=se(v,r),v.forEach(j),o=et(q),a=L(q,"P",{class:!0});var m=nt(a);u=se(m,l),m.forEach(j),d=et(q),f=L(q,"P",{class:!0});var _=nt(f);I=se(_,E),_.forEach(j),A=et(q),S=L(q,"P",{class:!0});var y=nt(S);C=L(y,"STRONG",{"data-svelte-h":!0}),Et(C)!=="svelte-14ncqy5"&&(C.textContent=P),$=et(y),U=se(y,W),y.forEach(j),Q=et(q),q.forEach(j),this.h()},h(){D(e,"class","svelte-dttkti"),D(a,"class","svelte-dttkti"),D(f,"class","svelte-dttkti"),D(S,"class","count svelte-dttkti"),D(t,"class","box svelte-dttkti")},m(z,q){It(z,t,q),V(t,e),V(e,i),V(t,o),V(t,a),V(a,u),V(t,d),V(t,f),V(f,I),V(t,A),V(t,S),V(S,C),V(S,$),V(S,U),V(t,Q)},p(z,q){q&1&&r!==(r=z[4].title+"")&&Ne(i,r),q&1&&l!==(l=z[4].value+"")&&Ne(u,l),q&1&&E!==(E=z[4].explain+"")&&Ne(I,E),q&1&&W!==(W=z[4].count+"")&&Ne(U,W)},d(z){z&&j(t)}}}function Av(n){let t,e,r,i,o,a="Main",l,u,d,f,E=qe(n[0]),I=[];for(let A=0;A<E.length;A+=1)I[A]=Pc(Sc(n,E,A));return{c(){t=M("div"),e=M("div"),r=tt(),i=M("div"),o=M("button"),o.textContent=a,l=tt(),u=M("div");for(let A=0;A<I.length;A+=1)I[A].c();this.h()},l(A){t=L(A,"DIV",{class:!0});var S=nt(t);e=L(S,"DIV",{id:!0,class:!0}),nt(e).forEach(j),r=et(S),i=L(S,"DIV",{class:!0});var C=nt(i);o=L(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(o)!=="svelte-8azga8"&&(o.textContent=a),C.forEach(j),l=et(S),u=L(S,"DIV",{class:!0});var P=nt(u);for(let $=0;$<I.length;$+=1)I[$].l(P);P.forEach(j),S.forEach(j),this.h()},h(){D(e,"id","bb"),D(e,"class","svelte-dttkti"),D(o,"class","close-button svelte-dttkti"),D(i,"class","close-button_div svelte-dttkti"),D(u,"class","container svelte-dttkti"),D(t,"class","bbd svelte-dttkti")},m(A,S){It(A,t,S),V(t,e),V(t,r),V(t,i),V(i,o),V(t,l),V(t,u);for(let C=0;C<I.length;C+=1)I[C]&&I[C].m(u,null);d||(f=at(o,"click",n[1]),d=!0)},p(A,[S]){if(S&1){E=qe(A[0]);let C;for(C=0;C<E.length;C+=1){const P=Sc(A,E,C);I[C]?I[C].p(P,S):(I[C]=Pc(P),I[C].c(),I[C].m(u,null))}for(;C<I.length;C+=1)I[C].d(1);I.length=E.length}},i:Dt,o:Dt,d(A){A&&j(t),xi(I,A),d=!1,f()}}}function Rv(n,t,e){let r,i;return Me(n,Gt,a=>e(2,r=a)),Me(n,ao,a=>e(0,i=a)),[i,()=>{Ht(Gt,r=0,r)}]}class bv extends Ln{constructor(t){super(),xn(this,t,Rv,Av,On,{})}}function Cc(n){let t,e;return{c(){t=M("div"),e=ie(n[4]),this.h()},l(r){t=L(r,"DIV",{class:!0});var i=nt(t);e=se(i,n[4]),i.forEach(j),this.h()},h(){D(t,"class","error-message svelte-urqb75")},m(r,i){It(r,t,i),V(t,e)},p(r,i){i&16&&Ne(e,r[4])},d(r){r&&j(t)}}}function Sv(n){let t,e,r,i,o="신조어",a,l,u,d,f,E="신조어 뜻",I,A,S,C,P,$="신조어의 설명",W,U,Q,z,q,v,m,_,y,T="취소",w,g,x=n[4]&&Cc(n);return{c(){t=M("div"),e=M("div"),r=M("div"),i=M("label"),i.textContent=o,a=tt(),l=M("input"),u=tt(),d=M("div"),f=M("label"),f.textContent=E,I=tt(),A=M("input"),S=tt(),C=M("div"),P=M("label"),P.textContent=$,W=tt(),U=M("input"),Q=tt(),x&&x.c(),z=tt(),q=M("div"),v=M("button"),m=ie("보내기"),_=tt(),y=M("button"),y.textContent=T,this.h()},l(K){t=L(K,"DIV",{class:!0});var ht=nt(t);e=L(ht,"DIV",{class:!0});var dt=nt(e);r=L(dt,"DIV",{class:!0});var Mt=nt(r);i=L(Mt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Et(i)!=="svelte-1xvfvjg"&&(i.textContent=o),a=et(Mt),l=L(Mt,"INPUT",{class:!0,type:!0,id:!0}),Mt.forEach(j),u=et(dt),d=L(dt,"DIV",{class:!0});var Wt=nt(d);f=L(Wt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Et(f)!=="svelte-1iv6t5o"&&(f.textContent=E),I=et(Wt),A=L(Wt,"INPUT",{class:!0,type:!0,id:!0}),Wt.forEach(j),S=et(dt),C=L(dt,"DIV",{class:!0});var H=nt(C);P=L(H,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Et(P)!=="svelte-lyiets"&&(P.textContent=$),W=et(H),U=L(H,"INPUT",{class:!0,type:!0,id:!0}),H.forEach(j),Q=et(dt),x&&x.l(dt),z=et(dt),q=L(dt,"DIV",{class:!0});var ct=nt(q);v=L(ct,"BUTTON",{class:!0});var ut=nt(v);m=se(ut,"보내기"),ut.forEach(j),_=et(ct),y=L(ct,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(y)!=="svelte-1fn0s3j"&&(y.textContent=T),ct.forEach(j),dt.forEach(j),ht.forEach(j),this.h()},h(){D(i,"class","form-label svelte-urqb75"),D(i,"for","title"),D(l,"class","form-input svelte-urqb75"),D(l,"type","text"),D(l,"id","title"),D(r,"class","form-group svelte-urqb75"),D(f,"class","form-label svelte-urqb75"),D(f,"for","value"),D(A,"class","form-input svelte-urqb75"),D(A,"type","text"),D(A,"id","value"),D(d,"class","form-group svelte-urqb75"),D(P,"class","form-label svelte-urqb75"),D(P,"for","explain"),D(U,"class","form-input svelte-urqb75"),D(U,"type","text"),D(U,"id","explain"),D(C,"class","form-group svelte-urqb75"),D(v,"class","form-button svelte-urqb75"),v.disabled=n[3],D(y,"class","form-button cancel-button svelte-urqb75"),D(q,"class","form-buttons svelte-urqb75"),D(e,"class","form-content svelte-urqb75"),D(t,"class","form-container svelte-urqb75")},m(K,ht){It(K,t,ht),V(t,e),V(e,r),V(r,i),V(r,a),V(r,l),wt(l,n[0]),V(e,u),V(e,d),V(d,f),V(d,I),V(d,A),wt(A,n[1]),V(e,S),V(e,C),V(C,P),V(C,W),V(C,U),wt(U,n[2]),V(e,Q),x&&x.m(e,null),V(e,z),V(e,q),V(q,v),V(v,m),V(q,_),V(q,y),w||(g=[at(l,"input",n[7]),at(A,"input",n[8]),at(U,"input",n[9]),at(v,"click",n[5]),at(y,"click",n[6])],w=!0)},p(K,[ht]){ht&1&&l.value!==K[0]&&wt(l,K[0]),ht&2&&A.value!==K[1]&&wt(A,K[1]),ht&4&&U.value!==K[2]&&wt(U,K[2]),K[4]?x?x.p(K,ht):(x=Cc(K),x.c(),x.m(e,z)):x&&(x.d(1),x=null),ht&8&&(v.disabled=K[3])},i:Dt,o:Dt,d(K){K&&j(t),x&&x.d(),w=!1,Mn(g)}}}function Pv(n,t,e){let r;Me(n,Gt,S=>e(10,r=S));let i="",o="",a="",l=!1,u="";const d=async()=>{if(!i||!o||!a){e(4,u="All fields are required!");return}e(3,l=!0),e(4,u="");try{if(!(await An(pr(ye(Zt,"beta"),mr("title","==",i)))).empty){e(4,u="Title already exists! Please choose a different title.");return}await sa(ye(Zt,"beta"),{title:i,value:o,explain:a,count:0}),e(0,i=""),e(1,o=""),e(2,a=""),Ht(Gt,r=0,r)}catch(S){console.error("Error adding document: ",S),e(4,u="Error adding document!")}finally{e(3,l=!1)}},f=()=>{e(0,i=""),e(1,o=""),e(2,a=""),e(4,u=""),Ht(Gt,r=0,r)};function E(){i=this.value,e(0,i)}function I(){o=this.value,e(1,o)}function A(){a=this.value,e(2,a)}return[i,o,a,l,u,d,f,E,I,A]}class Cv extends Ln{constructor(t){super(),xn(this,t,Pv,Sv,On,{})}}function kc(n,t,e){const r=n.slice();return r[7]=t[e],r[8]=t,r[9]=e,r}function Dc(n){let t,e,r,i,o,a,l,u,d,f,E="Click Me",I,A,S;function C(){n[2].call(e,n[8],n[9])}function P(){n[3].call(i,n[8],n[9])}function $(){n[4].call(a,n[8],n[9])}function W(){n[5].call(u,n[8],n[9])}function U(){return n[6](n[7])}return{c(){t=M("div"),e=M("input"),r=tt(),i=M("input"),o=tt(),a=M("input"),l=tt(),u=M("input"),d=tt(),f=M("button"),f.textContent=E,I=tt(),this.h()},l(Q){t=L(Q,"DIV",{class:!0});var z=nt(t);e=L(z,"INPUT",{type:!0,class:!0}),r=et(z),i=L(z,"INPUT",{type:!0,class:!0}),o=et(z),a=L(z,"INPUT",{type:!0,class:!0}),l=et(z),u=L(z,"INPUT",{type:!0,class:!0}),d=et(z),f=L(z,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(f)!=="svelte-gv7xxv"&&(f.textContent=E),I=et(z),z.forEach(j),this.h()},h(){D(e,"type","text"),D(e,"class","svelte-js9v41"),D(i,"type","text"),D(i,"class","svelte-js9v41"),D(a,"type","text"),D(a,"class","svelte-js9v41"),D(u,"type","number"),D(u,"class","svelte-js9v41"),D(f,"class","svelte-js9v41"),D(t,"class","item-box svelte-js9v41")},m(Q,z){It(Q,t,z),V(t,e),wt(e,n[7].title),V(t,r),V(t,i),wt(i,n[7].value),V(t,o),V(t,a),wt(a,n[7].explain),V(t,l),V(t,u),wt(u,n[7].count),V(t,d),V(t,f),V(t,I),A||(S=[at(e,"input",C),at(i,"input",P),at(a,"input",$),at(u,"input",W),at(f,"click",U)],A=!0)},p(Q,z){n=Q,z&1&&e.value!==n[7].title&&wt(e,n[7].title),z&1&&i.value!==n[7].value&&wt(i,n[7].value),z&1&&a.value!==n[7].explain&&wt(a,n[7].explain),z&1&&Vc(u.value)!==n[7].count&&wt(u,n[7].count)},d(Q){Q&&j(t),A=!1,Mn(S)}}}function kv(n){let t,e=qe(n[0]),r=[];for(let i=0;i<e.length;i+=1)r[i]=Dc(kc(n,e,i));return{c(){t=M("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){t=L(i,"DIV",{class:!0});var o=nt(t);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(j),this.h()},h(){D(t,"class","container svelte-js9v41")},m(i,o){It(i,t,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null)},p(i,[o]){if(o&3){e=qe(i[0]);let a;for(a=0;a<e.length;a+=1){const l=kc(i,e,a);r[a]?r[a].p(l,o):(r[a]=Dc(l),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},i:Dt,o:Dt,d(i){i&&j(t),xi(r,i)}}}function Dv(n,t,e){let r=[];lo(async()=>{const f=await An(ye(Zt,"beta"));e(0,r=f.docs.map(E=>({id:E.id,...E.data()})))});const i=async(f,E,I,A,S)=>{try{await sa(ye(Zt,"datas"),{title:E,value:I,explain:A,count:S}),await mv(Wo(Zt,"beta",f)),console.log("Document successfully written and deleted!"),e(0,r=r.filter(C=>C.id!==f))}catch(C){console.error("Error adding or deleting document: ",C)}};function o(f,E){f[E].title=this.value,e(0,r)}function a(f,E){f[E].value=this.value,e(0,r)}function l(f,E){f[E].explain=this.value,e(0,r)}function u(f,E){f[E].count=Vc(this.value),e(0,r)}return[r,i,o,a,l,u,f=>i(f.id,f.title,f.value,f.explain,f.count)]}class Vv extends Ln{constructor(t){super(),xn(this,t,Dv,kv,On,{})}}function Nv(n){let t,e,r,i="로그인",o,a,l="Google",u,d;return{c(){t=M("div"),e=M("div"),r=M("h1"),r.textContent=i,o=tt(),a=M("button"),a.textContent=l,this.h()},l(f){t=L(f,"DIV",{id:!0,class:!0});var E=nt(t);e=L(E,"DIV",{class:!0});var I=nt(e);r=L(I,"H1",{class:!0,"data-svelte-h":!0}),Et(r)!=="svelte-1bvi8l2"&&(r.textContent=i),o=et(I),a=L(I,"BUTTON",{class:!0,"data-svelte-h":!0}),Et(a)!=="svelte-g8tqx5"&&(a.textContent=l),I.forEach(j),E.forEach(j),this.h()},h(){D(r,"class","svelte-gqutdq"),D(a,"class","svelte-gqutdq"),D(e,"class","login-container svelte-gqutdq"),D(t,"id","L_body"),D(t,"class","svelte-gqutdq")},m(f,E){It(f,t,E),V(t,e),V(e,r),V(e,o),V(e,a),u||(d=at(a,"click",n[3]),u=!0)},p:Dt,i:Dt,o:Dt,d(f){f&&j(t),u=!1,d()}}}function Ov(n){let t,e,r,i;const o=[Bv,Fv,Uv,xv,Lv],a=[];function l(u,d){return u[2]==0?0:u[2]==1?1:u[2]==2?2:u[2]==3?3:u[2]==4?4:-1}return~(t=l(n))&&(e=a[t]=o[t](n)),{c(){e&&e.c(),r=ol()},l(u){e&&e.l(u),r=ol()},m(u,d){~t&&a[t].m(u,d),It(u,r,d),i=!0},p(u,d){let f=t;t=l(u),t!==f&&(e&&(Oc(),ve(a[f],1,1,()=>{a[f]=null}),Nc()),~t?(e=a[t],e||(e=a[t]=o[t](u),e.c()),Ee(e,1),e.m(r.parentNode,r)):e=null)},i(u){i||(Ee(e),i=!0)},o(u){ve(e),i=!1},d(u){u&&j(r),~t&&a[t].d(u)}}}function Mv(n){let t,e="[ Developer : G37 ]";return{c(){t=M("div"),t.textContent=e,this.h()},l(r){t=L(r,"DIV",{class:!0,"data-svelte-h":!0}),Et(t)!=="svelte-67okfr"&&(t.textContent=e),this.h()},h(){D(t,"class","loading-screen svelte-gqutdq")},m(r,i){It(r,t,i)},p:Dt,i:Dt,o:Dt,d(r){r&&j(t)}}}function Lv(n){let t,e;return t=new Vv({}),{c(){Rr(t.$$.fragment)},l(r){br(t.$$.fragment,r)},m(r,i){Sr(t,r,i),e=!0},i(r){e||(Ee(t.$$.fragment,r),e=!0)},o(r){ve(t.$$.fragment,r),e=!1},d(r){Pr(t,r)}}}function xv(n){let t,e;return t=new Cv({}),{c(){Rr(t.$$.fragment)},l(r){br(t.$$.fragment,r)},m(r,i){Sr(t,r,i),e=!0},i(r){e||(Ee(t.$$.fragment,r),e=!0)},o(r){ve(t.$$.fragment,r),e=!1},d(r){Pr(t,r)}}}function Uv(n){let t,e;return t=new bv({}),{c(){Rr(t.$$.fragment)},l(r){br(t.$$.fragment,r)},m(r,i){Sr(t,r,i),e=!0},i(r){e||(Ee(t.$$.fragment,r),e=!0)},o(r){ve(t.$$.fragment,r),e=!1},d(r){Pr(t,r)}}}function Fv(n){let t,e;return t=new wv({}),{c(){Rr(t.$$.fragment)},l(r){br(t.$$.fragment,r)},m(r,i){Sr(t,r,i),e=!0},i(r){e||(Ee(t.$$.fragment,r),e=!0)},o(r){ve(t.$$.fragment,r),e=!1},d(r){Pr(t,r)}}}function Bv(n){let t,e;return t=new Ev({}),{c(){Rr(t.$$.fragment)},l(r){br(t.$$.fragment,r)},m(r,i){Sr(t,r,i),e=!0},i(r){e||(Ee(t.$$.fragment,r),e=!0)},o(r){ve(t.$$.fragment,r),e=!1},d(r){Pr(t,r)}}}function qv(n){let t,e,r,i;const o=[Mv,Ov,Nv],a=[];function l(u,d){return u[1]?0:u[0]?1:2}return e=l(n),r=a[e]=o[e](n),{c(){t=M("main"),r.c(),this.h()},l(u){t=L(u,"MAIN",{class:!0});var d=nt(t);r.l(d),d.forEach(j),this.h()},h(){D(t,"class","svelte-gqutdq")},m(u,d){It(u,t,d),a[e].m(t,null),i=!0},p(u,[d]){let f=e;e=l(u),e===f?a[e].p(u,d):(Oc(),ve(a[f],1,1,()=>{a[f]=null}),Nc(),r=a[e],r?r.p(u,d):(r=a[e]=o[e](u),r.c()),Ee(r,1),r.m(t,null))},i(u){i||(Ee(r),i=!0)},o(u){ve(r),i=!1},d(u){u&&j(t),a[e].d()}}}function jv(n,t,e){let r;Me(n,Gt,l=>e(2,r=l)),console.log(r);let i=null,o=!0;return lo(()=>{du(Li,l=>{e(0,i=l),e(1,o=!1)})}),[i,o,r,async()=>{const l=new fe;try{await fm(Li,l)}catch(u){console.error("Error signing in:",u)}}]}class Qv extends Ln{constructor(t){super(),xn(this,t,jv,qv,On,{})}}export{Qv as component};
