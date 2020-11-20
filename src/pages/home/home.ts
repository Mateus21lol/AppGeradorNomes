import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NicknamesPage } from '../nicknames/nicknames';
import { NomesfantasiososPage } from '../nomesfantasiosos/nomesfantasiosos';
import { NomesreaisPage } from '../nomesreais/nomesreais';

import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform) {

  }

  ionViewDidLoad() {

  }



  nomesReais() {
    this.navCtrl.push(NomesreaisPage);
  }


  nomesFantasiosos() {
    this.navCtrl.push(NomesfantasiososPage);
  }

  nomesNicknames() {
    this.navCtrl.push(NicknamesPage);
  }
}
