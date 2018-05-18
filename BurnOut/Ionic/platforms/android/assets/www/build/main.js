webpackJsonp([16],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addbracelet/addbracelet.module": [
		473,
		15
	],
	"../pages/adduser/adduser.module": [
		474,
		14
	],
	"../pages/adminbracelet/adminbracelet.module": [
		475,
		13
	],
	"../pages/consentimiento/consentimiento.module": [
		476,
		12
	],
	"../pages/dashboard/dashboard.module": [
		477,
		0
	],
	"../pages/editbracelet/editbracelet.module": [
		478,
		11
	],
	"../pages/edituser/edituser.module": [
		479,
		10
	],
	"../pages/encuesta/encuesta.module": [
		480,
		9
	],
	"../pages/login/login.module": [
		481,
		1
	],
	"../pages/personaldata/personaldata.module": [
		482,
		2
	],
	"../pages/profile/profile.module": [
		483,
		8
	],
	"../pages/recomendacion/recomendacion.module": [
		484,
		7
	],
	"../pages/recommendations/recommendations.module": [
		485,
		6
	],
	"../pages/registro/registro.module": [
		486,
		5
	],
	"../pages/tab-general/tab-general.module": [
		487,
		4
	],
	"../pages/userbracelet/userbracelet.module": [
		488,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenFitBitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenFitBitService = (function () {
    function TokenFitBitService(db) {
        this.db = db;
        this.tokenFBUListRef = this.db.list('token_fitbit/');
    }
    TokenFitBitService.prototype.getTokenList = function () {
        return this.tokenFBUListRef;
    };
    TokenFitBitService.prototype.getTokenFitBit = function (email) {
        return this.db.list('token_fitbit/', function (referencia) { return referencia.orderByChild('email').equalTo(email); });
    };
    TokenFitBitService.prototype.addTokenFB = function (tokenfb) {
        var date = new Date();
        tokenfb.created_at = date.toISOString();
        return this.tokenFBUListRef.push(tokenfb);
    };
    TokenFitBitService.prototype.updateTokenFB = function (tokenfb) {
        var date = new Date();
        tokenfb.updated_at = date.toISOString();
        return this.tokenFBUListRef.update(tokenfb.key, tokenfb);
    };
    TokenFitBitService.prototype.removeTokenFB = function (tokenfb) {
        return this.tokenFBUListRef.remove(tokenfb.key);
    };
    TokenFitBitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TokenFitBitService);
    return TokenFitBitService;
}());

//# sourceMappingURL=tokenfitbit-service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFitBitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFitBitService = (function () {
    function DataFitBitService(db) {
        this.db = db;
        this.dataFitBitAHIRef = this.db.list('data_fitbit_ahi/');
        this.dataFitBitSleepRef = this.db.list('data_fitbit_sleep/');
    }
    DataFitBitService.prototype.addDataFitBitAHI = function (userfbahi) {
        return this.dataFitBitAHIRef.push(userfbahi);
    };
    DataFitBitService.prototype.addDataFitBitSleep = function (userfbsleep) {
        return this.dataFitBitSleepRef.push(userfbsleep);
    };
    DataFitBitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DataFitBitService);
    return DataFitBitService;
}());

//# sourceMappingURL=datafitbit.service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BraceletListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BraceletListService = (function () {
    function BraceletListService(db) {
        this.db = db;
        this.braceletListRef = this.db.list('/bracelets');
    }
    BraceletListService.prototype.getBraceletList = function () {
        return this.braceletListRef;
    };
    BraceletListService.prototype.addBracelet = function (bracelet) {
        return this.braceletListRef.push(bracelet);
    };
    BraceletListService.prototype.updateBracelet = function (bracelet) {
        return this.braceletListRef.update(bracelet.key, bracelet);
    };
    BraceletListService.prototype.removeBracelet = function (bracelet) {
        return this.braceletListRef.remove(bracelet.key);
    };
    BraceletListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BraceletListService);
    return BraceletListService;
}());

//# sourceMappingURL=bracelet-list.service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileListService = (function () {
    function ProfileListService(db) {
        this.db = db;
        this.profileListRef = this.db.list('users/');
    }
    ProfileListService.prototype.getProfileList = function () {
        return this.profileListRef;
    };
    ProfileListService.prototype.addUser = function (user) {
        return this.profileListRef.push(user);
    };
    ProfileListService.prototype.updateUser = function (user) {
        return this.profileListRef.update(user.key, user);
    };
    ProfileListService.prototype.removeUser = function (user) {
        return this.profileListRef.remove(user.key);
    };
    ProfileListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfileListService);
    return ProfileListService;
}());

