webpackJsonp([6],{

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_recommendations_service__ = __webpack_require__(295);
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
    function RecommendationsPage(navCtrl, navParams, _recommendationsService, _global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._recommendationsService = _recommendationsService;
        this._global = _global;
        this.alertCtrl = alertCtrl;
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
                for (var j = 0; j < _this.Answers.length; j++) {
                    _this._QuestionUser.answers.push({
                        id: _this.Answers[j]["id"],
                        question: _this.Answers[j]["pregunta"],
                        value: "",
                    });
                }
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
            selector: 'page-recommendations',template:/*ion-inline-start:"/myApp/src/pages/recommendations/recommendations.html"*/'<!-->HEADER</!-->\n<ion-header>\n\n	<div>\n    	<ion-navbar>\n      		<ion-title>Recomendaciones</ion-title>\n    	</ion-navbar>\n  	</div>\n\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content padding>\n\n	<ion-icon name="pulse" class="icono" style="font-size: 50px; text-align: right; padding-left: 50%"></ion-icon>\n\n	<div *ngIf="is_permissible">\n\n		<div *ngIf="_question_modality && _QuestionUser.questions.length">\n\n			<div *ngFor="let recommendation of Recommendations; let i = index">\n		  \n				<div *ngIf="recommendation.categoria != section || i == 0">\n\n					<ion-item text-wrap>\n					\n						<ion-icon name="happy" darkgreen item-left></ion-icon>\n\n		     			<ion-label>{{recommendation.categoria}}</ion-label>\n\n		     		</ion-item>\n\n					<div [class.inactive]="changeSection(recommendation.categoria)"></div>\n					\n				</div>\n\n				<ion-item text-wrap>\n\n		     		<ion-label (tap)="AddSelCatego(recommendation);" tappable>{{recommendation.recommendation}}</ion-label>\n		     	\n		     		<ion-checkbox red item-right [(ngModel)]="_QuestionUser.questions[i].checked" (ionChange)="AddSelCatego(recommendation);"></ion-checkbox>\n\n				</ion-item>\n\n			</div>\n\n		\n\n			<br/>\n			<br/>\n\n\n			<button ion-button full color="primary" (click)="saveRecomm()">Guardar</button>\n\n		</div>\n\n		<div *ngIf="!_question_modality && _QuestionUser.answers != undefined">\n\n			<div *ngIf="_QuestionUser.answers.length">\n\n				<div *ngFor="let Answer of Answers; let j = index">\n			  \n					<div *ngIf="Answer.categoria != section_a || j == 0">\n\n						<ion-item text-wrap>\n						\n							<ion-icon name="checkmark-circle" darkgreen item-left></ion-icon>\n\n			     			<ion-label>{{Answer.categoria}}</ion-label>\n\n			     		</ion-item>\n\n						<div [class.inactive]="changeSection_a(Answer.categoria)"></div>\n						\n					</div>\n\n					<ion-item text-wrap>\n\n			     		<ion-label class="fixedLabel" (tap)="AddSelAnswer(Answer);" tappable>{{Answer.pregunta}}</ion-label>\n			     	\n			     		<ion-input type="text" [(ngModel)]="_QuestionUser.answers[j].value" placeholder="en minutos, dias, texto"></ion-input>\n\n					</ion-item>\n\n				</div>\n\n			</div>\n\n			<br/>\n			<br/>\n\n\n			<button ion-button full color="primary" (click)="saveAnswer()">Guardar</button>\n\n		</div>\n\n	</div>\n\n	<br/>\n	<br/>\n\n\n</ion-content>\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/recommendations/recommendations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_recommendations_service__["a" /* RecommendationsService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommendations__ = __webpack_require__(1122);
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