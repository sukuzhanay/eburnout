<<<<<<< HEAD
webpackJsonp([1],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_consent_user_service__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_automatic_login_service__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, fireAuth, toastCtrl, global, database, loadingCtrl, consentUserService, _automaticLoginService) {
        this.navCtrl = navCtrl;
        this.fireAuth = fireAuth;
        this.toastCtrl = toastCtrl;
        this.global = global;
        this.database = database;
        this.loadingCtrl = loadingCtrl;
        this.consentUserService = consentUserService;
        this._automaticLoginService = _automaticLoginService;
        this.query = true;
        this.formulario = { email: '', password: '' };
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var self = this;
        this.query = true;
        this._automaticLoginService.recordLogin().then(function (record) {
            self.query = false;
            if (record.email.length && record.pwd.length) {
                self._logged_user = record;
                self.formulario.email = self._logged_user.email;
                self.formulario.password = self._logged_user.pwd;
                self.login();
            }
        }, function (error) {
            console.log(error);
        });
    };
    /* LOGIN FIREBASE */
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Cargando'
        });
        this.loading.present().then(function () {
            _this.fireAuth.auth.signInWithEmailAndPassword(_this.formulario.email, _this.formulario.password)
                .then(function (resultado) {
                _this.observable = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].combineLatest(_this.database.preguntas(), _this.database.recomendaciones(), _this.database.usuarioRegistradoBD(resultado.uid), _this.database.encuestasUltimas(resultado.uid), _this.database.idClientFitBit(_this.formulario.email), _this.consentUserService.getConsentUser(_this.formulario.email)).subscribe(function (resultados) {
                    _this.global.questions = resultados[0];
                    _this.global.recommendations = resultados[1];
                    if (resultados[2] == null) {
                        for (var _i = 0, _a = resultados[4]; _i < _a.length; _i++) {
                            var llavesFitBit = _a[_i];
                            _this.global.client_id = llavesFitBit["code"];
                            _this.global.client_secret = llavesFitBit["client_secret"];
                        }
                        if (!resultados[5].length) {
                            _this.navCtrl.setRoot('ConsentimientoPage', { email: _this.formulario.email, to: "register", params: { idUsuario: resultado.uid, email: _this.formulario.email, password: _this.formulario.password } });
                        }
                        else {
                            _this.navCtrl.setRoot('RegistroPage', { idUsuario: resultado.uid, email: _this.formulario.email, password: _this.formulario.password });
                        }
                        _this.loading.dismiss();
                    }
                    else {
                        if (_this._logged_user == undefined) {
                            _this._automaticLoginService.addLoggedUser({ email: _this.formulario.email, pwd: _this.formulario.password });
                        }
                        else {
                            _this._automaticLoginService.updateLoggedUser(_this._logged_user);
                        }
                        _this.global.usuario = resultados[2];
                        _this.global.resultadoPreguntas = _this.global.usuario.ultimaencuesta;
                        for (var _b = 0, _c = resultados[3]; _b < _c.length; _b++) {
                            var resultadoPreguntas = _c[_b];
                            var encuesta = resultadoPreguntas;
                            _this.global.resultadosPreguntas.push(encuesta.encuesta);
                        }
                        for (var _d = 0, _e = resultados[4]; _d < _e.length; _d++) {
                            var llavesFitBit = _e[_d];
                            _this.global.client_id = llavesFitBit["code"];
                            _this.global.client_secret = llavesFitBit["client_secret"];
                        }
                        if (!resultados[5].length) {
                            _this.navCtrl.setRoot('ConsentimientoPage', { email: _this.formulario.email });
                        }
                        else {
                            _this.navCtrl.setRoot('TabGeneralPage');
                        }
                        _this.loading.dismiss();
                    }
                });
            })
                .catch(function (error) {
                var mensaje = '';
                error.code == 'auth/user-not-found' || error.code == 'auth/invalid-email' ? mensaje = 'Usuario no válido' : mensaje = 'Contraseña no válida';
                _this.loading.dismiss();
                _this.toast(mensaje);
            });
        });
    };
    /* FIN LOGIN FIREBASE */
    /* TOAST MENSAJE LOGIN ERROR */
    LoginPage.prototype.toast = function (mensaje) {
        var toastMensaje = this.toastCtrl.create({
            message: mensaje,
            duration: 2500,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toastMensaje.present();
    };
    /* FIN TOAST MENSAJE LOGIN ERROR */
    LoginPage.prototype.ionViewWillUnload = function () {
        this.observable.unsubscribe();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/myApp/src/pages/login/login.html"*/'<!-->HEADER</!-->\n<ion-header>\n  <div></div>\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content padding class="contenedor">\n  <img src="assets/imgs/logo.svg" class="logo" />\n  <form (ngSubmit)="login()" class="formulario" *ngIf="!query">\n    <ion-item>\n      <ion-input type="email" [(ngModel)]="formulario.email" name="email" placeholder="Correo electrónico"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="formulario.password" name="password" placeholder="Contraseña"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" class="btn-1">Entrar</button>\n  </form>\n</ion-content>\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_database_consent_user_service__["a" /* ConsentUserService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_global_automatic_login_service__["a" /* AutomaticLoginService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var combineLatest_1 = __webpack_require__(1119);
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isScheduler_1 = __webpack_require__(140);
var isArray_1 = __webpack_require__(138);
var ArrayObservable_1 = __webpack_require__(139);
var combineLatest_1 = __webpack_require__(1120);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable in order and,
 * whenever any Observable emits, collecting an array of the most recent
 * values from each Observable. So if you pass `n` Observables to operator,
 * returned Observable will always emit an array of `n` values, in order
 * corresponding to order of passed Observables (value from the first Observable
 * on the first place and so on).
 *
 * Static version of `combineLatest` accepts either an array of Observables
 * or each Observable can be put directly as an argument. Note that array of
 * Observables is good choice, if you don't know beforehand how many Observables
 * you will combine. Passing empty array will result in Observable that
 * completes immediately.
 *
 * To ensure output array has always the same length, `combineLatest` will
 * actually wait for all input Observables to emit at least once,
 * before it starts emitting results. This means if some Observable emits
 * values before other Observables started emitting, all that values but last
 * will be lost. On the other hand, is some Observable does not emit value but
 * completes, resulting Observable will complete at the same moment without
 * emitting anything, since it will be now impossible to include value from
 * completed Observable in resulting array. Also, if some input Observable does
 * not emit any value and never completes, `combineLatest` will also never emit
 * and never complete, since, again, it will wait for all streams to emit some
 * value.
 *
 * If at least one Observable was passed to `combineLatest` and all passed Observables
 * emitted something, resulting Observable will complete when all combined
 * streams complete. So even if some Observable completes, result of
 * `combineLatest` will still emit values when other Observables do. In case
 * of completed Observable, its value from now on will always be the last
 * emitted value. On the other hand, if any Observable errors, `combineLatest`
 * will error immediately as well, and all other Observables will be unsubscribed.
 *
 * `combineLatest` accepts as optional parameter `project` function, which takes
 * as arguments all values that would normally be emitted by resulting Observable.
 * `project` can return any kind of value, which will be then emitted by Observable
 * instead of default array. Note that `project` does not take as argument that array
 * of values, but values themselves. That means default `project` can be imagined
 * as function that takes all its arguments and puts them into an array.
 *
 *
 * @example <caption>Combine two timer Observables</caption>
 * const firstTimer = Rx.Observable.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
 * const secondTimer = Rx.Observable.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
 * const combinedTimers = Rx.Observable.combineLatest(firstTimer, secondTimer);
 * combinedTimers.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0] after 0.5s
 * // [1, 0] after 1s
 * // [1, 1] after 1.5s
 * // [2, 1] after 2s
 *
 *
 * @example <caption>Combine an array of Observables</caption>
 * const observables = [1, 5, 10].map(
 *   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
 * );
 * const combined = Rx.Observable.combineLatest(observables);
 * combined.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0, 0] immediately
 * // [1, 0, 0] after 1s
 * // [1, 5, 0] after 5s
 * // [1, 5, 10] after 10s
 *
 *
 * @example <caption>Use project function to dynamically calculate the Body-Mass Index</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} observable1 An input Observable to combine with other Observables.
 * @param {ObservableInput} observable2 An input Observable to combine with other Observables.
 * More than one input Observables may be given as arguments
 * or an array of Observables may be given as the first argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__(139);
var isArray_1 = __webpack_require__(138);
var OuterSubscriber_1 = __webpack_require__(45);
var subscribeToResult_1 = __webpack_require__(44);
var none = {};
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(new ArrayObservable_1.ArrayObservable([source].concat(observables)), new CombineLatestOperator(project)); };
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
=======
webpackJsonp([1],{1031:function(n,l,t){"use strict";var e=t(7),u=t(1032);e.Observable.combineLatest=u.combineLatest},1032:function(n,l,t){"use strict";var e=t(166),u=t(155),o=t(156),a=t(1033);l.combineLatest=function(){for(var n=[],l=0;l<arguments.length;l++)n[l-0]=arguments[l];var t=null,i=null;return e.isScheduler(n[n.length-1])&&(i=n.pop()),"function"==typeof n[n.length-1]&&(t=n.pop()),1===n.length&&u.isArray(n[0])&&(n=n[0]),new o.ArrayObservable(n,i).lift(new a.CombineLatestOperator(t))}},1033:function(n,l,t){"use strict";var e=t(4).__extends,u=t(156),o=t(155),a=t(56),i=t(55),r={};l.combineLatest=function(){for(var n=[],l=0;l<arguments.length;l++)n[l-0]=arguments[l];var t=null;return"function"==typeof n[n.length-1]&&(t=n.pop()),1===n.length&&o.isArray(n[0])&&(n=n[0].slice()),function(l){return l.lift.call(new u.ArrayObservable([l].concat(n)),new s(t))}};var s=function(){function n(n){this.project=n}return n.prototype.call=function(n,l){return l.subscribe(new c(n,this.project))},n}();l.CombineLatestOperator=s;var c=function(n){function l(l,t){n.call(this,l),this.project=t,this.active=0,this.values=[],this.observables=[]}return e(l,n),l.prototype._next=function(n){this.values.push(r),this.observables.push(n)},l.prototype._complete=function(){var n=this.observables,l=n.length;if(0===l)this.destination.complete();else{this.active=l,this.toRespond=l;for(var t=0;t<l;t++){var e=n[t];this.add(i.subscribeToResult(this,e,e,t))}}},l.prototype.notifyComplete=function(n){0==(this.active-=1)&&this.destination.complete()},l.prototype.notifyNext=function(n,l,t,e,u){var o=this.values,a=this.toRespond?o[t]===r?--this.toRespond:this.toRespond:0;o[t]=l,0===a&&(this.project?this._tryProject(o):this.destination.next(o.slice()))},l.prototype._tryProject=function(n){var l;try{l=this.project.apply(this,n)}catch(n){return void this.destination.error(n)}this.destination.next(l)},l}(a.OuterSubscriber);l.CombineLatestSubscriber=c},403:function(n,l,t){"use strict";function e(n){return o._19(0,[(n()(),o.Z(0,0,null,null,37,"form",[["class","formulario"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,u=n.component;if("submit"===l){e=!1!==o._13(n,2).onSubmit(t)&&e}if("reset"===l){e=!1!==o._13(n,2).onReset()&&e}if("ngSubmit"===l){e=!1!==u.login()&&e}return e},null,null)),o.Y(1,16384,null,0,w.n,[],null,null),o.Y(2,4210688,null,0,w.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),o._15(2048,null,w.b,null,[w.j]),o.Y(4,16384,null,0,w.i,[w.b],null,null),(n()(),o._18(-1,null,["\n    "])),(n()(),o.Z(6,0,null,null,12,"ion-item",[["class","item item-block"]],null,null,null,I.b,I.a)),o.Y(7,1097728,null,3,x.a,[Y.a,T.a,o.j,o.z,[2,E.a]],null,null),o._16(335544320,1,{contentLabel:0}),o._16(603979776,2,{_buttons:1}),o._16(603979776,3,{_icons:1}),o.Y(11,16384,null,0,S.a,[],null,null),(n()(),o._18(-1,2,["\n      "])),(n()(),o.Z(13,0,null,3,4,"ion-input",[["name","email"],["placeholder","Correo electrónico"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,t){var e=!0;if("ngModelChange"===l){e=!1!==(n.component.formulario.email=t)&&e}return e},j.b,j.a)),o.Y(14,671744,null,0,w.k,[[2,w.b],[8,null],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o._15(2048,null,w.g,null,[w.k]),o.Y(16,16384,null,0,w.h,[w.g],null,null),o.Y(17,5423104,null,0,P.a,[T.a,R.a,Y.a,A.a,o.j,o.z,[2,k.a],[2,x.a],[2,w.g],O.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(n()(),o._18(-1,2,["\n    "])),(n()(),o._18(-1,null,["\n    "])),(n()(),o.Z(20,0,null,null,12,"ion-item",[["class","item item-block"]],null,null,null,I.b,I.a)),o.Y(21,1097728,null,3,x.a,[Y.a,T.a,o.j,o.z,[2,E.a]],null,null),o._16(335544320,4,{contentLabel:0}),o._16(603979776,5,{_buttons:1}),o._16(603979776,6,{_icons:1}),o.Y(25,16384,null,0,S.a,[],null,null),(n()(),o._18(-1,2,["\n      "])),(n()(),o.Z(27,0,null,3,4,"ion-input",[["name","password"],["placeholder","Contraseña"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,t){var e=!0;if("ngModelChange"===l){e=!1!==(n.component.formulario.password=t)&&e}return e},j.b,j.a)),o.Y(28,671744,null,0,w.k,[[2,w.b],[8,null],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o._15(2048,null,w.g,null,[w.k]),o.Y(30,16384,null,0,w.h,[w.g],null,null),o.Y(31,5423104,null,0,P.a,[T.a,R.a,Y.a,A.a,o.j,o.z,[2,k.a],[2,x.a],[2,w.g],O.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(n()(),o._18(-1,2,["\n    "])),(n()(),o._18(-1,null,["\n    "])),(n()(),o.Z(34,0,null,null,2,"button",[["class","btn-1"],["ion-button",""],["type","submit"]],null,null,null,U.b,U.a)),o.Y(35,1097728,null,0,Z.a,[[8,""],T.a,o.j,o.z],null,null),(n()(),o._18(-1,0,["Entrar"])),(n()(),o._18(-1,null,["\n  "]))],function(n,l){var t=l.component;n(l,14,0,"email",t.formulario.email);n(l,17,0,"email","Correo electrónico");n(l,28,0,"password",t.formulario.password);n(l,31,0,"password","Contraseña")},function(n,l){n(l,0,0,o._13(l,4).ngClassUntouched,o._13(l,4).ngClassTouched,o._13(l,4).ngClassPristine,o._13(l,4).ngClassDirty,o._13(l,4).ngClassValid,o._13(l,4).ngClassInvalid,o._13(l,4).ngClassPending);n(l,13,0,o._13(l,16).ngClassUntouched,o._13(l,16).ngClassTouched,o._13(l,16).ngClassPristine,o._13(l,16).ngClassDirty,o._13(l,16).ngClassValid,o._13(l,16).ngClassInvalid,o._13(l,16).ngClassPending);n(l,27,0,o._13(l,30).ngClassUntouched,o._13(l,30).ngClassTouched,o._13(l,30).ngClassPristine,o._13(l,30).ngClassDirty,o._13(l,30).ngClassValid,o._13(l,30).ngClassInvalid,o._13(l,30).ngClassPending)})}function u(n){return o._19(0,[(n()(),o._18(-1,null,["\n"])),(n()(),o.Z(1,0,null,null,4,"ion-header",[],null,null,null,null,null)),o.Y(2,16384,null,0,L.a,[T.a,o.j,o.z,[2,F.a]],null,null),(n()(),o._18(-1,null,["\n  "])),(n()(),o.Z(4,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),o._18(-1,null,["\n"])),(n()(),o._18(-1,null,["\n"])),(n()(),o._18(-1,null,["\n\n"])),(n()(),o._18(-1,null,["\n"])),(n()(),o.Z(9,0,null,null,7,"ion-content",[["class","contenedor"],["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,M.b,M.a)),o.Y(10,4374528,null,0,k.a,[T.a,R.a,O.a,o.j,o.z,A.a,D.a,o.u,[2,F.a],[2,N.a]],null,null),(n()(),o._18(-1,1,["\n  "])),(n()(),o.Z(12,0,null,1,0,"img",[["class","logo"],["src","assets/imgs/logo.svg"]],null,null,null,null,null)),(n()(),o._18(-1,1,["\n  "])),(n()(),o.U(16777216,null,1,1,null,e)),o.Y(15,16384,null,0,q.i,[o.I,o.F],{ngIf:[0,"ngIf"]},null),(n()(),o._18(-1,1,["\n"])),(n()(),o._18(-1,null,["\n"]))],function(n,l){n(l,15,0,!l.component._id)},function(n,l){n(l,9,0,o._13(l,10).statusbarPadding,o._13(l,10)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var o=t(0),a=(t(4),t(67),t(165)),i=t(97),r=t(151),s=t(7),c=(t(1031),t(100)),d=function(){function n(n,l,t,e,u,o,a){this.navCtrl=n,this.fireAuth=l,this.toastCtrl=t,this.global=e,this.database=u,this.loadingCtrl=o,this._sqlite=a,this._db=null,this._id=0,this.formulario={email:"",password:""}}return n.prototype.ionViewDidLoad=function(){this._onInit()},n.prototype._cipher=function(n,l){for(var t=n,e="",u=0;u<t.length;u++){var o=t[u].charCodeAt(0),a=null;u%2==0?a="encrypt"==l?o+4:o-4:u%2==1&&(a="encrypt"==l?o+7:o-7);e+=String.fromCharCode(a)}return e},n.prototype._onInit=function(){var n=this;this._createDatabase().then(function(l){if(void 0!==l[0]){n._id=l[0].id,n.formulario.email=l[0].email;var t=n._cipher(l[0].pwd,"");return n.formulario.password=t,n.login()}},function(l){n.toast(JSON.stringify(l))})},n.prototype._createDatabase=function(){var n=this;return this._sqlite.create({name:"eburnout.db",location:"default"}).then(function(l){return n._setDatabase(l),n._createTable(),n._getUser()}).catch(function(l){n.toast(JSON.stringify(l)),Promise.reject(l)})},n.prototype._setDatabase=function(n){null===this._db&&(this._db=n)},n.prototype._update=function(n,l,t){return this._db.executeSql("UPDATE usuario SET email=?, pwd=? WHERE id=?",[n,l,t])},n.prototype._create=function(n,l){return this._db.executeSql("INSERT INTO usuario(email,pwd) VALUES(?,?)",[n,l])},n.prototype._createTable=function(){return this._db.executeSql("CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(100),pwd TEXT)",[])},n.prototype._getUser=function(){return this._db.executeSql("SELECT * FROM usuario WHERE id=1",[]).then(function(n){for(var l=[],t=0;t<n.rows.length;t++)l.push(n.rows.item(t));return Promise.resolve(l)}).catch(function(n){return Promise.reject(n)})},n.prototype.login=function(){var n=this;this.loading=this.loadingCtrl.create({content:"Cargando"}),this.loading.present().then(function(){n.fireAuth.auth.signInWithEmailAndPassword(n.formulario.email,n.formulario.password).then(function(l){n.observable=s.Observable.combineLatest(n.database.preguntas(),n.database.recomendaciones(),n.database.usuarioRegistradoBD(l.uid),n.database.encuestasUltimas(l.uid),n.database.idClientFitBit(l.uid)).subscribe(function(t){if(n.global.questions=t[0],n.global.recommendations=t[1],null==t[2])n.navCtrl.setRoot("RegistroPage",{idUsuario:l.uid,email:n.formulario.email,password:n.formulario.password}),n.loading.dismiss();else{var e=n._cipher(n.formulario.password,"encrypt");n._id?n._update(n.formulario.email,e,n._id):n._create(n.formulario.email,e),n.global.usuario=t[2],n.global.resultadoPreguntas=n.global.usuario.ultimaencuesta;for(var u=0,o=t[3];u<o.length;u++){n.global.resultadosPreguntas.push(o[u].encuesta)}for(var a=0,i=t[4];a<i.length;a++){var r=i[a];n.global.client_id=r.client_id,n.global.client_secret=r.client_secret}n.navCtrl.setRoot("TabGeneralPage"),n.loading.dismiss()}})}).catch(function(l){var t="";t="auth/user-not-found"==l.code||"auth/invalid-email"==l.code?"Usuario no válido":"Contraseña no válida",n.loading.dismiss(),n.toast(t)})})},n.prototype.toast=function(n){this.toastCtrl.create({message:n,duration:2500,position:"bottom",dismissOnPageChange:!0}).present()},n.prototype.ionViewWillUnload=function(){this.observable.unsubscribe()},n}(),p=function(){return function(){}}(),f=t(274),g=t(275),_=t(276),h=t(277),b=t(278),m=t(279),v=t(280),y=t(281),C=t(282),w=t(21),I=t(283),x=t(22),Y=t(18),T=t(2),E=t(53),S=t(98),j=t(503),P=t(154),R=t(5),A=t(11),k=t(28),O=t(12),U=t(51),Z=t(26),L=t(153),F=t(6),M=t(429),D=t(44),N=t(27),q=t(17),z=t(101),V=t(102),B=o.X({encapsulation:2,styles:[],data:{}}),W=o.V("page-login",d,function(n){return o._19(0,[(n()(),o.Z(0,0,null,null,1,"page-login",[],null,null,null,u,B)),o.Y(1,49152,null,0,d,[N.a,a.a,z.a,i.a,r.a,V.a,c.a],null,null)],null,null)},{},{},[]),X=t(152),H=t(45);t.d(l,"LoginPageModuleNgFactory",function(){return J});var J=o.W(p,[],function(n){return o._10([o._11(512,o.i,o.S,[[8,[f.a,g.a,_.a,h.a,b.a,m.a,v.a,y.a,C.a,W]],[3,o.i],o.s]),o._11(4608,q.k,q.j,[o.r,[2,q.s]]),o._11(4608,w.o,w.o,[]),o._11(4608,w.d,w.d,[]),o._11(512,q.b,q.b,[]),o._11(512,w.m,w.m,[]),o._11(512,w.e,w.e,[]),o._11(512,w.l,w.l,[]),o._11(512,X.a,X.a,[]),o._11(512,X.b,X.b,[]),o._11(512,p,p,[]),o._11(256,H.a,d,[])])})},429:function(n,l,t){"use strict";function e(n){return u._19(2,[u._16(402653184,1,{_fixedContent:0}),u._16(402653184,2,{_scrollContent:0}),(n()(),u.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u._12(null,0),(n()(),u.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u._12(null,1),u._12(null,2)],null,null)}t.d(l,"a",function(){return o}),l.b=e;var u=t(0),o=(t(28),t(2),t(5),t(12),t(44),t(6),t(27),u.X({encapsulation:2,styles:[],data:{}}))},503:function(n,l,t){"use strict";function e(n){return r._19(0,[(n()(),r.Z(0,0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"],["dir","auto"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==u.onInput(t)&&e}if("blur"===l){e=!1!==u.onBlur(t)&&e}if("focus"===l){e=!1!==u.onFocus(t)&&e}if("keydown"===l){e=!1!==u.onKeydown(t)&&e}return e},null,null)),r.Y(1,278528,null,0,s.g,[r.p,r.q,r.j,r.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,l){n(l,1,0,"text-input","text-input-"+l.component._mode)},function(n,l){var t=l.component;n(l,0,0,t._type,t._labelId,t.min,t.max,t.step,t.autocomplete,t.autocorrect,t.placeholder,t._disabled,t._readonly)})}function u(n){return r._19(0,[(n()(),r.Z(0,0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==u.onInput(t)&&e}if("blur"===l){e=!1!==u.onBlur(t)&&e}if("focus"===l){e=!1!==u.onFocus(t)&&e}if("keydown"===l){e=!1!==u.onKeydown(t)&&e}return e},null,null)),r.Y(1,278528,null,0,s.g,[r.p,r.q,r.j,r.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,l){n(l,1,0,"text-input","text-input-"+l.component._mode)},function(n,l){var t=l.component;n(l,0,0,t._labelId,t.autocomplete,t.autocorrect,t.placeholder,t._disabled,t._readonly)})}function o(n){return r._19(0,[(n()(),r.Z(0,0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.clearTextInput(t)&&e}if("mousedown"===l){e=!1!==u.clearTextInput(t)&&e}return e},c.b,c.a)),r.Y(1,1097728,null,0,d.a,[[8,""],p.a,r.j,r.z],{clear:[0,"clear"]},null)],function(n,l){n(l,1,0,"")},null)}function a(n){return r._19(0,[(n()(),r.Z(0,0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,l,t){var e=!0,u=n.component;if("touchstart"===l){e=!1!==u._pointerStart(t)&&e}if("touchend"===l){e=!1!==u._pointerEnd(t)&&e}if("mousedown"===l){e=!1!==u._pointerStart(t)&&e}if("mouseup"===l){e=!1!==u._pointerEnd(t)&&e}return e},null,null))],null,null)}function i(n){return r._19(2,[r._16(671088640,1,{_native:0}),(n()(),r.U(16777216,null,null,1,null,e)),r.Y(2,16384,null,0,s.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(n()(),r.U(16777216,null,null,1,null,u)),r.Y(4,16384,null,0,s.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(n()(),r.U(16777216,null,null,1,null,o)),r.Y(6,16384,null,0,s.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(n()(),r.U(16777216,null,null,1,null,a)),r.Y(8,16384,null,0,s.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,!t._isTextarea);n(l,4,0,t._isTextarea);n(l,6,0,t._clearInput);n(l,8,0,t._useAssist)},null)}t.d(l,"a",function(){return f}),l.b=i;var r=t(0),s=t(17),c=t(51),d=t(26),p=t(2),f=(t(154),t(5),t(18),t(22),t(12),r.X({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> master