//# sourceMappingURL=profile-list.service.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatabaseProvider = (function () {
    function DatabaseProvider(http, db) {
        this.http = http;
        this.db = db;
    }
    /* CONSULTA PREGUNTAS */
    DatabaseProvider.prototype.preguntas = function () {
        return this.db.list('/questions').valueChanges();
    };
    /* FIN CONSULTA PREGUNTAS */
    /* CONSULTA RECOMENDACIONES */
    DatabaseProvider.prototype.recomendaciones = function () {
        return this.db.list('/recommendations').valueChanges();
    };
    /* FIN CONSULTA RECOMENDACIONES */
    /* CONSULTA ESPECIALIDADES */
    DatabaseProvider.prototype.especialidades = function () {
        return this.db.list('/especialidades').valueChanges();
    };
    /* FIN CONSULTA ESPECIALIDADES */
    /* CONSULTA REGISTRO USUARIO BD */
    DatabaseProvider.prototype.registroUsuarioBD = function (usuario) {
        this.db.database.ref('/usuarios/' + usuario.id).set(usuario);
    };
    /* FIN CONSULTA REGISTRO USUARIO BD */
    /* CONSULTA USUARIO REGISTRADO BD */
    DatabaseProvider.prototype.usuarioRegistradoBD = function (idUsuario) {
        return this.db.object('/usuarios/' + idUsuario).valueChanges();
    };
    /* FIN CONSULTA USUARIO REGISTRADO BD */
    /* CONSULTA GUARDAR ULTIMA ENCUESTA */
    DatabaseProvider.prototype.guardarUltimaEncuesta = function (idUsuario, resultadoPreguntas) {
        var date = new Date();
        resultadoPreguntas["created_at"] = date.toISOString();
        this.db.database.ref('/usuarios/' + idUsuario + '/ultimaencuesta').set(resultadoPreguntas);
    };
    /* FIN CONSULTA GUARDAR ULTIMA ENCUESTA */
    /* CONSULTA GUARDAR ENCUESTA */
    DatabaseProvider.prototype.guardarEncuesta = function (idUsuario, email, resultadoPreguntas) {
        var date = new Date();
        this.db.database.ref('/encuestas').push({ id: idUsuario, email: email, created_at: date.toISOString(), encuesta: resultadoPreguntas });
    };
    /* FIN CONSULTA GUARDAR ENCUESTA */
    /* CONSULTA ULTIMAS 3 ENCUESTA */
    DatabaseProvider.prototype.encuestasUltimas = function (idUsuario) {
        return this.db.list('/encuestas/', function (encuestas) { return encuestas.orderByChild('id').equalTo(idUsuario).limitToLast(3); }).valueChanges();
    };
    /* FIN CONSULTA ULTIMAS 3 ENCUESTA */
    /* CONSULTA GUARDAR ENCUESTA */
    DatabaseProvider.prototype.guardarEstadoAnimo = function (idUsuario, estadoAnimo) {
        this.db.database.ref('/estadosanimo').push({ id: idUsuario, estado: estadoAnimo });
    };
    /* FIN CONSULTA GUARDAR ENCUESTA */
    /* CONSULTA FOTO CLOUD VIDION */
    DatabaseProvider.prototype.consultaFoto = function (foto) {
        var body = {
            "requests": [
                {
                    "image": {
                        "content": foto
                    },
                    "features": [
                        {
                            "type": "FACE_DETECTION"
                        }
                    ]
                }
            ]
        };
        return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + 'AIzaSyB_mk7PfJCwuHBCw51P4juWqxBJdwVEG5o', body);
    };
    /* FIN CONSULTA FOTO CLOUD VIDION */
    /* CONSULTA DEL CLIENT_ID DEL USUARIO */
    DatabaseProvider.prototype.idClientFitBit = function (email) {
        return this.db.list('/users/', function (referencia) { return referencia.orderByChild('email').equalTo(email); }).valueChanges();
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsentUserService = (function () {
    function ConsentUserService(db) {
        this.db = db;
        this.consentListRef = this.db.list('consent/');
    }
    ConsentUserService.prototype.getConsentUser = function (email) {
        return this.db.list('/consent/', function (referencia) { return referencia.orderByChild('email').equalTo(email); }).valueChanges();
    };
    ConsentUserService.prototype.addConsent = function (consent) {
        return this.consentListRef.push(consent);
    };
    ConsentUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ConsentUserService);
    return ConsentUserService;
}());

