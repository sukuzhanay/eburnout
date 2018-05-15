import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { GlobalProvider } from '../../providers/global/global';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { ConsentUserService } from '../../providers/database/consent-user.service';


import { Device } from '@ionic-native/device';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    formulario: { email: string, password: string };
    loading: any;
    observable: any;

    private _id : number = 0;

    private _uuid:any;
  

    constructor(
        public navCtrl: NavController,
        public fireAuth: AngularFireAuth,
        public toastCtrl: ToastController,
        public global: GlobalProvider,
        public database: DatabaseProvider,
        public loadingCtrl: LoadingController,
        private consentUserService: ConsentUserService,
        private device: Device
    ) {
    
        this.formulario = { email: '', password: '' };

    }

  
    ionViewDidLoad() {
        
        this._onInit();
  
    }

    
    private _onInit(){

        var self = this;

        this._getMyIDDevice().then((uuid) => {

            self._uuid = uuid;

        }, (error) => {
            console.log(error);
        });

    }


    private _getMyIDDevice(): Promise<any> {

        var self = this;

        return new Promise(function (resolve, reject) {

            resolve(self.device.uuid);

        });


    }


    /* LOGIN FIREBASE */
    login() {


        this.loading = this.loadingCtrl.create({
            content: 'Cargando'
        });
    
        this.loading.present().then(() => {

            this.toast(this._uuid);

            this.fireAuth.auth.signInWithEmailAndPassword(this.formulario.email, this.formulario.password)
                .then(resultado => {
                    this.observable = Observable.combineLatest(
                    this.database.preguntas(), this.database.recomendaciones(),
            this.database.usuarioRegistradoBD(resultado.uid), this.database.encuestasUltimas(resultado.uid),
            this.database.idClientFitBit(this.formulario.email),
            this.consentUserService.getConsentUser(this.formulario.email)
            ).subscribe(resultados => {

              this.global.questions = resultados[0];
              this.global.recommendations = resultados[1];
              if (resultados[2] == null) {

                for (let llavesFitBit of resultados[4]) {
                  this.global.client_id = llavesFitBit["code"];
                  this.global.client_secret = llavesFitBit["client_secret"];
                }

                if(!resultados[5].length){
                  this.navCtrl.setRoot('ConsentimientoPage',{email:this.formulario.email, to: "register", params:{ idUsuario: resultado.uid, email: this.formulario.email, password: this.formulario.password }});
                }else{
                  this.navCtrl.setRoot('RegistroPage', { idUsuario: resultado.uid, email: this.formulario.email, password: this.formulario.password });
                }

                this.loading.dismiss();
              } else {
                /*var dato = this._cipher(this.formulario.password,'encrypt');
                if( this._id ){
                    this._update(this.formulario.email, dato, this._id);
                }else{
                    this._create(this.formulario.email, dato);
                }*/


                this.global.usuario = resultados[2];
                this.global.resultadoPreguntas = this.global.usuario.ultimaencuesta;
                for (let resultadoPreguntas of resultados[3]) {
                  var encuesta: any = resultadoPreguntas;
                  this.global.resultadosPreguntas.push(encuesta.encuesta);
                }
                for (let llavesFitBit of resultados[4]) {
                  this.global.client_id = llavesFitBit["code"];
                  this.global.client_secret = llavesFitBit["client_secret"];
                }

                if(!resultados[5].length){
                  this.navCtrl.setRoot('ConsentimientoPage',{email:this.formulario.email});
                }else{
                  this.navCtrl.setRoot('TabGeneralPage');
                }
                this.loading.dismiss();
              }
			  
            });
        })
        .catch(error => {
          var mensaje: string = '';
          error.code == 'auth/user-not-found' || error.code == 'auth/invalid-email' ? mensaje = 'Usuario no válido' : mensaje = 'Contraseña no válida';
          this.loading.dismiss();
          this.toast(mensaje);
        });
    });
  }
  /* FIN LOGIN FIREBASE */

  /* TOAST MENSAJE LOGIN ERROR */
  toast(mensaje: string) {
    let toastMensaje = this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'bottom',
      dismissOnPageChange: true
    });
    toastMensaje.present();
  }
  /* FIN TOAST MENSAJE LOGIN ERROR */

  ionViewWillUnload() {
    this.observable.unsubscribe();
  }

}
