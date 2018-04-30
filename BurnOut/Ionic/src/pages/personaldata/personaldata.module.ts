import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonaldataPage } from './personaldata';

@NgModule({
  declarations: [
    PersonaldataPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonaldataPage),
  ],
})
export class PersonaldataPageModule {}
