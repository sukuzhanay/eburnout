webpackJsonp([9],{

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(295);
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





var EncuestaPage = (function () {
    function EncuestaPage(navCtrl, global, database, _recommendationsService, _global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.database = database;
        this._recommendationsService = _recommendationsService;
        this._global = _global;
        this._QuestionUser = {
            email: "",
            user: "",
            survey: "",
            created_at: "",
            updated_at: "",
            questions: [],
            answers: []
        };
        this.key_latestSurvey = "";
        this.date_latestSurvey = "";
        this.to_Survey = false;
        this.on_recommendation = false;
        this.in_response = false;
        this.diff_dates = 0;
        this.last_survey = false;
        this.resultadoPreguntas = { ae: 0, d: 0, rp: 0, q: '' };
        this.indicePregunta = 0;
        this.formulario = { mensaje: '' };
        this.loadQuestionUser();
    }
    EncuestaPage.prototype.loadQuestionUser = function () {
        var _this = this;
        this._QuestionUserList = !this._QuestionUserList ? this._recommendationsService.getQuestionUserList(this._global.usuario.id)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }) : this._QuestionUserList;
        this._QuestionUserList.forEach(function (item) {
            _this.to_Survey = false;
            _this.on_recommendation = false;
            _this.in_response = false;
            console.log('questions 1');
            _this.last_survey = false;
            if (item.length) {
                // verifica el status de la tabla recomendacion-contestación
                _this._QuestionUser = item[0];
                console.log(_this._QuestionUser);
                if (_this._QuestionUser.answers == undefined && _this._QuestionUser.questions.length) {
                    _this.on_recommendation = false;
                    _this.in_response = true;
                    _this.to_Survey = false;
                    _this.diff_dates = _this._recommendationsService.diff_dates(_this._QuestionUser.created_at);
                    if (_this.diff_dates > _this._recommendationsService.days_to_answer) {
                        _this.diff_dates = 0;
                    }
                    else {
                        _this.diff_dates = _this._recommendationsService.days_to_answer - _this.diff_dates;
                    }
                }
                else if (_this._QuestionUser.answers.length && _this._QuestionUser.questions.length) {
                    _this.last_survey = true;
                    _this.get_LastSurvey();
                }
            }
            else {
                // verificamos si la ultima encuesta no esta en recomendaciones
                // 
                // SIGNIFICA QUE LA ENCUESTA ANTERIOR NO HA TENIDO RETROALIMENTACION, ENTONCES, NO PASA
                // 
                // SIGNIFICA QUE NO HA COMENZADO A LLENAR LAS RECOMENDACIONES
                _this.last_survey = true;
                _this.get_LastSurvey();
            }
        });
    };
    EncuestaPage.prototype.get_LastSurvey = function () {
        var _this = this;
        this.LastSurvey = !this.LastSurvey ? this._recommendationsService.getLastUserSurvey(this._global.usuario.id)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }) : this.LastSurvey;
        this.LastSurvey.forEach(function (item) {
            if (item.length) {
                if (_this.last_survey) {
                    _this.key_latestSurvey = item[0]["key"];
                    console.log(_this.key_latestSurvey);
                    _this.date_latestSurvey = item[0]["created_at"];
                    //VERIFICAR SI EL ID DE LA ENCUESTA NO ESTA EN RECOMENDACIONES_RESPUESTAS,
                    // QUIERE DECIR QUE ESTA A LA ESPERA DE RECOMENDACIONES
                    _this._recommendationsService.getQuestionUserPerSurveyList(_this.key_latestSurvey)
                        .valueChanges().subscribe(function (res) {
                        console.log(res);
                        if (_this.last_survey) {
                            if (!res.length) {
                                _this.to_Survey = false;
                                _this.on_recommendation = true;
                                _this.in_response = false;
                            }
                            else {
                                _this.to_Survey = true;
                                _this.on_recommendation = false;
                                _this.in_response = false;
                            }
                        }
                        _this.last_survey = false;
                    });
                }
            }
            else {
                _this.to_Survey = true;
                _this.on_recommendation = false;
                _this.in_response = false;
            }
        });
    };
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
        this.loadQuestionUser();
        this.navCtrl.parent.select(2);
    };
    EncuestaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-encuesta',template:/*ion-inline-start:"/myApp/src/pages/encuesta/encuesta.html"*/'<!-->HEADER</!-->\n<ion-header>\n  <div>\n    <ion-navbar>\n      <ion-title>Encuesta</ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content>\n\n    <div *ngIf="!to_Survey && !on_recommendation && !in_response">\n        \n        <div class="contenedor">\n        \n            <div class="bloque-pregunta">\n                <p class="pregunta">Cargando...</p>\n            </div>\n\n        </div>\n\n    </div>\n\n\n    <div *ngIf="to_Survey && !on_recommendation && !in_response">\n        \n        <p class="num-pregunta">{{ indicePregunta + 1 }} de {{ this.global.questions.length }}</p>\n        <div class="contenedor">\n        \n            <div class="bloque-pregunta">\n                <p class="pregunta">{{ global.questions[indicePregunta].question }}</p>\n            </div>\n        \n            <span *ngIf="global.questions[indicePregunta].type != \'Q\'; then bloqueRespuestas else bloqueInput"></span>\n\n            <ng-template #bloqueRespuestas>\n                <button ion-button icon-only (click)="respuesta(0)" style="background: #A10E2F" class="btn-respuesta">\n                    NUNCA\n                </button>\n                <button ion-button icon-only (click)="respuesta(1)" style="background: #82613C" class="btn-respuesta">\n                    Algunas veces al AÑO\n                </button>\n                <button ion-button icon-only (click)="respuesta(2)" style="background: #F59A00" class="btn-respuesta">\n                    Una vez a MES\n                </button>\n                <button ion-button icon-only (click)="respuesta(3)" style="background: #EB5D13" class="btn-respuesta">\n                    Algunas veces al MES\n                </button>\n                <button ion-button icon-only (click)="respuesta(4)" style="background: #2499D3" class="btn-respuesta">\n                    Una vez a la SEMANA\n                </button>\n                <button ion-button icon-only (click)="respuesta(5)" style="background: #347193" class="btn-respuesta">\n                    Algunas veces a la SEMANA\n                </button>\n                <button ion-button icon-only (click)="respuesta(6)" style="background: #70A63B" class="btn-respuesta">\n                    DIARIAMENTE\n                </button>\n            </ng-template>\n\n            <ng-template #bloqueInput>\n                <form (ngSubmit)="terminar()" class="formulario">\n                    <ion-item>\n                        <ion-textarea [(ngModel)]="formulario.mensaje" name="mensaje" rows="6" placeholder="Mensaje opcional"></ion-textarea>\n                    </ion-item>\n                    <button ion-button type="submit" class="btn-1">Terminar</button>\n                </form>\n            </ng-template>\n        </div>\n\n    </div>\n\n\n    <div *ngIf="!to_Survey && on_recommendation && !in_response">\n        \n        <div class="contenedor">\n        \n            <div class="bloque-pregunta">\n                <p class="pregunta">Es necesario que empiece el considerar ya aceptar recomendaciones</p>\n                <p class="pregunta">En {{_recommendationsService.days_to_answer}} días, dará las respuestas </p>\n            </div>\n\n        </div>\n\n    </div>\n\n\n    <div *ngIf="!to_Survey && !on_recommendation && in_response">\n        \n        <div class="contenedor">\n        \n            <div class="bloque-pregunta">\n                <p class="pregunta">Es necesario que continue el considerar recomendaciones,</p>\n                <p class="pregunta">o bien que espere al periodo de respuestas. </p>\n                <p class="pregunta">Faltan {{diff_dates}} día(s) para que pueda ingresar sus respuestas. </p>\n            </div>\n\n        </div>\n\n    </div>\n\n\n   \n\n\n\n\n</ion-content>\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/encuesta/encuesta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_recommendations_service__["a" /* RecommendationsService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], EncuestaPage);
    return EncuestaPage;
}());

//# sourceMappingURL=encuesta.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaPageModule", function() { return EncuestaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encuesta__ = __webpack_require__(1116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EncuestaPageModule = (function () {
    function EncuestaPageModule() {
    }
    EncuestaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__encuesta__["a" /* EncuestaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__encuesta__["a" /* EncuestaPage */]),
            ],
        })
    ], EncuestaPageModule);
    return EncuestaPageModule;
}());

//# sourceMappingURL=encuesta.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map