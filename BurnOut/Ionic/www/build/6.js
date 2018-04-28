webpackJsonp([6],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsentimientoPageModule", function() { return ConsentimientoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consentimiento__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConsentimientoPageModule = (function () {
    function ConsentimientoPageModule() {
    }
    ConsentimientoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__consentimiento__["a" /* ConsentimientoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__consentimiento__["a" /* ConsentimientoPage */]),
            ],
        })
    ], ConsentimientoPageModule);
    return ConsentimientoPageModule;
}());

//# sourceMappingURL=consentimiento.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentimientoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_global__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsentimientoPage = (function () {
    function ConsentimientoPage(global) {
        this.global = global;
        this.mensaje = "";
    }
    ConsentimientoPage.prototype.ionViewDidLoad = function () {
    };
    ConsentimientoPage.prototype.ionViewWillEnter = function () {
        // metodo que vamos a usar para mostrar msg de texto enb panatalla
        this.ponerTextoConsentimiento();
    };
    // Solo estamos cargando la variable mensaje
    ConsentimientoPage.prototype.ponerTextoConsentimiento = function () {
        this.mensaje = 'El término «burnout» (o síndrome de quemarse por el trabajo) se define como la respuesta';
        this.mensaje += 'inadecuada al estrés emocional crónico, que resulta de una discrepancia entre los ideales';
        this.mensaje += 'individuales y la realidad de la vida ocupacional diaria, requiriéndose al menos seis meses';
        this.mensaje += 'de periodo des adaptativo. Involucra básicamente el agotamiento emocional, la';
        this.mensaje += 'deshumanización o despersonalización y la falta de realización personal en el trabajo.';
        this.mensaje += 'Como consecuencias del burnout aparece deterioro en la calidad del cuidado o el servicio';
        this.mensaje += 'provisto por el personal sanitario, el aumento de la rotación en los trabajos, el absentismo';
        this.mensaje += 'y la baja moral, así como disfunción personal, incluyendo agotamiento físico, insomnio,';
        this.mensaje += 'consumo de alcohol y drogas y problemas conyugales y familiares.';
        this.mensaje += 'En general el burnout aparece en individuos sin historia de trastornos psicológicos o';
        this.mensaje += 'psiquiátricos, se desarrolla gradualmente y no está presente cuando se inicia un nuevo';
        this.mensaje += 'empleo. El desarrollo del cuadro se relaciona con la sobrecarga del trabajo, pero el exceso';
        this.mensaje += 'de tarea no provoca sin más el síndrome, es más importante la desmotivación emocional';
        this.mensaje += 'y cognitiva por el abandono de intereses que habían sido importantes, por la discrepancia';
        this.mensaje += 'entre el esfuerzo y lo conseguido.';
        this.mensaje += 'Desde que se describiera en 1974, la presencia de burnout ha crecido exponencialmente';
        this.mensaje += 'dentro de la comunidad médica, llegando a alcanzar en las encuestas de la última década';
        this.mensaje += 'niveles alarmantes de síntomas de dicho cuadro. No podemos negar la coexistencia del';
        this.mensaje += 'mismo con el desempeño del trabajador de salud, como tampoco podemos negar la alta';
        this.mensaje += 'penetración de la tecnología móvil en el hacer profesional, dicha razón nos motiva a';
        this.mensaje += 'desarrollar herramientas y estrategias apoyándonos en la misma. Existen ya algunas';
        this.mensaje += 'aplicaciones tipo aplicación móvil que se muestran prometedoras en reducir el síndrome';
        this.mensaje += 'de burnout en personal sanitario.';
        this.mensaje += 'Se trata de un estudio longitudinal en el que se miden las puntuaciones en el';
        this.mensaje += 'Inventario de Burnout de Maslach mediante el uso de la Aplicación móvil diseñada para';
        this.mensaje += 'este estudio, en la que se darán una serie de indicaciones. Además de las indicaciones de';
        this.mensaje += 'la Aplicación móvil se registran datos sobre la actividad física con periodicidad semanal';
        this.mensaje += 'mediante una pulsera de actividad en un grupo y sin ella en otro grupo. Las puntuaciones';
        this.mensaje += 'del MBI se recogen mensualmente, para lo que la Aplicación móvil tiene una alarma';
        this.mensaje += 'recordatoria. Se mide semanalmente la puesta en marcha de alguna indicación y';
        this.mensaje += 'mensualmente las puntuaciones en el Maslach. Se incluye una pregunta directa sobre la';
        this.mensaje += 'utilidad de la aplicación y de las indicaciones, a responder después de cada una.';
        this.mensaje += 'Al final del estudio se hará un análisis agrupado de las respuestas a las posibles medidas';
        this.mensaje += 'que podría tomar la institución, según las respuestas libres de cada participante.';
        this.mensaje += 'Se incluyen médicos de urgencias y psiquiatras.';
        this.mensaje += 'Los datos de los participantes serán encriptados y se garantizará que el análisis de éstos';
        this.mensaje += 'será anónimo.';
        this.mensaje += 'En cualquier momento los participantes pueden abandonar el estudio, devolviendo la';
        this.mensaje += 'pulsera de actividad al investigador.';
        this.mensaje += 'El estudio no implica ningún riesgo para la salud física o mental de los participantes.';
    };
    ConsentimientoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consentimiento',template:/*ion-inline-start:"/myApp/src/pages/consentimiento/consentimiento.html"*/'<!-->HEADER</!-->\n<ion-header>\n  <div>\n    <ion-navbar>\n      <ion-title>Consentimiento informado</ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content padding>\n    <p class="texto">- {{ mensaje }}</p>\n</ion-content>\n\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/consentimiento/consentimiento.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_global_global__["a" /* GlobalProvider */]) === "function" && _a || Object])
    ], ConsentimientoPage);
    return ConsentimientoPage;
    var _a;
}());

//# sourceMappingURL=consentimiento.js.map

/***/ })

});
//# sourceMappingURL=6.js.map