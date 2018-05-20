// Aqui se define el componente inicial que arranca, es como el main de JAVA

import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FCM, NotificationData } from '@ionic-native/fcm';

import { GlobalProvider } from '../providers/global/global';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
	rootPage:any = 'LoginPage';

	private _title_default : string = "Eburnout";
	private _mge_default : string = "Ha recibido una notificación";

	constructor(
		private alertCtrl: AlertController,
		platform: Platform,
		statusBar: StatusBar, 
		public splashScreen: SplashScreen,
		private _fcm: FCM,
		public global: GlobalProvider,
	) {

		var self = this;

		platform.ready().then(() => {

			statusBar.styleDefault();

			setTimeout(()=>{
				this.splashScreen.hide();
			},10000);

			this._fcm.getToken()
				.then( ( token: string ) => {

					self.global.token_message = token;
					console.log("token is ",token);

				}
			).catch( error => {
				console.log(error);
			});

			this._fcm.onTokenRefresh().subscribe(
				(token:string)=> {
					self.global.token_message = token;
					console.log("Nuevo token",token);

				}, error => console.log(error)
			);

			this._fcm.onNotification().subscribe(
				(data:NotificationData)=>{

					if(data.wasTapped){
						console.log("Recibido en backgroud",JSON.stringify(data));
					}else{
						console.log("Recibido en foreground",JSON.stringify(data));

						var title = data.title != undefined ? data.title : this._title_default;
						var message = data.body != undefined ? data.body : this._mge_default;

						let alert = this.alertCtrl.create({
	        				title: title,
	        				message: message,
	        				buttons: [
	            				{
	                				text: 'Ok',
	                				role: 'cancelar'
	            				}
	        				]
	    				});
	                	alert.present();
					}

				}, (error) => {

					console.log("Error ",error);


				}
			);
		});
	}

}

