<<<<<<< HEAD
webpackJsonp([6],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_recommendations_service__ = __webpack_require__(297);
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






var RecommendationsPage = (function () {
    function RecommendationsPage(navCtrl, navParams, _recommendationsService, _global, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._recommendationsService = _recommendationsService;
        this._global = _global;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.section = "";
        this.first = true;
        this.section_a = "";
        this.first_a = true;
        this.key_latestSurvey = "";
        this.date_latestSurvey = "";
        this._QuestionUser = {
            email: "",
            user: "",
            survey: "",
            created_at: "",
            updated_at: "",
            questions: [],
            answers: []
        };
        this.is_permissible = true;
        this._insert = true;
        this._question_modality = true;
        this.loadQuestionUser();
    }
    RecommendationsPage.prototype._before_save_is_false = function () {
        var pass = false;
        for (var i = 0; i < this._QuestionUser.questions.length; i++)
            if (this._QuestionUser.questions[i].checked)
                pass = true;
        if (!pass) {
            var alert_1 = this.alertCtrl.create({
                title: "Selección de Recomendación(es)",
                message: "Debe seleccionar al menos una recomendación",
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancelar'
                    }
                ]
            });
            alert_1.present();
        }
        return pass;
    };
    RecommendationsPage.prototype._before_save_is_false_answer = function () {
        var pass = true;
        for (var i = 0; i < this._QuestionUser.answers.length; i++)
            if (!this._QuestionUser.answers[i].value.toString().trim().length)
                pass = false;
        if (!pass) {
            var alert_2 = this.alertCtrl.create({
                title: "Inclusión de Respuesta(s)",
                message: "Debe escribir un valor de resultado en cada una de las preguntas",
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancelar'
                    }
                ]
            });
            alert_2.present();
        }
        return pass;
    };
    RecommendationsPage.prototype._clean = function () {
        this._QuestionUser = {
            email: "",
            user: "",
            survey: "",
            created_at: "",
            updated_at: "",
            questions: [],
            answers: []
        };
        this.Answers = undefined;
    };
    RecommendationsPage.prototype.loadQuestionUser = function () {
        var _this = this;
        this._QuestionUserList = !this._QuestionUserList ? this._recommendationsService.getQuestionUserList(this._global.usuario.id)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }) : this._QuestionUserList;
        this._QuestionUserList.forEach(function (item) {
            _this.LastSurvey = !_this.LastSurvey ? _this._recommendationsService.getLastUserSurvey(_this._global.usuario.id)
                .snapshotChanges()
                .map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            }) : _this.LastSurvey;
            _this.LastSurvey.forEach(function (encuesta) {
                if (encuesta.length) {
                    _this.is_permissible = true;
                    _this.key_latestSurvey = encuesta[0]["key"];
                    _this.date_latestSurvey = encuesta[0]["created_at"];
                    console.log(_this.key_latestSurvey);
                    _this.section = "";
                    _this.first = true;
                    _this.section_a = "";
                    _this.first_a = true;
                    _this._question_modality = true;
                    console.log('questions 2');
                    if (item.length) {
                        if (item[0]["survey"] == _this.key_latestSurvey) {
                            _this._QuestionUser = item[0];
                            var diff_dates = _this._recommendationsService.diff_dates(_this._QuestionUser.created_at);
                            console.log(diff_dates);
                            if (diff_dates >= _this._recommendationsService.days_to_answer) {
                                _this._question_modality = false;
                            }
                            else {
                                _this._question_modality = true;
                            }
                            _this._insert = false;
                        }
                        else {
                            _this._insert = true;
                            _this._clean();
                        }
                    }
                    else {
                        _this._insert = true;
                        _this._clean();
                    }
                    console.log(_this._QuestionUser);
                    if (_this._question_modality) {
                        _this.loadQuestions();
                    }
                    else {
                        _this.loadAnswers();
                    }
                }
                else {
                    _this.is_permissible = false;
                }
            });
        });
    };
    RecommendationsPage.prototype.loadQuestions = function () {
        var _this = this;
        this.RecommendationsList = !this.RecommendationsList ? this._recommendationsService.getQuestionsList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }) : this.RecommendationsList;
        this.RecommendationsList.forEach(function (item) {
            if (_this.Recommendations == undefined) {
                _this.Recommendations = item;
                if (_this.Recommendations.length)
                    _this.section = _this.Recommendations[0]["categoria"];
            }
            // ES NUEVA
            if (!_this._QuestionUser.questions.length) {
                for (var i = 0; i < _this.Recommendations.length; i++) {
                    _this._QuestionUser.questions.push({
                        id: _this.Recommendations[i]["id"],
                        recommendation: _this.Recommendations[i]["recommendation"],
                        checked: false,
                    });
                }
            }
        });
    };
    RecommendationsPage.prototype.loadAnswers = function () {
        var _this = this;
        this.AnswersList = !this.AnswersList ? this._recommendationsService.getAnswersList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }) : this.AnswersList;
        this.AnswersList.forEach(function (item) {
            if (_this.Answers == undefined && item.length && _this._QuestionUser.questions.length) {
                var index = 0;
                var indice = 0;
                _this.Answers = [];
                for (var i = 0; i < _this._QuestionUser.questions.length; i++) {
                    if (_this._QuestionUser.questions[i].checked) {
                        index = parseInt(_this._QuestionUser.questions[i].id) - 1;
                        _this.Answers[indice] = item[index];
                        indice++;
                    }
                }
                if (_this.Answers.length) {
                    _this.Answers[indice] = item[_this._recommendationsService.id_first_question_forced - 1];
                    indice++;
                    _this.Answers[indice] = item[_this._recommendationsService.id_second_question_forced - 1];
                    _this.section_a = _this.Answers[0]["categoria"];
                }
            }
            // ES NUEVA
            if (_this._QuestionUser.answers == undefined) {
                _this._QuestionUser.answers = [];
                var fields_form = {};
                for (var j = 0; j < _this.Answers.length; j++) {
                    _this._QuestionUser.answers.push({
                        id: _this.Answers[j]["id"],
                        question: _this.Answers[j]["pregunta"],
                        value: "",
                    });
                    fields_form["field_" + _this.Answers[j]["id"]] = [];
                    fields_form["field_" + _this.Answers[j]["id"]][0] = "";
                    fields_form["field_" + _this.Answers[j]["id"]][1] = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]);
                }
                _this.ctrls_form = _this.formBuilder.group(fields_form);
            }
        });
    };
    RecommendationsPage.prototype.changeSection = function (newSection) {
        this.section = newSection;
        return true;
    };
    RecommendationsPage.prototype.changeSection_a = function (newSection) {
        this.section_a = newSection;
        return true;
    };
    RecommendationsPage.prototype.setNotFirst = function () {
        this.first = false;
        return true;
    };
    RecommendationsPage.prototype.setNotFirst_a = function () {
        this.first_a = false;
        return true;
    };
    RecommendationsPage.prototype.AddSelCatego = function (recommendation) {
    };
    RecommendationsPage.prototype.AddSelAnswer = function (answer) {
    };
    RecommendationsPage.prototype.saveRecomm = function () {
        if (!this._before_save_is_false())
            return false;
        var title = "";
        var mge = "";
        var date = new Date();
        if (this._insert) {
            this._QuestionUser.email = this._global.usuario.email;
            this._QuestionUser.user = this._global.usuario.id;
            this._QuestionUser.survey = this.key_latestSurvey;
            this._QuestionUser.created_at = date.toISOString();
            this._recommendationsService.addQuestionUser(this._QuestionUser);
            title = "Crear Recomendación(es)";
            mge = "Se creó recomendación(es)";
        }
        else {
            this._QuestionUser.updated_at = date.toISOString();
            this._recommendationsService.updateQuestionUser(this._QuestionUser);
            title = "Actualizar Recomendación(es)";
            mge = "Se actualizó recomendación(es)";
        }
        var alert = this.alertCtrl.create({
            title: title,
            message: mge,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancelar'
                }
            ]
        });
        alert.present();
    };
    RecommendationsPage.prototype.saveAnswer = function () {
        var _this = this;
        if (!this._before_save_is_false_answer())
            return false;
        var date = new Date();
        this._QuestionUser.updated_at = date.toISOString();
        this._recommendationsService.updateQuestionUser(this._QuestionUser);
        var alert = this.alertCtrl.create({
            title: "Actualizar Respuesta(s)",
            message: "Se actualizó respuesta(s)",
            buttons: [
                {
                    text: 'OK',
                    role: 'cancelar',
                    handler: function () {
                        _this.navCtrl.parent.select(1);
                    }
                }
            ]
        });
        alert.present();
    };
    RecommendationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommendations',template:/*ion-inline-start:"/myApp/src/pages/recommendations/recommendations.html"*/'<!-->HEADER</!-->\n<ion-header>\n\n	<div>\n    	<ion-navbar>\n      		<ion-title>Recomendaciones</ion-title>\n    	</ion-navbar>\n  	</div>\n\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content padding>\n\n	<ion-icon name="pulse" class="icono" style="font-size: 50px; text-align: right; padding-left: 50%"></ion-icon>\n\n	<div *ngIf="is_permissible">\n\n		<div *ngIf="_question_modality && _QuestionUser.questions.length">\n\n			<div *ngFor="let recommendation of Recommendations; let i = index">\n		  \n				<div *ngIf="recommendation.categoria != section || i == 0">\n\n					<ion-item text-wrap>\n					\n						<ion-icon name="happy" darkgreen item-left></ion-icon>\n\n		     			<ion-label>{{recommendation.categoria}}</ion-label>\n\n		     		</ion-item>\n\n					<div [class.inactive]="changeSection(recommendation.categoria)"></div>\n					\n				</div>\n\n				<ion-item text-wrap>\n\n		     		<ion-label (tap)="AddSelCatego(recommendation);" tappable>{{recommendation.recommendation}}</ion-label>\n		     	\n		     		<ion-checkbox red item-right [(ngModel)]="_QuestionUser.questions[i].checked" (ionChange)="AddSelCatego(recommendation);"></ion-checkbox>\n\n				</ion-item>\n\n			</div>\n\n		\n\n			<br/>\n			<br/>\n\n\n			<button ion-button full color="primary" (click)="saveRecomm()">Guardar</button>\n\n		</div>\n\n		<div *ngIf="!_question_modality && _QuestionUser.answers != undefined">\n\n			<div *ngIf="_QuestionUser.answers.length">\n\n				<!--<form [formGroup]="ctrls_form">-->\n\n					<div *ngFor="let Answer of Answers; let j = index">\n				\n						<div *ngIf="Answer.categoria != section_a || j == 0">\n\n							<ion-item text-wrap>\n							\n								<ion-icon name="checkmark-circle" darkgreen item-left></ion-icon>\n\n								<ion-label>{{Answer.categoria}}</ion-label>\n\n							</ion-item>\n\n							<div [class.inactive]="changeSection_a(Answer.categoria)"></div>\n							\n						</div>\n\n						<ion-item text-wrap>\n\n							<ion-label class="fixedLabel" (tap)="AddSelAnswer(Answer);" tappable>{{Answer.pregunta}}</ion-label>\n						\n							<ion-input type="text" [(ngModel)]="_QuestionUser.answers[j].value" placeholder="en minutos, dias, texto"></ion-input>\n\n						</ion-item>\n\n						<!--<ion-item text-wrap>\n								\n							<ion-label class="fixedLabel" (tap)="AddSelAnswer(Answer);" tappable>{{Answer.pregunta}}</ion-label>\n							\n							<ion-input formControlName="field_{{_QuestionUser.answers[j].id}}" type="text" >\n									\n							</ion-input>\n\n						</ion-item>-->\n\n					</div>\n\n				<!--</form>-->\n\n			</div>\n\n			<br/>\n			<br/>\n\n\n			<button ion-button full color="primary" (click)="saveAnswer()">Guardar</button>\n\n		</div>\n\n	</div>\n\n	<br/>\n	<br/>\n\n\n</ion-content>\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/recommendations/recommendations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_recommendations_service__["a" /* RecommendationsService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RecommendationsPage);
    return RecommendationsPage;
}());

//# sourceMappingURL=recommendations.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsPageModule", function() { return RecommendationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommendations__ = __webpack_require__(1125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecommendationsPageModule = (function () {
    function RecommendationsPageModule() {
    }
    RecommendationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recommendations__["a" /* RecommendationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recommendations__["a" /* RecommendationsPage */]),
            ],
        })
    ], RecommendationsPageModule);
    return RecommendationsPageModule;
}());

