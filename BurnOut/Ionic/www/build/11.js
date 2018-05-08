webpackJsonp([11],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminbraceletPageModule", function() { return AdminbraceletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminbracelet__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminbraceletPageModule = (function () {
    function AdminbraceletPageModule() {
    }
    AdminbraceletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adminbracelet__["a" /* AdminbraceletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adminbracelet__["a" /* AdminbraceletPage */]),
            ],
        })
    ], AdminbraceletPageModule);
    return AdminbraceletPageModule;
}());

//# sourceMappingURL=adminbracelet.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminbraceletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_bracelet_list_service__ = __webpack_require__(289);
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



var AdminbraceletPage = (function () {
    function AdminbraceletPage(navCtrl, navParams, evts, braceletListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evts = evts;
        this.braceletListService = braceletListService;
        this.braceletList = this.braceletListService.getBraceletList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    AdminbraceletPage.prototype.returnParent = function () {
        this.navCtrl.setRoot("ProfilePage");
    };
    AdminbraceletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminbracelet',template:/*ion-inline-start:"/myApp/src/pages/adminbracelet/adminbracelet.html"*/'<ion-header>\n\n	<ion-navbar>\n\n        <ion-buttons start>\n            <button ion-button (click)="returnParent()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    	<ion-title>Pulseras</ion-title>\n\n    	<ion-buttons end>\n      		<button navPush="AddbraceletPage" ion-button>\n        		<ion-icon name="add"></ion-icon>\n      		</button>\n    	</ion-buttons>\n  \n  	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n    	<ion-list-header>\n      		Pulseras\n    	</ion-list-header>\n \n    	<ion-item *ngFor="let bracelet of braceletList | async" \n    		detail-push navPush="EditbraceletPage" [navParams]="{bracelet:bracelet}">\n      		{{bracelet.code}}\n    	</ion-item>\n  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/myApp/src/pages/adminbracelet/adminbracelet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_bracelet_list_service__["a" /* BraceletListService */]])
    ], AdminbraceletPage);
    return AdminbraceletPage;
}());

//# sourceMappingURL=adminbracelet.js.map

/***/ })

});
//# sourceMappingURL=11.js.map