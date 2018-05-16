import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FCM, NotificationData } from '@ionic-native/fcm';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
	rootPage:any = 'LoginPage';

	constructor(
		private alertCtrl: AlertController,
		platform: Platform,
		statusBar: StatusBar, 
		public splashScreen: SplashScreen,
		private _fcm: FCM) {

		platform.ready().then(() => {

			statusBar.styleDefault();

			setTimeout(()=>{
				this.splashScreen.hide();
			},10000);

			this._fcm.getToken()
				.then( ( token: string ) => {
					console.log("token is ",token);
				}
			).catch( error => {
				console.log(error);
			});

			this._fcm.onTokenRefresh().subscribe(
				(token:string)=> console.log("Nuevo token",token)
				, error => console.log(error)
			);

			this._fcm.onNotification().subscribe(
				(data:NotificationData)=>{

					if(data.wasTapped){
						console.log("Recibido en backgroud",JSON.stringify(data));
					}else{
						console.log("Recibido en foreground",JSON.stringify(data));
						let alert = this.alertCtrl.create({
	        				title: 'Eburnout',
	        				message: JSON.stringify(data),
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

