import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { User } from './../../models/user.model';
import { ProfileListService } from '../../providers/database/profile-list.service';


@IonicPage()
@Component({
  selector: 'page-userbracelet',
  templateUrl: 'userbracelet.html',
})
export class UserbraceletPage {


	profileList: Observable<User[]>;
    

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public evts: Events,
        private profileListService: ProfileListService
	){


		this.profileList = this.profileListService.getProfileList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );
        
	}


    returnParent(){
        this.navCtrl.setRoot("ProfilePage");
    }

  


}
