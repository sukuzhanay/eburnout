import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../models/user.model';
import { ProfileListService } from '../../providers/database/profile-list.service';

import { Observable } from 'rxjs/Observable';
import { Bracelet } from './../../models/bracelet.model';
import { BraceletListService } from '../../providers/database/bracelet-list.service';

import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
})
export class EdituserPage {

    ctrls_edit: FormGroup;
    
    user : User = {
        email: "",
        name: "",
        bracelet_id: "",
        code: ""
    };

    braceletList: Observable<Bracelet[]>;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private profileListService: ProfileListService,
        public formBuilder: FormBuilder,
        private braceletListService: BraceletListService,
        private alertCtrl: AlertController
    ) {
        
        this.ctrls_edit = this.formBuilder.group({
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
    }


    ionViewDidLoad() {
        this.user = this.navParams.get('profile');

        this.ctrls_edit.controls.email.setValue( this.user.email );
        this.ctrls_edit.controls.name.setValue( this.user.name );
        this.ctrls_edit.controls.braceletsel.setValue( this.user.code );


    }

    updateUser(user: User) {
        
        if(this.ctrls_edit.valid){
            
            this.user.email = this.ctrls_edit.controls.email.value;
            this.user.name = this.ctrls_edit.controls.name.value;
            this.user.code = this.ctrls_edit.controls.braceletsel.value;

            var self = this;
            
            Observable.combineLatest(this.braceletListService.getBraceletList().valueChanges())
                .subscribe(bracelets => {

                    this.user.bracelet_id = "";
                    
                    for (var i = 0; i < bracelets.length; i++) {
                        for (var j = 0; j < bracelets[i].length; j++) {
                            if(bracelets[i][j].code == this.user.code){
                                if(bracelets[i][j].key != undefined){
                                    this.user.bracelet_id = bracelets[i][j].key.toString();
                                }
                            }
                        }
                    }

                    self.profileListService.updateUser(self.user).then(ref => {
                        self.navCtrl.setRoot('UserbraceletPage');
                    });

                }

            );

        }
        
    }
        
    removeUser(user: User) {

        var self = this;
        let alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Deseas eliminar el registro?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancelar'
                },
                {
                    text: 'Sí',
                    handler: () => {
                        self.profileListService.removeUser(user).then(() => {
                            self.navCtrl.setRoot('UserbraceletPage');
                        });
                    }
                }
            ]
        });
        
        alert.present();

    }
        
    toListUser() {

        this.navCtrl.setRoot('UserbraceletPage');

    }

}
