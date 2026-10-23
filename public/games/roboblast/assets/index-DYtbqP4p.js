(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,te=1030,ne=1031,re=1033,O=33776,ie=33777,k=33778,ae=33779,A=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37488,j=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,Ie=2300,M=2301,Le=2302,Re=2303,ze=2400,N=2401,Be=2402,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=35048,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function rt(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function it(...e){let t=e.join(` `);t in et||(et[t]=!0,P(...e))}function at(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ot={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},st=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ct=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),lt=1234567,ut=Math.PI/180,dt=180/Math.PI;function ft(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ct[e&255]+ct[e>>8&255]+ct[e>>16&255]+ct[e>>24&255]+`-`+ct[t&255]+ct[t>>8&255]+`-`+ct[t>>16&15|64]+ct[t>>24&255]+`-`+ct[n&63|128]+ct[n>>8&255]+`-`+ct[n>>16&255]+ct[n>>24&255]+ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]).toLowerCase()}function F(e,t,n){return Math.max(t,Math.min(n,e))}function pt(e,t){return(e%t+t)%t}function mt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ht(e,t,n){return e===t?0:(n-e)/(t-e)}function gt(e,t,n){return(1-n)*e+n*t}function _t(e,t,n,r){return gt(e,t,1-Math.exp(-n*r))}function vt(e,t=1){return t-Math.abs(pt(e,t*2)-t)}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function St(e,t){return e+Math.random()*(t-e)}function Ct(e){return e*(.5-Math.random())}function wt(e){e!==void 0&&(lt=e);let t=lt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tt(e){return e*ut}function Et(e){return e*dt}function Dt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ot(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function kt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function At(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Nt={DEG2RAD:ut,RAD2DEG:dt,generateUUID:ft,clamp:F,euclideanModulo:pt,mapLinear:mt,inverseLerp:ht,lerp:gt,damp:_t,pingpong:vt,smoothstep:yt,smootherstep:bt,randInt:xt,randFloat:St,randFloatSpread:Ct,seededRandom:wt,degToRad:Tt,radToDeg:Et,isPowerOfTwo:Dt,ceilPowerOfTwo:Ot,floorPowerOfTwo:kt,setQuaternionFromProperEuler:At,normalize:Mt,denormalize:jt},I=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(F(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(It.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(It.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ft.copy(this).projectOnVector(e),this.sub(Ft)}reflect(e){return this.sub(Ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ft=new L,It=new Pt,Lt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return it(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Rt.makeScale(e,t)),this}rotate(e){return it(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Rt.makeRotation(-e)),this}translate(e,t){return it(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Rt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rt=new Lt,zt=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bt=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ut(e.r),e.g=Ut(e.g),e.b=Ut(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return it(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return it(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:zt,fromXYZ:Bt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:zt,fromXYZ:Bt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Ht=Vt();function Ut(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Wt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Gt,Kt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gt===void 0&&(Gt=Qe(`canvas`)),Gt.width=e.width,Gt.height=e.height;let t=Gt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Gt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ut(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ut(t[e]/255)*255):t[e]=Ut(t[e]);return{data:t,width:e.width,height:e.height}}return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},qt=0,Jt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=ft(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Yt(r[t].image)):e.push(Yt(r[t]))}else e=Yt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Yt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Kt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var Xt=0,Zt=new L,Qt=class r extends st{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=ft(),this.name=``,this.source=new Jt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zt).x}get height(){return this.source.getSize(Zt).y}get depth(){return this.source.getSize(Zt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=300,Qt.DEFAULT_ANISOTROPY=1;var $t=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this.w=F(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this.w=F(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},en=class extends st{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let r=new Qt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Jt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},tn=class extends en{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nn=class extends Qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},rn=class extends Qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},an=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/on.setFromMatrixColumn(e,0).length(),i=1/on.setFromMatrixColumn(e,1).length(),a=1/on.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cn,e,ln)}lookAt(e,t,n){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),un.crossVectors(n,fn),un.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),un.crossVectors(n,fn)),un.normalize(),dn.crossVectors(fn,un),r[0]=un.x,r[4]=dn.x,r[8]=fn.x,r[1]=un.y,r[5]=dn.y,r[9]=fn.y,r[2]=un.z,r[6]=dn.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],ne=r[6],re=r[10],O=r[14],ie=r[3],k=r[7],ae=r[11],A=r[15];return i[0]=a*x+o*T+s*te+c*ie,i[4]=a*S+o*E+s*ne+c*k,i[8]=a*C+o*D+s*re+c*ae,i[12]=a*w+o*ee+s*O+c*A,i[1]=l*x+u*T+d*te+f*ie,i[5]=l*S+u*E+d*ne+f*k,i[9]=l*C+u*D+d*re+f*ae,i[13]=l*w+u*ee+d*O+f*A,i[2]=p*x+m*T+h*te+g*ie,i[6]=p*S+m*E+h*ne+g*k,i[10]=p*C+m*D+h*re+g*ae,i[14]=p*w+m*ee+h*O+g*A,i[3]=_*x+v*T+y*te+b*ie,i[7]=_*S+v*E+y*ne+b*k,i[11]=_*C+v*D+y*re+b*ae,i[15]=_*w+v*ee+y*O+b*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ne=1/te;return e[0]=(o*ee-s*D+c*E)*ne,e[1]=(r*D-n*ee-i*E)*ne,e[2]=(m*S-h*x+g*b)*ne,e[3]=(d*x-u*S-f*b)*ne,e[4]=(s*T-a*ee-c*w)*ne,e[5]=(t*ee-r*T+i*w)*ne,e[6]=(h*y-p*S-g*v)*ne,e[7]=(l*S-d*y+f*v)*ne,e[8]=(a*D-o*T+c*C)*ne,e[9]=(n*T-t*D-i*C)*ne,e[10]=(p*x-m*y+g*_)*ne,e[11]=(u*y-l*x-f*_)*ne,e[12]=(o*w-a*E-s*C)*ne,e[13]=(t*E-n*w+r*C)*ne,e[14]=(m*v-p*b-h*_)*ne,e[15]=(l*b-u*v+d*_)*ne,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=on.set(r[0],r[1],r[2]).length(),o=on.set(r[4],r[5],r[6]).length(),s=on.set(r[8],r[9],r[10]).length();i<0&&(a=-a),sn.copy(this);let c=1/a,l=1/o,u=1/s;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=l,sn.elements[5]*=l,sn.elements[6]*=l,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},on=new L,sn=new an,cn=new L(0,0,0),ln=new L(1,1,1),un=new L,dn=new L,fn=new L,pn=new an,mn=new Pt,hn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(F(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-F(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(F(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-F(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(F(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-F(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mn.setFromEuler(this),this.setFromQuaternion(mn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER=`XYZ`;var gn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},_n=0,vn=new L,yn=new Pt,bn=new an,xn=new L,Sn=new L,Cn=new L,wn=new Pt,Tn=new L(1,0,0),En=new L(0,1,0),Dn=new L(0,0,1),On={type:`added`},kn={type:`removed`},An={type:`childadded`,child:null},jn={type:`childremoved`,child:null},Mn=class e extends st{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_n++}),this.uuid=ft(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new hn,r=new Pt,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new an},normalMatrix:{value:new Lt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(Tn,e)}rotateY(e){return this.rotateOnAxis(En,e)}rotateZ(e){return this.rotateOnAxis(Dn,e)}translateOnAxis(e,t){return vn.copy(e).applyQuaternion(this.quaternion),this.position.add(vn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tn,e)}translateY(e){return this.translateOnAxis(En,e)}translateZ(e){return this.translateOnAxis(Dn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xn.copy(e):xn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Sn,xn,this.up):bn.lookAt(xn,Sn,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),yn.setFromRotationMatrix(bn),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(rt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null):rt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,e,Cn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,wn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Mn.DEFAULT_UP=new L(0,1,0),Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var R=class extends Mn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Nn={type:`move`},Pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new R,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new R,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new R,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new R;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ln={h:0,s:0,l:0};function Rn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var zn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=pt(e,1),t=F(t,0,1),n=F(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Rn(i,r,e+1/3),this.g=Rn(i,r,e),this.b=Rn(i,r,e-1/3)}return Ht.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Fn[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ut(e.r),this.g=Ut(e.g),this.b=Ut(e.b),this}copyLinearToSRGB(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Ht.workingToColorSpace(Bn.copy(this),e),Math.round(F(Bn.r*255,0,255))*65536+Math.round(F(Bn.g*255,0,255))*256+Math.round(F(Bn.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,r=Bn.g,i=Bn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ht.workingColorSpace){return Ht.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=He){Ht.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,r=Bn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Ln);let n=gt(In.h,Ln.h,t),r=gt(In.s,Ln.s,t),i=gt(In.l,Ln.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new zn;zn.NAMES=Fn;var Vn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new zn(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hn=class extends Mn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new L,Wn=new L,Gn=new L,Kn=new L,qn=new L,Jn=new L,Yn=new L,Xn=new L,Zn=new L,Qn=new L,$n=new $t,er=new $t,tr=new $t,nr=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Un.subVectors(r,t),Wn.subVectors(n,t),Gn.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(Wn),s=Un.dot(Gn),c=Wn.dot(Wn),l=Wn.dot(Gn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)!==null&&Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Kn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Kn.x),s.addScaledVector(a,Kn.y),s.addScaledVector(o,Kn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return $n.setScalar(0),er.setScalar(0),tr.setScalar(0),$n.fromBufferAttribute(e,t),er.fromBufferAttribute(e,n),tr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($n,i.x),a.addScaledVector(er,i.y),a.addScaledVector(tr,i.z),a}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),Wn.subVectors(e,t),Un.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Un.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;qn.subVectors(r,n),Jn.subVectors(i,n),Xn.subVectors(e,n);let s=qn.dot(Xn),c=Jn.dot(Xn);if(s<=0&&c<=0)return t.copy(n);Zn.subVectors(e,r);let l=qn.dot(Zn),u=Jn.dot(Zn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(qn,a);Qn.subVectors(e,i);let f=qn.dot(Qn),p=Jn.dot(Qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Jn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Yn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Yn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(qn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ar):ar.fromBufferAttribute(r,t),ar.applyMatrix4(e.matrixWorld),this.expandByPoint(ar);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),mr.subVectors(this.max,pr),sr.subVectors(e.a,pr),cr.subVectors(e.b,pr),lr.subVectors(e.c,pr),ur.subVectors(cr,sr),dr.subVectors(lr,cr),fr.subVectors(sr,lr);let t=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-fr.z,fr.y,ur.z,0,-ur.x,dr.z,0,-dr.x,fr.z,0,-fr.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-fr.y,fr.x,0];return!_r(t,sr,cr,lr,mr)||(t=[1,0,0,0,1,0,0,0,1],!_r(t,sr,cr,lr,mr))?!1:(hr.crossVectors(ur,dr),t=[hr.x,hr.y,hr.z],_r(t,sr,cr,lr,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ir=[new L,new L,new L,new L,new L,new L,new L,new L],ar=new L,or=new rr,sr=new L,cr=new L,lr=new L,ur=new L,dr=new L,fr=new L,pr=new L,mr=new L,hr=new L,gr=new L;function _r(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){gr.fromArray(e,a);let o=i.x*Math.abs(gr.x)+i.y*Math.abs(gr.y)+i.z*Math.abs(gr.z),s=t.dot(gr),c=n.dot(gr),l=r.dot(gr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var vr=new L,yr=new I,br=0,xr=class extends st{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:br++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix4(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyNormalMatrix(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.transformDirection(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Sr=class extends xr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Cr=class extends xr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wr=class extends xr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tr=new rr,Er=new L,Dr=new L,Or=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Tr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Er,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Dr)),this.expandByPoint(Er.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kr=0,Ar=new an,jr=new Mn,Mr=new L,Nr=new rr,Pr=new rr,Fr=new L,Ir=class e extends st{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kr++}),this.uuid=ft(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?Cr:Sr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Lt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ar.makeRotationFromQuaternion(e),this.applyMatrix4(Ar),this}rotateX(e){return Ar.makeRotationX(e),this.applyMatrix4(Ar),this}rotateY(e){return Ar.makeRotationY(e),this.applyMatrix4(Ar),this}rotateZ(e){return Ar.makeRotationZ(e),this.applyMatrix4(Ar),this}translate(e,t,n){return Ar.makeTranslation(e,t,n),this.applyMatrix4(Ar),this}scale(e,t,n){return Ar.makeScale(e,t,n),this.applyMatrix4(Ar),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new wr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)rt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Nr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(this.boundingBox.min,Nr.min),this.boundingBox.expandByPoint(Fr),Fr.addVectors(this.boundingBox.max,Nr.max),this.boundingBox.expandByPoint(Fr)):(this.boundingBox.expandByPoint(Nr.min),this.boundingBox.expandByPoint(Nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)rt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);else if(e){let n=this.boundingSphere.center;if(Nr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(Nr.min,Pr.min),Nr.expandByPoint(Fr),Fr.addVectors(Nr.max,Pr.max),Nr.expandByPoint(Fr)):(Nr.expandByPoint(Pr.min),Nr.expandByPoint(Pr.max))}Nr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Fr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Fr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Fr.fromBufferAttribute(a,t),o&&(Mr.fromBufferAttribute(e,t),Fr.add(Mr)),r=Math.max(r,n.distanceToSquared(Fr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new xr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new I,f=new I,p=new I,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new xr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fr.fromBufferAttribute(e,t),Fr.normalize(),e.setXYZ(t,Fr.x,Fr.y,Fr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new xr(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=qe,this.updateRanges=[],this.version=0,this.uuid=ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Rr=new L,zr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix4(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyNormalMatrix(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.transformDirection(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new xr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Br=new L,Vr=new L,Hr=new Lt,Ur=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Br.subVectors(n,t).cross(Vr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Br),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hr.getNormalMatrix(e),r=this.coplanarPoint(Br).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wr=0,Gr=class extends st{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wr++}),this.uuid=ft(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new zn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ur().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new I().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new I().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Kr=class extends Gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new zn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qr,Jr=new L,Yr=new L,Xr=new L,Zr=new I,Qr=new I,$r=new an,ei=new L,ti=new L,ni=new L,ri=new I,ii=new I,ai=new I,oi=class extends Mn{constructor(e=new Kr){if(super(),this.isSprite=!0,this.type=`Sprite`,qr===void 0){qr=new Ir;let e=new Lr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute(`position`,new zr(e,3,0,!1)),qr.setAttribute(`uv`,new zr(e,2,3,!1))}this.geometry=qr,this.material=e,this.center=new I(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Yr.setFromMatrixScale(this.matrixWorld),$r.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Xr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;si(ei.set(-.5,-.5,0),Xr,a,Yr,r,i),si(ti.set(.5,-.5,0),Xr,a,Yr,r,i),si(ni.set(.5,.5,0),Xr,a,Yr,r,i),ri.set(0,0),ii.set(1,0),ai.set(1,1);let o=e.ray.intersectTriangle(ei,ti,ni,!1,Jr);if(o===null&&(si(ti.set(-.5,.5,0),Xr,a,Yr,r,i),ii.set(0,1),o=e.ray.intersectTriangle(ei,ni,ti,!1,Jr),o===null))return;let s=e.ray.origin.distanceTo(Jr);s<e.near||s>e.far||t.push({distance:s,point:Jr.clone(),uv:nr.getInterpolation(Jr,ei,ti,ni,ri,ii,ai,new I),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function si(e,t,n,r,i,a){Zr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Qr.copy(Zr):(Qr.x=a*Zr.x-i*Zr.y,Qr.y=i*Zr.x+a*Zr.y),e.copy(t),e.x+=Qr.x,e.y+=Qr.y,e.applyMatrix4($r)}var ci=new L,li=new L,ui=new L,di=new L,fi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){li.copy(e).add(t).multiplyScalar(.5),ui.copy(t).sub(e).normalize(),di.copy(this.origin).sub(li);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ui),o=di.dot(this.direction),s=-di.dot(ui),c=di.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(li).addScaledVector(ui,d),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),r=ci.dot(ci)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,te,ne,re,O,ie;if(y>=b&&y>=x?(w=s,D=u,ne=p,ie=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,te=h,re=_,O=v):(S=l,C=c,T=f,E=d,ee=h,te=m,re=v,O=_)):b>=x?(w=c,D=d,ne=m,ie=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,te=p,re=v,O=g):(S=s,C=l,T=u,E=f,ee=p,te=h,re=g,O=v)):(w=l,D=f,ne=h,ie=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,te=m,re=g,O=_):(S=c,C=s,T=d,E=u,ee=m,te=p,re=_,O=g)),w===0)return null;let k=S/w,ae=C/w,A=1/w,oe=T-k*D,se=E-ae*D,ce=ee-k*ne,le=te-ae*ne,ue=re-k*ie,de=O-ae*ie,fe=ue*le-de*ce,j=oe*de-se*ue,pe=ce*se-le*oe;if(r){if(fe<0||j<0||pe<0)return null}else if((fe<0||j<0||pe<0)&&(fe>0||j>0||pe>0))return null;let me=fe+j+pe;if(me===0)return null;let he=A*(fe*D+j*ne+pe*ie);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pi=class extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new zn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mi=new an,hi=new fi,gi=new Or,_i=new L,vi=new L,yi=new L,bi=new L,xi=new L,Si=new L,Ci=new L,wi=new L,z=class extends Mn{constructor(e=new Ir,t=new pi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Si.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(xi.fromBufferAttribute(s,e),a?Si.addScaledVector(xi,r):Si.addScaledVector(xi.sub(t),r))}t.add(Si)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere),gi.applyMatrix4(i),hi.copy(e.ray).recast(e.near),!(gi.containsPoint(hi.origin)===!1&&(hi.intersectSphere(gi,_i)===null||hi.origin.distanceToSquared(_i)>(e.far-e.near)**2))&&(mi.copy(i).invert(),hi.copy(e.ray).applyMatrix4(mi),(n.boundingBox===null||hi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ei(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ei(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ei(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ei(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;wi.copy(s),wi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(wi);return l<n.near||l>n.far?null:{distance:l,point:wi.clone(),object:e}}function Ei(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,vi),e.getVertexPosition(c,yi),e.getVertexPosition(l,bi);let u=Ti(e,t,n,r,vi,yi,bi,Ci);if(u){let e=new L;nr.getBarycoord(Ci,vi,yi,bi,e),i&&(u.uv=nr.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=nr.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=nr.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};nr.getNormal(vi,yi,bi,t.normal),u.face=t,u.barycoord=e}return u}var Di=class extends Qt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Oi=class extends xr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ki=new an,Ai=new an,ji=[],Mi=new rr,Ni=new an,Pi=new z,Fi=new Or,Ii=class extends z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ni)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Mi.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Mi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Fi.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(n),e.ray.intersectsSphere(Fi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ki),Ai.multiplyMatrices(n,ki),Pi.matrixWorld=Ai,Pi.raycast(e,ji);for(let e=0,n=ji.length;e<n;e++){let n=ji[e];n.instanceId=i,n.object=this,t.push(n)}ji.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new Or,Ri=new I(.5,.5),zi=new L,Bi=class{constructor(e=new Ur,t=new Ur,n=new Ur,r=new Ur,i=new Ur,a=new Ur){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476+Ri.distanceTo(e.center),Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(zi.x=r.normal.x>0?e.max.x:e.min.x,zi.y=r.normal.y>0?e.max.y:e.min.y,zi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vi=class extends Qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hi=class extends Qt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ui=class extends Qt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wi=class extends Ui{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gi=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class e extends Ir{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new wr(c,3)),this.setAttribute(`normal`,new wr(l,3)),this.setAttribute(`uv`,new wr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qi=class e extends Ir{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new L,g=new L;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new wr(o,3)),this.setAttribute(`normal`,new wr(s,3)),this.setAttribute(`uv`,new wr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class e extends Ir{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new wr(a,3)),this.setAttribute(`normal`,new wr(o,3)),this.setAttribute(`uv`,new wr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},B=class e extends Ir{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new wr(u,3)),this.setAttribute(`normal`,new wr(d,3)),this.setAttribute(`uv`,new wr(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},V=class e extends B{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class e extends Ir{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new wr(i,3)),this.setAttribute(`normal`,new wr(i.slice(),3)),this.setAttribute(`uv`,new wr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new L,r=new L,i=new L;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new L;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new L;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new L,t=new L,n=new L,r=new L,o=new I,s=new I,c=new I;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Xi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){P(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new I:new L);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,r=[],i=[],a=[],o=new L,s=new an;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new L)}i[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(F(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(F(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends Xi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new I){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qi=class extends Zi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function $i(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ea=new L,ta=new L,na=new $i,ra=new $i,ia=new $i,aa=class extends Xi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ta.subVectors(r[0],r[1]).add(r[0]),c=ta);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ea.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ea),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),na.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ra.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ia.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(na.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ra.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ia.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(na.calc(s),ra.calc(s),ia.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function sa(e,t){let n=1-e;return n*n*t}function ca(e,t){return 2*(1-e)*e*t}function la(e,t){return e*e*t}function ua(e,t,n,r){return sa(e,t)+ca(e,n)+la(e,r)}function da(e,t){let n=1-e;return n*n*n*t}function fa(e,t){let n=1-e;return 3*n*n*e*t}function pa(e,t){return 3*(1-e)*e*e*t}function ma(e,t){return e*e*e*t}function ha(e,t,n,r,i){return da(e,t)+fa(e,n)+pa(e,r)+ma(e,i)}var ga=class extends Xi{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends Xi{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y),ha(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Xi{constructor(e=new I,t=new I){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Xi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Xi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Xi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y),ua(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new I){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(oa(o,s.x,c.x,l.x,u.x),oa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new I().fromArray(n))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:Qi,CatmullRomCurve3:aa,CubicBezierCurve:ga,CubicBezierCurve3:_a,EllipseCurve:Zi,LineCurve:va,LineCurve3:ya,QuadraticBezierCurve:ba,QuadraticBezierCurve3:xa,SplineCurve:Sa}),wa=class extends Xi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ca[n.type]().fromJSON(n))}return this}},Ta=class extends wa{constructor(e){super(),this.type=`Path`,this.currentPoint=new I,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new I(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ba(this.currentPoint.clone(),new I(e,t),new I(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ga(this.currentPoint.clone(),new I(e,t),new I(n,r),new I(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Sa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Zi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ea=class extends Ta{constructor(e){super(e),this.uuid=ft(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ta().fromJSON(n))}return this}};function Da(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Oa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Fa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Aa(a,o,n,s,c,l,0),o}function Oa(e,t,n,r,i){let a;if(i===ao(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=no(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=no(i/r|0,e[i],e[i+1],a);return a&&Ja(a,a.next)&&(ro(a),a=a.next),a}function ka(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ja(n,n.next)||qa(n.prev,n,n.next)===0)){if(ro(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Aa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ba(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ma(e,r,i,a):ja(e))t.push(c.i,e.i,l.i),ro(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Na(ka(e),t),Aa(e,t,n,r,i,a,2)):o===2&&Pa(e,t,n,r,i,a):Aa(ka(e),t,n,r,i,a,1);break}}}function ja(e){let t=e.prev,n=e,r=e.next;if(qa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ga(i,s,a,c,o,l,m.x,m.y)&&qa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ma(e,t,n,r){let i=e.prev,a=e,o=e.next;if(qa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ha(p,m,t,n,r),v=Ha(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ga(s,u,c,d,l,f,y.x,y.y)&&qa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ga(s,u,c,d,l,f,b.x,b.y)&&qa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ga(s,u,c,d,l,f,y.x,y.y)&&qa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ga(s,u,c,d,l,f,b.x,b.y)&&qa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Na(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ja(r,i)&&Ya(r,n,n.next,i)&&$a(r,i)&&$a(i,r)&&(t.push(r.i,n.i,i.i),ro(n),ro(n.next),n=e=i),n=n.next}while(n!==e);return ka(n)}function Pa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ka(o,e)){let s=to(o,e);o=ka(o,o.next),s=ka(s,s.next),Aa(o,t,n,r,i,a,0),Aa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Fa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Oa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ua(o))}i.sort(Ia);for(let e=0;e<i.length;e++)n=La(i[e],n);return n}function Ia(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function La(e,t){let n=Ra(e,t);if(!n)return t;let r=to(n,e);return ka(r,r.next),ka(n,n.next)}function Ra(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ja(e,n))return n;do{if(Ja(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Wa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);$a(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&za(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function za(e,t){return qa(e.prev,e,t.prev)<0&&qa(t.next,e,e.next)<0}function Ba(e,t,n,r){let i=e;do i.z===0&&(i.z=Ha(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Va(i)}function Va(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ha(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ua(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Wa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ga(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Wa(e,t,n,r,i,a,o,s)}function Ka(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Qa(e,t)&&($a(e,t)&&$a(t,e)&&eo(e,t)&&(qa(e.prev,e,t.prev)||qa(e,t.prev,t))||Ja(e,t)&&qa(e.prev,e,e.next)>0&&qa(t.prev,t,t.next)>0)}function qa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ja(e,t){return e.x===t.x&&e.y===t.y}function Ya(e,t,n,r){let i=Za(qa(e,t,n)),a=Za(qa(e,t,r)),o=Za(qa(n,r,e)),s=Za(qa(n,r,t));return!!(i!==a&&o!==s||i===0&&Xa(e,n,t)||a===0&&Xa(e,r,t)||o===0&&Xa(n,e,r)||s===0&&Xa(n,t,r))}function Xa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Za(e){return e>0?1:e<0?-1:0}function Qa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ya(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function $a(e,t){return qa(e.prev,e,e.next)<0?qa(e,t,e.next)>=0&&qa(e,e.prev,t)>=0:qa(e,t,e.prev)<0||qa(e,e.next,t)<0}function eo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function to(e,t){let n=io(e.i,e.x,e.y),r=io(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function no(e,t,n,r){let i=io(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ro(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function io(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ao(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var oo=class{static triangulate(e,t,n=2){return Da(e,t,n)}},so=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];co(e),lo(n,e);let a=e.length;t.forEach(co);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,lo(n,t[e]);let o=oo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function co(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function lo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var uo=class e extends Ir{constructor(e=new Ea([new I(.5,.5),new I(-.5,.5),new I(-.5,-.5),new I(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new wr(r,3)),this.setAttribute(`uv`,new wr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?fo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new L,b=new L,x=new L}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!so.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];so.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||rt(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let te=C.length;function ne(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new I(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new I(r/a,i/a)}let re=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),re[e]=ne(D[e],D[n],D[r]);let O=[],ie,k=re.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ie=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ie[e]=ne(t[e],t[r],t[i]);O.push(ie),k=k.concat(ie)}let ae;if(p===0)ae=so.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=ee(D[t],re[t],a);ue(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ie=O[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=ee(n[e],ie[e],a);ue(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ae=so.triangulateShape(e,t)}let A=ae.length,oe=d+f;for(let e=0;e<te;e++){let t=l?ee(C[e],k[e],oe):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ue(x.x,x.y,x.z)):ue(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<te;t++){let n=l?ee(C[t],k[t],oe):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ue(x.x,x.y,x.z)):ue(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=ee(D[e],re[e],r);ue(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ie=O[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],ie[e],r);_?ue(i.x,i.y+g[s-1].y,g[s-1].x+n):ue(i.x,i.y,c+n)}}}se(),ce();function se(){let e=r.length/3;if(l){let e=0,t=te*e;for(let e=0;e<A;e++){let n=ae[e];de(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=te*e;for(let e=0;e<A;e++){let n=ae[e];de(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<A;e++){let t=ae[e];de(t[2],t[1],t[0])}for(let e=0;e<A;e++){let t=ae[e];de(t[0]+te*s,t[1]+te*s,t[2]+te*s)}}n.addGroup(e,r.length/3-e,0)}function ce(){let e=r.length/3,t=0;le(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];le(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function le(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=te*e,a=te*(e+1);fe(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ue(e,t,n){a.push(e),a.push(t),a.push(n)}function de(e,t,i){j(e),j(t),j(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);pe(o[0]),pe(o[1]),pe(o[2])}function fe(e,t,i,a){j(e),j(t),j(a),j(t),j(i),j(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);pe(s[0]),pe(s[1]),pe(s[3]),pe(s[1]),pe(s[2]),pe(s[3])}function j(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function pe(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return po(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ca[i.type]().fromJSON(i)),new e(r,t.options)}},fo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new I(a,o),new I(s,c),new I(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new I(o,1-c),new I(l,1-d),new I(f,1-m),new I(h,1-_)]:[new I(s,1-c),new I(u,1-d),new I(p,1-m),new I(g,1-_)]}};function po(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var mo=class e extends Yi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ho=class e extends Ir{constructor(e=[new I(0,-.5),new I(.5,0),new I(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=F(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new L,d=new I,f=new L,p=new L,m=new L,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new wr(a,3)),this.setAttribute(`uv`,new wr(o,2)),this.setAttribute(`normal`,new wr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},go=class e extends Yi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},_o=class e extends Ir{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},vo=class e extends Ir{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new wr(s,3)),this.setAttribute(`normal`,new wr(c,3)),this.setAttribute(`uv`,new wr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},yo=class e extends Ir{constructor(e=new Ea([new I(0,.5),new I(-.5,-.5),new I(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new wr(r,3)),this.setAttribute(`normal`,new wr(i,3)),this.setAttribute(`uv`,new wr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;so.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];so.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=so.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return bo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function bo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var H=class e extends Ir{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},U=class e extends Ir{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new L,f=new L,p=new L;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new wr(c,3)),this.setAttribute(`normal`,new wr(l,3)),this.setAttribute(`uv`,new wr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function xo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Co(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Co(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function So(e){let t={};for(let n=0;n<e.length;n++){let r=xo(e[n]);for(let e in r)t[e]=r[e]}return t}function Co(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function wo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function To(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var Eo={clone:xo,merge:So},Do=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ko=class extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Do,this.fragmentShader=Oo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=wo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new zn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new $t().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Lt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new an().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ao=class extends ko{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},jo=class extends Gr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new zn(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mo=class extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Po(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Fo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Io=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Lo=class extends Io{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case N:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case N:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ro=class extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},zo=class extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends Io{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Uo(n,t,g,y,r);i[p]=Vo(x,o,_,b,m)}return i}};function Vo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ho(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Uo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Vo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ho(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Wo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Fo(e.settings)&&(n.settings={inTangents:Po(e.settings.inTangents,Array),outTangents:Po(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case M:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return M;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Fo(this.settings)&&(Go(this.settings.inTangents,e),Go(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(rt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){rt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){rt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){rt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Fo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Go(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Wo.prototype.ValueTypeName=``,Wo.prototype.TimeBufferType=Float32Array,Wo.prototype.ValueBufferType=Float32Array,Wo.prototype.DefaultInterpolation=M;var Ko=class extends Wo{constructor(e,t,n){super(e,t,n)}};Ko.prototype.ValueTypeName=`bool`,Ko.prototype.ValueBufferType=Array,Ko.prototype.DefaultInterpolation=Ie,Ko.prototype.InterpolantFactoryMethodLinear=void 0,Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}};qo.prototype.ValueTypeName=`color`;var Jo=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}};Jo.prototype.ValueTypeName=`number`;var Yo=class extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Xo=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};Xo.prototype.ValueTypeName=`quaternion`,Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends Wo{constructor(e,t,n){super(e,t,n)}};Zo.prototype.ValueTypeName=`string`,Zo.prototype.ValueBufferType=Array,Zo.prototype.DefaultInterpolation=Ie,Zo.prototype.InterpolantFactoryMethodLinear=void 0,Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}};Qo.prototype.ValueTypeName=`vector`;var $o=class extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new zn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},es=class extends $o{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ts=new an,ns=new L,rs=new L,is=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ns.setFromMatrixPosition(e.matrixWorld),t.position.copy(ns),rs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ts.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ts,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ts)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},as=new L,os=new Pt,ss=new L,cs=class extends Mn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(as,os,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,os,ss.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(as,os,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,os,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new L,us=new I,ds=new I,fs=class extends cs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ut*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dt*2*Math.atan(Math.tan(ut*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,us,ds),t.subVectors(ds,us)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ut*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ps=class extends is{constructor(){super(new fs(90,1,.5,500)),this.isPointLightShadow=!0}},ms=class extends $o{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ps}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends cs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gs=class extends is{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new gs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},vs=class extends Ir{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ys=-90,bs=1,xs=class extends Mn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fs(ys,bs,e,t);r.layers=this.layers,this.add(r);let i=new fs(ys,bs,e,t);i.layers=this.layers,this.add(i);let a=new fs(ys,bs,e,t);a.layers=this.layers,this.add(a);let o=new fs(ys,bs,e,t);o.layers=this.layers,this.add(o);let s=new fs(ys,bs,e,t);s.layers=this.layers,this.add(s);let c=new fs(ys,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ss=class extends fs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Cs=`\\[\\]\\.:\\/`,ws=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ts=`[^\\[\\]\\.:\\/]`,Es=`[^`+Cs.replace(`\\.`,``)+`]`,Ds=`((?:WC+[\\/:])*)`.replace(`WC`,Ts),Os=`(WCOD+)?`.replace(`WCOD`,Es),ks=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ts),As=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ts),js=RegExp(`^`+Ds+Os+ks+As+`$`),Ms=[`material`,`materials`,`bones`,`map`],Ns=class{constructor(e,t,n){let r=n||Ps.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ps=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ws,``)}static parseTrackName(e){let t=js.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ms.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){rt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){rt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){rt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){rt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){rt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){rt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){rt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;rt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){rt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){rt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ps.Composite=Ns,Ps.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ps.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ps.prototype.GetterByBindingType=[Ps.prototype._getValue_direct,Ps.prototype._getValue_array,Ps.prototype._getValue_arrayElement,Ps.prototype._getValue_toArray],Ps.prototype.SetterByBindingTypeAndVersioning=[[Ps.prototype._setValue_direct,Ps.prototype._setValue_direct_setNeedsUpdate,Ps.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_array,Ps.prototype._setValue_array_setNeedsUpdate,Ps.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_arrayElement,Ps.prototype._setValue_arrayElement_setNeedsUpdate,Ps.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_fromArray,Ps.prototype._setValue_fromArray_setNeedsUpdate,Ps.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fs=new an,Is=class{constructor(e,t,n=0,r=1/0){this.ray=new fi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new gn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Fs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fs),this}intersectObject(e,t=!0,n=[]){return Rs(e,this,n,t),n.sort(Ls),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Rs(e[r],this,n,t);return n.sort(Ls),n}};function Ls(e,t){return e.distance-t.distance}function Rs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Rs(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function zs(e,t,n,r){let i=Bs(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case O:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case k:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case A:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case fe:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Bs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Vs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Hs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Us={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new zn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new zn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new zn(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ws={basic:{uniforms:So([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:Us.meshbasic_vert,fragmentShader:Us.meshbasic_frag},lambert:{uniforms:So([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new zn(0)},envMapIntensity:{value:1}}]),vertexShader:Us.meshlambert_vert,fragmentShader:Us.meshlambert_frag},phong:{uniforms:So([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new zn(0)},specular:{value:new zn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Us.meshphong_vert,fragmentShader:Us.meshphong_frag},standard:{uniforms:So([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new zn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Us.meshphysical_vert,fragmentShader:Us.meshphysical_frag},toon:{uniforms:So([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new zn(0)}}]),vertexShader:Us.meshtoon_vert,fragmentShader:Us.meshtoon_frag},matcap:{uniforms:So([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:Us.meshmatcap_vert,fragmentShader:Us.meshmatcap_frag},points:{uniforms:So([W.points,W.fog]),vertexShader:Us.points_vert,fragmentShader:Us.points_frag},dashed:{uniforms:So([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Us.linedashed_vert,fragmentShader:Us.linedashed_frag},depth:{uniforms:So([W.common,W.displacementmap]),vertexShader:Us.depth_vert,fragmentShader:Us.depth_frag},normal:{uniforms:So([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:Us.meshnormal_vert,fragmentShader:Us.meshnormal_frag},sprite:{uniforms:So([W.sprite,W.fog]),vertexShader:Us.sprite_vert,fragmentShader:Us.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Us.background_vert,fragmentShader:Us.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Us.backgroundCube_vert,fragmentShader:Us.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Us.cube_vert,fragmentShader:Us.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Us.equirect_vert,fragmentShader:Us.equirect_frag},distance:{uniforms:So([W.common,W.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Us.distance_vert,fragmentShader:Us.distance_frag},shadow:{uniforms:So([W.lights,W.fog,{color:{value:new zn(0)},opacity:{value:1}}]),vertexShader:Us.shadow_vert,fragmentShader:Us.shadow_frag}};Ws.physical={uniforms:So([Ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new zn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new zn(0)},specularColor:{value:new zn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Us.meshphysical_vert,fragmentShader:Us.meshphysical_frag};var Gs={r:0,b:0,g:0},Ks=new an,qs=new Lt;qs.set(-1,0,0,0,1,0,0,0,1);function Js(e,t,n,r,i,a){let o=new zn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new z(new Ki(1,1,1),new ko({name:`BackgroundCubeMaterial`,uniforms:xo(Ws.backgroundCube.uniforms),vertexShader:Ws.backgroundCube.vertexShader,fragmentShader:Ws.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ks.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qs),l.material.toneMapped=Ht.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new z(new _o(2,2),new ko({name:`BackgroundMaterial`,uniforms:xo(Ws.background.uniforms),vertexShader:Ws.background.vertexShader,fragmentShader:Ws.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Gs,To(e)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ys(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Xs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Zs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Qs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ur,s=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var $s=4,ec=6,tc=20,nc=256,rc=new hs,ic=new zn,ac=null,oc=0,sc=0,cc=!1,lc=new L,uc=new L,dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=lc}=i;ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,oc,sc),this._renderer.xr.enabled=cc,e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Ue,depthBuffer:!1},r=pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fc(r)),this._blurMaterial=gc(r,e,t),this._ggxMaterial=hc(r,e,t)}return r}_compileMaterial(e){let t=new z(new Ir,e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,r,i){let a=new fs(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ic),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new Ki,new pi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ic),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;mc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;mc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-$s?n-d+$s:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,mc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,rc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,mc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,rc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];mc(t,3*l*(r>this._lodMax-$s?r-this._lodMax+$s:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,rc)}};function fc(e){let t=[],n=[],r=e,i=e-$s+1+ec;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?uc.set(1,r,n):e===1?uc.set(-n,1,-r):e===2?uc.set(-n,r,1):e===3?uc.set(-1,r,-n):e===4?uc.set(-n,-1,r):uc.set(n,r,-1),uc.toArray(l,(e*6+t)*3)}}let u=new Ir;u.setAttribute(`position`,new xr(c,3)),u.setAttribute(`outputDirection`,new xr(l,3)),n.push(new z(u,null)),r>$s&&r--}return{lodMeshes:n,sizeLods:t}}function pc(e,t,n){let r=new tn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function mc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function hc(e,t,n){return new ko({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:nc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gc(e,t,n){return new ko({name:`SphericalGaussianBlur`,defines:{SAMPLES:tc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _c(){return new ko({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vc(){return new ko({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bc=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ki(5,5,5),i=new ko({name:`CubemapFromEquirect`,uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new z(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new xs(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function xc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new bc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new dc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new dc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Sc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&it(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Cc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Cr:Sr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function wc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Tc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:rt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ec(e,t,n){let r=new WeakMap,i=new $t;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new nn(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new I(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Dc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Oc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function kc(e,t,n,r,i,a){let o=new tn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ir;l.setAttribute(`position`,new wr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new wr([0,2,0,0,2,0],2));let u=new Ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new z(l,u),f=new hs(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new tn(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new tn(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ht.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Oc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ac=new Qt,jc=new Ui(1,1),Mc=new nn,Nc=new rn,Pc=new Vi,Fc=[],Ic=[],Lc=new Float32Array(16),Rc=new Float32Array(9),zc=new Float32Array(4);function Bc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Fc[i];if(a===void 0&&(a=new Float32Array(i),Fc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Vc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Hc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Uc(e,t){let n=Ic[t];n===void 0&&(n=new Int32Array(t),Ic[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vc(n,t))return;e.uniform2fv(this.addr,t),Hc(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Vc(n,t))return;e.uniform3fv(this.addr,t),Hc(n,t)}}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vc(n,t))return;e.uniform4fv(this.addr,t),Hc(n,t)}}function Jc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Hc(n,t)}else{if(Vc(n,r))return;zc.set(r),e.uniformMatrix2fv(this.addr,!1,zc),Hc(n,r)}}function Yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Hc(n,t)}else{if(Vc(n,r))return;Rc.set(r),e.uniformMatrix3fv(this.addr,!1,Rc),Hc(n,r)}}function Xc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Hc(n,t)}else{if(Vc(n,r))return;Lc.set(r),e.uniformMatrix4fv(this.addr,!1,Lc),Hc(n,r)}}function Zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vc(n,t))return;e.uniform2iv(this.addr,t),Hc(n,t)}}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vc(n,t))return;e.uniform3iv(this.addr,t),Hc(n,t)}}function el(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vc(n,t))return;e.uniform4iv(this.addr,t),Hc(n,t)}}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vc(n,t))return;e.uniform2uiv(this.addr,t),Hc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vc(n,t))return;e.uniform3uiv(this.addr,t),Hc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vc(n,t))return;e.uniform4uiv(this.addr,t),Hc(n,t)}}function al(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(jc.compareFunction=n.isReversedDepthBuffer()?518:515,a=jc):a=Ac,n.setTexture2D(t||a,i)}function ol(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Nc,i)}function sl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Pc,i)}function cl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Mc,i)}function ll(e){switch(e){case 5126:return Wc;case 35664:return Gc;case 35665:return Kc;case 35666:return qc;case 35674:return Jc;case 35675:return Yc;case 35676:return Xc;case 5124:case 35670:return Zc;case 35667:case 35671:return Qc;case 35668:case 35672:return $c;case 35669:case 35673:return el;case 5125:return tl;case 36294:return nl;case 36295:return rl;case 36296:return il;case 35678:case 36198:case 36298:case 36306:case 35682:return al;case 35679:case 36299:case 36307:return ol;case 35680:case 36300:case 36308:case 36293:return sl;case 36289:case 36303:case 36311:case 36292:return cl}}function ul(e,t){e.uniform1fv(this.addr,t)}function dl(e,t){let n=Bc(t,this.size,2);e.uniform2fv(this.addr,n)}function fl(e,t){let n=Bc(t,this.size,3);e.uniform3fv(this.addr,n)}function pl(e,t){let n=Bc(t,this.size,4);e.uniform4fv(this.addr,n)}function ml(e,t){let n=Bc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hl(e,t){let n=Bc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function gl(e,t){let n=Bc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _l(e,t){e.uniform1iv(this.addr,t)}function vl(e,t){e.uniform2iv(this.addr,t)}function yl(e,t){e.uniform3iv(this.addr,t)}function bl(e,t){e.uniform4iv(this.addr,t)}function xl(e,t){e.uniform1uiv(this.addr,t)}function Sl(e,t){e.uniform2uiv(this.addr,t)}function Cl(e,t){e.uniform3uiv(this.addr,t)}function wl(e,t){e.uniform4uiv(this.addr,t)}function Tl(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?jc:Ac;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function El(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Nc,a[e])}function Dl(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Pc,a[e])}function Ol(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Mc,a[e])}function kl(e){switch(e){case 5126:return ul;case 35664:return dl;case 35665:return fl;case 35666:return pl;case 35674:return ml;case 35675:return hl;case 35676:return gl;case 5124:case 35670:return _l;case 35667:case 35671:return vl;case 35668:case 35672:return yl;case 35669:case 35673:return bl;case 5125:return xl;case 36294:return Sl;case 36295:return Cl;case 36296:return wl;case 35678:case 36198:case 36298:case 36306:case 35682:return Tl;case 35679:case 36299:case 36307:return El;case 35680:case 36300:case 36308:case 36293:return Dl;case 36289:case 36303:case 36311:case 36292:return Ol}}var Al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ll(t.type)}},jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kl(t.type)}},Ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function Pl(e,t){e.seq.push(t),e.map[t.id]=t}function Fl(e,t,n){let r=e.name,i=r.length;for(Nl.lastIndex=0;;){let a=Nl.exec(r),o=Nl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Pl(n,l===void 0?new Al(s,e,t):new jl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ml(s),Pl(n,e)),n=e}}}var Il=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Fl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ll(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Rl=37297,zl=0;function Bl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Vl=new Lt;function Hl(e){Ht._getMatrix(Vl,Ht.workingColorSpace,e);let t=`mat3( ${Vl.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ul(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Bl(e.getShaderSource(t),r)}return i}function Wl(e,t){let n=Hl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Gl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Kl(e,t){let n=Gl[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ql=new L;function Jl(){return Ht.getLuminanceCoefficients(ql),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ql.x.toFixed(4)}, ${ql.y.toFixed(4)}, ${ql.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Yl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ql).join(`
`)}function Xl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Zl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ql(e){return e!==``}function $l(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tu=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(e){return e.replace(tu,iu)}var ru=new Map;function iu(e,t){let n=Us[t];if(n===void 0){let e=ru.get(t);if(e!==void 0)n=Us[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return nu(n)}var au=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(e){return e.replace(au,su)}function su(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function cu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var lu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function uu(e){return lu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var du={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function fu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:du[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var pu={302:`ENVMAP_MODE_REFRACTION`};function mu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:pu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var hu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function gu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:hu[e.combine]||`ENVMAP_BLENDING_NONE`}function _u(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function vu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=uu(n),l=fu(n),u=mu(n),d=gu(n),f=_u(n),p=Yl(n),m=Xl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ql).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ql).join(`
`),_.length>0&&(_+=`
`)):(g=[cu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ql).join(`
`),_=[cu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Us.tonemapping_pars_fragment,n.toneMapping===0?``:Kl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Us.colorspace_pars_fragment,Wl(`linearToOutputTexel`,n.outputColorSpace),Jl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ql).join(`
`)),o=nu(o),o=$l(o,n),o=eu(o,n),s=nu(s),s=$l(s,n),s=eu(s,n),o=ou(o),s=ou(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ll(i,i.VERTEX_SHADER,y),S=Ll(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ul(i,x,`vertex`),n=Ul(i,S,`fragment`);rt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Il(i,h),T=Zl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Rl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var yu=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xu(e),t.set(e,n)),n}},xu=class{constructor(e){this.id=yu++,this.code=e,this.usedTimes=0}};function Su(e){return e===1030||e===37490||e===36285}function Cu(e,t,n,r,i,a){let o=new gn,s=new bu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,ne;if(C){let e=Ws[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,ne=t.id}let re=e.getRenderTarget(),O=e.state.buffers.depth.getReversed(),ie=h.isInstancedMesh===!0,k=h.isBatchedMesh===!0,ae=!!i.map,A=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,j=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=me&&!!i.anisotropyMap,Se=he&&!!i.clearcoatMap,Ce=he&&!!i.clearcoatNormalMap,we=he&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,Ee=ve&&!!i.iridescenceThicknessMap,De=ye&&!!i.sheenColorMap,Oe=ye&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=be&&!!i.transmissionMap,Ne=be&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,M=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:k,batchingColor:k&&h._colorsTexture!==null,instancing:ie,instancingColor:ie&&h.instanceColor!==null,instancingMorph:ie&&h.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:A,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&Su(i.normalMap.format),metalnessMap:j,roughnessMap:pe,anisotropy:me,anisotropyMap:xe,clearcoat:he,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:be,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:M,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:ue&&m(i.normalMap.channel),displacementMapUv:de&&m(i.displacementMap.channel),emissiveMapUv:fe&&m(i.emissiveMap.channel),metalnessMapUv:j&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(i.sheenRoughnessMap.channel),specularMapUv:ke&&m(i.specularMap.channel),specularColorMapUv:Ae&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:Me&&m(i.transmissionMap.channel),thicknessMapUv:Ne&&m(i.thicknessMap.channel),alphaMapUv:Fe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ue||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Fe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:O,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&Ht.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||k)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ws[t];n=Eo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new vu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function wu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Tu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Eu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Du(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Tu),r.length>1&&r.sort(t||Eu),i.length>1&&i.sort(t||Eu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ou(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Du,e.set(t,[i])):n>=r.length?(i=new Du,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ku(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new zn};break;case`SpotLight`:n={position:new L,direction:new L,color:new zn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new zn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new zn,groundColor:new zn};break;case`RectAreaLight`:n={color:new zn,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function Au(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ju=0;function Mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Nu(e){let t=new ku,n=Au(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new an,o=new an;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Mu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ju++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Pu(e){let t=new Nu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Fu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Pu(e),t.set(n,[a])):r>=i.length?(a=new Pu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Iu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ru=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],zu=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Bu=new an,Vu=new L,Hu=new L;function Uu(e,t,n){let i=new Bi,a=new I,s=new I,c=new $t,l=new Mo,u=new No,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ko({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:Iu,fragmentShader:Lu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Ir;y.setAttribute(`position`,new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new z(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){P(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new tn(a.x,a.y,{format:te,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ui(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new bc(a.x),p.map.depthTexture=new Wi(a.x,m)):(p.map=new tn(a.x,a.y),p.map.depthTexture=new Ui(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Vu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Vu),Hu.copy(e.position),Hu.add(Ru[t]),e.up.copy(zu[t]),e.lookAt(Hu),e.updateMatrixWorld(),n.makeTranslation(-Vu.x,-Vu.y,-Vu.z),Bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Bu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new tn(a.x,a.y,{format:te,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Wu(e,t){function n(){let t=!1,n=new $t,r=null,i=new $t(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?j(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?j(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new zn(0,0,0),T=0,E=!1,D=null,ee=null,te=null,ne=null,re=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,k=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ie=k>=2):(k=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ie=k>=1);let A=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new $t().fromArray(se),ue=new $t().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),j(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),j(e.CULL_FACE),ye(0);function j(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(j(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:rt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:rt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:rt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):j(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(j(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Ce(t){t!==te&&(ie&&e.lineWidth(t),te=t)}function we(t,n,r){t?(j(e.POLYGON_OFFSET_FILL),(ne!==n||re!==r)&&(ne=n,re=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?j(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+O-1),A!==t&&(e.activeTexture(t),A=t)}function De(t,n,r){r===void 0&&(r=A===null?e.TEXTURE0+O-1:A);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(A!==r&&(e.activeTexture(r),A=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function Oe(){let t=oe[A];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function M(){try{e.texImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function N(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},A=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new zn(0,0,0),T=0,E=!1,D=null,ee=null,te=null,ne=null,re=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:j,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:M,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:N,viewport:Be,reset:Ue}}function Gu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new I,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function ne(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?We:Ht.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function re(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function O(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ie(e){let t=e.target;t.removeEventListener(`dispose`,ie),ae(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),oe(t)}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&A(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function A(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function oe(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let se=0;function ce(){se=0}function le(){return se}function ue(e){se=e}function de(){let e=se;return e>=p.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),se+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function j(e,t){let n=f.get(e);if(e.isVideoTexture&&M(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function me(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?we(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ge={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},_e={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ve={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ye(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ge[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ge[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ge[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,_e[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,_e[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ve[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function be(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ie));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=fe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&A(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=xe(r.start,t.width,4),c=xe(n.start,t.width,4);r.start<=o+1&&s===c&&xe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Ce(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=be(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Ht.getPrimaries(Ht.workingColorSpace),n=t.colorSpace===``?null:Ht.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Le(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=ne(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ye(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=O(t,e);if(t.isDepthTexture)u=re(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Se(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=zs(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=zs(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Re(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Re(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n){if(t.image.length!==6)return;let r=be(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Ht.getPrimaries(Ht.workingColorSpace),o=t.colorSpace===``?null:Ht.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Le(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=ne(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=O(t,h);ye(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Re(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=ne(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Ie(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Fe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=re(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ie(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=ne(i.internalFormat,a,o,i.normalized,i.colorSpace);Ie(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function De(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,ie)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else j(t.depthTexture,0);let a=i.__webglTexture,o=Fe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Ie(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Ie(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)De(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?De(t.__webglFramebuffer[0],e,0):De(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ee(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ee(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(e,t,n){let r=f.get(e);t!==void 0&&Te(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Oe(e)}function Ae(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,k);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Ie(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=ne(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Fe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ee(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Te(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ye(o,r),Te(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ye(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Te(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&Oe(e)}function je(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let Me=[],Ne=[];function Pe(e){if(e.samples>0){if(Ie(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Me.length=0,Ne.length=0,Me.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Me.push(a),Ne.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ne)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Me))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Fe(e){return Math.min(p.maxSamples,e.samples)}function Ie(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function M(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ht.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):rt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=j,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Ku(e,t){function n(n,r=``){let i,a=Ht.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var qu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ju=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ko({vertexShader:qu,fragmentShader:Ju,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new _o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xu=class extends st{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Yu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new I,te=null,ne=null,re=new fs;re.viewport=new $t;let O=new fs;O.viewport=new $t;let ie=[re,O],k=new Ss,ae=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getHandSpace()};function oe(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function se(){r.removeEventListener(`select`,oe),r.removeEventListener(`selectstart`,oe),r.removeEventListener(`selectend`,oe),r.removeEventListener(`squeeze`,oe),r.removeEventListener(`squeezestart`,oe),r.removeEventListener(`squeezeend`,oe),r.removeEventListener(`end`,se),r.removeEventListener(`inputsourceschange`,ce);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ae=null,A=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),ne!==null){let e=ne.camera;e.fov=ne.fov,e.zoom=ne.zoom,e.updateProjectionMatrix(),ne=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,oe),r.addEventListener(`selectstart`,oe),r.addEventListener(`selectend`,oe),r.addEventListener(`squeeze`,oe),r.addEventListener(`squeezestart`,oe),r.addEventListener(`squeezeend`,oe),r.addEventListener(`end`,se),r.addEventListener(`inputsourceschange`,ce),b.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new tn(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ui(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new tn(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ce(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let le=new L,ue=new L;function de(e,t,n){le.setFromMatrixPosition(t.matrixWorld),ue.setFromMatrixPosition(n.matrixWorld);let r=le.distanceTo(ue),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function fe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),k.near=O.near=re.near=t,k.far=O.far=re.far=n,(ae!==k.near||A!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ae=k.near,A=k.far),k.layers.mask=e.layers.mask|6,re.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;fe(k,i);for(let e=0;e<a.length;e++)fe(a[e],i);a.length===2?de(k,re,O):k.projectionMatrix.copy(re.projectionMatrix),ne===null&&e.isPerspectiveCamera&&(ne={camera:e,fov:e.fov,zoom:e.zoom}),j(e,k,i)};function j(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(e){return v[e]};let pe=null;function me(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ie[n];o===void 0&&(o=new fs,o.layers.enable(n),o.viewport=new $t,ie[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Gi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}pe&&pe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let he=new Vs;he.setAnimationLoop(me),this.setAnimationLoop=function(e){pe=e},this.dispose=function(){}}},Zu=new an,Qu=new Lt;Qu.set(-1,0,0,0,1,0,0,0,1);function $u(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,To(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Zu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Qu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ed(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return rt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var td=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nd=null;function rd(){return nd===null&&(nd=new Di(td,16,16,te,g),nd.name=`DFG_LUT`,nd.minFilter=o,nd.magFilter=o,nd.wrapS=t,nd.wrapT=t,nd.generateMipmaps=!1,nd.needsUpdate=!0),nd}var id=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([re,ne,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new L,te=null,O=null,ie=[],k=[],ae=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,oe=!1,se=null,ce=null,le=null,ue=null;this._outputColorSpace=He;let de=0,fe=0,j=null,pe=-1,me=null,he=new $t,ge=new $t,_e=null,ve=new zn(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new $t(0,0,be,xe),Ee=new $t(0,0,be,xe),De=!1,Oe=new Bi,ke=!1,Ae=!1,je=new an,Me=new L,Ne=new $t,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return j===null?Se:1}let M=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,N,Be,Ve,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt,it,ot,st,ct,lt,ut,dt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,pt,!1),t.addEventListener(`webglcontextrestored`,mt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),M===null){let t=`webgl2`;if(M=Le(t,e),M===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ft()}catch(e){throw t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),rt(`WebGLRenderer: `+e.message),e}function ft(){Re=new Sc(M),Re.init(),lt=new Ku(M,Re),ze=new Zs(M,Re,e,lt),N=new Wu(M,Re),ze.reversedDepthBuffer&&h&&N.buffers.depth.setReversed(!0),ce=M.createFramebuffer(),le=M.createFramebuffer(),ue=M.createFramebuffer(),Be=new Tc(M),Ve=new wu,Ue=new Gu(M,Re,N,Ve,ze,lt,Be),We=new xc(A),Ge=new Hs(M),ut=new Ys(M,Ge),Ke=new Cc(M,Ge,Be,ut),qe=new Dc(M,Ke,Ge,ut,Be),ot=new Ec(M,ze,Ue),et=new Qs(Ve),Je=new Cu(A,We,Re,ze,ut,et),Xe=new $u(A,Ve),Ze=new Ou,Qe=new Fu(Re),it=new Js(A,We,N,qe,x,s),nt=new Uu(A,qe,ze),dt=new ed(M,Be,ze,N),st=new Xs(M,Re,Be),ct=new wc(M,Re,Be),Be.programs=Je.programs,A.capabilities=ze,A.extensions=Re,A.properties=Ve,A.renderLists=Ze,A.shadowMap=nt,A.state=N,A.info=Be}S!==1009&&(ae=new kc(S,t.width,t.height,o,r,i));let F=new Xu(A,M);this.xr=F,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){F.isPresenting?P(`WebGLRenderer: Can't change size while VR device is presenting.`):(be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ae!==null&&ae.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)rt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ae.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(he.copy(Te).multiplyScalar(Se).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=C.has(t)}if(e){let e=j.texture.type,t=w.has(e),n=it.getClearColor(),r=it.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,M.clearBufferuiv(M.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,M.clearBufferiv(M.COLOR,0,E))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),se=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),it.dispose(),Ze.dispose(),Qe.dispose(),Ve.dispose(),We.dispose(),qe.dispose(),ut.dispose(),dt.dispose(),Je.dispose(),F.dispose(),F.removeEventListener(`sessionstart`,St),F.removeEventListener(`sessionend`,Ct),wt.stop()};function pt(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),oe=!0}function mt(){tt(`WebGLRenderer: Context Restored.`),oe=!1;let e=Be.autoReset,t=nt.enabled,n=nt.autoUpdate,r=nt.needsUpdate,i=nt.type;ft(),Be.autoReset=e,nt.enabled=t,nt.autoUpdate=n,nt.needsUpdate=r,nt.type=i}function ht(e){rt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),Ve.remove(e)}function vt(e){let t=Ve.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=I(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ke.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ut.setup(i,r,s,n,c);let h,g=st;if(c!==null&&(h=Ge.get(c),g=ct,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ge.get(c).bytesPerElement:1,o=Ve.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){se!==null&&e.isNodeMaterial&&se.setObject(r,e),ke===!0&&et.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),se!==null&&se.renderStart(e,t,n),O=Qe.get(n),O.init(t),k.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),se!==null&&se.updateLights(O.state.lightsArray),Ae=this.localClippingEnabled,ke=et.init(this.clippingPlanes,Ae),ke===!0&&et.setGlobalState(this.clippingPlanes,t),se!==null&&nt.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),O=k.pop(),se!==null&&se.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Ve.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new Vs;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,F.setAnimationLoop(e),e===null?wt.stop():wt.start()},F.addEventListener(`sessionstart`,St),F.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){rt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(oe===!0)return;se!==null&&se.renderStart(e,t);let n=F.enabled===!0&&F.isPresenting===!0,r=ae!==null&&(j===null||n)&&ae.begin(A,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(ae===null||ae.isCompositing()===!1)&&(F.cameraAutoUpdate===!0&&F.updateCamera(t),t=F.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,j),O=Qe.get(e,k.length),O.init(t),O.state.textureUnits=Ue.getTextureUnits(),k.push(O),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(je,Ye,t.reversedDepth),Ae=this.localClippingEnabled,ke=et.init(this.clippingPlanes,Ae),te=Ze.get(e,ie.length),te.init(),ie.push(te),F.enabled===!0&&F.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,A.sortObjects)}Tt(e,t,0,A.sortObjects),te.finish(),se!==null&&se.updateLights(O.state.lightsArray),A.sortObjects===!0&&te.sort(Ce,we),Fe=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Fe&&it.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&et.beginShadows();let i=O.state.shadowsArray;if(nt.render(i,e,t),ke===!0&&et.endShadows(),(r&&ae.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Fe&&it.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(te,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Fe&&it.render(e),Et(te,e,t)}j!==null&&fe===0&&(Ue.updateMultisampleRenderTarget(j),Ue.updateRenderTargetMipmap(j)),r&&ae.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),ut.resetDefaultState(),pe=-1,me=null,k.pop(),k.length>0?(O=k[k.length-1],Ue.setTextureUnits(O.state.textureUnits),ke===!0&&et.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,ie.pop(),te=ie.length>0?ie[ie.length-1]:null,se!==null&&se.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Oe)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let i=qe.update(e),a=e.material;a.visible&&te.push(e,i,a,n,Ne.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Oe))){let i=qe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ne.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&te.push(e,i,c,n,Ne.z,s,t)}}else a.visible&&te.push(e,i,a,n,Ne.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),ke===!0&&et.setGlobalState(A.clippingPlanes,n),r&&N.viewport(he.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new tn(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),u=A.getActiveCubeFace(),d=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(ve),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),Fe&&it.render(n);let f=A.toneMapping;A.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),ke===!0&&et.setGlobalState(A.clippingPlanes,r),Ot(e,n,r),Ue.updateMultisampleRenderTarget(a),Ue.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ue.updateMultisampleRenderTarget(a),Ue.updateRenderTargetMipmap(a))}A.setRenderTarget(s,u,d),A.setClearColor(ve,ye),p!==void 0&&(r.viewport=p),A.toneMapping=f}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){se!==null&&i.isNodeMaterial&&se.setObject(e,i),e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Pe);let r=Ve.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=We.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Je.getUniforms(e),se!==null&&e.isNodeMaterial&&se.build(e,n,s),e.onBeforeCompile(s,A),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=et.uniform),Mt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Il.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=Ve.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function I(e,t,n,r,i){t.isScene!==!0&&(t=Pe),Ue.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ht.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=We.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Ve.get(r),y=O.state.lights;if(ke===!0&&(Ae===!0||e!==me)){let t=e===me&&r.id===pe;et.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==et.numPlanes||v.numIntersection!==et.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=At(r,t,i),se&&r.isNodeMaterial&&se.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(N.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==pe&&(pe=r.id,C=!0),v.needsLights){let e=Nt(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||me!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(M,`projectionMatrix`,e.projectionMatrix),T.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(M,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&T.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(M,`sunShadowMap`,y.state.sunShadowMap,Ue),y.state.directionalShadowMap.length>0&&T.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,Ue),y.state.spotShadowMap.length>0&&T.setValue(M,`spotShadowMap`,y.state.spotShadowMap,Ue),y.state.pointShadowMap.length>0&&T.setValue(M,`pointShadowMap`,y.state.pointShadowMap,Ue)),i.isSkinnedMesh){T.setOptional(M,i,`bindMatrix`),T.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(M,`boneTexture`,e.boneTexture,Ue))}i.isBatchedMesh&&(T.setOptional(M,i,`batchingTexture`),T.setValue(M,`batchingTexture`,i._matricesTexture,Ue),T.setOptional(M,i,`batchingIdTexture`),T.setValue(M,`batchingIdTexture`,i._indirectTexture,Ue),T.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(M,`batchingColorTexture`,i._colorsTexture,Ue));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&ot.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=rd()),C){if(T.setValue(M,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&Pt(E,w),a&&r.fog===!0&&Xe.refreshFogUniforms(E,a),Xe.refreshMaterialUniforms(E,r,Se,xe,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Il.upload(M,jt(v),E,Ue)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Il.upload(M,jt(v),E,Ue),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(M,`center`,i.center),T.setValue(M,`modelViewMatrix`,i.modelViewMatrix),T.setValue(M,`normalMatrix`,i.normalMatrix),T.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];dt.update(n,x),dt.bind(n,x)}}return x}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=Ve.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Ve.get(e.texture).__webglTexture=t,Ve.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Ve.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,de=t,fe=n;let r=null,i=!1,a=!1;if(e){let o=Ve.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(he),N.scissor(ge),N.setScissorTest(_e),pe=-1;return}if(o.__webglFramebuffer===void 0)Ue.setupRenderTarget(e);else if(o.__hasExternalTextures)Ue.rebindTextures(e,Ve.get(e.texture).__webglTexture,Ve.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Ve.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ue.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Ve.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ue.useMultisampledRTT(e)===!1?Ve.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=ce),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(he),N.scissor(ge),N.setScissorTest(_e),i){let r=Ve.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Ve.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Ve.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}pe=-1};function It(e){let t=Ve.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Ve.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,lt.convert(c),lt.convert(l),a)}finally{let e=j===null?null:Ve.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Ve.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,lt.convert(l),lt.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=j===null?null:Ve.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await at(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ue.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=lt.convert(t.format),_=lt.convert(t.type),v;t.isData3DTexture?(Ue.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ue.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(Ue.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Ve.get(e),r=Ve.get(t),h=Ve.get(n.__renderTarget),g=Ve.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ve.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ve.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Ve.has(e)){let n=Ve.get(e),r=Ve.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,le),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,ue);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){Ve.get(e).__webglFramebuffer===void 0&&Ue.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ue.setTextureCube(e,0):e.isData3DTexture?Ue.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ue.setTexture2DArray(e,0):Ue.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){de=0,fe=0,j=null,N.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}},ad=Math.PI/180;function od(e,t=new L){return t.set(Math.cos(e),0,-Math.sin(e))}function sd(e,t){return Math.atan2(-t,e)}function cd(e){return Math.atan2(Math.sin(e),Math.cos(e))}var ld=new L(-3.3,0,0),ud=125*ad,dd=108*ad,fd=142*ad,pd=[...[60,88,116].map(e=>({heading:e*ad,r:6,y:0})),...[76,98,120].map(e=>({heading:e*ad,r:10,y:0})),...[66,90,112].map(e=>({heading:e*ad,r:14,y:0})),...[78,100,122].map(e=>({heading:e*ad,r:18,y:0}))],md=[...[70,92,114].map(e=>({heading:e*ad,r:7.5,y:4})),...[81,103].map(e=>({heading:e*ad,r:11.5,y:4})),...[72,94,116].map(e=>({heading:e*ad,r:15.5,y:4}))],hd=95*ad,gd=135*ad,_d=new L(.776,0,-.63).normalize(),vd=new L(_d.z,0,-_d.x),yd=od(ud),bd=od(ud-Math.PI/2),xd={minA:0,maxA:55,halfWidth:24};function Sd(e){let t=e.x-ld.x,n=e.z-ld.z,r=Nt.clamp(t*yd.x+n*yd.z,xd.minA,xd.maxA),i=Nt.clamp(t*bd.x+n*bd.z,-xd.halfWidth,xd.halfWidth);return e.x=ld.x+yd.x*r+bd.x*i,e.z=ld.z+yd.z*r+bd.z*i,e}var Cd=3.4,wd=60*ad,Td=170*ad;function Ed(e,t,n,r=0,i=new L){return od(t,i).multiplyScalar(n),i.x+=e.x,i.z+=e.z,i.y=r,i}var Dd=new L(-2.8,4.45,0),Od=new L(-3.3,3,0),kd=Math.atan2(Dd.x-Od.x,Dd.y-Od.y),Ad=new L(.58,.64,.56),jd=.68;function Md(e){return[[.001,-.12],[.33,-.06],[.37,.2],[.48,.6],[.7,1.02],[.8,e-.22],[.74,e],[.46,e+.15],[.001,e+.2]]}function Nd(e){return new Sa(Md(e).map(([e,t])=>new I(e,t))).getPoints(48)}function Pd(e,t){let n=Nd(e);for(let e=1;e<n.length;e++){let r=n[e-1],i=n[e];if(t>=r.y&&t<=i.y||t<=r.y&&t>=i.y){let e=i.y===r.y?0:(t-r.y)/(i.y-r.y);return r.x+(i.x-r.x)*e}}return 0}function Fd(e,t){return Pd(e,t)*jd}function Id(e,t,n=1){let r=Ad,i=1-(e/(r.y*n))**2-(t/(r.z*n))**2;return r.x*n*Math.sqrt(Math.max(0,i))}function Ld(e,t,n=1){let r=Ad,i=1-(e/(r.x*n))**2-(t/(r.z*n))**2;return r.y*n*Math.sqrt(Math.max(0,i))}function Rd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ir,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=zd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=zd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function zd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new xr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Bd(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var Vd=1909811,G={scrap:{plate:8225676,seam:5264733,glow:10475775},cadet:{plate:2633795,trim:14265157,glow:16757568},recon:{plate:8003114,under:1776930,trim:14265157,blade:15265010,glow:16730682},siege:{plate:2902652,under:1581114,trim:14081512,glow:16734762},storm:{plate:4537472,under:1841456,trim:13225432,gold:14265157,vent:16726858,light:15659263},infinity:{plate:5232880,deep:2068408,under:1323594,gold:15771706,gem:16747050,crystal:10482943,aura:7334143},galaxy:{plate:14165532,dark:9049104,under:2756108,gold:16761402,blade:16771504,flame:16742938},ronin:{plate:1381915,under:789776,gunmetal:3817032,gold:15775794,eye:16724032},aegis:{plate:13949152,under:1776930,gold:14067772,gem:3135176,red:14697018,light:16054015},lancer:{plate:14672874,navy:2371694,under:1711398,line:5925008,glow:16765498,light:16054015},phantom:{plate:1711401,under:921622,silver:13160154,line:5997764,glow:5217791},drake:{plate:1513501,under:855569,red:12065820,lava:16742938,crack:16756782,gem:4644954,bone:16051416},frost:{plate:15133166,under:2764602,line:5941503,ice:8374527,teal:3137736,mask:1711396},blaze:{plate:1381916,under:789776,line:16738842,glow:16742938,red:14165532,gem:4186234},vanguard:{plate:1908784,under:1053208,gunmetal:2896450,line:4161023,glow:6266367,eye:16732120},solar:{plate:15659252,under:1776930,gold:14856762,gem:3107839,glow:7319807,light:16054015},eclipse:{plate:2765940,under:1579812,steel:12830930,line:9278886,glow:7332095,accent:16765498,light:16054015,wing:9423103},tempest:{plate:2248762,under:1448219,chrome:14541802,line:5226303,glow:8847162},titan:{plate:11569710,under:2040102,steel:12172999,blade:14672874,glow:16747039,light:16054015},crimson:{plate:11739180,ivory:15524812,gold:15251530,steel:12568272,under:2759968,gem:16722490,glow:16767050},raider:{plate:8005429,seam:5183522,white:14672872,under:2894384,steel:9278622,visor:16742954,light:4183807}},Hd=(()=>{let e=new Di(new Uint8Array([0,120,255]),3,1,D);return e.minFilter=r,e.magFilter=r,e.generateMipmaps=!1,e.needsUpdate=!0,e})();function K(e,t={}){return new jo({color:e,gradientMap:Hd,...t})}var Ud=new WeakMap;function Wd(e){let t=Ud.get(e);if(!t){let n=new Ir;n.setAttribute(`position`,e.getAttribute(`position`)),e.index&&n.setIndex(e.index),t=Bd(n,1e-4),t.computeVertexNormals(),Ud.set(e,t)}return t}var Gd={thickness:.0042,fadeStart:150,fadeEnd:400},Kd={thickness:.0038,fadeStart:200,fadeEnd:600},qd={thickness:.0034,fadeStart:250,fadeEnd:900},Jd=new Map;function Yd(e){let t=`${e.thickness}/${e.fadeStart}/${e.fadeEnd}`,n=Jd.get(t);return n||(n=new ko({side:1,transparent:!0,depthWrite:!1,fog:!0,uniforms:Eo.merge([W.fog,{color:{value:new zn(Vd)},thickness:{value:e.thickness},fadeStart:{value:e.fadeStart},fadeEnd:{value:e.fadeEnd}}]),vertexShader:`
      #include <common>
      #include <fog_pars_vertex>
      uniform float thickness;
      uniform float fadeStart;
      uniform float fadeEnd;
      varying float vFade;
      void main() {
        vec3 transformed = position;
        vec3 objectNormal = normal;
        #ifdef USE_INSTANCING
          mat3 im = mat3(instanceMatrix);
          objectNormal = transpose(inverse(im)) * objectNormal;
          transformed = (instanceMatrix * vec4(transformed, 1.0)).xyz;
        #endif
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        vec3 viewNormal = normalize(normalMatrix * objectNormal);
        float depth = -mvPosition.z;
        mvPosition.xyz += viewNormal * thickness * depth;
        vFade = 1.0 - smoothstep(fadeStart, fadeEnd, depth);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      uniform vec3 color;
      varying float vFade;
      void main() {
        if (vFade <= 0.0) discard;
        gl_FragColor = vec4(color, vFade);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),Jd.set(t,n),n)}function Xd(e,t=Kd){let n=new z(Wd(e.geometry),Yd(t));return n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},e.add(n),n}function Zd(e,t){let n=[];e.traverse(e=>{e instanceof z&&!e.userData.noOutline&&n.push(e)});for(let e of n)Xd(e,t)}function Qd(e,t=qd){let n=new Ii(Wd(e.geometry),Yd(t),e.count);return n.instanceMatrix=e.instanceMatrix,n.frustumCulled=!1,n}function $d(e,t,n){return e.userData.spin={axis:t,speed:n},e}function ef(e,t,n,r=0){return e.userData.pulse={base:e.scale.clone(),speed:t,amount:n,phase:r},e}var tf=31;function nf(e){let t=e.userData;return!!(t.spin||t.pulse||t.noBake||t.flame||t.thrust)}function rf(e){return e instanceof z&&e.material instanceof ko}function af(e,t){let n=e.index?e.toNonIndexed():e.clone();for(let e of Object.keys(n.attributes))e!==`position`&&e!==`normal`&&e!==`uv`&&n.deleteAttribute(e);if(n.attributes.normal||n.computeVertexNormals(),n.attributes.uv||n.setAttribute(`uv`,new wr(new Float32Array(n.attributes.position.count*2),2)),n.clearGroups(),n.applyMatrix4(t),t.determinant()<0)for(let e of Object.values(n.attributes)){let t=e.array,n=e.itemSize;for(let r=0;r<e.count;r+=3)for(let e=0;e<n;e++){let i=t[(r+1)*n+e];t[(r+1)*n+e]=t[(r+2)*n+e],t[(r+2)*n+e]=i}}return n}function of(e,t){e.updateMatrixWorld(!0);let n=new an().copy(e.matrixWorld).invert(),r=new an,i=new Map,a=t=>{if(!(t!==e&&nf(t))&&t.visible){if(t instanceof z&&!(t instanceof Ii)&&!rf(t)&&!Array.isArray(t.material)&&t.layers.isEnabled(0)){let e=t.material,a=t.children.some(rf),o=`${e.uuid}|${a}|${t.castShadow}`,s=i.get(o);s||(s={material:e,outlined:a,shadow:t.castShadow,geometries:[]},i.set(o,s)),s.geometries.push(af(t.geometry,r.multiplyMatrices(n,t.matrixWorld))),t.layers.set(tf);for(let e of[...t.children])rf(e)&&t.remove(e)}for(let e of[...t.children])a(e)}};a(e);let o=[];for(let n of i.values()){let r=n.geometries.length===1?n.geometries[0]:Rd(n.geometries,!1);if(!r)continue;let i=new z(r,n.material);i.castShadow=n.shadow,i.userData.baked=!0,e.add(i),n.outlined&&t&&Xd(i,t),o.push(i)}return o}var sf=new L;function cf(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;sf.copy(t),sf[r]=0,sf.normalize();let l=.5*o/(o+s),u=1-sf.angleTo(e)/c;return Math.sign(sf[n])===1?u*l:s/(o+s)+l+l*(1-u)}var lf=class e extends Ki{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new L,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=cf(m,c,`z`,`y`,i,n),f[a+1]=1-cf(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-cf(m,c,`z`,`y`,i,n),f[a+1]=1-cf(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-cf(m,c,`x`,`z`,i,e),f[a+1]=cf(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-cf(m,c,`x`,`z`,i,e),f[a+1]=1-cf(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-cf(m,c,`x`,`y`,i,e),f[a+1]=1-cf(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=cf(m,c,`x`,`y`,i,e),f[a+1]=1-cf(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},uf=16765503,df=G.cadet.trim,ff=2830134,pf={scrap:{main:G.scrap.plate,seam:G.scrap.seam,frame:3817286,trim:10133931,glow:G.scrap.glow},cadet:{main:G.cadet.plate,seam:df,frame:1975347,trim:df,glow:G.cadet.glow},recon:{main:G.recon.plate,seam:G.recon.trim,frame:G.recon.under,trim:G.recon.trim,glow:G.recon.glow},siege:{main:G.siege.plate,seam:G.siege.trim,frame:G.siege.under,trim:G.siege.trim,glow:G.siege.glow},storm:{main:G.storm.plate,seam:G.storm.gold,frame:G.storm.under,trim:G.storm.trim,glow:G.storm.light},crimson:{main:G.crimson.plate,seam:G.crimson.gold,frame:G.crimson.under,trim:G.crimson.gold,glow:G.crimson.glow},raider:{main:G.raider.plate,seam:G.raider.seam,frame:G.raider.under,trim:G.raider.white,glow:G.raider.visor},titan:{main:G.titan.plate,seam:G.titan.under,frame:G.titan.under,trim:G.titan.steel,glow:G.titan.glow},tempest:{main:G.tempest.plate,seam:G.tempest.line,frame:G.tempest.under,trim:G.tempest.chrome,glow:G.tempest.glow},eclipse:{main:G.eclipse.plate,seam:G.eclipse.line,frame:G.eclipse.under,trim:G.eclipse.steel,glow:G.eclipse.glow},solar:{main:G.solar.plate,seam:G.solar.gold,frame:G.solar.under,trim:G.solar.gold,glow:G.solar.glow},vanguard:{main:G.vanguard.plate,seam:G.vanguard.line,frame:G.vanguard.under,trim:G.vanguard.gunmetal,glow:G.vanguard.glow},blaze:{main:G.blaze.plate,seam:G.blaze.line,frame:G.blaze.under,trim:G.blaze.red,glow:G.blaze.gem},frost:{main:G.frost.plate,seam:G.frost.line,frame:G.frost.under,trim:G.frost.plate,glow:G.frost.ice},drake:{main:G.drake.plate,seam:G.drake.crack,frame:G.drake.under,trim:G.drake.red,glow:G.drake.gem},phantom:{main:G.phantom.plate,seam:G.phantom.line,frame:G.phantom.under,trim:G.phantom.silver,glow:G.phantom.glow},lancer:{main:G.lancer.plate,seam:G.lancer.line,frame:G.lancer.under,trim:G.lancer.navy,glow:G.lancer.glow},aegis:{main:G.aegis.plate,seam:G.aegis.gold,frame:G.aegis.under,trim:G.aegis.gold,glow:G.aegis.gem},ronin:{main:G.ronin.plate,seam:G.ronin.gold,frame:G.ronin.under,trim:G.ronin.gold,glow:G.ronin.eye},galaxy:{main:G.galaxy.plate,seam:G.galaxy.gold,frame:G.galaxy.under,trim:G.galaxy.gold,glow:16767050},infinity:{main:G.infinity.plate,seam:G.infinity.gold,frame:G.infinity.under,trim:G.infinity.gold,glow:G.infinity.gem}},mf=e=>pf[e]??pf.scrap;function q(e,t,n=0,r=0,i=0){let a=new z(e,t);return a.position.set(n,r,i),a}function J(e,t){return K(e,{emissive:e,emissiveIntensity:t})}function Y(e,t,n,r,i=0,a=0,o=0){return q(new lf(e,t,n,2,Math.min(e,t,n)*.25),r,i,a,o)}function hf(e,t,n,r,i,a,o=e){let s=q(new B(o,e,t,14),n,r,i,a);return s.rotation.z=-Math.PI/2,s}function gf(e,t,n,r,i){let a=q(new H(e,14,10),t,n,r,i);return a.scale.x=.5,a}function _f(e,t,n=1){let r=Ad.clone().multiplyScalar(1.07*n),i=Math.acos(Nt.clamp(e/r.y,-1,1)),a=new z(new H(1,32,16,0,Math.PI*2,0,i),t);return a.scale.copy(r),a}function vf(e,t,n,r,i){let a=new Ea([new I(-t/2,-n/2),new I(t/2,-n/2),new I(e/2,n/2),new I(-e/2,n/2)]),o=Math.min(.03,r*.4),s=new uo(a,{depth:r,bevelEnabled:!0,bevelSize:o,bevelThickness:o,bevelSegments:2});return s.rotateY(Math.PI/2),new z(s,i)}function yf(e,t,n,r,i){return[-1,1].map(a=>{let o=Y(.05,n*1.02,.06,i,r,0,a*((e+t)/4));return o.rotation.x=a*Math.atan2((e-t)/2,n),o})}function bf(e,t,n,r){let i=Ad.clone().multiplyScalar(1.07),a=Math.acos(Nt.clamp(e/i.y,-1,1)),o=Math.acos(Nt.clamp(t/i.y,-1,1)),s=new z(new H(1,32,12,Math.PI+n,Math.PI*2-n*2,a,o-a),r);return s.scale.copy(i),s}function xf(e,t,n,r){return q(new uo(new Ea(e.map(([e,n])=>new I(e*t,.55+(n-.55)*t))),{depth:n,bevelEnabled:!1}).translate(0,0,-n/2),r)}var Sf=[[.44,.4],[.36,.66],[.16,1.1],[.04,.8],[-.3,.75],[-.68,.4],[-.4,.52],[0,.6],[.3,.5]],Cf=[[.4,.4],[.3,.6],[.08,.8],[-.3,1.04],[-.62,.9],[-.64,.5],[-.3,.56],[.1,.58],[.3,.48]],wf=[[.12,.62],[.06,.5],[-.3,.56],[-.62,.9],[-.24,.72]],Tf=[[.42,.42],[.3,.68],[.14,1.26],[0,.86],[-.36,.66],[-.56,.42],[-.15,.56],[.25,.5]],Ef=[[.14,.62],[.06,.5],[-.24,.58],[-.36,1.08],[-.12,.74]],Df=[[-.08,0],[.08,0],[.035,.62],[0,.84],[-.035,.62]],Of=[[0,0],[.1,0],[.4,.36],[.5,.6],[.28,.42],[0,.14]],kf=[[0,0],[.08,0],[.42,.5],[.47,.64],[.3,.5],[0,.12]],Af=[[.3,.42],[.16,.66],[-.18,1.36],[-.1,.72],[-.24,.44]],jf=[[.36,.42],[.2,.75],[.1,1.25],[-.15,1.75],[-.05,1.3],[-.3,1],[-.55,.6],[-.35,.5]],Mf=[[.34,.44],[.12,.78],[-.2,1.08],[-.62,1.12],[-.3,.94],[-.12,.66],[-.36,.48]],Nf=[[.32,.46],[.16,.74],[-.32,1.24],[-.2,.86],[-.5,.46]],Pf=[[.34,.44],[.16,.76],[-.12,.74],[-.48,.56],[-.56,.4],[-.2,.55],[.2,.52]],Ff=[[.36,.42],[.2,.84],[-.04,.8],[-.45,.62],[-.56,.4],[-.2,.55],[.2,.52]];function If(e,t,n,r,i){let a=(e,t,n,r)=>q(new uo(new Ea([[-.07,0],[.07,0],[.025,e*.8],[0,e],[-.025,e*.8]].map(([e,n])=>new I(e*t,n*t))),{depth:.04,bevelEnabled:!1}).translate(0,0,-.02).rotateY(-Math.PI/2),n,-r,0,0),o=new R;o.position.set(.02,Ld(.02,0,1.07)-.12,0);for(let s=0;s<e;s++){let c=s-(e-1)/2,l=t-Math.abs(c)*.16,u=new R;u.rotation.set(c*n,0,.25),u.add(a(l,1,r,0)),i&&u.add(a(l,1.15,i,.03)),o.add(u)}return o}function Lf(e,t,n,r=1){let i=Ad.clone().multiplyScalar(1.07*r),a=Math.sqrt(Math.max(.05,1-(e/i.y)**2))*1.04,o=new z(new B(1,1,t,40,1,!0),n);return o.scale.set(i.x*a,1,i.z*a),o.position.y=e,o}function Rf(e,t,n,r,i=1.03){let a=Ad.clone().multiplyScalar(i),o=Math.asin(Math.min(.97,e/2/a.z)),s=Math.acos(Nt.clamp((n+t/2)/a.y,-1,1)),c=Math.acos(Nt.clamp((n-t/2)/a.y,-1,1)),l=new z(new H(1,28,6,Math.PI-o,o*2,s,c-s),r);return l.scale.copy(a),l}function zf(e){let t=mf(e),n=new R,r=K(t.main),i=J(t.glow,.9);switch(e){case`cadet`:{let e=J(df,.15);n.add(_f(.16,r),bf(.2,-.58,.85,r),Lf(.2,.07,e)),n.add(Rf(.84,.08,.08,i,1.09),Rf(.8,.5,-.29,r,1.08)),n.add(Y(.05,.44,.06,e,Id(-.26,0,1.1),-.26,0)),n.add(xf(Sf,1,.05,e),xf(Sf,.86,.08,r));for(let t of[-1,1]){let i=new R;i.position.set(-.1,.4,t*.5),i.rotation.set(-t*.35,0,.6),i.add(Y(.55,.13,.05,r,-.2,0,0),Y(.5,.04,.06,e,-.2,.06,0)),n.add(i)}break}case`recon`:{let e=J(df,.15),t=q(new V(.07,.42,8),r,.05,Ld(.05,0,1.07)+.16,0);n.add(_f(.12,r),bf(.16,-.58,.82,r),Lf(.16,.05,e),xf(Pf,1,.06,r),t),n.add(Rf(.7,.62,-.25,K(G.recon.under),1.1),Rf(.6,.07,.1,i,1.11));for(let t of[-1,1]){let i=new R;i.position.set(.18,-.22,t*.5),i.rotation.set(-t*.18,0,-.2),i.add(Y(.36,.3,.05,r),Y(.36,.04,.06,e,0,-.15,0)),n.add(i)}break}case`raider`:{let{white:e,under:t}=G.raider,a=K(e);n.add(_f(.14,r),bf(.18,-.58,.8,a),Lf(.18,.05,K(t)),xf(Pf,.95,.16,r)),n.add(Rf(.86,.62,-.25,a,1.14),Rf(.72,.08,.08,i,1.15)),n.add(Y(.05,.34,.1,r,Id(-.3,0,1.15),-.3,0));for(let e of[-1,1]){let t=new R;t.position.set(.16,-.24,e*.5),t.rotation.set(-e*.18,0,-.2),t.add(Y(.38,.32,.06,a),Y(.38,.05,.07,r,0,.16,0)),n.add(t)}break}case`siege`:{let e=K(G.siege.trim);n.add(_f(.1,r),bf(.14,-.58,.8,r),xf(Cf,1,.05,e),xf(Cf,.84,.08,r)),n.add(Rf(.86,.62,-.25,e,1.14),Rf(.7,.07,.11,i,1.15));for(let t of[-1,1]){let r=xf(wf,1,.04,e);r.position.set(0,-.36,t*.55),r.rotation.x=t*.2,n.add(r)}break}case`storm`:{let e=K(G.storm.trim);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.04,J(G.storm.gold,.15))),n.add(xf(Tf,1,.05,e),xf(Tf,.84,.08,r)),n.add(Rf(.86,.62,-.25,r,1.14),Rf(.7,.06,.1,i,1.15),Y(.05,.44,.06,e,Id(-.28,0,1.16),-.28,0));for(let t of[-1,1]){let r=xf(Ef,1,.04,e);r.position.set(0,-.3,t*.55),r.rotation.x=t*.25,n.add(r)}break}case`crimson`:{let{ivory:e,steel:t,gem:a}=G.crimson,o=J(G.crimson.gold,.2);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.05,o),xf(Pf,1,.06,r)),n.add(Rf(.86,.62,-.25,K(t),1.14),Rf(.7,.06,.1,i,1.15));let s=new R;s.position.set(.52,.24,0),s.rotation.z=.35,s.add(q(new H(.07,12,10),J(a,.6),.03,0,0));for(let t of[-1,1]){let r=new Ea(kf.map(([e,n])=>new I(e*t,n)));s.add(q(new uo(r,{depth:.04,bevelEnabled:!1}).rotateY(-Math.PI/2),o));let i=new R;i.position.set(.18,-.22,t*.5),i.rotation.set(-t*.18,0,-.2),i.add(Y(.36,.3,.05,K(e)),Y(.36,.04,.06,o,0,-.15,0)),n.add(i)}n.add(s);break}case`titan`:{let e=K(G.titan.under);n.add(_f(.12,e),bf(.16,-.58,.8,e)),n.add(Rf(.86,.62,-.25,r,1.14),Rf(.72,.12,.1,e,1.15),gf(.08,i,Id(.1,0,1.17),.1,0));for(let[e,t]of[[.22,.32],[-.04,.42],[-.3,.34]]){let i=q(new V(.07,t,6),r,e,Ld(e,0,1.07)+t/2-.06,0);i.rotation.z=.3,n.add(i)}for(let e of[-1,1])n.add(q(new H(.05,10,8),J(G.titan.light,1),.3,.32,e*.45));break}case`tempest`:{let{chrome:e,under:t}=G.tempest,a=K(e);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.05,a)),n.add(Rf(.86,.62,-.25,K(t),1.14),Rf(.7,.06,.1,i,1.15)),n.add(If(5,.82,.36,a));for(let e of[-1,1]){let t=new R;t.position.set(.18,-.22,e*.5),t.rotation.set(-e*.18,0,-.2),t.add(Y(.36,.3,.05,a),Y(.32,.035,.06,i,0,-.08,0)),n.add(t)}break}case`eclipse`:{let{steel:e,under:t,light:a}=G.eclipse,o=K(e);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.05,o)),n.add(Rf(.86,.36,-.38,o,1.14),Rf(.8,.26,-.08,K(t),1.145));for(let[e,t,i]of[[0,1,o],[-.09,.82,r],[.09,.82,r]]){let r=xf(Nf,t,.04,i);r.position.z=e,r.rotation.x=e*2.5,n.add(r)}for(let e of[-1,1])n.add(gf(.06,i,Id(-.07,e*.15,1.16),-.07,e*.15),q(new H(.05,10,8),J(a,1),.3,.32,e*.45));break}case`solar`:{let{under:e,gold:t,gem:a,light:o}=G.solar,s=J(t,.2);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.05,s)),n.add(Rf(.86,.36,-.38,r,1.14),Rf(.8,.26,-.08,K(e),1.145),Rf(.66,.05,-.07,i,1.15));let c=new Ea([[-.13,.06],[-.08,.06],[0,-.03],[.08,.06],[.13,.06],[0,-.1]].map(([e,t])=>new I(e,t)));n.add(q(new uo(c,{depth:.03,bevelEnabled:!1}).rotateY(Math.PI/2),s,Id(-.34,0,1.15),-.34,0));let l=(e,t,n,r)=>q(new uo(new Ea(e.map(([e,n])=>new I(e*t,n*t))),{depth:.04,bevelEnabled:!1}).rotateY(-Math.PI/2),n,-r,0,0),u=e=>e.map(([e,t])=>[-e,t]),d=new R;d.position.set(.5,.26,0),d.rotation.z=.2,d.add(q(new go(.08,0),J(a,.5),.04,.02,0));for(let e of[Df,Of,u(Of)])d.add(l(e,1.14,s,.03),l(e,1,r,0));n.add(d);for(let e of[-1,1])n.add(q(new H(.05,10,8),J(o,1),.3,.32,e*.45));break}case`vanguard`:{let e=J(t.glow,.8);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.03,e)),n.add(Rf(.86,.62,-.25,r,1.14),Rf(.62,.05,.08,J(G.vanguard.eye,.9),1.15)),n.add(xf(Mf,1.07,.03,e),xf(Mf,1,.06,r));let i=new Ea([[-.15,.07],[-.1,.07],[0,-.03],[.1,.07],[.15,.07],[0,-.11]].map(([e,t])=>new I(e,t)));n.add(q(new uo(i,{depth:.03,bevelEnabled:!1}).rotateY(Math.PI/2),e,Id(-.3,0,1.15),-.3,0));break}case`blaze`:{let e=J(G.blaze.glow,.8);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.03,e)),n.add(Rf(.86,.62,-.25,r,1.14),Rf(.66,.05,.08,i,1.15),If(5,.98,.42,r,e));let t=q(new go(.07,0),i,Id(.24,0,1.12),.24,0);t.scale.set(.5,1.4,1),n.add(t);break}case`frost`:{let e=J(G.frost.ice,.8);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.03,e)),n.add(Rf(.86,.62,-.25,r,1.14),Rf(.2,.07,-.36,K(G.frost.mask),1.15));for(let t of[-1,1]){let a=gf(.075,i,Id(-.04,t*.15,1.16),-.04,t*.15);a.scale.set(.4,.55,1.3),a.rotation.x=t*.45;let o=new R;o.position.z=t*.2,o.rotation.x=t*.28,o.add(xf(Af,1.06,.03,e),xf(Af,1,.05,r)),n.add(a,o)}break}case`drake`:{let{red:e,lava:t}=G.drake,a=K(e),o=J(t,.8);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.03,o)),n.add(Rf(.86,.36,-.38,a,1.14),Rf(.8,.26,-.08,r,1.145));for(let e of[-.3,-.37,-.44])n.add(Y(.03,.025,.2,r,Id(e,0,1.15),e,0));for(let e of[-1,1]){let t=new R;t.position.set(Id(-.06,e*.17,1.16),-.06,e*.17),t.rotation.set(-e*.38,-e*.26,0);for(let[e,n,r]of[[1.3,a,-.01],[1,i,.005]]){let i=q(new go(.1*e,0),n,r,0,0);i.scale.set(.3,.4,1.5),t.add(i)}let r=new R;r.position.set(-.3,.48,e*.38),r.rotation.set(e*.35,0,1.15),r.add(q(new V(.11,.62,8),a,0,.31,0),q(new V(.045,.16,8),o,0,.66,0)),n.add(t,r)}for(let e=0;e<3;e++){let t=.15-e*.24;n.add(q(new V(.07,.3-e*.04,4),a,t,Ld(t,0,1.07)+.1,0))}break}case`phantom`:{let e=K(G.phantom.silver);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.03,e)),n.add(Rf(.86,.62,-.25,r,1.14),Rf(.7,.04,0,i,1.15));let t=q(new V(.035,.75,6),e,-.08,Ld(-.08,0,1.07)+.3,0);t.rotation.z=.15;let a=new R;a.position.set(Id(.16,.2,1.16),.16,.2),a.rotation.y=-.3;let o=q(new U(.1,.022,8,24),e);o.rotation.y=Math.PI/2,a.add(o,gf(.085,i,0,0,0)),n.add(t,a);for(let t of[-1,1]){let i=new R;i.position.set(0,-.3,t*.55),i.rotation.x=t*.2,i.add(xf(wf,1.08,.03,e),xf(wf,1,.05,r)),n.add(i)}break}case`lancer`:{let e=K(t.trim);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.05,e)),n.add(Rf(.86,.62,-.25,e,1.14),Rf(.7,.06,.08,i,1.15));let a=new R;a.position.set(.5,.26,0),a.rotation.z=.35,a.add(q(new go(.07,0),i,.04,.02,0),q(new V(.04,.62,6),r,-.03,.31,0));for(let t of[-1,1]){for(let[n,r,o]of[[1.12,i,.03],[1,e,0]]){let e=new Ea(kf.map(([e,r])=>new I(e*t*n,r*n)));a.add(q(new uo(e,{depth:.04,bevelEnabled:!1}).rotateY(-Math.PI/2),r,-o,0,0))}let o=new R;o.position.set(.18,-.22,t*.5),o.rotation.set(-t*.18,0,-.2),o.add(Y(.36,.3,.05,r),Y(.32,.035,.06,i,0,-.08,0)),n.add(o,q(new H(.05,10,8),J(G.lancer.light,1),.3,.32,t*.45))}n.add(a);break}case`aegis`:{let e=J(G.aegis.gold,.2);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.05,e),If(5,.95,.3,r,e)),n.add(Rf(.86,.62,-.25,K(G.aegis.under),1.14),Rf(.66,.06,.08,i,1.15),Y(.05,.3,.07,i,Id(-.08,0,1.15),-.08,0));for(let t of[-1,1]){n.add(q(new H(.05,10,8),J(G.aegis.light,1),.3,.32,t*.45));for(let[r,i]of[[.5,.42],[.9,.32]]){let a=new R;a.position.set(-.05,.3,t*.62),a.rotation.set(t*r,0,.6),a.add(Y(.05,i,.08,e,0,i/2,0)),n.add(a)}}break}case`ronin`:{let{gunmetal:e,gold:t}=G.ronin,a=J(t,.4),o=K(e);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.04,a),Rf(.86,.62,-.25,r,1.14));let s=q(new U(.42,.06,6,28,Math.PI),a,.55,.95,0);s.rotation.set(0,Math.PI/2,Math.PI),s.scale.set(1,1.75,1);let c=q(new go(.07,0),i,.6,.22,0);c.scale.set(.5,1.3,1),n.add(s,c);for(let e of[-1,1]){let t=gf(.075,i,Id(-.04,e*.15,1.16),-.04,e*.15);t.scale.set(.4,.45,1.4),t.rotation.x=-e*.4,n.add(t)}let l=.95;for(let e=0;e<3;e++){let t=-.2-e*.13,r=.6+e*.06,i=.72+e*.08;n.add(q(new B(r,i,.14,28,1,!0,Math.PI/2+l,Math.PI*2-l*2),o,-.04,t,0))}n.add(q(new B(.89,.9,.03,28,1,!0,Math.PI/2+l,Math.PI*2-l*2),a,-.04,-.52,0));break}case`galaxy`:{let e=J(G.galaxy.gold,.6);n.add(_f(.12,r),bf(.16,-.58,.8,r),Lf(.16,.04,e)),n.add(Rf(.86,.62,-.25,K(G.galaxy.dark),1.14),Rf(.7,.06,.08,i,1.15)),n.add(xf(jf,1.06,.03,e),xf(jf,1,.06,r));for(let t of[-1,1]){let i=new R;i.position.set(0,-.3,t*.55),i.rotation.x=t*.25,i.add(xf(Ef,1.08,.03,e),xf(Ef,1,.05,r)),n.add(i,q(new H(.05,10,8),J(16774880,1),.3,.32,t*.45))}break}case`infinity`:{let{plate:e,deep:t,gold:r}=G.infinity,a=J(e,.3),o=J(r,.5);n.add(_f(.12,a),bf(.16,-.58,.8,a),Lf(.16,.04,o),If(5,1.25,.34,a,o)),n.add(Rf(.86,.62,-.25,K(t),1.14),Rf(.7,.06,.08,i,1.15));let s=q(new go(.07,0),i,Id(.24,0,1.12),.24,0);s.scale.set(.5,1.4,1),n.add(s);for(let e of[-1,1]){let t=new R;t.position.set(0,-.3,e*.55),t.rotation.x=e*.25,t.add(xf(Ef,1.08,.03,o),xf(Ef,1,.05,a)),n.add(t,q(new H(.05,10,8),J(16777215,1),.3,.32,e*.45))}break}default:n.add(_f(.1,r),bf(.14,-.58,.8,r),xf(Ff,1,.07,r)),n.add(Rf(.66,.62,-.25,K(t.seam),1.1),Rf(.56,.07,.12,i,1.11))}return n}function Bf(e){let t=mf(e),n=new R,r=K(t.main),i=K(ff),a=J(t.glow,.8),o=(e,t,n,i=.08)=>Y(e,t,n,r,0,i+t/2,0),s=(e=1.2,t=.74)=>Y(e,.1,t,i,0,.05,0),c=()=>q(new B(.24,.27,.3,14),i,-.15,.55,0);switch(e){case`cadet`:{let e=J(df,.15),t=q(new V(.34,.5,4),r,.62,.2,0);t.rotation.set(Math.PI/4,0,-Math.PI/2),t.scale.set(.8,1,.9);let i=q(new B(.33,.27,.36,8),r,-.15,.6,0);n.add(s(1.3,.7),o(.95,.36,.64,.06),t,Y(.5,.05,.07,e,.42,.43,0),i),n.add(q(new U(.32,.03,6,18),e,-.15,.78,0).rotateX(Math.PI/2));break}case`recon`:{let e=q(new V(.32,.46,4),r,.6,.2,0);e.rotation.set(Math.PI/4,0,-Math.PI/2),e.scale.set(.8,1,.9),n.add(s(1.25,.68),o(1,.36,.64,.06),e,Y(.45,.04,.06,J(df,.15),.4,.42,0),c());break}case`raider`:{let e=K(G.raider.white);n.add(s(1.25,.7),...Rp(r,e,e));break}case`siege`:{let e=K(G.siege.trim);n.add(s(1.25,.72),o(1.05,.38,.68,.06),Y(.34,.28,.7,e,.42,.22,0),q(new B(.36,.29,.3,10),e,-.15,.62,0));break}case`storm`:{let e=K(G.storm.trim),t=q(new H(.36,16,8,0,Math.PI*2,0,Math.PI/2),e,.38,.06,0);t.scale.set(1,.85,.95),n.add(s(1.3,.76),o(1.05,.4,.7,.06),t,Y(.5,.04,.06,J(G.storm.gold,.15),0,.47,0)),n.add(q(new B(.34,.28,.34,10),r,-.15,.62,0),q(new U(.34,.03,6,18),e,-.15,.79,0).rotateX(Math.PI/2));break}case`crimson`:n.add(s(1.3,.7),...Rp(r,K(G.crimson.ivory),J(G.crimson.gold,.2)));break;case`titan`:{let e=K(G.titan.under),t=q(new V(.34,.5,4),e,.62,.2,0);t.rotation.set(Math.PI/4,0,-Math.PI/2),t.scale.set(.8,1,.9),n.add(s(1.3,.76),o(1.02,.42,.72,.06),t,Y(.12,.44,.76,K(G.titan.steel),.15,.28,0)),n.add(q(new B(.34,.29,.34,10),r,-.15,.64,0),q(new U(.34,.035,6,18),e,-.15,.81,0).rotateX(Math.PI/2));break}case`tempest`:{let{chrome:e,under:t}=G.tempest,i=K(e),o=q(new V(.34,.5,4),i,.62,.2,0);o.rotation.set(Math.PI/4,0,-Math.PI/2),o.scale.set(.8,1,.9),n.add(s(1.3,.7),Y(.98,.38,.66,K(t),0,.25,0),o,Y(.5,.04,.06,a,.42,.45,0)),n.add(q(new B(.33,.27,.36,8),r,-.15,.6,0),q(new U(.32,.03,6,18),i,-.15,.78,0).rotateX(Math.PI/2));break}case`eclipse`:{let e=K(G.eclipse.steel),t=J(G.eclipse.accent,.8),i=q(new H(.36,16,8,0,Math.PI*2,0,Math.PI/2),e,.38,.06,0);i.scale.set(1,.85,.95),n.add(s(1.3,.76),o(1.05,.4,.7,.06),i,Y(.12,.42,.74,e,-.1,.27,0));for(let e of[-.37,.37])n.add(q(new H(.045,10,8),t,-.3,.3,e));n.add(q(new B(.34,.28,.34,10),r,-.15,.62,0),q(new U(.34,.03,6,18),e,-.15,.79,0).rotateX(Math.PI/2));break}case`solar`:n.add(s(1.3,.7),...Rp(r,r,J(G.solar.gold,.2)));break;case`vanguard`:{let e=J(t.glow,.8);n.add(s(1.3,.7),...Rp(r,r,e),Wf(e));break}case`blaze`:{let e=J(G.blaze.glow,.8),t=q(new V(.06,.3,6),e,-.68,.32,0);t.rotation.z=Math.PI/2-.3,n.add(s(1.3,.7),...Rp(r,r,e),t);break}case`frost`:n.add(Vf(a),...Rp(r,r,a));break;case`drake`:{let{red:e,lava:t,bone:r}=G.drake,i=q(new V(.07,.3,6),J(t,.8),-.7,.3,0);i.rotation.z=Math.PI/2,n.add(s(1.25,.72),o(1.05,.4,.7,.06),Y(.36,.3,.74,K(e),.4,.24,0),c(),i,...Hf(K(r),3)),n.add(q(new H(.05,10,8),a,.1,.47,0));break}case`phantom`:n.add(s(1.3,.7),...Rp(r,r,K(t.trim)),q(new H(.05,10,8),a,.1,.47,0));break;case`lancer`:n.add(Vf(a),...Rp(r,r,K(t.trim)),Wf(a));break;case`aegis`:{let e=J(G.aegis.gold,.2);n.add(Vf(a),...Rp(r,r,e),Uf(e),q(new go(.05,0),J(G.aegis.red,.6),.1,.47,0));break}case`ronin`:n.add(s(1.3,.7),...Rp(r,r,J(G.ronin.gold,.4)));break;case`galaxy`:n.add(s(1.3,.7),...Rp(r,r,J(G.galaxy.gold,.6)),Wf(J(G.galaxy.flame,.9)));break;case`infinity`:{let{plate:e,gold:t,aura:r}=G.infinity,i=J(e,.3),a=J(t,.5),o=J(r,.9);n.add(Vf(o),...Rp(i,i,a),Uf(a),Wf(o));break}default:n.add(s(1.2,.7),o(1.05,.38,.66,.06),Y(.3,.26,.64,K(t.seam),.42,.2,0),c())}return n}function Vf(e){let t=q(new B(.5,.5,.04,24),e,0,.03,0);return t.scale.set(1.3,1,.85),t}function Hf(e,t){return Array.from({length:t},(n,r)=>{let i=q(new V(.08,.26,6),e,.72,.14,(r-(t-1)/2)*.22);return i.rotation.z=-Math.PI/2,i})}function Uf(e){let t=new R;for(let n of[-1,1])for(let[r,i]of[[.5,.42],[.85,.32],[1.2,.24]]){let a=new R;a.position.set(-.1,.55,n*.32),a.rotation.z=-r,a.add(Y(i,.06,.04,e,-i/2,0,0)),t.add(a)}return t}function Wf(e){let t=new R,n=q(new V(.08,.3,10),e,-.82,.3,0);return n.rotation.z=Math.PI/2,t.add(hf(.12,.16,K(ff),-.6,.3,0,.09),n),t}function Gf(e,t){let n=mf(e),r=new R,i=K(n.main),a=J(n.glow,.8),o=(e=i,n=.92)=>Kf(t,e,n),s=e=>Kf(t,null,.92,e);switch(e){case`cadet`:{let e=J(df,.15);r.add(o(i,1),s(e),qf(t,t*.93,.09,e),Yf(t,i,e));for(let n of[-1,1]){for(let a=0;a<3;a++)r.add(Jf(t,n,a,i,e));r.add(Sp(t,n,i,e))}break}case`recon`:{let e=J(df,.15),n=K(G.recon.under);r.add(o(i,.95),s(e),qf(t,t*.93,.1,n),Xf(t,t*.66,e),Yf(t,i,e));for(let a of[-1,1])r.add(Zf(t,a,i,n,e),Sp(t,a,i,e));break}case`raider`:{let{white:e,under:n,light:a}=G.raider,c=K(e),l=J(a,.9);r.add(o(i,.98),s(c),qf(t,t*.93,.1,K(n)),Xf(t,t*.66,c),Yf(t,i,c)),r.add(q(new H(.05,10,8),l,Fd(t,t*.52)+.12,t*.52,0));for(let e of[-1,1])r.add(pp(t,e,i,c,l),Sp(t,e,c,i,1.1));break}case`siege`:{let e=K(G.siege.trim);r.add(o(i,.95),s(e),qf(t,t*.93,.1,K(G.siege.under)),Xf(t,t*.66,e),Yf(t,e,i));for(let n of[-1,1])r.add(Qf(t,n,i,e),Sp(t,n,e,i,1.25));break}case`storm`:{let{trim:e,under:n,vent:a,light:c}=G.storm,l=K(e);r.add(o(i,.95),s(l),qf(t,t*.93,.1,K(n)),bp(t,K(n),J(a,.9)),Yf(t,i,l));for(let e of[-1,1])r.add(yp(t,e,i,l,J(c,1)),Sp(t,e,i,l,1.15));break}case`crimson`:{let e=J(G.crimson.gold,.2),n=K(G.crimson.ivory);r.add(o(n,.95),s(e),qf(t,t*.93,.1,e),_p(t,t*.66,e),Yf(t,i,e));for(let a of[-1,1])r.add(Zf(t,a,n,i,e),Sp(t,a,n,e,1.15),vp(t,a,e,i));break}case`titan`:{let{under:e,steel:n,blade:c}=G.titan,l=K(e),u=K(n),d=t*.62;r.add(o(i,.95),s(u),qf(t,t*.93,.1,l)),r.add(hf(.15,.05,l,Fd(t,d)+.09,d,0),hf(.08,.06,a,Fd(t,d)+.11,d,0));for(let e of[-1,1])r.add($f(t,e,i,u),Sp(t,e,i,u,1.15));r.add(ep(t,l,u),tp(t,K(c),a));break}case`tempest`:{let{chrome:e,under:n}=G.tempest,c=K(e),l=K(n);r.add(o(i,.95),s(c),qf(t,t*.93,.1,l),mp(t,c,a),Yf(t,l,c));for(let e of[-1,1])r.add(xp(t,e,i,c),hp(t,e,c,i,a),gp(t,e,l,c,a));break}case`eclipse`:{let{steel:e,under:n,accent:c,wing:l}=G.eclipse,u=K(e),d=t*.62;r.add(o(i,.95),s(u),qf(t,t*.93,.1,K(n)),Yf(t,i,u)),r.add(hf(.15,.05,u,Fd(t,d)+.09,d,0),hf(.08,.06,a,Fd(t,d)+.11,d,0));for(let e of[-1,1])r.add(fp(t,e,i,u,K(n),J(c,.8)),gp(t,e,i,u,a));r.add(Pp(t,i,J(l,.6),J(15661311,.9),5,2.3));break}case`solar`:{let{gold:e,gem:n}=G.solar,c=J(e,.2);r.add(o(i,.95),s(c),qf(t,t*.93,.1,c),Xf(t,t*.66,c),mp(t,c,J(n,.5)),Yf(t,i,c));for(let e of[-1,1])r.add(sp(t,e,i,c,J(n,.5)),Sp(t,e,i,c,1.2));r.add(Pp(t,i,J(e,.3),a,6,2.7));break}case`vanguard`:r.add(o(i,.95),s(a),qf(t,t*.93,.1,K(n.frame)),_p(t,t*.66,a),Yf(t,i,a));for(let e of[-1,1])r.add(op(t,e,i,a),Sp(t,e,i,a,1.15));r.add(Ep(t,n),Pp(t,i,i,a,5,2.3));break;case`blaze`:{let e=J(G.blaze.glow,.8);r.add(o(K(G.blaze.red),.95),s(e),qf(t,t*.93,.1,K(n.frame)),mp(t,e,J(n.glow,.6),t*.7),Yf(t,i,e));for(let n of[-1,1])r.add(np(t,n,i,e),Sp(t,n,i,e,1.2));r.add(ip(t,i,e));break}case`frost`:{let{teal:e,mask:c}=G.frost,l=J(e,.8),u=t*.5;r.add(o(i,.95),s(a),qf(t,t*.93,.1,K(n.frame)),Yf(t,i,a)),r.add(hf(.14,.05,K(c),Fd(t,u)+.09,u,0),hf(.08,.06,l,Fd(t,u)+.11,u,0));for(let e of[-1,1])r.add(fp(t,e,i,a,K(c),l),dp(t,e,i,a),Sp(t,e,i,a,1.2));r.add(Pp(t,i,i,a,5,2.4));break}case`drake`:{let{red:e,lava:c}=G.drake,l=K(e),u=J(c,.8),d=t*.5;r.add(o(i,.95),s(u),qf(t,t*.93,.1,K(n.frame)),Xf(t,t*.7,u),Yf(t,i,u)),r.add(hf(.13,.05,l,Fd(t,d)+.09,d,0),q(new H(.07,12,10),a,Fd(t,d)+.12,d,0));for(let e of[-1,1])r.add(cp(t,e,l,i,u,a),Sp(t,e,l,u,1.2));r.add(Dp(t,u,K(5901581),2.2),Op(t,i,l,u));break}case`phantom`:{let e=K(n.trim);r.add(o(i,.95),s(e),qf(t,t*.93,.1,K(n.frame)),Xf(t,t*.58,a),Xf(t,t*.47,a),Yf(t,i,e));for(let n of[-1,1])r.add(sp(t,n,i,e,a),Sp(t,n,i,e,1.2)),r.add(q(new H(.06,10,8),a,.1,.2,n*(Pd(t,.2)+.04)));r.add(rp(t,i,e,a),kp(t,n,2,i));break}case`lancer`:{let e=K(n.trim),c=t*.6;r.add(o(i,.95),s(e),qf(t,t*.93,.1,e),Xf(t,t*.8,e),Yf(t,e,i)),r.add(hf(.15,.05,e,Fd(t,c)+.09,c,0),hf(.08,.06,a,Fd(t,c)+.11,c,0));for(let a of[-1,1])r.add(Zf(t,a,i,e,e),Sp(t,a,i,e,1.15),Cp(t,n,a,3,1,1,Tp));r.add(Ep(t,n),Pp(t,e,i,a,4,2.5),kp(t,n,3,e));break}case`aegis`:{let{gold:e,red:c}=G.aegis,l=J(e,.2);r.add(o(i,.95),s(l),qf(t,t*.93,.1,K(n.frame)),mp(t,l,a,t*.7),mp(t,l,J(c,.6)),Yf(t,i,l));for(let e of[-1,1])r.add(up(t,e,i,l,a),Sp(t,e,i,l,1.15),Cp(t,n,e,3,2,1.2,Tp));r.add(Pp(t,l,i,a,7,3.5),Pp(t,l,i,a,5,2.1,{height:.35,from:1.45,to:2.35})),r.add(Ap(t,n),kp(t,n,3,i));break}case`ronin`:{let{gunmetal:e,gold:a}=G.ronin,c=J(a,.4),l=K(e);r.add(o(i,.95),s(c),qf(t,t*.93,.1,l),_p(t,t*.66,c),Yf(t,i,c));for(let e of[-1,1])r.add(lp(t,e,i,c),Sp(t,e,i,c,1.3),Cp(t,n,e,3,2,1.2,Tp),Ap(t,n,e));let u=J(a,.5),d=J(16774084,.9);r.add(Pp(t,l,u,d,6,3.3),Pp(t,l,u,d,5,2,{height:.35,from:1.45,to:2.35}),kp(t,n,4,l));break}case`galaxy`:{let{dark:e,gold:a,blade:c,flame:l}=G.galaxy,u=J(a,.6),d=K(e);r.add(o(i,.95),s(u),qf(t,t*.93,.1,d),_p(t,t*.66,u),Yf(t,i,u));for(let e of[-1,1])r.add(Zf(t,e,i,d,u),Sp(t,e,i,u,1.3),Cp(t,n,e,3,3,1.4,Tp),Ap(t,n,e));let f=J(c,.6),p=J(l,.9);r.add(Pp(t,u,f,p,7,4),Pp(t,u,f,p,5,2.5,{height:.35,from:1.45,to:2.35})),r.add(kp(t,n,4,d),Np(t,l));break}case`infinity`:{let{plate:e,deep:i,gold:c,crystal:l,aura:u}=G.infinity,d=J(e,.3),f=J(c,.5),p=J(l,.5),m=J(16777215,.9);r.add(o(d,.95),s(f),qf(t,t*.93,.1,K(i)),_p(t,t*.66,f),mp(t,f,a),Yf(t,d,f));for(let e of[-1,1])r.add(cp(t,e,d,p,f,a),Sp(t,e,d,f,1.3),Cp(t,n,e,4,3,1.6,Tp),Ap(t,n,e));r.add(Pp(t,f,p,m,8,4.6),Pp(t,f,p,m,6,3,{height:.62,from:.95,to:1.7}),Pp(t,f,p,m,5,2.4,{height:.35,from:1.45,to:2.35})),r.add(Ep(t,n),kp(t,n,5,K(i)),Np(t,u,16777215));break}default:{let e=K(n.seam);r.add(o(i,.9),qf(t,t*.93,.08,e),Yf(t,i,e));for(let n of[-1,1])r.add(xp(t,n,i,e),Sp(t,n,i,e))}}return r}function Kf(e,t,n,r){let i=e*.4,a=e*.86,o=Fd(e,i),s=Fd(e,a),c=Math.hypot(a-i,s-o),l=n*.5,u=new R;return u.position.set((o+s)/2-.03,(i+a)/2,0),u.rotation.z=-Math.atan2(s-o,a-i),t&&u.add(vf(n,l,c,.08,t)),r&&u.add(...yf(n,l,c,.13,r)),u}function qf(e,t,n,r){let i=Pd(e,t)*1.05,a=q(new B(1,1,n,36,1,!0,Math.PI/2-1.7,3.4),r,0,t,0);return a.scale.set(i*jd,1,i),a}function Jf(e,t,n,r,i){let a=new R;a.position.set(-.02,e+.16-n*.17,t*(.74+n*.09)),a.rotation.x=t*(.35+n*.22);let o=.84-n*.05,s=.52+n*.05;return a.add(Y(o,.1,s,r),Y(o*1.02,.05,.06,i,0,-.01,s/2*t)),a}function Yf(e,t,n){let r=new R;r.position.set(Fd(e,.2)+.03,.16,0),r.rotation.z=kd;let i=(e,t,n,r)=>{let i=new uo(new Ea([[-.2,0],[.2,0],[.12,-.45],[0,-.7],[-.12,-.45]].map(([t,n])=>new I(t*e,n*e))),{depth:t,bevelEnabled:!1});return i.rotateY(Math.PI/2),q(i,n,r,0,0)};return r.add(i(1.12,.04,n,-.01),i(1,.07,t,0)),r}function Xf(e,t,n){let r=new uo(new Ea([[-.17,.08],[-.11,.08],[0,-.04],[.11,.08],[.17,.08],[0,-.13]].map(([e,t])=>new I(e,t))),{depth:.03,bevelEnabled:!1});return r.rotateY(Math.PI/2),q(r,n,Fd(e,t)+.12,t,0)}function Zf(e,t,n,r,i){let a=xp(e,t,r,r);a.position.y-=.1,a.scale.set(1.1,1,1.1);let o=xp(e,t,n,i);o.position.y-=.22,o.position.z+=t*.1,o.rotation.x=t*.4,o.scale.setScalar(.85);let s=new R;return s.add(a,o,xp(e,t,n,i)),s}function Qf(e,t,n,r){let i=xp(e,t,n,r);i.position.y-=.2,i.position.z+=t*.09,i.rotation.x=t*.4,i.scale.setScalar(.85);let a=q(new uo(new Ea([[.3,.02],[-.1,-.05],[-.72,.3],[-.5,.38],[-.4,.28],[-.2,.3],[.08,.18]].map(([e,t])=>new I(e,t))),{depth:.05,bevelEnabled:!1}).translate(0,0,-.025),r,0,e+.3,t*.82);a.rotation.x=t*.15;let o=new R;return o.add(i,xp(e,t,n,r),a),o}function $f(e,t,n,r){let i=new L(0,1,0),a=new xa(new L(-.05,e+.2,t*.7),new L(-.05,e+.68,t*1.05),new L(-.1,e+.56,t*1.68)),o=(e,t)=>new uo(new Ea(e.map(([e,t])=>new I(e,t))),{depth:t,bevelEnabled:!1}).translate(0,0,-t/2),s=(e,t,n,r)=>o([[-e/2,-n/2],[e/2,-n/2],[t/2,n/2],[-t/2,n/2]],r),c=(e,t,n)=>{let r=q(e,t);return r.position.copy(a.getPointAt(n)),r.quaternion.setFromUnitVectors(i,a.getTangentAt(n)),r},l=e=>.58-e*.3,u=new R;u.add(xp(e,t,n,r));let d=a.getLength()/6;for(let e=0;e<6;e++){let t=(e+.5)/6;u.add(c(s(l(e/6),l((e+1)/6),d*.84,.12),n,t)),e>0&&u.add(c(s(l(e/6)*.88,l(e/6)*.88,d*.3,.09),r,e/6))}let f=l(1),p=c(o([[-f/2,0],[f/2,0],[0,.4]],.1),r,1);return p.position.addScaledVector(a.getTangentAt(1),-.02),u.add(p),u}function ep(e,t,n){let r=e*.5,i=e*.86,a=Fd(e,r),o=Fd(e,i),s=new R;s.position.set(-(a+o)/2-.06,(r+i)/2,0),s.rotation.z=Math.atan2(o-a,i-r);let c=(e,t,n,r)=>q(new uo(e,{depth:t,bevelEnabled:!1}).translate(0,0,-t/2).rotateY(Math.PI/2),n,r,0,0),l=e=>new Ea([[0,.34],[.27,.14],[.21,-.2],[0,-.44],[-.21,-.2],[-.27,.14]].map(([t,n])=>new I(t*e,n*e))),u=new Ea(Array.from({length:8},(e,t)=>{let n=Math.PI/2+t*Math.PI/4,r=t%2?.045:.16;return new I(Math.cos(n)*r,Math.sin(n)*r)})),d=q(new U(.12,.015,6,28),n,-.05,.02,0);d.rotation.y=Math.PI/2;let f=c(u,.03,n,-.055);return f.position.y=.02,s.add(c(l(1.12),.04,n,.01),c(l(1),.06,t,-.01),d,f),s}function tp(e,t,n){let r=e*.6,i=new R;i.position.set(-Fd(e,r)+.02,r,0),i.rotation.z=kd-.22;for(let e=-3;e<=3;e++){let r=1.9-Math.abs(e)*.12,a=new Ea([[-.08,0],[.08,0],[.075,-r*.75],[0,-r],[-.075,-r*.75]].map(([e,t])=>new I(e,t))),o=new R;o.position.set(-(3-Math.abs(e))*.012,0,e*.07),o.rotation.x=e*.25,o.add(q(new uo(a,{depth:.03,bevelEnabled:!1}).translate(0,0,-.015).rotateY(Math.PI/2),t)),o.add(q(new Ki(.012,r*.6,.022),n,-.02,-r*.42,0)),i.add(o)}return i}function np(e,t,n,r){let i=[[.1,0],[-.1,0],[-.34,.54],[-.02,.16]],a=xp(e,t,n,r);a.scale.set(1.15,1.25,1.15);let o=new R;o.add(a);for(let[a,s]of[[.2,.7],[0,.9],[-.2,1.1]]){let c=new R;c.position.set(a,e+.3,t*.92),c.rotation.x=t*.25,c.add(ap(i,s*1.15,.03,r),ap(i,s,.05,n,t*.005)),o.add(c)}return o}function rp(e,t,n,r){let i=[[0,.32],[0,-.28],[.55,-.22],[1.55,.42],[1.45,.56],[.5,.4]],a=new R;for(let o of[-1,1]){let s=new R;s.rotation.y=-Math.PI/2;let c=i.map(([e,t])=>[e*o,t]);s.add(ap(c,1.05,.03,n),ap(c,1,.05,t));let[l,u,d,f]=[.55*o,.33,1.38*o,.47],p=q(new Ki(Math.hypot(d-l,f-u),.035,.06),r,(l+d)/2,(u+f)/2,0);p.rotation.z=Math.atan2(f-u,d-l),s.add(p);let m=new R;m.position.set(-.6,e*.75,o*.25),m.rotation.y=-o*.35,m.scale.setScalar(1.2),m.add(s),a.add(m)}return a}function ip(e,t,n){let r=[[0,0],[.25,-.1],[.9,.5],[1.15,1.35],[.55,.78],[.1,.42]],i=[[0,0],[.22,-.16],[1.05,-.24],[.78,.12],[.16,.2]],a=new R;for(let o of[-1,1]){let s=(e,t,n,r,i,a)=>{let s=ap(e.map(([e,t])=>[e*o,t]),t,n,r);return s.rotation.y=-Math.PI/2,s.position.set(-i,a,0),s},c=new R;c.position.set(-.62,e*.82,o*.28),c.rotation.y=-o*.3,c.scale.setScalar(1.35),c.add(s(r,1.06,.03,n,0,0),s(r,1,.05,t,0,0),s(i,1.06,.03,n,.06,-.15),s(i,1,.05,t,.06,-.15)),a.add(c)}return a}function ap(e,t,n,r,i=0){return q(new uo(new Ea(e.map(([e,n])=>new I(e*t,n*t))),{depth:n,bevelEnabled:!1}).translate(0,0,-n/2),r,0,0,i)}function op(e,t,n,r){let i=[[.3,-.1],[.12,.22],[-.16,.6],[-.14,.28],[-.46,.46],[-.32,.06],[-.1,-.16]],a=xp(e,t,n,r);a.scale.set(1.15,1.35,1.15);let o=new R;o.add(a);for(let a=0;a<2;a++){let s=new R;s.position.set(-.05-a*.15,e+.1-a*.12,t*(1.32+a*.04)),s.rotation.x=t*(.2+a*.1);let c=1-a*.2;s.add(ap(i,c*1.1,.04,r,-t*.01),ap(i,c,.06,n)),o.add(s)}return o}function sp(e,t,n,r,i){let a=[[.42,.18],[.2,.34],[-.36,.3],[-.7,-.08],[-.18,-.16],[.3,-.06]],o=(e,t,n,r)=>ap(a,e,t,n,r),s=new R;s.add(xp(e,t,n,r));for(let a=0;a<3;a++){let c=new R;c.position.set(-.02+a*.03,e+.16-a*.2,t*(1.3+a*.06)),c.rotation.set(t*(.25+a*.12),0,.1+a*.12);let l=1-a*.12;if(c.add(o(l*1.1,.04,r,-t*.01),o(l,.06,n,0)),a===0){let e=q(new go(.07,0),i,.02,.06,t*.05);e.scale.set(1.4,1,.5),c.add(e)}s.add(c)}return s}function cp(e,t,n,r,i,a){let o=xp(e,t,n,i);o.scale.set(1.15,1.3,1.15);let s=xp(e,t,n,i);s.position.y-=.2,s.position.z+=t*.1,s.rotation.x=t*.4,s.scale.setScalar(.85);let c=new R;c.add(s,o,q(new H(.06,12,10),a,.5,e+.12,t*.8));for(let n=0;n<4;n++){let i=q(new V(.07,.3-Math.abs(n-1.5)*.04,6),r,.3-n*.2,e+.2,t*1.32);i.rotation.x=t*(Math.PI/2-.5),c.add(i)}return c}function lp(e,t,n,r){let i=new R;i.add(xp(e,t,n,r));for(let a=0;a<4;a++){let o=new R;o.position.set(-.02,e+.06-a*.17,t*(.9+a*.05)),o.rotation.x=t*.25,o.add(Y(.8-a*.03,.16,.08,n),Y(.82-a*.03,.035,.09,r,0,-.08,0)),i.add(o)}return i}function up(e,t,n,r,i){let a=[[.09,0],[-.09,0],[-.05,-.62],[.01,-.82],[.06,-.58]],o=xp(e,t,n,r);o.scale.set(1.1,1.2,1.1);let s=q(new go(.07,0),i,.52,e+.12,t*.8);s.scale.set(.5,1.4,1);let c=new R;c.add(o,s);for(let i=0;i<3;i++){let o=new R;o.position.set(.15-i*.2,e+.05,t*1.3),o.rotation.set(t*.2,0,-.15-i*.22),o.add(ap(a,1.15,.03,r),ap(a,1,.05,n)),c.add(o)}return c}function dp(e,t,n,r){let i=[[.13,0],[-.13,0],[-.48,.72],[-.04,.22]],a=new R;for(let[o,s]of[[.1,.8],[-.18,1]]){let c=new R;c.position.set(o,e+.36,t*.95),c.rotation.x=t*.3,c.add(ap(i,s*1.12,.03,r),ap(i,s,.05,n)),a.add(c)}return a}function fp(e,t,n,r,i,a){let o=q(new U(.13,.03,8,24),r,0,-.02,t*.335),s=q(new B(.11,.11,.03,20),i,0,-.02,t*.325).rotateX(Math.PI/2),c=new R;return c.position.set(-.05,e+.1,t*.92),c.rotation.x=t*.18,c.add(Y(.82,.56,.6,n),Y(.7,.06,.48,r,0,.3,0),Y(.62,.4,.04,r,0,-.02,t*.3)),c.add(o,s,q(new H(.045,10,8),a,0,-.02,t*.34)),c}function pp(e,t,n,r,i){let a=new R;a.position.set(-.04,e+.06,t*.88),a.rotation.x=t*.22;let o=Y(.66,.3,.5,n,0,-.3,t*.06);return o.rotation.x=t*.25,a.add(Y(.84,.48,.62,n),Y(.9,.12,.68,r,0,.26,0),Y(.56,.1,.04,r,.02,.02,t*.32),o),a.add(q(new H(.045,10,8),i,.24,.02,t*.33)),a}function mp(e,t,n,r=e*.46){let i=new R;i.position.set(Fd(e,r)+.1,r,0);for(let[e,r,a]of[[.11,t,0],[.075,n,.025]]){let t=q(new go(e,0),r,a,0,0);t.scale.set(.4,1.6,1),i.add(t)}return i}function hp(e,t,n,r,i){let a=[[.4,.42],[-.18,.62],[-.5,.3],[-.46,-.36],[.08,-.5],[.44,-.12]],o=(e,t,n,r)=>ap(a,e,t,n,r),s=q(new Ki(.5,.035,.03),i,-.02,-.02,t*.06);s.rotation.z=.35;let c=new R;return c.position.set(-.02,e+.12,t*1.36),c.rotation.x=t*.22,c.add(o(1,.07,n,0),o(.72,.05,r,t*.03),s),c}function gp(e,t,n,r,i){let a=(e,t,n,r)=>q(new uo(new Ea([[.14,.02],[-.14,.02],[-.11,-.9],[.02,-1.3],[.11,-.86]].map(([t,n])=>new I(t*e,n*e))),{depth:t,bevelEnabled:!1}).translate(0,0,-t/2),n,0,0,r),o=new R;return o.position.set(.04,.22,t*(Pd(e,.12)+.2)),o.rotation.set(t*.42,0,kd),o.add(a(1.08,.04,r,0),a(1,.06,n,t*.01),q(new Ki(.03,.75,.02),i,0,-.48,t*.045)),o}function _p(e,t,n){let r=new uo(new Ea([[0,.16],[.05,.03],[.14,.11],[.1,-.05],[0,-.13],[-.1,-.05],[-.14,.11],[-.05,.03]].map(([e,t])=>new I(e,t))),{depth:.03,bevelEnabled:!1});return r.rotateY(Math.PI/2),q(r,n,Fd(e,t)+.12,t,0)}function vp(e,t,n,r){let i=[[.5,0],[.3,.3],[-.05,.42],[-.72,.56],[-.4,.18],[-.62,-.16],[-.22,-.26],[.02,-.5],[.28,-.24]],a=(e,t,n,r)=>ap(i,e,t,n,r),o=q(new V(.08,.7,8),n),s=new L(1,.1,t*.25).normalize();o.quaternion.setFromUnitVectors(new L(0,1,0),s),o.position.set(.3,.05,t*.06).addScaledVector(s,.35);let c=new R;return c.position.set(-.05,e+.05,t*1.38),c.rotation.x=-t*.2,c.scale.setScalar(.9),c.add(a(1,.06,n,0),a(.66,.04,r,t*.03),q(new H(.11,12,10),n,0,0,t*.05),o),c}function yp(e,t,n,r,i){let a=xp(e,t,n,r);a.scale.set(1.08,1.3,1.08);let o=xp(e,t,n,r);o.position.y-=.2,o.position.z+=t*.1,o.rotation.x=t*.4,o.scale.setScalar(.85);let s=new R;s.add(o,a,q(new H(.06,10,8),i,.15,e+.4,t*.6));for(let[n,i]of[[-.2,.75],[.3,1],[.8,.8]]){let a=q(new uo(new Ea([[0,-.1],[i*.65,-.09],[i,0],[i*.6,.1],[0,.09]].map(([e,t])=>new I(e,t))),{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),r,-.22,e+.08,t*.9);a.rotation.set(0,-t*(Math.PI/2+.3),n),s.add(a)}return s}function bp(e,t,n){let r=e*.62,i=e*.84,a=Fd(e,r),o=Fd(e,i),s=Math.hypot(i-r,o-a),c=new R;c.position.set((a+o)/2+.08,(r+i)/2,0),c.rotation.z=-Math.atan2(o-a,i-r),c.add(Y(.03,s+.06,.28,t));for(let e of[-.08,0,.08])c.add(Y(.03,s,.035,n,.015,0,e));return c}function xp(e,t,n,r){let i=new R;i.position.set(-.02,e+.02,t*.8);let a=q(new H(1,22,10,0,Math.PI*2,0,Math.PI/2),n);a.scale.set(.54,.34,.5);let o=q(new U(1,.045,6,36),r).rotateX(Math.PI/2);return o.scale.set(.54,.5,1),i.add(a,o),i}function Sp(e,t,n,r,i=1){let a=new R;return a.position.set(.02,.12,t*(Pd(e,.12)+.06)),a.rotation.set(t*.35,0,kd),a.add(Y(.5*i,.46*i,.06,n,0,-.23*i,0),Y(.52*i,.05,.07,r,0,-.45*i,0)),a}function Cp(e,t,n,r,i,a=1,o=wp){let s=new R;s.position.set(-.15,e+o.height*a,n*(1.05+.35*(a-1)));let c=new L(Math.cos(o.elevation),Math.sin(o.elevation),n*o.splay).normalize();s.quaternion.setFromUnitVectors(new L(1,0,0),c),s.scale.setScalar(a);let l=.14+r*.12,u=.14+i*.12,d=K(ff);s.add(Y(1,u,l,K(t.main)),Y(1.02,.05,l+.02,K(t.trim),0,u/2-.07,0),Y(.06,u-.05,l-.05,d,.49,0,0));let f=K(1382171),p=K(16726843);for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=(e-(r-1)/2)*.12,a=(t-(i-1)/2)*.12,o=q(new V(.04,.13,8),p,.57,a,n);o.rotation.z=-Math.PI/2,s.add(hf(.045,.04,f,.53,a,n),o)}return s.add(hf(.05,.34,d,.2,0,n*(l/2+.06)),gf(.045,J(t.glow,.9),.38,0,n*(l/2+.06))),s.add(hf(.11,.06,d,-.52,0,0)),s}var wp={height:.7,elevation:1.3,splay:.35},Tp={height:.5,elevation:kd,splay:.06};function Ep(e,t){let n=new R,r=e*.6,i=K(t.trim),a=J(t.glow,.9),o=J(16774048,1);n.add(Y(.4,.85,.8,K(t.main),-.58,r,0));for(let e of[-.5,.5]){n.add(q(new B(.15,.15,.62,16),i,-.7,r-.02,e),q(new B(.11,.16,.14,14),K(ff),-.7,r-.39,e));for(let[t,i,s]of[[.12,.55,a],[.06,.34,o]]){let a=q(new V(t,i,12),s,-.7,r-.46-i/2,e);a.rotation.x=Math.PI,a.userData.noOutline=!0,n.add(a)}}for(let e of[-1,1])n.add(Y(.34,.3,.05,i,-.7,r+.42,e*.5));return n}function Dp(e,t,n,r){let i=[[0,.25],[.35,.75],[1,.55],[.78,.2],[.85,-.12],[.58,-.02],[.5,-.38],[.26,-.1],[0,-.05]],a=[.35,.75],o=[[1,.55],[.85,-.12],[.5,-.38]],s=new R;for(let c of[-1,1]){let l=new R;l.position.set(-.72,e*.82,c*.3),l.rotation.y=-c*.3;let u=new R;u.rotation.y=-Math.PI/2;let d=new Ea(i.map(([e,t])=>new I(c*e*r,t*r)));u.add(q(new uo(d,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),n));let f=(e,n,i)=>{let a=c*e[0]*r,o=c*n[0]*r,s=Math.hypot(o-a,(n[1]-e[1])*r),l=q(new B(i*.6,i,s,8),t,(a+o)/2,(e[1]+n[1])*r/2,.03);return l.rotation.z=Math.atan2(n[1]*r-e[1]*r,o-a)-Math.PI/2,l};u.add(f([0,.25],a,.09),...o.map(e=>f(a,e,.06)));let p=q(new V(.06,.24,6),K(16051416),c*a[0]*r,a[1]*r+.14,.03);u.add(p,q(new H(.15,12,10),K(ff))),l.add(u),s.add(l)}return s}function Op(e,t,n,r){let i=new L(0,1,0),a=new aa([[-.05,0],[-.35,-.55],[-.75,-1.25],[-1.35,-1.85],[-2.05,-2.1],[-2.7,-1.9]].map(([e,t])=>new L(e,t,0))),o=new R;o.position.set(-Fd(e,.1)+.02,.1,0),o.rotation.z=kd;let s=a.getLength()/9,c=(e,t,n,r=a.getTangentAt(n))=>{let o=q(e,t);return o.position.copy(a.getPointAt(n)),o.quaternion.setFromUnitVectors(i,r),o};for(let e=0;e<9;e++){let i=(e+.5)/9,l=.15*(1-.6*i),u=a.getTangentAt(i),d=new L(u.y,-u.x,0).normalize();o.add(c(new B(l*.9,l,s*.8,8),t,i)),e>0&&o.add(c(new B(l*.78,l*.78,s*.32,8),r,e/9));let f=c(new V(l*.45,l*1.6,4),n,i,d.clone().addScaledVector(u,.6).normalize());f.position.addScaledVector(d,l*1.2),o.add(f)}let l=[[0,-.05],[.17,.1],[0,.55],[-.17,.1]],u=new R;return u.position.copy(a.getPointAt(1)),u.quaternion.setFromUnitVectors(i,a.getTangentAt(1)),u.add(ap(l,1.15,.03,r),ap(l,1,.05,n)),o.add(u),o}function kp(e,t,n,r=K(7041664)){let i=$d(new R,`y`,.9);i.position.y=e+1.5;for(let e=0;e<n;e++){let a=Math.PI/2+e/n*Math.PI*2,o=new R;o.position.set(Math.cos(a)*1.6,0,Math.sin(a)*1.6),o.rotation.y=-a;let s=q(new U(.2,.025,6,20),K(ff),0,.12,0);s.rotation.x=Math.PI/2,o.add(Y(.34,.18,.34,r),Y(.36,.04,.36,J(t.glow,.8)),gf(.08,J(t.glow,.9),.18,0,0),s,q(new B(.03,.03,.1,6),K(ff),0,.08,0)),i.add(o)}return i}function Ap(e,t,n=-1){let r=new R;r.position.set(.3,e*.55,n*1.6),r.rotation.y=-n*1;let i=$d(new R,`z`,.4);r.add(i);let a=J(uf,.4),o=q(new B(.58,.58,.07,6),K(t.main));o.rotation.x=Math.PI/2;let s=q(new B(.34,.34,.09,6),J(t.glow,.8));return s.rotation.x=Math.PI/2,i.add(o,s,q(new U(.58,.05,4,6),a),Y(.08,.5,.12,a),Y(.5,.08,.12,a)),r}var jp=null;function Mp(){if(jp)return jp;let e=document.createElement(`canvas`);e.width=64,e.height=128;let t=e.getContext(`2d`);t.scale(1,2);let n=t.createRadialGradient(32,34,2,32,32,32);return n.addColorStop(0,`rgba(255, 255, 255, 1)`),n.addColorStop(.3,`rgba(255, 255, 255, 0.8)`),n.addColorStop(.65,`rgba(255, 255, 255, 0.35)`),n.addColorStop(1,`rgba(255, 255, 255, 0)`),t.fillStyle=n,t.fillRect(0,0,64,64),jp=new Hi(e),jp.colorSpace=He,jp}function Np(e,t,n=16770720){let r=(e,t,n,r,i,a)=>{let o=new oi(e);return o.position.set(t,n,r),o.scale.set(i,a,1),o},i={map:Mp(),transparent:!0,depthWrite:!1},a=new Kr({...i,color:t,opacity:.9}),o={...i,blending:2},s=new R;for(let[t,[n,i,o,c,l]]of[[-.5,e+1.1,0,1.8,3],[-.4,e*.8,1.25,1.6,2.8],[-.4,e*.8,-1.25,1.6,2.8],[-.3,e*.3,1.45,1.4,2.4],[-.3,e*.3,-1.45,1.4,2.4],[-.2,-.6,1.1,1.2,2.2],[-.2,-.6,-1.1,1.2,2.2],[-.3,-.9,0,1.4,2]].entries())s.add(ef(r(a,n,i,o,c*1.25,l*1.25),7+t%3,.12,t*1.7));let c=new Kr({...o,color:n}),l=$d(new R,`y`,.7);for(let t=0;t<16;t++){let n=t*2.4,i=1.1+t%3*.3,a=.16+t%2*.08;l.add(ef(r(c,Math.cos(n)*i,-.4+t*.37%(e+1.4),Math.sin(n)*i,a,a*1.6),5+t%4,.4,t))}return s.add(l),s}function Pp(e,t,n,r,i,a,o={}){let{height:s=.8,from:c=.35,to:l=1.5}=o,u=new R;for(let o of[-1,1]){let d=new R;d.position.set(-.72,e*s,o*.25),d.rotation.y=-o*.25,d.add(q(new H(.15,12,10),K(ff)));for(let e=0;e<i;e++){let t=e/(i-1),s=a*(1-.45*t),u=new R;u.rotation.x=o*(c+t*(l-c));let f=.1+.07*a;u.add(Y(.04,s,f,n,0,s/2+.1,0),Y(.05,s*.92,.035,r,0,s/2+.1,-o*(f/2))),d.add(u)}let f=new R;f.rotation.x=o*c,f.add(Y(.12,a*.55,.12,t,0,a*.275+.1,0)),d.add(f),u.add(d)}return u}function Fp(e){let t=mf(e),n={thigh:new R,knee:new R,shin:new R},r=K(t.main),i=()=>n.shin.add(Y(.04,.5,.06,J(t.glow,.8),.23,-.06,0));switch(e){case`cadet`:{let e=J(df,.15),t=vf(.36,.3,.62,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...yf(.36,.3,.62,.24,e).map(e=>(e.position.y+=.05,e)));let i=q(new V(.075,.32,6),e,.33,.1,0);i.rotation.z=-Math.PI/2+.55,n.knee.add(Y(.22,.32,.36,r,.17,0,0),i);let a=vf(.28,.4,.78,.06,r);a.position.set(.14,-.08,0),n.shin.add(a,...yf(.28,.4,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`recon`:{let e=J(df,.15),t=vf(.36,.3,.6,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...yf(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(Y(.24,.34,.38,r,.17,0,0),Y(.04,.04,.32,e,.3,.04,0));let i=vf(.28,.38,.76,.06,r);i.position.set(.14,-.08,0);let a=q(new V(.05,.36,6),K(G.recon.blade),-.24,-.3,0);a.quaternion.setFromUnitVectors(new L(0,1,0),new L(-1,-.35,0).normalize()),n.shin.add(i,...yf(.28,.38,.76,.21,e).map(e=>(e.position.y-=.08,e)),a);break}case`raider`:{let e=K(G.raider.white),t=vf(.36,.3,.6,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...yf(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(Y(.26,.38,.4,e,.17,0,0),Y(.04,.05,.34,r,.31,.02,0));let i=vf(.28,.4,.78,.06,e);i.position.set(.14,-.08,0),n.shin.add(i,...yf(.28,.4,.78,.21,r).map(e=>(e.position.y-=.08,e))),n.shin.add(q(new H(.04,10,8),J(G.raider.light,.9),.23,.18,0));break}case`siege`:{let e=K(G.siege.trim),t=vf(.36,.3,.6,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...yf(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(Y(.24,.34,.38,e,.17,0,0),q(new V(.1,.26,4),e,.2,.27,0));let i=vf(.28,.4,.78,.06,r);i.position.set(.14,-.08,0),n.shin.add(i,...yf(.28,.4,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`storm`:{let{trim:e,gold:t}=G.storm,i=K(e),a=vf(.36,.3,.6,.06,r);a.position.set(.17,.05,0),n.thigh.add(a,...yf(.36,.3,.6,.24,i).map(e=>(e.position.y+=.05,e)));let o=q(new H(.22,14,10),r,.16,.02,0);o.scale.set(.75,1,1.05),n.knee.add(o,Y(.04,.04,.34,J(t,.15),.32,.04,0),Y(.22,.05,.4,i,.15,-.18,0));let s=vf(.28,.42,.78,.06,r);s.position.set(.14,-.08,0),n.shin.add(s,...yf(.28,.42,.78,.21,i).map(e=>(e.position.y-=.08,e)));break}case`tempest`:{let e=K(G.tempest.chrome),a=vf(.36,.3,.6,.06,r);a.position.set(.17,.05,0),n.thigh.add(a,...yf(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e)));let o=q(new go(.06,0),J(t.glow,.8),.3,.02,0);o.scale.set(.5,1.5,1),n.knee.add(Y(.24,.34,.38,e,.17,0,0),o);let s=vf(.28,.4,.78,.06,r);s.position.set(.14,-.08,0),n.shin.add(s,...yf(.28,.4,.78,.21,e).map(e=>(e.position.y-=.08,e))),i();break}case`crimson`:Lp(n,r,r,K(G.crimson.ivory),J(G.crimson.gold,.2));break;case`vanguard`:Lp(n,r,r,r,J(t.glow,.8));break;case`titan`:{let e=K(G.titan.steel),i=vf(.36,.3,.6,.06,r);i.position.set(.17,.05,0),n.thigh.add(i,...yf(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(Y(.26,.4,.42,r,.17,.02,0),q(new H(.05,10,8),J(t.glow,.9),.31,.04,0));let a=vf(.28,.42,.78,.06,r);a.position.set(.14,-.08,0),n.shin.add(a,...yf(.28,.42,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`aegis`:{Lp(n,r,r,r,J(G.aegis.gold,.2));let e=q(new go(.06,0),J(t.glow,.6),.3,.02,0);e.scale.set(.5,1.4,1),n.knee.add(e),n.shin.add(q(new H(.045,10,8),J(t.glow,.7),.22,-.3,0));break}case`solar`:{Lp(n,r,r,r,J(G.solar.gold,.2));let e=q(new go(.06,0),J(G.solar.gem,.5),.3,.02,0);e.scale.set(.5,1.4,1),n.knee.add(e);break}case`galaxy`:Lp(n,r,r,r,J(G.galaxy.gold,.6));break;case`infinity`:{let e=J(G.infinity.plate,.3);Lp(n,e,e,e,J(G.infinity.gold,.5));let r=q(new go(.06,0),J(t.glow,.6),.3,.02,0);r.scale.set(.5,1.4,1),n.knee.add(r);break}case`eclipse`:{let e=K(G.eclipse.steel),t=vf(.36,.3,.6,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...yf(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(Y(.24,.34,.38,e,.17,0,0),q(new H(.05,10,8),J(G.eclipse.accent,.8),.3,.03,0));let i=vf(.28,.42,.78,.06,r);i.position.set(.14,-.08,0),n.shin.add(i,...yf(.28,.42,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`ronin`:Lp(n,r,r,r,J(G.ronin.gold,.4));break;case`blaze`:{Lp(n,r,r,r,J(G.blaze.glow,.8));let e=q(new go(.06,0),J(t.glow,.6),.3,.02,0);e.scale.set(.5,1.4,1),n.knee.add(e);break}case`phantom`:Lp(n,r,r,r,K(t.trim)),n.knee.add(q(new H(.05,10,8),J(t.glow,.8),.3,-.06,0)),i();break;case`frost`:Lp(n,r,r,r,J(t.glow,.8)),n.knee.add(hf(.08,.04,K(G.frost.mask),.3,.02,0),hf(.05,.05,J(G.frost.teal,.8),.31,.02,0));break;case`drake`:Lp(n,r,K(G.drake.red),r,J(G.drake.lava,.8)),n.knee.add(q(new H(.05,10,8),J(t.glow,.7),.3,-.06,0)),n.shin.add(q(new H(.045,10,8),J(t.glow,.7),.22,-.3,0));break;case`lancer`:Lp(n,r,K(t.trim),r,K(t.trim)),n.knee.add(q(new H(.05,10,8),J(t.glow,.8),.3,-.06,0)),i();break;default:{let e=vf(.34,.28,.56,.06,r);e.position.set(.17,.05,0);let i=vf(.28,.34,.7,.06,r);i.position.set(.14,-.08,0),n.thigh.add(e),n.knee.add(Y(.22,.3,.34,r,.16,0,0)),n.shin.add(i,Y(.07,.08,.4,K(t.seam),.15,-.4,0))}}return n}function Ip(e,t){let n=new R;if(e===`scrap`){let t=mf(e),r=K(t.main);n.add(q(new H(.23,14,10),r),q(new B(.22,.27,.58,12),r,0,-.45,0)),n.add(q(new U(.26,.03,6,20),K(t.seam),0,-.62,0).rotateX(Math.PI/2))}else if(e===`eclipse`){let r=K(mf(e).main),i=K(G.eclipse.steel),a=(e,t)=>q(new U(e,.025,6,20),i,0,t,0).rotateX(Math.PI/2),o=new Ea([[.13,-.18],[.15,-.58],[.02,-.7],[-.15,-.6],[-.11,-.22]].map(([e,t])=>new I(e,t))),s=new R;s.rotation.x=-t*.12,s.add(q(new uo(o,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),i,0,0,t*.27)),s.add(q(new H(.045,10,8),J(G.eclipse.accent,.8),0,-.6,t*.3)),n.add(q(new B(.23,.22,.42,12),r,0,.42,0),q(new H(.24,14,10),i)),n.add(q(new B(.22,.29,.6,12),r,0,-.45,0),a(.22,-.15),a(.29,-.75),s)}else if(e===`tempest`){let r=mf(e),i=K(r.main),a=K(G.tempest.chrome),o=(e,t)=>q(new U(e,.025,6,20),a,0,t,0).rotateX(Math.PI/2),s=new Ea([[.12,-.2],[.14,-.62],[0,-.74],[-.14,-.62],[-.1,-.24]].map(([e,t])=>new I(e,t))),c=new R;c.rotation.x=-t*.12,c.add(q(new uo(s,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),a,0,0,t*.27)),c.add(q(new Ki(.03,.34,.02),J(r.glow,.8),0,-.45,t*.3)),n.add(q(new B(.23,.22,.42,12),i,0,.42,0),q(new H(.24,14,10),a)),n.add(q(new B(.22,.29,.6,12),i,0,-.45,0),o(.22,-.15),o(.29,-.75),c)}else if(e===`titan`){let r=mf(e),i=J(r.glow,.9);n.add(q(new H(.25,14,10),K(G.titan.steel)),q(new B(.22,.29,.6,12),K(r.main),0,-.45,0)),n.add(q(new U(.29,.035,6,20),K(G.titan.under),0,-.75,0).rotateX(Math.PI/2));for(let e of[-.32,-.52]){let r=.22+(-.15-e)/.6*.07;n.add(q(new H(.045,10,8),i,0,e,t*(r+.01)))}}else if(e===`infinity`){let{plate:e,gold:r,gem:i}=G.infinity,a=J(e,.3),o=q(new go(.06,0),J(i,.6),0,-.6,t*.29);o.scale.set(1,1.4,.5),n.add(zp(t,a,a,J(r,.5)),o)}else if(e===`galaxy`){let r=K(mf(e).main);n.add(zp(t,r,r,J(G.galaxy.gold,.6)))}else if(e===`ronin`){let r=K(mf(e).main);n.add(zp(t,r,r,J(G.ronin.gold,.4)))}else if(e===`aegis`){let r=mf(e),i=K(r.main),a=q(new go(.06,0),J(r.glow,.6),0,-.6,t*.29);a.scale.set(1,1.4,.5),n.add(zp(t,i,i,J(G.aegis.gold,.2)),a)}else if(e===`lancer`){let r=mf(e),i=K(r.trim);n.add(zp(t,i,K(r.main),i),q(new H(.05,10,8),J(r.glow,.8),.27,-.45,0))}else if(e===`phantom`){let r=mf(e),i=K(r.main);n.add(zp(t,i,i,K(r.trim)),q(new H(.05,10,8),J(r.glow,.8),.27,-.45,0))}else if(e===`drake`){let r=mf(e);n.add(zp(t,K(G.drake.red),K(r.main),J(G.drake.lava,.8))),n.add(q(new H(.05,10,8),J(r.glow,.7),.27,-.45,0))}else if(e===`frost`){let r=mf(e),i=K(r.main);n.add(zp(t,i,i,J(r.glow,.8))),n.add(hf(.09,.04,K(G.frost.mask),.26,-.42,0),hf(.055,.05,J(G.frost.teal,.8),.275,-.42,0))}else if(e===`blaze`){let r=mf(e),i=K(r.main),a=q(new go(.06,0),J(r.glow,.6),0,-.6,t*.29);a.scale.set(1,1.4,.5),n.add(zp(t,i,i,J(G.blaze.glow,.8)),a)}else if(e===`vanguard`){let r=K(mf(e).main);n.add(zp(t,r,r,J(mf(e).glow,.8)))}else if(e===`solar`){let r=K(mf(e).main),i=q(new go(.06,0),J(G.solar.gem,.5),0,-.6,t*.29);i.scale.set(1,1.4,.5),n.add(zp(t,r,r,J(G.solar.gold,.2)),i)}else if(e===`crimson`)n.add(zp(t,K(mf(e).main),K(G.crimson.ivory),J(G.crimson.gold,.2)));else if(e===`storm`){let r=K(mf(e).main),i=K(G.storm.trim),a=q(new Ki(.05,.42,.1),i,0,-.42,t*.31);a.rotation.x=-t*.19,n.add(q(new B(.23,.22,.42,12),r,0,.42,0),q(new H(.24,14,10),r),q(new B(.22,.34,.62,12),r,0,-.46,0),a),n.add(q(new U(.23,.025,6,20),J(G.storm.gold,.15),0,-.16,0).rotateX(Math.PI/2),q(new U(.34,.035,6,20),i,0,-.77,0).rotateX(Math.PI/2))}else if(e===`siege`){let r=K(mf(e).main),i=K(G.siege.trim),a=(e,t)=>q(new U(e,.025,6,20),i,0,t,0).rotateX(Math.PI/2),o=q(new B(.1,.1,.06,12),K(G.siege.under),0,-.6,t*.26).rotateX(Math.PI/2),s=q(new B(.065,.075,.08,12),J(G.siege.glow,.9),0,-.6,t*.3).rotateX(Math.PI/2);n.add(q(new H(.23,14,10),r),q(new B(.22,.28,.6,12),r,0,-.45,0),a(.22,-.16),a(.28,-.75),o,s)}else if(e===`raider`){let r=K(mf(e).main),i=K(G.raider.white),a=(e,t)=>q(new U(e,.03,6,20),r,0,t,0).rotateX(Math.PI/2);n.add(q(new B(.23,.22,.42,12),r,0,.42,0),q(new H(.24,14,10),i)),n.add(q(new B(.22,.28,.6,12),i,0,-.45,0),a(.22,-.15),a(.28,-.75)),n.add(q(new H(.04,10,8),J(G.raider.light,.9),0,-.55,t*.29))}else if(e===`recon`){let r=K(mf(e).main),i=q(new V(.05,.38,6),K(G.recon.blade),0,-.4,t*.3);i.quaternion.setFromUnitVectors(new L(0,1,0),new L(0,.55,t).normalize()),n.add(q(new H(.23,14,10),r),q(new B(.22,.28,.6,12),r,0,-.45,0),i),n.add(q(new U(.28,.025,6,20),J(df,.15),0,-.75,0).rotateX(Math.PI/2))}else if(e===`cadet`){let t=K(mf(e).main),r=J(df,.15),i=(e,t)=>q(new U(e,.025,6,20),r,0,t,0).rotateX(Math.PI/2);n.add(q(new B(.23,.22,.42,12),t,0,.42,0),q(new H(.24,14,10),t)),n.add(q(new B(.22,.27,.6,12),t,0,-.45,0),i(.22,-.15),i(.27,-.75),i(.23,.21))}return n}function Lp(e,t,n,r,i){let a=vf(.36,.3,.6,.06,t);a.position.set(.17,.05,0),e.thigh.add(a,...yf(.36,.3,.6,.24,i).map(e=>(e.position.y+=.05,e))),e.knee.add(Y(.24,.34,.38,n,.17,0,0),q(new V(.1,.28,4),i,.2,.28,0));let o=vf(.28,.4,.78,.06,r);o.position.set(.14,-.08,0),e.shin.add(o,...yf(.28,.4,.78,.21,i).map(e=>(e.position.y-=.08,e)))}function Rp(e,t,n){let r=q(new V(.34,.5,4),t,.62,.2,0);return r.rotation.set(Math.PI/4,0,-Math.PI/2),r.scale.set(.8,1,.9),[Y(.98,.38,.66,e,0,.25,0),r,Y(.5,.05,.07,n,.42,.45,0),q(new B(.33,.27,.36,8),e,-.15,.6,0),q(new U(.32,.03,6,18),n,-.15,.78,0).rotateX(Math.PI/2)]}function zp(e,t,n,r){let i=(e,t)=>q(new U(e,.025,6,20),r,0,t,0).rotateX(Math.PI/2),a=new Ea([[.27,-.72],[.38,-.66],[.44,-.22],[.3,-.36],[.22,-.28]].map(([t,n])=>new I(t*e,n))),o=new R;return o.add(q(new B(.23,.22,.42,12),t,0,.42,0),q(new H(.24,14,10),t)),o.add(q(new B(.22,.29,.6,12),n,0,-.45,0),i(.22,-.15),i(.29,-.75)),o.add(q(new uo(a,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02).rotateY(-Math.PI/2),r)),o}var Bp=new Map;function Vp(t,n,r,i,a){let o=Bp.get(t);if(!o){let s=document.createElement(`canvas`);s.width=n,s.height=r,i(s.getContext(`2d`)),o=new Hi(s),o.colorSpace=He,o.wrapS=o.wrapT=e,o.repeat.set(...a),Bp.set(t,o)}return o}var Hp=e=>`#${e.toString(16).padStart(6,`0`)}`;function Up(e,t){return Vp(`plating-${e}`,32,32,n=>{n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.fillStyle=Hp(t.seam),n.fillRect(0,0,32,2),n.fillRect(0,0,2,32);for(let[e,t]of[[6,6],[26,6],[6,26],[26,26]])n.fillRect(e-1,t-1,2,2);e===`infinity`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(6,31),n.quadraticCurveTo(6,14,16,10),n.quadraticCurveTo(26,6,26,1),n.moveTo(16,10),n.quadraticCurveTo(21,18,29,18),n.stroke()):e===`ronin`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,30),n.bezierCurveTo(3,12,27,22,26,3),n.moveTo(14,21),n.quadraticCurveTo(20,18,19,11),n.stroke()):e===`aegis`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,3),n.lineTo(28,16),n.lineTo(16,29),n.lineTo(4,16),n.closePath(),n.stroke()):e===`lancer`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,4),n.lineTo(28,4),n.lineTo(28,21),n.lineTo(21,28),n.lineTo(4,28),n.closePath(),n.stroke()):e===`phantom`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.2,n.beginPath(),n.moveTo(4,9),n.lineTo(16,17),n.lineTo(28,9),n.moveTo(4,17),n.lineTo(16,25),n.lineTo(28,17),n.stroke()):e===`drake`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.4,n.beginPath(),n.moveTo(1,8),n.lineTo(9,12),n.lineTo(13,5),n.lineTo(20,14),n.lineTo(31,10),n.moveTo(5,31),n.lineTo(11,22),n.lineTo(18,25),n.lineTo(24,18),n.lineTo(31,22),n.stroke()):e===`frost`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(6,3),n.lineTo(6,13),n.quadraticCurveTo(6,20,13,20),n.lineTo(20,20),n.quadraticCurveTo(26,20,26,26),n.lineTo(26,31),n.moveTo(15,9),n.lineTo(21,9),n.stroke()):e===`vanguard`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,30),n.quadraticCurveTo(3,10,18,7),n.quadraticCurveTo(29,6,26,17),n.quadraticCurveTo(23,24,15,20),n.stroke()):e===`solar`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,6),n.lineTo(16,18),n.lineTo(28,6),n.moveTo(16,18),n.lineTo(16,31),n.stroke()):e===`eclipse`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,1),n.lineTo(16,13),n.lineTo(4,25),n.moveTo(16,13),n.lineTo(28,25),n.stroke()):e===`tempest`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(1,22),n.lineTo(10,22),n.lineTo(16,16),n.lineTo(31,16),n.moveTo(16,16),n.lineTo(16,4),n.stroke()):e===`titan`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.2,n.beginPath(),n.moveTo(3,31),n.lineTo(3,12),n.lineTo(12,3),n.lineTo(31,3),n.moveTo(20,31),n.lineTo(31,20),n.stroke()):e===`crimson`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,30),n.quadraticCurveTo(5,21,11,10),n.quadraticCurveTo(14,16,16,3),n.quadraticCurveTo(18,16,21,10),n.quadraticCurveTo(27,21,16,30),n.stroke()):e===`storm`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(6,31),n.lineTo(6,14),n.lineTo(16,4),n.lineTo(26,14),n.lineTo(26,31),n.stroke()):e===`siege`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,30),n.bezierCurveTo(4,22,6,8,16,2),n.moveTo(16,30),n.bezierCurveTo(28,22,26,8,16,2),n.stroke()):e===`recon`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(3,27),n.quadraticCurveTo(9,8,21,10),n.quadraticCurveTo(30,12,25,20),n.stroke()):e===`cadet`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.2,n.beginPath(),n.moveTo(4,8),n.lineTo(16,22),n.lineTo(28,8),n.stroke()):e===`blaze`?(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(3,31),n.lineTo(3,18),n.lineTo(12,9),n.lineTo(24,9),n.lineTo(31,2),n.moveTo(12,9),n.lineTo(12,1),n.stroke()):e===`galaxy`&&(n.fillStyle=Hp(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Hp(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,5),n.quadraticCurveTo(9,22,16,29),n.quadraticCurveTo(23,22,28,5),n.moveTo(16,29),n.lineTo(16,14),n.stroke())},[4,3])}function Wp(e,t){return Vp(`segments-${e}`,16,16,n=>{n.fillStyle=Hp(t.frame),n.fillRect(0,0,16,16),n.fillStyle=e===`cadet`?Hp(df):`#1d2026`,n.fillRect(0,13,16,e===`cadet`?1.5:3)},[1,4])}function Gp(e){let t=mf(e);return{body:{color:16777215,map:Up(e,t)},sleeves:{color:16777215,map:Wp(e,t)}}}function Kp(e){return{color:16777215,map:Wp(e,mf(e))}}function qp(e,t){let n=t.map??null;e.map===null!=(n===null)&&(e.needsUpdate=!0),e.map=n,e.color.set(t.color),e.emissive.set(t.glow?t.color:0),e.emissiveIntensity=t.glow??0}var Jp=6053992,Yp=3422013,Xp=1842465,Zp=9278365,Qp=921362,$p=16722500,em=16731546,tm=16752672,nm=16726843,rm=13145646,im=14672872,am=8005429,om=3356221,sm=4183807;function cm(e,t,n=0,r=0,i=0){let a=new z(e,t);return a.position.set(n,r,i),a}function lm(e,t,n,r,i=0,a=0,o=0){return cm(new lf(e,t,n,2,Math.min(e,t,n)*.25),r,i,a,o)}function um(e,t,n,r,i,a=0,o=0,s=0){return cm(new lf(e,t,n,1,r),i,a,o,s)}function dm(e,t,n,r,i,a,o=e,s=20){let c=cm(new B(o,e,t,s),n,r,i,a);return c.rotation.z=-Math.PI/2,c}function fm(e,t,n,r,i){let a=cm(new Ji(e,20),t,n,r,i);return a.rotation.y=Math.PI/2,a.userData.noOutline=!0,a}function pm(e,t,n,r,i,a){let o=cm(new Ki(Math.hypot(n-e,r-t),.05,.02),a,(e+n)/2,(t+r)/2,i);return o.rotation.z=Math.atan2(r-t,n-e),o.userData.noOutline=!0,o}function mm(e,t,n,r,i,a,o){let s=um(Math.hypot(n-e,r-t)+i,i,a,i*.3,o,(e+n)/2,(t+r)/2,0);return s.rotation.z=Math.atan2(r-t,n-e),s}function hm(e,t,n){let r=new Mn;return r.position.set(e,t,n),r}function gm(e=`tube`){switch(e){case`heavy`:return wm(Sm);case`cannon`:return jm();case`swarm`:case`barrage`:return Em(Tm[e]);case`meteor`:return wm(Cm);case`laser`:case`pulse`:case`prism`:case`nova`:case`zenith`:return Om(Dm[e]);case`flamer`:case`inferno`:case`dragon`:case`hellfire`:case`sunfury`:return Am(km[e]);default:return wm(xm)}}var _m=e=>K(e,{emissive:e,emissiveIntensity:1});function vm(e,t,n){e.add(um(1.12,.6,.56,.08,t,-.24,0,0));for(let t of[-1,1])e.add(um(.66,.24,.04,.02,n,-.28,-.04,t*.29))}function ym(e,t,n){e.add(um(.05,.46,.46,.02,t,-.81,0,0));let r=cm(new U(.13,.03,6,20),n,-.84,.02,0);r.rotation.y=Math.PI/2,r.userData.noOutline=!0,e.add(r,fm(.1,K(Qp),-.84,.02,0).rotateY(Math.PI))}function bm(e,t,n,r,i){e.add(mm(-.7,.2,-1.1,.2,.12,.15,t),mm(-1.1,.2,-1.16,-.14,.14,.16,n)),e.add(um(.17,.06,.19,.02,t,-1.165,-.18,0));let a=(e,t,n)=>cm(e,t,0,.3,n).rotateX(Math.PI/2);if(e.add(a(new B(.06,.06,.82,12),t,-.64),a(new B(.1,.1,.06,12),t,-1.06)),e.add(um(.22,.2,.08,.03,r,0,.22,-.27)),i){e.add(a(new B(.068,.068,.36,12),n,-.66));for(let t=0;t<7;t++){let r=cm(new U(.075,.024,6,14),n,0,.3,-.5-t*.053);r.rotation.x=.22,e.add(r)}}else e.add(a(new B(.085,.085,.34,12),n,-.66));return{right:hm(-1.13,.04,0),left:hm(0,.3,-.66)}}var xm={barrel:im,band:Zp,body:am,panel:im,hub:om,handle:im,light:sm,radius:.34,armored:!1},Sm={barrel:5001561,band:am,body:3882822,panel:am,hub:2369067,handle:Zp,light:16734762,radius:.38,armored:!0},Cm={barrel:2764083,band:16761402,body:9049104,panel:16761402,hub:1842465,handle:16761402,light:16752672,radius:.46,armored:!0};function wm(e){let t=new R,n=K(e.barrel),r=K(e.band),i=K(e.body),a=K(e.panel),o=K(e.hub),s=K(Xp),c=K(Qp),l=_m(e.light),u=e.radius;t.add(dm(u,1.9,n,1.32,.02,0,u,24),dm(u+.04,.14,n,2.25,.02,0,u+.04,24)),t.add(dm(u-.08,.1,c,2.29,.02,0,u-.08,20),fm(u-.08,c,2.323,.02,0));for(let e of[1.1,1.95])t.add(dm(u+.015,.06,r,e,.02,0,u+.015,24));e.armored&&t.add(um(1.2,.1,.36,.03,i,1.3,u+.06,0),dm(u+.09,.08,o,2.12,.02,0,u+.09,24));let d=u+(e.armored?.17:.07);t.add(um(.24,.12,.14,.03,o,1.8,d,0),fm(.045,l,1.925,d,0)),t.add(dm(u+.1,.2,o,.4,.02,0,u+.1,24),dm(u+.12,.06,a,.3,.02,0,u+.12,24)),t.add(um(1.12,.6,.56,.08,i,-.24,0,0),um(.9,.06,.4,.02,a,-.24,.32,0));for(let e of[-1,1])t.add(um(.66,.24,.04,.02,a,-.28,-.04,e*.29));t.add(um(.46,.18,.18,.04,a,-.08,.44,.06),fm(.06,l,.155,.44,.06));for(let e of[-.5,-.06])t.add(cm(new H(.035,10,8),l,e,-.04,.315));t.add(um(.5,.3,.4,.05,o,-.12,-.4,0),cm(new H(.03,8,6),l,.1,-.42,.205)),ym(t,o,l);let f=bm(t,K(e.handle),s,o,!0),p=hm(2.34,.02,0),m=hm(-.86,.02,0);return t.add(p,m,f.right,f.left),{group:t,muzzles:[p],breech:m,grips:f,lights:l}}var Tm={swarm:{body:6122298,frame:3817286,stripe:15909424,light:16762938,cols:2},barrage:{body:2898522,frame:1842982,stripe:16734762,light:16747066,cols:3}};function Em(e){let t=new R,n=K(e.body),r=K(e.frame),i=K(e.stripe),a=K(Xp),o=K(Zp),s=K(Qp),c=_m(e.light),l=.4*e.cols;t.add(um(1.6,.84,l,.1,n,1.15,.04,0),um(.14,.92,l+.08,.04,r,1.95,.04,0)),t.add(um(.16,.88,l+.04,.03,i,.62,.04,0));let u=[],d=e.cols===2?[-.2,.2]:[-.38,0,.38];for(let[e,n]of[.24,-.16].flatMap(e=>d.map(t=>[e,t])))t.add(dm(.16,.08,o,2.04,e,n,.16,16),fm(.12,s,2.085,e,n)),u.push(hm(2.1,e,n));t.add(um(.3,.14,.2,.04,r,1.4,.53,0),fm(.05,c,1.555,.53,0));for(let e of[.9,1.4])t.add(cm(new H(.04,10,8),c,e,.2,l/2+.01));vm(t,r,n),ym(t,r,c);let f=bm(t,o,a,r,!1),p=hm(-.86,.02,0);return t.add(p,f.right,f.left,...u),{group:t,muzzles:u,breech:p,grips:f,lights:c}}var Dm={laser:{body:3104138,trim:14672872,barrel:13226200,fins:2764083,light:4770047,coils:3,rails:!1,crystal:!1},pulse:{body:3877483,trim:13225432,barrel:9278365,fins:2038574,light:16732120,coils:5,rails:!0,crystal:!1},prism:{body:15265010,trim:14856762,barrel:16054010,fins:13214778,light:16773296,coils:6,rails:!0,crystal:!0},nova:{body:1003344,trim:8060880,barrel:13234408,fins:1194554,light:3866568,coils:7,rails:!0,crystal:!1,wide:!0},zenith:{body:1709632,trim:16765498,barrel:15261951,fins:2760800,light:11569919,coils:8,rails:!0,crystal:!0,wide:!0}};function Om(e){let t=new R,n=K(e.body),r=K(e.trim),i=K(e.barrel),a=K(e.fins),o=K(Xp),s=_m(e.light);t.add(dm(.15,1.6,i,1.2,.04,0,.15,16));for(let e=0;e<5;e++)t.add(dm(.3,.04,a,.5+e*.09,.04,0,.3,20));for(let n=0;n<e.coils;n++){let r=cm(new U(.2,.04,6,20),s,1.05+n*.8/Math.max(1,e.coils-1),.04,0);r.rotation.y=Math.PI/2,r.userData.noOutline=!0,t.add(r)}if(t.add(dm(.2,.26,r,2.08,.04,0,.25,20),fm(.17,s,2.215,.04,0)),e.wide){for(let e=0;e<3;e++)t.add(dm(.34,.04,a,1.72+e*.09,.04,0,.34,20));let e=cm(new U(.34,.04,6,24),s,2.18,.04,0);e.rotation.y=Math.PI/2,e.userData.noOutline=!0,t.add(e)}if(e.rails)for(let e of[-1,1])t.add(um(1.3,.08,.05,.02,r,1.35,.04,e*.25));if(e.crystal){let e=cm(new go(.16,0),s,2.36,.04,0);e.scale.set(1.5,1,1),t.add(e)}t.add(dm(.1,.5,s,-.2,.42,.05,.1,12),um(.6,.06,.26,.02,r,-.2,.33,.05)),t.add(um(.7,.05,.03,.01,s,-.25,.16,.3)),vm(t,n,r),ym(t,n,s);let c=bm(t,r,o,n,!1),l=hm(e.crystal?2.5:2.24,.04,0),u=hm(-.86,.02,0);return t.add(l,u,c.right,c.left),{group:t,muzzles:[l],breech:u,grips:c,lights:s}}var km={flamer:{body:4869975,trim:9278365,nozzle:3422013,tank:14169386,light:16742938,tanks:1,jaw:!1},inferno:{body:2040102,trim:15769632,nozzle:2829619,tank:15769632,light:16734740,tanks:2,jaw:!1},dragon:{body:3805712,trim:15251530,nozzle:1513501,tank:12065820,light:16726544,tanks:3,jaw:!0},hellfire:{body:2756138,trim:11553535,nozzle:1513501,tank:6953610,light:12602111,tanks:3,jaw:!0},sunfury:{body:15788248,trim:16761402,nozzle:3811866,tank:16747034,light:16769120,tanks:3,jaw:!0,halo:!0}};function Am(e){let t=new R,n=K(e.body),r=K(e.trim),i=K(e.nozzle),a=K(e.tank),o=K(Xp),s=K(Zp),c=_m(e.light);t.add(dm(.18,1.5,i,1.15,.06,0,.18,16),dm(.28,.9,n,.95,.06,0,.28,20));for(let e=0;e<4;e++)t.add(dm(.285,.05,o,.62+e*.22,.06,0,.285,20));if(t.add(dm(.2,.34,r,2.02,.06,0,.34,20),fm(.27,K(Qp),2.195,.06,0)),t.add(dm(.04,.4,s,1.85,-.2,0),cm(new H(.06,10,8),c,2.07,-.2,0)),e.jaw)for(let e of[-1,1]){let n=um(.5,.06,.5,.02,r,2,.06+e*.33,0);n.rotation.z=e*.15,t.add(n);for(let n of[-.16,0,.16]){let i=cm(new V(.05,.24,6),r,2.3,.06+e*.3,n);i.rotation.z=-Math.PI/2+e*.35,t.add(i)}}if(e.halo){let e=cm(new U(.42,.045,6,24),c,2.12,.06,0);e.rotation.y=Math.PI/2,e.userData.noOutline=!0,t.add(e)}let l=e.tanks===1?[0]:e.tanks===2?[-.17,.17]:[-.3,0,.3];for(let e of l){let n=cm(new qi(.15,.7,6,12),a,.85,-.44,e);n.rotation.z=Math.PI/2,t.add(n,dm(.158,.06,r,.85,-.44,e,.158,14))}t.add(um(.9,.08,Math.max(.3,l.length*.3),.02,n,.85,-.26,0)),t.add(cm(new H(.045,10,8),c,-.1,.12,.31)),vm(t,n,r),ym(t,n,c);let u=bm(t,r,o,n,!1),d=hm(2.22,.06,0),f=hm(-.86,.02,0);return t.add(d,f,u.right,u.left),{group:t,muzzles:[d],breech:f,grips:u,lights:c}}function jm(){let e=new R,t=K(Jp),n=K(Yp),r=K(Xp),i=K(Zp),a=K(Qp),o=K($p,{emissive:$p,emissiveIntensity:1}),s=K(em,{emissive:em,emissiveIntensity:.55}),c=K(tm,{emissive:tm,emissiveIntensity:.9});e.add(um(1.55,.84,.74,.1,t,1.38,0,0)),e.add(um(1.2,.08,.5,.03,n,1.3,.45,0));for(let t of[-1,1])e.add(lm(1.3,.04,.02,n,1.42,.2,t*.375));for(let t of[-1,1])e.add(lm(.04,.7,.02,n,1.9,0,t*.376));e.add(lm(.04,.02,.56,n,1.9,.425,0)),e.add(um(.05,.38,.6,.02,r,2.16,.13,0),um(.05,.36,.42,.02,r,2.16,-.22,0)),e.add(dm(.15,.06,i,2.19,.16,0),dm(.11,.05,a,2.21,.16,0)),e.add(dm(.13,.06,i,2.19,-.2,0),dm(.08,.04,r,2.2,-.2,0),fm(.07,c,2.225,-.2,0));for(let[t,n]of[[.29,-.25],[.29,.25],[-.36,-.16],[-.36,.16]])e.add(cm(new H(.025,8,6),i,2.19,t,n));e.add(um(.62,.34,.03,.01,s,1.72,-.2,.375)),e.add(dm(.4,.14,n,.56,0,0,.4,8));for(let t of[.5,.62]){let n=cm(new U(.405,.034,6,8),o,t,0,0);n.rotation.y=Math.PI/2,n.rotation.x=Math.PI/8,n.userData.noOutline=!0,e.add(n)}e.add(pm(.62,.32,.8,.16,.38,o),pm(.8,.16,.74,-.04,.38,o),pm(.74,-.04,.92,-.24,.38,o)),e.add(pm(.92,-.24,1.08,-.3,.38,o),pm(.8,.16,1.02,.24,.38,o),pm(.66,-.3,.8,-.38,.38,o));let l=(e,t,n,r)=>{let i=cm(new Ki(Math.hypot(n-e,r-t),.02,.05),o,(e+n)/2,.5,(t+r)/2);return i.rotation.y=-Math.atan2(r-t,n-e),i.userData.noOutline=!0,i};e.add(l(.66,.1,.86,.2),l(.86,.2,1,.12)),e.add(pm(.3,.2,.12,.08,.29,o),pm(.12,.08,.18,-.12,.29,o),pm(-.1,.24,.02,.06,.29,o));let u=cm(new B(.13,.13,.07,6),i,.86,-.08,.39);u.rotation.x=Math.PI/2,e.add(u),e.add(um(.66,.44,.56,.06,n,1,-.56,0),um(.06,.12,.32,.02,c,1.34,-.66,0)),e.add(um(1,.58,.56,.08,n,0,.02,0),um(.56,.26,.04,.02,t,-.02,.06,.29)),e.add(lm(1.15,.12,.16,r,.12,.38,0));for(let t=0;t<5;t++)e.add(lm(.05,.05,.2,n,-.28+t*.2,.45,0));e.add(um(.34,.48,.5,.06,r,-.62,.02,0)),e.add(um(.04,.4,.42,.02,t,-.8,.02,0));let d=cm(new U(.13,.03,6,20),o,-.83,.04,0);d.rotation.y=Math.PI/2,d.userData.noOutline=!0,e.add(d,dm(.1,.03,a,-.825,.04,0),fm(.06,o,-.845,.04,0).rotateY(Math.PI));let f=bm(e,K(rm),r,n,!1),p=[hm(2.25,.16,0),hm(2.25,-.2,0)],m=hm(-.86,.04,0);return e.add(...p,m,f.right,f.left),{group:e,muzzles:p,breech:m,grips:f,lights:o}}function Mm(e){let t=new R,n=K(16054015),r=cm(new B(.12,.12,.62,12),n);r.rotation.x=Math.PI/2;let i=cm(new B(.125,.125,.14,12),K(e.main),0,0,.1);i.rotation.x=Math.PI/2;let a=cm(new V(.12,.26,12),K(nm),0,0,.44);a.rotation.x=Math.PI/2,t.add(r,i,a);let o=K(Xp);for(let e=0;e<4;e++){let n=new R;n.rotation.z=e/4*Math.PI*2+Math.PI/4,n.add(cm(new Ki(.03,.18,.2),o,0,.17,-.24)),t.add(n)}let s=new R;s.position.z=-.32,s.userData.flame=!0;for(let[e,t,n]of[[.13,.7,16742938],[.07,.42,16774048]]){let r=cm(new V(e,t,10),new pi({color:n}),0,0,-t/2);r.rotation.x=-Math.PI/2,r.userData.noOutline=!0,s.add(r)}return t.add(s),t}var Nm={hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},Pm={restYaw:110*ad,yawMin:40*ad,yawMax:130*ad,presentYaw:-28*ad,turnSpeed:4,victoryYaw:5*ad,victoryPitch:.55,victoryLift:.5,neutral:15*ad,spread:10*ad,aimOffset:0,pitchMin:-.3,pitchMax:.32,restPitch:-.2,carry:new L(-1.82,3.05,.76),twist:20*ad,pivot:-1.1,launcherScale:1.4,lean:.12,headPitch:-.22,headYawMax:.6,footSpread:.72,bendRight:new L(-.7,-.7,.25),bendLeft:new L(-.8,-.3,-.5)},Fm=new L(-2.42,5.18,0),Im=.85,Lm=-3.3,Rm=new L(0,1,0),zm=new L(0,0,1),Bm=1.3,Vm=1.3,Hm=1,Um=1,Wm=.45,Gm=.2,Km=.3,qm=.42,Jm=3,Ym=.12,Xm=9081502,Zm=2830134,Qm=class{group=new R;rig=new R;body=new R;head=new R;torso=new R;torsoBase=new Pt;legs=[];arms=[];hatMount=new R;jacketMount=new R;legMounts=[];launcherBase=new R;launcherYaw=new R;launcherPitch=new R;recoil=new R;launcher;launcherStyle=`tube`;metal=K(Xm);joint=K(Zm);shirt=K(16777215);sleeves=K(16777215);pants=K(16777215);gearSpinners=[];gearPulsers=[];spineLen=0;mood=`idle`;t=0;aimHeading=Pm.restYaw+Pm.neutral+Pm.aimOffset;aimPitch=Pm.restPitch;aimIdle=99;yaw=Pm.restYaw;launcherHeading=Pm.neutral;pitch=Pm.restPitch;headYaw=0;headPitch=Pm.headPitch;kick=0;kickVel=0;charge=0;hurtT=0;crouch=0;lift=0;feetReady=!1;lastPos=new L;velocity=new L;drift=0;sideHop=null;hopAxis=new L(0,0,1);hopLead=1;hopSize=1;hopAir=-1;hopWindup=0;landT=99;squat=0;load=0;snapNext=!1;muzzleIndex=0;restQuatInv=new Pt;constructor(e=Nm,t=`tube`){this.launcherStyle=t,this.group.add(this.rig),this.rig.position.x=3.3;let n=this.rig,r=new R;r.position.copy(Od).negate(),this.body.position.copy(Od),this.body.add(r),n.add(this.body);for(let e of[-1,1]){let t=Od.clone().add(new L(0,-.12,e*.3)),r=new L(Lm,Wm,e*Pm.footSpread),i={thigh:new R,knee:new R,shin:new R};this.legMounts.push(i);let a=fh(new B(.25,.18,Bm,16),this.pants),o=new z(new H(.25,14,10),this.pants);o.position.y=Bm/2,a.add(o,i.thigh);let s=fh(new B(.19,.15,Vm,16),this.pants);s.add(i.shin);let c=new R;c.add(new z(new H(.22,14,10),this.joint),i.knee);let l=new R;l.position.set(-3.05,0,e*Pm.footSpread),l.rotation.y=-e*.12,n.add(a,s,c,l);let u={a,b:s,joint:c,lenA:Bm,lenB:Vm,side:e,hip:t.clone().sub(Od),shoe:l,plant:new L,from:new L,to:new L,stepT:-1,foot:new L,lift:0};this.legs.push(u),mh(u,t,r,$m)}let i=new z(new H(.42,18,12),this.pants);i.scale.set(.8,.72,1),i.position.copy(Od),r.add(i);let a=Dd.clone().sub(Od),o=a.length();this.spineLen=o,this.torsoBase.setFromUnitVectors(Rm,a.normalize()),this.torso.position.copy(Od),this.torso.quaternion.copy(this.torsoBase);let s=new z(new ho(Nd(o),40),this.shirt);s.scale.set(jd,1,1),this.torso.add(s);for(let e of[-1,1]){let t=new z(new H(.27,16,12),this.sleeves);t.position.set(0,o-.16,e*.72),this.torso.add(t)}let c=new z(new B(.41,.42,.15,24),this.joint);c.scale.set(jd,1,1),c.position.y=.2,this.torso.add(c,this.jacketMount),r.add(this.torso);let l=this.head;l.position.copy(Fm),l.scale.setScalar(Im),l.rotation.order=`YZX`;let u=new z(new H(1,40,28),this.metal);u.scale.copy(Ad),l.add(u,Rf(.9,.72,-.06,this.joint,1.012));let d=K(13226460);for(let e of[-.2,-.29]){let t=new z(new Ki(.04,.035,.3),d);t.position.set(Id(e,0,1.012),e,0),l.add(t)}for(let e of[-1,1]){let t=new z(new B(.16,.16,.1,18),this.joint);t.rotation.x=Math.PI/2,t.position.set(-.02,0,e*Ad.z),l.add(t)}let f=new z(new B(.19,.22,.5,14),this.joint);f.position.set(-.12,-Ad.y+.04,0),l.add(f,this.hatMount),r.add(l);for(let e of[1,-1]){let t=new Mn;t.position.set(0,o-.2,e*.74),this.torso.add(t);let r=fh(new B(.19,.17,Hm,14),this.sleeves),i=fh(new B(.17,.15,Um,14),this.sleeves),a=new R;a.add(new z(new H(.2,12,10),this.joint));let s=new z(new H(.22,12,10),this.joint);s.scale.set(1,.9,1.1);let c=new R,l=new R;n.add(r,i,a,s,c,l),this.arms.push({a:r,b:i,joint:a,lenA:Hm,lenB:Um,side:e,anchor:t,hand:s,upperMount:c,foreMount:l})}this.launcherYaw.rotation.order=`YZX`,this.launcherBase.add(this.launcherYaw),this.launcherYaw.add(this.launcherPitch),this.launcherPitch.add(this.recoil),n.add(this.launcherBase),n.traverse(e=>{e instanceof z&&(e.castShadow=!0)}),Zd(n,Gd),of(this.head,Gd),of(this.torso,Gd),this.restQuatInv.setFromEuler(new hn(0,0,Pm.lean)).invert(),this.setGear(e),this.animate(0)}setGear(e){let t=Gp(e.jacket);qp(this.shirt,t.body),qp(this.sleeves,t.sleeves),qp(this.pants,Kp(e.pants)),vh(this.hatMount,zf(e.hat)),vh(this.jacketMount,Gf(e.jacket,this.spineLen));for(let t of this.arms){let n=Ip(e.jacket,t.side),r=new R,i=new R;for(let e of[...n.children])(e.position.y>.1?r:i).add(e);vh(t.upperMount,r),vh(t.foreMount,i)}for(let t of this.legMounts){let n=Fp(e.pants);vh(t.thigh,n.thigh),vh(t.knee,n.knee),vh(t.shin,n.shin)}for(let t of this.legs)vh(t.shoe,Bf(e.shoes));this.mountLauncher();let n=this.legMounts.flatMap(e=>[e.thigh,e.knee,e.shin]),r=[this.hatMount,this.jacketMount,...this.arms.flatMap(e=>[e.upperMount,e.foreMount]),...n,...this.legs.map(e=>e.shoe)];this.gearSpinners=r.flatMap(gh),this.gearPulsers=r.flatMap(_h)}setLauncher(e){this.launcherStyle=e,this.mountLauncher()}mountLauncher(){this.launcher=gm(this.launcherStyle),this.launcher.group.scale.setScalar(Pm.launcherScale),vh(this.recoil,this.launcher.group)}setMood(e){this.mood=e}snap(){this.snapNext=!0,this.feetReady=!1,this.squat=this.drift=this.load=0,this.landT=99}followHop(e,t){this.sideHop=e,this.hopAxis.copy(t)}aimAt(e){let t=this.group.position,n=e.x-t.x,r=e.z-t.z;this.aimHeading=sd(n,r);let i=Math.hypot(n,r);this.aimPitch=Nt.clamp(Math.atan2(e.y-Pm.carry.y+i*.18,Math.max(i,1)),Pm.pitchMin,Pm.pitchMax),this.aimIdle=0}get heading(){return this.yaw+this.launcherHeading}muzzle(e,t){this.launcher.muzzles[this.muzzleIndex%this.launcher.muzzles.length].getWorldPosition(e),t.set(1,0,0).transformDirection(this.launcherPitch.matrixWorld)}fire(e=9){let t=this.launcher.muzzles[this.muzzleIndex++%this.launcher.muzzles.length];return this.kickVel=e,{pos:t.getWorldPosition(new L),dir:new L(1,0,0).transformDirection(this.launcherPitch.matrixWorld)}}breech(){return{pos:this.launcher.breech.getWorldPosition(new L),dir:new L(-1,0,0).transformDirection(this.launcherPitch.matrixWorld)}}setCharge(e){this.charge=e}hurt(){this.hurtT=1}chest(e=new L){return e.set(this.group.position.x,3.9,this.group.position.z)}toWorld(e,t){return t.copy(e),t.x+=this.rig.position.x,t.applyAxisAngle(Rm,this.yaw).add(this.group.position)}toRig(e,t){return t.copy(e).sub(this.group.position).applyAxisAngle(Rm,-this.yaw),t.x-=this.rig.position.x,t}stepFeet(e){let t=this.group.position;e>0&&this.velocity.subVectors(t,this.lastPos).divideScalar(e).setY(0),this.lastPos.copy(t);let n=this.legs.map((e,t)=>this.toWorld(uh[t].set(Lm,0,e.side*Pm.footSpread),uh[t]));if(this.feetReady||=(this.legs.forEach((e,t)=>{e.plant.copy(n[t]),e.stepT=-1}),this.velocity.set(0,0,0),!0),this.hopWindup>0||this.hopAir>=0||this.landT<Ym)return this.hopFeet(n),0;let r=-1,i=-1/0,a=(n[0].x+n[1].x)/2,o=(n[0].z+n[1].z)/2;if(this.legs.forEach((e,t)=>{e.plant.distanceTo(n[t])>Jm&&(e.plant.copy(n[t]),e.stepT=-1);let s=this.legs[1-t],c=Math.hypot(n[t].x-e.plant.x,n[t].z-e.plant.z);if(e.stepT>=0||c<=Km||s.stepT>=0&&s.stepT<.5)return;let l=c+ +((n[t].x-a)*this.velocity.x+(n[t].z-o)*this.velocity.z>0);l>i&&(i=l,r=t)}),r>=0){let e=this.legs[r];e.from.copy(e.plant),e.to.copy(n[r]).addScaledVector(this.velocity,Gm*.5),e.stepT=0}let s=0;for(let t of this.legs){if(t.stepT<0){t.foot.copy(t.plant),t.lift=0;continue}t.stepT=Math.min(1,t.stepT+e/Gm);let n=t.stepT,r=n*n*(3-2*n);t.foot.lerpVectors(t.from,t.to,r),t.lift=Math.sin(Math.PI*n)*qm,s=Math.max(s,Math.sin(Math.PI*n)),n>=1&&(t.plant.copy(t.to),t.stepT=-1,t.lift=0)}return s}hopFeet(e){let t=this.hopSize,n=this.hopAir>=0,r=this.sideHop?this.sideHop.airTime:.3,i=.18*r,a=this.hopWindup>0?0:n?this.hopAir*r:r+this.landT,o=Nt.clamp((a-i)/(r+Ym-i),0,1),s=dh.set(Math.sin(this.yaw),0,Math.cos(this.yaw));this.legs.forEach((r,i)=>{let a=r.side===this.hopLead,c=0,l=0;this.hopWindup>0?l=a?.12*this.hopWindup:0:a?n&&(c=.38*Math.sin(Math.PI*this.hopAir),l=.55*Math.sin(Math.PI*Math.min(1,this.hopAir/.85))):(c=.42*Math.sin(Math.PI*o),l=.6*Math.sin(Math.PI*o)),this.hopWindup<=0&&r.foot.copy(e[i]).addScaledVector(s,r.side*c*t),r.plant.copy(r.foot).setY(0),r.stepT=-1,r.lift=l*t})}animate(e){this.t+=e;let t=this.t,n=t=>1-Math.exp(-t*e),r=this.mood;this.aimIdle+=e;let i=this.aimHeading-Pm.aimOffset,a=this.aimPitch;(this.aimIdle>1.6||r===`idle`)&&(i=Pm.restYaw+Pm.neutral,a=Pm.restPitch),r===`present`&&(i=Pm.presentYaw+Pm.neutral,a=Pm.restPitch),r===`victory`&&(a=Pm.victoryPitch),r===`down`&&(a=-.45);let o=cd(i-this.yaw),s=o-Nt.clamp(o,Pm.neutral-Pm.spread,Pm.neutral+Pm.spread),c=r===`victory`?Pm.victoryYaw:r===`present`?Pm.presentYaw:Nt.clamp(this.yaw+s,Pm.yawMin,Pm.yawMax);this.snapNext&&=(this.yaw=c,this.launcherHeading=Pm.neutral,this.pitch=a,!1);let l=(c-this.yaw)*n(r===`aiming`?7:4);this.yaw+=Nt.clamp(l,-Pm.turnSpeed*e,Pm.turnSpeed*e);let u=Nt.clamp(cd(i-this.yaw),Pm.neutral-Pm.spread,Pm.neutral+Pm.spread);this.launcherHeading+=(u-this.launcherHeading)*n(16),this.pitch+=(a-this.pitch)*n(10),this.group.rotation.y=this.yaw,this.kickVel+=(-160*this.kick-14*this.kickVel)*e,this.kick+=this.kickVel*e,this.hurtT=Math.max(0,this.hurtT-e*3);let d=r===`down`?0:1,f=Math.sin(t*2.2)*d,p=Math.sin(t*.55)*d,m=(r===`down`?.75:r===`aiming`?.1:.04)+.3*this.charge;this.crouch+=(m-this.crouch)*n(r===`down`?2.5:6);let h=r===`victory`?Math.abs(Math.sin(t*6.5))*.35:0,g=this.hurtT*this.hurtT,_=this.charge*this.charge*(Math.random()-.5)*.06,v=this.sideHop,y=this.hopAir>=0;if(this.hopWindup=v&&v.phase===`windup`?Math.max(.001,v.progress):0,this.hopAir=v&&v.phase===`air`?v.progress:-1,v&&v.phase!==`ground`){let e=this.hopAxis.x*Math.sin(this.yaw)+this.hopAxis.z*Math.cos(this.yaw);this.hopLead=e*v.side>=0?1:-1,this.hopSize=Nt.clamp(.45+.16*v.gap,.5,1)}this.landT+=e,y&&this.hopAir<0&&(this.landT=0,this.squat=.85);let b=this.hopWindup>0;this.squat+=(+!!b-this.squat)*n(b?40:this.hopAir>=0?16:7);let x=b?-.16*this.hopLead:this.landT<.3?.12*this.hopLead:0;this.load+=(x-this.load)*n(18);let S=this.stepFeet(e),C=lh.copy(this.velocity).applyAxisAngle(Rm,-this.yaw);this.drift+=(C.z-this.drift)*n(12);let w=Nt.clamp(this.drift*.025,-.14,.14),T=Nt.clamp(this.drift*.03,-.15,.15)+this.load;this.body.position.set(Od.x-.15*g+.04*Math.max(0,this.kick),Od.y-.5*this.crouch+.02*f+h-.09*S-.45*this.squat,Od.z+.04*p+T+(Math.random()-.5)*.1*g+_),this.body.rotation.set(.02*p+w,0,Pm.lean-.25*this.crouch-.16*this.squat+.1*g+.04*Math.max(0,this.kick)),this.torso.quaternion.copy(this.torsoBase).multiply(ch.setFromAxisAngle(Rm,-Pm.twist)),this.torso.scale.y=1+f*.012,this.body.updateMatrix();for(let e of this.legs){let t=eh.copy(e.hip).applyMatrix4(this.body.matrix),n=this.toRig(e.foot,th);n.y=Wm+e.lift;let r=e.lenA+e.lenB-.02,i=n.distanceTo(t);i>r&&n.sub(t).multiplyScalar(r/i).add(t),e.shoe.position.set(n.x+.25,n.y-Wm,n.z),mh(e,t,n,$m)}let E=Nt.clamp(cd(i+Pm.aimOffset-this.yaw)*.5,-.4,Pm.headYawMax),D=Pm.headPitch+.04*Math.sin(t*1.3+1)*d;r===`victory`?(E=-.45,D=.1):r===`present`?(E=-.12,D=.08):r===`down`&&(E=.2,D=-.75),this.headYaw+=(E-this.headYaw)*n(8),this.headPitch+=(D-this.headPitch)*n(8),this.head.rotation.set(.06*Math.sin(t*.45)*d,this.headYaw,this.headPitch+.08*g);let ee=ch.copy(this.body.quaternion).multiply(this.restQuatInv);this.launcherBase.position.copy(Pm.carry).sub(Od).applyQuaternion(ee).add(this.body.position),this.lift+=((r===`victory`?Pm.victoryLift:0)-this.lift)*n(6),this.launcherBase.position.y+=this.lift,this.launcherYaw.rotation.set(0,this.launcherHeading,0),this.launcherPitch.rotation.set(0,0,this.pitch+.12*Math.max(0,this.kick)),this.launcherPitch.position.x=Pm.pivot,this.recoil.position.x=-Pm.pivot-.4*this.kick-.22*this.charge+_,this.group.updateMatrixWorld(!0);let te=[this.launcher.grips.right,this.launcher.grips.left];for(let e=0;e<this.arms.length;e++){let t=this.arms[e],n=this.rig.worldToLocal(t.anchor.getWorldPosition(eh)),r=this.rig.worldToLocal(te[e].getWorldPosition(th)),i=t.lenA+t.lenB-.02,a=r.distanceTo(n);a>i&&r.sub(n).multiplyScalar(i/a).add(n);let o=mh(t,n,r,t.side>0?Pm.bendRight:Pm.bendLeft);t.hand.position.copy(r),hh(t.upperMount,o,nh.subVectors(n,o)),hh(t.foreMount,o,nh.subVectors(o,r))}this.launcher.lights.emissiveIntensity=.9+2.5*Math.max(0,this.kick)+this.charge*(2.5+1.5*Math.sin(this.t*40));for(let e of[this.shirt,this.sleeves,this.pants])e.emissive.setRGB(1,.15,.1),e.emissiveIntensity=.55*g;for(let t of this.gearSpinners){let n=t.userData.spin;t.rotation[n.axis]+=n.speed*e}for(let e of this.gearPulsers){let n=e.userData.pulse;e.scale.copy(n.base).multiplyScalar(1+n.amount*Math.sin(t*n.speed+n.phase))}}},$m=new L(1,0,0),eh=new L,th=new L,nh=new L,rh=new L,ih=new L,ah=new L,oh=new L,sh=new an,ch=new Pt,lh=new L,uh=[new L,new L],dh=new L;function fh(e,t){let n=new R,r=new z(e,t);return r.userData.noBake=!0,n.userData.mesh=r,n.add(r),n}function ph(e,t,n,r){e.position.addVectors(t,n).multiplyScalar(.5),e.quaternion.setFromUnitVectors(Rm,nh.subVectors(t,n).normalize()),e.userData.mesh.scale.y=t.distanceTo(n)/r}function mh(e,t,n,r){let i=nh.subVectors(n,t),a=i.length();i.divideScalar(a);let o=Math.min(a,e.lenA+e.lenB-.001),s=(e.lenA*e.lenA-e.lenB*e.lenB+o*o)/(2*o),c=Math.sqrt(Math.max(0,e.lenA*e.lenA-s*s)),l=rh.copy(r).addScaledVector(i,-r.dot(i)).normalize(),u=ih.copy(t).addScaledVector(i,s).addScaledVector(l,c);return e.joint.position.copy(u),e.joint.quaternion.setFromUnitVectors(Rm,nh.subVectors(t,n).normalize()),ph(e.a,t,u,e.lenA),ph(e.b,u,n,e.lenB),u}function hh(e,t,n){let r=n.normalize(),i=ah.copy(zm).addScaledVector(r,-zm.dot(r)).normalize(),a=oh.crossVectors(r,i);e.position.copy(t),e.quaternion.setFromRotationMatrix(sh.makeBasis(a,r,i))}function gh(e){let t=[];return e.traverse(e=>{e.userData.spin&&t.push(e)}),t}function _h(e){let t=[];return e.traverse(e=>{e.userData.pulse&&t.push(e)}),t}function vh(e,t){for(let t of[...e.children])e.remove(t),t.traverse(e=>{e instanceof z&&e.geometry.dispose()});t.traverse(e=>{e instanceof z&&(e.castShadow=!0)}),Zd(t,Gd),e.add(t),of(t,Gd)}var yh={meadow:{horizon:13233407,zenith:2788351,hillsNear:7653018,hillsFar:10274026,shadow:3107626,earthEdge:9401408,hemiSky:16777215,hemiGround:14216380,hemiIntensity:1.75,sun:16774886,sunIntensity:1.5,ground:{base:`#5bb84a`,patches:[`#67c455`,`#52ad43`,`#72cc5c`,`#4aa33d`],tuft:`#3f9535`,speck:`#8fdc74`},dirt:{base:`#c9a466`,tones:[`#bb955a`,`#d4b077`,`#a8834e`,`#e2c792`]},pine:[.38,.55,.36],round:[.26,.55,.36],bush:[.27,.6,.38],tuft:[.27,.55,.3],rock:[.58,.06,.56],trunk:9067058,pineShare:[.45,.35],petals:[16777215,16777215,16769354,16751820,12165887,10935551],center:16760874,caps:[16730955,16730955,16742954,13208138],stem:16774364,dots:16777215,trees:1,rocks:1,flowers:1,mushrooms:!0,clouds:[`#a9d4f5`,`#ffffff`,`#e1f0fc`]},dunes:{horizon:16769720,zenith:4892392,hillsNear:14725232,hillsFar:15254682,shadow:9067050,earthEdge:10514490,hemiSky:16777215,hemiGround:15784104,hemiIntensity:1.75,sun:16773328,sunIntensity:1.6,ground:{base:`#e8c27a`,patches:[`#f0cc88`,`#ddb46a`,`#f4d89a`,`#d2a85e`],tuft:`#c69a52`,speck:`#f8e2b0`},dirt:{base:`#b88a52`,tones:[`#a87a44`,`#c49660`,`#946a3a`,`#d4ae78`]},pine:[.33,.45,.38],round:[.17,.45,.42],bush:[.15,.4,.45],tuft:[.13,.5,.55],rock:[.07,.4,.6],trunk:10119738,pineShare:[.75,.7],petals:[16739228,16769354],center:16777215,caps:[13797962],stem:16048320,dots:16777215,trees:.45,rocks:2,flowers:.15,mushrooms:!1,clouds:[`#f0d8b8`,`#fffaf0`,`#f6e8d4`]},frost:{horizon:15004415,zenith:5935064,hillsNear:14215412,hillsFar:11059424,shadow:5929626,earthEdge:9085112,hemiSky:16777215,hemiGround:14740728,hemiIntensity:1.7,sun:16054527,sunIntensity:1.4,ground:{base:`#eef4fa`,patches:[`#ffffff`,`#dde8f2`,`#f6fbff`,`#d2e0ee`],tuft:`#b8cce0`,speck:`#ffffff`},dirt:{base:`#b8cce0`,tones:[`#a8bed6`,`#c8daea`,`#94acc8`,`#dce8f4`]},pine:[.47,.3,.5],round:[.55,.3,.82],bush:[.55,.25,.86],tuft:[.55,.3,.78],rock:[.58,.45,.68],trunk:6967360,pineShare:[.85,.8],petals:[10935551,16777215],center:14217471,caps:[8046847],stem:16777215,dots:16777215,trees:.9,rocks:1.5,flowers:.1,mushrooms:!1,clouds:[`#c8dcf0`,`#ffffff`,`#e8f0fa`]},volcano:{horizon:16751210,zenith:4856362,hillsNear:5909034,hillsFar:9060416,shadow:1706506,earthEdge:16734746,hemiSky:16767168,hemiGround:6959136,hemiIntensity:1.8,sun:16756864,sunIntensity:1.5,ground:{base:`#4a3a3a`,patches:[`#554444`,`#3e3030`,`#5e4a46`,`#352828`],tuft:`#2a2020`,speck:`#ff7a2a`},dirt:{base:`#ff8a2a`,tones:[`#ff6a1a`,`#ffaa3a`,`#e04a10`,`#ffd060`]},pine:[.02,.2,.13],round:[.03,.25,.1],bush:[.02,.3,.12],tuft:[.03,.2,.2],rock:[.02,.3,.3],trunk:2759188,pineShare:[.6,.5],petals:[16742954,16760874],center:16773280,caps:[16738842,16755242],stem:3811882,dots:16769120,trees:.6,rocks:2,flowers:.2,mushrooms:!0,clouds:[`#c06a6a`,`#8a6a6a`,`#6a4a4a`]},starfield:{horizon:4864650,zenith:657962,hillsNear:3811946,hillsFar:2763354,shadow:657952,earthEdge:5955839,hemiSky:13156607,hemiGround:4864634,hemiIntensity:1.7,sun:14213375,sunIntensity:1.3,ground:{base:`#5a4a9a`,patches:[`#6656a8`,`#4e4090`,`#7262b8`,`#443888`],tuft:`#3a3078`,speck:`#c8f0ff`},dirt:{base:`#8a7ad0`,tones:[`#7a6ac0`,`#9a8ae0`,`#6a5ab0`,`#c8f0ff`]},pine:[.75,.5,.5],round:[.8,.45,.5],bush:[.72,.4,.45],tuft:[.7,.4,.45],rock:[.68,.25,.55],trunk:2760784,pineShare:[.7,.6],petals:[5955839,16743136,16777215],center:16777215,caps:[5955839,8060880],stem:14739711,dots:16777215,trees:.7,rocks:1.2,flowers:.6,mushrooms:!0,clouds:[`#6a5ab0`,`#9a8ad8`,`#7a6ac0`]}},bh=new L(.45,.8,.45).normalize(),xh=new L(0,1,0).cross(bh).normalize(),Sh=bh.clone().cross(xh).normalize(),Ch=16e3,wh=60,Th=10,Eh=-4,Dh=230,Oh=6.5,kh=od(ud),Ah=od(ud-Math.PI/2);function jh(e,t,n=new L){return n.copy(ld).addScaledVector(kh,e).addScaledVector(Ah,t)}function Mh(e){return Nt.smoothstep(e,4,30)*(7*Math.sin(e/38+.6)+3*Math.sin(e/15))}function Nh(e){return(3.6+.6*Math.sin(e/9))*(1-.6*Nt.smoothstep(e,160,Dh))}function Ph(e,t,n=1){return Math.hypot(e-2,t)<Oh+n||e>Eh&&e<Dh&&Math.abs(t-Mh(e))<Nh(e)+n}function Fh(e){return 165+18*Math.sin(e/23)+10*Math.sin(e/9+1)}function Ih(e,t,n=240){for(let r=20;r<n;r+=2){let n=e.x+t.x*r-ld.x,i=e.z+t.z*r-ld.z,a=n*Ah.x+i*Ah.z;if(n*kh.x+i*kh.z>=Fh(a)+4)return r}return n}function Lh(e,t){return e>-12&&e<105&&Math.abs(t)<34+e*.15}var Rh=class{scene=new Hn;sun;hemi;world=new R;theme=null;shadowFocus=new L;constructor(e=`meadow`){let t=this.scene;t.fog=new Vn(16777215,405,7030),this.hemi=new es(16777215,16777215,1.75),t.add(this.hemi),this.sun=new _s(16777215,1.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let n=this.sun.shadow.camera;n.left=n.bottom=-30,n.right=n.top=30,n.near=1,n.far=500,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.03,t.add(this.sun,this.sun.target),this.setTheme(e),this.update(ld)}setTheme(e){if(e===this.theme)return;this.theme=e;let t=yh[e],n=this.scene,r=new zn(t.horizon);n.fog.color.copy(r),n.background=r,this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.sun.color.set(t.sun),this.sun.intensity=t.sunIntensity,n.remove(this.world),zh(this.world);let i=this.world=new R;i.add(Bh(t),Vh(t));let a=new z(new _o(Ch,Ch),K(16777215,{map:Uh(Ch/wh,t)}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a,Jh(t),Yh(t)),new $h(i,t),i.add(sg(t)),n.add(i)}update(e){let t=(this.sun.shadow.camera.right-this.sun.shadow.camera.left)/this.sun.shadow.mapSize.x,n=xh.dot(e),r=Sh.dot(e),i=bh.dot(e);this.shadowFocus.copy(xh).multiplyScalar(Math.round(n/t)*t).addScaledVector(Sh,Math.round(r/t)*t).addScaledVector(bh,i),this.sun.target.position.copy(this.shadowFocus),this.sun.position.copy(this.shadowFocus).addScaledVector(bh,200)}};function zh(e){e.traverse(e=>{let t=e;t.geometry?.dispose();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let e of n)e.map?.dispose(),e.dispose()})}function Bh(e){let t=new ko({side:1,depthWrite:!1,fog:!1,uniforms:{horizon:{value:new zn(e.horizon)},zenith:{value:new zn(e.zenith)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 horizon;
      uniform vec3 zenith;
      varying vec3 vDir;
      void main() {
        float h = max(vDir.y, 0.0);
        gl_FragColor = vec4(mix(horizon, zenith, pow(h, 0.5)), 1.0);
        #include <colorspace_fragment>
      }`}),n=new z(new H(3e4,32,16),t);return n.renderOrder=-3,n.frustumCulled=!1,n}function Vh(e){let t=new R,n=(e,n,r,i)=>{let a=[],o=[];for(let t=0;t<=200;t++){let n=t/200*Math.PI*2,i=Math.cos(n)*e,s=Math.sin(n)*e;if(a.push(i,-200,s,i,r(n),s),t<200){let e=t*2;o.push(e,e+2,e+1,e+1,e+2,e+3)}}let s=new Ir;s.setAttribute(`position`,new wr(a,3)),s.setIndex(o);let c=new z(s,new pi({color:n,fog:!1,side:2,depthTest:!1,depthWrite:!1}));c.frustumCulled=!1,c.renderOrder=i,t.add(c)};return n(27e3,e.hillsFar,e=>500+Math.abs(Math.sin(e*5+.7))*1500+Math.abs(Math.sin(e*13+2))*600,-2),n(15e3,e.hillsNear,e=>260+220*Math.sin(e*6+1)+120*Math.sin(e*15+3)+60*Math.sin(e*29),-1),t}function Hh(e){let t=new Hi(e);return t.colorSpace=He,t.anisotropy=8,t}function Uh(t,n){let r=document.createElement(`canvas`);r.width=r.height=512;let i=r.getContext(`2d`);i.fillStyle=n.ground.base,i.fillRect(0,0,512,512);let a=cg(11),o=(e,t,n)=>{for(let r of[-512,0,512])for(let i of[-512,0,512])e(t+r,n+i)},s=[[n.ground.patches[0],9],[n.ground.patches[1],9],[n.ground.patches[2],5],[n.ground.patches[3],4]];for(let[e,t]of s){i.fillStyle=e;for(let e=0;e<t;e++){let e=a()*512,t=a()*512,n=28+a()*60,r=.5+a()*.4,s=a()*Math.PI;o((e,t)=>{i.beginPath(),i.ellipse(e,t,n,n*r,s,0,Math.PI*2),i.fill()},e,t)}}i.strokeStyle=n.ground.tuft,i.lineWidth=2.6,i.lineCap=`round`;for(let e=0;e<260;e++){let e=a()*512,t=a()*512,n=.7+a()*.6;o((e,t)=>{i.beginPath(),i.moveTo(e-5*n,t-7*n),i.lineTo(e,t+3*n),i.lineTo(e+5*n,t-7*n),i.stroke()},e,t)}i.fillStyle=n.ground.speck;for(let e=0;e<160;e++){let e=a()*512,t=a()*512,n=1.5+a()*3;o((e,t)=>{i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill()},e,t)}let c=Hh(r);return c.wrapS=c.wrapT=e,c.repeat.set(t,t),c}function Wh(t){let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);r.fillStyle=t.dirt.base,r.fillRect(0,0,128,128);let i=cg(5),a=(e,t,n)=>{for(let r of[-128,0,128])for(let i of[-128,0,128])e(t+r,n+i)};for(let[e,n,o,s]of[[t.dirt.tones[0],10,8,18],[t.dirt.tones[1],8,6,14],[t.dirt.tones[2],26,1.5,3.5],[t.dirt.tones[3],30,1,2]]){r.fillStyle=e;for(let e=0;e<n;e++){let e=i()*128,t=i()*128,n=o+i()*(s-o),c=i()*Math.PI;a((e,t)=>{r.beginPath(),r.ellipse(e,t,n,n*.7,c,0,Math.PI*2),r.fill()},e,t)}}let o=Hh(n);return o.wrapS=o.wrapT=e,o}var Gh=(e,t)=>K(16777215,{map:t,polygonOffset:!0,polygonOffsetFactor:e,polygonOffsetUnits:e}),Kh=(e,t)=>K(t,{polygonOffset:!0,polygonOffsetFactor:e,polygonOffsetUnits:e});function qh(e){let t=[],n=[],r=[],i=[],a=new L,o=new L,s=new L,c=0,l=null;for(let u=Eh,d=0;u<=Dh;u+=1.5,d++){jh(u,Mh(u),a),jh(u+.5,Mh(u+.5),o),s.subVectors(o,a).normalize(),s.set(-s.z,0,s.x);let f=Nh(u)+e;l&&(c+=a.distanceTo(l)/Th),l=a.clone();for(let e of[-1,1])t.push(a.x+s.x*f*e,0,a.z+s.z*f*e),n.push(e*f/Th*.5+.5,c),r.push(0,1,0);if(d>0){let e=(d-1)*2;i.push(e,e+1,e+2,e+1,e+3,e+2)}}let u=new Ir;return u.setAttribute(`position`,new wr(t,3)),u.setAttribute(`normal`,new wr(r,3)),u.setAttribute(`uv`,new wr(n,2)),u.setIndex(i),u}function Jh(e){let t=new R,n=new z(qh(.45),Kh(-2,e.earthEdge)),r=new z(qh(0),Gh(-3,Wh(e)));return n.receiveShadow=r.receiveShadow=!0,n.position.y=.04,r.position.y=.05,t.add(n,r),t}function Yh(e){let t=e=>{let t=[];for(let n=0;n<48;n++){let r=n/48*Math.PI*2,i=Oh+1.1*Math.sin(3*r+.4)+.6*Math.sin(5*r+1.3)+e;t.push(new I(Math.cos(r)*i,Math.sin(r)*i))}return new yo(new Ea(t),1).rotateX(-Math.PI/2)},n=Wh(e);n.repeat.set(1/Th,1/Th);let r=new R,i=new z(t(.45),Kh(-4,e.earthEdge)),a=new z(t(0),Gh(-5,n));return i.position.y=.06,a.position.y=.07,i.receiveShadow=a.receiveShadow=!0,r.add(i,a),jh(2,0,r.position),r}function Xh(e,t=9,n=6){return Rd(e.map(([e,r,i,a])=>new H(a,t,n).translate(e,r,i)))}function Zh(e){let t=e.index?e.toNonIndexed():e;return t.computeVertexNormals(),t}var Qh=class{mesh;outline;count=0;constructor(e,t,n,r,i){this.mesh=new Ii(t,n,r),this.mesh.frustumCulled=!1,e.add(this.mesh),i&&(this.outline=Qd(this.mesh,qd),e.add(this.outline))}push(e,t){this.count>=this.mesh.instanceMatrix.count||(this.mesh.setMatrixAt(this.count,e),this.mesh.setColorAt(this.count,t),this.count++)}commit(){this.mesh.count=this.count,this.outline&&(this.outline.count=this.count),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},$h=class{trunks;roundCrowns;pineCrowns;bushes;rocks;stems;caps;dots;tufts;petals;centers;shadows;m=new an;q=new Pt;p=new L;s=new L;e=new hn;color=new zn;shadowColor;rand=cg(2024);t;constructor(e,t){this.t=t,this.shadowColor=new zn(t.shadow);let n=()=>K(16777215),r=new Ji(1,28).rotateX(-Math.PI/2),i=new pi({color:16777215,transparent:!0,opacity:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8});this.shadows=new Qh(e,r,i,400,!1),this.trunks=new Qh(e,new B(.6,1,1,7).translate(0,.5,0),n(),300,!0),this.roundCrowns=new Qh(e,Xh([[0,.55,0,.5],[-.32,.38,.12,.36],[.3,.4,-.1,.38],[.05,.85,.05,.32]]),n(),200,!0),this.pineCrowns=new Qh(e,Rd([new V(.5,.55,9).translate(0,.28,0),new V(.4,.45,9).translate(0,.6,0),new V(.28,.35,9).translate(0,.86,0)]),n(),160,!0),this.bushes=new Qh(e,Xh([[0,.45,0,.5],[-.5,.32,.1,.36],[.48,.34,-.05,.38]]),n(),120,!0),this.rocks=new Qh(e,Zh(new mo(.5,0).translate(0,.3,0)),n(),80,!0),this.stems=new Qh(e,new B(.28,.36,.7,10).translate(0,.35,0),n(),60,!0),this.caps=new Qh(e,new H(.7,16,8,0,Math.PI*2,0,Math.PI/2).scale(1,.75,1).translate(0,.6,0),n(),60,!0),this.dots=new Qh(e,new H(.11,8,6).scale(1,.4,1),n(),300,!1);let a=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2+.3,n=new V(.08,1,4).translate(0,.5,0);n.rotateZ(.35*Math.cos(t)).rotateX(.35*Math.sin(t)),a.push(n.translate(Math.cos(t)*.08,0,Math.sin(t)*.08))}a.push(new V(.09,1.2,4).translate(0,.6,0)),this.tufts=new Qh(e,Rd(a),n(),700,!1);let o=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2;o.push(new mo(.15,0).scale(1,.45,1).translate(Math.cos(t)*.16,.18,Math.sin(t)*.16))}this.petals=new Qh(e,Rd(o),n(),600,!1),this.centers=new Qh(e,new mo(.1,0).scale(1,.6,1).translate(0,.21,0),n(),600,!1),this.forestEdge(),this.groves(),this.meadowProps();for(let e of[this.trunks,this.roundCrowns,this.pineCrowns,this.bushes,this.rocks,this.stems,this.caps,this.dots,this.tufts,this.petals,this.centers,this.shadows])e.commit()}forestEdge(){let e=this.rand;for(let t=0;t<Math.round(200*this.t.trees);t++){let t=(e()-.5)*2*320,n=Fh(t)+e()**1.3*420;Ph(n,t,6)||this.tree(n,t,e()<this.t.pineShare[0])}for(let t=0;t<40;t++){let t=(e()-.5)*2*140,n=155+18*Math.sin(t/23)+e()*10;Ph(n,t,3)||this.bush(n,t,3+e()*3)}}groves(){let e=this.rand;for(let t=0;t<Math.round(16*this.t.trees);t++){let n=t%2==0?-1:1,r=-10+e()*140,i=n*(72+e()*130),a=2+Math.floor(e()*6);for(let t=0;t<a;t++){let t=r+(e()-.5)*26,n=i+(e()-.5)*26;this.tree(t,n,e()<this.t.pineShare[1])}for(let t=0;t<3;t++)this.bush(r+(e()-.5)*30,i+(e()-.5)*30,2.5+e()*3);e()<.6&&this.mushrooms(r+(e()-.5)*20,i+(e()-.5)*20,2+Math.floor(e()*3))}}meadowProps(){let e=this.rand;for(let t=0;t<Math.round(36*this.t.rocks);t++){let t=-10+e()*140,n=(e()-.5)*2*90,r=1+e()**2*3.5;Lh(t,n)&&r>1.4||Ph(t,n,1)||this.rock(t,n,r)}for(let t=0;t<30;t++){let t=6+e()*120,n=e()<.5?-1:1;this.rock(t,Mh(t)+n*(Nh(t)+.6+e()*1.5),.5+e()*.6)}for(let[e,t,n]of[[-6,-14,3],[12,26,4],[-2,18,2],[70,-40,3],[40,44,3]])this.mushrooms(e,t,n);for(let t=0;t<900;t++){let t=-16+e()*170,n=(e()-.5)*2*(40+t*.6),r=.6+e()*.9,[i,a,o]=this.t.tuft;if(this.color.setHSL(i+e()*.07,a+e()*.1,o+e()*.1),Ph(t,n,.5))continue;let s=jh(t,n,this.p);!eg(s.x,s.z)||tg(s.x,s.z)<12||this.add(this.tufts,s.x,0,s.z,r,r*(.8+e()*.6),r,this.color,e()*6)}let{petals:t}=this.t;for(let n=0;n<Math.round(70*this.t.flowers);n++){let n=-14+e()*150,r=(e()-.5)*2*(36+n*.6),i=t[Math.floor(e()*t.length)],a=3+Math.floor(e()*6);for(let t=0;t<a;t++){let t=n+(e()-.5)*7,a=r+(e()-.5)*7,o=.9+e()*.7,s=e()*6;if(Ph(t,a,.3))continue;let c=jh(t,a,this.p);eg(c.x,c.z)&&(this.add(this.petals,c.x,0,c.z,o,o,o,this.color.set(i),s),this.add(this.centers,c.x,0,c.z,o,o,o,this.color.set(i===16769354?16751135:this.t.center),s))}}}tree(e,t,n){let r=this.rand,i=e<150?.7:1,a=(n?34+r()*30:24+r()*24)*i,o=n?a*.42:a*(.75+r()*.25),[s,c,l]=n?this.t.pine:this.t.round;if(this.color.setHSL(s+r()*(n?.04:.08),c+r()*.15,l+r()*.1),Lh(e,t))return;let{x:u,z:d}=jh(e,t,this.p);if(ng(u,d)||!eg(u,d))return;let f=n?a*.18:a*.38;this.add(n?this.pineCrowns:this.roundCrowns,u,f*(n?.9:.55),d,o,n?a*.85:a*.75,o,this.color,r()*6),this.add(this.trunks,u,0,d,o*.09,f,o*.09,this.color.set(this.t.trunk)),this.shadow(u,d,o*.55,a)}bush(e,t,n){let[r,i,a]=this.t.bush;if(this.color.setHSL(r+this.rand()*.06,i,a+this.rand()*.08),Lh(e,t)||Ph(e,t,2))return;let{x:o,z:s}=jh(e,t,this.p);!ng(o,s)&&eg(o,s)&&(this.add(this.bushes,o,0,s,n*1.3,n,n*1.1,this.color,this.rand()*6),this.shadow(o,s,n*.9,n*.4))}rock(e,t,n){let r=this.rand,[i,a,o]=this.t.rock;this.color.setHSL(i,a+r()*.05,o+r()*.14);let s=.5+r()*.4,c=r()*6,{x:l,z:u}=jh(e,t,this.p);!eg(l,u)||tg(l,u)<18||(this.add(this.rocks,l,-.08*n,u,n,n*s,n*(.8+r()*.4),this.color,c),n>1.2&&this.shadow(l,u,n*.6,n*.6))}mushrooms(e,t,n){if(!this.t.mushrooms)return;let r=this.rand,{caps:i}=this.t,a=i[Math.floor(r()*i.length)];for(let i=0;i<n;i++){let n=(i===0?1.4:.7)+r()*.8,o=e+(r()-.5)*4,s=t+(r()-.5)*4,c=r()*6;if(Lh(o,s)&&n>1||Ph(o,s,.5))continue;let{x:l,z:u}=jh(o,s,this.p);if(eg(l,u)){this.add(this.stems,l,0,u,n,n,n,this.color.set(this.t.stem),c),this.add(this.caps,l,0,u,n,n,n,this.color.set(a),c);for(let e=0;e<5;e++){let t=e/5*Math.PI*2+c;this.add(this.dots,l+Math.cos(t)*.45*n,.93*n,u+Math.sin(t)*.45*n,n,n,n,this.color.set(this.t.dots))}}}}add(e,t,n,r,i,a,o,s,c=0){this.q.setFromEuler(this.e.set(0,c,0)),this.m.compose(this.p.set(t,n,r),this.q,this.s.set(i,a,o)),e.push(this.m,s)}shadow(e,t,n,r){let i=r*.25;this.add(this.shadows,e-bh.x*i,.16,t-bh.z*i,n,1,n*.85,this.shadowColor)}};function eg(e,t){let n=Math.atan2(-(t-rg.z),e-rg.x),r=Math.atan2(Math.sin(n-ig),Math.cos(n-ig));return Math.abs(r)<ag}function tg(e,t){return Math.hypot(e-rg.x,t-rg.z)}function ng(e,t){return e>-25&&e<32&&t>-18&&t<32}var rg=new L(10,0,11),ig=129*Math.PI/180,ag=58*Math.PI/180;function og(e){let t=document.createElement(`canvas`);t.width=256,t.height=128;let n=t.getContext(`2d`),r=[[70,78,30],[110,60,40],[158,58,36],[196,80,26],[132,86,30],[92,90,24]],i=e=>{n.beginPath();for(let[t,i,a]of r)n.moveTo(t+a+e,i),n.arc(t,i,a+e,0,Math.PI*2);n.rect(60-e,80,140+e*2,26+e)};return n.fillStyle=e.clouds[0],i(4),n.fill(),n.fillStyle=e.clouds[1],i(0),n.fill(),n.save(),i(0),n.clip(),n.fillStyle=e.clouds[2],n.fillRect(0,88,256,40),n.restore(),Hh(t)}function sg(e){let t=new R,n=new Kr({map:og(e),alphaTest:.5,transparent:!1,fog:!1}),r=cg(31),i=od(131*Math.PI/180),a=od(41*Math.PI/180);for(let e=0;e<12;e++){let e=1200+r()*3200,o=new oi(n),s=180+r()*320;o.scale.set(s,s*.5,1),o.position.copy(i).multiplyScalar(e).addScaledVector(a,(r()-.5)*e*.9),o.position.y=260+r()*e*.42,t.add(o)}return t}function cg(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var lg={hp:0,guard:0,evade:0,hopSpeed:1},ug={raider:{...lg,id:`raider`,name:`Raider Armor`,branch:`start`,tier:0,cost:0,set:`raider`,color:8005429,blurb:`The starter suit: maroon plate panelled in silver. No perks yet.`},siege:{...lg,id:`siege`,name:`Siege Armor`,code:`HVX01`,branch:`heavy`,tier:1,cost:300,set:`siege`,color:4025269,blurb:`Thick blue plate: +25 max health.`,hp:25},titan:{...lg,id:`titan`,name:`Titan Armor`,code:`HVX02`,branch:`heavy`,tier:2,cost:700,set:`titan`,color:11569710,blurb:`Massive gold-and-steel plate: +50 max health.`,hp:50},drake:{...lg,id:`drake`,name:`Drake Armor`,code:`HVX03`,branch:`heavy`,tier:3,cost:1400,set:`drake`,color:16742938,blurb:`Black dragon plate cracked with lava: +80 max health.`,hp:80},vanguard:{...lg,id:`vanguard`,name:`Vanguard Armor`,code:`HVX04`,branch:`heavy`,tier:4,cost:2400,set:`vanguard`,color:4161023,blurb:`Glossy black jet plate lined in blue light: +120 max health.`,hp:120},infinity:{...lg,id:`infinity`,name:`Infinity Armor`,code:`HVX05`,branch:`heavy`,tier:5,cost:4e3,set:`infinity`,color:5232880,blurb:`Glowing ice-cyan plate traced in gold: +170 max health.`,hp:170},frost:{...lg,id:`frost`,name:`Frost Armor`,code:`PLX01`,branch:`plated`,tier:1,cost:300,set:`frost`,color:8374527,blurb:`Ice-white plate that turns aside 15% of every hit.`,guard:.15},lancer:{...lg,id:`lancer`,name:`Lancer Armor`,code:`PLX02`,branch:`plated`,tier:2,cost:700,set:`lancer`,color:5925008,blurb:`Polished white-and-navy plate: blocks 25% of every hit.`,guard:.25},aegis:{...lg,id:`aegis`,name:`Aegis Armor`,code:`PLX03`,branch:`plated`,tier:3,cost:1400,set:`aegis`,color:3135176,blurb:`Shining shield plate: blocks 35% of every hit.`,guard:.35},solar:{...lg,id:`solar`,name:`Solar Armor`,code:`PLX04`,branch:`plated`,tier:4,cost:2400,set:`solar`,color:14856762,blurb:`White-and-gold sun plate: blocks 45% of every hit.`,guard:.45},eclipse:{...lg,id:`eclipse`,name:`Eclipse Armor`,code:`PLX05`,branch:`plated`,tier:5,cost:4e3,set:`eclipse`,color:7332095,blurb:`Deep navy plate with winged guards: blocks 55% of every hit.`,guard:.55},recon:{...lg,id:`recon`,name:`Recon Armor`,code:`LTX01`,branch:`light`,tier:1,cost:300,set:`recon`,color:16730682,blurb:`Light scout plate: 10% of hits miss you, and you hop 15% quicker.`,evade:.1,hopSpeed:1.15},phantom:{...lg,id:`phantom`,name:`Phantom Armor`,code:`LTX02`,branch:`light`,tier:2,cost:700,set:`phantom`,color:5217791,blurb:`Dark stealth plate: 18% of hits miss you, and you hop 30% quicker.`,evade:.18,hopSpeed:1.3},tempest:{...lg,id:`tempest`,name:`Tempest Armor`,code:`LTX03`,branch:`light`,tier:3,cost:1400,set:`tempest`,color:8847162,blurb:`Storm-chrome plate: 26% of hits miss you, and you hop 45% quicker.`,evade:.26,hopSpeed:1.45},storm:{...lg,id:`storm`,name:`Storm Armor`,code:`LTX04`,branch:`light`,tier:4,cost:2400,set:`storm`,color:9075455,blurb:`Violet racing plate: 34% of hits miss you, and you hop 60% quicker.`,evade:.34,hopSpeed:1.6},ronin:{...lg,id:`ronin`,name:`Ronin Armor`,code:`LTX05`,branch:`light`,tier:5,cost:4e3,set:`ronin`,color:15775794,blurb:`Black-and-gold blade plate: 42% of hits miss you, and you hop 75% quicker.`,evade:.42,hopSpeed:1.75}},dg=[{id:`heavy`,name:`Heavy`,items:[`siege`,`titan`,`drake`,`vanguard`,`infinity`]},{id:`plated`,name:`Plated`,items:[`frost`,`lancer`,`aegis`,`solar`,`eclipse`]},{id:`light`,name:`Light`,items:[`recon`,`phantom`,`tempest`,`storm`,`ronin`]}];function fg(e){let t=ug[e];if(t.tier===0)return null;if(t.tier===1)return`raider`;let n=dg.find(e=>e.id===t.branch);return n?n.items[t.tier-2]:`raider`}var pg=new hs(-1,1,1,-1,0,1),mg=new class extends Ir{constructor(){super(),this.setAttribute(`position`,new wr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new wr([0,2,0,0,2,0],2))}},hg=class{constructor(e){this._mesh=new z(mg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},gg={value:0},_g=4,vg=1.15,yg=[];function bg(e,t=!1){return t?e.layers.set(1):e.layers.enable(1),yg.push(e),e}function xg(){for(let e of yg){if(!Sg(e))continue;let t=e.geometry;if(!(t?.isInstancedBufferGeometry&&t.instanceCount===0)&&!(e.isInstancedMesh&&e.count===0))return!0}return!1}function Sg(e){let t=!1;for(;e;e=e.parent){if(!e.visible)return!1;e.isScene&&(t=!0)}return t}var Cg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,wg=`
  uniform sampler2D tMap;
  uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec4 s = texture2D(tMap, vUv) * 4.0;
    s += texture2D(tMap, vUv + uTexel * vec2(-1.0, -1.0));
    s += texture2D(tMap, vUv + uTexel * vec2(1.0, -1.0));
    s += texture2D(tMap, vUv + uTexel * vec2(-1.0, 1.0));
    s += texture2D(tMap, vUv + uTexel * vec2(1.0, 1.0));
    gl_FragColor = s / 8.0;
  }
`,Tg=`
  uniform sampler2D tMap;
  uniform vec2 uTexel;
  uniform float uStrength;
  varying vec2 vUv;
  void main() {
    vec2 t = uTexel;
    vec4 s = texture2D(tMap, vUv + vec2(-t.x, 0.0));
    s += texture2D(tMap, vUv + vec2(t.x, 0.0));
    s += texture2D(tMap, vUv + vec2(0.0, -t.y));
    s += texture2D(tMap, vUv + vec2(0.0, t.y));
    s += texture2D(tMap, vUv + t * vec2(-0.5, -0.5)) * 2.0;
    s += texture2D(tMap, vUv + t * vec2(0.5, -0.5)) * 2.0;
    s += texture2D(tMap, vUv + t * vec2(-0.5, 0.5)) * 2.0;
    s += texture2D(tMap, vUv + t * vec2(0.5, 0.5)) * 2.0;
    gl_FragColor = vec4(s.rgb / 12.0 * uStrength, 1.0);
  }
`,Eg=class{renderer;levels=[];down;up;downMat;upMat;clearColor=new zn;size=new I;prepared=new WeakSet;constructor(e){this.renderer=e,e.info.autoReset=!1;let t=e.extensions.has(`EXT_color_buffer_float`)||e.extensions.has(`EXT_color_buffer_half_float`);for(let e=0;e<_g;e++){let e=new tn(1,1,{type:t?g:l,depthBuffer:!1,generateMipmaps:!1});e.texture.colorSpace=He,e.texture.internalFormat=t?`RGBA16F`:`RGBA8`,e.isXRRenderTarget=!0,this.levels.push(e)}let n=()=>({tMap:{value:null},uTexel:{value:new I},uStrength:{value:1}});this.downMat=new ko({vertexShader:Cg,fragmentShader:wg,uniforms:n(),depthTest:!1,depthWrite:!1}),this.upMat=new ko({vertexShader:Cg,fragmentShader:Tg,uniforms:n(),depthTest:!1,depthWrite:!1,blending:2,transparent:!0}),this.down=new hg(this.downMat),this.up=new hg(this.upMat)}setSize(){this.renderer.getDrawingBufferSize(this.size);let e=this.size.x,t=this.size.y;for(let n of this.levels)e=Math.max(1,Math.round(e/2)),t=Math.max(1,Math.round(t/2)),n.setSize(e,t)}render(e,t,n=!1){let r=this.renderer;this.prepared.has(e)||(e.traverse(e=>{e.isLight&&e.layers.enable(1)}),this.prepared.add(e));let i=n||xg();if(i&&this.drawGlow(e,t),r.setRenderTarget(null),r.render(e,t),!i)return;let a=r.autoClear;r.autoClear=!1,this.pass(this.up,this.upMat,this.levels[0],vg),r.autoClear=a}drawGlow(e,t){let n=this.renderer,r=e.background,i=n.shadowMap.autoUpdate,a=t.layers.mask,o=n.getClearAlpha();n.getClearColor(this.clearColor),e.background=null,n.shadowMap.autoUpdate=!1,t.layers.set(1),gg.value=1,n.setClearColor(0,0),n.setRenderTarget(this.levels[0]),n.render(e,t),gg.value=0,t.layers.mask=a,n.shadowMap.autoUpdate=i,e.background=r,n.setClearColor(this.clearColor,o);let s=n.autoClear;n.autoClear=!1;for(let e=1;e<_g;e++)n.setRenderTarget(this.levels[e]),this.pass(this.down,this.downMat,this.levels[e-1],1);for(let e=3;e>0;e--)n.setRenderTarget(this.levels[e-1]),this.pass(this.up,this.upMat,this.levels[e],1);n.autoClear=s,n.setRenderTarget(null)}pass(e,t,n,r){t.uniforms.tMap.value=n.texture,t.uniforms.uTexel.value.set(1/n.width,1/n.height),t.uniforms.uStrength.value=r,e.render(this.renderer)}},Dg=.42,Og=1.7,kg=.7,Ag=class{pool=[];vfx;prev=new L;seg=new L;rel=new L;constructor(e,t,n=48){this.vfx=t;let r=new H(Dg,14,10),i=new H(Dg*.55,10,8);for(let t=0;t<n;t++){let t=new z(r,new pi({color:16777215,transparent:!0,opacity:.85})),n=new z(i,new pi({color:16777215}));t.add(n),t.visible=!1,bg(t),bg(n),e.add(t),this.pool.push({mesh:t,core:n,active:!1,vel:new L,left:0,damage:0,color:16777215})}}fire(e,t,n,r,i,a=1){let o=this.pool.find(e=>!e.active);if(!o)return!1;o.active=!0,o.damage=i,o.color=r,o.vel.subVectors(t,e);let s=Math.max(.01,o.vel.length());return o.vel.multiplyScalar(n/s),o.left=s/n+kg,o.mesh.position.copy(e),o.mesh.scale.setScalar(a),o.mesh.material.color.set(r),o.mesh.visible=!0,this.vfx.flashes.spawn(e,2.2*a,.12,r),!0}get flying(){return this.pool.some(e=>e.active)}update(e,t,n){for(let r of this.pool){if(!r.active)continue;this.prev.copy(r.mesh.position),r.mesh.position.addScaledVector(r.vel,e),r.left-=e;let i=1+Math.sin(r.left*40)*.12;r.core.scale.setScalar(i),this.seg.subVectors(r.mesh.position,this.prev);let a=this.seg.lengthSq(),o=a>0?Nt.clamp(this.rel.subVectors(t,this.prev).dot(this.seg)/a,0,1):0;this.rel.copy(this.prev).addScaledVector(this.seg,o),this.rel.distanceTo(t)<Og*Math.max(1,r.mesh.scale.x*.8)?(this.vfx.explode(this.rel,.45,[r.color,16777215]),n(r),this.end(r)):(r.mesh.position.y<.2||r.left<=0)&&(this.vfx.laserHit(r.mesh.position,r.color),this.end(r))}}end(e){e.active=!1,e.mesh.visible=!1}clear(){for(let e of this.pool)this.end(e)}},jg=null,Mg=null,Ng=null,Pg=!1,Fg=null,Ig=[];function Lg(e){Mg=e,Ng=e.createBuffer(1,e.sampleRate,e.sampleRate);let t=Ng.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;let n=e.createDynamicsCompressor();n.threshold.value=-10,n.ratio.value=6,Fg=e.createGain(),Fg.gain.value=.9,Fg.connect(n).connect(e.destination)}function Rg(){jg||(jg=new AudioContext,Lg(jg)),jg.state===`suspended`&&jg.resume()}function zg(e){Pg=e}function Bg(){return Pg}function Vg(){return Mg&&Fg&&!Pg?Mg:null}function Hg(){return Fg}function Ug(e,{type:t,freq:n,q:r=1,dur:i,gain:a,at:o=0,sweepTo:s,attack:c=.01}){let l=e.currentTime+o,u=e.createBufferSource();u.buffer=Ng;let d=e.createBiquadFilter();d.type=t,d.frequency.setValueAtTime(n,l),s&&d.frequency.exponentialRampToValueAtTime(s,l+i),d.Q.value=r;let f=e.createGain();f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(a,l+Math.min(c,i/4)),f.gain.exponentialRampToValueAtTime(1e-4,l+i),u.connect(d).connect(f).connect(Hg()),u.start(l,Math.random()*.5),u.stop(l+i+.05)}function Wg(e,t,n,r,i=0,a=`sine`){let o=e.currentTime+i,s=e.createOscillator();s.type=a,s.frequency.setValueAtTime(t,o);let c=e.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(r,o+.005),c.gain.exponentialRampToValueAtTime(1e-4,o+n),s.connect(c).connect(Hg()),s.start(o),s.stop(o+n+.05)}function Gg(e,t,n,r,i,a=0,o=`sine`,s=2e4){let c=e.currentTime+a,l=e.createOscillator();l.type=o,l.frequency.setValueAtTime(t,c),l.frequency.exponentialRampToValueAtTime(n,c+r);let u=e.createBiquadFilter();u.type=`lowpass`,u.frequency.value=s;let d=e.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(i,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+r),l.connect(u).connect(d).connect(Hg()),l.start(c),l.stop(c+r+.05)}function Kg(){let e=Vg();e&&(Gg(e,180,50,.22,.6),Ug(e,{type:`highpass`,freq:2200,dur:.07,gain:.35}),Ug(e,{type:`bandpass`,freq:900,sweepTo:2600,q:.8,dur:.45,gain:.28,attack:.03}))}function qg(e=1){let t=Vg();t&&(Gg(t,1900*e,380*e,.16,.2,0,`sawtooth`,5e3),Gg(t,2600*e,900*e,.09,.1,0,`square`,6e3))}function Jg(e=.4){let t=Vg();t&&(Ug(t,{type:`lowpass`,freq:900,sweepTo:2400,dur:e+.1,gain:.45,attack:.03}),Ug(t,{type:`bandpass`,freq:400,q:.7,dur:e,gain:.3}))}function Yg(e=1){let t=Vg();if(!t)return;let n=t.currentTime;for(;Ig.length&&n-Ig[0]>.1;)Ig.shift();if(Ig.length>=3)return;Ig.push(n);let r=Math.min(e,2.5);Gg(t,110,32,.45*r,.75),Ug(t,{type:`lowpass`,freq:900,sweepTo:140,q:.7,dur:.6*r,gain:.7}),Ug(t,{type:`highpass`,freq:2600,dur:.12,gain:.25})}function Xg(e=1){let t=Vg();if(!t)return;Wg(t,1400*e,.06,.12,0,`square`);let n=t.currentTime,r=t.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(700*e,n),r.frequency.exponentialRampToValueAtTime(1600*e,n+.06),r.frequency.exponentialRampToValueAtTime(900*e,n+.2);let i=t.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(.18,n+.02),i.gain.exponentialRampToValueAtTime(1e-4,n+.22),r.connect(i).connect(Hg()),r.start(n),r.stop(n+.25)}function Zg(e=1){let t=Vg();t&&(Gg(t,600*e,1800*e,.12,.2,0,`triangle`),Wg(t,1046*e,.18,.1,.06,`square`),g_(e*1.4,.6))}function Qg(){let e=Vg();e&&(Wg(e,220,.35,.3,0,`square`),Wg(e,331,.28,.18,0,`triangle`),Ug(e,{type:`bandpass`,freq:1800,q:4,dur:.25,gain:.35}),Gg(e,140,60,.25,.35))}function $g(){let e=Vg();e&&(Ug(e,{type:`bandpass`,freq:3200,q:6,dur:.05,gain:.25}),Wg(e,880,.05,.06,.04,`square`))}function e_(){let e=Vg();e&&(Ug(e,{type:`highpass`,freq:4e3,dur:.03,gain:.3}),Wg(e,300,.05,.1,.01,`square`))}function t_(){let e=Vg();e&&([392,523,659].forEach((t,n)=>Wg(e,t,.22,.14,n*.1,`square`)),Wg(e,784,.5,.14,.3,`square`))}function n_(){let e=Vg();if(e)for(let t=0;t<3;t++)Gg(e,330,520,.28,.16,t*.55,`sawtooth`,2e3),Gg(e,520,330,.25,.16,t*.55+.28,`sawtooth`,2e3)}function r_(){let e=Vg();e&&Gg(e,1800,500,1,.07,0,`sine`)}function i_(){let e=Vg();e&&(Gg(e,90,30,.5,.8),Ug(e,{type:`lowpass`,freq:300,sweepTo:80,dur:.5,gain:.6}))}function a_(){let e=Vg();e&&(Ug(e,{type:`bandpass`,freq:1200,sweepTo:3600,q:3,dur:.16,gain:.22}),Gg(e,700,1400,.12,.05,0,`triangle`))}function o_(){let e=Vg();e&&([523,659,784,1047].forEach((t,n)=>Wg(e,t,.3,.16,n*.11,`triangle`)),Wg(e,1319,.8,.14,.48,`triangle`),Ug(e,{type:`highpass`,freq:6e3,dur:.6,gain:.05,at:.45,attack:.05}))}function s_(){let e=Vg();e&&(Gg(e,300,1200,.25,.12,0,`sawtooth`,2400),Ug(e,{type:`bandpass`,freq:2e3,sweepTo:5e3,q:2,dur:.3,gain:.15}))}function c_(e=1){let t=Vg();t&&(Gg(t,140,900,e,.12,0,`sawtooth`,1800),Gg(t,280,1800,e,.05,0,`square`,3e3),Ug(t,{type:`bandpass`,freq:600,sweepTo:4200,q:2,dur:e,gain:.12,attack:e*.8}))}function l_(){let e=Vg();e&&(Gg(e,80,22,1.4,.9),Ug(e,{type:`lowpass`,freq:700,sweepTo:120,dur:1.6,gain:.7}),Ug(e,{type:`highpass`,freq:2500,dur:.12,gain:.3}),Yg(2.5))}function u_(e=1.5){let t=Vg();if(!t)return;let n=t.currentTime,r=t.createOscillator();r.type=`sawtooth`,r.frequency.setValueAtTime(340,n),r.frequency.linearRampToValueAtTime(260,n+e);let i=t.createOscillator();i.frequency.value=24;let a=t.createGain();a.gain.value=22,i.connect(a).connect(r.frequency);let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=2600;let s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.14,n+.05),s.gain.setValueAtTime(.14,n+e-.12),s.gain.exponentialRampToValueAtTime(1e-4,n+e),r.connect(o).connect(s).connect(Hg());for(let t of[r,i])t.start(n),t.stop(n+e+.05);Gg(t,2200,600,.2,.16,0,`sawtooth`,5e3),Ug(t,{type:`bandpass`,freq:3200,q:3,dur:e,gain:.07,attack:.05})}function d_(){let e=Vg();e&&(Ug(e,{type:`bandpass`,freq:500,sweepTo:1600,q:.8,dur:.55,gain:.45,attack:.04}),Gg(e,220,80,.4,.3))}function f_(){let e=Vg();e&&Ug(e,{type:`highpass`,freq:2500+Math.random()*2500,dur:.05+Math.random()*.05,gain:.05+Math.random()*.04})}function p_(){let e=Vg();e&&([659,784,988,1319].forEach((t,n)=>Wg(e,t,.22,.12,n*.07,`triangle`)),Ug(e,{type:`highpass`,freq:6e3,dur:.5,gain:.05,at:.25,attack:.05}))}function m_(){let e=Vg();e&&([392,330,262].forEach((t,n)=>Wg(e,t,.35,.15,n*.22,`triangle`)),Gg(e,196,98,.8,.14,.66,`triangle`))}function h_(){let e=Vg();e&&Wg(e,880,.06,.1,0,`square`)}function g_(e=1,t=1){let n=Vg();if(!n)return;let r=n.currentTime,i=n.createOscillator();i.type=`triangle`,i.frequency.setValueAtTime(140*e,r),i.frequency.exponentialRampToValueAtTime(420*e,r+.16);let a=n.createGain();a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(.3*t,r+.015),a.gain.exponentialRampToValueAtTime(1e-4,r+.22),i.connect(a).connect(Hg()),i.start(r),i.stop(r+.25)}var X=.5,__={blobby:{id:`blobby`,name:`Blobby`,color:8225676,glow:0,voice:1},puffo:{id:`puffo`,name:`Puffo`,color:2633795,glow:0,voice:1.25},rocky:{id:`rocky`,name:`Rocky`,color:8003114,glow:0,voice:.7},flapjack:{id:`flapjack`,name:`Flapjack`,color:2902652,glow:0,voice:1.45},boing:{id:`boing`,name:`Boing`,color:4537472,glow:0,voice:1.65},ghosty:{id:`ghosty`,name:`Ghosty`,color:15524812,glow:.15,voice:1.3},ember:{id:`ember`,name:`Ember`,color:11569710,glow:.25,voice:.9},jetbot:{id:`jetbot`,name:`Jetbot`,color:2765940,glow:0,voice:1.1},sparky:{id:`sparky`,name:`Sparky`,color:15659252,glow:.1,voice:1.5},orbit:{id:`orbit`,name:`Orbit`,color:1908784,glow:.2,voice:.8},ufo:{id:`ufo`,name:`Zippy`,color:15133166,glow:0,voice:1.6},astro:{id:`astro`,name:`Astro`,color:14672874,glow:0,voice:1.35},prism:{id:`prism`,name:`Prism`,color:13949152,glow:.3,voice:1.9},mech:{id:`mech`,name:`Gigamech`,color:14165532,glow:0,voice:.85},rex:{id:`rex`,name:`Rexo`,color:1513501,glow:0,voice:.75},shark:{id:`shark`,name:`Jet Shark`,color:1711401,glow:0,voice:.95},phoenix:{id:`phoenix`,name:`Phoenix`,color:1381915,glow:.25,voice:1.45},astra:{id:`astra`,name:`Astra`,color:12580095,glow:.3,voice:1.25},dusty:{id:`dusty`,name:`Dusty`,color:14264158,glow:0,voice:1.05},frosty:{id:`frosty`,name:`Frosty`,color:15922939,glow:.05,voice:1.55},magma:{id:`magma`,name:`Magma`,color:3811882,glow:0,voice:.65},volt:{id:`volt`,name:`Volt`,color:16765498,glow:.2,voice:1.75},scorpion:{id:`scorpion`,name:`Scorpio`,color:13144110,glow:0,voice:.8},yeti:{id:`yeti`,name:`Yeti-X`,color:15660282,glow:0,voice:.7},magmatron:{id:`magmatron`,name:`Magmatron`,color:2760740,glow:0,voice:.6},overlord:{id:`overlord`,name:`Overlord`,color:3811962,glow:.15,voice:.9}},v_={1:16777215,2:16762938,3:16722506},y_=new pi({color:16777215}),b_=new pi({color:1909811}),x_=new pi({color:5904938}),S_=new pi({color:16743080}),C_=new pi({color:16769354}),w_=K(16777215,{emissive:16777215,emissiveIntensity:.65}),T_=.08,E_=new Map;function Z(e,t={}){let n=`${e}|${String(t.emissive??``)}|${t.emissiveIntensity??``}`,r=E_.get(n);return r||(r=K(e,t),E_.set(n,r)),r}var D_=class{root=new R;body=new R;topY;stand;flying=!1;squashGroup=new R;eyesOpen=new R;eyesShut=new R;eyesHappy=new R;pupils=[];smile;openMouth;flappers=[];spinners=[];jets=[];stars=new R;badge=new R;chevrons=[];flashables=[];mood=`idle`;t=Math.random()*10;blink=0;nextBlink=2;squash=0;squashVel=0;flashT=0;def;constructor(e){this.def=e,this.root.add(this.squashGroup),this.squashGroup.add(this.body);let t=R_(e,this.body,this.flappers,this.jets,this.spinners);this.topY=t.topY,this.stand=e.id===`boing`||e.id===`frosty`?.2:0;let n=t.face;for(let e of[-1,1]){let t=e*n.eyeX,r=n.surface(t,n.eyeY),i=new R;i.position.set(t,n.eyeY,r-n.eyeR*.15);let a=new z(new H(n.eyeR,16,12),y_);a.scale.set(1,1.15,.55);let o=new R,s=new z(new H(n.eyeR*.62,14,10),b_);s.scale.set(1,1.1,.6);let c=new z(new H(n.eyeR*.22,8,6),y_);c.position.set(n.eyeR*.22,n.eyeR*.28,n.eyeR*.3),o.position.z=n.eyeR*.28,o.add(s,c),s.userData.noOutline=c.userData.noOutline=!0,i.add(a,o),this.pupils.push(o),this.eyesOpen.add(i);let l=new R;l.position.set(t,n.eyeY,r+.01);for(let t of[-1,1]){let r=new z(new qi(.022,n.eyeR*1.1,3,6),b_);r.rotation.z=Math.PI/2+e*t*.55,r.position.set(-e*n.eyeR*.2,t*n.eyeR*.32,0),r.userData.noOutline=!0,l.add(r)}this.eyesShut.add(l);let u=new z(new U(n.eyeR*.7,.025,6,14,Math.PI),b_);u.position.set(t,n.eyeY-n.eyeR*.3,r+.01),u.userData.noOutline=!0,this.eyesHappy.add(u)}let r=n.surface(0,n.mouthY)+.005;this.smile=new z(new U(n.eyeR*.75,.026,6,14,Math.PI),b_),this.smile.rotation.z=Math.PI,this.smile.position.set(0,n.mouthY+n.eyeR*.5,r),this.openMouth=new z(new H(n.eyeR*.75,14,10),x_),this.openMouth.scale.set(.9,1,.35),this.openMouth.position.set(0,n.mouthY,r-.02),this.smile.userData.noOutline=!0,this.body.add(this.eyesOpen,this.eyesShut,this.eyesHappy,this.smile,this.openMouth);for(let e=0;e<3;e++){let e=new z(U_(.09,.04,.04),C_);e.userData.noOutline=!0,this.stars.add(e)}this.stars.position.y=this.topY+.25,this.root.add(this.stars);let i=Rd([-1,1].map(e=>new Ki(.14,.045,.045).rotateZ(e*.55).translate(e*.055,.03,0)));for(let e=0;e<3;e++){let t=new z(i,Z(16777215,{emissive:16777215,emissiveIntensity:.6}));t.position.y=e*.07,this.chevrons.push(t),this.badge.add(t)}this.badge.position.y=this.topY+.16,this.badge.visible=!1,this.root.add(this.badge),Zd(this.root,Gd);for(let e of[this.eyesOpen,this.eyesShut,this.eyesHappy,this.smile,this.openMouth,...this.flappers.map(e=>e.obj),...this.spinners.map(e=>e.obj),...this.jets])e.userData.noBake=!0;of(this.body,Gd),this.body.traverse(e=>{e instanceof z&&e.material instanceof jo&&e.layers.isEnabled(0)&&this.flashables.push({mesh:e,material:e.material})}),this.setMood(`idle`)}get currentMood(){return this.mood}setMood(e){this.mood=e,this.eyesOpen.visible=e===`idle`||e===`scared`||e===`dizzy`,this.eyesShut.visible=e===`fly`,this.eyesHappy.visible=e===`happy`,this.smile.visible=e===`idle`||e===`happy`,this.openMouth.visible=e===`fly`||e===`scared`||e===`dizzy`,this.openMouth.scale.set(e===`fly`?1.1:.55,e===`fly`?1.25:.6,.35),this.smile.scale.setScalar(e===`happy`?1.25:1);for(let t of this.pupils)t.scale.setScalar(e===`scared`?.65:1);this.stars.visible=e===`dizzy`}setTier(e){if(this.badge.visible=e>1,e===1)return;let t=Z(v_[e],{emissive:v_[e],emissiveIntensity:.6});this.chevrons.forEach((n,r)=>{n.visible=r<e,n.material=t})}hit(e=.45){this.squash=e,this.squashVel=0}flash(){if(this.flashT<=0)for(let e of this.flashables)e.mesh.material=w_;this.flashT=T_}reset(){this.flashT=0;for(let e of this.flashables)e.mesh.material=e.material;this.squash=0,this.squashVel=0,this.flying=!1,this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.setMood(`idle`)}update(e){this.t+=e;let t=this.t;if(this.flashT>0&&(this.flashT-=e,this.flashT<=0))for(let e of this.flashables)e.mesh.material=e.material;this.badge.visible&&(this.badge.rotation.y=t*1.6,this.badge.position.y=this.topY+.16+Math.sin(t*3)*.02),this.squashVel+=(-120*this.squash-9*this.squashVel)*e,this.squash+=this.squashVel*e;let n=this.squash;this.squashGroup.scale.set(1+n*.6,1-n,1+n*.6),this.nextBlink-=e,this.nextBlink<=0&&(this.blink=.14,this.nextBlink=2+Math.random()*3),this.blink=Math.max(0,this.blink-e);for(let e of this.eyesOpen.children)e.scale.y=this.blink>0?.12:1;let r=this.flying||this.mood===`fly`,i=r?22:3.2,a=r?1:.35;for(let e of this.flappers)e.obj.rotation[e.axis]=e.base+Math.sin(t*i+e.phase)*e.amp*a;for(let t of this.spinners)t.obj.rotation[t.axis]+=e*t.speed*(r?3:1);for(let e of this.jets)e.scale.set(1,(r?1:.3)*(.8+Math.random()*.4),1);if(this.body.position.x=this.mood===`scared`?Math.sin(t*60)*.025:0,this.mood===`dizzy`)this.pupils.forEach((e,n)=>{e.position.x=Math.cos(t*9+n*Math.PI)*.03,e.position.y=Math.sin(t*9+n*Math.PI)*.03}),this.stars.rotation.y=t*4,this.stars.children.forEach((e,n)=>{let r=n/3*Math.PI*2;e.position.set(Math.cos(r)*.32,Math.sin(t*6+n)*.04,Math.sin(r)*.32),e.rotation.y=-t*4});else for(let e of this.pupils)e.position.set(0,0,e.position.z)}};function O_(e,t,n,r=0){return(i,a)=>n*Math.sqrt(Math.max(.05,1-(i/e)**2-((a-r)/t)**2))}function Q(e,t,n=0,r=0,i=0){let a=new z(e,t);return a.position.set(n,r,i),a}var k_=Z(3817290),A_=Z(13226460),j_=Z(16765503,{emissive:8016384,emissiveIntensity:.3});function M_(e){return Z(e,{emissive:e,emissiveIntensity:.3})}function N_(e,t,n,r,i){let a=Math.acos(Nt.clamp(r/e,-1,1));return new z(new H(e,24,16,Math.PI/2-t/2,t,a-n/2,n),i)}function P_(e,t,n){return[-1,1].map(r=>{let i=Q(new B(n,n,.08,14),k_,r*e,t,0);return i.rotation.z=Math.PI/2,i})}function F_(e,t,n,r,i,a,o=0){let s=new R;s.position.set(n,r,0),s.rotation.z=o,s.add(Q(new B(.02,.02,i,6),k_,0,i/2,0),Q(new H(.055,10,8),Z(a,{emissive:a,emissiveIntensity:.8}),0,i+.03,0)),e.add(s),t.push({obj:s,axis:`z`,base:o,amp:.25,phase:n*3})}function I_(e,t,n,r,i){let a=Q(new Ki(Math.hypot(n-e,r-t),.03,.05),i,(e+n)/2,(t+r)/2,0);return a.rotation.z=Math.atan2(r-t,n-e),a}function L_(e,t,n){let r=new R;return r.add(new z(H_(e,t),n),I_(0,.05*t,e*.55*t,.32*t,A_),I_(0,.05*t,e*.95*t,.2*t,A_)),r}function R_(e,t,n,r,i){let a=Z(e.color,e.glow>0?{emissive:e.color,emissiveIntensity:e.glow*.35}:{}),o=e=>new H(e,24,18);switch(e.id){case`blobby`:{let e=Z(G.scrap.seam),n=Q(o(X),a,0,-.04,0);n.scale.set(1.12,.92,1.12);let r=N_(X*1.005,1.55,1.18,.02,e),i=N_(X*1.012,1.35,1,.02,M_(12576511));for(let e of[r,i])e.position.y=-.04,e.scale.copy(n.scale);let s=Q(new U(.46,.02,6,32),e,0,-.3,0);s.rotation.x=Math.PI/2;let c=Q(new U(X,.018,6,40),e,0,-.04,0);c.scale.set(1.13,.93,1),t.add(n,r,i,s,c,Q(new B(.4,.44,.12,24),e,0,-.44,0),...P_(.56,-.02,.09));for(let n of[.55,1,2.14,2.59])t.add(Q(new H(.028,8,6),e,Math.cos(n)*X*1.12,Math.sin(n)*X*.92-.04,.06));let l=new uo(new Ea([[.2,.34],[.07,.58],[-.1,.55],[-.3,.36],[-.08,.42]].map(([e,t])=>new I(e,t))),{depth:.09,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:1}).translate(0,0,-.045);l.rotateY(-Math.PI/2),t.add(new z(l,a));let u=1.01;return{topY:.46,face:{eyeX:.17,eyeY:.04,eyeR:.11,mouthY:-.15,surface:O_(X*1.12*u,X*.92*u,X*1.12*u,-.04)}}}case`puffo`:{let e=Z(G.cadet.trim,{emissive:G.cadet.trim,emissiveIntensity:.15});t.add(Q(o(X),a),N_(X*1.005,1.45,1.14,-.02,e),N_(X*1.012,1.3,1,-.02,M_(16766362)));let r=Q(new U(X*.92,.025,6,36),e,0,-.3,0);r.rotation.x=Math.PI/2,t.add(r);let i=[];for(let e=0;e<26;e++){let t=1-e/25*2,n=Math.sqrt(1-t*t),r=e*2.39996,a=new L(Math.cos(r)*n,t,Math.sin(r)*n);if(a.z>.45&&Math.abs(a.y)<.6)continue;let o=new V(.065,.16,8).translate(0,.08,0);o.applyQuaternion(new Pt().setFromUnitVectors(new L(0,1,0),a)),o.translate(a.x*X*.95,a.y*X*.95,a.z*X*.95),i.push(o)}t.add(new z(Rd(i),e));for(let r of[-1,1]){let i=Q(new Ki(.05,.3,.22),e,r*.52,-.05,.02);i.rotation.z=r*.4,t.add(i),n.push({obj:i,axis:`z`,base:r*.4,amp:r*.5,phase:0})}let s=1.01;return{topY:.62,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.13,surface:O_(X*s,X*s,X*s)}}}case`rocky`:{let{under:e,trim:n,blade:r}=G.recon,i=Z(e),o=Z(n,{emissive:n,emissiveIntensity:.15}),s=Z(r),c=new mo(X*1.02,1);c.computeVertexNormals();let l=Q(c,a);l.scale.set(1.1,.9,1.05),t.add(l,Q(new lf(.56,.4,.05,2,.025),o,0,-.03,.51),Q(new lf(.5,.34,.06,2,.025),M_(16765122),0,-.03,.52));for(let e of[-1,1]){let n=Q(new Ki(.17,.05,.05),i,e*.15,.17,.56);n.rotation.z=-e*.3,t.add(n,Q(new lf(.16,.22,.74,2,.06),i,e*.5,-.33,0));for(let n of[-.23,0,.23]){let r=Q(new B(.075,.075,.17,12),o,e*.5,-.33,n);r.rotation.z=Math.PI/2,t.add(r)}let r=Q(new V(.04,.22,6),s,e*.5,-.27,-.45);r.rotation.x=-Math.PI/2-.3,t.add(r)}return t.add(Q(new B(.16,.16,.05,16),o,0,.45,-.05),Q(new V(.05,.22,8),a,0,.58,-.05)),t.add(Q(new B(.05,.05,.22,10),i,-.22,.42,-.25)),{topY:.52,face:{eyeX:.13,eyeY:.02,eyeR:.085,mouthY:-.14,surface:()=>.55}}}case`flapjack`:{let{trim:e,glow:r}=G.siege,i=Z(e),s=Z(r,{emissive:r,emissiveIntensity:.8});t.add(Q(o(X),a),N_(X*1.005,1.45,1.1,0,i),N_(X*1.012,1.3,.95,0,M_(14083839)));let c=Q(new U(X*.9,.022,6,36),i,0,-.3,0);c.rotation.x=Math.PI/2,t.add(c);for(let e of[-1,1]){let r=Q(new Ki(.2,.05,.05),i,e*.1,.35,.35);r.rotation.set(-.75,0,e*.35),t.add(r);let o=Q(new V(.13,.34,4),a,e*.24,.5,0);o.rotation.z=-e*.35,o.add(Q(new V(.075,.2,4),i,0,-.04,.05),Q(new H(.045,8,6),s,0,.17,0)),t.add(o);let c=L_(e,.7,a);c.position.set(e*.42,.05,-.08),t.add(c),n.push({obj:c,axis:`z`,base:e*.15,amp:e*.75,phase:0});let l=Q(new V(.025,.07,6),y_,e*.05,-.19,.46);l.rotation.x=Math.PI,l.userData.noOutline=!0,t.add(l)}let l=1.01;return{topY:.62,face:{eyeX:.16,eyeY:.08,eyeR:.1,mouthY:-.12,surface:O_(X*l,X*l,X*l)}}}case`boing`:{let{trim:e,gold:r,vent:i,light:s}=G.storm,c=Z(e),l=Z(r,{emissive:r,emissiveIntensity:.15}),u=Q(o(X),a);u.scale.set(1.05,.95,1);let d=N_(X*1.005,1.45,1.1,0,c),f=N_(X*1.012,1.3,.95,0,M_(15131391));d.scale.copy(u.scale),f.scale.copy(u.scale);let p=Q(new U(X*.92,.022,6,36),l,0,-.3,0);p.rotation.x=Math.PI/2,p.scale.set(1.05,1,1),t.add(u,d,f,p);let m=Z(i,{emissive:i,emissiveIntensity:.5});for(let e of[-1,1]){let r=new R;r.position.set(e*.17,.4,-.05),r.rotation.z=-e*.22;let i=Q(new qi(.1,.42,4,10),a,0,.28,0),u=Q(new qi(.055,.32,4,8),c,0,.28,.085);u.scale.z=.5,u.userData.noOutline=!0;let d=Q(new U(.1,.03,6,16),l,0,.04,0);d.rotation.x=Math.PI/2,r.add(i,u,d,Q(new H(.045,10,8),Z(s,{emissive:s,emissiveIntensity:.9}),0,.05,.1)),t.add(r),n.push({obj:r,axis:`x`,base:0,amp:-.5,phase:e});let f=Q(o(.07),m,e*.27,-.09,.39);f.scale.set(1.2,.8,.3),f.userData.noOutline=!0,t.add(f)}t.add(Q(o(.12),A_,0,-.18,-.47));for(let e=0;e<4;e++){let n=Q(new U(.17,.035,8,20),A_,0,-.48-e*.06,0);n.rotation.x=Math.PI/2+(e%2?.15:-.15),t.add(n)}t.add(Q(new B(.2,.2,.04,16),k_,0,-.68,0));let h=1.01;return{topY:.95,face:{eyeX:.15,eyeY:.05,eyeR:.1,mouthY:-.1,surface:O_(X*1.05*h,X*.95*h,X*h)}}}case`ghosty`:{let{plate:e,gold:r,gem:i,under:s}=G.crimson,c=Z(e),l=Z(r,{emissive:r,emissiveIntensity:.2}),u=[new I(.001,-.38),new I(.48,-.38),new I(.5,-.25),new I(.5,0),new I(.46,.22),new I(.36,.4),new I(.2,.49),new I(.001,.52)];t.add(Q(new ho(u,28),a)),t.add(Q(new B(.505,.505,.44,24,1,!0,-.65,1.3),M_(14212840)));let d=[new I(.475,.24),new I(.38,.415),new I(.21,.51),new I(.001,.54)],f=Q(new U(.47,.025,6,32),l,0,.245,0);f.rotation.x=Math.PI/2,t.add(Q(new ho(d,28),c),f);let p=Q(new U(.44,.05,8,32),Z(r,{emissive:r,emissiveIntensity:.8}),0,-.4,0);p.rotation.x=Math.PI/2,t.add(p,Q(new B(.36,.3,.08,20),Z(s),0,-.42,0)),t.add(Q(new H(.045,10,8),Z(i,{emissive:i,emissiveIntensity:.6}),0,.37,.36));for(let e of[-1,1]){let r=Q(new V(.035,.26,6),l,e*.1,.48,.3);r.rotation.set(-.35,0,-e*.6),t.add(r);let i=Q(new qi(.06,.12,4,8),c,e*.52,-.06,.08);i.rotation.z=e*.4,t.add(i),n.push({obj:i,axis:`z`,base:e*.4,amp:e*.6,phase:1});let a=Q(o(.06),S_,e*.25,-.05,.5);a.scale.set(1.2,.8,.3),a.userData.noOutline=!0,t.add(a)}return{topY:.54,face:{eyeX:.15,eyeY:.08,eyeR:.1,mouthY:-.09,surface:e=>Math.sqrt(Math.max(.05,.505**2-e*e))}}}case`ember`:{let e=Z(G.titan.under),r=Z(G.titan.steel);t.add(Q(o(X),a),N_(X*1.005,1.45,1.05,.04,e),N_(X*1.012,1.3,.9,.04,M_(16765594)));for(let[e,n]of[[.1,.14],[-.08,.18],[-.26,.14]]){let i=Q(new V(.045,n,6),r,0,Math.sqrt(X*X-e*e)+n/2-.03,e);i.rotation.x=-.3,t.add(i)}let i=Q(new B(.15,.15,.06,16),Z(16757575,{emissive:16738816,emissiveIntensity:.9}),0,-.34,.35);i.rotation.x=2.29;for(let e of[-.07,0,.07])i.add(Q(new Ki(.26,.02,.025),k_,0,.035,e));t.add(i);for(let i of[-1,1]){let a=Q(new V(.07,.24,6),r,i*.18,.48,-.04);a.rotation.set(-.35,0,-i*.3),t.add(a);let o=L_(i,.5,e);o.position.set(i*.36,.12,-.25),o.rotation.y=-i*.5,t.add(o),n.push({obj:o,axis:`z`,base:i*.2,amp:i*.7,phase:.5})}for(let n=0;n<3;n++)t.add(Q(o(.1-n*.02),e,0,-.28-n*.07,-.5-n*.12));let s=Q(new V(.06,.16,6),A_,0,-.5,-.86);s.rotation.x=-Math.PI/2-.5,t.add(s);let c=1.01;return{topY:.62,face:{eyeX:.16,eyeY:.09,eyeR:.1,mouthY:-.09,surface:O_(X*c,X*c,X*c)}}}case`jetbot`:{let{steel:e,under:i,accent:s}=G.eclipse,c=Z(e),l=Z(i);t.add(Q(new lf(.92,.84,.82,4,.24),a));let u=Z(10480127,{emissive:4177919,emissiveIntensity:.35});t.add(Q(new lf(.72,.5,.06,3,.04),c,0,.04,.39),Q(new lf(.66,.44,.08,3,.04),u,0,.04,.4));let d=new R;d.position.set(.22,.42,0),d.add(Q(new B(.02,.02,.24,6),c,0,.12,0),Q(o(.06),Z(s,{emissive:s,emissiveIntensity:.8}),0,.27,0)),t.add(d),n.push({obj:d,axis:`z`,base:0,amp:.25,phase:0});for(let e of[-1,1]){let i=Q(new B(.1,.1,.08,14),c,e*.48,.04,0);i.rotation.z=Math.PI/2;let a=Q(new qi(.065,.16,4,8),c,e*.53,-.16,.05);a.rotation.z=e*.35,n.push({obj:a,axis:`z`,base:e*.35,amp:e*.5,phase:.5});let o=Q(new lf(.22,.1,.28,2,.04),l,e*.2,-.45,.03),s=Q(new B(.1,.1,.4,14),c,e*.17,.02,-.48),u=Q(new B(.06,.09,.08,12),l,e*.17,-.22,-.48),d=new R;d.position.set(e*.17,-.26,-.48);for(let[e,t,n]of[[.07,.34,7325951],[.04,.2,15661311]]){let r=Q(new V(e,t,10),new pi({color:n}),0,-t/2,0);r.rotation.x=Math.PI,r.userData.noOutline=!0,d.add(r)}r.push(d),t.add(i,a,o,s,u,d)}return{topY:.42,face:{eyeX:.15,eyeY:.07,eyeR:.1,mouthY:-.1,surface:()=>.44}}}case`sparky`:{let{gold:e,under:r}=G.solar,i=Z(e,{emissive:e,emissiveIntensity:.2}),o=Z(r),s=Z(15268863,{emissive:10480127,emissiveIntensity:1});t.add(Q(new lf(.88,.8,.8,4,.22),a),Q(new lf(.7,.48,.05,3,.04),i,0,.04,.38),Q(new lf(.64,.42,.06,3,.04),M_(10480127),0,.04,.39));let c=new Ea([[0,.2],[.14,.2],[.08,.05],[.18,.05],[.02,-.24],[.07,-.04],[-.02,-.04]].map(([e,t])=>new I((e-.08)*.38,t*.38)));t.add(Q(new uo(c,{depth:.03,bevelEnabled:!1}),Z(3107839,{emissive:3107839,emissiveIntensity:.4}),0,-.3,.39));for(let e of[-1,1]){let r=new R;r.position.set(e*.26,.38,-.02),r.rotation.z=-e*.2,r.add(Q(new B(.035,.05,.3,8),o,0,.15,0),Q(new H(.07,12,10),s,0,.34,0));for(let e=0;e<3;e++){let t=Q(new U(.075-e*.012,.02,6,16),i,0,.08+e*.07,0);t.rotation.x=Math.PI/2,r.add(t)}t.add(r),n.push({obj:r,axis:`z`,base:-e*.2,amp:.15,phase:e});let a=Q(new qi(.065,.16,4,8),i,e*.5,-.12,.05);a.rotation.z=e*.35,n.push({obj:a,axis:`z`,base:e*.35,amp:e*.5,phase:.5}),t.add(a,Q(new lf(.22,.1,.28,2,.04),o,e*.2,-.43,.03))}return{topY:.4,face:{eyeX:.15,eyeY:.07,eyeR:.1,mouthY:-.09,surface:()=>.43}}}case`orbit`:{let{glow:e,eye:r}=G.vanguard,s=Z(e,{emissive:e,emissiveIntensity:.8});t.add(Q(o(X),a),N_(X*1.005,1.45,1.1,.02,s),N_(X*1.012,1.3,.95,.02,M_(13623551)));let c=new R;c.rotation.set(.45,0,.25);let l=new R,u=Q(new U(.74,.04,8,48),s);u.rotation.x=Math.PI/2,l.add(u);let d=Z(r,{emissive:r,emissiveIntensity:.6});for(let e of[.6,3.5])l.add(Q(new H(.08,12,10),d,Math.cos(e)*.74,0,Math.sin(e)*.74));c.add(l),t.add(c),i.push({obj:l,axis:`y`,speed:.8}),F_(t,n,.18,.45,.16,r,-.3);let f=1.01;return{topY:.5,face:{eyeX:.16,eyeY:.08,eyeR:.1,mouthY:-.12,surface:O_(X*f,X*f,X*f)}}}case`ufo`:{let{ice:e,teal:r}=G.frost,s=.17,c=.38,l=[[.001,-.32],[.24,-.3],[.52,-.21],[.68,-.11],[.63,-.03],[.36,.05],[.001,.07]].map(([e,t])=>new I(e,t));t.add(Q(new ho(l,36),a),Q(o(c),Z(13625599),0,s,0));let u=N_(c*1.01,1.3,.95,0,M_(14085375));u.position.y=s,t.add(u,Q(new B(.18,.2,.05,20),Z(e,{emissive:e,emissiveIntensity:.8}),0,-.33,0));let d=new R;d.position.y=-.11;let f=[e,r].map(e=>Z(e,{emissive:e,emissiveIntensity:.9}));for(let e=0;e<12;e++){let t=e/12*Math.PI*2;d.add(Q(o(.045),f[e%2],Math.cos(t)*.69,0,Math.sin(t)*.69))}t.add(d),i.push({obj:d,axis:`y`,speed:1.5}),F_(t,n,.13,.5,.14,r,-.3);let p=1.01;return{topY:.55,face:{eyeX:.13,eyeY:.24000000000000002,eyeR:.085,mouthY:.1,surface:O_(c*p,c*p,c*p,s)}}}case`astro`:{let{navy:e,glow:i,light:s}=G.lancer,c=.1,l=.4,u=Z(e);t.add(Q(o(l),a,0,c,0));let d=N_(l*1.01,1.5,1.05,0,M_(16765562));d.position.y=c;let f=Q(new U(.25,.05,8,24),u,0,-.26,0);f.rotation.x=Math.PI/2,t.add(d,f,Q(new lf(.58,.32,.5,3,.12),a,0,-.33,0),...P_(.41000000000000003,c,.08)),t.add(Q(new lf(.24,.12,.04,2,.015),u,0,-.33,.25)),[i,s,i].forEach((e,n)=>t.add(Q(o(.022),Z(e,{emissive:e,emissiveIntensity:.9}),(n-1)*.07,-.33,.275))),F_(t,n,-.16,.44999999999999996,.14,i,.3),t.add(Q(new lf(.46,.46,.2,2,.06),u,0,-.17,-.36));for(let e of[-1,1]){t.add(Q(new B(.075,.075,.4,14),u,e*.13,-.14,-.48),Q(new B(.05,.075,.07,12),k_,e*.13,-.37,-.48)),t.add(V_(r,e*.13,-.4,-.48,0,.06,.3));let i=Q(new qi(.07,.14,4,8),a,e*.34,-.34,.04);i.rotation.z=e*.45,t.add(i,Q(new lf(.18,.08,.24,2,.03),u,e*.15,-.47,.04)),n.push({obj:i,axis:`z`,base:e*.45,amp:e*.5,phase:.5})}t.add(Q(new B(.015,.015,.62,6),A_,.25,.12,-.46));let p=new R;p.position.set(.25,.36,-.46),p.add(Q(new Ki(.22,.14,.012),Z(s),.11,0,0),Q(new Ki(.22,.035,.016),Z(i),.11,0,0)),t.add(p),n.push({obj:p,axis:`y`,base:.3,amp:.5,phase:0});let m=1.01;return{topY:.5,face:{eyeX:.14,eyeY:.15000000000000002,eyeR:.1,mouthY:-.03,surface:O_(l*m,l*m,l*m,c)}}}case`prism`:{let{gold:n,gem:r}=G.aegis,a=new mo(X*1.04,0);a.computeVertexNormals();let o=[13949152,10481896,16054011,12577252,15129792].map(e=>new zn(e)),s=a.getAttribute(`position`).count,c=new Float32Array(s*3);for(let e=0;e<s;e++)o[Math.floor(e/3)%o.length].toArray(c,e*3);a.setAttribute(`color`,new xr(c,3));let l=Q(a,K(16777215,{vertexColors:!0,emissive:e.color,emissiveIntensity:.15}));l.userData.noBake=!0,t.add(l),t.add(Q(new lf(.46,.34,.05,2,.02),M_(14678260),0,-.02,.47));for(let e of[-1,1]){let r=Q(new V(.07,.26,6),Z(n,{emissive:n,emissiveIntensity:.3}),e*.22,.48,0);r.rotation.z=-e*.5,t.add(r)}let u=new R;return[r,n,16054011,r].forEach((e,t)=>{let n=t/4*Math.PI*2,r=Q(new go(.08,0),Z(e,{emissive:e,emissiveIntensity:.6}),Math.cos(n)*.74,t%2?-.1:.15,Math.sin(n)*.74);r.scale.set(.6,1.4,.6),u.add(r)}),t.add(u),i.push({obj:u,axis:`y`,speed:1.2}),{topY:.5,face:{eyeX:.12,eyeY:.03,eyeR:.085,mouthY:-.1,surface:()=>.5}}}case`rex`:{let{red:e,lava:r}=G.drake,i=Q(o(X),a);i.scale.set(1,.95,1);let s=N_(X*1.01,1.3,.9,.02,M_(13696996));s.scale.copy(i.scale),t.add(i,s);let c=Z(r,{emissive:r,emissiveIntensity:.6});for(let e=0;e<6;e++){let n=.12+e*.3,r=Q(new V(.13-e*.012,.3-e*.025,4).scale(.4,1,1),c,0,Math.cos(n)*.47,-Math.sin(n)*.48);r.rotation.x=-n,t.add(r)}let l=Z(e);for(let e=0;e<3;e++)t.add(Q(o(.13-e*.03),a,0,-.3-e*.04,-.46-e*.13));let u=Q(new V(.05,.14,6),c,0,-.39,-.83);u.rotation.x=-Math.PI/2-.3,t.add(u);for(let e of[-1,1]){let r=Q(new qi(.045,.1,4,8),a,e*.32,-.16,.33);r.rotation.x=1,t.add(r,Q(new lf(.2,.1,.26,2,.04),l,e*.2,-.46,.06)),n.push({obj:r,axis:`x`,base:1,amp:.5,phase:e})}let d=B_(.36,.34,-.04,-.35,2,l);d.scale.setScalar(1.35),t.add(d);let f=1.01;return{topY:.58,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.12,surface:O_(X*f,X*.95*f,X*f)}}}case`shark`:{let{silver:e,glow:i}=G.phantom,s=new L(.9,.82,1.25),c=Q(o(X),a);c.scale.copy(s);let l=N_(X*1.01,1.1,.8,.06,M_(14217471));l.scale.copy(s);let u=N_(X*1.005,2.2,.75,-.33,Z(e));u.scale.copy(s),t.add(c,l,u);let d=Z(e),f=Q(new uo(new Ea([[-.16,0],[.22,.34],[.2,.12],[.28,0]].map(([e,t])=>new I(e,t))),{depth:.05,bevelEnabled:!1}).translate(0,0,-.025),d,0,.34,-.2);f.rotation.y=Math.PI/2,t.add(f);for(let e of[-1,1]){let r=Q(new lf(.3,.04,.16,1,.015),d,e*.47,-.15,.08);r.rotation.z=-e*.5,t.add(r),n.push({obj:r,axis:`z`,base:-e*.5,amp:e*.35,phase:0});for(let n of[.16,.08,0]){let r=Q(new Ki(.02,.14,.025),Z(i,{emissive:i,emissiveIntensity:.8}),e*.43,.02,n);r.rotation.y=e*.2,t.add(r)}}let p=Q(new lf(.05,.34,.15,1,.02),d,0,.24,-.62);p.rotation.x=-.55;let m=Q(new lf(.05,.24,.12,1,.02),d,0,-.2,-.6);m.rotation.x=.55;let h=Q(new B(.1,.14,.16,14),k_,0,0,-.66);h.rotation.x=Math.PI/2,t.add(p,m,h,V_(r,0,0,-.74,Math.PI/2,.08,.4));let g=1.01;return{topY:.42,face:{eyeX:.14,eyeY:.11,eyeR:.09,mouthY:-.07,surface:O_(X*s.x*g,X*s.y*g,X*s.z*g)}}}case`phoenix`:{let{gold:e,eye:r}=G.ronin;t.add(Q(o(X),a),N_(X*1.005,1.45,1.05,.02,Z(e,{emissive:e,emissiveIntensity:.4})),N_(X*1.012,1.3,.9,.02,M_(16770760)));let i=[16773280,16765498,e,14717482,14181406].map(e=>Z(e,{emissive:e,emissiveIntensity:.6})),s=Z(r,{emissive:r,emissiveIntensity:.9});for(let[e,n,r]of[[0,.5,2],[-.13,.38,1],[.13,.38,1],[0,.3,0]]){let a=Q(new V(.09,n,8),i[r],e,.4+n*.4,-.2-n*.3);a.rotation.set(-.65,0,-e*2.5),t.add(a,Q(o(.035),s,e*(1+n*2.5),.4+n*.8,-.2-n*.6))}for(let e of[-1,1]){let r=z_(e,.5,5,i,s);r.position.set(e*.4,.08,-.14),r.rotation.y=-e*.3,t.add(r),n.push({obj:r,axis:`z`,base:0,amp:e*.6,phase:0});let a=Q(new V(.05,.12,6),j_,e*.14,-.5,.08);a.rotation.x=Math.PI,t.add(a)}let c=new R;c.position.set(0,-.22,-.4);for(let[e,t,n]of[[0,.55,1],[-.1,.42,2],[.1,.42,2]]){let r=new L(e*1.5,-.39,-.92).normalize(),a=Q(new V(.06,t,8),i[n]);a.position.copy(r).multiplyScalar(t/2),a.position.x+=e,a.quaternion.setFromUnitVectors(new L(0,1,0),r);let l=Q(o(.045),s);l.position.copy(r).multiplyScalar(t),l.position.x+=e,c.add(a,l)}t.add(c),n.push({obj:c,axis:`x`,base:0,amp:.2,phase:1});let l=1.01;return{topY:.5,face:{eyeX:.16,eyeY:.08,eyeR:.1,mouthY:-.11,surface:O_(X*l,X*l,X*l)}}}case`astra`:{let{gold:e,crystal:r}=G.infinity;t.add(Q(o(X),a),N_(X*1.01,1.3,.9,0,M_(14744575)));let s=Z(e,{emissive:e,emissiveIntensity:.5}),c=new R;c.position.y=.68;let l=Q(new U(.26,.035,8,36),s);l.rotation.x=Math.PI/2,c.add(l);for(let e=0;e<4;e++){let t=e/4*Math.PI*2;c.add(Q(U_(.07,.035,.03),s,Math.cos(t)*.26,0,Math.sin(t)*.26))}t.add(c),i.push({obj:c,axis:`y`,speed:1});let u=Q(U_(.075,.035,.04),s,0,.36,.35);u.rotation.x=-.75,t.add(u);let d=Z(r,{emissive:r,emissiveIntensity:.3}),f=s;for(let[e,r,i,a]of[[.22,.52,.35,0],[.02,.44,0,.7],[-.18,.34,-.35,1.4]])for(let o of[-1,1]){let s=z_(o,r,4,[d],f);s.position.set(o*.38,e,-.2),s.rotation.set(0,-o*.15,o*i),t.add(s),n.push({obj:s,axis:`z`,base:o*i,amp:o*.4,phase:a})}for(let e of[-1,1]){let n=Q(o(.06),S_,e*.26,-.08,.43);n.scale.set(1.2,.8,.3),n.userData.noOutline=!0,t.add(n)}let p=1.01;return{topY:.5,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.11,surface:O_(X*p,X*p,X*p)}}}case`mech`:{let{dark:e,gold:i}=G.galaxy,o=Z(e),s=Z(i,{emissive:i,emissiveIntensity:.6});t.add(Q(new lf(.9,.82,.8,4,.2),a),Q(new lf(.64,.4,.06,3,.04),M_(12579071),0,.06,.4)),t.add(Q(new lf(.56,.15,.06,2,.03),o,0,-.27,.4));for(let e of[-.13,.13])t.add(Q(new Ki(.14,.05,.02),Z(16765503,{emissive:16765503,emissiveIntensity:.8}),e,-.27,.435));t.add(Q(new Ki(.1,.08,.06),Z(15217466),0,.36,.4));for(let e of[-1,1]){let i=new R;i.position.set(0,.36,.39),i.rotation.z=-e*.7,i.add(Q(new Ki(.05,.32,.04),s,0,.17,0)),t.add(i,B_(e*.48,.34,-.05,0,3,o));let a=Q(new qi(.065,.14,4,8),o,e*.52,-.14,.05);a.rotation.z=e*.35,t.add(a,Q(new lf(.22,.1,.28,2,.04),o,e*.2,-.45,.03)),n.push({obj:a,axis:`z`,base:e*.35,amp:e*.5,phase:.5}),t.add(Q(new B(.06,.09,.1,12),k_,e*.18,-.25,-.43),V_(r,e*.18,-.3,-.43,0,.07,.34))}return{topY:.42,face:{eyeX:.15,eyeY:.07,eyeR:.1,mouthY:-.08,surface:()=>.44}}}case`dusty`:{let e=Z(3812902),r=Z(14172974),i=Q(o(X),a);i.scale.set(1.08,.9,1.05);let s=N_(X*1.012,1.3,.9,0,M_(16773328));s.scale.copy(i.scale),t.add(i,s);let c=Q(new U(X*1.04,.035,6,36),e,0,.2,0);c.rotation.x=Math.PI/2-.1,c.scale.set(1.04,1,1),t.add(c);for(let n of[-1,1]){let r=Q(new B(.1,.1,.06,16),Z(16751162,{emissive:16751162,emissiveIntensity:.5}),n*.15,.28,.42);r.rotation.x=Math.PI/2-.5,t.add(r),t.add(Q(new lf(.16,.2,.7,2,.06),e,n*.5,-.33,0));for(let e of[-.22,0,.22]){let r=Q(new B(.07,.07,.17,12),a,n*.5,-.33,e);r.rotation.z=Math.PI/2,t.add(r)}}let l=Q(new U(X*.86,.06,8,32),r,0,-.26,0);l.rotation.x=Math.PI/2;let u=new R;u.position.set(.12,-.24,-.42),u.add(Q(new Ki(.12,.04,.3),r,0,0,-.15)),t.add(l,u),n.push({obj:u,axis:`y`,base:.3,amp:.4,phase:0});let d=Z(5216842);t.add(Q(new qi(.05,.16,4,8),d,-.14,.52,-.05));let f=Q(new qi(.03,.07,4,6),d,-.2,.55,-.05);f.rotation.z=.9,t.add(f,Q(o(.035),Z(16739228,{emissive:16739228,emissiveIntensity:.4}),-.14,.66,-.05));let p=1.01;return{topY:.55,face:{eyeX:.15,eyeY:0,eyeR:.09,mouthY:-.15,surface:O_(X*1.08*p,X*.9*p,X*1.05*p)}}}case`frosty`:{let{ice:e,teal:r}=G.frost,i=Z(e,{emissive:e,emissiveIntensity:.25});t.add(Q(o(X),a),N_(X*1.005,1.45,1.1,0,i),N_(X*1.012,1.3,.95,0,M_(14677247)));let s=Z(3107800);t.add(Q(new B(.3,.36,.2,20),s,0,.42,-.02),Q(new U(.35,.05,8,24).rotateX(Math.PI/2),Z(16777215),0,.33,-.02)),t.add(Q(o(.1),Z(16777215),0,.58,-.02));let c=Q(new U(X*.88,.05,8,32),Z(r),0,-.3,0);c.rotation.x=Math.PI/2,t.add(c);for(let e=0;e<6;e++){let n=e/6*Math.PI*2+.5;if(Math.sin(n)>.6)continue;let r=Q(new V(.05,.2,6),i,Math.cos(n)*.5,-.05,Math.sin(n)*.5);r.rotation.set(Math.sin(n)*Math.PI/2,0,-Math.cos(n)*Math.PI/2),t.add(r)}for(let e of[-1,1]){let r=Q(new qi(.05,.12,4,8),A_,e*.5,-.1,.05);r.rotation.z=e*.6,t.add(r),n.push({obj:r,axis:`z`,base:e*.6,amp:e*.5,phase:.3})}for(let e=0;e<4;e++){let n=Q(new U(.17,.035,8,20),A_,0,-.48-e*.06,0);n.rotation.x=Math.PI/2+(e%2?.15:-.15),t.add(n)}t.add(Q(new B(.2,.2,.04,16),k_,0,-.68,0));let l=1.01;return{topY:.68,face:{eyeX:.15,eyeY:.05,eyeR:.1,mouthY:-.12,surface:O_(X*l,X*l,X*l)}}}case`magma`:{let e=Z(16742938,{emissive:16742938,emissiveIntensity:.8}),r=new mo(X*1.05,1);r.computeVertexNormals();let i=Q(r,a);i.scale.set(1.12,.95,1.05),t.add(i,Q(new lf(.5,.34,.05,2,.025),e,0,0,.53),Q(new lf(.44,.28,.06,2,.025),M_(16767136),0,0,.54));for(let[n,r,i,a]of[[.38,.22,.3,.6],[-.42,.1,.25,-.4],[.3,-.3,.35,-.9],[-.2,.42,-.2,1.2],[.1,-.1,-.55,.3]]){let o=Q(new Ki(.22,.035,.035),e,n,r,i);o.lookAt(n*2,r*2,i*2),o.rotateZ(a),t.add(o)}for(let r of[-1,1]){let i=new R;i.position.set(r*.58,-.08,.05);let o=new mo(.17,0);o.computeVertexNormals(),i.add(Q(new qi(.07,.12,4,8),a,0,-.08,0),Q(o,e,0,-.24,.04)),i.rotation.z=r*.25,t.add(i),n.push({obj:i,axis:`x`,base:0,amp:.45,phase:r});let s=Q(new V(.06,.2,5),a,r*.25,.48,0);s.rotation.z=-r*.4,t.add(s)}return t.add(Q(new B(.1,.14,.1,10),k_,0,.5,-.12),Q(new B(.07,.07,.02,10),e,0,.56,-.12)),{topY:.56,face:{eyeX:.12,eyeY:.02,eyeR:.08,mouthY:-.1,surface:()=>.57}}}case`volt`:{let e=Z(1908518),s=Z(7337215,{emissive:7337215,emissiveIntensity:.9});t.add(Q(o(X),a),N_(X*1.005,1.45,1.1,0,e),N_(X*1.012,1.3,.95,0,M_(14220543)));let c=Q(new U(X*.95,.03,6,36),e,0,-.22,0);c.rotation.x=Math.PI/2,t.add(c);let l=new uo(new Ea([[0,0],[.16,.18],[.1,.18],[.24,.38],[.06,.16],[.12,.16]].map(([e,t])=>new I(e,t))),{depth:.04,bevelEnabled:!1}).translate(0,0,-.02);for(let e of[-1,1]){let r=Q(l,s,e*.42,.12,-.05);r.scale.x=e,t.add(r),n.push({obj:r,axis:`z`,base:0,amp:e*.3,phase:0})}let u=new R;u.position.y=.56;for(let t=0;t<3;t++){let n=Q(new Ki(.5,.02,.07),e,0,0,0);n.rotation.y=t/3*Math.PI,u.add(n)}t.add(Q(new B(.03,.03,.1,8),k_,0,.51,0),u),i.push({obj:u,axis:`y`,speed:14}),t.add(Q(new B(.08,.11,.08,12),k_,0,-.5,0),V_(r,0,-.54,0,0,.07,.3));let d=1.01;return{topY:.58,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.12,surface:O_(X*d,X*d,X*d)}}}case`scorpion`:{let e=Z(4863008),r=Z(16734762,{emissive:16734762,emissiveIntensity:.8}),i=Q(o(X),a);i.scale.set(1.15,.8,1.05);let s=N_(X*1.012,1.2,.8,.02,M_(16769184));s.scale.copy(i.scale),t.add(i,s);for(let n=0;n<3;n++){let r=Q(new U(X*(1-n*.12),.03,6,30,Math.PI),e,0,-.04,-.15-n*.12);r.scale.set(1.15,.8,1),t.add(r)}for(let r of[-1,1]){let i=new R;i.position.set(r*.48,-.12,.35);let s=Q(new V(.08,.3,6),a,r*.02,.06,.15);s.rotation.x=Math.PI/2;let c=Q(new V(.06,.24,6),e,r*.02,-.05,.12);c.rotation.x=Math.PI/2+.4,i.add(Q(o(.12),a),s,c),t.add(i),n.push({obj:i,axis:`y`,base:0,amp:r*.35,phase:0});for(let n=0;n<3;n++){let i=Q(new qi(.035,.24,4,6),e,r*.5,-.32,.12-n*.2);i.rotation.z=r*.9,t.add(i)}}[[.18,-.5,.13],[.4,-.62,.12],[.62,-.58,.11],[.8,-.42,.1],[.9,-.22,.09]].forEach(([n,r,i],s)=>t.add(Q(o(i),s%2?e:a,0,n,r)));let c=Q(new V(.08,.26,8),r,0,.86,-.02);c.rotation.x=2.2,t.add(c);let l=1.01;return{topY:1,face:{eyeX:.17,eyeY:.04,eyeR:.1,mouthY:-.12,surface:O_(X*1.15*l,X*.8*l,X*1.05*l)}}}case`yeti`:{let{ice:e,mask:r}=G.frost,i=Z(e,{emissive:e,emissiveIntensity:.35}),s=Z(r),c=Q(o(X),a);c.scale.set(1.1,1,1);let l=N_(X*1.005,1.5,1.1,0,s),u=N_(X*1.012,1.3,.92,0,M_(12577023));l.scale.copy(c.scale),u.scale.copy(c.scale),t.add(c,l,u);for(let e=0;e<5;e++){let n=.2+e*.32,r=Q(new V(.1,.26,5),i,0,Math.cos(n)*.48,-Math.sin(n)*.5);r.rotation.x=-n,t.add(r)}for(let e of[-1,1]){let r=Q(new U(.1,.035,6,12,Math.PI*1.2),A_,e*.36,.38,0);r.rotation.set(0,Math.PI/2,e>0?.2:Math.PI-.2),t.add(r);let o=new R;o.position.set(e*.55,-.02,.05),o.rotation.z=e*.3,o.add(Q(new qi(.1,.16,4,8),a,0,-.1,0),Q(new lf(.24,.22,.24,2,.06),i,0,-.3,.04)),t.add(o),n.push({obj:o,axis:`x`,base:0,amp:.4,phase:e});let c=Q(new B(.07,.09,.32,12),s,e*.36,.38,.06);c.rotation.x=Math.PI/2-.25,t.add(c,Q(new B(.06,.06,.02,12).rotateX(Math.PI/2-.25),i,e*.36,.42,.22)),t.add(Q(new lf(.22,.12,.28,2,.05),s,e*.2,-.5,.03))}let d=1.01;return{topY:.55,face:{eyeX:.16,eyeY:.06,eyeR:.1,mouthY:-.13,surface:O_(X*1.1*d,X*d,X*d)}}}case`magmatron`:{let e=Z(16738842,{emissive:16738842,emissiveIntensity:.9}),r=Z(16765024,{emissive:16765024,emissiveIntensity:1});t.add(Q(new lf(.95,.85,.85,4,.22),a),Q(new lf(.62,.38,.06,3,.04),M_(16763024),0,.04,.43));for(let n of[-.2,.28]){let r=Q(new lf(.97,.04,.87,2,.02),e,0,n,0);t.add(r)}t.add(Q(new B(.2,.34,.24,12),a,0,.52,-.05),Q(new B(.16,.16,.02,12),r,0,.64,-.05));for(let r of[-1,1]){t.add(Q(new B(.1,.14,.18,10),k_,r*.42,.48,-.05),Q(new B(.08,.08,.02,10),e,r*.42,.58,-.05));let i=new R;i.position.set(r*.58,.05,.05),i.rotation.z=r*.25;let o=new mo(.2,0);o.computeVertexNormals(),i.add(Q(new qi(.09,.18,4,8),a,0,-.12,0),Q(o,a,0,-.34,.05),Q(new H(.08,8,6),e,0,-.34,.2)),t.add(i),n.push({obj:i,axis:`x`,base:0,amp:.35,phase:r}),t.add(Q(new lf(.26,.12,.3,2,.05),k_,r*.22,-.48,.03))}return{topY:.66,face:{eyeX:.16,eyeY:.06,eyeR:.1,mouthY:-.08,surface:()=>.47}}}case`overlord`:{let{gold:e}=G.infinity,r=Z(e,{emissive:e,emissiveIntensity:.5}),s=Z(8057087,{emissive:8057087,emissiveIntensity:.7}),c=Z(16734936,{emissive:16734936,emissiveIntensity:.8});t.add(Q(o(X),a),N_(X*1.005,1.45,1.05,.02,r),N_(X*1.012,1.3,.9,.02,M_(15786239)));let l=new R;l.position.y=.42;let u=Q(new U(.24,.035,8,30),r);u.rotation.x=Math.PI/2,l.add(u);for(let e=0;e<5;e++){let t=e/5*Math.PI*2+Math.PI/2,n=Q(new go(.06,0),e===0?c:s,Math.cos(t)*.24,.1+(e===0?.04:0),Math.sin(t)*.24);n.scale.set(.7,e===0?2.4:1.8,.7),l.add(n)}t.add(l);let d=Q(new go(.08,0),c,0,-.3,.44);t.add(d);for(let e of[-1,1]){let i=z_(e,.6,5,[a],r);i.position.set(e*.4,.12,-.18),i.rotation.y=-e*.3,t.add(i),n.push({obj:i,axis:`z`,base:0,amp:e*.35,phase:0})}let f=new R;for(let e=0;e<4;e++){let t=e/4*Math.PI*2,n=Q(new go(.09,0),s,Math.cos(t)*.78,.05,Math.sin(t)*.78);n.scale.set(.6,1.5,.6),f.add(n)}t.add(f),i.push({obj:f,axis:`y`,speed:.9});let p=1.01;return{topY:.62,face:{eyeX:.16,eyeY:.08,eyeR:.1,mouthY:-.11,surface:O_(X*p,X*p,X*p)}}}default:throw Error(`no chibi ${e.id}`)}}function z_(e,t,n,r,i){let a=new R;for(let o=0;o<n;o++){let s=o/(n-1),c=t*(1-.35*s),l=new R;l.rotation.z=e*(.5-s*.9),l.add(Q(new Ki(c,.07,.03),r[o%r.length],e*c/2,0,0),Q(new Ki(c*.9,.02,.035),i,e*c*.45,.04,0)),a.add(l)}return a}function B_(e,t,n,r,i,a=Z(3820138)){let o=new R;o.position.set(e,t,n),o.rotation.set(-.25,0,r);let s=.1+i*.07;o.add(Q(new lf(s,.18,.36,2,.04),a));let c=Z(1382171),l=Z(16726843);for(let e=0;e<i;e++){let t=(e-(i-1)/2)*.075,n=Q(new B(.032,.032,.02,10),c,t,0,.18);n.rotation.x=Math.PI/2;let r=Q(new V(.03,.08,8),l,t,0,.22);r.rotation.x=Math.PI/2,o.add(n,r)}return o}function V_(e,t,n,r,i,a,o){let s=new R;s.position.set(t,n,r),s.rotation.x=i;for(let[e,t,n]of[[a,o,16742938],[a*.55,o*.6,16774048]]){let r=Q(new V(e,t,10),new pi({color:n}),0,-t/2,0);r.rotation.x=Math.PI,r.userData.noOutline=!0,s.add(r)}return e.push(s),s}function H_(e,t){let n=[[0,.08],[.55,.32],[.95,.2],[.8,.02],[.62,-.08],[.45,-.02],[.28,-.12],[.12,-.04],[0,-.1]];return new uo(new Ea((e>0?n:n.map(([e,t])=>[-e,t]).reverse()).map(([e,n])=>new I(e*t,n*t))),{depth:.035,bevelEnabled:!1}).translate(0,0,-.0175)}function U_(e,t,n,r=0){let i=new Ea;for(let n=0;n<10;n++){let r=Math.PI/2+n/10*Math.PI*2,a=n%2==0?e:t,o=Math.cos(r)*a,s=Math.sin(r)*a;n===0?i.moveTo(o,s):i.lineTo(o,s)}i.closePath();let a=new uo(i,{depth:n,bevelEnabled:r>0,bevelThickness:r,bevelSize:r*.8,bevelSegments:3});return a.translate(0,0,-n/2),a.computeVertexNormals(),a}var W_=60,G_=.55,K_=1.8,q_={mech:[new L(-.48,.42,.1),new L(.48,.42,.1)],rex:[new L(.32,.42,.25),new L(.42,.38,.25)],shark:[new L(-.45,-.12,.2),new L(.45,-.12,.2)],phoenix:[new L(-.7,.25,-.1),new L(.7,.25,-.1)],astra:[new L(-.26,.7,0),new L(.26,.7,0)],scorpion:[new L(0,.82,.08)],yeti:[new L(-.36,.42,.22),new L(.36,.42,.22)],magmatron:[new L(0,.66,-.05),new L(-.42,.6,-.05),new L(.42,.6,-.05)],overlord:[new L(-.78,.05,0),new L(.78,.05,0),new L(0,.05,-.78)]},J_=class{model;models=new Map;holder=new R;radius=X*7*1.05;state=`off`;hp=0;maxHp=0;lastHit=-99;volleys=0;def;pos=new L;vy=0;stateT=0;volleyT=0;escortT=0;stride=0;boomT=0;events;baseY=X*7;constructor(e,t){this.events=t,this.model=this.use(`mech`),this.holder.scale.setScalar(7),this.holder.visible=!1,e.add(this.holder)}get alive(){return this.state===`drop`||this.state===`walk`||this.state===`fight`}get raging(){return this.hp<this.maxHp*.5}center(e){return e.copy(this.holder.position)}use(e){let t=this.models.get(e);return t||(t=new D_(__[e]),this.models.set(e,t)),this.model!==t&&(this.model&&this.holder.remove(this.model.root),this.holder.add(t.root),this.model=t),t}get name(){return this.def?.name??__.mech.name}start(e,t){this.def=e,this.use(e.model),this.hp=this.maxHp=e.hp,this.state=`drop`,this.stateT=0,Ed(t,ud,80,40,this.pos),this.vy=0,this.volleyT=2.2,this.volleys=0,this.escortT=3,this.lastHit=-99,this.model.reset(),this.model.setTier(e.tier??1),this.model.setMood(`scared`),this.model.flying=e.hover>0,this.holder.visible=!0,this.holder.position.set(this.pos.x,this.baseY+this.pos.y,this.pos.z)}damage(e,t){return this.alive?(this.hp-=e,this.lastHit=t,this.model.flash(),this.model.hit(.12),this.hp<=0&&(this.hp=0,this.state=`dying`,this.stateT=0,this.boomT=0,this.model.setMood(`dizzy`),!0)):!1}hide(){this.state=`off`,this.holder.visible=!1}update(e,t){if(this.state===`off`||this.state===`dead`)return;this.stateT+=e,this.model.update(e);let n=0;switch(this.state){case`drop`:this.vy-=W_*e*(this.def.hover>0?.6:1),this.pos.y+=this.vy*e,this.pos.y<=this.def.hover&&(this.pos.y=this.def.hover,this.model.hit(.5),this.model.setMood(`idle`),this.state=`walk`,this.stateT=0,this.events.landed(this));break;case`walk`:{let r=Math.hypot(this.pos.x-t.x,this.pos.z-t.z),i=this.stride;this.stride+=e/G_;let a=this.def.hover>0;n=a?Math.sin(this.stride*1.4)*.6:Math.abs(Math.sin(this.stride*Math.PI))*.8,!a&&Math.floor(this.stride)!==Math.floor(i)&&(this.model.hit(.12),this.events.stomp(this));let o=Math.min(this.def.walkSpeed*e,r-22);o<=0?(this.state=`fight`,this.stateT=0):(this.pos.x+=(t.x-this.pos.x)/r*o,this.pos.z+=(t.z-this.pos.z)/r*o),this.attacks(e);break}case`fight`:n=Math.sin(this.stateT*2.2)*(this.def.hover>0?.6:.15),this.attacks(e),Math.hypot(this.pos.x-t.x,this.pos.z-t.z)>32&&(this.state=`walk`,this.stateT=0);break;case`dying`:if(this.boomT-=e,this.holder.position.x+=(Math.random()-.5)*.3,this.pos.y=Math.max(0,this.pos.y-e*5),this.boomT<=0&&this.stateT<1.6){this.boomT=.18;let e=Y_.set((Math.random()-.5)*1.4,(Math.random()-.3)*1.2,(Math.random()-.2)*1.2).multiplyScalar(this.radius).add(this.holder.position);this.events.blast(e,.9)}this.stateT>=K_&&(this.events.blast(this.center(Y_),2.6),this.state=`dead`,this.holder.visible=!1,this.events.defeated(this))}this.state!==`dead`&&(this.holder.position.set(this.pos.x,this.baseY+this.pos.y+n,this.pos.z),this.holder.rotation.y=Math.atan2(t.x-this.pos.x,t.z-this.pos.z))}attacks(e){let t=this.def;if(this.volleyT-=e,this.volleyT<=0){this.volleyT=this.raging?t.rageVolleyEvery:t.volleyEvery,this.holder.updateMatrixWorld(!0);let e=q_[this.def.model].map(e=>this.model.root.localToWorld(e.clone()));this.model.hit(.18),this.events.volley(this,e),this.volleys++}this.escortT-=e,this.escortT<=0&&(this.escortT=t.escortEvery,this.events.escort(this))}},Y_=new L,X_=new L(10,9.5,11),Z_=new L(-4.2,2.4,-6.5),Q_=.4,$_=1,ev=class{camera=new fs(55,1,2,4e4);basePos=X_.clone();baseLook=Z_.clone();follow=new L;followTarget=new L;look=new L;v=new L;raycaster=new Is;ndc=new I;kick=0;width=1;height=1;constructor(){this.camera.position.copy(X_),this.camera.lookAt(Z_)}resize(e,t){this.width=e,this.height=t;let n=e/t;this.camera.aspect=n,this.camera.fov=n<1?Nt.clamp(52+(1-n)*34,52,72):50,this.camera.updateProjectionMatrix();let r=new L().subVectors(X_,Z_).cross(this.camera.up).normalize(),i=n<1?Q_:0;this.basePos.copy(X_).addScaledVector(r,i),this.baseLook.copy(Z_).addScaledVector(r,i),this.update(0)}setFollow(e){this.followTarget.copy(e).multiplyScalar($_)}shake(e){this.kick=Math.max(this.kick,e)}update(e){let t=this.camera;if(this.follow.lerp(this.followTarget,1-Math.exp(-8*e)),t.position.copy(this.basePos).add(this.follow),this.look.copy(this.baseLook).add(this.follow),t.lookAt(this.look),this.kick>.01){let e=this.kick*this.kick*.05;t.rotateX((Math.random()-.5)*e),t.rotateY((Math.random()-.5)*e),t.rotateZ((Math.random()-.5)*e*1.5)}this.kick*=Math.exp(-5*e),t.updateMatrixWorld()}project(e,t=new L){return this.v.copy(e).project(this.camera),t.set((this.v.x+1)/2,(1-this.v.y)/2,this.v.z)}rayAt(e,t){return this.ndc.set(e*2-1,1-t*2),this.raycaster.setFromCamera(this.ndc,this.camera),this.raycaster.ray}},tv={blobby:{hp:20,speed:4.5,gait:`hop`,hopHeight:.9,hopTime:.42,damage:5,attackEvery:1.6,score:100,splashTaken:1,knockTaken:1},puffo:{hp:35,speed:5.5,gait:`scurry`,hopHeight:.6,hopTime:.32,damage:5,attackEvery:1.3,score:150,splashTaken:1,knockTaken:.8},rocky:{hp:60,speed:3.2,gait:`roll`,hopHeight:0,hopTime:1,damage:8,attackEvery:2,score:250,splashTaken:.6,knockTaken:.4},flapjack:{hp:20,speed:6.5,gait:`fly`,hopHeight:0,hopTime:1.6,damage:4,attackEvery:1.1,score:150,splashTaken:1,knockTaken:1.2},boing:{hp:30,speed:7.5,gait:`pogo`,hopHeight:2.4,hopTime:.75,damage:6,attackEvery:1.2,score:200,splashTaken:1,knockTaken:1},ghosty:{hp:40,speed:4,gait:`fly`,hopHeight:0,hopTime:2.4,damage:6,attackEvery:1.4,score:200,splashTaken:1,knockTaken:1.3},ember:{ranged:{range:26,every:2.6,damage:6,speed:26,color:16742938},hp:45,speed:6.5,gait:`hop`,hopHeight:1.3,hopTime:.5,damage:7,attackEvery:1.3,score:250,splashTaken:.9,knockTaken:.9},jetbot:{hp:35,speed:9,gait:`fly`,hopHeight:0,hopTime:1.2,damage:6,attackEvery:1,score:250,splashTaken:1,knockTaken:1.1},sparky:{ranged:{range:24,every:2.2,damage:7,speed:34,color:7337215},hp:55,speed:6,gait:`scurry`,hopHeight:.5,hopTime:.28,damage:9,attackEvery:1.5,score:300,splashTaken:1,knockTaken:.8},ufo:{ranged:{range:30,every:1.8,damage:6,speed:38,color:8388458},hp:45,speed:10,gait:`fly`,hopHeight:0,hopTime:1,damage:7,attackEvery:.9,score:300,splashTaken:1,knockTaken:1.2},astro:{hp:60,speed:7,gait:`pogo`,hopHeight:3.4,hopTime:.95,damage:9,attackEvery:1.2,score:350,splashTaken:1,knockTaken:.9},orbit:{hp:95,speed:3.6,gait:`roll`,hopHeight:0,hopTime:1,damage:11,attackEvery:2,score:400,splashTaken:.6,knockTaken:.4},prism:{ranged:{range:32,every:2.6,damage:9,speed:30,color:10481896,size:1.2},hp:100,speed:3.6,gait:`fly`,hopHeight:0,hopTime:2,damage:10,attackEvery:1.6,score:450,splashTaken:.6,knockTaken:.6},dusty:{hp:70,speed:4.2,gait:`roll`,hopHeight:0,hopTime:1,damage:10,attackEvery:1.8,score:400,splashTaken:.8,knockTaken:.5},frosty:{hp:75,speed:7.5,gait:`pogo`,hopHeight:3,hopTime:.85,damage:11,attackEvery:1.2,score:450,splashTaken:1,knockTaken:.3},magma:{ranged:{range:22,every:3.2,damage:14,speed:20,color:16734746,size:1.6},hp:160,speed:3,gait:`scurry`,hopHeight:.4,hopTime:.4,damage:15,attackEvery:2,score:600,splashTaken:.5,knockTaken:.3},volt:{ranged:{range:28,every:1.5,damage:7,speed:42,color:16773226},hp:70,speed:11,gait:`fly`,hopHeight:0,hopTime:.9,damage:10,attackEvery:.8,score:500,splashTaken:1,knockTaken:1.1}},nv={1:{hp:1,damage:1,score:1,speed:1},2:{hp:1.6,damage:1.25,score:1.5,speed:1.08},3:{hp:2.4,damage:1.5,score:2.2,speed:1.15}};function rv(e,t){let n=tv[e],r=nv[t];if(t===1)return n;let i=n.ranged&&{...n.ranged,damage:Math.round(n.ranged.damage*r.damage)};return{...n,ranged:i,hp:Math.round(n.hp*r.hp),damage:Math.round(n.damage*r.damage),score:Math.round(n.score*r.score),speed:n.speed*r.speed}}var iv={count:1.5,interval:.7,alive:4},av=e=>Math.round(e*iv.count),ov=e=>e+iv.alive,sv=[{id:1,name:`Green Meadow`,seed:1,theme:`meadow`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:15,waves:[{entries:[{kind:`blobby`,count:6}],interval:1.8,maxAlive:3,hint:`Tap a bot to blast it!`},{entries:[{kind:`blobby`,count:5},{kind:`puffo`,count:4},{kind:`flapjack`,count:3}],interval:1.4,maxAlive:5,hint:`Flyers! Tap them in the air`},{entries:[{kind:`blobby`,count:5},{kind:`puffo`,count:3},{kind:`rocky`,count:3},{kind:`boing`,count:4}],interval:1.15,maxAlive:7,hint:`Splash hits the whole pack`}],boss:{name:`Gigamech`,model:`mech`,pattern:`scatter`,hover:0,hp:400,score:2e3,walkSpeed:4.5,volleyEvery:4.5,volleySize:2,rageVolleyEvery:3.6,rageVolleySize:3,rocketDamage:10,blastRadius:2.6,rocketFlight:1.3,scatter:3,escortEvery:5,maxEscorts:3,escort:`blobby`,hint:`Drag below to run clear of rockets!`},stars:[.35,.7]},{id:2,name:`Rexo's Rampage`,seed:2,theme:`meadow`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:15,waves:[{entries:[{kind:`blobby`,count:4},{kind:`ghosty`,count:4}],interval:1.6,maxAlive:4,hint:`New: Ghosty! It floats in slowly`},{entries:[{kind:`puffo`,count:4},{kind:`ember`,count:5},{kind:`flapjack`,count:3}],interval:1.3,maxAlive:6,hint:`New: Ember! Quick little dragons`},{entries:[{kind:`ghosty`,count:4},{kind:`ember`,count:4},{kind:`rocky`,count:3},{kind:`boing`,count:4}],interval:1.1,maxAlive:7}],boss:{name:`Rexo`,model:`rex`,pattern:`line`,hover:0,hp:650,score:3e3,walkSpeed:5,volleyEvery:4.4,volleySize:4,rageVolleyEvery:3.5,rageVolleySize:6,rocketDamage:11,blastRadius:2.6,rocketFlight:1.3,scatter:3,escortEvery:5,maxEscorts:3,escort:`ember`,hint:`A row of rockets! Run to the side`},stars:[.35,.7]},{id:3,name:`Jet Shark Strike`,seed:3,theme:`meadow`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:15,waves:[{entries:[{kind:`jetbot`,count:5},{kind:`puffo`,count:4}],interval:1.5,maxAlive:5,hint:`New: Jetbot! Fast flyers`},{entries:[{kind:`sparky`,count:5},{kind:`ghosty`,count:4},{kind:`flapjack`,count:4}],interval:1.25,maxAlive:6,hint:`New: Sparky! It hits hard up close`},{entries:[{kind:`sparky`,count:4},{kind:`jetbot`,count:4},{kind:`ember`,count:4},{kind:`rocky`,count:3}],interval:1.05,maxAlive:8}],boss:{name:`Jet Shark`,model:`shark`,pattern:`stream`,hover:6,hp:900,score:4e3,walkSpeed:7,volleyEvery:4.6,volleySize:5,rageVolleyEvery:3.6,rageVolleySize:7,rocketDamage:10,blastRadius:2.4,rocketFlight:1.05,scatter:0,escortEvery:5,maxEscorts:3,escort:`jetbot`,hint:`It fires where you stand: keep running!`},stars:[.35,.7]},{id:4,name:`Phoenix Rising`,seed:4,theme:`meadow`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:15,waves:[{entries:[{kind:`ufo`,count:5},{kind:`ember`,count:4}],interval:1.4,maxAlive:6,hint:`New: Zippy! Darting saucers`},{entries:[{kind:`astro`,count:5},{kind:`jetbot`,count:4},{kind:`ghosty`,count:4}],interval:1.2,maxAlive:7,hint:`New: Astro! Big moon bounces`},{entries:[{kind:`astro`,count:4},{kind:`ufo`,count:4},{kind:`sparky`,count:4},{kind:`rocky`,count:4}],interval:1,maxAlive:8}],boss:{name:`Phoenix`,model:`phoenix`,pattern:`fire`,hover:7,hp:1200,score:5e3,walkSpeed:7,volleyEvery:4.4,volleySize:3,rageVolleyEvery:3.4,rageVolleySize:5,rocketDamage:10,blastRadius:2.4,rocketFlight:1.4,scatter:3.5,escortEvery:5,maxEscorts:3,escort:`ufo`,fireDamage:3,hint:`Fire on the ground! Don't stand in it`},stars:[.35,.7]},{id:5,name:`Astra's Halo`,seed:5,theme:`meadow`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:15,waves:[{entries:[{kind:`orbit`,count:4},{kind:`sparky`,count:5},{kind:`jetbot`,count:3}],interval:1.3,maxAlive:6,hint:`New: Orbit! Tough and slow`},{entries:[{kind:`prism`,count:4},{kind:`astro`,count:4},{kind:`ufo`,count:4}],interval:1.15,maxAlive:7,hint:`New: Prism! Splash barely scratches it`},{entries:[{kind:`orbit`,count:3},{kind:`prism`,count:3},{kind:`astro`,count:4},{kind:`ember`,count:4},{kind:`ghosty`,count:4}],interval:.95,maxAlive:9}],boss:{name:`Astra`,model:`astra`,pattern:`gap`,hover:6,hp:1600,score:7e3,walkSpeed:6,volleyEvery:4.6,volleySize:4,rageVolleyEvery:3.6,rageVolleySize:5,rocketDamage:12,blastRadius:2,rocketFlight:1.6,scatter:3,escortEvery:5,maxEscorts:3,escort:`astro`,hint:`A wall of blasts! Run for the gap`},stars:[.35,.7]},{id:6,name:`Dusty Dunes`,seed:6,theme:`dunes`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:18,waves:[{entries:[{kind:`blobby`,count:5,tier:2},{kind:`puffo`,count:4,tier:2},{kind:`flapjack`,count:3,tier:2}],interval:1.2,maxAlive:7,hint:`Gold chevrons: Mk II bots! Tougher and meaner`},{entries:[{kind:`dusty`,count:5},{kind:`rocky`,count:3,tier:2},{kind:`boing`,count:4,tier:2}],interval:1.1,maxAlive:8,hint:`New: Dusty! Rolls in on treads`},{entries:[{kind:`dusty`,count:4},{kind:`ember`,count:4,tier:2},{kind:`jetbot`,count:3,tier:2},{kind:`sparky`,count:4},{kind:`ghosty`,count:3,tier:2}],interval:.95,maxAlive:9}],boss:{name:`Gigamech Mk II`,model:`mech`,tier:2,pattern:`scatter`,hover:0,hp:1800,score:8e3,walkSpeed:5,volleyEvery:3.8,volleySize:5,rageVolleyEvery:3,rageVolleySize:7,rocketDamage:12,blastRadius:2.4,rocketFlight:1.4,scatter:4,escortEvery:4.5,maxEscorts:3,escort:`dusty`,hint:`Gigamech's back, upgraded! Keep running`},stars:[.35,.7]},{id:7,name:`Scorpion Sands`,seed:7,theme:`dunes`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:18,waves:[{entries:[{kind:`dusty`,count:5,tier:2},{kind:`sparky`,count:4,tier:2},{kind:`flapjack`,count:4,tier:2}],interval:1.15,maxAlive:7,hint:`Mk II Dusty! Splash the pack`},{entries:[{kind:`ufo`,count:4,tier:2},{kind:`astro`,count:4,tier:2},{kind:`dusty`,count:4},{kind:`puffo`,count:4,tier:2}],interval:1.05,maxAlive:8},{entries:[{kind:`orbit`,count:3,tier:2},{kind:`dusty`,count:4,tier:2},{kind:`jetbot`,count:4,tier:2},{kind:`ember`,count:4,tier:2},{kind:`boing`,count:4,tier:2}],interval:.9,maxAlive:9}],boss:{name:`Scorpio`,model:`scorpion`,pattern:`line`,alt:`stream`,hover:0,hp:2200,score:9e3,walkSpeed:5.5,volleyEvery:3.8,volleySize:5,rageVolleyEvery:3,rageVolleySize:6,rocketDamage:13,blastRadius:2.4,rocketFlight:1.2,scatter:3,escortEvery:4.5,maxEscorts:3,escort:`dusty`,escortTier:2,hint:`Rows, then a stream! Keep moving`},stars:[.35,.7]},{id:8,name:`Frost Peak`,seed:8,theme:`frost`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:20,waves:[{entries:[{kind:`frosty`,count:5},{kind:`ghosty`,count:4,tier:2},{kind:`blobby`,count:5,tier:2}],interval:1.15,maxAlive:7,hint:`New: Frosty! Big hits barely budge it`},{entries:[{kind:`frosty`,count:5},{kind:`ufo`,count:4,tier:2},{kind:`prism`,count:3},{kind:`sparky`,count:4,tier:2}],interval:1,maxAlive:8},{entries:[{kind:`frosty`,count:4,tier:2},{kind:`astro`,count:4,tier:2},{kind:`orbit`,count:3,tier:2},{kind:`jetbot`,count:4,tier:2},{kind:`dusty`,count:3,tier:2}],interval:.9,maxAlive:9}],boss:{name:`Yeti-X`,model:`yeti`,pattern:`ice`,hover:0,hp:2700,score:1e4,walkSpeed:5,volleyEvery:3.8,volleySize:4,rageVolleyEvery:3,rageVolleySize:6,rocketDamage:13,blastRadius:2.6,rocketFlight:1.4,scatter:3.5,escortEvery:4.5,maxEscorts:3,escort:`frosty`,hint:`Frost blasts slow you down! Dodge early`},stars:[.35,.7]},{id:9,name:`Molten Core`,seed:9,theme:`volcano`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:20,waves:[{entries:[{kind:`magma`,count:4},{kind:`ember`,count:5,tier:2},{kind:`rocky`,count:4,tier:2}],interval:1.15,maxAlive:7,hint:`New: Magma! Slow, tough, splash-proof`},{entries:[{kind:`blobby`,count:5,tier:3},{kind:`puffo`,count:4,tier:3},{kind:`magma`,count:3},{kind:`jetbot`,count:4,tier:2}],interval:1,maxAlive:8,hint:`Red chevrons: Mk III! The toughest yet`},{entries:[{kind:`magma`,count:3,tier:2},{kind:`ember`,count:4,tier:3},{kind:`frosty`,count:4,tier:2},{kind:`ghosty`,count:4,tier:3},{kind:`sparky`,count:4,tier:2}],interval:.9,maxAlive:9}],boss:{name:`Magmatron`,model:`magmatron`,pattern:`fire`,hover:0,hp:3300,score:12e3,walkSpeed:4.5,volleyEvery:4,volleySize:4,rageVolleyEvery:3.2,rageVolleySize:6,rocketDamage:14,blastRadius:2.4,rocketFlight:1.4,scatter:4,escortEvery:5,maxEscorts:3,escort:`magma`,fireDamage:5,firePool:3.4,hint:`Lava everywhere! Stay off the burning ground`},stars:[.35,.7]},{id:10,name:`Starfall`,seed:10,theme:`starfield`,gear:{hat:`raider`,jacket:`raider`,pants:`raider`,shoes:`raider`},robotHp:100,breakS:3,repair:22,waves:[{entries:[{kind:`volt`,count:5},{kind:`ufo`,count:4,tier:3},{kind:`astro`,count:4,tier:2}],interval:1.1,maxAlive:7,hint:`New: Volt! The fastest flyer yet`},{entries:[{kind:`volt`,count:4},{kind:`prism`,count:4,tier:2},{kind:`orbit`,count:3,tier:3},{kind:`frosty`,count:4,tier:2}],interval:1,maxAlive:8},{entries:[{kind:`volt`,count:4,tier:2},{kind:`magma`,count:3,tier:2},{kind:`jetbot`,count:4,tier:3},{kind:`astro`,count:4,tier:3},{kind:`dusty`,count:4,tier:3}],interval:.85,maxAlive:10}],boss:{name:`Overlord`,model:`overlord`,pattern:`spiral`,alt:`gap`,hover:6,hp:4e3,score:15e3,walkSpeed:6,volleyEvery:4,volleySize:6,rageVolleyEvery:3.2,rageVolleySize:8,rocketDamage:14,blastRadius:2.2,rocketFlight:1.3,scatter:4.5,escortEvery:4.5,maxEscorts:4,escort:`volt`,escortTier:2,hint:`A closing spiral, then a wall! Read the marks`},stars:[.35,.7]}];function cv(e,t){return e<=1||t(e-1)}var lv=50,uv=3.5,dv=1.8,fv=.42,pv=.13,mv=.3,hv=.8,gv=.38,_v=.4,vv=class{model;holder=new R;kind;stats;tier=1;radius;flies;baseY;state=`off`;hp=0;maxHp=0;pos=new L;vel=new L;slot=null;lastHit=-99;stateT=0;hopT=0;airborne=!1;wait=0;lunge=0;moodT=0;facing=0;weave=Math.random()*10;slotCheck=0;spin=0;horde=null;constructor(e){this.kind=e,this.stats=tv[e],this.model=new D_(__[e]),this.holder.add(this.model.root),this.holder.scale.setScalar(Cd),this.holder.visible=!1,this.radius=X*Cd*1.05,this.flies=this.stats.gait===`fly`,this.baseY=(X+this.model.stand)*Cd}get alive(){return this.state!==`off`&&this.state!==`dying`&&this.hp>0}get active(){return this.state!==`off`}get settled(){return this.state===`ready`||this.state===`windup`||this.state===`lunge`||this.state===`recover`||this.state===`aim`}center(e){return e.copy(this.holder.position)}spawn(e,t,n=1){this.tier=n,this.stats=rv(this.kind,n),this.state=`drop`,this.stateT=0,this.hp=this.maxHp=this.stats.hp,this.pos.set(e.x,t,e.z),this.vel.set(0,0,0),this.slot=null,this.lunge=0,this.hopT=Math.random(),this.airborne=!1,this.spin=0,this.lastHit=-99,this.model.reset(),this.model.setTier(n),this.model.setMood(`scared`),this.model.flying=this.flies,this.holder.visible=!0,this.holder.position.set(this.pos.x,this.baseY+this.pos.y,this.pos.z)}damage(e,t,n,r){if(!this.alive)return!1;this.hp-=e,this.lastHit=r,this.model.flash(),this.model.hit(.35);let i=this.pos.x-t.x,a=this.pos.z-t.z,o=Math.hypot(i,a)||1,s=n*this.stats.knockTaken;return this.vel.x+=i/o*s,this.vel.z+=a/o*s,this.hp<=0?(this.slot=null,this.state=`dying`,this.stateT=0,this.vel.y=15,this.spin=(Math.random()<.5?-1:1)*(8+Math.random()*6),this.model.setMood(`fly`),!0):(e>=this.maxHp*.5&&this.state!==`drop`?(this.state=`stunned`,this.stateT=0,this.lunge=0,this.model.setMood(`dizzy`)):(this.moodT=.3,this.model.setMood(`scared`)),!1)}hide(){this.state=`off`,this.holder.visible=!1,this.slot=null}goal(e,t){let n=this.stats.ranged;if(n){let r=this.pos.x-e.x,i=this.pos.z-e.z,a=Math.hypot(r,i)||1;return t.set(e.x+r/a*n.range*.8,0,e.z+i/a*n.range*.8)}return this.slot?Ed(e,this.slot.heading,this.slot.r,0,t):Ed(e,Nt.clamp(sd(this.pos.x-e.x,this.pos.z-e.z),hd,gd),23,0,t)}update(e,t,n,r){this.stateT+=e,this.model.update(e),this.moodT>0&&(this.moodT-=e,this.moodT<=0&&(this.state===`march`||this.state===`ready`||this.state===`recover`)&&this.model.setMood(`idle`)),r&&this.alive&&this.state!==`drop`&&this.state!==`cheer`&&(this.state=`cheer`,this.lunge=0,this.model.setMood(`happy`));let i=0;switch(this.state){case`drop`:{let t=this.flies?uv:0;this.vel.y-=lv*e*(this.flies?.5:1),this.pos.y+=this.vel.y*e,this.pos.y<=t&&(this.pos.y=t,this.vel.y=0,this.flies||(this.model.hit(.55),n.vfx.dust(this.pos,1)),this.model.setMood(`idle`),this.state=`march`,this.stateT=0);break}case`march`:{let r=this.stats.ranged;r||this.claimSlot(n,t,e);let a=this.goal(t,yv);if(i=this.move(e,a),r){let e=Math.hypot(t.x-this.pos.x,t.z-this.pos.z);e<r.range*.95&&e>r.range*.5&&!this.airborne&&(this.state=`aim`,this.stateT=0,this.wait=_v+r.every*(.2+Math.random()*.5))}else this.slot&&Math.hypot(a.x-this.pos.x,a.z-this.pos.z)<.5&&!this.airborne&&(this.state=`ready`,this.stateT=0,this.wait=this.stats.attackEvery*(.5+Math.random()*.6));break}case`ready`:case`windup`:case`lunge`:case`recover`:{let r=this.goal(t,yv);if(Math.hypot(r.x-this.pos.x,r.z-this.pos.z)>2.5&&this.state!==`lunge`){this.state=`march`,this.stateT=0,this.lunge=0,this.model.setMood(`idle`);break}this.idleBob(e),this.state===`ready`?(this.wait-=e,this.wait<=0&&(this.state=`windup`,this.stateT=0,this.model.setMood(`scared`))):this.state===`windup`?(this.model.body.position.x=Math.sin(this.stateT*70)*.04,this.lunge=-.15*Math.min(1,this.stateT/fv),this.stateT>=fv&&(this.state=`lunge`,this.stateT=0)):this.state===`lunge`?(this.lunge=Math.min(1,this.stateT/pv),this.stateT>=pv&&(n.onAttack(this),this.model.hit(.3),this.state=`recover`,this.stateT=0,this.model.setMood(`idle`))):(this.lunge=Math.max(0,1-this.stateT/mv),this.stateT>=mv&&(this.state=`ready`,this.stateT=0,this.wait=this.stats.attackEvery*(.8+Math.random()*.4)));break}case`aim`:{let r=this.stats.ranged,i=Math.hypot(t.x-this.pos.x,t.z-this.pos.z);if(i>r.range*1.2||i<r.range*.45){this.state=`march`,this.stateT=0,this.model.setMood(`idle`);break}this.idleBob(e);let a=this.wait<=_v;this.wait-=e,this.wait<=_v&&(a||this.model.setMood(`scared`),this.model.body.position.x=Math.sin(this.stateT*70)*.04),this.wait<=0&&(n.onShoot(this),this.model.hit(.3),this.model.setMood(`idle`),this.wait=r.every*(.85+Math.random()*.3));break}case`stunned`:this.lunge=0,this.flies&&(this.pos.y=Math.max(1.2,this.pos.y-e*3)),this.stateT>=hv&&(this.state=`march`,this.stateT=0,this.model.setMood(`idle`));break;case`dying`:this.vel.y-=lv*e,this.pos.y=Math.max(0,this.pos.y+this.vel.y*e),this.model.body.rotation.z+=this.spin*e,this.model.body.rotation.x+=this.spin*.6*e,this.stateT>=gv&&n.onDeath(this);break;case`cheer`:this.lunge=0,i=Math.abs(Math.sin(this.stateT*7+this.weave))*1.2;break;case`off`:return}if(this.state!==`drop`){this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;let t=Math.exp(-6*e);this.vel.x*=t,this.vel.z*=t}let a=t.x-this.pos.x,o=t.z-this.pos.z,s=Math.atan2(a,o)-this.facing;s=Math.atan2(Math.sin(s),Math.cos(s)),this.facing+=s*(1-Math.exp(-10*e));let c=Math.hypot(a,o)||1,l=this.lunge*dv,u=this.lunge>0?Math.sin(Math.min(1,this.lunge)*Math.PI)*.6:0;this.holder.position.set(this.pos.x+a/c*l,this.baseY+this.pos.y+i+u,this.pos.z+o/c*l),this.holder.rotation.y=this.facing}idleBob(e){this.weave+=e,this.flies&&(this.pos.y=uv+Math.sin(this.weave*2.4)*.4)}move(e,t){let n=this.stats,r=t.x-this.pos.x,i=t.z-this.pos.z,a=Math.hypot(r,i);if(this.weave+=e,n.gait===`fly`){let t=Math.min(1,a/10)*Math.cos(this.weave*(Math.PI*2)/n.hopTime)*2.5,o=Math.min(a,n.speed*e);return a>.001&&(this.pos.x+=r/a*o+-i/a*t*e,this.pos.z+=i/a*o+r/a*t*e),this.pos.y+=(uv+Math.sin(this.weave*2.4)*.4-this.pos.y)*(1-Math.exp(-4*e)),0}if(n.gait===`roll`){let t=Math.min(a,n.speed*e);return a>.001&&(this.pos.x+=r/a*t,this.pos.z+=i/a*t),this.model.body.rotation.z=Math.sin(this.weave*14)*.05*Math.min(1,a),Math.abs(Math.sin(this.weave*14))*.05*Math.min(1,a)}let o=.72;this.hopT+=e/n.hopTime;let s=this.hopT%1,c=this.airborne;if(this.airborne=s<o&&a>.3,c&&!this.airborne&&(this.model.hit(n.gait===`pogo`?.4:.22),n.gait===`pogo`&&this.horde?.onBounce(this)),!this.airborne)return 0;let l=Math.min(a,n.speed/o*e);a>.001&&(this.pos.x+=r/a*l,this.pos.z+=i/a*l);let u=s/o;return n.hopHeight*4*u*(1-u)}claimSlot(e,t,n){if(this.slot||(this.slotCheck-=n,this.slotCheck>0))return;this.slotCheck=.4;let r=this.flies?md:pd,i=null,a=1/0;for(let n of r){if(e.slotTaken(n))continue;Ed(t,n.heading,n.r,0,bv);let r=Math.hypot(bv.x-this.pos.x,bv.z-this.pos.z)+n.r*.5;r<a&&(a=r,i=n)}this.slot=i}},yv=new L,bv=new L,xv=class{all=[];vfx;events;scene;constructor(e,t,n,r){this.scene=e,this.vfx=t,this.events=r,this.ensure(n)}ensure(e){for(let[t,n]of Object.entries(e)){let e=0;for(let n of this.all)n.kind===t&&e++;for(let r=e;r<n;r++){let e=new vv(t);e.horde=this,this.scene.add(e.holder),this.all.push(e)}}}spawn(e,t,n,r,i,a=1){let o=this.all.find(t=>t.kind===e&&t.state===`off`);return o?(od(n,yv).multiplyScalar(r).add(t),o.spawn(yv,i,a),o):null}get aliveCount(){let e=0;for(let t of this.all)t.alive&&e++;return e}get activeCount(){let e=0;for(let t of this.all)t.active&&e++;return e}slotTaken(e){return this.all.some(t=>t.slot===e&&t.alive)}onAttack(e){this.events.attack(e)}onShoot(e){this.events.shoot(e)}onDeath(e){e.hide(),this.events.death(e)}onBounce(e){this.events.bounce(e)}update(e,t,n){for(let r of this.all)r.state!==`off`&&r.update(e,t,this,n);let r=this.all.filter(e=>e.alive&&e.state!==`drop`);for(let e=0;e<r.length;e++){let n=r[e];for(let t=e+1;t<r.length;t++){let e=r[t];if(n.flies!==e.flies)continue;let i=e.pos.x-n.pos.x,a=e.pos.z-n.pos.z,o=Math.hypot(i,a),s=(n.radius+e.radius)*.8;if(o>.001&&o<s){let t=n.settled?e.settled?.5:0:e.settled?1:.5,r=s-o;n.pos.x-=i/o*r*t,n.pos.z-=a/o*r*t,e.pos.x+=i/o*r*(1-t),e.pos.z+=a/o*r*(1-t)}}let i=n.pos.x-t.x,a=n.pos.z-t.z,o=Math.hypot(i,a),s=n.radius+1.6;!n.flies&&o>.001&&o<s&&(n.pos.x=t.x+i/o*s,n.pos.z=t.z+a/o*s)}}shadows(){for(let e of this.all){if(!e.active)continue;let t=e.holder.position.y-e.baseY;this.vfx.shadows.add(e.holder.position.x,e.holder.position.z,e.radius*.85*Math.max(.35,1-t/14))}}clear(){for(let e of this.all)e.hide()}},Sv=1.1,Cv=.022,wv=.32,Tv=class{pools=[];balls=[];vfx;t=0;v=new L;v2=new L;constructor(e,t,n=2,r=3){this.vfx=t;let i=new H(Sv,16,12);for(let t=0;t<n;t++){let t=new R;t.add(bg(new z(i,new pi({color:16773828})))),t.visible=!1,e.add(t),this.balls.push({group:t,p0:new L,p1:new L,p2:new L,t:0,dur:1,trail:0,active:!1,onLand:()=>{}})}let a=new Ji(1,40).rotateX(-Math.PI/2),o=Dv();for(let t=0;t<r;t++){let t=new z(a,new pi({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-11,polygonOffsetUnits:-11}));t.visible=!1,t.renderOrder=2;let n=new z(a,new pi({map:o,transparent:!0,depthWrite:!1,color:9071184}));t.add(bg(n,!0)),e.add(t),this.pools.push({pos:new L,radius:1,left:0,total:1,dps:0,tick:0,active:!1,decal:t,embers:n,emit:0,smoke:0})}}throw(e,t,n,r){let i=this.balls.find(e=>!e.active);if(!i)return!1;let a=e.distanceTo(t);return i.p0.copy(e),i.p1.addVectors(e,t).multiplyScalar(.5),i.p1.y=Math.max(e.y,t.y)+a*.3+5,i.p2.copy(t),i.t=0,i.dur=n,i.trail=0,i.active=!0,i.onLand=r,i.group.visible=!0,this.place(i),!0}burn(e,t,n,r){let i=this.pools.find(e=>!e.active)??this.pools.reduce((e,t)=>e.left<t.left?e:t);return i.pos.set(e.x,0,e.z),i.radius=t,i.left=i.total=n,i.dps=r,i.tick=0,i.emit=i.smoke=0,i.active=!0,i.decal.visible=!0,i.decal.position.set(e.x,.21,e.z),i.decal.rotation.y=Math.random()*Math.PI*2,i}get burning(){return this.pools.some(e=>e.active)}update(e){this.t+=e;for(let t of this.balls)if(t.active){if(t.t+=e/t.dur,t.t>=1)t.active=!1,t.group.visible=!1,t.onLand(this.v.copy(t.p2));else{for(this.place(t),t.group.scale.setScalar(.8+.1*Math.sin(this.t*40)+.05*Math.random()),t.trail-=e;t.trail<=0;)t.trail+=.012,this.vfx.groundFire(this.v.copy(t.group.position).addScaledVector(Ev(this.v2),Sv*.8),.6);this.vfx.light(t.group.position,1.2)}}for(let t of this.pools){if(!t.active)continue;if(t.left-=e,t.left<=0){t.active=!1,t.decal.visible=!1;continue}let n=t.total-t.left,r=Math.min(1,n/.25),i=Math.min(1,t.left/1.2),a=.88+.12*Math.sin(this.t*13+t.pos.x)*Math.sin(this.t*7.3+t.pos.z);t.decal.scale.setScalar(t.radius*(.6+.4*r)*(.97+.03*a)),t.decal.material.opacity=i*a,t.embers.material.opacity=i*a,this.vfx.light(this.v.set(t.pos.x,2.5,t.pos.z),(.6+.6*Math.min(1,t.radius/8))*i*r);let o=1.2+.6*Math.min(1,t.radius/8);for(t.emit-=e*(.35+.65*i)*Math.max(.35,(t.radius/8)**2);t.emit<=0;){t.emit+=Cv;let e=t.radius*.92*Math.sqrt(Math.random()),n=Math.random()*Math.PI*2;this.v.set(t.pos.x+Math.cos(n)*e,.3,t.pos.z+Math.sin(n)*e),this.vfx.groundFire(this.v,o*(1.15-.55*(e/t.radius))*(.5+.5*i))}if(t.smoke-=e,t.smoke<=0){t.smoke+=wv/Math.max(.3,i);let e=t.radius*.7*Math.sqrt(Math.random()),n=Math.random()*Math.PI*2;this.v.set(t.pos.x+Math.cos(n)*e,3.5,t.pos.z+Math.sin(n)*e),this.vfx.smokeRise(this.v,o*.7)}}}clear(){for(let e of this.balls)e.active=!1,e.group.visible=!1;for(let e of this.pools)e.active=!1,e.decal.visible=!1}place(e){let t=Math.min(e.t,1),n=1-t;e.group.position.copy(e.p0).multiplyScalar(n*n).addScaledVector(e.p1,2*n*t).addScaledVector(e.p2,t*t)}};function Ev(e){do e.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);while(e.lengthSq()>1);return e}function Dv(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255,236,140,0.95)`),n.addColorStop(.3,`rgba(255,170,50,0.85)`),n.addColorStop(.62,`rgba(232,82,24,0.75)`),n.addColorStop(.85,`rgba(90,34,18,0.55)`),n.addColorStop(1,`rgba(50,24,14,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);for(let e=0;e<40;e++){let e=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*50;t.fillStyle=`rgba(255,${200+Math.floor(Math.random()*55)},90,${.35+Math.random()*.4})`,t.beginPath(),t.arc(64+Math.cos(e)*n,64+Math.sin(e)*n,2+Math.random()*4,0,Math.PI*2),t.fill()}let r=new Hi(e);return r.colorSpace=He,r}var Ov=.02;function kv(e){return 250+120*(e-1)}function Av(e){let t=1,n=Math.max(0,Math.floor(e));for(;t<50&&n>=kv(t);)n-=kv(t),t++;return t>=50?{level:50,into:0,need:0}:{level:t,into:n,need:kv(t)}}function jv(e,t){return Math.round(e/20)+t*25}function Mv(e){return{hp:3*(e-1),damage:1+Ov*(e-1)}}var Nv=`#1d2433`,Pv=e=>`<svg viewBox="0 0 48 48" aria-hidden="true"><g stroke="${Nv}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${e}</g></svg>`,Fv=(e,t,n)=>`<g transform="translate(${e} ${t}) rotate(45) scale(${n})"><path d="M-3 9 L0 15 L3 9 Z" fill="#ffd23f" /><path d="M-5 3 L-9 9 L-5 8 Z M5 3 L9 9 L5 8 Z" fill="#ff7a2a" /><path d="M0 -13 C5 -9 6 -1 5 9 H-5 C-6 -1 -5 -9 0 -13 Z" fill="#fffdf4" /><path d="M0 -13 C3 -11 4.5 -8 5 -5 H-5 C-4.5 -8 -3 -11 0 -13 Z" fill="#ff7a2a" /></g>`,Iv=(e,t,n,r,i=8)=>{let a=[];for(let r=0;r<i*2;r++){let o=r/(i*2)*Math.PI*2-Math.PI/2,s=r%2==0?n:n*.55;a.push(`${(e+Math.cos(o)*s).toFixed(1)},${(t+Math.sin(o)*s).toFixed(1)}`)}return`<polygon points="${a.join(` `)}" fill="${r}" />`},Lv={heavyshot:Pv(`<circle cx="22" cy="26" r="16" fill="#ffd23f" stroke-width="2" /><circle cx="22" cy="26" r="10" fill="#fff3a0" stroke-width="0" />`+Fv(24,24,1.15)),compound:Pv(Iv(23,25,17,`#ff7a1a`,9)+Iv(23,25,9,`#ffd23f`,7)+`<circle cx="40" cy="9" r="4.5" fill="#ffd23f" /><circle cx="8" cy="40" r="4" fill="#ffd23f" /><circle cx="41" cy="40" r="3.5" fill="#ffd23f" />`),sweep:Pv(`<path d="M24 43 L6 21 M24 43 L14 12" fill="none" stroke="#bff3ff" stroke-width="2.4" opacity="0.8" /><path d="M24 43 L41 15" fill="none" stroke="#bff3ff" stroke-width="7" /><path d="M24 43 L41 15" fill="none" stroke="#fffdf4" stroke-width="2" /><path d="M7 11 Q24 -1 39 7" fill="none" stroke-width="3" /><path d="M41 2 L42 10 L34 10 Z" fill="${Nv}" stroke-width="1.6" /><circle cx="24" cy="43" r="4" fill="#fffdf4" />`),chain:Pv(`<polyline points="8,38 19,14 30,34 41,10" fill="none" stroke="#bff3ff" stroke-width="5" /><polyline points="8,38 19,14 30,34 41,10" fill="none" stroke="${Nv}" stroke-width="1.6" /><circle cx="8" cy="38" r="4" fill="#fffdf4" /><circle cx="19" cy="14" r="4" fill="#fffdf4" /><circle cx="30" cy="34" r="4" fill="#fffdf4" /><circle cx="41" cy="10" r="4" fill="#fffdf4" />`),fireball:Pv(`<path d="M5 44 C10 34 14 30 20 26 C16 32 15 35 15 38 C20 32 25 30 30 29 C26 34 24 38 24 42 C18 44 11 45 5 44 Z" fill="#ff7a1a" stroke-width="2" /><circle cx="30" cy="18" r="12" fill="#ff7a1a" /><circle cx="31.5" cy="16.5" r="6.5" fill="#ffd23f" stroke-width="0" />`),napalm:Pv(`<path d="M24 3 C31 13 39 18 37 30 C36 40 29 45 24 45 C16 45 11 39 11 31 C11 23 17 20 18 13 C21 18 22 21 24 22 C26 16 25 9 24 3 Z" fill="#ff7a1a" /><path d="M24 23 C28 28 31 31 30 36 C29 40 26 42 24 42 C20 42 18 39 18 36 C18 31 22 29 24 23 Z" fill="#ffd23f" stroke-width="2" />`)},Rv={heavyshot:`#ff7a3a`,compound:`#e2552c`,sweep:`#3d8bff`,chain:`#2f8fd8`,fireball:`#ff8a1f`,napalm:`#e4511a`},zv=[3,8],Bv=[[18,34],[22,42]],Vv=1.25,Hv=.85;function Uv(e,t){let[n,r]=Bv[e];return t>=r?3:t>=n?2:1}var Wv=e=>Vv**(e-1),Gv=e=>Hv**(e-1),Kv={1:`I`,2:`II`,3:`III`},qv={launcher:[{id:`heavyshot`,name:`Heavy Shot`,blurb:`Charges up for a second, then fires one big rocket: 2.5× damage in a wide blast.`,cooldown:12},{id:`compound`,name:`Compound Shot`,blurb:`A shell lobbed onto the biggest crowd that goes off in a huge explosion, then a string of smaller ones.`,cooldown:18}],laser:[{id:`sweep`,name:`Flash Sweep`,blurb:`One long, steady beam swept across the field from left to right, hitting every bot it crosses at 2× damage.`,cooldown:15},{id:`chain`,name:`Chain Flash`,blurb:`A beam that jumps from bot to bot until it has hit every one on the field, at 1.5× damage.`,cooldown:20}],flamer:[{id:`fireball`,name:`Fireball`,blurb:`Lobs a ball of fire that leaves the ground burning for 10 s, scorching every bot that comes near.`,cooldown:16},{id:`napalm`,name:`Napalm Wave`,blurb:`A huge, wide jet of fire for 1.2 s that burns twice as hot.`,cooldown:20}]};function Jv(e){return e===`start`?`launcher`:e}function Yv(e){for(let t of Object.values(qv)){let n=t.findIndex(t=>t.id===e);if(n>=0)return n}return 0}var Xv=[{id:`loader`,name:`Quick Loader`,blurb:`Shots come back 15% quicker.`,level:2},{id:`crit`,name:`Critical Shots`,blurb:`10% of hits deal double damage.`,level:4},{id:`repair`,name:`Field Repair`,blurb:`Heal 1 HP every 2 s after 3 s without a hit.`,level:6},{id:`scavenger`,name:`Scavenger`,blurb:`+15% coins from every run.`,level:10},{id:`magazine`,name:`Deep Magazine`,blurb:`One more shot in every weapon.`,level:12},{id:`surge`,name:`Skill Surge`,blurb:`Active skills recharge 20% quicker.`,level:15},{id:`laststand`,name:`Last Stand`,blurb:`+25% damage while below 30% health.`,level:20},{id:`learner`,name:`Fast Learner`,blurb:`+20% XP from every run.`,level:25},{id:`thorns`,name:`Thorns`,blurb:`Bots that hit you take a quarter of it back.`,level:28},{id:`salvage`,name:`Salvage Core`,blurb:`Heal 2 HP for every bot you pop.`,level:32},{id:`wide`,name:`Wide Blast`,blurb:`+20% splash, beam width and flame cone.`,level:36},{id:`overclock`,name:`Overclock`,blurb:`+10% damage from every weapon and skill.`,level:40},{id:`phase`,name:`Phase Shift`,blurb:`6% more hits miss you, in any armor.`,level:45},{id:`jackpot`,name:`Jackpot`,blurb:`+25% more coins from every run.`,level:50}];function Zv(e){let t=t=>e>=(Xv.find(e=>e.id===t)?.level??1/0);return{reload:t(`loader`)?1/1.15:1,crit:t(`crit`)?.1:0,repair:t(`repair`)?.5:0,coins:(t(`scavenger`)?1.15:1)*(t(`jackpot`)?1.25:1),magazine:+!!t(`magazine`),cooldown:t(`surge`)?.8:1,lastStand:t(`laststand`)?1.25:1,xp:t(`learner`)?1.2:1,thorns:t(`thorns`)?.25:0,salvage:t(`salvage`)?2:0,wide:t(`wide`)?1.2:1,damage:t(`overclock`)?1.1:1,evade:t(`phase`)?.06:0}}function Qv(e,t,n){let r=[];zv.forEach((i,a)=>{i>e&&i<=t&&r.push(qv[n][a].name)}),Bv.forEach((i,a)=>i.forEach((i,o)=>{i>e&&i<=t&&r.push(`${qv[n][a].name} ${Kv[o+2]}`)}));for(let n of Xv)n.level>e&&n.level<=t&&r.push(n.name);return r}var $v=26,ey=.28,ty=-.5,ny=.22,ry=.75,iy=1.08,ay=class{canvas;renderer;scene=new Hn;camera=new fs($v,2,.1,200);turntable=new R;launchers=new Map;robot=null;shown=null;running=!1;last=0;t=0;width=0;height=0;constructor(e){this.canvas=e,this.renderer=new id({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=0,this.renderer.setClearColor(0,0),this.scene.add(new es(16777215,14216380,1.75));let t=new _s(16774886,1.5);t.position.copy(bh).multiplyScalar(20),this.scene.add(t,this.turntable)}showLauncher(e){let t=this.launchers.get(e);if(!t){let n=gm(e).group;Zd(n,Gd),t=oy(n,ty,.38),this.measure(t),this.launchers.set(e,t)}this.show(t)}showRobot(e,t){let n={hat:e,jacket:e,pants:e,shoes:e},r=this.robot;if(r)(r.set!==e||r.launcher!==t)&&(r.set!==e&&r.mech.setGear(n),r.launcher!==t&&r.mech.setLauncher(t),r.set=e,r.launcher=t,this.measure(r.shown),this.shown===r.shown&&this.frame());else{let i=new Qm(n,t);i.setMood(`present`),i.snap();for(let e=0;e<30;e++)i.animate(1/30);let a=i.group.rotation.y,o=Math.atan2(Math.cos(a),-Math.sin(a));r={mech:i,set:e,launcher:t,shown:oy(i.group,ny-o,.25)},i.snap(),i.animate(1/30),this.measure(r.shown),this.robot=r}this.show(r.shown)}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.loop))}stop(){this.running=!1}show(e){e!==this.shown&&(this.shown=e,this.turntable.clear(),this.turntable.add(e.holder),this.frame()),this.running||this.draw(0)}loop=e=>{if(!this.running)return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.draw(t),requestAnimationFrame(this.loop)};draw(e){let t=this.canvas.clientWidth,n=this.canvas.clientHeight;t!==0&&n!==0&&this.shown&&((t!==this.width||n!==this.height)&&(this.width=t,this.height=n,this.renderer.setSize(t,n,!1),this.frame()),this.t+=e,this.robot&&this.shown===this.robot.shown&&e>0&&this.robot.mech.animate(e),this.turntable.rotation.y=this.shown.yaw+this.shown.sway*Math.sin(this.t*ry),this.renderer.render(this.scene,this.camera))}measure(e){let t=new R;t.add(e.holder);let n=new rr;e.wide=e.high=e.deep=0;for(let r=0;r<=8;r++)t.rotation.y=e.yaw-e.sway+e.sway*r/4,t.updateMatrixWorld(!0),n.setFromObject(t),e.wide=Math.max(e.wide,-n.min.x,n.max.x),e.high=Math.max(e.high,-n.min.y,n.max.y),e.deep=Math.max(e.deep,-n.min.z,n.max.z);t.remove(e.holder),this.shown===e&&this.turntable.add(e.holder)}frame(){let e=this.shown;if(!e||this.width===0)return;let t=this.width/this.height,n=Math.tan($v/2*Math.PI/180),r=e.high*Math.cos(ey)+e.deep*Math.sin(ey),i=Math.max(r/n,e.wide/(n*t))*iy+e.deep*.4;this.camera.aspect=t,this.camera.updateProjectionMatrix(),this.camera.position.set(0,Math.sin(ey)*i,Math.cos(ey)*i),this.camera.lookAt(0,0,0)}};function oy(e,t,n){let r=new R;r.add(e);let i=new rr().setFromObject(r);return e.position.sub(i.getCenter(new L)),{holder:r,yaw:t,sway:n,wide:0,high:0,deep:0}}var sy=Math.PI/180,cy={tube:{id:`tube`,name:`Cannon`,branch:`start`,tier:0,cost:0,model:`tube`,kind:`rockets`,blurb:`The starter launcher. Rockets that curve onto their mark and blow up in a splash.`,color:16757575,magazine:4,cooldown:.2,reloadEach:.55,damage:20,edgeDamage:8,splash:6},heavy:{id:`heavy`,name:`Heavy Tube`,code:`LAUX01`,branch:`launcher`,tier:1,cost:300,model:`heavy`,kind:`rockets`,blurb:`Bigger warheads: harder hits and a wider blast.`,color:16742970,magazine:4,cooldown:.2,reloadEach:.5,damage:28,edgeDamage:11,splash:7.5},twin:{id:`twin`,name:`Twin Cannon`,code:`LAUX02`,branch:`launcher`,tier:2,cost:700,model:`cannon`,kind:`rockets`,blurb:`Fires from both bores at once: two rockets a shot, the second after the next bot over.`,color:16734842,magazine:4,cooldown:.24,reloadEach:.55,damage:26,edgeDamage:10,splash:7,rockets:2},swarm:{id:`swarm`,name:`Swarm Pod`,code:`LAUX03`,branch:`launcher`,tier:3,cost:1400,model:`swarm`,kind:`rockets`,blurb:`Four homing rockets a shot, spread over the bots around your target.`,color:16762938,magazine:3,cooldown:.3,reloadEach:.7,damage:24,edgeDamage:9,splash:6,rockets:4},barrage:{id:`barrage`,name:`Barrage Pod`,code:`LAUX04`,branch:`launcher`,tier:4,cost:2400,model:`barrage`,kind:`rockets`,blurb:`Six homing rockets a shot: one volley clears a crowd.`,color:16747066,magazine:3,cooldown:.32,reloadEach:.72,damage:30,edgeDamage:12,splash:6.5,rockets:6},meteor:{id:`meteor`,name:`Meteor Cannon`,code:`LAUX05`,branch:`launcher`,tier:5,cost:4e3,model:`meteor`,kind:`rockets`,blurb:`One enormous warhead a shot: crushing damage and the widest blast of all.`,color:16752672,magazine:3,cooldown:.35,reloadEach:.75,damage:110,edgeDamage:45,splash:12,rocketSize:2},laser:{id:`laser`,name:`Laser Cannon`,code:`FCX01`,branch:`laser`,tier:1,cost:300,model:`laser`,kind:`beam`,blurb:`An instant beam: no travel time, no splash, and it never misses what you tap.`,color:4770047,magazine:6,cooldown:.18,reloadEach:.4,damage:22,pierce:1,width:.4},pulse:{id:`pulse`,name:`Pulse Laser`,code:`FCX02`,branch:`laser`,tier:2,cost:700,model:`pulse`,kind:`beam`,blurb:`A heavier beam that burns through three bots in a line.`,color:16732120,magazine:6,cooldown:.16,reloadEach:.36,damage:28,pierce:3,width:.6},prism:{id:`prism`,name:`Prism Lance`,code:`FCX03`,branch:`laser`,tier:3,cost:1400,model:`prism`,kind:`beam`,blurb:`A wide white beam that goes through everything in its path.`,color:16773296,magazine:8,cooldown:.15,reloadEach:.32,damage:36,pierce:99,width:.9},nova:{id:`nova`,name:`Nova Beam`,code:`FCX04`,branch:`laser`,tier:4,cost:2400,model:`nova`,kind:`beam`,blurb:`A broad teal beam: catches bots well off the line, and goes through them all.`,color:3866568,magazine:8,cooldown:.14,reloadEach:.3,damage:44,pierce:99,width:1.6},zenith:{id:`zenith`,name:`Zenith Ray`,code:`FCX05`,branch:`laser`,tier:5,cost:4e3,model:`zenith`,kind:`beam`,blurb:`The strongest beam there is: ten shots, huge damage, wide and through everything.`,color:11569919,magazine:10,cooldown:.13,reloadEach:.28,damage:54,pierce:99,width:1.8},flamer:{id:`flamer`,name:`Flamethrower`,code:`FTX01`,branch:`flamer`,tier:1,cost:300,model:`flamer`,kind:`flame`,blurb:`Each shot is a long spray of fire that scorches every bot in its path and leaves them burning.`,color:16742938,magazine:6,cooldown:.6,reloadEach:.35,damage:26,range:50,cone:8*sy,burn:8,burnS:2,sprayS:.6},inferno:{id:`inferno`,name:`Inferno`,code:`FTX02`,branch:`flamer`,tier:2,cost:700,model:`inferno`,kind:`flame`,blurb:`Hotter and longer: a bigger jet of fire that burns longer.`,color:16734740,magazine:7,cooldown:.7,reloadEach:.33,damage:32,range:58,cone:10*sy,burn:11,burnS:2.5,sprayS:.7},dragon:{id:`dragon`,name:`Dragon Breath`,code:`FTX03`,branch:`flamer`,tier:3,cost:1400,model:`dragon`,kind:`flame`,blurb:`A roaring jet of fire that reaches almost to where the bots land, and burns hottest of all.`,color:16726544,magazine:8,cooldown:.8,reloadEach:.3,damage:40,range:68,cone:12*sy,burn:15,burnS:3,sprayS:.8},hellfire:{id:`hellfire`,name:`Hellfire`,code:`FTX04`,branch:`flamer`,tier:4,cost:2400,model:`hellfire`,kind:`flame`,blurb:`Violet fire that reaches right to the drop zone and keeps bots burning for ages.`,color:12602111,magazine:8,cooldown:.8,reloadEach:.28,damage:50,range:75,cone:13*sy,burn:19,burnS:3.5,sprayS:.85},sunfury:{id:`sunfury`,name:`Sunfury`,code:`FTX05`,branch:`flamer`,tier:5,cost:4e3,model:`sunfury`,kind:`flame`,blurb:`A blinding sun-gold blaze: the longest reach, the widest cone and the hottest burn.`,color:16769120,magazine:9,cooldown:.85,reloadEach:.26,damage:62,range:82,cone:16*sy,burn:24,burnS:4,sprayS:.9}},ly=[{id:`launcher`,name:`Launcher`,weapons:[`heavy`,`twin`,`swarm`,`barrage`,`meteor`]},{id:`laser`,name:`Flash Cannon`,weapons:[`laser`,`pulse`,`prism`,`nova`,`zenith`]},{id:`flamer`,name:`Flamethrower`,weapons:[`flamer`,`inferno`,`dragon`,`hellfire`,`sunfury`]}];function uy(e){let t=cy[e];if(t.tier===0)return null;if(t.tier===1)return`tube`;let n=ly.find(e=>e.id===t.branch);return n?n.weapons[t.tier-2]:`tube`}function dy(e,t){return Math.round(e/10)+t*50}var $=e=>document.getElementById(e),fy=class{hud=$(`hud`);waveLabel=$(`wave-label`);wave=$(`wave`);waveOf=$(`wave-of`);score=$(`score`);bossBar=$(`boss-bar`);bossName=$(`boss-name`);bossFill=$(`boss-fill`);hpFill=$(`hp-fill`);hpText=$(`hp-text`);hpBox=$(`hp`);ammo=$(`ammo`);banner=$(`banner`);hintEl=$(`hint`);vignette=$(`vignette`);float=$(`float`);dragPad=$(`drag-pad`);pips=[];bars=[];pops=[];nextPop=0;shownScore=-1;hurtLevel=0;xpTimer=0;skillBtns=[$(`skill-0`),$(`skill-1`)];skillShown=[``,``];skillWait=[-1,-1];preview=null;constructor(){for(let e=0;e<14;e++){let e=document.createElement(`div`);e.className=`fbar hidden`,e.innerHTML=`<div class="fbar-fill"></div>`,this.float.appendChild(e),this.bars.push(e)}for(let e=0;e<18;e++){let e=document.createElement(`div`);e.className=`pop`,this.float.appendChild(e),this.pops.push(e)}}setWeapon(e,t){this.ammo.replaceChildren(),this.pips.length=0,this.ammo.style.setProperty(`--shot`,py(e.color)),this.ammo.classList.toggle(`many`,t>6);for(let e=0;e<t;e++){let e=document.createElement(`div`);e.className=`pip`,e.innerHTML=`<div class="pip-fill"></div>`,this.ammo.appendChild(e),this.pips.push(e)}}onSkill(e){this.skillBtns.forEach((t,n)=>t.onclick=()=>e(n))}setSkills(e){e.forEach((e,t)=>{let n=this.skillBtns[t],r=`${e.id}:${e.unlock}:${e.rank}`;this.skillShown[t]!==r&&(this.skillShown[t]=r,n.firstElementChild.innerHTML=Lv[e.id],n.lastElementChild.textContent=e.unlock?`Lv ${e.unlock}`:e.rank>1?Kv[e.rank]:``,n.classList.toggle(`ranked`,!e.unlock&&e.rank>1),n.style.setProperty(`--skill`,Rv[e.id]),n.classList.toggle(`locked`,e.unlock>0),n.title=e.unlock?`${e.name} (unlocks at Lv ${e.unlock})`:e.name,n.setAttribute(`aria-label`,n.title));let i=e.unlock?0:Math.round(e.wait*100)/100;this.skillWait[t]!==i&&(this.skillWait[t]=i,n.style.setProperty(`--wait`,String(i))),n.classList.toggle(`ready`,!e.unlock&&i===0),n.classList.toggle(`active`,e.active)})}skillUsed(e){let t=this.skillBtns[e];t.classList.remove(`used`),t.offsetWidth,t.classList.add(`used`)}showHud(e){this.hud.classList.toggle(`hidden`,!e),this.float.classList.toggle(`hidden`,!e)}setWave(e,t){this.waveLabel.textContent=`WAVE`,this.wave.textContent=String(e),this.waveOf.textContent=`/ ${t}`}setBossWave(){this.waveLabel.textContent=``,this.wave.textContent=`BOSS`,this.waveOf.textContent=``}setScore(e){e!==this.shownScore&&(this.shownScore=e,this.score.textContent=e.toLocaleString(`en-US`))}setHp(e,t){let n=Math.max(0,e/t);this.hpFill.style.width=`${n*100}%`,this.hpFill.classList.toggle(`low`,n<=.3),this.hpText.textContent=String(Math.max(0,Math.ceil(e)))}setAmmo(e,t){this.pips.forEach((n,r)=>{let i=n.firstElementChild,a=r<e?1:r===e?t:0;n.classList.toggle(`full`,r<e),i.style.transform=`scaleY(${a})`})}ammoEmpty(){this.ammo.classList.remove(`shake`),this.ammo.offsetWidth,this.ammo.classList.add(`shake`)}showBoss(e){this.bossBar.classList.toggle(`hidden`,e===null),e&&(this.bossName.textContent=e.toUpperCase())}setBoss(e){this.bossFill.style.width=`${Math.max(0,e)*100}%`}showBanner(e,t=``,n=`normal`,r=1800){this.banner.innerHTML=`<div class="banner-main ${n}">${e}</div>${t?`<div class="banner-sub">${t}</div>`:``}`,this.banner.style.setProperty(`--ms`,`${r}ms`),this.banner.classList.remove(`show`),this.banner.offsetWidth,this.banner.classList.add(`show`)}hideBanner(){this.banner.classList.remove(`show`)}hint(e){this.hintEl.textContent=e??``,this.hintEl.classList.toggle(`show`,!!e)}pulseDragPad(){this.dragPad.classList.remove(`pulse`),this.dragPad.offsetWidth,this.dragPad.classList.add(`pulse`)}setDragging(e){this.dragPad.classList.toggle(`active`,e)}hurt(e){this.hurtLevel=Math.min(1,this.hurtLevel+.35+e*.03),this.hpBox.classList.remove(`hit`),this.hpBox.offsetWidth,this.hpBox.classList.add(`hit`)}update(e,t){this.hurtLevel=Math.max(0,this.hurtLevel-e*1.6),this.vignette.style.opacity=String(this.hurtLevel);for(let e=0;e<this.bars.length;e++){let n=this.bars[e],r=t[e];if(!r){n.classList.contains(`hidden`)||n.classList.add(`hidden`);continue}n.classList.remove(`hidden`),n.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`;let i=n.firstElementChild;i.style.width=`${Math.max(0,r.frac)*100}%`,i.classList.toggle(`low`,r.frac<=.35)}}popText(e,t,n,r){let i=this.pops[this.nextPop];this.nextPop=(this.nextPop+1)%this.pops.length,i.textContent=n,i.className=`pop ${r}`,i.style.left=`${e}px`,i.style.top=`${t}px`,i.offsetWidth,i.classList.add(`go`)}clearFloat(){for(let e of this.bars)e.classList.add(`hidden`);for(let e of this.pops)e.className=`pop`}showTitle(e,t,n,r,i,a){$(`title`).classList.remove(`hidden`),this.showStages(e,t,a.stage),$(`title-coins`).textContent=i.toLocaleString(`en-US`),$(`title-lv`).textContent=`Lv ${n.level}`,$(`title-xp`).style.width=`${my(n)}%`,$(`title-level`).title=`Level ${n.level}: +${3*(n.level-1)} max health, +${Math.round(Ov*100*(n.level-1))}% damage`+(n.need?` (${n.need-n.into} XP to level ${n.level+1})`:` (max level)`),$(`weapon-btn`).title=`Weapon (${r.weapon} equipped)`,$(`armor-btn`).title=`Armor (${r.armor} worn)`,$(`play-btn`).onclick=()=>{$(`title`).classList.add(`hidden`),a.play()},$(`weapon-btn`).onclick=()=>{$(`title`).classList.add(`hidden`),a.weapons()},$(`armor-btn`).onclick=()=>{$(`title`).classList.add(`hidden`),a.armor()},$(`skills-btn`).onclick=$(`title-level`).onclick=()=>{$(`title`).classList.add(`hidden`),a.skills()}}showStages(e,t,n){let r=$(`stage-path`),i=t=>{let a=e.find(e=>e.id===t)??e[0];$(`title-stage`).textContent=`STAGE ${a.id}`,$(`title-name`).textContent=a.name,$(`title-best`).textContent=a.best>0?`Best ${a.best.toLocaleString(`en-US`)}`:``,$(`title-boss`).innerHTML=`Boss: <b>${a.boss}</b>`,r.innerHTML=e.map((e,n)=>{let r=e.open?e.stars>0?`won`:`open`:`locked`,i=e.open?`Stage ${e.id}: ${e.name}`:`Stage ${e.id} (locked: win Stage ${e.id-1} first)`,a=e.open?`<b>${e.id}</b>${e.stars>0?vy(e.stars):``}`:_y;return(n>0?`<i class="stage-link ${e.open?`open`:``}"></i>`:``)+`<button class="stage-node ${r}${e.id===t?` picked`:``}" data-id="${e.id}" title="${i}" aria-label="${i}"${e.id===t?` aria-pressed="true"`:``}>${a}</button>`}).join(``),r.querySelectorAll(`.stage-node`).forEach(e=>{e.onclick=()=>{let r=Number(e.dataset.id);r!==t&&(n(r)?(h_(),i(r)):(e.classList.remove(`nope`),e.offsetWidth,e.classList.add(`nope`)))}});let o=r.querySelector(`.stage-node.picked`);o&&(r.scrollLeft=o.offsetLeft+o.offsetWidth/2-r.clientWidth/2)};i(t)}showSkills(e,t,n){let r=$(`skills-screen`);r.classList.remove(`hidden`),$(`skills-lv`).textContent=`Lv ${e}`;let i=t,a=()=>{let n=$(`skills-tabs`);n.replaceChildren();for(let e of ly){let r=document.createElement(`button`);r.className=e.id===i?`on`:``,r.style.setProperty(`--tab`,Rv[qv[e.id][0].id]),r.innerHTML=`${e.name}${e.id===t?`<small>in hand</small>`:``}`,r.onclick=()=>{i=e.id,a()},n.append(r)}$(`skills-active`).innerHTML=qv[i].map((t,n)=>{let r=zv[n],i=e<r,a=Uv(n,e),o=Math.round(t.cooldown*Gv(a)*10)/10,s=[1,2,3].map(e=>`<i class="${!i&&e<=a?`on`:``}" title="${e===1?`Lv ${r}`:`Lv ${Bv[n][e-2]}`}">${Kv[e]}</i>`).join(``),c=i?``:a<3?`Rank ${Kv[a+1]} at Lv ${Bv[n][a-1]}: +25% damage, quicker recharge.`:`Max rank.`;return`<div class="skill-row${i?` locked`:``}">
            <span class="skill${i?` locked`:``}" style="--skill:${Rv[t.id]}"><span class="skill-icon">${Lv[t.id]}</span></span>
            <div><div class="sr-head"><b>${t.name}</b><span class="ranks">${s}</span><span class="meta">${i?`Unlocks at Lv ${r}`:`${o} s recharge`}</span></div><p>${t.blurb}${c?` <em>${c}</em>`:``}</p></div>
          </div>`}).join(``),$(`skills-passive`).innerHTML=Xv.map(t=>`<div class="passive${e<t.level?` locked`:``}"><i>${e<t.level?`Lv ${t.level}`:`✓`}</i><b>${t.name}</b><span>${t.blurb}</span></div>`).join(``)};$(`skills-close`).onclick=()=>{r.classList.add(`hidden`),n.close()},a()}showWeapons(e,t){this.showTree({kind:`weapon`,title:`Weapon`,root:`tube`,branches:ly.map(e=>({id:e.id,name:e.name,items:e.weapons})),item:e=>{let t=cy[e];return{...t,bars:hy(t)}},requires:e=>uy(e),owned:()=>e.owned,equipped:()=>e.equipped,preview:(e,t)=>e.showLauncher(cy[t].model)},e,t)}showArmor(e,t,n){this.showTree({kind:`armor`,title:`Armor`,root:`raider`,branches:dg,item:e=>{let t=ug[e];return{...t,bars:gy(t)}},requires:e=>fg(e),owned:()=>e.armors,equipped:()=>e.armor,preview:(e,n)=>e.showRobot(ug[n].set,t)},e,n)}showTree(e,t,n){$(`shop`).classList.remove(`hidden`),$(`shop-title`).textContent=e.title,$(`shop-detail`).className=`shop-detail ${e.kind}`,this.preview??=new ay($(`shop-preview`)),this.preview.start();let r=e.equipped(),i=t=>{if(e.equipped()===t)return`equipped`;if(e.owned().includes(t))return`owned`;let n=e.requires(t);return!n||e.owned().includes(n)?`open`:`locked`},a=t=>{let n=e.item(t),a=i(t),s=document.createElement(`button`);s.className=`node ${a}${t===r?` picked`:``}`,s.style.setProperty(`--shot`,py(n.color));let c=a===`equipped`?`Equipped`:a===`owned`?`Owned`:`<i class="coin"></i>${n.cost.toLocaleString(`en-US`)}`;return s.innerHTML=`<span class="node-name">${n.code??n.name}</span><small>${c}</small>`,s.onclick=()=>{r=t,o()},s},o=()=>{$(`shop-coins`).textContent=t.coins.toLocaleString(`en-US`);let s=$(`shop-tree`);s.replaceChildren(a(e.root));let c=document.createElement(`div`);c.className=`branches`;for(let t of e.branches){let e=document.createElement(`div`);e.className=`branch ${t.id}`,e.innerHTML=`<div class="branch-name">${t.name}</div>`;for(let n of t.items)e.append(a(n));c.append(e)}s.append(c);let l=e.item(r),u=i(r);this.preview&&e.preview(this.preview,r),$(`shop-info`).innerHTML=`
        <div class="detail-head"><b>${l.name}</b><span>${l.code??`Starter`}</span></div>
        <p>${l.blurb}</p>
        <div class="stats">${l.bars}</div>`;let d=$(`shop-action`);if(d.className=`btn detail-btn`,d.disabled=!1,d.onclick=null,u===`equipped`)d.textContent=`Equipped`,d.disabled=!0;else if(u===`owned`)d.textContent=`Equip`,d.classList.add(`primary`),d.onclick=()=>{n.equip(r),o()};else if(u===`open`){let e=t.coins<l.cost;d.innerHTML=`${e?`Need`:`Buy`} <i class="coin"></i>${l.cost.toLocaleString(`en-US`)}`,d.classList.add(`primary`),d.disabled=e,d.onclick=()=>{n.buy(r)&&n.equip(r),o()}}else{let t=e.requires(r),n=t?e.item(t):null;d.textContent=n?`Get ${n.code??n.name} first`:`Get the one before first`,d.disabled=!0}};$(`shop-close`).onclick=()=>{this.hideShop(),n.close()},o()}hideShop(){$(`shop`).classList.add(`hidden`),this.preview?.stop()}hideTitle(){$(`title`).classList.add(`hidden`)}showPause(e,t){let n=$(`pause`);n.classList.remove(`hidden`);let r=$(`mute-btn`);r.textContent=`Sound: ${e?`Off`:`On`}`,$(`resume-btn`).onclick=()=>{n.classList.add(`hidden`),t.resume()},$(`restart-btn`).onclick=()=>{n.classList.add(`hidden`),t.restart()},$(`quit-btn`).onclick=()=>{n.classList.add(`hidden`),t.quit()},r.onclick=()=>{r.textContent=`Sound: ${t.mute()?`Off`:`On`}`}}get paused(){return!$(`pause`).classList.contains(`hidden`)}onPause(e){$(`pause-btn`).onclick=e}showResult(e,t){let n=$(`result`);n.classList.remove(`hidden`);let r=$(`res-title`);r.textContent=e.won?`Victory!`:`Defeated`,r.className=`res-title ${e.won?`won`:`lost`}`,$(`res-stars`).innerHTML=[0,1,2].map(t=>`<span class="${t<e.stars?`on`:``}" style="animation-delay:${.25+t*.18}s">★</span>`).join(``),$(`res-score`).textContent=e.score.toLocaleString(`en-US`),$(`res-sub`).textContent=e.newBest?`New best score!`:`Best ${e.best.toLocaleString(`en-US`)}`,$(`res-sub`).classList.toggle(`record`,e.newBest),$(`res-kills`).textContent=String(e.kills),$(`res-acc`).textContent=`${Math.round(e.accuracy*100)}%`;let i=Math.floor(e.seconds/60),a=Math.floor(e.seconds%60);$(`res-time`).textContent=`${i}:${String(a).padStart(2,`0`)}`,$(`res-coins`).innerHTML=`<i class="coin"></i>+${e.coins.toLocaleString(`en-US`)}`,this.showXp(e),$(`res-retry`).onclick=()=>{n.classList.add(`hidden`),t.retry()};let o=$(`res-next`);o.classList.toggle(`hidden`,!t.next),$(`res-retry`).className=`btn ${t.next?`secondary`:`primary`}`,n.querySelector(`.res-buttons`)?.classList.toggle(`has-next`,!!t.next),o.onclick=()=>{n.classList.add(`hidden`),t.next?.()},$(`res-weapon`).onclick=()=>{n.classList.add(`hidden`),t.weapons()},$(`res-armor`).onclick=()=>{n.classList.add(`hidden`),t.armor()}}showXp(e){let t=$(`res-lv`),n=$(`res-xp-fill`),r=$(`res-xp-note`),i=e.after.level-e.before.level,a=(e,t)=>{t||(n.style.transition=`none`),n.style.width=`${e}%`,t||(n.offsetWidth,n.style.transition=``)};t.textContent=`Lv ${e.before.level}`,t.classList.remove(`up`);let o=$(`res-unlock`),s=[...e.stageUnlocked?[`Stage ${e.stageUnlocked} unlocked!`]:[],...e.unlocked.length?[`New skill${e.unlocked.length>1?`s`:``}: ${e.unlocked.join(`, `)}`]:[]];o.textContent=s.join(` · `),o.classList.toggle(`hidden`,!s.length),$(`res-xp-gain`).textContent=`+${e.xp.toLocaleString(`en-US`)} XP`,r.className=``,r.textContent=``,a(my(e.before),!1),clearTimeout(this.xpTimer),this.xpTimer=setTimeout(()=>{i===0?(a(my(e.after),!0),r.textContent=e.after.need?`${(e.after.need-e.after.into).toLocaleString(`en-US`)} XP to Lv ${e.after.level+1}`:`Max level`):(a(100,!0),this.xpTimer=setTimeout(()=>{t.textContent=`Lv ${e.after.level}`,t.classList.add(`up`),a(0,!1),a(my(e.after),!0),r.textContent=`Level up! +${3*i} HP, +${Math.round(Ov*100*i)}% dmg`,r.className=`up`},650))},500)}hideResult(){$(`result`).classList.add(`hidden`)}},py=e=>`#${e.toString(16).padStart(6,`0`)}`,my=e=>e.need?e.into/e.need*100:100;function hy(e){let t=(e.damage*(e.rockets??1)+(e.burn??0)*(e.burnS??0))/180,n=e.magazine*(e.cooldown+e.reloadEach)+.4,r=e.magazine/n/2.2,i=`Blast`,a=(e.splash??6)/12*((e.rockets??1)>1?1.2:1);if(e.kind===`beam`){i=`Pierce`;let t=e.pierce??1;a=(t>10?.6:.15+(t-1)*.15)+(e.width??.4)*.22}else e.kind===`flame`&&(i=`Reach`,a=(e.range??50)/82*.8+(e.cone??.15)/.28*.2);let o=(e,t)=>`<div class="stat"><span>${e}</span><div class="stat-track"><div class="stat-fill" style="width:${Math.round(Math.min(1,t)*100)}%"></div></div></div>`;return o(`Power`,t)+o(`Fire rate`,r)+o(i,a)}function gy(e){let t=(e,t)=>`<div class="stat"><span>${e}</span><div class="stat-track"><div class="stat-fill" style="width:${Math.round(Math.min(1,t)*100)}%"></div></div></div>`;return t(`Health`,(100+e.hp)/270)+t(`Guard`,e.guard/.55)+t(`Evade`,e.evade/.42)}var _y=`<svg viewBox="0 0 24 24" aria-hidden="true"><g stroke="#1d2433" stroke-width="2.2" stroke-linejoin="round"><path d="M7.5 11 V8 a4.5 4.5 0 0 1 9 0 V11" fill="none" /><rect x="5" y="11" width="14" height="10" rx="2.5" fill="#c9ced8" /></g></svg>`;function vy(e){return`<span class="mini-stars">${[0,1,2].map(t=>`<i class="${t<e?`on`:``}">★</i>`).join(``)}</span>`}var yy=class{enabled=!1;keyX=0;keyY=0;holdFire=!1;drags=new Map;keys=new Set;constructor(e,t){let n=e=>[e.clientX/window.innerWidth,e.clientY/window.innerHeight],r=e=>[e.clientX/window.innerWidth,e.clientY/window.innerWidth];e.addEventListener(`pointerdown`,i=>{if(!this.enabled)return;i.preventDefault();let[a,o]=n(i);o>=.72?(this.drags.size===0&&t.dragStart(),this.drags.set(i.pointerId,r(i)),e.setPointerCapture?.(i.pointerId)):t.fire(a,o)}),e.addEventListener(`pointermove`,e=>{let n=this.drags.get(e.pointerId);if(n===void 0)return;let[i,a]=r(e);t.drag(i-n[0],a-n[1])});let i=e=>{this.drags.delete(e.pointerId)&&this.drags.size===0&&t.dragEnd()};e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),e.addEventListener(`contextmenu`,e=>e.preventDefault());let a=()=>{let e=this.keys.has(`ArrowLeft`)||this.keys.has(`KeyA`),t=this.keys.has(`ArrowRight`)||this.keys.has(`KeyD`),n=this.keys.has(`ArrowUp`)||this.keys.has(`KeyW`),r=this.keys.has(`ArrowDown`)||this.keys.has(`KeyS`);this.keyX=!!t-+!!e,this.keyY=!!n-+!!r,this.holdFire=this.keys.has(`Space`)};window.addEventListener(`keydown`,e=>{this.keys.add(e.code),a(),this.enabled&&((e.code===`Space`||e.code.startsWith(`Arrow`))&&e.preventDefault(),!e.repeat&&(e.code===`Space`&&t.shoot(),e.code===`KeyQ`||e.code===`Digit1`?t.skill(0):(e.code===`KeyE`||e.code===`Digit2`)&&t.skill(1)))}),window.addEventListener(`keyup`,e=>{this.keys.delete(e.code),a()}),window.addEventListener(`blur`,()=>{this.keys.clear(),a()})}reset(){this.drags.clear(),this.keys.clear(),this.keyX=this.keyY=0,this.holdFire=!1}},by=.07,xy=.6,Sy=.1,Cy=class{pos=0;height=0;goal=0;side=1;gap=0;airTime=.3;speed=1;t=-1;from=0;to=0;peak=0;rest=0;get phase(){return this.t<0?`ground`:this.t<this.windup?`windup`:`air`}get progress(){return this.t<0?0:this.t<this.windup?this.t/this.windup:Math.min(1,(this.t-this.windup)/this.airTime)}get windup(){return by/this.speed}get hopping(){return this.t>=0}reset(e=0){this.pos=this.goal=e,this.height=0,this.t=-1,this.rest=0}update(e){if(this.t<0)return this.rest=Math.max(0,this.rest-e),this.rest>0||Math.abs(this.goal-this.pos)<xy||(this.t=0,this.side=Math.sign(this.goal-this.pos)),null;let t=this.t;if(this.t+=e,this.t<this.windup)return null;let n=null;t<this.windup&&(this.side=Math.sign(this.goal-this.pos)||this.side,this.gap=Math.abs(this.goal-this.pos),this.from=this.pos,this.to=this.goal,this.airTime=(.26+.02*this.gap)/this.speed,this.peak=.4+.07*this.gap,n=`takeoff`),this.to+=(this.goal-this.to)*(1-Math.exp(-14*e));let r=this.progress;return this.pos=Nt.lerp(this.from,this.to,r),this.height=4*this.peak*r*(1-r),r>=1?(this.pos=this.to,this.height=0,this.t=-1,this.rest=Sy/this.speed,`land`):n}},wy=`roboblast-save-v1`;function Ty(){return{levels:{},muted:!1,xp:0,coins:0,owned:[`tube`],equipped:`tube`,armors:[`raider`],armor:`raider`,stage:1}}function Ey(){let e=Ty();try{let t=localStorage.getItem(wy);if(t){let n=JSON.parse(t);e.levels=n.levels??{},e.muted=n.muted??!1,e.coins=Math.max(0,Math.floor(n.coins??0)),e.xp=Math.max(0,Math.floor(n.xp??0)),e.owned=[...new Set([`tube`,...(n.owned??[]).filter(e=>e in cy)])],e.equipped=n.equipped&&e.owned.includes(n.equipped)?n.equipped:`tube`,e.armors=[...new Set([`raider`,...(n.armors??[]).filter(e=>e in ug)])],e.armor=n.armor&&e.armors.includes(n.armor)?n.armor:`raider`,e.stage=Math.max(1,Math.floor(n.stage??1))}}catch{}return e}function Dy(e){try{localStorage.setItem(wy,JSON.stringify(e))}catch{}}function Oy(e,t){return e.levels[t]??{best:0,stars:0}}var ky=80,Ay=3,jy=.025,My=class{pool=[];vfx;a=new L;b=new L;c=new L;constructor(e,t,n,r,i=10,a=8){this.vfx=t;let o=(t,n)=>{let r=t.clone();r.visible=!1;let i=r;r.traverse(e=>{e.userData.flame&&(i=e)}),i!==r&&i.traverse(e=>void(e.isMesh&&bg(e))),e.add(r),this.pool.push({obj:r,flame:i,owner:n,active:!1,p0:new L,p1:new L,p2:new L,t:0,dur:1,target:null,trailT:0,scale:1,onImpact:()=>{},tag:0})};for(let e=0;e<i;e++)o(n,`player`);for(let e=0;e<a;e++)o(r,`boss`)}take(e){return this.pool.find(t=>t.owner===e&&!t.active)??null}firePlayer(e,t,n,r,i,a=1){let o=this.take(`player`);if(!o)return null;let s=e.distanceTo(n);return o.p0.copy(e),o.p1.copy(e).addScaledVector(t,Math.min(s*.45,6)),o.p1.y+=s*.1,o.p2.copy(n),o.dur=Math.max(.12,s*1.08/ky),o.scale=2*a,this.launch(o,r,i)}fireBoss(e,t,n,r){return this.lob(`boss`,e,t,n,Ay,r)}lob(e,t,n,r,i,a){let o=this.take(e);if(!o)return null;let s=t.distanceTo(n);return o.p0.copy(t),o.p1.addVectors(t,n).multiplyScalar(.5),o.p1.y=Math.max(t.y,n.y)+s*.55+8,o.p2.copy(n),o.dur=r,o.scale=i,this.launch(o,null,a)}launch(e,t,n){return e.active=!0,e.t=0,e.target=t,e.trailT=0,e.onImpact=n,e.obj.visible=!0,this.place(e),e}update(e){for(let t of this.pool)t.active&&(t.target?.alive&&t.p2.lerp(t.target.center(this.a),1-Math.exp(-12*e)),t.t+=e/t.dur,t.t>=1?(t.active=!1,t.obj.visible=!1,t.onImpact(this.a.copy(t.p2),t)):(this.place(t),t.trailT-=e,t.trailT<=0&&(t.trailT=jy,this.vfx.trail(this.b.set(0,0,-.5*t.scale).applyQuaternion(t.obj.quaternion).add(t.obj.position))),t.flame.scale.set(1,1,.75+Math.random()*.6)))}place(e){let t=Math.min(e.t,1),n=1-t,r=this.b.copy(e.p0).multiplyScalar(n*n).addScaledVector(e.p1,2*n*t).addScaledVector(e.p2,t*t),i=this.c.subVectors(e.p1,e.p0).multiplyScalar(2*n).addScaledVector(this.a.subVectors(e.p2,e.p1),2*t);e.obj.position.copy(r),e.obj.lookAt(this.a.copy(r).add(i)),e.obj.scale.setScalar(e.scale*Math.min(1,.4+t*6))}forEachActive(e){for(let t of this.pool)t.active&&e(t)}clear(){for(let e of this.pool)e.active=!1,e.obj.visible=!1}},Ny=40,Py=3107626,Fy=class{mesh;outline;puffs=[];live=0;m=new an;q=new Pt;s=new L;constructor(e,t,n){this.mesh=new Ii(new H(1,12,8),n,t),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new zn),this.outline=Qd(this.mesh,Kd),this.outline.count=0,e.add(this.mesh,this.outline);for(let e=0;e<t;e++)this.puffs.push({pos:new L,vel:new L,age:0,life:0,size:0,color:new zn,rise:0,drag:0})}spawn(e,t,n,r,i,a=0,o=3){if(this.live>=this.puffs.length)return;let s=this.puffs[this.live++];s.pos.copy(e),s.vel.copy(t),s.age=0,s.life=r,s.size=n,s.color.set(i),s.rise=a,s.drag=o}update(e){let t=0;for(let n=0;n<this.live;n++){let r=this.puffs[n];if(r.age+=e,r.age>=r.life)continue;r.vel.multiplyScalar(Math.exp(-r.drag*e)),r.vel.y+=r.rise*e,r.pos.addScaledVector(r.vel,e);let i=r.age/r.life,a=i<.15?1-(1-i/.15)**2:1-((i-.15)/.85)**1.6;if(this.s.setScalar(Math.max(.001,r.size*a)),this.m.compose(r.pos,this.q,this.s),this.mesh.setMatrixAt(t,this.m),this.mesh.setColorAt(t,r.color),t!==n){let e=this.puffs[t];this.puffs[t]=r,this.puffs[n]=e}t++}this.live=t,this.mesh.count=t,this.outline.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.live=0,this.update(0)}},Iy=`
  attribute vec3 iPos;
  attribute vec3 iDir;
  attribute vec2 iSize; // across, along
  attribute float iLife;
  attribute float iSeed;
  attribute float iAmount;
  varying vec2 vUv;
  varying float vLife;
  varying float vSeed;
  varying float vAmount;
  void main() {
    vec4 mv = viewMatrix * vec4(iPos, 1.0);
    // Facing the camera, drawn out along the way it's going (as seen on screen).
    vec2 d = (viewMatrix * vec4(iDir, 0.0)).xy;
    vec2 along = length(d) > 1e-4 ? normalize(d) : vec2(0.0, 1.0);
    vec2 across = vec2(-along.y, along.x);
    mv.xy += across * position.x * iSize.x + along * position.y * iSize.y;
    gl_Position = projectionMatrix * mv;
    vUv = uv;
    vLife = iLife;
    vSeed = iSeed;
    vAmount = iAmount;
  }
`,Ly=`
  uniform float uTime;
  uniform float uGlow;
  uniform sampler2D uNoise;
  varying vec2 vUv;
  varying float vLife;
  varying float vSeed;

  // Fire's colors, hottest last: dark ember red, red, orange, yellow, white.
  vec3 fireColor(float t) {
    vec3 c = mix(vec3(0.42, 0.05, 0.02), vec3(0.9, 0.18, 0.04), smoothstep(0.0, 0.3, t));
    c = mix(c, vec3(1.0, 0.48, 0.08), smoothstep(0.25, 0.55, t));
    c = mix(c, vec3(1.0, 0.78, 0.26), smoothstep(0.5, 0.8, t));
    return mix(c, vec3(1.0, 0.96, 0.84), smoothstep(0.8, 1.0, t));
  }

  void main() {
    // A soft blob, a little fuller at the back, torn up by turbulence flowing back through it
    // that eats it away from the edges as it burns out.
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(vec2(p.x * (1.0 + 0.3 * max(p.y, 0.0)), p.y));
    float body = clamp(1.0 - r, 0.0, 1.0);
    body = body * body * (3.0 - 2.0 * body);
    vec2 q = vUv * vec2(0.55, 0.4) + vec2(vSeed * 5.31, vSeed * 3.17 - uTime * 0.8);
    float n = texture2D(uNoise, q).r * 0.6 + texture2D(uNoise, q * 2.3 + vec2(0.37, -uTime * 0.55)).g * 0.4;
    float m = clamp(body * 1.7 - (1.0 - n) * (0.5 + 0.9 * vLife), 0.0, 1.0);
    if (m < 0.004) discard;
    float heat = 1.0 - 0.8 * vLife;
    vec3 col = fireColor(clamp(m * (0.2 + 0.75 * heat), 0.0, 1.0));
    if (uGlow > 0.5) {
      // Into the glow buffer: the hotter it is, the more light it gives off.
      gl_FragColor = vec4(col * m * heat * 0.4, 0.0);
    } else {
      // Light added on top, partly covering what's behind (more so as it cools and gets sooty),
      // so the jet stays orange where it's thick instead of piling up to white.
      gl_FragColor = vec4(col * m * 0.5, m * (0.3 + 0.4 * vLife));
    }
  }
`,Ry=`
  uniform float uTime;
  uniform sampler2D uNoise;
  varying vec2 vUv;
  varying float vLife;
  varying float vSeed;
  varying float vAmount; // how thick: 1 for a blast's smoke, less for wisps off burning things
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float body = clamp(1.0 - length(p), 0.0, 1.0);
    body = body * body * (3.0 - 2.0 * body);
    vec2 q = vUv * 0.5 + vec2(vSeed * 4.7, vSeed * 2.3 - uTime * 0.25);
    float n = texture2D(uNoise, q).r * 0.6 + texture2D(uNoise, q * 2.1).g * 0.4;
    // Fades in fast, thins out as it spreads.
    float m = clamp(body * 1.4 - (1.0 - n) * 0.6, 0.0, 1.0) * pow(1.0 - vLife, 0.7) * min(1.0, vLife * 6.0);
    if (m < 0.004) discard;
    vec3 col = mix(vec3(0.6, 0.59, 0.6), vec3(0.42, 0.41, 0.43), vLife);
    float a = min(1.0, m * vAmount);
    gl_FragColor = vec4(col * a, a);
  }
`,zy=class{mesh;flames=[];fire;live=0;time=0;pos;dir;size;lifeAttr;seed;amount;constructor(e,t,n){this.fire=n===`fire`;let r=new _o(1,1),i=new vs;i.index=r.index,i.setAttribute(`position`,r.getAttribute(`position`)),i.setAttribute(`uv`,r.getAttribute(`uv`));let a=e=>new Oi(new Float32Array(t*e),e).setUsage(Je);this.pos=a(3),this.dir=a(3),this.size=a(2),this.lifeAttr=a(1),this.seed=a(1),this.amount=a(1),i.setAttribute(`iPos`,this.pos),i.setAttribute(`iDir`,this.dir),i.setAttribute(`iSize`,this.size),i.setAttribute(`iLife`,this.lifeAttr),i.setAttribute(`iSeed`,this.seed),i.setAttribute(`iAmount`,this.amount),i.instanceCount=0;let o=new ko({vertexShader:Iy,fragmentShader:this.fire?Ly:Ry,uniforms:{uTime:{value:0},uGlow:gg,uNoise:{value:nb()}},side:2,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205});this.mesh=new z(i,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=this.fire?4:3,e.add(this.mesh),this.fire&&bg(this.mesh);for(let e=0;e<t;e++)this.flames.push({pos:new L,vel:new L,age:0,life:0,size:0,rise:0,drag:0,seed:0,amount:1})}spawn(e,t,n,r,i=3,a=2,o=1){if(this.live>=this.flames.length)return;let s=this.flames[this.live++];s.pos.copy(e),s.vel.copy(t),s.age=0,s.life=r,s.size=n,s.rise=i,s.drag=a,s.seed=Math.random(),s.amount=o}update(e){this.time+=e,this.mesh.material.uniforms.uTime.value=this.time;let t=0;for(let n=0;n<this.live;n++){let r=this.flames[n];if(r.age+=e,r.age>=r.life)continue;r.vel.multiplyScalar(Math.exp(-r.drag*e)),r.vel.y+=r.rise*e,r.pos.addScaledVector(r.vel,e);let i=r.age/r.life;if(this.pos.setXYZ(t,r.pos.x,r.pos.y,r.pos.z),this.lifeAttr.setX(t,i),this.seed.setX(t,r.seed),this.amount.setX(t,r.amount),this.fire){let e=r.size*(.45+.7*Math.sqrt(i)),n=r.vel.length();this.dir.setXYZ(t,r.vel.x,r.vel.y+3,r.vel.z),this.size.setXY(t,e,e*(1.15+Math.min(n*.03,1)))}else{let e=r.size*(.5+.8*Math.sqrt(i));this.dir.setXYZ(t,0,1,0),this.size.setXY(t,e,e)}if(t!==n){let e=this.flames[t];this.flames[t]=r,this.flames[n]=e}t++}this.live=t,this.mesh.geometry.instanceCount=t;for(let e of[this.pos,this.dir,this.size,this.lifeAttr,this.seed,this.amount])e.clearUpdateRanges(),e.addUpdateRange(0,t*e.itemSize),e.needsUpdate=!0}clear(){this.live=0,this.update(0)}},By=16738848,Vy=45,Hy=26,Uy=class{heat=[];t=0;constructor(e,t){for(let n=0;n<t;n++){let t=new ms(By,0,Hy,2);t.position.set(0,-100,0),e.add(t),this.heat.push({light:t,pos:new L(0,-100,0),want:0,level:0,seed:n*1.7})}}add(e,t){let n=null,r=196,i=this.heat[0];for(let t of this.heat){let a=t.pos.distanceToSquared(e);t.want>.03&&a<r&&(n=t,r=a),t.want<i.want&&(i=t)}n?(n.pos.lerp(e,.5*t/(n.want+t)),n.want=Math.max(n.want,t)):i.want<t&&(i.pos.copy(e),i.level<.05&&i.light.position.copy(e),i.want=t)}update(e){this.t+=e;for(let t of this.heat){if(t.want*=Math.exp(-e/.35),t.level+=(t.want-t.level)*Math.min(1,e*14),t.level<.01){t.light.intensity=0;continue}let n=.84+.1*Math.sin(this.t*23+t.seed*6)+.06*Math.sin(this.t*37.7+t.seed*3);t.light.intensity=Vy*Math.min(t.level,2.5)*n,t.light.position.lerp(t.pos,Math.min(1,e*20))}}clear(){for(let e of this.heat)e.want=e.level=0,e.light.intensity=0}},Wy=class{mesh;outline;chunks=[];live=0;m=new an;q=new Pt;s=new L;constructor(e,t){this.mesh=new Ii(new Ki(1,1,1),K(16777215),t),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new zn),this.outline=Qd(this.mesh,Kd),this.outline.count=0,e.add(this.mesh,this.outline);for(let e=0;e<t;e++)this.chunks.push({pos:new L,vel:new L,rot:new hn,spin:new L,age:0,life:0,size:0,color:new zn})}spawn(e,t,n,r){if(this.live>=this.chunks.length)return;let i=this.chunks[this.live++];i.pos.copy(e),i.vel.copy(t),i.rot.set(Math.random()*6,Math.random()*6,Math.random()*6),i.spin.set((Math.random()-.5)*16,(Math.random()-.5)*16,(Math.random()-.5)*16),i.age=0,i.life=.9+Math.random()*.5,i.size=n,i.color.set(r)}update(e){let t=0;for(let n=0;n<this.live;n++){let r=this.chunks[n];if(r.age+=e,r.age>=r.life)continue;r.vel.y-=Ny*e,r.pos.addScaledVector(r.vel,e);let i=r.size*.5;r.pos.y<i&&(r.pos.y=i,r.vel.y=Math.abs(r.vel.y)*.35,r.vel.x*=.6,r.vel.z*=.6,r.spin.multiplyScalar(.5)),r.rot.x+=r.spin.x*e,r.rot.y+=r.spin.y*e,r.rot.z+=r.spin.z*e;let a=r.age/r.life;if(this.s.setScalar(r.size*(a<.7?1:1-(a-.7)/.3)),this.m.compose(r.pos,this.q.setFromEuler(r.rot),this.s),this.mesh.setMatrixAt(t,this.m),this.mesh.setColorAt(t,r.color),t!==n){let e=this.chunks[t];this.chunks[t]=r,this.chunks[n]=e}t++}this.live=t,this.mesh.count=t,this.outline.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.live=0,this.update(0)}},Gy=class{rings=[];constructor(e,t){let n=new vo(.82,1,48).rotateX(-Math.PI/2);for(let r=0;r<t;r++){let t=new z(n,new pi({color:16777215,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-10,polygonOffsetUnits:-10}));t.visible=!1,t.renderOrder=2,e.add(t),this.rings.push({mesh:t,age:0,life:0,from:0,to:0,opacity:1})}}spawn(e,t,n,r,i,a=.9){let o=this.rings.find(e=>!e.mesh.visible)??this.rings.reduce((e,t)=>e.age/e.life>t.age/t.life?e:t);o.mesh.visible=!0,o.mesh.position.set(e.x,Math.max(.2,e.y),e.z),o.mesh.material.color.set(i),o.age=0,o.life=r,o.from=t,o.to=n,o.opacity=a}update(e){for(let t of this.rings){if(!t.mesh.visible)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.mesh.visible=!1;continue}let r=1-(1-n)**3;t.mesh.scale.setScalar(t.from+(t.to-t.from)*r),t.mesh.material.opacity=t.opacity*(1-n)}}clear(){for(let e of this.rings)e.mesh.visible=!1}},Ky=class{marks=[];constructor(e,t){let n=new vo(.88,1,40).rotateX(-Math.PI/2),r=new Ji(1,40).rotateX(-Math.PI/2);for(let i=0;i<t;i++){let t=e=>new pi({color:16722474,transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-12,polygonOffsetUnits:-12}),i=new R,a=new z(n,t(.9)),o=new z(r,t(.35));i.add(o,a),i.visible=!1,i.renderOrder=3,e.add(i),this.marks.push({group:i,fill:o,ring:a,age:0,life:0})}}spawn(e,t,n,r=16722474){let i=this.marks.find(e=>!e.group.visible);i&&(i.group.visible=!0,i.ring.material.color.set(r),i.fill.material.color.set(r),i.group.position.set(e.x,.22,e.z),i.group.scale.setScalar(t),i.age=0,i.life=n)}update(e){for(let t of this.marks){if(!t.group.visible)continue;t.age+=e;let n=t.age/t.life;n>=1?t.group.visible=!1:(t.fill.scale.setScalar(Math.max(.01,n)),t.ring.material.opacity=.55+.45*Math.abs(Math.sin(t.age*14)))}}clear(){for(let e of this.marks)e.group.visible=!1}},qy=class{glows=[];next=0;constructor(e,t,n,r,i=!1){for(let a=0;a<t;a++){let t=new oi(new Kr({map:n,transparent:!0,depthWrite:!1,blending:r?2:1,fog:!1}));t.visible=!1,t.renderOrder=5,e.add(t),i&&bg(t),this.glows.push({sprite:t,age:0,life:0,size:0,vel:new L,gravity:0,spin:0})}}spawn(e,t,n,r,i,a=0){let o=this.glows[this.next];this.next=(this.next+1)%this.glows.length,o.sprite.visible=!0,o.sprite.position.copy(e),o.sprite.material.color.set(r),o.age=0,o.life=n,o.size=t,o.gravity=a,o.spin=(Math.random()-.5)*8,i?o.vel.copy(i):o.vel.set(0,0,0)}update(e){for(let t of this.glows){if(!t.sprite.visible)continue;t.age+=e;let n=t.age/t.life;n>=1?t.sprite.visible=!1:(t.vel.y-=t.gravity*e,t.sprite.position.addScaledVector(t.vel,e),t.sprite.scale.setScalar(t.size*(n<.2?.5+n*2.5:1)),t.sprite.material.opacity=1-n*n,t.sprite.material.rotation+=t.spin*e)}}clear(){for(let e of this.glows)e.sprite.visible=!1}},Jy=class{mesh;n=0;m=new an;q=new Pt;p=new L;s=new L;constructor(e,t){let n=new pi({color:Py,transparent:!0,opacity:.4,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-9,polygonOffsetUnits:-9});this.mesh=new Ii(new Ji(1,24).rotateX(-Math.PI/2),n,t),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,e.add(this.mesh)}begin(){this.n=0}add(e,t,n){this.n>=this.mesh.instanceMatrix.count||n<=.01||(this.p.set(e,.18,t),this.s.set(n,1,n*.9),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(this.n++,this.m))}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},Yy=class{beams=[];dir=new L;constructor(e,t){let n=new B(1,1,1,10,1,!0).translate(0,.5,0);for(let r=0;r<t;r++){let t=new pi({color:16777215,transparent:!0,blending:2,depthWrite:!1}),r=new pi({color:16777215,transparent:!0,depthWrite:!1}),i=new z(n,t),a=new z(n,r);for(let t of[i,a])t.visible=!1,t.frustumCulled=!1,t.renderOrder=5,e.add(t),bg(t);this.beams.push({outer:i,core:a,outerMat:t,coreMat:r,width:1,age:0,life:1,active:!1})}}spawn(e,t,n,r,i){let a=this.beams.find(e=>!e.active)??this.beams[0];this.dir.subVectors(t,e);let o=Math.max(.01,this.dir.length());this.dir.divideScalar(o);for(let t of[a.outer,a.core])t.position.copy(e),t.quaternion.setFromUnitVectors(Xy,this.dir),t.scale.y=o,t.visible=!0;return a.outerMat.color.set(r),a.width=n,a.age=0,a.life=i,a.active=!0,this.shape(a,1),a}move(e,t,n){this.dir.subVectors(n,t);let r=Math.max(.01,this.dir.length());this.dir.divideScalar(r);for(let n of[e.outer,e.core])n.position.copy(t),n.quaternion.setFromUnitVectors(Xy,this.dir),n.scale.y=r,n.visible=!0;e.age=0,e.active=!0,this.shape(e,1)}shape(e,t){let n=e.width*(.35+.65*t);e.outer.scale.x=e.outer.scale.z=n,e.core.scale.x=e.core.scale.z=n*.38,e.outerMat.opacity=.75*t,e.coreMat.opacity=Math.min(1,1.4*t)}update(e){for(let t of this.beams){if(!t.active)continue;t.age+=e;let n=1-t.age/t.life;n<=0?(t.active=!1,t.outer.visible=t.core.visible=!1):this.shape(t,n)}}clear(){for(let e of this.beams)e.active=!1,e.outer.visible=e.core.visible=!1}},Xy=new L(0,1,0),Zy=[16054010,14936046,13817823],Qy=e=>e[Math.floor(Math.random()*e.length)],$y=class{flames;soot;lights;smoke;debris;rings;marks;flashes;sparkles;shadows;beams;v=new L;w=new L;w2=new L;constructor(e){this.flames=new zy(e,900,`fire`),this.soot=new zy(e,320,`smoke`),this.lights=new Uy(e,4),this.smoke=new Fy(e,260,K(16777215)),this.debris=new Wy(e,90),this.rings=new Gy(e,16),this.marks=new Ky(e,8),this.flashes=new qy(e,16,rb(),!0),this.sparkles=new qy(e,60,ib(),!0,!0),this.shadows=new Jy(e,32),this.beams=new Yy(e,24)}update(e){this.flames.update(e),this.soot.update(e),this.lights.update(e),this.smoke.update(e),this.debris.update(e),this.rings.update(e),this.marks.update(e),this.flashes.update(e),this.sparkles.update(e),this.beams.update(e)}clear(){this.flames.clear(),this.soot.clear(),this.lights.clear(),this.smoke.clear(),this.debris.clear(),this.rings.clear(),this.marks.clear(),this.flashes.clear(),this.sparkles.clear(),this.beams.clear()}explode(e,t=1,n=[]){this.flashes.spawn(e,9*t,.28,16765562),this.lights.add(e,1.6*t);for(let n=0;n<3;n++)eb(this.v).multiplyScalar(1.5*t),this.flames.spawn(e,this.v,(4.5+Math.random())*t,.26+Math.random()*.08,3,4);for(let n=0;n<Math.round(14*t);n++)eb(this.v).multiplyScalar((7+Math.random()*9)*t),this.v.y=Math.abs(this.v.y)*.8+2,this.flames.spawn(this.w.copy(e).addScaledVector(this.v,.04),this.v,(3+Math.random()*2.2)*t,.38+Math.random()*.25,6,5);for(let n=0;n<Math.round(8*t);n++)eb(this.v).multiplyScalar((3+Math.random()*5)*t),this.v.y=Math.abs(this.v.y)+2,this.soot.spawn(this.w.copy(e).addScaledVector(this.v,.06),this.v,(3+Math.random()*1.6)*t,.9+Math.random()*.5,3,3.5);this.rings.spawn(e,.6*t,7*t,.45,16773570,.85);let r=n.length?n:[5264733,3817290];for(let n=0;n<Math.round(8*t);n++)eb(this.v).multiplyScalar((8+Math.random()*10)*t),this.v.y=Math.abs(this.v.y)*1.2+8,this.debris.spawn(e,this.v,(.25+Math.random()*.3)*Math.sqrt(t),Qy(r));for(let t=0;t<6;t++)eb(this.v).multiplyScalar(10+Math.random()*8),this.v.y=Math.abs(this.v.y)*1.2+6,this.sparkles.spawn(e,.9+Math.random()*.6,.6+Math.random()*.3,Math.random()<.5?16769354:16777215,this.v,30)}bigBoom(e,t=1){this.flashes.spawn(this.w.copy(e).setY(e.y+4*t),34*t,.45,16769184),this.lights.add(this.w,2.5*t),this.flashes.spawn(this.w.copy(e).setY(e.y+2*t),20*t,.8,16751162);for(let n=0;n<10;n++)eb(this.v).multiplyScalar(4*t),this.v.y=Math.abs(this.v.y)+3*t,this.flames.spawn(this.w.copy(e).setY(e.y+2*t),this.v,(7+Math.random()*3)*t,.75+Math.random()*.25,3,3);for(let n=0;n<Math.round(34*t);n++){let n=Math.random()*Math.PI*2,r=(16+Math.random()*14)*t;this.v.set(Math.cos(n)*r,(3+Math.random()*10)*t,Math.sin(n)*r),this.flames.spawn(this.w.copy(e).setY(Math.max(1,e.y)),this.v,(4.5+Math.random()*3.5)*t,.6+Math.random()*.4,4,3.5)}for(let n=0;n<Math.round(14*t);n++)this.v.set((Math.random()-.5)*5*t,(22+Math.random()*18)*t,(Math.random()-.5)*5*t),this.flames.spawn(e,this.v,(3.8+Math.random()*2.5)*t,.7+Math.random()*.3,6,2.2);for(let n=0;n<Math.round(24*t);n++){let n=Math.random(),r=(4+n*12)*t,i=Math.random()*Math.PI*2;this.v.set(Math.cos(i)*r,(8+n*26)*t,Math.sin(i)*r),this.soot.spawn(this.w.copy(e).setY(e.y+1.5*t),this.v,(5.5+Math.random()*3.5)*t,1.6+Math.random()*.8,3,1.6)}this.rings.spawn(e,1,30*t,.6,16773570,.95),this.rings.spawn(e,.5,18*t,.9,16757575,.8),this.rings.spawn(e,.5,42*t,1.2,16777215,.45);for(let n=0;n<Math.round(20*t);n++)eb(this.v).multiplyScalar((14+Math.random()*16)*t),this.v.y=Math.abs(this.v.y)*1.4+14,this.debris.spawn(e,this.v,(.35+Math.random()*.45)*Math.sqrt(t),Qy([5264733,3817290,7031338]));for(let t=0;t<16;t++)eb(this.v).multiplyScalar(16+Math.random()*14),this.v.y=Math.abs(this.v.y)*1.4+12,this.sparkles.spawn(e,1.3+Math.random()*.9,.9+Math.random()*.4,Math.random()<.5?16769354:16777215,this.v,30)}charge(e,t,n){this.flashes.spawn(e,1.5+4*t,.09,Math.random()<.5?n:16774080);for(let r=0;r<2;r++)eb(this.v).multiplyScalar(2+Math.random()*1.5),this.w.copy(e).add(this.v),this.v.multiplyScalar(-1/.22),this.sparkles.spawn(this.w,.5+.5*t,.22,Math.random()<.5?n:16777215,this.v)}light(e,t){this.lights.add(e,t)}groundFire(e,t){this.v.set((Math.random()-.5)*2,(5+Math.random()*4)*t,(Math.random()-.5)*2),this.flames.spawn(e,this.v,t*(1.1+Math.random()*.8),.5+Math.random()*.3,3,2.5)}smokeRise(e,t){this.v.set((Math.random()-.5)*1.5,3+Math.random()*3,(Math.random()-.5)*1.5),this.soot.spawn(e,this.v,t*(1.6+Math.random()*.8),1.4+Math.random()*.6,2,2,.5)}muzzle(e,t){this.flashes.spawn(e,2.2,.12,16770976);for(let n=0;n<4;n++)this.v.copy(t).multiplyScalar(8+Math.random()*8).add(eb(this.w).multiplyScalar(2.5)),this.flames.spawn(e,this.v,.5+Math.random()*.35,.12+Math.random()*.08,0,9);for(let n=0;n<3;n++)this.v.copy(t).multiplyScalar(3+Math.random()*3).add(eb(this.w).multiplyScalar(1.5)),this.smoke.spawn(e,this.v,.16+Math.random()*.12,.35+Math.random()*.2,Qy(Zy),1.5,4)}backblast(e,t){for(let n=0;n<4;n++)this.v.copy(t).multiplyScalar(5+Math.random()*6).add(eb(this.w).multiplyScalar(2)),this.smoke.spawn(e,this.v,.18+Math.random()*.14,.35+Math.random()*.2,Qy(Zy),1.5,5);this.v.copy(t).multiplyScalar(6),this.flames.spawn(e,this.v,.55,.1,0,8)}beam(e,t,n,r){this.beams.spawn(e,t,n,r,.18),this.flashes.spawn(e,2.4,.12,r),this.flashes.spawn(t,3.2,.16,r)}laserHit(e,t){this.flashes.spawn(e,3.6,.18,t);for(let n=0;n<6;n++)eb(this.v).multiplyScalar(8+Math.random()*8),this.v.y=Math.abs(this.v.y)+3,this.sparkles.spawn(e,.7+Math.random()*.4,.35+Math.random()*.2,Math.random()<.5?t:16777215,this.v,25)}flame(e,t,n,r,i=Math.round(16+n*.3),a=!0){let o=.55,s=(1-Math.exp(-2*o))/2;a&&this.flashes.spawn(e,2.6,.14,16756794);let c=Math.sqrt(n/26),l=Math.round(i*1.6);for(let i=0;i<l;i++){let i=Math.random();this.v.copy(t).applyAxisAngle(Xy,(Math.random()*2-1)*r),this.v.y+=(Math.random()*2-1)*r*.35,this.v.normalize();let l=n*(a?.35:.6)*i;this.w.copy(e).addScaledVector(this.v,l),this.v.multiplyScalar((n-l)/s*(.75+Math.random()*.3));let u=a?.6+i*1.5:.45+i*1.25;this.flames.spawn(this.w,this.v,u*(.8+Math.random()*.4)*c,o*(.7+Math.random()*.4),3,2)}for(let i=0;i<(a?0:3);i++)this.v.copy(t).applyAxisAngle(Xy,(Math.random()*2-1)*r*.6),this.v.multiplyScalar(n*.18/s*(.7+Math.random()*.6)),this.flames.spawn(e,this.v,(.4+Math.random()*.3)*c,.25+Math.random()*.1,2,2);for(let i=0;i<(a?2:+(Math.random()<.25));i++)this.v.copy(t).applyAxisAngle(Xy,(Math.random()*2-1)*r).multiplyScalar(n*.6),this.soot.spawn(this.w.copy(e).addScaledVector(t,n*.75),this.v,(1.4+Math.random()*.8)*c,.9+Math.random()*.4,4,2.5,.5);this.lights.add(this.w.copy(e).addScaledVector(t,5),.9),this.lights.add(this.w.copy(e).addScaledVector(t,n*.5).setY(e.y+1),1.1)}burn(e,t){eb(this.v).multiplyScalar(t*1.2),this.v.y=Math.abs(this.v.y)+t*3,this.w.copy(e).addScaledVector(eb(this.w2),t*.6),this.flames.spawn(this.w,this.v,t*(1+Math.random()*.6),.4+Math.random()*.15,4,2),this.lights.add(e,.5)}trail(e){eb(this.v).multiplyScalar(.8),this.smoke.spawn(e,this.v,.2+Math.random()*.16,.3+Math.random()*.25,Qy(Zy),1.2,2)}dust(e,t=1){this.rings.spawn(e,.5*t,3.5*t,.35,15661016,.7);for(let n=0;n<6;n++){let r=n/6*Math.PI*2+Math.random();this.v.set(Math.cos(r),.3,Math.sin(r)).multiplyScalar((4+Math.random()*3)*t),this.smoke.spawn(this.w.copy(e).setY(.4),this.v,(.35+Math.random()*.25)*t,.45+Math.random()*.2,15265496,1,5)}}};function eb(e){let t=Math.random()*2-1,n=Math.random()*Math.PI*2,r=Math.sqrt(1-t*t);return e.set(Math.cos(n)*r,t,Math.sin(n)*r)}var tb=null;function nb(){if(tb)return tb;let t=new Uint8Array(65536),n=7,r=()=>(n=n*16807%2147483647,n/2147483647),i=e=>e*e*(3-2*e);for(let e=0;e<2;e++){let n=new Float32Array(16384);for(let[e,t]of[[6,.5],[12,.3],[24,.2]]){let a=Float32Array.from({length:e*e},r);for(let r=0;r<128;r++){let o=r/128*e,s=Math.floor(o),c=i(o-s);for(let o=0;o<128;o++){let l=o/128*e,u=Math.floor(l),d=i(l-u),f=(t,n)=>a[n%e*e+t%e],p=f(u,s)+(f(u+1,s)-f(u,s))*d,m=f(u,s+1)+(f(u+1,s+1)-f(u,s+1))*d;n[r*128+o]+=(p+(m-p)*c)*t}}}let a=1,o=0;for(let e of n)a=Math.min(a,e),o=Math.max(o,e);for(let r=0;r<16384;r++)t[r*4+e]=Math.round((n[r]-a)/(o-a)*255)}for(let e=0;e<16384;e++)t[e*4+3]=255;return tb=new Di(t,128,128,w),tb.wrapS=tb.wrapT=e,tb.magFilter=o,tb.minFilter=c,tb.generateMipmaps=!0,tb.needsUpdate=!0,tb}function rb(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.35,`rgba(255,255,255,0.35)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Hi(e);return r.colorSpace=He,r}function ib(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.translate(32,32),t.fillStyle=`#ffffff`,t.beginPath();for(let e=0;e<8;e++){let n=e/8*Math.PI*2,r=e%2==0?30:8;t.lineTo(Math.cos(n)*r,Math.sin(n)*r)}t.closePath(),t.fill(),t.beginPath(),t.arc(0,0,10,0,Math.PI*2),t.fill();let n=new Hi(e);return n.colorSpace=He,n}var ab=e=>({hat:e,jacket:e,pants:e,shoes:e}),ob=.4,sb=6,cb=200,lb=4,ub=13,db=.09,fb=.28,pb=2.2,mb=2.4,hb=2.8,gb=2.6,_b={damage:1,splash:1},vb=1,yb={damage:2.5,splash:1.6,skill:`heavyshot`},bb=10,xb={damage:2,splash:1.7,skill:`compound`,quiet:!0},Sb={damage:.9,splash:.9,skill:`compound`},Cb=6,wb=1.6,Tb=2,Eb=.06,Db=70,Ob=8,kb=10,Ab=.25,jb=.45,Mb=[-9,-6,-3,0,3,6,9],Nb=2.6,Pb=3.5,Fb=.5,Ib=.22,Lb=.55,Rb=2.5,zb=1.6,Bb=class{arena=new Rh;rig=new ev;mech;vfx;enemies;boss;hud=new fy;input;level;save=Ey();rockets;weapon;armor;lv=1;boost=Mv(1);perks=Zv(1);skillWait=[0,0];charge=null;sweep=null;sweepEnd=new L;fireballs;bossFire;bolts;bossFireT=0;crackleT=0;later=[];lastHurt=-99;slowUntil=-99;repairAcc=0;phase=`title`;paused=!1;god=!1;autoplay=!1;autoPause=!0;hp=0;ammo=0;score=0;kills=0;shots=0;hits=0;clock=0;phaseT=0;now=0;cooldown=0;reloadT=0;buffered=null;hop=new Cy;stick=new I;autoMove=new I;moveVel=new L;dustT=0;waveIndex=-1;queue=[];spawnT=0;rng=cg(1);hintUntil=0;bossHinted=!1;autoT=0;lastShot=-99;robot=new L().copy(ld);offset=new L;v=new L;w=new L;bars=[];incoming=[];burning=new Map;spray=null;muzzlePos=new L;muzzleDir=new L;constructor(e){let t=this.arena.scene;this.weapon=cy[this.save.equipped],this.armor=ug[this.save.armor],this.level=sv.find(e=>e.id===this.save.stage&&this.stageOpen(e.id))??sv[0],this.applyLevel(),this.arena.setTheme(this.level.theme),this.mech=new Qm(ab(this.armor.set),this.weapon.model),this.hop.speed=this.armor.hopSpeed,this.mech.group.position.copy(ld),this.mech.followHop(this.hop,_d),t.add(this.mech.group),this.vfx=new $y(t),this.enemies=new xv(t,this.vfx,Vb(this.level),{attack:e=>this.chibiAttacks(e),shoot:e=>this.chibiShoots(e),death:e=>this.chibiPopped(e),bounce:e=>g_(1.2,.25*!!e.alive)}),this.boss=new J_(t,{landed:e=>{this.vfx.dust(e.center(this.v).setY(0),3.2),this.rig.shake(.7),i_()},stomp:e=>{this.vfx.dust(e.center(this.v).setY(0),1.6),this.rig.shake(.12)},volley:(e,t)=>this.bossVolley(t),escort:()=>this.spawnEscort(),blast:(e,t)=>{this.vfx.explode(e,t,[14165532,9049104,16761402,3817290]),Yg(t),this.rig.shake(Math.min(1,.25*t))},defeated:()=>this.bossDefeated()});let n=Mm(mf(this.level.gear.jacket)),r=Mm(mf(`galaxy`));for(let e of[n,r])Zd(e,Kd);this.rockets=new My(t,this.vfx,n,r,24,10),this.fireballs=new Tv(t,this.vfx),this.bossFire=new Tv(t,this.vfx,6,6),this.bolts=new Ag(t,this.vfx),this.input=new yy(e,{fire:(e,t)=>this.tap(e,t),dragStart:()=>{this.stick.set(0,0),this.hud.setDragging(!0)},drag:(e,t)=>{this.stick.set(e/db,-t/db),this.stick.length()>1&&this.stick.normalize()},dragEnd:()=>{this.stick.set(0,0),this.hud.setDragging(!1)},skill:e=>this.useSkill(e),shoot:()=>this.shootNearest()}),this.hud.onPause(()=>this.pause()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.fighting&&this.autoPause&&this.pause()}),zg(this.save.muted),this.hud.setWeapon(this.weapon,this.magazine),this.hud.onSkill(e=>this.useSkill(e)),this.toTitle(),this.mech.snap()}get maxHp(){return this.level.robotHp+this.armor.hp+this.boost.hp}get charLevel(){return Av(this.save.xp)}applyLevel(){this.lv=this.charLevel.level,this.boost=Mv(this.lv),this.perks=Zv(this.lv)}power(e){let t=this.hp>0&&this.hp<this.maxHp*.3;return e*this.boost.damage*this.perks.damage*(t?this.perks.lastStand:1)}skillRank(e){return Uv(Yv(e),this.lv)}skillPower(e){return Wv(this.skillRank(e))}skillCooldown(e){return e.cooldown*Gv(this.skillRank(e.id))*this.perks.cooldown}crit(){return Math.random()<this.perks.crit?2:1}get magazine(){return this.weapon.magazine+this.perks.magazine}get skills(){return qv[Jv(this.weapon.branch)].map((e,t)=>({def:e,unlocked:this.lv>=zv[t]}))}get fighting(){return this.phase===`intro`||this.phase===`wave`||this.phase===`break`||this.phase===`bossIntro`||this.phase===`boss`}get robotPos(){return this.robot}toTitle(){this.reset(),this.mech.setMood(`present`),this.hud.hideBanner(),this.phase=`title`,this.hud.showHud(!1),this.hud.hideResult();let e=sv.map(e=>({id:e.id,name:e.name,boss:e.boss.name,open:this.stageOpen(e.id),...Oy(this.save,e.id)}));this.hud.showTitle(e,this.level.id,this.charLevel,{weapon:this.weapon.name,armor:this.armor.name},this.save.coins,{play:()=>{Rg(),this.start()},stage:e=>this.selectStage(e),weapons:()=>this.openWeapons(()=>this.toTitle()),armor:()=>this.openArmor(()=>this.toTitle()),skills:()=>this.hud.showSkills(this.lv,Jv(this.weapon.branch),{close:()=>this.toTitle()})})}won(e){return Oy(this.save,e).stars>0}stageOpen(e){return cv(e,e=>this.won(e))}selectStage(e){let t=sv.find(t=>t.id===e);return!t||!this.stageOpen(e)?!1:(this.useStage(t),!0)}useStage(e){this.level=e,this.save.stage=e.id,Dy(this.save),this.enemies.ensure(Vb(e)),this.arena.setTheme(e.theme)}devStage(e){let t=sv.find(t=>t.id===e);t&&this.useStage(t)}equip(e){return this.save.owned.includes(e)?(this.save.equipped=e,Dy(this.save),this.weapon=cy[e],this.mech.setLauncher(this.weapon.model),this.hud.setWeapon(this.weapon,this.magazine),this.ammo=this.magazine,this.hud.setAmmo(this.ammo,0),!0):!1}buy(e){let t=cy[e],n=uy(e);return this.save.owned.includes(e)||n&&!this.save.owned.includes(n)||this.save.coins<t.cost?!1:(this.save.coins-=t.cost,this.save.owned.push(e),Dy(this.save),!0)}get coins(){return this.save.coins}devGive(e){this.save.owned.includes(e)||this.save.owned.push(e),Dy(this.save)}devXp(e){this.save.xp=Math.max(0,Math.floor(e)),this.applyLevel(),this.hud.setWeapon(this.weapon,this.magazine),Dy(this.save)}devCoins(e){this.save.coins=Math.max(0,Math.floor(e)),Dy(this.save)}openWeapons(e){this.hud.showWeapons(this.save,{buy:e=>this.buy(e),equip:e=>this.equip(e),close:e})}equipArmor(e){return this.save.armors.includes(e)?(this.save.armor=e,Dy(this.save),this.armor=ug[e],this.mech.setGear(ab(this.armor.set)),this.hop.speed=this.armor.hopSpeed,this.hp=this.maxHp,this.hud.setHp(this.hp,this.maxHp),!0):!1}buyArmor(e){let t=ug[e],n=fg(e);return this.save.armors.includes(e)||n&&!this.save.armors.includes(n)||this.save.coins<t.cost?!1:(this.save.coins-=t.cost,this.save.armors.push(e),Dy(this.save),!0)}devGiveArmor(e){this.save.armors.includes(e)||this.save.armors.push(e),Dy(this.save)}openArmor(e){this.hud.showArmor(this.save,this.weapon.model,{buy:e=>this.buyArmor(e),equip:e=>this.equipArmor(e),close:e})}start(){this.reset(),this.hud.hideTitle(),this.hud.hideResult(),this.hud.showHud(!0),this.setPhase(`intro`),this.hud.showBanner(`Stage ${this.level.id}`,this.level.name,`gold`,mb*1e3),this.input.enabled=!0}reset(){this.enemies.clear(),this.boss.hide(),this.rockets.clear(),this.vfx.clear(),this.hud.clearFloat(),this.hud.showBoss(null),this.hud.hint(null),this.input.reset(),this.input.enabled=!1,this.paused=!1,this.hp=this.maxHp,this.ammo=this.magazine,this.skillWait.fill(0),this.charge=null,this.sweep=null,this.later=[],this.mech.setCharge(0),this.fireballs.clear(),this.bossFire.clear(),this.lastHurt=-99,this.slowUntil=-99,this.repairAcc=0,this.score=this.kills=this.shots=this.hits=0,this.clock=0,this.cooldown=this.reloadT=0,this.buffered=null,this.hop.reset(),this.robot.copy(ld),this.moveVel.set(0,0,0),this.stick.set(0,0),this.autoMove.set(0,0),this.bolts.clear(),this.waveIndex=-1,this.queue=[],this.rng=cg(this.level.seed),this.bossHinted=!1,this.incoming.length=0,this.burning.clear(),this.spray=null,this.mech.setMood(`idle`),this.hud.setHp(this.hp,this.maxHp),this.hud.setScore(0),this.hud.setAmmo(this.ammo,0),this.hud.setWave(1,this.level.waves.length)}setPhase(e){this.phase=e,this.phaseT=0}resume(){this.paused=!1,document.getElementById(`pause`)?.classList.add(`hidden`)}pause(){this.fighting&&!this.paused&&(this.paused=!0,this.input.reset(),this.stick.set(0,0),this.hud.setDragging(!1),this.hud.showPause(Bg(),{resume:()=>{this.paused=!1},restart:()=>this.start(),quit:()=>this.toTitle(),mute:()=>(zg(!Bg()),this.save.muted=Bg(),Dy(this.save),Bg())}))}startWave(e){this.waveIndex=e;let t=this.level.waves[e];this.queue=[];for(let e of t.entries)for(let t=0;t<av(e.count);t++)this.queue.push({kind:e.kind,tier:e.tier??1});for(let e=this.queue.length-1;e>0;e--){let t=Math.floor(this.rng()*(e+1));[this.queue[e],this.queue[t]]=[this.queue[t],this.queue[e]]}this.spawnT=.6,this.setPhase(`wave`),this.hud.setWave(e+1,this.level.waves.length),this.hud.showBanner(`Wave ${e+1}`,e===this.level.waves.length-1?`Final wave!`:``,`normal`),t_(),t.hint&&this.showHint(t.hint,5)}showHint(e,t){this.hud.hint(e),this.hintUntil=this.now+t}bossDefeated(){this.phase===`boss`&&(this.score+=this.level.boss.score,this.kills++,this.hud.showBoss(null),this.win())}win(){this.setPhase(`victory`),this.input.enabled=!1,this.mech.setMood(`victory`),this.hud.showBanner(`Victory!`,``,`green`,gb*1e3),this.hud.hint(null),o_()}lose(){this.setPhase(`defeat`),this.input.enabled=!1,this.mech.setMood(`down`),this.hud.showBanner(`Defeated`,``,`red`,gb*1e3),this.hud.hint(null),m_()}showResults(){this.setPhase(`results`),this.hud.showHud(!1);let e=this.boss.state===`dead`,t=this.hp/this.maxHp,n=e?1+ +(t>=this.level.stars[0])+ +(t>=this.level.stars[1]):0,r=Oy(this.save,this.level.id),i=this.score>r.best,a=sv.find(e=>e.id===this.level.id+1),o=!a||this.stageOpen(a.id);this.save.levels[this.level.id]={best:Math.max(r.best,this.score),stars:Math.max(r.stars,n)};let s=Math.round(dy(this.score,n)*this.perks.coins);this.save.coins+=s;let c=Math.round(jv(this.score,n)*this.perks.xp),l=this.charLevel;this.save.xp+=c;let u=this.charLevel;this.applyLevel(),this.hud.setWeapon(this.weapon,this.magazine),Dy(this.save),u.level>l.level&&setTimeout(p_,1150),this.hud.showResult({won:e,stars:n,score:this.score,best:Math.max(r.best,this.score),newBest:i&&this.score>0,kills:this.kills,accuracy:this.shots?this.hits/this.shots:0,seconds:this.clock,coins:s,totalCoins:this.save.coins,xp:c,before:l,after:u,unlocked:Qv(l.level,u.level,Jv(this.weapon.branch)),stageUnlocked:a&&!o&&this.stageOpen(a.id)?a.id:0},{retry:()=>this.start(),next:e&&a?()=>{this.selectStage(a.id),this.start()}:null,weapons:()=>this.openWeapons(()=>this.toTitle()),armor:()=>this.openArmor(()=>this.toTitle())})}tap(e,t){if(!this.fighting||this.paused||this.busy)return;if(this.ammo<=0){e_(),this.hud.ammoEmpty();return}if(this.cooldown>0){this.buffered=[e,t];return}let n=this.pick(e,t);n&&this.fire(n.point,n.target)}shootNearest(e=!1){if(!this.fighting||this.paused||this.busy)return;if(this.ammo<=0){e||(e_(),this.hud.ammoEmpty());return}if(this.cooldown>0)return;let t=this.nearest(1)[0];t&&this.fire(t.center(new L),t)}pick(e,t){let n=this.rig.width,r=this.rig.height,i=this.rig.camera,a=r/(2*Math.tan(i.fov*ad/2)),o=null,s=1/0;for(let c of this.targets()){c.center(this.v);let l=this.rig.project(this.v,this.w);if(l.z>1)continue;let u=i.position.distanceTo(this.v),d=c.radius/u*a,f=Math.max(44,d*1.25),p=Math.hypot(l.x*n-e*n,l.y*r-t*r);if(p>f)continue;let m=p/f+this.v.distanceTo(this.robot)*.002;m<s&&(s=m,o=c)}if(o)return{point:o.center(new L),target:o};let c=this.rig.rayAt(e,t),l=c.direction.y<-.001?c.at(-c.origin.y/c.direction.y,new L).setY(.3):null,u=this.weapon.kind===`beam`;if(u){let e=l??c.at(cb,new L),t=this.w.set(e.x-this.robot.x,0,e.z-this.robot.z).normalize(),n=Ih(this.robot,t);if(!l||Math.hypot(l.x-this.robot.x,l.z-this.robot.z)>n){let e=c.direction.dot(t);if(e<.001)return null;let r=this.v.copy(this.robot).addScaledVector(t,n).sub(c.origin).dot(t)/e;l=c.at(r,new L),l.y=Nt.clamp(l.y,.3,40)}}if(!l)return null;let d=l.x-this.robot.x,f=l.z-this.robot.z,p=Math.hypot(d,f),m=sd(d,f);return p<4||p>60&&!u||m<wd||m>Td?null:{point:l,target:null}}*targets(){for(let e of this.enemies.all)e.alive&&(yield e);this.boss.alive&&(yield this.boss)}fire(e,t){this.mech.aimAt(e),this.mech.setMood(`aiming`);let n=this.weapon;n.kind===`beam`?this.fireBeam(e,t):n.kind===`flame`?this.fireFlame(e,t):this.fireRockets(e,t),this.ammo--,this.cooldown=n.cooldown,this.reloadT=ob,this.lastShot=this.now}fireRockets(e,t){let n=this.weapon.rockets??1,r=[];if(n>1){for(let e of this.targets())e!==t&&r.push(e);r.sort((t,n)=>t.center(this.v).distanceToSquared(e)-n.center(this.w).distanceToSquared(e))}for(let i=0;i<n;i++){let n=i===0?t:r[i-1]??null,a=n?n.center(new L):new L(e.x+(Math.random()-.5)*6,e.y,e.z+(Math.random()-.5)*6),o=this.mech.fire();this.rockets.firePlayer(o.pos,o.dir,a,n,e=>this.impact(e,n),this.weapon.rocketSize)&&(this.vfx.muzzle(o.pos,o.dir),this.shots++)}let i=this.mech.breech();this.vfx.backblast(i.pos,i.dir),Kg(),this.rig.shake(.14)}fireBeam(e,t){let n=this.weapon,r=this.mech.fire().pos,i=new L().subVectors(e,r),a=Math.max(i.length(),.01);i.divideScalar(a);let o=[];for(let e of this.targets()){let s=e.center(this.v).sub(r),c=Nt.clamp(s.dot(i),0,a),l=s.addScaledVector(i,-c).length();(e===t||l<=e.radius+(n.width??.4)*this.perks.wide)&&o.push({t:e,along:c})}o.sort((e,t)=>e.along-t.along);let s=n.pierce??1;o.length=Math.min(o.length,s);for(let{t:e}of o){let t=this.crit();this.hurtTarget(e,Math.round(this.power(n.damage)*t),2,this.v,t>1)}let c=o.length>=s&&o.length>0,l=c?r.clone().addScaledVector(i,o[o.length-1].along):e;this.vfx.beam(r,l,.18+(n.width??.4)*.35,n.color);for(let{t:e}of o)this.vfx.laserHit(e.center(this.v),n.color);!c&&!o.some(e=>e.t===t)&&this.vfx.laserHit(e,n.color),qg(1+n.tier*.08),this.rig.shake(.06),this.shots++,o.length&&this.hits++}fireFlame(e,t){let n=this.weapon,r=this.mech.fire();this.vfx.flame(r.pos,this.muzzleDir.set(e.x-r.pos.x,0,e.z-r.pos.z).normalize(),n.range??50,(n.cone??.25)*this.perks.wide);let i=n.sprayS??.6;this.spray={left:i,total:i,target:t,point:e.clone(),emit:.045,acc:0,hit:!1,skill:!1,range:n.range??50,cone:(n.cone??.25)*this.perks.wide,damage:this.power(n.damage),burn:this.power(n.burn??0),burnS:n.burnS??0},Jg(n.sprayS??.6),this.rig.shake(.08),this.shots++}updateSpray(e){let t=this.spray;if(!t)return;let n=this.weapon;if(!this.fighting||n.kind!==`flame`){this.spray=null;return}let{total:r,range:i,cone:a}=t;t.target?.alive&&t.target.center(t.point),this.mech.aimAt(t.point),this.mech.setMood(`aiming`),this.lastShot=this.now,this.mech.muzzle(this.muzzlePos,this.muzzleDir);let o=this.muzzlePos,s=this.muzzleDir.set(t.point.x-o.x,0,t.point.z-o.z).normalize();t.emit-=e,t.emit<=0&&(t.emit+=.045,this.vfx.flame(o,s,i,a,t.skill?12:6,!1));let c=Math.min(e,t.left);if(t.left-=e,t.acc+=c,t.acc>=.1||t.left<=0){let e=t.damage*t.acc/r;t.acc=0;for(let n of this.targets()){let r=n.center(this.v),c=r.x-o.x,l=r.z-o.z,u=Math.hypot(c,l);u-n.radius*.6>i||Math.acos(Nt.clamp((c*s.x+l*s.z)/(u||1),-1,1))>a+Math.atan2(n.radius,Math.max(u,1))||(this.scorch(n,e,t.burn,t.burnS),t.hit=!0)}}t.left<=0&&(t.hit&&!t.skill&&this.hits++,this.spray=null)}scorch(e,t,n,r){let i=this.burning.get(e);i?(i.due+=t,i.left=Math.max(i.left,r),i.dps=Math.max(i.dps,n)):this.burning.set(e,{left:r,dps:n,due:t,flicker:0})}hurtTarget(e,t,n,r,i=!1){let a=i?`-${t}!`:`-${t}`;if(e===this.boss){let e=this.boss.damage(t,this.now);return this.hud.setBoss(this.boss.hp/this.boss.maxHp),this.popAt(this.boss.center(r),a,i?`bonus`:`damage`),e}let o=e,s=o.damage(t,this.robot,n,this.now);return this.popAt(o.center(r),a,i?`bonus`:`damage`),Xg(__[o.kind].voice),s}burn(e){for(let[t,n]of this.burning){if(!t.alive||n.left<=0){this.burning.delete(t);continue}let r=Math.min(e,n.left);if(n.left-=e,n.due+=n.dps*r,n.flicker-=e,n.flicker<=0&&(n.flicker=.09,this.vfx.burn(t.center(this.v),Math.min(2.5,t.radius*.5))),n.due>=lb||n.left<=0&&n.due>=1){let e=Math.floor(n.due);n.due-=e,t===this.boss?(this.boss.damage(e,this.now),this.hud.setBoss(this.boss.hp/this.boss.maxHp)):t.damage(e,this.robot,0,this.now),this.popAt(t.center(this.v),`-${e}`,`damage`)}}}get busy(){return this.charge!==null||this.sweep!==null||this.spray?.skill===!0}useSkill(e){if(!this.fighting||this.paused||this.busy)return;let t=this.skills[e];!t?.unlocked||this.skillWait[e]>0||this.cast(t.def.id)&&(this.skillWait[e]=this.skillCooldown(t.def),this.lastShot=this.now,this.mech.setMood(`aiming`),this.hud.skillUsed(e),this.popAt(this.mech.chest(this.v).setY(7),`${t.def.name}!`,`bonus`),s_())}cast(e){let t=this.weapon;switch(e){case`heavyshot`:{let e=this.crowd((t.splash??6)*yb.splash);return e?(this.charge={left:vb,target:e,point:e.center(new L),fx:0,ring:0},this.mech.aimAt(this.charge.point),c_(vb),!0):!1}case`compound`:{let e=this.crowd(bb);if(!e)return!1;let t=e.center(new L).setY(.3),n=.75+t.distanceTo(this.robot)*.006;this.mech.aimAt(this.v.copy(t).setY(18));let r=this.mech.fire(13);if(!this.rockets.lob(`player`,r.pos,t,n,3.4,e=>this.compoundLands(e)))return!1;this.vfx.marks.spawn(t,bb,n,16753183),this.vfx.muzzle(r.pos,r.dir);let i=this.mech.breech();return this.vfx.backblast(i.pos,i.dir),Kg(),this.rig.shake(.3),!0}case`sweep`:{let e=[...this.targets()];if(!e.length)return!1;let t=0,n=Math.PI;for(let e of[.4,.55,.7])t=Math.max(t,this.screenHeading(0,e)??0),n=Math.min(n,this.screenHeading(1,e)??Math.PI);for(let r of e){let e=r.center(this.v),i=sd(e.x-this.robot.x,e.z-this.robot.z);t=Math.max(t,i+6*ad),n=Math.min(n,i-6*ad)}return t=Math.min(t,155*ad),n=Math.max(n,45*ad),this.sweep={t:0,from:t,to:n,prev:t,hit:new Set,beam:null,fx:0},u_(wb),this.rig.shake(.15),!0}case`chain`:{let e=[...this.targets()];if(!e.length)return!1;let n=[],r=this.w.copy(this.robot);for(;e.length;){let t=0,i=1/0;e.forEach((e,n)=>{let a=e.center(this.v).distanceToSquared(r);a<i&&(i=a,t=n)});let a=e.splice(t,1)[0];n.push(a),a.center(r)}this.mech.aimAt(n[0].center(this.v));let i=this.mech.fire().pos,a=(.18+(t.width??.4)*.35)*1.2;return n.forEach((e,n)=>this.after(n*Eb,()=>{let r=e.center(new L);if(this.vfx.beam(i,r,a,t.color),this.vfx.laserHit(r,t.color),e.alive){let n=this.crit();this.hurtTarget(e,Math.round(this.power(t.damage)*1.5*this.skillPower(`chain`)*n),2,this.v,n>1)}i.copy(r),qg(1.2+Math.min(n,10)*.04)})),this.rig.shake(.2),!0}case`fireball`:{let e=this.crowd(Ob,Db);if(!e)return!1;let t=e.center(new L).setY(.3),n=.6+t.distanceTo(this.robot)*.008;this.mech.aimAt(this.v.copy(t).setY(10));let r=this.mech.fire(12);return this.fireballs.throw(r.pos,t,n,e=>this.fireballLands(e))?(this.vfx.marks.spawn(t,Ob,n,16742938),this.vfx.flame(r.pos,this.muzzleDir.copy(r.dir).setY(0).normalize(),10,.35,12),d_(),this.rig.shake(.2),!0):!1}case`napalm`:{let e=this.nearest(1)[0];if(!e)return!1;let n=e.center(new L);this.mech.aimAt(n);let r=this.mech.fire(),i=(t.range??50)*1.3,a=Math.max(.3,(t.cone??.15)*2.2);return this.vfx.flame(r.pos,this.muzzleDir.set(n.x-r.pos.x,0,n.z-r.pos.z).normalize(),i,a),this.spray={left:1.2,total:1.2,target:e,point:n,emit:.045,acc:0,hit:!1,skill:!0,range:i,cone:a,damage:this.power(t.damage)*2.5*this.skillPower(`napalm`),burn:this.power(t.burn??0)*2*this.skillPower(`napalm`),burnS:(t.burnS??2)+1},Jg(1.2),this.rig.shake(.2),!0}}}running(e){switch(e){case`heavyshot`:return this.charge!==null;case`sweep`:return this.sweep!==null;case`fireball`:return this.fireballs.burning;case`napalm`:return this.spray?.skill===!0;default:return!1}}updateCharge(e){let t=this.charge;if(!t)return;if(!this.fighting){this.charge=null,this.mech.setCharge(0);return}let n=this.weapon;t.target?.alive||(t.target=this.crowd((n.splash??6)*yb.splash)),t.target?.center(t.point),this.mech.aimAt(t.point),this.mech.setMood(`aiming`),this.lastShot=this.now,t.left-=e;let r=Nt.clamp(1-t.left/vb,0,1);if(this.mech.setCharge(r),t.fx-=e,t.fx<=0&&(t.fx+=.03,this.mech.muzzle(this.muzzlePos,this.muzzleDir),this.vfx.charge(this.muzzlePos,r,n.color)),t.ring-=e,t.ring<=0&&(t.ring+=.3,this.vfx.rings.spawn(this.v.copy(this.robot).setY(.3),7,1.2,.3,n.color,.75)),t.left>0)return;this.charge=null,this.mech.setCharge(0);let i=t.target?.alive?t.target:null,a=this.mech.fire(16),o=this.rockets.firePlayer(a.pos,a.dir,t.point,i,e=>this.impact(e,i,yb));o&&(o.scale*=2.2),this.vfx.muzzle(a.pos,a.dir),this.vfx.flashes.spawn(a.pos,7,.22,16770976);let s=this.mech.breech();this.vfx.backblast(s.pos,s.dir),this.vfx.backblast(s.pos,s.dir),this.vfx.dust(this.robot,.8),Kg(),this.rig.shake(.5)}updateSweep(e){let t=this.sweep;if(!t)return;if(!this.fighting){this.sweep=null;return}let n=this.weapon;t.t=Math.min(wb,t.t+e);let r=t.from+(t.to-t.from)*(t.t/wb),i=od(r,this.w),a=this.sweepEnd.copy(this.robot).addScaledVector(i,Ih(this.robot,i)).setY(1.2);this.mech.aimAt(a),this.mech.setMood(`aiming`),this.lastShot=this.now,this.mech.muzzle(this.muzzlePos,this.muzzleDir),t.beam?this.vfx.beams.move(t.beam,this.muzzlePos,a):t.beam=this.vfx.beams.spawn(this.muzzlePos,a,(.18+(n.width??.4)*.35)*2.2,n.color,.2);let o=Math.min(t.prev,r),s=Math.max(t.prev,r);for(let e of this.targets()){if(t.hit.has(e))continue;let r=e.center(this.v),i=r.x-this.robot.x,a=r.z-this.robot.z,c=sd(i,a),l=Math.atan2(e.radius*.8,Math.max(1,Math.hypot(i,a)));if(c+l<o||c-l>s)continue;t.hit.add(e);let u=this.crit();this.hurtTarget(e,Math.round(this.power(n.damage)*Tb*this.skillPower(`sweep`)*u),2,this.v,u>1),this.vfx.laserHit(e.center(this.v),n.color)}t.prev=r,t.fx-=e,t.fx<=0&&(t.fx+=.06,this.vfx.flashes.spawn(this.muzzlePos,2.8,.1,n.color),this.vfx.flashes.spawn(a,8,.12,n.color)),t.t>=wb&&(this.sweep=null)}compoundLands(e){let t=e.clone().setY(.3);this.vfx.bigBoom(t,1),l_(),this.rig.shake(.9),this.impact(t,null,xb);let n=new Set;for(let e=0;e<Cb;e++)this.after(.15+e*.11,()=>{let e=null;for(let r of this.targets()){let i=r.center(this.v);if(!(n.has(r)||Math.hypot(i.x-t.x,i.z-t.z)>bb+r.radius)){n.add(r),e=i.clone();break}}if(!e){let n=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*bb*.85;e=new L(t.x+Math.cos(n)*r,.6,t.z+Math.sin(n)*r)}this.impact(e,null,Sb)})}fireballLands(e){let t=this.weapon,n=e.clone().setY(.3),r=this.skillPower(`fireball`);this.fireballs.burn(n,Ob,kb,this.power(t.burn??8)*2*r),this.vfx.explode(this.v.copy(n).setY(1),1.1,[16742938,16765503,3817290]),this.vfx.rings.spawn(n,1,Ob*1.3,.5,16742938,.9);for(let e=0;e<10;e++){let t=e/10*Math.PI*2;this.vfx.flame(this.v.copy(n).setY(.8),this.w.set(Math.cos(t),0,Math.sin(t)),Ob,.25,5,!1)}for(let e of[...this.targets()]){let i=e.center(this.v);if(Math.hypot(i.x-n.x,i.z-n.z)-e.radius*.6>Ob)continue;let a=this.crit();this.hurtTarget(e,Math.round(this.power(t.damage)*r*a),sb,this.v,a>1)}Yg(1.2),Jg(.8),this.rig.shake(.35)}updatePools(e){for(let t of this.fireballs.pools)if(t.active&&(t.tick-=e,!(t.tick>0))){t.tick+=Ab;for(let e of this.targets()){let n=e.center(this.v);Math.hypot(n.x-t.pos.x,n.z-t.pos.z)-e.radius*.6>t.radius||this.scorch(e,0,t.dps,Ab*3)}}this.fireballs.burning&&this.fighting&&(this.crackleT-=e,this.crackleT<=0&&(this.crackleT=.08+Math.random()*.25,f_()))}nearest(e){let t=[...this.targets()],n=e=>e.center(this.v).distanceToSquared(this.robot);return t.sort((e,t)=>n(e)-n(t)).slice(0,e)}crowd(e,t=1/0){let n=[...this.targets()].filter(e=>e.center(this.v).distanceTo(this.robot)<=t),r=null,i=-1,a=1/0;for(let t of n){let o=t.center(this.w),s=0;for(let r of n)r!==t&&r.center(this.v).distanceTo(o)<=e&&s++;let c=o.distanceTo(this.robot);(s>i||s===i&&c<a)&&(r=t,i=s,a=c)}return r}screenHeading(e,t){let n=this.rig.rayAt(e,t);if(n.direction.y>-.001)return null;let r=n.at(-n.origin.y/n.direction.y,this.v);return sd(r.x-this.robot.x,r.z-this.robot.z)}after(e,t){this.later.push({at:this.now+e,fn:t})}impact(e,t,n=_b){let r=this.weapon,i=(r.splash??6)*n.splash*this.perks.wide,a=this.crit(),o=n.skill?this.skillPower(n.skill):1,s=this.power(r.damage)*n.damage*o*a,c=this.power(r.edgeDamage??r.damage*.4)*n.damage*o*a,l=a>1?`bonus`:`damage`,u=a>1?`!`:``,d=0,f=0,p=[];for(let r of this.enemies.all){if(!r.alive)continue;let a=Math.max(0,r.center(this.v).distanceTo(e)-r.radius*.6);if(a>i&&r!==t)continue;let o=r===t?1:1-Nt.clamp((a-1.5)/(i-1.5),0,1),m=Math.round((c+(s-c)*o)*(r===t?1:r.stats.splashTaken)),h=r.damage(m,e,sb*(.4+.6*o)*n.splash,this.now);d++,this.popAt(r.center(this.v),`-${m}${u}`,l),Xg(__[r.kind].voice),h&&(f++,p=[__[r.kind].color,3817290])}if(this.boss.alive){let n=Math.max(0,this.boss.center(this.v).distanceTo(e)-this.boss.radius*.8);if(n<i||t===this.boss){let r=Math.round(t===this.boss||n<1.5?s:c+(s-c)*(1-n/i));this.boss.damage(r,this.now),d++,this.popAt(this.v.copy(e),`-${r}${u}`,l),this.hud.setBoss(this.boss.hp/this.boss.maxHp)}}if(d&&!n.skill&&this.hits++,f>=2){let t=f*50;this.score+=t,this.popAt(this.w.copy(e).setY(e.y+4),`MULTI ×${f} +${t}`,`bonus`)}n.quiet||(this.vfx.explode(e,Math.sqrt(i/6),p),Yg(n.splash),this.rig.shake(.1*n.splash*n.splash))}chibiPopped(e){let t=e.center(this.v);this.vfx.explode(t,.8,[__[e.kind].color,3817290,13226460]),Zg(__[e.kind].voice),this.score+=e.stats.score,this.kills++,this.popAt(t,`+${e.stats.score}`,`score`),this.perks.salvage>0&&this.fighting&&this.hp>0&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+this.perks.salvage),this.hud.setHp(this.hp,this.maxHp)),this.hintUntil>this.now&&this.phase===`wave`&&this.waveIndex===0&&(this.hintUntil=this.now+.8)}chibiShoots(e){let t=e.stats.ranged;if(!t||!this.fighting)return;let n=e.center(new L);n.y+=e.radius*.3;let r=this.mech.chest(new L);this.bolts.fire(n,r,t.speed,t.color,t.damage,t.size)&&qg(1.5+__[e.kind].voice*.3)}chibiAttacks(e){if(!this.fighting)return;let t=this.hurtRobot(e.stats.damage);t>0&&this.perks.thorns>0&&e.alive&&this.hurtTarget(e,Math.max(1,Math.round(t*this.perks.thorns)),1,this.w)}hurtRobot(e){return this.god||!this.fighting||this.boss.state===`dying`||this.boss.state===`dead`?0:Math.random()<this.armor.evade+this.perks.evade?(this.popAt(this.mech.chest(this.v).setY(6.2),`Dodge!`,`score`),a_(),0):(e=Math.max(1,Math.round(e*(1-this.armor.guard))),this.hp=Math.max(0,this.hp-e),this.lastHurt=this.now,this.mech.hurt(),this.hud.hurt(e),this.hud.setHp(this.hp,this.maxHp),this.popAt(this.mech.chest(this.v).setY(6.2),`-${e}`,`hurt`),Qg(),this.rig.shake(.3),navigator.userActivation?.hasBeenActive&&navigator.vibrate?.(30),this.hp<=0&&this.lose(),e)}bossVolley(e){let t=this.level.boss,n=this.boss.raging?t.rageVolleySize:t.volleySize,r=this.boss.volleys%2==1?t.alt??(t.pattern===`gap`?`scatter`:t.pattern):t.pattern,i=t=>e[t%e.length];switch(r){case`scatter`:case`fire`:case`ice`:for(let e=0;e<n;e++){let n=new L().copy(this.robot);if(e>0){let e=this.rng()*Math.PI*2,r=t.scatter*(.6+this.rng()*.8);n.x+=Math.cos(e)*r,n.z+=Math.sin(e)*r}n.y=.3,this.bossShot(i(e),n,t.rocketFlight+e*.14,r===`fire`?`fire`:r===`ice`?`ice`:`rocket`)}break;case`spiral`:{let e=this.rng()*Math.PI*2;for(let r=0;r<n;r++)this.after(r*Ib,()=>{if(!this.boss.alive||!this.fighting)return;let a=n>1?1-r/(n-1):0,o=e+r*1.3,s=t.scatter*1.4*a,c=new L(this.robot.x+Math.cos(o)*s,.3,this.robot.z+Math.sin(o)*s);this.bossShot(i(r),c,t.rocketFlight),r>0&&Kg()});break}case`line`:{let e=this.boss.center(this.w).sub(this.robot).setY(0).normalize().negate();for(let r=0;r<n;r++){let a=(r-(n-2))*3,o=new L(this.robot.x+e.x*a,.3,this.robot.z+e.z*a);this.bossShot(i(r),o,t.rocketFlight+r*.15)}break}case`stream`:for(let e=0;e<n;e++)this.after(e*jb,()=>{this.boss.alive&&this.fighting&&(this.bossShot(i(e),new L().copy(this.robot).setY(.3),t.rocketFlight),e>0&&Kg())});break;case`gap`:{let e=Math.floor(this.rng()*Mb.length);Mb.forEach((n,r)=>{r!==e&&this.bossShot(i(r),new L().copy(this.robot).addScaledVector(_d,n).setY(.3),t.rocketFlight)});break}}Kg(),r_(),!this.bossHinted&&t.hint&&(this.bossHinted=!0,this.showHint(t.hint,4),this.hud.pulseDragPad())}bossShot(e,t,n,r=`rocket`){let i=r===`fire`,a=e=>this.bossRocketLands(e,r);(i?!this.bossFire.throw(e,t,n,a):!this.rockets.fireBoss(e,t,n,a))||(this.incoming.push(t),this.vfx.marks.spawn(t,this.level.boss.blastRadius,n),this.vfx.muzzle(e,this.v.set(0,1,0)))}bossRocketLands(e,t=`rocket`){let n=this.incoming.findIndex(t=>t.distanceToSquared(e)<.01);n>=0&&this.incoming.splice(n,1);let r=t===`fire`?[16742938,16765503,3817290]:t===`ice`?[8374527,16777215,3137736]:[14165532,3817290];this.vfx.explode(e,1,r),Yg(1.3),this.rig.shake(.22),t===`fire`&&this.bossFire.burn(e,this.level.boss.firePool??Nb,Pb,0);let i=Math.hypot(e.x-this.robot.x,e.z-this.robot.z);t===`ice`&&i<this.level.boss.blastRadius*zb&&this.fighting&&this.boss.alive&&(this.now>=this.slowUntil&&this.popAt(this.mech.chest(this.v).setY(7.2),`Frozen!`,`hurt`),this.slowUntil=this.now+Rb),i<this.level.boss.blastRadius&&this.hurtRobot(this.level.boss.rocketDamage)}bossFireBurns(e){this.bossFire.burning&&this.fighting&&(this.bossFireT-=e,!(this.bossFireT>0)&&(this.bossFireT=Fb,this.inBossFire(this.robot)&&this.hurtRobot(this.level.boss.fireDamage??3)))}inBossFire(e,t=0){return this.bossFire.pools.some(n=>n.active&&Math.hypot(e.x-n.pos.x,e.z-n.pos.z)<n.radius+t)}spawnEscort(){let e=this.level.boss,t=0;for(let n of this.enemies.all)n.alive&&n.kind===e.escort&&t++;t>=e.maxEscorts||this.spawnChibi(e.escort,e.escortTier??1)}spawnChibi(e,t=1){let n=dd+this.rng()*(fd-dd),r=75+(this.rng()-.5)*8;return this.enemies.spawn(e,this.robot,n,r,22,t)!==null}tick(e){if(this.paused)return;this.now+=e,this.phaseT+=e,this.fighting&&(this.clock+=e),this.direct(e),this.autoplay&&this.fighting&&this.autoPlay(e),this.input.holdFire&&this.input.enabled&&this.shootNearest(!0);let t=this.input.keyX+this.stick.x+this.autoMove.x,n=this.input.keyY+this.stick.y+this.autoMove.y,r=Math.min(1,Math.hypot(t,n))/(Math.hypot(t,n)||1),i=this.fighting&&!this.paused?ub*this.armor.hopSpeed*(this.now<this.slowUntil?Lb:1):0;this.v.copy(_d).multiplyScalar(t*r*i).addScaledVector(vd,n*r*i),this.moveVel.lerp(this.v,1-Math.exp(-12*e)),this.robot.addScaledVector(this.moveVel,e),Sd(this.robot),this.mech.group.position.copy(this.robot).setY(0),this.offset.subVectors(this.robot,ld),this.rig.setFollow(this.offset);let a=this.moveVel.length();if(this.dustT-=e,a>5&&this.dustT<=0&&(this.dustT=fb,this.vfx.dust(this.robot,.25)),this.hop.update(e),this.cooldown=Math.max(0,this.cooldown-e),this.ammo<this.magazine&&(this.reloadT-=e,this.reloadT<=-this.weapon.reloadEach*this.perks.reload&&(this.ammo++,this.reloadT=0,$g())),this.buffered&&this.cooldown<=0){let[e,t]=this.buffered;this.buffered=null,this.tap(e,t)}if(this.fighting){for(let t=0;t<this.skillWait.length;t++)this.skillWait[t]=Math.max(0,this.skillWait[t]-e);if(this.perks.repair>0&&this.hp>0&&this.hp<this.maxHp&&this.now-this.lastHurt>3&&(this.repairAcc+=this.perks.repair*e,this.repairAcc>=1)){let e=Math.floor(this.repairAcc);this.repairAcc-=e,this.hp=Math.min(this.maxHp,this.hp+e),this.hud.setHp(this.hp,this.maxHp)}}if(this.fighting&&this.now-this.lastShot>2&&this.mech.setMood(`idle`),this.later.length){let e=this.later.filter(e=>e.at<=this.now);if(e.length){this.later=this.later.filter(e=>e.at>this.now);for(let t of e)t.fn()}}this.updateCharge(e),this.updateSweep(e),this.updateSpray(e),this.mech.animate(e),this.burn(e),this.enemies.update(e,this.robot,this.phase===`defeat`),this.boss.update(e,this.robot),this.rockets.update(e),this.fireballs.update(e),this.updatePools(e),this.bolts.update(e,this.mech.chest(this.w),e=>this.hurtRobot(e.damage)),this.bossFire.update(e),this.bossFireBurns(e),this.vfx.update(e),this.vfx.shadows.begin(),this.enemies.shadows(),this.boss.holder.visible&&this.vfx.shadows.add(this.boss.holder.position.x,this.boss.holder.position.z,this.boss.radius*.9),this.rockets.forEachActive(e=>this.vfx.shadows.add(e.obj.position.x,e.obj.position.z,.5*Math.max(.3,1-e.obj.position.y/30))),this.vfx.shadows.end(),this.rig.update(e),this.arena.update(this.robot),this.updateHud(e)}direct(e){let t=this.level;switch(this.phase){case`intro`:this.phaseT>=mb&&this.startWave(0);break;case`wave`:{let n=t.waves[this.waveIndex];if(this.spawnT-=e,this.queue.length&&this.spawnT<=0&&this.enemies.activeCount<ov(n.maxAlive)&&(this.spawnChibi(this.queue[0].kind,this.queue[0].tier)&&this.queue.shift(),this.spawnT=n.interval*iv.interval),!this.queue.length&&this.enemies.activeCount===0){if(this.waveIndex>=t.waves.length-1)this.setPhase(`bossIntro`),this.hud.showBanner(`Warning!`,`${t.boss.name} incoming`,`red`,hb*1e3),this.hud.setBossWave(),n_();else{this.setPhase(`break`);let e=Math.min(t.repair,this.maxHp-this.hp);this.hp+=e,this.ammo=this.magazine,this.hud.setHp(this.hp,this.maxHp),this.hud.showBanner(`Wave clear!`,e>0?`+${e} HP repaired`:``,`green`,t.breakS*1e3)}}break}case`break`:this.phaseT>=t.breakS&&this.startWave(this.waveIndex+1);break;case`bossIntro`:this.phaseT>=hb&&(this.setPhase(`boss`),this.boss.start(t.boss,this.robot),this.hud.showBoss(t.boss.name),this.hud.setBoss(1));break;case`victory`:case`defeat`:this.phaseT>=gb&&this.showResults()}this.hintUntil&&this.now>=this.hintUntil&&(this.hintUntil=0,this.hud.hint(null))}updateHud(e){this.hud.setScore(this.score);let t=this.ammo<this.magazine?Nt.clamp(-this.reloadT/(this.weapon.reloadEach*this.perks.reload),0,1):0;if(this.hud.setAmmo(this.ammo,t),this.hud.setSkills(this.skills.map((e,t)=>({id:e.def.id,name:e.def.name,unlock:e.unlocked?0:zv[t],rank:this.skillRank(e.def.id),wait:this.skillWait[t]/this.skillCooldown(e.def),active:this.running(e.def.id)}))),this.bars.length=0,this.fighting)for(let e of this.enemies.all){if(!e.alive||this.now-e.lastHit>pb)continue;this.v.copy(e.holder.position),this.v.y+=e.radius*1.15;let t=this.rig.project(this.v,this.w);t.z>1||this.bars.push({x:t.x*this.rig.width,y:t.y*this.rig.height,frac:e.hp/e.maxHp})}this.hud.update(e,this.bars)}popAt(e,t,n){let r=this.rig.project(e,this.w);if(r.z>1)return;let i=(Math.random()-.5)*24;this.hud.popText(r.x*this.rig.width+i,r.y*this.rig.height-20,t,n)}warmup(e,t){let n=[];this.arena.scene.traverse(e=>{e.visible||(e.visible=!0,n.push(e))});for(let e of this.enemies.all)e.model.flash();this.boss.model.flash(),e.compile(this.arena.scene,this.rig.camera);for(let e of this.enemies.all)e.model.reset();this.boss.model.reset(),e.compile(this.arena.scene,this.rig.camera),t?.();for(let e of n)e.visible=!1}devJump(e){this.fighting||this.start(),this.enemies.clear(),this.queue=[],e===`boss`?(this.waveIndex=this.level.waves.length-1,this.setPhase(`bossIntro`),this.phaseT=hb,this.hud.setBossWave()):this.startWave(e)}devSpawn(e,t,n=75,r=1){return this.enemies.spawn(e,this.robot,t*ad,n,22,r)}devKillAll(){for(let e of this.enemies.all)e.alive&&e.damage(999,this.robot,0,this.now)}devSidestep(e){this.robot.copy(ld).addScaledVector(_d,e),Sd(this.robot)}get sidestepNow(){return this.v.subVectors(this.robot,ld).dot(_d)}get waveNumber(){return this.waveIndex+1}autoPlay(e){this.autoT-=e;let t=e=>this.incoming.some(t=>Math.hypot(t.x-e.x,t.z-e.z)<this.level.boss.blastRadius+.8)||this.inBossFire(e,.6);if(this.autoMove.set(0,0),t(this.robot)){let e=null;for(let n=1;n<=3&&!e;n++)for(let r=0;r<12;r++){let i=r/12*Math.PI*2,a=Sd(this.w.copy(this.robot).addScaledVector(_d,Math.cos(i)*n*3).addScaledVector(vd,Math.sin(i)*n*3));if(!t(a)){e=a.clone();break}}e&&(e.sub(this.robot),this.autoMove.set(e.dot(_d),e.dot(vd)).normalize())}let n=this.nearest(3),r=n[0]?n[0].center(this.v).distanceTo(this.robot):1/0;if(this.skills.forEach(({def:e},t)=>{let i=e.id===`napalm`?this.weapon.range??50:e.id===`fireball`?Db:1/0;r<i&&(n.length>=3||this.boss.alive||i<1/0)&&this.useSkill(t)}),this.busy||this.autoT>0||this.ammo<=0||this.cooldown>0)return;let i=null,a=1/0,o=this.weapon.kind===`flame`?(this.weapon.range??50)*.9:1/0;for(let e of this.targets()){let t=e.center(this.v).distanceTo(this.robot);t<a&&t-e.radius<o&&(a=t,i=e)}i&&(this.autoT=.3,this.fire(i.center(new L),i))}};function Vb(e){let t={};for(let n of e.waves){let e={};for(let t of n.entries)e[t.kind]=(e[t.kind]??0)+av(t.count);for(let[r,i]of Object.entries(e))t[r]=Math.max(t[r]??0,Math.min(i,ov(n.maxAlive)))}return t[e.boss.escort]=Math.max(t[e.boss.escort]??0,e.boss.maxEscorts),t}var Hb=[2,1.5,1.25,1];async function Ub(){let e=document.getElementById(`scene`),t=new id({canvas:e,antialias:!0,powerPreference:`high-performance`}),n=Hb.findIndex(e=>e<=Math.min(window.devicePixelRatio,2));n<0&&(n=Hb.length-1),t.setPixelRatio(Math.min(window.devicePixelRatio,Hb[n])),t.shadowMap.enabled=!0,t.shadowMap.type=1,t.toneMapping=0,await Promise.race([document.fonts.load(`40px 'Lilita One'`),new Promise(e=>setTimeout(e,1500))]).catch(()=>{});let r=new Bb(e),i=new Eg(t);function a(){t.setSize(window.innerWidth,window.innerHeight,!1),i.setSize(),r.rig.resize(window.innerWidth,window.innerHeight)}window.addEventListener(`resize`,a),a(),r.warmup(t,()=>i.render(r.arena.scene,r.rig.camera,!0));let o=()=>{t.info.reset(),i.render(r.arena.scene,r.rig.camera)},s=0,c=performance.now();t.setAnimationLoop(e=>{let i=(e-c)/1e3,l=Math.min(.1,i);c=e,r.tick(l),o(),r.fighting&&!r.paused&&i<.25&&(s=i>.021?s+i:Math.max(0,s-i*.5),s>3&&n<Hb.length-1&&(n++,t.setPixelRatio(Math.min(window.devicePixelRatio,Hb[n])),a(),s=0))})}Ub();