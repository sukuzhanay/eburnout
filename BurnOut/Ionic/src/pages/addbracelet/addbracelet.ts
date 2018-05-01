import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Bracelet } from './../../models/bracelet.model';
import { BraceletListService } from '../../providers/database/bracelet-list.service';

@IonicPage()
@Component({
  selector: 'page-addbracelet',
  templateUrl: 'addbracelet.html',
})
export class AddbraceletPage {

    ctrls_add: FormGroup;

    bracelet : Bracelet = {
        code: "",
        serial: ""
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private braceletListService: BraceletListService,
        public formBuilder: FormBuilder
    ) {

        this.ctrls_add = this.formBuilder.group({
            code: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
            serial: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        });

    }

    addBracelet(bracelet: Bracelet) {

        if(this.ctrls_add.valid){
            this.bracelet.code = this.ctrls_add.controls.code.value;
            this.bracelet.serial = this.ctrls_add.controls.serial.value;

            this.braceletListService.addBracelet(bracelet).then(ref => {
                this.navCtrl.setRoot('AdminbraceletPage');
            });
        }
        
    }

    toListBracelet() {
    	
    	this.navCtrl.setRoot('AdminbraceletPage');
    	
    }

}
