/*! For license information please see 9322.ca999b95.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[9322],{29322:(e,t,i)=>{i.r(t),i.d(t,{CalciteDropdown:()=>o,defineCustomElement:()=>n});var s=i(89106);const o=s.D,n=s.d},89106:(e,t,i)=>{i.d(t,{D:()=>m,d:()=>u});var s=i(51554),o=i(92358),n=i(65394),a=i(14387),l=i(13160),r=i(19579),c=i(47242),d=i(72021),h=i(27871);const p="trigger",m=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownSelect=(0,s.yM)(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=(0,s.yM)(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=(0,s.yM)(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=(0,s.yM)(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=(0,s.yM)(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=(0,d.c)("mutation",(()=>this.updateItems())),this.resizeObserver=(0,d.c)("resize",(e=>this.resizeObserverCallback(e))),this.openTransitionProp="opacity",this.guid="calcite-dropdown-".concat((0,a.g)()),this.defaultAssignedElements=[],this.slotChangeHandler=e=>{this.defaultAssignedElements=e.target.assignedElements({flatten:!0}),this.updateItems()},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,n.f)(t,e):null},this.updateTriggers=e=>{this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map((e=>Array.from(null===e||void 0===e?void 0:e.querySelectorAll("calcite-dropdown-item")))).reduce(((e,t)=>[...e,...t]),[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach((e=>e.scale=this.scale))},this.updateGroups=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-dropdown-group")));this.groups=t,this.updateItems()},this.resizeObserverCallback=e=>{e.forEach((e=>{const{target:t}=e;t===this.referenceEl?this.setDropdownWidth():t===this.scrollerEl&&this.setMaxScrollerHeight()}))},this.setDropdownWidth=()=>{const{referenceEl:e,scrollerEl:t}=this,i=null===e||void 0===e?void 0:e.clientWidth;i&&t&&(t.style.minWidth="".concat(i,"px"))},this.setMaxScrollerHeight=()=>{const{scrollerEl:e}=this;if(!e)return;this.reposition(!0);const t=this.getMaxScrollerHeight();e.style.maxHeight=t>0?"".concat(t,"px"):"",this.reposition(!0)},this.setScrollerAndTransitionEl=e=>{this.resizeObserver.observe(e),this.scrollerEl=e,this.transitionEl=e},this.setReferenceEl=e=>{this.referenceEl=e,(0,n.c)(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(e)},this.setFloatingEl=e=>{this.floatingEl=e,(0,n.c)(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=e=>{if(!e.composedPath().includes(this.referenceEl))return;const{defaultPrevented:t,key:i}=e;if(!t){if(this.open){if("Escape"===i)return this.closeCalciteDropdown(),void e.preventDefault();if(e.shiftKey&&"Tab"===i)return this.closeCalciteDropdown(),void e.preventDefault()}(0,r.i)(i)?(this.openCalciteDropdown(),e.preventDefault()):"Escape"===i&&(this.closeCalciteDropdown(),e.preventDefault())}},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.items.find((e=>e.selected))||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=n.d,this.selectedItems=[],this.type="click",this.width=void 0,this.scale="m"}openHandler(e){if(!this.disabled)return e&&this.reposition(!0),void(0,h.o)(this);this.open=!1}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}async setFocus(){await(0,c.c)(this),this.el.focus()}connectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.reposition(!0),this.open&&(this.openHandler(this.open),(0,h.o)(this)),(0,l.c)(this),this.updateItems()}componentWillLoad(){(0,c.a)(this)}componentDidLoad(){(0,c.s)(this),this.reposition(!0)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){var e,t;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),null===(t=this.resizeObserver)||void 0===t||t.disconnect(),(0,l.d)(this),(0,n.a)(this,this.referenceEl,this.floatingEl)}render(){const{open:e,guid:t}=this;return(0,s.h)(s.AA,null,(0,s.h)("div",{class:"calcite-trigger-container",id:"".concat(t,"-menubutton"),onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},(0,s.h)("slot",{"aria-controls":"".concat(t,"-menu"),"aria-expanded":(0,o.t)(e),"aria-haspopup":"menu",name:p,onSlotchange:this.updateTriggers})),(0,s.h)("div",{"aria-hidden":(0,o.t)(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},(0,s.h)("div",{"aria-labelledby":"".concat(t,"-menubutton"),class:{"calcite-dropdown-content":!0,[n.F.animation]:!0,[n.F.animationActive]:e},id:"".concat(t,"-menu"),role:"menu",ref:this.setScrollerAndTransitionEl},(0,s.h)("slot",{onSlotchange:this.updateGroups}))))}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:o,filteredFlipPlacements:a}=this;return(0,n.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:s,flipPlacements:a,type:"menu"},e)}closeCalciteDropdownOnClick(e){!this.disabled&&(0,o.j)(e)&&this.open&&!e.composedPath().includes(this.el)&&this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||"hover"!==this.type||this.openCalciteDropdown()}pointerLeaveHandler(){this.disabled||"hover"!==this.type||this.closeCalciteDropdown()}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target;switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":(0,o.i)(this.items,i,"next");break;case"ArrowUp":(0,o.i)(this.items,i,"previous");break;case"Home":(0,o.i)(this.items,i,"first");break;case"End":(0,o.i)(this.items,i,"last")}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),this.closeOnSelectDisabled&&"none"!==e.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown(),e.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter((e=>e.selected))}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i,s=0,o=0;return this.groups.forEach((t=>{e>0&&s<e&&Array.from(t.children).forEach(((t,n)=>{0===n&&(isNaN(i)&&(i=t.offsetTop),o+=i),s<e&&(o+=t.offsetHeight,s+=1)}))})),t.length>e?o:0}closeCalciteDropdown(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.open=!1,e&&(0,o.k)(this.triggers[0])}getFocusableElement(e){if(!e)return;const t=e.attributes.isLink?e.shadowRoot.querySelector("a"):e;(0,o.k)(t)}updateTabIndexOfItems(e){this.items.forEach((t=>{t.tabIndex=e!==t?-1:0}))}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-dropdown",{open:[1540],closeOnSelectDisabled:[516,"close-on-select-disabled"],disabled:[516],flipPlacements:[16],maxItems:[514,"max-items"],overlayPositioning:[513,"overlay-positioning"],placement:[513],selectedItems:[1040],type:[513],width:[513],scale:[513],setFocus:[64],reposition:[64]},[[9,"pointerdown","closeCalciteDropdownOnClick"],[0,"calciteInternalDropdownCloseRequest","closeCalciteDropdownOnEvent"],[8,"calciteDropdownOpen","closeCalciteDropdownOnOpenEvent"],[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"],[0,"calciteInternalDropdownItemKeyEvent","calciteInternalDropdownItemKeyEvent"],[0,"calciteInternalDropdownItemSelect","handleItemSelect"]]]);function u(){if("undefined"===typeof customElements)return;["calcite-dropdown"].forEach((e=>{if("calcite-dropdown"===e)customElements.get(e)||customElements.define(e,m)}))}u()}}]);
//# sourceMappingURL=9322.ca999b95.chunk.js.map