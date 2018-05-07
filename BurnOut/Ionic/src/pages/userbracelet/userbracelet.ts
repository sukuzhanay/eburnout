import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
/*import { Profile } from './../../models/profile.model';*/
import { ProfileListService } from '../../providers/database/profile-list.service';

import { Bracelet } from './../../models/bracelet.model';
import { BraceletListService } from '../../providers/database/bracelet-list.service';

import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-userbracelet',
  templateUrl: 'userbracelet.html',
})
export class UserbraceletPage {


	//profileList: Observable<Profile[]>;
    braceletList: Observable<Bracelet[]>;

    profileData: Observable<any>;


	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public evts: Events,
        private braceletListService: BraceletListService,
        private profileListService: ProfileListService,
        private fire:AngularFireAuth,private db :AngularFireDatabase
	){


		/*this.profileList = this.profileListService.getProfileList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );*/
        this.braceletList = this.braceletListService.getBraceletList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );


        /*this.profileData = this.fire.authState.subscribe(auth =>{
            this.db.list(`profile/`).snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
            );
     
        });*/


        this.profileData = this.profileListService.getProfileList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );

        console.log(this.profileData);
        

	}


    returnParent(){
        this.navCtrl.setRoot("ProfilePage");
    }

  


}
