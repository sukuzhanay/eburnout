webpackJsonp([15],{

<<<<<<< HEAD
/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbraceletPageModule", function() { return AddbraceletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addbracelet__ = __webpack_require__(770);
=======
/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(289);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD



var AddbraceletPageModule = (function () {
    function AddbraceletPageModule() {
    }
    AddbraceletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addbracelet__["a" /* AddbraceletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addbracelet__["a" /* AddbraceletPage */]),
            ],
        })
    ], AddbraceletPageModule);
    return AddbraceletPageModule;
}());

//# sourceMappingURL=addbracelet.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbraceletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_bracelet_list_service__ = __webpack_require__(293);
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EncuestaPage = (function () {
    function EncuestaPage(navCtrl, global, database) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.database = database;
        this.resultadoPreguntas = { ae: 0, d: 0, rp: 0, q: '' };
        this.indicePregunta = 0;
        this.formulario = { mensaje: '' };
    }
    EncuestaPage.prototype.ionViewDidLoad = function () {
    };
    /* RESPUESTA DE CADA PREGUNTA */
    EncuestaPage.prototype.respuesta = function (idRespuesta) {
        if (this.indicePregunta < this.global.questions.length - 1) {
            switch (this.global.questions[this.indicePregunta].type) {
                case 'AE':
                    this.resultadoPreguntas.ae += idRespuesta;
                    break;
                case 'D':
                    this.resultadoPreguntas.d += idRespuesta;
                    break;
                case 'RP':
                    this.resultadoPreguntas.rp += idRespuesta;
                    break;
            }
            this.indicePregunta++;
        }
    };
    /* FIN RESPUESTA DE CADA PREGUNTA */
    /* TERMINAR ENCUESTA */
    EncuestaPage.prototype.terminar = function () {
        this.indicePregunta = 0;
        this.resultadoPreguntas.q = this.formulario.mensaje;
        this.global.resultadoPreguntas = this.resultadoPreguntas;
        this.global.resultadosPreguntas.push(this.global.resultadoPreguntas);
        if (this.global.resultadosPreguntas.length > 3) {
            this.global.resultadosPreguntas.shift();
        }
        this.database.guardarUltimaEncuesta(this.global.usuario.id, this.global.resultadoPreguntas);
        this.database.guardarEncuesta(this.global.usuario.id, this.global.resultadoPreguntas);
        this.resultadoPreguntas = { ae: 0, d: 0, rp: 0, q: '' };
        this.formulario = { mensaje: '' };
        this.navCtrl.parent.select(0);
    };
    EncuestaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-encuesta',template:/*ion-inline-start:"/myApp/src/pages/encuesta/encuesta.html"*/'<!-->HEADER</!-->\n<ion-header>\n  <div>\n    <ion-navbar>\n      <ion-title>Encuesta</ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content>\n  <p class="num-pregunta">{{ indicePregunta + 1 }} de {{ this.global.questions.length }}</p>\n  <div class="contenedor">\n    <div class="bloque-pregunta">\n      <p class="pregunta">{{ global.questions[indicePregunta].question }}</p>\n    </div>\n    <span *ngIf="global.questions[indicePregunta].type != \'Q\'; then bloqueRespuestas else bloqueInput"></span>\n    <ng-template #bloqueRespuestas>\n      <button ion-button icon-only (click)="respuesta(0)" style="background: #A10E2F" class="btn-respuesta">\n        NUNCA\n      </button>\n      <button ion-button icon-only (click)="respuesta(1)" style="background: #82613C" class="btn-respuesta">\n        Algunas veces al AÑO\n      </button>\n      <button ion-button icon-only (click)="respuesta(2)" style="background: #F59A00" class="btn-respuesta">\n        Una vez a MES\n      </button>\n      <button ion-button icon-only (click)="respuesta(3)" style="background: #EB5D13" class="btn-respuesta">\n        Algunas veces al MES\n      </button>\n      <button ion-button icon-only (click)="respuesta(4)" style="background: #2499D3" class="btn-respuesta">\n        Una vez a la SEMANA\n      </button>\n      <button ion-button icon-only (click)="respuesta(5)" style="background: #347193" class="btn-respuesta">\n        Algunas veces a la SEMANA\n      </button>\n      <button ion-button icon-only (click)="respuesta(6)" style="background: #70A63B" class="btn-respuesta">\n        DIARIAMENTE\n      </button>\n    </ng-template>\n    <ng-template #bloqueInput>\n      <form (ngSubmit)="terminar()" class="formulario">\n        <ion-item>\n          <ion-textarea [(ngModel)]="formulario.mensaje" name="mensaje" rows="6" placeholder="Mensaje opcional"></ion-textarea>\n        </ion-item>\n        <button ion-button type="submit" class="btn-1">Terminar</button>\n      </form>\n    </ng-template>\n  </div>\n</ion-content>\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/encuesta/encuesta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], EncuestaPage);
    return EncuestaPage;
}());

