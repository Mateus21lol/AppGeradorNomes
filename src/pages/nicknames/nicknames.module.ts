import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NicknamesPage } from './nicknames';

@NgModule({
  declarations: [
    NicknamesPage,
  ],
  imports: [
    IonicPageModule.forChild(NicknamesPage),
  ],
})
export class NicknamesPageModule {}
