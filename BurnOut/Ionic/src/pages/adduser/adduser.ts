import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../models/user.model';
import { ProfileListService } from '../../providers/database/profile-list.service';

import { Observable } from 'rxjs/Observable';
import { Bracelet } from './../../models/bracelet.model';
import { BraceletListService } from '../../providers/database/bracelet-list.service';

@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {


	ctrls_add: FormGroup;

    user : User = {
        email: "",
        name: "",
        bracelet_id: "",
        code: "",
        client_secret: ""
    };

    braceletList: Observable<Bracelet[]>;


    bracelets: Array<Bracelet> = [];


	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private profileListService: ProfileListService,
        public formBuilder: FormBuilder,
        private braceletListService: BraceletListService
	) {

        this.ctrls_add = this.formBuilder.group({
            email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
            name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
            braceletsel: ['', Validators.compose([Validators.required])]
        });

        this.braceletList = this.braceletListService.getBraceletList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );

        this.braceletList.forEach( item => {
            this.bracelets = item;
        });

	}

	addUser() {

        if(this.ctrls_add.valid){

            this.user.email = this.ctrls_add.controls.email.value;
            this.user.name = this.ctrls_add.controls.name.value;
            this.user.code = this.ctrls_add.controls.braceletsel.value;

            this.user.bracelet_id = "";
            this.user.client_secret = "";
                    
            for (var i = 0; i < this.bracelets.length; i++) {
                if(this.bracelets[i].code == this.user.code){
                    this.user.bracelet_id = this.bracelets[i].key.toString();
                    this.user.client_secret = this.bracelets[i].client_secret.toString();
                }
            }

            this.profileListService.addUser(this.user).then(ref => {
                this.navCtrl.setRoot('UserbraceletPage');
            });

        }
        
    }

    

    toListUser() {
    	
    	this.navCtrl.setRoot('UserbraceletPage');
    	
    }
 

}
