import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

import { ConsentUserService } from '../../providers/database/consent-user.service';
import { Consent } from './../../models/consent.model';


// Componente de tipo pagina @IonicPage
@IonicPage()
@Component({
  selector: 'page-consentimiento',
  templateUrl: 'consentimiento.html',
})

// Export va como modulo, parecido a Var global
export class ConsentimientoPage {
  
    mensaje:string = "";
    checkAcepto;

    consent : Consent = {
        email: "",
        consent: 0,
    };

    to:string="";
    params={};

    // Este es el main
    constructor(
        public global: GlobalProvider,
        public NavControl:NavController,
        public navParams: NavParams,
        private consentUserService: ConsentUserService
    ) {
    // Main  
    }
  
    // Cuando entras a la  pag / modulo y antes de cargarla. 
    ionViewWillEnter() {
        // metodo que vamos a usar para mostrar msg de texto enb panatalla
        this.ponerTextoConsentimiento();
    }

    ionViewDidLoad() {

        this.consent.email = this.navParams.get('email');
        if( this.navParams.get('to') != undefined ){
            this.to = this.navParams.get('to');
            this.params = this.navParams.get('params');
        }


    }

    // Solo estamos cargando la variable mensaje
    // AL FINAL SE CAMBIO A HTML PARA DARLE FORMATO ESPECIAL DE PÁRRAFO
    ponerTextoConsentimiento() {
        this.mensaje= '';    
    }

    ToAccept(){

        if(this.checkAcepto){

            this.consent.consent = 1;

            this.consentUserService.addConsent(this.consent).then(ref => {
            
                if( this.to!= ""){
                    this.NavControl.setRoot("RegistroPage", this.params);
                }else{
                    this.NavControl.setRoot("TabGeneralPage");
                }
                
            });

        }
  
    }

}
