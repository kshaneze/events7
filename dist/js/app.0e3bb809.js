(function(){"use strict";var t={3454:function(t,e,n){var o=n(9242),r=n(3396);const a={class:"container"};function l(t,e){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(n)])}var i=n(89);const s={},c=(0,i.Z)(s,[["render",l]]);var u=c,p=n(2483);function d(t,e,n,o,a,l){const i=(0,r.up)("EventCreate"),s=(0,r.up)("EventList");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(s)],64)}const f=(0,r._)("h1",{class:"text-center"},"Create Event",-1),m={class:"w-50 m-auto"},v={class:"form-group"},y=(0,r._)("label",{for:""},"Event Name",-1),_={class:"form-group"},b=(0,r._)("label",{for:""},"Description",-1),w={class:"form-group"},h=(0,r._)("label",{for:""},"Event type",-1),g={class:"form-group"},E=(0,r._)("label",{for:""},"Event priority",-1),x={class:"form-group"},S=(0,r._)("label",{for:""},"Related Events",-1),j=(0,r._)("button",{class:"btn btn-success mt-3"},"Create Event",-1);function O(t,e,n,a,l,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[f,(0,r._)("div",m,[(0,r._)("form",{action:"",onSubmit:e[5]||(e[5]=(0,o.iM)(((...t)=>a.onSubmit&&a.onSubmit(...t)),["prevent"]))},[(0,r._)("div",v,[y,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>a.form.name=t),class:"form-control"},null,512),[[o.nr,a.form.name]])]),(0,r._)("div",_,[b,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>a.form.description=t),class:"form-control"},null,512),[[o.nr,a.form.description]])]),(0,r._)("div",w,[h,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>a.form.type=t),class:"form-control"},null,512),[[o.nr,a.form.type]])]),(0,r._)("div",g,[E,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>a.form.priority=t),class:"form-control"},null,512),[[o.nr,a.form.priority]])]),(0,r._)("div",x,[S,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>a.form.relatedEvents=t),class:"form-control"},null,512),[[o.nr,a.form.relatedEvents]])]),j],32)])],64)}var U=n(6780),D=(n(410),n(4406),n(4275),n(4870));const V={apiKey:"AIzaSyC1hdayTdjxAxh-SNSao7cj0RBFHYvUIiU",authDomain:"events7-64aad.firebaseapp.com",databaseURL:"https://events7-64aad-default-rtdb.europe-west1.firebasedatabase.app",projectId:"events7-64aad",storageBucket:"events7-64aad.appspot.com",messagingSenderId:"5360722048",appId:"1:5360722048:web:6f693fcf6d2dbfee7c4665",measurementId:"G-L9VS030902"},k=U.Z.initializeApp(V),C=k.firestore(),z=C.collection("events"),H=t=>z.add(t),I=async t=>{const e=await z.doc(t).get();return e.exists?e.data():null},P=(t,e)=>z.doc(t).update(e),T=t=>z.doc(t).delete(),Z=()=>{const t=(0,D.iH)([]),e=z.onSnapshot((e=>{t.value=e.docs.map((t=>({id:t.id,...t.data()})))}));return(0,r.Ah)(e),t};var A={setup(){const t=(0,D.qj)({name:"",description:"",type:"",priority:"",relatedEvents:""}),e=async()=>{await H({...t}),t.name="",t.description="",t.type="",t.priority="",t.relatedEvents=""};return{form:t,onSubmit:e}}};const M=(0,i.Z)(A,[["render",O]]);var R=M,L=n(7139);const N={class:"card mt-4"},W={class:"table m-0"},Y=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"Name"),(0,r._)("th",{scope:"col"},"Id"),(0,r._)("th",{scope:"col"},"Description"),(0,r._)("th",{scope:"col"},"Type"),(0,r._)("th",{scope:"col"},"Priority"),(0,r._)("th",{scope:"col"},"RelatedEvents"),(0,r._)("th",{scope:"col"},"Action")])],-1),F=(0,r._)("button",{class:"btn btn-primary btn-sm me-2"},"Edit",-1),q=["onClick"];function B(t,e,n,o,a,l){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("table",W,[Y,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.events,(({id:t,name:e,description:n,type:a,priority:l,relatedEvents:s})=>((0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("td",null,(0,L.zw)(e),1),(0,r._)("td",null,(0,L.zw)(t),1),(0,r._)("td",null,(0,L.zw)(n),1),(0,r._)("td",null,(0,L.zw)(a),1),(0,r._)("td",null,(0,L.zw)(l),1),(0,r._)("td",null,(0,L.zw)(s),1),(0,r._)("td",null,[(0,r.Wm)(i,{to:`/edit/${t}`},{default:(0,r.w5)((()=>[F])),_:2},1032,["to"]),(0,r._)("button",{class:"btn btn-danger btn-sm",onClick:e=>o.deleteEvent(t)}," Delete ",8,q)])])))),128))])])])}var K={setup(){const t=Z();return{events:t,deleteEvent:T}}};const G=(0,i.Z)(K,[["render",B]]);var $=G,J={name:"Home",components:{EventCreate:R,EventList:$}};const Q=(0,i.Z)(J,[["render",d]]);var X=Q;const tt={class:"card card-body mt-4 w-50 m-auto"},et=(0,r._)("h3",null,"Edit event",-1),nt={class:"form-group"},ot=(0,r._)("label",{for:""},"Event Name",-1),rt={class:"form-group"},at=(0,r._)("label",{for:""},"Description",-1),lt={class:"form-group"},it=(0,r._)("label",{for:""},"Event type",-1),st={class:"form-group"},ct=(0,r._)("label",{for:""},"Event priority",-1),ut={class:"form-group"},pt=(0,r._)("label",{for:""},"Related Events",-1),dt=(0,r._)("button",{class:"btn btn-success mt-3"},"Update Event",-1);function ft(t,e,n,a,l,i){return(0,r.wg)(),(0,r.iD)("div",tt,[et,(0,r._)("form",{onSubmit:e[5]||(e[5]=(0,o.iM)(((...t)=>a.update&&a.update(...t)),["prevent"]))},[(0,r._)("div",nt,[ot,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>a.form.name=t),class:"form-control"},null,512),[[o.nr,a.form.name]])]),(0,r._)("div",rt,[at,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>a.form.description=t),class:"form-control"},null,512),[[o.nr,a.form.description]])]),(0,r._)("div",lt,[it,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>a.form.type=t),class:"form-control"},null,512),[[o.nr,a.form.type]])]),(0,r._)("div",st,[ct,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>a.form.priority=t),class:"form-control"},null,512),[[o.nr,a.form.priority]])]),(0,r._)("div",ut,[pt,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>a.form.relatedEvents=t),class:"form-control"},null,512),[[o.nr,a.form.relatedEvents]])]),dt],32)])}var mt={setup(){const t=(0,p.tv)(),e=(0,p.yj)(),n=(0,r.Fl)((()=>e.params.id)),o=(0,D.qj)({name:"",description:"",type:"",priority:"",relatedEvents:""});(0,r.bv)((async()=>{const t=await I(n.value);o.name=t.name,o.description=t.description,o.type=t.type,o.priority=t.priority,o.relatedEvents=t.relatedEvents}));const a=async()=>{await P(n.value,{...o}),t.push("/"),o.name="",o.description="",o.type="",o.priority="",o.relatedEvents=""};return{form:o,update:a}}};const vt=(0,i.Z)(mt,[["render",ft]]);var yt=vt;const _t=[{path:"/",name:"Home",component:X},{path:"/edit/:id",name:"Edit",component:yt}],bt=(0,p.p7)({history:(0,p.PO)(),routes:_t});var wt=bt;(0,o.ri)(u).use(wt).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var l=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],a=t[u][2];for(var i=!0,s=0;s<o.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(i=!1,a<l&&(l=a));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,l=o[0],i=o[1],s=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(e&&e(o);c<l.length;c++)a=l[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkevents7"]=self["webpackChunkevents7"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3454)}));o=n.O(o)})();
//# sourceMappingURL=app.0e3bb809.js.map