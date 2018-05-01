import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Bracelet } from './../../models/bracelet.model';
import { BraceletListService } from '../../providers/database/bracelet-list.service';

@IonicPage()
@Component({
  selector: 'page-editbracelet',
  templateUrl: 'editbracelet.html',
})
export class EditbraceletPage {

    ctrls_edit: FormGroup;

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

        this.ctrls_edit = this.formBuilder.group({
            code: [this.bracelet.code, Validators.compose([Validators.maxLength(5), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
            serial: [this.bracelet.serial, Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        });
        
    }

    ionViewDidLoad() {
        this.bracelet = this.navParams.get('bracelet');

        this.ctrls_edit.controls.code.setValue( this.bracelet.code );
        this.ctrls_edit.controls.serial.setValue( this.bracelet.serial );

    }

    updateBracelet(bracelet: Bracelet) {

         if(this.ctrls_edit.valid){
            this.bracelet.code = this.ctrls_edit.controls.code.value;
            this.bracelet.serial = this.ctrls_edit.controls.serial.value;

            this.braceletListService.updateBracelet(bracelet).then(() => {
        		this.navCtrl.setRoot('AdminbraceletPage');
            });
        }

    }

    removeBracelet(bracelet: Bracelet) {
        this.braceletListService.removeBracelet(bracelet).then(() => {
        		this.navCtrl.setRoot('AdminbraceletPage');
        });
    }

    toListBracelet() {

        this.navCtrl.setRoot('AdminbraceletPage');

    }

}
