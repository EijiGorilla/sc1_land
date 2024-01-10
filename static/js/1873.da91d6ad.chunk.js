/*! For license information please see 1873.da91d6ad.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[1873],{61873:(e,t,n)=>{n.r(t),n.d(t,{CalciteDatePickerMonthHeader:()=>i,defineCustomElement:()=>r});var a=n(20856);const i=a.D,r=a.d},20856:(e,t,n)=>{n.d(t,{D:()=>y,d:()=>k});var a=n(51554),i=n(10883),r=n(92358),o=n(19579),s=n(46895),l=n(8703),c=n(64044),h=n(57601);const u="header",d="month",f="chevron",g="suffix",m="year--suffix",v="year-wrap",p="text--reverse",x="chevron-left",D="chevron-right",y=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDatePickerSelect=(0,a.yM)(this,"calciteInternalDatePickerSelect",6),this.onYearKey=e=>{const t=this.parseCalendarYear(e.target.value);switch(e.key){case"ArrowDown":e.preventDefault(),this.setYear({localizedYear:t,offset:-1});break;case"ArrowUp":e.preventDefault(),this.setYear({localizedYear:t,offset:1})}},this.onYearChange=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value)})},this.onYearInput=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value),commit:!1})},this.prevMonthClick=e=>{this.handleArrowClick(e,this.prevMonthDate)},this.prevMonthKeydown=e=>{(0,o.i)(e.key)&&this.prevMonthClick(e)},this.nextMonthClick=e=>{this.handleArrowClick(e,this.nextMonthDate)},this.nextMonthKeydown=e=>{(0,o.i)(e.key)&&this.nextMonthClick(e)},this.handleArrowClick=(e,t)=>{e.preventDefault(),this.calciteInternalDatePickerSelect.emit(t)},this.selectedDate=void 0,this.activeDate=void 0,this.headingLevel=void 0,this.min=void 0,this.max=void 0,this.scale=void 0,this.localeData=void 0,this.messages=void 0,this.nextMonthDate=void 0,this.prevMonthDate=void 0}componentWillLoad(){this.parentDatePickerEl=(0,r.c)(this.el,"calcite-date-picker")}connectedCallback(){this.setNextPrevMonthDates()}render(){return(0,a.h)("div",{class:u},this.renderContent())}renderContent(){var e;const{messages:t,localeData:n,activeDate:r}=this;if(!r||!n)return null;if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;s.n.numberFormatOptions={useGrouping:!1,...e&&{numberingSystem:e},...t&&{locale:t}}}const o=r.getMonth(),{months:h,unitOrder:u}=n,y=(h.wide||h.narrow||h.abbreviated)[o],k=this.formatCalendarYear(r.getFullYear()),b=(0,i.j)(u),M=b.indexOf("y")<b.indexOf("m"),w=null===(e=n.year)||void 0===e?void 0:e.suffix;return(0,a.h)(a.HY,null,(0,a.h)("a",{"aria-disabled":"".concat(this.prevMonthDate.getMonth()===o),"aria-label":t.prevMonth,class:f,href:"#",onClick:this.prevMonthClick,onKeyDown:this.prevMonthKeydown,role:"button",tabindex:this.prevMonthDate.getMonth()===o?-1:0},(0,a.h)("calcite-icon",{"flip-rtl":!0,icon:x,scale:(0,c.g)(this.scale)})),(0,a.h)("div",{class:{text:!0,[p]:M}},(0,a.h)(l.H,{class:d,level:this.headingLevel},y),(0,a.h)("span",{class:v},(0,a.h)("input",{"aria-label":t.year,class:{year:!0,[m]:!!w},inputmode:"numeric",maxlength:"4",minlength:"1",onChange:this.onYearChange,onInput:this.onYearInput,onKeyDown:this.onYearKey,pattern:"\\d*",type:"text",value:k,ref:e=>this.yearInput=e}),w&&(0,a.h)("span",{class:g},w))),(0,a.h)("a",{"aria-disabled":"".concat(this.nextMonthDate.getMonth()===o),"aria-label":t.nextMonth,class:f,href:"#",onClick:this.nextMonthClick,onKeyDown:this.nextMonthKeydown,role:"button",tabindex:this.nextMonthDate.getMonth()===o?-1:0},(0,a.h)("calcite-icon",{"flip-rtl":!0,icon:D,scale:(0,c.g)(this.scale)})))}setNextPrevMonthDates(){this.activeDate&&(this.nextMonthDate=(0,i.f)((0,i.n)(this.activeDate),this.min,this.max),this.prevMonthDate=(0,i.f)((0,i.p)(this.activeDate),this.min,this.max))}formatCalendarYear(e){return s.n.localize("".concat((0,i.k)(e,this.localeData)))}parseCalendarYear(e){return s.n.localize("".concat((0,i.l)(Number(s.n.delocalize(e)),this.localeData)))}getInRangeDate(e){let{localizedYear:t,offset:n=0}=e;const{min:a,max:r,activeDate:o}=this,l=Number(s.n.delocalize(t)),c=l.toString().length,h=!isNaN(l)&&l+n,u=h&&(!a||a.getFullYear()<=h)&&(!r||r.getFullYear()>=h);if(h&&u&&c===t.length){const e=new Date(o);return e.setFullYear(h),(0,i.f)(e,a,r)}}setYear(e){let{localizedYear:t,commit:n=!0,offset:a=0}=e;const{yearInput:i,activeDate:r}=this,o=this.getInRangeDate({localizedYear:t,offset:a});o&&this.calciteInternalDatePickerSelect.emit(o),n&&(i.value=this.formatCalendarYear((o||r).getFullYear()))}get el(){return this}static get watchers(){return{min:["setNextPrevMonthDates"],max:["setNextPrevMonthDates"],activeDate:["setNextPrevMonthDates"]}}static get style(){return":host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-inline:0.25rem;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.chevron:hover,.chevron:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-date-picker-month-header",{selectedDate:[16],activeDate:[16],headingLevel:[2,"heading-level"],min:[16],max:[16],scale:[513],localeData:[16],messages:[1040],nextMonthDate:[32],prevMonthDate:[32]}]);function k(){if("undefined"===typeof customElements)return;["calcite-date-picker-month-header","calcite-icon"].forEach((e=>{switch(e){case"calcite-date-picker-month-header":customElements.get(e)||customElements.define(e,y);break;case"calcite-icon":customElements.get(e)||(0,h.d)()}}))}k()},10883:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>s,c:()=>d,d:()=>f,e:()=>o,f:()=>r,g:()=>x,h:()=>g,i:()=>i,j:()=>p,k:()=>c,l:()=>l,n:()=>v,p:()=>m,s:()=>D});var a=n(46895);function i(e,t,n){if(!e)return;const a=e.getTime(),i=!(t instanceof Date)||a>=t.getTime(),r=!(n instanceof Date)||a<=n.getTime();return i&&r}function r(e,t,n){if(!(e instanceof Date))return null;const a=e.getTime(),i=t instanceof Date&&a<t.getTime(),r=n instanceof Date&&a>n.getTime();return i?t:r?n:e}function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e instanceof Date)return e;if(!e||"string"!==typeof e)return null;const n=e.split(/[: T-]/).map(parseFloat),a=new Date(n[0],(n[1]||1)-1,n[2]||1);if(a.setFullYear(n[0]),isNaN(a.getTime()))throw new Error('Invalid ISO 8601 date: "'.concat(e,'"'));return t?D(a):a}function s(e,t){if(!t)return null;const{separator:n}=t,a=function(e,t){const{day:n,month:a,year:i}=u(e,t);return{day:parseInt(n),month:parseInt(a)-1,year:parseInt(i)}}(e,t),{day:i,month:r}=a,o=l(a.year,t),s=new Date(o,r,i);s.setFullYear(o);const c=i>0,h=r>-1,d=!isNaN(s.getTime()),f=e.split(n).filter((e=>e)).length>2,g=o.toString().length>0;return c&&h&&d&&f&&g?s:null}function l(e,t){return h(e,t,"read")}function c(e,t){return h(e,t,"write")}function h(e,t,n){if("buddhist"!==t["default-calendar"])return e;return e+543*("read"===n?-1:1)}function u(e,t){const{separator:n,unitOrder:i}=t,r=p(i),o=e.split(n).map((e=>a.n.delocalize(e)));return{day:o[r.indexOf("d")],month:o[r.indexOf("m")],year:o[r.indexOf("y")]}}function d(e){return e instanceof Date?new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]:""}function f(e){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}function g(e,t){return e instanceof Date&&t instanceof Date&&e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function m(e){const t=e.getMonth(),n=new Date(e);return n.setMonth(t-1),t===n.getMonth()?new Date(e.getFullYear(),t,0):n}function v(e){const t=e.getMonth(),n=new Date(e);return n.setMonth(t+1),(t+2)%7===n.getMonth()%7?new Date(e.getFullYear(),t+2,0):n}function p(e){const t=e.toLowerCase();return["d","m","y"].sort(((e,n)=>t.indexOf(e)-t.indexOf(n)))}function x(e,t){return(e.getTime()-t.getTime())/864e5}function D(e){return e.setHours(23,59,59,999),e}}}]);
//# sourceMappingURL=1873.da91d6ad.chunk.js.map