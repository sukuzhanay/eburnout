import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Device } from '@ionic-native/device';
import { AngularFireAuth } from 'angularfire2/auth';

import { Record_has_logged } from '../../models/record-has-logged.model';

import { GlobalProvider } from '../global/global';


@Injectable()
export class AutomaticLoginService {

 	private _uuid:any;

	private _user : string = "mti.jgaytan@gmail.com";
	private _pwd : string = "joga321";

	private _logged_user: Record_has_logged = {
		email: "",
    	created_at: "",
    	latest_logged: "",
    	uuid: "",
    	pwd: "",
    	token_message: ""
	}

	private _uuid_tmp : string = '70a0353498a27a34';
 
    constructor(
    	private db: AngularFireDatabase,
    	private device: Device,
    	public fireAuth: AngularFireAuth,
		public global: GlobalProvider		
	){


	}


	public recordLogin(): Promise<any> {

		var self = this;

		return new Promise(function (resolve, reject) {

			self._getMyIDDevice().then((uuid) => {

				self._uuid = !uuid ? self._uuid_tmp : uuid;

				self.fireAuth.auth.signInWithEmailAndPassword(self._user, self._pwd)
					.then(resultado => {

						self._userHasLoggedBD(self._uuid).snapshotChanges()
							
							.subscribe(changes => {

								var record: Record_has_logged = { email: "", token_message: "", created_at: "", uuid: "", pwd: "", latest_logged: "" };

                            	changes.map(c => {
                            		record[c.payload.key] = c.payload.val()
                            	});

                        		self._logged_user = { email: "", token_message: "", created_at: "", uuid: "", pwd: "", latest_logged: "" };
		            		
		            			if(Object.keys(record).length){

		            				self._logged_user = record;

		            			}

		            			self.fireAuth.auth.signOut().then(value => {  })
			            		.catch(err => {
			                		console.log(err);
			                		reject(err);
			            		});

			            		resolve(self._logged_user);

		            		});

					})
		            .catch(error => {
						console.log(error);
						reject(error);
					});

			}, (error) => {
	            console.log(error);
	            reject(error);
	        });

	    });

	}


	_userHasLoggedBD(device: string) {
    	return this.db.list<Record_has_logged>('/has_logged/' + device);
  	}

  	addLoggedUser(record) {

  		var date = new Date();
  		record["created_at"] = date.toISOString();
  		record["uuid"] = this._uuid;

  		record["token_message"] = this.global.token_message;

        return this.db.database.ref('/has_logged/' + this._uuid).set(record);

    }

    updateLoggedUser(record: Record_has_logged) {
    	var date = new Date();
  		record.latest_logged = date.toISOString();
  		record.token_message = this.global.token_message;

        return this.db.database.ref('/has_logged/' + this._uuid).set(record);
    }
 
   


    private _getMyIDDevice(): Promise<any> {

        var self = this;

        return new Promise(function (resolve, reject) {

            resolve(self.device.uuid);

        });


    }
  

    



}
 