//# sourceMappingURL=consent-user.service.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendationsService = (function () {
    function RecommendationsService(db) {
        this.db = db;
        this.recommendationsQListRef = this.db.list('question_categories/');
        this.questionUserListRef = this.db.list('question_answer_user/');
        this.answerQListRef = this.db.list('answer_categories/');
        /**
         * Son los días iniciales y permisibles para empezar a contestar, antes puede escoger cualquier indicativo,
         * luego tiene que responder
         * @type {number}
         */
        this.days_to_answer = 7;
        this.id_first_question_forced = 23;
        this.id_second_question_forced = 24;
    }
    RecommendationsService.prototype.getQuestionUserList = function (idUsuario) {
        return this.db.list('/question_answer_user/', function (questionUser) { return questionUser.orderByChild('user').equalTo(idUsuario).limitToLast(1); });
    };
    RecommendationsService.prototype.getQuestionUserPerSurveyList = function (survey) {
        return this.db.list('/question_answer_user/', function (questionUser) { return questionUser.orderByChild('survey').equalTo(survey).limitToLast(1); });
    };
    RecommendationsService.prototype.addQuestionUser = function (qu) {
        return this.questionUserListRef.push(qu);
    };
    RecommendationsService.prototype.updateQuestionUser = function (qu) {
        return this.questionUserListRef.update(qu.key, qu);
    };
    RecommendationsService.prototype.getQuestionsList = function () {
        return this.recommendationsQListRef;
    };
    RecommendationsService.prototype.getAnswersList = function () {
        return this.answerQListRef;
    };
    RecommendationsService.prototype.getLastUserSurvey = function (idUsuario) {
        return this.db.list('/encuestas/', function (encuestas) { return encuestas.orderByChild('id').equalTo(idUsuario).limitToLast(1); });
    };
    RecommendationsService.prototype.diff_dates = function (dateq) {
        var days = 0;
        var dq = new Date(dateq);
        var b = new Date();
        var c = b.toISOString();
        var d = new Date(c);
        days = Math.round((d.getTime() - dq.getTime()) / (1000 * 60 * 60 * 24));
        return days;
    };
    RecommendationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RecommendationsService);
    return RecommendationsService;
}());

//# sourceMappingURL=recommendations.service.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitBitServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_config__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_fbsleep__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_global__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tokenfitbit_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__database_datafitbit_service__ = __webpack_require__(245);
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
 // HttpHeaders ha sido importado para poder usar en el request.

 // Haceo un mapeo del post y/o get



 // Pre- cargala application
 // Model, para instanciar la información del usuario





