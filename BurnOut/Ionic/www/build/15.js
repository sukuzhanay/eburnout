webpackJsonp([15],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbraceletPageModule", function() { return AddbraceletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addbracelet__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



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

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbraceletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_bracelet_list_service__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

/***/ })

});
//# sourceMappingURL=15.js.map