import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdituserPage } from './edituser';

@NgModule({
  declarations: [
    EdituserPage,
  ],
  imports: [
    IonicPageModule.forChild(EdituserPage),
  ],
})
export class EdituserPageModule {}
