(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)a=s[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/flowchart-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"042d":function(e,t){e.exports={message:{start:"开始",end:"结束",new:"新建节点",pass:"通过",noApprover:"无审核人",etc:"等"}}},1892:function(e,t,n){var r=n("a794");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("6fd78ad0",r,!0,{sourceMap:!1,shadowMode:!1})},"23d8":function(e,t,n){"use strict";var r=n("cc57"),o=n.n(r);o.a},3900:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".modal{border:1px solid #d3d3d3;box-shadow:2px 2px 1px #d3d3d3;background-color:#fff;position:absolute;top:100px;left:0;right:0;margin-left:auto;margin-right:auto}.form-control{display:block;width:100%;height:30px;margin-bottom:10px}.footer{padding:10px;text-align:right}.footer>button{margin-left:10px}.body,.header{padding:10px}.header{border-bottom:1px solid #d3d3d3}",""])},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Flowchart Vue")]),n("h5",{staticClass:"subtitle"},[e._v("Flowchart & Flowchart designer component for Vue.js.")]),n("div",{attrs:{id:"toolbar"}},[n("button",{on:{click:function(t){return e.$refs.chart.add(10,10)}}},[e._v("Add(Double-click canvas)")]),n("button",{on:{click:function(t){return e.$refs.chart.remove()}}},[e._v("Delete(Del)")]),n("button",{on:{click:function(t){return e.$refs.chart.editCurrent()}}},[e._v("Edit(Double-click node)")]),n("button",{on:{click:function(t){return e.$refs.chart.save()}}},[e._v("Save")])]),n("flowchart",{ref:"chart",attrs:{nodes:e.nodes,connections:e.connections,width:"100%",height:500,readonly:!1},on:{editnode:e.handleEditNode,editconnection:e.handleEditConnection,save:e.handleChartSave}}),n("node-dialog",{attrs:{visible:e.nodeDialogVisible,node:e.nodeForm.target},on:{"update:visible":function(t){e.nodeDialogVisible=t},"update:node":function(t){return e.$set(e.nodeForm,"target",t)}}}),n("connection-dialog",{attrs:{visible:e.connectionDialogVisible,connection:e.connectionForm.target,operation:e.connectionForm.operation},on:{"update:visible":function(t){e.connectionDialogVisible=t},"update:connection":function(t){return e.$set(e.connectionForm,"target",t)}}})],1)},i=[],a=(n("96cf"),n("3b8d")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.visible?n("div",{staticClass:"modal",staticStyle:{width:"320px"}},[e._m(0),n("div",{staticClass:"body"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.connectionForm.name,expression:"connectionForm.name"}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.connectionForm.name},on:{input:function(t){t.target.composing||e.$set(e.connectionForm,"name",t.target.value)}}}),n("label",{attrs:{for:"type"}},[e._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.connectionForm.type,expression:"connectionForm.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.connectionForm,"type",t.target.multiple?n:n[0])}}},e._l([{name:"Pass",id:"pass"},{name:"Reject",id:"reject"}],function(t){return n("option",{key:"connection-type-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),n("div",{staticClass:"footer"},[n("button",{on:{click:e.handleClickCancelSaveConnection}},[e._v("Cancel")]),n("button",{on:{click:e.handleClickSaveConnection}},[e._v("Ok")])])]):e._e()])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",[e._v("Edit")])])}],u=(n("7f7f"),n("695b"),{props:{visible:{type:Boolean,default:!1},connection:{type:Object,default:null}},data:function(){return{connectionForm:{type:null,sourceId:null,sourcePosition:null,destinationId:null,destinationPosition:null,name:null,expression:null}}},methods:{handleClickSaveConnection:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("update:visible",!1),this.$emit("update:connection",Object.assign(this.connection,{name:this.connectionForm.name,type:this.connectionForm.type,expression:this.connectionForm.expression}));case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleClickCancelSaveConnection:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("update:visible",!1);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},watch:{connection:{immediate:!0,handler:function(e){e&&(this.connectionForm.id=e.id,this.connectionForm.type=e.type,this.connectionForm.name=e.name,this.connectionForm.expression=e.expression)}}}}),l=u,d=n("2877"),f=Object(d["a"])(l,s,c,!1,null,null,null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.visible?n("div",{staticClass:"modal",staticStyle:{width:"320px"}},[e._m(0),n("div",{staticClass:"body"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nodeForm.name,expression:"nodeForm.name"}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.nodeForm.name},on:{input:function(t){t.target.composing||e.$set(e.nodeForm,"name",t.target.value)}}}),n("label",{attrs:{for:"type"}},[e._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.nodeForm.type,expression:"nodeForm.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.nodeForm,"type",t.target.multiple?n:n[0])}}},e._l([{name:"Start",id:"start"},{name:"End",id:"end"},{name:"Operation",id:"operation"}],function(t){return n("option",{key:"node-type-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0),n("label",{attrs:{for:"approver"}},[e._v("Approver")]),n("select",{staticClass:"form-control",attrs:{id:"approver"},domProps:{value:e.nodeForm.approver.id},on:{change:function(t){return e.handleChangeApprover(t)}}},e._l(e.approvers,function(t){return n("option",{key:"approver-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),n("div",{staticClass:"footer"},[n("button",{on:{click:e.handleClickCancelSaveNode}},[e._v("Cancel")]),n("button",{on:{click:e.handleClickSaveNode}},[e._v("Ok")])])]):e._e()])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",[e._v("Edit")])])}],m={props:{visible:{type:Boolean,default:!1},node:{type:Object,default:null}},data:function(){return{nodeForm:{name:null,id:null,type:null,approver:[]},approvers:[{id:1,name:"Joyce"},{id:2,name:"Allen"},{id:3,name:"Teresa"}]}},methods:{handleClickSaveNode:function(){this.$emit("update:node",Object.assign(this.node,{name:this.nodeForm.name,type:this.nodeForm.type,approvers:[Object.assign({},this.nodeForm.approver)]})),this.$emit("update:visible",!1)},handleClickCancelSaveNode:function(){this.$emit("update:visible",!1)},handleChangeApprover:function(e){this.nodeForm.approver=this.approvers.filter(function(t){return t.id===parseInt(e.target.value)})[0]}},watch:{node:{immediate:!0,handler:function(e){e&&(this.nodeForm.id=e.id,this.nodeForm.name=e.name,this.nodeForm.type=e.type,this.nodeForm.approver=e.approvers[0])}}}},b=m,g=Object(d["a"])(b,h,v,!1,null,null,null),y=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{width:isNaN(e.width)?e.width:e.width+"px",height:isNaN(e.height)?e.height:e.height+"px",cursor:e.cursor},attrs:{id:"chart",tabindex:"0"},on:{mousemove:e.handleChartMouseMove,mouseup:e.handleChartMouseUp,dblclick:function(t){return e.handleChartDblClick(t)},mousewheel:e.handleChartMouseWheel,mousedown:function(t){return e.handleChartMouseDown(t)}}},[n("span",{staticClass:"unselectable",attrs:{id:"position"}},[e._v("\n        "+e._s(e.cursorToChartOffset.x+", "+e.cursorToChartOffset.y)+"\n    ")]),n("svg",{attrs:{id:"svg"}})])},k=[],C=n("7618"),w=(n("c7c6"),n("75fc")),N=(n("ac4d"),n("8a81"),n("ac6a"),n("84b4"),n("c5f6"),n("5698"));function O(e,t,n,r,o,i){var a=(r-t||1)/(n-e||1),s=t-a*e;return Math.abs(a*o-i+s)/Math.sqrt(a*a+1)}function _(e,t,n){return n>e&&n<t||n>t&&n<e}function F(e,t){return Math.abs(t-e)<=3}function T(e){var t=e.reduce(function(e,t){return t.x<e?t.x:e},1/0),n=e.reduce(function(e,t){return t.x>e?t.x:e},0),r=e.reduce(function(e,t){return t.y<e?t.y:e},1/0),o=e.reduce(function(e,t){return t.y>e?t.y:e},0);return{start:{x:t,y:r},end:{x:n,y:o}}}function S(e,t,n,r,o,i,a,s){var c=[t,n],u=[r,o],l=N["c"]().x(function(e){return e[0]}).y(function(e){return e[1]}),d=N["d"]("#"+e),f=d.append("path").attr("stroke",a).attr("stroke-width",i).attr("fill","none").attr("d",l([c,u]));return s&&f.style("stroke-dasharray",s.join(",")),f}function j(e,t,n,r,o,i,a,s,c,u){var l,d=[],f=[t,n],p=[r,o],h=f[0]+(p[0]-f[0])/2,v=f[1]+(p[1]-f[1])/2,m=function(){var e=[h,l[1]],t=[h,N[1]];d.push(e),d.push(t)},b=function(){var e=[l[0],v],t=[N[0],v];d.push(e),d.push(t)},g=function(){d.push([l[0],f[1]-50]),d.push([N[0],f[1]-50])},y=function(){d.push([l[0],f[1]+50]),d.push([N[0],f[1]+50])},x=function(){d.push([f[0]+80,l[1]]),d.push([f[0]+80,N[1]])},k=function(){d.push([f[0]-80,l[1]]),d.push([f[0]-80,N[1]])},C=function(){d.push([l[0],N[1]])},w=function(){d.push([N[0],l[1]])};switch(i){case"left":l=[f[0]-20,f[1]];break;case"top":l=[f[0],f[1]-20];break;case"bottom":l=[f[0],f[1]+20];break;default:l=[f[0]+20,f[1]];break}var N=null;switch(a){case"right":N=[p[0]+20,p[1]];break;case"top":N=[p[0],p[1]-20];break;case"bottom":N=[p[0],p[1]+20];break;default:N=[p[0]-20,p[1]];break}d.push(f),d.push(l),i=i||"right",a=a||"left";var O=M(t,n,r,o);switch(O.indexOf("r")>-1&&("right"!==i&&"left"!==a||(l[0]>h&&(l[0]=h),N[0]<h&&(N[0]=h))),O.indexOf("d")>-1&&("bottom"!==i&&"top"!==a||(l[1]>v&&(l[1]=v),N[1]<v&&(N[1]=v))),O.indexOf("l")>-1&&("left"!==i&&"right"!==a||(l[0]<h&&(l[0]=h),N[0]>h&&(N[0]=h))),O.indexOf("u")>-1&&("top"!==i&&"bottom"!==a||(l[1]<v&&(l[1]=v),N[1]>v&&(N[1]=v))),O){case"lu":if("right"===i)switch(a){case"top":case"right":C();break;default:b();break}else if("bottom"===i)switch(a){case"top":m();break;default:w();break}else if("top"===i)switch(a){case"top":case"right":C();break;default:b();break}else switch(a){case"top":case"right":m();break;default:w();break}break;case"u":if("right"===i)switch(a){case"right":break;case"top":C();break;default:b();break}else if("bottom"===i)switch(a){case"left":case"right":w();break;default:x();break}else if("top"===i)switch(a){case"left":w();break;case"right":b();break;case"top":x();break;default:break}else switch(a){case"left":case"right":break;default:d.push([l[0],N[1]]);break}break;case"ru":if("right"===i)switch(a){case"left":m();break;case"top":C();break;default:w();break}else if("bottom"===i)switch(a){case"top":m();break;default:w();break}else if("top"===i)switch(a){case"right":m();break;default:C();break}else switch(a){case"left":case"top":C();break;default:b();break}break;case"l":if("right"===i)switch(a){case"left":case"right":case"top":g();break;default:y();break}else if("bottom"===i)switch(a){case"left":y();break;case"right":C();break;case"top":m();break;default:break}else if("top"===i)switch(a){case"left":g();break;case"right":C();break;case"top":break;default:m();break}else switch(a){case"left":g();break;case"right":break;default:C();break}break;case"r":if("right"===i)switch(a){case"left":break;case"right":g();break;default:C();break}else if("bottom"===i)switch(a){case"left":C();break;case"right":y();break;case"top":m();break;default:break}else if("top"===i)switch(a){case"left":w();break;case"right":g();break;case"top":break;default:m();break}else switch(a){case"left":case"right":case"top":g();break;default:y();break}break;case"ld":if("right"===i)switch(a){case"left":b();break;default:C();break}else if("bottom"===i)switch(a){case"left":w();break;case"top":b();break;default:C();break}else if("top"===i)switch(a){case"left":case"right":case"top":w();break;default:m();break}else switch(a){case"left":case"top":w();break;case"right":m();break;default:C();break}break;case"d":if("right"===i)switch(a){case"left":b();break;case"right":w();break;case"top":C();break;default:x();break}else if("bottom"===i)switch(a){case"left":case"right":w();break;case"top":break;default:x();break}else if("top"===i)switch(a){case"left":k();break;default:x();break}else switch(a){case"left":break;case"right":b();break;case"top":C();break;default:k();break}break;case"rd":"right"===i&&"left"===a?m():"right"===i&&"bottom"===a?C():"right"===i&&"top"===a||"right"===i&&"right"===a?w():"bottom"===i&&"left"===a?C():"bottom"===i&&"right"===a?w():"bottom"===i&&"top"===a?b():"bottom"===i&&"bottom"===a?C():"top"===i&&"left"===a?w():"top"===i&&"right"===a?w():"top"===i&&"top"===a?w():"top"===i&&"bottom"===a?m():"left"===i&&"left"===a?C():"left"===i&&"right"===a?b():"left"===i&&"top"===a?b():"left"===i&&"bottom"===a&&C();break}d.push(N),d.push(p);for(var _=[],F=[],T=0;T<d.length;T++){var j=d[T],P=d[T+1];_.push({sourceX:j[0],sourceY:j[1],destinationX:P[0],destinationY:P[1]});var E=T===d.length-2;if(E&&u){var $=I(e,j[0],j[1],P[0],P[1],s,c);F.push($);break}var D=S(e,j[0],j[1],P[0],P[1],s,c);if(F.push(D),E)break}return{lines:_,paths:F}}function I(e,t,n,r,o,i,a){var s=S(e,t,n,r,o,i,a),c=N["d"]("#"+e),u="arrow"+a,l=document.getElementById(u);return l||c.append("marker").attr("id",u).attr("markerUnits","strokeWidth").attr("viewBox","0 0 12 12").attr("refX",9).attr("refY",6).attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill",a),s.attr("marker-end","url(#"+u+")"),s}function M(e,t,n,r){return n<e&&F(r,t)?"l":n>e&&F(r,t)?"r":F(n,e)&&r<t?"u":F(n,e)&&r>t?"d":n<e&&r<t?"lu":n>e&&r<t?"ru":n<e&&r>t?"ld":"rd"}var P=n("a925");r["a"].use(P["a"]);var E=new P["a"]({locale:"zh",messages:{en:n("86be"),zh:n("042d")}}),$={name:"flowchart",props:{nodes:{type:Array,default:function(){return[{id:1,x:140,y:270,name:E.t("message.start"),type:"start"},{id:2,x:540,y:270,name:E.t("message.end"),type:"end"}]}},connections:{type:Array,default:function(){return[{source:{id:1,position:"right"},destination:{id:2,position:"left"},id:1,type:"pass"}]}},width:{type:[String,Number],default:800},height:{type:[String,Number],default:600},locale:{type:String,default:"en"},readonly:{type:Boolean,default:!1}},data:function(){return{internalNodes:[],internalConnections:[],connectingInfo:{source:null,sourcePosition:null},selectionInfo:null,currentNodes:[],currentConnections:[],cursorToChartOffset:{x:0,y:0},clickedOnce:!1,lines:[]}},methods:{add:function(e,t){if(!this.readonly){var n=E.t("message.new");this.internalNodes.push({id:+new Date,x:e,y:t,name:n,type:"operation"})}},editCurrent:function(){1===this.currentNodes.length?this.editNode(this.currentNodes[0]):1===this.currentConnections.length&&this.editConnection(this.currentConnections[0])},editNode:function(e){this.readonly||this.$emit("editnode",e)},editConnection:function(e){this.readonly||this.$emit("editconnection",e)},handleChartMouseWheel:function(e){if(e.stopPropagation(),e.preventDefault(),e.ctrlKey){var t=document.getElementById("svg"),n=parseFloat(t.style.zoom||1);if(e.deltaY>0&&.1===n)return;n-=e.deltaY/100/10,t.style.zoom=n}},handleChartMouseUp:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.connectingInfo.source){e.next=6;break}return this.hoveredConnector&&this.connectingInfo.source.id!==this.hoveredConnector.node.id&&(t=+new Date,n={source:{id:this.connectingInfo.source.id,position:this.connectingInfo.sourcePosition},destination:{id:this.hoveredConnector.node.id,position:this.hoveredConnector.position},id:t,type:"pass",name:E.t("message.pass")},this.internalConnections.push(n)),e.next=4,this.refresh();case 4:this.connectingInfo.source=null,this.connectingInfo.sourcePosition=null;case 6:if(!this.selectionInfo){e.next=10;break}return this.selectionInfo=null,e.next=10,this.refresh();case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleChartMouseMove:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.currentTarget.getBoundingClientRect(),r=t.pageX-n.left-window.scrollX,this.cursorToChartOffset.x=Math.trunc(r),o=t.pageY-n.top-window.scrollY,this.cursorToChartOffset.y=Math.trunc(o),!this.connectingInfo.source){e.next=14;break}return e.next=8,this.refresh();case 8:N["e"]("#svg > .connector").classed("active",!0),i=this.getNodeConnectorOffset(this.connectingInfo.source.id,this.connectingInfo.sourcePosition),a=this.hoveredConnector?this.hoveredConnector.position:null,this.arrowTo(i.x,i.y,this.cursorToChartOffset.x,this.cursorToChartOffset.y,this.connectingInfo.sourcePosition,a),e.next=17;break;case 14:if(!this.selectionInfo){e.next=17;break}return e.next=17,this.refresh();case 17:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleChartDblClick:function(e){this.readonly||(this.add(e.offsetX,e.offsetY),this.refresh())},handleChartMouseDown:function(e){this.selectionInfo={x:e.offsetX,y:e.offsetY}},getConnectorPosition:function(e){var t={x:e.x+60,y:e.y},n={x:e.x,y:e.y+30},r={x:e.x+60,y:e.y+60},o={x:e.x+120,y:e.y+30};return{left:n,right:o,top:t,bottom:r}},refresh:function(){var e=this;return new Promise(function(t){e.$nextTick(function(){if(N["e"]("svg > *").remove(),e.selectionInfo){var n=T([{x:e.selectionInfo.x,y:e.selectionInfo.y},{x:e.cursorToChartOffset.x,y:e.cursorToChartOffset.y}]),r=N["d"]("#svg");r.append("rect").attr("x",n.start.x).attr("y",n.start.y).attr("width",n.end.x-n.start.x).attr("height",n.end.y-n.start.y).attr("stroke","black").attr("fill","transparent")}e.internalNodes.forEach(function(t){e.currentNodes.filter(function(e){return e===t}).length>0?e.renderNode(t,"#666666"):e.renderNode(t,"#bbbbbb")}),e.lines=[],e.internalConnections.forEach(function(t){var n=e.getNodeConnectorOffset(t.source.id,t.source.position),r=e.getNodeConnectorOffset(t.destination.id,t.destination.position),o={pass:"#52c41a",reject:"red"};e.currentConnections.filter(function(e){return e===t}).length>0&&(o={pass:"#12640a",reject:"darkred"});var i=e.arrowTo(n.x,n.y,r.x,r.y,t.source.position,t.destination.position,o[t.type]),a=!0,s=!1,c=void 0;try{for(var u,l=i.paths[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var d=u.value;d.on("click",function(){e.currentNodes.splice(0,e.currentNodes.length),e.currentConnections.splice(0,e.currentConnections.length),e.currentConnections.push(t),e.refresh()}),d.on("dblclick",function(){e.editConnection(t)})}}catch(g){s=!0,c=g}finally{try{a||null==l.return||l.return()}finally{if(s)throw c}}var f=!0,p=!1,h=void 0;try{for(var v,m=i.lines[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var b=v.value;e.lines.push({sourceX:b.sourceX,sourceY:b.sourceY,destinationX:b.destinationX,destinationY:b.destinationY,id:t.id})}}catch(g){p=!0,h=g}finally{try{f||null==m.return||m.return()}finally{if(p)throw h}}}),t()})})},getNodeConnectorOffset:function(e,t){var n=this.internalNodes.filter(function(t){return t.id===e})[0];return this.getConnectorPosition(n)[t]},lineTo:function(e,t,n,r,o){S("svg",e,t,n,r,1,"#a3a3a3",o)},arrowTo:function(e,t,n,r,o,i,a){return j("svg",e,t,n,r,o,i,1,a||"#a3a3a3",!0),j("svg",e,t,n,r,o,i,5,"transparent",!1)},renderNode:function(e,t){var n=this,r=N["d"]("#svg");"start"!==e.type&&"end"!==e.type&&(r.append("rect").attr("x",e.x).attr("y",e.y).attr("stroke",t).attr("class","title"),r.append("text").attr("x",e.x+4).attr("y",e.y+15).attr("class","unselectable").text(function(){return e.name}).each(function(){var e=N["d"](this),t=e.node().getComputedTextLength(),n=e.text();while(t>112&&n.length>0)n=n.slice(0,-1),e.text(n+"..."),t=e.node().getComputedTextLength()}));var o=r.append("rect").attr("class","body");"start"!==e.type&&"end"!==e.type?o.attr("x",e.x).attr("y",e.y+20):o.attr("x",e.x).attr("y",e.y).classed(e.type,!0).attr("rx",30),o.attr("stroke",t);var i,s="start"===e.type?E.t("message.start"):"end"===e.type?E.t("message.end"):e.approvers&&0!==e.approvers.length?e.approvers.length>1?"".concat(e.approvers[0].name+E.t("message.etc")):e.approvers[0].name:E.t("message.noApprover");i="start"!==e.type&&"end"!==e.type?e.y+45:e.y+35,r.append("text").attr("x",e.x+60).attr("y",i).attr("class","unselectable").attr("text-anchor","middle").text(function(){return s}).each(function(){var e=N["d"](this),t=e.node().getComputedTextLength(),n=e.text();while(t>112&&n.length>0)n=n.slice(0,-1),e.text(n+"..."),t=e.node().getComputedTextLength()});var c=N["a"]().on("start",function(){var t=0===n.currentNodes.filter(function(t){return t===e}).length;if(t&&(n.currentConnections.splice(0,n.currentConnections.length),n.currentNodes.splice(0,n.currentNodes.length),n.currentNodes.push(e)),n.clickedOnce)n.editNode(e);else{var r=setTimeout(function(){n.clickedOnce=!1,clearTimeout(r)},300);n.clickedOnce=!0}}).on("drag",Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,o,i,a,s,c,u,l,d,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n.readonly){e.next=2;break}return e.abrupt("return");case 2:for(t=parseFloat(document.getElementById("svg").style.zoom||1),r=!0,o=!1,i=void 0,e.prev=6,a=n.currentNodes[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)c=s.value,c.x+=N["b"].dx/t,c.y+=N["b"].dy/t;e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](6),o=!0,i=e.t0;case 14:e.prev=14,e.prev=15,r||null==a.return||a.return();case 17:if(e.prev=17,!o){e.next=20;break}throw i;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return e.next=24,n.refresh();case 24:u=n.getCurrentNodesEdge(),l=10*Math.round(Math.round(u.start.x)/10),d=10*Math.round(Math.round(u.start.y)/10),f=[5,3],n.internalNodes.forEach(function(e){0===n.currentNodes.filter(function(t){return t===e}).length&&(e.x===l&&(e.y<d?n.lineTo(e.x,e.y+60,l,d,f):n.lineTo(l,d+60,e.x,e.y,f)),e.y===d&&(e.x<l?n.lineTo(e.x+120,e.y,l,d,f):n.lineTo(l+120,d,e.x,e.y,f)))});case 29:case"end":return e.stop()}},e,null,[[6,10,14,22],[15,,17,21]])}))).on("end",function(){var e=!0,t=!1,r=void 0;try{for(var o,i=n.currentNodes[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;a.x=10*Math.round(Math.round(a.x)/10),a.y=10*Math.round(Math.round(a.y)/10)}}catch(s){t=!0,r=s}finally{try{e||null==i.return||i.return()}finally{if(t)throw r}}n.refresh()}),u=r.append("rect").attr("class","container").attr("x",e.x).attr("y",e.y);"start"!==e.type&&"end"!==e.type||u.attr("rx",30).classed(e.type,!0),u.attr("stroke",t).call(c),u.on("mousedown",function(){if(N["b"].ctrlKey){var t=0===n.currentNodes.filter(function(t){return t===e}).length;t?n.currentNodes.push(e):n.currentNodes.splice(n.currentNodes.indexOf(e),1)}});var l=[],d=this.getConnectorPosition(e),f=function(t){var o=d[t],i=r.append("circle").attr("cx",o.x).attr("cy",o.y).attr("r",4).attr("class","connector");i.on("mousedown",function(){N["b"].stopPropagation(),"end"===e.type||n.readonly||(n.connectingInfo.source=e,n.connectingInfo.sourcePosition=t)}).on("mouseup",function(){if(N["b"].stopPropagation(),n.connectingInfo.source){if(n.connectingInfo.source.id!==e.id){var r=+new Date,o={source:{id:n.connectingInfo.source.id,position:n.connectingInfo.sourcePosition},destination:{id:e.id,position:t},id:r,type:"pass",name:E.t("message.pass")};n.internalConnections.push(o),n.refresh()}n.connectingInfo.source=null,n.connectingInfo.sourcePosition=null}}).on("mouseover",function(){i.classed("active",!0)}).on("mouseout",function(){i.classed("active",!1)}),l.push(i)};for(var p in d)f(p);u.on("mouseover",function(){l.forEach(function(e){return e.classed("active",!0)})}).on("mouseout",function(){l.forEach(function(e){return e.classed("active",!1)})})},getCurrentNodesEdge:function(){var e=T(this.currentNodes);return e.x+=120,e.y+=60,e},save:function(){this.readonly||this.$emit("save",this.internalNodes,this.internalConnections)},remove:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o,i,a,s,c,u,l,d,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.readonly){e.next=2;break}return e.abrupt("return");case 2:if(!(this.currentNodes.length>0)){e.next=23;break}for(t=!0,n=!1,r=void 0,e.prev=6,o=this.currentNodes[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)a=i.value,this.removeNode(a);e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](6),n=!0,r=e.t0;case 14:e.prev=14,e.prev=15,t||null==o.return||o.return();case 17:if(e.prev=17,!n){e.next=20;break}throw r;case 20:return e.finish(17);case 21:return e.finish(14);case 22:this.currentNodes.splice(0,this.currentNodes.length);case 23:if(!(this.currentConnections.length>0)){e.next=44;break}for(s=!0,c=!1,u=void 0,e.prev=27,l=this.currentConnections[Symbol.iterator]();!(s=(d=l.next()).done);s=!0)f=d.value,this.removeConnection(f);e.next=35;break;case 31:e.prev=31,e.t1=e["catch"](27),c=!0,u=e.t1;case 35:e.prev=35,e.prev=36,s||null==l.return||l.return();case 38:if(e.prev=38,!c){e.next=41;break}throw u;case 41:return e.finish(38);case 42:return e.finish(35);case 43:this.currentConnections.splice(0,this.currentConnections.length);case 44:return e.next=46,this.refresh();case 46:case"end":return e.stop()}},e,this,[[6,10,14,22],[15,,17,21],[27,31,35,43],[36,,38,42]])}));function t(){return e.apply(this,arguments)}return t}(),removeNode:function(e){var t=this.internalConnections.filter(function(t){return t.source.id===e.id||t.destination.id===e.id}),n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;this.internalConnections.splice(this.internalConnections.indexOf(s),1)}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}this.internalNodes.splice(this.internalNodes.indexOf(e),1)},removeConnection:function(e){var t=this.internalConnections.indexOf(e);this.internalConnections.splice(t,1)},moveCurrentNode:function(e,t){if(this.currentNodes.length>0&&!this.readonly){var n=!0,r=!1,o=void 0;try{for(var i,a=this.currentNodes[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;s.x+=e,s.y+=t}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}}},mounted:function(){var e=this;e.internalNodes.splice(0,e.internalNodes.length),e.internalConnections.splice(0,e.internalConnections.length),e.nodes.forEach(function(t){e.internalNodes.push(JSON.parse(JSON.stringify(t)))}),e.connections.forEach(function(t){e.internalConnections.push(JSON.parse(JSON.stringify(t)))}),e.refresh(),document.onkeydown=function(t){switch(t.keyCode){case 37:e.moveCurrentNode(-10,0);break;case 38:e.moveCurrentNode(0,-10);break;case 39:e.moveCurrentNode(10,0);break;case 40:e.moveCurrentNode(0,10);break;case 27:e.currentNodes.splice(0,e.currentNodes.length),e.currentConnections.splice(0,e.currentConnection.length);break;case 65:var n,r;if(document.activeElement===document.getElementById("chart"))e.currentNodes.splice(0,e.currentNodes.length),e.currentConnections.splice(0,e.currentConnections.length),(n=e.currentNodes).push.apply(n,Object(w["a"])(e.internalNodes)),(r=e.currentConnections).push.apply(r,Object(w["a"])(e.internalConnections)),t.preventDefault();break;case 46:e.remove();break;default:break}e.refresh()}},created:function(){E.locale=this.locale},computed:{hoveredNode:function(){var e=this,t=this.internalNodes.filter(function(t){return t.x<=e.cursorToChartOffset.x&&t.x+120>=e.cursorToChartOffset.x&&t.y<=e.cursorToChartOffset.y&&t.y+60>=e.cursorToChartOffset.y});return t.length<=0?null:t[0]},hoveredConnector:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.internalNodes[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,a=this.getConnectorPosition(i);for(var s in a){var c=a[s];if(Math.hypot(c.x-this.cursorToChartOffset.x,c.y-this.cursorToChartOffset.y)<10)return{position:s,node:i}}}}catch(u){t=!0,n=u}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}return null},hoveredConnection:function(){var e=this,t=!0,n=!1,r=void 0;try{for(var o,i=function(){var t=o.value,n=O(t.sourceX,t.sourceY,t.destinationX,t.destinationY,e.cursorToChartOffset.x,e.cursorToChartOffset.y);if(n<5&&_(t.sourceX-2,t.destinationX+2,e.cursorToChartOffset.x)&&_(t.sourceY-2,t.destinationY+2,e.cursorToChartOffset.y)){var r=e.internalConnections.filter(function(e){return e.id===t.id});return{v:r.length>0?r[0]:null}}},a=this.lines[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var s=i();if("object"===Object(C["a"])(s))return s.v}}catch(c){n=!0,r=c}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null},cursor:function(){return this.connectingInfo.source||this.hoveredConnector?"crosshair":null!=this.hoveredConnection?"pointer":null}},watch:{internalNodes:{immediate:!0,deep:!0,handler:function(){this.refresh()}}},i18n:E},D=$,R=(n("a4cf"),Object(d["a"])(D,x,k,!1,null,null,null)),Y=R.exports,X={components:{ConnectionDialog:p,NodeDialog:y,Flowchart:Y},data:function(){return{nodes:[{id:1,x:50,y:220,name:"Start",type:"start"},{id:2,x:630,y:220,name:"End",type:"end"},{id:3,x:340,y:130,name:"Operation",type:"operation",approvers:[{id:1,name:"Joyce"}]},{id:4,x:240,y:220,name:"Operation",type:"operation",approvers:[{id:2,name:"Allen"}]},{id:5,x:440,y:220,name:"Operation",type:"operation",approvers:[{id:3,name:"Teresa"}]}],connections:[{source:{id:1,position:"right"},destination:{id:4,position:"left"},id:1,type:"pass"},{source:{id:4,position:"right"},destination:{id:5,position:"left"},id:2,type:"pass"},{source:{id:5,position:"right"},destination:{id:2,position:"left"},id:3,type:"pass"},{source:{id:5,position:"bottom"},destination:{id:4,position:"bottom"},id:4,type:"reject"},{source:{id:1,position:"top"},destination:{id:3,position:"left"},id:5,type:"pass"},{source:{id:3,position:"right"},destination:{id:2,position:"top"},id:6,type:"pass"}],nodeForm:{target:null},connectionForm:{target:null,operation:null},nodeDialogVisible:!1,connectionDialogVisible:!1}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{handleChartSave:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),handleEditNode:function(e){this.nodeForm.target=e,this.nodeDialogVisible=!0},handleEditConnection:function(e){this.connectionForm.target=e,this.connectionDialogVisible=!0}}},A=X,V=(n("23d8"),Object(d["a"])(A,o,i,!1,null,"000b3955",null)),z=V.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",mounted:function(){},components:{App:z}})},"695b":function(e,t,n){var r=n("3900");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("e65d5572",r,!0,{sourceMap:!1,shadowMode:!1})},"86be":function(e,t){e.exports={message:{start:"Start",end:"End",new:"New",pass:"Pass",noApprover:"No approver",etc:"..."}}},a4cf:function(e,t,n){"use strict";var r=n("1892"),o=n.n(r);o.a},a794:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#svg{background-size:20px 20px,20px 20px,10px 10px,10px 10px;background-image:linear-gradient(90deg,#dfdfdf 1px,transparent 0),linear-gradient(180deg,#dfdfdf 1px,transparent 0),linear-gradient(90deg,#f1f1f1 1px,transparent 0),linear-gradient(180deg,#f1f1f1 1px,transparent 0);background-position:left -1px top -1px,left -1px top -1px,left -1px top -1px,left -1px top -1px;height:100%;width:100%}#chart{position:relative;width:800px;height:600px;border:1px solid #dfdfdf}#position{position:absolute;right:4px}.unselectable{moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.connector{cursor:crosshair;fill:#fff;stroke:#bbb;stroke-width:1px;display:none}.connector.active{display:block}.connector:hover{stroke:red}#svg .title{height:20px;fill:#f1f3f4}#svg .body,#svg .title{width:120px;stroke-width:1px}#svg .body{height:40px;fill:#fff}#svg .body.end,#svg .body.start{height:60px}#svg .container{stroke-width:1px;cursor:move;fill:transparent;width:120px;height:60px}",""])},cc57:function(e,t,n){var r=n("fcd2");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("44833eb6",r,!0,{sourceMap:!1,shadowMode:!1})},fcd2:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#toolbar[data-v-000b3955]{margin-bottom:10px}.title[data-v-000b3955]{margin-top:10px;margin-bottom:0}.subtitle[data-v-000b3955]{margin-bottom:10px}#toolbar>button[data-v-000b3955]{margin-right:4px}.container[data-v-000b3955]{width:800px;margin:auto}",""])}});
//# sourceMappingURL=app.d7273847.js.map