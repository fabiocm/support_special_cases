webpackJsonp([1],{"+tp0":function(t,e){},"6+DU":function(t,e){},"6rBu":function(t,e,a){t.exports=a.p+"static/img/docs_generated.dc34917.png"},"95XS":function(t,e,a){t.exports=a.p+"static/img/ronaldo_rivero.a1fa9bb.jpg"},B6zc:function(t,e,a){t.exports=a.p+"static/img/jhafeth_cadima.f0bae6a.jpg"},FODR:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};a.d(s,"getCareers",function(){return nt}),a.d(s,"generateDocumentation",function(){return ot}),a.d(s,"setTemplate",function(){return ct}),a.d(s,"resetApp",function(){return lt});var r={};a.d(r,"setCareers",function(){return ut}),a.d(r,"setProcessSummary",function(){return dt}),a.d(r,"setTemplate",function(){return pt}),a.d(r,"resetApp",function(){return mt});var i=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("the-navbar"),this._v(" "),e("main",{staticClass:"container mt-1"},[e("router-view")],1),this._v(" "),e("the-footer")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},n,!1,function(t){a("aOA/")},null,null).exports,c=a("/ocq"),l=a("NYxO"),u={computed:Object(l.d)(["studentData","studentCareerData","careersData","template"]),methods:Object(l.b)(["getCareers"]),created:function(){this.getCareers()}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",["student_detail"===this.template?[e("transition",[null!=this.careersData?[e("student-detail")]:[e("loading-indicator")]],2)]:"classes_selector"===this.template?[e("classes-selector")]:"groups_selector"===this.template?[e("groups-selector")]:"sending_special_case_data"===this.template?[e("loading-indicator")]:[e("process-summary")]],2)},staticRenderFns:[]};var p=a("VU/8")(u,d,!1,function(t){a("zZG/")},null,null).exports,m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("article",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 order-md-1"},[a("h1",[t._v("Support Ficct generador de documentos para casos especiales")]),t._v(" "),a("p",{staticClass:"lead"},[t._v("\n        Esta herramienta te permite introducir tus datos básicos como estudiante, seleccionar tus materias\n        aprobadas, inscritas y las que deseas hacer como caso especial, elegir los grupos para tus materias de caso\n        especial y generar toda la documentación para tu trámite\n      ")]),t._v(" "),a("div",{staticClass:"d-flex flex-column flex-md-row"},[a("a",{staticClass:"btn btn-lg btn-outline-primary mb-3",attrs:{href:"#"}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Iniciar")])],1)]),t._v(" "),a("p",{staticClass:"text-muted mb-0"},[t._v("\n        Actualmente v1.0\n      ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 order-md-2 text-center"},[e("img",{staticClass:"img-logo",attrs:{src:a("NwEc"),alt:"SupportFicct"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"row mt-5 align-items-center"},[e("div",{staticClass:"col-md-5"},[e("h2",[this._v("Datos estudiantiles")]),this._v(" "),e("p",{staticClass:"lead font-weight-normal"},[this._v("Genera tus documentos con los datos de tu universidad")])]),this._v(" "),e("div",{staticClass:"col-md-7"},[e("img",{staticClass:"description-img",attrs:{src:a("maXW"),alt:"Student details"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"row mt-5 align-items-center"},[e("div",{staticClass:"col-md-7"},[e("img",{staticClass:"description-img",attrs:{src:a("q7jD"),alt:"Classes Selector"}})]),this._v(" "),e("div",{staticClass:"col-md-5"},[e("h2",[this._v("Selector de materias")]),this._v(" "),e("p",{staticClass:"lead font-weight-normal"},[this._v("\n        Selecciona tus materias aprobadas, tus materias inscritas en la presente gestión y las materias que\n        quieres realizar como caso especial.\n      ")]),this._v(" "),e("p",[this._v("Cada tipo de materia (Aprobada,Inscrita,Caso especial) puede seleccionarse con un color diferente")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"row mt-5 align-items-center"},[e("div",{staticClass:"col-md-5"},[e("h2",[this._v("Selector de grupos")]),this._v(" "),e("p",{staticClass:"lear font-weight-normal"},[this._v("\n        Ingresa los grupos de las materias que quieres hacer como caso especial.\n      ")])]),this._v(" "),e("div",{staticClass:"col-md-7"},[e("img",{staticClass:"description-img",attrs:{src:a("xL8r"),alt:"Groups Selector"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"row mt-5 align-items-center"},[e("div",{staticClass:"col-md-7"},[e("img",{staticClass:"description-img",attrs:{src:a("6rBu"),alt:"Docs Generated"}})]),this._v(" "),e("div",{staticClass:"col-md-5"},[e("h2",[this._v("Documentos en PDF")]),this._v(" "),e("p",{staticClass:"lear font-weight-normal"},[this._v("\n        Obtén un archivo .zip con todos los documentos en formato PDF para que puedas seguir con tus\n        trámites de caso especial.\n      ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"row mt-5 justify-content-center"},[s("h2",{staticClass:"text-center",staticStyle:{width:"100%"}},[t._v("\n      Desarrollado por el equipo Support\n    ")]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch mt-4"},[s("div",{staticClass:"shadow card h-100",staticStyle:{width:"18rem",margin:"0 auto"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("yLoM"),alt:"Paul Grimaldo"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Paul Grimaldo")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n            El verdadero progreso es el que pone la tecnología al alcance de todos\n          ")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch mt-4"},[s("div",{staticClass:"shadow card h-100",staticStyle:{width:"18rem",margin:"0 auto"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("95XS"),alt:"Ronaldo Rivero"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Ronaldo Rivero")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n            Dispuesto a ayudar a los compañeros de la FICCT\n          ")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch mt-4"},[s("div",{staticClass:"shadow card h-100",staticStyle:{width:"18rem",margin:"0 auto"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("B6zc"),alt:"Jhafeth Cadima"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Jhafeth Cadima")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n            Estudia y venceras, amigo de todos y bailarín de la FICCT\n          ")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch mt-4"},[s("div",{staticClass:"shadow card h-100",staticStyle:{width:"18rem",margin:"0 auto"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("Xndh"),alt:"Equipo Support"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Equipo support")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n            1000+ integrantes\n          ")])])])])])}]};var v=a("VU/8")({},m,!1,function(t){a("yQvM")},"data-v-277624d0",null).exports;i.a.use(c.a);var f=new c.a({mode:"history",routes:[{path:"/",name:"SpecialCaseContainer",component:p},{path:"/acerca-de",name:"AboutTheApp",component:v}]}),C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light static-top"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Inicio")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/acerca-de"}},[t._v("Acerca de")])],1),t._v(" "),t._m(2)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("img",{attrs:{src:a("VR5q"),width:"48px",height:"48px",alt:"Support Ficct"}}),this._v("\n        Support Ficct\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"mailto:paulgrimaldobravo@gmail.com?subject=Acerca de SupportFicct!",target:"_blank"}},[this._v("\n              Contacto\n            ")])])}]};var _=a("VU/8")({},C,!1,function(t){a("fdNp")},null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer bg-dark"},[s("div",{staticClass:"container text-white"},[s("div",{staticClass:"row justify-content-md-center"},[s("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[s("h5",{staticClass:"text-center"},[t._v("Acerca de Support Ficct\n          "),s("img",{attrs:{src:a("VR5q"),alt:"SupportFicct",width:"32px",height:"32px"}})]),t._v(" "),s("p",[t._v("\n          Grupo de apoyo a los estudiantes, buscando un cambio innovador y promoviendo el desarrollo y crecimiento de\n          la F.I.C.C.T\n        ")])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[s("h5",{staticClass:"text-center"},[t._v("Enlaces útiles")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/"}},[t._v("Inicio")])]),t._v(" "),s("li",[s("a",{attrs:{href:"/acerca-de"}},[t._v("Acerca de")])]),t._v(" "),s("li",[s("a",{attrs:{target:"_blank",href:"http://supportficct.somee.com/"}},[t._v("Página oficial")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[s("h5",{staticClass:"text-center"},[t._v("Contacto")]),t._v(" "),s("ul",[s("li",[s("i",{staticClass:"fas fa-map-marker-alt",staticStyle:{color:"red"}}),t._v("\n            U.A.G.R.M Módulo 236\n          ")]),t._v(" "),s("li",[s("a",{attrs:{href:"tel:+59169000850"}},[s("i",{staticClass:"fas fa-mobile-alt"}),t._v(" (+591) 690-008-50\n            ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"mailto:paulgrimaldobravo@gmail.com?subject=Acerca de SupportFicct!"}},[s("i",{staticClass:"far fa-envelope"}),t._v("\n              paulgrimaldobravo@gmail.com\n            ")])]),t._v(" "),s("li",{staticClass:"text-center"},[s("a",{attrs:{href:"https://www.facebook.com/supportUAGRM",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),s("a",{staticClass:"ml-2",attrs:{href:"https://api.whatsapp.com/send?phone=59169000850",target:"_blank"}},[s("i",{staticClass:"fab fa-whatsapp"})])])])])])])])}]};var g=a("VU/8")({},h,!1,function(t){a("ihkt")},"data-v-77cfde5b",null).exports,y={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},staticRenderFns:[]};var b=a("VU/8")({},y,!1,function(t){a("OS7g")},"data-v-08dd226b",null).exports,S=a("Dd8w"),w=a.n(S),x={data:function(){return{disableEditCareerDirector:!0,showToastError:!1}},computed:w()({},Object(l.d)("student",["student","careerData"]),Object(l.c)("student",{careers:"getCareers"})),methods:w()({},Object(l.b)("student",["setInitialCareer","setSelectedCareer","confirmStudentDetails"]),{onClickEditCareerDirector:function(){this.disableEditCareerDirector=!this.disableEditCareerDirector},onConfirmStudentDetails:function(){var t=null!==this.student.name&&""!==this.student.name.trim(),e=null!==this.student.code&&""!==this.student.code.trim(),a=null!==this.student.dni&&""!==this.student.dni.trim(),s=null!==this.student.phone&&""!==this.student.phone.trim();t&&e&&a&&s?this.confirmStudentDetails():this.showStudentDetailsError()},showStudentDetailsError:function(){this.showToastError=!0,setTimeout(function(){return $("#student-detail-error").toast("show")},0)}}),beforeMount:function(){this.setInitialCareer(),$('[data-toggle="tooltip"]').tooltip(),$(".toast").toast()}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"row justify-content-center"},[t._m(0),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 shadow-lg p-3 m-3 bg-white rounded"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Nombres y apellidos")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.student.name,expression:"student.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",placeholder:"p. ej. Paul Fernando Grimaldo Bravo"},domProps:{value:t.student.name},on:{input:function(e){e.target.composing||t.$set(t.student,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"code"}},[t._v("Registro Universitario")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.student.code,expression:"student.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",name:"code",placeholder:"p. ej. 214040801"},domProps:{value:t.student.code},on:{input:function(e){e.target.composing||t.$set(t.student,"code",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"ci"}},[t._v("Carnet de identidad")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.student.dni,expression:"student.dni"}],staticClass:"form-control",attrs:{type:"text",id:"ci",name:"ci",placeholder:"p. ej. 9796898"},domProps:{value:t.student.dni},on:{input:function(e){e.target.composing||t.$set(t.student,"dni",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone_number"}},[t._v("Número de celular")]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.student.phone,expression:"student.phone"}],staticClass:"form-control",attrs:{type:"tel",id:"phone_number",name:"phone_number",placeholder:"p. ej. 69000850"},domProps:{value:t.student.phone},on:{input:function(e){e.target.composing||t.$set(t.student,"phone",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"career"}},[t._v("Carrera")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.careerData.key,expression:"careerData.key"}],staticClass:"form-control",attrs:{id:"career",required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.careerData,"key",e.target.multiple?a:a[0])},function(e){return t.setSelectedCareer(e.target.value)}]}},t._l(t.careers,function(e){return a("option",{key:e.key,domProps:{value:e.key}},[t._v(t._s(e.name))])}),0)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"career_director"}},[t._v("Director de carrera")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10 col-md-10 col-sm-10 col-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.careerData.director,expression:"careerData.director"}],staticClass:"form-control",attrs:{disabled:t.disableEditCareerDirector,type:"text",id:"career_director",name:"career_director",placeholder:"Ing. Katime Esther Gutierrez Bruno"},domProps:{value:t.careerData.director},on:{input:function(e){e.target.composing||t.$set(t.careerData,"director",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-2 col-md-2 col-sm-2 col-2"},[a("button",{staticClass:"btn",attrs:{id:"btnEditCareerDirector","data-toggle":"tooltip","data-placement":"top",title:"Editar director de carrera"},on:{click:t.onClickEditCareerDirector}},[a("i",{staticClass:"fas fa-edit"})])])])]),t._v(" "),a("app-button",{staticStyle:{float:"right"},on:{click:t.onConfirmStudentDetails}},[t._v("\n      Siguiente\n      "),a("i",{staticClass:"fas fa-arrow-right"})])],1),t._v(" "),a("toast-message",{attrs:{id:"student-detail-error",content:"Rellene los campos con sus datos para continuar"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12 text-center"},[e("h1",[this._v("Datos del estudiante")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[this._v("+591")])])}]};var T=a("VU/8")(x,D,!1,function(t){a("6+DU")},null,null).exports,E=a("W3Iv"),k=a.n(E),R={data:function(){return{showToastError:!1,classesCardStyles:{none:{backgroundColor:"#ffffff",color:"#000000"},approved:{backgroundColor:"#008000",color:"#ffffff"},registered:{backgroundColor:"#fcba03",color:"#000000"},special_case:{backgroundColor:"#008080",color:"#ffffff"}}}},computed:w()({},Object(l.d)(["studentCareerData"]),Object(l.d)("classes",["classType"]),Object(l.c)("classes",["orderedClasses","isInvalidClassType"])),methods:w()({},Object(l.b)("classes",["setClassType","updateClassType","confirmClassesSelection","cancelClassesSelection"]),{onClickClass:function(t){if(this.isInvalidClassType)this.showClassesSelectionError();else{var e=$("#"+t.initials),a=this.getClassCardStyleFor(t);e.css(a),this.updateClassType(t)}},showClassesSelectionError:function(){this.showToastError=!0,setTimeout(function(){return $("#classes-selection-error").toast("show")},0)},getClassCardStyleFor:function(t){return t.type&&t.type===this.classType?this.classesCardStyles.none:this.classesCardStyles[this.classType]},onConfirmClassesSelection:function(){var t=this.validateClasses(function(t){return void 0!==t[1].find(function(t){return t.type&&"special_case"===t.type})}),e=this.validateClasses(function(t){return void 0!==t[1].find(function(t){return t.type&&"registered"===t.type})});this.validateClasses(function(t){return void 0!==t[1].find(function(t){return t.type&&"approved"===t.type})})&&e&&t?this.confirmClassesSelection():this.showClassesSelectionError()},validateClasses:function(t){return void 0!==k()(this.orderedClasses).find(t)}}),mounted:function(){$(".toast").toast()}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"text-center"},[a("h2",[t._v(t._s(t.studentCareerData.name))]),t._v(" "),a("small",[t._v("❗❗Esta aplicación no realiza la validación de pre-requisitos (Por ahora 😁).")])]),t._v(" "),a("div",{staticClass:"row text-sm-left text-md-center text-lg-center mt-4 mb-4"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"approvedRadio",name:"classType"},on:{change:function(e){return t.setClassType("approved")}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"approvedRadio"}},[t._v("Materias aprobadas")]),t._v(" "),a("div",{staticClass:"color-indicator-container approved mt-2 ml-1"})]),t._v(" "),a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"registeredRadio",name:"classType"},on:{change:function(e){return t.setClassType("registered")}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"registeredRadio"}},[t._v("Materias inscritas")]),t._v(" "),a("div",{staticClass:"color-indicator-container registered mt-2 ml-1"})]),t._v(" "),a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"specialCaseRadio",name:"classType"},on:{change:function(e){return t.setClassType("special_case")}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"specialCaseRadio"}},[t._v("Materias para caso especial")]),t._v(" "),a("div",{staticClass:"color-indicator-container special-case mt-2 ml-1"})])])]),t._v(" "),a("div",{staticClass:"container-fluid scrolling-wrapper"},t._l(t.orderedClasses,function(e,s){return a("div",{key:s,staticClass:"row flex-row flex-nowrap"},t._l(e,function(e){return a("div",{key:e.initials,staticClass:"card ml-2 mt-2 text-center class-card",style:t.classesCardStyles[e.type],attrs:{id:e.initials},on:{click:function(a){return t.onClickClass(e)}}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title class-title"},[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"card-text class-initials"},[t._v(t._s(e.initials))]),t._v(" "),e.elective?a("small",[a("i",[t._v("Electiva")])]):t._e()])])}),0)}),0)]),t._v(" "),t.showToastError?[a("toast-message",{attrs:{id:"classes-selection-error",content:"Tienes que seleccionar tus materias (Aprobadas, Inscritas y Caso Especial)"},on:{clickCloseToast:function(e){t.showToastError=!1}}})]:t._e(),t._v(" "),a("app-button",{staticClass:"mt-2",on:{click:t.cancelClassesSelection}},[a("i",{staticClass:"fas fa-arrow-left"}),t._v("\n    Atrás\n  ")]),t._v(" "),a("app-button",{staticClass:"mt-2 ml-2",on:{click:t.onConfirmClassesSelection}},[t._v("\n    Siguiente\n    "),a("i",{staticClass:"fas fa-arrow-right"})])],2)},staticRenderFns:[]};var F=a("VU/8")(R,j,!1,function(t){a("FODR")},"data-v-02141732",null).exports,G={props:{message:{type:String,required:!1,default:"Cargando ..."}}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-12 text-center"},[e("img",{staticClass:"logo",attrs:{src:a("VR5q"),width:"48px",height:"48px",alt:"Support Ficct"}}),this._v(" "),e("p",{domProps:{innerHTML:this._s(this.message)}})])])},staticRenderFns:[]};var O=a("VU/8")(G,A,!1,function(t){a("+tp0")},"data-v-0e54dd8f",null).exports,q={computed:w()({btnClass:function(){return this.success?"btn btn-dark mt-5":"btn btn-danger mt-5"}},Object(l.d)(["processSummary"])),methods:Object(l.b)(["resetApp"])},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h1",{domProps:{innerHTML:t._s(t.processSummary.title)}}),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.processSummary.summary)}}),t._v(" "),null!=t.processSummary.actionTitle?a("button",{class:t.btnClass,domProps:{innerHTML:t._s(t.processSummary.actionTitle)},on:{click:t.resetApp}}):t._e()])])},staticRenderFns:[]};var I=a("VU/8")(q,P,!1,function(t){a("s0tL")},"data-v-5fa8f48b",null).exports,U={props:{title:{type:String,required:!1,default:"Support Ficct"},when:{type:String,required:!1,default:"Justo ahora"},content:{type:String,required:!0},id:{type:String,required:!0,default:"toast-content"}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"fixed"},attrs:{"aria-live":"polite","aria-atomic":"true"}},[s("div",{staticClass:"toast",attrs:{id:t.id,role:"alert","data-autohide":"false"}},[s("div",{staticClass:"toast-header"},[s("img",{attrs:{src:a("VR5q"),width:"48px",height:"48px",alt:"Support Ficct"}}),t._v(" "),s("strong",{staticClass:"mr-auto",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),s("small",{domProps:{innerHTML:t._s(t.when)}}),t._v(" "),s("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"},on:{click:function(e){return t.$emit("clickCloseToast")}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"toast-body",domProps:{innerHTML:t._s(t.content)}})])])},staticRenderFns:[]};var V=a("VU/8")(U,M,!1,function(t){a("W8Uw")},"data-v-034af458",null).exports,N=a("BO1k"),L=a.n(N),H={data:function(){return{showToastError:!1}},computed:Object(l.c)("groups",["classes"]),methods:w()({},Object(l.b)("groups",["confirmGroupsSelection","cancelGroupsSelection","updateClassGroup"]),{onConfirmGroupsSelection:function(){var t=k()(this.classes).filter(function(t){return void 0!==t[1].find(function(t){return t.type&&"special_case"===t.type})});if(void 0!==t){var e=!1,a=!0,s=!1,r=void 0;try{for(var i,n=L()(t);!(a=(i=n.next()).done);a=!0){if(i.value[1].find(function(t){return t.type&&"special_case"===t.type&&!t.group})){e=!0;break}}}catch(t){s=!0,r=t}finally{try{!a&&n.return&&n.return()}finally{if(s)throw r}}e?this.showGroupsSelectionError():this.confirmGroupsSelection()}else this.showGroupsSelectionError()},showGroupsSelectionError:function(){this.showToastError=!0,setTimeout(function(){return $("#groups-selection-error").toast("show")},0)},onInputGroup:function(t,e){this.updateClassGroup({classData:t,group:e})}})},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("h1",{staticClass:"text-center"},[t._v("Grupos para las materias de casos especiales")]),t._v(" "),t._l(t.classes,function(e){return t._l(e,function(e){return e.type&&"special_case"===e.type?a("div",{key:e.initials,staticClass:"col-lg-12 text-center"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:e.initials}},[t._v("\n          Grupo para "),a("span",[t._v(t._s(e.name)+" - "+t._s(e.initials))])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.group,expression:"studentClass.group"}],staticClass:"form-control",attrs:{type:"text",id:e.initials,name:"name",placeholder:"p. ej. SA"},domProps:{value:e.group},on:{input:[function(a){a.target.composing||t.$set(e,"group",a.target.value)},function(a){t.onInputGroup(e,a.target.value.toUpperCase())}]}})])]):t._e()})}),t._v(" "),t.showToastError?[a("toast-message",{attrs:{id:"groups-selection-error",content:"Tienes que ingresar los grupos para tus materias de caso especial"},on:{clickCloseToast:function(e){t.showToastError=!1}}})]:t._e(),t._v(" "),a("app-button",{on:{click:t.cancelGroupsSelection}},[a("i",{staticClass:"fas fa-arrow-left"}),t._v("\n    Atrás\n  ")]),t._v(" "),a("app-button",{staticClass:"ml-2",on:{click:t.onConfirmGroupsSelection}},[t._v("\n    Siguiente\n    "),a("i",{staticClass:"fas fa-arrow-right"})])],2)},staticRenderFns:[]};var B=a("VU/8")(H,z,!1,function(t){a("rDHf")},"data-v-28a891ba",null).exports,W="student_detail",X="classes_selector",J="groups_selector",Z="sending_special_case_data",Q="process_summary",K={namespaced:!0,state:function(){return{student:{name:null,code:null,dni:null,phone:null},careerData:null}},getters:{getCareers:function(t,e,a){return a.careersData}},mutations:{setInitialCareer:function(t,e){var a=e.initialCareer;t.careerData=w()({},a,{idx:0})},setSelectedCareer:function(t,e){var a=e.career,s=e.careerIndex;null!=a&&(t.careerData=w()({},a,{idx:s}))}},actions:{setInitialCareer:function(t){(0,t.commit)("setInitialCareer",{initialCareer:t.rootState.careersData[0]})},setSelectedCareer:function(t,e){var a=t.commit,s=t.rootState,r=s.careersData.find(function(t){return t.key===e});a("setSelectedCareer",{career:r,careerIndex:s.careersData.indexOf(r)})},confirmStudentDetails:function(t){var e=t.state,a=t.rootState,s=t.dispatch;a.studentData=e.student,a.studentCareerData=e.careerData,s("setTemplate",X,{root:!0})}}},Y=a("fZjL"),tt=a.n(Y),et={namespaced:!0,state:function(){return{classType:"none"}},getters:{orderedClasses:function(t,e,a){var s={},r=a.studentCareerData.classes;return tt()(r).reverse().forEach(function(t){s[t]=r[t]}),s},isInvalidClassType:function(t){return"none"===t.classType}},mutations:{setClassType:function(t,e){var a=e.classType;t.classType=a}},actions:{setClassType:function(t,e){(0,t.commit)("setClassType",{classType:e})},updateClassType:function(t,e){t.commit;var a=t.state;e.type&&e.type===a.classType?delete e.type:e.type=a.classType},confirmClassesSelection:function(t){var e=t.dispatch;e("setTemplate",J,{root:!0}),e("setClassType","none")},cancelClassesSelection:function(t){var e=t.dispatch;e("setTemplate",W,{root:!0}),e("setClassType","none")}}},at={namespaced:!0,state:function(){return{}},getters:{classes:function(t,e,a){return a.studentCareerData.classes}},mutations:{},actions:{confirmGroupsSelection:function(t){var e=t.dispatch;e("setTemplate",Z,{root:!0}),e("generateDocumentation",null,{root:!0})},cancelGroupsSelection:function(t){(0,t.dispatch)("setTemplate",X,{root:!0})},updateClassGroup:function(t,e){t.state;var a=e.classData,s=e.group;""!==s?a.group=s:delete a.group}}},st=a("mtWM"),rt=a.n(st),it=a("t4zo"),nt=function(t){var e=t.commit;rt.a.get("http://3.134.117.12/api/v1/careers").then(function(t){return e("setCareers",{careers:t.data.careers})}).catch(function(t){console.error(t),e("setProcessSummary",{processSummary:{title:"Ops ... 😰",summary:"No pudimos cargar los datos desde el servidor, reinicia la aplicaci&oacuten por favor.",actionTitle:"Reiniciar aplicaci&oacute;n",success:!1}})})},ot=function(t){var e=t.commit,a=t.state,s={student:w()({},a.studentData),career_data:{name:a.studentCareerData.name,director:a.studentCareerData.director,key:a.studentCareerData.key,classes:a.studentCareerData.classes}};rt.a.post("http://3.134.117.12/api/v1/generate-documentation",s,{responseType:"blob",headers:{"Access-Control-Allow-Origin":"*"}}).then(function(t){var s=decodeURI(t.headers["x-suggested-filename"]);Object(it.saveAs)(t.data,s),e("setProcessSummary",{processSummary:{title:"Documentos generados",summary:"Ey ... "+a.studentData.name+" tus documentos han sido generados con &eacute;xito 😁⚡",actionTitle:"Volver al inicio",success:!0}})}).catch(function(t){console.error(t),e("setProcessSummary",{processSummary:{title:"Ops ... 😰",summary:"Ocurri&oacute; un error inesperado,Por favor vuelve atr&aacute;s e intenta de nuevo...",actionTitle:"Volver al inicio",success:!1}})})},ct=function(t,e){(0,t.commit)("setTemplate",{template:e})},lt=function(t){var e=t.commit,a=t.dispatch;e("resetApp"),a("getCareers")},ut=function(t,e){var a=e.careers;t.careersData=a},dt=function(t,e){var a=e.processSummary;t.processSummary=a,t.template=Q},pt=function(t,e){var a=e.template;t.template=a},mt=function(t){t.template=W,t.studentData=null,t.studentCareerData=null,t.studentClassesData=null,t.careersData=null,t.processSummary={title:null,summary:null,actionTitle:null,success:null}},vt={studentData:null,studentCareerData:null,careersData:null,template:W,processSummary:{title:null,summary:null,actionTitle:null,success:null}};i.a.use(l.a);var ft=new l.a.Store({state:vt,actions:s,mutations:r,modules:{student:K,classes:et,groups:at}});i.a.config.productionTip=!1,i.a.component("the-navbar",_),i.a.component("the-footer",g),i.a.component("app-button",b),i.a.component("special-case-container",p),i.a.component("student-detail",T),i.a.component("classes-selector",F),i.a.component("loading-indicator",O),i.a.component("process-summary",I),i.a.component("toast-message",V),i.a.component("groups-selector",B),new i.a({el:"#app",router:f,store:ft,components:{App:o},template:"<App/>"}),i.a.directive("uppercase",{update:function(t){t.value=t.value.toUpperCase()}})},NwEc:function(t,e,a){t.exports=a.p+"static/img/support_ficct.997dcd8.png"},OS7g:function(t,e){},VR5q:function(t,e,a){t.exports=a.p+"static/img/support_logo.47b09db.svg"},W8Uw:function(t,e){},Xndh:function(t,e,a){t.exports=a.p+"static/img/team_support.f6732e7.jpg"},"aOA/":function(t,e){},fdNp:function(t,e){},ihkt:function(t,e){},maXW:function(t,e,a){t.exports=a.p+"static/img/student_detail.7f36b88.png"},q7jD:function(t,e,a){t.exports=a.p+"static/img/classes_selector.6057186.png"},rDHf:function(t,e){},s0tL:function(t,e){},xL8r:function(t,e,a){t.exports=a.p+"static/img/groups_selector.1daf072.png"},yLoM:function(t,e,a){t.exports=a.p+"static/img/paul_grimaldo.64b18c7.jpg"},yQvM:function(t,e){},"zZG/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4bea1bf459b91ef55fcb.js.map