//# sourceMappingURL=encuesta.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaPageModule", function() { return EncuestaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encuesta__ = __webpack_require__(1096);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddbraceletPage = (function () {
    function AddbraceletPage(navCtrl, navParams, braceletListService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.braceletListService = braceletListService;
        this.formBuilder = formBuilder;
        this.bracelet = {
            code: "",
            client_secret: "",
            serial: ""
        };
        this.ctrls_add = this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            client_secret: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            serial: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    AddbraceletPage.prototype.addBracelet = function () {
        var _this = this;
        if (this.ctrls_add.valid) {
            this.bracelet.code = this.ctrls_add.controls.code.value;
            this.bracelet.client_secret = this.ctrls_add.controls.client_secret.value;
            this.bracelet.serial = this.ctrls_add.controls.serial.value;
            this.braceletListService.addBracelet(this.bracelet).then(function (ref) {
                _this.navCtrl.setRoot('AdminbraceletPage');
            });
        }
    };
    AddbraceletPage.prototype.toListBracelet = function () {
        this.navCtrl.setRoot('AdminbraceletPage');
    };
    AddbraceletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addbracelet',template:/*ion-inline-start:"/myApp/src/pages/addbracelet/addbracelet.html"*/'<ion-header>\n \n    <ion-navbar>\n        <ion-title>Agregar Pulsera</ion-title>\n    </ion-navbar>\n \n</ion-header>\n \n<ion-content padding>\n \n\n    <ion-list no-lines>\n \n        <form [formGroup]="ctrls_add">\n     \n            <ion-item>\n                <ion-label floating>Código</ion-label>\n                <ion-input formControlName="code" type="text" [class.invalid]="!ctrls_add.controls.code.valid && (ctrls_add.controls.code.dirty)">\n                    \n                </ion-input>\n            </ion-item>\n            <ion-item *ngIf="!ctrls_add.controls.code.valid  && (ctrls_add.controls.code.dirty)">\n                <p>No se permiten caractéres especiales, sólo letras y números.</p>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label floating>Client Secret</ion-label>\n                <ion-input formControlName="client_secret" type="text" [class.invalid]="!ctrls_add.controls.client_secret.valid && (ctrls_add.controls.client_secret.dirty)">\n                    \n                </ion-input>\n            </ion-item>\n            <ion-item *ngIf="!ctrls_add.controls.client_secret.valid  && (ctrls_add.controls.client_secret.dirty)">\n                <p>Client Secret es requerido y no puede estar vacio.</p>\n            </ion-item>\n\n     \n            <ion-item>\n                <ion-label floating>Serial</ion-label>\n                <ion-input formControlName="serial" type="text" [class.invalid]="!ctrls_add.controls.serial.valid && (ctrls_add.controls.serial.dirty)">\n\n                </ion-input>\n            </ion-item>\n     \n           <ion-item *ngIf="!ctrls_add.controls.serial.valid  && (ctrls_add.controls.serial.dirty)">\n                <p>No se permiten caractéres especiales, sólo letras y números.</p>\n            </ion-item>\n     \n        </form>\n \n    </ion-list>\n\n    <button ion-button full color="primary" (click)="addBracelet()">Guardar</button>\n    <button ion-button full color="secondary" (click)="toListBracelet()">Cancelar</button>\n \n    \n    \n</ion-content>'/*ion-inline-end:"/myApp/src/pages/addbracelet/addbracelet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_bracelet_list_service__["a" /* BraceletListService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AddbraceletPage);
    return AddbraceletPage;
}());

//# sourceMappingURL=addbracelet.js.map
=======



var EncuestaPageModule = (function () {
    function EncuestaPageModule() {
    }
    EncuestaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__encuesta__["a" /* EncuestaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__encuesta__["a" /* EncuestaPage */]),
            ],
        })
    ], EncuestaPageModule);
    return EncuestaPageModule;
}());

//# sourceMappingURL=encuesta.module.js.map
>>>>>>> master

/***/ })

});
//# sourceMappingURL=15.js.map