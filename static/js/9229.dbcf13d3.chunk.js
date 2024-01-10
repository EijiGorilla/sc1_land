"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[9229],{32500:(e,t,i)=>{i.d(t,{I:()=>x,b:()=>w});var r,a,n,s=i(30168),o=i(37081),l=i(33280),d=i(94951),h=i(15226),u=i(26461),c=i(116),p=i(41012),g=i(58406),v=i(98634),f=i(64201),y=i(19253),m=i(25920),_=i(4760);function w(e){const t=new f.kG,{vertex:i,fragment:w}=t;return(0,p.Sv)(i,e),t.include(d.w,e),t.attributes.add(_.T.POSITION,"vec3"),t.attributes.add(_.T.UV0,"vec2"),e.perspectiveInterpolation&&t.attributes.add(_.T.PERSPECTIVEDIVIDE,"float"),t.varyings.add("vpos","vec3"),e.multipassEnabled&&t.varyings.add("depth","float"),i.code.add((0,v.H)(r||(r=(0,s.Z)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0;\n      gl_Position = transformPosition(proj, view, vpos);\n\n      ","\n    }\n  "])),e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":"",e.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":"")),t.include(l.f5,e),t.include(h.l,e),w.uniforms.add(new y.A("tex",(e=>e.texture)),new g.p("opacity",(e=>e.opacity))),t.varyings.add("vTexCoord","vec2"),e.output===o.H.Alpha?w.code.add((0,v.H)(a||(a=(0,s.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      fragColor = vec4(alpha);\n    }\n    "])),e.multipassEnabled?"terrainDepthTest(depth);":"",v.H.float(u.F))):(w.include(c.Y),w.code.add((0,v.H)(n||(n=(0,s.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      fragColor = texture(tex, vTexCoord) * opacity;\n\n      if (fragColor.a < ",") {\n        discard;\n      }\n\n      fragColor = highlightSlice(fragColor, vpos);\n      ","\n    }\n    "])),e.multipassEnabled?"terrainDepthTest(depth);":"",v.H.float(u.F),e.transparencyPassType===m.A.Color?"fragColor = premultiplyAlpha(fragColor);":""))),t}const x=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}))},69229:(e,t,i)=>{i.d(t,{Z:()=>V});var r=i(27366),a=i(14921),n=i(42537),s=i(32718),o=i(92026),l=i(66978),d=i(94172),h=i(49861),u=(i(25243),i(63780),i(93169),i(69912)),c=i(53866),p=i(65156),g=i(26279),v=i(42069),f=i(86372),y=i(38461),m=i(91526),_=i(40779),w=i(70619),x=i(4760);function b(e,t){return(0,w.g7)(e,[[t[0],t[1],-1],[t[2],t[1],-1],[t[2],t[3],-1],[t[0],t[3],-1]])}function S(e,t,i){if(!(0,p.kK)(t,i))return b(e,i);const r=[t[1]-i[1],Math.min(t[3],i[3])-Math.max(t[1],i[1]),i[3]-t[3],123456],a=[t[0]-i[0],Math.min(t[2],i[2])-Math.max(t[0],i[0]),i[2]-t[2],123456],n=i[2]-i[0],s=i[3]-i[1],o=a[0]>0&&a[2]>0?3:2,l=r[0]>0&&r[2]>0?3:2,d=(l+1)*(o+1),h=(0,f.bg)(3*d),u=(0,y.xx)(2*d),c=new Array(6*(l*o-1));let g=0,v=0,w=0,S=0,R=0;for(let p=0;p<4;p++){const e=r[p];if(e<=0)continue;let t=0;for(let r=0;r<4;r++){const e=a[r];e<=0||(h[v++]=i[0]+t,h[v++]=i[1]+g,h[v++]=-1,u[w++]=t/n,u[w++]=g/s,r<3&&p<3&&(1!==r||1!==p)&&(c[R++]=S,c[R++]=S+1,c[R++]=S+o+1,c[R++]=S+1,c[R++]=S+o+2,c[R++]=S+o+1),S++,t+=e)}g+=e}const I=new Array(c.length);return new _.Z(e,[[x.T.POSITION,new m.a(h,c,3,!0)],[x.T.NORMAL,new m.a(E,I,3,!0)],[x.T.UV0,new m.a(u,c,2,!0)]])}const E=[0,0,1];var R=i(61712),I=i(94463),P=i(54134),C=i(78289),T=i(39077),A=i(1487),O=i(78485),D=i(66156),M=i(67581),H=i(13107),L=i(69787),N=i(8548);let G=class extends((0,H.Z)((0,v.A)(M.Z))){constructor(){super(...arguments),this.drapeSourceType=g.Lw.RasterImage,this.updatePolicy=O.j.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=(0,l.Ds)((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{(0,l.D_)(e)||s.Z.getLogger(this).error(e)}))}),2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles((0,n.kB)((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise((0,R.E)(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this._updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler())),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks((()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")}),(()=>{}))),this._isScaleRangeLayer()&&this._updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.notifyChange("suspended")))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(((e,t)=>{this._overlays[t]=e,this._updateImageExtent(e,t)}))}_updateImageExtent(e,t){const i=this._clippedExtent(e.extent,Z);if(null==i)return;const r=function(e,t,i){const r=(0,p.d_)(e)/(0,p.Cb)(e),a={width:i,height:i};return r>1.0001?a.height=i/r:r<.9999&&(a.width=i*r),a.width=Math.round(a.width/((0,p.d_)(e)/(0,p.d_)(t))),a.height=Math.round(a.height/((0,p.Cb)(e)/(0,p.Cb)(t))),a}(e.extent,i,e.resolution);let a=e.pixelRatio*this.view.state.pixelRatio;const{layer:n}=this;if("imageMaxWidth"in n&&null!=n.imageMaxWidth||"imageMaxHeight"in n&&null!=n.imageMaxHeight){const e=n.imageMaxWidth,t=n.imageMaxHeight;if(r.width>e){const t=e/r.width;r.height=Math.floor(r.height*t),r.width=e,a*=t}if(r.height>t){const e=t/r.height;r.width=Math.floor(r.width*e),r.height=t,a*=e}}const o=this._extents[t];o&&(0,p.fS)(o.extent,i)&&this._imageSizeEquals(i,o.imageSize,r)||(this._extents[t]={extent:(0,p.Ue)(i),imageSize:r,pixelRatio:a},this.suspended||this._fetch(t).catch((e=>{(0,l.D_)(e)||s.Z.getLogger(this).error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&t.push(this._fetch(i,e));await Promise.allSettled(t)}canResume(){if(!super.canResume())return!1;const e=this.layer;if(this._isScaleRangeActive()){const{minScale:t,maxScale:i}=e.effectiveScaleRange,r=this.view.scale;if(r<i||t>0&&r>t)return!1}return!0}async processResult(e,t,i){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const i=t.extent;if(new c.Z(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await(0,a.Ed)(this._images,(async(i,r)=>{i&&(await e(i,t),await this._createStageObjects(r,i.image,t))}))}_imageSizeEquals(e,t,i){if(!this.maximumDataResolution)return!1;const r=(0,p.d_)(e)/this.maximumDataResolution.x,a=(0,p.Cb)(e)/this.maximumDataResolution.y,n=r/t.width,s=a/t.height,o=r/i.width,l=a/i.height,d=Math.abs(n-o),h=Math.abs(s-l),u=I.h.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return d<=u&&h<=u}async _fetch(e,t){if(this.suspended)return;const i=this._extents[e],r=i.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:(0,p.Ue)(r)});const a=this._images[e];a.loadingAbortController=(0,o.IM)(a.loadingAbortController);const n=new c.Z(r[0],r[1],r[2],r[3],this._spatialReference);if(0===n.width||0===n.height)return void this._clearImage(e);const d=new AbortController;a.loadingAbortController=d,(0,l.fu)(t,(()=>d.abort()));const h=d.signal,u=this._waitFetchReady(h).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:h},{height:r,width:a}=i.imageSize;return this.layer.fetchImage(n,a,r,t)})).then((e=>{if((0,l.Hc)(h))throw s.Z.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),(0,l.zE)();return this.processResult(a,e)})).then((()=>{(0,p.JG)(a.renderExtent,r)}));a.loadingPromise=u,await this._updatingHandles.addPromise(u.then((async()=>{(0,l.k_)(h),await this._createStageObjects(e,a.image,h)})).catch((e=>{throw e&&!(0,l.D_)(e)&&s.Z.getLogger(this).error(e),e})).finally((()=>{u===a.loadingPromise&&(a.loadingPromise=null,a.loadingAbortController=null)})))}_clearImage(e){const t=this._images[e];if(t){null!=t.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],C.T.UPDATE),t.renderGeometry=null);const e=this.view._stage,i=t.texture;null!==i&&void 0!==i&&i.unload(),e.remove(i),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController=(0,o.IM)(t.loadingAbortController),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,i){const r=this.view._stage,n=this._images[e],s=()=>{var e;null!==(e=n.texture)&&void 0!==e&&e.unload(),r.remove(n.texture),n.texture=null,n.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([n.renderGeometry],C.T.UPDATE),n.renderGeometry=null)};if(t){const o=new A.x(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:N.e8.CLAMP_TO_EDGE,t:N.e8.CLAMP_TO_EDGE}});let d;if(await(0,a.q6)(this._images[e===P.fu.INNER?P.fu.OUTER:P.fu.INNER].loadingPromise),(0,l.k_)(i),s(),await r.schedule((()=>o.load(r.renderView.renderingContext)),i),r.add(o),n.texture=o,null==n.material?(n.material=new D.j({transparent:!0,textureId:o.id}),r.add(n.material)):n.material.setParameters({textureId:o.id}),e===P.fu.INNER)d=b(n.material,n.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void s();d=S(n.material,e,n.renderExtent)}n.renderGeometry=new T.z(d),n.renderGeometry.localOrigin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([n.renderGeometry],C.T.UPDATE)}else s(),r.remove(n.material),n.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const e=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:t,maxScale:i}=e.effectiveScaleRange;return(0,L.Av)(t,i)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return(0,p.JG)(t,e);const i=this.view.basemapTerrain;return i.ready?(0,p.jV)(e,i.extent,t):(0,p.JG)(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await(0,d.N1)((()=>this.view.stationary),e),(0,l.k_)(e)}};(0,r._)([(0,h.Cb)()],G.prototype,"layer",void 0),(0,r._)([(0,h.Cb)()],G.prototype,"suspended",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],G.prototype,"fullExtentInLocalViewSpatialReference",void 0),(0,r._)([(0,h.Cb)()],G.prototype,"updating",void 0),G=(0,r._)([(0,u.j)("esri.views.3d.layers.DynamicLayerView3D")],G);const V=G,Z=(0,p.Ue)()},42069:(e,t,i)=>{i.d(t,{A:()=>h});var r=i(27366),a=i(42537),n=i(66978),s=i(94172),o=i(49861),l=(i(25243),i(63780),i(93169),i(69912)),d=i(5354);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,a.kB)((()=>e.abort()))),await(0,s.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,n.k_)(t);const i=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],t),t}},61712:(e,t,i)=>{i.d(t,{E:()=>n});var r=i(81753),a=i(67387);function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=null!=i&&i.spatialReference;if(null==i||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const s=(0,r.iV)(i,t);return null!=s?Promise.resolve(s):e.view.state.isLocal?(0,a.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:null)).catch((()=>null)):Promise.resolve(null)}},66156:(e,t,i)=>{i.d(t,{j:()=>O});var r=i(25158),a=i(37081),n=i(68401),s=i(17363),o=i(56529),l=i(78041),d=i(93822),h=i(97731),u=i(4760),c=i(12594),p=i(64642),g=i(11983),v=i(33236),f=i(27366),y=(i(98634),i(82144)),m=i(31132),_=i(33559),w=i(27627),x=i(50411),b=i(25920),S=i(8883),E=i(32500),R=i(8548),I=i(36207);class P extends m.A{initializeProgram(e){return new w.$(e.rctx,P.shader.get().build(this.configuration),A)}_setPipelineState(e,t){const i=this.configuration,r=e===b.A.NONE,n=e===b.A.FrontFace;return(0,I.sm)({blending:i.output!==a.H.Color&&i.output!==a.H.Alpha||!i.transparent?null:r?C:(0,l.j7)(e),culling:(0,I.zp)(i.cullFace),depthTest:{func:(0,l.Bh)(e)},depthWrite:r?i.writeDepth?I.LZ:null:(0,l.K5)(e),colorWrite:I.BK,stencilWrite:i.hasOccludees?x.s3:null,stencilTest:i.hasOccludees?t?x.eD:x.RY:null,polygonOffset:r||n?null:(0,l.je)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}P.shader=new y.J(E.I,(()=>i.e(8957).then(i.bind(i,18957))));const C=(0,I.if)(R.zi.ONE,R.zi.ONE_MINUS_SRC_ALPHA);class T extends S.W{constructor(){super(...arguments),this.output=a.H.Color,this.cullFace=n.Vr.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=b.A.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}(0,f._)([(0,_.o)({count:a.H.COUNT})],T.prototype,"output",void 0),(0,f._)([(0,_.o)({count:n.Vr.COUNT})],T.prototype,"cullFace",void 0),(0,f._)([(0,_.o)()],T.prototype,"hasSlicePlane",void 0),(0,f._)([(0,_.o)()],T.prototype,"transparent",void 0),(0,f._)([(0,_.o)()],T.prototype,"enableOffset",void 0),(0,f._)([(0,_.o)()],T.prototype,"writeDepth",void 0),(0,f._)([(0,_.o)()],T.prototype,"hasOccludees",void 0),(0,f._)([(0,_.o)({count:b.A.COUNT})],T.prototype,"transparencyPassType",void 0),(0,f._)([(0,_.o)()],T.prototype,"multipassEnabled",void 0),(0,f._)([(0,_.o)()],T.prototype,"cullAboveGround",void 0),(0,f._)([(0,_.o)()],T.prototype,"perspectiveInterpolation",void 0),(0,f._)([(0,_.o)({constValue:!1})],T.prototype,"occlusionPass",void 0);const A=new Map([[u.T.POSITION,0],[u.T.UV0,2],[u.T.PERSPECTIVEDIVIDE,3]]);class O extends g.c{constructor(e){super(e,new H),this.supportsEdges=!0,this._vertexAttributeLocations=A,this._configuration=new T}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<l.ve,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(e,t){return(t===a.H.Color||t===a.H.Alpha||t===a.H.Highlight)&&(e===d.r.DRAPED_MATERIAL||(t===a.H.Highlight?e===d.r.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?d.r.TRANSPARENT_MATERIAL:d.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:d.r.OPAQUE_MATERIAL)))}createGLMaterial(e){return new D(e)}createBufferWriter(){const e=p.W1.clone();return this.parameters.perspectiveInterpolation&&e.f32(u.T.PERSPECTIVEDIVIDE),new M(e)}}class D extends s.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(P,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==a.H.Color&&this._output!==a.H.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class M extends c.G{write(e,t,i,a,n){for(const s of this.vertexBufferLayout.fields.keys()){const o=i.attributes.get(s);if(o)if(s===u.T.PERSPECTIVEDIVIDE){(0,h.hu)(1===o.size);const e=a.getField(s,r.ly);e&&(0,v.XW)(o,e,n)}else(0,v.i9)(s,o,e,t,a,n)}}}class H extends o.Mt{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=n.Vr.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(27366),a=i(7138),n=i(91505),s=i(79056),o=i(32718),l=i(92026),d=i(67426),h=i(49861),u=(i(25243),i(63780),i(93169),i(69912)),c=i(46634);let p=class extends((0,s.IG)((0,d.v)(n.Z.EventedMixin(a.Z)))){constructor(e){super(e),this._updatingHandles=new c.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",r=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,r;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,h.Cb)()],p.prototype,"fullOpacity",null),(0,r._)([(0,h.Cb)()],p.prototype,"layer",void 0),(0,r._)([(0,h.Cb)()],p.prototype,"parent",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,r._)([(0,h.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,r._)([(0,h.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,r._)([(0,h.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,r._)([(0,h.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,r._)([(0,h.Cb)()],p.prototype,"visible",null),(0,r._)([(0,h.Cb)()],p.prototype,"view",void 0),p=(0,r._)([(0,u.j)("esri.views.layers.LayerView")],p);const g=p},13107:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(27366),a=i(32718),n=i(66978),s=i(94172),o=i(49861),l=(i(25243),i(63780),i(93169),i(69912));const d=e=>{let t=class extends e{initialize(){this.addHandles((0,s.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||a.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,r._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,r._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=9229.dbcf13d3.chunk.js.map