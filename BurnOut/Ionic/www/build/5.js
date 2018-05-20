<<<<<<< HEAD
webpackJsonp([5],{

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroPage = (function () {
    function RegistroPage(navCtrl, navParams, database, toastCtrl, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.global = global;
        this.especialidades = [];
        this.idUsuario = this.navParams.get('idUsuario');
        this.email = this.navParams.get('email');
        this.password = this.navParams.get('password');
        this.observable = this.database.especialidades().subscribe(function (especialidades) {
            _this.especialidades = especialidades;
        });
        this.numRegistro = 1;
        this.pesos = [];
        this.alturas = [];
        this.anosLaborales = [];
        for (var i = 40; i <= 180; i++) {
            this.pesos.push(i);
        }
        for (var i = 130; i <= 220; i++) {
            this.alturas.push(i);
        }
        for (var i = 0; i <= 40; i++) {
            this.anosLaborales.push(i);
        }
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
    };
    /* CLICK BOTON */
    RegistroPage.prototype.clickBoton = function () {
        switch (this.numRegistro) {
            case 1:
                if (this.edad != null && this.sexo != null && this.estadocivil != null && this.hijos != null
                    && this.altura != null && this.peso != null) {
                    this.numRegistro = 2;
                }
                else {
                    this.toast();
                }
                break;
            case 2:
                if (this.especialidad != null && this.tipocontrato != null && this.tiempoplazaactual != null
                    && this.tiempovidalaboral != null && this.tipotrabajo != null && (this.anosresidente != null || this.contratoadjunto != null)) {
                    this.numRegistro = 3;
                }
                else {
                    this.toast();
                }
                break;
            case 3:
                this.anosresidente != null ? this.contratoadjunto = null : this.anosresidente = null;
                if (this.horasActFisica != null && this.horasActGratificantes != null && this.horasActCuidados != null && this.horasActSocial
                    != null && this.ejerciciofisico != null && this.lectura != null && this.musica != null && this.salessocialmente != null
                    && this.viajas != null && this.estudias != null) {
                    this.usuario = {
                        id: this.idUsuario, email: this.email, password: this.password, edad: this.edad,
                        sexo: this.sexo, estadocivil: this.estadocivil, hijos: this.hijos, altura: this.altura,
                        peso: this.peso, especialidad: this.especialidad, tipocontrato: this.tipocontrato, anosresidente: this.anosresidente,
                        contratoadjunto: this.contratoadjunto, tiempoplazaactual: this.tiempoplazaactual,
                        tiempovidalaboral: this.tiempovidalaboral, tipotrabajo: this.tipotrabajo, horasActFisica: this.horasActFisica,
                        horasActGratificantes: this.horasActGratificantes, horasActCuidados: this.horasActCuidados, horasActSocial: this.horasActSocial,
                        ejerciciofisico: this.ejerciciofisico,
                        lectura: this.lectura, musica: this.musica, salessocialmente: this.salessocialmente, viajas: this.viajas, estudias: this.estudias,
                        ultimaencuesta: { ae: 0, d: 0, rp: 0, q: '' }
                    };
                    this.global.usuario = this.usuario;
                    this.database.registroUsuarioBD(this.usuario);
                    this.navCtrl.setRoot('TabGeneralPage', { primeraVez: true });
                }
                else {
                    this.toast();
                }
                break;
        }
    };
    /* FIN CLICK BOTON */
    /* TOAST MENSAJE LOGIN ERROR */
    RegistroPage.prototype.toast = function () {
        var toastMensaje = this.toastCtrl.create({
            message: 'Rellene todo los campos',
            duration: 2500,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toastMensaje.present();
    };
    /* FIN TOAST MENSAJE LOGIN ERROR */
    RegistroPage.prototype.ionViewWillUnload = function () {
        this.observable.unsubscribe();
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"/myApp/src/pages/registro/registro.html"*/'<!-->HEADER</!-->\n<ion-header>\n  <div>\n    <ion-navbar>\n      <ion-title>Registro {{ numRegistro }}/3</ion-title>\n    </ion-navbar>\n  </div>\n</ion-header>\n<!-->FIN HEADER</!-->\n\n<!-->CONTENT</!-->\n<ion-content padding>\n  <div *ngIf="numRegistro == 1">\n    <p class="titulo">¿Cuentanos un poquito de ti?</p>\n    <ion-item>\n      <ion-label>Edad</ion-label>\n      <ion-select [(ngModel)]="edad" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="20-24">20-24</ion-option>\n        <ion-option value="25-29">25-29</ion-option>\n        <ion-option value="30-34">30-34</ion-option>\n        <ion-option value="35-39">35-39</ion-option>\n        <ion-option value="40-44">40-44</ion-option>\n        <ion-option value="45-49">45-49</ion-option>\n        <ion-option value="50-54">50-54</ion-option>\n        <ion-option value="55-59">55-59</ion-option>\n        <ion-option value="60-64">60-64</ion-option>\n        <ion-option value="65-69">65-69</ion-option>\n        <ion-option value="70-75">70-75</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sexo</ion-label>\n      <ion-select [(ngModel)]="sexo" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="hombre">Hombre</ion-option>\n        <ion-option value="mujer">Mujer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Estado civil</ion-label>\n      <ion-select [(ngModel)]="estadocivil" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="casado">Casad@</ion-option>\n        <ion-option value="soltero">Solter@</ion-option>\n        <ion-option value="divorciado">Divorciad@</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Hij@s</ion-label>\n      <ion-select [(ngModel)]="hijos" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="0">0</ion-option>\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="+3">+3</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Altura</ion-label>\n      <ion-select [(ngModel)]="altura" okText="Aceptar" cancelText="Cancelar">\n        <ion-option *ngFor="let altura of alturas" value="{{altura}}">{{ altura }} cm</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Peso</ion-label>\n      <ion-select [(ngModel)]="peso" okText="Aceptar" cancelText="Cancelar">\n        <ion-option *ngFor="let peso of pesos" value="{{peso}}">{{ peso }} kg</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <div *ngIf="numRegistro == 2">\n    <p class="titulo">¿A qué te dedicas?</p>\n    <ion-item>\n      <ion-label>Especialidad</ion-label>\n      <ion-select [(ngModel)]="especialidad" okText="Aceptar" cancelText="Cancelar">\n        <ion-option *ngFor="let especialidad of especialidades" value="{{especialidad}}">{{ especialidad }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo de contrato</ion-label>\n      <ion-select [(ngModel)]="tipocontrato" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="residente">Residente</ion-option>\n        <ion-option value="adjunto">Adjunto</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="tipocontrato == \'residente\'">\n      <ion-label>Años de residente</ion-label>\n      <ion-select [(ngModel)]="anosresidente" okText="Aceptar" cancelText="Cancelar">\n        <ion-option *ngFor="let anoLaboral of anosLaborales" value="{{anoLaboral}}">\n          {{ anoLaboral }}\n          <span *ngIf="anoLaboral == 1">año</span>\n          <span *ngIf="anoLaboral != 1">años</span>\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="tipocontrato == \'adjunto\'">\n      <ion-label>Contrato adjunto</ion-label>\n      <ion-select [(ngModel)]="contratoadjunto" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="eventual">Eventual</ion-option>\n        <ion-option value="interino">Interino</ion-option>\n        <ion-option value="fijo">Fijo</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tiempo en la plaza actual</ion-label>\n      <ion-select [(ngModel)]="tiempoplazaactual" okText="Aceptar" cancelText="Cancelar">\n        <ion-option *ngFor="let anoLaboral of anosLaborales" value="{{anoLaboral}}">\n          {{ anoLaboral }}\n          <span *ngIf="anoLaboral == 1">año</span>\n          <span *ngIf="anoLaboral != 1">años</span>\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tiempo de vida laboral</ion-label>\n      <ion-select [(ngModel)]="tiempovidalaboral" okText="Aceptar" cancelText="Cancelar">\n        <ion-option *ngFor="let anoLaboral of anosLaborales" value="{{anoLaboral}}">\n          {{ anoLaboral }}\n          <span *ngIf="anoLaboral == 1">año</span>\n          <span *ngIf="anoLaboral != 1">años</span>\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo de trabajo</ion-label>\n      <ion-select [(ngModel)]="tipotrabajo" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="hospitalario">Hospitalario</ion-option>\n        <ion-option value="ambulatorio">Ambulatorio</ion-option>\n        <ion-option value="urgencias">Urgencias</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <div *ngIf="numRegistro == 3">\n    <!-- DESDE AQUI HE INSERTADO 4 PREGUNTAS -->\n    <p class="titulo">¿Cual es tu estado personal actual?</p>\n    <ion-item>\n        <ion-label>¿Cuántas horas de actividad física realizas a la semana? (caminar, gimnasio, etc)</ion-label>\n        <ion-select [(ngModel)]="horasActFisica" okText="Aceptar" cancelText="Cancelar">\n          <ion-option value="0">0</ion-option>\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          <ion-option value="11">11</ion-option>\n          <ion-option value="12">12</ion-option>\n          <ion-option value="13">13</ion-option>\n          <ion-option value="14">14</ion-option>\n          <ion-option value="15">15</ion-option>\n          <ion-option value="16">16</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>¿Cuántas horas dedicas a actividades gratificantes a la semana? (aficiones, contacto con la naturaleza, etc)</ion-label>\n        <ion-select [(ngModel)]="horasActGratificantes" okText="Aceptar" cancelText="Cancelar">\n          <ion-option value="0">0</ion-option>\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          <ion-option value="11">11</ion-option>\n          <ion-option value="12">12</ion-option>\n          <ion-option value="13">13</ion-option>\n          <ion-option value="14">14</ion-option>\n          <ion-option value="15">15</ion-option>\n          <ion-option value="16">16</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>¿Cuántas horas dedicas a asegurar autocuidados biológicos? (sueño, alimentación, etc)</ion-label>\n        <ion-select [(ngModel)]="horasActCuidados" okText="Aceptar" cancelText="Cancelar">\n          <ion-option value="0">0</ion-option>\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          <ion-option value="11">11</ion-option>\n          <ion-option value="12">12</ion-option>\n          <ion-option value="13">13</ion-option>\n          <ion-option value="14">14</ion-option>\n          <ion-option value="15">15</ion-option>\n          <ion-option value="16">16</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>¿Cuántas horas dedicas a contactos sociales? (encuentros, llamadas, etc)</ion-label>\n        <ion-select [(ngModel)]="horasActSocial" okText="Aceptar" cancelText="Cancelar">\n          <ion-option value="0">0</ion-option>\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          <ion-option value="11">11</ion-option>\n          <ion-option value="12">12</ion-option>\n          <ion-option value="13">13</ion-option>\n          <ion-option value="14">14</ion-option>\n          <ion-option value="15">15</ion-option>\n          <ion-option value="16">16</ion-option>\n        </ion-select>\n    </ion-item>\n  <!-- FIN : DESDE AQUI HE INSERTADO 4 PREGUNTAS -->\n    <ion-item>\n      <ion-label>Haces ejercicio físico</ion-label>\n      <ion-select [(ngModel)]="ejerciciofisico" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="habitualmente">Habitualmente</ion-option>\n        <ion-option value="ocasionalmente">Ocasionalmente</ion-option>\n        <ion-option value="nunca">Nunca</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Lees</ion-label>\n      <ion-select [(ngModel)]="lectura" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="habitualmente">Habitualmente</ion-option>\n        <ion-option value="ocasionalmente">Ocasionalmente</ion-option>\n        <ion-option value="nunca">Nunca</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Escuchas música</ion-label>\n      <ion-select [(ngModel)]="musica" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="habitualmente">Habitualmente</ion-option>\n        <ion-option value="ocasionalmente">Ocasionalmente</ion-option>\n        <ion-option value="nunca">Nunca</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sales socialmente</ion-label>\n      <ion-select [(ngModel)]="salessocialmente" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="habitualmente">Habitualmente</ion-option>\n        <ion-option value="ocasionalmente">Ocasionalmente</ion-option>\n        <ion-option value="nunca">Nunca</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Viajas</ion-label>\n      <ion-select [(ngModel)]="viajas" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="-5">Menos de 5 veces al año</ion-option>\n        <ion-option value="+5">Mas de 5 veces al año</ion-option>\n        <ion-option value="nunca">Nunca</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Estudias</ion-label>\n      <ion-select [(ngModel)]="estudias" okText="Aceptar" cancelText="Cancelar">\n        <ion-option value="habitualmente">Habitualmente</ion-option>\n        <ion-option value="ocasionalmente">Ocasionalmente</ion-option>\n        <ion-option value="nunca">Nunca</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <button ion-button (click)="clickBoton()" class="btn-1">\n    Siguiente\n  </button>\n</ion-content>\n<!-->FIN CONTENT</!-->'/*ion-inline-end:"/myApp/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(1126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroPageModule = (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
            ],
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());

//# sourceMappingURL=registro.module.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
=======
webpackJsonp([5],{402:function(l,n,u){"use strict";function o(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"p",[["class","texto-4"]],null,null,null,null,null)),(l()(),a._18(-1,null,["Cara no detectada, intente hacerse otra foto."]))],null,null)}function t(l){return a._19(0,[(l()(),a._18(-1,null,["\n"])),(l()(),a.Z(1,0,null,null,13,"ion-header",[],null,null,null,null,null)),a.Y(2,16384,null,0,A.a,[Y.a,a.j,a.z,[2,v.a]],null,null),(l()(),a._18(-1,null,["\n  "])),(l()(),a.Z(4,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),a._18(-1,null,["\n    "])),(l()(),a.Z(6,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Z.b,Z.a)),a.Y(7,49152,null,0,C.a,[L.a,[2,v.a],[2,j.a],Y.a,a.j,a.z],null,null),(l()(),a._18(-1,3,["\n      "])),(l()(),a.Z(9,0,null,3,2,"ion-title",[],null,null,null,y.b,y.a)),a.Y(10,49152,null,0,E.a,[Y.a,a.j,a.z,[2,D.a],[2,C.a]],null,null),(l()(),a._18(-1,0,["Camara"])),(l()(),a._18(-1,3,["\n    "])),(l()(),a._18(-1,null,["\n  "])),(l()(),a._18(-1,null,["\n"])),(l()(),a._18(-1,null,["\n"])),(l()(),a._18(-1,null,["\n\n"])),(l()(),a._18(-1,null,["\n"])),(l()(),a.Z(18,0,null,null,54,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,I.b,I.a)),a.Y(19,4374528,null,0,x.a,[Y.a,z.a,F.a,a.j,a.z,L.a,R.a,a.u,[2,v.a],[2,j.a]],null,null),(l()(),a._18(-1,1,["\n  "])),(l()(),a.Z(21,0,null,1,1,"p",[["class","texto-1"]],null,null,null,null,null)),(l()(),a._18(-1,null,["¡Hazte una foto,"])),(l()(),a._18(-1,1,["\n  "])),(l()(),a.Z(24,0,null,1,4,"p",[["class","texto-2"]],null,null,null,null,null)),(l()(),a._18(-1,null,["Detectemos tu\n    "])),(l()(),a.Z(26,0,null,null,1,"span",[["class","texto-contraste"]],null,null,null,null,null)),(l()(),a._18(-1,null,["estado de ánimo!"])),(l()(),a._18(-1,null,["\n  "])),(l()(),a._18(-1,1,["\n  "])),(l()(),a.Z(30,0,null,1,5,"div",[["class","border-foto"]],null,null,null,null,null)),(l()(),a._18(-1,null,["\n    "])),(l()(),a.Z(32,0,null,null,2,"div",[["class","foto"]],null,null,null,null,null)),a.Y(33,278528,null,0,T.l,[a.q,a.j,a.A],{ngStyle:[0,"ngStyle"]},null),a._14(34,{"background-image":0}),(l()(),a._18(-1,null,["\n  "])),(l()(),a._18(-1,1,["\n  "])),(l()(),a.Z(37,0,null,1,28,"ion-grid",[["class","datos grid"]],null,null,null,null,null)),a.Y(38,16384,null,0,q.a,[],null,null),(l()(),a._18(-1,null,["\n    "])),(l()(),a.Z(40,0,null,null,24,"ion-row",[["class","row"]],null,null,null,null,null)),a.Y(41,16384,null,0,B.a,[],null,null),(l()(),a._18(-1,null,["\n      "])),(l()(),a.Z(43,0,null,null,9,"ion-col",[["class","col"]],null,null,null,null,null)),a.Y(44,16384,null,0,K.a,[],null,null),(l()(),a._18(-1,null,["\n        "])),(l()(),a.Z(46,0,null,null,5,"button",[["class","btn-1 btn-izq"],["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.hacerFoto()&&o}return o},O.b,O.a)),a.Y(47,1097728,null,0,V.a,[[8,""],Y.a,a.j,a.z],null,null),(l()(),a._18(-1,0,["\n          "])),(l()(),a.Z(49,0,null,0,1,"ion-icon",[["name","camera"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(50,147456,null,0,w.a,[Y.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,0,["\n          Foto\n        "])),(l()(),a._18(-1,null,["\n      "])),(l()(),a._18(-1,null,["\n      "])),(l()(),a.Z(54,0,null,null,9,"ion-col",[["class","col"]],null,null,null,null,null)),a.Y(55,16384,null,0,K.a,[],null,null),(l()(),a._18(-1,null,["\n        "])),(l()(),a.Z(57,0,null,null,5,"button",[["class","btn-1 btn-der"],["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.enviarFoto()&&o}return o},O.b,O.a)),a.Y(58,1097728,null,0,V.a,[[8,""],Y.a,a.j,a.z],null,null),(l()(),a._18(-1,0,["\n          "])),(l()(),a.Z(60,0,null,0,1,"ion-icon",[["name","send"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(61,147456,null,0,w.a,[Y.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,0,["\n          Enviar\n        "])),(l()(),a._18(-1,null,["\n      "])),(l()(),a._18(-1,null,["\n    "])),(l()(),a._18(-1,null,["\n  "])),(l()(),a._18(-1,1,["\n  "])),(l()(),a.Z(67,0,null,1,1,"p",[["class","texto-3"]],null,null,null,null,null)),(l()(),a._18(68,null,["",""])),(l()(),a._18(-1,1,["\n  "])),(l()(),a.U(16777216,null,1,1,null,o)),a.Y(71,16384,null,0,T.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(l()(),a._18(-1,1,["\n"])),(l()(),a._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,33,0,l(n,34,0,"url("+u.foto+")"));l(n,50,0,"camera");l(n,61,0,"send");l(n,71,0,u.errorFoto)},function(l,n){var u=n.component;l(n,6,0,a._13(n,7)._hidden,a._13(n,7)._sbPadding);l(n,18,0,a._13(n,19).statusbarPadding,a._13(n,19)._hasRefresher);l(n,49,0,a._13(n,50)._hidden);l(n,60,0,a._13(n,61)._hidden);l(n,68,0,u.estadoAnimo)})}Object.defineProperty(n,"__esModule",{value:!0});var a=u(0),e=(u(4),u(67),u(164)),s=u(151),i=u(97),r=function(){function l(l,n,u){this.camera=l,this.database=n,this.global=u,this.foto="./assets/imgs/foto.svg",this.fotoConsulta=null,this.estadoAnimo="",this.errorFoto=!1}return l.prototype.ionViewDidLoad=function(){},l.prototype.hacerFoto=function(){var l=this;this.camera.getPicture({destinationType:this.camera.DestinationType.DATA_URL,sourceType:this.camera.PictureSourceType.CAMERA,targetWidth:512,targetHeight:512,quality:100,correctOrientation:!0}).then(function(n){l.foto="data:image/jpeg;base64,"+n,l.estadoAnimo="",l.errorFoto=!1,l.fotoConsulta=n})},l.prototype.enviarFoto=function(){var l=this;null!=this.fotoConsulta&&(this.observable=this.database.consultaFoto(this.fotoConsulta).subscribe(function(n){var u=n.json().responses;if(null!=u[0].faceAnnotations){var o=u[0].faceAnnotations[0].joyLikelihood,t=u[0].faceAnnotations[0].sorrowLikelihood,a=u[0].faceAnnotations[0].angerLikelihood,e=u[0].faceAnnotations[0].surpriseLikelihood;"VERY_LIKELY"==o||"LIKELY"==o?(l.estadoAnimo="¡CONTENTO!",l.estadoAnimoBD={estadoAnimo:"contento"}):"VERY_LIKELY"==t||"LIKELY"==t?(l.estadoAnimo="¡TRISTE!",l.estadoAnimoBD={estadoAnimo:"triste"}):"VERY_LIKELY"==a||"LIKELY"==a?(l.estadoAnimo="¡CABREADO!",l.estadoAnimoBD={estadoAnimo:"cabreado"}):"VERY_LIKELY"==e||"LIKELY"==e?(l.estadoAnimo="¡SORPRENDIDO!",l.estadoAnimoBD={estadoAnimo:"sorprendio"}):(l.estadoAnimo="¡NORMAL!",l.estadoAnimoBD={estadoAnimo:"normal"}),l.foto="./assets/imgs/foto.svg",l.database.guardarEstadoAnimo(l.global.usuario.id,l.estadoAnimoBD)}else l.errorFoto=!0}))},l.prototype.ionViewDidLeave=function(){this.estadoAnimo=""},l.prototype.ionViewWillUnload=function(){this.observable.unsubscribe()},l}(),c=function(){return function(){}}(),d=u(274),_=u(275),b=u(276),f=u(277),m=u(278),g=u(279),p=u(280),h=u(281),k=u(282),A=u(153),Y=u(2),v=u(6),Z=u(435),C=u(50),L=u(11),j=u(27),y=u(436),E=u(150),D=u(68),I=u(429),x=u(28),z=u(5),F=u(12),R=u(44),T=u(17),q=u(158),B=u(159),K=u(157),O=u(51),V=u(26),w=u(52),P=a.X({encapsulation:2,styles:[],data:{}}),S=a.V("page-camara",r,function(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"page-camara",[],null,null,null,t,P)),a.Y(1,49152,null,0,r,[e.a,s.a,i.a],null,null)],null,null)},{},{},[]),N=u(21),M=u(152),X=u(45);u.d(n,"CamaraPageModuleNgFactory",function(){return U});var U=a.W(c,[],function(l){return a._10([a._11(512,a.i,a.S,[[8,[d.a,_.a,b.a,f.a,m.a,g.a,p.a,h.a,k.a,S]],[3,a.i],a.s]),a._11(4608,T.k,T.j,[a.r,[2,T.s]]),a._11(4608,N.o,N.o,[]),a._11(4608,N.d,N.d,[]),a._11(512,T.b,T.b,[]),a._11(512,N.m,N.m,[]),a._11(512,N.e,N.e,[]),a._11(512,N.l,N.l,[]),a._11(512,M.a,M.a,[]),a._11(512,M.b,M.b,[]),a._11(512,c,c,[]),a._11(256,X.a,r,[])])})},429:function(l,n,u){"use strict";function o(l){return t._19(2,[t._16(402653184,1,{_fixedContent:0}),t._16(402653184,2,{_scrollContent:0}),(l()(),t.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t._12(null,0),(l()(),t.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t._12(null,1),t._12(null,2)],null,null)}u.d(n,"a",function(){return a}),n.b=o;var t=u(0),a=(u(28),u(2),u(5),u(12),u(44),u(6),u(27),t.X({encapsulation:2,styles:[],data:{}}))},435:function(l,n,u){"use strict";function o(l){return t._19(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.backButtonClick(u)&&o}return o},e.b,e.a)),t.Y(3,278528,null,0,a.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(4,1097728,null,0,s.a,[[8,"bar-button"],i.a,t.j,t.z],null,null),(l()(),t.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(6,278528,null,0,a.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(7,147456,null,0,r.a,[i.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t.Y(9,278528,null,0,a.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._18(10,null,["",""])),t._12(null,0),t._12(null,1),t._12(null,2),(l()(),t.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t.Y(15,278528,null,0,a.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode);l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb);l(n,5,0,t._13(n,7)._hidden);l(n,10,0,u._backText)})}u.d(n,"a",function(){return c}),n.b=o;var t=u(0),a=u(17),e=u(51),s=u(26),i=u(2),r=u(52),c=(u(50),u(6),u(27),t.X({encapsulation:2,styles:[],data:{}}))},436:function(l,n,u){"use strict";function o(l){return t._19(2,[(l()(),t.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return e}),n.b=o;var t=u(0),a=u(17),e=(u(150),u(2),u(68),u(50),t.X({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> master
