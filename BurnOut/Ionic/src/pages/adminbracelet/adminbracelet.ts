import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Bracelet } from './../../models/bracelet.model';
import { BraceletListService } from '../../providers/database/bracelet-list.service';


@IonicPage()
@Component({
  selector: 'page-adminbracelet',
  templateUrl: 'adminbracelet.html',
})
export class AdminbraceletPage {

    braceletList: Observable<Bracelet[]>

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public evts: Events,
        private braceletListService: BraceletListService
		) {


        this.braceletList = this.braceletListService.getBraceletList()
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
