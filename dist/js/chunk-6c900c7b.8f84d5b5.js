(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c900c7b"],{"4ccc":function(t,s,e){t.exports=e.p+"img/caret-right-fill.bdf6b542.svg"},"9bdf":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container mt-3"},[a("small",{staticClass:"text-muted"},[t._v(t._s(t.$options.__file))]),a("h1",{staticClass:"text-primary font-weight-bold"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e("fae0"),alt:"caret icon",width:"30",height:"30"}})]),t._v(" Contatti ")],1),t._l(t.contacts,(function(s){return a("router-link",{key:s.id,staticClass:"text-decoration-none",attrs:{to:"/store/"+s.store_id+"/contact/"+s.id}},[a("Card",{attrs:{title:s.name||s.request,caption:s.mtime,icon:t.publicPath+"icons/person.svg"}})],1)})),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.contacts.length,expression:"contacts.length == 0"}],staticClass:"alert-secondary p-2 mt-5"},[t._v("Non ci sono contatti")]),a("button",{staticClass:"btn btn-primary btn-lg float-right m-5",attrs:{type:"button",disabled:""}},[t._v("Aggiungi contatto (TODO)")])],2)},c=[],n=e("ae8d"),i={components:{Card:n["a"]},data(){return{publicPath:"/",contacts:[]}},methods:{async fetchStores(){const t=await fetch("/api/stores",{mode:"no-cors",headers:{accept:"application/json"}});return t.json()},async fetchContacts(t){const s=await fetch("/api/stores/"+t+"/contacts",{mode:"no-cors",headers:{accept:"application/json"}});return s.json()}},mounted(){let t=this;this.fetchStores().then(s=>{s.stores.forEach((function(s){console.log("looking at ",s.id),t.fetchContacts(s.id).then(s=>{s.contacts.forEach(s=>{console.log("pushing ",s.request),t.contacts.push(s)})})}))})}},o=i,r=e("2877"),l=Object(r["a"])(o,a,c,!1,null,null,null);s["default"]=l.exports},ae8d:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card text-white bg-primary mt-3 mb-3"},[e("small",{staticClass:"text-muted",staticStyle:{float:"right"}},[t._v(t._s(t.$options.__file))]),e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-1 d-flex justify-content-center align-content-center"},[e("div",{staticClass:"align-self-top mt-3"},[e("img",{attrs:{src:t.icon,alt:t.title.toLowerCase()+" icon",width:"30",height:"30"}})])]),e("div",{staticClass:"col-10"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title font-weight-bold"},[t._v(t._s(t.title))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.caption))]),t._t("default")],2)]),t._m(0)])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-1 d-flex justify-content-center align-content-center"},[a("div",{staticClass:"align-self-center"},[a("img",{attrs:{src:e("4ccc"),alt:"caret icon",width:"30",height:"30"}})])])}],n={props:{icon:String,title:String,caption:String},data(){return{}}},i=n,o=e("2877"),r=Object(o["a"])(i,a,c,!1,null,null,null);s["a"]=r.exports},fae0:function(t,s,e){t.exports=e.p+"img/caret-left-fill.3ad7935d.svg"}}]);
//# sourceMappingURL=chunk-6c900c7b.8f84d5b5.js.map