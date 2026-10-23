(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,te=1030,O=1031,ne=1033,k=33776,re=33777,A=33778,ie=33779,j=35840,ae=35841,oe=35842,se=35843,ce=36196,le=37492,ue=37496,de=37488,M=37489,fe=37490,pe=37491,me=37808,he=37809,ge=37810,_e=37811,ve=37812,ye=37813,be=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,Oe=36492,ke=36494,Ae=36495,je=36283,Me=36284,Ne=36285,Pe=36286,Fe=2300,N=2301,Ie=2302,Le=2303,Re=2400,P=2401,ze=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=35048,Je=2e3;function Ye(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function nt(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function rt(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function it(...e){let t=e.join(` `);t in $e||($e[t]=!0,nt(...e))}function at(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ot={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},st=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ct=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),lt=1234567,ut=Math.PI/180,dt=180/Math.PI;function ft(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ct[e&255]+ct[e>>8&255]+ct[e>>16&255]+ct[e>>24&255]+`-`+ct[t&255]+ct[t>>8&255]+`-`+ct[t>>16&15|64]+ct[t>>24&255]+`-`+ct[n&63|128]+ct[n>>8&255]+`-`+ct[n>>16&255]+ct[n>>24&255]+ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]).toLowerCase()}function F(e,t,n){return Math.max(t,Math.min(n,e))}function pt(e,t){return(e%t+t)%t}function mt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ht(e,t,n){return e===t?0:(n-e)/(t-e)}function gt(e,t,n){return(1-n)*e+n*t}function _t(e,t,n,r){return gt(e,t,1-Math.exp(-n*r))}function vt(e,t=1){return t-Math.abs(pt(e,t*2)-t)}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function St(e,t){return e+Math.random()*(t-e)}function Ct(e){return e*(.5-Math.random())}function wt(e){e!==void 0&&(lt=e);let t=lt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tt(e){return e*ut}function Et(e){return e*dt}function Dt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ot(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function kt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function At(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:nt(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Nt={DEG2RAD:ut,RAD2DEG:dt,generateUUID:ft,clamp:F,euclideanModulo:pt,mapLinear:mt,inverseLerp:ht,lerp:gt,damp:_t,pingpong:vt,smoothstep:yt,smootherstep:bt,randInt:xt,randFloat:St,randFloatSpread:Ct,seededRandom:wt,degToRad:Tt,radToDeg:Et,isPowerOfTwo:Dt,ceilPowerOfTwo:Ot,floorPowerOfTwo:kt,setQuaternionFromProperEuler:At,normalize:Mt,denormalize:jt},I=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:nt(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(F(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(It.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(It.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ft.copy(this).projectOnVector(e),this.sub(Ft)}reflect(e){return this.sub(Ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ft=new L,It=new Pt,Lt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return it(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Rt.makeScale(e,t)),this}rotate(e){return it(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Rt.makeRotation(-e)),this}translate(e,t){return it(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Rt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rt=new Lt,zt=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bt=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ut(e.r),e.g=Ut(e.g),e.b=Ut(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return it(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return it(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:zt,fromXYZ:Bt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:zt,fromXYZ:Bt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var Ht=Vt();function Ut(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Wt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Gt,Kt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gt===void 0&&(Gt=Ze(`canvas`)),Gt.width=e.width,Gt.height=e.height;let t=Gt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Gt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ut(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ut(t[e]/255)*255):t[e]=Ut(t[e]);return{data:t,width:e.width,height:e.height}}return nt(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},qt=0,Jt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=ft(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Yt(r[t].image)):e.push(Yt(r[t]))}else e=Yt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Yt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Kt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(nt(`Texture: Unable to serialize Texture.`),{})}var Xt=0,Zt=new L,Qt=class r extends st{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=ft(),this.name=``,this.source=new Jt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zt).x}get height(){return this.source.getSize(Zt).y}get depth(){return this.source.getSize(Zt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?nt(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=300,Qt.DEFAULT_ANISOTROPY=1;var $t=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this.w=F(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this.w=F(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},en=class extends st{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let r=new Qt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Jt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},tn=class extends en{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nn=class extends Qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},rn=class extends Qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},an=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/on.setFromMatrixColumn(e,0).length(),i=1/on.setFromMatrixColumn(e,1).length(),a=1/on.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cn,e,ln)}lookAt(e,t,n){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),un.crossVectors(n,fn),un.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),un.crossVectors(n,fn)),un.normalize(),dn.crossVectors(fn,un),r[0]=un.x,r[4]=dn.x,r[8]=fn.x,r[1]=un.y,r[5]=dn.y,r[9]=fn.y,r[2]=un.z,r[6]=dn.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],k=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*te+c*re,i[4]=a*S+o*E+s*O+c*A,i[8]=a*C+o*D+s*ne+c*ie,i[12]=a*w+o*ee+s*k+c*j,i[1]=l*x+u*T+d*te+f*re,i[5]=l*S+u*E+d*O+f*A,i[9]=l*C+u*D+d*ne+f*ie,i[13]=l*w+u*ee+d*k+f*j,i[2]=p*x+m*T+h*te+g*re,i[6]=p*S+m*E+h*O+g*A,i[10]=p*C+m*D+h*ne+g*ie,i[14]=p*w+m*ee+h*k+g*j,i[3]=_*x+v*T+y*te+b*re,i[7]=_*S+v*E+y*O+b*A,i[11]=_*C+v*D+y*ne+b*ie,i[15]=_*w+v*ee+y*k+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=on.set(r[0],r[1],r[2]).length(),o=on.set(r[4],r[5],r[6]).length(),s=on.set(r[8],r[9],r[10]).length();i<0&&(a=-a),sn.copy(this);let c=1/a,l=1/o,u=1/s;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=l,sn.elements[5]*=l,sn.elements[6]*=l,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},on=new L,sn=new an,cn=new L(0,0,0),ln=new L(1,1,1),un=new L,dn=new L,fn=new L,pn=new an,mn=new Pt,hn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(F(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-F(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(F(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-F(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(F(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-F(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:nt(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mn.setFromEuler(this),this.setFromQuaternion(mn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER=`XYZ`;var gn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},_n=0,vn=new L,yn=new Pt,bn=new an,xn=new L,Sn=new L,Cn=new L,wn=new Pt,Tn=new L(1,0,0),En=new L(0,1,0),Dn=new L(0,0,1),On={type:`added`},kn={type:`removed`},An={type:`childadded`,child:null},jn={type:`childremoved`,child:null},Mn=class e extends st{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_n++}),this.uuid=ft(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new hn,r=new Pt,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new an},normalMatrix:{value:new Lt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(Tn,e)}rotateY(e){return this.rotateOnAxis(En,e)}rotateZ(e){return this.rotateOnAxis(Dn,e)}translateOnAxis(e,t){return vn.copy(e).applyQuaternion(this.quaternion),this.position.add(vn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tn,e)}translateY(e){return this.translateOnAxis(En,e)}translateZ(e){return this.translateOnAxis(Dn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xn.copy(e):xn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Sn,xn,this.up):bn.lookAt(xn,Sn,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),yn.setFromRotationMatrix(bn),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(rt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null):rt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,e,Cn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,wn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Mn.DEFAULT_UP=new L(0,1,0),Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var R=class extends Mn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Nn={type:`move`},Pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new R,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new R,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new R,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new R;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ln={h:0,s:0,l:0};function Rn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var zn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=pt(e,1),t=F(t,0,1),n=F(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Rn(i,r,e+1/3),this.g=Rn(i,r,e),this.b=Rn(i,r,e-1/3)}return Ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&nt(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:nt(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);nt(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Fn[e.toLowerCase()];return n===void 0?nt(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ut(e.r),this.g=Ut(e.g),this.b=Ut(e.b),this}copyLinearToSRGB(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return Ht.workingToColorSpace(Bn.copy(this),e),Math.round(F(Bn.r*255,0,255))*65536+Math.round(F(Bn.g*255,0,255))*256+Math.round(F(Bn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,r=Bn.g,i=Bn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ht.workingColorSpace){return Ht.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Ve){Ht.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,r=Bn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Ln);let n=gt(In.h,Ln.h,t),r=gt(In.s,Ln.s,t),i=gt(In.l,Ln.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new zn;zn.NAMES=Fn;var Vn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new zn(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hn=class extends Mn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new L,Wn=new L,Gn=new L,Kn=new L,qn=new L,Jn=new L,Yn=new L,Xn=new L,Zn=new L,Qn=new L,$n=new $t,er=new $t,tr=new $t,nr=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Un.subVectors(r,t),Wn.subVectors(n,t),Gn.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(Wn),s=Un.dot(Gn),c=Wn.dot(Wn),l=Wn.dot(Gn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)!==null&&Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Kn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Kn.x),s.addScaledVector(a,Kn.y),s.addScaledVector(o,Kn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return $n.setScalar(0),er.setScalar(0),tr.setScalar(0),$n.fromBufferAttribute(e,t),er.fromBufferAttribute(e,n),tr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($n,i.x),a.addScaledVector(er,i.y),a.addScaledVector(tr,i.z),a}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),Wn.subVectors(e,t),Un.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Un.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;qn.subVectors(r,n),Jn.subVectors(i,n),Xn.subVectors(e,n);let s=qn.dot(Xn),c=Jn.dot(Xn);if(s<=0&&c<=0)return t.copy(n);Zn.subVectors(e,r);let l=qn.dot(Zn),u=Jn.dot(Zn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(qn,a);Qn.subVectors(e,i);let f=qn.dot(Qn),p=Jn.dot(Qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Jn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Yn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Yn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(qn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ar):ar.fromBufferAttribute(r,t),ar.applyMatrix4(e.matrixWorld),this.expandByPoint(ar);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),mr.subVectors(this.max,pr),sr.subVectors(e.a,pr),cr.subVectors(e.b,pr),lr.subVectors(e.c,pr),ur.subVectors(cr,sr),dr.subVectors(lr,cr),fr.subVectors(sr,lr);let t=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-fr.z,fr.y,ur.z,0,-ur.x,dr.z,0,-dr.x,fr.z,0,-fr.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-fr.y,fr.x,0];return!_r(t,sr,cr,lr,mr)||(t=[1,0,0,0,1,0,0,0,1],!_r(t,sr,cr,lr,mr))?!1:(hr.crossVectors(ur,dr),t=[hr.x,hr.y,hr.z],_r(t,sr,cr,lr,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ir=[new L,new L,new L,new L,new L,new L,new L,new L],ar=new L,or=new rr,sr=new L,cr=new L,lr=new L,ur=new L,dr=new L,fr=new L,pr=new L,mr=new L,hr=new L,gr=new L;function _r(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){gr.fromArray(e,a);let o=i.x*Math.abs(gr.x)+i.y*Math.abs(gr.y)+i.z*Math.abs(gr.z),s=t.dot(gr),c=n.dot(gr),l=r.dot(gr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var vr=new L,yr=new I,br=0,xr=class extends st{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:br++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix4(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyNormalMatrix(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.transformDirection(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Sr=class extends xr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Cr=class extends xr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wr=class extends xr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tr=new rr,Er=new L,Dr=new L,Or=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Tr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Er,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Dr)),this.expandByPoint(Er.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kr=0,Ar=new an,jr=new Mn,Mr=new L,Nr=new rr,Pr=new rr,Fr=new L,Ir=class e extends st{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kr++}),this.uuid=ft(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ye(e)?Cr:Sr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Lt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ar.makeRotationFromQuaternion(e),this.applyMatrix4(Ar),this}rotateX(e){return Ar.makeRotationX(e),this.applyMatrix4(Ar),this}rotateY(e){return Ar.makeRotationY(e),this.applyMatrix4(Ar),this}rotateZ(e){return Ar.makeRotationZ(e),this.applyMatrix4(Ar),this}translate(e,t,n){return Ar.makeTranslation(e,t,n),this.applyMatrix4(Ar),this}scale(e,t,n){return Ar.makeScale(e,t,n),this.applyMatrix4(Ar),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new wr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&nt(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)rt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Nr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(this.boundingBox.min,Nr.min),this.boundingBox.expandByPoint(Fr),Fr.addVectors(this.boundingBox.max,Nr.max),this.boundingBox.expandByPoint(Fr)):(this.boundingBox.expandByPoint(Nr.min),this.boundingBox.expandByPoint(Nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)rt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);else if(e){let n=this.boundingSphere.center;if(Nr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(Nr.min,Pr.min),Nr.expandByPoint(Fr),Fr.addVectors(Nr.max,Pr.max),Nr.expandByPoint(Fr)):(Nr.expandByPoint(Pr.min),Nr.expandByPoint(Pr.max))}Nr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Fr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Fr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Fr.fromBufferAttribute(a,t),o&&(Mr.fromBufferAttribute(e,t),Fr.add(Mr)),r=Math.max(r,n.distanceToSquared(Fr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new xr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new I,f=new I,p=new I,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new xr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fr.fromBufferAttribute(e,t),Fr.normalize(),e.setXYZ(t,Fr.x,Fr.y,Fr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new xr(a,r,i)}if(this.index===null)return nt(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Rr=new L,zr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix4(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyNormalMatrix(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.transformDirection(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){et(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new xr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){et(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Br=new L,Vr=new L,Hr=new Lt,Ur=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Br.subVectors(n,t).cross(Vr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Br),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hr.getNormalMatrix(e),r=this.coplanarPoint(Br).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wr=0,Gr=class extends st{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wr++}),this.uuid=ft(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?nt(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new zn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ur().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new I().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new I().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Kr=class extends Gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new zn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qr,Jr=new L,Yr=new L,Xr=new L,Zr=new I,Qr=new I,$r=new an,ei=new L,ti=new L,ni=new L,ri=new I,ii=new I,ai=new I,oi=class extends Mn{constructor(e=new Kr){if(super(),this.isSprite=!0,this.type=`Sprite`,qr===void 0){qr=new Ir;let e=new Lr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute(`position`,new zr(e,3,0,!1)),qr.setAttribute(`uv`,new zr(e,2,3,!1))}this.geometry=qr,this.material=e,this.center=new I(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Yr.setFromMatrixScale(this.matrixWorld),$r.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Xr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;si(ei.set(-.5,-.5,0),Xr,a,Yr,r,i),si(ti.set(.5,-.5,0),Xr,a,Yr,r,i),si(ni.set(.5,.5,0),Xr,a,Yr,r,i),ri.set(0,0),ii.set(1,0),ai.set(1,1);let o=e.ray.intersectTriangle(ei,ti,ni,!1,Jr);if(o===null&&(si(ti.set(-.5,.5,0),Xr,a,Yr,r,i),ii.set(0,1),o=e.ray.intersectTriangle(ei,ni,ti,!1,Jr),o===null))return;let s=e.ray.origin.distanceTo(Jr);s<e.near||s>e.far||t.push({distance:s,point:Jr.clone(),uv:nr.getInterpolation(Jr,ei,ti,ni,ri,ii,ai,new I),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function si(e,t,n,r,i,a){Zr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Qr.copy(Zr):(Qr.x=a*Zr.x-i*Zr.y,Qr.y=i*Zr.x+a*Zr.y),e.copy(t),e.x+=Qr.x,e.y+=Qr.y,e.applyMatrix4($r)}var ci=new L,li=new L,ui=new L,di=new L,fi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){li.copy(e).add(t).multiplyScalar(.5),ui.copy(t).sub(e).normalize(),di.copy(this.origin).sub(li);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ui),o=di.dot(this.direction),s=-di.dot(ui),c=di.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(li).addScaledVector(ui,d),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),r=ci.dot(ci)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,te,O,ne,k,re;if(y>=b&&y>=x?(w=s,D=u,O=p,re=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,te=h,ne=_,k=v):(S=l,C=c,T=f,E=d,ee=h,te=m,ne=v,k=_)):b>=x?(w=c,D=d,O=m,re=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,te=p,ne=v,k=g):(S=s,C=l,T=u,E=f,ee=p,te=h,ne=g,k=v)):(w=l,D=f,O=h,re=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,te=m,ne=g,k=_):(S=c,C=s,T=d,E=u,ee=m,te=p,ne=_,k=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=ee-A*O,ce=te-ie*O,le=ne-A*re,ue=k-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*O+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pi=class extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new zn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mi=new an,hi=new fi,gi=new Or,_i=new L,vi=new L,yi=new L,bi=new L,xi=new L,Si=new L,Ci=new L,wi=new L,z=class extends Mn{constructor(e=new Ir,t=new pi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Si.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(xi.fromBufferAttribute(s,e),a?Si.addScaledVector(xi,r):Si.addScaledVector(xi.sub(t),r))}t.add(Si)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere),gi.applyMatrix4(i),hi.copy(e.ray).recast(e.near),!(gi.containsPoint(hi.origin)===!1&&(hi.intersectSphere(gi,_i)===null||hi.origin.distanceToSquared(_i)>(e.far-e.near)**2))&&(mi.copy(i).invert(),hi.copy(e.ray).applyMatrix4(mi),(n.boundingBox===null||hi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ei(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ei(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ei(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ei(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;wi.copy(s),wi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(wi);return l<n.near||l>n.far?null:{distance:l,point:wi.clone(),object:e}}function Ei(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,vi),e.getVertexPosition(c,yi),e.getVertexPosition(l,bi);let u=Ti(e,t,n,r,vi,yi,bi,Ci);if(u){let e=new L;nr.getBarycoord(Ci,vi,yi,bi,e),i&&(u.uv=nr.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=nr.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=nr.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};nr.getNormal(vi,yi,bi,t.normal),u.face=t,u.barycoord=e}return u}var Di=class extends Qt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Oi=class extends xr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ki=new an,Ai=new an,ji=[],Mi=new rr,Ni=new an,Pi=new z,Fi=new Or,Ii=class extends z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ni)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Mi.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Mi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Fi.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(n),e.ray.intersectsSphere(Fi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ki),Ai.multiplyMatrices(n,ki),Pi.matrixWorld=Ai,Pi.raycast(e,ji);for(let e=0,n=ji.length;e<n;e++){let n=ji[e];n.instanceId=i,n.object=this,t.push(n)}ji.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new Or,Ri=new I(.5,.5),zi=new L,Bi=class{constructor(e=new Ur,t=new Ur,n=new Ur,r=new Ur,i=new Ur,a=new Ur){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476+Ri.distanceTo(e.center),Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(zi.x=r.normal.x>0?e.max.x:e.min.x,zi.y=r.normal.y>0?e.max.y:e.min.y,zi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vi=class extends Qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hi=class extends Qt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ui=class extends Qt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wi=class extends Ui{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gi=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class e extends Ir{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new wr(c,3)),this.setAttribute(`normal`,new wr(l,3)),this.setAttribute(`uv`,new wr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qi=class e extends Ir{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new L,g=new L;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new wr(o,3)),this.setAttribute(`normal`,new wr(s,3)),this.setAttribute(`uv`,new wr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class e extends Ir{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new wr(a,3)),this.setAttribute(`normal`,new wr(o,3)),this.setAttribute(`uv`,new wr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},B=class e extends Ir{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new wr(u,3)),this.setAttribute(`normal`,new wr(d,3)),this.setAttribute(`uv`,new wr(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},V=class e extends B{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class e extends Ir{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new wr(i,3)),this.setAttribute(`normal`,new wr(i.slice(),3)),this.setAttribute(`uv`,new wr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new L,r=new L,i=new L;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new L;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new L;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new L,t=new L,n=new L,r=new L,o=new I,s=new I,c=new I;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Xi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new I:new L);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,r=[],i=[],a=[],o=new L,s=new an;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new L)}i[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(F(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(F(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends Xi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new I){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qi=class extends Zi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function $i(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ea=new L,ta=new L,na=new $i,ra=new $i,ia=new $i,aa=class extends Xi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ta.subVectors(r[0],r[1]).add(r[0]),c=ta);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ea.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ea),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),na.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ra.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ia.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(na.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ra.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ia.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(na.calc(s),ra.calc(s),ia.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function sa(e,t){let n=1-e;return n*n*t}function ca(e,t){return 2*(1-e)*e*t}function la(e,t){return e*e*t}function ua(e,t,n,r){return sa(e,t)+ca(e,n)+la(e,r)}function da(e,t){let n=1-e;return n*n*n*t}function fa(e,t){let n=1-e;return 3*n*n*e*t}function pa(e,t){return 3*(1-e)*e*e*t}function ma(e,t){return e*e*e*t}function ha(e,t,n,r,i){return da(e,t)+fa(e,n)+pa(e,r)+ma(e,i)}var ga=class extends Xi{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends Xi{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y),ha(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Xi{constructor(e=new I,t=new I){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Xi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Xi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Xi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y),ua(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new I){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(oa(o,s.x,c.x,l.x,u.x),oa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new I().fromArray(n))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:Qi,CatmullRomCurve3:aa,CubicBezierCurve:ga,CubicBezierCurve3:_a,EllipseCurve:Zi,LineCurve:va,LineCurve3:ya,QuadraticBezierCurve:ba,QuadraticBezierCurve3:xa,SplineCurve:Sa}),wa=class extends Xi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ca[n.type]().fromJSON(n))}return this}},Ta=class extends wa{constructor(e){super(),this.type=`Path`,this.currentPoint=new I,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new I(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ba(this.currentPoint.clone(),new I(e,t),new I(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ga(this.currentPoint.clone(),new I(e,t),new I(n,r),new I(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Sa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Zi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ea=class extends Ta{constructor(e){super(e),this.uuid=ft(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ta().fromJSON(n))}return this}};function Da(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Oa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Fa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Aa(a,o,n,s,c,l,0),o}function Oa(e,t,n,r,i){let a;if(i===ao(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=no(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=no(i/r|0,e[i],e[i+1],a);return a&&Ja(a,a.next)&&(ro(a),a=a.next),a}function ka(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ja(n,n.next)||qa(n.prev,n,n.next)===0)){if(ro(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Aa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ba(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ma(e,r,i,a):ja(e))t.push(c.i,e.i,l.i),ro(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Na(ka(e),t),Aa(e,t,n,r,i,a,2)):o===2&&Pa(e,t,n,r,i,a):Aa(ka(e),t,n,r,i,a,1);break}}}function ja(e){let t=e.prev,n=e,r=e.next;if(qa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ga(i,s,a,c,o,l,m.x,m.y)&&qa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ma(e,t,n,r){let i=e.prev,a=e,o=e.next;if(qa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ha(p,m,t,n,r),v=Ha(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ga(s,u,c,d,l,f,y.x,y.y)&&qa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ga(s,u,c,d,l,f,b.x,b.y)&&qa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ga(s,u,c,d,l,f,y.x,y.y)&&qa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ga(s,u,c,d,l,f,b.x,b.y)&&qa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Na(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ja(r,i)&&Ya(r,n,n.next,i)&&$a(r,i)&&$a(i,r)&&(t.push(r.i,n.i,i.i),ro(n),ro(n.next),n=e=i),n=n.next}while(n!==e);return ka(n)}function Pa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ka(o,e)){let s=to(o,e);o=ka(o,o.next),s=ka(s,s.next),Aa(o,t,n,r,i,a,0),Aa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Fa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Oa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ua(o))}i.sort(Ia);for(let e=0;e<i.length;e++)n=La(i[e],n);return n}function Ia(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function La(e,t){let n=Ra(e,t);if(!n)return t;let r=to(n,e);return ka(r,r.next),ka(n,n.next)}function Ra(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ja(e,n))return n;do{if(Ja(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Wa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);$a(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&za(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function za(e,t){return qa(e.prev,e,t.prev)<0&&qa(t.next,e,e.next)<0}function Ba(e,t,n,r){let i=e;do i.z===0&&(i.z=Ha(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Va(i)}function Va(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ha(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ua(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Wa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ga(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Wa(e,t,n,r,i,a,o,s)}function Ka(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Qa(e,t)&&($a(e,t)&&$a(t,e)&&eo(e,t)&&(qa(e.prev,e,t.prev)||qa(e,t.prev,t))||Ja(e,t)&&qa(e.prev,e,e.next)>0&&qa(t.prev,t,t.next)>0)}function qa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ja(e,t){return e.x===t.x&&e.y===t.y}function Ya(e,t,n,r){let i=Za(qa(e,t,n)),a=Za(qa(e,t,r)),o=Za(qa(n,r,e)),s=Za(qa(n,r,t));return!!(i!==a&&o!==s||i===0&&Xa(e,n,t)||a===0&&Xa(e,r,t)||o===0&&Xa(n,e,r)||s===0&&Xa(n,t,r))}function Xa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Za(e){return e>0?1:e<0?-1:0}function Qa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ya(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function $a(e,t){return qa(e.prev,e,e.next)<0?qa(e,t,e.next)>=0&&qa(e,e.prev,t)>=0:qa(e,t,e.prev)<0||qa(e,e.next,t)<0}function eo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function to(e,t){let n=io(e.i,e.x,e.y),r=io(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function no(e,t,n,r){let i=io(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ro(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function io(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ao(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var oo=class{static triangulate(e,t,n=2){return Da(e,t,n)}},so=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];co(e),lo(n,e);let a=e.length;t.forEach(co);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,lo(n,t[e]);let o=oo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function co(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function lo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var uo=class e extends Ir{constructor(e=new Ea([new I(.5,.5),new I(-.5,.5),new I(-.5,-.5),new I(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new wr(r,3)),this.setAttribute(`uv`,new wr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?fo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new L,b=new L,x=new L}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!so.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];so.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||rt(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let te=C.length;function O(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new I(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new I(r/a,i/a)}let ne=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ne[e]=O(D[e],D[n],D[r]);let k=[],re,A=ne.concat();for(let e=0,t=E;e<t;e++){let t=w[e];re=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),re[e]=O(t[e],t[r],t[i]);k.push(re),A=A.concat(re)}let ie;if(p===0)ie=so.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=ee(D[t],ne[t],a);le(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];re=k[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=ee(n[e],re[e],a);le(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ie=so.triangulateShape(e,t)}let j=ie.length,ae=d+f;for(let e=0;e<te;e++){let t=l?ee(C[e],A[e],ae):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),le(x.x,x.y,x.z)):le(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<te;t++){let n=l?ee(C[t],A[t],ae):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),le(x.x,x.y,x.z)):le(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=ee(D[e],ne[e],r);le(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];re=k[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],re[e],r);_?le(i.x,i.y+g[s-1].y,g[s-1].x+n):le(i.x,i.y,c+n)}}}oe(),se();function oe(){let e=r.length/3;if(l){let e=0,t=te*e;for(let e=0;e<j;e++){let n=ie[e];ue(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=te*e;for(let e=0;e<j;e++){let n=ie[e];ue(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<j;e++){let t=ie[e];ue(t[2],t[1],t[0])}for(let e=0;e<j;e++){let t=ie[e];ue(t[0]+te*s,t[1]+te*s,t[2]+te*s)}}n.addGroup(e,r.length/3-e,0)}function se(){let e=r.length/3,t=0;ce(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ce(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ce(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=te*e,a=te*(e+1);de(t+r+n,t+i+n,t+i+a,t+r+a)}}}function le(e,t,n){a.push(e),a.push(t),a.push(n)}function ue(e,t,i){M(e),M(t),M(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);fe(o[0]),fe(o[1]),fe(o[2])}function de(e,t,i,a){M(e),M(t),M(a),M(t),M(i),M(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);fe(s[0]),fe(s[1]),fe(s[3]),fe(s[1]),fe(s[2]),fe(s[3])}function M(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function fe(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return po(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ca[i.type]().fromJSON(i)),new e(r,t.options)}},fo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new I(a,o),new I(s,c),new I(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new I(o,1-c),new I(l,1-d),new I(f,1-m),new I(h,1-_)]:[new I(s,1-c),new I(u,1-d),new I(p,1-m),new I(g,1-_)]}};function po(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var mo=class e extends Yi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ho=class e extends Ir{constructor(e=[new I(0,-.5),new I(.5,0),new I(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=F(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new L,d=new I,f=new L,p=new L,m=new L,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new wr(a,3)),this.setAttribute(`uv`,new wr(o,2)),this.setAttribute(`normal`,new wr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},go=class e extends Yi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},_o=class e extends Ir{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},vo=class e extends Ir{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new wr(s,3)),this.setAttribute(`normal`,new wr(c,3)),this.setAttribute(`uv`,new wr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},H=class e extends Ir{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},U=class e extends Ir{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new L,f=new L,p=new L;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new wr(c,3)),this.setAttribute(`normal`,new wr(l,3)),this.setAttribute(`uv`,new wr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},yo=class e extends Ir{constructor(e=new xa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,s=new L,c=new I,l=new L,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new wr(u,3)),this.setAttribute(`normal`,new wr(d,3)),this.setAttribute(`uv`,new wr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(So(i))i.isRenderTargetTexture?(nt(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(So(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function xo(e){let t={};for(let n=0;n<e.length;n++){let r=bo(e[n]);for(let e in r)t[e]=r[e]}return t}function So(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Co(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function wo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var To={clone:bo,merge:xo},Eo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Do=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oo=class extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eo,this.fragmentShader=Do,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=Co(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new zn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new $t().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Lt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new an().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ko=class extends Oo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ao=class extends Gr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new zn(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jo=class extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mo=class extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function No(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Po(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Fo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Io=class extends Fo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case P:i=e,o=2*t-n;break;case ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case P:a=e,s=2*n-t;break;case ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Lo=class extends Fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ro=class extends Fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zo=class extends Fo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ho(n,t,g,y,r);i[p]=Bo(x,o,_,b,m)}return i}};function Bo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Vo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ho(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Bo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Vo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Uo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Po(e.settings)&&(n.settings={inTangents:No(e.settings.inTangents,Array),outTangents:No(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case N:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return nt(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return N;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Po(this.settings)&&(Wo(this.settings.inTangents,e),Wo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(rt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){rt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){rt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){rt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Po(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Wo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Uo.prototype.ValueTypeName=``,Uo.prototype.TimeBufferType=Float32Array,Uo.prototype.ValueBufferType=Float32Array,Uo.prototype.DefaultInterpolation=N;var Go=class extends Uo{constructor(e,t,n){super(e,t,n)}};Go.prototype.ValueTypeName=`bool`,Go.prototype.ValueBufferType=Array,Go.prototype.DefaultInterpolation=Fe,Go.prototype.InterpolantFactoryMethodLinear=void 0,Go.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName=`color`;var qo=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}};qo.prototype.ValueTypeName=`number`;var Jo=class extends Fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Yo=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}};Yo.prototype.ValueTypeName=`quaternion`,Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Uo{constructor(e,t,n){super(e,t,n)}};Xo.prototype.ValueTypeName=`string`,Xo.prototype.ValueBufferType=Array,Xo.prototype.DefaultInterpolation=Fe,Xo.prototype.InterpolantFactoryMethodLinear=void 0,Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}};Zo.prototype.ValueTypeName=`vector`;var Qo=class extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new zn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$o=class extends Qo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},es=new an,ts=new L,ns=new L,rs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ts.setFromMatrixPosition(e.matrixWorld),t.position.copy(ts),ns.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ns),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){es.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(es,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},is=new L,as=new Pt,os=new L,ss=class extends Mn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(is,as,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,as,os.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(is,as,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,as,os.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new L,ls=new I,us=new I,ds=class extends ss{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ut*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dt*2*Math.atan(Math.tan(ut*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,ls,us),t.subVectors(us,ls)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ut*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fs=class extends ss{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ps=class extends rs{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new ps}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},hs=-90,gs=1,_s=class extends Mn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ds(hs,gs,e,t);r.layers=this.layers,this.add(r);let i=new ds(hs,gs,e,t);i.layers=this.layers,this.add(i);let a=new ds(hs,gs,e,t);a.layers=this.layers,this.add(a);let o=new ds(hs,gs,e,t);o.layers=this.layers,this.add(o);let s=new ds(hs,gs,e,t);s.layers=this.layers,this.add(s);let c=new ds(hs,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},vs=class extends ds{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ys=`\\[\\]\\.:\\/`,bs=RegExp(`[\\[\\]\\.:\\/]`,`g`),xs=`[^\\[\\]\\.:\\/]`,Ss=`[^`+ys.replace(`\\.`,``)+`]`,Cs=`((?:WC+[\\/:])*)`.replace(`WC`,xs),ws=`(WCOD+)?`.replace(`WCOD`,Ss),Ts=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,xs),Es=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,xs),Ds=RegExp(`^`+Cs+ws+Ts+Es+`$`),Os=[`material`,`materials`,`bones`,`map`],ks=class{constructor(e,t,n){let r=n||As.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},As=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(bs,``)}static parseTrackName(e){let t=Ds.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Os.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){nt(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){rt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){rt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){rt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){rt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){rt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){rt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){rt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;rt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){rt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){rt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};As.Composite=ks,As.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},As.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},As.prototype.GetterByBindingType=[As.prototype._getValue_direct,As.prototype._getValue_array,As.prototype._getValue_arrayElement,As.prototype._getValue_toArray],As.prototype.SetterByBindingTypeAndVersioning=[[As.prototype._setValue_direct,As.prototype._setValue_direct_setNeedsUpdate,As.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[As.prototype._setValue_array,As.prototype._setValue_array_setNeedsUpdate,As.prototype._setValue_array_setMatrixWorldNeedsUpdate],[As.prototype._setValue_arrayElement,As.prototype._setValue_arrayElement_setNeedsUpdate,As.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[As.prototype._setValue_fromArray,As.prototype._setValue_fromArray_setNeedsUpdate,As.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function js(e,t,n,r){let i=Ms(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case k:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case A:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:case se:return Math.max(e,16)*Math.max(t,8)/4;case j:case oe:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:case de:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oe:case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ms(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?nt(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ns(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ps(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Fs={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},W={common:{diffuse:{value:new zn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new zn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new zn(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Is={basic:{uniforms:xo([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:Fs.meshbasic_vert,fragmentShader:Fs.meshbasic_frag},lambert:{uniforms:xo([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new zn(0)},envMapIntensity:{value:1}}]),vertexShader:Fs.meshlambert_vert,fragmentShader:Fs.meshlambert_frag},phong:{uniforms:xo([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new zn(0)},specular:{value:new zn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fs.meshphong_vert,fragmentShader:Fs.meshphong_frag},standard:{uniforms:xo([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new zn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fs.meshphysical_vert,fragmentShader:Fs.meshphysical_frag},toon:{uniforms:xo([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new zn(0)}}]),vertexShader:Fs.meshtoon_vert,fragmentShader:Fs.meshtoon_frag},matcap:{uniforms:xo([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:Fs.meshmatcap_vert,fragmentShader:Fs.meshmatcap_frag},points:{uniforms:xo([W.points,W.fog]),vertexShader:Fs.points_vert,fragmentShader:Fs.points_frag},dashed:{uniforms:xo([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fs.linedashed_vert,fragmentShader:Fs.linedashed_frag},depth:{uniforms:xo([W.common,W.displacementmap]),vertexShader:Fs.depth_vert,fragmentShader:Fs.depth_frag},normal:{uniforms:xo([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:Fs.meshnormal_vert,fragmentShader:Fs.meshnormal_frag},sprite:{uniforms:xo([W.sprite,W.fog]),vertexShader:Fs.sprite_vert,fragmentShader:Fs.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fs.background_vert,fragmentShader:Fs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Fs.backgroundCube_vert,fragmentShader:Fs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fs.cube_vert,fragmentShader:Fs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fs.equirect_vert,fragmentShader:Fs.equirect_frag},distance:{uniforms:xo([W.common,W.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fs.distance_vert,fragmentShader:Fs.distance_frag},shadow:{uniforms:xo([W.lights,W.fog,{color:{value:new zn(0)},opacity:{value:1}}]),vertexShader:Fs.shadow_vert,fragmentShader:Fs.shadow_frag}};Is.physical={uniforms:xo([Is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new zn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new zn(0)},specularColor:{value:new zn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Fs.meshphysical_vert,fragmentShader:Fs.meshphysical_frag};var Ls={r:0,b:0,g:0},Rs=new an,zs=new Lt;zs.set(-1,0,0,0,1,0,0,0,1);function Bs(e,t,n,r,i,a){let o=new zn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new z(new Ki(1,1,1),new Oo({name:`BackgroundCubeMaterial`,uniforms:bo(Is.backgroundCube.uniforms),vertexShader:Is.backgroundCube.vertexShader,fragmentShader:Is.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zs),l.material.toneMapped=Ht.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new z(new _o(2,2),new Oo({name:`BackgroundMaterial`,uniforms:bo(Is.background.uniforms),vertexShader:Is.background.vertexShader,fragmentShader:Is.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ls,wo(e)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Vs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Hs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Us(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(nt(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&nt(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ws(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ur,s=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Gs=4,Ks=6,qs=20,Js=256,Ys=new fs,Xs=new zn,Zs=null,Qs=0,$s=0,ec=!1,tc=new L,nc=new L,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=tc}=i;Zs=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs,Qs,$s),this._renderer.xr.enabled=ec,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:He,depthBuffer:!1},r=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ic(r)),this._blurMaterial=cc(r,e,t),this._ggxMaterial=sc(r,e,t)}return r}_compileMaterial(e){let t=new z(new Ir,e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,r,i){let a=new ds(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Xs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new Ki,new pi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Xs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;oc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;oc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ys)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Gs?n-d+Gs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,oc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ys),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,oc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ys)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];oc(t,3*l*(r>this._lodMax-Gs?r-this._lodMax+Gs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ys)}};function ic(e){let t=[],n=[],r=e,i=e-Gs+1+Ks;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?nc.set(1,r,n):e===1?nc.set(-n,1,-r):e===2?nc.set(-n,r,1):e===3?nc.set(-1,r,-n):e===4?nc.set(-n,-1,r):nc.set(n,r,-1),nc.toArray(l,(e*6+t)*3)}}let u=new Ir;u.setAttribute(`position`,new xr(c,3)),u.setAttribute(`outputDirection`,new xr(l,3)),n.push(new z(u,null)),r>Gs&&r--}return{lodMeshes:n,sizeLods:t}}function ac(e,t,n){let r=new tn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function oc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function sc(e,t,n){return new Oo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(e,t,n){return new Oo({name:`SphericalGaussianBlur`,defines:{SAMPLES:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function lc(){return new Oo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function uc(){return new Oo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fc=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),i=new Oo({name:`CubemapFromEquirect`,uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new z(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new _s(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function pc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new fc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new rc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new rc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function mc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&it(`WebGLRenderer: `+e+` extension not supported.`),t}}}function hc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Cr:Sr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function gc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function _c(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:rt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function vc(e,t,n){let r=new WeakMap,i=new $t;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new nn(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new I(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function yc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var bc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function xc(e,t,n,r,i,a){let o=new tn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ir;l.setAttribute(`position`,new wr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new wr([0,2,0,0,2,0],2));let u=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new z(l,u),f=new fs(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new tn(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new tn(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ht.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=bc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Sc=new Qt,Cc=new Ui(1,1),wc=new nn,Tc=new rn,Ec=new Vi,Dc=[],Oc=[],kc=new Float32Array(16),Ac=new Float32Array(9),jc=new Float32Array(4);function Mc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Dc[i];if(a===void 0&&(a=new Float32Array(i),Dc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Nc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Pc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Fc(e,t){let n=Oc[t];n===void 0&&(n=new Int32Array(t),Oc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nc(n,t))return;e.uniform2fv(this.addr,t),Pc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nc(n,t))return;e.uniform3fv(this.addr,t),Pc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nc(n,t))return;e.uniform4fv(this.addr,t),Pc(n,t)}}function Bc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pc(n,t)}else{if(Nc(n,r))return;jc.set(r),e.uniformMatrix2fv(this.addr,!1,jc),Pc(n,r)}}function Vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pc(n,t)}else{if(Nc(n,r))return;Ac.set(r),e.uniformMatrix3fv(this.addr,!1,Ac),Pc(n,r)}}function Hc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pc(n,t)}else{if(Nc(n,r))return;kc.set(r),e.uniformMatrix4fv(this.addr,!1,kc),Pc(n,r)}}function Uc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nc(n,t))return;e.uniform2iv(this.addr,t),Pc(n,t)}}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nc(n,t))return;e.uniform3iv(this.addr,t),Pc(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nc(n,t))return;e.uniform4iv(this.addr,t),Pc(n,t)}}function qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nc(n,t))return;e.uniform2uiv(this.addr,t),Pc(n,t)}}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nc(n,t))return;e.uniform3uiv(this.addr,t),Pc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nc(n,t))return;e.uniform4uiv(this.addr,t),Pc(n,t)}}function Zc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Cc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Cc):a=Sc,n.setTexture2D(t||a,i)}function Qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Tc,i)}function $c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ec,i)}function el(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||wc,i)}function tl(e){switch(e){case 5126:return Ic;case 35664:return Lc;case 35665:return Rc;case 35666:return zc;case 35674:return Bc;case 35675:return Vc;case 35676:return Hc;case 5124:case 35670:return Uc;case 35667:case 35671:return Wc;case 35668:case 35672:return Gc;case 35669:case 35673:return Kc;case 5125:return qc;case 36294:return Jc;case 36295:return Yc;case 36296:return Xc;case 35678:case 36198:case 36298:case 36306:case 35682:return Zc;case 35679:case 36299:case 36307:return Qc;case 35680:case 36300:case 36308:case 36293:return $c;case 36289:case 36303:case 36311:case 36292:return el}}function nl(e,t){e.uniform1fv(this.addr,t)}function rl(e,t){let n=Mc(t,this.size,2);e.uniform2fv(this.addr,n)}function il(e,t){let n=Mc(t,this.size,3);e.uniform3fv(this.addr,n)}function al(e,t){let n=Mc(t,this.size,4);e.uniform4fv(this.addr,n)}function ol(e,t){let n=Mc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sl(e,t){let n=Mc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function cl(e,t){let n=Mc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ll(e,t){e.uniform1iv(this.addr,t)}function ul(e,t){e.uniform2iv(this.addr,t)}function dl(e,t){e.uniform3iv(this.addr,t)}function fl(e,t){e.uniform4iv(this.addr,t)}function pl(e,t){e.uniform1uiv(this.addr,t)}function ml(e,t){e.uniform2uiv(this.addr,t)}function hl(e,t){e.uniform3uiv(this.addr,t)}function gl(e,t){e.uniform4uiv(this.addr,t)}function _l(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Cc:Sc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function vl(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Tc,a[e])}function yl(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ec,a[e])}function bl(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||wc,a[e])}function xl(e){switch(e){case 5126:return nl;case 35664:return rl;case 35665:return il;case 35666:return al;case 35674:return ol;case 35675:return sl;case 35676:return cl;case 5124:case 35670:return ll;case 35667:case 35671:return ul;case 35668:case 35672:return dl;case 35669:case 35673:return fl;case 5125:return pl;case 36294:return ml;case 36295:return hl;case 36296:return gl;case 35678:case 36198:case 36298:case 36306:case 35682:return _l;case 35679:case 36299:case 36307:return vl;case 35680:case 36300:case 36308:case 36293:return yl;case 36289:case 36303:case 36311:case 36292:return bl}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tl(t.type)}},Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xl(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function El(e,t){e.seq.push(t),e.map[t.id]=t}function Dl(e,t,n){let r=e.name,i=r.length;for(Tl.lastIndex=0;;){let a=Tl.exec(r),o=Tl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){El(n,l===void 0?new Sl(s,e,t):new Cl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new wl(s),El(n,e)),n=e}}}var Ol=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Dl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function kl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Al=37297,jl=0;function Ml(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Nl=new Lt;function Pl(e){Ht._getMatrix(Nl,Ht.workingColorSpace,e);let t=`mat3( ${Nl.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return nt(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Fl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ml(e.getShaderSource(t),r)}return i}function Il(e,t){let n=Pl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ll={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Rl(e,t){let n=Ll[t];return n===void 0?(nt(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var zl=new L;function Bl(){return Ht.getLuminanceCoefficients(zl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${zl.x.toFixed(4)}, ${zl.y.toFixed(4)}, ${zl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Vl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Wl).join(`
`)}function Hl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ul(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Wl(e){return e!==``}function Gl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ql=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(e){return e.replace(ql,Xl)}var Yl=new Map;function Xl(e,t){let n=Fs[t];if(n===void 0){let e=Yl.get(t);if(e!==void 0)n=Fs[e],nt(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Jl(n)}var Zl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(e){return e.replace(Zl,$l)}function $l(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function eu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var tu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function nu(e){return tu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ru={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function iu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ru[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var au={302:`ENVMAP_MODE_REFRACTION`};function ou(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:au[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var su={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function cu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:su[e.combine]||`ENVMAP_BLENDING_NONE`}function lu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function uu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=nu(n),l=iu(n),u=ou(n),d=cu(n),f=lu(n),p=Vl(n),m=Hl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wl).join(`
`),_.length>0&&(_+=`
`)):(g=[eu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Wl).join(`
`),_=[eu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Fs.tonemapping_pars_fragment,n.toneMapping===0?``:Rl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Fs.colorspace_pars_fragment,Il(`linearToOutputTexel`,n.outputColorSpace),Bl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Wl).join(`
`)),o=Jl(o),o=Gl(o,n),o=Kl(o,n),s=Jl(s),s=Gl(s,n),s=Kl(s,n),o=Ql(o),s=Ql(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=kl(i,i.VERTEX_SHADER,y),S=kl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Fl(i,x,`vertex`),n=Fl(i,S,`fragment`);rt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):nt(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ol(i,h),T=Ul(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Al)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var du=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=du++,this.code=e,this.usedTimes=0}};function mu(e){return e===1030||e===37490||e===36285}function hu(e,t,n,r,i,a){let o=new gn,s=new fu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&nt(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,O;if(C){let e=Is[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,O=t.id}let ne=e.getRenderTarget(),k=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&mu(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:k,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Ht.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Is[t];n=To.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new uu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function gu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function _u(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||_u),r.length>1&&r.sort(t||vu),i.length>1&&i.sort(t||vu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function bu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new yu,e.set(t,[i])):n>=r.length?(i=new yu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function xu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new zn};break;case`SpotLight`:n={position:new L,direction:new L,color:new zn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new zn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new zn,groundColor:new zn};break;case`RectAreaLight`:n={color:new zn,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function Su(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Cu=0;function wu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Tu(e){let t=new xu,n=Su(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new an,o=new an;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(wu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Cu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Eu(e){let t=new Tu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Du(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Eu(e),t.set(n,[a])):r>=i.length?(a=new Eu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ou=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ku=`uniform sampler2D shadow_pass;
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
}`,Au=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ju=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Mu=new an,Nu=new L,Pu=new L;function Fu(e,t,n){let i=new Bi,a=new I,s=new I,c=new $t,l=new jo,u=new Mo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Oo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:Ou,fragmentShader:ku}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Ir;y.setAttribute(`position`,new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new z(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(nt(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){nt(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){nt(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new tn(a.x,a.y,{format:te,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ui(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new fc(a.x),p.map.depthTexture=new Wi(a.x,m)):(p.map=new tn(a.x,a.y),p.map.depthTexture=new Ui(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Nu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Nu),Pu.copy(e.position),Pu.add(Au[t]),e.up.copy(ju[t]),e.lookAt(Pu),e.updateMatrixWorld(),n.makeTranslation(-Nu.x,-Nu.y,-Nu.z),Mu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Mu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new tn(a.x,a.y,{format:te,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Iu(e,t){function n(){let t=!1,n=new $t,r=null,i=new $t(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new zn(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new $t().fromArray(oe),le=new $t().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:rt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:rt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:rt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==te&&(re&&e.lineWidth(t),te=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+k-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+k-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new zn(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:He}}function Lu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new I,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ze(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),nt(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&nt(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function O(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];nt(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||nt(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ue:Ht.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,nt(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function k(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ae(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&nt(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(e,t){let n=f.get(e);if(e.isVideoTexture&&N(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)nt(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)nt(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Se(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function pe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Se(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let he={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ge={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},_e={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ve(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&nt(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,he[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,he[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,he[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ge[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ge[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,_e[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ye(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&j(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=be(r.start,t.width,4),c=be(n.start,t.width,4);r.start<=o+1&&s===c&&be(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Se(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ye(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Ht.getPrimaries(Ht.workingColorSpace),n=t.colorSpace===``?null:Ht.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ie(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=O(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ve(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=k(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&xe(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=js(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else nt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?nt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=js(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Le(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Le(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n){if(t.image.length!==6)return;let r=ye(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Ht.getPrimaries(Ht.workingColorSpace),o=t.colorSpace===``?null:Ht.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=O(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=k(t,h);ve(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?nt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Le(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=O(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Pe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=O(i.internalFormat,a,o,i.normalized,i.colorSpace);Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ee(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,re)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else M(t.depthTexture,0);let a=i.__webglTexture,o=Pe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ee(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ee(t.__webglFramebuffer[0],e,0):Ee(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Te(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Te(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){let r=f.get(e);t!==void 0&&we(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&De(e)}function ke(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,A);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Fe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=O(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Pe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Te(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)we(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ve(o,r),we(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ve(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else we(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&De(e)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(e){if(e.samples>0){if(Fe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(je.push(a),Me.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Me)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ht.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&nt(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):rt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Ru(e,t){function n(n,r=``){let i,a=Ht.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var zu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bu=`
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

}`,Vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Oo({vertexShader:zu,fragmentShader:Bu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new _o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends st{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Vu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new I,te=null,O=null,ne=new ds;ne.viewport=new $t;let k=new ds;k.viewport=new $t;let re=[ne,k],A=new vs,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getHandSpace()};function ae(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),O!==null){let e=O.camera;e.fov=O.fov,e.zoom=O.zoom,e.updateProjectionMatrix(),O=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&nt(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&nt(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),b.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new tn(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ui(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new tn(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new L,le=new L;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=k.near=ne.near=t,A.far=k.far=ne.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,ne.layers.mask=A.layers.mask&-5,k.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,ne,k):A.projectionMatrix.copy(ne.projectionMatrix),O===null&&e.isPerspectiveCamera&&(O={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new ds,o.layers.enable(n),o.viewport=new $t,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Gi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let me=new Ns;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},Uu=new an,Wu=new Lt;Wu.set(-1,0,0,0,1,0,0,0,1);function Gu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,wo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Uu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Wu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ku(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return rt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?nt(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):nt(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var qu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ju=null;function Yu(){return Ju===null&&(Ju=new Di(qu,16,16,te,g),Ju.name=`DFG_LUT`,Ju.minFilter=o,Ju.magFilter=o,Ju.wrapS=t,Ju.wrapT=t,Ju.generateMipmaps=!1,Ju.needsUpdate=!0),Ju}var Xu=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ne,O,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new L,te=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ve;let ue=0,de=0,M=null,fe=-1,pe=null,me=new $t,he=new $t,ge=null,_e=new zn(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new $t(0,0,ye,be),Te=new $t(0,0,ye,be),Ee=!1,De=new Bi,Oe=!1,ke=!1,Ae=new an,je=new L,Me=new $t,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,Be,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,$e,tt,it,ot,st,ct,lt,ut,dt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,pt,!1),t.addEventListener(`webglcontextrestored`,mt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ft()}catch(e){throw t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),rt(`WebGLRenderer: `+e.message),e}function ft(){Le=new mc(N),Le.init(),lt=new Ru(N,Le),Re=new Us(N,Le,e,lt),P=new Iu(N,Le),Re.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new _c(N),Be=new gu,He=new Lu(N,Le,P,Be,Re,lt,ze),Ue=new pc(j),We=new Ps(N),ut=new Vs(N,We),Ge=new hc(N,We,ze,ut),Ke=new yc(N,Ge,We,ut,ze),ot=new vc(N,Re,He),$e=new Ws(Be),qe=new hu(j,Ue,Le,Re,ut,$e),Ye=new Gu(j,Be),Xe=new bu,Ze=new Du(Le),it=new Bs(j,Ue,P,Ke,x,s),tt=new Fu(j,Ke,Re),dt=new Ku(N,ze,Re,P),st=new Hs(N,Le,ze),ct=new gc(N,Le,ze),ze.programs=qe.programs,j.capabilities=Re,j.extensions=Le,j.properties=Be,j.renderLists=Xe,j.shadowMap=tt,j.state=P,j.info=ze}S!==1009&&(ie=new xc(S,t.width,t.height,o,r,i));let F=new Hu(j,N);this.xr=F,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){F.isPresenting?nt(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)rt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){nt(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=it.getClearColor(),r=it.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),it.dispose(),Xe.dispose(),Ze.dispose(),Be.dispose(),Ue.dispose(),Ke.dispose(),ut.dispose(),dt.dispose(),qe.dispose(),F.dispose(),F.removeEventListener(`sessionstart`,St),F.removeEventListener(`sessionend`,Ct),wt.stop()};function pt(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),ae=!0}function mt(){et(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=tt.enabled,n=tt.autoUpdate,r=tt.needsUpdate,i=tt.type;ft(),ze.autoReset=e,tt.enabled=t,tt.autoUpdate=n,tt.needsUpdate=r,tt.type=i}function ht(e){rt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),Be.remove(e)}function vt(e){let t=Be.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=I(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ut.setup(i,r,s,n,c);let h,g=st;if(c!==null&&(h=We.get(c),g=ct,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=Be.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&$e.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Ze.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=$e.init(this.clippingPlanes,ke),Oe===!0&&$e.setGlobalState(this.clippingPlanes,t),oe!==null&&tt.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Be.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new Ns;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,F.setAnimationLoop(e),e===null?wt.stop():wt.start()},F.addEventListener(`sessionstart`,St),F.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){rt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=F.enabled===!0&&F.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(F.cameraAutoUpdate===!0&&F.updateCamera(t),t=F.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Ze.get(e,A.length),k.init(t),k.state.textureUnits=He.getTextureUnits(),A.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Je,t.reversedDepth),ke=this.localClippingEnabled,Oe=$e.init(this.clippingPlanes,ke),te=Xe.get(e,re.length),te.init(),re.push(te),F.enabled===!0&&F.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,j.sortObjects)}Tt(e,t,0,j.sortObjects),te.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&te.sort(Se,Ce),Pe=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Pe&&it.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&$e.beginShadows();let i=k.state.shadowsArray;if(tt.render(i,e,t),Oe===!0&&$e.endShadows(),(r&&ie.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Pe&&it.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(te,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Pe&&it.render(e),Et(te,e,t)}M!==null&&de===0&&(He.updateMultisampleRenderTarget(M),He.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ut.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],He.setTextureUnits(k.state.textureUnits),Oe===!0&&$e.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),te=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ke.update(e),a=e.material;a.visible&&te.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&te.push(e,i,c,n,Me.z,s,t)}}else a.visible&&te.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&$e.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new tn(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),u=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&it.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&$e.setGlobalState(j.clippingPlanes,r),Ot(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}j.setRenderTarget(s,u,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Ne);let r=Be.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=qe.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),Mt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ol.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=Be.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function I(e,t,n,r,i){t.isScene!==!0&&(t=Ne),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ht.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Be.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;$e.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=At(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=Nt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,He),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,He),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,He));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&ot.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Yu()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Pt(E,w),a&&r.fog===!0&&Ye.refreshFogUniforms(E,a),Ye.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ol.upload(N,jt(v),E,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ol.upload(N,jt(v),E,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];dt.update(n,x),dt.bind(n,x)}}return x}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=Be.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Be.get(e.texture).__webglTexture=t,Be.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Be.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=Be.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,Be.get(e.texture).__webglTexture,Be.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Be.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Be.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?Be.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=Be.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Be.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Be.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function It(e){let t=Be.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,lt.convert(c),lt.convert(l),a)}finally{let e=M===null?null:Be.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,lt.convert(l),lt.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:Be.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await at(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=lt.convert(t.format),_=lt.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Be.get(e),r=Be.get(t),h=Be.get(n.__renderTarget),g=Be.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Be.has(e)){let n=Be.get(e),r=Be.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){Be.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}},Zu;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(Zu||={});var Qu=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},$u=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,ed=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?$u(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new Qu(`"${e}" plugin is not implemented on ${c}`,Zu.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new Qu(`"${e}.${t}()" is not implemented on ${c}`,Zu.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=Qu,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},td=(e=>e.Capacitor=ed(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),nd=td.registerPlugin,rd=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new td.Exception(e,Zu.Unimplemented)}unavailable(e=`not available`){return new td.Exception(e,Zu.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},id=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ad=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),od=class extends rd{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=ad(n).trim(),r=ad(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=id(e.key),n=id(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};nd(`CapacitorCookies`,{web:()=>new od});var sd=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),cd=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},ld=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,ud=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=cd(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},dd=class extends rd{async request(e){let t=ud(e,e.webFetchExtra),n=ld(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await sd(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};nd(`CapacitorHttp`,{web:()=>new dd});var fd;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(fd||={});var pd;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(pd||={});var md=class extends rd{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};nd(`SystemBars`,{web:()=>new md});var hd;(function(e){e.Heavy=`HEAVY`,e.Medium=`MEDIUM`,e.Light=`LIGHT`})(hd||={});var gd;(function(e){e.Success=`SUCCESS`,e.Warning=`WARNING`,e.Error=`ERROR`})(gd||={});var _d=`modulepreload`,vd=function(e,t){return new URL(e,t).href},yd={},bd=function(e){return e.pathname.endsWith(`.css`)},xd=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Sd=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=vd(t,n);let r=s(t),i=bd(r);return xd(yd,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:_d,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Cd=nd(`Haptics`,{web:()=>Sd(()=>import(`./web-DEFbLWxQ.js`).then(e=>new e.HapticsWeb),[],import.meta.url)}),wd=null,Td=null,Ed=!1;function Dd(){if(!wd){wd=new AudioContext,Td=wd.createBuffer(1,wd.sampleRate,wd.sampleRate);let e=Td.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}wd.state===`suspended`&&wd.resume()}function Od(e){Ed=e}function kd(){return Ed}function Ad(){return wd&&!Ed?wd:null}function jd(e,{type:t,freq:n,q:r=1,dur:i,gain:a,at:o=0,sweepTo:s,attack:c=.01}){let l=e.currentTime+o,u=e.createBufferSource();u.buffer=Td;let d=e.createBiquadFilter();d.type=t,d.frequency.setValueAtTime(n,l),s&&d.frequency.exponentialRampToValueAtTime(s,l+i),d.Q.value=r;let f=e.createGain();f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(a,l+Math.min(c,i/4)),f.gain.exponentialRampToValueAtTime(1e-4,l+i),u.connect(d).connect(f).connect(e.destination),u.start(l,Math.random()*.5),u.stop(l+i+.05)}function Md(e,t,n,r,i=0,a=`sine`){let o=e.currentTime+i,s=e.createOscillator();s.type=a,s.frequency.setValueAtTime(t,o);let c=e.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(r,o+.005),c.gain.exponentialRampToValueAtTime(1e-4,o+n),s.connect(c).connect(e.destination),s.start(o),s.stop(o+n+.05)}function Nd(e,t,n,r,i,a=0,o=`sine`,s=2e4){let c=e.currentTime+a,l=e.createOscillator();l.type=o,l.frequency.setValueAtTime(t,c),l.frequency.exponentialRampToValueAtTime(n,c+r);let u=e.createBiquadFilter();u.type=`lowpass`,u.frequency.value=s;let d=e.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(i,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+r),l.connect(u).connect(d).connect(e.destination),l.start(c),l.stop(c+r+.05)}function Pd(){let e=Ad();e&&jd(e,{type:`bandpass`,freq:400,sweepTo:2400,q:1.2,dur:.35,gain:.25})}function Fd(){let e=Ad();e&&(jd(e,{type:`lowpass`,freq:250,sweepTo:900,q:.8,dur:.7,gain:.6}),jd(e,{type:`highpass`,freq:3e3,dur:.45,gain:.12}),Md(e,70,.6,.25,0,`sawtooth`))}function Id(){let e=Ad();e&&(Nd(e,150,38,.5,.8),jd(e,{type:`highpass`,freq:1800,dur:.16,gain:.55}),jd(e,{type:`lowpass`,freq:160,sweepTo:600,q:.7,dur:1.6,gain:.6,attack:.06}),jd(e,{type:`bandpass`,freq:450,sweepTo:2800,q:.9,dur:1.2,gain:.4,attack:.1,at:.03}),Nd(e,140,760,.75,.14,.02,`sawtooth`,1600),Md(e,1568,.25,.1,.14,`triangle`),Md(e,2093,.4,.08,.22,`triangle`))}function Ld(e){let t=Ad();t&&(jd(t,{type:`highpass`,freq:2500,dur:.06,gain:.9}),Md(t,1900,.09,.35,0,`triangle`),Md(t,140,.12,.5),e&&(Md(t,1318,.5,.18,.02),Md(t,1976,.6,.12,.04)))}function Rd(){let e=Ad();e&&(Md(e,988,.12,.15,0,`square`),Md(e,1319,.25,.15,.08,`square`))}function zd(){let e=Ad();e&&[523,659,784,1047].forEach((t,n)=>Md(e,t,.3,.16,n*.09,`triangle`))}function Bd(){let e=Ad();e&&([659,784,988,1319].forEach((t,n)=>Md(e,t,.22,.14,n*.075,`square`)),Md(e,1319,.7,.12,.3,`triangle`),Md(e,1976,.8,.08,.34,`triangle`),jd(e,{type:`highpass`,freq:6e3,dur:.6,gain:.05,at:.3,attack:.05}))}function Vd(){let e=Ad();e&&(Md(e,660,.1,.15,0,`square`),Md(e,880,.1,.15,.07,`square`),Md(e,1320,.25,.15,.14,`square`))}function Hd(e=1){let t=Ad();if(!t)return;let n=t.currentTime,r=t.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(520*e,n),r.frequency.exponentialRampToValueAtTime(1500*e,n+.08),r.frequency.exponentialRampToValueAtTime(950*e,n+.28);let i=t.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(.22,n+.02),i.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(i).connect(t.destination),r.start(n),r.stop(n+.35)}function Ud(e=1,t=1){let n=Ad();if(!n)return;let r=n.currentTime,i=n.createOscillator();i.type=`triangle`,i.frequency.setValueAtTime(140*e,r),i.frequency.exponentialRampToValueAtTime(420*e,r+.16);let a=n.createGain();a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(.3*t,r+.015),a.gain.exponentialRampToValueAtTime(1e-4,r+.22),i.connect(a).connect(n.destination),i.start(r),i.stop(r+.25)}var Wd=[{id:`power`,name:`Power`,color:16734781},{id:`fortune`,name:`Fortune`,color:16761370},{id:`precision`,name:`Precision`,color:4033535},{id:`abilities`,name:`Abilities`,color:11697151}],Gd=e=>`${Math.round(e*1e3)/10}%`,Kd=[0,.03,.045,.06],qd=[{id:`heavyHitter`,branch:`power`,name:`Heavy Hitter`,icon:`💪`,maxRank:5,needs:0,effect:e=>`+${Gd(.015*e)} launch power`},{id:`aero`,branch:`power`,name:`Aerodynamics`,icon:`🌀`,maxRank:5,needs:3,effect:e=>`-${Gd(1-.98**e)} air drag`},{id:`longRoll`,branch:`power`,name:`Long Roller`,icon:`🛞`,maxRank:3,needs:6,effect:e=>`Rolls ${Gd(.1*e)} further`},{id:`overdrive`,branch:`power`,name:`Overdrive`,icon:`🔥`,maxRank:1,needs:9,effect:()=>`PERFECT strikes launch 4% faster`},{id:`coinMagnet`,branch:`fortune`,name:`Coin Magnet`,icon:`🧲`,maxRank:5,needs:0,effect:e=>`+${Gd(.03*e)} coins per foot`},{id:`mileMarker`,branch:`fortune`,name:`Mile Marker`,icon:`🚩`,maxRank:5,needs:3,effect:e=>`+${Gd(.03*e)} distance bonus`},{id:`recordBreaker`,branch:`fortune`,name:`Record Breaker`,icon:`🏆`,maxRank:3,needs:6,effect:e=>`+${Gd(.1*e)} record bonus`},{id:`goldenTouch`,branch:`fortune`,name:`Golden Touch`,icon:`👑`,maxRank:1,needs:9,effect:()=>`PERFECT strikes pay +40% coins (was +25%)`},{id:`steadyHands`,branch:`precision`,name:`Steady Hands`,icon:`🎯`,maxRank:5,needs:0,effect:e=>`Needle ${Gd(.05*e)} slower`},{id:`sweetSpot`,branch:`precision`,name:`Sweet Spot`,icon:`✨`,maxRank:5,needs:3,effect:e=>`PERFECT zone wider by ${e}% of the bar`},{id:`straightShooter`,branch:`precision`,name:`Straight Shooter`,icon:`📏`,maxRank:3,needs:6,effect:e=>`Hooks and slices curve ${Gd(.25*e)} less`},{id:`perfectPower`,branch:`precision`,name:`Full Throttle`,icon:`⚡`,maxRank:1,needs:9,effect:()=>`95% power or more counts as full power`},{id:`rocketBoost`,branch:`abilities`,name:`Rocket Boost`,icon:`🚀`,maxRank:3,needs:0,effect:e=>`Tap BOOST mid-flight: +${Gd(Kd[e])} speed`},{id:`bouncy`,branch:`abilities`,name:`Super Bounce`,icon:`🏀`,maxRank:3,needs:2,effect:e=>`Bounces ${Gd(.1*e)} higher`},{id:`tailwind`,branch:`abilities`,name:`Wind Breaker`,icon:`🌬️`,maxRank:3,needs:4,effect:e=>`Headwinds ${Gd(.25*e)} weaker`},{id:`secondWind`,branch:`abilities`,name:`Second Wind`,icon:`🔁`,maxRank:1,needs:9,effect:()=>`BOOST twice per shot`}],Jd=qd.reduce((e,t)=>e+t.maxRank,0);function Yd(){return Object.fromEntries(qd.map(e=>[e.id,0]))}function Xd(e){return qd.find(t=>t.id===e)}function Zd(e,t){return qd.reduce((n,r)=>n+(t===void 0||r.branch===t?e[r.id]:0),0)}function Qd(e,t,n){let r=Xd(t);return e[t]>=r.maxRank?`max`:Zd(e,r.branch)<r.needs?`locked`:n<=0?`points`:null}var $d={shot:1,milestone:1,record:1,perfect:.25};function ef(e){return{power:1+.015*e.heavyHitter,drag:.98**e.aero,roll:1-.1*e.longRoll,perfectPower:e.overdrive?1.04:1,bounce:1+.1*e.bouncy,tempo:1+.05*e.steadyHands,sweetSpot:.005*e.sweetSpot,curve:1-.25*e.straightShooter,fullPowerAt:e.perfectPower?.95:1,headwind:1-.25*e.tailwind,boost:Kd[e.rocketBoost],boosts:e.rocketBoost===0?0:e.secondWind?2:1,coins:{shot:1+.03*e.coinMagnet,milestone:1+.03*e.mileMarker,record:1+.1*e.recordBreaker,perfect:e.goldenTouch?.4:.25}}}var tf=Jd+1;function nf(e){return Math.round(10+Math.sqrt(Math.max(0,e)))}function rf(e){return Math.round(50*e**1.6)}function af(e){let t=1,n=Math.max(0,e);for(;t<tf&&n>=rf(t);)n-=rf(t),t++;return t>=tf?{level:t,into:0,needed:0}:{level:t,into:n,needed:rf(t)}}function of(e){let{level:t}=af(e);return{angle:t>=7,spin:t>=14}}function sf(e,t){return af(e).level-1-Zd(t)}var cf=[{id:`meadow`,name:`Green Meadow`,start:0,bonus:0,banner:4173391,rough:6010954,fairway:9823084,horizon:13233407,zenith:2788351,stars:0,hemiGround:14216380,hillsNear:7653018,hillsFar:10274026,clouds:16777215,shadow:3107626},{id:`desert`,name:`Desert Dunes`,start:2e3,bonus:1e3,banner:15238698,rough:14859646,fairway:15981734,horizon:16769981,zenith:4037631,stars:0,hemiGround:15784360,hillsNear:14722147,hillsFar:13205592,clouds:16777215,shadow:10119738},{id:`snow`,name:`Snow Peaks`,start:5e3,bonus:3e3,banner:4033535,rough:14411765,fairway:15988991,horizon:15135487,zenith:6203135,stars:0,hemiGround:15266047,hillsNear:16054527,hillsFar:11453668,clouds:16777215,shadow:9348296},{id:`volcano`,name:`Volcano Valley`,start:1e4,bonus:8e3,banner:14168606,rough:5061687,fairway:7494738,horizon:16752234,zenith:4857651,stars:0,hemiGround:10512976,hillsNear:4009e3,hillsFar:7025456,clouds:6180944,shadow:1708560},{id:`neon`,name:`Neon City`,start:2e4,bonus:2e4,banner:16727504,rough:1909056,fairway:2896483,horizon:16740306,zenith:1510469,stars:.5,hemiGround:6970016,hillsNear:2300490,hillsFar:3811954,clouds:13018879,shadow:460826},{id:`moon`,name:`Moon Base`,start:4e4,bonus:5e4,banner:10465535,rough:10132646,fairway:11974850,horizon:3422808,zenith:263437,stars:1,hemiGround:9079958,hillsNear:9211544,hillsFar:5593194,clouds:null,shadow:3816006},{id:`mars`,name:`Mars`,start:8e4,bonus:1e5,banner:14701866,rough:11882542,fairway:14186314,horizon:15774858,zenith:9059882,stars:.15,hemiGround:12611658,hillsNear:10503210,hillsFar:13138010,clouds:15911334,shadow:5907476},{id:`jupiter`,name:`Jupiter`,start:16e4,bonus:2e5,banner:15769680,rough:14201434,fairway:15651722,horizon:4863040,zenith:328714,stars:1,hemiGround:13148256,hillsNear:12094016,hillsFar:9071168,clouds:null,shadow:5917216},{id:`saturn`,name:`Saturn`,start:3e5,bonus:4e5,banner:15255674,rough:13482900,fairway:15128237,horizon:4864602,zenith:394511,stars:1,hemiGround:14207136,hillsNear:12100730,hillsFar:9075304,clouds:null,shadow:5918262},{id:`neptune`,name:`Neptune`,start:5e5,bonus:75e4,banner:3832575,rough:9417440,fairway:12375284,horizon:1718906,zenith:132632,stars:1,hemiGround:10139880,hillsNear:6982336,hillsFar:3824282,clouds:null,shadow:2767466},{id:`pluto`,name:`Pluto`,start:8e5,bonus:15e5,banner:14195322,rough:14206126,fairway:15787738,horizon:2763322,zenith:131589,stars:1,hemiGround:13680816,hillsNear:15261912,hillsFar:11049098,clouds:null,shadow:5917248}],lf={from:105e3,full:12e4,fade:15e4,to:165e3};function uf(e){let t=0;for(;t+1<cf.length&&e>=cf[t+1].start;)t++;return t}function df(e,t){let n=0;for(let r=e+1;r<=t;r++)n+=cf[r].bonus;return n}function ff(){return{perfects:0,streak:0,bestStreak:0,flawless:0,shanks:0,fairways:0,records:0,totalFeet:0,coinsEarned:0,boosts:0,doubleBoosts:0}}var pf=5280,mf=e=>`${Math.floor(e).toLocaleString(`en-US`)} ft`,hf=e=>{let t=e/pf;return`${(t<100?Math.floor(t*10)/10:Math.floor(t)).toLocaleString(`en-US`)} mi`},gf=e=>e.best,_f=e=>e.filter(Boolean).length,vf=e=>cf.findIndex(t=>t.id===e);function yf(e,t,n,r,i,a,o=r>=pf?hf:mf){return{id:e,name:t,icon:n,desc:`Hit a monster ${a}`,target:r,reward:i,progress:gf,show:o}}function bf(e,t,n,r,i){let a=vf(r);return{id:e,name:t,icon:n,desc:`Reach ${cf[a].name}`,target:1,reward:i,progress:e=>+(e.zone>=a)}}var xf=[{id:`firstWhack`,name:`First Whack`,icon:`🏌️`,desc:`Launch your first monster`,target:1,reward:50,progress:e=>e.shots},yf(`offTheTee`,`Off the Tee`,`⛳`,500,300,`500 ft`),yf(`bigHitter`,`Big Hitter`,`💥`,1e3,600,`1,000 ft`),yf(`oneMiler`,`One Miler`,`🛣️`,pf,4e3,`1 mile`),yf(`tenMiler`,`Ten Miler`,`🚗`,10*pf,8e4,`10 miles`),yf(`marathon`,`Marathon`,`🏃`,Math.round(26.2*pf),25e4,`26.2 miles`),yf(`century`,`Century`,`💯`,100*pf,15e5,`100 miles`),yf(`sevenFigures`,`Seven Figures`,`🌠`,1e6,3e6,`1,000,000 ft`,mf),yf(`orbital`,`Orbital`,`🛰️`,200*pf,5e6,`200 miles`),bf(`sandblasted`,`Sandblasted`,`🏜️`,`desert`,500),bf(`brrilliant`,`Brr-illiant`,`❄️`,`snow`,1500),bf(`hotShot`,`Hot Shot`,`🌋`,`volcano`,5e3),bf(`cityLights`,`City Lights`,`🌃`,`neon`,12e3),bf(`moonshot`,`Moonshot`,`🌙`,`moon`,3e4),bf(`redPlanet`,`Red Planet`,`🔴`,`mars`,6e4),bf(`byJove`,`By Jove!`,`🌀`,`jupiter`,15e4),bf(`ringLeader`,`Ring Leader`,`🪐`,`saturn`,3e5),bf(`deepBlue`,`Deep Blue`,`🔱`,`neptune`,6e5),bf(`stillAPlanet`,`Still a Planet`,`💗`,`pluto`,12e5),{id:`pureContact`,name:`Pure Contact`,icon:`✨`,desc:`Hit a PERFECT strike`,target:1,reward:150,progress:e=>e.stats.perfects},{id:`perfectionist`,name:`Perfectionist`,icon:`🎯`,desc:`Hit 50 PERFECT strikes`,target:50,reward:2e4,progress:e=>e.stats.perfects},{id:`precisionBot`,name:`Precision Bot`,icon:`🤖`,desc:`Hit 500 PERFECT strikes`,target:500,reward:1e6,progress:e=>e.stats.perfects},{id:`hotStreak`,name:`Hot Streak`,icon:`🔥`,desc:`3 PERFECT strikes in a row`,target:3,reward:2e3,progress:e=>e.stats.bestStreak},{id:`unstoppable`,name:`Unstoppable`,icon:`⚡`,desc:`10 PERFECT strikes in a row`,target:10,reward:1e5,progress:e=>e.stats.bestStreak},{id:`tripleThreat`,name:`Triple Threat`,icon:`💎`,desc:`PERFECT strike, perfect angle and perfect spin in one shot`,target:1,reward:5e4,progress:e=>e.stats.flawless},{id:`fairwayFinder`,name:`Fairway Finder`,icon:`🟩`,desc:`Stop on the fairway 100 times`,target:100,reward:3e4,progress:e=>e.stats.fairways},{id:`shankYou`,name:`Shank You Very Much`,icon:`🙃`,desc:`Hit a shank (it happens to every bot)`,target:1,reward:100,progress:e=>e.stats.shanks},{id:`warmingUp`,name:`Warming Up`,icon:`🔧`,desc:`Take 25 shots`,target:25,reward:500,progress:e=>e.shots},{id:`grinder`,name:`Grinder`,icon:`⚙️`,desc:`Take 250 shots`,target:250,reward:25e3,progress:e=>e.shots},{id:`ironBot`,name:`Iron Bot`,icon:`🦾`,desc:`Take 1,000 shots`,target:1e3,reward:1e6,progress:e=>e.shots},{id:`recordBreaker`,name:`Record Breaker`,icon:`📈`,desc:`Beat your best distance 50 times`,target:50,reward:5e4,progress:e=>e.stats.records},{id:`frequentFlyer`,name:`Frequent Flyer`,icon:`✈️`,desc:`Launch monsters 1,000 miles in total`,target:1e3*pf,reward:3e5,progress:e=>e.stats.totalFeet,show:hf},{id:`aroundTheWorld`,name:`Around the World`,icon:`🌍`,desc:`Launch monsters 24,901 miles in total`,target:24901*pf,reward:5e6,progress:e=>e.stats.totalFeet,show:hf},{id:`rocketRookie`,name:`Rocket Rookie`,icon:`🚀`,desc:`Fire a Rocket Boost`,target:1,reward:2e3,progress:e=>e.stats.boosts},{id:`doubleRocket`,name:`Double Rocket`,icon:`🎆`,desc:`Fire two Rocket Boosts in one shot`,target:1,reward:1e5,progress:e=>e.stats.doubleBoosts},{id:`monsterMash`,name:`Monster Mash`,icon:`👾`,desc:`Own 5 monsters`,target:5,reward:5e3,progress:e=>_f(e.owned)},{id:`monsterZoo`,name:`Monster Zoo`,icon:`🦖`,desc:`Own 10 monsters`,target:10,reward:15e4,progress:e=>_f(e.owned)},{id:`fullRoster`,name:`Full Roster`,icon:`🏟️`,desc:`Own all 20 monsters`,target:20,reward:3e6,progress:e=>_f(e.owned)},{id:`maceCollector`,name:`Mace Collector`,icon:`🔨`,desc:`Own 5 maces`,target:5,reward:5e3,progress:e=>_f(e.clubOwned)},{id:`armory`,name:`Armory`,icon:`🗡️`,desc:`Own all 20 maces`,target:20,reward:3e6,progress:e=>_f(e.clubOwned)},{id:`suitUp`,name:`Suit Up`,icon:`🧥`,desc:`Own 5 gear sets`,target:5,reward:1e4,progress:e=>_f(e.gearOwned)},{id:`fullyLoaded`,name:`Fully Loaded`,icon:`🦿`,desc:`Own all 20 gear sets`,target:20,reward:3e6,progress:e=>_f(e.gearOwned)},{id:`maxedMonster`,name:`Maxed Out`,icon:`⭐`,desc:`Level a monster to 5 stars`,target:5,reward:1e3,progress:e=>Math.max(...e.levels)},{id:`maxedMace`,name:`Fully Forged`,icon:`🛠️`,desc:`Level a mace to 5 stars`,target:5,reward:1e3,progress:e=>Math.max(...e.clubLevels)},{id:`risingStar`,name:`Rising Star`,icon:`🌟`,desc:`Reach level 10`,target:10,reward:15e3,progress:e=>af(e.xp).level},{id:`veteran`,name:`Veteran`,icon:`🎖️`,desc:`Reach level 30`,target:30,reward:5e5,progress:e=>af(e.xp).level},{id:`specialist`,name:`Specialist`,icon:`🧠`,desc:`Max out every skill in one branch`,target:1,reward:2e5,progress:e=>+!!Wd.some(t=>qd.every(n=>n.branch!==t.id||e.skills[n.id]>=n.maxRank))},{id:`goldRush`,name:`Gold Rush`,icon:`💰`,desc:`Earn 1,000,000 coins in total`,target:1e6,reward:5e4,progress:e=>e.stats.coinsEarned},{id:`tycoon`,name:`Tycoon`,icon:`🏦`,desc:`Earn 100,000,000 coins in total`,target:1e8,reward:3e6,progress:e=>e.stats.coinsEarned}];function Sf(e){return xf.find(t=>t.id===e)}function Cf(e){let t=xf.filter(t=>!e.achievements[t.id]&&t.progress(e)>=t.target);for(let n of t)e.achievements[n.id]=`done`;return t}function wf(e,t){let n=Sf(t);return!n||e.achievements[t]!==`done`?0:(e.achievements[t]=`claimed`,e.coins+=n.reward,e.stats.coinsEarned+=n.reward,n.reward)}function Tf(e){return xf.filter(t=>e.achievements[t.id]===`done`).length}var Ef;(function(e){e.Small=`small`,e.Medium=`medium`})(Ef||={});var Df;(function(e){e.General=`General`,e.ParentalGuidance=`ParentalGuidance`,e.Teen=`Teen`,e.MatureAudience=`MatureAudience`})(Df||={});var Of;(function(e){e.SizeChanged=`bannerAdSizeChanged`,e.Loaded=`bannerAdLoaded`,e.FailedToLoad=`bannerAdFailedToLoad`,e.Opened=`bannerAdOpened`,e.Closed=`bannerAdClosed`,e.AdImpression=`bannerAdImpression`,e.AdPaid=`bannerAdPaid`})(Of||={});var kf;(function(e){e.TOP_CENTER=`TOP_CENTER`,e.CENTER=`CENTER`,e.BOTTOM_CENTER=`BOTTOM_CENTER`})(kf||={});var Af;(function(e){e.BANNER=`BANNER`,e.FULL_BANNER=`FULL_BANNER`,e.LARGE_BANNER=`LARGE_BANNER`,e.MEDIUM_RECTANGLE=`MEDIUM_RECTANGLE`,e.LEADERBOARD=`LEADERBOARD`,e.ADAPTIVE_BANNER=`ADAPTIVE_BANNER`,e.SMART_BANNER=`SMART_BANNER`})(Af||={});var jf;(function(e){e.Loaded=`interstitialAdLoaded`,e.FailedToLoad=`interstitialAdFailedToLoad`,e.Showed=`interstitialAdShowed`,e.FailedToShow=`interstitialAdFailedToShow`,e.Dismissed=`interstitialAdDismissed`,e.AdImpression=`interstitialAdImpression`})(jf||={});var Mf;(function(e){e.Loaded=`onRewardedInterstitialAdLoaded`,e.FailedToLoad=`onRewardedInterstitialAdFailedToLoad`,e.Showed=`onRewardedInterstitialAdShowed`,e.FailedToShow=`onRewardedInterstitialAdFailedToShow`,e.Dismissed=`onRewardedInterstitialAdDismissed`,e.Rewarded=`onRewardedInterstitialAdReward`,e.AdImpression=`onRewardedInterstitialAdImpression`})(Mf||={});var Nf;(function(e){e.adClicked=`onRewardedVideoAdClicked`,e.Loaded=`onRewardedVideoAdLoaded`,e.FailedToLoad=`onRewardedVideoAdFailedToLoad`,e.Showed=`onRewardedVideoAdShowed`,e.FailedToShow=`onRewardedVideoAdFailedToShow`,e.Dismissed=`onRewardedVideoAdDismissed`,e.Rewarded=`onRewardedVideoAdReward`,e.AdImpression=`onRewardedVideoAdImpression`})(Nf||={});var Pf;(function(e){e.NOT_REQUIRED=`NOT_REQUIRED`,e.OBTAINED=`OBTAINED`,e.REQUIRED=`REQUIRED`,e.UNKNOWN=`UNKNOWN`})(Pf||={});var Ff;(function(e){e[e.DISABLED=0]=`DISABLED`,e[e.EEA=1]=`EEA`,e[e.NOT_EEA=2]=`NOT_EEA`,e[e.US=3]=`US`,e[e.OTHER=4]=`OTHER`})(Ff||={});var If;(function(e){e[e.Unknown=0]=`Unknown`,e[e.Estimated=1]=`Estimated`,e[e.PublisherProvided=2]=`PublisherProvided`,e[e.Precise=3]=`Precise`})(If||={});var Lf;(function(e){e.Loaded=`appOpenAdLoaded`,e.FailedToLoad=`appOpenAdFailedToLoad`,e.Opened=`appOpenAdOpened`,e.Closed=`appOpenAdClosed`,e.FailedToShow=`appOpenAdFailedToShow`,e.AdImpression=`appOpenAdImpression`})(Lf||={});var Rf;(function(e){e.Loaded=`nativeAdLoaded`,e.FailedToLoad=`nativeAdFailedToLoad`,e.Clicked=`nativeAdClicked`,e.AdImpression=`nativeAdImpression`,e.Opened=`nativeAdOpened`,e.Closed=`nativeAdClosed`,e.AdPaid=`nativeAdPaid`})(Rf||={});var zf=nd(`AdMob`,{web:()=>Sd(()=>import(`./web-JSMUwDoV.js`).then(e=>new e.AdMobWeb),[],import.meta.url)}),Bf=[],Vf={ios:`ca-app-pub-5415919643913499/2829263686`,android:`ca-app-pub-5415919643913499/2031362344`},Hf={ios:`ca-app-pub-5415919643913499/4434998556`,android:`ca-app-pub-5415919643913499/5795172521`},Uf=30,Wf=td.getPlatform(),Gf=Wf===`ios`||Wf===`android`,Kf=!1,qf=!1,Jf=!1,Yf=!1,Xf=!1,Zf=!1,Qf=!1;async function $f(){if(Kf)return;if(Kf=!0,!Gf){qf=!1,Yf=qf;return}let e=!0;try{let t=await zf.requestConsentInfo();t.isConsentFormAvailable&&t.status===Pf.REQUIRED&&(t=await zf.showConsentForm()),e=t.canRequestAds,Qf=String(t.privacyOptionsRequirementStatus)===`REQUIRED`}catch(e){console.warn(`Consent check failed`,e)}e&&await ep()}async function ep(){if(!Zf){Zf=!0;try{Wf===`ios`&&(await zf.trackingAuthorizationStatus()).status===`notDetermined`&&await zf.requestTrackingAuthorization(),await zf.initialize({initializeForTesting:Bf.length>0,testingDevices:Bf}),rp(),ip()}catch(e){console.warn(`Ads unavailable`,e)}}}function tp(){return Qf}async function np(){try{await zf.showPrivacyOptionsForm(),(await zf.requestConsentInfo()).canRequestAds&&await ep()}catch(e){console.warn(`Privacy options unavailable`,e)}}async function rp(){if(!(Jf||qf)){Jf=!0;try{await zf.prepareRewardVideoAd({adId:Wf===`ios`?Vf.ios:Vf.android,isTesting:!0}),qf=!0}catch{window.setTimeout(()=>void rp(),Uf*1e3)}finally{Jf=!1}}}async function ip(){let e=Wf===`ios`?Hf.ios:Hf.android;if(!(Xf||Yf)){Xf=!0;try{await zf.prepareInterstitial({adId:e||`demo`,isTesting:!0}),Yf=!0}catch{window.setTimeout(()=>void ip(),Uf*1e3)}finally{Xf=!1}}}function ap(){return Yf}async function op(){if(Yf){if(Yf=!1,!Gf)await lp(),Yf=!0;else try{await new Promise(e=>{let t=[zf.addListener(jf.Dismissed,()=>n()),zf.addListener(jf.FailedToShow,()=>n())],n=()=>{for(let e of t)e.then(e=>e.remove());e()};zf.showInterstitial().catch(n)})}finally{ip()}}}function sp(){return qf}async function cp(){if(!qf)return!1;if(qf=!1,!Gf){let e=await lp();return qf=!0,e}try{return await zf.showRewardVideoAd()!==void 0}catch{return!1}finally{rp()}}function lp(){return new Promise(e=>{let t=document.createElement(`div`);t.style.cssText=`position:fixed;inset:0;z-index:99;display:grid;place-items:center;background:#000d;color:#fff;font:800 22px system-ui;text-align:center;pointer-events:auto`,t.innerHTML=`Test ad<br><small style="font-weight:600;font-size:14px;opacity:.7">(browser stand-in)</small>`,document.body.append(t),window.setTimeout(()=>{t.remove(),e(!0)},2e3)})}var up;(function(e){e[e.APPLE_SEARCH_ADS=0]=`APPLE_SEARCH_ADS`,e[e.ADJUST=1]=`ADJUST`,e[e.APPSFLYER=2]=`APPSFLYER`,e[e.BRANCH=3]=`BRANCH`,e[e.TENJIN=4]=`TENJIN`,e[e.FACEBOOK=5]=`FACEBOOK`})(up||={});var dp;(function(e){e.INAPP=`inapp`,e.SUBS=`subs`})(dp||={});var fp;(function(e){e[e.SUBSCRIPTIONS=0]=`SUBSCRIPTIONS`,e[e.SUBSCRIPTIONS_UPDATE=1]=`SUBSCRIPTIONS_UPDATE`,e[e.IN_APP_ITEMS_ON_VR=2]=`IN_APP_ITEMS_ON_VR`,e[e.SUBSCRIPTIONS_ON_VR=3]=`SUBSCRIPTIONS_ON_VR`,e[e.PRICE_CHANGE_CONFIRMATION=4]=`PRICE_CHANGE_CONFIRMATION`})(fp||={});var pp;(function(e){e[e.UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY=0]=`UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY`,e[e.IMMEDIATE_WITH_TIME_PRORATION=1]=`IMMEDIATE_WITH_TIME_PRORATION`,e[e.IMMEDIATE_AND_CHARGE_PRORATED_PRICE=2]=`IMMEDIATE_AND_CHARGE_PRORATED_PRICE`,e[e.IMMEDIATE_WITHOUT_PRORATION=3]=`IMMEDIATE_WITHOUT_PRORATION`,e[e.DEFERRED=4]=`DEFERRED`})(pp||={});var mp;(function(e){e.UNKNOWN=`UNKNOWN`,e.CUSTOM=`CUSTOM`,e.LIFETIME=`LIFETIME`,e.ANNUAL=`ANNUAL`,e.SIX_MONTH=`SIX_MONTH`,e.THREE_MONTH=`THREE_MONTH`,e.TWO_MONTH=`TWO_MONTH`,e.MONTHLY=`MONTHLY`,e.WEEKLY=`WEEKLY`})(mp||={});var hp;(function(e){e[e.INTRO_ELIGIBILITY_STATUS_UNKNOWN=0]=`INTRO_ELIGIBILITY_STATUS_UNKNOWN`,e[e.INTRO_ELIGIBILITY_STATUS_INELIGIBLE=1]=`INTRO_ELIGIBILITY_STATUS_INELIGIBLE`,e[e.INTRO_ELIGIBILITY_STATUS_ELIGIBLE=2]=`INTRO_ELIGIBILITY_STATUS_ELIGIBLE`})(hp||={});var gp=nd(`NativePurchases`,{web:()=>Sd(()=>import(`./web-Q7wZokJ1.js`).then(e=>new e.NativePurchasesWeb),[],import.meta.url)}),_p=`remove_ads`,vp=td.getPlatform()===`ios`||td.getPlatform()===`android`,yp=null;async function bp(){if(!vp)return{owned:!1};try{let{isBillingSupported:e}=await gp.isBillingSupported();if(!e)return{owned:!1};let{product:t}=await gp.getProduct({productIdentifier:_p,productType:dp.INAPP});yp=t.priceString}catch(e){console.warn(`Remove Ads product unavailable`,e)}return{owned:await Sp()}}function xp(){return yp}async function Sp(){try{let{purchases:e}=await gp.getPurchases({productType:dp.INAPP});return e.some(e=>e.productIdentifier===`remove_ads`&&(e.purchaseState===void 0||e.purchaseState===`1`))}catch{return!1}}async function Cp(){if(!vp)return!1;try{return await gp.purchaseProduct({productIdentifier:_p,productType:dp.INAPP,quantity:1}),!0}catch(e){return console.warn(`Purchase did not go through`,e),!1}}async function wp(){if(!vp)return!1;try{await gp.restorePurchases()}catch(e){console.warn(`Restore failed`,e)}return Sp()}var Tp=new L(9.5,5.2,10.5),Ep=new L(-1.9,2.3,-2.5),Dp=.4,Op=2.4,kp=class{camera;mode=`tee`;offset=new L;lookOffset=new L;desired=new L;back=new L(0,0,1);look=new L().copy(Ep);teePos=Tp.clone();teeLook=Ep.clone();baseFov=55;orbit=0;kick=0;aspect=1;sideMeters=!1;constructor(){this.camera=new ds(55,1,2,4e4),this.camera.position.copy(Tp),this.camera.lookAt(Ep)}resize(e,t){let n=e/t;this.camera.aspect=n,this.baseFov=n<1?Nt.clamp(52+(1-n)*34,52,72):50,this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.aspect=n,this.frameTee(),this.mode===`tee`&&(this.camera.position.copy(this.teePos),this.look.copy(this.teeLook),this.camera.lookAt(this.look))}setSideMeters(e){this.sideMeters=e,this.frameTee()}frameTee(){let e=new L().subVectors(Tp,Ep).cross(this.camera.up).normalize(),t=this.aspect<1?this.sideMeters?Op:Dp:0;this.teePos.copy(Tp).addScaledVector(e,t),this.teeLook.copy(Ep).addScaledVector(e,t)}punch(){this.kick=1}setMode(e,t){e===`tee`?(this.camera.position.copy(this.teePos),this.look.copy(this.teeLook),this.back.set(0,0,1)):(this.offset.subVectors(this.camera.position,t),this.lookOffset.subVectors(this.look,t),this.orbit=Math.atan2(this.offset.x,this.offset.z)),this.mode=e}update(e,t,n){let r=this.camera,i=n.length(),a=this.baseFov;if(this.mode===`tee`)r.position.lerp(this.teePos,1-Math.exp(-4*e)),this.look.lerp(this.teeLook,1-Math.exp(-4*e));else if(this.mode===`follow`){let o=Math.hypot(n.x,n.z);o>1&&(this.desired.set(-n.x/o,0,-n.z/o),this.back.lerp(this.desired,1-Math.exp(-2.5*e)).normalize());let s=13+Math.min(i*.04,40)+8*this.kick,c=4.5+Math.min(i*.012,12);this.desired.copy(this.back).multiplyScalar(s),this.desired.y=c,this.offset.lerp(this.desired,1-Math.exp(-3*e)),this.desired.copy(n).multiplyScalar(.06),this.lookOffset.lerp(this.desired,1-Math.exp(-6*e)),r.position.copy(t).add(this.offset),this.look.copy(t).add(this.lookOffset),a+=Math.min(i*.02,14)+16*this.kick}else this.orbit+=e*.2,this.desired.set(Math.sin(this.orbit)*9,3.4,Math.cos(this.orbit)*9),this.offset.lerp(this.desired,1-Math.exp(-1.8*e)),this.lookOffset.lerp(this.desired.set(0,-1.25,0),1-Math.exp(-3*e)),r.position.copy(t).add(this.offset),this.look.copy(t).add(this.lookOffset);if(r.position.y<1.5&&(r.position.y=1.5),r.lookAt(this.look),this.kick>.01){let e=this.kick*this.kick*.05;r.rotateX((Math.random()-.5)*e),r.rotateY((Math.random()-.5)*e),r.rotateZ((Math.random()-.5)*e*1.5)}this.kick*=Math.exp(-2.2*e),Math.abs(r.fov-a)>.01&&(r.fov+=(a-r.fov)*(1-Math.exp(-(this.kick>.3?14:3)*e)),r.updateProjectionMatrix())}},Ap=new L(-2.8,4.45,0),jp=new L(-3.3,3,0),Mp=Math.atan2(Ap.x-jp.x,Ap.y-jp.y),Np=new L(.58,.64,.56),Pp=.68;function Fp(e){return[[.001,-.12],[.33,-.06],[.37,.2],[.48,.6],[.7,1.02],[.8,e-.22],[.74,e],[.46,e+.15],[.001,e+.2]]}function Ip(e){return new Sa(Fp(e).map(([e,t])=>new I(e,t))).getPoints(48)}function Lp(e,t){let n=Ip(e);for(let e=1;e<n.length;e++){let r=n[e-1],i=n[e];if(t>=r.y&&t<=i.y||t<=r.y&&t>=i.y){let e=i.y===r.y?0:(t-r.y)/(i.y-r.y);return r.x+(i.x-r.x)*e}}return 0}function Rp(e,t){return Lp(e,t)*Pp}function zp(e,t,n=1){let r=Np,i=1-(e/(r.y*n))**2-(t/(r.z*n))**2;return r.x*n*Math.sqrt(Math.max(0,i))}function Bp(e,t,n=1){let r=Np,i=1-(e/(r.x*n))**2-(t/(r.z*n))**2;return r.y*n*Math.sqrt(Math.max(0,i))}var Vp=new L;function Hp(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Vp.copy(t),Vp[r]=0,Vp.normalize();let l=.5*o/(o+s),u=1-Vp.angleTo(e)/c;return Math.sign(Vp[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Up=class e extends Ki{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new L,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Hp(m,c,`z`,`y`,i,n),f[a+1]=1-Hp(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Hp(m,c,`z`,`y`,i,n),f[a+1]=1-Hp(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Hp(m,c,`x`,`z`,i,e),f[a+1]=Hp(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Hp(m,c,`x`,`z`,i,e),f[a+1]=1-Hp(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Hp(m,c,`x`,`y`,i,e),f[a+1]=1-Hp(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Hp(m,c,`x`,`y`,i,e),f[a+1]=1-Hp(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Wp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ir,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Gp(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Gp(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Gp(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new xr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Kp(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}function qp(e,t,n=160){let r=new Xu({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});r.setPixelRatio(1),r.setSize(n,n,!1),r.setClearColor(0,0);let i=new Hn;i.add(new $o(16777215,14216380,1.75));let a=new ms(16774886,1.5);a.position.set(1.5,2.5,3),i.add(a);let o=new ds(t.fov,1,.1,20);o.position.copy(t.camera),o.lookAt(t.target);let s=e.map(e=>{i.add(e),r.render(i,o);let t=r.domElement.toDataURL(`image/png`);return i.remove(e),t});return r.dispose(),r.forceContextLoss(),s}var Jp=1909811,G={scrap:{plate:8225676,seam:5264733,glow:10475775},cadet:{plate:2633795,trim:14265157,glow:16757568},recon:{plate:8003114,under:1776930,trim:14265157,blade:15265010,glow:16730682},siege:{plate:2902652,under:1581114,trim:14081512,glow:16734762},storm:{plate:4537472,under:1841456,trim:13225432,gold:14265157,vent:16726858,light:15659263},infinity:{plate:5232880,deep:2068408,under:1323594,gold:15771706,gem:16747050,crystal:10482943,aura:7334143},galaxy:{plate:14165532,dark:9049104,under:2756108,gold:16761402,blade:16771504,flame:16742938},ronin:{plate:1381915,under:789776,gunmetal:3817032,gold:15775794,eye:16724032},aegis:{plate:13949152,under:1776930,gold:14067772,gem:3135176,red:14697018,light:16054015},lancer:{plate:14672874,navy:2371694,under:1711398,line:5925008,glow:16765498,light:16054015},phantom:{plate:1711401,under:921622,silver:13160154,line:5997764,glow:5217791},drake:{plate:1513501,under:855569,red:12065820,lava:16742938,crack:16756782,gem:4644954,bone:16051416},frost:{plate:15133166,under:2764602,line:5941503,ice:8374527,teal:3137736,mask:1711396},blaze:{plate:1381916,under:789776,line:16738842,glow:16742938,red:14165532,gem:4186234},vanguard:{plate:1908784,under:1053208,gunmetal:2896450,line:4161023,glow:6266367,eye:16732120},solar:{plate:15659252,under:1776930,gold:14856762,gem:3107839,glow:7319807,light:16054015},eclipse:{plate:2765940,under:1579812,steel:12830930,line:9278886,glow:7332095,accent:16765498,light:16054015,wing:9423103},tempest:{plate:2248762,under:1448219,chrome:14541802,line:5226303,glow:8847162},titan:{plate:11569710,under:2040102,steel:12172999,blade:14672874,glow:16747039,light:16054015},crimson:{plate:11739180,ivory:15524812,gold:15251530,steel:12568272,under:2759968,gem:16722490,glow:16767050}},Yp=(()=>{let e=new Di(new Uint8Array([0,120,255]),3,1,D);return e.minFilter=r,e.magFilter=r,e.generateMipmaps=!1,e.needsUpdate=!0,e})();function K(e,t={}){return new Ao({color:e,gradientMap:Yp,...t})}var Xp=new WeakMap;function Zp(e){let t=Xp.get(e);if(!t){let n=new Ir;n.setAttribute(`position`,e.getAttribute(`position`)),e.index&&n.setIndex(e.index),t=Kp(n,1e-4),t.computeVertexNormals(),Xp.set(e,t)}return t}var Qp={thickness:.0042,fadeStart:150,fadeEnd:400},$p={thickness:.0038,fadeStart:200,fadeEnd:600},em={thickness:.0034,fadeStart:250,fadeEnd:900},tm=new Map;function nm(e){let t=`${e.thickness}/${e.fadeStart}/${e.fadeEnd}`,n=tm.get(t);return n||(n=new Oo({side:1,transparent:!0,depthWrite:!1,fog:!0,uniforms:To.merge([W.fog,{color:{value:new zn(Jp)},thickness:{value:e.thickness},fadeStart:{value:e.fadeStart},fadeEnd:{value:e.fadeEnd}}]),vertexShader:`
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
      }`}),tm.set(t,n),n)}function rm(e,t=$p){let n=new z(Zp(e.geometry),nm(t));return n.castShadow=!1,n.receiveShadow=!1,n.raycast=()=>{},e.add(n),n}function im(e,t){let n=[];e.traverse(e=>{e instanceof z&&!e.userData.noOutline&&n.push(e)});for(let e of n)rm(e,t)}function am(e,t=em){let n=new Ii(Zp(e.geometry),nm(t),e.count);return n.instanceMatrix=e.instanceMatrix,n.frustumCulled=!1,n}function om(e,t,n){return e.userData.spin={axis:t,speed:n},e}function sm(e,t,n,r=0){return e.userData.pulse={base:e.scale.clone(),speed:t,amount:n,phase:r},e}var cm=[1,1,2,3,4,6,8,10,12,15,17,19,21,23,24,26,28,30,32,35];function lm(e){return cm[Math.min(e,cm.length-1)]}function um(e,t){return t>=5?null:Math.round(e.levelCost*1.8**(t-1))}var dm=[{id:`cudgel`,name:`Scrap Cudgel`,cost:0,levelCost:40,trait:`A stick with a big hex nut bolted on. Everyone starts somewhere.`,power:1,loft:15,sweetSpot:.05,color:10183734},{id:`iron`,name:`Iron Mace`,cost:150,levelCost:60,trait:`Six dark flanges edged in old gold. Solid and dependable.`,power:1.2,loft:14,sweetSpot:.055,color:2633795},{id:`morningstar`,name:`Morning Star`,cost:500,levelCost:150,trait:`A burgundy ball of silver spikes, banded in gold. Forgiving sweet spot.`,power:1.45,loft:13.5,sweetSpot:.06,color:8003114},{id:`cog`,name:`Cog Mace`,cost:1500,levelCost:400,trait:`A steel-blue cog with silver teeth round a glowing core.`,power:1.75,loft:13,sweetSpot:.065,color:2902652},{id:`hex`,name:`Hex Crusher`,cost:4e3,levelCost:1e3,trait:`A violet hexagon edged in silver, split by glowing red seams.`,power:2.15,loft:12.5,sweetSpot:.07,color:4537472},{id:`crystal`,name:`Crystal Mace`,cost:1e4,levelCost:2500,trait:`A glowing ruby ringed with ruby and gold shards. Hums with magic.`,power:2.65,loft:12,sweetSpot:.075,color:11739180},{id:`magma`,name:`Magma Mace`,cost:25e3,levelCost:6e3,trait:`Mustard armor plates over a molten core. Launches monsters like rockets.`,power:3.3,loft:12,sweetSpot:.08,color:11569710},{id:`plasma`,name:`Plasma Mace`,cost:6e4,levelCost:15e3,trait:`A caged ball of green energy from Cosmo's corner of space.`,power:4.2,loft:12,sweetSpot:.09,color:2248762},{id:`rocket`,name:`Rocket Mace`,cost:15e4,levelCost:36e3,trait:`A navy mace with twin boosters that fire on the downswing. Hold on tight!`,power:5.3,loft:11.5,sweetSpot:.1,color:2765940},{id:`thunder`,name:`Thunder Mace`,cost:3e5,levelCost:45e3,trait:`Blue lightning crackles through a white-and-gold head.`,power:6.4,loft:11.5,sweetSpot:.105,color:14856762},{id:`void`,name:`Void Mace`,cost:55e4,levelCost:8e4,trait:`A black orb wrapped in rings of blue light. Eerily quiet.`,power:7.7,loft:11,sweetSpot:.11,color:4161023},{id:`supernova`,name:`Supernova Mace`,cost:1e6,levelCost:15e4,trait:`A captured sun in a black cage ringed in fire.`,power:9.3,loft:11,sweetSpot:.115,color:16738842},{id:`drill`,name:`Turbo Drill`,cost:15e5,levelCost:15e4,trait:`A white turbine drill with ice-blue flutes that spins up as you swing.`,power:11.1,loft:10.5,sweetSpot:.118,color:8374527},{id:`fist`,name:`Rocket Fist`,cost:225e4,levelCost:225e3,trait:`A giant black mech fist with molten knuckles and wrist thrusters. Punch it into orbit!`,power:13.3,loft:10,sweetSpot:.12,color:12065820},{id:`saw`,name:`Ion Buzzsaw`,cost:34e5,levelCost:34e4,trait:`A whirring black disc of glowing blue ion teeth.`,power:16,loft:9.5,sweetSpot:.123,color:5217791},{id:`gravity`,name:`Gravity Hammer`,cost:5e6,levelCost:5e5,trait:`A navy hammer with glowing yellow gravity coils and orbiting weights. Hits like a falling moon.`,power:19.2,loft:9,sweetSpot:.125,color:2371694},{id:`warp`,name:`Warp Gate`,cost:75e5,levelCost:75e4,trait:`A silver portal ring with a teal wormhole swirling inside.`,power:23,loft:8.5,sweetSpot:.128,color:3135176},{id:`quasar`,name:`Quasar Mace`,cost:11e6,levelCost:11e5,trait:`A white-gold star core in a ring of gold light that fires twin beams.`,power:27.6,loft:8,sweetSpot:.13,color:15775794},{id:`blackhole`,name:`Black Hole Mace`,cost:16e6,levelCost:16e5,trait:`A pocket black hole in a gold cage, on a blazing red grip. Mind the event horizon.`,power:33.1,loft:7.5,sweetSpot:.133,color:14165532},{id:`omega`,name:`Omega Breaker`,cost:25e6,levelCost:25e5,trait:`The final mace. An ice-cyan crystal core, golden wings and twin boosters.`,power:39.7,loft:7,sweetSpot:.135,color:5232880}];function fm(e,t){let n=t-1;return{power:e.power*1.04**n,loft:e.loft,sweetSpot:e.sweetSpot+.004*n}}var pm=[{id:`scrap`,name:`Scrap Bot`,cost:0,trait:`Plain steel plating. It will do for now.`,color:8225676,strength:1,tempo:1,hat:`scrap`,jacket:`scrap`,pants:`scrap`,shoes:`scrap`},{id:`cadet`,name:`Cadet Frame`,cost:450,trait:`Dark knight plate, edged in old gold.`,color:2633795,strength:1.19,tempo:1.08,hat:`cadet`,jacket:`cadet`,pants:`cadet`,shoes:`cadet`},{id:`recon`,name:`Recon Frame`,cost:2200,trait:`Burgundy plate over black, traced in gold, with silver blades.`,color:8003114,strength:1.42,tempo:1.16,hat:`recon`,jacket:`recon`,pants:`recon`,shoes:`recon`},{id:`siege`,name:`Siege Frame`,cost:8e3,trait:`Steel-blue plate edged in silver, with glowing wrist emitters.`,color:2902652,strength:1.69,tempo:1.25,hat:`siege`,jacket:`siege`,pants:`siege`,shoes:`siege`},{id:`storm`,name:`Storm Launcher`,cost:26e3,trait:`Violet plate edged in silver and traced in gold, with glowing chest vents.`,color:4537472,strength:2.05,tempo:1.38,hat:`storm`,jacket:`storm`,pants:`storm`,shoes:`storm`},{id:`crimson`,name:`Crimson Destroyer`,cost:72e3,trait:`Crimson plate under ivory armor, traced in gold, with great gold shields on both shoulders.`,color:11739180,strength:2.5,tempo:1.55,hat:`crimson`,jacket:`crimson`,pants:`crimson`,shoes:`crimson`},{id:`titan`,name:`Titan Artillery`,cost:18e4,trait:`Mustard plate with curling shoulder horns and a fan of glowing blades on its back.`,color:11569710,strength:3,tempo:1.75,hat:`titan`,jacket:`titan`,pants:`titan`,shoes:`titan`},{id:`tempest`,name:`Tempest Wing`,cost:3e5,trait:`Dark green plate edged in silver, with tall shoulder plates and long hip blades.`,color:2248762,strength:3.3,tempo:1.85,hat:`tempest`,jacket:`tempest`,pants:`tempest`,shoes:`tempest`},{id:`eclipse`,name:`Eclipse Seraph`,cost:55e4,trait:`Navy plate panelled in silver, boxy shoulder units and wings of pale blue light.`,color:2765940,strength:3.6,tempo:1.95,hat:`eclipse`,jacket:`eclipse`,pants:`eclipse`,shoes:`eclipse`},{id:`solar`,name:`Solar Archon`,cost:1e6,trait:`White plate traced in gold and set with blue gems, under great golden wings.`,color:14856762,strength:4,tempo:2.05,hat:`solar`,jacket:`solar`,pants:`solar`,shoes:`solar`},...[{id:`vanguard`,name:`Vanguard Jet`,cost:14e5,trait:`Glossy black plate traced in blue light, a roaring jet pack and blade wings.`,color:4161023,strength:4.14,tempo:2.1},{id:`blaze`,name:`Blaze Reaver`,cost:19e5,trait:`Black plate traced in orange fire over a red breastplate, with great angular wings.`,color:16738842,strength:4.28,tempo:2.15},{id:`frost`,name:`Frost Sentinel`,cost:26e5,trait:`Pearl-white plate traced in ice-blue light, with teal sensors and white blade wings.`,color:8374527,strength:4.43,tempo:2.2},{id:`drake`,name:`Inferno Drake`,cost:36e5,trait:`Black dragon plate split by glowing lava cracks, with red spiked shoulders, fiery wings and a robot tail.`,color:12065820,strength:4.59,tempo:2.25},{id:`phantom`,name:`Phantom Ops`,cost:5e6,trait:`Black stealth plate edged in silver with blue lights, delta wings and two scout drones.`,color:5217791,strength:4.75,tempo:2.3},{id:`lancer`,name:`Nova Lancer`,cost:7e6,trait:`Silver-white plate with navy accents, jet wings, forward rocket launchers and three drones.`,color:2371694,strength:4.92,tempo:2.35},{id:`aegis`,name:`Aegis Paladin`,cost:95e5,trait:`Silver paladin plate traced in gold, great feather wings, a floating shield, forward launchers and three drones.`,color:3135176,strength:5.09,tempo:2.4},{id:`ronin`,name:`Quantum Ronin`,cost:13e6,trait:`Black samurai plate traced in gold, wings of gold light, twin shields, forward launchers and four drones.`,color:15775794,strength:5.27,tempo:2.45},{id:`galaxy`,name:`Galaxy Overlord`,cost:18e6,trait:`Blazing red plate wreathed in flame, great golden wings, twin shields, heavy forward launchers and four drones.`,color:14165532,strength:5.45,tempo:2.5},{id:`infinity`,name:`Infinity Omega`,cost:25e6,trait:`The final armor. Glowing ice-cyan plate, three pairs of crystal wings, twin shields, the heaviest launchers and five drones.`,color:5232880,strength:5.65,tempo:2.55}].map(e=>({...e,hat:e.id,jacket:e.id,pants:e.id,shoes:e.id}))],mm=[{id:`blobby`,name:`Blobby`,cost:0,levelCost:40,trait:`A wobbly starter bot in plain steel. Big heart.`,drag:1.25,lift:.85,bounce:.3,roll:1.1,color:8225676,trail:8366038,trailCore:14938623,glow:0,voice:1},{id:`puffo`,name:`Puffo`,cost:120,levelCost:70,trait:`An armored ball studded in old gold. Cuts through the air.`,drag:.94,lift:1,bounce:.3,roll:1,color:2633795,trail:14265157,trailCore:16773314,glow:0,voice:1.25},{id:`rocky`,name:`Rocky`,cost:400,levelCost:150,trait:`Grumpy little tank bot in burgundy plate. Barely bounces, rolls forever.`,drag:.7,lift:.95,bounce:.18,roll:.9,color:8003114,trail:11744063,trailCore:16767400,glow:0,voice:.7},{id:`flapjack`,name:`Flapjack`,cost:1100,levelCost:350,trait:`A steel-blue bat drone that spreads its silver-edged wings and glides.`,drag:.52,lift:1.3,bounce:.33,roll:.9,color:2902652,trail:5210070,trailCore:14477567,glow:0,voice:1.45},{id:`boing`,name:`Boing`,cost:3200,levelCost:900,trait:`A violet bunny bot on a silver pogo spring. Huge bounces.`,drag:.45,lift:1.15,bounce:.62,roll:.75,color:4537472,trail:9071615,trailCore:15788799,glow:0,voice:1.65},{id:`ghosty`,name:`Ghosty`,cost:8500,levelCost:2200,trait:`An ivory hover drone with a crimson hood, light as air. Floats like a dream.`,drag:.3,lift:1.45,bounce:.45,roll:.6,color:15524812,trail:15251530,trailCore:16774358,glow:.15,voice:1.3},{id:`ember`,name:`Ember`,cost:21e3,levelCost:5500,trait:`Baby mecha-dragon in mustard plate with a furnace in its belly.`,drag:.17,lift:1.5,bounce:.5,roll:.5,color:11569710,trail:16730642,trailCore:16769354,glow:.25,voice:.9},{id:`cosmo`,name:`Cosmo`,cost:52e3,levelCost:13e3,trait:`A dark green star satellite edged in silver. Barely touches the air.`,drag:.075,lift:1.7,bounce:.6,roll:.4,color:2248762,trail:7208762,trailCore:15400927,glow:.5,voice:1.8},{id:`jetbot`,name:`Jetbot`,cost:13e4,levelCost:32e3,trait:`Tiny navy robot with a jet pack. The air barely slows it down.`,drag:.04,lift:1.8,bounce:.55,roll:.3,color:2765940,trail:7317759,trailCore:14677247,glow:0,voice:1.1},{id:`sparky`,name:`Sparky`,cost:3e5,levelCost:45e3,trait:`A tiny white-and-gold tesla bot. Crackles with blue static.`,drag:.03,lift:1.82,bounce:.55,roll:.25,color:15659252,trail:5213183,trailCore:15268863,glow:.1,voice:1.5},{id:`orbit`,name:`Orbit`,cost:55e4,levelCost:8e4,trait:`A glossy black little planet bot with a ring of blue light and magenta moons.`,drag:.0235,lift:1.84,bounce:.57,roll:.24,color:1908784,trail:4161023,trailCore:13623551,glow:.2,voice:.8},{id:`nova`,name:`Nova`,cost:1e6,levelCost:15e4,trait:`A tiny black sun with a crown of fiery rays. Blazes across the sky.`,drag:.0185,lift:1.86,bounce:.6,roll:.23,color:1381916,trail:16738842,trailCore:16769200,glow:.45,voice:1.2},{id:`ufo`,name:`Zippy`,cost:15e5,levelCost:15e4,trait:`A pearl-white flying saucer with an icy glass dome and a spinning ring of lights.`,drag:.0146,lift:1.87,bounce:.5,roll:.22,color:15133166,trail:8374527,trailCore:15135999,glow:0,voice:1.6},{id:`rex`,name:`Rexo`,cost:225e4,levelCost:225e3,trait:`A pocket robo-rex in black plate with glowing lava spikes and a rocket pod. Rawr!`,drag:.0115,lift:1.88,bounce:.62,roll:.21,color:1513501,trail:16742938,trailCore:16769184,glow:0,voice:.75},{id:`shark`,name:`Jet Shark`,cost:34e5,levelCost:34e4,trait:`A jet-powered robo shark in black stealth plate that slices through the sky.`,drag:.009,lift:1.89,bounce:.56,roll:.2,color:1711401,trail:5217791,trailCore:14743295,glow:0,voice:.95},{id:`astro`,name:`Astro`,cost:5e6,levelCost:5e5,trait:`A little astronaut bot in silver-white and navy with a jet pack and a flag.`,drag:.0072,lift:1.9,bounce:.58,roll:.2,color:14672874,trail:16765498,trailCore:16774864,glow:0,voice:1.35},{id:`prism`,name:`Prism`,cost:75e5,levelCost:75e4,trait:`A faceted crystal bot in silver and teal with gold horns.`,drag:.0057,lift:1.91,bounce:.62,roll:.19,color:13949152,trail:3135176,trailCore:16056317,glow:.3,voice:1.9},{id:`phoenix`,name:`Phoenix`,cost:11e6,levelCost:11e5,trait:`A black mecha phoenix with wings of living golden flame.`,drag:.0045,lift:1.92,bounce:.6,roll:.19,color:1381915,trail:16761402,trailCore:16774080,glow:.25,voice:1.45},{id:`mech`,name:`Gigamech`,cost:16e6,levelCost:16e5,trait:`A mini battle mech in blazing red and gold with twin shoulder rocket launchers.`,drag:.00355,lift:1.93,bounce:.55,roll:.185,color:14165532,trail:16751135,trailCore:16773312,glow:0,voice:.85},{id:`astra`,name:`Astra`,cost:25e6,levelCost:25e5,trait:`The final monster. A glowing ice-cyan bot with a golden halo and three pairs of crystal wings.`,drag:.0028,lift:1.94,bounce:.62,roll:.18,color:12580095,trail:7334143,trailCore:16777215,glow:.3,voice:1.25}];function hm(e,t){let n=t-1;return{drag:e.drag*.95**n,lift:e.lift,bounce:e.bounce,roll:e.roll*.96**n}}var gm={angle:!1,spin:!1};function _m(e,t,n=gm){return{unlocks:n,club:{...e.club,sweetSpot:e.club.sweetSpot+t.sweetSpot},golfer:{strength:e.golfer.strength*t.power,tempo:e.golfer.tempo*t.tempo},monster:{...e.monster,drag:e.monster.drag*t.drag,bounce:Math.min(.9,e.monster.bounce*t.bounce),roll:e.monster.roll*t.roll},strike:{perfectPower:t.perfectPower,curve:t.curve}}}function vm(e){return 1.1*e.tempo}var ym={perfectPower:1,curve:1},bm=.15,xm=.45,Sm=.1,Cm=6,wm=.4,Tm={angle:null,spin:null,spinIdeal:0};function Em(e){let t=Math.abs(e);return t<=.15?`perfect`:t<=.45?`good`:`off`}function Dm(e){if(e===null)return 1;let t=Math.abs(e);return t<=.15?1.04:1-Sm*(t-bm)}function Om(e){return Math.max(-1,Math.min(1,e/18))*.6}function km(e,t,n,r,i=ym,a=Tm){let o=r-.5,s=e.sweetSpot,c=Math.min(1,Math.max(0,Math.abs(o)-s)/(.5-s)),l=Math.sign(o),u;u=c===0?`perfect`:c<.12?`great`:c<.3?`good`:c<.85?l<0?`hook`:`slice`:`shank`;let d=u===`perfect`?1.08*i.perfectPower:1-.5*c,f=.3+.7*n,p=a.spin===null?null:a.spin-a.spinIdeal,m=Dm(a.angle)*Dm(p);return{kind:u,launch:{speed:80*e.power*t.strength*f*d*m,launchDeg:e.loft-5*c+(a.angle??0)*Cm,aimDeg:l*c*7*i.curve,backspin:(1-.3*c)*(1-wm*(a.spin??0)),sidespin:l*c*.9*i.curve}}}var Am=1e3;function jm(e){return 100+25*(Math.min(e,100)-1)}var Mm=.25;function Nm(e,t,n,r,i=$d){let a=Math.round(e/3*i.shot);t===`perfect`&&(a=Math.round(a*(1+i.perfect)));let o=Math.floor(e/Am),s=0;for(let e=1;e<=o;e++)s+=Math.round(jm(e)*i.milestone);let c=0;if(e>n){let t=n>0?e-n:0;c=Math.max(25,Math.round((a*.5+t)*i.record))}let l=r?Math.round(a*Mm):0;return{shot:a,milestones:s,milestoneCount:o,recordBonus:c,fairwayBonus:l,total:a+s+c+l}}var Pm=K(16765503,{emissive:8016384,emissiveIntensity:.3}),Fm=new L(0,1,0);function Im(e,t){return K(e,{emissive:e,emissiveIntensity:t})}function q(e,t,n=0,r=0,i=0){let a=new z(e,t);return a.position.set(n,r,i),a}function Lm(e,t,n,r,i=n,a=10){return q(new B(n,i,e-t,a),r,0,(e+t)/2,0)}function Rm(e){let t=e.index?e.toNonIndexed():e;return t.computeVertexNormals(),t}function zm(e,t){let n=t*.62,r=new B(e,e*.85,n,6).translate(0,n/2,0),i=new V(e,t-n,6).translate(0,n+(t-n)/2,0);return Rm(Wp([r.toNonIndexed(),i.toNonIndexed()]))}function Bm(e,t){let n=new mo(e,0).toNonIndexed().getAttribute(`position`),r=new Float32Array(n.count*3),i=new L,a=new L;for(let e=0;e<n.count;e+=3){a.set(0,0,0);for(let t=0;t<3;t++)a.add(i.fromBufferAttribute(n,e+t));a.divideScalar(3);for(let o=0;o<3;o++)i.fromBufferAttribute(n,e+o).sub(a).multiplyScalar(1-t).add(a),i.toArray(r,(e+o)*3)}let o=new Ir;return o.setAttribute(`position`,new xr(r,3)),o.computeVertexNormals(),o}function Vm(e,t,n,r,i=0){let a=q(e,t);return a.position.copy(n).multiplyScalar(r),a.position.y+=i,a.quaternion.setFromUnitVectors(Fm,n),a}function Hm(e,t=0){return new L(Math.cos(e)*Math.cos(t),Math.sin(t),Math.sin(e)*Math.cos(t))}function Um(e,t,n,r,i,a){let o=new Ea;o.moveTo(n,-i/2),o.lineTo(n+r*.55,-i*.42),o.lineTo(n+r,0),o.lineTo(n+r*.55,i*.42),o.lineTo(n,i/2),o.closePath();let s=new uo(o,{depth:a,bevelEnabled:!1}).translate(0,0,-a/2),c=new R;for(let n=0;n<e;n++){let r=new z(s,t);r.rotation.y=-(n/e)*Math.PI*2,c.add(r)}return c}function Wm(e,t,n){return new uo(new Ea([[0,.2],[.14,.2],[.08,.05],[.18,.05],[.02,-.24],[.07,-.04],[-.02,-.04]].map(([n,r])=>new I(e+n*t,r*t))),{depth:n,bevelEnabled:!1}).translate(0,0,-n/2)}function Gm(e,t){let n=[];for(let r=0;r<e;r++){let i=1-r/(e-1)*2,a=Math.sqrt(1-i*i),o=r*2.39996;i>t||n.push(new L(Math.cos(o)*a,i,Math.sin(o)*a))}return n}function Km(e,t=80){return new aa(Array.from({length:t+1},(n,r)=>e(r/t)))}var qm=null;function Jm(){if(qm)return qm;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,4,64,64,64);n.addColorStop(0,`#ffffff`),n.addColorStop(.25,`#9ff0e8`),n.addColorStop(.7,`#2fd6c8`),n.addColorStop(1,`#123238`),t.fillStyle=n,t.fillRect(0,0,128,128),t.strokeStyle=`rgba(255, 255, 255, 0.6)`,t.lineWidth=5,t.lineCap=`round`;for(let e=0;e<3;e++){t.beginPath();for(let n=0;n<=50;n++){let r=n/50,i=e*Math.PI*2/3+r*5,a=6+r*56;n===0?t.moveTo(64+Math.cos(i)*a,64+Math.sin(i)*a):t.lineTo(64+Math.cos(i)*a,64+Math.sin(i)*a)}t.stroke()}return qm=new Hi(e),qm.colorSpace=Ve,qm}function Ym(e,t,n){let r=new R,i=new R;i.position.y=-n;let a=n,o=K(7041664),s=K(2830134),c=(e,t=.1)=>q(new B(t*.75,t,.09,12),e,0,.26,0),l=(e,t=-.28)=>{let n=q(new V(.07,.16,10),e,0,t,0);return n.rotation.x=Math.PI,n};switch(e.id){case`cudgel`:{let e=K(9067058);r.add(Lm(0,-a+.05,.045,e,.06,7),Lm(-.05,-.45,.062,K(10133672),.062,8)),i.add(q(new B(.24,.24,.24,6),o));for(let e of[.5,2.6,4.4])i.add(Vm(new B(.05,.05,.1,8),s,Hm(e),.24));let t=q(new Ki(.16,.12,.02),K(12609067),0,.02,.2);t.rotation.y=.25,i.add(t);break}case`iron`:{let e=K(G.cadet.plate),t=K(G.cadet.trim,{emissive:G.cadet.trim,emissiveIntensity:.15});r.add(Lm(0,-a+.1,.035,e),Lm(0,-.55,.06,K(2761504)),q(new H(.075,12,10),t,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.062,.014,6,16),t,0,e,0).rotateX(Math.PI/2));i.add(q(new B(.1,.1,.42,12),e),Um(6,t,.07,.19,.42,.03),Um(6,e,.07,.15,.36,.05));for(let e of[-.19,.19])i.add(q(new U(.1,.02,6,20),t,0,e,0).rotateX(Math.PI/2));i.add(c(t),l(t));break}case`morningstar`:{let{plate:e,under:t,trim:n,blade:o}=G.recon,s=K(e),l=K(n,{emissive:n,emissiveIntensity:.15});r.add(Lm(0,-a+.1,.04,K(t)),Lm(0,-.55,.06,s),q(new H(.075,12,10),l,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.062,.014,6,16),l,0,e,0).rotateX(Math.PI/2));i.add(q(new H(.22,18,14),s),c(l,.09));for(let e of[0,Math.PI/2])i.add(q(new U(.225,.02,6,32),l).rotateX(e===0?Math.PI/2:0));for(let e of Gm(22,.7))i.add(Vm(new V(.045,.18,8),K(o),e,.29));break}case`cog`:{let{plate:e,under:t,trim:n}=G.siege,o=K(e),s=K(n);r.add(Lm(0,-a+.1,.04,K(t)),Lm(0,-.55,.06,o),q(new H(.075,12,10),s,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.062,.014,6,16),s,0,e,0).rotateX(Math.PI/2));let c=q(new B(.26,.26,.14,24),o);c.rotation.x=Math.PI/2;let l=q(new B(.11,.11,.18,16),s);l.rotation.x=Math.PI/2;let u=q(new B(.07,.07,.2,16),Im(G.siege.glow,.9));u.rotation.x=Math.PI/2,i.add(c,l,u);for(let e of[-.072,.072])i.add(q(new U(.2,.018,6,32),s,0,0,e));for(let e=0;e<12;e++){let t=e/12*Math.PI*2;i.add(Vm(new Ki(.09,.1,.12),s,new L(Math.cos(t),Math.sin(t),0),.3))}break}case`hex`:{let{plate:e,under:t,trim:n,gold:o,vent:s}=G.storm,u=K(e),d=K(n),f=Im(s,.8);r.add(Lm(0,-a+.1,.04,K(t)),Lm(0,-.55,.06,u),q(new H(.075,12,10),d,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.062,.014,6,16),d,0,e,0).rotateX(Math.PI/2));i.add(q(new B(.25,.25,.46,6),u),c(K(o,{emissive:o,emissiveIntensity:.15})),l(d));for(let e of[-.12,.12])i.add(q(new B(.256,.256,.035,6),f,0,e,0));for(let e of[-.22,.22])i.add(q(new B(.262,.262,.03,6),d,0,e,0));for(let e=0;e<6;e++){let t=Math.PI/2-(e+.5)*(Math.PI/3);for(let e of[-.18,0,.18])i.add(Vm(new V(.05,.1,8),d,Hm(t),.25,e))}break}case`crystal`:{let{plate:e,ivory:t,gold:n,under:o,gem:s}=G.crimson,c=K(n,{emissive:n,emissiveIntensity:.2});r.add(Lm(0,-.55,.055,K(e)),Lm(-.4,-a+.2,.035,K(o)),Lm(-a+.18,-a+.27,.06,c),q(new H(.075,12,10),c,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),c,0,e,0).rotateX(Math.PI/2));let l=Im(s,.3),u=Im(16766314,.25);i.add(q(new H(.13,12,10),K(t))),i.add(Vm(zm(.1,.42),l,new L(0,-1,0),.02));for(let e=0;e<6;e++)i.add(Vm(zm(.065,.3),e%2?u:l,Hm(e/6*Math.PI*2,-.35),.06));break}case`magma`:{let{plate:e,under:t,steel:n}=G.titan,o=K(t);r.add(Lm(0,-.55,.055,K(e)),Lm(-.4,-a+.1,.034,o),q(new H(.075,12,10),o,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),o,0,e,0).rotateX(Math.PI/2));let s=q(new H(.215,16,12),Im(16738842,.9));s.userData.noOutline=!0,i.add(q(Bm(.28,.14),K(e)),s,c(o));let l=K(n),u=Im(16751135,.6);for(let[e,t]of Gm(9,.6).entries())i.add(Vm(new V(.06,.2,8),e%2?u:l,t,.3));break}case`plasma`:{let{plate:e,chrome:t,glow:n}=G.tempest,o=K(t);r.add(Lm(0,-.55,.055,K(e)),Lm(-.4,-a+.18,.04,Im(n,.9)),q(new H(.075,12,10),o,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),o,0,e,0).rotateX(Math.PI/2));i.add(q(new H(.2,18,14),Im(12910474,.9)),c(o),l(o,-.3));for(let e=0;e<3;e++){let t=q(new U(.245,.025,8,28),o);t.rotation.y=e/3*Math.PI,i.add(t)}let s=q(new U(.31,.035,8,36),Im(n,.9));s.rotation.x=Math.PI/2,i.add(s);break}case`rocket`:{let{plate:e,steel:t,under:n}=G.eclipse,o=K(e),s=K(t),u=K(n);r.add(Lm(0,-.55,.055,o),Lm(-.4,-a+.1,.036,s)),i.add(q(new B(.11,.11,.44,12),s),Um(6,o,.08,.17,.4,.045),c(s),l(s));for(let e of[-.15,.15]){let t=q(new B(.08,.08,.36,14),o,e,0,.34);t.rotation.x=Math.PI/2;let n=q(new B(.085,.085,.06,14),s,e,0,.28);n.rotation.x=Math.PI/2;let r=q(new B(.055,.085,.09,12),u,e,0,.56);r.rotation.x=Math.PI/2;let a=q(new Ki(.02,.12,.12),s,e,.1,.46);i.add(t,n,r,a,Xm(e,0,.6))}break}case`thunder`:{let{plate:e,under:t,gold:n}=G.solar,o=K(e),s=K(n,{emissive:n,emissiveIntensity:.2});r.add(Lm(0,-a+.1,.04,K(t)),Lm(0,-.55,.06,o),q(new H(.075,12,10),s,0,.02,0));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),s,0,e,0).rotateX(Math.PI/2));i.add(q(new H(.15,16,12),Im(12577023,.9)),Um(3,o,.08,.2,.42,.045),c(s),l(s));let u=Wm(.1,1.05,.035),d=Im(6265855,.7);for(let e=0;e<3;e++){let t=new z(u,d);t.rotation.y=-((e+.5)/3)*Math.PI*2,i.add(t)}break}case`void`:{let{plate:e,under:t,glow:n,eye:o}=G.vanguard,s=K(e,{emissive:n,emissiveIntensity:.12}),u=Im(n,.9),d=Im(o,.8);r.add(Lm(0,-a+.1,.04,K(t)),Lm(0,-.55,.06,K(e)));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),u,0,e,0).rotateX(Math.PI/2));i.add(q(new H(.21,20,16),s),c(s),l(s,-.3));for(let[e,t]of[[Math.PI/2+.55,.3],[Math.PI/2-.55,-.4]]){let n=q(new U(.3,.025,8,40),u);n.rotation.set(e,0,t),i.add(n)}for(let e=0;e<4;e++){let t=Rm(new go(.06,0)).scale(.8,1.6,.8);i.add(Vm(t,e%2?d:u,Hm(e/4*Math.PI*2+.4,e%2?.5:-.5),.38))}break}case`supernova`:{let{plate:e,red:t,glow:n,gem:o}=G.blaze,s=K(e),u=Im(n,.8);r.add(Lm(0,-a+.1,.04,s),Lm(0,-.55,.065,K(t)));let d=q(new go(.07,0),Im(o,.6),0,.06,0);d.scale.set(1,1.4,1),r.add(d);for(let e of[-.8,-a*.45,-a*.75]){let t=q(new U(.048,.018,8,18),u,0,e,0);t.rotation.x=Math.PI/2,r.add(t)}let f=q(new H(.17,18,14),Im(16738842,1));f.userData.noOutline=!0,i.add(f,Um(8,s,.07,.2,.44,.03),c(s),l(s,-.3));for(let e=0;e<8;e++){let t=e%2?.75:-.75;i.add(Vm(new V(.035,.16,6),u,Hm((e+.5)/8*Math.PI*2,t),.27))}let p=q(new U(.36,.022,8,40),u);p.rotation.x=Math.PI/2,i.add(p);break}case`drill`:{let{plate:e,under:t,ice:n}=G.frost,o=K(e),l=K(t);r.add(Lm(0,-a+.1,.04,s),Lm(0,-.55,.06,o)),i.add(q(new B(.2,.23,.24,18),o,0,.13,0),q(new B(.236,.236,.05,18),l,0,.02,0),c(l,.12));let u=Im(n,.9);for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=q(new Ki(.03,.12,.07),u,Math.cos(t)*.215,.15,Math.sin(t)*.215);n.rotation.y=-t,i.add(n)}let d=om(new R,`y`,5),f=q(new V(.21,.5,18),K(14015977),0,-.24,0);f.rotation.x=Math.PI,d.add(f);for(let e of[0,Math.PI]){let t=Km(t=>{let n=-t*.44,r=.21*(n+.49)/.5+.012,i=e+t*Math.PI*5;return new L(Math.cos(i)*r,n,Math.sin(i)*r)});d.add(q(new yo(t,60,.024,6),u))}i.add(d);break}case`fist`:{let{plate:e,under:t,lava:n}=G.drake,o=K(G.drake.red),s=K(e),l=Im(n,.8),u=K(t);r.add(Lm(0,-.55,.06,o),Lm(-.4,-a+.12,.04,s)),i.add(q(new Up(.44,.3,.34,3,.08),o,0,.02,.03),c(o,.1));for(let e=0;e<4;e++){let t=(e-1.5)*.1;i.add(q(new Up(.094,.22,.15,2,.04),s,t,-.03,-.17),q(new Up(.08,.05,.07,1,.015),l,t,.085,-.2))}let d=q(new Up(.09,.12,.22,2,.04),s,-.25,-.06,-.06);d.rotation.y=.2;let f=q(new B(.16,.17,.14,16),s,0,.02,.25);f.rotation.x=Math.PI/2;let p=q(new B(.175,.175,.04,16),l,0,.02,.2);p.rotation.x=Math.PI/2,i.add(d,f,p);for(let e of[-.07,.07]){let t=q(new B(.05,.065,.08,12),u,e,.02,.35);t.rotation.x=Math.PI/2,i.add(t,Xm(e,.02,.39))}break}case`saw`:{let{plate:e,silver:t,glow:n}=G.phantom,o=K(t),c=Im(n,.9);r.add(Lm(0,-a+.4,.04,s),Lm(0,-.55,.06,K(e)));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),o,0,e,0).rotateX(Math.PI/2));let l=om(new R,`x`,7),u=q(new B(.27,.27,.04,32),K(e));u.rotation.z=Math.PI/2;let d=q(new U(.17,.022,6,28),c);d.rotation.y=Math.PI/2,l.add(u,d);let f=new V(.055,.13,4).scale(.35,1,1);for(let e=0;e<14;e++){let t=e/14*Math.PI*2;l.add(Vm(f,c,new L(0,Math.sin(t),Math.cos(t)),.31))}let p=q(new B(.07,.07,.16,14),s);p.rotation.z=Math.PI/2;let m=q(new U(.39,.045,8,24,Math.PI),o);m.rotation.y=Math.PI/2,i.add(l,p,m);for(let e of[-.07,.07])i.add(q(new Ki(.03,.39,.07),o,e,.195,0));break}case`gravity`:{let{plate:e,glow:t}=G.lancer,n=K(G.lancer.navy),o=K(e),l=Im(t,.9);r.add(Lm(0,-a+.1,.04,s),Lm(0,-.55,.06,n));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),o,0,e,0).rotateX(Math.PI/2));let u=q(new B(.19,.19,.6,18),n);u.rotation.x=Math.PI/2;let d=q(new B(.21,.21,.06,18),o,0,0,-.32);d.rotation.x=Math.PI/2;let f=q(new B(.12,.12,.02,18),l,0,0,-.355);f.rotation.x=Math.PI/2;let p=q(new V(.15,.18,16),n,0,0,.38);p.rotation.x=Math.PI/2,i.add(u,d,f,p,c(n,.11));for(let[e,t]of[[-.19,1],[.19,-1]]){let n=om(new R,`z`,t*2.5);n.position.z=e,n.add(q(new U(.22,.03,8,32),l));for(let e=0;e<3;e++){let t=e/3*Math.PI*2;n.add(q(new H(.06,10,8),o,Math.cos(t)*.22,Math.sin(t)*.22,0))}i.add(n)}break}case`warp`:{let{plate:e,under:t,gold:n,gem:o}=G.aegis,s=K(e),c=Im(n,.2);r.add(Lm(0,-a+.36,.04,K(t)),Lm(0,-.55,.06,s));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),c,0,e,0).rotateX(Math.PI/2));let l=om(q(new Ji(.26,40),new pi({map:Jm(),side:2})),`z`,-3);l.userData.noOutline=!0,i.add(q(new U(.3,.055,10,40),s),q(new U(.255,.014,6,40),Im(o,1)),l);let u=c;for(let e=0;e<4;e++){let t=Math.PI/4+e*Math.PI/2,n=q(new Ki(.09,.13,.15),u,Math.cos(t)*.3,Math.sin(t)*.3,0);n.rotation.z=t,i.add(n)}i.add(q(new Ki(.12,.08,.16),s,0,.36,0));break}case`quasar`:{let{plate:e,gold:t}=G.ronin,n=K(e),o=Im(t,.6);r.add(Lm(0,-a+.1,.04,n),Lm(0,-.55,.06,n));for(let e of[-.12,-.3,-.48])r.add(q(new U(.068,.014,6,16),o,0,e,0).rotateX(Math.PI/2));i.add(q(new H(.15,18,14),Im(16774084,1)),c(n),l(n,-.24));let s=new R;s.rotation.set(.5,0,.3);let u=om(new R,`y`,3),d=q(new U(.27,.035,8,40),o);d.rotation.x=Math.PI/2,u.add(d);for(let e=0;e<3;e++){let t=e/3*Math.PI*2;u.add(q(new H(.05,10,8),Im(16777215,1),Math.cos(t)*.27,0,Math.sin(t)*.27))}s.add(u),i.add(s);for(let e of[-1,1])for(let[t,n,r]of[[.075,.42,16765498],[.035,.4,16777215]]){let a=q(new V(t,n,12),new pi({color:r}),e*(.11+n/2),0,0);a.rotation.z=-e*(Math.PI/2),a.userData.noOutline=!0,i.add(a)}break}case`blackhole`:{let{plate:e,dark:t,gold:n}=G.galaxy,o=Im(n,.5);r.add(Lm(0,-a+.42,.04,K(t)),Lm(0,-.55,.065,K(e)));for(let e of[-.12,-.3,-.48])r.add(q(new U(.075,.016,6,16),o,0,e,0).rotateX(Math.PI/2));i.add(q(new H(.16,20,16),new pi({color:328456})));let s=new R;s.rotation.set(.9,0,-.25);let c=om(new R,`y`,2.5);for(let[e,t,n]of[[.3,.065,16747039],[.205,.03,16774064]]){let r=q(new U(e,t,6,40),Im(n,.95));r.scale.z=.35,r.rotation.x=Math.PI/2,c.add(r)}for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=q(new H(.045,8,6),K(12592683),Math.cos(t)*.33,0,Math.sin(t)*.33);n.scale.set(1.6,.6,1),c.add(n)}s.add(c),i.add(s);for(let e of[0,Math.PI/2]){let t=q(new U(.42,.022,6,40),o);t.rotation.y=e,i.add(t)}i.add(l(o,-.48));break}case`omega`:{let{plate:e,gold:t,crystal:n}=G.infinity,o=Im(t,.5),s=Im(e,.3);r.add(Lm(0,-a+.1,.04,s),Lm(0,-.55,.065,o)),i.add(om(q(Rm(new go(.21,0)).scale(1,1.3,1),Im(n,.6)),`y`,2),l(o,-.34));for(let e of[0,Math.PI/2]){let t=q(new U(.27,.025,6,36),o);t.rotation.y=e,i.add(t)}let c=q(new U(.15,.02,6,30),Im(16774064,1),0,.38,0);c.rotation.x=Math.PI/2,i.add(c);let u=Im(16777215,.8);for(let e of[-1,1]){let t=new R;t.position.set(e*.26,.04,.04);for(let[n,r]of[[.7,.24],[.3,.2],[-.1,.15]]){let i=new R;i.rotation.z=e*n,i.add(q(new Ki(r,.055,.03),o,e*r/2,0,0),q(new Ki(r*.9,.016,.034),u,e*r/2,.03,0)),t.add(i)}i.add(t)}for(let e of[-.11,.11]){let t=q(new B(.065,.065,.26,14),s,e,-.05,.3);t.rotation.x=Math.PI/2;let n=q(new B(.045,.07,.07,12),o,e,-.05,.46);n.rotation.x=Math.PI/2,i.add(t,n,Xm(e,-.05,.49))}break}}if(i.scale.setScalar(1+.05*(t-1)),r.add(i),t>=5)for(let e of[-.62,-.72]){let t=q(new U(.06,.022,8,18),Pm,0,e,0);t.rotation.x=Math.PI/2,r.add(t)}return r.traverse(e=>{e instanceof z&&(e.castShadow=!0)}),im(r,Qp),r}function Xm(e,t,n){let r=new R;r.position.set(e,t,n),r.userData.thrust=!0,r.visible=!1;for(let[e,t,n]of[[.09,.85,16742938],[.055,.5,16774048]]){let i=new z(new V(e,t,12),new pi({color:n}));i.rotation.x=Math.PI/2,i.position.z=t/2,i.userData.noOutline=!0,r.add(i)}return r}var Zm=null;function Qm(e){return Zm??=qp(dm.map(t=>{let n=new R,r=Ym(t,1,e);r.rotation.set(.35,.7,-.75),r.updateMatrixWorld(!0);let i=new L(0,-e,0).applyMatrix4(r.matrix);return r.position.sub(i),n.add(r),n}),{camera:new L(.05,.2,2.7),target:new L(.05,.15,0),fov:24}),Zm}var $m=16765503,eh=G.cadet.trim,th=2830134,nh={scrap:{main:G.scrap.plate,seam:G.scrap.seam,frame:3817286,trim:10133931,glow:G.scrap.glow},cadet:{main:G.cadet.plate,seam:eh,frame:1975347,trim:eh,glow:G.cadet.glow},recon:{main:G.recon.plate,seam:G.recon.trim,frame:G.recon.under,trim:G.recon.trim,glow:G.recon.glow},siege:{main:G.siege.plate,seam:G.siege.trim,frame:G.siege.under,trim:G.siege.trim,glow:G.siege.glow},storm:{main:G.storm.plate,seam:G.storm.gold,frame:G.storm.under,trim:G.storm.trim,glow:G.storm.light},crimson:{main:G.crimson.plate,seam:G.crimson.gold,frame:G.crimson.under,trim:G.crimson.gold,glow:G.crimson.glow},titan:{main:G.titan.plate,seam:G.titan.under,frame:G.titan.under,trim:G.titan.steel,glow:G.titan.glow},tempest:{main:G.tempest.plate,seam:G.tempest.line,frame:G.tempest.under,trim:G.tempest.chrome,glow:G.tempest.glow},eclipse:{main:G.eclipse.plate,seam:G.eclipse.line,frame:G.eclipse.under,trim:G.eclipse.steel,glow:G.eclipse.glow},solar:{main:G.solar.plate,seam:G.solar.gold,frame:G.solar.under,trim:G.solar.gold,glow:G.solar.glow},vanguard:{main:G.vanguard.plate,seam:G.vanguard.line,frame:G.vanguard.under,trim:G.vanguard.gunmetal,glow:G.vanguard.glow},blaze:{main:G.blaze.plate,seam:G.blaze.line,frame:G.blaze.under,trim:G.blaze.red,glow:G.blaze.gem},frost:{main:G.frost.plate,seam:G.frost.line,frame:G.frost.under,trim:G.frost.plate,glow:G.frost.ice},drake:{main:G.drake.plate,seam:G.drake.crack,frame:G.drake.under,trim:G.drake.red,glow:G.drake.gem},phantom:{main:G.phantom.plate,seam:G.phantom.line,frame:G.phantom.under,trim:G.phantom.silver,glow:G.phantom.glow},lancer:{main:G.lancer.plate,seam:G.lancer.line,frame:G.lancer.under,trim:G.lancer.navy,glow:G.lancer.glow},aegis:{main:G.aegis.plate,seam:G.aegis.gold,frame:G.aegis.under,trim:G.aegis.gold,glow:G.aegis.gem},ronin:{main:G.ronin.plate,seam:G.ronin.gold,frame:G.ronin.under,trim:G.ronin.gold,glow:G.ronin.eye},galaxy:{main:G.galaxy.plate,seam:G.galaxy.gold,frame:G.galaxy.under,trim:G.galaxy.gold,glow:16767050},infinity:{main:G.infinity.plate,seam:G.infinity.gold,frame:G.infinity.under,trim:G.infinity.gold,glow:G.infinity.gem}},rh=e=>nh[e]??nh.scrap;function J(e,t,n=0,r=0,i=0){let a=new z(e,t);return a.position.set(n,r,i),a}function Y(e,t){return K(e,{emissive:e,emissiveIntensity:t})}function X(e,t,n,r,i=0,a=0,o=0){return J(new Up(e,t,n,2,Math.min(e,t,n)*.25),r,i,a,o)}function ih(e,t,n,r,i,a,o=e){let s=J(new B(o,e,t,14),n,r,i,a);return s.rotation.z=-Math.PI/2,s}function ah(e,t,n,r,i){let a=J(new H(e,14,10),t,n,r,i);return a.scale.x=.5,a}function oh(e,t,n=1){let r=Np.clone().multiplyScalar(1.07*n),i=Math.acos(Nt.clamp(e/r.y,-1,1)),a=new z(new H(1,32,16,0,Math.PI*2,0,i),t);return a.scale.copy(r),a}function sh(e,t,n,r,i){let a=new Ea([new I(-t/2,-n/2),new I(t/2,-n/2),new I(e/2,n/2),new I(-e/2,n/2)]),o=Math.min(.03,r*.4),s=new uo(a,{depth:r,bevelEnabled:!0,bevelSize:o,bevelThickness:o,bevelSegments:2});return s.rotateY(Math.PI/2),new z(s,i)}function ch(e,t,n,r,i){return[-1,1].map(a=>{let o=X(.05,n*1.02,.06,i,r,0,a*((e+t)/4));return o.rotation.x=a*Math.atan2((e-t)/2,n),o})}function lh(e,t,n,r){let i=Np.clone().multiplyScalar(1.07),a=Math.acos(Nt.clamp(e/i.y,-1,1)),o=Math.acos(Nt.clamp(t/i.y,-1,1)),s=new z(new H(1,32,12,Math.PI+n,Math.PI*2-n*2,a,o-a),r);return s.scale.copy(i),s}function uh(e,t,n,r){return J(new uo(new Ea(e.map(([e,n])=>new I(e*t,.55+(n-.55)*t))),{depth:n,bevelEnabled:!1}).translate(0,0,-n/2),r)}var dh=[[.44,.4],[.36,.66],[.16,1.1],[.04,.8],[-.3,.75],[-.68,.4],[-.4,.52],[0,.6],[.3,.5]],fh=[[.4,.4],[.3,.6],[.08,.8],[-.3,1.04],[-.62,.9],[-.64,.5],[-.3,.56],[.1,.58],[.3,.48]],ph=[[.12,.62],[.06,.5],[-.3,.56],[-.62,.9],[-.24,.72]],mh=[[.42,.42],[.3,.68],[.14,1.26],[0,.86],[-.36,.66],[-.56,.42],[-.15,.56],[.25,.5]],hh=[[.14,.62],[.06,.5],[-.24,.58],[-.36,1.08],[-.12,.74]],gh=[[-.08,0],[.08,0],[.035,.62],[0,.84],[-.035,.62]],_h=[[0,0],[.1,0],[.4,.36],[.5,.6],[.28,.42],[0,.14]],vh=[[0,0],[.08,0],[.42,.5],[.47,.64],[.3,.5],[0,.12]],yh=[[.3,.42],[.16,.66],[-.18,1.36],[-.1,.72],[-.24,.44]],bh=[[.36,.42],[.2,.75],[.1,1.25],[-.15,1.75],[-.05,1.3],[-.3,1],[-.55,.6],[-.35,.5]],xh=[[.34,.44],[.12,.78],[-.2,1.08],[-.62,1.12],[-.3,.94],[-.12,.66],[-.36,.48]],Sh=[[.32,.46],[.16,.74],[-.32,1.24],[-.2,.86],[-.5,.46]],Ch=[[.34,.44],[.16,.76],[-.12,.74],[-.48,.56],[-.56,.4],[-.2,.55],[.2,.52]],wh=[[.36,.42],[.2,.84],[-.04,.8],[-.45,.62],[-.56,.4],[-.2,.55],[.2,.52]];function Th(e,t,n,r,i){let a=(e,t,n,r)=>J(new uo(new Ea([[-.07,0],[.07,0],[.025,e*.8],[0,e],[-.025,e*.8]].map(([e,n])=>new I(e*t,n*t))),{depth:.04,bevelEnabled:!1}).translate(0,0,-.02).rotateY(-Math.PI/2),n,-r,0,0),o=new R;o.position.set(.02,Bp(.02,0,1.07)-.12,0);for(let s=0;s<e;s++){let c=s-(e-1)/2,l=t-Math.abs(c)*.16,u=new R;u.rotation.set(c*n,0,.25),u.add(a(l,1,r,0)),i&&u.add(a(l,1.15,i,.03)),o.add(u)}return o}function Eh(e,t,n,r=1){let i=Np.clone().multiplyScalar(1.07*r),a=Math.sqrt(Math.max(.05,1-(e/i.y)**2))*1.04,o=new z(new B(1,1,t,40,1,!0),n);return o.scale.set(i.x*a,1,i.z*a),o.position.y=e,o}function Dh(e,t,n,r,i=1.03){let a=Np.clone().multiplyScalar(i),o=Math.asin(Math.min(.97,e/2/a.z)),s=Math.acos(Nt.clamp((n+t/2)/a.y,-1,1)),c=Math.acos(Nt.clamp((n-t/2)/a.y,-1,1)),l=new z(new H(1,28,6,Math.PI-o,o*2,s,c-s),r);return l.scale.copy(a),l}function Oh(e){let t=rh(e),n=new R,r=K(t.main),i=Y(t.glow,.9);switch(e){case`cadet`:{let e=Y(eh,.15);n.add(oh(.16,r),lh(.2,-.58,.85,r),Eh(.2,.07,e)),n.add(Dh(.84,.08,.08,i,1.09),Dh(.8,.5,-.29,r,1.08)),n.add(X(.05,.44,.06,e,zp(-.26,0,1.1),-.26,0)),n.add(uh(dh,1,.05,e),uh(dh,.86,.08,r));for(let t of[-1,1]){let i=new R;i.position.set(-.1,.4,t*.5),i.rotation.set(-t*.35,0,.6),i.add(X(.55,.13,.05,r,-.2,0,0),X(.5,.04,.06,e,-.2,.06,0)),n.add(i)}break}case`recon`:{let e=Y(eh,.15),t=J(new V(.07,.42,8),r,.05,Bp(.05,0,1.07)+.16,0);n.add(oh(.12,r),lh(.16,-.58,.82,r),Eh(.16,.05,e),uh(Ch,1,.06,r),t),n.add(Dh(.7,.62,-.25,K(G.recon.under),1.1),Dh(.6,.07,.1,i,1.11));for(let t of[-1,1]){let i=new R;i.position.set(.18,-.22,t*.5),i.rotation.set(-t*.18,0,-.2),i.add(X(.36,.3,.05,r),X(.36,.04,.06,e,0,-.15,0)),n.add(i)}break}case`siege`:{let e=K(G.siege.trim);n.add(oh(.1,r),lh(.14,-.58,.8,r),uh(fh,1,.05,e),uh(fh,.84,.08,r)),n.add(Dh(.86,.62,-.25,e,1.14),Dh(.7,.07,.11,i,1.15));for(let t of[-1,1]){let r=uh(ph,1,.04,e);r.position.set(0,-.36,t*.55),r.rotation.x=t*.2,n.add(r)}break}case`storm`:{let e=K(G.storm.trim);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.04,Y(G.storm.gold,.15))),n.add(uh(mh,1,.05,e),uh(mh,.84,.08,r)),n.add(Dh(.86,.62,-.25,r,1.14),Dh(.7,.06,.1,i,1.15),X(.05,.44,.06,e,zp(-.28,0,1.16),-.28,0));for(let t of[-1,1]){let r=uh(hh,1,.04,e);r.position.set(0,-.3,t*.55),r.rotation.x=t*.25,n.add(r)}break}case`crimson`:{let{ivory:e,steel:t,gem:a}=G.crimson,o=Y(G.crimson.gold,.2);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.05,o),uh(Ch,1,.06,r)),n.add(Dh(.86,.62,-.25,K(t),1.14),Dh(.7,.06,.1,i,1.15));let s=new R;s.position.set(.52,.24,0),s.rotation.z=.35,s.add(J(new H(.07,12,10),Y(a,.6),.03,0,0));for(let t of[-1,1]){let r=new Ea(vh.map(([e,n])=>new I(e*t,n)));s.add(J(new uo(r,{depth:.04,bevelEnabled:!1}).rotateY(-Math.PI/2),o));let i=new R;i.position.set(.18,-.22,t*.5),i.rotation.set(-t*.18,0,-.2),i.add(X(.36,.3,.05,K(e)),X(.36,.04,.06,o,0,-.15,0)),n.add(i)}n.add(s);break}case`titan`:{let e=K(G.titan.under);n.add(oh(.12,e),lh(.16,-.58,.8,e)),n.add(Dh(.86,.62,-.25,r,1.14),Dh(.72,.12,.1,e,1.15),ah(.08,i,zp(.1,0,1.17),.1,0));for(let[e,t]of[[.22,.32],[-.04,.42],[-.3,.34]]){let i=J(new V(.07,t,6),r,e,Bp(e,0,1.07)+t/2-.06,0);i.rotation.z=.3,n.add(i)}for(let e of[-1,1])n.add(J(new H(.05,10,8),Y(G.titan.light,1),.3,.32,e*.45));break}case`tempest`:{let{chrome:e,under:t}=G.tempest,a=K(e);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.05,a)),n.add(Dh(.86,.62,-.25,K(t),1.14),Dh(.7,.06,.1,i,1.15)),n.add(Th(5,.82,.36,a));for(let e of[-1,1]){let t=new R;t.position.set(.18,-.22,e*.5),t.rotation.set(-e*.18,0,-.2),t.add(X(.36,.3,.05,a),X(.32,.035,.06,i,0,-.08,0)),n.add(t)}break}case`eclipse`:{let{steel:e,under:t,light:a}=G.eclipse,o=K(e);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.05,o)),n.add(Dh(.86,.36,-.38,o,1.14),Dh(.8,.26,-.08,K(t),1.145));for(let[e,t,i]of[[0,1,o],[-.09,.82,r],[.09,.82,r]]){let r=uh(Sh,t,.04,i);r.position.z=e,r.rotation.x=e*2.5,n.add(r)}for(let e of[-1,1])n.add(ah(.06,i,zp(-.07,e*.15,1.16),-.07,e*.15),J(new H(.05,10,8),Y(a,1),.3,.32,e*.45));break}case`solar`:{let{under:e,gold:t,gem:a,light:o}=G.solar,s=Y(t,.2);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.05,s)),n.add(Dh(.86,.36,-.38,r,1.14),Dh(.8,.26,-.08,K(e),1.145),Dh(.66,.05,-.07,i,1.15));let c=new Ea([[-.13,.06],[-.08,.06],[0,-.03],[.08,.06],[.13,.06],[0,-.1]].map(([e,t])=>new I(e,t)));n.add(J(new uo(c,{depth:.03,bevelEnabled:!1}).rotateY(Math.PI/2),s,zp(-.34,0,1.15),-.34,0));let l=(e,t,n,r)=>J(new uo(new Ea(e.map(([e,n])=>new I(e*t,n*t))),{depth:.04,bevelEnabled:!1}).rotateY(-Math.PI/2),n,-r,0,0),u=e=>e.map(([e,t])=>[-e,t]),d=new R;d.position.set(.5,.26,0),d.rotation.z=.2,d.add(J(new go(.08,0),Y(a,.5),.04,.02,0));for(let e of[gh,_h,u(_h)])d.add(l(e,1.14,s,.03),l(e,1,r,0));n.add(d);for(let e of[-1,1])n.add(J(new H(.05,10,8),Y(o,1),.3,.32,e*.45));break}case`vanguard`:{let e=Y(t.glow,.8);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.03,e)),n.add(Dh(.86,.62,-.25,r,1.14),Dh(.62,.05,.08,Y(G.vanguard.eye,.9),1.15)),n.add(uh(xh,1.07,.03,e),uh(xh,1,.06,r));let i=new Ea([[-.15,.07],[-.1,.07],[0,-.03],[.1,.07],[.15,.07],[0,-.11]].map(([e,t])=>new I(e,t)));n.add(J(new uo(i,{depth:.03,bevelEnabled:!1}).rotateY(Math.PI/2),e,zp(-.3,0,1.15),-.3,0));break}case`blaze`:{let e=Y(G.blaze.glow,.8);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.03,e)),n.add(Dh(.86,.62,-.25,r,1.14),Dh(.66,.05,.08,i,1.15),Th(5,.98,.42,r,e));let t=J(new go(.07,0),i,zp(.24,0,1.12),.24,0);t.scale.set(.5,1.4,1),n.add(t);break}case`frost`:{let e=Y(G.frost.ice,.8);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.03,e)),n.add(Dh(.86,.62,-.25,r,1.14),Dh(.2,.07,-.36,K(G.frost.mask),1.15));for(let t of[-1,1]){let a=ah(.075,i,zp(-.04,t*.15,1.16),-.04,t*.15);a.scale.set(.4,.55,1.3),a.rotation.x=t*.45;let o=new R;o.position.z=t*.2,o.rotation.x=t*.28,o.add(uh(yh,1.06,.03,e),uh(yh,1,.05,r)),n.add(a,o)}break}case`drake`:{let{red:e,lava:t}=G.drake,a=K(e),o=Y(t,.8);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.03,o)),n.add(Dh(.86,.36,-.38,a,1.14),Dh(.8,.26,-.08,r,1.145));for(let e of[-.3,-.37,-.44])n.add(X(.03,.025,.2,r,zp(e,0,1.15),e,0));for(let e of[-1,1]){let t=new R;t.position.set(zp(-.06,e*.17,1.16),-.06,e*.17),t.rotation.set(-e*.38,-e*.26,0);for(let[e,n,r]of[[1.3,a,-.01],[1,i,.005]]){let i=J(new go(.1*e,0),n,r,0,0);i.scale.set(.3,.4,1.5),t.add(i)}let r=new R;r.position.set(-.3,.48,e*.38),r.rotation.set(e*.35,0,1.15),r.add(J(new V(.11,.62,8),a,0,.31,0),J(new V(.045,.16,8),o,0,.66,0)),n.add(t,r)}for(let e=0;e<3;e++){let t=.15-e*.24;n.add(J(new V(.07,.3-e*.04,4),a,t,Bp(t,0,1.07)+.1,0))}break}case`phantom`:{let e=K(G.phantom.silver);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.03,e)),n.add(Dh(.86,.62,-.25,r,1.14),Dh(.7,.04,0,i,1.15));let t=J(new V(.035,.75,6),e,-.08,Bp(-.08,0,1.07)+.3,0);t.rotation.z=.15;let a=new R;a.position.set(zp(.16,.2,1.16),.16,.2),a.rotation.y=-.3;let o=J(new U(.1,.022,8,24),e);o.rotation.y=Math.PI/2,a.add(o,ah(.085,i,0,0,0)),n.add(t,a);for(let t of[-1,1]){let i=new R;i.position.set(0,-.3,t*.55),i.rotation.x=t*.2,i.add(uh(ph,1.08,.03,e),uh(ph,1,.05,r)),n.add(i)}break}case`lancer`:{let e=K(t.trim);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.05,e)),n.add(Dh(.86,.62,-.25,e,1.14),Dh(.7,.06,.08,i,1.15));let a=new R;a.position.set(.5,.26,0),a.rotation.z=.35,a.add(J(new go(.07,0),i,.04,.02,0),J(new V(.04,.62,6),r,-.03,.31,0));for(let t of[-1,1]){for(let[n,r,o]of[[1.12,i,.03],[1,e,0]]){let e=new Ea(vh.map(([e,r])=>new I(e*t*n,r*n)));a.add(J(new uo(e,{depth:.04,bevelEnabled:!1}).rotateY(-Math.PI/2),r,-o,0,0))}let o=new R;o.position.set(.18,-.22,t*.5),o.rotation.set(-t*.18,0,-.2),o.add(X(.36,.3,.05,r),X(.32,.035,.06,i,0,-.08,0)),n.add(o,J(new H(.05,10,8),Y(G.lancer.light,1),.3,.32,t*.45))}n.add(a);break}case`aegis`:{let e=Y(G.aegis.gold,.2);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.05,e),Th(5,.95,.3,r,e)),n.add(Dh(.86,.62,-.25,K(G.aegis.under),1.14),Dh(.66,.06,.08,i,1.15),X(.05,.3,.07,i,zp(-.08,0,1.15),-.08,0));for(let t of[-1,1]){n.add(J(new H(.05,10,8),Y(G.aegis.light,1),.3,.32,t*.45));for(let[r,i]of[[.5,.42],[.9,.32]]){let a=new R;a.position.set(-.05,.3,t*.62),a.rotation.set(t*r,0,.6),a.add(X(.05,i,.08,e,0,i/2,0)),n.add(a)}}break}case`ronin`:{let{gunmetal:e,gold:t}=G.ronin,a=Y(t,.4),o=K(e);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.04,a),Dh(.86,.62,-.25,r,1.14));let s=J(new U(.42,.06,6,28,Math.PI),a,.55,.95,0);s.rotation.set(0,Math.PI/2,Math.PI),s.scale.set(1,1.75,1);let c=J(new go(.07,0),i,.6,.22,0);c.scale.set(.5,1.3,1),n.add(s,c);for(let e of[-1,1]){let t=ah(.075,i,zp(-.04,e*.15,1.16),-.04,e*.15);t.scale.set(.4,.45,1.4),t.rotation.x=-e*.4,n.add(t)}let l=.95;for(let e=0;e<3;e++){let t=-.2-e*.13,r=.6+e*.06,i=.72+e*.08;n.add(J(new B(r,i,.14,28,1,!0,Math.PI/2+l,Math.PI*2-l*2),o,-.04,t,0))}n.add(J(new B(.89,.9,.03,28,1,!0,Math.PI/2+l,Math.PI*2-l*2),a,-.04,-.52,0));break}case`galaxy`:{let e=Y(G.galaxy.gold,.6);n.add(oh(.12,r),lh(.16,-.58,.8,r),Eh(.16,.04,e)),n.add(Dh(.86,.62,-.25,K(G.galaxy.dark),1.14),Dh(.7,.06,.08,i,1.15)),n.add(uh(bh,1.06,.03,e),uh(bh,1,.06,r));for(let t of[-1,1]){let i=new R;i.position.set(0,-.3,t*.55),i.rotation.x=t*.25,i.add(uh(hh,1.08,.03,e),uh(hh,1,.05,r)),n.add(i,J(new H(.05,10,8),Y(16774880,1),.3,.32,t*.45))}break}case`infinity`:{let{plate:e,deep:t,gold:r}=G.infinity,a=Y(e,.3),o=Y(r,.5);n.add(oh(.12,a),lh(.16,-.58,.8,a),Eh(.16,.04,o),Th(5,1.25,.34,a,o)),n.add(Dh(.86,.62,-.25,K(t),1.14),Dh(.7,.06,.08,i,1.15));let s=J(new go(.07,0),i,zp(.24,0,1.12),.24,0);s.scale.set(.5,1.4,1),n.add(s);for(let e of[-1,1]){let t=new R;t.position.set(0,-.3,e*.55),t.rotation.x=e*.25,t.add(uh(hh,1.08,.03,o),uh(hh,1,.05,a)),n.add(t,J(new H(.05,10,8),Y(16777215,1),.3,.32,e*.45))}break}default:n.add(oh(.1,r),lh(.14,-.58,.8,r),uh(wh,1,.07,r)),n.add(Dh(.66,.62,-.25,K(t.seam),1.1),Dh(.56,.07,.12,i,1.11))}return n}function kh(e){let t=rh(e),n=new R,r=K(t.main),i=K(th),a=Y(t.glow,.8),o=(e,t,n,i=.08)=>X(e,t,n,r,0,i+t/2,0),s=(e=1.2,t=.74)=>X(e,.1,t,i,0,.05,0),c=()=>J(new B(.24,.27,.3,14),i,-.15,.55,0);switch(e){case`cadet`:{let e=Y(eh,.15),t=J(new V(.34,.5,4),r,.62,.2,0);t.rotation.set(Math.PI/4,0,-Math.PI/2),t.scale.set(.8,1,.9);let i=J(new B(.33,.27,.36,8),r,-.15,.6,0);n.add(s(1.3,.7),o(.95,.36,.64,.06),t,X(.5,.05,.07,e,.42,.43,0),i),n.add(J(new U(.32,.03,6,18),e,-.15,.78,0).rotateX(Math.PI/2));break}case`recon`:{let e=J(new V(.32,.46,4),r,.6,.2,0);e.rotation.set(Math.PI/4,0,-Math.PI/2),e.scale.set(.8,1,.9),n.add(s(1.25,.68),o(1,.36,.64,.06),e,X(.45,.04,.06,Y(eh,.15),.4,.42,0),c());break}case`siege`:{let e=K(G.siege.trim);n.add(s(1.25,.72),o(1.05,.38,.68,.06),X(.34,.28,.7,e,.42,.22,0),J(new B(.36,.29,.3,10),e,-.15,.62,0));break}case`storm`:{let e=K(G.storm.trim),t=J(new H(.36,16,8,0,Math.PI*2,0,Math.PI/2),e,.38,.06,0);t.scale.set(1,.85,.95),n.add(s(1.3,.76),o(1.05,.4,.7,.06),t,X(.5,.04,.06,Y(G.storm.gold,.15),0,.47,0)),n.add(J(new B(.34,.28,.34,10),r,-.15,.62,0),J(new U(.34,.03,6,18),e,-.15,.79,0).rotateX(Math.PI/2));break}case`crimson`:n.add(s(1.3,.7),...Eg(r,K(G.crimson.ivory),Y(G.crimson.gold,.2)));break;case`titan`:{let e=K(G.titan.under),t=J(new V(.34,.5,4),e,.62,.2,0);t.rotation.set(Math.PI/4,0,-Math.PI/2),t.scale.set(.8,1,.9),n.add(s(1.3,.76),o(1.02,.42,.72,.06),t,X(.12,.44,.76,K(G.titan.steel),.15,.28,0)),n.add(J(new B(.34,.29,.34,10),r,-.15,.64,0),J(new U(.34,.035,6,18),e,-.15,.81,0).rotateX(Math.PI/2));break}case`tempest`:{let{chrome:e,under:t}=G.tempest,i=K(e),o=J(new V(.34,.5,4),i,.62,.2,0);o.rotation.set(Math.PI/4,0,-Math.PI/2),o.scale.set(.8,1,.9),n.add(s(1.3,.7),X(.98,.38,.66,K(t),0,.25,0),o,X(.5,.04,.06,a,.42,.45,0)),n.add(J(new B(.33,.27,.36,8),r,-.15,.6,0),J(new U(.32,.03,6,18),i,-.15,.78,0).rotateX(Math.PI/2));break}case`eclipse`:{let e=K(G.eclipse.steel),t=Y(G.eclipse.accent,.8),i=J(new H(.36,16,8,0,Math.PI*2,0,Math.PI/2),e,.38,.06,0);i.scale.set(1,.85,.95),n.add(s(1.3,.76),o(1.05,.4,.7,.06),i,X(.12,.42,.74,e,-.1,.27,0));for(let e of[-.37,.37])n.add(J(new H(.045,10,8),t,-.3,.3,e));n.add(J(new B(.34,.28,.34,10),r,-.15,.62,0),J(new U(.34,.03,6,18),e,-.15,.79,0).rotateX(Math.PI/2));break}case`solar`:n.add(s(1.3,.7),...Eg(r,r,Y(G.solar.gold,.2)));break;case`vanguard`:{let e=Y(t.glow,.8);n.add(s(1.3,.7),...Eg(r,r,e),Nh(e));break}case`blaze`:{let e=Y(G.blaze.glow,.8),t=J(new V(.06,.3,6),e,-.68,.32,0);t.rotation.z=Math.PI/2-.3,n.add(s(1.3,.7),...Eg(r,r,e),t);break}case`frost`:n.add(Ah(a),...Eg(r,r,a));break;case`drake`:{let{red:e,lava:t,bone:r}=G.drake,i=J(new V(.07,.3,6),Y(t,.8),-.7,.3,0);i.rotation.z=Math.PI/2,n.add(s(1.25,.72),o(1.05,.4,.7,.06),X(.36,.3,.74,K(e),.4,.24,0),c(),i,...jh(K(r),3)),n.add(J(new H(.05,10,8),a,.1,.47,0));break}case`phantom`:n.add(s(1.3,.7),...Eg(r,r,K(t.trim)),J(new H(.05,10,8),a,.1,.47,0));break;case`lancer`:n.add(Ah(a),...Eg(r,r,K(t.trim)),Nh(a));break;case`aegis`:{let e=Y(G.aegis.gold,.2);n.add(Ah(a),...Eg(r,r,e),Mh(e),J(new go(.05,0),Y(G.aegis.red,.6),.1,.47,0));break}case`ronin`:n.add(s(1.3,.7),...Eg(r,r,Y(G.ronin.gold,.4)));break;case`galaxy`:n.add(s(1.3,.7),...Eg(r,r,Y(G.galaxy.gold,.6)),Nh(Y(G.galaxy.flame,.9)));break;case`infinity`:{let{plate:e,gold:t,aura:r}=G.infinity,i=Y(e,.3),a=Y(t,.5),o=Y(r,.9);n.add(Ah(o),...Eg(i,i,a),Mh(a),Nh(o));break}default:n.add(s(1.2,.7),o(1.05,.38,.66,.06),X(.3,.26,.64,K(t.seam),.42,.2,0),c())}return n}function Ah(e){let t=J(new B(.5,.5,.04,24),e,0,.03,0);return t.scale.set(1.3,1,.85),t}function jh(e,t){return Array.from({length:t},(n,r)=>{let i=J(new V(.08,.26,6),e,.72,.14,(r-(t-1)/2)*.22);return i.rotation.z=-Math.PI/2,i})}function Mh(e){let t=new R;for(let n of[-1,1])for(let[r,i]of[[.5,.42],[.85,.32],[1.2,.24]]){let a=new R;a.position.set(-.1,.55,n*.32),a.rotation.z=-r,a.add(X(i,.06,.04,e,-i/2,0,0)),t.add(a)}return t}function Nh(e){let t=new R,n=J(new V(.08,.3,10),e,-.82,.3,0);return n.rotation.z=Math.PI/2,t.add(ih(.12,.16,K(th),-.6,.3,0,.09),n),t}function Ph(e,t){let n=rh(e),r=new R,i=K(n.main),a=Y(n.glow,.8),o=(e=i,n=.92)=>Fh(t,e,n),s=e=>Fh(t,null,.92,e);switch(e){case`cadet`:{let e=Y(eh,.15);r.add(o(i,1),s(e),Ih(t,t*.93,.09,e),Rh(t,i,e));for(let n of[-1,1]){for(let a=0;a<3;a++)r.add(Lh(t,n,a,i,e));r.add(ug(t,n,i,e))}break}case`recon`:{let e=Y(eh,.15),n=K(G.recon.under);r.add(o(i,.95),s(e),Ih(t,t*.93,.1,n),zh(t,t*.66,e),Rh(t,i,e));for(let a of[-1,1])r.add(Bh(t,a,i,n,e),ug(t,a,i,e));break}case`siege`:{let e=K(G.siege.trim);r.add(o(i,.95),s(e),Ih(t,t*.93,.1,K(G.siege.under)),zh(t,t*.66,e),Rh(t,e,i));for(let n of[-1,1])r.add(Vh(t,n,i,e),ug(t,n,e,i,1.25));break}case`storm`:{let{trim:e,under:n,vent:a,light:c}=G.storm,l=K(e);r.add(o(i,.95),s(l),Ih(t,t*.93,.1,K(n)),cg(t,K(n),Y(a,.9)),Rh(t,i,l));for(let e of[-1,1])r.add(sg(t,e,i,l,Y(c,1)),ug(t,e,i,l,1.15));break}case`crimson`:{let e=Y(G.crimson.gold,.2),n=K(G.crimson.ivory);r.add(o(n,.95),s(e),Ih(t,t*.93,.1,e),ag(t,t*.66,e),Rh(t,i,e));for(let a of[-1,1])r.add(Bh(t,a,n,i,e),ug(t,a,n,e,1.15),og(t,a,e,i));break}case`titan`:{let{under:e,steel:n,blade:c}=G.titan,l=K(e),u=K(n),d=t*.62;r.add(o(i,.95),s(u),Ih(t,t*.93,.1,l)),r.add(ih(.15,.05,l,Rp(t,d)+.09,d,0),ih(.08,.06,a,Rp(t,d)+.11,d,0));for(let e of[-1,1])r.add(Hh(t,e,i,u),ug(t,e,i,u,1.15));r.add(Uh(t,l,u),Wh(t,K(c),a));break}case`tempest`:{let{chrome:e,under:n}=G.tempest,c=K(e),l=K(n);r.add(o(i,.95),s(c),Ih(t,t*.93,.1,l),ng(t,c,a),Rh(t,l,c));for(let e of[-1,1])r.add(lg(t,e,i,c),rg(t,e,c,i,a),ig(t,e,l,c,a));break}case`eclipse`:{let{steel:e,under:n,accent:c,wing:l}=G.eclipse,u=K(e),d=t*.62;r.add(o(i,.95),s(u),Ih(t,t*.93,.1,K(n)),Rh(t,i,u)),r.add(ih(.15,.05,u,Rp(t,d)+.09,d,0),ih(.08,.06,a,Rp(t,d)+.11,d,0));for(let e of[-1,1])r.add(tg(t,e,i,u,K(n),Y(c,.8)),ig(t,e,i,u,a));r.add(Sg(t,i,Y(l,.6),Y(15661311,.9),5,2.3));break}case`solar`:{let{gold:e,gem:n}=G.solar,c=Y(e,.2);r.add(o(i,.95),s(c),Ih(t,t*.93,.1,c),zh(t,t*.66,c),ng(t,c,Y(n,.5)),Rh(t,i,c));for(let e of[-1,1])r.add(Xh(t,e,i,c,Y(n,.5)),ug(t,e,i,c,1.2));r.add(Sg(t,i,Y(e,.3),a,6,2.7));break}case`vanguard`:r.add(o(i,.95),s(a),Ih(t,t*.93,.1,K(n.frame)),ag(t,t*.66,a),Rh(t,i,a));for(let e of[-1,1])r.add(Yh(t,e,i,a),ug(t,e,i,a,1.15));r.add(mg(t,n),Sg(t,i,i,a,5,2.3));break;case`blaze`:{let e=Y(G.blaze.glow,.8);r.add(o(K(G.blaze.red),.95),s(e),Ih(t,t*.93,.1,K(n.frame)),ng(t,e,Y(n.glow,.6),t*.7),Rh(t,i,e));for(let n of[-1,1])r.add(Gh(t,n,i,e),ug(t,n,i,e,1.2));r.add(qh(t,i,e));break}case`frost`:{let{teal:e,mask:c}=G.frost,l=Y(e,.8),u=t*.5;r.add(o(i,.95),s(a),Ih(t,t*.93,.1,K(n.frame)),Rh(t,i,a)),r.add(ih(.14,.05,K(c),Rp(t,u)+.09,u,0),ih(.08,.06,l,Rp(t,u)+.11,u,0));for(let e of[-1,1])r.add(tg(t,e,i,a,K(c),l),eg(t,e,i,a),ug(t,e,i,a,1.2));r.add(Sg(t,i,i,a,5,2.4));break}case`drake`:{let{red:e,lava:c}=G.drake,l=K(e),u=Y(c,.8),d=t*.5;r.add(o(i,.95),s(u),Ih(t,t*.93,.1,K(n.frame)),zh(t,t*.7,u),Rh(t,i,u)),r.add(ih(.13,.05,l,Rp(t,d)+.09,d,0),J(new H(.07,12,10),a,Rp(t,d)+.12,d,0));for(let e of[-1,1])r.add(Zh(t,e,l,i,u,a),ug(t,e,l,u,1.2));r.add(hg(t,u,K(5901581),2.2),gg(t,i,l,u));break}case`phantom`:{let e=K(n.trim);r.add(o(i,.95),s(e),Ih(t,t*.93,.1,K(n.frame)),zh(t,t*.58,a),zh(t,t*.47,a),Rh(t,i,e));for(let n of[-1,1])r.add(Xh(t,n,i,e,a),ug(t,n,i,e,1.2)),r.add(J(new H(.06,10,8),a,.1,.2,n*(Lp(t,.2)+.04)));r.add(Kh(t,i,e,a),_g(t,n,2,i));break}case`lancer`:{let e=K(n.trim),c=t*.6;r.add(o(i,.95),s(e),Ih(t,t*.93,.1,e),zh(t,t*.8,e),Rh(t,e,i)),r.add(ih(.15,.05,e,Rp(t,c)+.09,c,0),ih(.08,.06,a,Rp(t,c)+.11,c,0));for(let a of[-1,1])r.add(Bh(t,a,i,e,e),ug(t,a,i,e,1.15),dg(t,n,a,3,1,1,pg));r.add(mg(t,n),Sg(t,e,i,a,4,2.5),_g(t,n,3,e));break}case`aegis`:{let{gold:e,red:c}=G.aegis,l=Y(e,.2);r.add(o(i,.95),s(l),Ih(t,t*.93,.1,K(n.frame)),ng(t,l,a,t*.7),ng(t,l,Y(c,.6)),Rh(t,i,l));for(let e of[-1,1])r.add($h(t,e,i,l,a),ug(t,e,i,l,1.15),dg(t,n,e,3,2,1.2,pg));r.add(Sg(t,l,i,a,7,3.5),Sg(t,l,i,a,5,2.1,{height:.35,from:1.45,to:2.35})),r.add(vg(t,n),_g(t,n,3,i));break}case`ronin`:{let{gunmetal:e,gold:a}=G.ronin,c=Y(a,.4),l=K(e);r.add(o(i,.95),s(c),Ih(t,t*.93,.1,l),ag(t,t*.66,c),Rh(t,i,c));for(let e of[-1,1])r.add(Qh(t,e,i,c),ug(t,e,i,c,1.3),dg(t,n,e,3,2,1.2,pg),vg(t,n,e));let u=Y(a,.5),d=Y(16774084,.9);r.add(Sg(t,l,u,d,6,3.3),Sg(t,l,u,d,5,2,{height:.35,from:1.45,to:2.35}),_g(t,n,4,l));break}case`galaxy`:{let{dark:e,gold:a,blade:c,flame:l}=G.galaxy,u=Y(a,.6),d=K(e);r.add(o(i,.95),s(u),Ih(t,t*.93,.1,d),ag(t,t*.66,u),Rh(t,i,u));for(let e of[-1,1])r.add(Bh(t,e,i,d,u),ug(t,e,i,u,1.3),dg(t,n,e,3,3,1.4,pg),vg(t,n,e));let f=Y(c,.6),p=Y(l,.9);r.add(Sg(t,u,f,p,7,4),Sg(t,u,f,p,5,2.5,{height:.35,from:1.45,to:2.35})),r.add(_g(t,n,4,d),xg(t,l));break}case`infinity`:{let{plate:e,deep:i,gold:c,crystal:l,aura:u}=G.infinity,d=Y(e,.3),f=Y(c,.5),p=Y(l,.5),m=Y(16777215,.9);r.add(o(d,.95),s(f),Ih(t,t*.93,.1,K(i)),ag(t,t*.66,f),ng(t,f,a),Rh(t,d,f));for(let e of[-1,1])r.add(Zh(t,e,d,p,f,a),ug(t,e,d,f,1.3),dg(t,n,e,4,3,1.6,pg),vg(t,n,e));r.add(Sg(t,f,p,m,8,4.6),Sg(t,f,p,m,6,3,{height:.62,from:.95,to:1.7}),Sg(t,f,p,m,5,2.4,{height:.35,from:1.45,to:2.35})),r.add(mg(t,n),_g(t,n,5,K(i)),xg(t,u,16777215));break}default:{let e=K(n.seam);r.add(o(i,.9),Ih(t,t*.93,.08,e),Rh(t,i,e));for(let n of[-1,1])r.add(lg(t,n,i,e),ug(t,n,i,e))}}return r}function Fh(e,t,n,r){let i=e*.4,a=e*.86,o=Rp(e,i),s=Rp(e,a),c=Math.hypot(a-i,s-o),l=n*.5,u=new R;return u.position.set((o+s)/2-.03,(i+a)/2,0),u.rotation.z=-Math.atan2(s-o,a-i),t&&u.add(sh(n,l,c,.08,t)),r&&u.add(...ch(n,l,c,.13,r)),u}function Ih(e,t,n,r){let i=Lp(e,t)*1.05,a=J(new B(1,1,n,36,1,!0,Math.PI/2-1.7,3.4),r,0,t,0);return a.scale.set(i*Pp,1,i),a}function Lh(e,t,n,r,i){let a=new R;a.position.set(-.02,e+.16-n*.17,t*(.74+n*.09)),a.rotation.x=t*(.35+n*.22);let o=.84-n*.05,s=.52+n*.05;return a.add(X(o,.1,s,r),X(o*1.02,.05,.06,i,0,-.01,s/2*t)),a}function Rh(e,t,n){let r=new R;r.position.set(Rp(e,.2)+.03,.16,0),r.rotation.z=Mp;let i=(e,t,n,r)=>{let i=new uo(new Ea([[-.2,0],[.2,0],[.12,-.45],[0,-.7],[-.12,-.45]].map(([t,n])=>new I(t*e,n*e))),{depth:t,bevelEnabled:!1});return i.rotateY(Math.PI/2),J(i,n,r,0,0)};return r.add(i(1.12,.04,n,-.01),i(1,.07,t,0)),r}function zh(e,t,n){let r=new uo(new Ea([[-.17,.08],[-.11,.08],[0,-.04],[.11,.08],[.17,.08],[0,-.13]].map(([e,t])=>new I(e,t))),{depth:.03,bevelEnabled:!1});return r.rotateY(Math.PI/2),J(r,n,Rp(e,t)+.12,t,0)}function Bh(e,t,n,r,i){let a=lg(e,t,r,r);a.position.y-=.1,a.scale.set(1.1,1,1.1);let o=lg(e,t,n,i);o.position.y-=.22,o.position.z+=t*.1,o.rotation.x=t*.4,o.scale.setScalar(.85);let s=new R;return s.add(a,o,lg(e,t,n,i)),s}function Vh(e,t,n,r){let i=lg(e,t,n,r);i.position.y-=.2,i.position.z+=t*.09,i.rotation.x=t*.4,i.scale.setScalar(.85);let a=J(new uo(new Ea([[.3,.02],[-.1,-.05],[-.72,.3],[-.5,.38],[-.4,.28],[-.2,.3],[.08,.18]].map(([e,t])=>new I(e,t))),{depth:.05,bevelEnabled:!1}).translate(0,0,-.025),r,0,e+.3,t*.82);a.rotation.x=t*.15;let o=new R;return o.add(i,lg(e,t,n,r),a),o}function Hh(e,t,n,r){let i=new L(0,1,0),a=new xa(new L(-.05,e+.2,t*.7),new L(-.05,e+.68,t*1.05),new L(-.1,e+.56,t*1.68)),o=(e,t)=>new uo(new Ea(e.map(([e,t])=>new I(e,t))),{depth:t,bevelEnabled:!1}).translate(0,0,-t/2),s=(e,t,n,r)=>o([[-e/2,-n/2],[e/2,-n/2],[t/2,n/2],[-t/2,n/2]],r),c=(e,t,n)=>{let r=J(e,t);return r.position.copy(a.getPointAt(n)),r.quaternion.setFromUnitVectors(i,a.getTangentAt(n)),r},l=e=>.58-e*.3,u=new R;u.add(lg(e,t,n,r));let d=a.getLength()/6;for(let e=0;e<6;e++){let t=(e+.5)/6;u.add(c(s(l(e/6),l((e+1)/6),d*.84,.12),n,t)),e>0&&u.add(c(s(l(e/6)*.88,l(e/6)*.88,d*.3,.09),r,e/6))}let f=l(1),p=c(o([[-f/2,0],[f/2,0],[0,.4]],.1),r,1);return p.position.addScaledVector(a.getTangentAt(1),-.02),u.add(p),u}function Uh(e,t,n){let r=e*.5,i=e*.86,a=Rp(e,r),o=Rp(e,i),s=new R;s.position.set(-(a+o)/2-.06,(r+i)/2,0),s.rotation.z=Math.atan2(o-a,i-r);let c=(e,t,n,r)=>J(new uo(e,{depth:t,bevelEnabled:!1}).translate(0,0,-t/2).rotateY(Math.PI/2),n,r,0,0),l=e=>new Ea([[0,.34],[.27,.14],[.21,-.2],[0,-.44],[-.21,-.2],[-.27,.14]].map(([t,n])=>new I(t*e,n*e))),u=new Ea(Array.from({length:8},(e,t)=>{let n=Math.PI/2+t*Math.PI/4,r=t%2?.045:.16;return new I(Math.cos(n)*r,Math.sin(n)*r)})),d=J(new U(.12,.015,6,28),n,-.05,.02,0);d.rotation.y=Math.PI/2;let f=c(u,.03,n,-.055);return f.position.y=.02,s.add(c(l(1.12),.04,n,.01),c(l(1),.06,t,-.01),d,f),s}function Wh(e,t,n){let r=e*.6,i=new R;i.position.set(-Rp(e,r)+.02,r,0),i.rotation.z=Mp-.22;for(let e=-3;e<=3;e++){let r=1.9-Math.abs(e)*.12,a=new Ea([[-.08,0],[.08,0],[.075,-r*.75],[0,-r],[-.075,-r*.75]].map(([e,t])=>new I(e,t))),o=new R;o.position.set(-(3-Math.abs(e))*.012,0,e*.07),o.rotation.x=e*.25,o.add(J(new uo(a,{depth:.03,bevelEnabled:!1}).translate(0,0,-.015).rotateY(Math.PI/2),t)),o.add(J(new Ki(.012,r*.6,.022),n,-.02,-r*.42,0)),i.add(o)}return i}function Gh(e,t,n,r){let i=[[.1,0],[-.1,0],[-.34,.54],[-.02,.16]],a=lg(e,t,n,r);a.scale.set(1.15,1.25,1.15);let o=new R;o.add(a);for(let[a,s]of[[.2,.7],[0,.9],[-.2,1.1]]){let c=new R;c.position.set(a,e+.3,t*.92),c.rotation.x=t*.25,c.add(Jh(i,s*1.15,.03,r),Jh(i,s,.05,n,t*.005)),o.add(c)}return o}function Kh(e,t,n,r){let i=[[0,.32],[0,-.28],[.55,-.22],[1.55,.42],[1.45,.56],[.5,.4]],a=new R;for(let o of[-1,1]){let s=new R;s.rotation.y=-Math.PI/2;let c=i.map(([e,t])=>[e*o,t]);s.add(Jh(c,1.05,.03,n),Jh(c,1,.05,t));let[l,u,d,f]=[.55*o,.33,1.38*o,.47],p=J(new Ki(Math.hypot(d-l,f-u),.035,.06),r,(l+d)/2,(u+f)/2,0);p.rotation.z=Math.atan2(f-u,d-l),s.add(p);let m=new R;m.position.set(-.6,e*.75,o*.25),m.rotation.y=-o*.35,m.scale.setScalar(1.2),m.add(s),a.add(m)}return a}function qh(e,t,n){let r=[[0,0],[.25,-.1],[.9,.5],[1.15,1.35],[.55,.78],[.1,.42]],i=[[0,0],[.22,-.16],[1.05,-.24],[.78,.12],[.16,.2]],a=new R;for(let o of[-1,1]){let s=(e,t,n,r,i,a)=>{let s=Jh(e.map(([e,t])=>[e*o,t]),t,n,r);return s.rotation.y=-Math.PI/2,s.position.set(-i,a,0),s},c=new R;c.position.set(-.62,e*.82,o*.28),c.rotation.y=-o*.3,c.scale.setScalar(1.35),c.add(s(r,1.06,.03,n,0,0),s(r,1,.05,t,0,0),s(i,1.06,.03,n,.06,-.15),s(i,1,.05,t,.06,-.15)),a.add(c)}return a}function Jh(e,t,n,r,i=0){return J(new uo(new Ea(e.map(([e,n])=>new I(e*t,n*t))),{depth:n,bevelEnabled:!1}).translate(0,0,-n/2),r,0,0,i)}function Yh(e,t,n,r){let i=[[.3,-.1],[.12,.22],[-.16,.6],[-.14,.28],[-.46,.46],[-.32,.06],[-.1,-.16]],a=lg(e,t,n,r);a.scale.set(1.15,1.35,1.15);let o=new R;o.add(a);for(let a=0;a<2;a++){let s=new R;s.position.set(-.05-a*.15,e+.1-a*.12,t*(1.32+a*.04)),s.rotation.x=t*(.2+a*.1);let c=1-a*.2;s.add(Jh(i,c*1.1,.04,r,-t*.01),Jh(i,c,.06,n)),o.add(s)}return o}function Xh(e,t,n,r,i){let a=[[.42,.18],[.2,.34],[-.36,.3],[-.7,-.08],[-.18,-.16],[.3,-.06]],o=(e,t,n,r)=>Jh(a,e,t,n,r),s=new R;s.add(lg(e,t,n,r));for(let a=0;a<3;a++){let c=new R;c.position.set(-.02+a*.03,e+.16-a*.2,t*(1.3+a*.06)),c.rotation.set(t*(.25+a*.12),0,.1+a*.12);let l=1-a*.12;if(c.add(o(l*1.1,.04,r,-t*.01),o(l,.06,n,0)),a===0){let e=J(new go(.07,0),i,.02,.06,t*.05);e.scale.set(1.4,1,.5),c.add(e)}s.add(c)}return s}function Zh(e,t,n,r,i,a){let o=lg(e,t,n,i);o.scale.set(1.15,1.3,1.15);let s=lg(e,t,n,i);s.position.y-=.2,s.position.z+=t*.1,s.rotation.x=t*.4,s.scale.setScalar(.85);let c=new R;c.add(s,o,J(new H(.06,12,10),a,.5,e+.12,t*.8));for(let n=0;n<4;n++){let i=J(new V(.07,.3-Math.abs(n-1.5)*.04,6),r,.3-n*.2,e+.2,t*1.32);i.rotation.x=t*(Math.PI/2-.5),c.add(i)}return c}function Qh(e,t,n,r){let i=new R;i.add(lg(e,t,n,r));for(let a=0;a<4;a++){let o=new R;o.position.set(-.02,e+.06-a*.17,t*(.9+a*.05)),o.rotation.x=t*.25,o.add(X(.8-a*.03,.16,.08,n),X(.82-a*.03,.035,.09,r,0,-.08,0)),i.add(o)}return i}function $h(e,t,n,r,i){let a=[[.09,0],[-.09,0],[-.05,-.62],[.01,-.82],[.06,-.58]],o=lg(e,t,n,r);o.scale.set(1.1,1.2,1.1);let s=J(new go(.07,0),i,.52,e+.12,t*.8);s.scale.set(.5,1.4,1);let c=new R;c.add(o,s);for(let i=0;i<3;i++){let o=new R;o.position.set(.15-i*.2,e+.05,t*1.3),o.rotation.set(t*.2,0,-.15-i*.22),o.add(Jh(a,1.15,.03,r),Jh(a,1,.05,n)),c.add(o)}return c}function eg(e,t,n,r){let i=[[.13,0],[-.13,0],[-.48,.72],[-.04,.22]],a=new R;for(let[o,s]of[[.1,.8],[-.18,1]]){let c=new R;c.position.set(o,e+.36,t*.95),c.rotation.x=t*.3,c.add(Jh(i,s*1.12,.03,r),Jh(i,s,.05,n)),a.add(c)}return a}function tg(e,t,n,r,i,a){let o=J(new U(.13,.03,8,24),r,0,-.02,t*.335),s=J(new B(.11,.11,.03,20),i,0,-.02,t*.325).rotateX(Math.PI/2),c=new R;return c.position.set(-.05,e+.1,t*.92),c.rotation.x=t*.18,c.add(X(.82,.56,.6,n),X(.7,.06,.48,r,0,.3,0),X(.62,.4,.04,r,0,-.02,t*.3)),c.add(o,s,J(new H(.045,10,8),a,0,-.02,t*.34)),c}function ng(e,t,n,r=e*.46){let i=new R;i.position.set(Rp(e,r)+.1,r,0);for(let[e,r,a]of[[.11,t,0],[.075,n,.025]]){let t=J(new go(e,0),r,a,0,0);t.scale.set(.4,1.6,1),i.add(t)}return i}function rg(e,t,n,r,i){let a=[[.4,.42],[-.18,.62],[-.5,.3],[-.46,-.36],[.08,-.5],[.44,-.12]],o=(e,t,n,r)=>Jh(a,e,t,n,r),s=J(new Ki(.5,.035,.03),i,-.02,-.02,t*.06);s.rotation.z=.35;let c=new R;return c.position.set(-.02,e+.12,t*1.36),c.rotation.x=t*.22,c.add(o(1,.07,n,0),o(.72,.05,r,t*.03),s),c}function ig(e,t,n,r,i){let a=(e,t,n,r)=>J(new uo(new Ea([[.14,.02],[-.14,.02],[-.11,-.9],[.02,-1.3],[.11,-.86]].map(([t,n])=>new I(t*e,n*e))),{depth:t,bevelEnabled:!1}).translate(0,0,-t/2),n,0,0,r),o=new R;return o.position.set(.04,.22,t*(Lp(e,.12)+.2)),o.rotation.set(t*.42,0,Mp),o.add(a(1.08,.04,r,0),a(1,.06,n,t*.01),J(new Ki(.03,.75,.02),i,0,-.48,t*.045)),o}function ag(e,t,n){let r=new uo(new Ea([[0,.16],[.05,.03],[.14,.11],[.1,-.05],[0,-.13],[-.1,-.05],[-.14,.11],[-.05,.03]].map(([e,t])=>new I(e,t))),{depth:.03,bevelEnabled:!1});return r.rotateY(Math.PI/2),J(r,n,Rp(e,t)+.12,t,0)}function og(e,t,n,r){let i=[[.5,0],[.3,.3],[-.05,.42],[-.72,.56],[-.4,.18],[-.62,-.16],[-.22,-.26],[.02,-.5],[.28,-.24]],a=(e,t,n,r)=>Jh(i,e,t,n,r),o=J(new V(.08,.7,8),n),s=new L(1,.1,t*.25).normalize();o.quaternion.setFromUnitVectors(new L(0,1,0),s),o.position.set(.3,.05,t*.06).addScaledVector(s,.35);let c=new R;return c.position.set(-.05,e+.05,t*1.38),c.rotation.x=-t*.2,c.scale.setScalar(.9),c.add(a(1,.06,n,0),a(.66,.04,r,t*.03),J(new H(.11,12,10),n,0,0,t*.05),o),c}function sg(e,t,n,r,i){let a=lg(e,t,n,r);a.scale.set(1.08,1.3,1.08);let o=lg(e,t,n,r);o.position.y-=.2,o.position.z+=t*.1,o.rotation.x=t*.4,o.scale.setScalar(.85);let s=new R;s.add(o,a,J(new H(.06,10,8),i,.15,e+.4,t*.6));for(let[n,i]of[[-.2,.75],[.3,1],[.8,.8]]){let a=J(new uo(new Ea([[0,-.1],[i*.65,-.09],[i,0],[i*.6,.1],[0,.09]].map(([e,t])=>new I(e,t))),{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),r,-.22,e+.08,t*.9);a.rotation.set(0,-t*(Math.PI/2+.3),n),s.add(a)}return s}function cg(e,t,n){let r=e*.62,i=e*.84,a=Rp(e,r),o=Rp(e,i),s=Math.hypot(i-r,o-a),c=new R;c.position.set((a+o)/2+.08,(r+i)/2,0),c.rotation.z=-Math.atan2(o-a,i-r),c.add(X(.03,s+.06,.28,t));for(let e of[-.08,0,.08])c.add(X(.03,s,.035,n,.015,0,e));return c}function lg(e,t,n,r){let i=new R;i.position.set(-.02,e+.02,t*.8);let a=J(new H(1,22,10,0,Math.PI*2,0,Math.PI/2),n);a.scale.set(.54,.34,.5);let o=J(new U(1,.045,6,36),r).rotateX(Math.PI/2);return o.scale.set(.54,.5,1),i.add(a,o),i}function ug(e,t,n,r,i=1){let a=new R;return a.position.set(.02,.12,t*(Lp(e,.12)+.06)),a.rotation.set(t*.35,0,Mp),a.add(X(.5*i,.46*i,.06,n,0,-.23*i,0),X(.52*i,.05,.07,r,0,-.45*i,0)),a}function dg(e,t,n,r,i,a=1,o=fg){let s=new R;s.position.set(-.15,e+o.height*a,n*(1.05+.35*(a-1)));let c=new L(Math.cos(o.elevation),Math.sin(o.elevation),n*o.splay).normalize();s.quaternion.setFromUnitVectors(new L(1,0,0),c),s.scale.setScalar(a);let l=.14+r*.12,u=.14+i*.12,d=K(th);s.add(X(1,u,l,K(t.main)),X(1.02,.05,l+.02,K(t.trim),0,u/2-.07,0),X(.06,u-.05,l-.05,d,.49,0,0));let f=K(1382171),p=K(16726843);for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=(e-(r-1)/2)*.12,a=(t-(i-1)/2)*.12,o=J(new V(.04,.13,8),p,.57,a,n);o.rotation.z=-Math.PI/2,s.add(ih(.045,.04,f,.53,a,n),o)}return s.add(ih(.05,.34,d,.2,0,n*(l/2+.06)),ah(.045,Y(t.glow,.9),.38,0,n*(l/2+.06))),s.add(ih(.11,.06,d,-.52,0,0)),s}var fg={height:.7,elevation:1.3,splay:.35},pg={height:.5,elevation:Mp,splay:.06};function mg(e,t){let n=new R,r=e*.6,i=K(t.trim),a=Y(t.glow,.9),o=Y(16774048,1);n.add(X(.4,.85,.8,K(t.main),-.58,r,0));for(let e of[-.5,.5]){n.add(J(new B(.15,.15,.62,16),i,-.7,r-.02,e),J(new B(.11,.16,.14,14),K(th),-.7,r-.39,e));for(let[t,i,s]of[[.12,.55,a],[.06,.34,o]]){let a=J(new V(t,i,12),s,-.7,r-.46-i/2,e);a.rotation.x=Math.PI,a.userData.noOutline=!0,n.add(a)}}for(let e of[-1,1])n.add(X(.34,.3,.05,i,-.7,r+.42,e*.5));return n}function hg(e,t,n,r){let i=[[0,.25],[.35,.75],[1,.55],[.78,.2],[.85,-.12],[.58,-.02],[.5,-.38],[.26,-.1],[0,-.05]],a=[.35,.75],o=[[1,.55],[.85,-.12],[.5,-.38]],s=new R;for(let c of[-1,1]){let l=new R;l.position.set(-.72,e*.82,c*.3),l.rotation.y=-c*.3;let u=new R;u.rotation.y=-Math.PI/2;let d=new Ea(i.map(([e,t])=>new I(c*e*r,t*r)));u.add(J(new uo(d,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),n));let f=(e,n,i)=>{let a=c*e[0]*r,o=c*n[0]*r,s=Math.hypot(o-a,(n[1]-e[1])*r),l=J(new B(i*.6,i,s,8),t,(a+o)/2,(e[1]+n[1])*r/2,.03);return l.rotation.z=Math.atan2(n[1]*r-e[1]*r,o-a)-Math.PI/2,l};u.add(f([0,.25],a,.09),...o.map(e=>f(a,e,.06)));let p=J(new V(.06,.24,6),K(16051416),c*a[0]*r,a[1]*r+.14,.03);u.add(p,J(new H(.15,12,10),K(th))),l.add(u),s.add(l)}return s}function gg(e,t,n,r){let i=new L(0,1,0),a=new aa([[-.05,0],[-.35,-.55],[-.75,-1.25],[-1.35,-1.85],[-2.05,-2.1],[-2.7,-1.9]].map(([e,t])=>new L(e,t,0))),o=new R;o.position.set(-Rp(e,.1)+.02,.1,0),o.rotation.z=Mp;let s=a.getLength()/9,c=(e,t,n,r=a.getTangentAt(n))=>{let o=J(e,t);return o.position.copy(a.getPointAt(n)),o.quaternion.setFromUnitVectors(i,r),o};for(let e=0;e<9;e++){let i=(e+.5)/9,l=.15*(1-.6*i),u=a.getTangentAt(i),d=new L(u.y,-u.x,0).normalize();o.add(c(new B(l*.9,l,s*.8,8),t,i)),e>0&&o.add(c(new B(l*.78,l*.78,s*.32,8),r,e/9));let f=c(new V(l*.45,l*1.6,4),n,i,d.clone().addScaledVector(u,.6).normalize());f.position.addScaledVector(d,l*1.2),o.add(f)}let l=[[0,-.05],[.17,.1],[0,.55],[-.17,.1]],u=new R;return u.position.copy(a.getPointAt(1)),u.quaternion.setFromUnitVectors(i,a.getTangentAt(1)),u.add(Jh(l,1.15,.03,r),Jh(l,1,.05,n)),o.add(u),o}function _g(e,t,n,r=K(7041664)){let i=om(new R,`y`,.9);i.position.y=e+1.5;for(let e=0;e<n;e++){let a=Math.PI/2+e/n*Math.PI*2,o=new R;o.position.set(Math.cos(a)*1.6,0,Math.sin(a)*1.6),o.rotation.y=-a;let s=J(new U(.2,.025,6,20),K(th),0,.12,0);s.rotation.x=Math.PI/2,o.add(X(.34,.18,.34,r),X(.36,.04,.36,Y(t.glow,.8)),ah(.08,Y(t.glow,.9),.18,0,0),s,J(new B(.03,.03,.1,6),K(th),0,.08,0)),i.add(o)}return i}function vg(e,t,n=-1){let r=new R;r.position.set(.3,e*.55,n*1.6),r.rotation.y=-n*1;let i=om(new R,`z`,.4);r.add(i);let a=Y($m,.4),o=J(new B(.58,.58,.07,6),K(t.main));o.rotation.x=Math.PI/2;let s=J(new B(.34,.34,.09,6),Y(t.glow,.8));return s.rotation.x=Math.PI/2,i.add(o,s,J(new U(.58,.05,4,6),a),X(.08,.5,.12,a),X(.5,.08,.12,a)),r}var yg=null;function bg(){if(yg)return yg;let e=document.createElement(`canvas`);e.width=64,e.height=128;let t=e.getContext(`2d`);t.scale(1,2);let n=t.createRadialGradient(32,34,2,32,32,32);return n.addColorStop(0,`rgba(255, 255, 255, 1)`),n.addColorStop(.3,`rgba(255, 255, 255, 0.8)`),n.addColorStop(.65,`rgba(255, 255, 255, 0.35)`),n.addColorStop(1,`rgba(255, 255, 255, 0)`),t.fillStyle=n,t.fillRect(0,0,64,64),yg=new Hi(e),yg.colorSpace=Ve,yg}function xg(e,t,n=16770720){let r=(e,t,n,r,i,a)=>{let o=new oi(e);return o.position.set(t,n,r),o.scale.set(i,a,1),o},i={map:bg(),transparent:!0,depthWrite:!1},a=new Kr({...i,color:t,opacity:.9}),o={...i,blending:2},s=new R;for(let[t,[n,i,o,c,l]]of[[-.5,e+1.1,0,1.8,3],[-.4,e*.8,1.25,1.6,2.8],[-.4,e*.8,-1.25,1.6,2.8],[-.3,e*.3,1.45,1.4,2.4],[-.3,e*.3,-1.45,1.4,2.4],[-.2,-.6,1.1,1.2,2.2],[-.2,-.6,-1.1,1.2,2.2],[-.3,-.9,0,1.4,2]].entries())s.add(sm(r(a,n,i,o,c*1.25,l*1.25),7+t%3,.12,t*1.7));let c=new Kr({...o,color:n}),l=om(new R,`y`,.7);for(let t=0;t<16;t++){let n=t*2.4,i=1.1+t%3*.3,a=.16+t%2*.08;l.add(sm(r(c,Math.cos(n)*i,-.4+t*.37%(e+1.4),Math.sin(n)*i,a,a*1.6),5+t%4,.4,t))}return s.add(l),s}function Sg(e,t,n,r,i,a,o={}){let{height:s=.8,from:c=.35,to:l=1.5}=o,u=new R;for(let o of[-1,1]){let d=new R;d.position.set(-.72,e*s,o*.25),d.rotation.y=-o*.25,d.add(J(new H(.15,12,10),K(th)));for(let e=0;e<i;e++){let t=e/(i-1),s=a*(1-.45*t),u=new R;u.rotation.x=o*(c+t*(l-c));let f=.1+.07*a;u.add(X(.04,s,f,n,0,s/2+.1,0),X(.05,s*.92,.035,r,0,s/2+.1,-o*(f/2))),d.add(u)}let f=new R;f.rotation.x=o*c,f.add(X(.12,a*.55,.12,t,0,a*.275+.1,0)),d.add(f),u.add(d)}return u}function Cg(e){let t=rh(e),n={thigh:new R,knee:new R,shin:new R},r=K(t.main),i=()=>n.shin.add(X(.04,.5,.06,Y(t.glow,.8),.23,-.06,0));switch(e){case`cadet`:{let e=Y(eh,.15),t=sh(.36,.3,.62,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...ch(.36,.3,.62,.24,e).map(e=>(e.position.y+=.05,e)));let i=J(new V(.075,.32,6),e,.33,.1,0);i.rotation.z=-Math.PI/2+.55,n.knee.add(X(.22,.32,.36,r,.17,0,0),i);let a=sh(.28,.4,.78,.06,r);a.position.set(.14,-.08,0),n.shin.add(a,...ch(.28,.4,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`recon`:{let e=Y(eh,.15),t=sh(.36,.3,.6,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...ch(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(X(.24,.34,.38,r,.17,0,0),X(.04,.04,.32,e,.3,.04,0));let i=sh(.28,.38,.76,.06,r);i.position.set(.14,-.08,0);let a=J(new V(.05,.36,6),K(G.recon.blade),-.24,-.3,0);a.quaternion.setFromUnitVectors(new L(0,1,0),new L(-1,-.35,0).normalize()),n.shin.add(i,...ch(.28,.38,.76,.21,e).map(e=>(e.position.y-=.08,e)),a);break}case`siege`:{let e=K(G.siege.trim),t=sh(.36,.3,.6,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...ch(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(X(.24,.34,.38,e,.17,0,0),J(new V(.1,.26,4),e,.2,.27,0));let i=sh(.28,.4,.78,.06,r);i.position.set(.14,-.08,0),n.shin.add(i,...ch(.28,.4,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`storm`:{let{trim:e,gold:t}=G.storm,i=K(e),a=sh(.36,.3,.6,.06,r);a.position.set(.17,.05,0),n.thigh.add(a,...ch(.36,.3,.6,.24,i).map(e=>(e.position.y+=.05,e)));let o=J(new H(.22,14,10),r,.16,.02,0);o.scale.set(.75,1,1.05),n.knee.add(o,X(.04,.04,.34,Y(t,.15),.32,.04,0),X(.22,.05,.4,i,.15,-.18,0));let s=sh(.28,.42,.78,.06,r);s.position.set(.14,-.08,0),n.shin.add(s,...ch(.28,.42,.78,.21,i).map(e=>(e.position.y-=.08,e)));break}case`tempest`:{let e=K(G.tempest.chrome),a=sh(.36,.3,.6,.06,r);a.position.set(.17,.05,0),n.thigh.add(a,...ch(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e)));let o=J(new go(.06,0),Y(t.glow,.8),.3,.02,0);o.scale.set(.5,1.5,1),n.knee.add(X(.24,.34,.38,e,.17,0,0),o);let s=sh(.28,.4,.78,.06,r);s.position.set(.14,-.08,0),n.shin.add(s,...ch(.28,.4,.78,.21,e).map(e=>(e.position.y-=.08,e))),i();break}case`crimson`:Tg(n,r,r,K(G.crimson.ivory),Y(G.crimson.gold,.2));break;case`vanguard`:Tg(n,r,r,r,Y(t.glow,.8));break;case`titan`:{let e=K(G.titan.steel),i=sh(.36,.3,.6,.06,r);i.position.set(.17,.05,0),n.thigh.add(i,...ch(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(X(.26,.4,.42,r,.17,.02,0),J(new H(.05,10,8),Y(t.glow,.9),.31,.04,0));let a=sh(.28,.42,.78,.06,r);a.position.set(.14,-.08,0),n.shin.add(a,...ch(.28,.42,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`aegis`:{Tg(n,r,r,r,Y(G.aegis.gold,.2));let e=J(new go(.06,0),Y(t.glow,.6),.3,.02,0);e.scale.set(.5,1.4,1),n.knee.add(e),n.shin.add(J(new H(.045,10,8),Y(t.glow,.7),.22,-.3,0));break}case`solar`:{Tg(n,r,r,r,Y(G.solar.gold,.2));let e=J(new go(.06,0),Y(G.solar.gem,.5),.3,.02,0);e.scale.set(.5,1.4,1),n.knee.add(e);break}case`galaxy`:Tg(n,r,r,r,Y(G.galaxy.gold,.6));break;case`infinity`:{let e=Y(G.infinity.plate,.3);Tg(n,e,e,e,Y(G.infinity.gold,.5));let r=J(new go(.06,0),Y(t.glow,.6),.3,.02,0);r.scale.set(.5,1.4,1),n.knee.add(r);break}case`eclipse`:{let e=K(G.eclipse.steel),t=sh(.36,.3,.6,.06,r);t.position.set(.17,.05,0),n.thigh.add(t,...ch(.36,.3,.6,.24,e).map(e=>(e.position.y+=.05,e))),n.knee.add(X(.24,.34,.38,e,.17,0,0),J(new H(.05,10,8),Y(G.eclipse.accent,.8),.3,.03,0));let i=sh(.28,.42,.78,.06,r);i.position.set(.14,-.08,0),n.shin.add(i,...ch(.28,.42,.78,.21,e).map(e=>(e.position.y-=.08,e)));break}case`ronin`:Tg(n,r,r,r,Y(G.ronin.gold,.4));break;case`blaze`:{Tg(n,r,r,r,Y(G.blaze.glow,.8));let e=J(new go(.06,0),Y(t.glow,.6),.3,.02,0);e.scale.set(.5,1.4,1),n.knee.add(e);break}case`phantom`:Tg(n,r,r,r,K(t.trim)),n.knee.add(J(new H(.05,10,8),Y(t.glow,.8),.3,-.06,0)),i();break;case`frost`:Tg(n,r,r,r,Y(t.glow,.8)),n.knee.add(ih(.08,.04,K(G.frost.mask),.3,.02,0),ih(.05,.05,Y(G.frost.teal,.8),.31,.02,0));break;case`drake`:Tg(n,r,K(G.drake.red),r,Y(G.drake.lava,.8)),n.knee.add(J(new H(.05,10,8),Y(t.glow,.7),.3,-.06,0)),n.shin.add(J(new H(.045,10,8),Y(t.glow,.7),.22,-.3,0));break;case`lancer`:Tg(n,r,K(t.trim),r,K(t.trim)),n.knee.add(J(new H(.05,10,8),Y(t.glow,.8),.3,-.06,0)),i();break;default:{let e=sh(.34,.28,.56,.06,r);e.position.set(.17,.05,0);let i=sh(.28,.34,.7,.06,r);i.position.set(.14,-.08,0),n.thigh.add(e),n.knee.add(X(.22,.3,.34,r,.16,0,0)),n.shin.add(i,X(.07,.08,.4,K(t.seam),.15,-.4,0))}}return n}function wg(e,t){let n=new R;if(e===`scrap`){let t=rh(e),r=K(t.main);n.add(J(new H(.23,14,10),r),J(new B(.22,.27,.58,12),r,0,-.45,0)),n.add(J(new U(.26,.03,6,20),K(t.seam),0,-.62,0).rotateX(Math.PI/2))}else if(e===`eclipse`){let r=K(rh(e).main),i=K(G.eclipse.steel),a=(e,t)=>J(new U(e,.025,6,20),i,0,t,0).rotateX(Math.PI/2),o=new Ea([[.13,-.18],[.15,-.58],[.02,-.7],[-.15,-.6],[-.11,-.22]].map(([e,t])=>new I(e,t))),s=new R;s.rotation.x=-t*.12,s.add(J(new uo(o,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),i,0,0,t*.27)),s.add(J(new H(.045,10,8),Y(G.eclipse.accent,.8),0,-.6,t*.3)),n.add(J(new B(.23,.22,.42,12),r,0,.42,0),J(new H(.24,14,10),i)),n.add(J(new B(.22,.29,.6,12),r,0,-.45,0),a(.22,-.15),a(.29,-.75),s)}else if(e===`tempest`){let r=rh(e),i=K(r.main),a=K(G.tempest.chrome),o=(e,t)=>J(new U(e,.025,6,20),a,0,t,0).rotateX(Math.PI/2),s=new Ea([[.12,-.2],[.14,-.62],[0,-.74],[-.14,-.62],[-.1,-.24]].map(([e,t])=>new I(e,t))),c=new R;c.rotation.x=-t*.12,c.add(J(new uo(s,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02),a,0,0,t*.27)),c.add(J(new Ki(.03,.34,.02),Y(r.glow,.8),0,-.45,t*.3)),n.add(J(new B(.23,.22,.42,12),i,0,.42,0),J(new H(.24,14,10),a)),n.add(J(new B(.22,.29,.6,12),i,0,-.45,0),o(.22,-.15),o(.29,-.75),c)}else if(e===`titan`){let r=rh(e),i=Y(r.glow,.9);n.add(J(new H(.25,14,10),K(G.titan.steel)),J(new B(.22,.29,.6,12),K(r.main),0,-.45,0)),n.add(J(new U(.29,.035,6,20),K(G.titan.under),0,-.75,0).rotateX(Math.PI/2));for(let e of[-.32,-.52]){let r=.22+(-.15-e)/.6*.07;n.add(J(new H(.045,10,8),i,0,e,t*(r+.01)))}}else if(e===`infinity`){let{plate:e,gold:r,gem:i}=G.infinity,a=Y(e,.3),o=J(new go(.06,0),Y(i,.6),0,-.6,t*.29);o.scale.set(1,1.4,.5),n.add(Dg(t,a,a,Y(r,.5)),o)}else if(e===`galaxy`){let r=K(rh(e).main);n.add(Dg(t,r,r,Y(G.galaxy.gold,.6)))}else if(e===`ronin`){let r=K(rh(e).main);n.add(Dg(t,r,r,Y(G.ronin.gold,.4)))}else if(e===`aegis`){let r=rh(e),i=K(r.main),a=J(new go(.06,0),Y(r.glow,.6),0,-.6,t*.29);a.scale.set(1,1.4,.5),n.add(Dg(t,i,i,Y(G.aegis.gold,.2)),a)}else if(e===`lancer`){let r=rh(e),i=K(r.trim);n.add(Dg(t,i,K(r.main),i),J(new H(.05,10,8),Y(r.glow,.8),.27,-.45,0))}else if(e===`phantom`){let r=rh(e),i=K(r.main);n.add(Dg(t,i,i,K(r.trim)),J(new H(.05,10,8),Y(r.glow,.8),.27,-.45,0))}else if(e===`drake`){let r=rh(e);n.add(Dg(t,K(G.drake.red),K(r.main),Y(G.drake.lava,.8))),n.add(J(new H(.05,10,8),Y(r.glow,.7),.27,-.45,0))}else if(e===`frost`){let r=rh(e),i=K(r.main);n.add(Dg(t,i,i,Y(r.glow,.8))),n.add(ih(.09,.04,K(G.frost.mask),.26,-.42,0),ih(.055,.05,Y(G.frost.teal,.8),.275,-.42,0))}else if(e===`blaze`){let r=rh(e),i=K(r.main),a=J(new go(.06,0),Y(r.glow,.6),0,-.6,t*.29);a.scale.set(1,1.4,.5),n.add(Dg(t,i,i,Y(G.blaze.glow,.8)),a)}else if(e===`vanguard`){let r=K(rh(e).main);n.add(Dg(t,r,r,Y(rh(e).glow,.8)))}else if(e===`solar`){let r=K(rh(e).main),i=J(new go(.06,0),Y(G.solar.gem,.5),0,-.6,t*.29);i.scale.set(1,1.4,.5),n.add(Dg(t,r,r,Y(G.solar.gold,.2)),i)}else if(e===`crimson`)n.add(Dg(t,K(rh(e).main),K(G.crimson.ivory),Y(G.crimson.gold,.2)));else if(e===`storm`){let r=K(rh(e).main),i=K(G.storm.trim),a=J(new Ki(.05,.42,.1),i,0,-.42,t*.31);a.rotation.x=-t*.19,n.add(J(new B(.23,.22,.42,12),r,0,.42,0),J(new H(.24,14,10),r),J(new B(.22,.34,.62,12),r,0,-.46,0),a),n.add(J(new U(.23,.025,6,20),Y(G.storm.gold,.15),0,-.16,0).rotateX(Math.PI/2),J(new U(.34,.035,6,20),i,0,-.77,0).rotateX(Math.PI/2))}else if(e===`siege`){let r=K(rh(e).main),i=K(G.siege.trim),a=(e,t)=>J(new U(e,.025,6,20),i,0,t,0).rotateX(Math.PI/2),o=J(new B(.1,.1,.06,12),K(G.siege.under),0,-.6,t*.26).rotateX(Math.PI/2),s=J(new B(.065,.075,.08,12),Y(G.siege.glow,.9),0,-.6,t*.3).rotateX(Math.PI/2);n.add(J(new H(.23,14,10),r),J(new B(.22,.28,.6,12),r,0,-.45,0),a(.22,-.16),a(.28,-.75),o,s)}else if(e===`recon`){let r=K(rh(e).main),i=J(new V(.05,.38,6),K(G.recon.blade),0,-.4,t*.3);i.quaternion.setFromUnitVectors(new L(0,1,0),new L(0,.55,t).normalize()),n.add(J(new H(.23,14,10),r),J(new B(.22,.28,.6,12),r,0,-.45,0),i),n.add(J(new U(.28,.025,6,20),Y(eh,.15),0,-.75,0).rotateX(Math.PI/2))}else if(e===`cadet`){let t=K(rh(e).main),r=Y(eh,.15),i=(e,t)=>J(new U(e,.025,6,20),r,0,t,0).rotateX(Math.PI/2);n.add(J(new B(.23,.22,.42,12),t,0,.42,0),J(new H(.24,14,10),t)),n.add(J(new B(.22,.27,.6,12),t,0,-.45,0),i(.22,-.15),i(.27,-.75),i(.23,.21))}return n}function Tg(e,t,n,r,i){let a=sh(.36,.3,.6,.06,t);a.position.set(.17,.05,0),e.thigh.add(a,...ch(.36,.3,.6,.24,i).map(e=>(e.position.y+=.05,e))),e.knee.add(X(.24,.34,.38,n,.17,0,0),J(new V(.1,.28,4),i,.2,.28,0));let o=sh(.28,.4,.78,.06,r);o.position.set(.14,-.08,0),e.shin.add(o,...ch(.28,.4,.78,.21,i).map(e=>(e.position.y-=.08,e)))}function Eg(e,t,n){let r=J(new V(.34,.5,4),t,.62,.2,0);return r.rotation.set(Math.PI/4,0,-Math.PI/2),r.scale.set(.8,1,.9),[X(.98,.38,.66,e,0,.25,0),r,X(.5,.05,.07,n,.42,.45,0),J(new B(.33,.27,.36,8),e,-.15,.6,0),J(new U(.32,.03,6,18),n,-.15,.78,0).rotateX(Math.PI/2)]}function Dg(e,t,n,r){let i=(e,t)=>J(new U(e,.025,6,20),r,0,t,0).rotateX(Math.PI/2),a=new Ea([[.27,-.72],[.38,-.66],[.44,-.22],[.3,-.36],[.22,-.28]].map(([t,n])=>new I(t*e,n))),o=new R;return o.add(J(new B(.23,.22,.42,12),t,0,.42,0),J(new H(.24,14,10),t)),o.add(J(new B(.22,.29,.6,12),n,0,-.45,0),i(.22,-.15),i(.29,-.75)),o.add(J(new uo(a,{depth:.04,bevelEnabled:!1}).translate(0,0,-.02).rotateY(-Math.PI/2),r)),o}var Og=new Map;function kg(t,n,r,i,a){let o=Og.get(t);if(!o){let s=document.createElement(`canvas`);s.width=n,s.height=r,i(s.getContext(`2d`)),o=new Hi(s),o.colorSpace=Ve,o.wrapS=o.wrapT=e,o.repeat.set(...a),Og.set(t,o)}return o}var Ag=e=>`#${e.toString(16).padStart(6,`0`)}`;function jg(e,t){return kg(`plating-${e}`,32,32,n=>{n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.fillStyle=Ag(t.seam),n.fillRect(0,0,32,2),n.fillRect(0,0,2,32);for(let[e,t]of[[6,6],[26,6],[6,26],[26,26]])n.fillRect(e-1,t-1,2,2);e===`infinity`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(6,31),n.quadraticCurveTo(6,14,16,10),n.quadraticCurveTo(26,6,26,1),n.moveTo(16,10),n.quadraticCurveTo(21,18,29,18),n.stroke()):e===`ronin`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,30),n.bezierCurveTo(3,12,27,22,26,3),n.moveTo(14,21),n.quadraticCurveTo(20,18,19,11),n.stroke()):e===`aegis`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,3),n.lineTo(28,16),n.lineTo(16,29),n.lineTo(4,16),n.closePath(),n.stroke()):e===`lancer`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,4),n.lineTo(28,4),n.lineTo(28,21),n.lineTo(21,28),n.lineTo(4,28),n.closePath(),n.stroke()):e===`phantom`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.2,n.beginPath(),n.moveTo(4,9),n.lineTo(16,17),n.lineTo(28,9),n.moveTo(4,17),n.lineTo(16,25),n.lineTo(28,17),n.stroke()):e===`drake`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.4,n.beginPath(),n.moveTo(1,8),n.lineTo(9,12),n.lineTo(13,5),n.lineTo(20,14),n.lineTo(31,10),n.moveTo(5,31),n.lineTo(11,22),n.lineTo(18,25),n.lineTo(24,18),n.lineTo(31,22),n.stroke()):e===`frost`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(6,3),n.lineTo(6,13),n.quadraticCurveTo(6,20,13,20),n.lineTo(20,20),n.quadraticCurveTo(26,20,26,26),n.lineTo(26,31),n.moveTo(15,9),n.lineTo(21,9),n.stroke()):e===`vanguard`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,30),n.quadraticCurveTo(3,10,18,7),n.quadraticCurveTo(29,6,26,17),n.quadraticCurveTo(23,24,15,20),n.stroke()):e===`solar`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,6),n.lineTo(16,18),n.lineTo(28,6),n.moveTo(16,18),n.lineTo(16,31),n.stroke()):e===`eclipse`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,1),n.lineTo(16,13),n.lineTo(4,25),n.moveTo(16,13),n.lineTo(28,25),n.stroke()):e===`tempest`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(1,22),n.lineTo(10,22),n.lineTo(16,16),n.lineTo(31,16),n.moveTo(16,16),n.lineTo(16,4),n.stroke()):e===`titan`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.2,n.beginPath(),n.moveTo(3,31),n.lineTo(3,12),n.lineTo(12,3),n.lineTo(31,3),n.moveTo(20,31),n.lineTo(31,20),n.stroke()):e===`crimson`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,30),n.quadraticCurveTo(5,21,11,10),n.quadraticCurveTo(14,16,16,3),n.quadraticCurveTo(18,16,21,10),n.quadraticCurveTo(27,21,16,30),n.stroke()):e===`storm`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(6,31),n.lineTo(6,14),n.lineTo(16,4),n.lineTo(26,14),n.lineTo(26,31),n.stroke()):e===`siege`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(16,30),n.bezierCurveTo(4,22,6,8,16,2),n.moveTo(16,30),n.bezierCurveTo(28,22,26,8,16,2),n.stroke()):e===`recon`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(3,27),n.quadraticCurveTo(9,8,21,10),n.quadraticCurveTo(30,12,25,20),n.stroke()):e===`cadet`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.2,n.beginPath(),n.moveTo(4,8),n.lineTo(16,22),n.lineTo(28,8),n.stroke()):e===`blaze`?(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(3,31),n.lineTo(3,18),n.lineTo(12,9),n.lineTo(24,9),n.lineTo(31,2),n.moveTo(12,9),n.lineTo(12,1),n.stroke()):e===`galaxy`&&(n.fillStyle=Ag(t.main),n.fillRect(0,0,32,32),n.strokeStyle=Ag(t.seam),n.lineWidth=1.1,n.beginPath(),n.moveTo(4,5),n.quadraticCurveTo(9,22,16,29),n.quadraticCurveTo(23,22,28,5),n.moveTo(16,29),n.lineTo(16,14),n.stroke())},[4,3])}function Mg(e,t){return kg(`segments-${e}`,16,16,n=>{n.fillStyle=Ag(t.frame),n.fillRect(0,0,16,16),n.fillStyle=e===`cadet`?Ag(eh):`#1d2026`,n.fillRect(0,13,16,e===`cadet`?1.5:3)},[1,4])}function Ng(e){let t=rh(e);return{body:{color:16777215,map:jg(e,t)},sleeves:{color:16777215,map:Mg(e,t)}}}function Pg(e){return{color:16777215,map:Mg(e,rh(e))}}function Fg(e,t){let n=t.map??null;e.map===null!=(n===null)&&(e.needsUpdate=!0),e.map=n,e.color.set(t.color),e.emissive.set(t.glow?t.color:0),e.emissiveIntensity=t.glow??0}var Ig=32.17,Lg=.5,Rg=.75,zg=.0013,Bg=.00135,Vg=1,Hg=6,Ug=1/240,Wg=.4,Gg={bounce:1,friction:.8,minKeep:.65,rollDecel:11},Kg={bounce:.6,friction:1.3,minKeep:.5,rollDecel:16};function qg(e){return Math.abs(e)<=60?Gg:Kg}function Jg(e){return Math.hypot(e.x,e.z)}function Yg(){return{pos:{x:0,y:1.25,z:0},vel:{x:0,y:0,z:0},spin:0,axis:{x:1,y:0,z:0},phase:`rest`,carry:null,apex:0,bounces:0,time:0,inRough:!1}}function Xg(e,t){let n=t.aimDeg*Math.PI/180,r=t.launchDeg*Math.PI/180,i=Math.sin(n),a=-Math.cos(n);e.vel={x:t.speed*Math.cos(r)*i,y:t.speed*Math.sin(r),z:t.speed*Math.cos(r)*a};let o=Math.cos(n),s=Math.sin(n),c=o*t.backspin,l=-t.sidespin,u=s*t.backspin,d=Math.hypot(c,l,u)||1;e.axis={x:c/d,y:l/d,z:u/d},e.spin=Math.hypot(t.backspin,t.sidespin),e.phase=`flight`,e.carry=null,e.apex=e.pos.y,e.bounces=0,e.time=0,e.inRough=!1}function Zg(e,t,n,r){let i=t;for(;i>1e-9&&e.phase!==`rest`;){let t=Math.min(Ug,i);i-=t,e.time+=t,e.phase===`flight`?Qg(e,t,n,r):e_(e,t,n)}}function Qg(e,t,n,r){let i=e.vel,a=i.x-r.x,o=i.y-r.y,s=i.z-r.z,c=Math.hypot(a,o,s),l=zg*n.drag*c,u=-l*a,d=-l*o-Ig,f=-l*s,p=e.axis,m=p.y*s-p.z*o,h=p.z*a-p.x*s,g=p.x*o-p.y*a,_=Bg*n.lift*e.spin*c,v=_*Math.hypot(m,h,g),y=Vg*Ig;v>y&&(_*=y/v),u+=_*m,d+=_*h,f+=_*g,i.x+=u*t,i.y+=d*t,i.z+=f*t,e.pos.x+=i.x*t,e.pos.y+=i.y*t,e.pos.z+=i.z*t,e.spin*=Math.exp(-t/Hg),e.pos.y>e.apex&&(e.apex=e.pos.y),e.pos.y<=.5&&i.y<0&&$g(e,n)}function $g(e,t){let n=e.vel;e.carry===null&&(e.carry=Jg(e.pos));let r=qg(e.pos.x);e.inRough=r===Kg,e.pos.y=Lg,e.bounces++,e.spin*=.35;let i=Math.hypot(n.x,n.z)||1,a=-n.y,o=t.bounce*r.bounce,s=r.friction*(1-Math.min(.9,t.bounce*.9)),c=Math.max(r.minKeep,1-s*(1+o)*a/i);n.x*=c,n.z*=c,n.y=a*o,n.y<3&&(n.y=0,e.phase=`roll`)}function e_(e,t,n){let r=e.vel,i=Math.hypot(r.x,r.z),a=qg(e.pos.x);e.inRough=a===Kg;let o=i-(a.rollDecel*n.roll+.04*i)*t;if(o<=Wg){r.x=r.y=r.z=0,e.phase=`rest`;return}let s=o/i;r.x*=s,r.z*=s,r.y=0,e.pos.x+=r.x*t,e.pos.z+=r.z*t,e.pos.y=Lg}function t_(e,t){e.vel.x*=1+t,e.vel.y*=1+t,e.vel.z*=1+t}function n_(e,t,n){let r={...e,pos:{...e.pos},vel:{...e.vel},axis:{...e.axis}},i=e.time+600;for(;r.phase!==`rest`&&r.time<i;)Zg(r,1/60,t,n);return Jg(r.pos)}function r_(e,t,n={x:0,y:0,z:0},r=null){let i=Yg();Xg(i,e);let a=r?[...r.at]:[];for(;i.phase!==`rest`&&i.time<600;)Zg(i,1/60,t,n),a.length>0&&i.time>=a[0]&&i.phase===`flight`&&(a.shift(),t_(i,r.amount));return{total:Jg(i.pos),carry:i.carry??Jg(i.pos),apex:i.apex,time:i.time,offline:i.pos.x}}var i_=-.3,a_=-2.95,o_=3.9,s_=new L(-2.42,5.18,0),c_=.85,l_=-3.3,u_=new L(-.05,Lg+Rg-.15,0),d_=u_.distanceTo(Ap)-1.7,f_=new L(0,1,0),p_=-.5,m_=1.3,h_=1.3,g_=new L(1,0,0),__=new L(-2.4499999999999997,0,.6),v_=1.6,y_=.9,b_=9081502,x_=2830134,S_=class{group=new R;body=new R;head=new R;legs=[];backToe=new R;swingArm=new R;torso=new R;torsoBase=new Pt;turn=new Pt;clubMount=new R;hatMount=new R;jacketMount=new R;shoeMounts=[];legMounts=[];armMounts=[];metal=K(b_);joint=K(x_);shirt=K(16777215);sleeves=K(16777215);pants=K(16777215);flames=[];clubSpinners=[];gearSpinners=[];gearPulsers=[];spineLen=0;swing=i_;t=0;settle=1;crouch=0;waggle=0;yaw=0;pitch=p_;roll=0;glanceAt=2.5;waggleAt=4.5;constructor(){let e=this.group,t=new R;t.position.copy(jp).negate(),this.body.position.copy(jp),this.body.add(t),e.add(this.body);for(let t of[-1,1]){let n=jp.clone().add(new L(0,-.12,t*.3)),r=new L(l_,.45,t*.6),i={thigh:new R,knee:new R,shin:new R};this.legMounts.push(i);let a=k_(new B(.25,.18,m_,16),this.pants),o=new z(new H(.25,14,10),this.pants);o.position.y=m_/2,a.add(o,i.thigh);let s=k_(new B(.19,.15,h_,16),this.pants);s.add(i.shin);let c=new R;c.add(new z(new H(.22,14,10),this.joint),i.knee),e.add(a,s,c);let l={hip:n.clone().sub(jp),ankle:r,back:t>0,thigh:a,shin:s,knee:c};this.legs.push(l),j_(l,n,r,g_);let u=new R;this.shoeMounts.push(u),l.back?(this.backToe.position.copy(__),this.backToe.rotation.order=`YZX`,u.position.set(-3.05-__.x,0,0),this.backToe.add(u),e.add(this.backToe)):(u.position.set(-3.05,0,t*.6),e.add(u))}let n=new z(new H(.42,18,12),this.pants);n.scale.set(.8,.72,1),n.position.copy(jp),t.add(n);let r=Ap.clone().sub(jp),i=r.length();this.spineLen=i,this.torsoBase.setFromUnitVectors(f_,r.normalize()),this.torso.position.copy(jp),this.torso.quaternion.copy(this.torsoBase);let a=new z(new ho(Ip(i),40),this.shirt);a.scale.set(Pp,1,1),this.torso.add(a);for(let e of[-1,1]){let t=new z(new H(.27,16,12),this.sleeves);t.position.set(0,i-.16,e*.72),this.torso.add(t)}let o=new z(new B(.41,.42,.15,24),this.joint);o.scale.set(Pp,1,1),o.position.y=.2,this.torso.add(o,this.jacketMount),t.add(this.torso);let s=this.head;s.position.copy(s_),s.scale.setScalar(c_),s.rotation.order=`YZX`,s.rotation.z=p_;let c=new z(new H(1,40,28),this.metal);c.scale.copy(Np),s.add(c,Dh(.9,.72,-.06,this.joint,1.012));let l=K(13226460);for(let e of[-.2,-.29]){let t=new z(new Ki(.04,.035,.3),l);t.position.set(zp(e,0,1.012),e,0),s.add(t)}for(let e of[-1,1]){let t=new z(new B(.16,.16,.1,18),this.joint);t.rotation.x=Math.PI/2,t.position.set(-.02,0,e*Np.z),s.add(t)}let u=new z(new B(.19,.22,.5,14),this.joint);u.position.set(-.12,-Np.y+.04,0),s.add(u,this.hatMount),t.add(s);let d=u_.clone().sub(Ap).clone().negate().normalize(),f=new L(0,0,1),p=new L().crossVectors(d,f).normalize(),m=new R;m.position.copy(Ap),m.quaternion.setFromRotationMatrix(new an().makeBasis(p,d,f)),m.add(this.swingArm),t.add(m);let h=new L(0,-1.7,0);for(let e of[-1,1]){let t=new L(0,0,e*.6);this.swingArm.add(F_(t,h,.18,this.sleeves));let n=new z(new H(.2,12,10),this.joint);n.position.copy(t).add(h).multiplyScalar(.5);let r=new R;r.userData.side=e,r.position.copy(n.position),r.quaternion.setFromUnitVectors(f_,t.clone().sub(h).normalize()),this.armMounts.push(r),this.swingArm.add(n,r)}let g=new z(new H(.3,12,10),this.joint);g.position.copy(h),this.swingArm.add(g),this.clubMount.position.copy(h),this.swingArm.add(this.clubMount),e.traverse(e=>{e instanceof z&&(e.castShadow=!0)}),im(e,Qp),this.setSwing(i_),this.setGear(pm[0])}setSwing(e){this.swing=e,this.swingArm.rotation.x=e+this.waggle;let t=Nt.clamp(e*.32,-.95,1.15);this.turn.setFromAxisAngle(f_,t),this.torso.quaternion.copy(this.torsoBase).multiply(this.turn)}resetPose(){this.settle=1,this.crouch=0,this.waggle=0,this.yaw=0,this.pitch=p_,this.roll=0}animate(e,t,n,r){this.t+=e;let i=this.t,a=t=>1-Math.exp(-t*e),o=t===`waiting`,s=t===`charging`||t===`focused`;this.settle+=((o?1:s?.4:0)-this.settle)*a(6),this.crouch+=((s?n:0)-this.crouch)*a(t===`swinging`?10:5);let c=t===`charging`?Math.max(0,n-.7)*.25:0,l=()=>(Math.random()-.5)*c,u=0;if(o){i>this.waggleAt+y_&&(this.waggleAt=i+4+Math.random()*4);let e=(i-this.waggleAt)/y_;e>0&&e<1&&(u=-.07*(1-Math.cos(e*Math.PI*4)))}else this.waggleAt=Math.max(this.waggleAt,i+3);this.waggle+=(u-this.waggle)*a(20),this.swingArm.rotation.x=this.swing+this.waggle;let d=Nt.clamp((this.swing-i_)/-2.6500000000000004,0,1),f=Nt.smoothstep(this.swing/o_,0,1),p=Math.sin(i*2.2)*this.settle,m=Math.sin(i*.55)*this.settle;this.body.position.set(jp.x+l(),jp.y-.14*this.crouch+.02*p+.12*f+l(),jp.z+.15*d-.32*f+.05*m),this.body.rotation.set(.12*f+.025*m,.3*f,-.06*this.crouch+.24*f),this.torso.scale.y=1+p*.012;let h=Nt.smoothstep(this.swing/o_,.08,.6);this.backToe.rotation.set(0,.45*h,-.75*h),this.body.updateMatrix(),this.backToe.updateMatrix();for(let e of this.legs){let t=C_.copy(e.hip).applyMatrix4(this.body.matrix),n=w_.copy(e.ankle);e.back&&n.sub(__).applyMatrix4(this.backToe.matrix),j_(e,t,n,T_.set(1,0,e.back?-1.6*h:0).normalize())}let g=0,_=p_,v=0;if(t===`watching`){let e=this.head.parent.worldToLocal(C_.copy(r)).sub(this.head.position);g=Nt.clamp(Math.atan2(-e.z,e.x),-.5,1.6),_=Nt.clamp(Math.atan2(e.y,Math.hypot(e.x,e.z)),-.9,.7)}else if(g=.06*Math.sin(i*.9)*this.settle,_+=.05*Math.sin(i*1.3+1)*this.settle+l(),v=.1*Math.sin(i*.45)*this.settle,o){i>this.glanceAt+v_&&(this.glanceAt=i+3+Math.random()*3);let e=i-this.glanceAt,t=Nt.smoothstep(e,0,.25)*(1-Nt.smoothstep(e,1.3,v_));g+=t*1.05,_+=t*.45,v*=1-t}else this.glanceAt=Math.max(this.glanceAt,i+2.5);let y=a(t===`watching`?9:7);this.yaw+=(g-this.yaw)*y,this.pitch+=(_-this.pitch)*y,this.roll+=(v-this.roll)*y,this.head.rotation.set(this.roll,this.yaw,this.pitch);let b=t===`swinging`?4:1;for(let t of[...this.clubSpinners,...this.gearSpinners]){let n=t.userData.spin;t.rotation[n.axis]+=n.speed*b*e}for(let e of this.gearPulsers){let t=e.userData.pulse;e.scale.copy(t.base).multiplyScalar(1+t.amount*Math.sin(this.t*t.speed+t.phase))}}setGear(e){let t=Ng(e.jacket);Fg(this.shirt,t.body),Fg(this.sleeves,t.sleeves),Fg(this.pants,Pg(e.pants)),P_(this.hatMount,Oh(e.hat)),P_(this.jacketMount,Ph(e.jacket,this.spineLen));for(let t of this.armMounts)P_(t,wg(e.jacket,t.userData.side));for(let t of this.legMounts){let n=Cg(e.pants);P_(t.thigh,n.thigh),P_(t.knee,n.knee),P_(t.shin,n.shin)}for(let t of this.shoeMounts)P_(t,kh(e.shoes));let n=this.legMounts.flatMap(e=>[e.thigh,e.knee,e.shin]),r=[this.hatMount,this.jacketMount,...this.armMounts,...n,...this.shoeMounts];this.gearSpinners=r.flatMap(M_),this.gearPulsers=r.flatMap(N_)}setClub(e,t){P_(this.clubMount,Ym(e,t,d_),!1),this.clubSpinners=M_(this.clubMount),this.flames=[],this.clubMount.traverse(e=>{e.userData.thrust&&(this.flames.push(e),e.traverse(e=>e.castShadow=!1))})}get hasBoosters(){return this.flames.length>0}setThrust(e){for(let t of this.flames)t.visible=e>.02,t.visible&&t.scale.set(1,1,e*(.8+Math.random()*.4))}},C_=new L,w_=new L,T_=new L,E_=new L,D_=new L,O_=new L;function k_(e,t){let n=new R,r=new z(e,t);return n.userData.mesh=r,n.add(r),n}function A_(e,t,n,r){e.position.addVectors(t,n).multiplyScalar(.5),e.quaternion.setFromUnitVectors(f_,E_.subVectors(t,n).normalize()),e.userData.mesh.scale.y=t.distanceTo(n)/r}function j_(e,t,n,r){let i=E_.subVectors(n,t),a=i.length();i.divideScalar(a);let o=Math.min(a,2.599),s=(m_*m_-h_*h_+o*o)/(2*o),c=Math.sqrt(Math.max(0,m_*m_-s*s)),l=D_.copy(r).addScaledVector(i,-r.dot(i)).normalize(),u=O_.copy(t).addScaledVector(i,s).addScaledVector(l,c);e.knee.position.copy(u),e.knee.quaternion.setFromUnitVectors(f_,E_.subVectors(t,n).normalize()),A_(e.thigh,t,u,m_),A_(e.shin,u,n,h_)}function M_(e){let t=[];return e.traverse(e=>{e.userData.spin&&t.push(e)}),t}function N_(e){let t=[];return e.traverse(e=>{e.userData.pulse&&t.push(e)}),t}function P_(e,t,n=!0){for(let t of[...e.children])e.remove(t),t.traverse(e=>{e instanceof z&&e.geometry.dispose()});t.traverse(e=>{e instanceof z&&(e.castShadow=!0)}),n&&im(t,Qp),e.add(t)}function F_(e,t,n,r){let i=e.distanceTo(t),a=new z(new qi(n,Math.max(.01,i-2*n),6,10),r);return a.position.copy(e).add(t).multiplyScalar(.5),a.quaternion.setFromUnitVectors(f_,t.clone().sub(e).normalize()),a}var Z=Lg,I_=new pi({color:16777215}),L_=new pi({color:1909811}),R_=new pi({color:5904938}),z_=new pi({color:16743080}),B_=K(16765503,{emissive:8016384,emissiveIntensity:.3}),V_=new pi({color:16769354}),H_={ghosty:.35,cosmo:.3,orbit:.3,nova:.3,ufo:.3,prism:.3,astra:.35},U_=class{root=new R;body=new R;topY;hover;stand;size;squashGroup=new R;eyesOpen=new R;eyesShut=new R;eyesHappy=new R;pupils=[];smile;openMouth;flappers=[];jets=[];spinners=[];stars=new R;mood=`idle`;t=Math.random()*10;blink=0;nextBlink=2;squash=0;squashVel=0;constructor(e,t){this.root.add(this.squashGroup),this.squashGroup.add(this.body);let n=$_(e,this.body,this.flappers,this.jets,this.spinners);this.topY=n.topY,this.hover=H_[e.id]??0,this.stand=e.id===`boing`?.2:0,this.size=1+.04*(t-1);let r=n.face;for(let e of[-1,1]){let t=e*r.eyeX,n=r.surface(t,r.eyeY),i=new R;i.position.set(t,r.eyeY,n-r.eyeR*.15);let a=new z(new H(r.eyeR,16,12),I_);a.scale.set(1,1.15,.55);let o=new R,s=new z(new H(r.eyeR*.62,14,10),L_);s.scale.set(1,1.1,.6);let c=new z(new H(r.eyeR*.22,8,6),I_);c.position.set(r.eyeR*.22,r.eyeR*.28,r.eyeR*.3),o.position.z=r.eyeR*.28,o.add(s,c),s.userData.noOutline=c.userData.noOutline=!0,i.add(a,o),this.pupils.push(o),this.eyesOpen.add(i);let l=new R;l.position.set(t,r.eyeY,n+.01);for(let t of[-1,1]){let n=new z(new qi(.022,r.eyeR*1.1,3,6),L_);n.rotation.z=Math.PI/2+e*t*.55,n.position.set(-e*r.eyeR*.2,t*r.eyeR*.32,0),n.userData.noOutline=!0,l.add(n)}this.eyesShut.add(l);let u=new z(new U(r.eyeR*.7,.025,6,14,Math.PI),L_);u.position.set(t,r.eyeY-r.eyeR*.3,n+.01),u.userData.noOutline=!0,this.eyesHappy.add(u)}let i=r.surface(0,r.mouthY)+.005;if(this.smile=new z(new U(r.eyeR*.75,.026,6,14,Math.PI),L_),this.smile.rotation.z=Math.PI,this.smile.position.set(0,r.mouthY+r.eyeR*.5,i),this.openMouth=new z(new H(r.eyeR*.75,14,10),R_),this.openMouth.scale.set(.9,1,.35),this.openMouth.position.set(0,r.mouthY,i-.02),this.smile.userData.noOutline=!0,this.body.add(this.eyesOpen,this.eyesShut,this.eyesHappy,this.smile,this.openMouth),this.root.scale.setScalar(this.size),t>=5){let e=av();e.position.y=this.topY+.02,this.body.add(e)}for(let e=0;e<3;e++){let e=new z(iv(.09,.04,.04),V_);e.userData.noOutline=!0,this.stars.add(e)}this.stars.position.y=this.topY+.25,this.root.add(this.stars),this.body.traverse(e=>{e instanceof z&&(e.castShadow=!0)});for(let e of this.jets)e.traverse(e=>e.castShadow=!1);im(this.root,Qp),this.setMood(`idle`)}setMood(e){this.mood=e,this.eyesOpen.visible=e===`idle`||e===`scared`||e===`dizzy`,this.eyesShut.visible=e===`fly`,this.eyesHappy.visible=e===`happy`,this.smile.visible=e===`idle`||e===`happy`,this.openMouth.visible=e===`fly`||e===`scared`||e===`dizzy`,this.openMouth.scale.set(e===`fly`?1.1:.55,e===`fly`?1.25:.6,.35),this.smile.scale.setScalar(e===`happy`?1.25:1);for(let t of this.pupils)t.scale.setScalar(e===`scared`?.65:1);this.stars.visible=e===`dizzy`}hit(){this.squash=.45,this.squashVel=0}update(e){this.t+=e;let t=this.t;this.squashVel+=(-120*this.squash-9*this.squashVel)*e,this.squash+=this.squashVel*e;let n=this.squash;this.squashGroup.scale.set(1+n*.6,1-n,1+n*.6),this.nextBlink-=e,this.nextBlink<=0&&(this.blink=.14,this.nextBlink=2+Math.random()*3),this.blink=Math.max(0,this.blink-e);for(let e of this.eyesOpen.children)e.scale.y=this.blink>0?.12:1;let r=this.mood===`fly`,i=r?22:3.2,a=r?1:.35;for(let e of this.flappers)e.obj.rotation[e.axis]=e.base+Math.sin(t*i+e.phase)*e.amp*a;for(let e of this.jets)e.scale.set(1,(r?1:.3)*(.8+Math.random()*.4),1);for(let t of this.spinners)t.obj.rotation[t.axis]+=e*t.speed*(r?3:1);if(this.body.position.x=this.mood===`scared`?Math.sin(t*60)*.025:0,this.mood===`dizzy`)this.pupils.forEach((e,n)=>{e.position.x=Math.cos(t*9+n*Math.PI)*.03,e.position.y=Math.sin(t*9+n*Math.PI)*.03}),this.stars.rotation.y=t*4,this.stars.children.forEach((e,n)=>{let r=n/3*Math.PI*2;e.position.set(Math.cos(r)*.32,Math.sin(t*6+n)*.04,Math.sin(r)*.32),e.rotation.y=-t*4});else for(let e of this.pupils)e.position.set(0,0,e.position.z)}};function W_(e,t,n,r=0){return(i,a)=>n*Math.sqrt(Math.max(.05,1-(i/e)**2-((a-r)/t)**2))}function Q(e,t,n=0,r=0,i=0){let a=new z(e,t);return a.position.set(n,r,i),a}var G_=K(3817290),K_=K(13226460);function q_(e){return K(e,{emissive:e,emissiveIntensity:.3})}function J_(e,t,n,r,i){let a=Math.acos(Nt.clamp(r/e,-1,1));return new z(new H(e,24,16,Math.PI/2-t/2,t,a-n/2,n),i)}function Y_(e,t,n){return[-1,1].map(r=>{let i=Q(new B(n,n,.08,14),G_,r*e,t,0);return i.rotation.z=Math.PI/2,i})}function X_(e,t,n,r,i,a,o=0){let s=new R;s.position.set(n,r,0),s.rotation.z=o,s.add(Q(new B(.02,.02,i,6),G_,0,i/2,0),Q(new H(.055,10,8),K(a,{emissive:a,emissiveIntensity:.8}),0,i+.03,0)),e.add(s),t.push({obj:s,axis:`z`,base:o,amp:.25,phase:n*3})}function Z_(e,t,n,r,i){let a=Q(new Ki(Math.hypot(n-e,r-t),.03,.05),i,(e+n)/2,(t+r)/2,0);return a.rotation.z=Math.atan2(r-t,n-e),a}function Q_(e,t,n){let r=new R;return r.add(new z(rv(e,t),n),Z_(0,.05*t,e*.55*t,.32*t,K_),Z_(0,.05*t,e*.95*t,.2*t,K_)),r}function $_(e,t,n,r,i){let a=K(e.color,e.glow>0?{emissive:e.color,emissiveIntensity:e.glow*.35}:{}),o=e=>new H(e,24,18);switch(e.id){case`blobby`:{let e=K(G.scrap.seam),n=Q(o(Z),a,0,-.04,0);n.scale.set(1.12,.92,1.12);let r=J_(Z*1.005,1.55,1.18,.02,e),i=J_(Z*1.012,1.35,1,.02,q_(12576511));for(let e of[r,i])e.position.y=-.04,e.scale.copy(n.scale);let s=Q(new U(.46,.02,6,32),e,0,-.3,0);s.rotation.x=Math.PI/2;let c=Q(new U(Z,.018,6,40),e,0,-.04,0);c.scale.set(1.13,.93,1),t.add(n,r,i,s,c,Q(new B(.4,.44,.12,24),e,0,-.44,0),...Y_(.56,-.02,.09));for(let n of[.55,1,2.14,2.59])t.add(Q(new H(.028,8,6),e,Math.cos(n)*Z*1.12,Math.sin(n)*Z*.92-.04,.06));let l=new uo(new Ea([[.2,.34],[.07,.58],[-.1,.55],[-.3,.36],[-.08,.42]].map(([e,t])=>new I(e,t))),{depth:.09,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:1}).translate(0,0,-.045);l.rotateY(-Math.PI/2),t.add(new z(l,a));let u=1.01;return{topY:.46,face:{eyeX:.17,eyeY:.04,eyeR:.11,mouthY:-.15,surface:W_(Z*1.12*u,Z*.92*u,Z*1.12*u,-.04)}}}case`puffo`:{let e=K(G.cadet.trim,{emissive:G.cadet.trim,emissiveIntensity:.15});t.add(Q(o(Z),a),J_(Z*1.005,1.45,1.14,-.02,e),J_(Z*1.012,1.3,1,-.02,q_(16766362)));let r=Q(new U(Z*.92,.025,6,36),e,0,-.3,0);r.rotation.x=Math.PI/2,t.add(r);let i=[];for(let e=0;e<26;e++){let t=1-e/25*2,n=Math.sqrt(1-t*t),r=e*2.39996,a=new L(Math.cos(r)*n,t,Math.sin(r)*n);if(a.z>.45&&Math.abs(a.y)<.6)continue;let o=new V(.065,.16,8).translate(0,.08,0);o.applyQuaternion(new Pt().setFromUnitVectors(new L(0,1,0),a)),o.translate(a.x*Z*.95,a.y*Z*.95,a.z*Z*.95),i.push(o)}t.add(new z(Wp(i),e));for(let r of[-1,1]){let i=Q(new Ki(.05,.3,.22),e,r*.52,-.05,.02);i.rotation.z=r*.4,t.add(i),n.push({obj:i,axis:`z`,base:r*.4,amp:r*.5,phase:0})}let s=1.01;return{topY:.62,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.13,surface:W_(Z*s,Z*s,Z*s)}}}case`rocky`:{let{under:e,trim:n,blade:r}=G.recon,i=K(e),o=K(n,{emissive:n,emissiveIntensity:.15}),s=K(r),c=new mo(Z*1.02,1);c.computeVertexNormals();let l=Q(c,a);l.scale.set(1.1,.9,1.05),t.add(l,Q(new Up(.56,.4,.05,2,.025),o,0,-.03,.51),Q(new Up(.5,.34,.06,2,.025),q_(16765122),0,-.03,.52));for(let e of[-1,1]){let n=Q(new Ki(.17,.05,.05),i,e*.15,.17,.56);n.rotation.z=-e*.3,t.add(n,Q(new Up(.16,.22,.74,2,.06),i,e*.5,-.33,0));for(let n of[-.23,0,.23]){let r=Q(new B(.075,.075,.17,12),o,e*.5,-.33,n);r.rotation.z=Math.PI/2,t.add(r)}let r=Q(new V(.04,.22,6),s,e*.5,-.27,-.45);r.rotation.x=-Math.PI/2-.3,t.add(r)}return t.add(Q(new B(.16,.16,.05,16),o,0,.45,-.05),Q(new V(.05,.22,8),a,0,.58,-.05)),t.add(Q(new B(.05,.05,.22,10),i,-.22,.42,-.25)),{topY:.52,face:{eyeX:.13,eyeY:.02,eyeR:.085,mouthY:-.14,surface:()=>.55}}}case`flapjack`:{let{trim:e,glow:r}=G.siege,i=K(e),s=K(r,{emissive:r,emissiveIntensity:.8});t.add(Q(o(Z),a),J_(Z*1.005,1.45,1.1,0,i),J_(Z*1.012,1.3,.95,0,q_(14083839)));let c=Q(new U(Z*.9,.022,6,36),i,0,-.3,0);c.rotation.x=Math.PI/2,t.add(c);for(let e of[-1,1]){let r=Q(new Ki(.2,.05,.05),i,e*.1,.35,.35);r.rotation.set(-.75,0,e*.35),t.add(r);let o=Q(new V(.13,.34,4),a,e*.24,.5,0);o.rotation.z=-e*.35,o.add(Q(new V(.075,.2,4),i,0,-.04,.05),Q(new H(.045,8,6),s,0,.17,0)),t.add(o);let c=Q_(e,.7,a);c.position.set(e*.42,.05,-.08),t.add(c),n.push({obj:c,axis:`z`,base:e*.15,amp:e*.75,phase:0});let l=Q(new V(.025,.07,6),I_,e*.05,-.19,.46);l.rotation.x=Math.PI,l.userData.noOutline=!0,t.add(l)}let l=1.01;return{topY:.62,face:{eyeX:.16,eyeY:.08,eyeR:.1,mouthY:-.12,surface:W_(Z*l,Z*l,Z*l)}}}case`boing`:{let{trim:e,gold:r,vent:i,light:s}=G.storm,c=K(e),l=K(r,{emissive:r,emissiveIntensity:.15}),u=Q(o(Z),a);u.scale.set(1.05,.95,1);let d=J_(Z*1.005,1.45,1.1,0,c),f=J_(Z*1.012,1.3,.95,0,q_(15131391));d.scale.copy(u.scale),f.scale.copy(u.scale);let p=Q(new U(Z*.92,.022,6,36),l,0,-.3,0);p.rotation.x=Math.PI/2,p.scale.set(1.05,1,1),t.add(u,d,f,p);let m=K(i,{emissive:i,emissiveIntensity:.5});for(let e of[-1,1]){let r=new R;r.position.set(e*.17,.4,-.05),r.rotation.z=-e*.22;let i=Q(new qi(.1,.42,4,10),a,0,.28,0),u=Q(new qi(.055,.32,4,8),c,0,.28,.085);u.scale.z=.5,u.userData.noOutline=!0;let d=Q(new U(.1,.03,6,16),l,0,.04,0);d.rotation.x=Math.PI/2,r.add(i,u,d,Q(new H(.045,10,8),K(s,{emissive:s,emissiveIntensity:.9}),0,.05,.1)),t.add(r),n.push({obj:r,axis:`x`,base:0,amp:-.5,phase:e});let f=Q(o(.07),m,e*.27,-.09,.39);f.scale.set(1.2,.8,.3),f.userData.noOutline=!0,t.add(f)}t.add(Q(o(.12),K_,0,-.18,-.47));for(let e=0;e<4;e++){let n=Q(new U(.17,.035,8,20),K_,0,-.48-e*.06,0);n.rotation.x=Math.PI/2+(e%2?.15:-.15),t.add(n)}t.add(Q(new B(.2,.2,.04,16),G_,0,-.68,0));let h=1.01;return{topY:.95,face:{eyeX:.15,eyeY:.05,eyeR:.1,mouthY:-.1,surface:W_(Z*1.05*h,Z*.95*h,Z*h)}}}case`ghosty`:{let{plate:e,gold:r,gem:i,under:s}=G.crimson,c=K(e),l=K(r,{emissive:r,emissiveIntensity:.2}),u=[new I(.001,-.38),new I(.48,-.38),new I(.5,-.25),new I(.5,0),new I(.46,.22),new I(.36,.4),new I(.2,.49),new I(.001,.52)];t.add(Q(new ho(u,28),a)),t.add(Q(new B(.505,.505,.44,24,1,!0,-.65,1.3),q_(14212840)));let d=[new I(.475,.24),new I(.38,.415),new I(.21,.51),new I(.001,.54)],f=Q(new U(.47,.025,6,32),l,0,.245,0);f.rotation.x=Math.PI/2,t.add(Q(new ho(d,28),c),f);let p=Q(new U(.44,.05,8,32),K(r,{emissive:r,emissiveIntensity:.8}),0,-.4,0);p.rotation.x=Math.PI/2,t.add(p,Q(new B(.36,.3,.08,20),K(s),0,-.42,0)),t.add(Q(new H(.045,10,8),K(i,{emissive:i,emissiveIntensity:.6}),0,.37,.36));for(let e of[-1,1]){let r=Q(new V(.035,.26,6),l,e*.1,.48,.3);r.rotation.set(-.35,0,-e*.6),t.add(r);let i=Q(new qi(.06,.12,4,8),c,e*.52,-.06,.08);i.rotation.z=e*.4,t.add(i),n.push({obj:i,axis:`z`,base:e*.4,amp:e*.6,phase:1});let a=Q(o(.06),z_,e*.25,-.05,.5);a.scale.set(1.2,.8,.3),a.userData.noOutline=!0,t.add(a)}return{topY:.54,face:{eyeX:.15,eyeY:.08,eyeR:.1,mouthY:-.09,surface:e=>Math.sqrt(Math.max(.05,.505**2-e*e))}}}case`ember`:{let e=K(G.titan.under),r=K(G.titan.steel);t.add(Q(o(Z),a),J_(Z*1.005,1.45,1.05,.04,e),J_(Z*1.012,1.3,.9,.04,q_(16765594)));for(let[e,n]of[[.1,.14],[-.08,.18],[-.26,.14]]){let i=Q(new V(.045,n,6),r,0,Math.sqrt(Z*Z-e*e)+n/2-.03,e);i.rotation.x=-.3,t.add(i)}let i=Q(new B(.15,.15,.06,16),K(16757575,{emissive:16738816,emissiveIntensity:.9}),0,-.34,.35);i.rotation.x=2.29;for(let e of[-.07,0,.07])i.add(Q(new Ki(.26,.02,.025),G_,0,.035,e));t.add(i);for(let i of[-1,1]){let a=Q(new V(.07,.24,6),r,i*.18,.48,-.04);a.rotation.set(-.35,0,-i*.3),t.add(a);let o=Q_(i,.5,e);o.position.set(i*.36,.12,-.25),o.rotation.y=-i*.5,t.add(o),n.push({obj:o,axis:`z`,base:i*.2,amp:i*.7,phase:.5})}for(let n=0;n<3;n++)t.add(Q(o(.1-n*.02),e,0,-.28-n*.07,-.5-n*.12));let s=Q(new V(.06,.16,6),K_,0,-.5,-.86);s.rotation.x=-Math.PI/2-.5,t.add(s);let c=1.01;return{topY:.62,face:{eyeX:.16,eyeY:.09,eyeR:.1,mouthY:-.09,surface:W_(Z*c,Z*c,Z*c)}}}case`cosmo`:{let{chrome:e,under:r,glow:i}=G.tempest,s=K(e),c=.3;t.add(Q(iv(.66,.36,c,.09),a),Q(iv(.76,.42,c*.4,.04),s)),t.add(Q(new Up(.46,.38,.03,2,.015),s,0,-.03,.245),Q(new Up(.4,.32,.04,2,.015),q_(15007704),0,-.03,.26));let l=Q(new B(.02,.02,.28,6),s,0,.72,-.04);l.rotation.z=.25;let u=Q(o(.08),K(i,{emissive:i,emissiveIntensity:.8}),-.035,.87,-.04);t.add(l,u),n.push({obj:l,axis:`z`,base:.25,amp:.3,phase:0});let d=K(r);for(let e of[-1,1]){let r=new R;r.position.set(e*.5,-.06,-.1);let i=Q(new B(.02,.02,.16,6),G_,0,0,0);i.rotation.z=Math.PI/2,r.add(i,Q(new Ki(.22,.17,.02),d,e*.18,0,0),Q(new Ki(.22,.012,.025),s,e*.18,0,0)),t.add(r),n.push({obj:r,axis:`x`,base:0,amp:.3,phase:e})}return{topY:.66,face:{eyeX:.13,eyeY:.02,eyeR:.09,mouthY:-.12,surface:()=>.27999999999999997}}}case`jetbot`:{let{steel:e,under:i,accent:s}=G.eclipse,c=K(e),l=K(i);t.add(Q(new Up(.92,.84,.82,4,.24),a));let u=K(10480127,{emissive:4177919,emissiveIntensity:.35});t.add(Q(new Up(.72,.5,.06,3,.04),c,0,.04,.39),Q(new Up(.66,.44,.08,3,.04),u,0,.04,.4));let d=new R;d.position.set(.22,.42,0),d.add(Q(new B(.02,.02,.24,6),c,0,.12,0),Q(o(.06),K(s,{emissive:s,emissiveIntensity:.8}),0,.27,0)),t.add(d),n.push({obj:d,axis:`z`,base:0,amp:.25,phase:0});for(let e of[-1,1]){let i=Q(new B(.1,.1,.08,14),c,e*.48,.04,0);i.rotation.z=Math.PI/2;let a=Q(new qi(.065,.16,4,8),c,e*.53,-.16,.05);a.rotation.z=e*.35,n.push({obj:a,axis:`z`,base:e*.35,amp:e*.5,phase:.5});let o=Q(new Up(.22,.1,.28,2,.04),l,e*.2,-.45,.03),s=Q(new B(.1,.1,.4,14),c,e*.17,.02,-.48),u=Q(new B(.06,.09,.08,12),l,e*.17,-.22,-.48),d=new R;d.position.set(e*.17,-.26,-.48);for(let[e,t,n]of[[.07,.34,7325951],[.04,.2,15661311]]){let r=Q(new V(e,t,10),new pi({color:n}),0,-t/2,0);r.rotation.x=Math.PI,r.userData.noOutline=!0,d.add(r)}r.push(d),t.add(i,a,o,s,u,d)}return{topY:.42,face:{eyeX:.15,eyeY:.07,eyeR:.1,mouthY:-.1,surface:()=>.44}}}case`sparky`:{let{gold:e,under:r}=G.solar,i=K(e,{emissive:e,emissiveIntensity:.2}),o=K(r),s=K(15268863,{emissive:10480127,emissiveIntensity:1});t.add(Q(new Up(.88,.8,.8,4,.22),a),Q(new Up(.7,.48,.05,3,.04),i,0,.04,.38),Q(new Up(.64,.42,.06,3,.04),q_(10480127),0,.04,.39));let c=new Ea([[0,.2],[.14,.2],[.08,.05],[.18,.05],[.02,-.24],[.07,-.04],[-.02,-.04]].map(([e,t])=>new I((e-.08)*.38,t*.38)));t.add(Q(new uo(c,{depth:.03,bevelEnabled:!1}),K(3107839,{emissive:3107839,emissiveIntensity:.4}),0,-.3,.39));for(let e of[-1,1]){let r=new R;r.position.set(e*.26,.38,-.02),r.rotation.z=-e*.2,r.add(Q(new B(.035,.05,.3,8),o,0,.15,0),Q(new H(.07,12,10),s,0,.34,0));for(let e=0;e<3;e++){let t=Q(new U(.075-e*.012,.02,6,16),i,0,.08+e*.07,0);t.rotation.x=Math.PI/2,r.add(t)}t.add(r),n.push({obj:r,axis:`z`,base:-e*.2,amp:.15,phase:e});let a=Q(new qi(.065,.16,4,8),i,e*.5,-.12,.05);a.rotation.z=e*.35,n.push({obj:a,axis:`z`,base:e*.35,amp:e*.5,phase:.5}),t.add(a,Q(new Up(.22,.1,.28,2,.04),o,e*.2,-.43,.03))}return{topY:.4,face:{eyeX:.15,eyeY:.07,eyeR:.1,mouthY:-.09,surface:()=>.43}}}case`orbit`:{let{glow:e,eye:r}=G.vanguard,s=K(e,{emissive:e,emissiveIntensity:.8});t.add(Q(o(Z),a),J_(Z*1.005,1.45,1.1,.02,s),J_(Z*1.012,1.3,.95,.02,q_(13623551)));let c=new R;c.rotation.set(.45,0,.25);let l=new R,u=Q(new U(.74,.04,8,48),s);u.rotation.x=Math.PI/2,l.add(u);let d=K(r,{emissive:r,emissiveIntensity:.6});for(let e of[.6,3.5])l.add(Q(new H(.08,12,10),d,Math.cos(e)*.74,0,Math.sin(e)*.74));c.add(l),t.add(c),i.push({obj:l,axis:`y`,speed:.8}),X_(t,n,.18,.45,.16,r,-.3);let f=1.01;return{topY:.5,face:{eyeX:.16,eyeY:.08,eyeR:.1,mouthY:-.12,surface:W_(Z*f,Z*f,Z*f)}}}case`nova`:{let{glow:e,gem:n}=G.blaze,r=K(e,{emissive:e,emissiveIntensity:.8}),s=Q(new go(.05,0),K(n,{emissive:n,emissiveIntensity:.6}),0,.36,.35);s.scale.set(1,1.4,.5),t.add(Q(o(Z),a),J_(Z*1.005,1.45,1.1,0,r),J_(Z*1.012,1.3,.95,0,q_(16767408)),s);let c=new R;c.position.z=-.18;for(let e=0;e<12;e++){let t=e/12*Math.PI*2,n=Q(new V(.07,.24,8),r,Math.cos(t)*.62,Math.sin(t)*.62,0);n.rotation.z=t-Math.PI/2,c.add(n)}t.add(c),i.push({obj:c,axis:`z`,speed:.6});for(let e of[-1,1]){let n=Q(o(.06),z_,e*.26,-.08,.43);n.scale.set(1.2,.8,.3),n.userData.noOutline=!0,t.add(n)}let l=1.01;return{topY:.5,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.11,surface:W_(Z*l,Z*l,Z*l)}}}case`ufo`:{let{ice:e,teal:r}=G.frost,s=.17,c=.38,l=[[.001,-.32],[.24,-.3],[.52,-.21],[.68,-.11],[.63,-.03],[.36,.05],[.001,.07]].map(([e,t])=>new I(e,t));t.add(Q(new ho(l,36),a),Q(o(c),K(13625599),0,s,0));let u=J_(c*1.01,1.3,.95,0,q_(14085375));u.position.y=s,t.add(u,Q(new B(.18,.2,.05,20),K(e,{emissive:e,emissiveIntensity:.8}),0,-.33,0));let d=new R;d.position.y=-.11;let f=[e,r].map(e=>K(e,{emissive:e,emissiveIntensity:.9}));for(let e=0;e<12;e++){let t=e/12*Math.PI*2;d.add(Q(o(.045),f[e%2],Math.cos(t)*.69,0,Math.sin(t)*.69))}t.add(d),i.push({obj:d,axis:`y`,speed:1.5}),X_(t,n,.13,.5,.14,r,-.3);let p=1.01;return{topY:.55,face:{eyeX:.13,eyeY:.24000000000000002,eyeR:.085,mouthY:.1,surface:W_(c*p,c*p,c*p,s)}}}case`rex`:{let{red:e,lava:r}=G.drake,i=Q(o(Z),a);i.scale.set(1,.95,1);let s=J_(Z*1.01,1.3,.9,.02,q_(13696996));s.scale.copy(i.scale),t.add(i,s);let c=K(r,{emissive:r,emissiveIntensity:.6});for(let e=0;e<6;e++){let n=.12+e*.3,r=Q(new V(.13-e*.012,.3-e*.025,4).scale(.4,1,1),c,0,Math.cos(n)*.47,-Math.sin(n)*.48);r.rotation.x=-n,t.add(r)}let l=K(e);for(let e=0;e<3;e++)t.add(Q(o(.13-e*.03),a,0,-.3-e*.04,-.46-e*.13));let u=Q(new V(.05,.14,6),c,0,-.39,-.83);u.rotation.x=-Math.PI/2-.3,t.add(u);for(let e of[-1,1]){let r=Q(new qi(.045,.1,4,8),a,e*.32,-.16,.33);r.rotation.x=1,t.add(r,Q(new Up(.2,.1,.26,2,.04),l,e*.2,-.46,.06)),n.push({obj:r,axis:`x`,base:1,amp:.5,phase:e})}let d=tv(.36,.34,-.04,-.35,2,l);d.scale.setScalar(1.35),t.add(d);let f=1.01;return{topY:.58,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.12,surface:W_(Z*f,Z*.95*f,Z*f)}}}case`shark`:{let{silver:e,glow:i}=G.phantom,s=new L(.9,.82,1.25),c=Q(o(Z),a);c.scale.copy(s);let l=J_(Z*1.01,1.1,.8,.06,q_(14217471));l.scale.copy(s);let u=J_(Z*1.005,2.2,.75,-.33,K(e));u.scale.copy(s),t.add(c,l,u);let d=K(e),f=Q(new uo(new Ea([[-.16,0],[.22,.34],[.2,.12],[.28,0]].map(([e,t])=>new I(e,t))),{depth:.05,bevelEnabled:!1}).translate(0,0,-.025),d,0,.34,-.2);f.rotation.y=Math.PI/2,t.add(f);for(let e of[-1,1]){let r=Q(new Up(.3,.04,.16,1,.015),d,e*.47,-.15,.08);r.rotation.z=-e*.5,t.add(r),n.push({obj:r,axis:`z`,base:-e*.5,amp:e*.35,phase:0});for(let n of[.16,.08,0]){let r=Q(new Ki(.02,.14,.025),K(i,{emissive:i,emissiveIntensity:.8}),e*.43,.02,n);r.rotation.y=e*.2,t.add(r)}}let p=Q(new Up(.05,.34,.15,1,.02),d,0,.24,-.62);p.rotation.x=-.55;let m=Q(new Up(.05,.24,.12,1,.02),d,0,-.2,-.6);m.rotation.x=.55;let h=Q(new B(.1,.14,.16,14),G_,0,0,-.66);h.rotation.x=Math.PI/2,t.add(p,m,h,nv(r,0,0,-.74,Math.PI/2,.08,.4));let g=1.01;return{topY:.42,face:{eyeX:.14,eyeY:.11,eyeR:.09,mouthY:-.07,surface:W_(Z*s.x*g,Z*s.y*g,Z*s.z*g)}}}case`astro`:{let{navy:e,glow:i,light:s}=G.lancer,c=.1,l=.4,u=K(e);t.add(Q(o(l),a,0,c,0));let d=J_(l*1.01,1.5,1.05,0,q_(16765562));d.position.y=c;let f=Q(new U(.25,.05,8,24),u,0,-.26,0);f.rotation.x=Math.PI/2,t.add(d,f,Q(new Up(.58,.32,.5,3,.12),a,0,-.33,0),...Y_(.41000000000000003,c,.08)),t.add(Q(new Up(.24,.12,.04,2,.015),u,0,-.33,.25)),[i,s,i].forEach((e,n)=>t.add(Q(o(.022),K(e,{emissive:e,emissiveIntensity:.9}),(n-1)*.07,-.33,.275))),X_(t,n,-.16,.44999999999999996,.14,i,.3),t.add(Q(new Up(.46,.46,.2,2,.06),u,0,-.17,-.36));for(let e of[-1,1]){t.add(Q(new B(.075,.075,.4,14),u,e*.13,-.14,-.48),Q(new B(.05,.075,.07,12),G_,e*.13,-.37,-.48)),t.add(nv(r,e*.13,-.4,-.48,0,.06,.3));let i=Q(new qi(.07,.14,4,8),a,e*.34,-.34,.04);i.rotation.z=e*.45,t.add(i,Q(new Up(.18,.08,.24,2,.03),u,e*.15,-.47,.04)),n.push({obj:i,axis:`z`,base:e*.45,amp:e*.5,phase:.5})}t.add(Q(new B(.015,.015,.62,6),K_,.25,.12,-.46));let p=new R;p.position.set(.25,.36,-.46),p.add(Q(new Ki(.22,.14,.012),K(s),.11,0,0),Q(new Ki(.22,.035,.016),K(i),.11,0,0)),t.add(p),n.push({obj:p,axis:`y`,base:.3,amp:.5,phase:0});let m=1.01;return{topY:.5,face:{eyeX:.14,eyeY:.15000000000000002,eyeR:.1,mouthY:-.03,surface:W_(l*m,l*m,l*m,c)}}}case`prism`:{let{gold:n,gem:r}=G.aegis,a=new mo(Z*1.04,0);a.computeVertexNormals();let o=[13949152,10481896,16054011,12577252,15129792].map(e=>new zn(e)),s=a.getAttribute(`position`).count,c=new Float32Array(s*3);for(let e=0;e<s;e++)o[Math.floor(e/3)%o.length].toArray(c,e*3);a.setAttribute(`color`,new xr(c,3)),t.add(Q(a,K(16777215,{vertexColors:!0,emissive:e.color,emissiveIntensity:.15}))),t.add(Q(new Up(.46,.34,.05,2,.02),q_(14678260),0,-.02,.47));for(let e of[-1,1]){let r=Q(new V(.07,.26,6),K(n,{emissive:n,emissiveIntensity:.3}),e*.22,.48,0);r.rotation.z=-e*.5,t.add(r)}let l=new R;return[r,n,16054011,r].forEach((e,t)=>{let n=t/4*Math.PI*2,r=Q(new go(.08,0),K(e,{emissive:e,emissiveIntensity:.6}),Math.cos(n)*.74,t%2?-.1:.15,Math.sin(n)*.74);r.scale.set(.6,1.4,.6),l.add(r)}),t.add(l),i.push({obj:l,axis:`y`,speed:1.2}),{topY:.5,face:{eyeX:.12,eyeY:.03,eyeR:.085,mouthY:-.1,surface:()=>.5}}}case`phoenix`:{let{gold:e,eye:r}=G.ronin;t.add(Q(o(Z),a),J_(Z*1.005,1.45,1.05,.02,K(e,{emissive:e,emissiveIntensity:.4})),J_(Z*1.012,1.3,.9,.02,q_(16770760)));let i=[16773280,16765498,e,14717482,14181406].map(e=>K(e,{emissive:e,emissiveIntensity:.6})),s=K(r,{emissive:r,emissiveIntensity:.9});for(let[e,n,r]of[[0,.5,2],[-.13,.38,1],[.13,.38,1],[0,.3,0]]){let a=Q(new V(.09,n,8),i[r],e,.4+n*.4,-.2-n*.3);a.rotation.set(-.65,0,-e*2.5),t.add(a,Q(o(.035),s,e*(1+n*2.5),.4+n*.8,-.2-n*.6))}for(let e of[-1,1]){let r=ev(e,.5,5,i,s);r.position.set(e*.4,.08,-.14),r.rotation.y=-e*.3,t.add(r),n.push({obj:r,axis:`z`,base:0,amp:e*.6,phase:0});let a=Q(new V(.05,.12,6),B_,e*.14,-.5,.08);a.rotation.x=Math.PI,t.add(a)}let c=new R;c.position.set(0,-.22,-.4);for(let[e,t,n]of[[0,.55,1],[-.1,.42,2],[.1,.42,2]]){let r=new L(e*1.5,-.39,-.92).normalize(),a=Q(new V(.06,t,8),i[n]);a.position.copy(r).multiplyScalar(t/2),a.position.x+=e,a.quaternion.setFromUnitVectors(new L(0,1,0),r);let l=Q(o(.045),s);l.position.copy(r).multiplyScalar(t),l.position.x+=e,c.add(a,l)}t.add(c),n.push({obj:c,axis:`x`,base:0,amp:.2,phase:1});let l=1.01;return{topY:.5,face:{eyeX:.16,eyeY:.08,eyeR:.1,mouthY:-.11,surface:W_(Z*l,Z*l,Z*l)}}}case`mech`:{let{dark:e,gold:i}=G.galaxy,o=K(e),s=K(i,{emissive:i,emissiveIntensity:.6});t.add(Q(new Up(.9,.82,.8,4,.2),a),Q(new Up(.64,.4,.06,3,.04),q_(12579071),0,.06,.4)),t.add(Q(new Up(.56,.15,.06,2,.03),o,0,-.27,.4));for(let e of[-.13,.13])t.add(Q(new Ki(.14,.05,.02),K(16765503,{emissive:16765503,emissiveIntensity:.8}),e,-.27,.435));t.add(Q(new Ki(.1,.08,.06),K(15217466),0,.36,.4));for(let e of[-1,1]){let i=new R;i.position.set(0,.36,.39),i.rotation.z=-e*.7,i.add(Q(new Ki(.05,.32,.04),s,0,.17,0)),t.add(i,tv(e*.48,.34,-.05,0,3,o));let a=Q(new qi(.065,.14,4,8),o,e*.52,-.14,.05);a.rotation.z=e*.35,t.add(a,Q(new Up(.22,.1,.28,2,.04),o,e*.2,-.45,.03)),n.push({obj:a,axis:`z`,base:e*.35,amp:e*.5,phase:.5}),t.add(Q(new B(.06,.09,.1,12),G_,e*.18,-.25,-.43),nv(r,e*.18,-.3,-.43,0,.07,.34))}return{topY:.42,face:{eyeX:.15,eyeY:.07,eyeR:.1,mouthY:-.08,surface:()=>.44}}}case`astra`:{let{gold:e,crystal:r}=G.infinity;t.add(Q(o(Z),a),J_(Z*1.01,1.3,.9,0,q_(14744575)));let s=K(e,{emissive:e,emissiveIntensity:.5}),c=new R;c.position.y=.68;let l=Q(new U(.26,.035,8,36),s);l.rotation.x=Math.PI/2,c.add(l);for(let e=0;e<4;e++){let t=e/4*Math.PI*2;c.add(Q(iv(.07,.035,.03),s,Math.cos(t)*.26,0,Math.sin(t)*.26))}t.add(c),i.push({obj:c,axis:`y`,speed:1});let u=Q(iv(.075,.035,.04),s,0,.36,.35);u.rotation.x=-.75,t.add(u);let d=K(r,{emissive:r,emissiveIntensity:.3}),f=s;for(let[e,r,i,a]of[[.22,.52,.35,0],[.02,.44,0,.7],[-.18,.34,-.35,1.4]])for(let o of[-1,1]){let s=ev(o,r,4,[d],f);s.position.set(o*.38,e,-.2),s.rotation.set(0,-o*.15,o*i),t.add(s),n.push({obj:s,axis:`z`,base:o*i,amp:o*.4,phase:a})}for(let e of[-1,1]){let n=Q(o(.06),z_,e*.26,-.08,.43);n.scale.set(1.2,.8,.3),n.userData.noOutline=!0,t.add(n)}let p=1.01;return{topY:.5,face:{eyeX:.16,eyeY:.07,eyeR:.1,mouthY:-.11,surface:W_(Z*p,Z*p,Z*p)}}}}}function ev(e,t,n,r,i){let a=new R;for(let o=0;o<n;o++){let s=o/(n-1),c=t*(1-.35*s),l=new R;l.rotation.z=e*(.5-s*.9),l.add(Q(new Ki(c,.07,.03),r[o%r.length],e*c/2,0,0),Q(new Ki(c*.9,.02,.035),i,e*c*.45,.04,0)),a.add(l)}return a}function tv(e,t,n,r,i,a=K(3820138)){let o=new R;o.position.set(e,t,n),o.rotation.set(-.25,0,r);let s=.1+i*.07;o.add(Q(new Up(s,.18,.36,2,.04),a));let c=K(1382171),l=K(16726843);for(let e=0;e<i;e++){let t=(e-(i-1)/2)*.075,n=Q(new B(.032,.032,.02,10),c,t,0,.18);n.rotation.x=Math.PI/2;let r=Q(new V(.03,.08,8),l,t,0,.22);r.rotation.x=Math.PI/2,o.add(n,r)}return o}function nv(e,t,n,r,i,a,o){let s=new R;s.position.set(t,n,r),s.rotation.x=i;for(let[e,t,n]of[[a,o,16742938],[a*.55,o*.6,16774048]]){let r=Q(new V(e,t,10),new pi({color:n}),0,-t/2,0);r.rotation.x=Math.PI,r.userData.noOutline=!0,s.add(r)}return e.push(s),s}function rv(e,t){let n=[[0,.08],[.55,.32],[.95,.2],[.8,.02],[.62,-.08],[.45,-.02],[.28,-.12],[.12,-.04],[0,-.1]];return new uo(new Ea((e>0?n:n.map(([e,t])=>[-e,t]).reverse()).map(([e,n])=>new I(e*t,n*t))),{depth:.035,bevelEnabled:!1}).translate(0,0,-.0175)}function iv(e,t,n,r=0){let i=new Ea;for(let n=0;n<10;n++){let r=Math.PI/2+n/10*Math.PI*2,a=n%2==0?e:t,o=Math.cos(r)*a,s=Math.sin(r)*a;n===0?i.moveTo(o,s):i.lineTo(o,s)}i.closePath();let a=new uo(i,{depth:n,bevelEnabled:r>0,bevelThickness:r,bevelSize:r*.8,bevelSegments:3});return a.translate(0,0,-n/2),a.computeVertexNormals(),a}function av(){let e=new R;e.add(Q(new B(.15,.13,.1,12),B_));for(let t=0;t<5;t++){let n=t/5*Math.PI*2;e.add(Q(new V(.04,.1,6),B_,Math.cos(n)*.12,.09,Math.sin(n)*.12))}return e}var ov=null;function sv(){return ov??=qp(mm.map(e=>{let t=new U_(e,1);return t.root.rotation.y=-.25,t.root}),{camera:new L(.55,.45,3.1),target:new L(0,.1,0),fov:30}),ov}var cv=110,lv=.9,uv=56,dv=45,fv=.65,pv=new zn(16738842),mv=new zn(16769126),hv=class{object=new R;fire=0;points=[];outer=new gv(0);core=new gv(1);sparkles=[];outerColor=new zn;coreColor=new zn;tmp=new zn;rainbow=!1;fade=0;time=0;emitDebt=0;nextSparkle=0;constructor(){this.object.add(this.outer.mesh,this.core.mesh);let e=_v();for(let t=0;t<uv;t++){let t=new oi(new Kr({map:e,transparent:!0,depthWrite:!1,fog:!1}));t.visible=!1,this.object.add(t),this.sparkles.push({sprite:t,vel:new L,life:0,size:1,spin:0})}}setStyle(e){this.outerColor.set(e.trail),this.coreColor.set(e.trailCore),this.rainbow=e.rainbow===!0}clear(){this.points.length=0,this.fade=0;for(let e of this.sparkles)e.life=0,e.sprite.visible=!1;this.outer.hide(),this.core.hide()}update(e,t,n,r,i){this.time+=e;for(let t of this.points)t.age+=e;for(;this.points.length>0&&this.points[0].age>lv;)this.points.shift();if(t){this.fade=1;let r=this.points[this.points.length-1];r&&r.pos.distanceToSquared(t)<.09?r.pos.copy(t):(this.points.push({pos:t.clone(),age:0}),this.points.length>cv&&this.points.shift()),this.emit(e,t,n,i)}else this.fade=Math.max(0,this.fade-e*1.4);this.updateSparkles(e);let a=this.points.length;if(a<2||this.fade<=0){this.outer.hide(),this.core.hide();return}let o=Lg*.8*i*(1+.8*this.fire),s=this.points[a-1].pos,c=Lg*i*1.2,l=(e,t,n)=>(this.rainbow?this.tmp.setHSL((e*.9+this.time*.5)%1,1,t===this.coreColor?.85:.6):this.tmp.copy(t)).lerp(n,this.fire);this.outer.build(this.points,r,s,c,e=>o*e**.7,e=>l(e,this.outerColor,pv),e=>this.fade*.95*(.12+.88*e)**1.2),this.core.build(this.points,r,s,c,e=>o*.4*e**.9,e=>l(e,this.coreColor,mv),e=>this.fade*e**1.4)}emit(e,t,n,r){for(this.emitDebt+=e*dv*(1+3*this.fire);this.emitDebt>=1;){--this.emitDebt;let e=this.sparkles[this.nextSparkle];this.nextSparkle=(this.nextSparkle+1)%uv;let i=Lg*r*.8;e.sprite.position.set(t.x+(Math.random()-.5)*i*2,t.y+(Math.random()-.5)*i*2,t.z+(Math.random()-.5)*i*2),e.vel.set(Math.random()-.5,Math.random()-.3,Math.random()-.5).multiplyScalar(6*r).addScaledVector(n,.9),e.life=fv*(.7+Math.random()*.3),e.size=Lg*r*(.6+Math.random()*.5),e.spin=(Math.random()-.5)*8;let a=e.sprite.material;Math.random()<this.fire?a.color.copy(Math.random()<.5?pv:mv):this.rainbow?a.color.setHSL(Math.random(),1,.65):a.color.copy(Math.random()<.5?this.outerColor:this.coreColor),e.sprite.visible=!0}}updateSparkles(e){for(let t of this.sparkles){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.sprite.visible=!1;continue}let n=t.life/fv;t.sprite.position.addScaledVector(t.vel,e);let r=t.size*(.3+.7*n);t.sprite.scale.set(r,r,1),t.sprite.material.rotation+=t.spin*e,t.sprite.material.opacity=Math.min(1,n*1.6)}}},gv=class{mesh;geo=new Ir;positions=new Float32Array(660);colors=new Float32Array(880);tangent=new L;toCam=new L;side=new L;constructor(e){let t=[];for(let e=0;e<109;e++){let n=e*2;t.push(n,n+1,n+2,n+1,n+3,n+2)}this.geo.setIndex(t),this.geo.setAttribute(`position`,new xr(this.positions,3).setUsage(qe)),this.geo.setAttribute(`color`,new xr(this.colors,4).setUsage(qe)),this.mesh=new z(this.geo,new pi({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,fog:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10+e}hide(){this.geo.setDrawRange(0,0)}build(e,t,n,r,i,a,o){let s=e.length;for(let c=0;c<s;c++){let l=e[c].pos,u=e[Math.max(0,c-1)].pos,d=e[Math.min(s-1,c+1)].pos,f=c/(s-1);this.tangent.subVectors(d,u).normalize(),this.toCam.subVectors(t.position,l);let p=this.toCam.length();this.side.crossVectors(this.tangent,this.toCam.normalize()).normalize();let m=i(f),h=c*6;this.positions[h]=l.x+this.side.x*m,this.positions[h+1]=l.y+this.side.y*m,this.positions[h+2]=l.z+this.side.z*m,this.positions[h+3]=l.x-this.side.x*m,this.positions[h+4]=l.y-this.side.y*m,this.positions[h+5]=l.z-this.side.z*m;let g=Math.min(1,Math.max(0,(p-4)/20)),_=Math.min(1,Math.max(0,(l.distanceTo(n)-r)/r)),v=o(f)*g*_,y=a(f),b=c*8;for(let e of[0,4])this.colors[b+e]=y.r,this.colors[b+e+1]=y.g,this.colors[b+e+2]=y.b,this.colors[b+e+3]=v}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.setDrawRange(0,(s-1)*6)}};function _v(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.translate(32,32),t.fillStyle=`#ffffff`,t.beginPath();for(let e=0;e<8;e++){let n=e/8*Math.PI*2,r=e%2==0?30:8;t.lineTo(Math.cos(n)*r,Math.sin(n)*r)}t.closePath(),t.fill(),t.beginPath(),t.arc(0,0,10,0,Math.PI*2),t.fill();let n=new Hi(e);return n.colorSpace=Ve,n}var vv=Lg,yv=new L(0,1,0),bv=new L(0,0,1),xv=1.7,Sv=.55,Cv=new zn(16747039),wv=class{holder=new R;model=null;halo;shadow;trail=new hv;flame=new R;flameCore;rings=[];boostT=0;lastVel=new L;haloColor=new zn;haloOpacity=.45;dir=new L;phase=`tee`;phaseTime=0;t=0;yaw=0;scale=1;axis=new L;q=new Pt;identity=new Pt;inverseHolder=new Pt;constructor(e){this.halo=new oi(new Kr({map:Tv(),transparent:!0,depthWrite:!1,blending:2})),this.shadow=new z(new Ji(vv*1.1,24).rotateX(-Math.PI/2),new pi({color:1909811,transparent:!0,opacity:.35,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-10,polygonOffsetUnits:-10})),e.add(this.holder,this.halo,this.shadow,this.trail.object);let t=(e,t,n,r,i)=>{let a=new z(new V(e,t,18,1,!0).translate(0,t/2,0).rotateX(Math.PI),new pi({color:n,transparent:!0,opacity:r?1:.92,depthWrite:!1,side:2,fog:!1,blending:r?2:1}));return a.renderOrder=i,a};this.flameCore=t(vv*.75,vv*3,16773544,!0,13),this.flame.add(t(vv*1.2,vv*4.6,16742943,!1,12),this.flameCore),this.flame.visible=!1,e.add(this.flame);for(let t=0;t<2;t++){let n=new z(new vo(.82,1,48),new pi({color:t===0?16777215:16757322,transparent:!0,depthWrite:!1,side:2,fog:!1}));n.renderOrder=14,n.visible=!1,e.add(n),this.rings.push({mesh:n,age:Sv})}}boost(){this.boostT=1;let e=this.dir.copy(this.lastVel).normalize();this.rings.forEach((t,n)=>{t.age=-.07*n,t.mesh.position.copy(this.holder.position),t.mesh.quaternion.setFromUnitVectors(bv,e)})}setMonster(e,t){this.model&&(this.holder.remove(this.model.root),this.model.root.traverse(e=>{e instanceof z&&e.geometry.dispose()})),this.model=new U_(e,t),this.holder.add(this.model.root),this.trail.setStyle(e),this.haloColor.set(e.trail),this.haloOpacity=e.glow>0?.9:.45,this.setPhase(this.phase)}setPhase(e){this.phase=e,this.phaseTime=0,this.model?.setMood({tee:`idle`,charging:`scared`,flight:`fly`,rolling:`fly`,rest:`dizzy`}[e])}setPhaseOnce(e){this.phase!==e&&this.setPhase(e)}hit(){this.model?.hit()}clearTrail(){this.trail.clear()}update(e,t,n,r){let i=this.model;if(!i)return;this.t+=e,this.phaseTime+=e,i.update(e),this.phase===`rest`&&this.phaseTime>1.6&&i.setMood(`happy`),this.lastVel.copy(n),this.boostT=Math.max(0,this.boostT-e/xv);let a=this.phase===`flight`||this.phase===`rolling`,o=r.position.distanceTo(t),s=a?Math.max(1.5,o/15):1;this.scale+=(s-this.scale)*(1-Math.exp(-6*e));let c=this.scale;this.holder.scale.setScalar(c);let l=vv*(c*i.size-1);if(a){this.axis.crossVectors(yv,n);let t=this.axis.length();if(t>.001){this.axis.divideScalar(t),this.inverseHolder.copy(this.holder.quaternion).invert(),this.axis.applyQuaternion(this.inverseHolder);let r=n.length(),a=this.phase===`rolling`?Math.hypot(n.x,n.z)/(vv*c*i.size):Math.min(r*.08/vv,16)*(1+1.5*this.boostT);this.q.setFromAxisAngle(this.axis,a*e),i.body.quaternion.premultiply(this.q)}}else{l+=i.stand+i.hover+(i.hover>0?Math.sin(this.t*2.2)*.07:Math.abs(Math.sin(this.t*3))*.03),this.phase===`rest`&&this.phaseTime>1.6&&(l+=Math.max(0,Math.sin(this.phaseTime*5))*.3);let n=Math.atan2(r.position.x-t.x,r.position.z-t.z)-this.yaw;n=Math.atan2(Math.sin(n),Math.cos(n)),this.yaw+=n*(1-Math.exp(-6*e)),this.holder.rotation.y=this.yaw,i.body.quaternion.slerp(this.identity,1-Math.exp(-8*e))}this.holder.position.set(t.x,t.y+l,t.z),this.halo.visible=this.phase===`flight`,this.halo.position.copy(this.holder.position);let u=vv*5*c*(1+1.6*this.boostT);this.halo.scale.set(u,u,1);let d=Math.min(1,this.boostT*2);this.halo.material.color.copy(this.haloColor).lerp(Cv,d),this.halo.material.opacity=this.haloOpacity+(1-this.haloOpacity)*d;let f=Math.max(0,t.y-vv);this.shadow.position.set(t.x,.18,t.z),this.shadow.scale.setScalar(c*(1+f*.02)),this.shadow.material.opacity=.35*Math.max(0,1-f/120),this.trail.fire=this.phase===`flight`?Math.min(1,this.boostT*1.6):0,this.trail.update(e,this.phase===`flight`?this.holder.position:null,n,r,c),this.updateBoostFx(e,c)}updateBoostFx(e,t){let n=this.phase===`flight`&&this.boostT>0&&this.lastVel.lengthSq()>1;if(this.flame.visible=n,n){let e=(1-this.boostT)*xv,n=Math.min(1,e/.06)*this.boostT**.6*t,r=this.dir.copy(this.lastVel).normalize().negate();this.flame.position.copy(this.holder.position).addScaledVector(r,vv*t*.75),this.flame.quaternion.setFromUnitVectors(yv,r.negate());let i=.85+Math.random()*.3;this.flame.scale.set(n,n*i*(1+.6*this.boostT),n),this.flameCore.scale.setScalar(.9+Math.random()*.2)}for(let n of this.rings){n.age+=e;let r=n.age/Sv;if(n.mesh.visible=r>=0&&r<1,!n.mesh.visible)continue;let i=1-(1-r)**3;n.mesh.scale.setScalar(vv*t*(1.5+9*i)),n.mesh.material.opacity=.9*(1-r)}}};function Tv(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,0.8)`),n.addColorStop(.35,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Hi(e);return r.colorSpace=Ve,r}var Ev=nd(`Preferences`,{web:()=>Sd(()=>import(`./web-CEqEnJiu.js`).then(e=>new e.PreferencesWeb),[],import.meta.url)}),Dv={hat:[0,150,600,2e3,6e3,16e3],jacket:[0,200,800,2800,9e3,24e3],pants:[0,180,700,2400,7500,2e4],shoes:[0,160,650,2200,7e3,19e3]},Ov=`robogolf-save-v1`,kv=`long-drive-save-v1`;function Av(){return{coins:0,best:0,shots:0,loadout:{club:0,gear:0,monster:0},owned:mm.map((e,t)=>t===0),levels:mm.map(()=>1),clubOwned:dm.map((e,t)=>t===0),clubLevels:dm.map(()=>1),gearOwned:pm.map((e,t)=>t===0),zone:0,xp:0,skills:Yd(),stats:ff(),achievements:{},noAds:!1}}async function jv(){try{let{value:e}=await Ev.get({key:Ov}),t=e??(await Ev.get({key:kv})).value;return t?Mv(JSON.parse(t)):Av()}catch{return Av()}}function Mv(e){let t=Av(),{ball:n,golfer:r,gear:i,...a}=e.loadout??{},o={...t,...e,loadout:{...t.loadout,...a},skills:{...t.skills},stats:{...t.stats,...e.stats},achievements:{...e.achievements},noAds:e.noAds===!0};if(typeof i==`number`&&(o.loadout.gear=i),!Array.isArray(e.gearOwned)){let e=r===void 0?0:Math.round(r*5/7),t=Object.keys(Dv).map(t=>{let n=typeof i==`object`?i[t]??0:e;return{slot:t,step:Math.min(Math.max(0,n|0),pm.length-1)}}),n=Math.min(...t.map(e=>e.step));for(let{slot:e,step:r}of t)for(let t=n+1;t<=r;t++)o.coins+=Dv[e][t];o.gearOwned=pm.map((e,t)=>t<=n),o.loadout.gear=n}if(!Array.isArray(e.owned)){let e=Math.min(n??0,mm.length-1);o.owned=mm.map((t,n)=>n<=e),o.loadout.monster=e}if(!Array.isArray(e.clubOwned)){let e=Math.min(o.loadout.club,dm.length-1);o.clubOwned=dm.map((t,n)=>n<=e),o.loadout.club=e}o.owned=mm.map((e,t)=>t===0||o.owned[t]===!0),o.levels=mm.map((e,t)=>Math.max(1,o.levels?.[t]??1)),o.clubOwned=dm.map((e,t)=>t===0||o.clubOwned[t]===!0),o.clubLevels=dm.map((e,t)=>Math.max(1,o.clubLevels?.[t]??1)),o.gearOwned=pm.map((e,t)=>t===0||o.gearOwned[t]===!0),o.owned[o.loadout.monster]||(o.loadout.monster=0),o.clubOwned[o.loadout.club]||(o.loadout.club=0),o.gearOwned[o.loadout.gear]||(o.loadout.gear=0),o.zone=Math.min(Math.max(0,o.zone|0),cf.length-1),typeof e.xp!=`number`&&(o.xp=(e.shots??0)*nf((e.best??0)*.66)),o.xp=Math.max(0,Math.round(o.xp));for(let t of qd)o.skills[t.id]=Math.min(t.maxRank,Math.max(0,Math.round(e.skills?.[t.id]??0)));return e.stats||(o.stats.totalFeet=Math.round(o.shots*o.best*.5),o.stats.coinsEarned=o.coins+Nv(o)),e.achievements||Cf(o),o}function Nv(e){let t=0,n=[{defs:mm,owned:e.owned,levels:e.levels},{defs:dm,owned:e.clubOwned,levels:e.clubLevels}];for(let{defs:e,owned:r,levels:i}of n)e.forEach((e,n)=>{if(r[n]){t+=e.cost;for(let r=1;r<i[n];r++)t+=um(e,r)??0}});return pm.forEach((n,r)=>{e.gearOwned[r]&&(t+=n.cost)}),t}async function Pv(e){try{await Ev.set({key:Ov,value:JSON.stringify(e)})}catch{}}function Fv(e){let{club:t,gear:n,monster:r}=e.loadout;return{club:fm(dm[t],e.clubLevels[t]),golfer:pm[n],monster:hm(mm[r],e.levels[r])}}function Iv(e){return _m(Fv(e),ef(e.skills),of(e.xp))}function Lv(e){let t={angle:e.unlocks.angle?0:null,spin:e.unlocks.spin?0:null,spinIdeal:0};return r_(km(e.club,e.golfer,1,.5,e.strike,t).launch,e.monster).total}function Rv(e,t){return Lv(_m({...Fv(e),...t},ef(e.skills),of(e.xp)))}function zv(e,t){return af(e.xp).level>=lm(t)}function Bv(e,t,n){return n||zv(e,t)?null:lm(t)}function Vv(e){let t=(t,n)=>zv(e,t)?n:null;return[...pm.map((n,r)=>e.gearOwned[r]?null:t(r,n.cost)),...mm.map((n,r)=>e.owned[r]?um(n,e.levels[r]):t(r,n.cost)),...dm.map((n,r)=>e.clubOwned[r]?um(n,e.clubLevels[r]):t(r,n.cost))].some(t=>t!==null&&e.coins>=t)}var Hv=e=>Math.min(1,Math.max(.06,e)),Uv=[{label:`Air speed`,value:e=>Hv(Math.log(1.4/e.drag)/Math.log(1.4/.0023))},{label:`Glide`,value:e=>Hv((e.lift-.7)/1.24)},{label:`Bounce`,value:e=>Hv(e.bounce/.7)},{label:`Roll`,value:e=>Hv(Math.log(1.3/e.roll)/Math.log(1.3/.15))}],Wv=[{label:`Power`,value:e=>Hv(Math.log(e.power)/Math.log(47))},{label:`Sweet spot`,value:e=>Hv((e.sweetSpot-.03)/.122)}],Gv=[{label:`Power`,value:e=>Hv(Math.log(e.strength)/Math.log(5.65))},{label:`Timing`,value:e=>Hv((e.tempo-1)/1.55)}];function Kv(e,t){let n=Lv(Iv(e)),r=sv();return mm.map((i,a)=>{let o=e.levels[a],s=hm(i,o),c=hm(i,Math.min(o+1,5)),l=Rv(e,{monster:s});return{name:i.name,trait:i.trait,portrait:r[a],color:i.color,owned:e.owned[a],selected:e.loadout.monster===a,bars:Uv.map(t=>({label:t.label,now:t.value(s),next:e.owned[a]?t.value(c):t.value(s)})),unlockCost:i.cost,unlockLevel:Bv(e,a,e.owned[a]),unlockGainFt:l-n,words:{use:`Play`,inUse:`In play`},onUnlock:()=>t.unlockMonster(a),onSelect:()=>t.selectMonster(a),levels:{level:o,max:5,cost:um(i,o),gainFt:Rv(e,{monster:c})-l,onLevelUp:()=>t.levelMonster(a)}}})}function qv(e,t){let n=Lv(Iv(e)),r=Qm(d_);return dm.map((i,a)=>{let o=e.clubLevels[a],s=fm(i,o),c=fm(i,Math.min(o+1,5)),l=Rv(e,{club:s});return{name:i.name,trait:i.trait,portrait:r[a],color:i.color,owned:e.clubOwned[a],selected:e.loadout.club===a,bars:Wv.map(t=>({label:t.label,now:t.value(s),next:e.clubOwned[a]?t.value(c):t.value(s)})),unlockCost:i.cost,unlockLevel:Bv(e,a,e.clubOwned[a]),unlockGainFt:l-n,words:{use:`Use`,inUse:`Equipped`},onUnlock:()=>t.unlockClub(a),onSelect:()=>t.selectClub(a),levels:{level:o,max:5,cost:um(i,o),gainFt:Rv(e,{club:c})-l,onLevelUp:()=>t.levelClub(a)}}})}var Jv={camera:new L(9,4.5,4),target:new L(-2.4,3.45,0),fov:34},Yv=null;function Xv(){return Yv??=qp(pm.map(e=>{let t=new S_;return t.setGear(e),t.group}),Jv),Yv}function Zv(e,t){let n=Lv(Iv(e)),r=Xv();return pm.map((i,a)=>({name:i.name,trait:i.trait,portrait:r[a],color:i.color,owned:e.gearOwned[a],selected:e.loadout.gear===a,bars:Gv.map(e=>({label:e.label,now:e.value(i),next:e.value(i)})),unlockCost:i.cost,unlockLevel:Bv(e,a,e.gearOwned[a]),unlockGainFt:Rv(e,{golfer:i})-n,words:{use:`Wear`,inUse:`Wearing`},onUnlock:()=>t.unlockGear(a),onSelect:()=>t.wearGear(a)}))}var $=e=>document.getElementById(e),Qv=e=>Math.round(e).toLocaleString(`en-US`),$v={perfect:`PERFECT!`,great:`GREAT!`,good:`Good`,hook:`Hook!`,slice:`Slice!`,shank:`Shank...`},ey=class{shopButton=$(`shop-btn`);resultShop=$(`res-shop`);resultNext=$(`res-next`);shopClose=$(`shop-close`);shopBackdrop=$(`shop`);muteButton=$(`mute-btn`);privacyButton=$(`privacy-btn`);skillsButton=$(`skills-btn`);resultSkills=$(`res-skills`);skillsClose=$(`skills-close`);skillsBackdrop=$(`skills`);skillsReset=$(`skills-reset`);boostButton=$(`boost-btn`);resultDouble=$(`res-double`);awardsButton=$(`awards-btn`);awardsClose=$(`awards-close`);awardsBackdrop=$(`awards`);awardsClaimAll=$(`awards-claim-all`);achToast=$(`ach-toast`);noAdsBuy=$(`noads-buy`);noAdsSkip=$(`noads-skip`);noAdsRestore=$(`noads-restore`);skillTabs={power:$(`stab-power`),fortune:$(`stab-fortune`),precision:$(`stab-precision`),abilities:$(`stab-abilities`)};tabs={monsters:$(`tab-monsters`),clubs:$(`tab-clubs`),gear:$(`tab-gear`)};contact=$(`contact`);prompt=$(`prompt`);powerFill=$(`power-fill`);needle=$(`acc-needle`);coinTimer=0;shownTab=null;shownPick=0;shownSkillTab=null;resetTimer=0;toastQueue=[];toastTimer=0;toastTap=null;constructor(){let e=e=>`${(45-e*ty).toFixed(2)}deg`,[t,n]=[xm,bm];$(`angle-dial`).style.background=`conic-gradient(from 0deg at 0% 100%, #ff6b4a 0deg ${e(t)}, #ffd23f ${e(t)} ${e(n)}, #3fcf55 ${e(n)} ${e(-n)}, #ffd23f ${e(-n)} ${e(-t)}, #ff6b4a ${e(-t)} 90deg)`,$(`spin-good`).style.height=`${xm*100}%`,$(`spin-perfect`).style.height=`${bm*100}%`,this.achToast.addEventListener(`click`,()=>this.toastTap?.());for(let e of[`shop-panel`,`skills-panel`,`awards-panel`]){let t=$(e),n=t.querySelector(`.shop-top`);t.addEventListener(`scroll`,()=>n.classList.toggle(`stuck`,t.scrollTop>0),{passive:!0})}}setCoins(e){$(`coins`).textContent=Qv(e),$(`shop-coins`).textContent=Qv(e)}setBest(e){$(`best`).textContent=Qv(e)}setUpgradeAvailable(e){$(`shop-dot`).classList.toggle(`hidden`,!e),$(`res-dot`).classList.toggle(`hidden`,!e)}setClaimable(e){$(`awards-dot`).classList.toggle(`hidden`,e<=0)}setSkillPoints(e){$(`skills-dot`).classList.toggle(`hidden`,e<=0),$(`res-skills-dot`).classList.toggle(`hidden`,e<=0)}setWind(e,t){$(`wind-arrow`).style.transform=`rotate(${t}rad)`,$(`wind-text`).textContent=e<.5?`calm`:`${Math.round(e)} mph`}setPrompt(e,t=!1){this.prompt.textContent=e,this.prompt.classList.toggle(`urgent`,t),this.prompt.classList.toggle(`hidden`,e===``)}showReadyControls(e){$(`shop-btn`).classList.toggle(`hidden`,!e),$(`skills-btn`).classList.toggle(`hidden`,!e),$(`awards-btn`).classList.toggle(`hidden`,!e)}configureAccuracy(e){let t=t=>`${(2*(e+t*(.5-e))*100).toFixed(2)}%`;$(`acc-perfect`).style.width=t(0),$(`acc-great`).style.width=t(.12),$(`acc-good`).style.width=t(.3)}showMeters(e){if($(`meters`).classList.toggle(`hidden`,e===null),e===null)return;for(let t of Object.keys(e.states)){let n=$(t);n.dataset.state!==e.states[t]&&(n.dataset.state=e.states[t])}this.powerFill.style.height=`${(e.power*100).toFixed(1)}%`,this.needle.style.left=`${(e.needle*100).toFixed(2)}%`,$(`angle-needle`).style.transform=`rotate(${(-(45+e.angle*ty)).toFixed(2)}deg)`;let t=e=>`${((e+1)/2*100).toFixed(2)}%`;$(`spin-needle`).style.bottom=t(e.spin),$(`spin-good`).style.bottom=t(e.spinIdeal),$(`spin-perfect`).style.bottom=t(e.spinIdeal)}showSliderGrade(e,t){let n=$(`slider-grade`);n.className=`slider-grade`,n.offsetWidth,n.textContent=e,n.classList.add(`show`,t)}showContact(e){let t=this.contact;t.className=`contact`,t.offsetWidth,t.textContent=$v[e],t.classList.add(`show`,e)}showMilestone(e,t){let n=$(`milestone`);n.classList.remove(`show`),n.offsetWidth,n.innerHTML=`<div class="ms-title">${Qv(e)} FT!</div><div class="ms-coins">+${Qv(t)} <span class="coin"></span></div>`,n.classList.add(`show`)}showZone(e,t,n){let r=$(`zone-banner`);r.classList.remove(`show`),r.offsetWidth,r.style.setProperty(`--zone`,`#${t.toString(16).padStart(6,`0`)}`),r.innerHTML=`<div class="zb-small">Entering</div><div class="zb-name">${e}</div>`+(n>0?`<div class="zb-bonus">New zone! +${Qv(n)} <span class="coin"></span></div>`:``),r.classList.add(`show`)}showLive(e,t=0,n=``){$(`live`).classList.toggle(`hidden`,!e),$(`live-dist`).textContent=Qv(t),$(`live-tag`).textContent=n}showFastForward(e){$(`ff`).classList.toggle(`hidden`,!e)}showBoost(e,t=0){this.boostButton.classList.toggle(`hidden`,!e),$(`boost-left`).textContent=t>1?` ×${t}`:``}showDoubleOffer(e,t=0){let n=this.resultDouble;n.classList.toggle(`hidden`,!e),n.disabled=!1,n.innerHTML=`🎬 Watch an ad: <b>+${Qv(t)}</b> <span class="coin"></span>`}showDoubled(e,t){this.resultDouble.classList.add(`hidden`);let n=$(`res-coins`),r=performance.now();window.clearInterval(this.coinTimer),this.coinTimer=window.setInterval(()=>{let i=Math.min(1,(performance.now()-r)/700);n.textContent=Qv(e+(t-e)*(1-(1-i)**3)),i>=1&&window.clearInterval(this.coinTimer)},30),ay($(`res-coins-row`))}popBoost(e=0){let t=$(`boost-pop`),n=$(`speed-lines`);t.classList.remove(`show`),n.classList.remove(`show`),t.offsetWidth,t.innerHTML=`<div class="bp-title">BOOST!</div>`+(e>=1?`<div class="bp-gain">+${Qv(e)} ft</div>`:``),t.classList.add(`show`),n.classList.add(`show`)}showResult(e,t){$(`result`).classList.remove(`hidden`);let n=$(`res-title`);n.textContent=e.record?`New record!`:ly(e.kind),n.classList.toggle(`record`,e.record),$(`res-total`).textContent=Qv(e.total);let r=e.total>=5280?`${(e.total/5280).toFixed(2)} miles · `:``,i=e.record?e.previousBest>0?`${Qv(e.total-e.previousBest)} ft past your old best`:`Your first launch!`:`${Qv(e.previousBest-e.total)} ft short of your best`;$(`res-sub`).textContent=`${r}${e.zoneName} · ${i}${e.inRough?` · in the rough`:``}`,$(`res-carry`).textContent=`${Qv(e.carry)} ft`,$(`res-contact`).textContent=$v[e.kind].replace(/[!.]/g,``),$(`res-apex`).textContent=`${Qv(e.apex)} ft`,$(`res-milestones`).classList.toggle(`hidden`,e.milestones<=0),$(`res-milestones-amount`).textContent=`+${Qv(e.milestones)}`,$(`res-bonus`).classList.toggle(`hidden`,e.recordBonus<=0),$(`res-bonus-amount`).textContent=`+${Qv(e.recordBonus)}`,$(`res-fairway`).classList.toggle(`hidden`,e.fairwayBonus<=0),$(`res-fairway-amount`).textContent=`+${Qv(e.fairwayBonus)}`,$(`res-zone`).classList.toggle(`hidden`,e.zoneBonus<=0),$(`res-zone-amount`).textContent=`+${Qv(e.zoneBonus)}`,(e.recordBonus>0||e.milestones>0||e.fairwayBonus>0||e.zoneBonus>0)&&ay($(`res-coins-row`));let a=e.xp.level;$(`res-level`).textContent=String(a.level),$(`res-xp`).textContent=`+${Qv(e.xp.gain)} XP`,$(`res-xp-fill`).style.width=`${a.needed>0?(a.into/a.needed*100).toFixed(1):100}%`;let o=e.xp.levelsGained;$(`res-levelup`).classList.toggle(`hidden`,o<=0),$(`res-levelup-text`).textContent=`Level ${a.level}!`,$(`res-levelup-amount`).textContent=`+${o} skill point${o>1?`s`:``}`,$(`res-unlock`).classList.toggle(`hidden`,e.xp.unlock===``),$(`res-unlock-text`).textContent=e.xp.unlock;let s=$(`res-coins`),c=performance.now();window.clearInterval(this.coinTimer),this.coinTimer=window.setInterval(()=>{let t=Math.min(1,(performance.now()-c)/700);s.textContent=Qv(e.coins*(1-(1-t)**3)),t>=1&&window.clearInterval(this.coinTimer)},30),window.setTimeout(t,250)}hideResult(){$(`result`).classList.add(`hidden`)}get skillsOpen(){return!$(`skills`).classList.contains(`hidden`)}openSkills(e){$(`skills`).classList.toggle(`hidden`,!e),e||this.disarmReset()}confirmReset(){return this.resetTimer?(this.disarmReset(),!0):(this.skillsReset.textContent=`Tap again to reset`,this.skillsReset.classList.add(`armed`),this.resetTimer=window.setTimeout(()=>this.disarmReset(),3e3),!1)}disarmReset(){window.clearTimeout(this.resetTimer),this.resetTimer=0,this.skillsReset.textContent=`Reset skills (free)`,this.skillsReset.classList.remove(`armed`)}renderSkills(e,t,n,r,i,a){$(`skills-note`).textContent=a;for(let[t,n]of Object.entries(this.skillTabs))n.classList.toggle(`active`,t===e);e!==this.shownSkillTab&&($(`skills-panel`).scrollTop=0),this.shownSkillTab=e,$(`skill-points`).textContent=Qv(r),$(`skill-points`).parentElement.classList.toggle(`has`,r>0),$(`skill-level`).textContent=String(n.level),$(`skill-xp-fill`).style.width=`${n.needed>0?(n.into/n.needed*100).toFixed(1):100}%`,$(`skill-xp-text`).textContent=n.needed>0?`${Qv(n.into)} / ${Qv(n.needed)} XP`:`Max level`,this.skillsReset.classList.toggle(`hidden`,!i);let o=Wd.find(t=>t.id===e),s=$(`skill-list`);s.replaceChildren(),t.forEach((e,t)=>{if(t>0){let t=document.createElement(`div`);t.className=`skill-link${e.blocker===`locked`?``:` on`}`,t.style.setProperty(`--c`,oy(o.color)),s.append(t)}s.append(ry(e,o))})}get noAdsOpen(){return!$(`noads`).classList.contains(`hidden`)}showNoAds(e,t=``){$(`noads`).classList.toggle(`hidden`,!e),$(`noads-price`).textContent=t,this.noAdsBuy.disabled=!1}get awardsOpen(){return!$(`awards`).classList.contains(`hidden`)}openAwards(e){$(`awards`).classList.toggle(`hidden`,!e),e&&($(`awards-panel`).scrollTop=0)}renderAwards(e,t){let n=e.filter(e=>e.state!==null).length,r=e.filter(e=>e.state===`done`);$(`awards-coins`).textContent=Qv(t),$(`awards-done`).textContent=String(n),$(`awards-total`).textContent=String(e.length),this.awardsClaimAll.classList.toggle(`hidden`,r.length<2),this.awardsClaimAll.innerHTML=`Claim all ${sy(r.reduce((e,t)=>e+t.def.reward,0))}`;let i=e=>e.state===`done`?0:e.state===null?1:2,a=e.map((e,t)=>({c:e,i:t})).sort((e,t)=>i(e.c)-i(t.c)||e.i-t.i);$(`award-list`).replaceChildren(...a.map(({c:e})=>iy(e)))}burstAwardCoins(){ay($(`awards-coins-pill`))}toast(e,t,n,r){this.toastQueue.push({icon:e,title:t,name:n,onTap:r}),this.toastTimer||this.nextToast()}nextToast(){let e=this.achToast,t=this.toastQueue.shift();t?($(`ach-toast-icon`).textContent=t.icon,$(`ach-toast-title`).textContent=t.title,$(`ach-toast-name`).textContent=t.name,this.toastTap=t.onTap,e.classList.add(`show`),this.toastTimer=window.setTimeout(()=>{e.classList.remove(`show`),this.toastTimer=window.setTimeout(()=>this.nextToast(),350)},2600)):(e.classList.remove(`show`),this.toastTimer=0)}get shopOpen(){return!$(`shop`).classList.contains(`hidden`)}openShop(e){$(`shop`).classList.toggle(`hidden`,!e)}startShopPage(e,t,n=0){for(let[t,n]of Object.entries(this.tabs))n.classList.toggle(`active`,t===e);(e!==this.shownTab||n!==this.shownPick)&&($(`shop-panel`).scrollTop=0),this.shownTab=e,this.shownPick=n,$(`shop-est`).textContent=`${Qv(t)} ft`;let r=$(`shop-list`);return r.replaceChildren(),r}renderCollection(e,t,n,r){let i=Math.max(0,t.findIndex(e=>e.selected)),a=this.startShopPage(e,r,i);for(let e of t.slice(i))a.append(ny(e,n));let o=t.slice(0,i).reverse();if(o.length>0){let t=document.createElement(`div`);t.className=`shop-divider`,t.textContent=e===`gear`?`Previous sets`:`Previous ${e}`,a.append(t);for(let e of o)a.append(ny(e,n))}}},ty=37;function ny(e,t){let n=e.levels,r=n?`<div class="stars">${Array.from({length:n.max},(t,r)=>`<i class="${e.owned&&r<n.level?`on`:``}">★</i>`).join(``)}</div>`:``,i=e.bars.map(e=>`<div class="bar"><span>${e.label}</span><div class="meter"><em style="width:${(e.next*100).toFixed(1)}%"></em><i style="width:${(e.now*100).toFixed(1)}%"></i></div></div>`).join(``),a=document.createElement(`section`);a.className=`track collect-card${e.selected?` selected`:``}${e.owned?``:` locked`}${e.unlockLevel?` level-locked`:``}`,a.innerHTML=`
    <div class="track-head">
      <div class="portrait" style="--c:${oy(e.color)}">
        <img src="${e.portrait}" alt="" />
        ${e.owned?``:`<span class="lock">🔒</span>`}
      </div>
      <div class="mc-info">
        <div class="track-name">${e.name}${e.selected?`<span class="tag">${e.words.inUse.toUpperCase()}</span>`:``}</div>
        ${r}
        <div class="trait">${e.trait}</div>
      </div>
    </div>
    <div class="bars">${i}</div>`;let o=document.createElement(`div`);if(o.className=n?`mc-buttons`:`mc-buttons single`,!e.owned&&e.unlockLevel)o.append(cy(`btn primary buy`,!0,`<span>🔒 Reach level ${e.unlockLevel}</span>${sy(e.unlockCost)}`,()=>{}));else if(e.owned)o.append(e.selected?cy(`btn ghost`,!0,`${e.words.inUse} ✓`,()=>{}):cy(`btn secondary`,!1,e.words.use,e.onSelect)),n&&o.append(n.cost===null?cy(`btn ghost`,!0,`MAX ★`,()=>{}):cy(`btn primary buy`,t<n.cost,`<span>Level up${n.gainFt>=1?`<small>+${Qv(n.gainFt)} ft</small>`:``}</span>${sy(n.cost)}`,n.onLevelUp));else{let n=e.unlockGainFt>=1?`<small>+${Qv(e.unlockGainFt)} ft</small>`:``;o.append(cy(`btn primary buy`,t<e.unlockCost,`<span>Unlock${n}</span>${sy(e.unlockCost)}`,e.onUnlock))}return a.append(o),a}function ry(e,t){let{def:n,rank:r}=e,i=document.createElement(`section`);i.className=`skill-node${e.blocker===`locked`?` locked`:``}${e.blocker===`max`?` maxed`:``}`,i.style.setProperty(`--c`,oy(t.color));let a=Array.from({length:n.maxRank},(e,t)=>`<i class="${t<r?`on`:``}"></i>`).join(``),o=r>0?n.effect(r):`Not learned yet`,s=r<n.maxRank?`<div class="node-next">${r>0?`Next`:`Learn`}: ${n.effect(r+1)}</div>`:``;i.innerHTML=`
    <div class="node-icon">${n.icon}</div>
    <div class="node-info">
      <div class="node-name">${n.name}</div>
      <div class="pips">${a}</div>
      <div class="node-now">${o}</div>
      ${s}
    </div>`;let c=document.createElement(`div`);return c.className=`node-side`,e.blocker===`max`?c.innerHTML=`<span class="node-max">MAX</span>`:e.blocker===`locked`?c.innerHTML=`<span class="node-lock">🔒<small>${e.branchSpent}/${n.needs} ${t.name} points</small></span>`:c.append(cy(`btn primary learn`,e.blocker===`points`,`Learn`,e.onLearn)),i.append(c),i}function iy(e){let{def:t,state:n}=e,r=document.createElement(`section`);r.className=`award${n?` ${n}`:``}`;let i=t.show??Qv,a=t.target>1&&n===null?`<div class="award-bar"><div class="meter"><i style="width:${Math.min(100,e.progress/t.target*100).toFixed(1)}%"></i></div><small>${i(Math.min(e.progress,t.target))} / ${i(t.target)}</small></div>`:``;r.innerHTML=`
    <div class="award-icon">${t.icon}</div>
    <div class="award-info">
      <div class="award-name">${t.name}</div>
      <div class="award-desc">${t.desc}</div>
      ${a}
    </div>`;let o=document.createElement(`div`);return o.className=`award-side`,o.innerHTML=sy(t.reward),n===`done`?o.append(cy(`btn primary claim`,!1,`Claim`,e.onClaim)):n===`claimed`&&o.insertAdjacentHTML(`beforeend`,`<span class="award-check">✓ Claimed</span>`),r.append(o),r}function ay(e){let t=document.createElement(`div`);t.className=`coin-burst`;for(let e=0;e<14;e++){let e=document.createElement(`span`);e.className=`coin fly`;let n=-Math.PI/2+(Math.random()-.5)*Math.PI*1.3,r=60+Math.random()*90;e.style.setProperty(`--x`,`${Math.cos(n)*r}px`),e.style.setProperty(`--y`,`${Math.sin(n)*r}px`),e.style.setProperty(`--d`,`${.25+Math.random()*.25}s`),t.append(e)}e.append(t),window.setTimeout(()=>t.remove(),1600)}function oy(e){return`#${e.toString(16).padStart(6,`0`)}`}function sy(e){return`<span class="price"><span class="coin"></span>${Qv(e)}</span>`}function cy(e,t,n,r){let i=document.createElement(`button`);return i.className=e,i.disabled=t,i.innerHTML=n,i.addEventListener(`click`,r),i}function ly(e){switch(e){case`perfect`:return`Pure strike!`;case`great`:return`Great launch`;case`good`:return`Nice shot`;case`hook`:return`Hooked it`;case`slice`:return`Sliced it`;case`shank`:return`Shanked it`}}var uy=.14,dy=Rg-uy;function fy(e,t,n=0,r=0,i=0){let a=new z(e,t);return a.position.set(n,r,i),a}function py(e,t=.8){return K(e,{emissive:e,emissiveIntensity:t})}function my(e,t,n,r,i,a=32,o=!1){let s=new B(e,t,n,a).translate(0,n/2,0);return o&&(s=s.toNonIndexed(),s.computeVertexNormals()),fy(s,i,0,r,0)}function hy(e,t,n,r){return fy(new U(e,t,8,40),r,0,n,0).rotateX(Math.PI/2)}function gy(e,t,n,r,i=0){let a=new R;for(let o=0;o<e;o++){let s=i+o/e*Math.PI*2,c=r(o);c.position.set(Math.cos(s)*t,n,Math.sin(s)*t),c.rotation.y=-s,a.add(c)}return a}function _y(e,t,n=32,r=!1){let i=new R;return i.add(my(.72,.82,dy,0,e,n,r),my(.84,.8,uy,dy,t,n)),i}var vy=(e,t=.05)=>()=>fy(new H(t,10,8),e),yy=(e,t,n)=>()=>{let r=fy(new V(e,t,8).translate(0,t/2,0),n);return r.rotation.z=-Math.PI/2,r},by={blobby:()=>{let{plate:e,seam:t}=G.scrap,n=K(t),r=_y(K(e),n);return r.add(my(.785,.785,.05,.3,n),gy(10,.8,.5,vy(n,.035))),r},puffo:()=>{let{plate:e,trim:t}=G.cadet,n=py(t,.15),r=_y(K(e),n);return r.add(gy(12,.78,.35,yy(.05,.12,n)),my(.82,.82,.04,.12,n)),r},rocky:()=>{let{plate:e,under:t,trim:n}=G.recon,r=py(n,.15),i=new R;return i.add(my(.92,.94,.22,0,K(t)),my(.72,.76,dy-.22,.22,K(e)),my(.84,.8,uy,dy,r)),i.add(gy(8,.93,.11,vy(r,.05))),i},flapjack:()=>{let{plate:e,trim:t,glow:n}=G.siege,r=_y(K(e),K(t),8);return r.add(my(.79,.8,.06,.28,py(n))),r},boing:()=>{let{plate:e,trim:t,gold:n}=G.storm,r=K(e),i=K(t),a=new R;a.add(my(.62,.82,.2,0,r),my(.84,.8,.2,dy-.06,r),hy(.85,.03,Rg-.01,py(n,.15)));for(let e=0;e<4;e++){let t=hy(.5,.06,.26+e*.1,i);t.rotation.x=Math.PI/2+(e%2?.08:-.08),a.add(t)}return a},ghosty:()=>{let{plate:e,ivory:t,gold:n}=G.crimson,r=new R;return r.add(my(.72,.66,dy-.16,.16,K(t)),my(.84,.8,uy,dy,py(n,.2))),r.add(my(.74,.74,.1,.4,K(e)),hy(.6,.05,.07,py(n))),r},ember:()=>{let{plate:e,under:t,glow:n}=G.titan,r=K(e),i=_y(K(t),r);i.add(gy(4,.78,.05,()=>fy(new Ki(.06,dy-.1,.42).translate(0,(dy-.1)/2,0),r),Math.PI/4));let a=py(n,.9);return i.add(gy(4,.76,.3,()=>fy(new Ki(.04,.05,.26),a))),i},cosmo:()=>{let{plate:e,chrome:t,glow:n}=G.tempest,r=_y(K(e),K(t),6);return r.add(my(.82,.83,.05,.06,py(n)),my(.78,.79,.04,.42,py(n))),r},jetbot:()=>{let{plate:e,steel:t,glow:n,accent:r}=G.eclipse,i=_y(K(e),K(t));return i.add(my(.79,.8,.05,.22,py(n)),gy(8,.85,Rg-uy/2,vy(py(r),.045))),i},sparky:()=>{let{plate:e,gold:t}=G.solar,n=py(t,.2),r=_y(K(e),n);for(let e of[.15,.3,.45])r.add(hy(.77,.035,e,n));return r.add(gy(4,.86,Rg-uy/2,vy(py(10480127,1),.06))),r},orbit:()=>{let{plate:e,glow:t,eye:n}=G.vanguard,r=_y(K(e),py(t,.5)),i=new R;i.position.y=.32,i.rotation.set(.25,0,.12);let a=hy(.98,.03,0,py(t)),o=py(n,.6);return i.add(a,fy(new H(.07,10,8),o,.98,0,0),fy(new H(.06,10,8),o,-.7,0,-.69)),r.add(i),r},nova:()=>{let{plate:e,glow:t}=G.blaze,n=py(t,.8),r=_y(K(e),n);return r.add(gy(12,.84,Rg-uy/2,yy(.05,.2,n))),r},ufo:()=>{let{plate:e,ice:t,teal:n}=G.frost,r=K(e),i=new R;return i.add(my(.98,1,.12,0,r),my(.7,.76,dy-.12,.12,r),my(.84,.8,uy,dy,py(t,.5))),i.add(gy(10,.99,.06,e=>fy(new H(.045,10,8),py(e%2?n:t,.9)))),i},rex:()=>{let{plate:e,red:t,lava:n}=G.drake,r=_y(K(e),K(t),7,!0),i=py(n,.9);return r.add(gy(5,.77,.08,()=>{let e=fy(new Ki(.03,.42,.04).translate(0,.21,0),i);return e.rotation.x=.35,e})),r},shark:()=>{let{plate:e,silver:t,glow:n}=G.phantom,r=_y(K(e),K(t),6);return r.add(my(.8,.81,.04,.05,K(t)),gy(6,.73,.36,vy(py(n),.05),Math.PI/6)),r},astro:()=>{let{plate:e,navy:t,glow:n}=G.lancer,r=_y(K(e),K(t));return r.add(my(.785,.79,.12,.22,K(t)),gy(8,.8,.28,vy(py(n),.045))),r},prism:()=>{let{gold:e,gem:t}=G.aegis,n=_y(K(12577252,{emissive:t,emissiveIntensity:.2}),py(e,.2),6,!0);return n.add(gy(6,.86,0,()=>{let e=fy(new V(.07,.3,5).translate(0,.15,0),py(t,.5));return e.rotation.z=-.35,e})),n},phoenix:()=>{let{plate:e,gold:t,eye:n}=G.ronin,r=py(t,.5),i=_y(K(e),r);return i.add(gy(8,.78,.04,()=>fy(new V(.09,.42,6).translate(0,.21,0),r))),i.add(gy(8,.8,.12,vy(py(n,.7),.04))),i},mech:()=>{let{plate:e,dark:t,gold:n}=G.galaxy,r=py(n,.5),i=_y(K(e),K(t));return i.add(my(.79,.8,.05,.12,r),my(.76,.77,.05,.42,r),gy(6,.79,.27,vy(r,.05))),i},astra:()=>{let{plate:e,gold:t,gem:n}=G.infinity,r=py(t,.5),i=_y(K(e,{emissive:e,emissiveIntensity:.3}),r,8,!0);return i.add(hy(1,.035,.36,r),gy(4,.76,.3,vy(py(n,.6),.06),Math.PI/4)),i}};function xy(e){let t=by[e]();return t.traverse(e=>{e instanceof z&&(e.castShadow=e.receiveShadow=!0)}),im(t,$p),t}var Sy=new zn(13233407),Cy=new zn(2788351),wy=new L(.45,.8,.45).normalize(),Ty=new L(0,1,0).cross(wy).normalize(),Ey=wy.clone().cross(Ty).normalize(),Dy=28e3,Oy=13e3,ky=40,Ay=60,jy=8,My=100,Ny=5280,Py=150,Fy=800,Iy=class{scene=new Hn;sun;hemi;sky;hills;skyBodies;rough;fairway;scenery;markers;clouds;bestFlag;mileArches;fog;horizon=Sy.clone();shadowFocus=new L;tint=new zn;skyDir=new L;podiumMount=new R;podiums=new Map;constructor(){let e=this.scene;this.fog=new Vn(this.horizon,500,7e3),e.fog=this.fog,e.background=this.horizon,this.hemi=new $o(16777215,14216380,1.75),e.add(this.hemi),this.sun=new ms(16774886,1.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let t=this.sun.shadow.camera;t.left=t.bottom=-45,t.right=t.top=45,t.near=1,t.far=500,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.03,e.add(this.sun,this.sun.target),this.sky=Wy(),this.hills=Gy(),this.skyBodies=Ky(),e.add(this.sky,this.hills.group,...this.skyBodies.map(e=>e.sprite)),this.rough=new z(new _o(Dy,Dy),Hy(K(16777215,{map:ib(Dy/ky)}),e=>e.rough,rb)),this.rough.rotation.x=-Math.PI/2,this.rough.receiveShadow=!0,this.fairway=new z(new _o(136,Dy),Hy(K(16777215,{map:ab(Dy/Ay),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e=>e.fairway,1)),this.fairway.rotation.x=-Math.PI/2,this.fairway.position.y=.05,this.fairway.receiveShadow=!0,e.add(this.rough,this.fairway,ob(),Sb(),this.podiumMount),this.scenery=new db(e),this.markers=new mb(e),this.clouds=new Eb(e),this.bestFlag=new Ob(e),this.mileArches=new _b(e);for(let t of cf.slice(1))e.add(bb(t))}setBest(e){this.bestFlag.set(e)}setPodium(e){let t=this.podiums.get(e);t||(t=xy(e),this.podiums.set(e,t)),this.podiumMount.clear(),this.podiumMount.add(t)}clearTreesAround(e,t=45){this.scenery.setClearing(e,t)}update(e,t){let n=t.position;this.sky.position.copy(n),this.hills.group.position.set(n.x,0,n.z),this.rough.position.set(Uy(n.x,ky),0,Uy(n.z,ky)),this.fairway.position.z=Uy(n.z,Ay),this.fog.far=Math.min(7e3+n.y*6,Oy),this.fog.near=Math.min(400+n.y,Oy*.5),this.applyZoneLook(-n.z,n);let r=(this.sun.shadow.camera.right-this.sun.shadow.camera.left)/this.sun.shadow.mapSize.x,i=Ty.dot(e),a=Ey.dot(e),o=wy.dot(e);this.shadowFocus.copy(Ty).multiplyScalar(Math.round(i/r)*r).addScaledVector(Ey,Math.round(a/r)*r).addScaledVector(wy,o),this.sun.target.position.copy(this.shadowFocus),this.sun.position.copy(this.shadowFocus).addScaledVector(wy,200),this.scenery.update(n.z),this.markers.update(n.z),this.mileArches.update(n.z),this.clouds.update(n.z)}applyZoneLook(e,t){let n=this.sky.material.uniforms;By(e,e=>e.horizon,this.horizon),this.fog.color.copy(this.horizon),n.horizon.value.copy(this.horizon),By(e,e=>e.zenith,n.zenith.value),n.stars.value=Vy(e,e=>e.stars),By(e,e=>e.hemiGround,this.hemi.groundColor),By(e,e=>e.hillsNear,this.hills.near.color),By(e,e=>e.hillsFar,this.hills.far.color);let r=Vy(e,e=>+(e.id===`neon`));this.hills.skylineMesh.scale.y=r,this.hills.skylineMesh.visible=r>.01;for(let n of this.skyBodies){let r=Vy(e,e=>+(e.id===n.zone));n.sprite.visible=r>.01,n.sprite.visible&&(this.skyDir.set(n.x,Nt.lerp(-.25,n.y,r),-1).normalize(),n.sprite.position.copy(t).addScaledVector(this.skyDir,2e4))}let i=Vy(e,e=>e.clouds===null?0:1);this.clouds.setLook(By(e,e=>e.clouds??16777215,this.tint),i>.5)}};function Ly(e,t,n){let r=Nt.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function Ry(e){let{from:t,full:n,fade:r,to:i}=lf;return Ly(t,n,e)*(1-Ly(r,i,e))}var zy=new zn;function By(e,t,n){n.set(t(cf[0]));for(let r=1;r<cf.length;r++){let i=Ly(cf[r].start-Fy,cf[r].start+Fy,e);i>0&&n.lerp(zy.set(t(cf[r])),i)}return n}function Vy(e,t){let n=t(cf[0]);for(let r=1;r<cf.length;r++)n+=(t(cf[r])-n)*Ly(cf[r].start-Fy,cf[r].start+Fy,e);return n}function Hy(e,t,n){let r=cf.length,i=cf.map(e=>new zn(t(e)).multiplyScalar(1/n)),a=cf.map(e=>e.start),o=Py.toFixed(1);return e.onBeforeCompile=e=>{e.uniforms.zoneStarts={value:a},e.uniforms.zoneColors={value:i},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vDownrange;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vDownrange = -(modelMatrix * vec4(transformed, 1.0)).z;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float zoneStarts[${r}];
uniform vec3 zoneColors[${r}];
varying float vDownrange;`).replace(`#include <map_fragment>`,`#include <map_fragment>
{
  vec3 zoneTint = zoneColors[0];
  for (int i = 1; i < ${r}; i++) {
    zoneTint = mix(zoneTint, zoneColors[i], smoothstep(zoneStarts[i] - ${o}, zoneStarts[i] + ${o}, vDownrange));
  }
  diffuseColor.rgb *= zoneTint;
}`)},e}function Uy(e,t){return Math.round(e/t)*t}function Wy(){let e=new Oo({side:1,depthWrite:!1,fog:!1,uniforms:{horizon:{value:Sy.clone()},zenith:{value:Cy.clone()},stars:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 horizon;
      uniform vec3 zenith;
      uniform float stars;
      varying vec3 vDir;
      float hash(vec3 p) {
        p = fract(p * 0.3183099 + 0.1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }
      void main() {
        float h = max(vDir.y, 0.0);
        vec3 color = mix(horizon, zenith, pow(h, 0.5));
        if (stars > 0.0) {
          float star = step(0.996, hash(floor(vDir * 240.0))) * smoothstep(0.04, 0.3, h);
          color = mix(color, vec3(1.0), star * stars);
        }
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }`}),t=new z(new H(3e4,32,16),e);return t.renderOrder=-3,t.frustumCulled=!1,t}function Gy(){let e=new R,t=e=>new pi({color:e,fog:!1,side:2,depthTest:!1,depthWrite:!1}),n=(t,n,r,i)=>{let a=[],o=[];for(let e=0;e<=200;e++){let n=e/200*Math.PI*2,i=Math.cos(n)*t,s=Math.sin(n)*t;if(a.push(i,-200,s,i,r(n),s),e<200){let t=e*2;o.push(t,t+2,t+1,t+1,t+2,t+3)}}let s=new Ir;s.setAttribute(`position`,new wr(a,3)),s.setIndex(o);let c=new z(s,n);return c.frustumCulled=!1,c.renderOrder=i,e.add(c),c},r=t(10274026);n(27e3,r,e=>500+Math.abs(Math.sin(e*5+.7))*1500+Math.abs(Math.sin(e*13+2))*600,-2);let i=t(7653018);n(15e3,i,e=>260+220*Math.sin(e*6+1)+120*Math.sin(e*15+3)+60*Math.sin(e*29),-1);let a=t(1314608),o=kb(99),s=14e3,c=[];for(let e=0;e<180;e++){let t=e/180*Math.PI*2,n=(e+1)/180*Math.PI*2,r=250+o()**2*1700,[i,a,l,u]=[Math.cos(t)*s,Math.sin(t)*s,Math.cos(n)*s,Math.sin(n)*s];c.push(i,-200,a,l,-200,u,i,r,a,i,r,a,l,-200,u,l,r,u)}let l=new Ir;l.setAttribute(`position`,new wr(c,3));let u=new z(l,a);return u.frustumCulled=!1,u.renderOrder=-.5,u.visible=!1,e.add(u),{group:e,near:i,far:r,skylineMesh:u}}function Ky(){return[{zone:`moon`,sprite:qy(3600,Xy),x:-.3,y:.14},{zone:`mars`,sprite:qy(2600,Zy),x:.35,y:.18},{zone:`jupiter`,sprite:qy(11e3,Qy),x:-.25,y:.2},{zone:`saturn`,sprite:qy(1e4,$y),x:.3,y:.18},{zone:`neptune`,sprite:qy(7e3,eb),x:-.3,y:.16},{zone:`pluto`,sprite:qy(5e3,tb),x:.3,y:.15}]}function qy(e,t){let n=document.createElement(`canvas`);n.width=n.height=256,t(n.getContext(`2d`));let r=new oi(new Kr({map:nb(n),alphaTest:.5,transparent:!1,depthTest:!1,depthWrite:!1,fog:!1}));return r.scale.set(e,e,1),r.renderOrder=-2.5,r.frustumCulled=!1,r.visible=!1,r}function Jy(e,t,n,r,i,a,o,s){e.save(),e.translate(t,n),e.rotate(a),e.beginPath(),e.ellipse(0,0,r,i,0,0,Math.PI*2),e.fillStyle=o,e.fill(),e.clip(),s?.();let c=e.createRadialGradient(-r*.3,-i*.3,Math.min(r,i)*.2,0,0,Math.max(r,i));c.addColorStop(0,`rgba(0, 0, 0, 0)`),c.addColorStop(1,`rgba(0, 0, 0, 0.38)`),e.fillStyle=c,e.fillRect(-r,-i,r*2,i*2),e.restore()}function Yy(e,t,n){e.fillStyle=t;for(let[t,r,i,a,o=0]of n)e.beginPath(),e.ellipse(t,r,i,a,o,0,Math.PI*2),e.fill()}function Xy(e){Jy(e,128,128,80,80,0,`#3f8fe8`,()=>{Yy(e,`#5cb85c`,[[-28,-30,30,20,.5],[22,12,26,34,-.3],[-36,30,18,12,.2],[42,-36,14,10,.8]]),e.strokeStyle=`rgba(255, 255, 255, 0.9)`,e.lineWidth=7,e.lineCap=`round`;for(let[t,n,r]of[[-48,-8,40],[2,-58,50],[-8,57,46],[47,37,26]])e.beginPath(),e.moveTo(t,n),e.quadraticCurveTo(t+r/2,n-8,t+r,n),e.stroke()}),e.strokeStyle=`#bfe6ff`,e.lineWidth=5,e.beginPath(),e.arc(128,128,82,0,Math.PI*2),e.stroke()}function Zy(e){let t=t=>Yy(e,`rgba(0, 0, 0, 0.22)`,[[-t*.3,-t*.2,t*.18,t*.16],[t*.35,t*.15,t*.12,t*.1],[-t*.05,t*.4,t*.1,t*.09]]);Jy(e,100,130,64,46,.4,`#9a8070`,()=>t(60)),Jy(e,200,66,28,20,-.3,`#b0a090`,()=>t(26))}function Qy(e){Jy(e,128,128,114,108,0,`#ead0a6`,()=>{[`#c98a5a`,`#f4e4c6`,`#b8744a`,`#ecd6ae`,`#c48a60`,`#f2dfbc`,`#a8683e`].forEach((t,n)=>{e.fillStyle=t,e.fillRect(-114,-100+n*30,228,14+n%2*8)}),Yy(e,`#f2d8bc`,[[36,40,30,17]]),Yy(e,`#c0503a`,[[36,40,23,12]])})}function $y(e){let t=t=>{e.save(),e.translate(128,128),e.rotate(-.3);for(let[n,r,i,a]of[[120,34,12,`#ecdcb0`],[100,28,9,`#c9ae7a`]])e.beginPath(),e.ellipse(0,0,n,r,0,t?0:Math.PI,t?Math.PI:Math.PI*2),e.lineWidth=i,e.strokeStyle=a,e.stroke();e.restore()};t(!1),Jy(e,128,128,66,62,0,`#f0d8a0`,()=>{e.fillStyle=`rgba(160, 120, 60, 0.35)`;for(let t of[-34,-6,22,44])e.fillRect(-66,t,132,9)}),t(!0)}function eb(e){Jy(e,128,128,100,100,0,`#4a7ff0`,()=>{e.fillStyle=`rgba(255, 255, 255, 0.16)`;for(let t of[-60,-18,30,66])e.fillRect(-100,t,200,14);Yy(e,`#1e3a9a`,[[-30,20,22,12]]),Yy(e,`#eef5ff`,[[-6,2,20,4,-.1]])})}function tb(e){Jy(e,128,128,96,96,0,`#aa9e96`,()=>{Yy(e,`#7a4a3a`,[[0,-86,66,34]]),Yy(e,`rgba(0, 0, 0, 0.18)`,[[-30,10,16,14],[34,30,12,10],[6,56,10,9],[-48,50,8,7]])})}function nb(e){let t=new Hi(e);return t.colorSpace=Ve,t.anisotropy=8,t}var rb=new zn(15132390).r;function ib(t){let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);r.fillStyle=`#e6e6e6`,r.fillRect(0,0,128,128);let i=kb(7);r.strokeStyle=`#cbcbcb`,r.lineWidth=2,r.lineCap=`round`;for(let e=0;e<26;e++){let e=i()*128,t=i()*128;r.beginPath(),r.moveTo(e-3,t-4),r.lineTo(e,t+2),r.lineTo(e+3,t-4),r.stroke()}r.fillStyle=`#f5f5f5`;for(let e=0;e<18;e++)r.beginPath(),r.arc(i()*128,i()*128,2+i()*3,0,Math.PI*2),r.fill();let a=nb(n);return a.wrapS=a.wrapT=e,a.repeat.set(t,t),a}function ab(t){let n=document.createElement(`canvas`);n.width=272,n.height=64;let r=n.getContext(`2d`);r.fillStyle=`#d4d4d4`,r.fillRect(0,0,272,64),r.fillStyle=`#ffffff`,r.fillRect(16,0,240,32),r.fillStyle=`#ededed`,r.fillRect(16,32,240,32),r.fillStyle=`#9c9c9c`,r.fillRect(14,0,2,64),r.fillRect(256,0,2,64);let i=nb(n);return i.wrapT=e,i.repeat.set(1,t),i}function ob(){let e=new R,t=(e,t,n,r,i)=>{let a=new z(new _o(e,t),K(n,{polygonOffset:!0,polygonOffsetFactor:i,polygonOffsetUnits:i}));return a.rotation.x=-Math.PI/2,a.position.set(-2,r,1),a.receiveShadow=!0,a};e.add(t(23,17,5021502,.08,-4),t(22,16,10940034,.12,-6));let n=K(16774364),r=K(16730955),i=K(16777215);for(let t of[-9,6]){let a=new R,o=new z(new B(.28,.36,.7,12).translate(0,.35,0),n),s=new z(new H(.7,18,10,0,Math.PI*2,0,Math.PI/2),r);s.scale.y=.75,s.position.y=.6,a.add(o,s);for(let e=0;e<5;e++){let n=e/5*Math.PI*2+t,r=new z(new H(.11,8,6),i);r.position.set(Math.cos(n)*.45,.95,Math.sin(n)*.45),r.scale.y=.4,r.userData.noOutline=!0,a.add(r)}a.position.set(t,.1,-2),a.traverse(e=>{e instanceof z&&(e.castShadow=!0)}),im(a,$p),e.add(a)}return e}var sb=100;function cb(e){return Wp(e.map(([e,t,n,r])=>new H(r,12,9).translate(e,t,n)))}function lb(e){let t=e.index?e.toNonIndexed():e;return t.computeVertexNormals(),t}var ub=class{mesh;outline;count=0;constructor(e,t,n,r,i){this.mesh=new Ii(t,n,r),this.mesh.frustumCulled=!1,e.add(this.mesh),i&&(this.outline=am(this.mesh,em),e.add(this.outline))}get full(){return this.count>=this.mesh.instanceMatrix.count}push(e,t){this.full||(this.mesh.setMatrixAt(this.count,e),this.mesh.setColorAt(this.count,t),this.count++)}commit(){this.mesh.count=this.count,this.outline&&(this.outline.count=this.count),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},db=class{trunks;roundCrowns;pineCrowns;bushes;rocks;mesas;cones;cacti;towers;domes;orbs;spaceRocks;shadows;padRims;pads;layers;lastChunk=NaN;clearing=null;m=new an;q=new Pt;p=new L;s=new L;color=new zn;shadowColor=new zn;tumble=new hn;constructor(e){let t=new Ji(1,28).rotateX(-Math.PI/2),n=(e,t=1)=>new pi({color:16777215,transparent:t<1,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:e,polygonOffsetUnits:e}),r=()=>K(16777215);this.shadows=new ub(e,t,n(-8,.45),1200,!1),this.padRims=new ub(e,t,n(-4),120,!1),this.pads=new ub(e,t,n(-6),120,!1),this.trunks=new ub(e,new B(.6,1,1,7).translate(0,.5,0),r(),700,!0);let i=cb([[0,.55,0,.5],[-.32,.38,.12,.36],[.3,.4,-.1,.38],[.05,.85,.05,.32]]);this.roundCrowns=new ub(e,i,r(),500,!0);let a=Wp([new V(.5,.55,9).translate(0,.28,0),new V(.4,.45,9).translate(0,.6,0),new V(.28,.35,9).translate(0,.86,0)]);this.pineCrowns=new ub(e,a,r(),500,!0);let o=cb([[0,.45,0,.5],[-.5,.32,.1,.36],[.48,.34,-.05,.38]]);this.bushes=new ub(e,o,r(),400,!0),this.rocks=new ub(e,lb(new mo(.5,0).translate(0,.3,0)),r(),400,!0),this.mesas=new ub(e,lb(new B(.42,.5,1,7).translate(0,.5,0)),r(),120,!0),this.cones=new ub(e,lb(new B(.1,.5,1,9).translate(0,.5,0)),r(),200,!0),this.spaceRocks=new ub(e,lb(new mo(.5,0)),r(),500,!0);let s=Wp([new B(.12,.13,.9,10).translate(0,.45,0),new H(.12,10,8).translate(0,.9,0),new B(.075,.075,.22,8).rotateZ(Math.PI/2).translate(-.2,.42,0),new B(.075,.075,.3,8).translate(-.3,.56,0),new H(.075,8,6).translate(-.3,.71,0),new B(.07,.07,.2,8).rotateZ(Math.PI/2).translate(.19,.55,0),new B(.07,.07,.24,8).translate(.28,.66,0),new H(.07,8,6).translate(.28,.78,0)]);this.cacti=new ub(e,s,r(),300,!0);let c=K(16777215,{emissive:16777215,emissiveMap:fb()}),l=K(16777215),u=new Ki(1,1,1).translate(0,.5,0);this.towers=new ub(e,u,[c,c,l,l,c,c],260,!0),this.domes=new ub(e,new H(1,20,10,0,Math.PI*2,0,Math.PI/2),r(),60,!0),this.orbs=new ub(e,new H(.5,12,10),new pi({color:16777215}),320,!1),this.layers=[this.trunks,this.roundCrowns,this.pineCrowns,this.bushes,this.rocks,this.mesas,this.cones,this.cacti,this.towers,this.domes,this.orbs,this.spaceRocks,this.shadows,this.padRims,this.pads]}setClearing(e,t){this.clearing=e?{x:e.x,z:e.z,r2:t*t}:null,this.lastChunk=NaN}update(e){let t=Math.floor(-e/sb);if(t!==this.lastChunk){this.lastChunk=t;for(let e of this.layers)e.count=0;for(let e=t-6;e<=t+40;e++){let t=kb(e*7919+13),n=cf[uf(e*sb+sb/2+(t()-.5)*300)];switch(this.shadowColor.set(n.shadow),n.id){case`meadow`:this.meadow(e,t);break;case`desert`:this.desert(e,t);break;case`snow`:this.snow(e,t);break;case`volcano`:this.volcano(e,t);break;case`neon`:this.neon(e,t);break;case`moon`:this.moon(e,t);break;case`mars`:this.mars(e,t);break;case`jupiter`:this.jupiter(e,t);break;case`saturn`:this.saturn(e,t);break;case`neptune`:this.neptune(e,t);break;case`pluto`:this.pluto(e,t)}let r=Ry(e*sb+sb/2);r>0&&this.floatingRocks(e,kb(e*104729+7),7*r,!1)}for(let e of this.layers)e.commit()}}meadow(e,t){let n=6+Math.floor(t()*4);for(let r=0;r<n;r++){let n=(r%2==0?-1:1)*(94+t()**1.6*900),i=this.zIn(e,t),a=t()<.4,o=a?34+t()*30:26+t()*22,s=a?o*.42:o*(.75+t()*.25);this.color.setHSL(a?.38+t()*.04:.27+t()*.07,.55+t()*.15,.36+t()*.1),!this.cleared(n,i)&&this.tree(n,i,o,s,a,this.color,9067058)}let r=Math.floor(t()*3);for(let n=0;n<r;n++){let n=(t()<.5?-1:1)*(76+t()*30),r=this.zIn(e,t),i=3+t()*3;this.color.setHSL(.28+t()*.06,.6,.4+t()*.08),!this.cleared(n,r)&&(this.add(this.bushes,n,0,r,i*1.3,i,i*1.1,this.color),this.addShadow(n,r,i*.9,i*.4))}e>1&&t()<.35&&this.pad(e,t,14201962,16311203,8,12)}desert(e,t){let n=3+Math.floor(t()*3);for(let r=0;r<n;r++){let n=(r%2==0?-1:1)*(90+t()**1.5*800),i=this.zIn(e,t),a=14+t()*16;this.color.setHSL(.3+t()*.05,.45,.33+t()*.08),!this.cleared(n,i)&&(this.add(this.cacti,n,0,i,a,a,a,this.color),this.addShadow(n,i,a*.25,a))}if(t()<.5){let n=(t()<.5?-1:1)*(280+t()*900),r=this.zIn(e,t),i=50+t()*90,a=25+t()*45;this.color.setHSL(.04+t()*.03,.55,.45+t()*.1),this.cleared(n,r)||this.add(this.mesas,n,0,r,i,a,i*.8,this.color)}for(let n=0;n<2;n++){let n=(t()<.5?-1:1)*(74+t()*60),r=this.zIn(e,t),i=2.5+t()*3.5,a=t()<.5;a?this.color.setHSL(.11,.4,.55+t()*.1):this.color.setHSL(.06,.4,.55+t()*.1),!this.cleared(n,r)&&(a?this.add(this.bushes,n,0,r,i*1.1,i*.9,i,this.color):this.add(this.rocks,n,0,r,i*1.4,i,i*1.2,this.color),this.addShadow(n,r,i*.8,i*.4))}}snow(e,t){let n=6+Math.floor(t()*4);for(let r=0;r<n;r++){let n=(r%2==0?-1:1)*(94+t()**1.6*900),i=this.zIn(e,t),a=t()<.75,o=a?34+t()*30:24+t()*18,s=a?o*.42:o*(.75+t()*.2);this.color.setHSL(.55+t()*.04,.3+t()*.15,.82+t()*.1),!this.cleared(n,i)&&this.tree(n,i,o,s,a,this.color,6177584)}for(let n=0;n<2;n++){let n=(t()<.5?-1:1)*(76+t()*50),r=this.zIn(e,t),i=3+t()*4,a=t()<.3;this.color.setHSL(a?.56:.6,a?.45:.3,a?.78:.95),!this.cleared(n,r)&&(a?this.add(this.rocks,n,0,r,i*1.3,i,i*1.1,this.color):this.add(this.bushes,n,0,r,i*1.4,i*.7,i*1.2,this.color),this.addShadow(n,r,i*.9,i*.4))}e>1&&t()<.3&&this.pad(e,t,16777215,11066623,10,14)}volcano(e,t){let n=3+Math.floor(t()*3);for(let r=0;r<n;r++){let n=(r%2==0?-1:1)*(94+t()**1.6*900),i=this.zIn(e,t),a=18+t()*18;this.color.setHSL(.03,.12,.17+t()*.06),!this.cleared(n,i)&&(this.add(this.trunks,n,0,i,a*.05,a,a*.05,this.color),this.addShadow(n,i,a*.12,a))}for(let n=0;n<3;n++){let n=(t()<.5?-1:1)*(74+t()**1.4*400),r=this.zIn(e,t),i=3+t()*9;this.color.setHSL(.02,.15,.17+t()*.08),!this.cleared(n,r)&&(this.add(this.rocks,n,0,r,i*1.3,i,i*1.15,this.color),this.addShadow(n,r,i*.8,i*.4))}if(e>1&&t()<.4&&this.pad(e,t,2759188,16734746,8,12),t()<.12){let n=(t()<.5?-1:1)*(660+t()*700),r=this.zIn(e,t),i=220+t()*220,a=130+t()*140;this.color.setHSL(.02,.2,.2),this.cleared(n,r)||(this.add(this.cones,n,0,r,i,a,i,this.color),this.add(this.orbs,n,a,r,i*.22,i*.1,i*.22,this.color.set(16738847)))}}neon(e,t){let n=2+Math.floor(t()*3);for(let r=0;r<n;r++){let n=r%2==0?-1:1,i=90+t()**1.3*900,a=n*(60+i),o=this.zIn(e,t),s=30+t()*50,c=30+t()*50,l=60+t()*160+i*.15;this.color.setHSL(.66+t()*.1,.45,.14+t()*.1),!this.cleared(a,o)&&(this.add(this.towers,a,0,o,s,l,c,this.color),this.addShadow(a,o,Math.max(s,c)*.7,l*.2))}for(let t of[-1,1]){let n=t*(60+jy+8),r=-(e*sb+50+t*25);this.cleared(n,r)||(this.add(this.trunks,n,0,r,.5,16,.5,this.color.set(2830134)),this.add(this.orbs,n,16.6,r,2.4,2.4,2.4,this.color.set(t<0?4646655:16727504)))}if(t()<.5){let n=(t()-.5)*800,r=40+t()*100,i=this.zIn(e,t),a=3+t()*3;this.color.setHSL(t(),.9,.65),this.add(this.orbs,n,r,i,a,a,a,this.color)}}moon(e,t){if(e>1){let n=1+Math.floor(t()*2);for(let r=0;r<n;r++)this.pad(e,t,12895952,8159116,8,26)}for(let n=0;n<3;n++){let n=(t()<.5?-1:1)*(74+t()**1.4*500),r=this.zIn(e,t),i=3+t()*9;this.color.setHSL(.66,.05,.55+t()*.15),!this.cleared(n,r)&&(this.add(this.rocks,n,0,r,i*1.3,i,i*1.15,this.color),this.addShadow(n,r,i*.8,i*.4))}if(t()<.15){let n=(t()<.5?-1:1)*(180+t()*600),r=this.zIn(e,t),i=25+t()*25;this.cleared(n,r)||(this.add(this.domes,n,0,r,i,i*.8,i,this.color.set(15659768)),this.add(this.trunks,n,i*.8,r,.6,18,.6,this.color.set(9079958)),this.add(this.orbs,n,i*.8+18.5,r,2.2,2.2,2.2,this.color.set(16726843)),this.addShadow(n,r,i*1.1,i*.5))}}mars(e,t){for(let n=0;n<3;n++){let n=(t()<.5?-1:1)*(74+t()**1.4*500),r=this.zIn(e,t),i=3+t()*9;this.color.setHSL(.03+t()*.02,.5,.3+t()*.12),!this.cleared(n,r)&&(this.add(this.rocks,n,0,r,i*1.3,i,i*1.15,this.color),this.addShadow(n,r,i*.8,i*.4))}if(t()<.45){let n=(t()<.5?-1:1)*(280+t()*900),r=this.zIn(e,t),i=60+t()*110,a=30+t()*50;this.color.setHSL(.02+t()*.02,.55,.36+t()*.1),this.cleared(n,r)||this.add(this.mesas,n,0,r,i,a,i*.8,this.color)}if(t()<.2){let n=(t()<.5?-1:1)*(210+t()*550),r=this.zIn(e,t),i=14+t()*10,a=60+t()*50;this.color.setHSL(.03,.5,.33),this.cleared(n,r)||(this.add(this.cones,n,0,r,i,a,i,this.color),this.addShadow(n,r,i*.5,a))}if(e>1&&t()<.35&&this.pad(e,t,10504746,6957592,8,18),t()<.1){let n=(t()<.5?-1:1)*(180+t()*600),r=this.zIn(e,t),i=22+t()*20;this.cleared(n,r)||(this.add(this.domes,n,0,r,i,i*.8,i,this.color.set(16051426)),this.add(this.trunks,n,i*.8,r,.6,16,.6,this.color.set(9079958)),this.add(this.orbs,n,i*.8+16.5,r,2.2,2.2,2.2,this.color.set(4644954)),this.addShadow(n,r,i*1.1,i*.5))}}jupiter(e,t){for(let n=0;n<3;n++){let n=(t()<.5?-1:1)*(74+t()**1.4*450),r=this.zIn(e,t),i=3+t()*8;this.color.setHSL(.09+t()*.06,.6,.42+t()*.15),!this.cleared(n,r)&&(this.add(this.rocks,n,0,r,i*1.3,i,i*1.15,this.color),this.addShadow(n,r,i*.8,i*.4))}if(e>1&&t()<.35&&this.pad(e,t,11569712,16767050,8,14),t()<.2){let n=(t()<.5?-1:1)*(360+t()*900),r=this.zIn(e,t),i=120+t()*140,a=60+t()*70;if(this.color.setHSL(.08,.4,.38),!this.cleared(n,r)){this.add(this.cones,n,0,r,i,a,i,this.color),this.add(this.orbs,n,a,r,i*.22,i*.1,i*.22,this.color.set(16758858));for(let e=1;e<=3;e++)this.add(this.orbs,n,a+e*i*.16,r,i*.12*e,i*.12*e,i*.12*e,this.color.set(16773296))}}}saturn(e,t){for(let n=0;n<2;n++){let n=(t()<.5?-1:1)*(120+t()**1.3*600),r=this.zIn(e,t),i=10+t()*10,a=30+t()*50;this.color.setHSL(.12,.25,.8+t()*.12),!this.cleared(n,r)&&(this.add(this.cones,n,0,r,i,a,i,this.color),this.addShadow(n,r,i*.5,a))}for(let n=0;n<2;n++){let n=(t()<.5?-1:1)*(74+t()*300),r=this.zIn(e,t),i=3+t()*7;this.color.setHSL(.11,.2,.58+t()*.15),!this.cleared(n,r)&&(this.add(this.rocks,n,0,r,i*1.3,i,i*1.15,this.color),this.addShadow(n,r,i*.8,i*.4))}e>1&&t()<.3&&this.pad(e,t,12100730,9075290,8,20),this.floatingRocks(e,t,3,!0)}neptune(e,t){for(let n=0;n<3;n++){let n=(t()<.5?-1:1)*(74+t()*120),r=this.zIn(e,t),i=3+t()*5,a=t()<.4;this.color.setHSL(.6,a?.3:.35,a?.9:.6+t()*.15),!this.cleared(n,r)&&(a?this.add(this.bushes,n,0,r,i*1.4,i*.7,i*1.2,this.color):this.add(this.rocks,n,0,r,i*1.3,i,i*1.15,this.color),this.addShadow(n,r,i*.9,i*.4))}if(e>1&&t()<.3&&this.pad(e,t,14740735,2771594,10,16),t()<.25){let n=(t()<.5?-1:1)*(140+t()*600),r=this.zIn(e,t);if(!this.cleared(n,r)){this.add(this.trunks,n,0,r,3,4,3,this.color.set(2767450));for(let e=0;e<4;e++)this.add(this.orbs,n,10+e*18,r,6+e*3,10+e*4,6+e*3,this.color.set(15791871));this.addShadow(n,r,6,4)}}}pluto(e,t){if(t()<.35){let n=(t()<.5?-1:1)*(460+t()*900),r=this.zIn(e,t),i=180+t()*180,a=90+t()*110;this.color.setHSL(.08,.15,.9),this.cleared(n,r)||this.add(this.cones,n,0,r,i,a,i,this.color)}for(let n=0;n<3;n++){let n=(t()<.5?-1:1)*(74+t()**1.4*400),r=this.zIn(e,t),i=3+t()*7;t()<.35?this.color.setHSL(.58,.25,.88):this.color.setHSL(.04,.35,.35+t()*.12),!this.cleared(n,r)&&(this.add(this.rocks,n,0,r,i*1.3,i,i*1.15,this.color),this.addShadow(n,r,i*.8,i*.4))}e>1&&t()<.35&&this.pad(e,t,15129807,16317439,12,22),this.floatingRocks(e,t,2,!0)}floatingRocks(e,t,n,r){let i=Math.floor(n+t());for(let n=0;n<i;n++){let n=(t()-.5)*2600,i=(Math.abs(n)<210?140:25)+t()*380,a=this.zIn(e,t),o=(r?3:5)+t()**2*(r?20:45),s=t();r?this.color.setHSL(.58,.2,.8+s*.15):this.color.setHSL(.07,.15+s*.12,.3+s*.2),this.q.setFromEuler(this.tumble.set(t()*6.28,t()*6.28,t()*6.28)),this.add(this.spaceRocks,n,i,a,o*(.8+t()*.5),o*(.7+t()*.4),o,this.color),this.q.identity()}}zIn(e,t){return-(e*sb+t()*sb)}tree(e,t,n,r,i,a,o){let s=i?n*.18:n*.38;this.add(i?this.pineCrowns:this.roundCrowns,e,s*(i?.9:.55),t,r,i?n*.85:n*.75,r,a),this.add(this.trunks,e,0,t,r*.09,s,r*.09,this.color.set(o)),this.addShadow(e,t,r*.55,n)}pad(e,t,n,r,i,a){let o=t()<.5?-1:1,s=i+t()*i,c=a+t()*a,l=o*(60+jy+s+4+t()*20),u=this.zIn(e,t);this.add(this.padRims,l,.08,u,s+1.2,1,c+1.2,this.color.set(n)),this.add(this.pads,l,.12,u,s,1,c,this.color.set(r))}cleared(e,t){let n=this.clearing;return n!==null&&(e-n.x)**2+(t-n.z)**2<n.r2}add(e,t,n,r,i,a,o,s){this.p.set(t,n,r),this.s.set(i,a,o),this.m.compose(this.p,this.q,this.s),e.push(this.m,s)}addShadow(e,t,n,r){let i=r*.25;this.add(this.shadows,e-wy.x*i,.16,t-wy.z*i,n,1,n*.85,this.shadowColor)}};function fb(){let e=document.createElement(`canvas`);e.width=64,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#000000`,t.fillRect(0,0,64,128);let n=kb(11),r=[`#46e6ff`,`#ff3dd0`,`#ffe14a`,`#b27bff`];for(let e=0;e<12;e++)for(let i=0;i<4;i++)n()<.35||(t.fillStyle=r[Math.floor(n()*r.length)],t.fillRect(6+i*14,5+e*10,8,5));return nb(e)}var pb=36,mb=class{slots=[];lineMat=new pi({color:16777215,transparent:!0,opacity:.7,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});bigLineMat=this.lineMat.clone();constructor(e){this.bigLineMat.color.set(16765503),this.bigLineMat.opacity=.95;let t=new Ki(.5,5,.5).translate(0,2.5,0),n=K(10183734),r=new Ki(9.4,4.9,.4),i=new _o(120,1.6).rotateX(-Math.PI/2);for(let a=0;a<pb;a++){let a=document.createElement(`canvas`);a.width=256,a.height=128;let o=nb(a),s=new z(new _o(9,4.5),new pi({map:o}));s.position.set(0,6.5,.21);let c=new z(r,n);c.position.set(0,6.5,0);let l=new z(t,n);rm(c,$p),rm(l,$p);let u=new R;u.add(l,c,s),u.position.x=-(60+jy+6),u.rotation.y=.35,l.castShadow=c.castShadow=!0;let d=new z(i,this.lineMat);d.position.y=.1,e.add(u,d),this.slots.push({group:u,line:d,ctx:a.getContext(`2d`),tex:o,value:-1})}}update(e){let t=Math.max(1,Math.ceil((-e-250)/My));for(let e=t;e<t+pb;e++){let t=this.slots[e%pb],n=e*My;if(t.value===n)continue;t.value=n,t.group.position.z=-n,t.line.position.z=-n;let r=n%1e3==0;t.line.material=r?this.bigLineMat:this.lineMat,gb(t.ctx,n.toLocaleString(`en-US`),r),t.tex.needsUpdate=!0}}},hb=`'Lilita One', system-ui, -apple-system, sans-serif`;function gb(e,t,n){e.fillStyle=n?`#ffd23f`:`#fffdf4`,e.fillRect(0,0,256,128),e.fillStyle=n?`#e8862a`:`#3fae4f`,e.fillRect(0,0,256,22),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`,e.font=`20px ${hb}`,e.fillText(`FEET`,128,12),e.fillStyle=`#1d2433`,e.font=`${t.length>6?58:t.length>5?66:80}px ${hb}`,e.fillText(t,128,78),e.lineWidth=8,e.strokeStyle=`#1d2433`,e.strokeRect(0,0,256,128)}var _b=class{arches=new Map;scene;constructor(e){this.scene=e}update(e){let t=Math.floor(-e/Ny),n=Math.max(1,t-1),r=t+3;for(let[e,t]of this.arches)e>=n&&e<=r||(this.scene.remove(t),vb(t),this.arches.delete(e));for(let e=n;e<=r;e++){if(this.arches.has(e))continue;let t=yb(e);this.arches.set(e,t),this.scene.add(t)}}};function vb(e){e.traverse(e=>{if(e instanceof z){e.geometry.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof Oo||(`map`in t&&t.map instanceof Qt&&t.map.dispose(),t.dispose())}})}function yb(e){let t=`${e} MILE${e>1?`S`:``}  ·  ${(e*Ny).toLocaleString(`en-US`)} FT`;return xb(-e*Ny,t,16730955,16777215,60)}function bb(e){return xb(-e.start,`WELCOME TO ${e.name.toUpperCase()}`,e.banner,e.banner,72)}function xb(e,t,n,r,i){let a=new R,o=K(r);for(let t of[-1,1]){let n=new z(new Ki(3,i,3).translate(0,i/2,0),o);n.position.set(t*140/2,0,e),n.castShadow=!0,rm(n,em),a.add(n)}let s=document.createElement(`canvas`);s.width=1024,s.height=128;let c=s.getContext(`2d`);c.fillStyle=`#${n.toString(16).padStart(6,`0`)}`,c.fillRect(0,0,1024,128),c.fillStyle=`#ffffff`,c.textAlign=`center`,c.textBaseline=`middle`,c.font=`${t.length>26?66:84}px ${hb}`,c.fillText(t,512,70);let l=K(r),u=new pi({map:nb(s)}),d=new z(new Ki(140,14,1),[l,l,l,l,u,l]);return d.position.set(0,i-8,e),rm(d,em),a.add(d),a}function Sb(){let e=new R,t=cf.findIndex(e=>e.id===`neon`),n=cf[t].start,r=cf[t+1]?.start??n+2e4,i=new pi({color:4646655,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),a=new _o(1.6,r-n).rotateX(-Math.PI/2);for(let t of[-1,1]){let o=new z(a,i);o.position.set(t*60,.1,-(n+r)/2),e.add(o)}return e}var Cb=700,wb=18,Tb=2,Eb=class{group=new R;mat;sprites=[];chunkOf=[];constructor(e){this.mat=new Kr({map:Db(),alphaTest:.5,transparent:!1});for(let e=0;e<36;e++){let e=new oi(this.mat);this.group.add(e),this.sprites.push(e)}e.add(this.group);for(let e=0;e<wb;e++)this.chunkOf.push(NaN)}setLook(e,t){this.mat.color.copy(e),this.group.visible=t}update(e){let t=Math.floor(-e/Cb)-2;for(let e=t;e<t+wb;e++){let t=(e%wb+wb)%wb;if(this.chunkOf[t]===e)continue;this.chunkOf[t]=e;let n=kb(e*104729+3);for(let r=0;r<Tb;r++){let i=this.sprites[t*Tb+r],a=180+n()*320;i.scale.set(a,a*.5,1),i.position.set((n()-.5)*5e3,350+n()*1600,-(e*Cb+n()*Cb))}}}};function Db(){let e=document.createElement(`canvas`);e.width=256,e.height=128;let t=e.getContext(`2d`),n=[[70,78,30],[110,60,40],[158,58,36],[196,80,26],[132,86,30],[92,90,24]],r=e=>{t.beginPath();for(let[r,i,a]of n)t.moveTo(r+a+e,i),t.arc(r,i,a+e,0,Math.PI*2);t.rect(60-e,80,140+e*2,26+e)};return t.fillStyle=`#a9d4f5`,r(4),t.fill(),t.fillStyle=`#ffffff`,r(0),t.fill(),t.save(),r(0),t.clip(),t.fillStyle=`#e1f0fc`,t.fillRect(0,88,256,40),t.restore(),nb(e)}var Ob=class{group=new R;ctx;tex;constructor(e){let t=new z(new B(.18,.18,16,8).translate(0,8,0),K(16777215));t.castShadow=!0,rm(t,$p);let n=document.createElement(`canvas`);n.width=256,n.height=128,this.ctx=n.getContext(`2d`),this.tex=nb(n);let r=new z(new _o(9,4.5),new pi({map:this.tex,side:2}));r.position.set(4.6,13.6,0),this.group.add(t,r),this.group.visible=!1,e.add(this.group)}set(e){this.group.visible=e>0,this.group.position.set(-6,0,-e);let t=this.ctx;t.fillStyle=`#ff4b4b`,t.fillRect(0,0,256,128),t.lineWidth=8,t.strokeStyle=`#1d2433`,t.strokeRect(0,0,256,128),t.fillStyle=`#fff`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`30px ${hb}`,t.fillText(`YOUR BEST`,128,34),t.font=`54px ${hb}`,t.fillText(Math.round(e).toLocaleString(`en-US`),128,84),this.tex.needsUpdate=!0}};function kb(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ab={ready:`waiting`,charging:`charging`,aiming:`focused`,angle:`focused`,spin:`focused`,swinging:`swinging`,flight:`watching`,rest:`watching`},jb=[`charging`,`aiming`,`angle`,`spin`,`swinging`],Mb=1.6,Nb=.06,Pb=1.4667,Fb=30,Ib=.35,Lb=.07,Rb=3,zb=3,Bb=5,Vb=1.4,Hb=.75;async function Ub(){let e=await jv(),t=document.getElementById(`scene`),n=new Xu({canvas:t,antialias:!0,powerPreference:`high-performance`});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=1,n.toneMapping=0,await Promise.race([document.fonts.load(`40px 'Lilita One'`),new Promise(e=>setTimeout(e,1500))]).catch(()=>{});let r=new Iy,i=new kp,a=new S_;r.scene.add(a.group);let o=new wv(r.scene),s=new ey,c=Yg(),l=new L,u=new L,d=`ready`,f=0,p=0,m=0,h=i_,g=i_,_=0,v=0,y=!1,b=0,x=0,S=`good`,C=null,w=null,T=0,E=0,D=0,ee=!1,te=0,O=0,ne=!1,k=1,re=0,A=-1,ie=1,j=1,ae={x:0,y:0,z:0},oe=0,se=0,ce=0,le=0,ue=0,de=-1/0,M=0,fe=!1,pe=null,me=`monsters`,he=`power`,ge=()=>mm[e.loadout.monster],_e=()=>ef(e.skills);function ve(){a.setGear(pm[e.loadout.gear])}function ye(){let t=e.loadout.club;a.setClub(dm[t],e.clubLevels[t]),s.configureAccuracy(Iv(e).club.sweetSpot)}function be(){o.setMonster(ge(),e.levels[e.loadout.monster]),r.setPodium(ge().id)}function xe(){s.setCoins(e.coins),s.setBest(e.best),s.setUpgradeAvailable(Vv(e)),s.setSkillPoints(Math.max(0,sf(e.xp,e.skills))),s.setClaimable(Tf(e)),r.setBest(e.best)}function Se(){let e=Math.random()**1.5*14,t=Math.random()*Math.PI*2;ae={x:Math.sin(t)*e*Pb,y:0,z:-Math.cos(t)*e*Pb},ae.z>0&&(ae.z*=_e().headwind),s.setWind(Math.hypot(ae.x,ae.z)/Pb,Math.atan2(ae.x,-ae.z)),T=Om(ae.z)}function Ce(){d=`ready`,p=0,Object.assign(c,Yg()),o.clearTrail(),o.setPhase(`tee`),r.clearTreesAround(null),h=i_,a.setSwing(h),a.resetPose(),i.setSideMeters(!1),i.setMode(`tee`,l),f=0,m=0,C=null,w=null,Se(),s.hideResult(),s.showDoubleOffer(!1),e.shots>=zb&&$f().then(()=>s.privacyButton.classList.toggle(`hidden`,!tp())),s.showLive(!1),s.showFastForward(!1),s.showBoost(!1),s.showReadyControls(!0),s.setPrompt(e.shots===0?`Press and hold anywhere to swing`:`Hold to swing`)}function we(e){td.isNativePlatform()&&Cd.impact({style:e}).catch(()=>{})}function Te(){if(Dd(),!(s.shopOpen||s.skillsOpen||s.awardsOpen||s.noAdsOpen)){if(d===`ready`){d=`charging`,p=0;let{unlocks:t}=Iv(e);i.setSideMeters(t.angle||t.spin),s.showReadyControls(!1),s.setPrompt(`Let go at full power`),o.setPhase(`charging`)}else d===`aiming`?ze():d===`angle`?Ve():d===`spin`?He():d===`flight`&&(ee=!0)}}function Ee(){d===`charging`&&(d=`aiming`,p=0,f>=_e().fullPowerAt&&(f=1),s.setPrompt(`TAP in the green!`,!0)),ee=!1}t.addEventListener(`pointerdown`,e=>{e.preventDefault(),Te()}),window.addEventListener(`pointerup`,Ee),window.addEventListener(`pointercancel`,Ee),t.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`keydown`,e=>{e.code===`Space`&&!e.repeat&&(e.preventDefault(),Te()),e.code===`KeyB`&&!e.repeat&&P()}),s.boostButton.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),P()}),window.addEventListener(`keyup`,e=>{e.code===`Space`&&Ee()}),s.resultNext.addEventListener(`click`,()=>void Je()),s.noAdsSkip.addEventListener(`click`,()=>Xe()),s.noAdsBuy.addEventListener(`click`,()=>void Ze()),s.noAdsRestore.addEventListener(`click`,()=>void Qe()),s.shopButton.addEventListener(`click`,()=>De()),s.resultShop.addEventListener(`click`,()=>De()),s.shopClose.addEventListener(`click`,()=>s.openShop(!1)),s.shopBackdrop.addEventListener(`click`,e=>{e.target===s.shopBackdrop&&s.openShop(!1)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&s.shopOpen&&s.openShop(!1),e.key===`Escape`&&s.skillsOpen&&s.openSkills(!1),e.key===`Escape`&&s.awardsOpen&&s.openAwards(!1)}),s.resultDouble.addEventListener(`click`,()=>void et()),s.awardsButton.addEventListener(`click`,()=>Ne()),s.awardsClose.addEventListener(`click`,()=>s.openAwards(!1)),s.awardsBackdrop.addEventListener(`click`,e=>{e.target===s.awardsBackdrop&&s.openAwards(!1)}),s.awardsClaimAll.addEventListener(`click`,()=>{let t=0;for(let n of xf)t+=wf(e,n.id);t>0&&Fe()}),s.skillsButton.addEventListener(`click`,()=>N()),s.resultSkills.addEventListener(`click`,()=>N()),s.skillsClose.addEventListener(`click`,()=>s.openSkills(!1)),s.skillsBackdrop.addEventListener(`click`,e=>{e.target===s.skillsBackdrop&&s.openSkills(!1)}),s.skillsReset.addEventListener(`click`,()=>{s.confirmReset()&&(e.skills=Yd(),Re())});for(let[e,t]of Object.entries(s.skillTabs))t.addEventListener(`click`,()=>{he=e,Ie()});for(let[e,t]of Object.entries(s.tabs))t.addEventListener(`click`,()=>{me=e,Oe()});try{Od((localStorage.getItem(`robogolf-muted`)??localStorage.getItem(`long-drive-muted`))===`1`)}catch{}s.privacyButton.addEventListener(`click`,()=>void np()),s.muteButton.textContent=kd()?`🔇`:`🔊`,s.muteButton.addEventListener(`click`,()=>{Od(!kd()),s.muteButton.textContent=kd()?`🔇`:`🔊`;try{localStorage.setItem(`robogolf-muted`,kd()?`1`:`0`)}catch{}});function De(){Dd(),Oe(),s.openShop(!0)}function Oe(){let t=Lv(Iv(e));me===`monsters`?s.renderCollection(`monsters`,Kv(e,je),e.coins,t):me===`clubs`?s.renderCollection(`clubs`,qv(e,je),e.coins,t):s.renderCollection(`gear`,Zv(e,je),e.coins,t)}function ke(t){return e.coins<t?!1:(e.coins-=t,!0)}function Ae(){Me(),Pv(e),xe(),Oe(),Vd(),we(hd.Medium)}let je={unlockMonster(t){!e.owned[t]&&zv(e,t)&&ke(mm[t].cost)&&(e.owned[t]=!0,e.loadout.monster=t,be(),Ae())},levelMonster(t){let n=um(mm[t],e.levels[t]);e.owned[t]&&n!==null&&ke(n)&&(e.levels[t]++,t===e.loadout.monster&&be(),Ae())},selectMonster(t){e.owned[t]&&(e.loadout.monster=t,Pv(e),be(),Oe())},unlockClub(t){!e.clubOwned[t]&&zv(e,t)&&ke(dm[t].cost)&&(e.clubOwned[t]=!0,e.loadout.club=t,ye(),Ae())},levelClub(t){let n=um(dm[t],e.clubLevels[t]);e.clubOwned[t]&&n!==null&&ke(n)&&(e.clubLevels[t]++,t===e.loadout.club&&ye(),Ae())},selectClub(t){e.clubOwned[t]&&(e.loadout.club=t,Pv(e),ye(),Oe())},unlockGear(t){!e.gearOwned[t]&&zv(e,t)&&ke(pm[t].cost)&&(e.gearOwned[t]=!0,e.loadout.gear=t,ve(),Ae())},wearGear(t){e.gearOwned[t]&&(e.loadout.gear=t,Pv(e),ve(),Oe())}};function Me(){let t=Cf(e);if(t.length!==0){for(let e of t)s.toast(e.icon,`Achievement unlocked!`,e.name,Ne);Bd(),we(hd.Medium),s.setClaimable(Tf(e)),s.awardsOpen&&Pe()}}function Ne(){Dd(),Pe(),s.openAwards(!0)}function Pe(){let t=xf.map(t=>({def:t,state:e.achievements[t.id]??null,progress:t.progress(e),onClaim:()=>{wf(e,t.id)>0&&Fe()}}));s.renderAwards(t,e.coins)}function Fe(){Me(),Pv(e),xe(),Pe(),s.burstAwardCoins(),Rd(),we(hd.Medium)}function N(){Dd(),Ie(),s.openSkills(!0)}function Ie(){let t=Math.max(0,sf(e.xp,e.skills)),n=qd.filter(e=>e.branch===he).map(n=>({def:n,rank:e.skills[n.id],blocker:Qd(e.skills,n.id,t),branchSpent:Zd(e.skills,n.branch),onLearn:()=>Le(n.id)})),{level:r}=af(e.xp),i=r<7?`Every shot earns XP and every level is a skill point. Level 7 unlocks the angle slider.`:r<14?`Every shot earns XP and every level is a skill point. Level 14 unlocks the spin slider.`:`Every shot earns XP, and every level is a skill point.`;s.renderSkills(he,n,af(e.xp),t,Zd(e.skills)>0,i)}function Le(t){Qd(e.skills,t,sf(e.xp,e.skills))===null&&(e.skills[t]++,Re(),Vd(),we(hd.Medium))}function Re(){Me(),Pv(e),ye(),xe(),Ie()}function P(){if(d!==`flight`||c.phase!==`flight`||oe<=0)return;oe--,e.stats.boosts++,++le===2&&e.stats.doubleBoosts++;let t=Iv(e).monster,n=n_(c,t,ae);t_(c,_e().boost);let r=n_(c,t,ae)-n;se=Lb,ce=1,o.boost(),i.punch(),Id(),we(hd.Heavy),setTimeout(()=>we(hd.Medium),140),setTimeout(()=>we(hd.Light),320),s.popBoost(r)}function ze(){let{unlocks:t}=Iv(e),n=t.angle&&C===null?`angle`:t.spin&&w===null?`spin`:null;n===null?We():(d=n,p=0,s.setPrompt(n===`angle`?`◀ TAP: angle!`:`◀ TAP: spin!`,!0),we(hd.Light))}function Be(){let t=p/(Hb*Iv(e).golfer.tempo)%2;return(t<1?t:2-t)*2-1}function Ve(){C=E;let e=Em(C);s.showSliderGrade(e===`perfect`?`Perfect angle!`:e===`good`?`Good angle`:C<0?`Too low`:`Too high`,e),ze()}function He(){w=E;let e=w-T,t=Em(e);s.showSliderGrade(t===`perfect`?`Perfect spin!`:t===`good`?`Good spin`:e<0?`Too much backspin`:`Too much topspin`,t),ze()}function Ue(){let{unlocks:t}=Iv(e),n=jb.indexOf(d),r=(e,t=!0)=>{let r=jb.indexOf(e);return t?n===r?`active`:n>r?`done`:`idle`:`locked`};s.showMeters({power:f,needle:m,angle:d===`angle`?E:C??-1,spin:d===`spin`?E:w??-1,spinIdeal:T,states:{power:r(`charging`),accuracy:r(`aiming`),angle:r(`angle`,t.angle),spin:r(`spin`,t.spin)}})}function We(){d=`swinging`,p=0,g=i_+(a_-i_)*(.35+.65*f),_=.35+.3*f,v=.42-.24*f,y=!1,s.setPrompt(``),we(hd.Light)}function Ge(){let t=Iv(e),n=km(t.club,t.golfer,f,m,t.strike,{angle:C,spin:w,spinIdeal:T});S=n.kind,Ke(),D=n.launch.speed,ie=r_(n.launch,t.monster,ae).time/Fb,Xg(c,n.launch),s.showMeters(null),b=h,x=0,O=0,ne=!1,k=1,oe=_e().boosts,le=0,se=0,ce=0,re=0,A=-1,j=1,o.hit(),o.setPhase(`flight`),Ld(S===`perfect`),Hd(ge().voice),we(S===`perfect`?hd.Heavy:hd.Medium),s.showContact(S)}function Ke(){let t=e.stats;S===`perfect`?(t.perfects++,t.streak++,t.bestStreak=Math.max(t.bestStreak,t.streak),C!==null&&w!==null&&Em(C)===`perfect`&&Em(w-T)===`perfect`&&t.flawless++):t.streak=0,S===`shank`&&t.shanks++}function qe(){d=`rest`;let t=Jg(c.pos),n=t>e.best,a=e.best,u=Nm(t,S,a,!c.inRough,_e().coins),f=uf(t),p=df(e.zone,f);e.zone=Math.max(e.zone,f),e.coins+=u.total+p,e.best=Math.max(e.best,t),e.shots++;let m=af(e.xp).level,h=nf(t);e.xp+=h;let g=af(e.xp),_=e=>m<e&&g.level>=e,v=_(14)?`Spin slider unlocked!`:_(7)?`Angle slider unlocked!`:``,y=cm.flatMap((e,t)=>e>m&&e<=g.level?[t]:[]);if(y.length>0){let e=y.flatMap(e=>[mm[e].name,dm[e].name,pm[e].name]);s.toast(`🛒`,`New in the shop!`,e.join(` · `),De)}let b=e.stats;b.totalFeet+=t,b.coinsEarned+=u.total+p,c.inRough||b.fairways++,n&&b.records++,Me(),Pv(e),r.clearTreesAround(l),i.setMode(`rest`,l),o.setPhase(`rest`),s.showLive(!1),s.showFastForward(!1),s.showBoost(!1),s.showResult({total:t,carry:c.carry??t,apex:c.apex,kind:S,coins:u.total+p,milestones:u.milestones,recordBonus:u.recordBonus,fairwayBonus:u.fairwayBonus,zoneBonus:p,zoneName:cf[f].name,record:n,previousBest:a,inRough:c.inRough,xp:{gain:h,level:g,levelsGained:g.level-m,unlock:v}},()=>{n||g.level>m?zd():Rd(),xe()}),ue=u.total+p,M++,s.showDoubleOffer(sp()&&ue>0&&e.shots-de>=Rb,ue)}async function Je(){if(!(d!==`rest`||fe)){fe=!0;try{!e.noAds&&e.shots>=zb&&M>=Bb&&ap()&&(M=0,await op(),await Ye())}finally{fe=!1}Ce()}}function Ye(){let t=xp();return!t||e.noAds?Promise.resolve():(s.showNoAds(!0,t),new Promise(e=>pe=e))}function Xe(){s.showNoAds(!1),pe?.(),pe=null}async function Ze(){s.noAdsBuy.disabled=!0,await Cp()?($e(),Xe()):s.noAdsBuy.disabled=!1}async function Qe(){await wp()?($e(),Xe()):s.toast(`🔍`,`Restore purchase`,`No Remove Ads purchase found`,()=>{})}function $e(){e.noAds=!0,Pv(e),s.toast(`🎉`,`Ads removed`,`Thanks for supporting RoboGolf!`,()=>{}),zd(),we(hd.Heavy)}async function et(){d===`rest`&&sp()&&(s.resultDouble.disabled=!0,await cp()?(e.coins+=ue,e.stats.coinsEarned+=ue,de=e.shots,M=0,Me(),Pv(e),xe(),s.showDoubled(ue,ue*2),zd(),we(hd.Medium)):s.showDoubleOffer(sp(),ue))}function tt(t){switch(p+=t,d){case`charging`:{let e=p/(Mb/2)%2;f=e<1?e:2-e;break}case`aiming`:m=p/vm(Iv(e).golfer),m>=1&&(m=1,ze());break;case`angle`:case`spin`:E=Be();break;case`swinging`:{let e=p;if(e<_)h=Nt.lerp(i_,g,Gb(e/_));else if(e<_+Nb)h=g;else{y||(y=!0,Pd(),a.hasBoosters&&Fd());let t=Math.min(1,(e-_-Nb)/v);h=Nt.lerp(g,0,Wb(t)),t>=1&&(Ge(),d=`flight`,p=0)}break}case`flight`:case`rest`:{x+=t;let e=Math.min(1,x/.75);h=Nt.lerp(b,o_,1-(1-e)**3),d===`flight`&&nt(t);break}}jb.includes(d)&&Ue(),a.setSwing(h),a.animate(t,Ab[d],f,l);let n=d===`swinging`&&y?1:d===`flight`?1-x/.4:0;a.setThrust(n),l.set(c.pos.x,c.pos.y,c.pos.z),u.set(c.vel.x,c.vel.y,c.vel.z)}function nt(t){i.mode===`tee`&&p>.22&&i.setMode(`follow`,l);let n=Math.max(2.4+Nt.clamp((D-1300)/1500,0,1)*1.2,ie),r=Nt.clamp(1+(D-250)/320,1,n),a=Math.min(1,p/.8),u=1+(r-1)*a;c.phase===`roll`&&(u*=1.6),ee&&(u*=3),se>0?(se-=t,u*=.1):ce>0&&(u*=1+ce,ce=Math.max(0,ce-t/Vb)),Zg(c,t*u,Iv(e).monster,ae),c.bounces!==O&&((O===0||Math.abs(c.vel.y)>6)&&Ud(ge().voice,O===0?1:.6),O===0&&we(hd.Light),O=c.bounces),c.phase===`roll`&&o.setPhaseOnce(`rolling`);let d=Jg(c.pos),f=_e().coins.milestone;for(;d>=k*Am;)re+=Math.round(jm(k++)*f);for(re>0&&p-A>=Ib&&(s.showMilestone((k-1)*Am,re),Rd(),we(hd.Light),re=0,A=p);j<cf.length&&d>=cf[j].start;){let t=cf[j];s.showZone(t.name,t.banner,j>e.zone?t.bonus:0),zd(),we(hd.Medium),j++}let m=``;e.best>0&&d>e.best?(m=`NEW RECORD!`,ne||(ne=!0,we(hd.Light))):c.carry!==null&&(m=c.inRough?`In the rough`:`Rolling...`),s.showLive(!0,d,m),s.showFastForward(p>1.2&&c.phase!==`rest`),s.showBoost(oe>0&&c.phase===`flight`,oe),c.phase===`rest`?(te+=t,te>.6&&qe()):te=0}function rt(){let e=window.innerWidth,t=window.innerHeight;n.setSize(e,t,!1),i.resize(e,t)}window.addEventListener(`resize`,rt),rt(),ve(),ye(),be(),xe(),Ce(),bp().then(({owned:t})=>{t&&!e.noAds&&(e.noAds=!0,Pv(e))});let it=Tf(e);it>0&&s.toast(`🏆`,`Achievements`,`${it} reward${it>1?`s`:``} to claim`,Ne);let at=performance.now();n.setAnimationLoop(e=>{let t=Math.min(.1,(e-at)/1e3);at=e,tt(t),i.update(t,l,u),r.update(l,i.camera),o.update(t,l,u,i.camera),n.render(r.scene,i.camera)})}function Wb(e){return e*e}function Gb(e){return e<.5?2*e*e:1-(-2*e+2)**2/2}Ub();export{rd as i,hd as n,gd as r,Pf as t};