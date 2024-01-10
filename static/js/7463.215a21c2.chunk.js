"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[7463],{97463:(e,t,n)=>{n.r(t),n.d(t,{createConnection:()=>O});var r=n(27366),o=(n(59486),n(76200)),s=n(10064),i=n(32718),a=n(66978),c=n(35995),l=(n(25243),n(63780),n(93169),n(69912)),u=n(49861),d=n(93501),h=n(91505);let f=class extends h.Z.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new s.Z("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,r._)([(0,u.Cb)({readOnly:!0})],f.prototype,"connectionError",null),f=(0,r._)([(0,l.j)("esri.layers.support.StreamConnection")],f);const g=f;var y,p;(p=y||(y={}))[p.CONNECTING=0]="CONNECTING",p[p.OPEN=1]="OPEN",p[p.CLOSING=2]="CLOSING",p[p.CLOSED=3]="CLOSED";let m=class extends g{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:n,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,d.k)(t,r,n),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case y.CONNECTING:case y.OPEN:return"connected";case y.CLOSING:case y.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._config.source.path,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;try{var r;if(this.destroyed)return;const t=(0,c.fl)(e,null!==(r=this._config.customParameters)&&void 0!==r?r:{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(f){const o=t/1e3;return this._config.maxReconnectionAttempts&&n>=this._config.maxReconnectionAttempts?(i.Z.getLogger(this).error(new s.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(i.Z.getLogger(this).error(new s.Z("websocket-connection","Failed to connect. Attempting to reconnect in ".concat(o,"s"),f)),await(0,a.e4)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),n+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(t){return void i.Z.getLogger(this).error(new s.Z("websocket-connection","Failed to parse message, invalid JSON",{error:t}))}}}_createWebSocket(e){return new Promise(((t,n)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=e=>this._onClose(e),r.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(r),t(r)},r.onclose=e=>{r.onopen=r.onclose=null,n(e)}}))}async _handshake(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;const t=this._websocket;if(null==t)return;const n=(0,a.hh)(),r=t.onmessage,{filter:o,outFields:c,spatialReference:l}=this._config;return n.timeout(e),t.onmessage=e=>{var a;let u=null;try{u=JSON.parse(e.data)}catch(y){}u&&"object"==typeof u||(i.Z.getLogger(this).error(new s.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),this.destroy()),(null===(a=u.spatialReference)||void 0===a?void 0:a.wkid)!==(null===l||void 0===l?void 0:l.wkid)&&(i.Z.getLogger(this).error(new s.Z("websocket-connection","Protocol violation. Handshake failed - expected wkid of ".concat(l.wkid),e.data)),n.reject(),this.destroy()),"json"!==u.format&&(i.Z.getLogger(this).error(new s.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),this.destroy()),o&&u.filter!==o&&i.Z.getLogger(this).error(new s.Z("websocket-connection","Tried to set filter, but server doesn't support it")),c&&u.outFields!==c&&i.Z.getLogger(this).error(new s.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=r;for(const n of this._outstandingMessages)t.send(JSON.stringify(n));this._outstandingMessages=[],n.resolve()},t.send(JSON.stringify({filter:o,outFields:c,format:"json",spatialReference:{wkid:l.wkid}})),n.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),i.Z.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&i.Z.getLogger(this).error("websocket-connection","WebSocket closed unexpectedly with error code ".concat(e.code)),this.destroyed||this._open()}};(0,r._)([(0,u.Cb)()],m.prototype,"connectionStatus",null),(0,r._)([(0,u.Cb)()],m.prototype,"errorString",void 0),m=(0,r._)([(0,l.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],m);var _=n(5192),S=n(21149),w=n(77981),v=n(78952);const b={maxQueryDepth:5,maxRecordCountFactor:3};let k=class extends m{constructor(e){super({...b,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||i.Z.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:n,outFields:r}=this._config;this.destroyed||this._setFilter(n,r)}_onMessage(e){if("attributes"in e){let n;try{n=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(n.geometry)}catch(t){return void i.Z.getLogger(this).error(new s.Z("geoevent-connection","Failed to parse message",t))}this.onFeature(n)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},n=(0,o.Z)(e.path,{query:t,responseType:"json"}),r=(await n).data;return this._serviceDefinition=r,r}_fetchWebSocketUrl(e,t){const n=e[0],{urls:r,token:o}=n,s=this._inferWebSocketBaseUrl(r);return(0,c.fl)("".concat(s,"/subscribe"),{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return i.Z.getLogger(this).error(new s.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const n=this._websocket;if(null==n||null==e&&null==t)return;const r=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const c=(0,a.hh)();return n.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(i.Z.getLogger(this).error(new s.Z("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString","Could not set service filter - ".concat(t.error)),c.reject(t.error)),this._setWebSocketJSONParseHandler(n),o=!0,c.resolve())},n.send(r),setTimeout((()=>{o||(this.destroyed||this._websocket!==n||i.Z.getLogger(this).error(new s.Z("geoevent-connection","Server timed out when setting filter")),c.reject())}),1e4),c.promise}_serializeFilter(e,t){const n={};if(null==e&&null==t)return n;if(null!==e&&void 0!==e&&e.geometry)try{const t=(0,w.im)(e.geometry);if("extent"!==t.type)throw new s.Z("Expected extent but found type ".concat(t.type));n.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(g){i.Z.getLogger(this).error(new s.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",g))}return null!==e&&void 0!==e&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(n.where=e.where),null!=t&&(n.outFields=t.join(",")),n}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,n=e.attributes[t],r=this._relatedFeatures.get(n);if(!r)return i.Z.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:a}=r;for(const s in o)e.attributes[s]=o[s];return a&&(e.geometry=a),e.geometry||e.centroid||i.Z.getLogger(this).error(new s.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,n=this._queryRelatedFeatures(e),r=this._queryArchive(t);await n;const o=await r;if(!o)return;for(const s of o.features)this.onFeature(this._enrich(s))}catch(p){i.Z.getLogger(this).error(new s.Z("geoevent-connection","Encountered an error when querying buddy services",{error:p}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){var t,r,o;const s=new((await Promise.resolve().then(n.bind(n,64326))).default)({url:e}),{capabilities:i}=await s.load(),a=i.query.supportsMaxRecordCountFactor,c=i.query.supportsPagination,l=i.query.supportsCentroid,u=this._config.maxRecordCountFactor,d=s.capabilities.query.maxRecordCount,h=a?d*u:d,f=new S.Z;if(f.outFields=null!==(t=this._config.outFields)&&void 0!==t?t:["*"],f.where=null!==(r=null===(o=this._config.filter)||void 0===o?void 0:o.where)&&void 0!==r?r:"1=1",f.returnGeometry=!0,f.returnExceededLimitFeatures=!0,f.outSpatialReference=v.Z.fromJSON(this._config.spatialReference),l&&(f.returnCentroid=!0),a&&(f.maxRecordCountFactor=u),c)return f.num=h,s.destroy(),this._queryPages(e,f);const g=await(0,_.JT)(e,f,this._config.sourceSpatialReference);return s.destroy(),g.data}async _queryPages(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t.start=null!=t.num?o*t.num:null;const{data:s}=await(0,_.JT)(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<(null!==(n=this._config.maxQueryDepth)&&void 0!==n?n:0)?(s.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,o+1)):(r.forEach((e=>s.features.push(e))),s)}_addRelatedFeatures(e){const t=new Map,n=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const o of n){const e=o.attributes[r];t.set(e,o)}this._relatedFeatures=t}};k=(0,r._)([(0,l.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],k);const x=k;let F=class extends g{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:n,sourceSpatialReference:r}=e;this._featureZScaler=(0,d.k)(t,r,n)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function O(e,t,n,r,o,s,i,a){const c={source:e,sourceSpatialReference:t,spatialReference:n,geometryType:r,filter:o,maxReconnectionAttempts:s,maxReconnectionInterval:i,customParameters:a};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new m(c):new x(c):new F(c)}(0,r._)([(0,u.Cb)()],F.prototype,"connectionStatus",void 0),(0,r._)([(0,u.Cb)()],F.prototype,"errorString",void 0),F=(0,r._)([(0,l.j)("esri.layers.support.ClientSideConnection")],F)},22585:(e,t,n)=>{function r(e){const t={};for(const n in e){if("declaredClass"===n)continue;const o=e[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){t[n]=[];for(let e=0;e<o.length;e++)t[n][e]=r(o[e])}else"object"==typeof o?o.toJSON&&(t[n]=JSON.stringify(o)):t[n]=o}return t}n.d(t,{A:()=>r})},5192:(e,t,n)=>{n.d(t,{Ev:()=>p,JT:()=>f,Vn:()=>S,Vr:()=>_,hH:()=>m,n7:()=>y,qp:()=>g});var r=n(76200),o=n(35995),s=n(77981),i=n(91340),a=n(92975),c=n(22585),l=n(27607),u=n(68620);const d="Layer does not support extent calculation.";function h(e,t){var n;const r=e.geometry,o=e.toJSON();delete o.compactGeometryEnabled,delete o.defaultSpatialReferenceEnabled;const i=o;let c,l,u;if(null!=r&&(l=r.spatialReference,u=(0,a.B9)(l),i.geometryType=(0,s.Ji)(r),i.geometry=function(e,t){if(t&&"extent"===e.type)return"".concat(e.xmin,",").concat(e.ymin,",").concat(e.xmax,",").concat(e.ymax);if(t&&"point"===e.type)return"".concat(e.x,",").concat(e.y);const n=e.toJSON();return delete n.spatialReference,JSON.stringify(n)}(r,e.compactGeometryEnabled),i.inSR=u),o.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=o.groupByFieldsForStatistics.join(",")),o.objectIds&&(i.objectIds=o.objectIds.join(",")),o.orderByFields&&(i.orderByFields=o.orderByFields.join(",")),!o.outFields||!o.returnDistinctValues&&(null!==t&&void 0!==t&&t.returnCountOnly||null!==t&&void 0!==t&&t.returnExtentOnly||null!==t&&void 0!==t&&t.returnIdsOnly)?delete i.outFields:o.outFields.includes("*")?i.outFields="*":i.outFields=o.outFields.join(","),o.outSR?(i.outSR=(0,a.B9)(o.outSR),c=e.outSpatialReference):r&&(o.returnGeometry||o.returnCentroid)&&(i.outSR=i.inSR,c=l),o.returnGeometry&&delete o.returnGeometry,o.outStatistics&&(i.outStatistics=JSON.stringify(o.outStatistics)),o.fullText&&(i.fullText=JSON.stringify(o.fullText)),o.pixelSize&&(i.pixelSize=JSON.stringify(o.pixelSize)),o.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=l&&null!=(null===(n=e.quantizationParameters)||void 0===n?void 0:n.extent)&&l.equals(e.quantizationParameters.extent.spatialReference)&&delete o.quantizationParameters.extent.spatialReference,i.quantizationParameters=JSON.stringify(o.quantizationParameters)),o.parameterValues&&(i.parameterValues=JSON.stringify(o.parameterValues)),o.rangeValues&&(i.rangeValues=JSON.stringify(o.rangeValues)),o.dynamicDataSource&&(i.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o.timeExtent){const e=o.timeExtent,{start:t,end:n}=e;null==t&&null==n||(i.time=t===n?t:"".concat(null!==t&&void 0!==t?t:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete o.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=l&&null!=c&&l.equals(c)&&(i.defaultSR=i.inSR,delete i.inSR,delete i.outSR),i}async function f(e,t,n,r){const o=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await S(e,t,"json",r);return(0,u.p)(t,n,o.data),o}async function g(e,t,n,r){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:n.createFeatureResult()};const o=await y(e,t,r),s=o;return s.data=(0,l.C)(o.data,n),s}function y(e,t,n){return S(e,t,"pbf",n)}function p(e,t,n){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):S(e,t,"json",n,{returnIdsOnly:!0})}function m(e,t,n){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):S(e,t,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}async function _(e,t,n){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await S(e,t,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}),o=r.data;if(o.hasOwnProperty("extent"))return r;if(o.features)throw new Error(d);if(o.hasOwnProperty("count"))throw new Error(d);return r}async function S(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const l="string"==typeof e?(0,o.mN)(e):e,u=t.geometry?[t.geometry]:[],d=await(0,i.aX)(u,null,{signal:s.signal}),f=null===d||void 0===d?void 0:d[0];null!=f&&((t=t.clone()).geometry=f);const g=(0,c.A)({...l.query,f:n,...a,...h(t,a)});return(0,r.Z)((0,o.v_)(l.path,(y=a,null==t.formatOf3DObjects||y.returnCountOnly||y.returnExtentOnly||y.returnIdsOnly?"query":"query3d")),{...s,responseType:"pbf"===n?"array-buffer":"json",query:{...g,...s.query}});var y}}}]);
//# sourceMappingURL=7463.215a21c2.chunk.js.map