webpackJsonp([8],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, _global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._global = _global;
        this.admin_emails = [];
        this.is_admin = false;
        this.admin_emails.push('mti.jgaytan@gmail.com');
        this.admin_emails.push('sukuzhanay@gmail.com');
        this._ami_admin();
    }
    ProfilePage.prototype._ami_admin = function () {
        for (var i = 0; i < this.admin_emails.length; i++)
            if (this._global.usuario.email == this.admin_emails[i]) {
                this.is_admin = true;
                break;
            }
    };
    ProfilePage.prototype.toPersonalData = function () {
        this.navCtrl.setRoot('PersonaldataPage');
    };
    ProfilePage.prototype.toAdminBracelet = function () {
        this.navCtrl.setRoot('AdminbraceletPage');
    };
    ProfilePage.prototype.toUserBracelet = function () {
        this.navCtrl.setRoot('UserbraceletPage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/myApp/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Perfil\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n    <br/>\n    <br/>\n\n    <button ion-button block icon-start (click)="toPersonalData()">\n  		<ion-icon name="logo-buffer"></ion-icon>\n  			Mis datos\n	</button>\n\n    <br/>\n    <br/>\n\n    <div *ngIf="is_admin">\n\n    	<button ion-button block icon-start (click)="toAdminBracelet()">\n            <ion-icon name="finger-print"></ion-icon>\n            Pulseras\n        </button>\n\n    </div>\n\n    <br/>\n    <br/>\n\n    <div *ngIf="is_admin">\n\n        <button ion-button block icon-start (click)="toUserBracelet()">\n            <ion-icon name="people"></ion-icon>\n            Usuarios\n        </button>\n\n    </div>\n\n\n	\n\n</ion-content>'/*ion-inline-end:"/myApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(1125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map