var FitBitServiceProvider = (function () {
    function FitBitServiceProvider(http, // get y post
        platform, alertCtrl, _global, _storage, _tokenFitBitService, _dataFitBitService) {
        // localStorage.setItem('fb_access_token','');
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this._global = _global;
        this._storage = _storage;
        this._tokenFitBitService = _tokenFitBitService;
        this._dataFitBitService = _dataFitBitService;
        this._renew_token = false;
        this._access_token = "";
        // ID CLIENT FOR ACCESS PERSONAL DATA IN FITBIT
        this._client_id = "";
        this._client_secret = "";
        this._iCron = null;
        this._timeCron = 5000;
        // Series de tiempo activity heart
        this._tsAHI = [];
        this._stayWaiting = false;
        this._db_client_id = "";
        this._TokenFBUser = {
            email: "",
            token: "",
            client_id: "",
            created_at: "",
            updated_at: ""
        };
        this._UserFBAHI = {
            email: "",
            val_min: 0,
            val_max: 0,
            fecha: ""
        };
        this._UserFBSleep = {
            email: "",
            hours: 0,
            minutes: 0,
            percent_eight_hours: 0,
            fecha: ""
        };
        /**
         * SOLO PARA CUANDO SE ESTE EN NAVEGADOR Y NO EN MOBILE, ES PARA QUE NO PIDA CONTINUAMENTE EL TOCKEN EN NUEVA VENTANA
         * @type {boolean}
         */
        this._debugin = false;
        this._fbsleep = new __WEBPACK_IMPORTED_MODULE_7__models_fbsleep__["a" /* FBSleep */](0, "", "", 0);
        this.errorObserver = null;
        this.error = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this.errorObserver = observer;
        });
        this._set_time_cron();
        this._oninit();
    }
    FitBitServiceProvider.prototype._oninit = function () {
        var _this = this;
        this._TokenFBUser.email = this._global.usuario.email;
        var _token = "";
        this.tokenFBRecord = this._tokenFitBitService.getTokenFitBit(this._TokenFBUser.email)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.tokenFBRecord.forEach(function (item) {
            _this.toStopCron();
            if (item.length) {
                _this._TokenFBUser = item[0];
            }
            else {
                _this._TokenFBUser.client_id = _this._global.client_id;
            }
            if (_this._debugin) {
                console.log(_this._TokenFBUser);
            }
            _this._db_client_id = _this._TokenFBUser.client_id;
            if (_this._db_client_id == _this._global.client_id) {
                _token = _this._TokenFBUser.token;
            }
            else {
                _token = "";
            }
            _this._client_secret = _this._global.client_secret;
            _this._storage.set('fb_client_secret', _this._client_secret);
            _this._client_id = _this._db_client_id;
            _this._storage.set('fb_client_id', _this._db_client_id);
            _this._access_token = _token;
            _this._storage.set('fb_access_token', _token);
            //this._load_vars();
            //_self._save_token_desktop();
            _this.to_init_in_client();
        });
    };
    FitBitServiceProvider.prototype._save_token_desktop = function () {
        this._TokenFBUser.token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MjVLOTkiLCJhdWQiOiIyMkNHODQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTI1OTc1MzYyLCJpYXQiOjE1MjU4ODg5NjJ9.kXRLQx3JJlvqeDtBqECPdDm7HFFUFctC8hvmOIE_Tp8";
        this._TokenFBUser.client_id = "22CG84";
        this._tokenFitBitService.addTokenFB(this._TokenFBUser);
    };
    FitBitServiceProvider.prototype.to_init_in_client = function () {
        this._valuate_error({ error: '', status: 1020 });
    };
    FitBitServiceProvider.prototype._set_time_cron = function () {
        var t_in_ms = __WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].rate_limit <= 0 ? 150 : __WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].rate_limit;
        // Time in miliseconds to cronjob
        this._timeCron = t_in_ms / 60 * 60 * 1000;
    };
    FitBitServiceProvider.prototype._load_vars = function () {
        var _self = this;
        if (this._global.client_id) {
            _self._storage.get('fb_client_id').then(function (client_id) {
                _self._client_id = client_id ? client_id : "";
            });
            _self._storage.get('fb_access_token').then(function (val) {
                _self._access_token = val ? val : "";
            });
            _self._storage.get('fb_client_secret').then(function (client_secret) {
                _self._client_secret = client_secret ? client_secret : "";
            });
            console.log('ENTRO!!!');
        }
    };
    FitBitServiceProvider.prototype._get_url = function () {
        __WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].body.client_id = this._global.client_id;
        return __WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].url + "?" + Object.keys(__WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].body).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].body[k]);
        }).join('&');
    };
    FitBitServiceProvider.prototype.get_strDate = function (sDate, sFormat) {
        if (sDate === void 0) { sDate = ""; }
        if (sFormat === void 0) { sFormat = ""; }
        var date;
        if (sDate.length) {
            date = new Date(sDate);
        }
        else {
            date = new Date();
        }
        var day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
        if (sFormat == "HH:mm:ss")
            return date.getHours().toString() + ":" + minutes + ":" + date.getSeconds().toString();
        else if (sFormat == "dd-mm-yyyy")
            return day + "-" + month + "-" + date.getFullYear().toString();
        else
            return date.getFullYear().toString() + "-" + month + "-" + day;
    };
    FitBitServiceProvider.prototype._getAuthPermission = function () {
        // Metodos observables, si pasa algo X, doy la promesa de regresar con algo.
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self._db_client_id == self._global.client_id) {
                self._renew_token = false;
            }
            else {
                self._renew_token = true;
            }
            var navigator_clean = self._renew_token ? ",clearsessioncache=yes,clearcache=yes" : "";
            // self.showAlert("a renew => "+navigator_clean);
            if (window.cordova != undefined) {
                var browser_1 = window.cordova.InAppBrowser.open(self._get_url(), '_blank', 'location=no' + navigator_clean);
                browser_1.addEventListener('loadstart', function (event) {
                    if ((event.url).indexOf(__WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].body.redirect_uri) === 0) {
                        browser_1.removeEventListener('exit', function () { });
                        browser_1.close();
                        var responseParameters = (((event.url).split(__WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].key_access_token)[1]).split("&")[0]).split('=')[1];
                        var parsedResponse = {};
                        var defaultError = { error: 'Problem authenticating with FitBit', status: 1010 };
                        if (responseParameters !== undefined && responseParameters !== null) {
                            parsedResponse[__WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].key_access_token] = responseParameters;
                            resolve(parsedResponse);
                        }
                        else {
                            reject(defaultError);
                        }
                    }
                });
                browser_1.addEventListener('exit', function (event) {
                    reject({ error: 'The FitBit authorization in flow was canceled', status: 1010 });
                });
            }
            else {
                window.open(self._get_url(), '_blank', 'location=no' + navigator_clean);
                resolve({ "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MjVLOTkiLCJhdWQiOiIyMkNHODQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTI2NTg3NzI2LCJpYXQiOjE1MjYwMTY5Mjh9.PkVFjhGPQIwJwGB0WhnBqZIfAen69NOi338lC4Te6qM" });
            }
        });
    };
    FitBitServiceProvider.prototype._toAutorizate = function () {
        var _this = this;
        var self = this;
        this._getAuthPermission().then(function (success) {
            if (success[__WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].key_access_token] !== undefined) {
                self._access_token = success[__WEBPACK_IMPORTED_MODULE_5__auth_config__["a" /* AuthConfig */].key_access_token];
                self._renew_token = false;
                self._client_id = self._global.client_id;
                //GUARDAR EL NUEVO TOCKEN
                if (self._TokenFBUser.token.toString().trim().length) {
                    self._TokenFBUser.token = self._access_token;
                    self._tokenFitBitService.updateTokenFB(self._TokenFBUser);
                }
                else {
                    self._TokenFBUser.token = self._access_token;
                    self._tokenFitBitService.addTokenFB(self._TokenFBUser);
                }
                self._client_secret = self._global.client_secret;
                self._storage.set('fb_client_id', self._client_id);
                self._storage.set('fb_client_secret', self._client_secret);
                //localStorage.setItem('fb_access_token', self._access_token);
                _this._global.access_token = self._access_token;
                self._storage.set('fb_access_token', self._access_token);
                self._valuate_error({ status: 1001 });
            }
        }, function (error) {
            self._valuate_error(error);
        });
    };
    FitBitServiceProvider.prototype.check_auth = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //this._load_vars();
            if (!_this._access_token.trim().length && _this.have_bracelet()) {
                _this._toAutorizate();
            }
            else {
                _this._valuate_error({ status: 1001 });
            }
        });
    };
    FitBitServiceProvider.prototype._valuate_error = function (error) {
        this.errorObserver.next(error);
        if (this._debugin) {
            console.log(error);
        }
        if (error.status != undefined) {
            if (error.status == 400 || error.status == 401) {
                // Authorization code invalid
                this.toStopCron();
                //localStorage.setItem('fb_access_token',null);
                /*this._global.access_token = "";
                this._storage.set('fb_access_token', "");
                this._load_vars();*/
                if (this._debugin && error.status == 401) {
                    this.toStopCron();
                    //this._toRenewToken();
                }
                else {
                    this._toAutorizate();
                }
            }
            else if (error.status == 429) {
                this._stayWaiting = true;
            }
            else if (error.status == 1002) {
                this._stayWaiting = false;
            }
        }
    };
    FitBitServiceProvider.prototype.toStopCron = function () {
        if (this._iCron) {
            clearInterval(this._iCron);
        }
        this._iCron = null;
    };
    FitBitServiceProvider.prototype.toStartCron = function () {
        if (this._iCron) {
            this.toStopCron();
        }
        var self = this;
        self._toCron();
        this._iCron = setInterval(function () {
            self._toCron();
        }, self._timeCron);
    };
    FitBitServiceProvider.prototype._toCron = function () {
        this._get_heart();
    };
    FitBitServiceProvider.prototype._get_authHeader = function () {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this._access_token
        };
    };
    FitBitServiceProvider.prototype._get_heart = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](this._get_authHeader());
        var _self = this;
        if (this._debugin) {
            console.log(this._get_authHeader());
        }
        // pasada URL de cada segundo
        // https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec/time/00:00/23:59.json
        // nueva URL de cada minuto
        var url = "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json";
        this.http.get(url, { headers: headers })
            .subscribe(function (timeSeries) {
            if (_self._stayWaiting)
                _self._valuate_error({ status: 1002 });
            if (timeSeries['activities-heart-intraday'] !== undefined) {
                _self._tsAHI = timeSeries['activities-heart-intraday'].dataset.map(function (measurement) {
                    var a = {
                        name: measurement.time,
                        value: measurement.value
                    };
                    return a;
                });
            }
            if (_self._debugin) {
                console.log(_self._tsAHI);
            }
            _self._get_sleep();
        }, function (error) {
            _self._valuate_error(error);
        });
    };
    FitBitServiceProvider.prototype._get_sleep = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](this._get_authHeader());
        var _self = this;
        if (this._debugin) {
            console.log(this._get_authHeader());
        }
        var dNow = this.get_strDate();
        this.http.get('https://api.fitbit.com/1.2/user/-/sleep/date/' + dNow + '/' + dNow + '.json', { headers: headers }).subscribe(function (sleeps) {
            if (_self._stayWaiting)
                _self._valuate_error({ status: 1002 });
            if (sleeps["sleep"] !== undefined) {
                if (sleeps["sleep"][0] !== undefined) {
                    var len = sleeps["sleep"].length - 1;
                    _self._fbsleep.starttime = sleeps["sleep"][len]["startTime"];
                    _self._fbsleep.endtime = sleeps["sleep"][len]["endTime"];
                    _self._fbsleep.timeinbed = 0;
                    _self._fbsleep.minutesawake = 0;
                    for (var i = len; i >= 0; i--) {
                        _self._fbsleep.timeinbed += sleeps["sleep"][i]["timeInBed"];
                        _self._fbsleep.minutesawake += sleeps["sleep"][i]["minutesAwake"];
                    }
                }
                else {
                    _self._fbsleep.timeinbed = sleeps["sleep"]["timeInBed"];
                    _self._fbsleep.starttime = sleeps["sleep"]["startTime"];
                    _self._fbsleep.endtime = sleeps["sleep"]["endTime"];
                    _self._fbsleep.minutesawake = sleeps["sleep"]["minutesAwake"];
                }
            }
            if (_self._debugin) {
                console.log(_self._fbsleep.timeinbed);
                console.log(_self._fbsleep.starttime);
                console.log(_self._fbsleep.endtime);
                console.log(_self._fbsleep.minutesawake);
            }
        }, function (error) {
            _self._valuate_error(error);
        });
    };
    FitBitServiceProvider.prototype._toRenewToken = function () {
        var header_b64 = window.btoa(this._client_id + ":" + this._client_secret);
        var header = {
            'Authorization': 'Basic ' + header_b64,
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](header);
        var _self = this;
        var params = "grant_type=refresh_token&refresh_token=" + this._access_token;
        this.http.post('https://api.fitbit.com/oauth2/token', params, { headers: headers })
            .subscribe(function (refresh) {
            //_self.showAlert( JSON.stringify(refresh));
            console.log(refresh);
        }, function (error) {
            console.log(error);
        });
    };
    FitBitServiceProvider.prototype.sleep = function () {
        return this._fbsleep;
    };
    FitBitServiceProvider.prototype.tsAHI = function () {
        return this._tsAHI;
    };
    FitBitServiceProvider.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'FitBit',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    FitBitServiceProvider.prototype.have_bracelet = function () {
        return this._global.client_id == "" || this._global.client_id == null || this._global.client_id == undefined
            ? false
            : true;
    };
    FitBitServiceProvider.prototype.toSaveAHI = function (val_min, val_max) {
        this._UserFBAHI.val_min = val_min;
        this._UserFBAHI.val_max = val_max;
        var date = new Date();
        this._UserFBAHI.fecha = date.toISOString();
        this._UserFBAHI.email = this._global.usuario.email;
        this._dataFitBitService.addDataFitBitAHI(this._UserFBAHI);
    };
    FitBitServiceProvider.prototype.toSaveSleep = function (hours, minutes, percent_eight_hours) {
        var date = new Date();
        this._UserFBSleep.fecha = date.toISOString();
        this._UserFBSleep.email = this._global.usuario.email;
        this._UserFBSleep.email = this._global.usuario.email;
        this._UserFBSleep.email = this._global.usuario.email;
        this._UserFBSleep.email = this._global.usuario.email;
        this._UserFBSleep.hours = hours;
        this._UserFBSleep.minutes = minutes;
        this._UserFBSleep.percent_eight_hours = percent_eight_hours;
        this._dataFitBitService.addDataFitBitSleep(this._UserFBSleep);
    };
    FitBitServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])() // Decorator
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__tokenfitbit_service__["a" /* TokenFitBitService */],
            __WEBPACK_IMPORTED_MODULE_11__database_datafitbit_service__["a" /* DataFitBitService */]])
    ], FitBitServiceProvider);
    return FitBitServiceProvider;
}());

