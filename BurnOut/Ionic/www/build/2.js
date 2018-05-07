webpackJsonp([2],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaldataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_personalData_model__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonaldataPage = (function () {
    function PersonaldataPage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.personalList = new __WEBPACK_IMPORTED_MODULE_2__models_personalData_model__["a" /* PersonalData */](this.global.usuario.id, this.global.usuario.altura, this.global.usuario.anosresidente, this.global.usuario.edad, this.global.usuario.ejerciciofisico, this.global.usuario.email, this.global.usuario.especialidad, this.global.usuario.estadocivil, this.global.usuario.estudias, this.global.usuario.hijos, this.global.usuario.lectura, this.global.usuario.musica, this.global.usuario.peso, this.global.usuario.salessocialmente, this.global.usuario.sexo, this.global.usuario.tiempoplazaactual, this.global.usuario.tiempovidalaboral, this.global.usuario.tipocontrato, this.global.usuario.tipotrabajo, this.global.usuario.viajas);
    }
    PersonaldataPage.prototype.returnParent = function () {
        this.navCtrl.setRoot("ProfilePage");
    };
    PersonaldataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personaldata',template:/*ion-inline-start:"/myApp/src/pages/personaldata/personaldata.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n        <button ion-button (click)="returnParent()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title>Datos Personales</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-item>\n    	<ion-label>Altura</ion-label>\n    	<ion-label>{{personalList.altura}}</ion-label>\n  	</ion-item>\n  	<ion-item>\n    	<ion-label>Años Residente</ion-label>\n    	<ion-label>{{personalList.anosresidente}}</ion-label>\n  	</ion-item>\n  	<ion-item>\n    	<ion-label>Edad</ion-label>\n    	<ion-label>{{personalList.edad}}</ion-label>\n  	</ion-item>\n  	<ion-item>\n        <ion-label>Ejercicio físico</ion-label>\n    	<ion-label>{{personalList.ejerciciofisico}}</ion-label>\n  	</ion-item>\n  	<ion-item>\n    	<ion-label>Email</ion-label>\n    	<ion-label>{{personalList.email}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Especialidad</ion-label>\n    	<ion-label>{{personalList.especialidad}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Estado Civil</ion-label>\n    	<ion-label>{{personalList.estadocivil}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Estudias</ion-label>\n    	<ion-label>{{personalList.estudias}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Hijos</ion-label>\n    	<ion-label>{{personalList.hijos}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Lectura</ion-label>\n    	<ion-label>{{personalList.lectura}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Música</ion-label>\n    	<ion-label>{{personalList.musica}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Peso</ion-label>\n    	<ion-label>{{personalList.peso}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Sales Socialmente</ion-label>\n    	<ion-label>{{personalList.salessocialmente}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Sexo</ion-label>\n    	<ion-label>{{personalList.sexo}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Tiempo Plaza Actual</ion-label>\n    	<ion-label>{{personalList.tiempoplazaactual}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Tiempo Vida Laboral</ion-label>\n    	<ion-label>{{personalList.tiempovidalaboral}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Tipo Contrato</ion-label>\n    	<ion-label>{{personalList.tipocontrato}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Tipo Trabajo</ion-label>\n    	<ion-label>{{personalList.tipotrabajo}}</ion-label>\n  	</ion-item><ion-item>\n    	<ion-label>Viajas</ion-label>\n    	<ion-label>{{personalList.viajas}}</ion-label>\n  	</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/myApp/src/pages/personaldata/personaldata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], PersonaldataPage);
    return PersonaldataPage;
}());

//# sourceMappingURL=personaldata.js.map

/***/ }),

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalData; });
var PersonalData = (function () {
    function PersonalData(key, altura, anosresidente, edad, ejerciciofisico, email, especialidad, estadocivil, estudias, hijos, lectura, musica, peso, salessocialmente, sexo, tiempoplazaactual, tiempovidalaboral, tipocontrato, tipotrabajo, viajas) {
        this.key = key;
        this.altura = altura;
        this.anosresidente = anosresidente;
        this.edad = edad;
        this.ejerciciofisico = ejerciciofisico;
        this.email = email;
        this.especialidad = especialidad;
        this.estadocivil = estadocivil;
        this.estudias = estudias;
        this.hijos = hijos;
        this.lectura = lectura;
        this.musica = musica;
        this.peso = peso;
        this.salessocialmente = salessocialmente;
        this.sexo = sexo;
        this.tiempoplazaactual = tiempoplazaactual;
        this.tiempovidalaboral = tiempovidalaboral;
        this.tipocontrato = tipocontrato;
        this.tipotrabajo = tipotrabajo;
        this.viajas = viajas;
    }
    return PersonalData;
}());

//# sourceMappingURL=personalData.model.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaldataPageModule", function() { return PersonaldataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personaldata__ = __webpack_require__(1108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonaldataPageModule = (function () {
    function PersonaldataPageModule() {
    }
    PersonaldataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personaldata__["a" /* PersonaldataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personaldata__["a" /* PersonaldataPage */]),
            ],
        })
    ], PersonaldataPageModule);
    return PersonaldataPageModule;
}());

//# sourceMappingURL=personaldata.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map