//# sourceMappingURL=recommendations.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
=======
webpackJsonp([6],{407:function(l,n,a){"use strict";function t(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"ion-icon",[["class","tab-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),s.Y(1,147456,null,0,Z.a,[Y.a,s.j,s.z],{name:[0,"name"],isActive:[1,"isActive"]},null)],function(l,n){var a=n.component;l(n,1,0,a.tab.tabIcon,a.tab.isSelected)},function(l,n){l(n,0,0,s._13(n,1)._hidden)})}function u(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"span",[["class","tab-button-text"]],null,null,null,null,null)),(l()(),s._18(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.tab.tabTitle)})}function e(l){return s._19(0,[(l()(),s.Z(0,0,null,null,2,"ion-badge",[["class","tab-badge"]],null,null,null,null,null)),s.Y(1,16384,null,0,R.a,[Y.a,s.j,s.z],{color:[0,"color"]},null),(l()(),s._18(2,null,["",""]))],function(l,n){l(n,1,0,n.component.tab.tabBadgeStyle)},function(l,n){l(n,2,0,n.component.tab.tabBadge)})}function o(l){return s._19(0,[(l()(),s.U(16777216,null,null,1,null,t)),s.Y(1,16384,null,0,j.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s.U(16777216,null,null,1,null,u)),s.Y(3,16384,null,0,j.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s.U(16777216,null,null,1,null,e)),s.Y(5,16384,null,0,j.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s.Z(6,0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){var a=n.component;l(n,1,0,a.tab.tabIcon);l(n,3,0,a.tab.tabTitle);l(n,5,0,a.tab.tabBadge)},null)}function i(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"a",[["class","tab-button"],["href","#"],["role","tab"]],[[1,"id",0],[1,"aria-controls",0],[1,"aria-selected",0],[2,"has-title",null],[2,"has-icon",null],[2,"has-title-only",null],[2,"icon-only",null],[2,"has-badge",null],[2,"disable-hover",null],[2,"tab-disabled",null],[2,"tab-hidden",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,a){var t=!0,u=l.component;if("click"===n){t=!1!==s._13(l,1).onClick()&&t}if("ionSelect"===n){t=!1!==u.select(l.context.$implicit)&&t}return t},o,k)),s.Y(1,114688,null,0,z.a,[Y.a,s.j,s.z],{tab:[0,"tab"]},{ionSelect:"ionSelect"})],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,0,1,[s._13(n,1).tab._btnId,s._13(n,1).tab._tabId,s._13(n,1).tab.isSelected,s._13(n,1).hasTitle,s._13(n,1).hasIcon,s._13(n,1).hasTitleOnly,s._13(n,1).hasIconOnly,s._13(n,1).hasBadge,s._13(n,1).disHover,!s._13(n,1).tab.enabled,!s._13(n,1).tab.show])})}function b(l){return s._19(0,[s._16(402653184,1,{_highlight:0}),s._16(402653184,2,{_tabbar:0}),s._16(402653184,3,{portal:0}),(l()(),s.Z(3,0,[[2,0],["tabbar",1]],null,4,"div",[["class","tabbar"],["role","tablist"]],null,null,null,null,null)),(l()(),s.U(16777216,null,null,1,null,i)),s.Y(5,802816,null,0,j.h,[s.I,s.F,s.p],{ngForOf:[0,"ngForOf"]},null),(l()(),s.Z(6,0,null,null,1,"div",[["class","tab-highlight"]],null,null,null,null,null)),s.Y(7,16384,[[1,4]],0,P.a,[s.j,S.a],null,null),s._12(null,0),(l()(),s.Z(9,16777216,[[3,3],["portal",1]],null,0,"div",[["tab-portal",""]],null,null,null,null,null))],function(l,n){l(n,5,0,n.component._tabs)},null)}function c(l){return s._19(0,[s._16(402653184,1,{_vp:0}),(l()(),s.Z(1,16777216,[[1,3],["viewport",1]],null,0,"div",[],null,null,null,null,null)),(l()(),s.Z(2,0,null,null,0,"div",[["class","nav-decor"]],null,null,null,null,null))],null,null)}function r(l){return s._19(0,[s._16(402653184,1,{tabRef:0}),(l()(),s.Z(1,0,null,null,15,"ion-tabs",[],null,null,null,b,E)),s._15(6144,null,F.a,null,[x.a]),s.Y(3,4374528,[[1,4],["tab",4]],0,x.a,[[2,C.a],[2,O.a],V.a,Y.a,s.j,w.a,s.z,B.a,D.a],null,null),(l()(),s._18(-1,0,["\n  "])),(l()(),s.Z(5,0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","apps"],["tabTitle","Dashboard"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,c,M)),s.Y(6,245760,null,0,U.a,[x.a,V.a,Y.a,w.a,s.j,s.u,s.z,s.i,s.g,X.l,A.a,[2,B.a],S.a,s.k],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null),(l()(),s._18(-1,0,["\n  "])),(l()(),s.Z(8,0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","list-box"],["tabTitle","Encuesta"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,c,M)),s.Y(9,245760,null,0,U.a,[x.a,V.a,Y.a,w.a,s.j,s.u,s.z,s.i,s.g,X.l,A.a,[2,B.a],S.a,s.k],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null),(l()(),s._18(-1,0,["\n  "])),(l()(),s.Z(11,0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","camera"],["tabTitle","Camara"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,c,M)),s.Y(12,245760,null,0,U.a,[x.a,V.a,Y.a,w.a,s.j,s.u,s.z,s.i,s.g,X.l,A.a,[2,B.a],S.a,s.k],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null),(l()(),s._18(-1,0,["\n  "])),(l()(),s.Z(14,0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","speedometer"],["tabTitle","Recomendación"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,c,M)),s.Y(15,245760,null,0,U.a,[x.a,V.a,Y.a,w.a,s.j,s.u,s.z,s.i,s.g,X.l,A.a,[2,B.a],S.a,s.k],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null),(l()(),s._18(-1,0,["\n"]))],function(l,n){var a=n.component;l(n,6,0,a.dashboardRoot,"Dashboard","apps");l(n,9,0,a.encuestaRoot,"Encuesta","list-box");l(n,12,0,a.camaraRoot,"Camara","camera");l(n,15,0,a.recomendacionRoot,"Recomendación","speedometer")},function(l,n){l(n,5,0,s._13(n,6)._tabId,s._13(n,6)._btnId);l(n,8,0,s._13(n,9)._tabId,s._13(n,9)._btnId);l(n,11,0,s._13(n,12)._tabId,s._13(n,12)._btnId);l(n,14,0,s._13(n,15)._tabId,s._13(n,15)._btnId)})}Object.defineProperty(n,"__esModule",{value:!0});var s=a(0),_=(a(4),a(67),function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.dashboardRoot="DashboardPage",this.encuestaRoot="EncuestaPage",this.camaraRoot="CamaraPage",this.recomendacionRoot="RecomendacionPage",this.primeraVez=this.navParams.get("primeraVez")}return l.prototype.ionViewDidEnter=function(){this.tabRef.select(this.primeraVez?1:0)},l}()),d=function(){return function(){}}(),f=a(274),p=a(275),h=a(276),I=a(277),g=a(278),m=a(279),v=a(280),T=a(281),y=a(282),Z=a(52),Y=a(2),R=a(167),j=a(17),z=a(163),k=s.X({encapsulation:2,styles:[],data:{}}),P=a(104),S=a(12),F=a(38),x=a(99),C=a(27),O=a(6),V=a(11),w=a(5),B=a(16),D=a(44),E=s.X({encapsulation:2,styles:[],data:{}}),U=a(162),X=a(10),A=a(31),M=s.X({encapsulation:2,styles:[],data:{}}),$=a(14),G=s.X({encapsulation:2,styles:[],data:{}}),H=s.V("page-tab-general",_,function(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"page-tab-general",[],null,null,null,r,G)),s.Y(1,49152,null,0,_,[C.a,$.a],null,null)],null,null)},{},{},[]),J=a(21),N=a(152),W=a(45);a.d(n,"TabGeneralPageModuleNgFactory",function(){return q});var q=s.W(d,[],function(l){return s._10([s._11(512,s.i,s.S,[[8,[f.a,p.a,h.a,I.a,g.a,m.a,v.a,T.a,y.a,H]],[3,s.i],s.s]),s._11(4608,j.k,j.j,[s.r,[2,j.s]]),s._11(4608,J.o,J.o,[]),s._11(4608,J.d,J.d,[]),s._11(512,j.b,j.b,[]),s._11(512,J.m,J.m,[]),s._11(512,J.e,J.e,[]),s._11(512,J.l,J.l,[]),s._11(512,N.a,N.a,[]),s._11(512,N.b,N.b,[]),s._11(512,d,d,[]),s._11(256,W.a,_,[])])})}});
>>>>>>> master
