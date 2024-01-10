/*! For license information please see 4758.99d3d43d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[4758],{4758:(e,i,t)=>{t.r(i),t.d(i,{CalciteBlock:()=>R,defineCustomElement:()=>W});var a=t(51554),c=t(19432),n=t(92358),o=t(13160),l=t(46895),s=t(52655),r=t(8703),d=t(47242),h=t(27871),g=t(65138),u=t(49865),m=t(52846),p=t(57601),f=t(91438),b=t(2654),v=t(69874);const k="content",x="toggle",y="header",w="container",B="content",C="control-container",z="description",E="header",L="header-container",O="heading",H="icon",M="invalid",T="status-icon",_="title",j="toggle",q="toggle-icon",D="valid",S="icon",A="control",F="header-menu-actions",I={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},G=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockBeforeClose=(0,a.yM)(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=(0,a.yM)(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=(0,a.yM)(this,"calciteBlockClose",6),this.calciteBlockOpen=(0,a.yM)(this,"calciteBlockOpen",6),this.calciteBlockToggle=(0,a.yM)(this,"calciteBlockToggle",6),this.openTransitionProp="opacity",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.setTransitionEl=e=>{this.transitionEl=e},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){(0,h.o)(this)}onMessagesChange(){}async setFocus(){await(0,d.c)(this),(0,n.f)(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){(0,s.u)(this,this.effectiveLocale)}connectedCallback(){(0,c.c)(this),(0,o.c)(this),(0,l.c)(this),(0,s.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this),(0,s.d)(this),(0,c.d)(this)}async componentWillLoad(){await(0,s.s)(this),(0,d.a)(this),this.open&&(0,h.o)(this)}componentDidLoad(){(0,d.s)(this)}componentDidRender(){(0,o.u)(this)}renderScrim(){const{loading:e}=this,i=(0,a.h)("slot",null);return[e?(0,a.h)("calcite-scrim",{loading:e}):null,i]}renderIcon(){const{loading:e,messages:i,status:t}=this,c=!!(0,n.g)(this.el,S);return e?(0,a.h)("div",{class:H,key:"loader"},(0,a.h)("calcite-loader",{inline:!0,label:i.loading})):t?(0,a.h)("div",{class:H,key:"status-icon"},(0,a.h)("calcite-icon",{class:{[T]:!0,[D]:"valid"==t,[M]:"invalid"==t},icon:I[t],scale:"s"})):c?(0,a.h)("div",{class:H,key:"icon-slot"},(0,a.h)("slot",{key:"icon-slot",name:S})):null}renderTitle(){const{heading:e,headingLevel:i,description:t}=this;return e||t?(0,a.h)("div",{class:_},(0,a.h)(r.H,{class:O,level:i},e),t?(0,a.h)("div",{class:z},t):null):null}render(){const{collapsible:e,el:i,loading:t,open:c,messages:o}=this,l=c?o.collapse:o.expand,s=(0,a.h)("header",{class:E,id:y},this.renderIcon(),this.renderTitle()),r=!!(0,n.g)(i,A),d=!!(0,n.g)(i,F),h=c?I.opened:I.closed,g=(0,a.h)("div",{class:L},this.dragHandle?(0,a.h)("calcite-handle",null):null,e?(0,a.h)("button",{"aria-controls":k,"aria-describedby":y,"aria-expanded":e?(0,n.t)(c):null,class:j,id:x,onClick:this.onHeaderClick,title:l},s,(0,a.h)("calcite-icon",{"aria-hidden":"true",class:q,icon:h,scale:"s"})):s,r?(0,a.h)("div",{class:C},(0,a.h)("slot",{name:A})):null,d?(0,a.h)("calcite-action-menu",{label:o.options},(0,a.h)("slot",{name:F})):null);return(0,a.h)(a.AA,null,(0,a.h)("article",{"aria-busy":(0,n.t)(t),class:{[w]:!0}},g,(0,a.h)("section",{"aria-labelledby":x,class:B,hidden:!c,id:k,ref:this.setTransitionEl},this.renderScrim())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0.75rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],loading:[516],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function P(){if("undefined"===typeof customElements)return;["calcite-block","calcite-action","calcite-action-menu","calcite-handle","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-block":customElements.get(e)||customElements.define(e,G);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,u.d)();break;case"calcite-handle":customElements.get(e)||(0,m.d)();break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-loader":customElements.get(e)||(0,f.d)();break;case"calcite-popover":customElements.get(e)||(0,b.d)();break;case"calcite-scrim":customElements.get(e)||(0,v.d)()}}))}P();const R=G,W=P}}]);
//# sourceMappingURL=4758.99d3d43d.chunk.js.map