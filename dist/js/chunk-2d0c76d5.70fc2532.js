(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c76d5"],{5125:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"edit-student"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[t.pesan?s("div",{staticClass:"notification is-success is-light"},[s("button",{staticClass:"delete"}),t._v(" Data Berhasil diperbaharui! ")]):t._e(),s("form",{on:{submit:function(a){return a.preventDefault(),t.simpan(t.form)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],attrs:{type:"hidden"},domProps:{value:t.form.id},on:{input:function(a){a.target.composing||t.$set(t.form,"id",a.target.value)}}}),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"label",attrs:{for:""}},[t._v("NIS")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nis,expression:"form.nis"}],staticClass:"input is-primary",attrs:{type:"text",autofocus:"",placeholder:"misal: 11110044",required:"required"},domProps:{value:t.form.nis},on:{input:function(a){a.target.composing||t.$set(t.form,"nis",a.target.value)}}})])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"label",attrs:{for:""}},[t._v("NAMA")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nama,expression:"form.nama"}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"misal: Yuli"},domProps:{value:t.form.nama},on:{input:function(a){a.target.composing||t.$set(t.form,"nama",a.target.value)}}})])]),s("button",{staticClass:"button is-primary mr-3"},[t._v("Simpan")]),s("router-link",{staticClass:"button is-danger",attrs:{to:{name:"student"}}},[t._v("Kembali")])],1)])])])])},e=[],n=s("bc3a"),o=s.n(n),r={name:"Edit-Student",data:function(){return{form:{id:"",nis:"",nama:""},pesan:!1}},mounted:function(){this.tampilkan()},methods:{tampilkan:function(){var t=this;o()({method:"get",url:"http://localhost:3000/students/"+this.$route.params.id}).then((function(a){t.form=a.data}))},simpan:function(t){var a=this;o()({method:"put",url:"http://localhost:3000/students/"+t.id,data:this.form}).then((function(t){a.form=t.data,a.pesan=!0}))}}},l=r,u=s("2877"),m=Object(u["a"])(l,i,e,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c76d5.70fc2532.js.map