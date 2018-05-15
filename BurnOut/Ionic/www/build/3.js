webpackJsonp([3],{

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserbraceletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_profile_list_service__ = __webpack_require__(292);
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



var UserbraceletPage = (function () {
    function UserbraceletPage(navCtrl, navParams, evts, profileListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evts = evts;
        this.profileListService = profileListService;
        this.profileList = this.profileListService.getProfileList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    UserbraceletPage.prototype.returnParent = function () {
        this.navCtrl.setRoot("ProfilePage");
    };
    UserbraceletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userbracelet',template:/*ion-inline-start:"/myApp/src/pages/userbracelet/userbracelet.html"*/'<ion-header>\n\n	<ion-navbar>\n\n        <ion-buttons start>\n            <button ion-button (click)="returnParent()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    	<ion-title>Usuarios</ion-title>\n\n      <ion-buttons end>\n          <button navPush="AdduserPage" ion-button>\n            <ion-icon name="add"></ion-icon>\n          </button>\n      </ion-buttons>\n\n  	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n      <ion-list-header>\n          Usuarios\n      </ion-list-header>\n \n      <ion-item *ngFor="let profile of profileList | async" \n        detail-push navPush="EdituserPage" [navParams]="{profile:profile}">\n          {{profile.email}}\n      </ion-item>\n  \n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/myApp/src/pages/userbracelet/userbracelet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_profile_list_service__["a" /* ProfileListService */]])
    ], UserbraceletPage);
    return UserbraceletPage;
}());

//# sourceMappingURL=userbracelet.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserbraceletPageModule", function() { return UserbraceletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userbracelet__ = __webpack_require__(1127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserbraceletPageModule = (function () {
    function UserbraceletPageModule() {
    }
    UserbraceletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userbracelet__["a" /* UserbraceletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userbracelet__["a" /* UserbraceletPage */]),
            ],
        })
    ], UserbraceletPageModule);
    return UserbraceletPageModule;
}());

//# sourceMappingURL=userbracelet.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map