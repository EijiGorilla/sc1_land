"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[8168],{58935:(t,e,o)=>{o.d(e,{Rd:()=>n,Ud:()=>h,VG:()=>r,Wv:()=>a,Zv:()=>l});var i=o(47898),s=o(5163);function r(t,e,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return(0,s.VG)(t,(0,i.nn)(e,o).value,o,r,n)}function n(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,s.Rd)(t,e.value,e.unit,o,i)}function a(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,s.Wv)(t,e.value,e.unit,o,i)}function h(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,s.Ud)(t,e.value,e.unit,o,i)}function l(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,s.Zv)(t,e.value,e.unit,o,i)}},47898:(t,e,o)=>{o.d(e,{EV:()=>s,ne:()=>n,nn:()=>h,yG:()=>r});var i=o(68860);function s(t,e){return{type:(0,i.UF)(e),value:t,unit:e}}function r(t,e){return{type:(0,i.UF)(e),value:t,unit:e}}function n(t,e){return{type:(0,i.UF)(e),value:t,unit:e}}function a(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"arithmetic";return{type:(0,i.UF)(e),value:t,unit:e,rotationType:o}}function h(t,e){const o=function(t,e){return(0,i.En)(t.value,t.unit,e)}(t,e);return"angle"===t.type?a(o,e,t.rotationType):s(o,e)}r(0,"meters"),n(0,"square-meters"),a(0,"radians"),a(0,"degrees")},5163:(t,e,o)=>{o.d(e,{Rd:()=>c,Ud:()=>u,VG:()=>l,Wv:()=>d,Zv:()=>p,sS:()=>x});var i=o(70116),s=(o(17768),o(16889)),r=(o(47898),o(643)),n=o(68860),a=o(6291);function h(t,e,o){return t.units[e][o]}function l(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return"".concat((0,a.uf)(e,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:e>0?"never":"exceptZero"})," ").concat(h(t,o,s))}function c(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const r=(0,n.Y8)(e,o);return l(t,(0,n.En)(e,o,r),r,i,s)}function d(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const r=(0,n.Dw)(e,o);return l(t,(0,n.En)(e,o,r),r,i,s)}function u(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const r=(0,n.Q7)(e,o);return l(t,(0,n.En)(e,o,r),r,i,s)}function p(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const r=(0,n.jl)(e,o);return l(t,(0,n.En)(e,o,r),r,i,s)}new Map;const _=["B","kB","MB","GB","TB"];function x(t,e){let o=0===(e=Math.round(e))?0:Math.floor(Math.log(e)/Math.log(i.Y.KILOBYTES));o=(0,s.uZ)(o,0,_.length-1);const n=(0,a.uf)(e/i.Y.KILOBYTES**o,{maximumFractionDigits:2});return(0,r.gx)(t.units.bytes[_[o]],{fileSize:n})}},74177:(t,e,o)=>{o.d(e,{R:()=>r});var i=o(68860),s=o(7575);function r(t){var e,o,r,n,a;const h="metric";if(null==t)return h;const l=t.map,c=null!==(e=l&&"portalItem"in l?null===(o=l.portalItem)||void 0===o?void 0:o.portal:null)&&void 0!==e?e:s.Z.getDefault();switch(null!==(r=null===(n=c.user)||void 0===n?void 0:n.units)&&void 0!==r?r:c.units){case h:return h;case"english":return"imperial"}return null!==(a=(0,i.yT)(t.spatialReference))&&void 0!==a?a:h}},61201:(t,e,o)=>{o.d(e,{Kc:()=>T,jB:()=>P});var i=o(51995),s=o(100),r=o(94172),n=o(17842),a=o(88396),h=o(11186),l=o(71353),c=o(86244),d=o(11208),u=o(27366),p=o(7138),_=o(49861),x=(o(25243),o(63780),o(93169),o(69912));o(42877);let v=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),g=(t,e,o)=>{for(let i=0,s=e.length;i<s;i++){let s=e[i];Array.isArray(s)?g(t,s,o):null!=s&&!1!==s&&("string"==typeof s&&(s=v(s)),o.push(s))}};function b(t,e,o){if(Array.isArray(e))o=e,e=void 0;else if(e&&("string"==typeof e||e.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let i,s;return o&&1===o.length&&"string"==typeof o[0]?i=o[0]:o&&(s=[],g(t,o,s),0===s.length&&(s=void 0)),{vnodeSelector:t,properties:e,children:s,text:""===i?void 0:i,domNode:null}}o(88367);let m=class extends p.Z{get startPosition(){return[this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1])}constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const t=this.color;return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}get _lineCap(){return"round"}render(){const{height:t,left:e,top:o,width:i,x1:s,x2:r,y1:n,y2:a}=this._calculateCoordinates(f),h="stroke: ".concat(this._strokeStyle,"; stroke-width: ").concat(this.width,"; stroke-linecap: ").concat(this._lineCap,";");return b("div",{classes:{"esri-line-overlay-item":!0},styles:{left:e+"px",top:o+"px",width:i+"px",height:t+"px",visibility:this.visible?"visible":"hidden"}},[b("svg",{width:i,height:t},[b("line",{x1:s,y1:n,x2:r,y2:a,style:h})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this._strokeStyle,t.lineWidth=this.width,t.lineCap=this._lineCap;const e=this._calculateCoordinates(f);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}_calculateCoordinates(t){const e=Math.min(this.startX,this.endX),o=Math.max(this.startX,this.endX),i=Math.min(this.startY,this.endY),s=Math.max(this.startY,this.endY),r=this.width;return t.left=e-r,t.top=i-r,t.width=o-e+2*r,t.height=Math.max(20,s-i+2*r),t.x1=this.startX-e+r,t.y1=this.startY-i+r,t.x2=this.endX-e+r,t.y2=this.endY-i+r,t}};(0,u._)([(0,_.Cb)()],m.prototype,"startX",void 0),(0,u._)([(0,_.Cb)()],m.prototype,"startY",void 0),(0,u._)([(0,_.Cb)()],m.prototype,"endX",void 0),(0,u._)([(0,_.Cb)()],m.prototype,"endY",void 0),(0,u._)([(0,_.Cb)()],m.prototype,"startPosition",null),(0,u._)([(0,_.Cb)()],m.prototype,"endPosition",null),(0,u._)([(0,_.Cb)()],m.prototype,"width",void 0),(0,u._)([(0,_.Cb)()],m.prototype,"color",void 0),(0,u._)([(0,_.Cb)()],m.prototype,"visible",void 0),(0,u._)([(0,_.Cb)()],m.prototype,"isDecoration",void 0),(0,u._)([(0,_.Cb)({readOnly:!0})],m.prototype,"_strokeStyle",null),m=(0,u._)([(0,x.j)("esri.views.overlay.LineOverlayItem")],m);const f={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},y=m,C={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let S=class extends p.Z{get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get _textShadowColor(){const{textColor:t,backgroundColor:e}=this,o=e.clone();return o.a*=t.a,o}get _textShadow(){const t=this._textShadowColor.toCss(!0);return"0 0 ".concat(this._textShadowSize,"px ").concat(t)}get _padding(){return.5*this.fontSize}get _borderRadius(){return this._padding}constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.isDecoration=!0,this.backgroundColor=new i.Z([0,0,0,.6]),this.textColor=new i.Z([255,255,255]),this._textShadowSize=1}render(){return b("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font="".concat(this.fontSize,"px ").concat(e);const o=this._padding,i=this._borderRadius,s=t.measureText(this.text).width,r=this.fontSize,n=w[this.anchor];t.textAlign="center",t.textBaseline="middle";const a=s+2*o,h=r+2*o,l=this.x+n.x*a,c=this.y+n.y*h;this._roundedRect(t,l,c,a,h,i),t.fillStyle=this.backgroundColor.toCss(!0),t.fill();const d=this.x+(n.x+.5)*a,u=this.y+(n.y+.5)*h;this._renderTextShadow(t,this.text,d,u),t.fillStyle=this.textColor.toCss(!0),t.fillText(this.text,d,u)}_renderTextShadow(t,e,o,i){t.lineJoin="miter",t.fillStyle="rgba(".concat(this._textShadowColor.r,", ").concat(this._textShadowColor.g,", ").concat(this._textShadowColor.b,", ").concat(1/R.length,")");const s=this._textShadowSize;for(const[r,n]of R)t.fillText(e,o+s*r,i+s*n)}_roundedRect(t,e,o,i,s,r){t.beginPath(),t.moveTo(e,o+r),t.arcTo(e,o,e+r,o,r),t.lineTo(e+i-r,o),t.arcTo(e+i,o,e+i,o+r,r),t.lineTo(e+i,o+s-r),t.arcTo(e+i,o+s,e+i-r,o+s,r),t.lineTo(e+r,o+s),t.arcTo(e,o+s,e,o+s-r,r),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};let e;for(e in C)t[C[e]]=this.anchor===e;return t}};(0,u._)([(0,_.Cb)()],S.prototype,"x",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"y",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"position",null),(0,u._)([(0,_.Cb)()],S.prototype,"text",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"fontSize",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"anchor",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"visible",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"isDecoration",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"backgroundColor",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"textColor",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"_textShadowSize",void 0),(0,u._)([(0,_.Cb)()],S.prototype,"_textShadowColor",null),(0,u._)([(0,_.Cb)()],S.prototype,"_textShadow",null),(0,u._)([(0,_.Cb)()],S.prototype,"_padding",null),(0,u._)([(0,_.Cb)()],S.prototype,"_borderRadius",null),S=(0,u._)([(0,x.j)("esri.views.overlay.TextOverlayItem")],S);const w={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},R=[];{const t=16;for(let e=0;e<360;e+=360/t)R.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}const I=S;class T extends c.l{constructor(t){super(t),this._handles=new s.Z,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new i.Z([0,0,0,.6]),this._calloutColor=new i.Z([0,0,0,.5]),this._textColor=new i.Z([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){var e;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!(null===(e=this.view.overlay)||void 0===e||!e.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:o}=this;if(null!=t&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,L))break;if(t.callout){const e=this._camera,o=t.callout.distance;(0,a.i)(X,X,[0,t.callout.offset]),e.renderToScreen(X,L),(0,a.s)(A,0,1),(0,a.a)(A,A,o),(0,a.i)(A,A,X),e.renderToScreen(A,Z),this._showCallout=this._updatePosition(L,Z)}else this._textItem.position=[L[0],L[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,L,Z))break;this._showCallout=this._updatePosition(L,Z),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,L,Z))break;this._showText=!0;const e=this._updatePosition(L,Z);this._showCallout=!1!==t.callout&&e,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(o)}_computeLabelPositionFromPoint(t,e){const o=this._camera;return o.projectToRenderScreen(t,X),!(X[2]<0||X[2]>1)&&(o.renderToScreen(X,e),!0)}_computeLabelPositionFromCorner(t,e,o,i){if(!t)return!1;const s=this._camera;return k(t.left,1,s,Y),(0,a.n)(Y,Y),k(t.right,0,s,j),(0,a.i)(A,Y,j),(0,a.n)(A,A),(0,a.e)(A,A),s.projectToRenderScreen(t.left.endRenderSpace,X),!(X[2]<0||X[2]>1)&&(s.renderToScreen(X,o),(0,a.a)(A,A,e),(0,a.i)(A,A,X),s.renderToScreen(A,i),!0)}_computeLabelPositionFromSegment(t,e,o,i,s){if(!t)return!1;const r=t.segment,n=this._camera;(0,d.CM)(r.startRenderSpace,r.endRenderSpace,n,Y),(0,a.s)(A,-Y[1],Y[0]);let h=!1;switch(o){case"top":h=A[1]<0;break;case"bottom":h=A[1]>0;break;case"left":h=A[0]>0;break;case"right":h=A[0]<0}if(h&&(0,a.n)(A,A),0===(0,a.h)(A))switch(o){case"top":A[1]=1;break;case"bottom":A[1]=-1;break;case"left":A[0]=-1;break;case"right":A[0]=1}return r.eval(G[t.sampleLocation],B),n.projectToRenderScreen(B,X),!(X[2]<0||X[2]>1)&&(n.renderToScreen(X,i),(0,a.a)(A,A,e),(0,a.i)(A,A,X),n.renderToScreen(A,s),!0)}_updatePosition(t,e){if(e){const o=e[0]-t[0],i=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(o)>Math.abs(i)?o>0?"left":"right":i>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new I({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new y({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),null!==(t=this.view.overlay)&&void 0!==t&&t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add((0,r.YP)((()=>this.view.state.camera),(()=>this.updateLabelPosition())))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function k(t,e,o,i){t.eval(e,M,D),(0,h.g)(z,M,D),o.projectToRenderScreen(M,F),o.projectToRenderScreen(z,O),(0,a.c)(i,U,E),(0,a.e)(i,i)}function P(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const M=(0,l.c)(),z=(0,l.c)(),D=(0,l.c)(),Y=(0,n.gX)(),j=(0,n.gX)(),A=(0,n.gX)(),B=(0,l.c)(),X=(0,n.J$)(),L=(0,n.s1)(),Z=(0,n.s1)(),F=(0,n.J$)(),E=F,O=(0,n.J$)(),U=O,G={start:0,center:.5,end:1}},9052:(t,e,o)=>{o.d(e,{u:()=>d,y:()=>c});var i=o(11186),s=o(71353),r=o(79803),n=o(29691),a=o(5986),h=o(51378),l=o(80064);class c{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,s.c)(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.c)();this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,o){return(0,i.p)(e,this.startRenderSpace,this.endRenderSpace,t),o&&((0,i.f)(o,this.endRenderSpace,this.startRenderSpace),(0,i.n)(o,o)),e}createRenderGeometry(t,e){const o=[],s=[],r=(e,r)=>{const n=p;(0,i.f)(n,e,t),o.push([n[0],n[1],n[2]]),s.push([r[0],r[1],r[2]])},n=e.worldUpAtPosition(this.eval(.5,u),h.WM.get());return r(this.startRenderSpace,n),r(this.endRenderSpace,n),{points:o,normals:s}}static fromPositionAndVector(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,i.i)(u,e,o),(0,i.g)(u,t,u),new c((0,s.g)(t),(0,s.g)(u))}}class d{_projectIn(t,e){this._project?(0,a.S)(t,this.renderSpatialReference,e,this._pcpf):(0,i.c)(e,t)}constructor(t,e,o){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=o,this.type="geodesic",this._start=(0,s.c)(),this._end=(0,s.c)(),this._pcpf=(0,n.rS)(o),this._project=(0,r.canProjectWithoutEngine)(o,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,o){if(this._project)if(o){const s=p;(0,l.ek)(this._start,this._end,t,e,s),(0,i.g)(_,e,s),(0,a.S)(e,this._pcpf,e,this.renderSpatialReference),(0,a.S)(_,this._pcpf,_,this.renderSpatialReference),(0,i.f)(o,_,e),(0,i.n)(o,o)}else(0,l.ZA)(this._start,this._end,t,e),(0,a.S)(e,this._pcpf,e,this.renderSpatialReference);else(0,i.p)(e,this._start,this._end,t),o&&((0,i.f)(o,this._end,this._start),(0,i.n)(o,o));return e}createRenderGeometry(t,e){const o=[],s=[],r=(e,r)=>{const n=_;(0,i.f)(n,e,t),o.push([n[0],n[1],n[2]]),s.push([r[0],r[1],r[2]])};for(let i=0;i<128;++i){const t=i/127,o=u,s=p;this.eval(t,o),e.worldUpAtPosition(o,s),r(o,s)}return{points:o,normals:s}}}const u=(0,s.c)(),p=(0,s.c)(),_=(0,s.c)()},11208:(t,e,o)=>{o.d(e,{CM:()=>l,RS:()=>c,Rs:()=>d});var i=o(17842),s=o(88396),r=o(11186),n=o(71353),a=o(55946),h=o(74509);function l(t,e,o,i){o.projectToRenderScreen(t,_),o.projectToRenderScreen(e,x),(0,s.c)(i,x,_),(0,s.e)(i,i)}function c(t,e,o,i){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(0,n.c)();const a=(0,r.c)(p,t);return a[2]=(0,h.zx)(i,a,e,o)||0,i.renderCoordsHelper.toRenderCoords(a,e,s),s}function d(t,e,o,s){return"2d"===s.type?(u.x=t[0],u.y=t[1],u.spatialReference=e,s.toScreen(u)):(c(t,e,o,s,p),s.state.camera.projectToScreen(p,v),(0,i.vW)(v[0],v[1]))}const u=(0,a.T)(0,0,0,null),p=(0,n.c)(),_=(0,i.J$)(),x=(0,i.J$)(),v=(0,i.s1)()}}]);
//# sourceMappingURL=8168.7a2a60c2.chunk.js.map