//# sourceMappingURL=fit-bit-service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutomaticLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutomaticLoginService = (function () {
    function AutomaticLoginService(db, device, fireAuth, global) {
        this.db = db;
        this.device = device;
        this.fireAuth = fireAuth;
        this.global = global;
        this._user = "mti.jgaytan@gmail.com";
        this._pwd = "joga321";
        this._logged_user = {
            email: "",
            created_at: "",
            latest_logged: "",
            uuid: "",
            pwd: "",
            token_message: ""
        };
        this._uuid_tmp = '70a0353498a27a34';
    }
    AutomaticLoginService.prototype.recordLogin = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self._getMyIDDevice().then(function (uuid) {
                self._uuid = !uuid ? self._uuid_tmp : uuid;
                self.fireAuth.auth.signInWithEmailAndPassword(self._user, self._pwd)
                    .then(function (resultado) {
                    self._userHasLoggedBD(self._uuid).snapshotChanges()
                        .subscribe(function (changes) {
                        var record = { email: "", token_message: "", created_at: "", uuid: "", pwd: "", latest_logged: "" };
                        changes.map(function (c) {
                            record[c.payload.key] = c.payload.val();
                        });
                        self._logged_user = { email: "", token_message: "", created_at: "", uuid: "", pwd: "", latest_logged: "" };
                        if (Object.keys(record).length) {
                            self._logged_user = record;
                        }
                        self.fireAuth.auth.signOut().then(function (value) { })
                            .catch(function (err) {
                            console.log(err);
                            reject(err);
                        });
                        resolve(self._logged_user);
                    });
                })
                    .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
            }, function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    AutomaticLoginService.prototype._userHasLoggedBD = function (device) {
        return this.db.list('/has_logged/' + device);
    };
    AutomaticLoginService.prototype.addLoggedUser = function (record) {
        var date = new Date();
        record["created_at"] = date.toISOString();
        record["uuid"] = this._uuid;
        record["token_message"] = this.global.token_message;
        return this.db.database.ref('/has_logged/' + this._uuid).set(record);
    };
    AutomaticLoginService.prototype.updateLoggedUser = function (record) {
        var date = new Date();
        record.latest_logged = date.toISOString();
        record.token_message = this.global.token_message;
        return this.db.database.ref('/has_logged/' + this._uuid).set(record);
    };
    AutomaticLoginService.prototype._getMyIDDevice = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            resolve(self.device.uuid);
        });
    };
    AutomaticLoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalProvider */]])
    ], AutomaticLoginService);
    return AutomaticLoginService;
}());

