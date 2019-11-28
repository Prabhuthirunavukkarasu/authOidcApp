import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoorsPage } from './doors';

@NgModule({
  declarations: [
    DoorsPage,
  ],
  imports: [
    IonicPageModule.forChild(DoorsPage),
  ],
})
export class DoorsPageModule {}
