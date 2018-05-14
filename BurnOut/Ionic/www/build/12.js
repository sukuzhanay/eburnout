webpackJsonp([12],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsentimientoPageModule", function() { return ConsentimientoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consentimiento__ = __webpack_require__(772);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__consentimiento__["a" /* ConsentimientoPage */]),
            ],
        })
    ], ConsentimientoPageModule);
    return ConsentimientoPageModule;
}());

//# sourceMappingURL=consentimiento.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentimientoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_consent_user_service__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Componente de tipo pagina @IonicPage
var ConsentimientoPage = (function () {
    // Este es el main
    function ConsentimientoPage(global, NavControl, navParams, consentUserService) {
        this.global = global;
        this.NavControl = NavControl;
        this.navParams = navParams;
        this.consentUserService = consentUserService;
        this.mensaje = "";
        this.consent = {
            email: "",
            consent: 0,
        };
        this.to = "";
        this.params = {};
        // Main  
    }
    // Cuando entras a la  pag / modulo y antes de cargarla. 
    ConsentimientoPage.prototype.ionViewWillEnter = function () {
        // metodo que vamos a usar para mostrar msg de texto enb panatalla
        this.ponerTextoConsentimiento();
    };
    ConsentimientoPage.prototype.ionViewDidLoad = function () {
        this.consent.email = this.navParams.get('email');
        if (this.navParams.get('to') != undefined) {
            this.to = this.navParams.get('to');
            this.params = this.navParams.get('params');
        }
    };
    // Solo estamos cargando la variable mensaje
    // AL FINAL SE CAMBIO A HTML PARA DARLE FORMATO ESPECIAL DE PÁRRAFO
    ConsentimientoPage.prototype.ponerTextoConsentimiento = function () {
        this.mensaje = '';
    };
    ConsentimientoPage.prototype.ToAccept = function () {
        var _this = this;
        if (this.checkAcepto) {
            this.consent.consent = 1;
            this.consentUserService.addConsent(this.consent).then(function (ref) {
                if (_this.to != "") {
                    _this.NavControl.setRoot("RegistroPage", _this.params);
                }
                else {
                    _this.NavControl.setRoot("TabGeneralPage");
                }
            });
        }
    };
    ConsentimientoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consentimiento',template:/*ion-inline-start:"/myApp/src/pages/consentimiento/consentimiento.html"*/'<!-->HEADER</!-->\n<ion-header>\n  <div>\n    <ion-navbar>\n      <ion-title>Consentimiento informado</ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content padding>\n    <p class="texto">\n      El término «burnout» (o síndrome de quemarse por el trabajo) se define como la respuesta\n      inadecuada al estrés emocional crónico, que resulta de una discrepancia entre los ideales\n      individuales y la realidad de la vida ocupacional diaria, requiriéndose al menos seis meses\n      de periodo des adaptativo. Involucra básicamente el agotamiento emocional, la\n      deshumanización o despersonalización y la falta de realización personal en el trabajo.\n      Como consecuencias del burnout aparece deterioro en la calidad del cuidado o el servicio\n      provisto por el personal sanitario, el aumento de la rotación en los trabajos, el absentismo\n      y la baja moral, así como disfunción personal, incluyendo agotamiento físico, insomnio,\n      consumo de alcohol y drogas y problemas conyugales y familiares.\n    </p>\n    <p class="texto">\n      En general el burnout aparece en individuos sin historia de trastornos psicológicos o\n      psiquiátricos, se desarrolla gradualmente y no está presente cuando se inicia un nuevo\n      empleo. El desarrollo del cuadro se relaciona con la sobrecarga del trabajo, pero el exceso\n      de tarea no provoca sin más el síndrome, es más importante la desmotivación emocional\n      y cognitiva por el abandono de intereses que habían sido importantes, por la discrepancia\n      entre el esfuerzo y lo conseguido.\n    </p>\n    <p class="texto">\n      Desde que se describiera en 1974, la presencia de burnout ha crecido exponencialmente\n      dentro de la comunidad médica, llegando a alcanzar en las encuestas de la última década\n      niveles alarmantes de síntomas de dicho cuadro. No podemos negar la coexistencia del\n      mismo con el desempeño del trabajador de salud, como tampoco podemos negar la alta\n      penetración de la tecnología móvil en el hacer profesional, dicha razón nos motiva a\n      desarrollar herramientas y estrategias apoyándonos en la misma. Existen ya algunas\n      aplicaciones tipo aplicación móvil que se muestran prometedoras en reducir el síndrome\n      de burnout en personal sanitario.\n    </p>\n    <p class="texto">\n      Se trata de un estudio longitudinal en el que se miden las puntuaciones en el\n      Inventario de Burnout de Maslach mediante el uso de la Aplicación móvil diseñada para\n      este estudio, en la que se darán una serie de indicaciones. Además de las indicaciones de\n      la Aplicación móvil se registran datos sobre la actividad física con periodicidad semanal\n      mediante una pulsera de actividad en un grupo y sin ella en otro grupo. Las puntuaciones\n      del MBI se recogen mensualmente, para lo que la Aplicación móvil tiene una alarma\n      recordatoria. Se mide semanalmente la puesta en marcha de alguna indicación y\n      mensualmente las puntuaciones en el Maslach. Se incluye una pregunta directa sobre la\n      utilidad de la aplicación y de las indicaciones, a responder después de cada una.\n    <p class="texto">\n      Al final del estudio se hará un análisis agrupado de las respuestas a las posibles medidas\n      que podría tomar la institución, según las respuestas libres de cada participante.\n      Se incluyen médicos de urgencias y psiquiatras.\n    </p>\n    <p class="texto">\n      Los datos de los participantes serán encriptados y se garantizará que el análisis de éstos\n      será anónimo.\n    </p>\n    <p class="texto">\n      En cualquier momento los participantes pueden abandonar el estudio, devolviendo la\n      pulsera de actividad al investigador.\n    </p>\n    <p class="texto">\n      El estudio no implica ningún riesgo para la salud física o mental de los participantes.\n    </p>\n\n    <br>\n\n\n    <ion-list no-lines>\n \n        <ion-item>\n                \n            <ion-label> Acepto los términos</ion-label>\n\n            <ion-checkbox [(ngModel)]= "checkAcepto"> </ion-checkbox>\n            <!-- Manda a Dashboard-->\n\n        </ion-item>\n\n        <button ion-button block (click)="ToAccept()" [disabled]="!checkAcepto" > Siguiente </button>\n\n    </ion-list>\n\n\n\n\n    \n\n</ion-content>\n\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/consentimiento/consentimiento.html"*/,
        })
        // Export va como modulo, parecido a Var global
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_consent_user_service__["a" /* ConsentUserService */]])
    ], ConsentimientoPage);
    return ConsentimientoPage;
}());

//# sourceMappingURL=consentimiento.js.map

/***/ })

});
//# sourceMappingURL=12.js.map