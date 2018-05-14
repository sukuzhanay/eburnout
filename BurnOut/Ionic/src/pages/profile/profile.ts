import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


	admin_emails : Array<string> = [];

	is_admin: boolean = false;

	

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private _global: GlobalProvider
	){

		this.admin_emails.push('mti.jgaytan@gmail.com');
		this.admin_emails.push('sukuzhanay@gmail.com');

		this._ami_admin();

	}

	private _ami_admin(){

		for (var i = 0; i < this.admin_emails.length; i++)
			if(this._global.usuario.email == this.admin_emails[i]){
				this.is_admin = true;
				break;
			}
		
	}


	toPersonalData(){
		this.navCtrl.setRoot('PersonaldataPage');
	}

	toAdminBracelet(){
		this.navCtrl.setRoot('AdminbraceletPage');
	}


	toUserBracelet(){
		this.navCtrl.setRoot('UserbraceletPage');
	}

	


  

}
