webpackJsonp([10],{

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_profile_list_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_bracelet_list_service__ = __webpack_require__(293);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EdituserPage = (function () {
    function EdituserPage(navCtrl, navParams, profileListService, formBuilder, braceletListService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileListService = profileListService;
        this.formBuilder = formBuilder;
        this.braceletListService = braceletListService;
        this.alertCtrl = alertCtrl;
        this.user = {
            email: "",
            name: "",
            bracelet_id: "",
            code: "",
            client_secret: ""
        };
        this.bracelets = [];
        this.ctrls_edit = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            braceletsel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.braceletList = this.braceletListService.getBraceletList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.braceletList.forEach(function (item) {
            _this.bracelets = item;
        });
    }
    EdituserPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.get('profile');
        this.ctrls_edit.controls.email.setValue(this.user.email);
        this.ctrls_edit.controls.name.setValue(this.user.name);
        this.ctrls_edit.controls.braceletsel.setValue(this.user.code);
    };
    EdituserPage.prototype.updateUser = function (user) {
        var _this = this;
        if (this.ctrls_edit.valid) {
            this.user.email = this.ctrls_edit.controls.email.value;
            this.user.name = this.ctrls_edit.controls.name.value;
            this.user.code = this.ctrls_edit.controls.braceletsel.value;
            this.user.bracelet_id = "";
            this.user.client_secret = "";
            for (var j = 0; j < this.bracelets.length; j++) {
                if (this.bracelets[j].code == this.user.code) {
                    this.user.bracelet_id = this.bracelets[j].key.toString();
                    this.user.client_secret = this.bracelets[j].client_secret.toString();
                }
            }
            this.profileListService.updateUser(this.user).then(function (ref) {
                _this.navCtrl.setRoot('UserbraceletPage');
            });
        }
    };
    EdituserPage.prototype.removeUser = function (user) {
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
                        self.profileListService.removeUser(user).then(function () {
                            self.navCtrl.setRoot('UserbraceletPage');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EdituserPage.prototype.toListUser = function () {
        this.navCtrl.setRoot('UserbraceletPage');
    };
    EdituserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edituser',template:/*ion-inline-start:"/myApp/src/pages/edituser/edituser.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{user?.email}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list no-lines>\n        \n        <form [formGroup]="ctrls_edit">\n\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input formControlName="email" type="text" [class.invalid]="!ctrls_edit.controls.email.valid && (ctrls_edit.controls.email.dirty)">\n                    \n                </ion-input>\n            </ion-item>\n            <ion-item *ngIf="!ctrls_edit.controls.email.valid  && (ctrls_edit.controls.email.dirty)">\n                <p>Debe contener formato de email.</p>\n            </ion-item>\n        \n             \n            <ion-item>\n                <ion-label floating>Nombre</ion-label>\n                <ion-input formControlName="name" type="text" [class.invalid]="!ctrls_edit.controls.name.valid && (ctrls_edit.controls.name.dirty)">\n\n                </ion-input>\n            </ion-item>\n             \n            <ion-item *ngIf="!ctrls_edit.controls.name.valid  && (ctrls_edit.controls.name.dirty)">\n                <p>No se permiten caractéres especiales, sólo letras y números.</p>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Seleccione la Pulsera</ion-label>\n                <ion-select formControlName="braceletsel" [class.invalid]="!ctrls_edit.controls.braceletsel.valid">\n\n                    <ion-option *ngFor="let bracelet of braceletList | async" [value]="bracelet.code">\n                        {{ bracelet.code }}\n                    </ion-option>\n\n                </ion-select>\n            </ion-item> \n        \n            <ion-item *ngIf="!ctrls_edit.controls.braceletsel.valid">\n                <p>La pulsera es requerida, debe seleccionar alguna.</p>\n            </ion-item>\n\n\n        </form>\n        \n    </ion-list>\n        \n    <button ion-button full color="primary" (click)="updateUser(user)">Guardar</button>\n    <button ion-button full color="warning" (click)="removeUser(user)">Eliminar</button>\n    <button ion-button full color="secondary" (click)="toListUser()">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/myApp/src/pages/edituser/edituser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_profile_list_service__["a" /* ProfileListService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_bracelet_list_service__["a" /* BraceletListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EdituserPage);
    return EdituserPage;
}());

//# sourceMappingURL=edituser.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdituserPageModule", function() { return EdituserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edituser__ = __webpack_require__(1123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EdituserPageModule = (function () {
    function EdituserPageModule() {
    }
    EdituserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edituser__["a" /* EdituserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edituser__["a" /* EdituserPage */]),
            ],
        })
    ], EdituserPageModule);
    return EdituserPageModule;
}());

//# sourceMappingURL=edituser.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map