"use strict";(self.webpackChunksc1_land=self.webpackChunksc1_land||[]).push([[3583],{43583:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var i=a(72791),r=a(28979),l=a(26101),s=a(18661),n=a(21149),o=a(36801),c=a(59181),u=a(66817),d=a(36061),h=a(70565),f=a(54797),m=a(27663),v=a(82308),g=a(80659),p=a(91934),y=a(44520),b=a(80184);const w=(0,i.memo)((e=>{let{municipal:t,barangay:a}=e;const w=(0,i.useRef)({}),x=(0,i.useRef)({}),A=(0,i.useRef)({}),[T,R]=(0,i.useState)([{category:String,value:Number,sliceSettings:{fill:u.$_("#00c5ff")}}]),S="structure-chart",[C,k]=(0,i.useState)([]),L="Municipality = '"+t+"'",j=L+" AND "+("Barangay = '"+a+"'");return r.UC.definitionExpression=t?t&&!a?L:j:"1=1",(0,i.useEffect)((()=>{(0,y.KD)().then((e=>{R(e)})),(0,y.fT)().then((e=>{k(e)}))}),[t,a]),(0,i.useEffect)((()=>{var e,t;t=S,o.S6(c.i_.rootElements,(function(e){e.dom.id===t&&e.dispose()}));var a=d.f.new(S);a.container.children.clear(),null===(e=a._logo)||void 0===e||e.dispose(),a.setThemes([g.Z.new(a),p.Z.new(a)]);var i=a.container.children.push(m.u.new(a,{y:h.aQ(-25),layout:a.horizontalLayout}));A.current=i;var b=i.series.push(v.f.new(a,{name:"Series",categoryField:"category",valueField:"value",legendValueText:"{valuePercentTotal.formatNumber('#.')}% ({value})",radius:h.aQ(45),innerRadius:h.aQ(20),marginBottom:-10}));w.current=b,i.series.push(b),b.slices.template.setAll({fillOpacity:.9,stroke:u.$_("#ffffff"),strokeWidth:1,strokeOpacity:1,templateField:"sliceSettings"}),b.labels.template.set("visible",!1),b.ticks.template.set("visible",!1),b.slices.template.events.on("click",(e=>{var t;const a=(null===(t=e.target.dataItem)||void 0===t?void 0:t.dataContext).category,i=y.Yz.find((e=>e.category===a)),o=null===i||void 0===i?void 0:i.value;var c,u=r.UC.createQuery();l.ei.when((function(){l.ei.whenLayerView(r.UC).then((e=>{r.UC.queryFeatures(u).then((function(t){const a=t.features.length;let i=[];for(var o=0;o<a;o++){var u=t.features[o].attributes.OBJECTID;i.push(u)}var d=new n.Z({objectIds:i});r.UC.queryExtent(d).then((function(e){e.extent&&l.ei.goTo(e.extent)})),c&&c.remove(),c=e.highlight(i),l.ei.on("click",(function(){e.filter=new s.Z({where:void 0}),c.remove()}))})),e.filter=new s.Z({where:"BasicPlan = "+o})}))}))})),b.data.setAll(T);var R=a.container.children.push(f.D.new(a,{centerX:h.aQ(50),x:h.aQ(50),y:h.aQ(48),layout:a.verticalLayout}));x.current=R,R.data.setAll(b.dataItems),R.markers.template.setAll({width:18,height:18}),R.markerRectangles.template.setAll({cornerRadiusTL:10,cornerRadiusTR:10,cornerRadiusBL:10,cornerRadiusBR:10}),i.onPrivate("width",(function(e){var t=Math.max(e-i.height()-190,190);R.labels.template.setAll({width:t,maxWidth:t})}));return R.labels.template.setAll({oversizedBehavior:"truncate",fill:u.$_("#ffffff")}),R.valueLabels.template.setAll({textAlign:"right",width:50,fill:u.$_("#ffffff")}),R.itemContainers.template.setAll({paddingTop:1.1,paddingBottom:2}),b.appear(1e3,100),()=>{a.dispose()}}),[S,T]),(0,i.useEffect)((()=>{var e,t;null===(e=w.current)||void 0===e||e.data.setAll(T),null===(t=x.current)||void 0===t||t.data.setAll(w.current.dataItems)})),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"lotNumberImage",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"totalStructuresLabel",children:"TOTAL STRUCTURES "}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsxs)("b",{className:"totalLotsNumber",children:[(0,y.oc)(C)," "]})]}),(0,b.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/House_Logo.svg",alt:"Structure Logo",height:"19%",width:"19%",style:{padding:"10px",margin:"auto"}})]}),(0,b.jsx)("div",{style:{color:"white",fontSize:"1.1rem",paddingLeft:"20px",marginTop:"15px"},children:"STRUCTURE BASIC PLAN"}),(0,b.jsx)("div",{id:S,style:{height:"45vh",backgroundColor:"rgb(0,0,0,0)",color:"white",marginBottom:"-1.5vh"}})]})}))}}]);
//# sourceMappingURL=3583.54d05da6.chunk.js.map