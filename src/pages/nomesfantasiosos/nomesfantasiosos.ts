import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NomesfantasiososfemininosPage } from '../nomesfantasiososfemininos/nomesfantasiososfemininos';
import { NomesfantasiososmasculinosPage } from '../nomesfantasiososmasculinos/nomesfantasiososmasculinos';

/**
 * Generated class for the NomesfantasiososPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomesfantasiosos',
  templateUrl: 'nomesfantasiosos.html',
})
export class NomesfantasiososPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomesfantasiososPage');
  }

  nomesFantasiososMasculinos() {
    this.navCtrl.push(NomesfantasiososmasculinosPage);
  }

  nomesFantasiososFemininos() {
    this.navCtrl.push(NomesfantasiososfemininosPage);
  }


}
