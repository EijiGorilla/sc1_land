"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[4011],{28278:(e,t,n)=>{n.d(t,{Es:()=>g,I_:()=>d,W7:()=>y,qM:()=>w});var r=n(10064),o=n(84652),i=n(32718),a=n(2821),c=n(4760);const s=i.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,t,n){let o="",i=0;for(;i<n;){const a=e[t+i];if(a<128)o+=String.fromCharCode(a),i++;else if(a>=192&&a<224){if(i+1>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const c=(31&a)<<6|63&e[t+i+1];o+=String.fromCharCode(c),i+=2}else if(a>=224&&a<240){if(i+2>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const c=(15&a)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(c),i+=3}else{if(!(a>=240&&a<248))throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const c=(7&a)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(c>=65536){const e=55296+(c-65536>>10),t=56320+(1023&c);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(c);i+=4}}}return o}function l(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,c=v[a];n.fields[i.property]=c(e,r),r+=m[a].BYTES_PER_ELEMENT}return n.byteCount=r,n}function f(e,t,n){const o=[];let i,a,c=0;for(a=0;a<e;a+=1){if(i=t[a],i>0){if(o.push(u(n,c,i-1)),0!==n[c+i-1])throw new r.Z("string-array-error","Invalid string array: missing null termination.")}else o.push(null);c+=i}return o}function d(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function h(e,t,n){const i=null!=t.header?l(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},a={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let c=i.byteCount;for(let l=0;l<t.ordering.length;l++){var s,u;const e=t.ordering[l],n=(0,o.d9)(t[e]);if(n.count=null!==(s=i.fields.count)&&void 0!==s?s:0,"String"===n.valueType){if(n.byteOffset=c,n.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new r.Z("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding});if(n.timeEncoding&&"ECMA_ISO8601"!==n.timeEncoding)throw new r.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:n.timeEncoding})}else{if(!S(n.valueType))throw new r.Z("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=M(n.valueType);c+=c%e!=0?e-c%e:0,n.byteOffset=c,n.byteCount=e*n.valuesPerElement*n.count}}c+=null!==(u=n.byteCount)&&void 0!==u?u:0,a.entries[e]=n}return a.byteCount=c-a.byteOffset,a}function p(e,t,n){if(t!==e&&s.error("Invalid ".concat(n," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new r.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function y(e,t){const n=l(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const u of t.ordering){if(!t.vertexAttributes[u])continue;const e={...t.vertexAttributes[u],byteOffset:r,count:a},n=b[u]||"_"+u;o.vertexAttributes[n]=e,r+=M(e.valueType)*e.valuesPerElement*a}const c=i.faceCount;if(t.faces&&c){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:c};o.faces[e]=n,r+=M(n.valueType)*n.valuesPerElement*c}}const s=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&s){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:s};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:M(n.valueType))*n.valuesPerElement*s}}return p(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function g(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}(e.compressedAttributes.attributes):e?function(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}(t)}const b={position:c.T.POSITION,normal:c.T.NORMAL,color:c.T.COLOR,uv0:c.T.UV0,region:c.T.UVREGION};function w(e,t,n){if("lepcc-rgb"===e.encoding)return(0,a.IT)(t);if("lepcc-intensity"===e.encoding)return(0,a.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new r.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(s.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(s.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const o=h(t,e,n);p(o.byteOffset+o.byteCount,t.byteLength,"attribute");const i=o.entries.attributeValues||o.entries.objectIds;if(i){if("String"===i.valueType){const e=o.entries.attributeByteCounts,n=d(t,e),r=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,n){return f(e,t,n).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(e.count,n,r):f(e.count,n,r)}return d(t,i)}throw new r.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},v={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function S(e){return m.hasOwnProperty(e)}function M(e){return S(e)?m[e].BYTES_PER_ELEMENT:0}},47570:(e,t,n)=>{n.d(t,{c:()=>c,n:()=>l});var r=n(81949),o=n(71353),i=n(83448),a=n(37998);function c(e,t,n,o){const i=l(e,t,n),c=(0,r.a)();return(0,a.B)(n,i,c,o),c}const s=1,u=5-s;function l(e,t,n){const r=(0,o.c)(),a=e[3],c=2**(Math.ceil(Math.log(a)*Math.LOG2E/u)*u+s);if(n.isGeographic){const t=c/(0,i.Iu)(n).radius*180/Math.PI,o=Math.round(e[1]/t),a=Math.max(-90,Math.min(90,o*t)),s=t/Math.cos((Math.abs(a)-t/2)/180*Math.PI),u=Math.round(e[0]/s)*s;r[0]=u,r[1]=a}else{const t=Math.round(e[0]/c),n=Math.round(e[1]/c);r[0]=t*c,r[1]=n*c}const l=e[2]+t,f=Math.round(l/c);return r[2]=f*c,r}},44011:(e,t,n)=>{n.d(t,{Cx:()=>we,HV:()=>le,Jf:()=>Q,Jx:()=>X,OJ:()=>ee,T2:()=>K,VL:()=>Se,WD:()=>Me,X5:()=>O,Yb:()=>F,a7:()=>ae,bf:()=>_,c$:()=>ve,cr:()=>q,e8:()=>W,ei:()=>$,gn:()=>ne,hv:()=>k,ix:()=>ue,jv:()=>fe,ns:()=>D,p8:()=>te,pD:()=>P,tS:()=>R,tp:()=>G,tq:()=>J,uC:()=>ce,vH:()=>me,xe:()=>H,yS:()=>oe,zW:()=>re});var r=n(76200),o=n(63780),i=n(10064),a=n(93169),c=n(18722),s=n(22753),u=n(11873),l=n(14226),f=n(81949),d=n(48976),h=n(98131),p=n(11186),y=n(71353),g=n(83448),b=n(79803),w=n(78952),m=n(29691),v=n(37998),S=n(50628),M=n(5986),C=n(65156),I=n(92975),T=n(21149),U=n(28278),E=n(47570),x=n(97689),Z=n(49420),z=n(89414),A=n(91526);function L(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function O(e){if((0,a.Z)("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const e of n.geometryBuffers){var t;if("draco"===(null===(t=e.compressedAttributes)||void 0===t?void 0:t.encoding))return!0}return!1}function R(e,t,n,r){n.traverse(t,(t=>{const n=t.mbs;return(null!=n&&q(e,n))!==P.OUTSIDE&&(r(t),!0)}))}function k(e,t,n){let r=0,o=0;for(let i=0;i<t.length&&r<e.length;i++)e[r]===t[i]&&(n(i)&&(e[o]=e[r],o++),r++);e.length=o}function F(e,t,n){let r=0,i=0;for(;r<n.length;)(0,o.$A)(e,n[r])>=0===t&&(n[i]=n[r],i++),r++;n.length=i}const B=(0,C.Ue)();function D(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return B[0]=(e[0]-t.position[0])/t.rotationScale[0],B[1]=(e[1]-t.position[1])/t.rotationScale[4],B[2]=(e[2]-t.position[0])/t.rotationScale[0],B[3]=(e[3]-t.position[1])/t.rotationScale[4],B}var P,N;function q(e,t){const n=t[0],r=t[1],o=t[3],i=e[0]-n,a=n-e[2],c=e[1]-r,s=r-e[3],u=Math.max(i,a,0),l=Math.max(c,s,0),f=u*u+l*l;return f>o*o?P.OUTSIDE:f>0?P.INTERSECTS_CENTER_OUTSIDE:-Math.max(i,a,c,s)>o?P.INSIDE:P.INTERSECTS_CENTER_INSIDE}function W(e,t,n){const r=[],o=null===n||void 0===n?void 0:n.missingFields,i=null===n||void 0===n?void 0:n.originalFields;for(const a of e){const e=a.toLowerCase();let n=!1;for(const o of t)if(e===o.name.toLowerCase()){r.push(o.name),n=!0,i&&i.push(a);break}!n&&o&&o.push(a)}return r}async function _(e,t,n,r,o){if(0===t.length)return[];const a=e.attributeStorageInfo;if(null!=e.associatedLayer)try{return await async function(e,t,n,r){t.sort(((e,t)=>e.attributes[n]-t.attributes[n]));const o=t.map((e=>e.attributes[n])),i=[],a=W(r,e.fields,{originalFields:i}),c=await j(e,o,a);for(let s=0;s<t.length;s++){const e=t[s],n=c[s],r={};if(e.attributes)for(const t in e.attributes)r[t]=e.attributes[t];for(let t=0;t<i.length;t++)r[i[t]]=n[a[t]];e.attributes=r}return t}(e.associatedLayer,t,n,r)}catch(c){if(e.associatedLayer.loaded)throw c}if(a){const c=function(e,t,n){const r=new Map,o=[],i=n();for(const a of e){const e=a.attributes[t];for(let t=0;t<i.length;t++){const n=i[t],c=n.featureIds.indexOf(e);if(c>=0){let e=r.get(n.node);e||(e={node:n.node,indices:[],graphics:[]},o.push(e),r.set(n.node,e)),e.indices.push(c),e.graphics.push(a);for(let n=t;n>0;n--)i[n]=i[n-1];i[0]=n;break}}}return o}(t,n,o);if(null==c)throw new i.Z("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const s=e.parsedUrl.path;return(await Promise.all(c.map((e=>function(e,t,n,r,o){return H(e,t,n.resources.attributes,r,o)}(s,a,e.node,e.indices,r).then((t=>{for(let n=0;n<e.graphics.length;n++){const r=e.graphics[n],o=t[n];if(r.attributes)for(const e in r.attributes)e in o||(o[e]=r.attributes[e]);r.attributes=o}return e.graphics})))))).flat()}throw new i.Z("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function j(e,t,n){const r=e.capabilities.query.maxRecordCount;if(null!=r&&t.length>r){const i=(0,o.vr)(t,r);return Promise.all(i.map((t=>j(e,t,n)))).then((e=>e.flat()))}const a=new T.Z({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(a).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new i.Z("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}async function H(e,t,n,o,i){const a=[];for(const r of t)if(r&&i.includes(r.name)){const t="".concat(e,"/nodes/").concat(n,"/attributes/").concat(r.key,"/0");a.push({url:t,storageInfo:r})}const c=await Promise.allSettled(a.map((e=>(0,r.Z)(e.url,{responseType:"array-buffer"}).then((t=>(0,U.qM)(e.storageInfo,t.data)))))),s=[];for(const r of o){const e={};for(let t=0;t<c.length;t++){const n=c[t];if("fulfilled"===n.status){const o=n.value;e[a[t].storageInfo.name]=X(o,r)}}s.push(e)}return s}(N=P||(P={}))[N.OUTSIDE=0]="OUTSIDE",N[N.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",N[N.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",N[N.INSIDE=3]="INSIDE";const V=-32768,Y=-(2**31);function X(e,t){if(!e)return null;const n=e[t];return(0,c.z3)(e)?n===V?null:n:(0,c.Hx)(e)?n===Y?null:n:n!=n?null:n}function G(e){const t=e.store,n=t.indexCRS||t.geographicCRS,r=void 0===n?t.indexWKT:void 0;if(r){if(!e.spatialReference)throw new i.Z("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new i.Z("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=n?new w.Z(L(n)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function K(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,r=void 0===n?t.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new i.Z("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new i.Z("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=n?new w.Z(L(n)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function $(e,t){return null==t?"@null":t===(0,m.rS)(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function Q(e,t,n){if(!(0,b.canProjectWithoutEngine)(e,t))throw new i.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===n&&!function(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}(e,t))throw new i.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function J(e,t,n){var r,o,a,c;if((null===(r=e.serviceUpdateTimeStamp)||void 0===r?void 0:r.lastUpdate)!==(null===(o=t.serviceUpdateTimeStamp)||void 0===o?void 0:o.lastUpdate)||!n.isEmpty||(null===(a=e.associatedLayer)||void 0===a?void 0:a.url)!==(null===(c=t.associatedLayer)||void 0===c?void 0:c.url))throw new i.Z("layerview:recycle-failed")}function ee(e,t,n){const r=G(e),o=K(e);Q(r,t,n),Q(o,t,n)}function te(e){var t;if(null==(null===(t=e.store)||void 0===t?void 0:t.defaultGeometrySchema)||!function(e){var t;return(null==e.geometryType||"triangles"===e.geometryType)&&(null==e.topology||"PerAttributeArray"===e.topology)&&null!=(null===(t=e.vertexAttributes)||void 0===t?void 0:t.position)}(e.store.defaultGeometrySchema))throw new i.Z("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function ne(e,t){ee(e,t.spatialReference,t.viewingMode)}function re(e){var t;if(null==(null===(t=e.store)||void 0===t?void 0:t.defaultGeometrySchema)||!function(e){var t;return null!=e.geometryType&&"points"===e.geometryType&&(null==e.topology||"PerAttributeArray"===e.topology)&&(null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&null!=(null===(t=e.vertexAttributes)||void 0===t?void 0:t.position)}(e.store.defaultGeometrySchema))throw new i.Z("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function oe(e,t){Q(e.spatialReference,t.spatialReference,t.viewingMode)}function ie(e){return"mesh-3d"===e.type}function ae(e){if(null==e||!function(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const r of t){if(!ie(r)||0===r.symbolLayers.length)return!0;for(const e of r.symbolLayers.items){var n;if("fill"!==e.type||null==(null===(n=e.material)||void 0===n?void 0:n.color)||"replace"!==e.material.colorMixMode)return!0}}return!1}const ce=(0,x.$s)({color:[0,0,0,0],opacity:0});class se{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function ue(e){const t=new se;let n=!1,r=!1;for(const o of e.symbolLayers.items)if("fill"===o.type&&o.enabled){const e=o.material,i=o.edges;if(null!=e&&!n){const r=e.color,i=(0,Z.F5)(e.colorMixMode);t.material=null!=r?{color:[r.r/255,r.g/255,r.b/255],alpha:r.a,colorMixMode:i}:{color:[1,1,1],alpha:1,colorMixMode:Z.a9.Multiply},t.castShadows=o.castShadows,n=!0}null==i||r||(t.edgeMaterial=(0,x.C8)(i,{}),r=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:Z.a9.Multiply}),t}function le(e,t){return(0|e)+(0|t)|0}function fe(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;r===(0,m.rS)(r)?t.isGeographic?function(e,t,n,r){const o=(0,g.Iu)(n),i=1+Math.max(0,r)/(o.radius+e.center[2]);(0,p.s)(t.center,e.center[0],e.center[1],e.center[2]+r),(0,S.projectBuffer)(t.center,n,0,t.center,(0,m.rS)(n),0,1),(0,d.c)(t.quaternion,e.quaternion),(0,d.a)(Ie,e.quaternion),(0,p.s)(Ze,0,0,1),(0,p.v)(Ze,Ze,Ie),(0,p.s)(Ze,e.halfSize[0]*Math.abs(Ze[0]),e.halfSize[1]*Math.abs(Ze[1]),e.halfSize[2]*Math.abs(Ze[2])),(0,p.i)(Ze,Ze,o.inverseFlattening),(0,p.g)(t.halfSize,e.halfSize,Ze),(0,p.i)(t.halfSize,t.halfSize,i)}(e,n,t,o):function(e,t,n,r){(0,z.$e)(e,Te),(0,p.s)(t.center,e.center[0],e.center[1],e.center[2]+r),(0,v.B)(n,t.center,Ce,(0,m.rS)(n)),(0,p.s)(t.center,Ce[12],Ce[13],Ce[14]);const o=2*Math.sqrt(1+Ce[0]+Ce[5]+Ce[10]);Ie[0]=(Ce[6]-Ce[9])/o,Ie[1]=(Ce[8]-Ce[2])/o,Ie[2]=(Ce[1]-Ce[4])/o,Ie[3]=.25*o,(0,d.m)(t.quaternion,Ie,e.quaternion),(0,d.a)(Ie,t.quaternion);let i=0,a=0,c=0;for(const s of Te)s[2]+=r,(0,S.projectBuffer)(s,n,0,s,(0,m.rS)(n),0,1),(0,p.u)(Ze,s,t.center),(0,p.v)(Ze,Ze,Ie),i=Math.max(i,Math.abs(Ze[0])),a=Math.max(a,Math.abs(Ze[1])),c=Math.max(c,Math.abs(Ze[2]));(0,p.s)(t.halfSize,i,a,c)}(e,n,t,o):t.isWGS84&&(r.isWebMercator||(0,I.QM)(r))?function(e,t,n,r,o){(0,p.c)(ye,t.center),ye[2]+=o;const i=(0,m.rS)(n);(0,S.projectBuffer)(ye,e,0,ye,i,0,1),be(i,t,ye,n,r)}(t,e,r,n,o):t.isWebMercator&&(0,I.QM)(r)?function(e,t,n,r,o){(0,p.c)(ye,t.center),ye[2]+=o,be(e,t,ye,n,r)}(t,e,r,n,o):e===n?(n.center[2]+=o,(0,S.projectBuffer)(n.center,t,0,n.center,r,0,1)):((0,p.s)(n.center,e.center[0],e.center[1],e.center[2]+o),(0,S.projectBuffer)(n.center,t,0,n.center,r,0,1),(0,d.c)(n.quaternion,e.quaternion),(0,p.c)(n.halfSize,e.halfSize))}const de=new Array(24),he=new A.U(de,3),pe=(0,y.c)(),ye=(0,y.c)(),ge=(0,u.a)();function be(e,t,n,r,o){const i=(0,s.b)(ge,t.quaternion);for(let a=0;a<8;++a){for(let e=0;e<3;++e)pe[e]=t.halfSize[e]*(0!=(a&1<<e)?-1:1);for(let e=0;e<3;++e){let t=n[e];for(let n=0;n<3;++n)t+=pe[n]*i[3*n+e];de[3*a+e]=t}}(0,S.projectBuffer)(de,e,0,de,r,0,8),(0,z.Qb)(he,o)}function we(e,t,n,r,o,i){if(!i||0===i.length||null==t||!e.mbs)return null;const a=(0,E.c)(e.mbs,o,n,t);(0,l.i)(Ae,a);let c=null;const s=()=>{if(!c)if(c=Te,(0,C.cS)(Ee),null!=e.serviceObb){fe(e.serviceObb,n,xe,t,o),(0,z.$e)(xe,c);for(const e of c)(0,p.e)(e,e,Ae),(0,C.Ho)(Ee,e)}else{const r=e.mbs;if(!r)return;const i=r[3];(0,M.S)(r,n,Ze,t),(0,p.e)(Ze,Ze,Ae),Ze[2]+=o;for(let e=0;e<8;++e){const t=1&e?i:-i,n=2&e?i:-i,r=4&e?i:-i,o=c[e];(0,p.c)(o,[Ze[0]+t,Ze[1]+n,Ze[2]+r]),(0,C.Ho)(Ee,o)}}};let u=1/0,f=-1/0;if(i.forEach((e=>(e=>{if("replace"!==e.type)return;const n=e.geometry;if(null===n||void 0===n||!n.hasZ)return;(0,C.cS)(Ue);const o=n.spatialReference||r,i=n.rings.reduce(((e,n)=>n.reduce(((e,n)=>((0,M.S)(n,o,Ze,t),(0,p.e)(Ze,Ze,Ae),(0,C.Ho)(Ue,Ze),Math.min(Ze[2],e))),e)),1/0);s(),(0,C.kK)(Ee,Ue)&&(u=Math.min(u,i),f=Math.max(f,i))})(e))),u===1/0)return null;const d=(e,t,n)=>{(0,p.e)(Ze,n,a),e[t]=Ze[0],e[t+1]=Ze[1],e[t+2]=Ze[2],t+=24,n[2]=u,(0,p.e)(Ze,n,a),e[t]=Ze[0],e[t+1]=Ze[1],e[t+2]=Ze[2],t+=24,n[2]=f,(0,p.e)(Ze,n,a),e[t]=Ze[0],e[t+1]=Ze[1],e[t+2]=Ze[2]};for(let l=0;l<8;++l)d(ze.data,3*l,c[l]);return(0,z.Qb)(ze)}function me(e){return null!=e&&e.halfSize[0]>=0}function ve(e){return e[3]>=0}function Se(e){null!=e&&(e.halfSize[0]=-1)}function Me(e){null!=e&&(e[3]=-1)}const Ce=(0,f.a)(),Ie=(0,h.a)(),Te=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Ue=(0,C.Ue)(),Ee=(0,C.Ue)(),xe=(0,z.Ue)(),Ze=(0,y.c)(),ze={data:new Array(72),size:3,exclusive:!0,stride:3},Ae=(0,f.a)()},2821:(e,t,n)=>{n.d(t,{Gi:()=>u,IT:()=>p,ti:()=>b});var r=n(10064);const o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function a(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,o),checksum:t.getUint32(n+i.checksumOffset,o)}}const c={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function s(e,t){return{sizeLo:e.getUint32(t+c.sizeLo,o),sizeHi:e.getUint32(t+c.sizeHi,o),minX:e.getFloat64(t+c.minX,o),minY:e.getFloat64(t+c.minY,o),minZ:e.getFloat64(t+c.minZ,o),maxX:e.getFloat64(t+c.maxX,o),maxY:e.getFloat64(t+c.maxY,o),maxZ:e.getFloat64(t+c.maxZ,o),errorX:e.getFloat64(t+c.errorX,o),errorY:e.getFloat64(t+c.errorY,o),errorZ:e.getFloat64(t+c.errorZ,o),count:e.getUint32(t+c.count,o),reserved:e.getUint32(t+c.reserved,o)}}function u(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:u}=a(e,t,n);if(n+=i.byteCount,"LEPCC     "!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(u>1)throw new r.Z("lepcc-decode-error","Unknown version");const f=s(t,n);if(n+=c.byteCount,f.sizeHi*2**32+f.sizeLo!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),h=[],p=[],y=[],g=[];if(n=l(e,n,h),n=l(e,n,p),n=l(e,n,y),n=l(e,n,g),n!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad length");let b=0,w=0;for(let r=0;r<h.length;r++){w+=h[r];let e=0;for(let t=0;t<p[r];t++){e+=y[b];const t=g[b];d[3*b]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*b+1]=Math.min(f.maxY,f.minY+2*f.errorY*w),d[3*b+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),b++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function l(e,t,n){const r=[];t=f(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=f(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function f(e,t,n){const i=new DataView(e,t),a=i.getUint8(0),c=31&a,s=!!(32&a),u=(192&a)>>6;let l=0;if(0===u)l=i.getUint32(1,o),t+=5;else if(1===u)l=i.getUint16(1,o),t+=3;else{if(2!==u)throw new r.Z("lepcc-decode-error","Bad count type");l=i.getUint8(1),t+=2}if(s)throw new r.Z("lepcc-decode-error","LUT not implemented");const f=Math.ceil(l*c/8),d=new Uint8Array(e,t,f);let h=0,p=0,y=0;const g=-1>>>32-c;for(let r=0;r<l;r++){for(;p<c;)h|=d[y]<<p,p+=8,y+=1;n[r]=h&g,h>>>=c,p-=c,p+c>32&&(h|=d[y-1]>>8-p)}return t+y}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function h(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,o),sizeHi:e.getUint32(t+d.sizeHi,o),count:e.getUint32(t+d.count,o),colorMapCount:e.getUint16(t+d.colorMapCount,o),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function p(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:c}=a(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(c>1)throw new r.Z("lepcc-decode-error","Unknown version");const s=h(t,n);if(n+=d.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");if((2===s.lookupMethod||1===s.lookupMethod)&&0===s.compressionMethod){if(3*s.colorMapCount+s.count+n!==e.byteLength||s.colorMapCount>256)throw new r.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*s.colorMapCount),o=new Uint8Array(e,n+3*s.colorMapCount,s.count),i=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++){const n=o[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===s.lookupMethod&&0===s.compressionMethod){if(3*s.count+n!==e.byteLength||0!==s.colorMapCount)throw new r.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(s.lookupMethod<=2&&1===s.compressionMethod){if(n+3!==e.byteLength||1!==s.colorMapCount)throw new r.Z("lepcc-decode-error","Bad count");const o=t.getUint8(n),i=t.getUint8(n+1),a=t.getUint8(n+2),c=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++)c[3*e]=o,c[3*e+1]=i,c[3*e+2]=a;return c}throw new r.Z("lepcc-decode-error","Bad method "+s.lookupMethod+","+s.compressionMethod)}const y={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function g(e,t){return{sizeLo:e.getUint32(t+y.sizeLo,o),sizeHi:e.getUint32(t+y.sizeHi,o),count:e.getUint32(t+y.count,o),scaleFactor:e.getUint16(t+y.scaleFactor,o),bitsPerPoint:e.getUint8(t+y.bitsPerPoint),reserved:e.getUint8(t+y.reserved)}}function b(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:c}=a(e,t,n);if(n+=i.byteCount,"Intensity "!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(c>1)throw new r.Z("lepcc-decode-error","Unknown version");const s=g(t,n);if(n+=y.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const u=new Uint16Array(s.count);if(8===s.bitsPerPoint){if(s.count+n!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,s.count);for(let e=0;e<s.count;e++)u[e]=t[e]*s.scaleFactor}else if(16===s.bitsPerPoint){if(2*s.count+n!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,s.count);for(let e=0;e<s.count;e++)u[e]=t[e]*s.scaleFactor}else{const t=[];if(f(e,n,t)!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");for(let e=0;e<s.count;e++)u[e]=t[e]*s.scaleFactor}return u}}}]);
//# sourceMappingURL=4011.19f3922a.chunk.js.map