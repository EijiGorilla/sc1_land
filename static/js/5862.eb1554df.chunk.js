/*! For license information please see 5862.eb1554df.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[5862],{15862:(e,i,t)=>{t.r(i),t.d(i,{CalciteComboboxItem:()=>o,defineCustomElement:()=>n});var c=t(53546);const o=c.C,n=c.d},53546:(e,i,t)=>{t.d(i,{C:()=>w,d:()=>C});var c=t(51554),o=t(19432),n=t(92358),l=t(14387),s=t(13160),a=t(96681),r=t(64044),d=t(57601);const b="icon",h="icon--active",m="icon--indent",u="icon--custom",p="icon--dot",g="label--single",v="label",f="label--active",x="label--selected",w=(0,c.GH)(class extends c.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteComboboxItemChange=(0,c.yM)(this,"calciteComboboxItemChange",6),this.itemClickHandler=()=>{this.toggleSelected()},this.disabled=!1,this.selected=!1,this.active=!1,this.ancestors=void 0,this.guid=(0,l.g)(),this.icon=void 0,this.iconFlipRtl=!1,this.textLabel=void 0,this.value=void 0,this.filterDisabled=void 0,this.selectionMode="multiple",this.scale="m"}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=(0,a.g)(this.el),(0,o.c)(this),(0,s.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,s.d)(this)}componentDidRender(){(0,s.u)(this)}toggleSelected(){const e="single-persist"===this.selectionMode;this.disabled||e&&this.selected||(this.selected=!this.selected)}renderIcon(e){return this.icon?(0,c.h)("calcite-icon",{class:{[u]:!!this.icon,[h]:this.icon&&this.selected,[m]:!0},flipRtl:this.iconFlipRtl,icon:this.icon||e,key:"icon",scale:(0,r.g)(this.scale)}):null}renderSelectIndicator(e,i){return e?(0,c.h)("span",{class:{[b]:!0,[p]:!0,[m]:!0}}):(0,c.h)("calcite-icon",{class:{[b]:!0,[h]:this.selected,[m]:!0},flipRtl:this.iconFlipRtl,icon:i,key:"indicator",scale:(0,r.g)(this.scale)})}renderChildren(){return(0,n.g)(this.el)?(0,c.h)("ul",{key:"default-slot-container"},(0,c.h)("slot",null)):null}render(){const e=(0,a.i)(this.selectionMode),i=e&&!this.disabled,t=e?"dot":"check",o=this.disabled?"":t,n={[v]:!0,[x]:this.selected,[f]:this.active,[g]:e},l=(0,a.a)(this.el);return(0,c.h)(c.AA,{"aria-hidden":"true"},(0,c.h)("div",{class:"container scale--".concat(this.scale),style:{"--calcite-combobox-item-spacing-indent-multiplier":"".concat(l)}},(0,c.h)("li",{class:n,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(i,o),this.renderIcon(o),(0,c.h)("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return this}static get watchers(){return{selected:["selectedWatchHandler"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:"\u2022"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}'}},[1,"calcite-combobox-item",{disabled:[516],selected:[1540],active:[516],ancestors:[1040],guid:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],textLabel:[513,"text-label"],value:[8],filterDisabled:[516,"filter-disabled"],selectionMode:[513,"selection-mode"],scale:[1]}]);function C(){if("undefined"===typeof customElements)return;["calcite-combobox-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-combobox-item":customElements.get(e)||customElements.define(e,w);break;case"calcite-icon":customElements.get(e)||(0,d.d)()}}))}C()},96681:(e,i,t)=>{t.d(i,{C:()=>a,a:()=>m,b:()=>s,c:()=>d,d:()=>b,e:()=>n,f:()=>l,g:()=>r,h:()=>h,i:()=>u});var c=t(92358),o=t(51554);const n="CALCITE-COMBOBOX-ITEM",l="CALCITE-COMBOBOX-ITEM-GROUP",s="".concat(n,", ").concat(l),a={chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container"};function r(e){var i,t;const c=null===(i=e.parentElement)||void 0===i?void 0:i.closest(s);return[c,null===c||void 0===c||null===(t=c.parentElement)||void 0===t?void 0:t.closest(s)].filter((e=>e))}function d(e){var i;return(null===(i=e.ancestors)||void 0===i?void 0:i.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName)))||[]}function b(e){return(0,c.o)(e.querySelectorAll("calcite-combobox-item"))}function h(e){return(0,c.o)(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function m(e){if(!o.Z5.isBrowser)return 0;return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function u(e){return e.includes("single")}}}]);
//# sourceMappingURL=5862.eb1554df.chunk.js.map