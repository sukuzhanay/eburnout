import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PersonalData } from './../../models/personalData.model';
import { GlobalProvider } from '../../providers/global/global';


@IonicPage()
@Component({
  selector: 'page-personaldata',
  templateUrl: 'personaldata.html',
})
export class PersonaldataPage {

	personalList: PersonalData;

	admin_emails : Array<string> = [];

	is_admin: boolean = false;
	

	constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		public global: GlobalProvider
  	) {

		this.admin_emails.push('mti.jgaytan@gmail.com');
		this.admin_emails.push('sukuzhanay@gmail.com');

  		 this.personalList = new PersonalData(
  		 	this.global.usuario.id,
    		this.global.usuario.altura,
		    this.global.usuario.anosresidente,
		    this.global.usuario.edad,
		    this.global.usuario.ejerciciofisico,
		    this.global.usuario.email,
		    this.global.usuario.especialidad,
		    this.global.usuario.estadocivil,
		    this.global.usuario.estudias,
		    this.global.usuario.hijos,
		    this.global.usuario.lectura,
		    this.global.usuario.musica,
		    this.global.usuario.peso,
		    this.global.usuario.salessocialmente,
		    this.global.usuario.sexo,
		    this.global.usuario.tiempoplazaactual,
		    this.global.usuario.tiempovidalaboral,
		    this.global.usuario.tipocontrato,
		    this.global.usuario.tipotrabajo,
		    this.global.usuario.viajas
  		);
  	}

  	returnParent(){
  		this.navCtrl.setRoot("ProfilePage");
	}
	  

	private _ami_admin(){

		for (var i = 0; i < this.admin_emails.length; i++)
			if(this.global.usuario.email == this.admin_emails[i]){
				this.is_admin = true;
				break;
			}
		
	}

}
