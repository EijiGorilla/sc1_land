"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[1118],{15909:(e,t,r)=>{r.d(t,{D:()=>o});var i=r(80292);function o(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:o}=e;(0,i.l)(t)&&o&&t.originOf(r)!==o&&t.updateOrigin(r,o)}))}},80292:(e,t,r)=>{function i(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>i})},81118:(e,t,r)=>{r.d(t,{xp:()=>K,Vt:()=>A});var i=r(27366),o=r(76200),n=r(10064),a=r(32718),l=r(66978),s=r(35995),d=r(49861),p=(r(25243),r(63780),r(93169),r(38511)),u=r(69912),c=r(31201),h=r(15909),y=r(53866),v=r(90724),m=r(78952),f=r(25899),g=r(45948),w=r(30494);let S=null;function x(){return S}var _=r(7575),I=r(98995),b=r(81359),N=r(9634);const R="esri.layers.mixins.SceneService",Z=a.Z.getLogger(R),A=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,l.Ds)((async(e,t,r)=>{switch(e){case K.SAVE:return this._save(t);case K.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return m.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new m.Z(i):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const i=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return y.Z.fromJSON(i,r)}const i=t.store,o=this._readSpatialReference(t);return null==o||null==(null===i||void 0===i?void 0:i.extent)||!Array.isArray(i.extent)||i.extent.some((e=>e<T))?null:new y.Z({xmin:i.extent[0],ymin:i.extent[1],xmax:i.extent[2],ymax:i.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"";return this.parseVersionString(i)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){var r;const i=null===(r=this.portalItem)||void 0===r?void 0:r.title;if("item-title"===this.sublayerTitleMode)return(0,f.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,f.Qc)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&i&&(o=i+" - "+o),(0,f.ld)(o)}set url(e){const t=(0,f.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:Z});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){(0,f.wH)(this,e,"layers",t,i)}get parsedUrl(){const e=this._get("url"),t=(0,s.mN)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,Z,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r;const i=e.rootIndex%e.pageSize,o=null===(t=e.rootPage)||void 0===t||null===(t=t.nodes)||void 0===t?void 0:t[i];if(null==(null===o||void 0===o||null===(r=o.obb)||void 0===r?void 0:r.center)||null==o.obb.halfSize)throw new n.Z("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<T||null==this.fullExtent||this.fullExtent.hasZ)return;const a=o.obb.halfSize,l=o.obb.center[2],s=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=l-s,this.fullExtent.zmax=l+s}else if("node"===(null===e||void 0===e?void 0:e.type)){var i;const t=null===(i=e.rootNode)||void 0===i?void 0:i.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<T)return;const r=t[2],o=t[3],{fullExtent:n}=this;n&&(n.zmin=r-o,n.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new n.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,o.Z)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var t,r;const i=await(0,o.Z)(null!==(t=null===(r=this.parsedUrl)||void 0===r?void 0:r.path)&&void 0!==t?t:"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});i.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let n=!1;if(i.data.layerType&&"Voxel"===i.data.layerType&&(n=!0),n)return this._fetchVoxelServiceLayer();const a=i.data;this.read(a,this._getServiceContext()),this.validateLayer(a)}async _fetchVoxelServiceLayer(e){var t;const r=(await(0,o.Z)((null===(t=this.parsedUrl)||void 0===t?void 0:t.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:null===(e=this.portalItem)||void 0===e?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const o of i)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===C.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){var r,i;const o={...j,...t};let a=I.default.from(e);if(!a)throw new n.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,b.w)(a),a.id&&(a=a.clone(),a.id=null);const l=a.portal||_.Z.getDefault();await this._ensureLoadBeforeSave(),a.type=E,a.portal=l;const s={origin:"portal-item",url:null,messages:[],portal:l,portalItem:a,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},d={layers:[this.write({},s)]};return await Promise.all(null!==(r=s.resources.pendingOperations)&&void 0!==r?r:[]),await this._validateAgainstJSONSchema(d,s,o),a.url=this.url,a.title||(a.title=this.title),this._updateTypeKeywords(a,o,C.newItem),await l.signIn(),await(null===(i=l.user)||void 0===i?void 0:i.addItem({item:a,folder:null===o||void 0===o?void 0:o.folder,data:d})),await(0,N.Hn)(this.resourceReferences,s,null),this.portalItem=a,(0,h.D)(s),s.portalItem=a,a}async _save(e){var t;const r={...j,...e};if(!this.portalItem)throw new n.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,b.w)(this.portalItem),this.portalItem.type!==E)throw new n.Z("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(E,'"'));await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&(0,s.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||_.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},i)]};return await Promise.all(null!==(t=i.resources.pendingOperations)&&void 0!==t?t:[]),await this._validateAgainstJSONSchema(o,i,r),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,C.existingItem),await(0,N.bx)(this.portalItem,o,this.resourceReferences,i,null),(0,h.D)(i),this.portalItem}async _validateAgainstJSONSchema(e,t,r){var i,o,a;let l=null!==(i=null===(o=t.messages)||void 0===o?void 0:o.filter((e=>"error"===e.type)).map((e=>new n.Z(e.name,e.message,e.details))))&&void 0!==i?i:[];(null===r||void 0===r||null===(a=r.validationOptions)||void 0===a?void 0:a.ignoreUnsupported)&&(l=l.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const s=null===r||void 0===r?void 0:r.validationOptions,d=null===s||void 0===s?void 0:s.enabled,p=x();if(d&&p){const t=(await p()).validate(e,r.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n".concat(t.join("\n"));if(Z.error("_validateAgainstJSONSchema(): ".concat(e)),"throw"===s.failPolicy){const e=t.map((e=>new n.Z("sceneservice:schema-validation",e))).concat(l);throw new n.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(l.length>0)throw new n.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:l})}};return(0,i._)([(0,d.Cb)(g.id)],t.prototype,"id",void 0),(0,i._)([(0,d.Cb)({type:m.Z})],t.prototype,"spatialReference",void 0),(0,i._)([(0,p.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,i._)([(0,d.Cb)({type:y.Z})],t.prototype,"fullExtent",void 0),(0,i._)([(0,p.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,i._)([(0,d.Cb)({readOnly:!0,type:v.Z})],t.prototype,"heightModelInfo",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,i._)([(0,p.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,i._)([(0,d.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,i._)([(0,d.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,i._)([(0,d.Cb)({type:String})],t.prototype,"title",void 0),(0,i._)([(0,p.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,i._)([(0,p.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,i._)([(0,d.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,i._)([(0,d.Cb)(g.HQ)],t.prototype,"url",null),(0,i._)([(0,c.c)("url")],t.prototype,"writeUrl",null),(0,i._)([(0,d.Cb)()],t.prototype,"parsedUrl",null),(0,i._)([(0,d.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,i._)([(0,d.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,i._)([(0,u.j)(R)],t),t},T=-1e38;var C,O;(O=C||(C={}))[O.existingItem=0]="existingItem",O[O.newItem=1]="newItem";const E="Scene Service",j={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var K;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(K||(K={}))},30494:(e,t,r)=>{r.d(t,{T:()=>n});var i=r(76200),o=r(10064);async function n(e,t,r,n,a,l){let s=null;if(null!=r){const t="".concat(e,"/nodepages/"),o=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,i.Z)(o,{query:{f:"json",token:n},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(c){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",o,c),s=c}}if(!t)return null;const d=null===t||void 0===t?void 0:t.split("/").pop(),p="".concat(e,"/nodes/"),u=p+d;try{return{type:"node",rootNode:(await(0,i.Z)(u,{query:{f:"json",token:n},responseType:"json",signal:l})).data,urlPrefix:p}}catch(c){throw new o.Z("sceneservice:root-node-missing","Root node missing.",{pageError:s,nodeError:c,url:u})}}},81359:(e,t,r)=>{r.d(t,{w:()=>a});var i=r(42265),o=r(10064),n=r(66660);function a(e){if(i.default.apiKey&&(0,n.r)(e.portal.url))throw new o.Z("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}}}]);
//# sourceMappingURL=1118.aad8fb9b.chunk.js.map