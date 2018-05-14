webpackJsonp([11],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditbraceletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_bracelet_list_service__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditbraceletPage = (function () {
    function EditbraceletPage(navCtrl, navParams, braceletListService, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.braceletListService = braceletListService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.bracelet = {
            code: "",
            client_secret: "",
            serial: ""
        };
        this.ctrls_edit = this.formBuilder.group({
            code: [this.bracelet.code, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            client_secret: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            serial: [this.bracelet.serial, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    EditbraceletPage.prototype.ionViewDidLoad = function () {
        this.bracelet = this.navParams.get('bracelet');
        this.ctrls_edit.controls.code.setValue(this.bracelet.code);
        this.ctrls_edit.controls.client_secret.setValue(this.bracelet.client_secret);
        this.ctrls_edit.controls.serial.setValue(this.bracelet.serial);
    };
    EditbraceletPage.prototype.updateBracelet = function (bracelet) {
        var _this = this;
        if (this.ctrls_edit.valid) {
            this.bracelet.code = this.ctrls_edit.controls.code.value;
            this.bracelet.client_secret = this.ctrls_edit.controls.client_secret.value;
            this.bracelet.serial = this.ctrls_edit.controls.serial.value;
            this.braceletListService.updateBracelet(bracelet).then(function () {
                _this.navCtrl.setRoot('AdminbraceletPage');
            });
        }
    };
    EditbraceletPage.prototype.removeBracelet = function (bracelet) {
        var self = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Deseas eliminar el registro?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancelar'
                },
                {
                    text: 'Sí',
                    handler: function () {
                        self.braceletListService.removeBracelet(bracelet).then(function () {
                            self.navCtrl.setRoot('AdminbraceletPage');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EditbraceletPage.prototype.toListBracelet = function () {
        this.navCtrl.setRoot('AdminbraceletPage');
    };
    EditbraceletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editbracelet',template:/*ion-inline-start:"/myApp/src/pages/editbracelet/editbracelet.html"*/'<ion-header>\n \n    <ion-navbar>\n        <ion-title>{{bracelet?.code}}</ion-title>\n    </ion-navbar>\n \n</ion-header>\n \n<ion-content padding>\n \n    <ion-list no-lines>\n \n        <form [formGroup]="ctrls_edit">\n     \n            <ion-item>\n                <ion-label floating>Código</ion-label>\n                <ion-input formControlName="code" type="text" [class.invalid]="!ctrls_edit.controls.code.valid && (ctrls_edit.controls.code.dirty)">\n                    \n                </ion-input>\n            </ion-item>\n            <ion-item *ngIf="!ctrls_edit.controls.code.valid  && (ctrls_edit.controls.code.dirty)">\n                <p>No se permiten caractéres especiales, sólo letras y números.</p>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Client Secret</ion-label>\n                <ion-input formControlName="client_secret" type="text" [class.invalid]="!ctrls_edit.controls.client_secret.valid && (ctrls_edit.controls.client_secret.dirty)">\n                    \n                </ion-input>\n            </ion-item>\n            <ion-item *ngIf="!ctrls_edit.controls.client_secret.valid  && (ctrls_edit.controls.client_secret.dirty)">\n                <p>Client Secret es requerido y no puede estar vacio.</p>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label floating>Serial</ion-label>\n                <ion-input formControlName="serial" type="text" [class.invalid]="!ctrls_edit.controls.serial.valid && (ctrls_edit.controls.serial.dirty)">\n\n                </ion-input>\n            </ion-item>\n     \n           <ion-item *ngIf="!ctrls_edit.controls.serial.valid  && (ctrls_edit.controls.serial.dirty)">\n                <p>No se permiten caractéres especiales, sólo letras y números.</p>\n            </ion-item>\n\n        </form>\n\n    </ion-list>\n\n\n    <button ion-button full color="primary" (click)="updateBracelet(bracelet)">Guardar</button>\n    <button ion-button full color="warning" (click)="removeBracelet(bracelet)">Eliminar</button>\n    <button ion-button full color="secondary" (click)="toListBracelet()">Cancelar</button>\n\n</ion-content>'/*ion-inline-end:"/myApp/src/pages/editbracelet/editbracelet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_bracelet_list_service__["a" /* BraceletListService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditbraceletPage);
    return EditbraceletPage;
}());

//# sourceMappingURL=editbracelet.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditbraceletPageModule", function() { return EditbraceletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editbracelet__ = __webpack_require__(1114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditbraceletPageModule = (function () {
    function EditbraceletPageModule() {
    }
    EditbraceletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editbracelet__["a" /* EditbraceletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editbracelet__["a" /* EditbraceletPage */]),
            ],
        })
    ], EditbraceletPageModule);
    return EditbraceletPageModule;
}());

//# sourceMappingURL=editbracelet.module.js.map

/***/ })

});
//# sourceMappingURL=11.js.map