//# sourceMappingURL=automatic-login.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(320);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_database__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_fit_bit_service_fit_bit_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_echarts__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_fcm__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_database_bracelet_list_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_database_profile_list_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_database_consent_user_service__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_fit_bit_service_tokenfitbit_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_database_datafitbit_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_database_recommendations_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_global_automatic_login_service__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var firebaseConfig = {
    apiKey: "AIzaSyA0mnZssyqo5PieFUUBTipdU9VB9uh0Xvo",
    authDomain: "my-first-project-7d187.firebaseapp.com",
    databaseURL: "https://my-first-project-7d187.firebaseio.com",
    projectId: "my-first-project-7d187",
    storageBucket: "my-first-project-7d187.appspot.com",
    messagingSenderId: "323245343363"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: 'md',
                    tabsHideOnSubPages: true,
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false,
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/addbracelet/addbracelet.module#AddbraceletPageModule', name: 'AddbraceletPage', segment: 'addbracelet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adduser/adduser.module#AdduserPageModule', name: 'AdduserPage', segment: 'adduser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminbracelet/adminbracelet.module#AdminbraceletPageModule', name: 'AdminbraceletPage', segment: 'adminbracelet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consentimiento/consentimiento.module#ConsentimientoPageModule', name: 'ConsentimientoPage', segment: 'consentimiento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editbracelet/editbracelet.module#EditbraceletPageModule', name: 'EditbraceletPage', segment: 'editbracelet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edituser/edituser.module#EdituserPageModule', name: 'EdituserPage', segment: 'edituser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/encuesta/encuesta.module#EncuestaPageModule', name: 'EncuestaPage', segment: 'encuesta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personaldata/personaldata.module#PersonaldataPageModule', name: 'PersonaldataPage', segment: 'personaldata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recomendacion/recomendacion.module#RecomendacionPageModule', name: 'RecomendacionPage', segment: 'recomendacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recommendations/recommendations.module#RecommendationsPageModule', name: 'RecommendationsPage', segment: 'recommendations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-general/tab-general.module#TabGeneralPageModule', name: 'TabGeneralPage', segment: 'tab-general', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userbracelet/userbracelet.module#UserbraceletPageModule', name: 'UserbraceletPage', segment: 'userbracelet', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_fit_bit_service_fit_bit_service__["a" /* FitBitServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_database_bracelet_list_service__["a" /* BraceletListService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_database_profile_list_service__["a" /* ProfileListService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_database_consent_user_service__["a" /* ConsentUserService */],
                __WEBPACK_IMPORTED_MODULE_21__providers_fit_bit_service_tokenfitbit_service__["a" /* TokenFitBitService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_22__providers_database_datafitbit_service__["a" /* DataFitBitService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_database_recommendations_service__["a" /* RecommendationsService */],
                __WEBPACK_IMPORTED_MODULE_25__providers_global_automatic_login_service__["a" /* AutomaticLoginService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthConfig; });
var AuthConfig = {
    // Url of the Identity Provider
    url: "https://www.fitbit.com/oauth2/authorize",
    // allow request per hour 
    rate_limit: 150,
    key_access_token: "access_token",
    body: {
        // URL to redirect the user to after login
        redirect_uri: "https://localhost:8100/eburnout_callback",
        // The client id
        client_id: "",
        // set the scope for the permissions the client should request
        scope: "activity nutrition heartrate location nutrition profile settings sleep social weight",
        // set the response type, token or code
        response_type: "token",
        expires_in: "2592000" // "604800"
    }
};
//# sourceMappingURL=auth-config.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBSleep; });
// del tiempo en cama se le puede restart el tiempo awake para presentar en pantalla
var FBSleep = (function () {
    function FBSleep(timeinbed, starttime, endtime, minutesawake) {
        this.timeinbed = timeinbed;
        this.starttime = starttime;
        this.endtime = endtime;
        this.minutesawake = minutesawake;
    }
    return FBSleep;
}());

//# sourceMappingURL=fbsleep.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(alertCtrl, platform, statusBar, splashScreen, _fcm, global) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this._fcm = _fcm;
        this.global = global;
        this.rootPage = 'LoginPage';
        this._title_default = "Eburnout";
        this._mge_default = "Ha recibido una notificación";
        var self = this;
        platform.ready().then(function () {
            statusBar.styleDefault();
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 10000);
            _this._fcm.getToken()
                .then(function (token) {
                self.global.token_message = token;
                console.log("token is ", token);
            }).catch(function (error) {
                console.log(error);
            });
            _this._fcm.onTokenRefresh().subscribe(function (token) {
                self.global.token_message = token;
                console.log("Nuevo token", token);
            }, function (error) { return console.log(error); });
            _this._fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log("Recibido en backgroud", JSON.stringify(data));
                }
                else {
                    console.log("Recibido en foreground", JSON.stringify(data));
                    var title = data.title != undefined ? data.title : _this._title_default;
                    var message = data.body != undefined ? data.body : _this._mge_default;
                    var alert_1 = _this.alertCtrl.create({
                        title: title,
                        message: message,
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'cancelar'
                            }
                        ]
                    });
                    alert_1.present();
                }
            }, function (error) {
                console.log("Error ", error);
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalProvider = (function () {
    function GlobalProvider() {
        this.questions = [];
        this.recommendations = [];
        this.usuario = [];
        this.resultadosPreguntas = [];
        this.client_id = "";
        this.client_secret = "";
        this.access_token = "";
        this.token_message = "";
        this.resultadoPreguntas = { ae: 0, d: 0, rp: 0, q: '' };
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map